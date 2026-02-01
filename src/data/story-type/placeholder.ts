// ============================================================
// ストーリー型テンプレート - プレースホルダー版
// ============================================================
// 【使い方】
// 1. このファイルをコピーして data.ts として保存
// 2. 【】で囲まれた部分を構成案の内容で置き換える
// 3. 配列の要素数は構成案に合わせて増減可能
// ============================================================

export const company = {
  // --- 企業基本情報（構成案: 企業情報セクション） ---
  name: "【企業名】",
  nameKana: "【企業名カナ】",
  nameEn: "【企業名英語表記】",
  established: "【設立年月（例: 2008年4月）】",
  establishedYear: 0, // 【設立年（数値）】
  employees: 0, // 【従業員数（数値）】
  capital: "【資本金】",
  ceo: {
    name: "【代表者名】",
    nameKana: "【代表者名カナ】",
    title: "【代表者役職】",
    career: "【代表者の経歴（1-2文）】",
    message: `【代表メッセージ本文】

【複数段落の場合は空行で区切る】

【締めの言葉】`,
  },
  business: "【事業内容（短縮版）】",
  businessDescription: "【事業内容（詳細説明）】",
  address: {
    full: "【住所（フル）】",
    prefecture: "【都道府県】",
    city: "【市区町村】",
    street: "【番地】",
    building: "【ビル名】",
    postalCode: "【郵便番号】",
  },
  phone: "【電話番号】",
  email: "【採用メールアドレス】",
  website: "【企業サイトURL】",
  color: {
    primary: "#000000", // 【メインカラー（16進数）】
    accent: "#000000", // 【アクセントカラー（16進数）】
  },

  // --- 企業理念・バリュー（構成案: 私たちの想いセクション） ---
  values: [
    {
      title: "【バリュー1タイトル】",
      description: "【バリュー1説明】",
    },
    {
      title: "【バリュー2タイトル】",
      description: "【バリュー2説明】",
    },
    {
      title: "【バリュー3タイトル】",
      description: "【バリュー3説明】",
    },
    // 必要に応じて追加（2〜5個程度が目安）
  ],

  // --- 沿革（構成案: 会社の歴史セクション） ---
  history: [
    {
      year: 0, // 【年（数値）】
      title: "【出来事タイトル1】",
      description: "【出来事説明1】",
    },
    {
      year: 0, // 【年（数値）】
      title: "【出来事タイトル2】",
      description: "【出来事説明2】",
    },
    // 必要に応じて追加（3〜6個程度が目安）
  ],

  // --- 事業紹介（構成案: 事業内容セクション） ---
  businesses: [
    {
      id: "business-1",
      name: "【事業名1】",
      description: "【事業説明1】",
      features: [
        "【特徴1-1】",
        "【特徴1-2】",
        "【特徴1-3】",
      ],
    },
    // 必要に応じて追加（1〜4事業程度が目安）
  ],
};

// --- 数字で見る会社（構成案: 会社データセクション） ---
export const stats = [
  {
    value: 0, // 【数値】
    unit: "【単位（例: 年、%、名）】",
    label: "【ラベル（例: 設立）】",
    description: "【説明（例: 安定した経営基盤）】",
  },
  {
    value: 0,
    unit: "【単位】",
    label: "【ラベル】",
    description: "【説明】",
  },
  {
    value: 0,
    unit: "【単位】",
    label: "【ラベル】",
    description: "【説明】",
  },
  {
    value: 0,
    unit: "【単位】",
    label: "【ラベル】",
    description: "【説明】",
  },
  // 4項目が標準（2〜6項目で調整可能）
];

// --- 社員インタビュー（構成案: 先輩社員の声セクション） ---
// 人数は構成案に合わせて調整（2〜5名程度が目安）
export const members = [
  {
    id: "member-1", // 一意のID
    name: "【社員名1】",
    nameKana: "【社員名カナ1】",
    age: 0, // 【年齢（数値）】
    joinYear: 0, // 【入社年（数値）】
    yearsOfService: 0, // 【勤続年数（数値）】
    position: "【役職・ポジション1】",
    department: "【部署名1】",
    previousJob: "【前職（例: 新卒入社、飲食店店長）】",
    photo: "/images/templates/story-type/member1.jpg",
    catchphrase: "【キャッチフレーズ（1文）】",
    interview: {
      reason: "【入社理由】",
      anxiety: "【入社前の不安】",
      reality: "【実際に働いてみて】",
      rewarding: "【やりがい】",
      failure: "【失敗談・学び】",
      growth: "【成長したこと】",
      atmosphere: "【職場の雰囲気】",
      message: "【求職者へのメッセージ】",
    },
    schedule: [
      { time: "【時刻】", activity: "【活動内容】" },
      { time: "【時刻】", activity: "【活動内容】" },
      { time: "【時刻】", activity: "【活動内容】" },
      { time: "【時刻】", activity: "【活動内容】" },
      { time: "【時刻】", activity: "【活動内容】" },
      { time: "【時刻】", activity: "【活動内容】" },
      // 1日のスケジュール（6〜8項目程度）
    ],
  },
  // 社員2以降は上記をコピーして追加
];

// --- 募集職種（構成案: 募集要項セクション） ---
export const jobs = [
  {
    id: "job-1",
    title: "【職種名1】",
    type: "【雇用形態】",
    salary: {
      min: 0, // 【最低月給（数値）】
      max: 0, // 【最高月給（数値）】
      unit: "月給",
      note: "【備考（例: 経験・能力を考慮の上、決定します）】",
    },
    location: "【勤務地】",
    description: "【職種説明】",
    details: [
      "【業務内容1】",
      "【業務内容2】",
      "【業務内容3】",
      // 必要に応じて追加
    ],
    requirements: {
      required: [
        "【必須条件1】",
        "【必須条件2】",
      ],
      preferred: [
        "【歓迎条件1】",
        "【歓迎条件2】",
      ],
      welcome: [
        "【こんな方歓迎1（例: 未経験者歓迎）】",
        "【こんな方歓迎2（例: 第二新卒歓迎）】",
      ],
    },
    workingHours: {
      start: "【始業時刻（例: 08:00）】",
      end: "【終業時刻（例: 17:00）】",
      break: 60, // 【休憩時間（分）】
      overtime: "【残業目安（例: 月平均20時間程度）】",
    },
    holidays: {
      type: "【休日タイプ（例: 完全週休2日制）】",
      days: ["【休日1】", "【休日2】"],
      annual: 0, // 【年間休日（数値）】
      others: ["【その他休暇1】", "【その他休暇2】"],
    },
    benefits: [
      "【福利厚生1】",
      "【福利厚生2】",
      "【福利厚生3】",
    ],
    selectionProcess: [
      { step: 1, title: "【ステップ1タイトル】", description: "【ステップ1説明】" },
      { step: 2, title: "【ステップ2タイトル】", description: "【ステップ2説明】" },
      { step: 3, title: "【ステップ3タイトル】", description: "【ステップ3説明】" },
      { step: 4, title: "【ステップ4タイトル】", description: "【ステップ4説明】" },
    ],
    appeal: "【職種のアピールポイント（1文）】",
  },
  // 職種2以降は上記をコピーして追加
];

// --- 福利厚生（構成案: はたらく環境セクション） ---
export const benefits = {
  vacation: [
    { name: "【休暇制度1】", description: "【説明1】" },
    { name: "【休暇制度2】", description: "【説明2】" },
    // 必要に応じて追加
  ],
  allowances: [
    { name: "【手当1】", description: "【説明1】" },
    { name: "【手当2】", description: "【説明2】" },
    // 必要に応じて追加
  ],
  insurance: [
    { name: "【保険・制度1】", description: "【説明1】" },
    { name: "【保険・制度2】", description: "【説明2】" },
    // 必要に応じて追加
  ],
  others: [
    { name: "【その他福利厚生1】", description: "【説明1】" },
    { name: "【その他福利厚生2】", description: "【説明2】" },
    // 必要に応じて追加
  ],
};

// --- 研修制度（構成案: 教育・研修セクション） ---
export const training = {
  steps: [
    {
      step: 1,
      title: "【研修ステップ1タイトル】",
      duration: "【期間（例: 5日間）】",
      description: "【研修ステップ1説明】",
      contents: [
        "【内容1】",
        "【内容2】",
        "【内容3】",
      ],
    },
    {
      step: 2,
      title: "【研修ステップ2タイトル】",
      duration: "【期間】",
      description: "【研修ステップ2説明】",
      contents: [
        "【内容1】",
        "【内容2】",
      ],
    },
    // 必要に応じて追加（3〜5ステップ程度が目安）
  ],
  certifications: [
    { name: "【資格名1】", support: "【支援内容1】" },
    { name: "【資格名2】", support: "【支援内容2】" },
    // 必要に応じて追加
  ],
};

// --- オフィス紹介（構成案: オフィス環境セクション） ---
export const office = {
  name: "【オフィス名（例: 本社オフィス）】",
  description: "【オフィス説明】",
  features: [
    "【特徴1】",
    "【特徴2】",
    "【特徴3】",
    // 必要に応じて追加
  ],
  images: [
    { src: "/images/templates/story-type/office-exterior.jpg", alt: "【画像説明1】", caption: "【キャプション1】" },
    { src: "/images/templates/story-type/office-entrance.jpg", alt: "【画像説明2】", caption: "【キャプション2】" },
    // 必要に応じて追加
  ],
};

// --- サイト設定（自動生成） ---
export const siteConfig = {
  siteName: `${company.name} 採用サイト`,
  siteDescription: `${company.name}の採用情報サイトです。${company.business}を行う当社で、一緒に働く仲間を募集しています。`,
  siteUrl: "【採用サイトURL】",
  ogImage: "/images/og-image.jpg",
};
