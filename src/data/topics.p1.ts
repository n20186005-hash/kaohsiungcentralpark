/**
 * P1: 16 additional Chinese topic pages (each with an English translation).
 *
 * A / transport: 5 origin- and access-specific guides.
 * B / park: 6 pages about hours, cost, water, lawn, layout and facilities.
 * C / nearby: 5 pages about the arcade, shopping area, cafés, market and indoors.
 *
 * P2_NEARBY_TOPICS at the bottom holds 2 more C-group pages assigned to P2.
 */
import type { Topic } from './topics';
import {
  PARK_SRC,
  STATION_SRC,
  PLAN_SRC,
  SPOTLIGHT_SRC,
  SHINKUCHAN_SRC,
  TRANSPORT_SRC,
  EVENTS_SRC,
  CWA_SRC,
  KHH_HOME,
  KRTC_HOME,
} from './topic-sources';

const Z = '2026 年 11 月 6 日';
const E = '6 November 2026';
const MAP_Z = '在 Google 地圖開啟定位點 ↗';
const MAP_E = 'Open the Google Maps reference point ↗';

export const P1_TOPICS: Topic[] = [
  {
    slug: 'from-kaohsiung-station',
    group: 'transport',
    related: ['transport', 'mrt-central-park-station', 'mrt-exits', 'bus-and-transfer'],
    zh: {
      metaTitle: '高雄車站到中央公園｜捷運紅線、轉乘與出站步行',
      description:
        '從高雄車站前往高雄中央公園的路線選擇：捷運紅線直達 R9 中央公園站、公車與步行轉乘的比較，以及出站後如何確認出口與會合點。',
      h1: '從高雄車站到中央公園',
      lead: '高雄車站與中央公園都在捷運紅線上，是多數旅客最簡單的起點。本頁說明如何查核當天班次、何時該改走公車，以及出站後該如何定位，不列未核實的車程時間與票價。',
      updated: Z,
      mapCta: MAP_Z,
      sections: [
        {
          heading: '捷運紅線：最直接的選擇',
          paragraphs: [
            '由高雄車站搭乘高雄捷運紅線，往南於 R9 中央公園站下車即可抵達公園周邊。首末班、班距與當天營運狀態請以高雄捷運官方時刻表與車站頁為準，本站不複製可能過期的時刻資料。',
          ],
        },
        {
          heading: '公車、計程車與步行轉乘',
          paragraphs: [
            '若行李較多或想避開站內轉乘，可比較市區公車、計程車與步行加捷運的組合。中山一路沿線站位與路線可能調整，請以高雄市交通局或客運業者即時資訊為準；本站不列特定路線號碼。',
          ],
        },
        {
          heading: '出站後先確認地點',
          paragraphs: [
            'R9 有多個出口，通往公園不同側與周邊街區。約人時建議直接指定出口編號或街角，而不是只寫「中央公園」；Google 地圖列的地址同時是車站地址，不等於公園唯一入口。',
          ],
        },
      ],
      faq: [
        {
          q: '從高雄車站搭捷運要轉車嗎？',
          a: '兩站都在紅線上，一般可直達 R9 中央公園站；實際運行方式與當天是否有調整，請查高雄捷運官方車站頁與時刻表。',
        },
        {
          q: '出站後走多久會到公園？',
          a: '本站未提供實測步行時間。公園與車站相鄰但出口分散，請依所選出口與地圖定位點判斷，並把天候與同行者步速納入考量。',
        },
        {
          q: '帶大件行李適合從車站直接走過去嗎？',
          a: '若行李較多，可先比較捷運、公車與計程車，並確認車站電梯與出口當天是否可用；本站未完成全路線無障礙勘查。',
        },
      ],
      sources: [
        { label: '高雄捷運：R9 中央公園站車站資訊', url: STATION_SRC },
        { label: '高雄捷運：車站平面圖與出口', url: PLAN_SRC },
        { label: '高雄市交通局：市區交通資訊', url: TRANSPORT_SRC },
      ],
    },
    en: {
      metaTitle: 'Kaohsiung Main Station to Central Park | MRT Red Line & Exits',
      description:
        'Travel from Kaohsiung Main Station to Central Park: the direct MRT Red Line ride to R9, when a bus or taxi makes sense, and how to fix an exit and meeting point.',
      h1: 'From Kaohsiung Main Station to Central Park',
      lead: 'Both stations are on the MRT Red Line, which makes this the simplest starting point for many visitors. This page explains how to check same-day service, when a bus or taxi is worth comparing, and how to orient yourself after exiting — without unverified travel times or fares.',
      updated: E,
      mapCta: MAP_E,
      sections: [
        {
          heading: 'MRT Red Line: the direct option',
          paragraphs: [
            'Take the Red Line south from Kaohsiung Main Station and get off at R9 Central Park for the park’s edge. First and last trains, frequency and same-day service status belong to the operator’s timetable and station page; we do not republish timetables that may be out of date.',
          ],
        },
        {
          heading: 'Bus, taxi and walking combinations',
          paragraphs: [
            'With luggage, or if you would rather avoid an in-station transfer, compare city buses, taxis and a walk-plus-MRT option. Stops and routes along Zhongshan 1st Road change; use the city transport bureau or the operator’s live information rather than any route number listed by a third party.',
          ],
        },
        {
          heading: 'Fix the location after exiting',
          paragraphs: [
            'R9 has several exits serving different sides of the park and nearby streets. For a meeting point, name an exit number or a street corner instead of just “Central Park”. The address shown on Google Maps is also the station address, not the park’s only entrance.',
          ],
        },
      ],
      faq: [
        {
          q: 'Do I need to change trains from Kaohsiung Main Station?',
          a: 'Both are on the Red Line, so a direct ride to R9 Central Park is normally possible. Check the operator’s station page and timetable for same-day arrangements.',
        },
        {
          q: 'How long is the walk from the exit to the park?',
          a: 'We publish no measured walking time. The park adjoins the station but the exits are spread out, so use your chosen exit and a map reference point, allowing for weather and pace.',
        },
        {
          q: 'Is it practical to walk over with large luggage?',
          a: 'With large bags, compare the MRT, bus and taxi first, and check whether station lifts and exits are available that day. This site has not surveyed the whole route for step-free access.',
        },
      ],
      sources: [
        { label: 'Kaohsiung MRT: R9 Central Park station information', url: STATION_SRC },
        { label: 'Kaohsiung MRT: station plan and exits', url: PLAN_SRC },
        { label: 'Kaohsiung City Transport Bureau', url: TRANSPORT_SRC },
      ],
    },
  },

  {
    slug: 'from-zuoying-hsr',
    group: 'transport',
    related: ['transport', 'from-kaohsiung-station', 'bus-and-transfer', 'first-visit-plan'],
    zh: {
      metaTitle: '左營高鐵站到中央公園｜高鐵轉捷運與進城方式',
      description:
        '從高鐵左營站前往高雄中央公園的轉乘說明：高鐵站與捷運站的銜接、紅線前往 R9 的查核方式，以及攜帶行李或遇到班次變動時的替代選擇。',
      h1: '從高鐵左營站到中央公園',
      lead: '高鐵左營站是許多跨城旅客的入境點。本頁整理「高鐵轉捷運」的觀念與查核順序，並提醒高鐵時刻與捷運班次是兩套獨立資訊，不提供未核實的總車程或票價。',
      updated: Z,
      mapCta: MAP_Z,
      sections: [
        {
          heading: '先分清三個「站」',
          paragraphs: [
            '高鐵左營站、台鐵左營／新左營站與高雄捷運左營站（R16）是相關但不同的設施，站內轉乘動線與出入口各異。出發前先在地圖上確認自己要走到哪一個捷運入口，再查當天營運資訊。',
          ],
        },
        {
          heading: '捷運紅線南下到 R9',
          paragraphs: [
            '由左營站搭紅線往南可達 R9 中央公園站。請以高雄捷運官方時刻表確認首末班與班距；遇到列車調整或大型活動散場，轉乘時間與人潮都會改變，不宜套用固定分鐘數。',
          ],
        },
        {
          heading: '行李、計程車與其他選擇',
          paragraphs: [
            '同行者較多或行李體積大時，可把計程車、市區公車與捷運並列比較，並現場確認電梯與無障礙動線。高雄市交通局提供市區交通查詢入口，費率與路線以官方及現場公告為準。',
          ],
        },
      ],
      faq: [
        {
          q: '高鐵左營站下車後可以直接走到中央公園嗎？',
          a: '兩地距離不適合以步行當作一般選擇。實務上多會轉乘捷運或其他市區交通工具，實際路線與時間請以官方查詢結果為準。',
        },
        {
          q: '高鐵票與捷運票可以一起買嗎？',
          a: '票種、聯票與優惠方案會變動，本站無法核實現行組合，請直接查高鐵與高雄捷運官方售票說明，不要依第三方舊資料判斷。',
        },
        {
          q: '抵達時間很晚怎麼辦？',
          a: '高鐵與捷運各有自己的末班時間，且不等於公園開放狀態。請先查兩邊官方時刻表，再決定是否改搭其他交通工具或調整住宿安排。',
        },
      ],
      sources: [
        { label: '高雄捷運：R9 中央公園站車站資訊', url: STATION_SRC },
        { label: '高雄捷運官方首頁：時刻與營運資訊入口', url: KRTC_HOME },
        { label: '高雄市交通局：市區交通資訊', url: TRANSPORT_SRC },
      ],
    },
    en: {
      metaTitle: 'Zuoying HSR to Central Park | HSR-to-MRT Transfer Guide',
      description:
        'Getting from Zuoying HSR Station to Kaohsiung Central Park: how the HSR and MRT stations connect, checking the Red Line ride to R9, and alternatives with luggage or late arrivals.',
      h1: 'From Zuoying HSR Station to Central Park',
      lead: 'Zuoying HSR is the arrival point for many intercity travellers. This page sets out the HSR-to-MRT logic and what to verify, and notes that HSR and MRT timetables are separate systems — no unverified total journey time or fares.',
      updated: E,
      mapCta: MAP_E,
      sections: [
        {
          heading: 'Three distinct stations',
          paragraphs: [
            'Zuoying HSR, the conventional rail stations in the same area and Zuoying MRT (R16) are related but separate facilities with different transfer paths and entrances. Identify the exact MRT entrance on a map before you set off, then check same-day service.',
          ],
        },
        {
          heading: 'South on the MRT Red Line to R9',
          paragraphs: [
            'The Red Line runs south from Zuoying to R9 Central Park. Use the operator’s timetable for first and last trains and frequency; service adjustments or event crowds change transfer time, so a fixed number of minutes would be misleading.',
          ],
        },
        {
          heading: 'Luggage, taxis and other options',
          paragraphs: [
            'For a group or bulky luggage, compare taxis, city buses and the MRT, and check lift and step-free routes on site. The city transport bureau provides a lookup entry point; fares and routes always come from official and on-site notices.',
          ],
        },
      ],
      faq: [
        {
          q: 'Can I walk from Zuoying HSR to Central Park?',
          a: 'It is not a practical walking distance for a normal visit. Most travellers transfer to the MRT or another city transport option; use official journey planners for the current route and time.',
        },
        {
          q: 'Can HSR and MRT tickets be bought together?',
          a: 'Ticket types, joint offers and discounts change and we cannot verify current bundles. Check the HSR and MRT official ticketing pages rather than old third-party summaries.',
        },
        {
          q: 'What if I arrive late at night?',
          a: 'The HSR and MRT each have their own last services, and neither determines park access. Check both official timetables first, then decide on another mode of transport or on where to stay.',
        },
      ],
      sources: [
        { label: 'Kaohsiung MRT: R9 Central Park station information', url: STATION_SRC },
        { label: 'Kaohsiung MRT official site: timetable and service entry point', url: KRTC_HOME },
        { label: 'Kaohsiung City Transport Bureau', url: TRANSPORT_SRC },
      ],
    },
  },

  {
    slug: 'from-airport',
    group: 'transport',
    related: ['transport', 'bus-and-transfer', 'parking', 'first-visit-plan'],
    zh: {
      metaTitle: '小港機場到中央公園｜進市區交通與轉乘查核',
      description:
        '由高雄小港機場前往高雄中央公園的交通選擇：機場與市區捷運的銜接觀念、公車與計程車的查核方式，以及航班延誤時該怎麼調整行程。',
      h1: '從小港機場到中央公園',
      lead: '小港機場在南側，中央公園在市區核心。本頁只整理可查核的交通選擇與官方查詢入口，不列未核實的班次、路線號碼、車資或固定車程時間。',
      updated: Z,
      mapCta: MAP_Z,
      sections: [
        {
          heading: '先確認機場當天的交通狀態',
          paragraphs: [
            '機場聯外交通會配合航班、施工與活動調整。落地後先看機場與高雄市交通局的即時公告，再決定使用軌道、公車或計程車，不要依賴舊文章裡的單一路線。',
          ],
        },
        {
          heading: '軌道轉乘與 R9',
          paragraphs: [
            '不論由機場採取何種方式進市區，最後一段常見做法是接上高雄捷運紅線並在 R9 中央公園站下車。紅線首末班、當天營運狀態與出口配置，請以高雄捷運官方車站頁為準。',
          ],
        },
        {
          heading: '行李、多人同行與夜間抵達',
          paragraphs: [
            '攜帶大件行李、多人同行或晚間落地時，計程車與機場接駁的相對便利性會提高；費率、排班與候車位置以現場公告為準。若航班延誤，先查官方末班資訊再決定是否直接進城。',
          ],
        },
      ],
      faq: [
        {
          q: '從機場有直達中央公園的車嗎？',
          a: '本站不列未核實的固定路線或直達班次。請以機場、高雄市交通局與高雄捷運的即時資訊為準，並把轉乘次數與行李量一併考量。',
        },
        {
          q: '機場到公園大約要多久？',
          a: '本站未提供實測車程。時間受班次、轉乘、天候與人潮影響，建議用官方查詢工具在出發當天估算。',
        },
        {
          q: '紅眼航班抵達還能進市區嗎？',
          a: '請先查機場聯外交通與捷運官方末班／首班資訊，再決定是否先住宿。公園的開放列示也不等於夜間有同樣的照明與服務。',
        },
      ],
      sources: [
        { label: '高雄市交通局：市區交通與機場聯外資訊', url: TRANSPORT_SRC },
        { label: '高雄捷運：R9 中央公園站車站資訊', url: STATION_SRC },
        { label: '高雄旅遊網：交通與景點查詢', url: KHH_HOME },
      ],
    },
    en: {
      metaTitle: 'Kaohsiung Airport to Central Park | City Transfer Options',
      description:
        'Getting from Kaohsiung International Airport (Siaogang) to Central Park: connecting to the MRT, verifying buses and taxis, and adjusting the plan when a flight is delayed.',
      h1: 'From Kaohsiung Airport to Central Park',
      lead: 'Siaogang airport is south of the city while Central Park sits in the centre. This page lists verifiable options and official lookup pages only — no unverified schedules, route numbers, fares or fixed journey times.',
      updated: E,
      mapCta: MAP_E,
      sections: [
        {
          heading: 'Check same-day airport transport first',
          paragraphs: [
            'Airport links change with flights, works and events. After landing, read the airport and city transport bureau notices before choosing rail, bus or taxi, rather than relying on a single route from an old article.',
          ],
        },
        {
          heading: 'Rail connections and R9',
          paragraphs: [
            'Whichever mode you use into the city, a common final leg is the MRT Red Line to R9 Central Park. Check the operator’s station page for first and last trains, same-day service status and exit layout.',
          ],
        },
        {
          heading: 'Luggage, groups and late arrivals',
          paragraphs: [
            'With large bags, a group or a night arrival, taxis and airport transfers may be relatively more convenient; rates, queues and pick-up points follow on-site notices. After a delayed flight, check official last-service information before heading into town.',
          ],
        },
      ],
      faq: [
        {
          q: 'Is there a direct service from the airport to the park?',
          a: 'We do not publish unverified fixed routes or direct services. Use airport, city transport bureau and MRT live information, and weigh transfer count against luggage.',
        },
        {
          q: 'How long does the airport-to-park trip take?',
          a: 'We publish no measured journey time. It depends on service, transfers, weather and crowds, so estimate it with official tools on the day.',
        },
        {
          q: 'Can I still reach the city after a red-eye flight?',
          a: 'Check official last and first services for airport links and the MRT first, then decide whether to stay nearby overnight. A listed park opening window is not a promise of night-time lighting or services.',
        },
      ],
      sources: [
        { label: 'Kaohsiung City Transport Bureau: city and airport links', url: TRANSPORT_SRC },
        { label: 'Kaohsiung MRT: R9 Central Park station information', url: STATION_SRC },
        { label: 'Kaohsiung Travel: transport and attraction lookup', url: KHH_HOME },
      ],
    },
  },

  {
    slug: 'bus-and-transfer',
    group: 'transport',
    related: ['transport', 'mrt-exits', 'from-kaohsiung-station', 'location-map'],
    zh: {
      metaTitle: '中央公園公車與轉乘｜站位、路線與查詢方式',
      description:
        '說明如何查詢高雄中央公園周邊的市區公車與轉乘資訊：中山一路、五福三路沿線站位觀念、官方即時查詢入口，以及為何本站不列固定路線號碼。',
      h1: '中央公園周邊公車與轉乘',
      lead: '公車路線、站位與班次會隨政策調整，第三方文章很容易過期。本頁把重點放在「怎麼查」而不是「抄一組號碼」，並說明與捷運 R9 轉乘時該注意的事。',
      updated: Z,
      sections: [
        {
          heading: '公園周邊的路廊觀念',
          paragraphs: [
            '中央公園周邊主要幹道包含中山一路與五福三路，市區公車多沿這些路廊設站。實際站位名稱、方向與可搭乘路線請查高雄市交通局或客運業者即時資訊；不同方向的同名站位不一定能互相替代。',
          ],
        },
        {
          heading: '與捷運 R9 的轉乘',
          paragraphs: [
            '捷運適合處理長距離移動，公車則可補最後一段。轉乘時先確認下車站位、過街位置與當天施工或活動管制，再決定要不要出站步行；大型活動散場時，站位可能臨時調整。',
          ],
        },
        {
          heading: '不列固定號碼的原因',
          paragraphs: [
            '路線號碼、班次間距與票價屬高變動資訊。本站沒有當天官方資料可核對，因此不提供號碼清單，避免讓讀者照著過期資訊等車。若要安排無障礙動線，也請直接向業者確認低地板班次。',
          ],
        },
      ],
      faq: [
        {
          q: '中央公園附近有公車站嗎？',
          a: '中山一路、五福三路沿線有市區公車服務這一帶，但站位與路線會變動。請用高雄市交通局或客運業者的即時查詢確認，不要依據舊文章。',
        },
        {
          q: '幾號公車可以到中央公園？',
          a: '本站刻意不列路線號碼，因為無法核實當天現行路線。官方查詢工具會給出最新號碼、站位與預估到站時間。',
        },
        {
          q: '搭公車比較省錢嗎？',
          a: '票價與優惠方案會變動，本站不比較未核實的費用。請以官方票價公告為準，並把候車與轉乘時間一併考量。',
        },
      ],
      sources: [
        { label: '高雄市交通局：市區公車與即時資訊', url: TRANSPORT_SRC },
        { label: '高雄捷運：R9 中央公園站與轉乘資訊', url: STATION_SRC },
        { label: '高雄旅遊網：中央公園介紹', url: PARK_SRC },
      ],
    },
    en: {
      metaTitle: 'Buses & Transfers Near Central Park | How to Check Current Routes',
      description:
        'How to check city buses around Kaohsiung Central Park: the Zhongshan 1st Road and Wufu 3rd Road corridors, official live lookup pages, and why this guide lists no fixed route numbers.',
      h1: 'City Buses and Transfers near Central Park',
      lead: 'Bus routes, stops and frequencies change with policy, so third-party summaries age quickly. This page focuses on how to check rather than reproducing a list of numbers, and on what to watch when transferring to MRT R9.',
      updated: E,
      sections: [
        {
          heading: 'The corridors around the park',
          paragraphs: [
            'Zhongshan 1st Road and Wufu 3rd Road are the main roads beside the park, and city buses generally stop along these corridors. Verify stop names, direction and usable routes with the city transport bureau or the operator; stops with similar names on opposite sides are not interchangeable.',
          ],
        },
        {
          heading: 'Transferring to MRT R9',
          paragraphs: [
            'The MRT handles the longer distance and a bus can cover the final leg. Before transferring, confirm the stop, the crossing point, and any works or event controls that day; stops may be moved temporarily when a large event finishes.',
          ],
        },
        {
          heading: 'Why no route numbers are listed',
          paragraphs: [
            'Route numbers, frequencies and fares are highly volatile. With no same-day official data to verify, we publish no list that could leave a reader waiting for a discontinued service. For step-free travel, ask the operator directly about low-floor availability.',
          ],
        },
      ],
      faq: [
        {
          q: 'Are there bus stops near Central Park?',
          a: 'City buses serve the Zhongshan 1st Road and Wufu 3rd Road corridors, but stops and routes change. Check the city transport bureau or the operator’s live information instead of an old article.',
        },
        {
          q: 'Which bus number goes to the park?',
          a: 'We deliberately list no route numbers because we cannot verify the current network. Official journey tools give the latest numbers, stops and predicted arrival times.',
        },
        {
          q: 'Is the bus cheaper?',
          a: 'Fares and discounts change and we do not compare unverified costs. Use the official fare notice and weigh waiting and transfer time as well.',
        },
      ],
      sources: [
        { label: 'Kaohsiung City Transport Bureau: city buses and live information', url: TRANSPORT_SRC },
        { label: 'Kaohsiung MRT: R9 Central Park and transfer information', url: STATION_SRC },
        { label: 'Kaohsiung Travel: Central Park introduction', url: PARK_SRC },
      ],
    },
  },

  {
    slug: 'accessible-arrival',
    group: 'transport',
    related: ['mrt-exits', 'mrt-central-park-station', 'park-facilities', 'location-map'],
    zh: {
      metaTitle: '輪椅、嬰兒車與行李｜中央公園抵達動線查核',
      description:
        '給推輪椅、嬰兒車或攜帶行李的訪客：捷運 R9 電梯與出口、站外過街、園內步道與廁所該如何逐項查證，以及本站沒有完成全園無障礙勘查的說明。',
      h1: '輪椅、嬰兒車與行李的抵達動線',
      lead: '「公園是綠地」不代表每條路徑都無階差。本頁整理需要逐項確認的環節與官方查詢入口，不做全程無障礙保證，也不替任何設施背書。',
      updated: Z,
      sections: [
        {
          heading: '從捷運出口開始查',
          paragraphs: [
            '先在高雄捷運官方車站平面圖確認哪一個出口設有電梯，以及電梯當天是否可用。出口編號、連通道與施工管制會改變，抵達前再查一次比事先規劃更可靠。',
          ],
        },
        {
          heading: '站外過街與園內路面',
          paragraphs: [
            '出站後還有人行道、路口與公園入口的銜接。園內步道可能因施工、活動或雨天濕滑而改道；本站沒有完成全園路線勘查，因此不宣稱任何一條路「全程無障礙」。',
          ],
        },
        {
          heading: '廁所、座椅與休息點',
          paragraphs: [
            '無障礙廁所、座椅、遮蔭與飲水設施的位置與開放狀態需以現場指示為準。建議把休息點排在動線前段，並為同行者預留比一般散步更寬裕的時間。',
          ],
        },
      ],
      faq: [
        {
          q: '中央公園全園都可以推輪椅嗎？',
          a: '本站未完成全園勘查，不能如此保證。請查捷運官方平面圖與現場指示，並預留改道彈性。',
        },
        {
          q: '哪一個 R9 出口有電梯？',
          a: '出口配置與電梯狀態請以高雄捷運官方車站頁與平面圖為準；設施可能暫停使用，出發前再確認一次。',
        },
        {
          q: '有無障礙廁所嗎？',
          a: '本站無法核實況與位置，請以現場指標與管理單位公告為準，不要把車站設施與公園設施混為一談。',
        },
      ],
      sources: [
        { label: '高雄捷運：R9 車站平面圖與出口', url: PLAN_SRC },
        { label: '高雄捷運：R9 中央公園站車站資訊', url: STATION_SRC },
        { label: '高雄旅遊網：中央公園介紹', url: PARK_SRC },
      ],
    },
    en: {
      metaTitle: 'Wheelchairs, Strollers & Luggage | Arriving at Central Park',
      description:
        'For visitors with wheelchairs, strollers or luggage: how to verify MRT R9 lifts and exits, street crossings, park paths and toilets, plus the limits of this site’s accessibility survey.',
      h1: 'Arriving with a Wheelchair, Stroller or Luggage',
      lead: 'A green space is not the same as a step-free route. This page lists the links that need checking and the official lookup pages; it makes no whole-site accessibility promise and vouches for no facility.',
      updated: E,
      sections: [
        {
          heading: 'Start at the MRT exits',
          paragraphs: [
            'Use the operator’s station plan to identify which R9 exit has a lift, then check whether that lift is operating that day. Exit numbering, passageways and works controls change, so re-checking on arrival is more reliable than a plan made weeks earlier.',
          ],
        },
        {
          heading: 'Street crossings and park surfaces',
          paragraphs: [
            'Outside the station there are still pavements, junctions and park entrances to negotiate. Inside, paths may be rerouted for works, events or wet weather. No full-site survey has been completed here, so we do not describe any route as step-free throughout.',
          ],
        },
        {
          heading: 'Toilets, seating and rest points',
          paragraphs: [
            'The location and availability of accessible toilets, seating, shade and drinking water follow on-site signs. Put rest points early in the route and allow more time than a casual park walk.',
          ],
        },
      ],
      faq: [
        {
          q: 'Is the whole park wheelchair accessible?',
          a: 'We have not completed a full-site survey and cannot promise that. Check the MRT station plan and on-site signs, and keep room to change route.',
        },
        {
          q: 'Which R9 exit has a lift?',
          a: 'Use the operator’s station page and plan for the current exit layout and lift status; lifts may be temporarily out of service, so confirm before travelling.',
        },
        {
          q: 'Are there accessible toilets?',
          a: 'We cannot verify current provision or locations. Follow on-site signs and park authority notices, and keep station facilities separate from park facilities.',
        },
      ],
      sources: [
        { label: 'Kaohsiung MRT: R9 station plan and exits', url: PLAN_SRC },
        { label: 'Kaohsiung MRT: R9 Central Park station information', url: STATION_SRC },
        { label: 'Kaohsiung Travel: Central Park introduction', url: PARK_SRC },
      ],
    },
  },

  {
    slug: 'opening-hours',
    group: 'park',
    related: ['admission-free', 'things-to-do', 'events', 'park-facilities'],
    zh: {
      metaTitle: '高雄中央公園開放時間｜全天候列示與夜間進園提醒',
      description:
        '說明高雄中央公園開放時間的資料來源與限制：市府公園頁列示每日 00:00–23:59、地圖快照亦顯示 24 小時，但這不等於每個入口與設施都全時開放。',
      h1: '中央公園開放時間與夜間進園',
      lead: '查「幾點可以去」時，要先分辨來源列示、現場管理與個別設施三件事。本頁說明現有資料能支持到什麼程度，以及夜間造訪前該查什麼。',
      updated: Z,
      sections: [
        {
          heading: '官方資料怎麼寫',
          paragraphs: [
            '高雄市政府的中央公園介紹頁（頁面標示更新日 2023-11-29）列示每日 00:00–23:59 開放；2026 年 10 月的 Google 地圖快照也曾顯示 24 小時。這些是來源上的列示，不是本站重新實勘的結果。',
          ],
        },
        {
          heading: '列示時間不等於全部可用',
          paragraphs: [
            '公園是開放式綠地，但照明、廁所、水景、施工圍籬與活動管制可能只影響部分區域。本站沒有核實每個入口與設施的全時開放狀態，因此不把「全天候」寫成保證。',
          ],
        },
        {
          heading: '夜間與特殊天候',
          paragraphs: [
            '夜間造訪請先看現場指示與市府活動公告；遇雷雨、颱風或大型活動，進園動線可能改變。氣象警特報請以中央氣象署為準，安全判斷應以當天現場為準。',
          ],
        },
      ],
      faq: [
        {
          q: '中央公園幾點開放？',
          a: '市府公園頁列示每日 00:00–23:59，地圖快照曾顯示 24 小時；但這是來源列示，不代表每個入口與設施都全時開放，出發前請查現場與官方公告。',
        },
        {
          q: '半夜可以進去散步嗎？',
          a: '本站不對夜間安全、照明或管制狀態作保證。若計畫夜間前往，請以當天現場指示、市府公告與同行者安全考量為準。',
        },
        {
          q: '水舞或設施也有固定時段嗎？',
          a: '本站未核實任何水舞場次或設施時段，不列時間表。請查市府活動頁與現場公告。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：中央公園介紹（標示更新 2023-11-29）', url: PARK_SRC },
        { label: '高雄旅遊網：活動與消息', url: EVENTS_SRC },
        { label: '中央氣象署：預報與警特報', url: CWA_SRC },
      ],
    },
    en: {
      metaTitle: 'Kaohsiung Central Park Opening Hours | 24-Hour Listings Explained',
      description:
        'What the sources actually say about Central Park opening hours: the city page lists 00:00–23:59 daily and a Maps snapshot showed 24-hour access, but that does not confirm every entrance or facility.',
      h1: 'Central Park Opening Hours and Night Visits',
      lead: 'When checking “what time can I go”, separate the source listing, on-site management and individual facilities. This page sets out how far the available data goes and what to check before a night visit.',
      updated: E,
      sections: [
        {
          heading: 'What the official page says',
          paragraphs: [
            'The city’s Central Park page, marked updated 2023-11-29, lists 00:00–23:59 daily, and an October 2026 Google Maps snapshot also displayed 24-hour access. These are source listings, not a fresh inspection carried out by this site.',
          ],
        },
        {
          heading: 'A listed window is not full availability',
          paragraphs: [
            'The park is open green space, but lighting, toilets, water features, works barriers and event controls can affect individual areas. We have not verified all-day availability for every entrance and facility, so “24 hours” is not presented as a guarantee.',
          ],
        },
        {
          heading: 'Night visits and severe weather',
          paragraphs: [
            'At night, follow on-site signs and city event notices; storms, typhoons or large events can change access routes. Use Central Weather Administration warnings for weather, and the conditions on the day for safety decisions.',
          ],
        },
      ],
      faq: [
        {
          q: 'What are Central Park’s opening hours?',
          a: 'The city page lists 00:00–23:59 daily and a Maps snapshot showed 24-hour access, but that is a source listing rather than confirmation that every entrance and facility stays open. Check on-site and official notices before leaving.',
        },
        {
          q: 'Can I take a walk there late at night?',
          a: 'We make no claim about night-time safety, lighting or controls. For a late visit, rely on same-day signs, city notices and your own group’s safety judgement.',
        },
        {
          q: 'Do water shows or facilities have fixed times?',
          a: 'No water-show or facility timetable has been verified here, so none is published. Check the city events page and on-site notices.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: Central Park introduction (marked updated 2023-11-29)', url: PARK_SRC },
        { label: 'Kaohsiung Travel: events and announcements', url: EVENTS_SRC },
        { label: 'Central Weather Administration: forecasts and warnings', url: CWA_SRC },
      ],
    },
  },

  {
    slug: 'admission-free',
    group: 'park',
    related: ['opening-hours', 'parking', 'events', 'nearby-food'],
    zh: {
      metaTitle: '中央公園要門票嗎？｜免費進園與周邊收費的區別',
      description:
        '釐清高雄中央公園的門票與費用觀念：公園本身是公共開放綠地，但停車、周邊店家、展演與活動可能各自收費，本站不列未核實的價格。',
      h1: '中央公園門票與參觀費用',
      lead: '「公園免費」常被誤讀成「整趟都不用花錢」。本頁把公園使用與周邊消費分開說明，並指出哪些費用必須現場或向主辦單位查證。',
      updated: Z,
      sections: [
        {
          heading: '公園本身是公共綠地',
          paragraphs: [
            '中央公園是都市開放綠地，市府公園頁將其作為公共景點介紹。本站沒有查到需要購票才能進入園區的統一公告，但也不把「免門票」延伸為所有服務都免費。',
          ],
        },
        {
          heading: '常見的另外計費項目',
          bullets: [
            '周邊停車場、充電與其他車輛服務，費率與車位由各設施決定。',
            '餐飲、購物、展演、市集與付費活動，各自有獨立的價格與規則。',
            '城市光廊、新堀江等鄰近場域與公園是不同地點，不適用同一套收費邏輯。',
          ],
        },
        {
          heading: '怎麼查才不會踩雷',
          paragraphs: [
            '出發前把「進公園」、「停車」、「吃東西」、「參加活動」四件事分開查。本站不列未核實的票價、優惠資格或套票；若當天有活動，請以主辦單位與市府公告為準。',
          ],
        },
      ],
      faq: [
        {
          q: '進中央公園需要買票嗎？',
          a: '公園是公共開放綠地，本站沒有查到統一的入園售票公告。但周邊停車、餐飲與活動可能另外收費，請分開確認。',
        },
        {
          q: '停車也要付費嗎？',
          a: '公園免費不等於停車免費。周邊停車費率與車位狀況會變動，請查停車攻略頁與現場公告。',
        },
        {
          q: '有統一的優惠票或套票嗎？',
          a: '本站無法核實行優惠與套票內容，不列任何價格或資格說明，請向各主辦單位或營運方查證。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：中央公園介紹', url: PARK_SRC },
        { label: '高雄旅遊網：活動與消息', url: EVENTS_SRC },
        { label: '高雄市交通局：停車與交通資訊', url: TRANSPORT_SRC },
      ],
    },
    en: {
      metaTitle: 'Is Central Park Free to Enter? | Admission vs Nearby Costs',
      description:
        'Separating free access to Kaohsiung Central Park from paid parking, shops, performances and events nearby. No unverified prices or ticket bundles are listed.',
      h1: 'Admission and Visit Costs at Central Park',
      lead: '“The park is free” is often misread as “the whole outing costs nothing”. This page separates park use from nearby spending and identifies which costs need checking on site or with an organiser.',
      updated: E,
      sections: [
        {
          heading: 'The park is public green space',
          paragraphs: [
            'Central Park is an open urban green space presented by the city as a public attraction. We found no uniform ticketing notice for entering the grounds, but we do not extend “free entry” into “all services are free”.',
          ],
        },
        {
          heading: 'Costs that are usually separate',
          bullets: [
            'Nearby car parks, charging and other vehicle services set their own rates and capacity.',
            'Food, shopping, performances, markets and ticketed events each have their own prices and rules.',
            'The Urban Spotlight Arcade and Shinkuchan are separate places from the park, not part of one admission arrangement.',
          ],
        },
        {
          heading: 'How to check without surprises',
          paragraphs: [
            'Treat entering the park, parking, eating and joining an event as four separate checks. We list no unverified prices, discounts or bundles; for same-day events, rely on the organiser and city notices.',
          ],
        },
      ],
      faq: [
        {
          q: 'Do I need a ticket to enter Central Park?',
          a: 'It is public open green space and we found no uniform admission-ticket notice. Parking, food and events nearby may still be charged, so check each separately.',
        },
        {
          q: 'Is parking free too?',
          a: 'Free park access does not mean free parking. Nearby rates and availability change; see the parking guide and on-site notices.',
        },
        {
          q: 'Are there concession tickets or bundles?',
          a: 'We cannot verify current concessions or bundles and publish no prices or eligibility claims. Ask the organiser or operator directly.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: Central Park introduction', url: PARK_SRC },
        { label: 'Kaohsiung Travel: events and announcements', url: EVENTS_SRC },
        { label: 'Kaohsiung City Transport Bureau: parking and transport', url: TRANSPORT_SRC },
      ],
    },
  },

  {
    slug: 'water-feature',
    group: 'park',
    related: ['park-layout', 'photo-spots', 'things-to-do', 'events'],
    zh: {
      metaTitle: '中央公園水景與噴泉｜水舞場次與現況查證',
      description:
        '整理高雄中央公園的水景、池面與噴泉相關資訊，說明為何本站不提供水舞場次時間表，並指出正確的官方查詢與現場確認方式。',
      h1: '中央公園水景、池面與噴泉',
      lead: '水景是許多人對中央公園的第一印象，但「有沒有水舞、幾點演出」屬高變動資訊。本頁只談可辨識的景觀類型與查證路徑，不編造場次。',
      updated: Z,
      sections: [
        {
          heading: '可辨識的水景元素',
          paragraphs: [
            '園內可見池面、反射倒影與草地周邊的水景配置，市府公園頁也把景觀列為園區特色之一。照片能說明拍攝當下的樣貌，但不能證明今日水位、噴泉或照明是否正常運作。',
          ],
        },
        {
          heading: '為什麼沒有水舞時間表',
          paragraphs: [
            '本站沒有核實現行的水舞、噴泉演出時段，也沒有查到可長期引用的固定場次公告。與其轉錄過期時刻，不如直接查高雄旅遊網活動頁與現場告示；活動期間的管制也可能影響觀賞位置。',
          ],
        },
        {
          heading: '拍攝與安全提醒',
          paragraphs: [
            '池邊與濕滑鋪面在雨後需要特別留意，請遵守現場圍籬與指示，不跨越管制區。夜間拍攝請先確認照明與開放動線，並以中央氣象署的天氣資訊安排時段。',
          ],
        },
      ],
      faq: [
        {
          q: '中央公園有水舞嗎？幾點開始？',
          a: '本站未核實任何現行水舞場次，因此不提供時間表。請查高雄旅遊網活動頁與現場公告，避免依據舊資料前往。',
        },
        {
          q: '可以靠近水池拍照嗎？',
          a: '請依現場圍籬、鋪面與指示行動；雨後濕滑，夜間還要考量照明。本站不對池邊開放範圍作保證。',
        },
        {
          q: '水景會因為活動或施工關閉嗎？',
          a: '可能。設施狀態與活動管制會變動，請以主管機關公告與當天現場指示為準。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：中央公園介紹與景觀', url: PARK_SRC },
        { label: '高雄旅遊網：活動與消息', url: EVENTS_SRC },
        { label: '中央氣象署：預報與警特報', url: CWA_SRC },
      ],
    },
    en: {
      metaTitle: 'Central Park Water Features & Fountains | How to Check Show Times',
      description:
        'Kaohsiung Central Park’s ponds, reflections and fountains, why this guide publishes no water-show timetable, and the official pages plus on-site checks to use instead.',
      h1: 'Central Park Water Features and Fountains',
      lead: 'Water is part of the park’s first impression, but whether a fountain show runs and when is highly changeable. This page describes recognisable landscape types and the verification path, and invents no schedule.',
      updated: E,
      sections: [
        {
          heading: 'Recognisable water elements',
          paragraphs: [
            'Pond surfaces, reflections and water features beside the lawns are visible in the grounds, and the city park page lists landscape among the site’s features. Photographs show a moment of capture, not today’s water level, fountain or lighting status.',
          ],
        },
        {
          heading: 'Why there is no show timetable',
          paragraphs: [
            'We have not verified any current fountain or water-show times, nor found a fixed schedule suitable for long-term citation. Rather than republishing an outdated timetable, check the city events page and on-site notices; event controls can also change viewing positions.',
          ],
        },
        {
          heading: 'Photography and safety',
          paragraphs: [
            'Pond edges and wet paving need care after rain — follow barriers and signs and do not cross closed areas. For night photography, confirm lighting and open paths first, and plan around Central Weather Administration forecasts.',
          ],
        },
      ],
      faq: [
        {
          q: 'Is there a water show, and when does it start?',
          a: 'No current water-show schedule has been verified here, so we publish none. Check the city events page and on-site notices rather than relying on old information.',
        },
        {
          q: 'Can I get close to the pond for photos?',
          a: 'Follow on-site barriers, paving and signs; surfaces are slippery after rain and lighting matters at night. We make no claim about how much of the pond edge is open.',
        },
        {
          q: 'Could water features close for events or works?',
          a: 'They can. Facility status and event controls change, so rely on authority notices and same-day on-site signs.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: Central Park introduction and landscape', url: PARK_SRC },
        { label: 'Kaohsiung Travel: events and announcements', url: EVENTS_SRC },
        { label: 'Central Weather Administration: forecasts and warnings', url: CWA_SRC },
      ],
    },
  },

  {
    slug: 'lawn-and-picnic',
    group: 'park',
    related: ['things-to-do', 'park-facilities', 'family-itinerary', 'walking-route'],
    zh: {
      metaTitle: '中央公園草地野餐｜休憩使用與現場規範',
      description:
        '高雄中央公園草地休憩與野餐的實用提醒：遮蔭、座椅、垃圾處理、活動管制與天候因素，並說明使用規範應以現場公告為準。',
      h1: '中央公園草地、休憩與野餐',
      lead: '大面積草地是中央公園最常被使用的空間。本頁整理安排野餐時需要考量的條件，不代替管理單位的規則，也不宣稱任何區域永遠可搭帳或可使用。',
      updated: Z,
      sections: [
        {
          heading: '選位置時先看條件',
          paragraphs: [
            '草地、樹蔭、座椅與水景的分布會影響體感與動線。夏季高溫與午後雷雨常見，建議以遮蔭與可快速撤退到室內的位置為優先，並避開當天施工或活動圍籬。',
          ],
        },
        {
          heading: '垃圾、設施與規範',
          bullets: [
            '把手上的垃圾帶走，不依賴現場一定有垃圾桶或清潔服務。',
            '帳篷、炊具、音響與大型道具能否使用，請以現場告示與管理單位公告為準。',
            '廁所、飲水與座椅的開放狀態未經本站核實，請依當天現場指示。',
          ],
        },
        {
          heading: '遇到活動或人多時',
          paragraphs: [
            '市集、展演與大型活動期間，草地可能分區管制或人潮集中。出發前查高雄旅遊網活動頁，並保有改到周邊室內空間或縮短停留的彈性。',
          ],
        },
      ],
      faq: [
        {
          q: '中央公園可以野餐嗎？',
          a: '草地是常見的休憩空間，但實際可使用的區域、設備與規範以現場告示為準；本站不對任何特定使用方式作保證。',
        },
        {
          q: '可以搭帳篷或生火嗎？',
          a: '本站未核實相關規定，不提供可否判斷。請直接查管理單位公告與現場指示，並遵守公共安全規範。',
        },
        {
          q: '下雨或太熱怎麼辦？',
          a: '縮短戶外停留，改往周邊室內空間；先查中央氣象署警特報與市府公告，再決定是否進園。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：中央公園介紹與景觀', url: PARK_SRC },
        { label: '高雄旅遊網：活動與消息', url: EVENTS_SRC },
        { label: '中央氣象署：預報與警特報', url: CWA_SRC },
      ],
    },
    en: {
      metaTitle: 'Central Park Lawn & Picnics | Rest Areas and On-Site Rules',
      description:
        'Practical notes for resting or picnicking on the lawns of Kaohsiung Central Park: shade, seating, waste, event controls and weather, with on-site notices as the authority.',
      h1: 'Lawns, Resting and Picnics at Central Park',
      lead: 'The broad lawns are the most used space in Central Park. This page covers what to consider when planning a picnic, without replacing the park authority’s rules or promising that any area always permits a particular use.',
      updated: E,
      sections: [
        {
          heading: 'Check the conditions before choosing a spot',
          paragraphs: [
            'The mix of lawn, shade, seating and water affects comfort and movement. Summer heat and afternoon storms are common, so favour shade and a quick route indoors, and avoid works or event barriers that day.',
          ],
        },
        {
          heading: 'Waste, facilities and rules',
          bullets: [
            'Carry your waste out; do not assume bins or cleaning services will be available.',
            'For tents, cooking equipment, amplified sound or large props, follow on-site signs and park authority notices.',
            'Toilet, drinking-water and seating availability has not been verified here; use same-day on-site information.',
          ],
        },
        {
          heading: 'Events and crowds',
          paragraphs: [
            'During markets, performances and large events, lawn areas may be zoned or crowded. Check the city events page before leaving and keep the option of moving indoors or shortening your stay.',
          ],
        },
      ],
      faq: [
        {
          q: 'Can I picnic at Central Park?',
          a: 'The lawns are commonly used for resting, but usable areas, equipment and rules follow on-site signs. We make no guarantee for any particular activity.',
        },
        {
          q: 'Are tents or open flames allowed?',
          a: 'We have not verified those rules and give no yes-or-no answer. Check the park authority’s notices and on-site signs, and follow public safety requirements.',
        },
        {
          q: 'What about rain or extreme heat?',
          a: 'Shorten the outdoor part and move to nearby indoor spaces; check Central Weather Administration warnings and city notices before entering the park.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: Central Park introduction and landscape', url: PARK_SRC },
        { label: 'Kaohsiung Travel: events and announcements', url: EVENTS_SRC },
        { label: 'Central Weather Administration: forecasts and warnings', url: CWA_SRC },
      ],
    },
  },

  {
    slug: 'park-layout',
    group: 'park',
    related: ['walking-route', 'photo-spots', 'water-feature', 'location-map'],
    zh: {
      metaTitle: '中央公園園區配置｜12.7 公頃與動線分區觀念',
      description:
        '用可查核的資料理解高雄中央公園的園區規模與分區：市府頁列 12.7 公頃、草地水景與周邊街區的相對關係，以及 12.7 公頃是面積不是環園距離。',
      h1: '中央公園園區規模與配置',
      lead: '很多人把「12.7 公頃」誤當成散步長度。本頁說明這個數字的意義，並用分區觀念幫助你把地圖、出口與想看的景觀連起來。',
      updated: Z,
      sections: [
        {
          heading: '12.7 公頃是面積',
          paragraphs: [
            '高雄市府中央公園介紹頁記載園區面積約 12.7 公頃。這是面積，不是周長、步道長度或環園一圈的距離；本站沒有實測任何環園公里數，也不建議把面積換算成步行時間。',
          ],
        },
        {
          heading: '用分區而不是單一入口理解',
          paragraphs: [
            '可把園區想成草地與樹蔭、水景與池面、廣場與步道、以及銜接捷運與周邊街區的邊緣地帶。R9 各出口通往不同側，先決定想看哪一類景觀，再選出口會比進園後亂走更有效率。',
          ],
        },
        {
          heading: '地圖與地址的限制',
          paragraphs: [
            '市府公園頁地址列「新興區文橫一路 5 巷」，Google 地圖快照則列「前金區中山一路 11 號」，後者同時是 R9 站址。兩者都是參考點，不是測繪後的公園邊界或唯一入口。',
          ],
        },
      ],
      faq: [
        {
          q: '中央公園有多大？',
          a: '市府公園頁記載約 12.7 公頃，是面積資料。本站沒有環園周長或步道長度的實測值。',
        },
        {
          q: '繞公園一圈要多久？',
          a: '本站未提供實測距離或時間，且動線會因施工、活動與出口選擇而不同，請依當天現場路線判斷。',
        },
        {
          q: '公園的正門在哪裡？',
          a: '公園屬開放式綠地，不宜假設單一「正門」。請搭配地圖定位點與 R9 出口編號決定會合點。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：中央公園介紹（面積與景觀）', url: PARK_SRC },
        { label: '高雄捷運：R9 車站平面圖與出口', url: PLAN_SRC },
        { label: 'Google 地圖：手工快照的定位點', url: 'https://maps.app.goo.gl/eC8hTJNhAbFwetQUA' },
      ],
    },
    en: {
      metaTitle: 'Central Park Layout & Size | What 12.7 Hectares Means',
      description:
        'Understanding Kaohsiung Central Park’s scale from verifiable data: the city lists 12.7 hectares, how lawns, water and plazas relate to nearby streets, and why that figure is area, not a loop distance.',
      h1: 'Central Park Size and Layout',
      lead: 'The “12.7 hectares” figure is often mistaken for a walking distance. This page explains what it measures and uses zones to connect the map, the exits and the features you want to see.',
      updated: E,
      sections: [
        {
          heading: '12.7 hectares is an area',
          paragraphs: [
            'The city’s Central Park page records roughly 12.7 hectares. That is area, not perimeter, path length or a circuit of the grounds. We have measured no loop distance and advise against converting area into a walking time.',
          ],
        },
        {
          heading: 'Think in zones, not one entrance',
          paragraphs: [
            'It helps to picture lawns and shade, water and pond surfaces, plazas and paths, and the edges connecting to the MRT and nearby streets. R9 exits lead to different sides, so choosing the kind of feature you want before choosing an exit is more efficient than wandering afterwards.',
          ],
        },
        {
          heading: 'Limits of the map and addresses',
          paragraphs: [
            'The city page lists Lane 5, Wenheng 1st Road, Xinxing District, while the Google Maps snapshot lists No. 11, Zhongshan 1st Road, Cianjin District — also the R9 station address. Both are reference points, not a surveyed boundary or the only entrance.',
          ],
        },
      ],
      faq: [
        {
          q: 'How big is Central Park?',
          a: 'The city page records about 12.7 hectares as an area. We have no measured perimeter or path length.',
        },
        {
          q: 'How long does a loop of the park take?',
          a: 'We publish no measured distance or time; the route also changes with works, events and your chosen exit. Judge from the paths open that day.',
        },
        {
          q: 'Where is the main gate?',
          a: 'This is open green space, so a single “main gate” is not a safe assumption. Use a map reference point and an R9 exit number as your meeting point.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: Central Park introduction (area and landscape)', url: PARK_SRC },
        { label: 'Kaohsiung MRT: R9 station plan and exits', url: PLAN_SRC },
        { label: 'Google Maps: manual snapshot reference point', url: 'https://maps.app.goo.gl/eC8hTJNhAbFwetQUA' },
      ],
    },
  },

  {
    slug: 'park-facilities',
    group: 'park',
    related: ['opening-hours', 'accessible-arrival', 'lawn-and-picnic', 'things-to-do'],
    zh: {
      metaTitle: '中央公園設施｜廁所、座椅、照明與飲水查證',
      description:
        '以類型中立的方式整理高雄中央公園常見設施項目：廁所、座椅、遮蔭、照明、飲水與無障礙條件，並說明現況必須以現場與官方公告為準。',
      h1: '中央公園設施與現場服務',
      lead: '本站不推薦特定店家，也不替設施狀態背書。這頁把訪客最常問的設施類型逐項列出，並附上「出發前怎麼查」的順序。',
      updated: Z,
      sections: [
        {
          heading: '訪客最常查的幾類設施',
          bullets: [
            '廁所與無障礙廁所：位置、時段與清潔狀態需現場確認。',
            '座椅、遮蔭與廣場：熱天與雨天的使用感受差異很大。',
            '照明與夜間動線：不等於公園開放列示，也不代表全區都有燈。',
            '飲水、垃圾回收點與其他服務：配置會隨活動與維護調整。',
          ],
        },
        {
          heading: '車站設施與公園設施要分開',
          paragraphs: [
            'R9 站內的電梯、廁所與平面圖屬高雄捷運管理，公園內的設施屬另一套管理範圍。前者可用不代表後者可用，反之亦然；查詢時請各自對到正確的官方來源。',
          ],
        },
        {
          heading: '查證順序建議',
          paragraphs: [
            '先查市府公園頁與活動公告了解園區與當天管制，再查高雄捷運官方車站頁確認出口與電梯，最後以現場指標為準。本站沒有完成全園設施勘查，因此不做「全面可用」的陳述。',
          ],
        },
      ],
      faq: [
        {
          q: '公園裡有廁所和飲水機嗎？',
          a: '這類設施的位置與開放狀態未經本站核實，請以現場指標與管理單位公告為準；本站不列固定位置或時段。',
        },
        {
          q: '晚上有照明嗎？',
          a: '本站無法核實各區照明現況。夜間前往請依現場狀況與同行者安全考量，不要以全天候開放列示推論照明。',
        },
        {
          q: '有無障礙設施嗎？',
          a: '請查高雄捷運官方平面圖與現場指示；本站未完成全園無障礙勘查，不提供保證。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：中央公園介紹', url: PARK_SRC },
        { label: '高雄捷運：R9 車站平面圖與出口', url: PLAN_SRC },
        { label: '高雄旅遊網：活動與消息', url: EVENTS_SRC },
      ],
    },
    en: {
      metaTitle: 'Central Park Facilities | Toilets, Seating, Lighting & Water',
      description:
        'Type-neutral checklist of Central Park facilities: toilets, seating, shade, lighting, drinking water and step-free access, with current status always checked on site.',
      h1: 'Facilities and On-Site Services at Central Park',
      lead: 'We recommend no specific business and vouch for no facility’s condition. This page lists the categories visitors ask about most and gives a sensible order for checking them before leaving.',
      updated: E,
      sections: [
        {
          heading: 'Facility types visitors look for',
          bullets: [
            'Toilets and accessible toilets: position, opening times and cleanliness need on-site confirmation.',
            'Seating, shade and plazas: comfort varies greatly in heat or rain.',
            'Lighting and night routes: separate from the listed opening window, and not a promise that every area is lit.',
            'Drinking water, waste points and other services: layout changes with events and maintenance.',
          ],
        },
        {
          heading: 'Station facilities are not park facilities',
          paragraphs: [
            'Lifts, toilets and plans inside R9 are managed by the MRT operator; facilities inside the park fall under a different management scope. Availability on one side says nothing about the other, so match each question to the correct official source.',
          ],
        },
        {
          heading: 'A sensible checking order',
          paragraphs: [
            'Start with the city park page and event notices for the grounds and same-day controls, then the MRT station page for exits and lifts, and finally on-site signs. No full-site facility survey has been completed here, so we make no “everything available” claim.',
          ],
        },
      ],
      faq: [
        {
          q: 'Are there toilets and drinking fountains in the park?',
          a: 'Their locations and availability have not been verified here; follow on-site signs and park authority notices. We list no fixed positions or hours.',
        },
        {
          q: 'Is the park lit at night?',
          a: 'We cannot verify lighting in each area. For a night visit, rely on conditions on site and your group’s safety judgement, not on a 24-hour listing.',
        },
        {
          q: 'Is step-free access available?',
          a: 'Check the MRT station plan and on-site signs. We have not completed a full-site accessibility survey and give no guarantee.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: Central Park introduction', url: PARK_SRC },
        { label: 'Kaohsiung MRT: R9 station plan and exits', url: PLAN_SRC },
        { label: 'Kaohsiung Travel: events and announcements', url: EVENTS_SRC },
      ],
    },
  },

  {
    slug: 'urban-spotlight-arcade',
    group: 'nearby',
    related: ['photo-spots', 'xinjuejiang', 'evening-itinerary', 'wufu-shopping-area'],
    zh: {
      metaTitle: '城市光廊｜中央公園旁的公共藝術與夜間光環境',
      description:
        '介紹高雄城市光廊與中央公園的相對位置關係：市府將其列為另一處景點，公共藝術、燈光與街區氛圍適合順遊，但開放與展演資訊需另外查證。',
      h1: '城市光廊：公園南側的順遊場域',
      lead: '城市光廊常被寫進「中央公園行程」，但它在市府資料中是獨立景點。本頁說明如何把它當成相邻場域安排，不把兩者的開放資訊混用。',
      updated: Z,
      sections: [
        {
          heading: '它是獨立的景點條目',
          paragraphs: [
            '高雄旅遊網把城市光廊列為獨立的景點介紹頁，內容著重公共藝術與夜間光環境。這代表它有自己的位置、管理與狀態，不應直接套用中央公園頁的開放列示。',
          ],
        },
        {
          heading: '與公園、新堀江的相對關係',
          paragraphs: [
            '行程上多半從公園往南銜接城市光廊，再接新堀江與五福商圈一帶。實際步行路線與過街點請以當天地圖與現場指標為準；本站沒有實測距離或固定分鐘數。',
          ],
        },
        {
          heading: '夜間造訪的查核重點',
          paragraphs: [
            '燈光、展演與攤位狀態會變動，本站沒有核實任何固定點燈時段或演出場次。出發前查高雄旅遊網活動頁，遇雨則以中央氣象署資訊與現場狀況調整。',
          ],
        },
      ],
      faq: [
        {
          q: '城市光廊就在中央公園裡面嗎？',
          a: '市府把兩者列為不同景點條目。它們相鄰、適合順遊，但位置、管理與開放資訊應分開查證。',
        },
        {
          q: '幾點會點燈？',
          a: '本站未核實固定點燈或演出時段，不提供時間表。請查市府活動公告與現場資訊。',
        },
        {
          q: '需要門票嗎？',
          a: '本站沒有核實城市光廊的收費或活動票價，請以該場域的主管單位與現場公告為準。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：城市光廊景點介紹', url: SPOTLIGHT_SRC },
        { label: '高雄旅遊網：中央公園介紹', url: PARK_SRC },
        { label: '高雄旅遊網：活動與消息', url: EVENTS_SRC },
      ],
    },
    en: {
      metaTitle: 'Urban Spotlight Arcade | Public Art beside Central Park',
      description:
        'How Kaohsiung’s Urban Spotlight Arcade relates to Central Park: the city lists it as a separate attraction, good for an evening add-on, with its own opening and event information to verify.',
      h1: 'Urban Spotlight Arcade: an Add-On beside the Park',
      lead: 'The arcade is often folded into a “Central Park itinerary”, yet the city lists it as its own attraction. This page explains how to plan it as an adjacent stop without merging the two sets of opening information.',
      updated: E,
      sections: [
        {
          heading: 'A separate attraction listing',
          paragraphs: [
            'Kaohsiung Travel maintains its own listing for the Urban Spotlight Arcade, focused on public art and the night-time light environment. It has its own location, management and status, so the park page’s listed hours should not be applied to it.',
          ],
        },
        {
          heading: 'Relation to the park, Shinkuchan and Wufu',
          paragraphs: [
            'A common sequence runs south from the park to the arcade, then on to Shinkuchan and the Wufu shopping area. Use a same-day map and on-site signs for the actual walking route and crossings; we publish no measured distance or fixed minutes.',
          ],
        },
        {
          heading: 'What to check for an evening visit',
          paragraphs: [
            'Lighting, performances and stalls change, and we have verified no fixed illumination or show times. Check the city events page before leaving, and adjust for rain using Central Weather Administration information and on-site conditions.',
          ],
        },
      ],
      faq: [
        {
          q: 'Is the arcade inside Central Park?',
          a: 'The city lists the two as separate attractions. They are adjacent and easy to combine, but location, management and opening information should be checked separately.',
        },
        {
          q: 'What time are the lights on?',
          a: 'No fixed lighting or performance times have been verified here, so we publish none. Check city event notices and on-site information.',
        },
        {
          q: 'Is there an admission fee?',
          a: 'We have not verified charges or event ticketing for the arcade; rely on the venue’s authority and on-site notices.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: Urban Spotlight Arcade listing', url: SPOTLIGHT_SRC },
        { label: 'Kaohsiung Travel: Central Park introduction', url: PARK_SRC },
        { label: 'Kaohsiung Travel: events and announcements', url: EVENTS_SRC },
      ],
    },
  },

  {
    slug: 'wufu-shopping-area',
    group: 'nearby',
    related: ['xinjuejiang', 'nearby-food', 'urban-spotlight-arcade', 'souvenirs'],
    zh: {
      metaTitle: '五福商圈與中央公園｜購物街區順遊與動線',
      description:
        '說明高雄中央公園與五福商圈、新堀江一帶的順遊關係：以街區類型而非店家名稱整理，附上交通、營業狀態與雨天替代的查核提醒。',
      h1: '中央公園旁的五福商圈',
      lead: '本站是非營利指南，不推薦特定店家，也不列未核實的營業時間。這頁用「街區類型」幫你把公園後的逛街段接起來。',
      updated: Z,
      sections: [
        {
          heading: '街區類型與可期待的內容',
          bullets: [
            '服飾、配件與生活風格小店，型態與店家組成會輪替。',
            '餐飲、飲料與甜點，營業與公休日每家不同。',
            '百貨、影城與室內空間，適合作為雨天或避暑的替代。',
          ],
        },
        {
          heading: '從公園怎麼接過去',
          paragraphs: [
            '一般由公園南側銜接城市光廊，再往五福與新堀江方向的街區移動。本站沒有實測步行距離，實際動線請依當天地圖、交叉口與施工或活動管制判斷。',
          ],
        },
        {
          heading: '營業與價格的查證',
          paragraphs: [
            '各店營業時間、公休日、售價與促銷各自獨立，且變動頻繁。本站不列店名、地址或價格；需要特定資訊時，請直接查該店官方頁面或現場告示。',
          ],
        },
      ],
      faq: [
        {
          q: '五福商圈離中央公園很近嗎？',
          a: '兩者屬於可串聯的相鄰街區，但本站不提供實測距離或固定步行分鐘數，請以當天地圖與現場動線為準。',
        },
        {
          q: '有推薦的店家嗎？',
          a: '本站為獨立非營利指南，不推薦特定商戶，也不列未核實的店名與地址；只提供街區類型作為參考。',
        },
        {
          q: '下雨還能逛嗎？',
          a: '可把比重轉向室內空間；請先查各場所營業與公休資訊，並以中央氣象署預報安排戶外段。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：新堀江商圈介紹', url: SHINKUCHAN_SRC },
        { label: '高雄旅遊網：城市光廊景點介紹', url: SPOTLIGHT_SRC },
        { label: '高雄旅遊網：景點與商圈查詢', url: KHH_HOME },
      ],
    },
    en: {
      metaTitle: 'Wufu Shopping Area & Central Park | A Type-Neutral Add-On',
      description:
        'How Kaohsiung’s Wufu shopping area and Shinkuchan connect to Central Park, described by district type rather than named shops, with checks for hours, routes and rainy-day options.',
      h1: 'The Wufu Shopping Area beside Central Park',
      lead: 'This is a non-profit guide: no specific businesses are recommended and no unverified opening hours are listed. This page uses district types to help you attach a shopping segment after the park.',
      updated: E,
      sections: [
        {
          heading: 'What kind of district it is',
          bullets: [
            'Clothing, accessories and lifestyle shops, with a changing mix of businesses.',
            'Restaurants, drinks and desserts, each with its own hours and closing days.',
            'Department stores, cinemas and indoor spaces that work as rain or heat alternatives.',
          ],
        },
        {
          heading: 'Linking it from the park',
          paragraphs: [
            'A common sequence heads from the south side of the park to the Urban Spotlight Arcade, then towards Wufu and Shinkuchan. We publish no measured walking distance; use a same-day map, crossings and any works or event controls.',
          ],
        },
        {
          heading: 'Verifying hours and prices',
          paragraphs: [
            'Each business sets its own hours, closing days, prices and promotions, and these change often. We list no shop names, addresses or prices; for specifics, use that business’s own page or on-site notice.',
          ],
        },
      ],
      faq: [
        {
          q: 'Is the Wufu area close to Central Park?',
          a: 'They are adjacent districts that combine easily, but we give no measured distance or fixed walking minutes. Use a same-day map and the routes open on site.',
        },
        {
          q: 'Which shops do you recommend?',
          a: 'This independent non-profit guide recommends no specific business and lists no unverified names or addresses — only district types.',
        },
        {
          q: 'Is it still worth visiting in the rain?',
          a: 'Shift the balance towards indoor spaces; check each venue’s hours and closing days, and plan the outdoor part around the official forecast.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: Shinkuchan shopping district', url: SHINKUCHAN_SRC },
        { label: 'Kaohsiung Travel: Urban Spotlight Arcade listing', url: SPOTLIGHT_SRC },
        { label: 'Kaohsiung Travel: attractions and district lookup', url: KHH_HOME },
      ],
    },
  },

  {
    slug: 'coffee-and-dessert',
    group: 'nearby',
    related: ['nearby-food', 'breakfast-and-brunch', 'nearby-indoor', 'xinjuejiang'],
    zh: {
      metaTitle: '中央公園附近咖啡與甜點｜類型式尋找指南',
      description:
        '以類型而非店名整理高雄中央公園周邊的咖啡、甜點與下午茶選擇，並說明營業時間、公休日與價位為何必須自行查證。',
      h1: '中央公園附近的咖啡與甜點',
      lead: '想找地方坐下來休息時，與其照著舊名單找店，不如先決定需要的空間類型。本頁不推薦特定商戶，也不列未核實價格。',
      updated: Z,
      sections: [
        {
          heading: '先決定你要哪一種空間',
          bullets: [
            '想快速補充精力：以外帶為主的飲料與咖啡類型。',
            '想停留較久：有內用座位、可提供甜點的空間。',
            '想避雨避暑：與百貨、書店或室內場域結合的選擇。',
          ],
        },
        {
          heading: '位置與動線',
          paragraphs: [
            '公園周邊與新堀江、五福一帶都有餐飲密度較高的街區。本站沒有實測步行距離或特定轉角位置，請以當天地圖與現場指標尋找，並留意活動期間的人潮。',
          ],
        },
        {
          heading: '營業、價格與過敏資訊',
          paragraphs: [
            '營業時段、公休日、低消、價位與食材資訊由各店決定且會變動。本站不列店名、地址或價格；有特殊飲食需求者，請直接向店家確認。',
          ],
        },
      ],
      faq: [
        {
          q: '有推薦的咖啡店嗎？',
          a: '本站為獨立非營利指南，不推薦特定商戶，也不列未核實的店名與地址；可依空間類型與地圖自行篩選。',
        },
        {
          q: '公園裡面有咖啡廳嗎？',
          a: '本站未核實園內是否有常設餐飲設施，請以現場指標與管理單位公告為準，不要假設一定有。',
        },
        {
          q: '價位大約多少？',
          a: '本站不列未核實價格，請直接查店家官方資訊或現場菜單。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：新堀江商圈介紹', url: SHINKUCHAN_SRC },
        { label: '高雄旅遊網：景點與商圈查詢', url: KHH_HOME },
        { label: '高雄旅遊網：中央公園介紹', url: PARK_SRC },
      ],
    },
    en: {
      metaTitle: 'Coffee & Dessert near Central Park | A Type-Based Guide',
      description:
        'Finding coffee, desserts and afternoon tea near Kaohsiung Central Park by type of space rather than named shops, with a clear note on verifying hours, prices and dietary details.',
      h1: 'Coffee and Dessert near Central Park',
      lead: 'When you need a place to sit down, choosing the type of space first works better than following an old list of names. This guide recommends no specific business and lists no unverified prices.',
      updated: E,
      sections: [
        {
          heading: 'Decide what kind of space you need',
          bullets: [
            'A quick break: takeaway-focused drinks and coffee.',
            'A longer sit: places with indoor seating and desserts.',
            'Shelter from rain or heat: options combined with department stores, bookshops or indoor venues.',
          ],
        },
        {
          heading: 'Location and routes',
          paragraphs: [
            'The streets around the park, Shinkuchan and Wufu contain denser dining areas. We publish no measured walking distances or particular corners; use a same-day map and on-site signs, and allow for event crowds.',
          ],
        },
        {
          heading: 'Hours, prices and dietary information',
          paragraphs: [
            'Hours, closing days, minimum spend, prices and ingredients are set by each business and change. We list no names, addresses or prices; with specific dietary needs, ask the business directly.',
          ],
        },
      ],
      faq: [
        {
          q: 'Which café do you recommend?',
          a: 'This independent non-profit guide recommends no specific business and lists no unverified names or addresses. Filter by the type of space and a map instead.',
        },
        {
          q: 'Is there a café inside the park?',
          a: 'We have not verified any permanent food outlet inside the grounds. Follow on-site signs and park authority notices rather than assuming one exists.',
        },
        {
          q: 'What are the prices like?',
          a: 'We list no unverified prices. Check the business’s own information or the menu on site.',
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
    slug: 'liuhe-night-market',
    group: 'nearby',
    related: ['nearby-food', 'central-park-nightlife', 'evening-itinerary', 'from-kaohsiung-station'],
    zh: {
      metaTitle: '六合夜市與中央公園｜順遊安排與交通查核',
      description:
        '把高雄六合夜市當作中央公園行程的延伸：與高雄車站、捷運動線的相對關係、適合安排在傍晚後的理由，以及不列未核實攤商與營業資訊的原則。',
      h1: '從中央公園順遊六合夜市',
      lead: '六合夜市是许多人會與中央公園排在同一天的市區行程。本頁只談銜接邏輯與查證方式，不列未核實的攤商名單、價格或公休日。',
      updated: Z,
      sections: [
        {
          heading: '兩個場域各自獨立',
          paragraphs: [
            '六合夜市與中央公園是不同地點，各有自己的營業型態、人潮與管理範圍。不要因為都在市區，就把公園的開放列示或交通說明直接套用到夜市。',
          ],
        },
        {
          heading: '動線上的考量',
          paragraphs: [
            '六合夜市一帶靠近高雄車站方向的市區路廊，與 R9 中央公園站屬不同站點。要以捷運或步行串聯，請用高雄捷運官方車站與路線資訊確認當天可行方式，本站不提供實測距離或固定分鐘數。',
          ],
        },
        {
          heading: '傍晚後的節奏',
          paragraphs: [
            '常見做法是把公園散步放在白天或傍晚，晚餐時段再轉往夜市街區。遇雨、颱風或大型活動，攤位與人潮會改變，請以現場與官方公告為準。',
          ],
        },
      ],
      faq: [
        {
          q: '六合夜市就在中央公園旁邊嗎？',
          a: '不是同一個場域，也不適合用「公園旁」直接理解。請以官方地圖與交通資訊確認兩地相對位置與當天動線。',
        },
        {
          q: '有哪些必吃攤位？',
          a: '本站不推薦特定攤商，也不列未核實的名稱、價格或公休日；請依現場與各店家資訊判斷。',
        },
        {
          q: '幾點開始營業？',
          a: '夜市與個別攤商的營業時段會變動，本站未提供時間表，請查官方與現場資訊。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：景點與商圈查詢', url: KHH_HOME },
        { label: '高雄捷運官方首頁：路線與車站資訊', url: KRTC_HOME },
        { label: '高雄市交通局：市區交通資訊', url: TRANSPORT_SRC },
      ],
    },
    en: {
      metaTitle: 'Liuhe Night Market & Central Park | Combining Two City Stops',
      description:
        'Adding Kaohsiung’s Liuhe Night Market to a Central Park day: how the two locations relate to the MRT, why the market suits an evening slot, and why no stall names or hours are listed.',
      h1: 'Combining Central Park with Liuhe Night Market',
      lead: 'Liuhe Night Market is a common same-day addition to a Central Park visit. This page covers the linking logic and verification steps only — no unverified stall lists, prices or closing days.',
      updated: E,
      sections: [
        {
          heading: 'Two independent places',
          paragraphs: [
            'The night market and the park are separate locations with their own trading patterns, crowds and management. Being in the same city is not a reason to apply the park’s listed access or transport notes to the market.',
          ],
        },
        {
          heading: 'Route considerations',
          paragraphs: [
            'The Liuhe area lies towards the Kaohsiung Main Station side of the city, while R9 Central Park is a different station. To link them by MRT or on foot, confirm the same-day workable route with the operator’s station and network information; we publish no measured distance or fixed minutes.',
          ],
        },
        {
          heading: 'An evening rhythm',
          paragraphs: [
            'A common order puts the park walk in daylight or late afternoon and the market street at dinner time. Rain, typhoons or major events change stalls and crowds, so rely on on-site conditions and official notices.',
          ],
        },
      ],
      faq: [
        {
          q: 'Is Liuhe Night Market right beside Central Park?',
          a: 'They are separate places and “next to the park” is misleading. Use an official map and transport information for the relative positions and same-day route.',
        },
        {
          q: 'Which stalls are must-try?',
          a: 'We recommend no specific vendor and list no unverified names, prices or closing days; judge from the stalls and their own information on site.',
        },
        {
          q: 'What time does it open?',
          a: 'Market and individual stall hours change and we publish no timetable. Check official and on-site information.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: attractions and district lookup', url: KHH_HOME },
        { label: 'Kaohsiung MRT official site: network and stations', url: KRTC_HOME },
        { label: 'Kaohsiung City Transport Bureau', url: TRANSPORT_SRC },
      ],
    },
  },

  {
    slug: 'nearby-indoor',
    group: 'nearby',
    related: ['rainy-day-itinerary', 'coffee-and-dessert', 'wufu-shopping-area', 'family-nearby'],
    zh: {
      metaTitle: '中央公園周邊室內去處｜雨天與避暑的類型選擇',
      description:
        '遇到午後雷雨或高溫時，如何把高雄中央公園行程轉進室內：以百貨、閱讀空間、餐飲與交通節點等類型整理，並提醒各場所營業與公休需自行查證。',
      h1: '中央公園周邊的室內去處',
      lead: '高雄夏季常有午後雷雨與高溫，行程最好預留可撤退的室內選項。本頁以類型整理，不推薦特定場所，也不列未核實的營業資訊。',
      updated: Z,
      sections: [
        {
          heading: '可考慮的室內類型',
          bullets: [
            '百貨與商場：可同時處理用餐、購物與休息。',
            '閱讀與藝文空間：適合安靜停留，但各有開放與公休規則。',
            '咖啡與餐飲空間：做為短時間避雨或等候天氣的空檔。',
            '捷運站與交通節點：便於調整路線或提前返程。',
          ],
        },
        {
          heading: '與公園動線的搭配',
          paragraphs: [
            '把室內點排在公園散步之後、或做為中途休息，比在雨中硬走完整圈更實際。本站沒有實測距離，請依當天地圖、過街點與現場指標調整。',
          ],
        },
        {
          heading: '出發前的查核',
          paragraphs: [
            '各場所營業時段、公休日、入場規則與活動管制各自獨立。先查中央氣象署預報與警特報，再確認場所官方資訊；本站不保證任何室內空間當天可用。',
          ],
        },
      ],
      faq: [
        {
          q: '下雨時中央公園附近能去哪裡？',
          a: '可考慮百貨商場、閱讀或藝文空間、咖啡與餐飲場所，以及捷運站等交通節點；請先確認各場所當天營業與公休情形。',
        },
        {
          q: '有推薦的特定場所嗎？',
          a: '本站為獨立非營利指南，不推薦特定商戶或場館，也不列未核實的地址與營業時間。',
        },
        {
          q: '颱風天還適合出門嗎？',
          a: '請以中央氣象署警特報、市府公告與現場狀況為準，必要時取消戶外段，不要依賴任何既定行程。',
        },
      ],
      sources: [
        { label: '中央氣象署：預報與警特報', url: CWA_SRC },
        { label: '高雄旅遊網：景點與商圈查詢', url: KHH_HOME },
        { label: '高雄捷運：R9 中央公園站車站資訊', url: STATION_SRC },
      ],
    },
    en: {
      metaTitle: 'Indoor Places near Central Park | Rain & Heat Alternatives',
      description:
        'How to move a Kaohsiung Central Park visit indoors during afternoon storms or heat: department stores, reading spaces, cafés and transport hubs by type, with hours verified separately.',
      h1: 'Indoor Options around Central Park',
      lead: 'Kaohsiung summers bring afternoon storms and high heat, so a workable plan keeps an indoor fallback. This page organises options by type, recommends no named venue and lists no unverified hours.',
      updated: E,
      sections: [
        {
          heading: 'Indoor types worth considering',
          bullets: [
            'Department stores and malls: meals, shopping and rest in one place.',
            'Reading and arts spaces: quieter stays, each with its own opening and closing rules.',
            'Cafés and restaurants: short shelter while waiting out a shower.',
            'MRT stations and transport hubs: useful for changing route or heading back early.',
          ],
        },
        {
          heading: 'Fitting them into the park route',
          paragraphs: [
            'Placing an indoor stop after the park walk, or as a mid-way break, is more practical than completing a full outdoor circuit in the rain. We publish no measured distances; use a same-day map, crossings and on-site signs.',
          ],
        },
        {
          heading: 'Checks before leaving',
          paragraphs: [
            'Each venue sets its own hours, closing days, entry rules and event controls. Check Central Weather Administration forecasts and warnings first, then the venue’s own information; we guarantee no indoor space will be available that day.',
          ],
        },
      ],
      faq: [
        {
          q: 'Where can I go near Central Park when it rains?',
          a: 'Consider department stores, reading or arts spaces, cafés and restaurants, and MRT stations as transport hubs; confirm each one’s hours and closing days first.',
        },
        {
          q: 'Do you recommend a specific venue?',
          a: 'This independent non-profit guide recommends no specific business or venue and lists no unverified addresses or hours.',
        },
        {
          q: 'Is a typhoon day suitable for visiting?',
          a: 'Follow Central Weather Administration warnings, city notices and on-site conditions; cancel the outdoor part if needed rather than relying on a fixed plan.',
        },
      ],
      sources: [
        { label: 'Central Weather Administration: forecasts and warnings', url: CWA_SRC },
        { label: 'Kaohsiung Travel: attractions and district lookup', url: KHH_HOME },
        { label: 'Kaohsiung MRT: R9 Central Park station information', url: STATION_SRC },
      ],
    },
  },

];

/**
 * The two remaining nearby guides in this file are assigned to P2. They are
 * kept beside the other C-group content; topics.p2.ts re-exports them as part
 * of its 12 pages. P1_TOPICS above therefore contains exactly 16 topics.
 */
export const P2_NEARBY_TOPICS: Topic[] = [
  {
    slug: 'family-nearby',
    group: 'nearby',
    related: ['family-itinerary', 'lawn-and-picnic', 'nearby-indoor', 'things-to-do'],
    zh: {
      metaTitle: '中央公園周邊親子去處｜以類型規劃不點名商戶',
      description:
        '給帶小孩造訪高雄中央公園的家庭：以草地、室內空間、餐飲與交通節點等類型整理周邊選擇，並說明安全、休息與設施狀態需現場確認。',
      h1: '中央公園周邊的親子選擇',
      lead: '親子行程的關鍵不是跑最多點，而是有足夠的休息與撤退選項。本頁以類型整理，不推薦特定商戶，也不保證任何設施當天開放。',
      updated: Z,
      sections: [
        {
          heading: '適合搭配的空間類型',
          bullets: [
            '草地與遮蔭：適合短時間活動，但需注意高溫與雨後濕滑。',
            '室內商場與閱讀空間：可做為天候不佳或需要休息時的替代。',
            '類型中立的餐飲選擇：便於安排補充體力的空檔。',
            '捷運站與明確會合點：讓大人小孩都能掌握集合位置。',
          ],
        },
        {
          heading: '節奏與安全',
          paragraphs: [
            '把戶外段切短、在動線前段排休息點，比一次走完整個園區更合適。池邊、階梯與活動管制區請以現場圍籬與指示為準，本站未完成全園兒童安全或無障礙勘查。',
          ],
        },
        {
          heading: '設施與活動查證',
          paragraphs: [
            '遊戲設施、廁所、飲水與當天活動狀態都可能變動。出發前查市府公園頁與活動公告，並以現場指標為準；本站不列未核實的設施清單或開放時間。',
          ],
        },
      ],
      faq: [
        {
          q: '中央公園適合帶小孩去嗎？',
          a: '草地與開放空間常被家庭使用，但實際動線、設施與天候差異很大；請以現場狀況與同行者需求判斷，本站不作適合性保證。',
        },
        {
          q: '有兒童遊戲場嗎？',
          a: '本站未核實遊戲設施的現況與位置，不提供清單，請查管理單位公告與現場指標。',
        },
        {
          q: '下雨或太熱有地方躲嗎？',
          a: '可把行程轉向周邊室內類型場所；請先查各場所營業與公休，以及中央氣象署預報。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：中央公園介紹', url: PARK_SRC },
        { label: '高雄旅遊網：活動與消息', url: EVENTS_SRC },
        { label: '中央氣象署：預報與警特報', url: CWA_SRC },
      ],
    },
    en: {
      metaTitle: 'Family-Friendly Places near Central Park | A Type-Based Guide',
      description:
        'For families visiting Kaohsiung Central Park: lawns, indoor spaces, food stops and meeting points organised by type, with safety, rest and facility status always checked on site.',
      h1: 'Family Options around Central Park',
      lead: 'A good family plan is not about covering the most stops; it needs enough rest and a way out. This page uses types rather than named businesses, and guarantees no facility will be open on the day.',
      updated: E,
      sections: [
        {
          heading: 'Types of space that combine well',
          bullets: [
            'Lawns and shade: good for short activity, but watch heat and slippery surfaces after rain.',
            'Indoor malls and reading spaces: a fallback for poor weather or a needed break.',
            'Type-neutral food options: useful for an energy stop.',
            'MRT stations and a clearly agreed meeting point: so everyone knows where to gather.',
          ],
        },
        {
          heading: 'Pacing and safety',
          paragraphs: [
            'Short outdoor segments and rest points early in the route work better than one full circuit. Around ponds, steps and event control zones, follow on-site barriers and signs; no full-site child-safety or accessibility survey has been completed here.',
          ],
        },
        {
          heading: 'Verifying facilities and events',
          paragraphs: [
            'Play equipment, toilets, drinking water and same-day events can all change. Check the city park page and event notices before leaving, then on-site signs; we list no unverified facility inventory or hours.',
          ],
        },
      ],
      faq: [
        {
          q: 'Is Central Park suitable for children?',
          a: 'Lawns and open space are often used by families, but routes, facilities and weather vary widely. Judge from on-site conditions and your group’s needs; we give no suitability guarantee.',
        },
        {
          q: 'Is there a playground?',
          a: 'We have not verified the current play equipment or its location and publish no list. Check park authority notices and on-site signs.',
        },
        {
          q: 'Is there shelter from rain or heat?',
          a: 'Shift towards nearby indoor venue types; check each one’s hours and closing days plus the official forecast first.',
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
    slug: 'breakfast-and-brunch',
    group: 'nearby',
    related: ['coffee-and-dessert', 'nearby-food', 'weekend-itinerary', 'first-visit-plan'],
    zh: {
      metaTitle: '中央公園附近早餐與早午餐｜時段與類型安排',
      description:
        '把早餐或早午餐排進高雄中央公園行程：以餐點類型與時段考量整理，說明為何各店營業與公休必須自行查證，並提供公園散步前後的順序建議。',
      h1: '中央公園附近的早餐與早午餐',
      lead: '早上造訪公園時，用餐時段與散步時段怎麼排，會影響整體節奏。本頁不推薦店家，只談類型與順序，並提醒所有營業資訊需現場核實。',
      updated: Z,
      sections: [
        {
          heading: '先想清楚用餐目的',
          bullets: [
            '快速補充：以外帶或簡單餐點為主的類型。',
            '慢慢坐：有內用座位、適合銜接上午散步的類型。',
            '與住宿或交通節點結合：方便在進園前後安排。',
          ],
        },
        {
          heading: '與公園散步的順序',
          paragraphs: [
            '夏季建議把戶外散步放在較早或較涼的時段，用餐則視店家營業情形穿插；雨天可先室內用餐再視天候進園。本站沒有實測距離，動線請依當天地圖與現場指標。',
          ],
        },
        {
          heading: '營業與價格不代查',
          paragraphs: [
            '早餐時段、公休日、候位與價位各店不同且會變動。本站不列店名、地址或價格；有特殊飲食需求，請直接向店家確認食材與供應情形。',
          ],
        },
      ],
      faq: [
        {
          q: '有推薦的早餐店嗎？',
          a: '本站為獨立非營利指南，不推薦特定商戶，也不列未核實的店名與地址；請依類型與地圖自行篩選。',
        },
        {
          q: '幾點去公園比較舒服？',
          a: '本站不提供固定最佳時段；請參考中央氣象署當天預報，避開高溫與午後雷雨，再配合個人作息調整。',
        },
        {
          q: '公園裡可以用餐嗎？',
          a: '園內規範與設施狀態未經本站核實，請以現場告示為準，並把垃圾帶走。',
        },
      ],
      sources: [
        { label: '高雄旅遊網：景點與商圈查詢', url: KHH_HOME },
        { label: '高雄旅遊網：中央公園介紹', url: PARK_SRC },
        { label: '中央氣象署：預報與警特報', url: CWA_SRC },
      ],
    },
    en: {
      metaTitle: 'Breakfast & Brunch near Central Park | Timing by Type',
      description:
        'Fitting breakfast or brunch into a Kaohsiung Central Park visit: types of place, order relative to the park walk, and why each venue’s hours and closing days must be checked yourself.',
      h1: 'Breakfast and Brunch near Central Park',
      lead: 'On a morning visit, the order of the meal and the walk shapes the whole outing. This page recommends no business and deals only with types and sequence, with all hours verified separately.',
      updated: E,
      sections: [
        {
          heading: 'Decide what the meal is for',
          bullets: [
            'A quick refuel: takeaway or simple meal types.',
            'A slower sit: places with indoor seating that lead into a morning walk.',
            'Combined with accommodation or a transport hub: easy to place before or after the park.',
          ],
        },
        {
          heading: 'Order relative to the park walk',
          paragraphs: [
            'In summer, put the outdoor walk in the earlier, cooler part of the day and fit the meal around the venue’s hours; in rain, eat indoors first and decide about the park afterwards. We publish no measured distances — use a same-day map and on-site signs.',
          ],
        },
        {
          heading: 'We do not verify hours or prices',
          paragraphs: [
            'Breakfast windows, closing days, queues and prices differ by business and change. We list no names, addresses or prices; for specific dietary needs, confirm ingredients and availability with the business directly.',
          ],
        },
      ],
      faq: [
        {
          q: 'Which breakfast place do you recommend?',
          a: 'This independent non-profit guide recommends no specific business and lists no unverified names or addresses. Filter by type and a map instead.',
        },
        {
          q: 'What is the best time to visit the park?',
          a: 'We give no fixed best time. Use the day’s official forecast to avoid heat and afternoon storms, then adjust for your own schedule.',
        },
        {
          q: 'Can I eat inside the park?',
          a: 'Park rules and facility status have not been verified here; follow on-site notices and carry your waste out.',
        },
      ],
      sources: [
        { label: 'Kaohsiung Travel: attractions and district lookup', url: KHH_HOME },
        { label: 'Kaohsiung Travel: Central Park introduction', url: PARK_SRC },
        { label: 'Central Weather Administration: forecasts and warnings', url: CWA_SRC },
      ],
    },
  },
];
