// 三河精密工業株式会社 - fullorder テンプレート サンプルデータ

export const company = {
  name: "三河精密工業株式会社",
  nameEn: "Mikawa Precision Industry Co., Ltd.",
  description: "創業52年の精密金属加工メーカー。±0.005mmの高精度加工、最短3日納品、難加工も対応。困ったときの三河精密。",
  url: "https://mikawa-seimitsu.example.jp",
  locale: "ja_JP",
  template: "fullorder",
  phone: "0564-52-3456",
  phoneFormatted: "0564-52-3456",
  fax: "0564-52-3457",
  email: "info@mikawa-seimitsu.example.jp",
  hours: "平日 8:00〜17:00",
  address: {
    postalCode: "444-0802",
    prefecture: "愛知県",
    city: "岡崎市",
    street: "美合町字並松1-23",
    building: "",
    full: "〒444-0802 愛知県岡崎市美合町字並松1-23"
  },
  established: "1973年4月",
  employees: "48名（2024年4月現在）",
  capital: "3,000万円",
  representative: "代表取締役 伊藤 正樹"
};

export const colors = {
  main: "#2C3E50",       // Charcoal Blue - 知性・堅実
  accent: "#E67E22",     // Precision Orange - 情熱・行動喚起
  background: "#ffffff",
  backgroundAlt: "#F8F9FA",
  text: "#2C3E50",
  textSub: "#95A5A6"      // Stone Gray
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
  catchphrase: "困ったときの、三河精密。",
  subcopy: "Since 1973. Precision you can trust.",
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
    number: "±0.005mm",
    title: "精度へのこだわり",
    description: "三次元測定機による全数検査で品質を保証します。ミクロン単位の精度を、全ての製品でお約束します。"
  },
  {
    id: "reason-002",
    number: "最短3日",
    title: "スピード対応",
    description: "独自工程管理で、お客様の\"急ぎ\"に応えます。試作品から量産まで、柔軟に対応いたします。"
  },
  {
    id: "reason-003",
    number: "難加工歓迎",
    title: "他社で断られても",
    description: "複合加工機で複雑形状も一貫対応。「こんなの作れる？」というご相談、大歓迎です。"
  }
];

// トップページ: 対応加工サマリー
export const services = [
  { id: "service-001", name: "NC旋盤加工", icon: "lathe" },
  { id: "service-002", name: "マシニング加工", icon: "machining" },
  { id: "service-003", name: "複合加工", icon: "complex" },
  { id: "service-004", name: "試作", icon: "prototype" },
  { id: "service-005", name: "小ロット", icon: "smalllot" },
  { id: "service-006", name: "量産", icon: "mass" }
];

// トップページ: 設備カルーセル
export const equipmentCarousel = [
  {
    id: "equip-001",
    name: "NC旋盤",
    model: "MAZAK QUICK TURN 250",
    image: "/images/templates/fullorder/equip-nc.jpg",
    feature: "高精度旋削加工"
  },
  {
    id: "equip-002",
    name: "マシニングセンター",
    model: "MAZAK VTC-300C II",
    image: "/images/templates/fullorder/equip-mc.jpg",
    feature: "複雑形状の切削加工"
  },
  {
    id: "equip-003",
    name: "複合加工機",
    model: "MAZAK INTEGREX i-200",
    image: "/images/templates/fullorder/equip-complex.jpg",
    feature: "旋盤+マシニング一貫加工"
  },
  {
    id: "equip-004",
    name: "三次元測定機",
    model: "Mitutoyo CRYSTA-Apex",
    image: "/images/templates/fullorder/equip-cmm.jpg",
    feature: "全数検査による品質保証"
  }
];

// トップページ: 採用ティーザー
export const recruitTeaser = {
  backgroundImage: "/images/templates/fullorder/recruit-team.jpg",
  heading: "ミクロンに挑む、仲間を募集しています。",
  badges: [
    { label: "残業", value: "月15h" },
    { label: "有給消化率", value: "85%" },
    { label: "文系入社", value: "60%" }
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
    name: "NC旋盤加工",
    image: "/images/templates/fullorder/process-nc.jpg",
    description: "円筒形状の高精度加工を得意としています。自動化ラインにより、安定した品質と短納期を両立。",
    features: [
      "最大加工径：φ300mm",
      "最大加工長：500mm",
      "公差：±0.005mm対応"
    ],
    cases: ["シャフト", "スリーブ", "ローラー", "ピン"]
  },
  {
    id: "process-002",
    name: "マシニング加工",
    image: "/images/templates/fullorder/process-mc.jpg",
    description: "5軸マシニングセンターにより、複雑な3D形状も高精度に加工。試作から量産まで対応。",
    features: [
      "最大加工サイズ：500×400×400mm",
      "5軸同時加工対応",
      "微細加工可能"
    ],
    cases: ["金型部品", "治具", "ブラケット", "ハウジング"]
  },
  {
    id: "process-003",
    name: "複合加工",
    image: "/images/templates/fullorder/process-complex.jpg",
    description: "旋盤加工とマシニング加工を1台で完結。段取り替え不要で、高精度・短納期を実現。",
    features: [
      "旋削+ミーリング一体加工",
      "ワンチャッキング加工",
      "複雑形状対応"
    ],
    cases: ["複雑部品", "一品物", "試作品"]
  }
];

// サービスページ: 対応スペック
export const specs = {
  materials: [
    { name: "鉄（SS材、S45C、SCM等）", available: true },
    { name: "アルミ（A5052、A6061、A7075等）", available: true },
    { name: "ステンレス（SUS303、SUS304、SUS316等）", available: true },
    { name: "銅・真鍮", available: true },
    { name: "樹脂（POM、MC、PEEKなど）", available: true },
    { name: "チタン・インコネル", available: true, note: "要相談" }
  ],
  sizes: [
    { item: "旋盤加工", spec: "φ3〜φ300mm" },
    { item: "マシニング加工", spec: "500×400×400mm以内" },
    { item: "複合加工", spec: "φ200×L300mm以内" }
  ],
  lots: [
    { type: "試作", range: "1個〜" },
    { type: "小ロット", range: "10〜100個" },
    { type: "中ロット", range: "100〜1,000個" },
    { type: "量産", range: "1,000個〜" }
  ]
};

// サービスページ: 品質管理フロー
export const qualityFlow = [
  {
    step: 1,
    title: "受入検査",
    description: "材料のミルシート確認、外観検査"
  },
  {
    step: 2,
    title: "工程内検査",
    description: "各工程でのセルフチェック"
  },
  {
    step: 3,
    title: "中間検査",
    description: "品質管理部門による抜き取り検査"
  },
  {
    step: 4,
    title: "最終検査",
    description: "三次元測定機による全数検査"
  },
  {
    step: 5,
    title: "出荷検査",
    description: "外観・数量・梱包の最終確認"
  }
];

// 設備紹介ページ
export const equipments = {
  machining: [
    {
      id: "eq-001",
      name: "NC旋盤",
      model: "MAZAK QUICK TURN 250",
      spec: "最大加工径φ300mm",
      year: "2021年導入",
      quantity: 5,
      image: "/images/templates/fullorder/equip-nc.jpg"
    },
    {
      id: "eq-002",
      name: "NC旋盤",
      model: "OKUMA LB3000 EXII",
      spec: "最大加工径φ350mm",
      year: "2019年導入",
      quantity: 3,
      image: "/images/templates/fullorder/equip-nc-2.jpg"
    },
    {
      id: "eq-003",
      name: "マシニングセンター",
      model: "MAZAK VTC-300C II",
      spec: "5軸同時加工",
      year: "2022年導入",
      quantity: 2,
      image: "/images/templates/fullorder/equip-mc.jpg"
    },
    {
      id: "eq-004",
      name: "複合加工機",
      model: "MAZAK INTEGREX i-200",
      spec: "旋削+ミーリング",
      year: "2020年導入",
      quantity: 2,
      image: "/images/templates/fullorder/equip-complex.jpg"
    }
  ],
  measurement: [
    {
      id: "eq-005",
      name: "三次元測定機",
      model: "Mitutoyo CRYSTA-Apex S574",
      spec: "測定範囲500×700×400mm",
      year: "2021年導入",
      quantity: 1,
      image: "/images/templates/fullorder/equip-cmm.jpg"
    },
    {
      id: "eq-006",
      name: "画像測定機",
      model: "Keyence IM-8000",
      spec: "最大300点同時測定",
      year: "2023年導入",
      quantity: 1,
      image: "/images/templates/fullorder/equip-im.jpg"
    },
    {
      id: "eq-007",
      name: "表面粗さ測定機",
      model: "Mitutoyo SJ-410",
      spec: "Ra/Rz測定",
      year: "2018年導入",
      quantity: 2,
      image: "/images/templates/fullorder/equip-surface.jpg"
    }
  ],
  cadcam: [
    {
      id: "eq-008",
      name: "3D CAD/CAM",
      model: "Mastercam",
      spec: "5軸加工対応",
      year: "2022年更新",
      quantity: 3,
      image: "/images/templates/fullorder/equip-cad.jpg"
    }
  ]
};

// 会社概要ページ: 代表メッセージ
export const ceoMessage = {
  heading: "代表挨拶",
  photo: "/images/templates/fullorder/ceo.jpg",
  message: `創業52年、私たちは常に"困った時に頼れる存在"であり続けることを目指してきました。

「こんな形状、作れますか？」「明後日までに欲しいのですが…」「他社で断られたのですが…」

そんなお客様の声に、一つひとつ真摯に向き合ってきた半世紀でした。

精密加工の世界は、0.005mmの差が製品の良し悪しを決めます。私たちは最新の設備投資を惜しまず、熟練技術者の技と最先端技術を融合させることで、その精度を守り続けています。

しかし、技術だけでは十分ではありません。お客様の課題を理解し、最適な加工方法を提案する「ものづくりのパートナー」であること。それが三河精密の目指す姿です。

お困りのことがございましたら、どうぞお気軽にご相談ください。`,
  title: "代表取締役",
  name: "伊藤 正樹"
};

// 会社概要ページ: 会社情報
export const companyInfo = [
  { label: "社名", value: "三河精密工業株式会社" },
  { label: "英文社名", value: "Mikawa Precision Industry Co., Ltd." },
  { label: "代表者", value: "代表取締役 伊藤 正樹" },
  { label: "設立", value: "1973年4月" },
  { label: "資本金", value: "3,000万円" },
  { label: "従業員数", value: "48名（2024年4月現在）" },
  { label: "事業内容", value: "精密金属部品加工（NC旋盤、マシニング、複合加工）" },
  { label: "所在地", value: "〒444-0802 愛知県岡崎市美合町字並松1-23" },
  { label: "電話番号", value: "0564-52-3456" },
  { label: "FAX番号", value: "0564-52-3457" },
  { label: "営業時間", value: "平日 8:00〜17:00" },
  { label: "認証", value: "ISO9001:2015 認証取得" }
];

// 会社概要ページ: 沿革
export const history = [
  { year: "1973年", event: "愛知県岡崎市にて創業。汎用旋盤による金属加工業を開始" },
  { year: "1985年", event: "NC旋盤を初導入。数値制御加工への移行開始" },
  { year: "1995年", event: "マシニングセンター導入。複雑形状加工に対応" },
  { year: "2000年", event: "ISO9001認証取得" },
  { year: "2005年", event: "三次元測定機導入。品質管理体制を強化" },
  { year: "2010年", event: "複合加工機導入。ワンストップ加工体制を確立" },
  { year: "2015年", event: "5軸マシニングセンター導入" },
  { year: "2020年", event: "IoT工程管理システム稼働開始" },
  { year: "2023年", event: "創業50周年。新工場棟増設" }
];

// 会社概要ページ: 取引先
export const clients = [
  "株式会社デンソー",
  "アイシン精機株式会社",
  "トヨタ自動車株式会社",
  "株式会社ジェイテクト"
];

// 会社概要ページ: アクセス
export const access = {
  heading: "アクセス",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.123456789!2d137.16!3d34.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDU1JzEyLjAiTiAxMzfCsDA5JzM2LjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890",
  directions: [
    { method: "お車", detail: "東名高速道路「岡崎IC」より車で10分。駐車場20台完備" },
    { method: "電車", detail: "名鉄本線「美合駅」より徒歩15分、またはタクシーで5分" }
  ]
};

// 採用ページ: コンセプト
export const recruitConcept = {
  heading: "技術は、人から人へ。",
  lead: "三河精密は、創業52年の歴史を持つ精密加工のプロフェッショナル集団です。私たちは技術を次世代に引き継ぐことを使命と考え、育成に力を入れています。",
  subheading: "Skilled Workers Project",
  image: "/images/templates/fullorder/recruit-concept.jpg"
};

// 採用ページ: インフォグラフィック
export const infographics = [
  { id: "info-001", label: "平均残業時間", value: "15", unit: "h/月", icon: "clock" },
  { id: "info-002", label: "有給消化率", value: "85", unit: "%", icon: "plane" },
  { id: "info-003", label: "平均勤続年数", value: "12", unit: "年", icon: "tree" },
  { id: "info-004", label: "文系出身率", value: "60", unit: "%", icon: "book" },
  { id: "info-005", label: "資格取得支援", value: "100", unit: "%", icon: "certificate" },
  { id: "info-006", label: "育休取得率", value: "100", unit: "%", icon: "baby" }
];

// 採用ページ: 社員インタビュー
export const interviews = [
  {
    id: "interview-001",
    name: "田村 健太",
    nameKana: "たむら けんた",
    position: "製造部",
    years: "入社3年目",
    age: "25歳",
    photo: "/images/templates/fullorder/interview-tamura.jpg",
    catchphrase: "未経験でも大丈夫",
    lead: "文系学部卒、製造業の知識ゼロからのスタート。でも、3年で一人前になれました。",
    story: "大学は経済学部で、金属加工なんて縁もゆかりもない世界でした。でも「ものづくりがしたい」という漠然とした思いがあって。先輩方が本当に丁寧に教えてくれるんです。最初は機械の名前も分からなかったけど、今では一人で段取りから加工まで任せてもらえるようになりました。",
    schedule: [
      { time: "8:00", activity: "出社、朝礼" },
      { time: "8:15", activity: "加工作業開始" },
      { time: "12:00", activity: "昼休憩" },
      { time: "13:00", activity: "午後の加工作業" },
      { time: "17:00", activity: "片付け、退社" }
    ],
    message: "「製造業って大変そう」と思っている人にこそ来てほしい。イメージ、変わりますよ。"
  },
  {
    id: "interview-002",
    name: "佐々木 美香",
    nameKana: "ささき みか",
    position: "総務部",
    years: "入社8年目",
    age: "32歳",
    photo: "/images/templates/fullorder/interview-sasaki.jpg",
    catchphrase: "オフィスからものづくりを支える",
    lead: "工場で作るだけがものづくりじゃない。事務職だって、ものづくりの一員です。",
    story: "受発注管理、経理、採用…事務の仕事は多岐にわたります。でも「自分がやった仕事の先に、製品がある」という実感があるんです。工場の皆さんが気持ちよく働けるように、オフィスからサポートするのが私の役目です。",
    schedule: [
      { time: "8:30", activity: "出社、メールチェック" },
      { time: "9:00", activity: "受発注処理" },
      { time: "12:00", activity: "昼休憩" },
      { time: "13:00", activity: "経理業務、来客対応" },
      { time: "17:00", activity: "退社" }
    ],
    message: "ものづくりに興味があるけど、現場はちょっと…という方、事務職もありますよ。"
  },
  {
    id: "interview-003",
    name: "山本 誠",
    nameKana: "やまもと まこと",
    position: "製造部 部長",
    years: "入社25年目",
    age: "48歳",
    photo: "/images/templates/fullorder/interview-yamamoto.jpg",
    catchphrase: "チームで挑む精密加工",
    lead: "一人の天才より、チームの総合力。それが三河精密の強みです。",
    story: "入社したころは汎用旋盤の時代でした。NC化、マシニング化、複合化…技術の進化を目の当たりにしてきました。でも変わらないのは「みんなで良いものを作る」という姿勢。若い人たちにも、この文化を引き継いでいきたいと思っています。",
    schedule: [
      { time: "7:30", activity: "出社、工場巡回" },
      { time: "8:00", activity: "朝礼、作業割り当て" },
      { time: "9:00", activity: "生産管理、品質確認" },
      { time: "12:00", activity: "昼休憩" },
      { time: "13:00", activity: "設備管理、新人指導" },
      { time: "17:30", activity: "退社" }
    ],
    message: "経験がなくても、やる気があれば大丈夫。一緒にミクロンに挑みましょう。"
  }
];

// 採用ページ: 募集要項
export const jobs = [
  {
    id: "job-001",
    title: "製造職（NC旋盤オペレーター）",
    type: "正社員",
    description: "NC旋盤を使用した精密部品の加工業務。未経験者歓迎、先輩社員が丁寧に指導します。",
    requirements: [
      "高卒以上",
      "要普通自動車免許",
      "未経験者歓迎（研修制度あり）"
    ],
    salary: "月給 20万円〜35万円（経験・能力による）",
    bonus: "年2回（実績：計4ヶ月分）",
    hours: "8:00〜17:00（実働8時間）",
    holidays: "完全週休2日制（土日）、祝日、年末年始、夏季休暇、年間休日120日",
    benefits: [
      "社会保険完備",
      "退職金制度",
      "資格取得支援制度",
      "作業服貸与",
      "駐車場完備",
      "社員旅行",
      "懇親会補助"
    ]
  },
  {
    id: "job-002",
    title: "製造職（マシニングオペレーター）",
    type: "正社員",
    description: "マシニングセンターを使用した精密部品の加工業務。CAD/CAMの使用経験者優遇。",
    requirements: [
      "高卒以上",
      "要普通自動車免許",
      "CAD/CAM経験者優遇"
    ],
    salary: "月給 22万円〜38万円（経験・能力による）",
    bonus: "年2回（実績：計4ヶ月分）",
    hours: "8:00〜17:00（実働8時間）",
    holidays: "完全週休2日制（土日）、祝日、年末年始、夏季休暇、年間休日120日",
    benefits: [
      "社会保険完備",
      "退職金制度",
      "資格取得支援制度",
      "作業服貸与",
      "駐車場完備",
      "社員旅行",
      "懇親会補助"
    ]
  }
];

// 採用ページ: エントリーCTA
export const entryCta = {
  casual: {
    heading: "まずは工場を見に来ませんか？",
    description: "カジュアル面談では、実際の現場を見学しながら、仕事内容や雰囲気をお伝えします。服装自由、手ぶらでOKです。",
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
    number: "0564-52-3456",
    hours: "平日 8:00〜17:00"
  },
  primaryButton: {
    label: "お問い合わせ・お見積もり",
    href: "/templates/fullorder/contact"
  }
};
