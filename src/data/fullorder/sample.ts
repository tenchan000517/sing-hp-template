// 東海プレシジョン株式会社 - fullorder テンプレート サンプルデータ

export const company = {
  name: "東海プレシジョン株式会社",
  nameEn: "Tokai Precision Co., Ltd.",
  description: "航空宇宙・医療機器向け精密部品のスペシャリスト。ISO13485・AS9100認証取得。1個から量産まで、高難度加工に挑み続ける。",
  url: "https://tokai-precision.example.jp",
  locale: "ja_JP",
  template: "fullorder",
  phone: "053-458-7890",
  phoneFormatted: "053-458-7890",
  fax: "053-458-7891",
  email: "info@tokai-precision.example.jp",
  hours: "平日 8:30〜17:30",
  address: {
    postalCode: "430-0928",
    prefecture: "静岡県",
    city: "浜松市中央区",
    street: "板屋町102-1",
    building: "浜松テクノセンター3F",
    full: "〒430-0928 静岡県浜松市中央区板屋町102-1 浜松テクノセンター3F"
  },
  established: "1985年6月",
  employees: "62名（2024年4月現在）",
  capital: "5,000万円",
  representative: "代表取締役 高橋 誠司"
};

export const colors = {
  main: "#1e3a5f",       // Deep Navy - 信頼・精密
  accent: "#0ea5e9",     // Sky Blue - 航空宇宙イメージ
  background: "#ffffff",
  backgroundAlt: "#f8fafc",
  text: "#1e293b",
  textSub: "#64748b"
};

export const navigation = {
  header: [
    { label: "TOP", href: "/templates/fullorder" },
    { label: "サービス", href: "/templates/fullorder/service" },
    { label: "設備紹介", href: "/templates/fullorder/equipment" },
    { label: "会社概要", href: "/templates/fullorder/company" },
    { label: "採用情報", href: "/templates/fullorder/recruit" },
    { label: "お問い合わせ", href: "/templates/fullorder/contact" }
  ],
  footer: [
    { label: "TOP", href: "/templates/fullorder" },
    { label: "サービス", href: "/templates/fullorder/service" },
    { label: "設備紹介", href: "/templates/fullorder/equipment" },
    { label: "会社概要", href: "/templates/fullorder/company" },
    { label: "採用情報", href: "/templates/fullorder/recruit" },
    { label: "お問い合わせ", href: "/templates/fullorder/contact" },
    { label: "プライバシーポリシー", href: "/templates/fullorder/privacy" }
  ],
  ctaButton: {
    label: "お見積もり・相談",
    href: "/templates/fullorder/contact"
  }
};

// トップページ: ヒーローセクション
export const hero = {
  backgroundImage: "/images/templates/fullorder/hero-main.jpg",
  catchphrase: "空と、命に、精度を届ける。",
  subcopy: "Aerospace & Medical Precision Machining",
  ctaPrimary: {
    label: "技術相談・お見積もり",
    href: "/templates/fullorder/contact"
  },
  ctaSecondary: {
    label: "採用情報を見る",
    href: "/templates/fullorder/recruit"
  }
};

// トップページ: 選ばれる3つの理由
export const reasons = [
  {
    id: "reason-001",
    number: "AS9100",
    title: "航空宇宙品質認証",
    description: "航空宇宙産業の国際品質規格AS9100を取得。厳格な品質管理体制で、空の安全を支えます。"
  },
  {
    id: "reason-002",
    number: "ISO13485",
    title: "医療機器品質認証",
    description: "医療機器製造の国際規格ISO13485を取得。人の命に関わる部品だからこそ、妥協のない品質を。"
  },
  {
    id: "reason-003",
    number: "5軸加工",
    title: "複雑形状対応",
    description: "5軸マシニングセンターによる複雑形状加工。インペラ、タービンブレードなど高難度部品に対応。"
  }
];

// トップページ: 対応加工サマリー
export const services = [
  { id: "service-001", name: "5軸マシニング", icon: "5axis" },
  { id: "service-002", name: "NC旋盤", icon: "lathe" },
  { id: "service-003", name: "複合加工", icon: "complex" },
  { id: "service-004", name: "ワイヤー放電", icon: "wire" },
  { id: "service-005", name: "難削材加工", icon: "difficult" },
  { id: "service-006", name: "洗浄・梱包", icon: "clean" }
];

// トップページ: 設備カルーセル
export const equipmentCarousel = [
  {
    id: "equip-001",
    name: "5軸マシニングセンター",
    model: "DMG MORI DMU 50",
    image: "/images/templates/fullorder/equip-mc.jpg",
    feature: "複雑形状の同時5軸加工"
  },
  {
    id: "equip-002",
    name: "複合加工機",
    model: "MAZAK INTEGREX i-300",
    image: "/images/templates/fullorder/equip-complex.jpg",
    feature: "旋削+ミーリング一体加工"
  },
  {
    id: "equip-003",
    name: "ワイヤー放電加工機",
    model: "三菱電機 MV2400R",
    image: "/images/templates/fullorder/equip-nc.jpg",
    feature: "微細形状・硬質材加工"
  },
  {
    id: "equip-004",
    name: "三次元測定機",
    model: "ZEISS CONTURA",
    image: "/images/templates/fullorder/equip-cmm.jpg",
    feature: "高精度品質検査"
  }
];

// トップページ: 採用ティーザー
export const recruitTeaser = {
  backgroundImage: "/images/templates/fullorder/recruit-team.jpg",
  heading: "空と命を支える、技術者を募集しています。",
  badges: [
    { label: "残業", value: "月12h" },
    { label: "有給消化率", value: "90%" },
    { label: "資格取得支援", value: "100%" }
  ],
  cta: {
    label: "採用情報を見る",
    href: "/templates/fullorder/recruit"
  }
};

// サービスページ: 加工種類
export const processTypes = [
  {
    id: "process-001",
    name: "5軸マシニング加工",
    image: "/images/templates/fullorder/process-mc.jpg",
    description: "同時5軸制御により、複雑な3D形状を高精度に加工。航空機エンジン部品、医療用インプラントなどに対応。",
    features: [
      "最大加工サイズ：φ630×500mm",
      "同時5軸制御",
      "公差：±0.01mm対応"
    ],
    cases: ["インペラ", "タービンブレード", "人工関節", "インプラント"]
  },
  {
    id: "process-002",
    name: "複合加工",
    image: "/images/templates/fullorder/process-complex.jpg",
    description: "旋削とミーリングを1台で完結。ワンチャッキングによる高精度・高効率加工を実現。",
    features: [
      "旋削+ミーリング一体加工",
      "ワンチャッキング加工",
      "複雑形状対応"
    ],
    cases: ["航空機構造部品", "医療機器シャフト", "油圧バルブ"]
  },
  {
    id: "process-003",
    name: "難削材加工",
    image: "/images/templates/fullorder/process-nc.jpg",
    description: "チタン、インコネル、コバルトクロムなど難削材の加工実績多数。航空宇宙・医療分野で培ったノウハウ。",
    features: [
      "Ti-6Al-4V（チタン合金）",
      "Inconel 718",
      "Co-Cr（コバルトクロム）"
    ],
    cases: ["人工股関節", "航空機エンジン部品", "人工歯根"]
  }
];

// サービスページ: 対応スペック
export const specs = {
  materials: [
    { name: "チタン合金（Ti-6Al-4V等）", available: true, note: "" },
    { name: "インコネル（Inconel 718, 625等）", available: true, note: "" },
    { name: "コバルトクロム（Co-Cr）", available: true, note: "医療用" },
    { name: "ステンレス（SUS316L, SUS630等）", available: true, note: "" },
    { name: "アルミ（A7075, A2024等）", available: true, note: "" },
    { name: "PEEK・生体適合性樹脂", available: true, note: "要相談" }
  ],
  sizes: [
    { item: "5軸マシニング", spec: "φ630×500mm以内" },
    { item: "複合加工", spec: "φ300×L400mm以内" },
    { item: "ワイヤー放電", spec: "400×300×200mm以内" }
  ],
  lots: [
    { type: "試作", range: "1個〜" },
    { type: "小ロット", range: "10〜50個" },
    { type: "中ロット", range: "50〜500個" },
    { type: "量産", range: "500個〜" }
  ]
};

// サービスページ: 品質管理フロー
export const qualityFlow = [
  {
    step: 1,
    title: "材料受入検査",
    description: "ミルシート確認、成分分析"
  },
  {
    step: 2,
    title: "初品検査",
    description: "三次元測定機による全寸法測定"
  },
  {
    step: 3,
    title: "工程内検査",
    description: "各工程でのセルフチェック"
  },
  {
    step: 4,
    title: "最終検査",
    description: "外観検査、寸法検査、検査成績書作成"
  },
  {
    step: 5,
    title: "洗浄・梱包",
    description: "クリーンルーム内での洗浄、個別梱包"
  }
];

// 設備紹介ページ
export const equipments = {
  machining: [
    {
      id: "eq-001",
      name: "5軸マシニングセンター",
      model: "DMG MORI DMU 50",
      spec: "同時5軸制御、φ630×500mm",
      year: "2022年導入",
      quantity: 3,
      image: "/images/templates/fullorder/equip-mc.jpg"
    },
    {
      id: "eq-002",
      name: "5軸マシニングセンター",
      model: "MAZAK VARIAXIS i-600",
      spec: "高速高精度加工",
      year: "2020年導入",
      quantity: 2,
      image: "/images/templates/fullorder/equip-mc.jpg"
    },
    {
      id: "eq-003",
      name: "複合加工機",
      model: "MAZAK INTEGREX i-300",
      spec: "旋削+ミーリング",
      year: "2021年導入",
      quantity: 2,
      image: "/images/templates/fullorder/equip-complex.jpg"
    },
    {
      id: "eq-004",
      name: "ワイヤー放電加工機",
      model: "三菱電機 MV2400R",
      spec: "微細加工対応",
      year: "2019年導入",
      quantity: 2,
      image: "/images/templates/fullorder/equip-nc.jpg"
    }
  ],
  measurement: [
    {
      id: "eq-005",
      name: "三次元測定機",
      model: "ZEISS CONTURA G2",
      spec: "測定範囲700×1000×600mm",
      year: "2022年導入",
      quantity: 1,
      image: "/images/templates/fullorder/equip-cmm.jpg"
    },
    {
      id: "eq-006",
      name: "非接触三次元測定機",
      model: "GOM ATOS Q",
      spec: "光学式3Dスキャン",
      year: "2023年導入",
      quantity: 1,
      image: "/images/templates/fullorder/equip-cmm.jpg"
    },
    {
      id: "eq-007",
      name: "表面粗さ測定機",
      model: "東京精密 SURFCOM",
      spec: "Ra/Rz/Rmax測定",
      year: "2020年導入",
      quantity: 2,
      image: "/images/templates/fullorder/equip-cmm.jpg"
    }
  ],
  cadcam: [
    {
      id: "eq-008",
      name: "3D CAD/CAM",
      model: "Mastercam / CATIA",
      spec: "5軸加工パス生成",
      year: "2023年更新",
      quantity: 5,
      image: "/images/templates/fullorder/equip-cmm.jpg"
    }
  ]
};

// 会社概要ページ: 代表メッセージ
export const ceoMessage = {
  heading: "代表挨拶",
  photo: "/images/templates/fullorder/ceo.jpg",
  message: `航空宇宙と医療機器——どちらも、失敗が許されない世界です。

空を飛ぶ機体に使われる部品、人体に埋め込まれるインプラント。私たちが作る一つひとつの部品には、人の命がかかっています。

創業以来、私たちはその重責を胸に、品質への飽くなき追求を続けてきました。AS9100、ISO13485という国際規格の認証取得は、その姿勢の証です。

しかし、認証を取得することがゴールではありません。「この部品は、どこで使われるのか」「誰の命を支えるのか」——社員一人ひとりがそれを常に意識し、誇りを持って仕事に取り組んでいます。

難しい加工に挑み、不可能を可能にする。それが東海プレシジョンの存在意義です。

お客様の「困った」に、技術でお応えします。どうぞお気軽にご相談ください。`,
  title: "代表取締役",
  name: "高橋 誠司"
};

// 会社概要ページ: 会社情報
export const companyInfo = [
  { label: "社名", value: "東海プレシジョン株式会社" },
  { label: "英文社名", value: "Tokai Precision Co., Ltd." },
  { label: "代表者", value: "代表取締役 高橋 誠司" },
  { label: "設立", value: "1985年6月" },
  { label: "資本金", value: "5,000万円" },
  { label: "従業員数", value: "62名（2024年4月現在）" },
  { label: "事業内容", value: "航空宇宙・医療機器向け精密部品加工" },
  { label: "所在地", value: "〒430-0928 静岡県浜松市中央区板屋町102-1 浜松テクノセンター3F" },
  { label: "電話番号", value: "053-458-7890" },
  { label: "FAX番号", value: "053-458-7891" },
  { label: "営業時間", value: "平日 8:30〜17:30" },
  { label: "認証", value: "AS9100 Rev.D、ISO13485:2016、ISO9001:2015" }
];

// 会社概要ページ: 沿革
export const history = [
  { year: "1985年", event: "静岡県浜松市にて創業。汎用機による金属加工業を開始" },
  { year: "1992年", event: "NC旋盤、マシニングセンターを導入" },
  { year: "1998年", event: "ISO9001認証取得" },
  { year: "2005年", event: "航空機部品加工に参入。5軸マシニングセンター導入" },
  { year: "2010年", event: "AS9100認証取得。航空宇宙産業への本格参入" },
  { year: "2015年", event: "医療機器部品加工に参入。ISO13485認証取得" },
  { year: "2018年", event: "新工場棟増設。クリーンルーム完備" },
  { year: "2022年", event: "DMG MORI 5軸マシニングセンター追加導入" },
  { year: "2024年", event: "非接触三次元測定機導入。検査体制強化" }
];

// 会社概要ページ: 取引先
export const clients = [
  "三菱重工業株式会社",
  "川崎重工業株式会社",
  "IHI株式会社",
  "オリンパス株式会社",
  "テルモ株式会社"
];

// 会社概要ページ: アクセス
export const access = {
  heading: "アクセス",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.123456789!2d137.73!3d34.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5rWc5p2-!5e0!3m2!1sja!2sjp!4v1234567890",
  directions: [
    { method: "お車", detail: "東名高速道路「浜松IC」より車で15分。駐車場完備" },
    { method: "電車", detail: "JR東海道新幹線「浜松駅」よりタクシーで10分" }
  ]
};

// 採用ページ: コンセプト
export const recruitConcept = {
  heading: "空と命を支える、技術者へ。",
  lead: "東海プレシジョンは、航空宇宙・医療機器分野の精密加工を手がけるスペシャリスト集団です。「この部品が、どこで使われるのか」を常に意識し、誇りを持って仕事に取り組む仲間を募集しています。",
  subheading: "Precision for Life & Sky",
  image: "/images/templates/fullorder/recruit-concept.jpg"
};

// 採用ページ: インフォグラフィック
export const infographics = [
  { id: "info-001", label: "平均残業時間", value: "12", unit: "h/月", icon: "clock" },
  { id: "info-002", label: "有給消化率", value: "90", unit: "%", icon: "plane" },
  { id: "info-003", label: "平均勤続年数", value: "11", unit: "年", icon: "tree" },
  { id: "info-004", label: "資格取得支援", value: "100", unit: "%", icon: "certificate" },
  { id: "info-005", label: "育休取得率", value: "100", unit: "%", icon: "baby" },
  { id: "info-006", label: "30代以下比率", value: "45", unit: "%", icon: "users" }
];

// 採用ページ: 社員インタビュー
export const interviews = [
  {
    id: "interview-001",
    name: "鈴木 翔太",
    nameKana: "すずき しょうた",
    position: "製造部 5軸加工課",
    years: "入社5年目",
    age: "28歳",
    photo: "/images/templates/fullorder/interview-tamura.jpg",
    catchphrase: "航空機部品を作る誇り",
    lead: "自分が加工した部品が、空を飛んでいる。その事実が、毎日のモチベーションです。",
    story: "大学で機械工学を学び、航空宇宙産業に関わりたいと思っていました。東海プレシジョンは、その夢を叶えてくれる会社でした。5軸加工は奥が深く、まだまだ学ぶことばかりですが、先輩方が丁寧に教えてくれます。自分が加工した部品が実際に航空機に使われていると思うと、責任と誇りを感じます。",
    schedule: [
      { time: "8:30", activity: "出社、朝礼、本日の加工計画確認" },
      { time: "9:00", activity: "加工作業開始" },
      { time: "12:00", activity: "昼休憩" },
      { time: "13:00", activity: "午後の加工作業、検査" },
      { time: "17:30", activity: "片付け、退社" }
    ],
    message: "航空宇宙や医療機器に興味がある方、ぜひ一緒に働きましょう。"
  },
  {
    id: "interview-002",
    name: "山本 美咲",
    nameKana: "やまもと みさき",
    position: "品質管理部",
    years: "入社7年目",
    age: "30歳",
    photo: "/images/templates/fullorder/interview-sasaki.jpg",
    catchphrase: "品質は、命に直結する",
    lead: "医療機器部品の検査をしています。一つのミスが許されない、緊張感のある仕事です。",
    story: "前職は自動車部品メーカーで品質管理をしていました。より高い精度、より厳しい品質基準を求めて転職しました。医療機器部品は、人の体内に入るものもあります。その責任の重さを感じながら、一つひとつ丁寧に検査しています。プレッシャーもありますが、やりがいは大きいです。",
    schedule: [
      { time: "8:30", activity: "出社、検査計画確認" },
      { time: "9:00", activity: "三次元測定機による寸法検査" },
      { time: "12:00", activity: "昼休憩" },
      { time: "13:00", activity: "外観検査、検査成績書作成" },
      { time: "17:30", activity: "退社" }
    ],
    message: "品質管理の経験がある方、高い精度の世界に挑戦してみませんか。"
  },
  {
    id: "interview-003",
    name: "田中 誠",
    nameKana: "たなか まこと",
    position: "製造部 部長",
    years: "入社20年目",
    age: "45歳",
    photo: "/images/templates/fullorder/interview-yamamoto.jpg",
    catchphrase: "技術は、次の世代へ",
    lead: "20年間、難削材加工の技術を磨いてきました。今は、若い世代への技術継承が使命です。",
    story: "チタンやインコネルの加工は、一筋縄ではいきません。工具の選定、切削条件、冷却方法...試行錯誤の連続でした。でも、その経験が今の自分を作っています。若い人たちには、この技術を惜しみなく伝えていきたい。東海プレシジョンの未来を担うのは、彼らですから。",
    schedule: [
      { time: "8:00", activity: "出社、工場巡回、生産計画確認" },
      { time: "8:30", activity: "朝礼、作業指示" },
      { time: "9:00", activity: "生産管理、品質確認、若手指導" },
      { time: "12:00", activity: "昼休憩" },
      { time: "13:00", activity: "客先対応、新規案件検討" },
      { time: "18:00", activity: "退社" }
    ],
    message: "ものづくりが好きで、高い技術を身につけたい方、待っています。"
  }
];

// 採用ページ: 募集要項
export const jobs = [
  {
    id: "job-001",
    title: "製造職（5軸マシニングオペレーター）",
    type: "正社員",
    description: "5軸マシニングセンターを使用した航空宇宙・医療機器部品の加工。経験者優遇、未経験者も研修制度あり。",
    requirements: [
      "高卒以上",
      "要普通自動車免許",
      "CAD/CAM経験者優遇"
    ],
    salary: "月給 25万円〜45万円（経験・能力による）",
    bonus: "年2回（実績：計4.5ヶ月分）",
    hours: "8:30〜17:30（実働8時間）",
    holidays: "完全週休2日制（土日）、祝日、年末年始、夏季休暇、年間休日125日",
    benefits: [
      "社会保険完備",
      "退職金制度",
      "資格取得支援制度（全額会社負担）",
      "作業服貸与",
      "駐車場完備",
      "社員旅行",
      "健康診断（年2回）"
    ]
  },
  {
    id: "job-002",
    title: "品質管理",
    type: "正社員",
    description: "三次元測定機を用いた精密部品の検査、検査成績書作成、品質改善活動。AS9100/ISO13485の知識がある方優遇。",
    requirements: [
      "高卒以上",
      "品質管理経験3年以上",
      "三次元測定機の使用経験"
    ],
    salary: "月給 28万円〜42万円（経験・能力による）",
    bonus: "年2回（実績：計4.5ヶ月分）",
    hours: "8:30〜17:30（実働8時間）",
    holidays: "完全週休2日制（土日）、祝日、年末年始、夏季休暇、年間休日125日",
    benefits: [
      "社会保険完備",
      "退職金制度",
      "資格取得支援制度（全額会社負担）",
      "作業服貸与",
      "駐車場完備",
      "社員旅行",
      "健康診断（年2回）"
    ]
  }
];

// 採用ページ: エントリーCTA
export const entryCta = {
  casual: {
    heading: "まずは工場を見に来ませんか？",
    description: "カジュアル面談では、実際の現場を見学しながら、仕事内容や雰囲気をお伝えします。航空宇宙・医療機器部品の加工現場を、ぜひご覧ください。",
    buttonLabel: "カジュアル面談に申し込む",
    href: "/templates/fullorder/contact?type=casual"
  },
  formal: {
    heading: "正式エントリー",
    description: "選考に進みたい方はこちらからエントリーしてください。",
    buttonLabel: "正式エントリーはこちら",
    href: "/templates/fullorder/contact?type=entry"
  }
};

// お問い合わせページ
export const contactForm = {
  heading: "お問い合わせ",
  description: "技術相談・お見積もり・採用に関するお問い合わせなど、お気軽にご連絡ください。通常1営業日以内にご返答いたします。",
  fields: [
    { name: "company", label: "会社名", type: "text", required: false },
    { name: "name", label: "お名前", type: "text", required: true },
    { name: "email", label: "メールアドレス", type: "email", required: true },
    { name: "phone", label: "電話番号", type: "tel", required: false },
    {
      name: "category",
      label: "お問い合わせ種別",
      type: "select",
      required: true,
      options: [
        "お見積もり依頼",
        "技術相談",
        "採用について",
        "その他"
      ]
    },
    { name: "message", label: "お問い合わせ内容", type: "textarea", required: true },
    { name: "file", label: "図面添付", type: "file", required: false, note: "対応形式：PDF, DXF, DWG, STEP, IGES（最大10MB）" }
  ],
  submitLabel: "送信する",
  privacyNote: "お送りいただいた個人情報は、お問い合わせへの回答以外の目的には使用いたしません。"
};

// CTA共通
export const cta = {
  heading: "お気軽にお問い合わせください",
  subText: "技術相談・お見積もりは無料です。通常1営業日以内にご返答いたします。",
  phone: {
    number: "053-458-7890",
    hours: "平日 8:30〜17:30"
  },
  primaryButton: {
    label: "お問い合わせ・お見積もり",
    href: "/templates/fullorder/contact"
  }
};
