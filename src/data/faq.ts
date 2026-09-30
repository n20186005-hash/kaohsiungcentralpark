/**
 * FAQ content used both for the visible Q&A block and the FAQPage JSON-LD.
 * Keeping it in one file guarantees the schema and the page never drift apart.
 *
 * Each entry is bilingual so the same source feeds both the Traditional
 * Chinese (zh-Hant) and English (en) pages — the `locale` is selected by the
 * consuming component / JSON-LD builder.
 */

export interface FaqItem {
  /** 問題 / Question */
  question: { zh: string; en: string };
  /** 回答（同時寫入 FAQPage schema 的 acceptedAnswer.text）/ Answer */
  answer: { zh: string; en: string };
}

export const faqItems: FaqItem[] = [
  {
    question: {
      zh: '高雄中央公園在哪裡？',
      en: 'Where is Kaohsiung Central Park?',
    },
    answer: {
      zh: '高雄中央公園（Kaohsiung Central Park）位於臺灣高雄市前金區，四周由中山一路、五福三路、中華三路與民生二路環繞，Google 地圖登記地址為 801台灣高雄市前金區榮治里中山一路11號（捷運 R9 中央公園站）。',
      en: 'Kaohsiung Central Park is in Cianjin District, Kaohsiung, Taiwan, bounded by Zhongshan 1st Rd., Wufu 3rd Rd., Zhonghua 3rd Rd. and Minsheng 2nd Rd. The Google Maps registered address is No. 11, Zhongshan 1st Rd., Rongzhi Village, Cianjin District, Kaohsiung City 801, Taiwan (KMRT R9 Central Park Station).',
    },
  },
  {
    question: {
      zh: '高雄中央公園要門票嗎？開放時間是？',
      en: 'Is there an entrance fee, and what are the opening hours?',
    },
    answer: {
      zh: '高雄中央公園是全年 24 小時開放的免費公共空間，不需門票，也不需要預約；夜間照明與主要步道均維持開放。',
      en: 'Kaohsiung Central Park is a free public space open 24 hours a year-round. No ticket or reservation is required, and the main paths and night lighting remain accessible at all times.',
    },
  },
  {
    question: {
      zh: '高雄中央公園有多大？',
      en: 'How large is Kaohsiung Central Park?',
    },
    answer: {
      zh: '高雄中央公園總面積約 12.7 公頃，是高雄市中心規模最大的都市森林公園，環園步道一圈約 1.1 公里、步行約 30 分鐘。',
      en: 'The park covers about 12.7 hectares, the largest urban forest park in downtown Kaohsiung. One loop of the ring path is about 1.1 km, a roughly 30-minute walk.',
    },
  },
  {
    question: {
      zh: '怎麼搭捷運到高雄中央公園？',
      en: 'How do I get to Kaohsiung Central Park by MRT?',
    },
    answer: {
      zh: '搭乘高雄捷運紅線至 R9 中央公園站，由 1 號出口出站即是公園草地與水舞廣場。該站由英國建築師 Richard Rogers 團隊設計，於 2008 年 3 月 9 日啟用，設有三個出口。',
      en: 'Take the KMRT Red Line to R9 Central Park Station; Exit 1 leads directly onto the park lawn and Water Square. The station was designed by Richard Rogers’ team, opened on 9 March 2008, and has three exits.',
    },
  },
  {
    question: {
      zh: '高雄中央公園的水舞幾點開始？',
      en: 'What time does the water show start?',
    },
    answer: {
      zh: '水舞廣場每天安排數場表演，每場約 20 分鐘，通常在白天與夜間各有多個場次；實際場次會依季節、天候與維修調整，建議以現場公告時間為準。',
      en: 'The Water Square hosts several shows daily, each about 20 minutes, usually with multiple sessions in the daytime and at night. Actual schedules vary by season, weather and maintenance — please follow on-site notices.',
    },
  },
  {
    question: {
      zh: '高雄中央公園適合帶小孩與長輩同行嗎？',
      en: 'Is the park good for children and elderly visitors?',
    },
    answer: {
      zh: '適合。園內設有兒童遊戲場、沙坑與沖洗區，靠近五福三路與中山一路各有公共廁所與無障礙設施，主要步道為平緩透水磚道，嬰兒車與輪椅皆可通行。',
      en: 'Yes. There is a children’s playground, sandpit and rinse area, public restrooms and accessible facilities near Wufu 3rd Rd. and Zhongshan 1st Rd., and the main trails are flat permeable-brick paths suitable for strollers and wheelchairs.',
    },
  },
  {
    question: {
      zh: '高雄中央公園附近有什麼景點可以一起逛？',
      en: 'What attractions are nearby to visit together?',
    },
    answer: {
      zh: '步行可達的景點包含高雄捷運 R9 中央公園站打卡建築、公園南側的城市光廊（Urban Spotlight Arcade）、新堀江商圈（Shinkuchan）、公園西北角的高雄文學館，以及玫瑰聖母聖殿主教座堂與五福商圈百貨群。',
      en: 'Within walking distance you’ll find the R9 Central Park Station architecture, the Urban Spotlight Arcade just south of the park, the Shinkuchan shopping district, the Kaohsiung Literature Library at the northwest corner, the Holy Rosary Cathedral, and the Wufu shopping-district department stores.',
    },
  },
  {
    question: {
      zh: '高雄中央公園的歷史由來是什麼？',
      en: 'What is the history of Kaohsiung Central Park?',
    },
    answer: {
      zh: '高雄中央公園的構想起自日治時期 1936 年的都市計畫預留綠地（省轄市時期編號為「第十五號公園」），1976 年正式成立，因由扶輪社認養而稱扶輪公園，舊址曾為中山體育場與前金游泳池；1990 年代在環保團體建議下配合高雄捷運紅線工程，由高雄捷運公司出資改造為今天的森林公園。',
      en: 'The park was conceived as reserved green space in the 1936 urban plan under Japanese rule (numbered “Park No. 15” during the provincial-city era). It was officially established in 1976 and called Rotary Park after its adoption by the Rotary Club; the site was formerly Zhongshan Stadium and Cianjin Swimming Pool. In the 1990s, with environmental groups’ advocacy and alongside the KMRT Red Line project, it was redeveloped into today’s forest park by KMRT Corporation.',
    },
  },
  {
    question: {
      zh: '高雄中央公園在 Google 地圖上的評價如何？',
      en: 'What is the Google Maps rating of Kaohsiung Central Park?',
    },
    answer: {
      zh: '依本站 2026 年 9 月同步的 Google 地圖使用者評價資料，高雄中央公園（分類：城市公園）評分為 5 分制中的 4.5 分，累積 16,428 則評價。以上數值引用自 Google 地圖使用者評價，版權歸原作者與 Google 地圖所有。',
      en: 'According to Google Maps user-review data synced by this site in September 2026, Kaohsiung Central Park (category: City park) holds a 4.5 out of 5 rating from 16,428 reviews. These figures are quoted from Google Maps user reviews; copyright belongs to the original authors and Google Maps.',
    },
  },
  {
    question: {
      zh: '從高雄國際機場怎麼到高雄中央公園？',
      en: 'How do I get from Kaohsiung International Airport?',
    },
    answer: {
      zh: '最簡單的方式是在機場航廈步行至捷運紅線 R4 高雄國際機場站，搭乘往岡山方向的列車，於 R9 中央公園站下車（約 5 站、車程 12–16 分鐘），由 1 號出口出站步行 1–3 分鐘即達園區草地。攜帶大型行李或夜間抵達，也可搭乘排班計程車，車程約 25–35 分鐘。',
      en: 'The easiest way is to walk from the terminal to KMRT Red Line R4 Kaohsiung International Airport Station, board a train toward Gangshan, and alight at R9 Central Park Station (about 5 stops, 12–16 minutes); Exit 1 is a 1–3 minute walk to the lawn. With large luggage or late arrivals, a taxi takes about 25–35 minutes.',
    },
  },
  {
    question: {
      zh: '從高鐵左營站或台鐵高雄車站怎麼前往？',
      en: 'How do I get there from HSR Zuoying or TRA Kaohsiung Station?',
    },
    answer: {
      zh: '高鐵左營站與捷運紅線 R16 左營／高鐵站連通，搭乘往小港方向的列車 7 站、約 16–20 分鐘可達 R9 中央公園站。台鐵高雄車站則與捷運 R11 高雄車站連通，往小港方向搭乘 2 站、約 5 分鐘即達；沿中山一路步行前往則約 15–20 分鐘。',
      en: 'HSR Zuoying connects to KMRT Red Line R16 Zuoying/HSR Station; take a train toward Siaogang, 7 stops (about 16–20 minutes) to R9 Central Park. TRA Kaohsiung Station connects to KMRT R11 Kaohsiung Station; 2 stops (about 5 minutes) toward Siaogang, or a 15–20 minute walk along Zhongshan 1st Rd.',
    },
  },
  {
    question: {
      zh: '開車前往高雄中央公園有停車位嗎？',
      en: 'Is there parking if I drive?',
    },
    answer: {
      zh: '有。可由國道 1 號（中山高）經中正交流道接中正路進入市中心，或使用鳳山交流道方向的市區道路。園區與鄰近百貨設有路外與建築附設收費停車場，周邊道路也有機車與小型車停車格。假日與連續假期車位常一位難求，建議停在車站周邊停車場後轉乘捷運。',
      en: 'Yes. From National Freeway 1 (Zhongshan Hwy) take Zhongzheng Interchange to Zhongzheng Rd. into the city center, or use the Fongshan Interchange approach. The park and nearby department stores have off-street and building-attached paid lots, and surrounding roads have motorcycle and car spaces. On holidays, spaces fill up fast — consider parking near a station and transferring to the MRT.',
    },
  },
  {
    question: {
      zh: '高雄中央公園有洗手間、飲水機與無障礙設施嗎？',
      en: 'Are there restrooms, drinking fountains and accessible facilities?',
    },
    answer: {
      zh: '有的。園區靠近中山一路與五福三路兩側設有公共廁所，內含無障礙廁間與扶手；遊戲場與廣場周邊設有飲水機，水舞與沙坑旁則有腳部沖洗區。嬰兒車與輪椅可通行主要步道，捷運站也設有電梯與無障礙坡道。',
      en: 'Yes. Public restrooms with accessible stalls and handrails are on both the Zhongshan 1st Rd. and Wufu 3rd Rd. sides. Drinking fountains sit near the playground and plaza, with foot-rinse areas by the water show and sandpit. Strollers and wheelchairs can use the main trails, and the MRT station has elevators and ramps.',
    },
  },
  {
    question: {
      zh: '高雄中央公園附近有餐飲、便利商店與商場嗎？',
      en: 'Are there restaurants, convenience stores and malls nearby?',
    },
    answer: {
      zh: '步行數分鐘範圍內有 24 小時便利商店、連鎖咖啡與獨立咖啡館、小吃與百貨美食街，蔬食與清真友善餐飲類型店家也能在商圈內找到。本站為非營利科普網站，僅以設施類型做中立概述，不推薦特定店家。',
      en: 'Within a few minutes’ walk there are 24-hour convenience stores, chain and independent cafés, local eateries and department-store food courts; vegetarian- and halal-friendly options can be found in the district. As a non-profit guide, we describe facility types neutrally and do not endorse specific businesses.',
    },
  },
  {
    question: {
      zh: '想在附近住一晚，哪裡可以找到住宿？',
      en: 'Where can I stay nearby for a night?',
    },
    answer: {
      zh: '前金、新興與苓雅區一帶聚集中型商務旅館，多在步行 5–15 分鐘內；高雄車站與美麗島站周邊則有大型飯店與星級旅館，另有青年旅館與背包床位類型住宿。大型活動期間房價波動較大，建議提早預訂並確認是否附停車位。',
      en: 'Mid-size business hotels cluster in Cianjin, Sinsing and Lingya Districts, mostly 5–15 minutes’ walk away; larger and starred hotels sit around Kaohsiung Station and Formosa Boulevard Station, with hostels and dorm beds also available. Prices fluctuate during major events — book early and confirm parking.',
    },
  },
  {
    question: {
      zh: '附近有加油站與電動車充電站嗎？',
      en: 'Are there gas stations and EV charging nearby?',
    },
    answer: {
      zh: '中山一路、中華三路與五福路沿線設有民營與直營加油站，多為 24 小時自助或人工服務；百貨與公有停車場設有電動車充電樁（含慢充與快充），使用前請先確認接頭規格與費率；市區另設有電動機車電池交換站。',
      en: 'Along Zhongshan 1st Rd., Zhonghua 3rd Rd. and Wufu Rd. you’ll find private and company gas stations, many open 24 hours. Department stores and public lots have EV charging piles (slow and fast); check connector type and rates before use. Battery-swap stations for electric scooters are also in the city.',
    },
  },
  {
    question: {
      zh: '高雄中央公園適合哪個季節去？幾月最舒服？',
      en: 'What season is best to visit?',
    },
    answer: {
      zh: '依交通部中央氣象署高雄測站 1991–2020 年氣候平均，10 月下旬到隔年 3 月氣溫最舒適、降雨最少，是推薦造訪的時段；6–8 月為雨季與颱風季，占全年雨量約三分之二，建議改走清晨與黃昏行程，4–5 月則需注意梅雨鋒面的午後雷雨。',
      en: 'Based on the CWA Kaohsiung station 1991–2020 climate normals, late October to March is the most comfortable and driest period to visit. June–August is the rainy/typhoon season (about two-thirds of annual rainfall), so plan mornings and evenings; April–May bring Meiyu frontal afternoon thunderstorms.',
    },
  },
  {
    question: {
      zh: '夏天去高雄中央公園會不會太熱？',
      en: 'Is it too hot in summer?',
    },
    answer: {
      zh: '夏季月均高溫達 32–33°C、濕度約 78–80%，體感常超過 35°C。建議安排在清晨 6–8 點或傍晚 5 點後活動，白天走樹蔭步道並補充水分，隨時留意中暑徵兆；園區提供飲水機與大量座椅可供休息。',
      en: 'Summer averages 32–33°C with ~78–80% humidity, often feeling above 35°C. Plan activities early (6–8 AM) or after 5 PM, stay on shaded trails and hydrated, and watch for heat-stroke signs. Drinking fountains and plenty of benches are available.',
    },
  },
  {
    question: {
      zh: '高雄中央公園推薦怎麼安排行程？',
      en: 'How should I plan my itinerary?',
    },
    answer: {
      zh: '第一次造訪建議安排半日（約 3 小時）：捷運站出站 → 林蔭步道 → 水舞廣場 → 生態池環湖步道 → 草坡與遊戲場 → 步行到城市光廊與新堀江商圈。若時間充裕可改為全日行程，上午賞樹與賞鳥、中午在商圈休息、傍晚回來看水舞與夜間光環境。',
      en: 'For a first visit, plan a half day (~3 hours): exit the MRT → tree-lined path → Water Square → scenic-lake loop → lawn and playground → walk to the Urban Spotlight Arcade and Shinkuchan. With more time, make it a full day: trees and birding in the morning, a商圈 break at noon, and the water show and night lighting in the evening.',
    },
  },
  {
    question: {
      zh: '高雄中央公園可以看到哪些鳥類與動物？',
      en: 'What birds and wildlife can be seen?',
    },
    answer: {
      zh: '都市公園常見鳥類包含麻雀、白頭翁、綠繡眼、珠頸斑鳩與樹鵲，池畔有機會記錄到紅冠水雞與夜鷺；昆蟲方面可見蜜蜂、蝴蝶與蜻蜓。清晨與黃昏是觀察的最佳時段，請保持距離並避免使用閃光燈與播放鳥音誘鳥。',
      en: 'Common urban birds include sparrows, bulbuls, Japanese white-eyes, spotted doves and tree pies; the lake edge may reveal common moorhens and black-crowned night herons. Insects such as bees, butterflies and dragonflies are present. Early morning and dusk are best for observation — keep your distance and avoid flash or playback calls.',
    },
  },
  {
    question: {
      zh: '在公園內可以騎腳踏車或烤肉嗎？',
      en: 'Can I ride a bike or have a barbecue in the park?',
    },
    answer: {
      zh: '園區屬人行與休憩空間，進入後請下車牽行、禮讓行人；多數高雄市公園管理規範也禁止烤肉、野炊與燃放爆竹等火源行為，實際條文請以高雄市政府公告為準。',
      en: 'The park is a walking and leisure space — please dismount and walk your bike, yielding to pedestrians. Most Kaohsiung park regulations also prohibit barbecues, open-flame cooking and fireworks; follow the city government’s official notices.',
    },
  },
  {
    question: {
      zh: '下雨天還適合去高雄中央公園嗎？',
      en: 'Is it still worth visiting on a rainy day?',
    },
    answer: {
      zh: '短暫陣雨後的空氣與光線通常不錯，可改走商圈騎樓與地下街動線，雨停再進園區；但遇到豪雨或颱風警報請勿前往，開闊草地與喬木下方在雷雨時並不安全，水舞表演與戶外活動也可能暫停。',
      en: 'After a brief shower the air and light are often pleasant — use arcades and underground passages, then return to the park when rain stops. During heavy rain or typhoon warnings, stay away; open lawns and under trees are unsafe in thunderstorms, and water shows or outdoor events may pause.',
    },
  },
];
