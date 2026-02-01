// あおぞら法律事務所 - trust-visual テンプレート サンプルデータ

export const company = {
  name: "あおぞら法律事務所",
  nameEn: "Aozora Law Office",
  description: "相談実績5,000件以上。相続・企業法務・離婚問題など、あなたの「困った」を解決します。初回相談30分無料。",
  url: "https://aozora-law.example.jp",
  locale: "ja_JP",
  template: "trust-visual",
  phone: "052-265-9900",
  phoneFormatted: "052-265-9900",
  fax: "052-265-9901",
  email: "info@aozora-law.example.jp",
  hours: "平日 9:00〜18:00（土日祝は要予約）",
  address: {
    postalCode: "460-0003",
    prefecture: "愛知県",
    city: "名古屋市中区",
    street: "錦3-6-29",
    building: "錦三丁目ビル8F",
    full: "〒460-0003 愛知県名古屋市中区錦3-6-29 錦三丁目ビル8F"
  },
  established: "2008年4月1日",
  employees: "弁護士8名、スタッフ5名",
  barAssociation: "愛知県弁護士会所属"
};

export const colors = {
  main: "#1a365d",       // Noble Navy - 信頼・知性
  accent: "#38a169",     // Peace Green - 安心・解決
  background: "#ffffff",
  backgroundAlt: "#f7fafc",
  text: "#1a365d",
  textSub: "#6b7280"
};

export const navigation = {
  header: [
    { label: "TOP", href: "/templates/trust-visual" },
    { label: "事務所概要", href: "/templates/trust-visual/about" },
    { label: "専門分野", href: "/templates/trust-visual/service" },
    { label: "弁護士紹介", href: "/templates/trust-visual/lawyers" },
    { label: "解決事例", href: "/templates/trust-visual/case" },
    { label: "お問い合わせ", href: "/templates/trust-visual/contact" }
  ],
  footer: [
    { label: "TOP", href: "/templates/trust-visual" },
    { label: "事務所概要", href: "/templates/trust-visual/about" },
    { label: "専門分野", href: "/templates/trust-visual/service" },
    { label: "弁護士紹介", href: "/templates/trust-visual/lawyers" },
    { label: "解決事例", href: "/templates/trust-visual/case" },
    { label: "お問い合わせ", href: "/templates/trust-visual/contact" },
    { label: "プライバシーポリシー", href: "/templates/trust-visual/privacy" }
  ],
  ctaButton: {
    label: "無料相談予約",
    href: "/templates/trust-visual/contact"
  }
};

// トップページ: 実績数値
export const stats = [
  {
    id: "consultations",
    number: 5000,
    unit: "件+",
    label: "相談実績",
    displayOrder: 1
  },
  {
    id: "years",
    number: 16,
    unit: "年",
    label: "創業からの歴史",
    displayOrder: 2
  },
  {
    id: "satisfaction",
    number: 98,
    unit: "%",
    label: "依頼者満足度",
    displayOrder: 3
  },
  {
    id: "lawyers",
    number: 8,
    unit: "名",
    label: "所属弁護士",
    displayOrder: 4
  }
];

// トップページ: 選ばれる理由
export const reasons = [
  {
    id: "reason-001",
    number: "01",
    title: "相談実績5,000件以上の経験",
    image: "/images/templates/trust-visual/reasons/reason-01.jpg",
    description: "2008年の開設以来、相続、企業法務、離婚など幅広い分野で5,000件以上のご相談をいただいてきました。豊富な経験に基づき、最適な解決策をご提案します。",
    evidence: [
      { number: 5000, unit: "件+", label: "相談実績" },
      { number: 16, unit: "年", label: "開設からの歴史" },
      { number: 95, unit: "%", label: "解決率" }
    ]
  },
  {
    id: "reason-002",
    number: "02",
    title: "初回相談無料・土日祝も対応",
    image: "/images/templates/trust-visual/reasons/reason-02.jpg",
    description: "「弁護士に相談するのは敷居が高い」という声にお応えし、初回30分の相談を無料で承っております。お仕事で平日が難しい方のために、土日祝の相談にも対応しています。",
    evidence: [
      { number: 30, unit: "分", label: "初回無料相談" },
      { number: 24, unit: "時間以内", label: "お問い合わせ返答" },
      { number: 0, unit: "円", label: "着手金（一部案件）" }
    ]
  },
  {
    id: "reason-003",
    number: "03",
    title: "明確な料金体系",
    image: "/images/templates/trust-visual/reasons/reason-03.jpg",
    description: "「いくらかかるか分からない」という不安を解消するため、料金体系を明確にしています。ご相談時に見積もりをお出しし、追加費用が発生する場合は必ず事前にご説明します。",
    evidence: [
      { number: 100, unit: "%", label: "事前見積もり" },
      { number: 0, unit: "円", label: "相談後の勧誘" }
    ]
  },
  {
    id: "reason-004",
    number: "04",
    title: "専門家ネットワーク",
    image: "/images/templates/trust-visual/services/service-01.jpg",
    description: "税理士、司法書士、不動産鑑定士など、各分野の専門家と連携。相続税の申告から不動産の名義変更まで、ワンストップで対応できる体制を整えています。",
    evidence: [
      { number: 20, unit: "社+", label: "連携専門家" },
      { number: 50, unit: "件/年", label: "連携案件数" }
    ]
  }
];

// 専門分野
export const services = [
  {
    id: "service-001",
    name: "相続・遺言",
    image: "/images/templates/trust-visual/services/service-01.jpg",
    description: "遺産分割、遺言書作成、相続放棄など、相続に関するあらゆる問題に対応します。「争族」を防ぐための生前対策もご相談ください。",
    features: [
      "遺産分割協議・調停",
      "遺言書作成サポート",
      "相続放棄手続き",
      "遺留分請求"
    ],
    stats: [
      { number: 200, unit: "件/年", label: "年間相談件数" }
    ],
    fees: [
      { item: "遺言書作成", price: "11万円〜" },
      { item: "遺産分割協議 着手金", price: "22万円〜" },
      { item: "相続放棄", price: "5.5万円〜" }
    ]
  },
  {
    id: "service-002",
    name: "企業法務",
    image: "/images/templates/trust-visual/services/service-02.jpg",
    description: "契約書のチェック、労務問題、債権回収など、企業活動に必要な法的サポートを提供します。顧問契約で日常的なご相談にも対応。",
    features: [
      "顧問契約",
      "契約書作成・チェック",
      "労務問題対応",
      "債権回収"
    ],
    stats: [
      { number: 50, unit: "社+", label: "顧問先企業" }
    ],
    fees: [
      { item: "顧問契約（月額）", price: "5.5万円〜" },
      { item: "契約書作成", price: "5.5万円〜" },
      { item: "労務相談（時間制）", price: "1.1万円/時間" }
    ]
  },
  {
    id: "service-003",
    name: "離婚・家事事件",
    image: "/images/templates/trust-visual/services/service-03.jpg",
    description: "離婚協議、親権問題、養育費請求など、デリケートな問題に女性弁護士を含むチームで対応。お気持ちに寄り添いながら、最善の解決を目指します。",
    features: [
      "離婚協議・調停・訴訟",
      "親権・面会交流",
      "養育費・婚姻費用請求",
      "DV・モラハラ対応"
    ],
    stats: [
      { number: 100, unit: "件/年", label: "年間相談件数" },
      { number: 3, unit: "名", label: "女性弁護士" }
    ],
    fees: [
      { item: "離婚協議 着手金", price: "22万円〜" },
      { item: "離婚調停 着手金", price: "33万円〜" }
    ]
  },
  {
    id: "service-004",
    name: "不動産取引",
    image: "/images/templates/trust-visual/works/work-01.jpg",
    description: "不動産売買のトラブル、賃貸借契約、明渡し請求など、不動産に関する法的問題を解決します。不動産会社との連携も多数。",
    features: [
      "売買トラブル対応",
      "賃貸借契約",
      "明渡し請求",
      "建築紛争"
    ],
    fees: [
      { item: "契約書チェック", price: "3.3万円〜" },
      { item: "明渡し請求 着手金", price: "22万円〜" }
    ]
  }
];

// 弁護士紹介
export const lawyers = [
  {
    id: "lawyer-001",
    name: "田中 裕子",
    nameKana: "たなか ゆうこ",
    position: "代表弁護士",
    photo: "/images/templates/trust-visual/customers/customer-05.jpg",
    registrationYear: 2000,
    experience: 25,
    barNumber: "愛知県弁護士会 第12345号",
    specialties: ["相続・遺言", "企業法務"],
    certifications: ["認定事業再生士（ATP）"],
    education: "名古屋大学法学部卒業",
    message: "「法律は弱い立場の人を守るためのもの」という信念のもと、25年間弁護士として活動してまいりました。一人で悩まず、まずはお気軽にご相談ください。",
    displayOrder: 1
  },
  {
    id: "lawyer-002",
    name: "山本 健一",
    nameKana: "やまもと けんいち",
    position: "パートナー弁護士",
    photo: "/images/templates/trust-visual/customers/customer-01.jpg",
    registrationYear: 2008,
    experience: 17,
    barNumber: "愛知県弁護士会 第23456号",
    specialties: ["企業法務", "労働問題"],
    certifications: ["社会保険労務士"],
    education: "早稲田大学法学部卒業",
    message: "企業の皆様の「かかりつけ弁護士」として、日々の経営をサポートいたします。小さな疑問でもお気軽にご相談ください。",
    displayOrder: 2
  },
  {
    id: "lawyer-003",
    name: "鈴木 美咲",
    nameKana: "すずき みさき",
    position: "アソシエイト弁護士",
    photo: "/images/templates/trust-visual/customers/customer-02.jpg",
    registrationYear: 2018,
    experience: 7,
    barNumber: "愛知県弁護士会 第34567号",
    specialties: ["離婚・家事事件", "相続"],
    certifications: [],
    education: "中央大学法学部卒業",
    message: "女性ならではの視点で、離婚や相続のお悩みに寄り添います。「話しやすかった」と言っていただけるよう、丁寧な対応を心がけています。",
    displayOrder: 3
  }
];

// 解決事例
export const caseStudies = [
  {
    id: "case-001",
    category: "相続",
    title: "兄弟間の遺産分割紛争を調停で解決",
    image: "/images/templates/trust-visual/works/work-01.jpg",
    summary: "父親の相続において、兄弟間で不動産の分割方法について対立が生じた事例。",
    challenge: "長男が実家の不動産を単独で相続することを主張し、他の相続人との間で対立が深刻化していました。",
    solution: "調停を申し立て、不動産の評価額を適正に算定。代償金を支払う形での分割案を提案しました。",
    result: "6ヶ月の調停期間を経て、全員が納得する形で遺産分割協議が成立。家族関係も修復されました。",
    clientVoice: "感情的になっていた私たちの間に入っていただき、冷静に話し合うことができました。",
    duration: "6ヶ月",
    担当: "田中 裕子",
    featured: true,
    displayOrder: 1
  },
  {
    id: "case-002",
    category: "企業法務",
    title: "従業員の競業行為に対する差止請求",
    image: "/images/templates/trust-visual/works/work-02.jpg",
    summary: "退職した従業員が競合他社に転職し、在職中に得た顧客情報を利用して営業活動を行っていた事例。",
    challenge: "元従業員が退職後、競合他社で当社の顧客に対して積極的に営業をかけていることが判明しました。",
    solution: "競業避止義務違反として差止請求を行うとともに、損害賠償請求も並行して進めました。",
    result: "2ヶ月で和解が成立。競業行為の差止めと損害賠償100万円の支払いを得ることができました。",
    clientVoice: "迅速な対応で被害を最小限に抑えることができました。顧問契約をしていて本当に良かったです。",
    duration: "2ヶ月",
    担当: "山本 健一",
    featured: true,
    displayOrder: 2
  },
  {
    id: "case-003",
    category: "離婚",
    title: "DVを理由とした離婚と慰謝料請求",
    image: "/images/templates/trust-visual/works/work-03.jpg",
    summary: "夫からのDVに悩む依頼者が、離婚と適切な慰謝料・財産分与を求めた事例。",
    challenge: "長年にわたるDVに耐えてきましたが、子どもへの影響を考え、離婚を決意されました。しかし、夫は離婚に応じず、財産も隠している状況でした。",
    solution: "まず依頼者の安全を確保した上で、調停を申し立て。DVの証拠を丁寧に整理し、財産調査も並行して実施しました。",
    result: "8ヶ月の交渉を経て、慰謝料200万円、財産分与800万円、養育費月額8万円で離婚が成立しました。",
    clientVoice: "女性の弁護士さんに担当していただき、安心して相談できました。新しい人生を歩み始めることができました。",
    duration: "8ヶ月",
    担当: "鈴木 美咲",
    featured: true,
    displayOrder: 3
  }
];

// メディア掲載
export const media = [
  {
    id: "media-001",
    name: "中日新聞",
    date: "2024年3月15日",
    title: "相続トラブルを防ぐ遺言書の書き方",
    description: "代表の田中弁護士が、遺言書作成のポイントについて解説しました。",
    image: "/images/templates/trust-visual/works/work-04.jpg"
  },
  {
    id: "media-002",
    name: "東海テレビ「ニュースOne」",
    date: "2023年11月22日",
    title: "離婚時の財産分与",
    description: "鈴木弁護士が、離婚時の財産分与の基礎知識について解説しました。"
  },
  {
    id: "media-003",
    name: "名古屋商工会議所会報",
    date: "2023年6月号",
    title: "中小企業のための契約書チェックポイント",
    description: "山本弁護士が、経営者向けに契約書の重要ポイントを解説しました。"
  }
];

// 代表メッセージ
export const ceoMessage = {
  heading: "ご挨拶",
  photo: "/images/templates/trust-visual/customers/customer-05.jpg",
  message: `「弁護士に相談するのは敷居が高い」「費用がいくらかかるか分からない」

そんな声をよく耳にします。しかし、法律問題は早めに相談することで、より良い解決につながることが多いのです。

あおぞら法律事務所は、2008年の開設以来「身近で頼れる法律事務所」を目指してまいりました。初回相談無料、明確な料金体系、土日祝の相談対応など、相談しやすい環境づくりに努めています。

相続、企業法務、離婚など、人生の大きな節目で法律問題に直面することがあります。そんなとき、一人で悩まず、まずは私たちにご相談ください。

あなたの「困った」を「解決」に変えるため、所員一同、全力でサポートいたします。`,
  title: "代表弁護士",
  name: "田中 裕子"
};

// 事務所情報
export const officeInfo = [
  { label: "事務所名", value: "あおぞら法律事務所" },
  { label: "代表者", value: "弁護士 田中 裕子" },
  { label: "設立", value: "2008年4月1日" },
  { label: "所属弁護士会", value: "愛知県弁護士会" },
  { label: "所属弁護士", value: "8名" },
  { label: "スタッフ", value: "5名（パラリーガル3名、事務2名）" },
  { label: "所在地", value: "〒460-0003 愛知県名古屋市中区錦3-6-29 錦三丁目ビル8F" },
  { label: "電話番号", value: "052-265-9900" },
  { label: "FAX番号", value: "052-265-9901" },
  { label: "メール", value: "info@aozora-law.example.jp" },
  { label: "営業時間", value: "平日 9:00〜18:00（土日祝は要予約）" }
];

// アクセス
export const access = {
  heading: "アクセス",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.123456789!2d136.9!3d35.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA3JzI0LjQiTiAxMznCsDA3JzI0LjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890",
  directions: [
    { method: "地下鉄", detail: "名古屋市営地下鉄東山線・名城線「栄駅」8番出口 徒歩3分" },
    { method: "地下鉄", detail: "名古屋市営地下鉄桜通線「久屋大通駅」4番出口 徒歩5分" },
    { method: "駐車場", detail: "近隣にコインパーキングあり（駐車券サービスあり）" }
  ]
};

// CTA設定
export const cta = {
  heading: "まずは、お気軽にご相談ください。",
  subText: "初回30分の相談は無料です。24時間以内にご返答いたします。",
  primaryButton: {
    label: "無料相談を予約する",
    href: "/templates/trust-visual/contact"
  },
  secondaryButton: {
    label: "解決事例を見る",
    href: "/templates/trust-visual/case"
  },
  phone: {
    number: "052-265-9900",
    hours: "平日 9:00〜18:00"
  }
};

// お問い合わせフォーム設定
export const contactForm = {
  heading: "お問い合わせ",
  description: "下記フォームに必要事項をご入力の上、送信してください。24時間以内にご返答いたします。",
  fields: [
    { name: "name", label: "お名前", type: "text", required: true },
    { name: "phone", label: "電話番号", type: "tel", required: true },
    { name: "email", label: "メールアドレス", type: "email", required: true },
    { name: "preferredDate", label: "ご希望の相談日時", type: "text", required: false, placeholder: "例：平日午後希望、土曜日希望など" },
    {
      name: "category",
      label: "ご相談内容",
      type: "select",
      required: true,
      options: [
        "相続・遺言について",
        "企業法務について",
        "離婚・家事事件について",
        "不動産について",
        "その他"
      ]
    },
    { name: "message", label: "ご相談内容の詳細", type: "textarea", required: true }
  ],
  submitLabel: "送信する",
  privacyNote: "お送りいただいた個人情報は、お問い合わせへの回答以外の目的には使用いたしません。"
};

// 満足度詳細
export const satisfactionBreakdown = [
  { label: "対応満足度", percentage: 99 },
  { label: "説明の分かりやすさ", percentage: 98 },
  { label: "結果への満足度", percentage: 96 },
  { label: "再相談意向", percentage: 97 }
];
