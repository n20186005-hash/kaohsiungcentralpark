/**
 * P2: 12 additional Chinese topic pages (each with an English translation).
 *
 * C / nearby: 5 pages, two of which (family-nearby, breakfast-and-brunch) are
 *   declared in topics.p1.ts beside the other C-group content.
 * D / itinerary: 7 time-, audience- and weather-specific plans.
 */
import type { Topic } from './topics';
import { P2_NEARBY_TOPICS } from './topics.p1';
import {
  PARK_SRC,
  STATION_SRC,
  SPOTLIGHT_SRC,
  SHINKUCHAN_SRC,
  TRANSPORT_SRC,
  EVENTS_SRC,
  CWA_SRC,
  KHH_HOME,
} from './topic-sources';

const Z = '2026 年 11 月 6 日';
const E = '6 November 2026';
const MAP_Z = '在 Google 地圖開啟定位點 ↗';
const MAP_E = 'Open the Google Maps reference point ↗';

const P2_OWN_TOPICS: Topic[] = [
  {
    slug: 'central-park-nightlife',
    group: 'nearby',
    related: ['evening-itinerary', 'liuhe-night-market', 'urban-spotlight-arcade', 'nearby-food'],
    zh: {
      metaTitle: '中央公園晚上可以去哪？｜夜間順遊與安全查核',
      description:
        '整理高雄中央公園與周邊街區的夜間去處類型：城市光廊、五福與新堀江一帶、餐飲與夜市街區，並說明照明、營業與活動資訊為何需當天確認。',
      h1: '中央公園周邊的夜間去處',
      lead: '公園的開放列示不等於夜間每一區都有照明或服務。本頁以場域類型整理傍晚後可搭配的去處，不列未核實的營業時段與活動場次。',
      updated: Z,
      sections: [
        {
          heading: '可搭配的場域類型',
          bullets: [
            '城市光廊一帶的公共藝術與夜間光環境，屬獨立景點。',
            '五福、新堀江方向較密集的餐飲與購物街區。',
            '夜市型態的街區，可安排為晚餐或宵夜時段。',
          ],
        },
        {
          heading: '照明、人潮與管制',
          paragraphs: [
            '夜間動線受照明、施工與活動管制影響，各場域也有自己的營業與公休規則。本站未核實任何點燈時段、演出場次或攤商營業時間，請以現場與官方公告為準。',
          ],
        },
        {
          heading: '返程與天候',
          paragraphs: [
            '把回程交通與同行者狀況一起規劃：先查高雄捷運官方末班資訊，再決定停留長度。遇雷雨或颱風，請依中央氣象署警特報與市府公告縮短或取消戶外段。',
          ],
        },
      ],
      faq: [
        {
          q: '中央公園晚上有東西看嗎？',
          a: '周邊有光環境、餐飲與購物街區可搭配，但園內照明與各場域狀態未經本站核實，請以當天現場為準。',
        },
        {
          q: '幾點會有燈光或表演？',
          a: '本站未核實固定點燈或演出時段，不提供時間表，請查高雄旅遊網活動頁與現場公告。',
        },
        {
          q: '晚間搭捷運回去要注意什麼？',
          a: '請查高雄捷運官方首末班與當天營運資訊；車站營運時間與公園開放列示是兩件事，不要互相套用。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：城市光廊景點介紹', url: SPOTLIGHT_SRC },
        { label: '高雄旅遊網：活動與消息', url: EVENTS_SRC },
        { label: '中央氣象署：預報與警特報', url: CWA_SRC },
      ],
    },
    en: {
      metaTitle: 'Central Park at Night | Evening Add-Ons and What to Verify',
      description:
        'Evening options around Kaohsiung Central Park by area type: the Urban Spotlight Arcade, Wufu and Shinkuchan, food and night-market streets, plus why lighting and hours need same-day checks.',
      h1: 'Evening Places around Central Park',
      lead: 'A listed opening window is not a promise that every part of the park is lit or serviced at night. This page groups the nearby options by area type and lists no unverified hours or show times.',
      updated: E,
      sections: [
        {
          heading: 'Types of area to combine',
          bullets: [
            'Public art and the night-time light environment around the Urban Spotlight Arcade, a separate attraction.',
            'Denser dining and shopping streets towards Wufu and Shinkuchan.',
            'Night-market style streets that suit a dinner or late-supper slot.',
          ],
        },
        {
          heading: 'Lighting, crowds and controls',
          paragraphs: [
            'Night routes depend on lighting, works and event controls, and each area has its own hours and closing days. We have verified no illumination times, performance schedules or stall hours; rely on on-site and official notices.',
          ],
        },
        {
          heading: 'Getting back and the weather',
          paragraphs: [
            'Plan the return trip alongside your group’s needs: check the MRT operator’s last-service information before deciding how long to stay. In storms or typhoons, shorten or cancel the outdoor part using official warnings and city notices.',
          ],
        },
      ],
      faq: [
        {
          q: 'Is there anything to see at Central Park at night?',
          a: 'Nearby light environments, dining and shopping streets can be combined, but lighting inside the park and each area’s status have not been verified here. Judge from conditions on the day.',
        },
        {
          q: 'What time are the lights or performances on?',
          a: 'No fixed lighting or performance times have been verified, so we publish none. Check the city events page and on-site notices.',
        },
        {
          q: 'What should I check for the MRT ride back?',
          a: 'Use the operator’s first and last train information and same-day service notices. Station operating hours and the park’s listed access are separate things.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: Urban Spotlight Arcade listing', url: SPOTLIGHT_SRC },
        { label: 'Kaohsiung Travel: events and announcements', url: EVENTS_SRC },
        { label: 'Central Weather Administration: forecasts and warnings', url: CWA_SRC },
      ],
    },
  },

  {
    slug: 'souvenirs',
    group: 'nearby',
    related: ['xinjuejiang', 'wufu-shopping-area', 'nearby-food', 'half-day-itinerary'],
    zh: {
      metaTitle: '中央公園附近買伴手禮｜類型與行程安排',
      description:
        '以類型而非店名整理高雄中央公園周邊的伴手禮與購物選擇：商圈、百貨與飲食類商品的考量，以及價格、營業與保存方式為何需自行查證。',
      h1: '中央公園附近的伴手禮與購物',
      lead: '本站不推薦特定商戶，也不列未核實的商品價格。這頁幫你把「買東西」放進公園行程的適當位置，並提醒哪些資訊必須當天確認。',
      updated: Z,
      sections: [
        {
          heading: '先想清楚要買哪一類',
          bullets: [
            '飲食類：需考量保存、攜帶與當天氣溫。',
            '生活風格與服飾配件：型態與店家組成會輪替。',
            '百貨與商場類型：適合一次處理多種需求，也可避雨避暑。',
          ],
        },
        {
          heading: '安排在行程的哪一段',
          paragraphs: [
            '把購物排在公園散步之後，可避免提著東西走完整段戶外動線；若天氣炎熱，也可先逛室內再進園。本站沒有實測距離，請依當天地圖與現場指標調整。',
          ],
        },
        {
          heading: '價格與營業不代查',
          paragraphs: [
            '各店售價、促銷、營業與公休日獨立且會變動。本站不列店名、地址或價格；需要特定商品、退換貨或配送規則時，請直接向店家確認。',
          ],
        },
      ],
      faq: [
        {
          q: '有推薦的伴手禮店嗎？',
          a: '本站為獨立非營利指南，不推薦特定商戶，也不列未核實的店名與地址；請依商品類型與地圖自行篩選。',
        },
        {
          q: '公園裡有地方買東西嗎？',
          a: '本站未核實園內是否有常設販售設施，請以現場指標與管理單位公告為準。',
        },
        {
          q: '價位大約多少？',
          a: '本站不列未核實價格，請直接查店家官方資訊或現場標示。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：新堀江商圈介紹', url: SHINKUCHAN_SRC },
        { label: '高雄旅遊網：景點與商圈查詢', url: KHH_HOME },
        { label: '高雄旅遊網：中央公園介紹', url: PARK_SRC },
      ],
    },
    en: {
      metaTitle: 'Souvenirs near Central Park | Shopping Types and Timing',
      description:
        'Souvenir and shopping options near Kaohsiung Central Park by category rather than named shops, plus why prices, hours and storage conditions must be checked yourself.',
      h1: 'Souvenirs and Shopping near Central Park',
      lead: 'We recommend no specific business and list no unverified prices. This page helps place shopping sensibly within a park visit and flags the details that need same-day checking.',
      updated: E,
      sections: [
        {
          heading: 'Decide what category you need',
          bullets: [
            'Food items: consider storage, carrying and the day’s temperature.',
            'Lifestyle goods, clothing and accessories: the mix of shops changes.',
            'Department stores and malls: several needs in one stop, plus shelter from rain or heat.',
          ],
        },
        {
          heading: 'Where it fits in the outing',
          paragraphs: [
            'Shopping after the park walk avoids carrying bags through the whole outdoor route; in hot weather, start indoors and visit the park later. We publish no measured distances — use a same-day map and on-site signs.',
          ],
        },
        {
          heading: 'We do not verify prices or hours',
          paragraphs: [
            'Prices, promotions, hours and closing days are set by each business and change. We list no names, addresses or prices; for a particular product, returns or shipping rules, ask the business directly.',
          ],
        },
      ],
      faq: [
        {
          q: 'Which souvenir shop do you recommend?',
          a: 'This independent non-profit guide recommends no specific business and lists no unverified names or addresses. Filter by product category and a map instead.',
        },
        {
          q: 'Can I buy things inside the park?',
          a: 'We have not verified any permanent retail facility inside the grounds. Follow on-site signs and park authority notices.',
        },
        {
          q: 'What are the prices like?',
          a: 'We list no unverified prices. Check the business’s own information or the label on site.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: Shinkuchan shopping district', url: SHINKUCHAN_SRC },
        { label: 'Kaohsiung Travel: attractions and district lookup', url: KHH_HOME },
        { label: 'Kaohsiung Travel: Central Park introduction', url: PARK_SRC },
      ],
    },
  },

  {
    slug: 'love-river',
    group: 'nearby',
    related: ['one-day-itinerary', 'photo-walk-itinerary', 'central-park-nightlife', 'transport'],
    zh: {
      metaTitle: '中央公園到愛河｜順遊動線與查核重點',
      description:
        '把高雄愛河與中央公園排進同一天：兩地相對位置、適合搭配的時段、交通與步行查核方式，以及不列未核實距離、船班與票價的原則。',
      h1: '從中央公園順遊愛河',
      lead: '愛河與中央公園都是高雄市區常被排在同一天的景點，但兩者不是同一個場域。本頁談銜接觀念與查證順序，不提供實測距離、船班或票價。',
      updated: Z,
      mapCta: MAP_Z,
      sections: [
        {
          heading: '兩個場域分開看待',
          paragraphs: [
            '公園是綠地，愛河是水岸帶狀空間，位置、管理範圍與可利用設施都不同。不要把公園頁的開放列示、停車說明或出口資訊直接套用到水岸行程。',
          ],
        },
        {
          heading: '動線與交通查核',
          paragraphs: [
            '要以步行、捷運或公車串聯，請先確認當天地圖、過街點與施工或活動管制，再查高雄市交通局與高雄捷運的即時資訊。本站沒有實測距離，也不列固定路線號碼。',
          ],
        },
        {
          heading: '時段與水上活動',
          paragraphs: [
            '傍晚與夜間常被視為水岸較受歡迎的時段，但照明、遊船與活動狀態都會變動。本站未核實任何船班、票價或演出場次，請查官方與現場公告。',
          ],
        },
      ],
      faq: [
        {
          q: '愛河就在中央公園旁邊嗎？',
          a: '兩者都在市區、可安排順遊，但不是同一地點。請以官方地圖與當天交通資訊確認相對位置與路線。',
        },
        {
          q: '有遊船可以搭嗎？',
          a: '本站未核實現行船班、票價與營運狀態，不提供時間表或價格；請查主管機關與現場資訊。',
        },
        {
          q: '適合排在早上還是晚上？',
          a: '本站不給固定最佳時段。請依當天預報、同行者體力與官方活動資訊決定，並預留返程交通時間。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：景點查詢', url: KHH_HOME },
        { label: '高雄市交通局：市區交通資訊', url: TRANSPORT_SRC },
        { label: '高雄旅遊網：活動與消息', url: EVENTS_SRC },
      ],
    },
    en: {
      metaTitle: 'Central Park to the Love River | Combining Two City Stops',
      description:
        'Visiting Kaohsiung’s Love River and Central Park in one day: relative locations, suitable time slots, how to verify transport, and why no distances, boat schedules or fares are listed.',
      h1: 'Combining Central Park with the Love River',
      lead: 'Both are popular Kaohsiung city stops often planned together, but they are separate places. This page covers the linking logic and verification order, with no measured distances, boat schedules or fares.',
      updated: E,
      mapCta: MAP_E,
      sections: [
        {
          heading: 'Treat them as separate places',
          paragraphs: [
            'The park is green space and the Love River is a linear waterfront, with different locations, management and facilities. Do not carry the park page’s listed access, parking notes or exit information over to the waterfront.',
          ],
        },
        {
          heading: 'Verifying the route',
          paragraphs: [
            'To link them on foot, by MRT or by bus, first confirm a same-day map, crossings and any works or event controls, then check the city transport bureau and MRT information. We publish no measured distances or fixed route numbers.',
          ],
        },
        {
          heading: 'Timing and river activities',
          paragraphs: [
            'Late afternoon and evening are often favoured for the waterfront, but lighting, boat operations and events change. We have verified no boat times, fares or show schedules; check official and on-site notices.',
          ],
        },
      ],
      faq: [
        {
          q: 'Is the Love River right beside Central Park?',
          a: 'Both are in the city and combine easily, but they are not the same location. Use an official map and same-day transport information for the relative positions and route.',
        },
        {
          q: 'Are there boat rides?',
          a: 'We have not verified current sailings, fares or operating status and publish no timetable or prices. Check the authority and on-site information.',
        },
        {
          q: 'Is morning or evening better?',
          a: 'We give no fixed best time. Decide from the day’s forecast, your group’s stamina and official event information, and leave time for the return trip.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: attraction lookup', url: KHH_HOME },
        { label: 'Kaohsiung City Transport Bureau', url: TRANSPORT_SRC },
        { label: 'Kaohsiung Travel: events and announcements', url: EVENTS_SRC },
      ],
    },
  },

  {
    slug: 'one-day-itinerary',
    group: 'itinerary',
    related: ['half-day-itinerary', 'first-visit-plan', 'love-river', 'nearby-food'],
    zh: {
      metaTitle: '中央公園一日行程｜公園、商圈與水岸的節奏安排',
      description:
        '一份可自行增刪的高雄中央公園一日建議：上午公園、午後商圈與室內休息、傍晚城市光廊或愛河，附交通、天候與不編造時間長度的說明。',
      h1: '高雄中央公園一日行程建議',
      lead: '這不是套裝行程，也沒有實測分鐘數。以下順序讓你把公園、周邊街區與水岸串起來，並保留因天候或當天公告調整的空間。',
      updated: Z,
      mapCta: MAP_Z,
      itemList: [
        '以捷運 R9 中央公園站為起點，先決定出口與會合點',
        '上午走草地、樹蔭與水景，依當天開放動線調整',
        '中午在周邊街區用餐，並安排一段室內休息',
        '午後逛新堀江、五福一帶，或改往閱讀與商場類空間',
        '傍晚銜接城市光廊或愛河，最後回 R9 或依官方末班資訊返程',
      ],
      sections: [
        {
          heading: '為什麼用這種順序',
          paragraphs: [
            '把較需要體力的戶外段放前面，午後留出室內彈性，較能因應高雄的高溫與午後雷雨。各段之間以步行與大眾運輸銜接，實際路線請依當天地圖與現場指標。',
          ],
        },
        {
          heading: '各場所各自獨立',
          paragraphs: [
            '公園、城市光廊、新堀江與愛河是不同場域，營業、公休、活動與收費各自分開。本站不列店名、票價或場次，也不把一處的開放列示套用到另一處。',
          ],
        },
        {
          heading: '該預留的查核',
          paragraphs: [
            '出發前查中央氣象署預報與警特報、高雄旅遊網活動公告，以及高雄捷運官方時刻資訊。颱風或大型活動期間，請直接縮短戶外段或取消不必要移動。',
          ],
        },
      ],
      faq: [
        {
          q: '一天排得完這些點嗎？',
          a: '取決於步速、天候與停留時間。本站沒有實測各段時間，建議保留刪減空間，不要為了跑完而壓縮休息。',
        },
        {
          q: '需要買票或預約嗎？',
          a: '公園與周邊場域規則各自獨立，本站未核實任何統一票價或預約方式，請查各場所官方資訊。',
        },
        {
          q: '下雨要怎麼改？',
          a: '把上午戶外段縮短，午後改以室內類型場所為主；先查官方氣象與各場所公休資訊。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：中央公園介紹', url: PARK_SRC },
        { label: '高雄旅遊網：城市光廊景點介紹', url: SPOTLIGHT_SRC },
        { label: '中央氣象署：預報與警特報', url: CWA_SRC },
      ],
    },
    en: {
      metaTitle: 'A One-Day Central Park Itinerary | Park, Districts & Waterfront',
      description:
        'A flexible one-day Kaohsiung Central Park plan: park in the morning, shopping and indoor rest in the afternoon, the arcade or Love River in the evening, with transport and weather checks.',
      h1: 'A One-Day Central Park Itinerary',
      lead: 'This is not a package tour and contains no measured minutes. The order links the park, nearby districts and the waterfront while leaving room to adjust for weather or same-day notices.',
      updated: E,
      mapCta: MAP_E,
      itemList: [
        'Start at MRT R9 Central Park and agree on an exit and meeting point',
        'Walk the lawns, shade and water features in the morning, following the paths open that day',
        'Eat in the surrounding streets and schedule an indoor rest',
        'Spend the afternoon in Shinkuchan and Wufu, or switch to reading and mall spaces',
        'Link to the Urban Spotlight Arcade or the Love River in the evening, then return to R9 or follow official last-service information',
      ],
      sections: [
        {
          heading: 'Why this order',
          paragraphs: [
            'Putting the more physical outdoor segment first and keeping the afternoon flexible suits Kaohsiung heat and afternoon storms. Segments connect on foot and by public transport; use a same-day map and on-site signs for the actual route.',
          ],
        },
        {
          heading: 'Every venue is independent',
          paragraphs: [
            'The park, the Urban Spotlight Arcade, Shinkuchan and the Love River are separate places with their own hours, closing days, events and charges. We list no business names, prices or show times, and apply one place’s listing to no other.',
          ],
        },
        {
          heading: 'Checks worth building in',
          paragraphs: [
            'Before leaving, check Central Weather Administration forecasts and warnings, the city events notices and the MRT operator’s timetable. During typhoons or major events, shorten the outdoor part or drop unnecessary transfers.',
          ],
        },
      ],
      faq: [
        {
          q: 'Can all of this fit in one day?',
          a: 'It depends on pace, weather and how long you linger. We have measured no segment times, so keep room to cut stops rather than compressing rest.',
        },
        {
          q: 'Do I need tickets or reservations?',
          a: 'Rules differ between the park and nearby venues, and no uniform price or booking method has been verified here. Check each venue’s own information.',
        },
        {
          q: 'How should I change it in rain?',
          a: 'Shorten the morning outdoor segment and make the afternoon mostly indoor; check the official forecast and each venue’s closing days first.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: Central Park introduction', url: PARK_SRC },
        { label: 'Kaohsiung Travel: Urban Spotlight Arcade listing', url: SPOTLIGHT_SRC },
        { label: 'Central Weather Administration: forecasts and warnings', url: CWA_SRC },
      ],
    },
  },

  {
    slug: 'evening-itinerary',
    group: 'itinerary',
    related: ['central-park-nightlife', 'urban-spotlight-arcade', 'liuhe-night-market', 'photo-spots'],
    zh: {
      metaTitle: '中央公園傍晚與夜間行程｜光環境、晚餐與返程',
      description:
        '一份傍晚才出發的高雄中央公園建議動線：公園短散步、城市光廊與周邊街區用餐，最後查官方末班資訊返程；不列未核實的點燈或營業時段。',
      h1: '中央公園傍晚與夜間行程',
      lead: '時間不多、或想避開白天高溫時，傍晚後再出發是常見做法。本頁提供順序與查核重點，不提供任何固定場次或分鐘數。',
      updated: Z,
      mapCta: MAP_Z,
      itemList: [
        '搭捷運到 R9 中央公園站，先確認出口與回程月台方向',
        '趁天色尚亮走一小段草地與水景，不硬走完整圈',
        '往南銜接城市光廊，依現場狀況決定停留位置',
        '在五福、新堀江或夜市型街區安排晚餐',
        '查高雄捷運官方末班與當天營運資訊後返程',
      ],
      sections: [
        {
          heading: '把戶外段縮短',
          paragraphs: [
            '夜間光線與動線條件和白天不同，建議只走熟悉且當天開放的一小段，並避開池邊、施工圍籬與活動管制區。本站未核實園內各區照明現況。',
          ],
        },
        {
          heading: '光環境與街區各自查證',
          paragraphs: [
            '城市光廊在市府資料中是獨立景點，點燈、展演與攤位狀態會變動；餐飲與購物街區也各有營業與公休。本站不列店名、價格或演出場次。',
          ],
        },
        {
          heading: '返程優先',
          paragraphs: [
            '先查高雄捷運官方首末班與當天營運資訊，再決定晚餐要待多久。遇雷雨或颱風，請依中央氣象署警特報與市府公告提前結束戶外段。',
          ],
        },
      ],
      faq: [
        {
          q: '幾點開始比較適合？',
          a: '本站不提供固定最佳時段，請參考當天日落、預報與各場所營業資訊自行決定，並預留返程時間。',
        },
        {
          q: '晚上公園安全嗎？',
          a: '本站不對夜間照明、人潮或安全狀態作保證。請以現場狀況、同行者組成與官方公告為準。',
        },
        {
          q: '會有燈光表演嗎？',
          a: '本站未核實任何固定演出或點燈場次，請查高雄旅遊網活動頁與現場公告。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：城市光廊景點介紹', url: SPOTLIGHT_SRC },
        { label: '高雄旅遊網：活動與消息', url: EVENTS_SRC },
        { label: '中央氣象署：預報與警特報', url: CWA_SRC },
      ],
    },
    en: {
      metaTitle: 'A Central Park Evening Itinerary | Light, Dinner & Return',
      description:
        'A late-start plan for Kaohsiung Central Park: a short park walk, the Urban Spotlight Arcade, dinner in nearby streets, then an official last-train check — with no unverified lighting or opening times.',
      h1: 'A Late-Afternoon and Evening Itinerary',
      lead: 'When time is short or the daytime heat is strong, starting late is a common choice. This page gives an order and the checks that matter, with no fixed show times or measured minutes.',
      updated: E,
      mapCta: MAP_E,
      itemList: [
        'Arrive at MRT R9 Central Park and note the exit and the return platform direction',
        'Walk a short stretch of lawn and water while there is still light, without forcing a full loop',
        'Head south to the Urban Spotlight Arcade and choose a viewing spot from conditions on site',
        'Have dinner in the Wufu, Shinkuchan or night-market style streets',
        'Check the MRT operator’s last-service information before heading back',
      ],
      sections: [
        {
          heading: 'Keep the outdoor segment short',
          paragraphs: [
            'Light and route conditions differ from daytime. Walk only a short, familiar, open stretch and avoid pond edges, works barriers and event control zones. We have not verified lighting across the park.',
          ],
        },
        {
          heading: 'Verify the light environment and streets separately',
          paragraphs: [
            'The city lists the Urban Spotlight Arcade as a separate attraction, and illumination, performances and stalls change; dining and shopping streets have their own hours and closing days. We list no business names, prices or show schedules.',
          ],
        },
        {
          heading: 'Put the return trip first',
          paragraphs: [
            'Check the MRT operator’s first and last services and same-day notices before deciding how long to stay over dinner. In storms or typhoons, end the outdoor part early using official warnings and city notices.',
          ],
        },
      ],
      faq: [
        {
          q: 'What time should I start?',
          a: 'We give no fixed best time. Use that day’s sunset, forecast and venue hours, and leave time for the return trip.',
        },
        {
          q: 'Is the park safe at night?',
          a: 'We make no claim about night-time lighting, crowds or safety. Rely on conditions on site, your group and official notices.',
        },
        {
          q: 'Will there be a light show?',
          a: 'No fixed performance or illumination schedule has been verified here. Check the city events page and on-site notices.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: Urban Spotlight Arcade listing', url: SPOTLIGHT_SRC },
        { label: 'Kaohsiung Travel: events and announcements', url: EVENTS_SRC },
        { label: 'Central Weather Administration: forecasts and warnings', url: CWA_SRC },
      ],
    },
  },

  {
    slug: 'family-itinerary',
    group: 'itinerary',
    related: ['family-nearby', 'lawn-and-picnic', 'half-day-itinerary', 'things-to-do'],
    zh: {
      metaTitle: '中央公園親子行程｜短動線、休息點與撤退方案',
      description:
        '給帶小孩的高雄中央公園行程建議：縮短戶外段、把休息點排在前段、預留室內撤退選項，並說明設施與活動狀態必須現場查證。',
      h1: '中央公園親子行程建議',
      lead: '親子出遊的重點是可撤退、可休息。以下順序刻意不排滿，也不提供實測時間，方便依小孩狀態與天候增刪。',
      updated: Z,
      mapCta: MAP_Z,
      itemList: [
        '以 R9 中央公園站為起點，先指定明確會合點',
        '選一小段草地與遮蔭作短暫活動，避開池邊與圍籬',
        '在動線前段安排休息與補充體力的空檔',
        '視天候轉往周邊室內類型場所',
        '保留提前返回車站或直接結束行程的彈性',
      ],
      sections: [
        {
          heading: '為什麼不排滿',
          paragraphs: [
            '高溫、午後雷雨與人潮會快速消耗小孩體力。把行程切成短段，並在每段之間留休息與廁所的空檔，比走完預設路線更重要。',
          ],
        },
        {
          heading: '安全與設施查證',
          paragraphs: [
            '池邊、階梯、濕滑鋪面與活動管制區請依現場圍籬與指示行動。遊戲設施、廁所與飲水狀態未經本站核實，也不列設施清單或開放時間。',
          ],
        },
        {
          heading: '天候備案',
          paragraphs: [
            '出發前查中央氣象署預報與警特報、高雄旅遊網活動公告；遇雷雨或颱風直接縮短戶外段。各室內場所營業與公休請自行確認。',
          ],
        },
      ],
      faq: [
        {
          q: '親子行程大概要排多久？',
          a: '本站不提供實測時間；建議以「短段＋休息」為單位，隨小孩狀態與天候增刪，不設硬性時長。',
        },
        {
          q: '有兒童遊戲場或廁所嗎？',
          a: '本站未核實相關設施的現況與位置，請查管理單位公告與現場指標。',
        },
        {
          q: '推嬰兒車方便嗎？',
          a: '本站未完成全園無障礙勘查。請先查 R9 車站平面圖與電梯狀態，再依當天現場動線判斷。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：中央公園介紹', url: PARK_SRC },
        { label: '高雄旅遊網：活動與消息', url: EVENTS_SRC },
        { label: '中央氣象署：預報與警特報', url: CWA_SRC },
      ],
    },
    en: {
      metaTitle: 'A Family Itinerary for Central Park | Short Loops & Rest Stops',
      description:
        'A family plan for Kaohsiung Central Park: shorter outdoor segments, rest points early in the route and an indoor fallback, with all facilities and events verified on site.',
      h1: 'A Family Itinerary for Central Park',
      lead: 'For families, the priority is an exit and a rest point. This order deliberately leaves gaps and gives no measured times, so it can be cut or extended around children and weather.',
      updated: E,
      mapCta: MAP_E,
      itemList: [
        'Start at MRT R9 Central Park and agree on a clear meeting point',
        'Use a short stretch of lawn and shade, avoiding pond edges and barriers',
        'Place a rest and refreshment break early in the route',
        'Move to a nearby indoor venue type if the weather turns',
        'Keep the option of returning to the station or ending the outing early',
      ],
      sections: [
        {
          heading: 'Why the plan is not full',
          paragraphs: [
            'Heat, afternoon storms and crowds drain children’s energy quickly. Short segments with rest and toilet breaks matter more than completing a preset route.',
          ],
        },
        {
          heading: 'Safety and facility checks',
          paragraphs: [
            'Around ponds, steps, wet paving and event control zones, follow on-site barriers and signs. Play equipment, toilets and drinking water have not been verified here, and we list no facility inventory or hours.',
          ],
        },
        {
          heading: 'Weather fallback',
          paragraphs: [
            'Check Central Weather Administration forecasts and warnings and the city events notices before leaving; in storms or typhoons, cut the outdoor part immediately. Confirm each indoor venue’s hours and closing days yourself.',
          ],
        },
      ],
      faq: [
        {
          q: 'How long should a family visit take?',
          a: 'We publish no measured times. Work in short segments plus rests, and adjust for children and weather rather than setting a fixed duration.',
        },
        {
          q: 'Is there a playground or toilet?',
          a: 'We have not verified the current facilities or their locations. Check park authority notices and on-site signs.',
        },
        {
          q: 'Is it easy with a stroller?',
          a: 'No full-site accessibility survey has been completed here. Check the R9 station plan and lift status first, then judge from the routes open that day.',
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
    slug: 'rainy-day-itinerary',
    group: 'itinerary',
    related: ['nearby-indoor', 'wufu-shopping-area', 'half-day-itinerary', 'first-visit-plan'],
    zh: {
      metaTitle: '中央公園雨天行程｜室內為主、戶外為輔的替代動線',
      description:
        '遇到高雄午後雷雨或颱風時，如何把中央公園行程改成室內為主：公園短停留、周邊商場與閱讀空間、餐飲休息與返程安排。',
      h1: '中央公園雨天行程替代方案',
      lead: '雨天的重點不是取消所有計畫，而是把戶外段降到可隨時撤退的長度。本頁不列未核實的場所營業資訊，也不保證任何室內空間當天可用。',
      updated: Z,
      itemList: [
        '先看中央氣象署預報與警特報，決定是否進園',
        '以 R9 車站為基地，只走一小段有遮蔭或靠近出口的動線',
        '雨勢變大即轉往周邊室內類型場所',
        '把用餐與休息安排在室內段，保留體力',
        '依官方交通與氣象資訊決定提前返程或延長室內行程',
      ],
      sections: [
        {
          heading: '戶外段只保留一小段',
          paragraphs: [
            '雨後鋪面、池邊與草地容易濕滑，能見度與照明也可能變差。本站未核實園內排水或遮蔽設施，請以現場圍籬與指示為準，不要為了拍照跨越管制區。',
          ],
        },
        {
          heading: '室內類型與查證',
          paragraphs: [
            '可考慮商場、百貨、閱讀或藝文空間，以及有內用座位的餐飲類型；各場所營業時段、公休日與入場規則需自行確認。本站不推薦特定場館。',
          ],
        },
        {
          heading: '颱風與大型活動',
          paragraphs: [
            '颱風期間請以中央氣象署警特報、市府公告與現場狀況為準，必要時取消戶外段。大型活動也可能改變動線與人潮，出發前查高雄旅遊網活動頁。',
          ],
        },
      ],
      faq: [
        {
          q: '下雨還值得去中央公園嗎？',
          a: '可改成室內為主、公園短停留的型態；是否進園請依當天預報、警特報與現場狀況決定。',
        },
        {
          q: '有推薦的室內景點嗎？',
          a: '本站為獨立非營利指南，不推薦特定場館，也不列未核實地址與營業時間；只提供商場、閱讀空間等類型作參考。',
        },
        {
          q: '雨傘或雨衣哪個適合？',
          a: '本站不提供裝備建議以外的保證；請依當天風力、雨勢與個人需求準備，並留意園內濕滑鋪面。',
        },
      ],
      sources: [
        { label: '中央氣象署：預報與警特報', url: CWA_SRC },
        { label: '高雄旅遊網：景點與商圈查詢', url: KHH_HOME },
        { label: '高雄旅遊網：活動與消息', url: EVENTS_SRC },
      ],
    },
    en: {
      metaTitle: 'A Rainy-Day Central Park Itinerary | Indoors First',
      description:
        'Reshaping a Kaohsiung Central Park visit for afternoon storms or typhoons: a short outdoor segment, nearby indoor venue types, meal breaks and a flexible return.',
      h1: 'A Rainy-Day Alternative for Central Park',
      lead: 'Rain need not cancel everything, but the outdoor part should be short enough to abandon. This page lists no unverified venue hours and guarantees no indoor space will be available.',
      updated: E,
      itemList: [
        'Check the official forecast and warnings before deciding to enter the park',
        'Use R9 station as a base and walk only a short route near shade or an exit',
        'Move to a nearby indoor venue type as soon as the rain strengthens',
        'Place meals and rest within the indoor segment to save energy',
        'Decide on an early return or a longer indoor stay using official transport and weather information',
      ],
      sections: [
        {
          heading: 'Keep only a short outdoor segment',
          paragraphs: [
            'Paving, pond edges and lawns can be slippery after rain, and visibility and lighting may worsen. We have not verified drainage or shelter inside the park; follow on-site barriers and signs and never cross a closed area for a photograph.',
          ],
        },
        {
          heading: 'Indoor types and checks',
          paragraphs: [
            'Consider malls, department stores, reading or arts spaces, and food places with indoor seating; each has its own hours, closing days and entry rules to confirm. We recommend no specific venue.',
          ],
        },
        {
          heading: 'Typhoons and large events',
          paragraphs: [
            'During a typhoon, follow official warnings, city notices and on-site conditions, and cancel the outdoor segment if needed. Large events can change routes and crowds, so check the city events page before leaving.',
          ],
        },
      ],
      faq: [
        {
          q: 'Is Central Park still worth visiting in the rain?',
          a: 'It can become an indoor-first outing with a short park stop. Decide about entering from the day’s forecast, warnings and on-site conditions.',
        },
        {
          q: 'Which indoor attraction do you recommend?',
          a: 'This independent non-profit guide recommends no specific venue and lists no unverified addresses or hours — only types such as malls and reading spaces.',
        },
        {
          q: 'Should I bring an umbrella or raincoat?',
          a: 'We make no gear guarantee; prepare for the day’s wind and rain and your own needs, and watch for slippery paving inside the park.',
        },
      ],
      sources: [
        { label: 'Central Weather Administration: forecasts and warnings', url: CWA_SRC },
        { label: 'Kaohsiung Travel: attractions and district lookup', url: KHH_HOME },
        { label: 'Kaohsiung Travel: events and announcements', url: EVENTS_SRC },
      ],
    },
  },

  {
    slug: 'first-visit-plan',
    group: 'itinerary',
    related: ['one-day-itinerary', 'half-day-itinerary', 'transport', 'things-to-do'],
    zh: {
      metaTitle: '第一次到中央公園｜最短動線與取捨建議',
      description:
        '給第一次造訪高雄中央公園的人：先確認出口與會合點、只抓三件重點、保留交通與天候查核，並說明本站不提供實測時間的原因。',
      h1: '第一次到中央公園怎麼安排',
      lead: '第一次來不必把公園與周邊一次走完。這頁把決策順序整理成幾步，幫你把時間留給真正想看的東西。',
      updated: Z,
      mapCta: MAP_Z,
      itemList: [
        '先查捷運 R9 官方車站頁，選定一個出口與會合點',
        '進園後先走草地、樹蔭與水景其中一小段',
        '依天候與體力決定要不要加城市光廊或新堀江',
        '把用餐與休息排在動線中段',
        '查官方氣象與交通資訊後決定返程時間',
      ],
      sections: [
        {
          heading: '先解決地點混淆',
          paragraphs: [
            'Google 地圖列的地址同時是 R9 站址，市府公園頁則列另一處地址。兩者都是參考點，不是測繪邊界；約人時請用出口編號或街角，而不是只寫公園名稱。',
          ],
        },
        {
          heading: '只抓三件重點',
          paragraphs: [
            '建議把「一段草地或樹蔭」、「一處水景或廣場」、「一個周邊順遊場域」當作上限。本站沒有實測環園距離，也不建議用面積換算步行時間。',
          ],
        },
        {
          heading: '出發前查什麼',
          paragraphs: [
            '查高雄捷運官方車站頁與時刻、中央氣象署預報與警特報，以及高雄旅遊網活動公告。公園、車站與周邊場域的開放與營業資訊各自獨立。',
          ],
        },
      ],
      faq: [
        {
          q: '第一次去大概要留多少時間？',
          a: '本站不提供實測時間或環園距離；請依步速、天候與是否加周邊順遊自行調整，並保留休息空檔。',
        },
        {
          q: '該從哪個出口出站？',
          a: '請用高雄捷運官方車站平面圖選出口，並以當天電梯與動線狀態為準；本站不指定單一「最佳出口」。',
        },
        {
          q: '需要事先查活動嗎？',
          a: '建議查高雄旅遊網活動頁。活動可能改變動線與人潮，但本站不列未核實的活動場次。',
        },
      ],
      sources: [
        { label: '高雄捷運：R9 中央公園站車站資訊', url: STATION_SRC },
        { label: '高雄旅遊網：中央公園介紹', url: PARK_SRC },
        { label: '中央氣象署：預報與警特報', url: CWA_SRC },
      ],
    },
    en: {
      metaTitle: 'First Visit to Central Park | A Short Route and Trade-Offs',
      description:
        'For a first visit to Kaohsiung Central Park: fix an exit and meeting point, pick three priorities, keep transport and weather checks, and understand why no measured times are given.',
      h1: 'Planning a First Visit to Central Park',
      lead: 'A first visit does not need to cover the park and every neighbouring district. This page turns the decisions into a few steps so the time goes to what you actually want to see.',
      updated: E,
      mapCta: MAP_E,
      itemList: [
        'Check the MRT R9 station page and choose one exit and meeting point',
        'Walk one short stretch of lawn, shade or water after entering',
        'Decide on the Urban Spotlight Arcade or Shinkuchan based on weather and energy',
        'Place a meal and rest break in the middle of the route',
        'Check official weather and transport information before fixing the return time',
      ],
      sections: [
        {
          heading: 'Resolve the location confusion first',
          paragraphs: [
            'The address on Google Maps is also the R9 station address, while the city park page lists another. Both are reference points, not a surveyed boundary; for a meeting point use an exit number or street corner rather than just the park name.',
          ],
        },
        {
          heading: 'Pick only three priorities',
          paragraphs: [
            'Treat one stretch of lawn or shade, one water feature or plaza, and one neighbouring area as the upper limit. We have measured no circuit distance and advise against converting area into walking time.',
          ],
        },
        {
          heading: 'What to check before leaving',
          paragraphs: [
            'Use the MRT operator’s station page and timetable, Central Weather Administration forecasts and warnings, and the city events notices. Park, station and nearby venues each have their own access and trading information.',
          ],
        },
      ],
      faq: [
        {
          q: 'How much time should I allow for a first visit?',
          a: 'We publish no measured times or circuit distance. Adjust for pace, weather and any add-on stops, and keep room for a rest.',
        },
        {
          q: 'Which exit should I use?',
          a: 'Choose from the MRT operator’s station plan, and follow that day’s lift and route status. We name no single “best exit”.',
        },
        {
          q: 'Should I check events in advance?',
          a: 'The city events page is worth checking. Events may change routes and crowds, but we list no unverified event schedules.',
        },
      ],
      sources: [
        { label: 'Kaohsiung MRT: R9 Central Park station information', url: STATION_SRC },
        { label: 'Kaohsiung Travel: Central Park introduction', url: PARK_SRC },
        { label: 'Central Weather Administration: forecasts and warnings', url: CWA_SRC },
      ],
    },
  },

  {
    slug: 'photo-walk-itinerary',
    group: 'itinerary',
    related: ['photo-spots', 'walking-route', 'urban-spotlight-arcade', 'love-river'],
    zh: {
      metaTitle: '中央公園攝影散步路線｜光線、取景與動線順序',
      description:
        '一條可自行調整的高雄中央公園攝影散步順序：草地與樹蔭、池面倒影、廣場與街區光環境，並說明為何不列固定拍點座標與時段。',
      h1: '中央公園攝影散步建議動線',
      lead: '拍照行程的順序，多半由光線與天候決定。本頁提供可替換的段落與查核重點，不列未實測的拍點座標、精確時段或保證景色。',
      updated: Z,
      mapCta: MAP_Z,
      itemList: [
        '以 R9 出口為起點，先確認當天動線與會合點',
        '先在草地與樹蔭段觀察光線與人潮',
        '續走池面與反射倒影一帶，留意濕滑鋪面',
        '傍晚視天候銜接城市光廊或周邊街區光環境',
        '依官方氣象與交通資訊結束動線並返程',
      ],
      sections: [
        {
          heading: '用光線決定順序',
          paragraphs: [
            '同一處草地、池面與廣場在不同時段差異很大，本站不提供固定「最佳拍攝時間」。請參考中央氣象署預報與當天日落資訊，並避開正午高溫與雨後濕滑區。',
          ],
        },
        {
          heading: '拍攝與現場規範',
          paragraphs: [
            '請遵守現場圍籬、活動管制與他人隱私，不跨越封閉區域，也不以照片證明設施今日開放。大型器材、腳架與商業拍攝是否需要申請，請向管理單位查證。',
          ],
        },
        {
          heading: '與周邊場域串聯',
          paragraphs: [
            '城市光廊在市府資料中是獨立景點，夜間光環境與展演狀態會變動；愛河水岸亦屬另一場域。本站未核實任何點燈或演出時段，請查官方與現場公告。',
          ],
        },
      ],
      faq: [
        {
          q: '幾點光線最好？',
          a: '本站不提供固定最佳時段；請依當季日照、當天預報與現場人潮自行判斷。',
        },
        {
          q: '可以架腳架或拍婚紗嗎？',
          a: '相關規範未經本站核實，請直接向管理單位與現場人員確認，不要假設可使用大型器材。',
        },
        {
          q: '有固定拍點座標嗎？',
          a: '本站未提供實測拍點座標，也不列未核實的設施位置；請以當天開放動線與地圖自行尋找。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：中央公園介紹與景觀', url: PARK_SRC },
        { label: '高雄旅遊網：城市光廊景點介紹', url: SPOTLIGHT_SRC },
        { label: '中央氣象署：預報與警特報', url: CWA_SRC },
      ],
    },
    en: {
      metaTitle: 'A Central Park Photo Walk | Light, Framing and Order',
      description:
        'A flexible photo-walk order for Kaohsiung Central Park: lawn and shade, pond reflections, plazas and nearby light environments, with an explanation of why no fixed coordinates or times are listed.',
      h1: 'A Suggested Photo Walk at Central Park',
      lead: 'A photography route is usually set by light and weather. This page offers interchangeable segments and checks, with no surveyed coordinates, fixed times or promised views.',
      updated: E,
      mapCta: MAP_E,
      itemList: [
        'Start at an R9 exit and confirm the day’s route and meeting point',
        'Read the light and crowds on the lawn and shade segment first',
        'Continue to the pond and reflection area, watching for slippery paving',
        'Link to the Urban Spotlight Arcade or nearby streets in the evening if weather allows',
        'Close the route and return using official weather and transport information',
      ],
      sections: [
        {
          heading: 'Let the light set the order',
          paragraphs: [
            'The same lawn, pond and plaza look very different by time of day, and we give no fixed “best shooting time”. Use the official forecast and that day’s sunset, and avoid midday heat and slippery areas after rain.',
          ],
        },
        {
          heading: 'Photography and on-site rules',
          paragraphs: [
            'Respect barriers, event controls and other people’s privacy; do not cross closed areas, and do not treat a photograph as proof that a facility is open today. For tripods, large equipment or commercial shoots, check with the park authority whether permission is needed.',
          ],
        },
        {
          heading: 'Linking neighbouring areas',
          paragraphs: [
            'The city lists the Urban Spotlight Arcade as a separate attraction, and its night lighting and performances change; the Love River waterfront is another separate place. We have verified no illumination or show times, so check official and on-site notices.',
          ],
        },
      ],
      faq: [
        {
          q: 'What time is the light best?',
          a: 'We give no fixed best time. Judge from seasonal daylight, the day’s forecast and crowds on site.',
        },
        {
          q: 'Can I use a tripod or shoot a wedding session?',
          a: 'Those rules have not been verified here. Ask the park authority and on-site staff rather than assuming large equipment is allowed.',
        },
        {
          q: 'Are there exact photo-spot coordinates?',
          a: 'We publish no surveyed coordinates or unverified facility positions. Use the routes open that day and a map.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: Central Park introduction and landscape', url: PARK_SRC },
        { label: 'Kaohsiung Travel: Urban Spotlight Arcade listing', url: SPOTLIGHT_SRC },
        { label: 'Central Weather Administration: forecasts and warnings', url: CWA_SRC },
      ],
    },
  },

  {
    slug: 'weekend-itinerary',
    group: 'itinerary',
    related: ['one-day-itinerary', 'events', 'breakfast-and-brunch', 'parking'],
    zh: {
      metaTitle: '中央公園週末行程｜人潮、活動與停車的應對',
      description:
        '週末造訪高雄中央公園的安排建議：先查活動與氣象、把交通與停車列為變數、縮短戶外段並保留室內選項，不列未核實的活動場次與費率。',
      h1: '中央公園週末行程與人潮應對',
      lead: '週末與連假的人潮、活動與停車狀況和平日不同。這頁提供調整順序的方法，而不是一張固定時刻表。',
      updated: Z,
      mapCta: MAP_Z,
      itemList: [
        '出發前先查高雄旅遊網活動頁與中央氣象署預報',
        '以捷運 R9 為主要進出點，開車者另查停車與費率',
        '把公園散步排在較不擁擠的時段，並縮短戶外段',
        '午後轉往周邊室內或餐飲類型場所休息',
        '依當天人潮與官方交通資訊決定返程時間',
      ],
      sections: [
        {
          heading: '先查會改變動線的事',
          paragraphs: [
            '市集、展演與大型活動可能分區管制或調整出入口。本站未核實任何固定活動場次，出發前請查高雄旅遊網活動頁與現場公告，並保留改道彈性。',
          ],
        },
        {
          heading: '交通與停車是變數',
          paragraphs: [
            '週末車位緊張，公園免費也不代表停車免費；費率、車格與充電服務會變動。建議優先搭捷運，或把車停在車站周邊再轉乘，並以高雄市交通局與現場公告為準。',
          ],
        },
        {
          heading: '把休息排進行程',
          paragraphs: [
            '人潮與高溫會拉長等待與步行感受，建議把用餐、補水與室內休息排在中段。遇雷雨或颱風，請依中央氣象署警特報與市府公告縮短或取消戶外段。',
          ],
        },
      ],
      faq: [
        {
          q: '週末去會很多人嗎？',
          a: '本站沒有即時人流資料，無法保證擁擠程度。請參考當天活動公告，並把行程排得有彈性。',
        },
        {
          q: '週末停車好停嗎？',
          a: '本站不提供車位或費率數據。請查高雄市交通局與現場資訊，並優先考慮捷運。',
        },
        {
          q: '會有市集或表演嗎？',
          a: '本站未核實固定活動場次，不列時間表；請查高雄旅遊網活動頁與主辦單位公告。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：活動與消息', url: EVENTS_SRC },
        { label: '高雄市交通局：停車與交通資訊', url: TRANSPORT_SRC },
        { label: '中央氣象署：預報與警特報', url: CWA_SRC },
      ],
    },
    en: {
      metaTitle: 'A Weekend Central Park Itinerary | Crowds, Events & Parking',
      description:
        'A weekend plan for Kaohsiung Central Park: check events and weather, treat parking as a variable, shorten the outdoor segment and keep an indoor fallback.',
      h1: 'A Weekend Itinerary and Crowd Planning',
      lead: 'Weekends and holidays differ from weekdays in crowds, events and parking. This page offers a way to adjust the order, not a fixed timetable.',
      updated: E,
      mapCta: MAP_E,
      itemList: [
        'Check the city events page and the official forecast before leaving',
        'Use MRT R9 as the main access point; drivers verify parking and rates separately',
        'Place the park walk in a less crowded slot and keep it short',
        'Move to nearby indoor or dining venue types for an afternoon rest',
        'Fix the return time from that day’s crowds and official transport information',
      ],
      sections: [
        {
          heading: 'Check what can change the route',
          paragraphs: [
            'Markets, performances and large events can zone areas or shift entrances. We have verified no fixed event schedule; check the city events page and on-site notices before leaving, and keep room to reroute.',
          ],
        },
        {
          heading: 'Transport and parking are variables',
          paragraphs: [
            'Spaces are tight at weekends, and free park access does not mean free parking; rates, bays and charging services change. The MRT is usually simpler, or park near a station and transfer. Use the city transport bureau and on-site notices.',
          ],
        },
        {
          heading: 'Build rest into the plan',
          paragraphs: [
            'Crowds and heat lengthen the feel of waits and walks, so put meals, water and indoor rests in the middle. In storms or typhoons, shorten or cancel the outdoor part using official warnings and city notices.',
          ],
        },
      ],
      faq: [
        {
          q: 'Is it very crowded at weekends?',
          a: 'We have no live crowd data and cannot promise a level of busy-ness. Check that day’s event notices and keep the plan flexible.',
        },
        {
          q: 'Is parking easy at weekends?',
          a: 'We publish no space or rate data. Check the city transport bureau and on-site information, and favour the MRT.',
        },
        {
          q: 'Will there be a market or performance?',
          a: 'No fixed event schedule has been verified, so we list none. Check the city events page and organiser notices.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: events and announcements', url: EVENTS_SRC },
        { label: 'Kaohsiung City Transport Bureau: parking and transport', url: TRANSPORT_SRC },
        { label: 'Central Weather Administration: forecasts and warnings', url: CWA_SRC },
      ],
    },
  },
];

/** 2 C-group pages from topics.p1.ts + 10 pages above = 12 P2 topics. */
export const P2_TOPICS: Topic[] = [...P2_NEARBY_TOPICS, ...P2_OWN_TOPICS];
