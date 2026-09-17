/**
 * 高雄（前金／中央公園一帶）氣候常年統計表與季度遊覽策略。
 *
 * 數值來源：交通部中央氣象署高雄測站 1991–2020 年氣候平均值
 * （逐月平均最高溫 / 平均氣溫 / 平均最低溫 / 降水量 / 降水日數 / 相對濕度 / 日照時數）。
 * 表格中的「雨季」「颱風季」等描述屬於長年平均狀態，出發前仍應搭配上方即時預報判讀。
 */

export interface NormalRow {
  /** 月份（1–12） */
  month: number;
  /** 月平均最高溫 °C */
  max: number;
  /** 月平均氣溫 °C */
  mean: number;
  /** 月平均最低溫 °C */
  min: number;
  /** 月累積降水量 mm */
  precip: number;
  /** 月降水日數（≥0.1mm） */
  rainDays: number;
  /** 月平均相對濕度 % */
  humidity: number;
  /** 月平均日照時數 */
  sunshine: number;
}

export const normalsLabel = '交通部中央氣象署高雄測站 1991–2020 年氣候平均';

export const climateNormals: NormalRow[] = [
  { month: 1, max: 24.2, mean: 19.7, min: 16.2, precip: 19.1, rainDays: 3.2, humidity: 71.6, sunshine: 177.0 },
  { month: 2, max: 25.0, mean: 20.7, min: 17.2, precip: 17.7, rainDays: 3.2, humidity: 71.8, sunshine: 176.0 },
  { month: 3, max: 27.0, mean: 23.0, min: 19.7, precip: 32.3, rainDays: 3.6, humidity: 71.9, sunshine: 194.7 },
  { month: 4, max: 29.3, mean: 25.7, min: 22.8, precip: 68.4, rainDays: 5.4, humidity: 74.2, sunshine: 197.2 },
  { month: 5, max: 31.0, mean: 27.8, min: 25.2, precip: 202.2, rainDays: 6.2, humidity: 76.6, sunshine: 207.7 },
  { month: 6, max: 32.1, mean: 28.9, min: 26.3, precip: 416.2, rainDays: 12.9, humidity: 79.0, sunshine: 215.0 },
  { month: 7, max: 32.7, mean: 29.4, min: 26.7, precip: 377.2, rainDays: 13.2, humidity: 78.0, sunshine: 220.7 },
  { month: 8, max: 32.1, mean: 28.9, min: 26.3, precip: 512.4, rainDays: 16.7, humidity: 79.9, sunshine: 189.3 },
  { month: 9, max: 31.8, mean: 28.5, min: 25.9, precip: 224.5, rainDays: 10.1, humidity: 77.5, sunshine: 188.6 },
  { month: 10, max: 30.1, mean: 26.9, min: 24.4, precip: 53.4, rainDays: 4.2, humidity: 74.2, sunshine: 191.9 },
  { month: 11, max: 28.1, mean: 24.5, min: 21.6, precip: 25.6, rainDays: 2.8, humidity: 73.1, sunshine: 166.5 },
  { month: 12, max: 25.3, mean: 21.2, min: 17.9, precip: 19.2, rainDays: 2.8, humidity: 71.6, sunshine: 157.2 },
];

export interface SeasonRow {
  id: string;
  season: string;
  months: string;
  temp: string;
  precip: string;
  rainDays: string;
  humidity: string;
  sunshine: string;
  crowd: string;
  phenology: string;
  strategy: string;
  gear: string[];
  risks: string[];
}

export const seasonRows: SeasonRow[] = [
  {
    id: 'winter',
    season: '涼季 · 乾季',
    months: '12–2 月',
    temp: '月均高溫 24–25°C / 均低溫 16–18°C',
    precip: '季雨量約 56 mm（全年最少）',
    rainDays: '每月降雨日數約 3 天',
    humidity: '平均相對濕度約 72%',
    sunshine: '月日照約 157–177 小時',
    crowd: '平日早晨與傍晚為市民運動時段；跨年、春節連假人潮集中在水舞廣場與草地。',
    phenology: '喬木落葉與換葉期，林蔭透光佳，是全園最容易拍到樹形與光影的季節；湖面因降雨少而水位較低。',
    strategy:
      '全年最舒適的健行季，建議安排上午 9–11 點或下午 3–5 點的長時間戶外行程，可把中央公園、城市光廊與新堀江商圈串成半日散步。日夜溫差可達 8–10°C，早晚出門記得加一件薄外套。',
    gear: ['薄長袖外套', '水壺', '遮陽帽（正午紫外線仍偏強）'],
    risks: ['冬季東北季風影響時體感偏涼', '偶有寒流造成清晨氣溫降到 12°C 以下'],
  },
  {
    id: 'spring',
    season: '春季 · 梅雨前',
    months: '3–5 月',
    temp: '月均高溫 27–31°C / 均低溫 20–25°C',
    precip: '季雨量約 303 mm',
    rainDays: '每月降雨日數約 4–6 天',
    humidity: '平均相對濕度約 72–77%',
    sunshine: '月日照約 195–208 小時',
    crowd: '春假與連續假期園區活動多，親子族群集中在兒童遊戲場與水舞廣場。',
    phenology: '新葉與開花期，草地返綠；5 月梅雨鋒面靠近前，午後常有短暫陣雨，雨後草坡與池面倒影特別乾淨。',
    strategy:
      '氣溫回升但尚未進入盛夏，是安排「上午公園、下午室內」彈性行程的好時機。5 月起務必雨備：把百貨美食街、地下街與文學館排進行程作為雨備节点。',
    gear: ['摺疊傘 / 輕便雨衣', '透氣排汗衣物', '防蚊用品', '防曬乳'],
    risks: ['梅雨鋒面帶來連續性降雨', '午後雷陣雨常在一小時內急降急停'],
  },
  {
    id: 'summer',
    season: '夏季 · 雨季與颱風季',
    months: '6–8 月',
    temp: '月均高溫 32–33°C / 均低溫 26–27°C',
    precip: '季雨量約 1,306 mm（佔全年約 2/3）',
    rainDays: '每月降雨日數約 13–17 天（8 月最多）',
    humidity: '平均相對濕度約 78–80%',
    sunshine: '月日照約 189–221 小時（7 月最長）',
    crowd: '白天人少、黃昏後最多人；暑假午後常有學生與街頭表演聚集。',
    phenology: '喬木最茂密、遮蔭效果最好的時候；高溫加上潮濕使池水容易出現藻類增生，環湖步道以清晨水鳥活動最熱鬧。',
    strategy:
      '改採「清晨＋夜間」兩段式遊覽：早上 6–8 點看鳥與散步，正午躲進室內景點，傍晚 5 點後回來看水舞與夜間光環境。行程需預留颱風或豪雨備案。',
    gear: ['遮陽傘 / 帽子', '防曬乳 SPF50+', '電解質飲品', '輕便替換衣物', '防蚊用品'],
    risks: [
      '颱風季（7–9 月為高峰）可能發布停班停課與公園封閉',
      '午後雷陣雨伴隨瞬間強降雨與積水',
      '體感溫度常達 35°C 以上，需留意中暑徵兆',
    ],
  },
  {
    id: 'autumn',
    season: '秋季 · 轉乾季',
    months: '9–11 月',
    temp: '月均高溫 28–32°C / 均低溫 22–26°C',
    precip: '季雨量約 304 mm（9 月仍多）',
    rainDays: '每月降雨日數約 3–10 天',
    humidity: '平均相對濕度約 73–78%',
    sunshine: '月日照約 167–189 小時',
    crowd: '9 月仍有颱風干擾，10–11 月天氣穩定後為全年人潮最舒服的平衡期。',
    phenology: '夏季開花的喬木逐漸結果，池畔的鷺科與紅冠水雞活動明顯；11 月起部分樹種進入落葉期，草坡色調轉黃。',
    strategy:
      '10 月下旬到 11 月是全年最推薦造訪的時段：氣溫回到 30°C 以下、雨日少且午後雲層適合拍照。可安排全日行程並延伸到駁二、西子灣等戶外景點。',
    gear: ['薄外套（早晚溫差）', '遮陽帽', '水壺', '相機偏振鏡（雲層與水面）'],
    risks: ['9 月仍需注意颱風動態', '秋老虎造成白天高溫', '東北季風增強時空氣品質可能轉差'],
  },
];

export interface MonthStrategy {
  months: string;
  advice: string;
}

export const quickMonthAdvice: MonthStrategy[] = [
  { months: '1–2 月', advice: '全年最涼爽，留意寒流帶來的清晨低溫；適合長時間散步與賞樹形。' },
  { months: '3–4 月', advice: '回暖乾爽，是最穩定的賞花與草地時節，僅需薄外套。' },
  { months: '5–6 月', advice: '梅雨開始，午後雷陣雨頻繁，務必摺疊傘與室內備案。' },
  { months: '7–8 月', advice: '雨季與颱風季高峰，改走清晨與黃昏行程，注意豪雨特報。' },
  { months: '9–10 月', advice: '降雨快速減少，仍須留意颱風，10 月下旬起天氣最穩定。' },
  { months: '11–12 月', advice: '乾季開始、光線柔和，是攝影與城市慢遊的黃金期。' },
];
