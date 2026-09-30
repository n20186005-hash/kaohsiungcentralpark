/**
 * Bilingual (zh-Hant / en) routing + SEO metadata helpers.
 *
 * The Traditional Chinese page lives at `/` and the English page at `/en/`.
 * Both share the same entity, so the JSON-LD `@id` and canonical structure
 * stay consistent across languages.
 */

export const SITE_URL = 'https://kaohsiungcentralpark.com';

export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];

/** Map an internal locale to the BCP-47 language tag used in <html lang> / hreflang. */
export function htmlLang(locale: Locale): string {
  return locale === 'en' ? 'en' : 'zh-Hant-TW';
}

/** Canonical URL for each locale. */
export function canonicalFor(locale: Locale): string {
  return locale === 'en' ? `${SITE_URL}/en/` : `${SITE_URL}/`;
}

/** Hreflang alternates emitted on every page (zh / en / x-default). */
export function hreflangAlternates(): { hreflang: string; href: string }[] {
  return [
    { hreflang: 'zh-Hant', href: `${SITE_URL}/` },
    { hreflang: 'en', href: `${SITE_URL}/en/` },
    { hreflang: 'x-default', href: `${SITE_URL}/en/` },
  ];
}

/** Per-locale title / description / OG metadata (also drives CTR optimization). */
export const meta: Record<
  Locale,
  { title: string; description: string; ogTitle: string; ogDescription: string; keywords: string }
> = {
  zh: {
    title:
      '高雄中央公園｜捷運R9中央公園站1號出口、停車場、城市光廊・高雄文學館周邊景點與地圖座標 — 參觀指南',
    description:
      '高雄中央公園(Kaohsiung Central Park)位於前金區，全年24小時免費開放。本指南提供捷運R9中央公園站1號出口步行路線、周邊停車場、城市光廊與高雄文學館等周邊景點、座標地圖，以及Google地圖4.5分(16,428則評價)最新資訊，一次規劃高雄市中心散步一日遊。',
    ogTitle: '高雄中央公園 — 捷運站出口、周邊景點與地圖座標參觀指南',
    ogDescription:
      '高雄中央公園Visitor Guide：位置地址、24小時開放、捷運R9中央公園站1號出口、周邊停車場與城市光廊・高雄文學館等景點，以及Google地圖使用者評價同步資料。',
    keywords:
      '高雄中央公園,高雄中央公園座標,中央公園捷運站,中央公園停車場,城市光廊,高雄文學館,高雄景點,高雄前金區,Kaohsiung Central Park',
  },
  en: {
    title:
      'Kaohsiung Central Park Guide | MRT R9 Exit 1, Parking, Urban Spotlight Arcade & Kaohsiung Literature Library — Map & Nearby',
    description:
      'Kaohsiung Central Park (高雄中央公園) in Cianjin District is free and open 24 hours. This guide covers MRT R9 Central Park Station Exit 1 walking routes, nearby parking, the Urban Spotlight Arcade and Kaohsiung Literature Library, map coordinates, and the latest Google Maps rating of 4.5 from 16,428 reviews.',
    ogTitle: 'Kaohsiung Central Park Guide — MRT Exit 1, Nearby Attractions & Map',
    ogDescription:
      'Kaohsiung Central Park visitor guide: location, 24-hour access, MRT R9 Central Park Station Exit 1, nearby parking, Urban Spotlight Arcade and Kaohsiung Literature Library, plus synced Google Maps ratings.',
    keywords:
      'Kaohsiung Central Park, Central Park Kaohsiung, Kaohsiung MRT R9, Central Park Station, Kaohsiung attractions, Urban Spotlight Arcade, Kaohsiung Literature Library, parking, map coordinates',
  },
};

/**
 * UI string dictionary for shared chrome (header / footer / breadcrumbs).
 * Every key has both `zh` and `en`; `t()` falls back to `zh` if a key is
 * missing for the requested locale, so a partial translation never blanks text.
 */
export const ui = {
  navIntro: { zh: '景點介紹', en: 'Introduction' },
  navWeather: { zh: '天氣預報', en: 'Weather' },
  navSeasons: { zh: '季節策略', en: 'Seasons' },
  navHighlights: { zh: '園區亮點', en: 'Highlights' },
  navServices: { zh: '設施服務', en: 'Facilities' },
  navRoutes: { zh: '推薦路線', en: 'Routes' },
  navLocation: { zh: '位置地圖', en: 'Location' },
  navTransport: { zh: '交通攻略', en: 'Getting here' },
  navNearby: { zh: '周邊景點', en: 'Nearby' },
  navHistory: { zh: '歷史沿革', en: 'History' },
  navScience: { zh: '生態科普', en: 'Nature' },
  navReviews: { zh: '評分評價', en: 'Reviews' },
  navFaq: { zh: '常見問答', en: 'FAQ' },

  footerIntro: { zh: '景點介紹', en: 'Introduction' },
  footerLocation: { zh: '位置交通', en: 'Location & Transport' },
  footerNearby: { zh: '周邊景點', en: 'Nearby' },
  footerHistory: { zh: '歷史沿革', en: 'History' },
  footerReviews: { zh: '評分評價', en: 'Reviews' },
  footerFaq: { zh: '常見問答', en: 'FAQ' },
  footerSources: { zh: '資料來源', en: 'Sources' },

  viewMap: { zh: '查看地圖 ↗', en: 'View map ↗' },
  googleReviews: { zh: 'Google 地圖：查看全部評價 ↗', en: 'Google Maps: all reviews ↗' },
  externalLinks: { zh: '外部連結', en: 'External links' },
  onThisPage: { zh: '本頁內容', en: 'On this page' },
  attractionFacts: { zh: '景點基本資料 Attraction facts', en: 'Attraction facts' },
  visitorRating: { zh: '遊客評分 · Visitor rating', en: 'Visitor rating' },
  fullScore: { zh: '滿分', en: 'out of' },
  seeAllReviews: { zh: '在谷歌地圖查看全部評價 ↗', en: 'See all reviews on Google Maps ↗' },
  breadcrumbLabel: { zh: '麵包屑', en: 'Breadcrumb' },
  pageNav: { zh: '頁面導覽', en: 'Page navigation' },
  quickAnchors: { zh: '快速錨點', en: 'Quick links' },
} as const;

export function t(locale: Locale, key: keyof typeof ui): string {
  const entry = ui[key];
  return entry?.[locale] ?? entry?.zh ?? String(key);
}
