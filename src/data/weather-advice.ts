/**
 * 把原始氣象數值翻譯成「旅客可以直接照做」的建議。
 *
 * 設計原則：
 * 1. 只輸出結論，不輸出氣象術語（不說「相對濕度 75%」，改說「悶濕」）。
 * 2. 不滿足條件的項目整條不產生，畫面上就不會出現用不到的建議。
 * 3. 有風險等級時（雷雨、暴雨、強風、極端高低溫）置頂顯示，並弱化一般建議。
 * 4. 降水機率是機率不是肯定句，一律寫成「降雨機率約 X%」。
 */

import type { WeatherDay, WeatherNow } from './weather';

export type RainClass = 'none' | 'light' | 'moderate' | 'heavy' | 'thunder' | 'fog' | 'snow';

export interface WeatherAdviceItem {
  icon: string;
  text: string;
}

export interface WeatherAlertItem {
  icon: string;
  title: string;
  text: string;
  /** severe：立即影響安全的天氣，紅色置頂；warning：需要留意但不致危險，黃色補充 */
  level: 'severe' | 'warning';
}

export interface WeatherSummary {
  icon: string;
  label: string;
  text: string;
  tone: 'good' | 'notice' | 'alert';
}

export interface WeatherAdvice {
  summary: WeatherSummary;
  /** 紅色置頂：雷雨、暴雨、強風、極端高低溫等立即影響安全的天氣 */
  alerts: WeatherAlertItem[];
  /** 黃色補充：需要留意但不致危險的狀況 */
  notices: WeatherAlertItem[];
  outfit: WeatherAdviceItem[];
  plan: WeatherAdviceItem[];
  items: WeatherAdviceItem[];
}

/** 蒲福風級門檻（km/h 下限） */
const BEAUFORT_THRESHOLDS = [1, 6, 12, 20, 29, 39, 50, 62, 75, 89, 103, 118];
const BEAUFORT_LABELS = [
  '無風',
  '軟風',
  '輕風',
  '微風',
  '和風',
  '清勁風',
  '強風',
  '疾風',
  '大風',
  '烈風',
  '狂風',
  '暴風',
  '颶風',
];

export function beaufortLevel(speedKmh: number): number {
  let level = 0;
  while (level < BEAUFORT_THRESHOLDS.length && speedKmh >= BEAUFORT_THRESHOLDS[level]) {
    level += 1;
  }
  return level;
}

export function describeWind(speedKmh: number): string {
  const level = beaufortLevel(speedKmh);
  return `${level} 級${BEAUFORT_LABELS[level] ?? ''}`;
}

export function describeUv(uv: number): string {
  if (uv >= 11) return '紫外線達危險等級';
  if (uv >= 8) return '紫外線很強';
  if (uv >= 6) return '紫外線偏強';
  if (uv >= 3) return '紫外線中等';
  if (uv > 0) return '紫外線微弱';
  return '夜間無紫外線';
}

export function describeHumidity(humidity: number): string {
  if (humidity >= 85) return '很潮濕';
  if (humidity >= 75) return '悶濕';
  if (humidity >= 60) return '偏潮濕';
  if (humidity >= 45) return '舒適';
  return '偏乾爽';
}

export function describeRainChance(prob: number): string {
  if (prob >= 70) return '很可能下雨';
  if (prob >= 40) return '有機會下雨';
  if (prob >= 20) return '可能有短暫陣雨';
  return '大致不會下雨';
}

export function rainClass(code: number): RainClass {
  if ([95, 96, 99].includes(code)) return 'thunder';
  if ([71, 73, 75, 77, 85, 86].includes(code)) return 'snow';
  if ([65, 67, 81, 82].includes(code)) return 'heavy';
  if ([63, 80].includes(code)) return 'moderate';
  if ([51, 53, 55, 56, 57, 61, 66].includes(code)) return 'light';
  if ([45, 48].includes(code)) return 'fog';
  return 'none';
}

function isClear(code: number): boolean {
  return code === 0 || code === 1;
}

function isOvercast(code: number): boolean {
  return code === 3;
}

/**
 * 風險提醒：只有真的觸發條件才會產生項目，平常完全隱藏。
 * 這些判斷是依預報數值自動產生，正式警報以中央氣象署公告為準。
 */
function buildAlerts(now: WeatherNow, today: WeatherDay, dayClass: RainClass): WeatherAlertItem[] {
  const alerts: WeatherAlertItem[] = [];
  const gust = Math.max(today.gustMax, now.gust);
  const windLevel = beaufortLevel(Math.max(today.windMax, now.wind));

  if (dayClass === 'thunder' || now.code >= 95) {
    alerts.push({
      icon: '⛈️',
      title: '有雷雨，不要待在開闊草地與水邊',
      text: '園區草坪與生態池周邊缺乏遮蔽，雷雨時請移往捷運站、地下街或周邊建築物躲避，不要在大樹下停留；水舞與戶外表演可能暫停。',
      level: 'severe',
    });
  }

  if (dayClass === 'heavy' || today.precipSum >= 25) {
    alerts.push({
      icon: '🌧️',
      title: '雨勢偏強，建議改走室內行程',
      text: '步道與池畔地坪濕滑，開放式草地排水較慢，建議縮短戶外停留；開車前往請留意市區積水路段與行車視線。',
      level: 'severe',
    });
  }

  if (windLevel >= 7 || gust >= 60) {
    alerts.push({
      icon: '💨',
      title: '強風來襲，遠離臨時設施',
      text: `陣風可達 ${gust} km/h、平均風力約 ${windLevel} 級，避免在樹下、施工圍籬與臨時帳篷旁停留，遮陽傘與帽子容易被吹翻；水舞表演可能視風勢調整。`,
      level: 'severe',
    });
  }

  if (today.max >= 38 || today.feelsMax >= 42) {
    alerts.push({
      icon: '🥵',
      title: '高溫警戒，避免正午戶外活動',
      text: `白天高溫 ${today.max}°C、體感上看 ${today.feelsMax}°C，水泥與鋪面會再升溫，請避免 11–15 點長時間曝曬並持續補充水分。`,
      level: 'severe',
    });
  } else if (today.max >= 36 || today.feelsMax >= 38) {
    alerts.push({
      icon: '🥵',
      title: '高溫偏極端，注意防暑',
      text: `白天高溫 ${today.max}°C、體感上看 ${today.feelsMax}°C，建議把戶外行程壓在清晨與傍晚，正午安排室內休息。`,
      level: 'warning',
    });
  }

  if (today.min <= 10) {
    alerts.push({
      icon: '🥶',
      title: '氣溫偏低，注意保暖',
      text: `清晨低溫約 ${today.min}°C，體弱者與長輩請做好保暖，清晨與夜間行程建議縮短。`,
      level: 'warning',
    });
  }

  if (today.code === 45 || today.code === 48 || now.code === 45 || now.code === 48) {
    alerts.push({
      icon: '🌫️',
      title: '起霧，能見度較差',
      text: '水氣重、視線較差，建議先看室內行程；清晨行車請開燈並放慢車速。',
      level: 'warning',
    });
  }

  return alerts;
}

function buildOutfit(now: WeatherNow, today: WeatherDay, dayClass: RainClass): WeatherAdviceItem[] {
  const list: WeatherAdviceItem[] = [];
  const diff = today.max - today.min;
  const windLevel = beaufortLevel(Math.max(today.windMax, now.wind));

  if (today.max <= 10) {
    list.push({ icon: '🧥', text: '氣溫偏低，厚外套、圍巾與手套都派得上用場。' });
  } else if (today.max <= 18) {
    list.push({ icon: '🧥', text: '整體偏涼，長袖上衣加一件薄外套最剛好。' });
  } else if (today.max >= 32) {
    list.push({ icon: '👕', text: '高溫炎熱，以透氣排汗的輕薄衣物為主，避免深色厚重穿搭。' });
  } else if (today.max >= 29 && today.humidityMean >= 75) {
    list.push({ icon: '👕', text: '悶熱潮濕，選排汗快乾材質，棉質厚衣會黏膩不舒服。' });
  } else {
    list.push({ icon: '👕', text: '氣溫舒適，一般輕薄衣物即可，走累了也不悶。' });
  }

  if (diff > 8) {
    list.push({
      icon: '🧳',
      text: `早晚溫差約 ${diff}°C，採洋蔥式穿法，多帶一件薄外套方便穿脫。`,
    });
  }

  if (dayClass === 'thunder' || dayClass === 'heavy' || windLevel >= 5) {
    list.push({ icon: '🧥', text: '風雨較大時建議穿防水外套或雨衣，比撐傘實用也更穩。' });
  } else if (today.precipProb >= 60) {
    list.push({ icon: '🧥', text: '降雨機率高，建議穿快乾或防潑水的外套。' });
  }

  if (windLevel >= 5) {
    list.push({ icon: '👒', text: '風勢明顯，避免寬檐帽與寬鬆長裙，改以有袖上衣與好走的包頭鞋為主。' });
  }

  if (now.precip > 0 || today.precipSum >= 5) {
    list.push({ icon: '👟', text: '步道與池畔濕滑，請穿防滑好走的鞋。' });
  }

  return list;
}

function buildPlan(
  now: WeatherNow,
  today: WeatherDay,
  dayClass: RainClass,
  alerts: WeatherAlertItem[]
): WeatherAdviceItem[] {
  const list: WeatherAdviceItem[] = [];
  const hasSevere = alerts.some(alert => alert.level === 'severe');

  if (hasSevere) {
    list.push({
      icon: '🛡️',
      text: '以安全為優先：縮短戶外停留時間，行程隨時可切換到捷運站周邊的商圈、地下街與室內場館。',
    });
  }

  if (dayClass === 'thunder' || dayClass === 'heavy') {
    list.push({
      icon: '🏛️',
      text: '建議直接排室內行程：車站商圈、地下街、圖書館與文學館都是雨天備案，戶外留到雨停後再補。',
    });
  } else if (today.precipProb >= 60) {
    list.push({
      icon: '🌂',
      text: `降雨機率約 ${today.precipProb}%（不代表一定下雨），建議上午先走戶外、午後切換室內備案。`,
    });
  } else if (today.precipProb >= 35) {
    list.push({
      icon: '🌦️',
      text: '可能有短暫陣雨，行程別排太滿，隨時可以躲進捷運站或周邊商場。',
    });
  } else {
    list.push({
      icon: '🌳',
      text: '雨具大致用不上，環湖步道、草坡與自行車道都可以排進行程。',
    });
  }

  if (today.max >= 32) {
    list.push({
      icon: '🕗',
      text: '採兩段式走法：清晨 6–8 點與傍晚 5 點後出門，正午留在樹蔭步道或室內休息。',
    });
  } else if (today.max >= 29) {
    list.push({
      icon: '🌤️',
      text: '中午前後偏熱，把停留重心放在樹蔭步道與水池周邊，體感會涼一些。',
    });
  }

  if (today.uvMax >= 6 && dayClass !== 'fog') {
    list.push({
      icon: '🌿',
      text: '紫外線偏強，白天多利用連續樹冠的林蔭段移動，遮陽與降溫一次到位。',
    });
  }

  if (beaufortLevel(Math.max(today.windMax, now.wind)) >= 5) {
    list.push({
      icon: '💨',
      text: '開闊草地與池畔風勢明顯，水舞表演可能視風勢調整，請以現場公告為準。',
    });
  }

  if (isClear(today.code)) {
    list.push({
      icon: '🌇',
      text: `天色晴朗，適合拍夕陽與夜間燈光；日落時間約 ${today.sunset}，建議提前 20 分鐘到水岸邊卡位。`,
    });
  } else if (isOvercast(today.code)) {
    list.push({ icon: '📷', text: '光線柔和，沒有強烈反差，很適合拍照與長時間散步。' });
  }

  if (!now.isDay) {
    list.push({
      icon: '🌙',
      text: '入夜後照明集中在主要動線，夜間活動建議留在草坪、廣場與站體周邊。',
    });
  }

  if (hasSevere) {
    return list.slice(0, 3);
  }
  return list.slice(0, 4);
}

function buildItems(
  now: WeatherNow,
  today: WeatherDay,
  dayClass: RainClass
): WeatherAdviceItem[] {
  const list: WeatherAdviceItem[] = [];
  const windLevel = beaufortLevel(Math.max(today.windMax, now.wind));

  const wetDay = dayClass === 'thunder' || dayClass === 'heavy' || dayClass === 'light' || dayClass === 'moderate';
  if (dayClass === 'thunder' || dayClass === 'heavy') {
    list.push({
      icon: '🧥',
      text: windLevel >= 5 ? '雨衣（風大不建議撐長柄傘）' : '雨衣',
    });
  } else if (windLevel >= 6 && (wetDay || today.precipProb >= 40)) {
    list.push({ icon: '🧥', text: '防風雨衣' });
  } else if (today.precipProb >= 60 || wetDay) {
    list.push({ icon: '☂️', text: '摺疊傘' });
  } else if (today.precipProb >= 35) {
    list.push({ icon: '☂️', text: '摺疊傘（備用）' });
  }

  if (today.uvMax >= 5) {
    list.push({ icon: '🧴', text: '防曬乳' });
    list.push({ icon: '🕶️', text: '太陽眼鏡' });
  }

  if (today.uvMax >= 5 || today.max >= 30) {
    list.push({ icon: '🧢', text: '遮陽帽' });
  }

  if (today.max >= 30 || today.feelsMax >= 34) {
    list.push({ icon: '💧', text: '充足的飲用水' });
  }

  if (today.humidityMean >= 80 && today.max >= 29) {
    list.push({ icon: '🪭', text: '毛巾或小扇子' });
  }

  const diff = today.max - today.min;
  if (diff > 8 || today.max <= 18) {
    list.push({ icon: '🧥', text: '薄外套' });
  }
  if (today.max <= 10) {
    list.push({ icon: '🧣', text: '圍巾' });
  }

  if (today.code === 45 || today.code === 48) {
    list.push({ icon: '😷', text: '口罩' });
  }

  if (!now.isDay) {
    list.push({ icon: '🦟', text: '防蚊液（池畔傍晚蚊蟲較多）' });
  } else if (isClear(today.code)) {
    list.push({ icon: '📷', text: '相機或手機腳架（拍夕陽與水舞）' });
  }

  return list.slice(0, 7);
}

function buildSummary(today: WeatherDay, dayClass: RainClass, alerts: WeatherAlertItem[]): WeatherSummary {
  const rain = describeRainChance(today.precipProb);
  const base = `今日${today.condition}，${today.min}–${today.max}°C，${rain}`;
  const hasSevere = alerts.some(alert => alert.level === 'severe');

  if (hasSevere) {
    return {
      icon: '⚠️',
      label: '建議調整戶外行程',
      text: `${base}。請先看上方的風險提醒，把行程重心放到室內或等天氣穩定後再出發。`,
      tone: 'alert',
    };
  }

  if (alerts.length > 0) {
    return {
      icon: '🔎',
      label: '出門多留意這幾點',
      text: `${base}，整體仍可安排戶外行程，但請留意下方的注意事項。`,
      tone: 'notice',
    };
  }

  if (dayClass === 'heavy' || dayClass === 'thunder' || today.precipProb >= 60) {
    return {
      icon: '☔',
      label: '出門記得帶傘',
      text: `${base}，建議把雨天備案一起排進行程。`,
      tone: 'notice',
    };
  }

  if (today.max >= 33 || today.uvMax >= 8) {
    return {
      icon: '🧢',
      label: '注意防曬與補水',
      text: `${base}，白天活動請留意紫外線與補充水分。`,
      tone: 'notice',
    };
  }

  return {
    icon: '✅',
    label: '很適合安排戶外行程',
    text: `${base}，是散步、騎車與拍照的好天氣。`,
    tone: 'good',
  };
}

export function buildWeatherAdvice(now: WeatherNow, today: WeatherDay): WeatherAdvice {
  const dayClass = rainClass(today.code);
  const all = buildAlerts(now, today, dayClass);
  const alerts = all.filter(alert => alert.level === 'severe');
  const notices = all.filter(alert => alert.level === 'warning');

  return {
    summary: buildSummary(today, dayClass, all),
    alerts,
    notices,
    outfit: buildOutfit(now, today, dayClass),
    plan: buildPlan(now, today, dayClass, all),
    items: buildItems(now, today, dayClass),
  };
}

/** 未來每日的一句話提醒，讓 7 日表格也能直接看出「那天要注意什麼」。 */
export function buildDayTip(day: WeatherDay): { icon: string; label: string } {
  const cls = rainClass(day.code);
  const windLevel = beaufortLevel(Math.max(day.windMax, day.gustMax));

  if (cls === 'thunder') return { icon: '⛈️', label: '留意雷雨' };
  if (cls === 'heavy') return { icon: '🌧️', label: '雨勢偏強，改室內' };
  if (cls === 'fog') return { icon: '🌫️', label: '留意起霧' };
  if (day.feelsMax >= 38) return { icon: '🥵', label: '體感悶熱難耐' };
  if (day.max >= 33) return { icon: '🌡️', label: '注意防暑' };
  if (day.uvMax >= 8) return { icon: '🧴', label: '紫外線很強' };
  if (cls === 'light' || cls === 'moderate' || day.precipProb >= 60) return { icon: '☂️', label: '建議帶傘' };
  if (windLevel >= 7) return { icon: '💨', label: '留意強風' };
  if (day.precipProb >= 35) return { icon: '🌦️', label: '留意午後陣雨' };
  if (day.max - day.min > 9 || day.min <= 12) return { icon: '🧥', label: '早晚偏涼' };
  if (day.max >= 29 && day.humidityMean >= 80) return { icon: '💧', label: '濕悶黏膩' };
  if (isClear(day.code)) return { icon: '☀️', label: '適合戶外活動' };
  return { icon: '🙂', label: '可安排戶外行程' };
}
