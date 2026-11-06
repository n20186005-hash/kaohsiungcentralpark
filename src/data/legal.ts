/**
 * Content for the three secondary footer pages (privacy / terms / cookies).
 *
 * Structure follows the reference layout (numbered sections, cookie categories
 * with a save control) but the wording is written for THIS site, whose actual
 * data practices are documented in the shared footer:
 *  - no Google Analytics, ad tags, embedded maps or device geolocation
 *  - Cloudflare hosting may independently add Web Analytics (no site-side switch)
 *  - the weather panel calls Open-Meteo from the browser for fixed coordinates
 *  - images are hosted locally; external sources open in a new site
 *
 * Every string is bilingual; UI labels never fall back across languages.
 */
import type { Locale } from '../i18n';

export type LegalSlug = 'privacy-policy' | 'terms-of-service' | 'cookie-settings';

export const LEGAL_SLUGS: LegalSlug[] = [
  'privacy-policy',
  'terms-of-service',
  'cookie-settings',
];

export const legalLabels: Record<LegalSlug, { zh: string; en: string }> = {
  'privacy-policy': { zh: '隱私政策', en: 'Privacy policy' },
  'terms-of-service': { zh: '服務條款', en: 'Terms of service' },
  'cookie-settings': { zh: 'Cookie 設定', en: 'Cookie settings' },
};

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  /** Optional badge shown next to the heading (cookie categories). */
  status?: string;
  /** Marks a section that carries a cookie preference control. */
  toggle?: 'necessary' | 'analytics' | 'marketing';
}

export interface LegalContent {
  metaTitle: string;
  description: string;
  h1: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  footnote: string;
}

export interface LegalUi {
  homeLabel: string;
  creditsLabel: string;
  relatedLabel: string;
  backLabel: string;
  alwaysOn: string;
  optInLabel: string;
  save: string;
  reset: string;
  saved: string;
  cleared: string;
  failed: string;
  disclosure: string;
  statusLive: string;
}

export const legalUi: Record<Locale, LegalUi> = {
  zh: {
    homeLabel: '返回指南首頁',
    creditsLabel: '影像與授權說明',
    relatedLabel: '相關頁面',
    backLabel: '回首頁',
    alwaysOn: '始終啟用',
    optInLabel: '記錄我對此類別的偏好',
    save: '儲存設定',
    reset: '清除偏好紀錄',
    saved: '已儲存你的偏好（僅記錄於此瀏覽器）。',
    cleared: '已清除偏好紀錄。',
    failed: '此瀏覽器不允許本機儲存，偏好未被保存。',
    disclosure:
      '上方開關只會把偏好記錄在你目前瀏覽器的本機儲存，供本站記住你的選擇；本站目前不載入分析或行銷 Cookie，因此不會改變任何追蹤行為。Cloudflare 託管層可能獨立進行的量測也無法由此開關關閉，請改用瀏覽器設定或擴充功能管理。',
    statusLive: '偏好狀態',
  },
  en: {
    homeLabel: 'Back to the guide',
    creditsLabel: 'Image information',
    relatedLabel: 'Related pages',
    backLabel: 'Home',
    alwaysOn: 'Always on',
    optInLabel: 'Record my preference for this category',
    save: 'Save settings',
    reset: 'Clear saved preference',
    saved: 'Your preference has been saved (stored only in this browser).',
    cleared: 'Saved preference cleared.',
    failed: 'Local storage is unavailable; your preference was not saved.',
    disclosure:
      'These switches only record a preference in your browser’s local storage so this site can remember your choice. This site does not load analytics or marketing cookies, so saving does not change any tracking behaviour. Measurement added independently by the Cloudflare hosting layer cannot be switched off here — use your browser settings or an extension instead.',
    statusLive: 'Preference status',
  },
};

export const legalContent: Record<LegalSlug, Record<Locale, LegalContent>> = {
  'privacy-policy': {
    zh: {
      metaTitle: '隱私政策｜高雄中央公園指南',
      description:
        '說明高雄中央公園指南如何處理訪客資料、Cookie 與第三方服務（Cloudflare、Open-Meteo），以及你可用的瀏覽器控制方式。',
      h1: '隱私政策',
      updated: '最後更新：2026 年 11 月',
      intro:
        '本站為獨立、非官方、非營利的高雄中央公園參觀指南。本頁說明造訪本站時可能涉及的資料處理與第三方服務；本站不提供註冊、登入、留言或聯絡表單。',
      sections: [
        {
          heading: '1. 資訊收集',
          paragraphs: [
            '本站不會主動收集姓名、電子郵件、電話或其他個人可識別資訊，也沒有會員、訂閱或聯絡表單，因此本站本身沒有可供保存的訪客資料。',
            '本站不請求裝置定位，也不嵌入 Google 地圖；地圖與資料來源以外部連結開啟，離開本站後適用該第三方服務自己的隱私政策。',
            'Cloudflare 提供本站託管，可能基於連線與安全目的處理 IP 位址、瀏覽器／裝置資訊與請求時間。區域天氣面板由你的瀏覽器直接向 Open-Meteo 請求固定公園區域座標的預報，該供應者會收到 IP 等連線資訊。',
          ],
        },
        {
          heading: '2. 資訊使用',
          paragraphs: [
            '本站不建立使用者檔案、不進行跨站追蹤，也不會出售、出租或分享個人資訊予第三方作行銷用途。',
            '託管設定可能獨立加入 Cloudflare Web Analytics，用於量測造訪次數、頁面瀏覽與效能，涉及網址路徑、參照來源與瀏覽器／裝置資訊。此類量測由託管層處理，本站沒有提供關閉它的開關。',
          ],
        },
        {
          heading: '3. Cookie 與追蹤技術',
          paragraphs: [
            '本站本身未安裝 Google Analytics、廣告標籤或追蹤像素，也不設定分析或行銷 Cookie。',
            '若託管層或你另行開啟的第三方服務寫入 Cookie，可在瀏覽器設定中拒絕所有 Cookie、於寫入時提示，或清除已儲存的 Cookie。各類別說明與偏好紀錄請見本站的 Cookie 設定頁。',
          ],
        },
        {
          heading: '4. 資料安全',
          paragraphs: [
            '全站以 HTTPS 傳輸，並由 Cloudflare 加上內容安全政策、Referrer-Policy 與 HSTS 等安全回應標頭。',
            '你資料的安全性對我們很重要，本站也盡力以合理方式保護，但任何網際網路傳輸方式都無法保證 100% 安全。本站不提供任何資料輸入欄位，請勿透過外部連結向本站傳送敏感個人資料。',
          ],
        },
      ],
      footnote: '本政策如有調整，將更新上方「最後更新」月份；本站為非官方獨立指南，並非高雄市政府或公園管理單位。',
    },
    en: {
      metaTitle: 'Privacy policy | Kaohsiung Central Park guide',
      description:
        'How this independent Kaohsiung Central Park guide handles visitor data, cookies and third-party services (Cloudflare, Open-Meteo), and the browser controls available to you.',
      h1: 'Privacy policy',
      updated: 'Last updated: November 2026',
      intro:
        'This is an independent, unofficial, non-profit visitor guide to Kaohsiung Central Park. This page explains the data processing and third-party services that may be involved when you visit. The site offers no registration, login, comment or contact forms.',
      sections: [
        {
          heading: '1. Information we collect',
          paragraphs: [
            'We do not actively collect personally identifiable information such as your name, email address or phone number. There are no accounts, subscriptions or contact forms, so this site itself holds no visitor-submitted data.',
            'We do not request device geolocation and do not embed Google Maps. Maps and sources open as external links; once you leave this site, that provider’s own privacy policy applies.',
            'Cloudflare hosts this site and may process connection details such as IP address, browser/device information and request times for delivery and security. The regional weather panel requests Open-Meteo directly from your browser for fixed park-area coordinates, so that provider receives connection information such as your IP address.',
          ],
        },
        {
          heading: '2. How information is used',
          paragraphs: [
            'We do not build user profiles, do not track you across sites, and never sell, rent or share personal information with third parties for marketing purposes.',
            'Hosting settings may independently add Cloudflare Web Analytics to measure visits, page views and performance, including URL path, referrer and browser/device information. That measurement is handled at the hosting layer and this site offers no switch to disable it.',
          ],
        },
        {
          heading: '3. Cookies and tracking technologies',
          paragraphs: [
            'This site does not install Google Analytics, advertising tags or tracking pixels, and does not set analytics or marketing cookies of its own.',
            'If the hosting layer or a third-party service you open writes cookies, you can instruct your browser to refuse all cookies, to prompt before writing one, or to clear stored cookies. See this site’s Cookie settings page for categories and a preference record.',
          ],
        },
        {
          heading: '4. Data security',
          paragraphs: [
            'The whole site is served over HTTPS, and Cloudflare adds security response headers such as a Content Security Policy, Referrer-Policy and HSTS.',
            'The security of your data matters to us and we use commercially reasonable means to protect it, but no method of transmission over the internet can be guaranteed 100% secure. This site provides no input fields, so please do not send sensitive personal data to this site through external links.',
          ],
        },
      ],
      footnote:
        'If this policy changes, the “Last updated” month above will be revised. This is an unofficial independent guide, not the Kaohsiung City Government or the park authority.',
    },
  },

  'terms-of-service': {
    zh: {
      metaTitle: '服務條款｜高雄中央公園指南',
      description:
        '高雄中央公園指南的使用條款：獨立第三方資訊站定位、內容僅供一般參考、內容使用方式與責任限制說明。',
      h1: '服務條款',
      updated: '最後更新：2026 年 11 月',
      intro:
        '本頁說明使用本站的條件。本站是獨立、非官方、非營利的第三方旅遊與科普資訊指南，整理位置、交通、設施與天氣等行前參考資訊。',
      sections: [
        {
          heading: '1. 接受條款',
          paragraphs: [
            '透過訪問或使用本網站，你同意受這些服務條款約束。如果你不同意條款的任何部分，請停止使用本服務。',
          ],
        },
        {
          heading: '2. 服務使用',
          paragraphs: [
            '本站不是公園管理方、高雄市政府觀光窗口，也不是捷運營運者；所提供的位置、交通、設施、開放狀態與天氣資訊僅供一般參考。',
            '現場開放狀況、活動安排與交通班次可能變動，請以主管機關公告、官方來源與現場指示為準。你同意以合法且負責任的方式使用本站，不進行干擾網站運作或侵害他人權益的行為。',
          ],
        },
        {
          heading: '3. 智慧財產權',
          paragraphs: [
            '本站的文字、版面與原創整理內容僅供個人閱讀與非商業參考；未經授權，請勿大量重製、轉載或轉作商業利用。',
            '影像的來源與說明另載於本站的影像與授權說明頁；公園名稱、機關名稱、品牌與商標歸各權利人所有，本站不因此主張任何權利，亦不對第三方內容提供權利保證。',
          ],
        },
        {
          heading: '4. 責任限制',
          paragraphs: [
            '對於因使用或無法使用本網站、或依據本站資訊所為安排而產生的任何直接、間接、附帶或後果性損害，本站概不負責。',
            '地圖連結的定位點、氣候資料與天氣預報、第三方評分與評價快照皆為參考資訊，不構成保證；實際行程與安全判斷請自行核對並承擔。',
          ],
        },
      ],
      footnote: '條款如有調整，將更新上方「最後更新」月份；繼續使用本站即視為同意修訂後的內容。',
    },
    en: {
      metaTitle: 'Terms of service | Kaohsiung Central Park guide',
      description:
        'Terms of use for this independent Kaohsiung Central Park guide: third-party status, general-reference information, content use and limitation of liability.',
      h1: 'Terms of service',
      updated: 'Last updated: November 2026',
      intro:
        'This page sets out the conditions for using this website. It is an independent, unofficial, non-profit third-party travel and educational guide, gathering location, transport, facility and weather information for trip planning.',
      sections: [
        {
          heading: '1. Acceptance of terms',
          paragraphs: [
            'By accessing and using this website, you agree to be bound by these terms of service. If you disagree with any part of the terms, you may not access the service.',
          ],
        },
        {
          heading: '2. Use of the service',
          paragraphs: [
            'This site is an independent third-party information project, not the park authority, the city tourism office or the MRT operator. All information provided is for general reference only.',
            'On-site access, events and transport schedules may change — always follow official announcements, primary sources and on-site signage. You agree to use this site responsibly and lawfully, and not to interfere with its operation or infringe the rights of others.',
          ],
        },
        {
          heading: '3. Intellectual property',
          paragraphs: [
            'The text, layout and original compilation on this site are provided for personal reading and non-commercial reference. Unauthorised bulk reproduction, republishing or commercial reuse is prohibited.',
            'Image sources and notes are documented separately on this site’s Image information page. Park names, authority names, brands and trademarks belong to their respective owners; this site claims no rights over them and gives no warranty for third-party content.',
          ],
        },
        {
          heading: '4. Limitation of liability',
          paragraphs: [
            'We are not liable for any direct, indirect, incidental or consequential damages arising from the use or inability to use this website, or from arrangements made on the basis of the information it contains.',
            'Map link coordinates, climate normals and weather forecasts, and third-party rating snapshots are reference material, not guarantees. Please verify plans independently and make your own safety decisions.',
          ],
        },
      ],
      footnote:
        'If these terms change, the “Last updated” month above will be revised; continued use of the site constitutes acceptance of the revised terms.',
    },
  },

  'cookie-settings': {
    zh: {
      metaTitle: 'Cookie 設定｜高雄中央公園指南',
      description:
        '查看本站 Cookie 類別與實際狀態、記錄你的偏好，並了解如何以瀏覽器設定管理 Cookie 與第三方量測。',
      h1: 'Cookie 設定',
      updated: '最後更新：2026 年 11 月',
      intro:
        '管理你的 Cookie 偏好設定。本站為靜態資訊指南，本身不設定分析或行銷 Cookie；下列開關用於記錄你的選擇，並明確標示各類別在本站的實際狀態。',
      sections: [
        {
          heading: '必要的 Cookie',
          status: '始終啟用',
          toggle: 'necessary',
          paragraphs: [
            '網站基本功能所需。本站沒有登入、購物車或工作階段機制，因此不會寫入此類 Cookie；若託管層基於傳遞與安全需要寫入，無法在本頁關閉。',
          ],
        },
        {
          heading: '分析 Cookie',
          status: '本站未使用',
          toggle: 'analytics',
          paragraphs: [
            '用於了解訪客如何與網站互動。本站未安裝 Google Analytics；Cloudflare 託管設定可能獨立加入 Cloudflare Web Analytics 量測造訪、頁面瀏覽與效能，該量測不在本站控制範圍，本頁開關無法將其關閉。',
          ],
        },
        {
          heading: '行銷 Cookie',
          status: '本站未使用',
          toggle: 'marketing',
          paragraphs: [
            '用於跨網站追蹤與廣告投放。本站沒有廣告標籤，也不建立跨站追蹤檔。',
          ],
        },
        {
          heading: '以瀏覽器管理 Cookie',
          paragraphs: [
            '你也可以在瀏覽器設定中拒絕所有 Cookie、於寫入時提示、僅允許第一方 Cookie，或清除既有 Cookie；各瀏覽器的設定路徑不同，請參考其說明文件。',
            '封鎖 Cookie 不會影響本站文字內容的閱讀。舊離線快取已停用，本站不承諾離線可用。',
          ],
        },
      ],
      footnote: '偏好紀錄只保存在你目前使用的瀏覽器；更換瀏覽器或清除網站資料後，需要重新設定。',
    },
    en: {
      metaTitle: 'Cookie settings | Kaohsiung Central Park guide',
      description:
        'Review the cookie categories used by this guide, record your preferences, and learn how to manage cookies and third-party measurement in your browser.',
      h1: 'Cookie settings',
      updated: 'Last updated: November 2026',
      intro:
        'Manage your cookie preferences. This is a static information guide and does not set analytics or marketing cookies itself; the switches below record your choice and each category’s actual status on this site is clearly labelled.',
      sections: [
        {
          heading: 'Necessary cookies',
          status: 'Always on',
          toggle: 'necessary',
          paragraphs: [
            'Required for basic site functions. This site has no login, cart or session mechanism, so it does not write such cookies; if the hosting layer writes one for delivery or security, it cannot be disabled on this page.',
          ],
        },
        {
          heading: 'Analytics cookies',
          status: 'Not used here',
          toggle: 'analytics',
          paragraphs: [
            'Used to understand how visitors interact with a site. Google Analytics is not installed here; Cloudflare hosting settings may independently add Cloudflare Web Analytics to measure visits, page views and performance. That measurement is outside this site’s control and cannot be switched off here.',
          ],
        },
        {
          heading: 'Marketing cookies',
          status: 'Not used here',
          toggle: 'marketing',
          paragraphs: [
            'Used to track visitors across websites for advertising. This site has no advertising tags and builds no cross-site tracking profiles.',
          ],
        },
        {
          heading: 'Manage cookies in your browser',
          paragraphs: [
            'You can also refuse all cookies, ask before one is written, allow first-party cookies only, or clear existing cookies in your browser settings. The steps differ by browser — consult its help documentation.',
            'Blocking cookies does not prevent you from reading the text on this site. The old offline cache has been retired and this guide does not promise offline availability.',
          ],
        },
      ],
      footnote:
        'The preference record is stored only in the browser you are using; switching browsers or clearing site data requires setting it again.',
    },
  },
};
