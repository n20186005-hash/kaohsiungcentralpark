/**
 * Single source of truth for the entity this guide is about.
 *
 * Every SEO binding (JSON-LD, TDK, OG, headings, alt text) reads from here, so
 * updating one value keeps the whole page consistent.
 *
 * Review / rating values below are Google Maps user-review data. They are shown
 * on the page only — they are deliberately never emitted into JSON-LD.
 */

/** 網域 / DOMAIN_NAME */
export const siteConfig = {
  domain: 'kaohsiungcentralpark.com',
  baseUrl: 'https://kaohsiungcentralpark.com',
  name: '高雄中央公園 Kaohsiung Central Park 參觀指南',
  shortName: 'Kaohsiung Central Park Guide',
  brandDomain: 'kaohsiungcentralpark.com',
  themeColor: '#065f46',
  manifestPath: '/manifest.webmanifest',
  lang: 'zh-Hant-TW',
  locale: 'zh_TW',
} as const;

/** 景點實體 / ATTRACTION_* */
export const attraction = {
  /** ATTRACTION_FULL_NAME：官方全稱（中英並列，供搜尋引擎比對實體） */
  fullName: '高雄中央公園',
  fullNameEn: 'Kaohsiung Central Park',
  /** 複合全稱，用於 <title>、H1、JSON-LD name */
  displayName: '高雄中央公園 Kaohsiung Central Park',
  legalName: 'Kaohsiung Central Park（高雄中央公園）',
  /** ATTRACTION_SHORT_NAME：域名對應的慣用稱呼 */
  shortName: '中央公園',
  shortNameEn: 'Central Park',
  /** 同一實體的其他寫法，提供給 alternateName 做實體對齊 */
  altNames: [
    'Kaohsiung Central Park',
    '高雄中央公園',
    '中央公園',
    'Kaohsiung Central Park (Kaohsiung)',
    '高雄市中央公園',
    '第十五號公園',
    '扶輪公園',
  ],
  description:
    '高雄中央公園（Kaohsiung Central Park）位於臺灣高雄市前金區，佔地約 12.7 公頃，全年 24 小時免費開放，是高雄市中心結合森林、湖泊、水舞廣場與捷運 R9 中央公園站的都市綠洲。',
  category: '城市公園',
  categoryEn: 'City park',

  /** 地址階層：地址 → 城市 → 省/州 → 國家 */
  streetAddress: '中山一路11號',
  streetAddressEn: 'No. 11, Zhongshan 1st Rd.',
  locality: '前金區',
  localityEn: 'Cianjin District',
  /** CITY_NAME */
  city: '高雄市',
  cityEn: 'Kaohsiung',
  /** STATE_PROVINCE */
  state: '高雄市',
  stateEn: 'Kaohsiung City',
  /** COUNTRY_NAME / COUNTRY_CODE_2LETTER */
  country: '臺灣',
  countryEn: 'Taiwan',
  countryCode: 'TW',
  /** POSTAL_CODE */
  postalCode: '801',
  /** 完整地址（Google 地圖登記資料） */
  addressFull: '801台灣高雄市前金區榮治里中山一路11號',
  plusCode: 'J8F2+X9 榮治里 台灣高雄市新興區',

  /** LATITUDE / LONGITUDE（維基百科座標 22.624943, 120.299250） */
  lat: 22.624943,
  lng: 120.29925,
  googleRegionCode: 'TW-KHH',

  mapsUrl: 'https://maps.app.goo.gl/eC8hTJNhAbFwetQUA',
  mapsEmbedSrc:
    'https://www.google.com/maps?q=Kaohsiung%20Central%20Park&ll=22.624943,120.299250&z=16&output=embed',
  /** 當地觀光主管機關官方網站 */
  govtTourismUrl: 'https://khh.travel/',
  govtTourismLabel: '高雄旅遊網（高雄市政府觀光局）',
  govtMainUrl: 'https://www.kcg.gov.tw/',
  govtMainLabel: '高雄市政府全球資訊網',

  /** 園區基本資料 */
  area: '約 12.7 公頃',
  opened: '1976 年正式成立；1990 年代配合捷運紅線工程改造為森林公園',
  manager: '高雄市政府',
  admission: '免門票，全年開放',
  openingHours: '24 小時開放',
  /** 四周主要道路 */
  boundaryRoads: ['中山一路', '五福三路', '中華三路', '民生二路'],

  /**
   * Google 地圖使用者評價資料（僅供頁面展示，不寫入 JSON-LD）
   * 同步時間：2026 年 9 月
   */
  rating: 4.5,
  ratingOutOf: 5,
  reviewCount: 16409,
  reviewCountLabel: '16,409 則評價',
  reviewSyncLabel: '2026 年 9 月',
  reviewSourceLabel: 'Google 地圖（Google Maps）使用者評價',
  reviewSyncLine: '評分與評價數同步自谷歌地圖（Google Maps）使用者評價 · 2026 年 9 月',
  reviewSourceNote:
    '同步自 Google 地圖使用者評價，同步時間 2026 年 9 月；版權歸原作者與 Google 地圖所有',
} as const;

/** 交通方式 */
export const transport = [
  {
    mode: '捷運',
    title: '高雄捷運紅線 R9 中央公園站',
    lines: [
      '捷運 R9 中央公園站由英國建築師 Richard Rogers 團隊設計，1 號出口即為園區草地與水舞廣場。',
      '車站位於中山一路、民生二路與五福三路交會處，設 3 個出口，2008 年 3 月 9 日啟用。',
      '由 R10 美麗島站（光之穹頂）搭紅線 1 站即達；由高雄車站搭紅線 2 站。',
    ],
  },
  {
    mode: '公車',
    title: '高雄市公車',
    lines: [
      '中山一路「中央公園站」：12、15、52、69、72、92、100、218、水岸公車，東南客運紅 25。',
      '五福三路「城市光廊站」：25、76、77 等路線，下車後由公園南側進入。',
    ],
  },
  {
    mode: '自行開車',
    title: '開車與停車',
    lines: [
      '國道 1 號（中山高）→ 中正交流道下 → 中正一路接五福一路、二路直行 → 中山路即抵達。',
      '園區與周邊百貨公司設有收費停車場，假日常一位難求，建議優先搭乘捷運。',
    ],
  },
  {
    mode: '步行',
    title: '步行與自行車',
    lines: [
      '園內為環狀步道系統，繞行一圈約 1.1 公里、步行約 30 分鐘，路面多為透水磚道，適合推車與輪椅。',
      '環園人行道可銜接城市光廊、新堀江商圈與高雄文學館，串聯成一趟市中心散步行程。',
    ],
  },
] as const;

/** 園區亮點 */
export const highlights = [
  {
    title: '水舞廣場 Water Square',
    desc: '每天數場、每次約 20 分鐘的水舞表演，是親子戲水與夜間最熱鬧的角落，地面採用防滑材質並設有沖洗區。',
    image: '/images/park-lawn.jpg',
    alt: '高雄中央公園水舞廣場周邊的草地與步道',
    creditKey: 'park-lawn',
  },
  {
    title: '生態池與湖中島 Scenic Lake',
    desc: '園區中心的景觀湖保留原生喬木與水生植物，常見鷺鷥、夜鷺與龜類出沒，環湖步道平緩好走。',
    image: '/images/lake-01.jpg',
    alt: '高雄中央公園生態池與倒映在湖面的樹影',
    creditKey: 'lake-01',
  },
  {
    title: '演說廣場 Speech Square',
    desc: '日治時期留下來的開放圓形廣場，如今是街頭表演、假日市集與大型活動的主要場地。',
    image: '/images/park-hill.jpg',
    alt: '高雄中央公園演說廣場旁的草坡與樹蔭',
    creditKey: 'park-hill',
  },
  {
    title: '綠籬迷宮 Hedgerow Labyrinth',
    desc: '以修剪綠籬圍出的小型迷宮，適合孩子奔跑探索，也是園區最具辨識度的造景之一。',
    image: '/images/park-greenery.jpg',
    alt: '高雄中央公園內修剪整齊的綠籬與林蔭步道',
    creditKey: 'park-greenery',
  },
  {
    title: '戶外舞台 Outdoor Terrace',
    desc: '半戶外階梯平台提供座位與遮蔭，傍晚常有音樂演出與市民活動。',
    image: '/images/park-marker.jpg',
    alt: '高雄中央公園的入口意象設施與指標牌',
    creditKey: 'park-marker',
  },
  {
    title: '兒童遊戲場 Playground',
    desc: '設有沙坑、溜滑梯與體健設施，鄰近洗手間與沖洗區，是高雄市區最受歡迎的免費親子空間。',
    image: '/images/playground.jpg',
    alt: '高雄中央公園兒童遊戲場的溜滑梯與沙坑',
    creditKey: 'playground',
  },
] as const;

/** NEARBY_LANDMARK_1/2 …周邊語義集群 */
export const nearbyLandmarks = [
  {
    name: '高雄捷運中央公園站',
    nameEn: 'Central Park Station (KMRT R9)',
    desc: '由英國建築師 Richard Rogers 設計的曲面玻璃出入口（「飛揚」意象），被多家媒體列入世界最美捷運站之一。',
    distance: '園區東側，出站即達',
    image: '/images/station-exterior.jpg',
    alt: '高雄捷運中央公園站的曲面玻璃出入口建築',
    creditKey: 'station-exterior',
  },
  {
    name: '城市光廊 Urban Spotlight Arcade',
    nameEn: 'Urban Spotlight Arcade',
    desc: '2001 年啟用的夜間光環境公園，串聯五福商圈與中央公園南側，以 LED 光柱、露天咖啡與公共藝術聞名。',
    distance: '公園南側，步行約 3 分鐘',
    image: '/images/station-garden.jpg',
    alt: '高雄捷運中央公園站的地面庭園與草坡',
    creditKey: 'station-garden',
  },
  {
    name: '新堀江商圈 Shinkuchan',
    nameEn: 'Shinkuchan Shopping District',
    desc: '高雄年輕人的流行據點，商圈內聚集服飾、甜點、咖啡與影城，逛完水舞廣場再走一輪剛剛好。',
    distance: '捷運站東側，步行約 5 分鐘',
    image: '/images/station-entrance.jpg',
    alt: '高雄捷運中央公園站出入口的階梯與草地',
    creditKey: 'station-entrance',
  },
  {
    name: '高雄文學館 Kaohsiung Literature Library',
    nameEn: 'Kaohsiung Literature Library',
    desc: '位於公園西北角，由歷史建築活化而成的文學主題圖書館，戶外廣場常舉辦市集與朗讀活動。',
    distance: '公園西北角，步行約 5 分鐘',
    image: '/images/pond-reflection.jpg',
    alt: '高雄中央公園水池中的樹木倒映與步道',
    creditKey: 'pond-reflection',
  },
  {
    name: '玫瑰聖母聖殿主教座堂',
    nameEn: 'Holy Rosary Cathedral',
    desc: '臺灣天主教會的重要地標，距離中央公園約 600 公尺，可與前金老街散步串成半日行程。',
    distance: '公園北側，步行約 8 分鐘',
    image: '/images/park-aerial.jpg',
    alt: '從高空俯瞰高雄中央公園與周邊市區',
    creditKey: 'park-aerial',
  },
  {
    name: '大立百貨 / 漢神百貨',
    nameEn: "Talee's & Hanshin Department Store",
    desc: '五福商圈兩大百貨，餐飲與伴手禮集中，雨天備案也適合安排在同一趟行程。',
    distance: '步行或搭捷運一站距離',
    image: '/images/station-r9.jpg',
    alt: '高雄捷運紅線 R9 中央公園站站體外觀',
    creditKey: 'station-r9',
  },
] as const;

/** 旅遊建議 */
export const visitTips = [
  {
    title: '最佳造訪時段',
    body: '清晨 6–8 點可見慢跑與鳥類活動；傍晚 5 點後氣溫轉涼，正好接上水舞表演與夜間光環境。',
  },
  {
    title: '夏日避暑動線',
    body: '由捷運站 1 號出口進入 → 大草地 → 生態池環湖步道 → 綠籬迷宮，全程多為樹蔭與草地降溫。',
  },
  {
    title: '雨季與颱風',
    body: '南部夏季午後雷雨頻繁，水舞與市集活動可能暫停，出發前建議查看官方公告。',
  },
  {
    title: '友善設施',
    body: '靠近五福三路與中山一路各有公共廁所、無障礙坡道與沙池沖洗區，嬰兒車與輪椅可通行主要步道。',
  },
] as const;

/** 影像清單（含授權資訊，來源與版權見 public/PHOTO-CREDITS.md） */
export const imageCredits = [
  { key: 'hero-park', author: 'Balon Greyjoy', license: 'CC0', source: 'Wikimedia Commons' },
  { key: 'park-aerial', author: 'tingyaoh', license: 'CC0', source: 'Wikimedia Commons' },
  {
    key: 'park-greenery',
    author: '挪威 企鵝',
    license: 'CC BY-SA 2.0',
    source: 'Wikimedia Commons',
  },
  { key: 'park-lawn', author: 'Nagono', license: 'CC BY-SA 3.0', source: 'Wikimedia Commons' },
  {
    key: 'playground',
    author: 'Ralff Nestor Nacor',
    license: 'CC BY-SA 4.0',
    source: 'Wikimedia Commons',
  },
  {
    key: 'park-hill',
    author: 'Ralff Nestor Nacor',
    license: 'CC BY-SA 4.0',
    source: 'Wikimedia Commons',
  },
  {
    key: 'park-marker',
    author: 'Ralff Nestor Nacor',
    license: 'CC BY-SA 4.0',
    source: 'Wikimedia Commons',
  },
  { key: 'lake-01', author: '阿道', license: 'CC BY-SA 4.0', source: 'Wikimedia Commons' },
  { key: 'lake-02', author: '阿道', license: 'CC BY-SA 4.0', source: 'Wikimedia Commons' },
  {
    key: 'pond-reflection',
    author: 'Heidi Meudt',
    license: 'CC BY 4.0',
    source: 'Wikimedia Commons',
  },
  {
    key: 'station-exterior',
    author: 'Ralff Nestor Nacor',
    license: 'CC BY-SA 4.0',
    source: 'Wikimedia Commons',
  },
  {
    key: 'station-garden',
    author: 'Ralff Nestor Nacor',
    license: 'CC BY-SA 4.0',
    source: 'Wikimedia Commons',
  },
  {
    key: 'station-entrance',
    author: 'Ralff Nestor Nacor',
    license: 'CC BY-SA 4.0',
    source: 'Wikimedia Commons',
  },
  {
    key: 'station-r9',
    author: '鐵路Railway',
    license: 'CC BY-SA 4.0',
    source: 'Wikimedia Commons',
  },
] as const;

/** 首圖與 OG 圖片（絕對網址供 JSON-LD / OG 使用） */
export const heroImagePath = '/images/hero-park.jpg';
export const heroImageUrl = `${siteConfig.baseUrl}${heroImagePath}`;
export const galleryImageUrls = [
  `${siteConfig.baseUrl}/images/hero-park.jpg`,
  `${siteConfig.baseUrl}/images/park-aerial.jpg`,
  `${siteConfig.baseUrl}/images/station-exterior.jpg`,
  `${siteConfig.baseUrl}/images/lake-01.jpg`,
] as const;
