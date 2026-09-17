/**
 * FAQ content used both for the visible Q&A block and the FAQPage JSON-LD.
 * Keeping it in one file guarantees the schema and the page never drift apart.
 */
export interface FaqItem {
  /** 問題 */
  question: string;
  /** 回答（同時寫入 FAQPage schema 的 acceptedAnswer.text） */
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: '高雄中央公園在哪裡？',
    answer:
      '高雄中央公園（Kaohsiung Central Park）位於臺灣高雄市前金區，四周由中山一路、五福三路、中華三路與民生二路環繞，Google 地圖登記地址為 801台灣高雄市前金區榮治里中山一路11號（捷運 R9 中央公園站）。',
  },
  {
    question: '高雄中央公園要門票嗎？開放時間是？',
    answer:
      '高雄中央公園是全年 24 小時開放的免費公共空間，不需門票，也不需要預約；夜間照明與主要步道均維持開放。',
  },
  {
    question: '高雄中央公園有多大？',
    answer:
      '高雄中央公園總面積約 12.7 公頃，是高雄市中心規模最大的都市森林公園，環園步道一圈約 1.1 公里、步行約 30 分鐘。',
  },
  {
    question: '怎麼搭捷運到高雄中央公園？',
    answer:
      '搭乘高雄捷運紅線至 R9 中央公園站，由 1 號出口出站即是公園草地與水舞廣場。該站由英國建築師 Richard Rogers 團隊設計，於 2008 年 3 月 9 日啟用，設有三個出口。',
  },
  {
    question: '高雄中央公園的水舞幾點開始？',
    answer:
      '水舞廣場每天安排數場表演，每場約 20 分鐘，通常在白天與夜間各有多個場次；實際場次會依季節、天候與維修調整，建議以現場公告時間為準。',
  },
  {
    question: '高雄中央公園適合帶小孩與長輩同行嗎？',
    answer:
      '適合。園內設有兒童遊戲場、沙坑與沖洗區，靠近五福三路與中山一路各有公共廁所與無障礙設施，主要步道為平緩透水磚道，嬰兒車與輪椅皆可通行。',
  },
  {
    question: '高雄中央公園附近有什麼景點可以一起逛？',
    answer:
      '步行可達的景點包含高雄捷運 R9 中央公園站打卡建築、公園南側的城市光廊（Urban Spotlight Arcade）、新堀江商圈（Shinkuchan）、公園西北角的高雄文學館，以及玫瑰聖母聖殿主教座堂與五福商圈百貨群。',
  },
  {
    question: '高雄中央公園的歷史由來是什麼？',
    answer:
      '高雄中央公園的構想起自日治時期 1936 年的都市計畫預留綠地（省轄市時期編號為「第十五號公園」），1976 年正式成立，因由扶輪社認養而稱扶輪公園，舊址曾為中山體育場與前金游泳池；1990 年代在環保團體建議下配合高雄捷運紅線工程，由高雄捷運公司出資改造為今天的森林公園。',
  },
  {
    question: '高雄中央公園在 Google 地圖上的評價如何？',
    answer:
      '依本站 2026 年 9 月同步的 Google 地圖使用者評價資料，高雄中央公園（分類：城市公園）評分為 5 分制中的 4.5 分，累積 16,409 則評價。以上數值引用自 Google 地圖使用者評價，版權歸原作者與 Google 地圖所有。',
  },
];
