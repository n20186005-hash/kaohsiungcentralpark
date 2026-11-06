/**
 * Topic registry for the SEO expansion plan: 40 Chinese pages, each with an
 * English translation (translations are not counted as new pages).
 *
 * P0 (12) lives in P0_TOPICS below; P1 (16) and P2 (12) live in topics.p1.ts
 * and topics.p2.ts (two P2 nearby guides are declared in the P1 file beside
 * the other C-group content). Adding a topic to any registry automatically
 * creates both routes, the homepage hub entry, related links and (via
 * astro.config.mjs) sitemap URLs.
 *
 * Editorial rules taken from the SEO report and the site's existing stance:
 *  - no unverified prices, bus numbers, water-show times or shop names
 *  - no measured loop distance; routes are explicitly labelled "suggested"
 *  - events: state that no event is confirmed rather than implying live data
 *  - the Google Maps address is also the R9 station address, not a park entrance
 *  - every page keeps the independent / unofficial positioning
 *  - only already-published images are reused, with accurate alt text
 */
import type { Locale } from '../i18n';
import {
  MAPS,
  PARK_SRC,
  STATION_SRC,
  PLAN_SRC,
  SPOTLIGHT_SRC,
  SHINKUCHAN_SRC,
  TRANSPORT_SRC,
  EVENTS_SRC,
  CWA_SRC,
} from './topic-sources';
import { P1_TOPICS } from './topics.p1';
import { P2_TOPICS } from './topics.p2';

export type TopicGroup = 'transport' | 'park' | 'nearby' | 'itinerary';

export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicSource {
  label: string;
  url: string;
}

export interface TopicImage {
  src: string;
  alt: string;
  caption: string;
}

export interface TopicContent {
  metaTitle: string;
  description: string;
  h1: string;
  lead: string;
  updated: string;
  sections: TopicSection[];
  faq: TopicFaq[];
  sources: TopicSource[];
  /** Ordered items that genuinely form a list/itinerary (emits ItemList schema). */
  itemList?: string[];
  mapCta?: string;
  images?: TopicImage[];
}

export interface Topic {
  slug: string;
  group: TopicGroup;
  /** 2–4 genuinely related topic slugs, never all topics on one page. */
  related: string[];
  zh: TopicContent;
  en: TopicContent;
}

export const CHECK_DATE = { zh: '2026 年 11 月 6 日', en: '6 November 2026' } as const;

export const GROUP_ORDER: TopicGroup[] = ['transport', 'park', 'nearby', 'itinerary'];

export const GROUP_LABELS: Record<Locale, Record<TopicGroup, string>> = {
  zh: {
    transport: '交通、停車與定位',
    park: '園區景觀、設施與活動',
    nearby: '周邊街區與吃喝玩樂',
    itinerary: '行程規劃',
  },
  en: {
    transport: 'Getting here, parking & maps',
    park: 'Park, facilities & events',
    nearby: 'Nearby districts, food & places',
    itinerary: 'Trip planning',
  },
};

export const TOPIC_UI: Record<Locale, {
  hubTitle: string;
  hubIntro: string;
  homeCrumb: string;
  homeLink: string;
  relatedTitle: string;
  faqTitle: string;
  sourcesTitle: string;
  checkedLabel: string;
  routeLabel: string;
  independentNote: string;
  verifyNote: string;
  imageNote: string;
}> = {
  zh: {
    hubTitle: '延伸閱讀：中央公園主題指南',
    hubIntro:
      '四十篇主題指南依抵達交通、園區景觀與設施、周邊街區、行程規劃分組整理，可依需求單獨查閱。各頁均標明資料核對範圍，不取代官方公告。',
    homeCrumb: '高雄中央公園指南',
    homeLink: '返回中央公園指南',
    relatedTitle: '相關主題',
    faqTitle: '常見問答',
    sourcesTitle: '資料來源與核對範圍',
    checkedLabel: '最後核對',
    routeLabel: '建議動線',
    independentNote:
      '本站為獨立、非官方、非營利的旅遊資訊指南，不是高雄市政府、公園管理單位或高雄捷運營運方。',
    verifyNote:
      '營業時間、費率、班次、活動與設施狀態會變動，出發前請以主管機關公告、官方來源及現場指示為準。',
    imageNote: '照片為本站已發布的園區實景照片，拍攝日期不代表今日設施開放狀況。',
  },
  en: {
    hubTitle: 'Further reading: Central Park topic guides',
    hubIntro:
      'Forty topic guides are grouped by getting here, park features and facilities, nearby districts, and trip planning. Each page states how far its information was verified and never replaces official notices.',
    homeCrumb: 'Kaohsiung Central Park guide',
    homeLink: 'Back to the guide',
    relatedTitle: 'Related guides',
    faqTitle: 'Frequently asked questions',
    sourcesTitle: 'Sources and verification limits',
    checkedLabel: 'Last checked',
    routeLabel: 'Suggested route',
    independentNote:
      'This is an independent, unofficial, non-profit visitor guide — not the Kaohsiung City Government, the park authority or the MRT operator.',
    verifyNote:
      'Opening hours, prices, services, events and facility status change. Check official announcements, primary sources and on-site signs before travelling.',
    imageNote:
      'These are this site’s published park photographs; the capture date is not proof of current facility availability.',
  },
};

const P0_TOPICS: Topic[] = [
  {
    slug: 'transport',
    group: 'transport',
    related: ['mrt-central-park-station', 'mrt-exits', 'parking', 'location-map'],
    zh: {
      metaTitle: '高雄中央公園怎麼去？捷運 R9、公車與開車交通指南',
      description:
        '整理前往高雄中央公園的交通方式：捷運紅線 R9 中央公園站、周邊公車查詢、開車與停車注意事項，以及公園與車站地址差異的辨識方式。',
      h1: '高雄中央公園交通指南',
      lead: '出發前先確認你要抵達的是公園的哪一個角落，還是捷運站出口。本站整理可核對的交通選擇與官方查詢入口，不提供未核實的班次、路線號碼或費率。',
      updated: '2026 年 11 月 6 日',
      mapCta: '在 Google 地圖開啟定位點 ↗',
      sections: [
        {
          heading: '捷運：紅線 R9 中央公園站',
          paragraphs: [
            '高雄捷運紅線 R9 中央公園站是這一帶最主要的軌道運輸節點，由高雄車站、左營高鐵站方向皆可搭紅線抵達。實際轉乘方式與當天時刻，請以高雄捷運官方車站頁與時刻表為準。',
            '出站即可走到公園周邊，但「出站」不等於已抵達園內特定景點。公園與車站是相關卻不同的地點，約人時請明確到出口編號或街角。',
          ],
        },
        {
          heading: '公車與市區客運',
          paragraphs: [
            '中山一路、五福三路沿線有多條市區公車服務中央公園一帶，但路線號碼、站位與班次可能調整。本站不列未核實的固定路線號碼；出發前請查高雄市交通局或客運業者的即時資訊。',
            '若由高雄車站或左營高鐵站轉乘，可比較「捷運直達」與「公車加步行」兩種方式，並把候車時間與天候一併考量。',
          ],
        },
        {
          heading: '自行開車與停車',
          paragraphs: [
            '公園是免費休憩空間，周邊停車則多為收費設施，費率、車格與充電服務會變動；不應把「公園免費」推論為「停車免費」。',
            '假日與大型活動期間車位緊張，建議優先搭捷運，或把車停在車站周邊再轉乘。詳細核對方式請看停車攻略頁。',
          ],
        },
        {
          heading: '步行、單車與現場動線',
          paragraphs: [
            '園內以步道串聯草地、水景與廣場，遇雨濕滑、施工或活動管制時需改道。單車牽行、輪椅與嬰兒車動線請以當天現場開放路徑為準，本站沒有完成全園無障礙勘查。',
            '夏季午後雷雨與颱風期間，請先查中央氣象署警特報與市府公告，再決定是否進園。',
          ],
        },
      ],
      faq: [
        {
          q: '搭捷運到中央公園要坐到哪一站？',
          a: '高雄捷運紅線 R9 中央公園站。站體、出口與時刻表請以高雄捷運官方車站頁為準；車站營運時間不等於公園開放時間。',
        },
        {
          q: '有直達中央公園的公車嗎？',
          a: '中山一路、五福三路沿線有多條市區公車經過，但路線與站位會調整。本站不列未核實的固定路線號碼，請查高雄市交通局或客運業者即時資訊。',
        },
        {
          q: '導航應該輸入哪個地址？',
          a: 'Google 地圖目前列「801 台灣高雄市前金區中山一路 11 號」，市府公園頁則列「新興區文橫一路 5 巷」。前者同時是 R9 站址，不代表整座公園的唯一入口；建議搭配位置與地圖頁確認會合點。',
        },
      ],
      sources: [
        { label: '高雄捷運：R9 中央公園站車站資訊', url: STATION_SRC },
        { label: '高雄市交通局：市區交通與停車資訊', url: TRANSPORT_SRC },
        { label: '中央氣象署：預報與警特報', url: CWA_SRC },
      ],
    },
    en: {
      metaTitle: 'How to Get to Kaohsiung Central Park | MRT R9, Bus & Driving',
      description:
        'Ways to reach Kaohsiung Central Park: MRT Red Line R9, how to check nearby buses, driving and parking notes, and how to tell the park address from the station address.',
      h1: 'Getting to Kaohsiung Central Park',
      lead: 'Decide first whether you are heading to a particular corner of the park or to an MRT exit. This guide lists verifiable options and official lookup pages, without unverified schedules, route numbers or fares.',
      updated: '6 November 2026',
      mapCta: 'Open the Google Maps reference point ↗',
      sections: [
        {
          heading: 'MRT: Red Line R9 Central Park Station',
          paragraphs: [
            'R9 Central Park on the Kaohsiung MRT Red Line is the main rail access for this area, reachable from Kaohsiung Main Station or Zuoying HSR. Check the operator’s station page and timetable for current connections and service times.',
            'Exiting the station brings you to the park’s edge, not to a specific feature inside it. The park and the station are related but separate places, so agree on an exit number or street corner as a meeting point.',
          ],
        },
        {
          heading: 'City buses',
          paragraphs: [
            'Several city bus routes serve the Zhongshan 1st Road and Wufu 3rd Road corridors, but route numbers, stops and frequencies change. We do not publish unverified route numbers; check the city transport bureau or the operator’s live information.',
            'From Kaohsiung Main Station or Zuoying HSR, compare a direct MRT ride with a bus-plus-walk option, allowing for waiting time and weather.',
          ],
        },
        {
          heading: 'Driving and parking',
          paragraphs: [
            'The park is free to visit, while nearby parking is generally paid; rates, spaces and charging facilities change. Free park access should not be read as free parking.',
            'Spaces fill quickly on weekends and during events. The MRT is usually simpler, or park near a station and transfer. See the parking guide for how to verify current conditions.',
          ],
        },
        {
          heading: 'Walking, cycling and on-site routes',
          paragraphs: [
            'Paths connect lawns, water features and plazas, and may be rerouted by rain, works or event controls. For bicycles, wheelchairs or strollers, follow the routes open on the day; this site has not completed a full accessibility survey.',
            'During summer afternoon storms or typhoons, check Central Weather Administration warnings and city notices before entering the park.',
          ],
        },
      ],
      faq: [
        {
          q: 'Which MRT station serves Central Park?',
          a: 'R9 Central Park on the Red Line. Use the operator’s station page for exits and timetables; station operating hours are separate from park access.',
        },
        {
          q: 'Is there a direct bus to the park?',
          a: 'Several city routes pass along Zhongshan 1st Road and Wufu 3rd Road, but routes and stops change. We do not list unverified route numbers; check the transport bureau or the bus operator.',
        },
        {
          q: 'Which address should I put into navigation?',
          a: 'Google Maps currently lists No. 11, Zhongshan 1st Road, Cianjin District, while the city park page lists Lane 5, Wenheng 1st Road, Xinxing District. The former is also the R9 station address, not the park’s only entrance. See the location and map guide before choosing a meeting point.',
        },
      ],
      sources: [
        { label: 'Kaohsiung MRT: R9 Central Park station information', url: STATION_SRC },
        { label: 'Kaohsiung City Transport Bureau', url: TRANSPORT_SRC },
        { label: 'Central Weather Administration: forecasts and warnings', url: CWA_SRC },
      ],
    },
  },

  {
    slug: 'mrt-central-park-station',
    group: 'transport',
    related: ['transport', 'mrt-exits', 'location-map', 'things-to-do'],
    zh: {
      metaTitle: '中央公園站 R9｜高雄捷運紅線車站與公園轉乘指南',
      description:
        '認識服務高雄中央公園的捷運紅線 R9 中央公園站：站體建築背景、車站與公園的差異、站內設施與時刻表查詢入口，以及如何安排出站後的步行。',
      h1: '捷運 R9 中央公園站',
      lead: 'R9 中央公園站是前往公園最常被使用的車站，但車站本身、站址與公園是三件需要分開看待的事。本頁整理車站資訊的查核方式與出站後的動線觀念。',
      updated: '2026 年 11 月 6 日',
      mapCta: '在 Google 地圖開啟定位點 ↗',
      sections: [
        {
          heading: '車站基本資訊',
          paragraphs: [
            'R9 為高雄捷運紅線車站，站名「中央公園」。列車時刻、首末班與當天營運狀態請以高雄捷運官方車站頁為準，本站不複製可能過期的時刻表。',
            '市府舊版車站旅遊頁曾把「中山一路 11 號」標為 1 號出口地址；這份資料說明的是車站，不是公園邊界或唯一入口。',
          ],
        },
        {
          heading: '站體建築與公園的區別',
          paragraphs: [
            '市府旅遊資料介紹車站由建築師 Richard Rogers 團隊設計，以白色棚頂與黃色支柱形成「飛揚」意象。這是車站建築背景，不能當作公園本體的建成年代或景觀說明。',
            '公園是都市綠地，車站是交通設施；兩者的開放時間、管理單位與無障礙條件各自獨立，不應互相套用。',
          ],
        },
        {
          heading: '站內設施與時刻查詢',
          paragraphs: [
            '電梯、無障礙廁所、出口配置與站內平面圖請查高雄捷運官方車站頁與平面圖。推輪椅、嬰兒車或攜帶行李時，應先確認當天電梯是否可用，不預設任何出口全程無階差。',
          ],
          bullets: [
            '官方車站頁：路線、站層、時刻表與轉乘資訊',
            '車站平面圖：出口編號、電梯與無障礙設施位置',
            '公園管理與開放資訊：另見高雄旅遊網公園頁',
          ],
        },
        {
          heading: '出站後怎麼走',
          paragraphs: [
            '由車站步行可達公園草地與周邊商圈，但實際動線會受施工、活動封路與路面狀況影響。建議先選定一個明確的街角或出口作為會合點，再依現場指標進園。',
          ],
        },
      ],
      faq: [
        {
          q: 'R9 中央公園站等於高雄中央公園嗎？',
          a: '不是。R9 是服務這一帶的捷運車站，公園是都市綠地；兩者地址、管理單位與開放條件不同，僅位置相近。',
        },
        {
          q: '車站幾點開始營運？',
          a: '本站不提供可能過期的時刻表。請查高雄捷運官方 R9 車站頁的首末班與當天營運公告，且不要把列車時間當作公園開放時間。',
        },
        {
          q: '車站建築是公園的一部分嗎？',
          a: '市府資料介紹的 Richard Rogers 站體設計屬於車站建築。公園本身的景觀與歷史請以公園介紹與歷史主題內容為準。',
        },
      ],
      sources: [
        { label: '高雄捷運：R9 中央公園站車站資訊', url: STATION_SRC },
        { label: '高雄捷運：中央公園站平面圖', url: PLAN_SRC },
        { label: '高雄旅遊網：中央公園介紹', url: PARK_SRC },
      ],
    },
    en: {
      metaTitle: 'Central Park Station R9 | Kaohsiung MRT Guide & Park Access',
      description:
        'R9 Central Park on the Kaohsiung MRT Red Line: station architecture background, why the station is not the park, where to check lifts and timetables, and how to plan the walk after exiting.',
      h1: 'MRT R9 Central Park Station',
      lead: 'R9 is the station most visitors use for the park, but the station, its street address and the park are three separate things. This page explains how to verify station information and how to think about the walk after you exit.',
      updated: '6 November 2026',
      mapCta: 'Open the Google Maps reference point ↗',
      sections: [
        {
          heading: 'Station basics',
          paragraphs: [
            'R9 is a station on the Kaohsiung MRT Red Line named Central Park. For timetables, first and last trains and same-day service status, use the operator’s official station page; we do not copy schedules that may be outdated.',
            'An older city tourism page associated No. 11, Zhongshan 1st Road with Exit 1. That describes the station, not the park boundary or a single exclusive entrance.',
          ],
        },
        {
          heading: 'Station architecture versus the park',
          paragraphs: [
            'City tourism material describes the station as designed by Richard Rogers’s team, with a white canopy and yellow supports evoking flight. That is station architecture, not the park’s construction date or landscape.',
            'The park is an urban green space and the station is transport infrastructure. Their hours, managing bodies and accessibility conditions are independent and should not be applied to each other.',
          ],
        },
        {
          heading: 'Where to check station facilities',
          paragraphs: [
            'Use the operator’s station page and station plan for lifts, accessible toilets and exit layouts. With a wheelchair, stroller or luggage, confirm lift availability on the day rather than assuming a step-free route.',
          ],
          bullets: [
            'Official station page: line, levels, timetable and connections',
            'Station plan: exit numbers, lifts and accessible facilities',
            'Park access and management: see the city park introduction separately',
          ],
        },
        {
          heading: 'After you exit',
          paragraphs: [
            'The lawns and nearby shopping streets are within walking distance, but the route can be affected by works, event closures and pavement conditions. Pick a specific street corner or exit as a meeting point, then follow on-site signs.',
          ],
        },
      ],
      faq: [
        {
          q: 'Is R9 Central Park Station the same as the park?',
          a: 'No. R9 is the MRT station serving the area; the park is an urban green space. Their addresses, managing bodies and access conditions differ even though they are close.',
        },
        {
          q: 'What time does the station open?',
          a: 'We do not publish schedules that may be outdated. Check the official R9 station page for first and last trains, and do not treat train times as park opening hours.',
        },
        {
          q: 'Is the station building part of the park?',
          a: 'The Richard Rogers design described by the city belongs to the station. For the park’s own landscape and history, use the park introduction and history guides.',
        },
      ],
      sources: [
        { label: 'Kaohsiung MRT: R9 Central Park station information', url: STATION_SRC },
        { label: 'Kaohsiung MRT: Central Park station plan', url: PLAN_SRC },
        { label: 'Kaohsiung Travel: Central Park introduction', url: PARK_SRC },
      ],
    },
  },

  {
    slug: 'mrt-exits',
    group: 'transport',
    related: ['mrt-central-park-station', 'transport', 'location-map', 'walking-route'],
    zh: {
      metaTitle: '中央公園站 1、2、3 號出口｜動線與無障礙核對',
      description:
        '整理高雄捷運 R9 中央公園站的出口觀念：如何依官方車站平面圖確認出口設施、電梯與無障礙廁所，以及出站前往公園前應注意的動線與會合點。',
      h1: '中央公園站出口與動線',
      lead: '「從哪個出口出去」會直接影響你抵達公園的哪一側。本頁以高雄捷運官方車站平面圖為依歸，不推測所有出口都具備相同設施。',
      updated: '2026 年 11 月 6 日',
      mapCta: '在 Google 地圖開啟定位點 ↗',
      sections: [
        {
          heading: '先用官方平面圖確認出口',
          paragraphs: [
            'R9 中央公園站設有多個出口，編號與連通方向、電梯及無障礙設施配置請以高雄捷運官方車站平面圖為準。站內圖說會隨工程或設施調整，本站不逐項複製。',
            '依官方車站資料，出口 1 設有電梯與無障礙廁所；這不代表其他出口也有相同設施，更不代表出站後每一段人行道都無階差。',
          ],
        },
        {
          heading: '出口與公園地址的關係',
          paragraphs: [
            '市府舊版車站旅遊頁把「中山一路 11 號」標為 1 號出口地址，Google 地圖目前也以同一地址標示中央公園。這是定位來源重疊，並非證明公園只有這一個入口。',
            '市府公園頁另列「新興區文橫一路 5 巷」，其地圖連結座標 22.6242, 120.30185 是來源列示的定位點，不是本站實測入口。',
          ],
        },
        {
          heading: '輪椅、嬰兒車與行李動線',
          paragraphs: [
            '需要無障礙動線時，先向高雄捷運確認當天電梯狀態與出口配置，再確認人行道、路口與園內步道是否可通行。本站沒有進行全路線勘查，不提供「全程無障礙」保證。',
          ],
          bullets: [
            '查官方平面圖：確認目標出口是否有電梯',
            '查當天公告：電梯維修、施工或活動管制',
            '查現場：路口高低差、圍欄與臨時改道',
          ],
        },
        {
          heading: '約人與集合點',
          paragraphs: [
            '與其約「公園門口」，不如明確到出口編號、街角或可辨識的設施。公園是多入口的開放綠地，單一座標不足以描述會合位置。',
          ],
        },
      ],
      faq: [
        {
          q: '哪一個出口離中央公園最近？',
          a: '車站緊鄰公園周邊，但「最近」取決於你要去草地、水景還是商圈。請依官方車站平面圖選出口，並搭配位置與地圖頁確認會合點。',
        },
        {
          q: '每個出口都有電梯嗎？',
          a: '不應這樣假設。依官方車站資料，出口 1 設有電梯與無障礙廁所；其他出口與當天電梯狀態請查官方平面圖與公告。',
        },
        {
          q: '可以直接把車站地址當成公園入口嗎？',
          a: '不建議。中山一路 11 號同時是 R9 站址與地圖定位點，公園另有多個方向的進出路徑；實際入口與動線請以現場為準。',
        },
      ],
      sources: [
        { label: '高雄捷運：中央公園站平面圖', url: PLAN_SRC },
        { label: '高雄捷運：R9 中央公園站車站資訊', url: STATION_SRC },
        { label: '高雄旅遊網：中央公園介紹', url: PARK_SRC },
      ],
    },
    en: {
      metaTitle: 'Central Park Station Exits 1, 2 & 3 | Routes & Accessibility',
      description:
        'How to use the official station plan for R9 Central Park: checking exit facilities, lifts and accessible toilets, and planning the walk to the park without assuming every exit is step-free.',
      h1: 'Central Park Station exits and routes',
      lead: 'The exit you choose determines which side of the park you arrive at. This page follows the operator’s official station plan and does not assume all exits have the same facilities.',
      updated: '6 November 2026',
      mapCta: 'Open the Google Maps reference point ↗',
      sections: [
        {
          heading: 'Start with the official station plan',
          paragraphs: [
            'R9 has several numbered exits. For exit directions, lifts and accessible facilities, use the operator’s official station plan, which can change with works or facility updates; we do not copy it item by item.',
            'According to official station data, Exit 1 has a lift and an accessible toilet. That does not mean other exits offer the same facilities, nor that every pavement after exiting is step-free.',
          ],
        },
        {
          heading: 'Exits and the park address overlap',
          paragraphs: [
            'An older city tourism page associated No. 11, Zhongshan 1st Road with Exit 1, and Google Maps currently uses the same address for the park. This is an overlap of reference points, not proof of a single park entrance.',
            'The city park page separately lists Lane 5, Wenheng 1st Road; its map-link coordinates 22.6242, 120.30185 are a published reference point, not an entrance surveyed here.',
          ],
        },
        {
          heading: 'Wheelchairs, strollers and luggage',
          paragraphs: [
            'For step-free travel, confirm lift status and exit layout with the operator, then check pavements, crossings and park paths. We have not surveyed the whole route and give no full accessibility guarantee.',
          ],
          bullets: [
            'Check the official plan: does your target exit have a lift?',
            'Check same-day notices: lift maintenance, works or event controls',
            'Check on site: kerb levels, barriers and temporary detours',
          ],
        },
        {
          heading: 'Choosing a meeting point',
          paragraphs: [
            'An exit number, street corner or recognisable feature is better than “the park entrance”. The park is open green space with several approaches, so one coordinate cannot describe a meeting place.',
          ],
        },
      ],
      faq: [
        {
          q: 'Which exit is closest to the park?',
          a: 'The station adjoins the park, but “closest” depends on whether you want the lawn, water features or shopping streets. Use the official station plan and the location and map guide to fix a meeting point.',
        },
        {
          q: 'Does every exit have a lift?',
          a: 'Do not assume so. Official station data lists a lift and accessible toilet at Exit 1; check the official plan and notices for other exits and current lift status.',
        },
        {
          q: 'Can I treat the station address as the park entrance?',
          a: 'Not advisable. No. 11, Zhongshan 1st Road is both the R9 station address and a map reference point, while the park has several approaches. Follow on-site signs for the actual route.',
        },
      ],
      sources: [
        { label: 'Kaohsiung MRT: Central Park station plan', url: PLAN_SRC },
        { label: 'Kaohsiung MRT: R9 Central Park station information', url: STATION_SRC },
        { label: 'Kaohsiung Travel: Central Park introduction', url: PARK_SRC },
      ],
    },
  },

  {
    slug: 'parking',
    group: 'transport',
    related: ['transport', 'events', 'mrt-central-park-station', 'half-day-itinerary'],
    zh: {
      metaTitle: '高雄中央公園停車攻略｜周邊停車場與費用查詢',
      description:
        '中央公園周邊停車該怎麼查？整理收費與免費的區別、假日與活動管制、停車轉乘捷運的做法，以及查詢費率與車位的官方管道；不列未核實價格。',
      h1: '高雄中央公園停車與費用查詢',
      lead: '公園本身是開放綠地，停車則牽涉周邊設施的費率、車格與管制。本站不列未核實的停車費或保證空位，改為整理可靠的查詢方式與決策順序。',
      updated: '2026 年 11 月 6 日',
      mapCta: '在 Google 地圖開啟定位點 ↗',
      sections: [
        {
          heading: '先區分「公園免費」與「停車收費」',
          paragraphs: [
            '高雄旅遊網的公園介紹與 Google 地圖的開放列示，說明的是公園作為休憩空間的使用，不代表周邊停車免費。路外停車場、建築附設車位與路邊車格各有不同收費方式。',
            '本站未找到可逐項核對的現行統一費率，因此不寫出固定金額；請以現場告示、高雄市交通局與停車場經營者公告為準。',
          ],
        },
        {
          heading: '可查詢的資訊種類',
          paragraphs: [
            '出發前可分別確認：收費方式與時段、剩餘車位、車高限制、電動車充電、機車格，以及當天是否有活動或施工管制。這些項目會變動，不適合以單一舊資料長期沿用。',
          ],
          bullets: [
            '費率與計費單位：以現場告示或經營者公告為準',
            '車位與車種：汽車、機車、電動車充電與車高限制',
            '當天狀況：活動封路、假日滿位、施工改道',
          ],
        },
        {
          heading: '假日與活動期間的策略',
          paragraphs: [
            '五福商圈與周邊百貨在假日、連續假期及大型活動期間車位需求高。與其在公園周邊繞行，建議把車停在捷運站周邊再轉乘紅線，或直接以 R9 為進出點。',
            '若當天公園有市集或展演，進場與離場動線可能調整；請先查活動主辦單位與高雄旅遊網活動公告。',
          ],
        },
        {
          heading: '停車轉乘的替代方案',
          paragraphs: [
            '以捷運為主、停車為輔通常最省時：先確認目的地在公園的哪一側，再決定是否值得開車進市中心。步行、公車與捷運的選擇請見交通指南頁。',
          ],
        },
      ],
      faq: [
        {
          q: '中央公園有專屬停車場嗎？',
          a: '本站沒有取得可核對的公園專屬停車場清單與費率。周邊路外與建築附設停車設施請以現場告示與高雄市交通局資訊為準。',
        },
        {
          q: '停車要收費嗎？',
          a: '周邊停車多為收費設施，但費率與時段會變動，本站不列未核實金額。公園免費休憩不等於停車免費。',
        },
        {
          q: '假日找不到車位怎麼辦？',
          a: '建議改搭捷運紅線至 R9，或停在車站周邊再轉乘。活動期間也應先查主辦單位公告，避免遇上封路或滿位。',
        },
      ],
      sources: [
        { label: '高雄市交通局：停車與交通資訊', url: TRANSPORT_SRC },
        { label: '高雄旅遊網：活動與消息', url: EVENTS_SRC },
        { label: '高雄捷運：R9 中央公園站', url: STATION_SRC },
      ],
    },
    en: {
      metaTitle: 'Parking near Kaohsiung Central Park | Where to Check Rates',
      description:
        'How to check parking around Central Park: paid versus free access, weekend and event controls, park-and-ride via the MRT, and official sources for rates and spaces — no unverified prices.',
      h1: 'Parking near Kaohsiung Central Park',
      lead: 'The park is open green space; parking depends on nearby facilities, their rates, spaces and controls. We publish no unverified fees or promises of availability — instead, here is how to check and decide.',
      updated: '6 November 2026',
      mapCta: 'Open the Google Maps reference point ↗',
      sections: [
        {
          heading: 'Free park access is not free parking',
          paragraphs: [
            'The city park introduction and the Maps access listing describe the park as a public space, not the cost of nearby parking. Off-street lots, building parking and kerbside spaces are priced separately.',
            'We could not verify a current uniform rate, so no fixed amount is listed. Follow on-site signs, the city transport bureau and the operator’s notices.',
          ],
        },
        {
          heading: 'What to check before driving',
          paragraphs: [
            'Confirm rates and charging periods, available spaces, height limits, EV charging, scooter bays, and any event or works controls. These change and should not be copied from one old listing.',
          ],
          bullets: [
            'Rates and billing units: on-site signs or the operator’s notice',
            'Spaces and vehicle types: cars, scooters, EV charging, height limits',
            'Same-day conditions: event closures, full weekend lots, road works',
          ],
        },
        {
          heading: 'Weekends and event days',
          paragraphs: [
            'Demand is high in the Wufu shopping area on weekends, holidays and during major events. Rather than circling the park, park near an MRT station and transfer, or use R9 directly.',
            'If a market or performance is scheduled, access and exit routes may change; check the organiser and city event announcements first.',
          ],
        },
        {
          heading: 'A simpler alternative',
          paragraphs: [
            'MRT first, car second is usually faster. Decide which side of the park you need before committing to driving downtown. See the transport guide for walking, bus and MRT options.',
          ],
        },
      ],
      faq: [
        {
          q: 'Does the park have its own car park?',
          a: 'We could not verify a dedicated park car park list or its rates. For nearby off-street and building parking, follow on-site signs and the city transport bureau.',
        },
        {
          q: 'Is parking free?',
          a: 'Nearby parking is generally paid, but rates and periods change, so we list no unverified amount. Free park access does not mean free parking.',
        },
        {
          q: 'What if lots are full on a weekend?',
          a: 'Take the Red Line to R9, or park near a station and transfer. During events, check the organiser’s notices to avoid closures or full lots.',
        },
      ],
      sources: [
        { label: 'Kaohsiung City Transport Bureau: parking and transport', url: TRANSPORT_SRC },
        { label: 'Kaohsiung Travel: events and announcements', url: EVENTS_SRC },
        { label: 'Kaohsiung MRT: R9 Central Park Station', url: STATION_SRC },
      ],
    },
  },

  {
    slug: 'location-map',
    group: 'transport',
    related: ['transport', 'mrt-exits', 'parking', 'walking-route'],
    zh: {
      metaTitle: '高雄中央公園地址與座標｜公園位置、捷運站址差異與地圖',
      description:
        '對照高雄中央公園的兩個地址來源、Google 地圖定位點與市府座標，說明為何中山一路 11 號同時是 R9 站址，並提供設定會合點與導航的實用做法。',
      h1: '中央公園位置、地址與座標',
      lead: '「中央公園在哪裡」看似單純，實際上至少牽涉市府公園頁、Google 地圖與捷運站頁三種定位資料。本頁把它們分開說明，避免把單一座標當成整座公園的入口。',
      updated: '2026 年 11 月 6 日',
      mapCta: '在 Google 地圖開啟定位點 ↗',
      sections: [
        {
          heading: '兩個地址來源的差異',
          paragraphs: [
            '市府公園頁列示「高雄市新興區文橫一路 5 巷」；Google 地圖這次快照列示「801 台灣高雄市前金區榮治里中山一路 11 號」。後者同時也是市府捷運資料所列 R9 中央公園站站址。',
            '兩者都是有效的定位來源，但用途不同：一個是公園介紹資料，一個是地圖與車站定位點。任何一筆都不能直接代表整座公園的唯一入口或地界。',
          ],
        },
        {
          heading: '座標的正確解讀',
          paragraphs: [
            '市府公園頁地圖連結的座標為 22.6242, 120.30185。這是來源列示的定位點，不是本站實測的入口座標，也不適合直接當作集合點或無障礙動線依據。',
            '高雄旅遊網介紹公園面積約 12.7 公頃，園內有草地、水景、廣場與多方向進出路徑；單一點位無法描述這些不同的位置。',
          ],
        },
        {
          heading: '公園入口、車站出口與集合點',
          paragraphs: [
            '安排接送或與朋友會合時，建議分三層處理：先決定目的地區域（草地、湖畔或商圈側），再選車站出口，最後指定可辨識的街角或設施。',
          ],
          bullets: [
            '目的地區域：確認你要到公園的哪一側',
            '車站出口：依高雄捷運官方平面圖選擇',
            '集合點：具體到街角、指標或設施名稱',
          ],
        },
        {
          heading: '使用地圖連結的限制',
          paragraphs: [
            '本站的地圖連結會另行開啟第三方網站，沒有嵌入地圖或要求裝置定位。步行導航未必反映施工、階梯、活動封路或路面積水，請保留現場判斷。',
          ],
        },
      ],
      faq: [
        {
          q: '高雄中央公園的地址是什麼？',
          a: '市府公園頁列「新興區文橫一路 5 巷」，Google 地圖快照列「801 前金區中山一路 11 號」。後者也是 R9 站址，兩者都是定位來源，不等於公園唯一入口。',
        },
        {
          q: '中央公園的座標是多少？',
          a: '市府公園頁地圖連結的座標為 22.6242, 120.30185，屬來源列示的定位點，不是實測入口。若需要精確會合位置，請指定出口或街角。',
        },
        {
          q: '可以直接導航到中山一路 11 號嗎？',
          a: '可以作為參考起點，但那是地圖與車站共用的定位點。公園是多入口的開放綠地，實際進出動線請配合現場指標與官方平面圖。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：中央公園介紹', url: PARK_SRC },
        { label: 'Google 地圖：中央公園定位點', url: MAPS },
        { label: '高雄捷運：R9 中央公園站', url: STATION_SRC },
      ],
    },
    en: {
      metaTitle: 'Kaohsiung Central Park Address & Coordinates | Map & Station Overlap',
      description:
        'Compare the two published addresses, the Google Maps point and the city coordinates for Kaohsiung Central Park, and learn why No. 11 Zhongshan 1st Road is also the R9 station address.',
      h1: 'Location, address and coordinates',
      lead: '“Where is the park?” actually involves at least three sources: the city park page, Google Maps and the MRT station page. This page separates them so one coordinate is not mistaken for the park’s only entrance.',
      updated: '6 November 2026',
      mapCta: 'Open the Google Maps reference point ↗',
      sections: [
        {
          heading: 'Two different published addresses',
          paragraphs: [
            'The city park page lists Lane 5, Wenheng 1st Road, Xinxing District; the Maps snapshot lists No. 11, Zhongshan 1st Road, Rongzhi Village, Cianjin District 801. The latter is also the address given for MRT R9 in city MRT material.',
            'Both are valid reference points with different purposes: one is a park description, the other a map and station pin. Neither establishes a single exclusive entrance or the park boundary.',
          ],
        },
        {
          heading: 'Reading the coordinates correctly',
          paragraphs: [
            'The city park page’s map link uses 22.6242, 120.30185. That is a published reference point, not an entrance surveyed here, and is not a basis for a meeting point or an accessible route.',
            'Kaohsiung Travel describes a park of about 12.7 hectares with lawns, water features, plazas and approaches from several directions — more than one pin can describe.',
          ],
        },
        {
          heading: 'Entrances, exits and meeting points',
          paragraphs: [
            'For pickups or meeting friends, work in three steps: choose the area of the park, choose the station exit, then name a recognisable corner or feature.',
          ],
          bullets: [
            'Destination area: decide which side of the park you need',
            'Station exit: choose using the official MRT station plan',
            'Meeting point: specify a street corner, sign or feature',
          ],
        },
        {
          heading: 'Limits of the map link',
          paragraphs: [
            'Our map link opens a third-party website; we do not embed maps or request device geolocation. Walking navigation may omit construction, stairs, event closures or standing water, so keep on-site judgement.',
          ],
        },
      ],
      faq: [
        {
          q: 'What is the park’s address?',
          a: 'The city park page lists Lane 5, Wenheng 1st Road, Xinxing District; the Maps snapshot lists No. 11, Zhongshan 1st Road, Cianjin District 801, which is also the R9 station address. Both are reference points, not a single entrance.',
        },
        {
          q: 'What are the coordinates?',
          a: 'The city park page’s map link uses 22.6242, 120.30185 — a published reference point, not a surveyed entrance. For a precise meeting place, name an exit or street corner.',
        },
        {
          q: 'Can I navigate straight to No. 11, Zhongshan 1st Road?',
          a: 'It works as a starting reference, but it is shared by the map listing and the station. The park has several approaches, so follow on-site signs and the official station plan.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: Central Park introduction', url: PARK_SRC },
        { label: 'Google Maps: Central Park reference point', url: MAPS },
        { label: 'Kaohsiung MRT: R9 Central Park Station', url: STATION_SRC },
      ],
    },
  },

  {
    slug: 'events',
    group: 'park',
    related: ['things-to-do', 'parking', 'half-day-itinerary', 'nearby-food'],
    zh: {
      metaTitle: '高雄中央公園今天有活動嗎？活動與市集查詢',
      description:
        '中央公園今日活動、週末市集與展演的查詢方式整理。本站沒有即時活動資料，明確標示目前未確認活動，並提供官方公告、主辦單位與最後核對時間。',
      h1: '中央公園今日活動與市集查詢',
      lead: '本站沒有即時活動資料，也不以過期消息冒充當天公告。截至最後核對時間，本站「目前未確認活動」；以下整理可自行查證的官方管道與查核順序。',
      updated: '2026 年 11 月 6 日',
      mapCta: '在 Google 地圖開啟定位點 ↗',
      sections: [
        {
          heading: '今日活動：目前未確認',
          paragraphs: [
            '截至 2026 年 11 月 6 日，本站沒有取得可核對的當日活動名稱、時間、地點與主辦單位，因此不列出任何「今天有水舞／市集／演出」的保證。',
            '公園是開放的公共空間，市集、展演與大型活動通常由不同單位主辦，是否舉辦、是否收費與是否影響動線，都要看當天公告。',
          ],
        },
        {
          heading: '本週末與近期活動怎麼查',
          paragraphs: [
            '請依序查高雄旅遊網的活動與消息頁、活動主辦單位的公告，以及現場張貼的告示。查詢時留意活動日期、開始與結束時間、地點是公園本身還是周邊場域，以及是否有雨天取消或改期說明。',
          ],
          bullets: [
            '活動名稱與日期：確認不是往年存檔頁面',
            '地點：公園草地、水舞廣場、言論廣場或周邊場域各不相同',
            '主辦單位與聯絡窗口：作為異動時的查證對象',
            '管制與費用：進出動線、停車、是否需購票',
          ],
        },
        {
          heading: '水舞廣場與市集的區別',
          paragraphs: [
            '市府公園頁介紹水舞廣場等景觀，這是空間背景，不等於每日固定演出時刻表。本站沒有核對到現行場次，不提供固定時間。',
            '市集與展演屬期間性活動，活動結束後並不代表公園設施改變；請把「景觀介紹」與「當天營運」分開看待。',
          ],
        },
        {
          heading: '最後核對時間與更新原則',
          paragraphs: [
            '本頁最後核對時間為 2026 年 11 月 6 日。本站不會在沒有新查證的情況下把舊活動改標為「最新」，也不會為未核實的活動建立結構化活動資料。',
          ],
        },
      ],
      faq: [
        {
          q: '高雄中央公園今天有活動嗎？',
          a: '本站目前未確認活動。截至 2026 年 11 月 6 日沒有可核對的當日活動名稱、時間與主辦單位，請查高雄旅遊網活動頁與主辦單位公告。',
        },
        {
          q: '今天有水舞表演嗎？',
          a: '本站沒有已核實的當日場次。市府頁介紹水舞廣場是空間說明，不代表每天固定演出；實際場次請查活動主辦者與官方公告。',
        },
        {
          q: '本站會即時更新活動嗎？',
          a: '不會。本站為獨立旅遊指南，沒有即時活動資料庫；未重新查證前不會把舊活動改標為最新消息。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：活動與消息', url: EVENTS_SRC },
        { label: '高雄旅遊網：中央公園介紹', url: PARK_SRC },
      ],
    },
    en: {
      metaTitle: 'Events at Kaohsiung Central Park Today | How to Check',
      description:
        'How to check today’s events, weekend markets and performances at Central Park. This site has no live event data and clearly states that no event is currently confirmed, with official links and a last-checked date.',
      h1: 'Events and markets at Central Park',
      lead: 'This site has no live event feed and does not pass off old announcements as today’s news. As of the last check, no event is currently confirmed here. Below are the official channels and a verification checklist.',
      updated: '6 November 2026',
      mapCta: 'Open the Google Maps reference point ↗',
      sections: [
        {
          heading: 'Today: no event confirmed',
          paragraphs: [
            'As of 6 November 2026 we have no verifiable event name, time, location or organiser for today, so we make no claim that a water show, market or performance is running.',
            'The park is open public space. Markets, performances and large events are run by different organisers; whether they happen, whether they charge, and whether they change access routes all depend on same-day notices.',
          ],
        },
        {
          heading: 'Checking this weekend',
          paragraphs: [
            'Start with the city tourism events page, then the organiser’s announcement, then on-site signage. Check the date, start and end times, whether the venue is the park or a neighbouring space, and any rain cancellation or rescheduling policy.',
          ],
          bullets: [
            'Event name and date: make sure it is not an archived past edition',
            'Venue: lawn, water square, speech square or a nearby site',
            'Organiser and contact: the source for last-minute changes',
            'Controls and charges: access routes, parking, ticketing',
          ],
        },
        {
          heading: 'Water square versus markets',
          paragraphs: [
            'The city park page describes the water square as a landscape feature; that is background about the space, not a daily show schedule. No current session times have been verified here.',
            'Markets and performances are temporary. When one ends, it does not mean park facilities have changed — keep landscape descriptions separate from same-day operations.',
          ],
        },
        {
          heading: 'Last checked and update policy',
          paragraphs: [
            'This page was last checked on 6 November 2026. We will not relabel an old event as “latest” without fresh verification, and we do not publish structured event data for unconfirmed events.',
          ],
        },
      ],
      faq: [
        {
          q: 'Is there an event at the park today?',
          a: 'No event is currently confirmed here. As of 6 November 2026 we have no verifiable name, time or organiser for today; check the city tourism events page and organiser notices.',
        },
        {
          q: 'Is there a water show today?',
          a: 'No current session has been verified. The city’s description of the water square is about the space, not a daily timetable; check the organiser and official announcements.',
        },
        {
          q: 'Does this site update events in real time?',
          a: 'No. This is an independent guide without a live event database, and old announcements are not relabelled as current without a fresh check.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: events and announcements', url: EVENTS_SRC },
        { label: 'Kaohsiung Travel: Central Park introduction', url: PARK_SRC },
      ],
    },
  },

  {
    slug: 'things-to-do',
    group: 'park',
    related: ['walking-route', 'photo-spots', 'events', 'half-day-itinerary'],
    zh: {
      metaTitle: '高雄中央公園必看景點與玩法｜園區景觀一次整理',
      description:
        '整理高雄中央公園的園區景觀與玩法：人造湖、花園迷宮、水舞廣場、言論廣場與草地散步，並清楚區分景觀介紹與當天設施開放狀況。',
      h1: '高雄中央公園必看景點與體驗',
      lead: '中央公園是高雄市中心的都市綠地，適合短暫停留、散步與親子活動。以下以市府公園介紹為背景，並明確標示哪些屬於景觀說明、哪些仍需現場核對。',
      updated: '2026 年 11 月 6 日',
      mapCta: '在 Google 地圖開啟定位點 ↗',
      images: [
        {
          src: '/images/park-lawn.jpg',
          alt: '高雄中央公園的公園草坪',
          caption: '草坪與樹蔭是園區最容易安排的停留空間。',
        },
        {
          src: '/images/lake-01.jpg',
          alt: '高雄中央公園的中央公園湖景',
          caption: '人造湖與水景為市府公園頁列出的景觀之一。',
        },
        {
          src: '/images/park-greenery.jpg',
          alt: '高雄中央公園的綠蔭景觀',
          caption: '綠蔭步道適合炎熱時段行走，實際通行狀態請以現場為準。',
        },
      ],
      sections: [
        {
          heading: '園區景觀：市府介紹的背景資訊',
          paragraphs: [
            '高雄旅遊網的中央公園介紹提到面積約 12.7 公頃，並列出人造湖、花園迷宮、水舞廣場與言論廣場等空間。這些是認識公園配置的背景資料。',
            '本站沒有逐項確認這些設施當天的開放與可用狀態，因此不把它們寫成「一定可玩」或「每日固定演出」的保證。',
          ],
        },
        {
          heading: '適合安排的停留方式',
          paragraphs: [
            '時間有限時，可在草地與樹蔭步道短暫散步；時間充裕再往水景與廣場延伸，並把周邊的城市光廊、商圈或閱讀空間串成半日行程。',
            '夏季炎熱、午後雷雨頻繁，建議清晨或傍晚為主，並隨身攜帶飲水與雨具；天氣請查中央氣象署預報。',
          ],
          bullets: [
            '短停留：草地、樹蔭與可辨識的集合點',
            '半日：園區景觀加上南側城市光廊與商圈',
            '雨天備案：周邊室內閱讀或藝文空間，需另核對休館日',
          ],
        },
        {
          heading: '景觀介紹不等於當天營運',
          paragraphs: [
            '水舞、市集與展演屬活動層次，需查主辦單位與官方公告；洗手間、飲水、沖洗與兒童設施的位置與狀態，本站也未逐項勘查。',
            '觀察水池與鳥類時請留在開放步道，不跨越圍欄、不進入水池、不餵食或驚擾動物。',
          ],
        },
        {
          heading: '與周邊場域串聯',
          paragraphs: [
            '公園、捷運站、城市光廊、新堀江商圈與高雄文學館是相關但獨立的場所，各有自己的入口與開放安排。安排行程時請分別核對，勿把一站的資訊套用到全部。',
          ],
        },
      ],
      faq: [
        {
          q: '中央公園有哪些必看景點？',
          a: '市府公園頁介紹人造湖、花園迷宮、水舞廣場與言論廣場，園內另有草地與綠蔭步道。這些是景觀背景，設施當天是否開放仍需現場確認。',
        },
        {
          q: '需要門票嗎？',
          a: '本站未核對到現行統一收費公告，因此不把「全年免費」寫成官方保證。公園作為公共空間的使用與活動、停車費用應分開看待。',
        },
        {
          q: '適合帶小孩嗎？',
          a: '草地與步道適合親子散步，但遊戲設施、沖洗區與水景的使用狀態需現場確認；水池不是可自行下水的戲水許可。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：中央公園介紹', url: PARK_SRC },
        { label: '高雄旅遊網：活動與消息', url: EVENTS_SRC },
        { label: '中央氣象署：預報與警特報', url: CWA_SRC },
      ],
    },
    en: {
      metaTitle: 'Things to Do at Kaohsiung Central Park | Park Highlights',
      description:
        'Park highlights at Kaohsiung Central Park: the artificial lake, garden maze, water square, speech square and lawn walks — with a clear split between landscape descriptions and same-day facility status.',
      h1: 'Things to do at Kaohsiung Central Park',
      lead: 'Central Park is an urban green space in downtown Kaohsiung, suited to a short stop, a walk or a family outing. This page uses the city introduction as background and marks clearly what still needs on-site verification.',
      updated: '6 November 2026',
      mapCta: 'Open the Google Maps reference point ↗',
      images: [
        {
          src: '/images/park-lawn.jpg',
          alt: 'Park lawn at Kaohsiung Central Park',
          caption: 'Lawns and tree shade are the easiest places to plan a short stay.',
        },
        {
          src: '/images/lake-01.jpg',
          alt: 'Lake view at Kaohsiung Central Park',
          caption: 'The artificial lake is one of the features listed by the city park page.',
        },
        {
          src: '/images/park-greenery.jpg',
          alt: 'Shaded greenery at Kaohsiung Central Park',
          caption: 'Shaded paths are useful in hot weather; check current path conditions on site.',
        },
      ],
      sections: [
        {
          heading: 'Landscape background from the city',
          paragraphs: [
            'Kaohsiung Travel describes a park of about 12.7 hectares and lists an artificial lake, garden maze, water square and speech square. These describe how the space is laid out.',
            'We have not verified the same-day availability of each feature, so none of them is presented as guaranteed access or a fixed daily show.',
          ],
        },
        {
          heading: 'Ways to spend your time',
          paragraphs: [
            'With limited time, take a short walk on the lawn and shaded paths. With more time, continue to the water features and plazas, then link the Urban Spotlight Arcade, shopping streets or reading spaces into a half-day plan.',
            'Summers are hot with frequent afternoon storms, so early morning or evening is often easier. Bring water and rainwear and check the Central Weather Administration forecast.',
          ],
          bullets: [
            'Short stop: lawn, shade and a recognisable meeting point',
            'Half day: park features plus the southern arcade and shopping streets',
            'Rain plan: nearby indoor reading or arts spaces, with their own closing days',
          ],
        },
        {
          heading: 'Landscape is not same-day operation',
          paragraphs: [
            'Water shows, markets and performances are events requiring organiser and official notices; toilets, drinking water, rinsing areas and play equipment have not been surveyed here either.',
            'When observing ponds and birds, stay on open paths: do not cross barriers, enter the water, feed or disturb wildlife.',
          ],
        },
        {
          heading: 'Linking nearby places',
          paragraphs: [
            'The park, MRT station, Urban Spotlight Arcade, Shinkuchan and the Kaohsiung Literature Library are related but separate places with their own entrances and hours. Check each one instead of applying a single listing to all.',
          ],
        },
      ],
      faq: [
        {
          q: 'What are the park highlights?',
          a: 'The city park page lists an artificial lake, garden maze, water square and speech square, alongside lawns and shaded paths. These are landscape background; same-day availability still needs on-site confirmation.',
        },
        {
          q: 'Is there an entrance fee?',
          a: 'We could not verify a current uniform admission notice, so “free all year” is not presented as an official guarantee. Using the public space is separate from charges for events or parking.',
        },
        {
          q: 'Is it good for children?',
          a: 'Lawns and paths suit a family walk, but the condition of play equipment, rinsing areas and water features needs on-site confirmation. A pond is not permission to enter the water.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: Central Park introduction', url: PARK_SRC },
        { label: 'Kaohsiung Travel: events and announcements', url: EVENTS_SRC },
        { label: 'Central Weather Administration: forecasts and warnings', url: CWA_SRC },
      ],
    },
  },

  {
    slug: 'walking-route',
    group: 'park',
    related: ['things-to-do', 'photo-spots', 'half-day-itinerary', 'location-map'],
    zh: {
      metaTitle: '高雄中央公園一圈幾公里？散步路線與停留安排',
      description:
        '回應「中央公園一圈幾公里」的常見疑問：說明為何本站不寫未量測的精確公里數，並提供短程與完整景觀兩條建議動線與現場注意事項。',
      h1: '中央公園散步路線與一圈距離',
      lead: '很多人在搜尋「中央公園一圈幾公里」。本站沒有實際量測環園距離，因此不寫出精確公里數；以下提供兩條建議動線，並明確說明它們不是官方固定環園步道。',
      updated: '2026 年 11 月 6 日',
      mapCta: '在 Google 地圖開啟定位點 ↗',
      itemList: [
        '由選定的捷運出口或街角出發，先確認會合點',
        '沿草地與樹蔭步道短程散步',
        '銜接人造湖周邊與水景',
        '經過花園迷宮、言論廣場等開放空間',
        '返回車站，或往南側城市光廊與商圈延伸',
      ],
      sections: [
        {
          heading: '關於「一圈幾公里」',
          paragraphs: [
            '高雄旅遊網介紹公園面積約 12.7 公頃，那是面積而不是環園周長。面積與步道長度不能直接換算，網路上流傳的單一公里數若沒有量測依據，本站不予引用。',
            '園內路徑會因施工、活動管制、草地養護與天候改道，實際行走距離也取決於你選擇的分支。與其記一個數字，不如先決定想停留多久。',
          ],
        },
        {
          heading: '短程散步方案',
          paragraphs: [
            '適合轉乘空檔或只想活動筋骨的旅客：由選定的車站出口進園，沿草地與樹蔭走一小段，到可辨識的設施或街角再折返。這條路線以「好會合、好折返」為優先，不追求走完園區。',
          ],
        },
        {
          heading: '完整景觀動線（建議，非官方步道）',
          paragraphs: [
            '想多看一些景觀時，可依上方「建議動線」由出入口出發，依序串聯草地、水景、廣場再回到車站，或往南側城市光廊與商圈延伸。這只是行程規劃上的順序建議，不是園方公告的固定環園路線。',
            '若推輪椅、嬰兒車或行動較慢，請以當天開放且平緩的路徑為主，不強行走完每一段。',
          ],
        },
        {
          heading: '現場與天候提醒',
          paragraphs: [
            '雨後步道可能濕滑，樹蔭不是雷雨避難處；遇雷雨、颱風或活動封路請縮短路線或折返。天氣請查中央氣象署預報與警特報。',
          ],
        },
      ],
      faq: [
        {
          q: '中央公園一圈幾公里？',
          a: '本站沒有實際量測，因此不提供精確公里數。市府資料的約 12.7 公頃是面積而非周長，兩者不能互換；實際距離也隨分支與改道而變。',
        },
        {
          q: '有官方的環園步道嗎？',
          a: '本站未取得可核對的官方固定環園步道資料。本頁的動線屬行程建議，請依現場指標與當天開放路徑行走。',
        },
        {
          q: '推輪椅或嬰兒車適合走完整圈嗎？',
          a: '不建議以走完整圈為目標。請以當天平緩、開放的路徑為主，並先向相關單位確認無障礙條件。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：中央公園介紹', url: PARK_SRC },
        { label: '中央氣象署：預報與警特報', url: CWA_SRC },
      ],
    },
    en: {
      metaTitle: 'How Long Is a Loop of Kaohsiung Central Park? | Walking Routes',
      description:
        'Answering “how many kilometres is one loop of Central Park”: why no measured distance is published, plus a short walk and a fuller suggested park route with on-site and weather notes.',
      h1: 'Walking routes and loop distance',
      lead: 'Many visitors search for the length of one loop. We have not measured it, so no precise kilometre figure is published here. Below are two suggested routes, explicitly not an official fixed loop trail.',
      updated: '6 November 2026',
      mapCta: 'Open the Google Maps reference point ↗',
      itemList: [
        'Start from a chosen MRT exit or street corner and fix a meeting point',
        'Take a short walk along the lawn and shaded paths',
        'Continue to the artificial lake and water features',
        'Pass open spaces such as the garden maze and speech square',
        'Return to the station or continue south to the arcade and shopping streets',
      ],
      sections: [
        {
          heading: 'About “one loop in kilometres”',
          paragraphs: [
            'Kaohsiung Travel describes about 12.7 hectares — that is area, not perimeter. Area cannot be converted directly into path length, so we do not repeat a single circulating figure without measurement.',
            'Paths change with works, event controls, lawn maintenance and weather, and walking distance depends on which branches you take. Deciding how long you want to stay is more useful than memorising a number.',
          ],
        },
        {
          heading: 'A short walk',
          paragraphs: [
            'For a transfer window or a brief stretch: enter from a chosen exit, walk a short section of lawn and shade, then turn back at a recognisable feature or corner. Easy meeting and easy return matter more than covering the whole park.',
          ],
        },
        {
          heading: 'A fuller park route (suggestion, not an official trail)',
          paragraphs: [
            'To see more, follow the suggested route above: lawn, water features and plazas, then back to the station or south to the Urban Spotlight Arcade and shopping streets. This is a planning sequence, not a park-authority loop trail.',
            'With a wheelchair, stroller or a slower pace, keep to flat open paths and do not try to complete every segment.',
          ],
        },
        {
          heading: 'On-site and weather notes',
          paragraphs: [
            'Paths can be slippery after rain, and trees are not lightning shelters. Shorten or turn back during thunderstorms, typhoons or event closures, and check Central Weather Administration forecasts and warnings.',
          ],
        },
      ],
      faq: [
        {
          q: 'How many kilometres is one loop?',
          a: 'We have not measured it, so no precise figure is given. The city’s 12.7 hectares is area, not perimeter; actual distance also varies with branches and detours.',
        },
        {
          q: 'Is there an official loop trail?',
          a: 'We could not verify an official fixed loop route. The routes here are planning suggestions; follow on-site signs and the paths open that day.',
        },
        {
          q: 'Is a full loop suitable for wheelchairs or strollers?',
          a: 'Completing a full loop is not a good goal. Keep to flat, open paths and confirm accessibility conditions with the relevant bodies first.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: Central Park introduction', url: PARK_SRC },
        { label: 'Central Weather Administration: forecasts and warnings', url: CWA_SRC },
      ],
    },
  },

  {
    slug: 'photo-spots',
    group: 'park',
    related: ['things-to-do', 'walking-route', 'xinjuejiang', 'mrt-central-park-station'],
    zh: {
      metaTitle: '高雄中央公園拍照攻略｜景觀位置與光線建議',
      description:
        '以本站已發布實景照片為基礎，整理中央公園的拍照區域：湖畔倒影、草坪與綠蔭、廣場與站體外觀，以及適合的光線時段與步道、設施限制。',
      h1: '高雄中央公園拍照位置與建議',
      lead: '本頁以本站已發布的園區實景照片為例，說明哪些類型的位置適合取景、光線大約如何安排，以及拍攝時應留意的步道與設施限制。照片不是當天現況的證明。',
      updated: '2026 年 11 月 6 日',
      mapCta: '在 Google 地圖開啟定位點 ↗',
      images: [
        {
          src: '/images/pond-reflection.jpg',
          alt: '高雄中央公園的水景倒影',
          caption: '平靜水面適合拍倒影，請留在步道上，不要進入水池。',
        },
        {
          src: '/images/park-lawn.jpg',
          alt: '高雄中央公園的公園草坪',
          caption: '開闊草坪在低角度光線下容易表現層次。',
        },
        {
          src: '/images/park-greenery.jpg',
          alt: '高雄中央公園的綠蔭景觀',
          caption: '綠蔭步道適合拍光影，仍需留意濕滑與其他遊客。',
        },
        {
          src: '/images/station-exterior.jpg',
          alt: '高雄中央公園的中央公園捷運站外觀',
          caption: '站體建築屬車站範圍，拍攝時請遵守營運方規定。',
        },
      ],
      sections: [
        {
          heading: '可取的景觀類型',
          paragraphs: [
            '園內大致可分為水景、草地、綠蔭與廣場幾類取景主題；站體外觀則屬車站建築，適合與公園行程分開記錄。以上分類是拍攝題材建議，不是保證每個角落當天都可進入。',
            '若想同時拍到公園與周邊街區，可把城市光廊或商圈安排在行程後段，但那些場域各有自己的開放與拍攝規範。',
          ],
        },
        {
          heading: '光線時段的一般建議',
          paragraphs: [
            '清晨與傍晚的低角度光線較容易表現草地與樹影層次，正午頂光則反差大。南部夏季午後常有雷雨，拍攝前請查中央氣象署預報，不要把「夜間開放」直接當成照明保證。',
            '天氣與光線屬參考建議，本站沒有園內各點的日照量測資料，也不保證特定時段一定出現某種光線。',
          ],
        },
        {
          heading: '步道、設施與他人隱私',
          paragraphs: [
            '請留在開放步道，不跨越圍欄、不進入水池、不攀爬設施；拍攝他人時先取得同意，避免以近距離特寫干擾休憩的遊客。',
            '腳架、空拍機、商業拍攝與大型器材的使用，請依現場公告與主管機關規範為準，本站不代為判斷許可範圍。',
          ],
          bullets: [
            '留在開放步道，不進入水池或封閉區',
            '尊重其他遊客與兒童的隱私',
            '器材與空拍依現場公告及主管機關規範',
          ],
        },
        {
          heading: '照片說明',
          paragraphs: [
            '本頁照片為本站已發布的園區實景照片，拍攝日期不等於今日設施狀態；概念插畫不會被當作現場照片使用。影像來源與說明請見本站影像資訊頁。',
          ],
        },
      ],
      faq: [
        {
          q: '幾點去中央公園拍照最好？',
          a: '一般建議清晨或傍晚的低角度光線，正午反差較大；夏季請留意午後雷雨並查中央氣象署預報。本站沒有各點日照量測資料。',
        },
        {
          q: '可以用腳架或空拍機嗎？',
          a: '請依現場公告與主管機關規範為準，本站不代為判斷許可範圍。拍攝時也請留在開放步道並尊重其他遊客。',
        },
        {
          q: '這些是現在拍的照片嗎？',
          a: '不是。這些是本站已發布的園區實景照片，拍攝日期不代表今日設施開放狀況；影像說明請見影像資訊頁。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：中央公園介紹', url: PARK_SRC },
        { label: '中央氣象署：預報與警特報', url: CWA_SRC },
      ],
    },
    en: {
      metaTitle: 'Photo Spots at Kaohsiung Central Park | Views & Lighting',
      description:
        'Photo areas at Central Park based on this site’s published photographs: pond reflections, lawns, shaded paths, plazas and station architecture, with lighting guidance and on-site limits.',
      h1: 'Photo spots at Kaohsiung Central Park',
      lead: 'Using this site’s published park photographs as examples, this page describes the kinds of views worth framing, broad lighting guidance, and the path and facility limits to respect. The images are not proof of current conditions.',
      updated: '6 November 2026',
      mapCta: 'Open the Google Maps reference point ↗',
      images: [
        {
          src: '/images/pond-reflection.jpg',
          alt: 'Water reflections at Kaohsiung Central Park',
          caption: 'Calm water suits reflections; stay on the path and do not enter the pond.',
        },
        {
          src: '/images/park-lawn.jpg',
          alt: 'Park lawn at Kaohsiung Central Park',
          caption: 'Open lawns show depth well in low-angle light.',
        },
        {
          src: '/images/park-greenery.jpg',
          alt: 'Shaded greenery at Kaohsiung Central Park',
          caption: 'Shaded paths work for light and shadow; watch for wet surfaces and other visitors.',
        },
        {
          src: '/images/station-exterior.jpg',
          alt: 'Exterior of Central Park MRT station, Kaohsiung',
          caption: 'The station building is station property; follow the operator’s rules when photographing.',
        },
      ],
      sections: [
        {
          heading: 'Types of views',
          paragraphs: [
            'Subjects broadly fall into water, lawn, shaded greenery and plaza scenes; the station exterior is station architecture and is best recorded separately from the park.',
            'If you want the park and the surrounding streets in one outing, add the Urban Spotlight Arcade or shopping district later in the plan — each has its own access and photography rules.',
          ],
        },
        {
          heading: 'General lighting guidance',
          paragraphs: [
            'Low-angle morning and late-afternoon light usually shows lawn and tree-shadow depth better than harsh midday sun. Southern Taiwan often has afternoon storms in summer, so check the Central Weather Administration forecast; an all-day access listing is not a lighting guarantee.',
            'This is general advice: we have no on-site sunlight measurements and cannot promise particular light at a particular time.',
          ],
        },
        {
          heading: 'Paths, facilities and privacy',
          paragraphs: [
            'Stay on open paths: do not cross barriers, enter ponds or climb structures. Ask before photographing people and avoid close-ups that disturb visitors relaxing in the park.',
            'Tripods, drones, commercial shoots and large equipment are subject to on-site notices and the relevant authority’s rules; we do not determine what is permitted.',
          ],
          bullets: [
            'Stay on open paths; no ponds or closed areas',
            'Respect the privacy of other visitors and children',
            'Equipment and drones follow on-site notices and authority rules',
          ],
        },
        {
          heading: 'About the photographs',
          paragraphs: [
            'The images here are this site’s published park photographs; their capture date is not proof of today’s facility status. Conceptual illustrations are never presented as on-site photographs. See the image information page for sources.',
          ],
        },
      ],
      faq: [
        {
          q: 'What is the best time for photos?',
          a: 'Morning or late afternoon low-angle light is generally easier; midday contrast is strong. In summer watch for afternoon storms and check the official forecast. We have no site-specific sunlight data.',
        },
        {
          q: 'Can I use a tripod or a drone?',
          a: 'Follow on-site notices and the relevant authority’s rules; we do not determine what is allowed. Stay on open paths and respect other visitors.',
        },
        {
          q: 'Are these current photographs?',
          a: 'No. They are published park photographs whose capture date does not prove today’s facility status. See the image information page for context.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: Central Park introduction', url: PARK_SRC },
        { label: 'Central Weather Administration: forecasts and warnings', url: CWA_SRC },
      ],
    },
  },

  {
    slug: 'nearby-food',
    group: 'nearby',
    related: ['xinjuejiang', 'half-day-itinerary', 'things-to-do', 'events'],
    zh: {
      metaTitle: '高雄中央公園附近美食｜早餐、午餐、晚餐與下午茶指南',
      description:
        '依實際旅遊時段整理中央公園附近餐飲的安排方式：早餐、午餐、下午茶、晚餐、親子與雨天室內選擇，並說明如何核對店家名稱、地址與營業資訊。',
      h1: '高雄中央公園附近餐飲指南',
      lead: '與其列出一串無法逐一核對的店名，本頁依「什麼時候會餓、需要什麼樣的空間」分類，並說明查證營業資訊的方法。本站為非營利獨立指南，不推薦或背書特定商家。',
      updated: '2026 年 11 月 6 日',
      mapCta: '在 Google 地圖開啟定位點 ↗',
      sections: [
        {
          heading: '按旅遊時段分類',
          paragraphs: [
            '公園周邊屬於商業與文化活動密集的市區，餐飲類型分布在不同的街區。安排時先確認自己抵達的時段，再決定要往商圈、五福路一帶或室內空間。',
          ],
          bullets: [
            '早餐與早午餐：適合清晨進園前後，先查當天是否公休',
            '午餐：公園散步後往商圈移動，避開正午炎熱',
            '下午茶與咖啡：適合作為休息與躲雨的停留點',
            '晚餐：可與新堀江購物、城市光廊夜間散步串聯',
            '親子與雨天：優先找有室內座位、動線單純的選擇',
          ],
        },
        {
          heading: '公園內與周邊的界線',
          paragraphs: [
            '公園是開放綠地，本站沒有核對到園內固定餐飲設施清單；周邊商圈與百貨美食街則屬不同場域，各有自己的營業時間與管理規範。',
            '把「公園可以用餐休息」與「附近有餐廳」分開看待，並留意公園內對垃圾、野炊與火源的規範。',
          ],
        },
        {
          heading: '核對店家資訊的方法',
          paragraphs: [
            '若要挑選具體店家，請自行核對可查證的名稱、地址、營業時間、公休日與地圖位置，並留意近期是否仍有營業。店家異動頻繁，本站不列未核實的名稱、地址或價格。',
            '高雄旅遊網的新堀江商圈與城市光廊頁面，可作為認識區域特性的起點，但它們不是即時店家名冊。',
          ],
        },
        {
          heading: '與行程的搭配',
          paragraphs: [
            '半日行程可把午餐或下午茶安排在公園散步之後，再接商圈與夜間景觀；雨天則以室內停留為主，縮短戶外步行。詳見半日遊頁。',
          ],
        },
      ],
      faq: [
        {
          q: '公園裡面有餐廳嗎？',
          a: '本站沒有核對到園內固定餐飲設施清單。周邊商圈與百貨美食街屬不同場域，營業時間請自行查證。',
        },
        {
          q: '可以推薦特定店家嗎？',
          a: '本站為非營利獨立指南，不推薦或背書特定商家。請自行核對店名、地址、營業時間、公休日與近期營業狀態，避免參考已停業資訊。',
        },
        {
          q: '下雨天適合怎麼安排用餐？',
          a: '優先選擇有室內座位的空間，並把公園行程縮短；商圈騎樓、百貨室內與閱讀空間都可作為備案，但各自開放時間需另查。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：新堀江商圈', url: SHINKUCHAN_SRC },
        { label: '高雄旅遊網：城市光廊', url: SPOTLIGHT_SRC },
      ],
    },
    en: {
      metaTitle: 'Food near Kaohsiung Central Park | Breakfast, Lunch & Dinner',
      description:
        'Plan meals around Central Park by real travel needs: breakfast, lunch, afternoon tea, dinner, family and rainy-day indoor options, plus how to verify a venue’s name, address and hours.',
      h1: 'Food near Kaohsiung Central Park',
      lead: 'Rather than a list of venues we cannot verify individually, this page groups options by when you get hungry and what kind of space you need, then explains how to check opening details. We are a non-profit independent guide and endorse no business.',
      updated: '6 November 2026',
      mapCta: 'Open the Google Maps reference point ↗',
      sections: [
        {
          heading: 'Group by time of day',
          paragraphs: [
            'The park sits in a dense commercial and cultural district, with food options spread across different streets. Decide which time slot you arrive in, then choose between the shopping streets, the Wufu Road area and indoor venues.',
          ],
          bullets: [
            'Breakfast and brunch: before or after an early park walk; check closing days',
            'Lunch: move to the shopping streets after the walk, away from midday heat',
            'Afternoon tea and coffee: a rest stop that also works as a rain shelter',
            'Dinner: combine with Shinkuchan shopping or an evening walk at the arcade',
            'Families and rain: prioritise indoor seating and simple routes',
          ],
        },
        {
          heading: 'Inside the park versus around it',
          paragraphs: [
            'The park is open green space; we have not verified a fixed list of food outlets inside it. Nearby shopping streets and department-store food courts are separate places with their own hours and rules.',
            'Keep “resting with a snack in the park” separate from “restaurants nearby”, and follow park rules on litter, cooking and open flames.',
          ],
        },
        {
          heading: 'How to verify a venue',
          paragraphs: [
            'For a specific place, check its verifiable name, address, opening hours, regular closing day and map position, and whether it is still trading. Venues change often, so we list no unverified names, addresses or prices.',
            'The city tourism pages for Shinkuchan and the Urban Spotlight Arcade help explain the areas, but they are not live venue directories.',
          ],
        },
        {
          heading: 'Fitting meals into an itinerary',
          paragraphs: [
            'On a half-day plan, place lunch or afternoon tea after the park walk, then continue to the shopping streets and evening lighting. In rain, favour indoor stops and shorten the outdoor section — see the half-day itinerary.',
          ],
        },
      ],
      faq: [
        {
          q: 'Are there restaurants inside the park?',
          a: 'We have not verified a fixed list of food outlets inside the park. Nearby shopping streets and food courts are separate places, so check their hours independently.',
        },
        {
          q: 'Can you recommend specific restaurants?',
          a: 'No. As a non-profit independent guide we do not endorse particular businesses. Verify names, addresses, hours, closing days and current trading status yourself to avoid closed venues.',
        },
        {
          q: 'How should I plan meals on a rainy day?',
          a: 'Favour indoor seating, shorten the park section, and use arcades, department stores or reading spaces as backups — each with its own opening hours.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: Shinkuchan shopping district', url: SHINKUCHAN_SRC },
        { label: 'Kaohsiung Travel: Urban Spotlight Arcade', url: SPOTLIGHT_SRC },
      ],
    },
  },

  {
    slug: 'xinjuejiang',
    group: 'nearby',
    related: ['nearby-food', 'half-day-itinerary', 'photo-spots', 'things-to-do'],
    zh: {
      metaTitle: '新堀江商圈｜高雄中央公園旁的購物與街區散步',
      description:
        '認識新堀江商圈與高雄中央公園的相對關係：流行購物、小吃與街區散步的安排方式、營業時間核對方法，以及如何與公園組合成半日行程。',
      h1: '新堀江商圈與中央公園',
      lead: '新堀江商圈是高雄市區知名的流行購物與小吃街區，與中央公園位置相近但屬不同場域。本頁整理如何把兩者串成一段好走的半日行程。',
      updated: '2026 年 11 月 6 日',
      mapCta: '在 Google 地圖開啟定位點 ↗',
      sections: [
        {
          heading: '與公園的關係',
          paragraphs: [
            '市府旅遊資料把新堀江商圈列為獨立景點，並與五福商圈、城市光廊等區域一同介紹。它是逛街與餐飲的街區，不是公園內的設施，兩者的入口、動線與營業時間各自獨立。',
            '由公園往商圈移動時，建議先確認自己所在的是公園的哪一側，再依現場指標與地圖前往，不要以單一站址推論步行距離。',
          ],
        },
        {
          heading: '街區特色與可安排的活動',
          paragraphs: [
            '商圈以流行服飾、小吃與街區散步為主要特色，適合在公園散步後接續逛街、用餐與傍晚的夜間景觀。本站不列未核實的店家名稱、地址或價格。',
          ],
          bullets: [
            '購物：流行服飾與小型店家，營業時間各異',
            '小吃與餐飲：適合安排午餐、下午茶或晚餐',
            '街區散步：與城市光廊、五福商圈串聯',
            '夜間行程：燈光與人潮狀況需當天確認',
          ],
        },
        {
          heading: '營業時間與現況核對',
          paragraphs: [
            '個別店家的營業時間、公休日與是否仍在營業差異很大，且變動頻繁。請依店家公告、地圖與現場為準；市府商圈頁可作為認識區域的背景，但不是即時店家名冊。',
          ],
        },
        {
          heading: '與公園組半日行程',
          paragraphs: [
            '一個可行的順序是：先由捷運 R9 進公園散步，再往南側城市光廊，最後進新堀江商圈用餐與逛街；雨天可把戶外段落縮短，改以室內停留為主。詳細安排見半日遊頁。',
          ],
        },
      ],
      faq: [
        {
          q: '新堀江商圈在中央公園裡面嗎？',
          a: '不是。它是市府另列的街區景點，與公園相鄰但屬不同場域，入口與營業時間各自獨立。',
        },
        {
          q: '從公園走到新堀江要多久？',
          a: '本站沒有實測步行時間，不提供「幾分鐘必達」的數字。請依你所在的公園位置、當天動線與地圖自行判斷。',
        },
        {
          q: '商圈幾點營業？',
          a: '各店家營業時間與公休日不同且會變動，請查店家公告與地圖；本站不列未核實的統一營業時間。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：新堀江商圈', url: SHINKUCHAN_SRC },
        { label: '高雄旅遊網：城市光廊', url: SPOTLIGHT_SRC },
        { label: '高雄旅遊網：中央公園介紹', url: PARK_SRC },
      ],
    },
    en: {
      metaTitle: 'Shinkuchan Shopping District | Next to Kaohsiung Central Park',
      description:
        'How Shinkuchan relates to Kaohsiung Central Park: shopping, snacks and street walks, how to verify opening hours, and how to combine both into a half-day plan.',
      h1: 'Shinkuchan and Central Park',
      lead: 'Shinkuchan is a well-known shopping and snack district near the park, but it is a separate place. This page explains how to link the two into an easy half-day outing.',
      updated: '6 November 2026',
      mapCta: 'Open the Google Maps reference point ↗',
      sections: [
        {
          heading: 'How it relates to the park',
          paragraphs: [
            'City tourism lists Shinkuchan as its own attraction alongside the Wufu shopping area and the Urban Spotlight Arcade. It is a shopping and food district, not a park facility; entrances, routes and hours are independent.',
            'When moving from the park, first work out which side of the park you are on, then follow on-site signs and your map rather than inferring a walking distance from a single station address.',
          ],
        },
        {
          heading: 'What to do there',
          paragraphs: [
            'The district is known for fashion shops, snacks and street walking, and works well after a park walk for shopping, a meal and evening city views. We list no unverified shop names, addresses or prices.',
          ],
          bullets: [
            'Shopping: fashion and small independent stores, each with its own hours',
            'Snacks and meals: suitable for lunch, afternoon tea or dinner',
            'Street walk: combine with the arcade and the Wufu shopping area',
            'Evening: lighting and crowd conditions need a same-day check',
          ],
        },
        {
          heading: 'Verifying current opening hours',
          paragraphs: [
            'Individual venues differ widely in hours, closing days and whether they are still trading. Use each venue’s notice, its map listing and on-site signs; the city district page is background, not a live directory.',
          ],
        },
        {
          heading: 'A half-day combination',
          paragraphs: [
            'One workable sequence: enter the park from MRT R9, walk south to the Urban Spotlight Arcade, then finish with a meal and shopping in Shinkuchan. In rain, shorten the outdoor part and favour indoor stops — see the half-day itinerary.',
          ],
        },
      ],
      faq: [
        {
          q: 'Is Shinkuchan inside the park?',
          a: 'No. The city lists it as a separate district attraction, adjacent to the park but with its own entrances and hours.',
        },
        {
          q: 'How long is the walk from the park?',
          a: 'We have not measured it and give no guaranteed minute figure. Judge from your position in the park, the route open that day and your map.',
        },
        {
          q: 'What are the opening hours?',
          a: 'Hours and closing days vary by venue and change often. Check each venue’s notice and map listing; we publish no unverified district-wide timetable.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: Shinkuchan shopping district', url: SHINKUCHAN_SRC },
        { label: 'Kaohsiung Travel: Urban Spotlight Arcade', url: SPOTLIGHT_SRC },
        { label: 'Kaohsiung Travel: Central Park introduction', url: PARK_SRC },
      ],
    },
  },

  {
    slug: 'half-day-itinerary',
    group: 'itinerary',
    related: ['walking-route', 'xinjuejiang', 'nearby-food', 'photo-spots'],
    zh: {
      metaTitle: '高雄中央公園半日遊｜新堀江、城市光廊散步路線',
      description:
        '以捷運 R9 為進出點的高雄中央公園半日遊建議：公園散步、城市光廊、新堀江商圈的順序，並附上交通、停留安排、餐飲時段與雨天備案。',
      h1: '高雄中央公園半日遊建議',
      lead: '這是一條以大眾運輸為主的半日行程建議，把公園、南側城市光廊與新堀江商圈串在一起。順序與停留時間都可依腳程、天氣與當天公告調整，不是官方套裝行程。',
      updated: '2026 年 11 月 6 日',
      mapCta: '在 Google 地圖開啟定位點 ↗',
      itemList: [
        '由捷運紅線 R9 中央公園站出發，先確認會合點與出口',
        '進公園走草地、樹蔭與水景，依當天路徑調整長短',
        '往南側城市光廊，認識公共藝術與夜間光環境',
        '到新堀江商圈與五福商圈用餐、逛街',
        '視時間與天候返回 R9，或延伸至室內閱讀空間',
      ],
      sections: [
        {
          heading: '建議順序與交通',
          paragraphs: [
            '以捷運 R9 為進出點最單純：出站後先進公園，往南側接城市光廊，再進新堀江商圈與五福商圈，最後回車站。全程以步行串聯，實際動線與距離請依現場指標與地圖判斷。',
            '公園、城市光廊與商圈是不同場域，各有入口與開放安排；不要把單一場域的營業時間套用到全程。',
          ],
        },
        {
          heading: '停留時間怎麼抓',
          paragraphs: [
            '本站沒有實測各段所需時間，不提供精確分鐘數。建議以「想在哪一段多停留」來分配：想散步就多留公園，想逛街就把後段拉長；炎熱或下雨時縮短戶外段落。',
          ],
        },
        {
          heading: '餐飲與休息安排',
          paragraphs: [
            '午餐或下午茶可安排在公園散步之後，晚餐再與商圈逛街串聯。本站不推薦特定店家，請自行核對名稱、地址、營業時間與公休日；詳細分類見附近美食頁。',
          ],
        },
        {
          heading: '雨天備案與提醒',
          paragraphs: [
            '南部夏季午後雷雨與颱風期間，建議改以室內空間為主，例如公園北側的閱讀空間，但館休日與入館規定需另行核對；出發前查中央氣象署警特報與市府公告。',
            '若當天公園有市集或展演，動線與人潮可能改變；請查活動主辦單位與高雄旅遊網活動公告後再調整順序。',
          ],
        },
      ],
      faq: [
        {
          q: '半日遊時間夠嗎？',
          a: '夠安排公園散步加上一兩個周邊場域，但實際取決於腳程、天氣與當天動線。本站沒有實測時間，不提供精確分鐘數。',
        },
        {
          q: '下雨要怎麼改？',
          a: '縮短戶外段落，改以室內閱讀、百貨或商圈騎樓為主，並先查各場域休館日與中央氣象署警特報。',
        },
        {
          q: '需要預約或買票嗎？',
          a: '公園作為公共空間的使用與周邊場域的收費、預約規定不同，本站未核對到統一的收費公告；個別展演或店家請自行查證。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：城市光廊', url: SPOTLIGHT_SRC },
        { label: '高雄旅遊網：新堀江商圈', url: SHINKUCHAN_SRC },
        { label: '高雄捷運：R9 中央公園站', url: STATION_SRC },
        { label: '中央氣象署：預報與警特報', url: CWA_SRC },
      ],
    },
    en: {
      metaTitle: 'Kaohsiung Central Park Half-Day Itinerary | Arcade & Shinkuchan',
      description:
        'A half-day plan from MRT R9: park walk, Urban Spotlight Arcade and Shinkuchan, with transport, how to pace your stay, meal timing and a rainy-day alternative.',
      h1: 'A half-day at Kaohsiung Central Park',
      lead: 'This is a transit-first half-day suggestion linking the park, the southern Urban Spotlight Arcade and Shinkuchan. Order and pacing are yours to adjust for weather, pace and same-day notices — it is not an official package tour.',
      updated: '6 November 2026',
      mapCta: 'Open the Google Maps reference point ↗',
      itemList: [
        'Start at MRT Red Line R9 Central Park and fix an exit and meeting point',
        'Walk the lawn, shade and water features, adapting to the paths open that day',
        'Head south to the Urban Spotlight Arcade for public art and evening lighting',
        'Eat and browse in Shinkuchan and the Wufu shopping area',
        'Return to R9, or extend to an indoor reading space depending on time and weather',
      ],
      sections: [
        {
          heading: 'Suggested order and transport',
          paragraphs: [
            'Using R9 for both arrival and departure keeps it simple: enter the park, continue south to the Urban Spotlight Arcade, then Shinkuchan and the Wufu shopping area, and return to the station. Sections are linked on foot; follow on-site signs and your map for the actual route.',
            'The park, arcade and shopping district are separate places with their own entrances and hours — do not apply one venue’s timetable to the whole outing.',
          ],
        },
        {
          heading: 'How to pace the stay',
          paragraphs: [
            'We have not measured the segments and give no precise minutes. Decide where you want to linger: more park if you want a walk, more shopping if you prefer the streets, and a shorter outdoor section in heat or rain.',
          ],
        },
        {
          heading: 'Meals and rests',
          paragraphs: [
            'Lunch or afternoon tea works well after the park walk, with dinner linked to shopping. We recommend no specific venues; verify names, addresses, hours and closing days yourself. See the nearby food guide for categories.',
          ],
        },
        {
          heading: 'Rain plan and reminders',
          paragraphs: [
            'With summer afternoon storms or typhoons, favour indoor spaces such as the reading rooms north of the park, checking their closing days and entry rules. Check Central Weather Administration warnings and city notices before leaving.',
            'If a market or performance is running that day, routes and crowds may change; check the organiser and city event announcements before fixing the order.',
          ],
        },
      ],
      faq: [
        {
          q: 'Is half a day enough?',
          a: 'It is enough for a park walk plus one or two nearby places, depending on pace, weather and the route open that day. We have not measured timings.',
        },
        {
          q: 'What if it rains?',
          a: 'Shorten the outdoor part and favour indoor reading spaces, department stores or arcades; check their closing days and the official weather warnings first.',
        },
        {
          q: 'Do I need to book or buy tickets?',
          a: 'Using the public park is separate from charges and booking rules at nearby venues; we could not verify a uniform admission notice. Check individual events or venues yourself.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: Urban Spotlight Arcade', url: SPOTLIGHT_SRC },
        { label: 'Kaohsiung Travel: Shinkuchan shopping district', url: SHINKUCHAN_SRC },
        { label: 'Kaohsiung MRT: R9 Central Park Station', url: STATION_SRC },
        { label: 'Central Weather Administration: forecasts and warnings', url: CWA_SRC },
      ],
    },
  },
];

/** P0 + P1 + P2 = 40 Chinese topic pages, each with an English translation. */
export const TOPICS: Topic[] = [...P0_TOPICS, ...P1_TOPICS, ...P2_TOPICS];

export const TOPIC_SLUGS: string[] = TOPICS.map(t => t.slug);

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find(t => t.slug === slug);
}

export function topicPath(slug: string, locale: Locale): string {
  return locale === 'en' ? `/en/${slug}/` : `/${slug}/`;
}

export function topicHref(slug: string, locale: Locale): string {
  return topicPath(slug, locale);
}

export function topicsByGroup(group: TopicGroup): Topic[] {
  return TOPICS.filter(t => t.group === group);
}

/** Only related slugs that actually exist — prevents broken internal links. */
export function relatedFor(topic: Topic): Topic[] {
  return topic.related
    .map(slug => getTopic(slug))
    .filter((t): t is Topic => t !== undefined);
}
