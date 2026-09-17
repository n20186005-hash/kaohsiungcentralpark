/**
 * 園區即時天氣與多日預報。
 *
 * 本模組只在 Astro 元件的 frontmatter（伺服器端／建置時）執行，瀏覽器不會發出請求，
 * 取得的結果會在伺服器記憶體中暫存 15 分鐘，避免重複取同一筆觀測資料。
 * 取不到資料時回傳 null，介面會自動改為顯示氣候常年統計（見 data/seasons.ts）。
 */

const ENDPOINT = 'https://api.open-meteo.com/v1/forecast';
const TIMEZONE = 'Asia/Taipei';
const CACHE_TTL_MS = 15 * 60 * 1000;
const CACHE_KEY = '__centralParkWeatherCache__';

export interface WeatherNow {
  temp: number;
  feelsLike: number;
  humidity: number;
  wind: number;
  uv: number;
  precip: number;
  isDay: boolean;
  code: number;
  label: string;
  icon: string;
  tone: string;
}

export interface WeatherDay {
  /** ISO 日期，例：2026-09-17 */
  date: string;
  label: string;
  weekday: string;
  max: number;
  min: number;
  precipSum: number;
  precipProb: number;
  uvMax: number;
  windMax: number;
  code: number;
  condition: string;
  icon: string;
  tone: string;
}

export interface WeatherSnapshot {
  /** 更新時間（台北時間） */
  updatedAt: string;
  now: WeatherNow;
  days: WeatherDay[];
  sunrise: string;
  sunset: string;
  /** 今日是否建議攜帶雨具 */
  umbrellaToday: boolean;
  advice: string[];
}

interface OpenMeteoResponse {
  current?: Record<string, number>;
  daily?: Record<string, (number | string)[]>;
}

interface CacheEntry {
  expiresAt: number;
  payload: WeatherSnapshot | null;
}

const conditions: Record<number, { label: string; icon: string; tone: string }> = {
  0: { label: '晴朗', icon: '☀️', tone: 'bg-amber-50 text-amber-700' },
  1: { label: '大致晴朗', icon: '🌤️', tone: 'bg-amber-50 text-amber-700' },
  2: { label: '多雲時晴', icon: '⛅', tone: 'bg-stone-100 text-stone-700' },
  3: { label: '陰天', icon: '☁️', tone: 'bg-stone-100 text-stone-700' },
  45: { label: '有霧', icon: '🌫️', tone: 'bg-stone-100 text-stone-600' },
  48: { label: '霧凇', icon: '🌫️', tone: 'bg-stone-100 text-stone-600' },
  51: { label: '毛毛雨', icon: '🌦️', tone: 'bg-sky-50 text-sky-700' },
  53: { label: '綿綿細雨', icon: '🌦️', tone: 'bg-sky-50 text-sky-700' },
  55: { label: '較密細雨', icon: '🌧️', tone: 'bg-sky-50 text-sky-700' },
  56: { label: '凍雨', icon: '🌧️', tone: 'bg-sky-50 text-sky-700' },
  57: { label: '強凍雨', icon: '🌧️', tone: 'bg-sky-50 text-sky-700' },
  61: { label: '小雨', icon: '🌧️', tone: 'bg-sky-50 text-sky-700' },
  63: { label: '陣雨', icon: '🌧️', tone: 'bg-sky-50 text-sky-700' },
  65: { label: '大雨', icon: '🌧️', tone: 'bg-blue-50 text-blue-700' },
  66: { label: '凍結性小雨', icon: '🌧️', tone: 'bg-sky-50 text-sky-700' },
  67: { label: '凍結性大雨', icon: '🌧️', tone: 'bg-blue-50 text-blue-700' },
  71: { label: '小雪', icon: '🌨️', tone: 'bg-sky-50 text-sky-700' },
  73: { label: '中雪', icon: '🌨️', tone: 'bg-sky-50 text-sky-700' },
  75: { label: '大雪', icon: '❄️', tone: 'bg-sky-50 text-sky-700' },
  77: { label: '米雪', icon: '❄️', tone: 'bg-sky-50 text-sky-700' },
  80: { label: '短暫陣雨', icon: '🌦️', tone: 'bg-sky-50 text-sky-700' },
  81: { label: '強陣雨', icon: '🌧️', tone: 'bg-blue-50 text-blue-700' },
  82: { label: '暴雨', icon: '⛈️', tone: 'bg-blue-50 text-blue-800' },
  85: { label: '陣雪', icon: '🌨️', tone: 'bg-sky-50 text-sky-700' },
  86: { label: '強陣雪', icon: '❄️', tone: 'bg-sky-50 text-sky-700' },
  95: { label: '雷陣雨', icon: '⛈️', tone: 'bg-indigo-50 text-indigo-700' },
  96: { label: '雷陣雨伴冰雹', icon: '⛈️', tone: 'bg-indigo-50 text-indigo-700' },
  99: { label: '強雷陣雨伴冰雹', icon: '⛈️', tone: 'bg-indigo-50 text-indigo-800' },
};

function describe(code: number) {
  return conditions[code] ?? { label: '天氣變化', icon: '🌤️', tone: 'bg-stone-100 text-stone-700' };
}

function numberAt(list: (number | string)[] | undefined, index: number): number {
  const value = list?.[index];
  return typeof value === 'number' ? value : Number(value ?? 0);
}

function stringAt(list: (number | string)[] | undefined, index: number): string {
  return String(list?.[index] ?? '');
}

function readCache(): CacheEntry | undefined {
  return (globalThis as Record<string, CacheEntry | undefined>)[CACHE_KEY];
}

function writeCache(entry: CacheEntry) {
  (globalThis as Record<string, CacheEntry | undefined>)[CACHE_KEY] = entry;
}

function buildRequestUrl(lat: number, lng: number) {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lng),
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m,uv_index',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,uv_index_max,wind_speed_10m_max,sunrise,sunset',
    timezone: TIMEZONE,
    forecast_days: '7',
  });
  return `${ENDPOINT}?${params.toString()}`;
}

function buildSnapshot(raw: OpenMeteoResponse): WeatherSnapshot | null {
  const daily = raw.daily;
  const dates = daily?.time as string[] | undefined;
  if (!raw.current || !dates?.length) return null;

  const nowCode = Number(raw.current.weather_code ?? 0);
  const dayCodes = (daily?.weather_code as number[]) ?? [];
  const sunrise = stringAt(daily?.sunrise, 0).slice(11, 16);
  const sunset = stringAt(daily?.sunset, 0).slice(11, 16);

  const weekdayFormatter = new Intl.DateTimeFormat('zh-TW', {
    timeZone: TIMEZONE,
    weekday: 'short',
  });
  const dateFormatter = new Intl.DateTimeFormat('zh-TW', {
    timeZone: TIMEZONE,
    month: 'numeric',
    day: 'numeric',
  });
  const timeFormatter = new Intl.DateTimeFormat('zh-TW', {
    timeZone: TIMEZONE,
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  const days: WeatherDay[] = dates.map((iso, index) => {
    const code = Number(dayCodes[index] ?? 0);
    const info = describe(code);
    const date = new Date(`${iso}T12:00:00+08:00`);
    return {
      date: iso,
      label: dateFormatter.format(date),
      weekday: weekdayFormatter.format(date),
      max: Number(numberAt(daily?.temperature_2m_max, index).toFixed(0)),
      min: Number(numberAt(daily?.temperature_2m_min, index).toFixed(0)),
      precipSum: Number(numberAt(daily?.precipitation_sum, index).toFixed(1)),
      precipProb: Number(numberAt(daily?.precipitation_probability_max, index).toFixed(0)),
      uvMax: Number(numberAt(daily?.uv_index_max, index).toFixed(0)),
      windMax: Number(numberAt(daily?.wind_speed_10m_max, index).toFixed(0)),
      code,
      condition: info.label,
      icon: info.icon,
      tone: info.tone,
    };
  });

  const now: WeatherNow = {
    temp: Number((raw.current.temperature_2m ?? 0).toFixed(0)),
    feelsLike: Number((raw.current.apparent_temperature ?? 0).toFixed(0)),
    humidity: Number((raw.current.relative_humidity_2m ?? 0).toFixed(0)),
    wind: Number((raw.current.wind_speed_10m ?? 0).toFixed(0)),
    uv: Number((raw.current.uv_index ?? 0).toFixed(0)),
    precip: Number((raw.current.precipitation ?? 0).toFixed(1)),
    isDay: Number(raw.current.is_day ?? 1) === 1,
    code: nowCode,
    label: describe(nowCode).label,
    icon: describe(nowCode).icon,
    tone: describe(nowCode).tone,
  };

  const umbrellaToday = days[0].precipProb >= 50 || days[0].precipSum >= 2;
  const advice = buildAdvice(now, days[0], umbrellaToday);

  return {
    updatedAt: timeFormatter.format(new Date()),
    now,
    days,
    sunrise,
    sunset,
    umbrellaToday,
    advice,
  };
}

function buildAdvice(now: WeatherNow, today: WeatherDay, umbrella: boolean): string[] {
  const list: string[] = [];

  if (umbrella) {
    list.push(`今日降雨機率約 ${today.precipProb}%，出門建議攜帶雨具，並把室內備案排進行程。`);
  } else if (today.precipProb >= 25) {
    list.push(`今日降雨機率約 ${today.precipProb}%，午後留意短暫陣雨，摺疊傘放背包更安心。`);
  } else {
    list.push('今日降雨機率偏低，適合安排環湖步道與草地行程。');
  }

  if (today.max >= 33) {
    list.push(`白天高溫上看 ${today.max}°C，建議改走清晨 6–8 點與傍晚 5 點後兩段式行程，並補充水分。`);
  } else if (today.max >= 29 && today.min >= 24) {
    list.push(`高溫 ${today.max}°C、低溫 ${today.min}°C，悶熱感明顯，遮蔭步道與草地午後較舒適。`);
  } else if (today.min <= 17) {
    list.push(`清晨低溫約 ${today.min}°C，早晚溫差大，記得帶一件薄外套。`);
  } else {
    list.push(`高溫 ${today.max}°C、低溫 ${today.min}°C，是步行與長時間戶外活動的舒適區間。`);
  }

  if (today.uvMax >= 8) {
    list.push(`紫外線指數達 ${today.uvMax}，屬過量級，請戴帽、擦防曬並盡量走林蔭段。`);
  } else if (today.uvMax >= 6) {
    list.push(`紫外線指數 ${today.uvMax}，正午前後建議遮陽帽與防曬乳。`);
  }

  if (today.windMax >= 30) {
    list.push(`陣風可達 ${today.windMax} km/h，水舞表演與遮陽傘使用請留意風勢。`);
  }

  if (now.precip > 0) {
    list.push('目前測得降雨，廣場地坪濕滑，行走階梯與池畔步道請放慢腳步。');
  }

  return list;
}

export async function getWeatherSnapshot(
  lat: number,
  lng: number
): Promise<WeatherSnapshot | null> {
  const cached = readCache();
  if (cached && Date.now() < cached.expiresAt) {
    return cached.payload;
  }

  let payload: WeatherSnapshot | null = null;
  try {
    const response = await fetch(buildRequestUrl(lat, lng), {
      headers: { accept: 'application/json' },
    });
    if (response.ok) {
      payload = buildSnapshot((await response.json()) as OpenMeteoResponse);
    }
  } catch {
    payload = null;
  }

  writeCache({ expiresAt: Date.now() + CACHE_TTL_MS, payload });
  return payload;
}
