// ============================================================
// Q&A解決型テンプレート - プレースホルダー版
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
  tagline: "【キャッチコピー（例: その不安、すべてお答えします。）】",
  description: "【企業説明文】",
  established: "【設立年月】",
  establishedYear: 0, // 【設立年（数値）】
  employees: 0, // 【従業員数（数値）】
  capital: "【資本金】",
  ceo: {
    name: "【代表者名】",
    nameKana: "【代表者名カナ】",
    title: "【代表者役職】",
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
};

// --- よくある不安TOP5（構成案: 不安解消TOP5セクション） ---
// 求職者が最も気になる質問を5つピックアップ
export const top5Anxieties = [
  {
    id: 1,
    question: "【不安TOP1質問】",
    answer: "【不安TOP1回答】",
    example: "【具体例・社員エピソード（任意）】",
    icon: "user-check", // アイコン: user-check, clock, users, heart, shield-check など
  },
  {
    id: 2,
    question: "【不安TOP2質問】",
    answer: "【不安TOP2回答】",
    // グラフデータがある場合
    data: {
      label: "【グラフラベル（例: 月別平均残業時間）】",
      values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 【12ヶ月分の数値】
      months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    },
    icon: "clock",
  },
  {
    id: 3,
    question: "【不安TOP3質問】",
    answer: "【不安TOP3回答】",
    // パーセンテージデータがある場合
    data: {
      label: "【データラベル】",
      value: 0, // 【数値】
      unit: "%",
    },
    icon: "users",
  },
  {
    id: 4,
    question: "【不安TOP4質問】",
    answer: "【不安TOP4回答】",
    icon: "heart",
  },
  {
    id: 5,
    question: "【不安TOP5質問】",
    answer: "【不安TOP5回答】",
    // 業界比較データがある場合
    data: {
      label: "【データラベル（例: 3年以内離職率）】",
      value: 0, // 【自社数値】
      unit: "%",
      industry: 0, // 【業界平均数値】
      industryLabel: "業界平均",
    },
    icon: "shield-check",
  },
];

// --- 不安カテゴリナビゲーション（構成案: カテゴリ導線） ---
export const anxietyCategories = [
  {
    id: "before-apply",
    title: "【カテゴリ1タイトル（例: 応募について不安）】",
    description: "【カテゴリ1説明（例: 「資格は必要？」「学歴は？」）】",
    href: "/templates/qa-type/before-apply",
    color: "#E3F2FD", // 【背景色（16進数）】
    icon: "file-question",
  },
  {
    id: "selection",
    title: "【カテゴリ2タイトル】",
    description: "【カテゴリ2説明】",
    href: "/templates/qa-type/selection",
    color: "#FFF3E0",
    icon: "users",
  },
  {
    id: "after-joining",
    title: "【カテゴリ3タイトル】",
    description: "【カテゴリ3説明】",
    href: "/templates/qa-type/after-joining",
    color: "#E8F5E9",
    icon: "graduation-cap",
  },
  {
    id: "workstyle",
    title: "【カテゴリ4タイトル】",
    description: "【カテゴリ4説明】",
    href: "/templates/qa-type/workstyle",
    color: "#FCE4EC",
    icon: "briefcase",
  },
];

// --- 先輩の声（構成案: 先輩社員の声セクション） ---
export const seniorVoices = [
  {
    id: "senior-1",
    name: "【社員名1（イニシャル可）】",
    role: "【役職・職種1】",
    years: 0, // 【勤続年数（数値）】
    image: "/images/templates/qa-type/senior-1.jpg",
    beforeAnxiety: "【入社前の不安】",
    currentFeelings: "【現在の気持ち・実感】",
  },
  // 必要に応じて追加（2〜4名程度が目安）
];

// --- 応募前の疑問 Q&A（構成案: 応募前Q&Aセクション） ---
export const beforeApplyQA = {
  qualification: [
    {
      question: "【資格・条件に関する質問1】",
      answer: "【回答1】",
    },
    // 必要に応じて追加
  ],
  application: [
    {
      question: "【応募方法に関する質問1】",
      answer: "【回答1】",
    },
    // 必要に応じて追加
  ],
};

// --- 選考について Q&A（構成案: 選考Q&Aセクション） ---
export const selectionQA = {
  flow: [
    {
      step: 1,
      title: "【ステップ1タイトル】",
      description: "【ステップ1説明】",
      duration: "【所要時間】",
      point: "【ポイント・アドバイス】",
    },
    {
      step: 2,
      title: "【ステップ2タイトル】",
      description: "【ステップ2説明】",
      duration: "【所要時間】",
      point: "【ポイント】",
      passRate: 0, // 【通過率（任意・数値）】
    },
    // 必要に応じて追加
  ],
  totalDuration: "【選考全体の期間（例: 約2週間）】",
  interviewQA: [
    {
      question: "【面接に関する質問1】",
      answer: "【回答1】",
    },
    // 必要に応じて追加
  ],
};

// --- 入社後について Q&A（構成案: 入社後Q&Aセクション） ---
export const afterJoiningQA = {
  onboardingTimeline: {
    firstDay: {
      title: "入社初日",
      schedule: [
        { time: "【時刻】", activity: "【活動内容】" },
        // 必要に応じて追加
      ],
    },
    firstWeek: {
      title: "入社1週目",
      items: [
        "【内容1】",
        "【内容2】",
        // 必要に応じて追加
      ],
    },
    firstMonth: {
      title: "入社1ヶ月目",
      items: [
        "【内容1】",
        "【内容2】",
      ],
    },
    threeMonths: {
      title: "入社3ヶ月目",
      items: [
        "【内容1】",
        "【内容2】",
      ],
    },
    sixMonthsToYear: {
      title: "入社半年〜1年",
      items: [
        "【内容1】",
        "【内容2】",
      ],
    },
  },
  qa: [
    {
      question: "【入社後に関する質問1】",
      answer: "【回答1】",
    },
    // 必要に応じて追加
  ],
};

// --- 働き方 Q&A（構成案: 働き方Q&Aセクション） ---
export const workstyleQA = {
  salary: [
    {
      question: "【給与に関する質問1】",
      answer: "【回答1】",
    },
    // 必要に応じて追加
  ],
  workingHours: [
    {
      question: "【勤務時間・休日に関する質問1】",
      answer: "【回答1】",
    },
    // 必要に応じて追加
  ],
};

// --- 募集職種（構成案: 募集要項セクション） ---
export const jobs = [
  {
    id: "job-1",
    title: "【職種名1】",
    type: "【雇用形態】",
    location: "【勤務地】",
    salary: "【給与（例: 月給20万円〜28万円）】",
    description: "【職種説明】",
    requirements: [
      "【必須条件1】",
      "【必須条件2】",
    ],
    preferred: [
      "【歓迎条件1】",
      "【歓迎条件2】",
    ],
    workingHours: "【勤務時間】",
    holidays: "【休日】",
    benefits: [
      "【福利厚生1】",
      "【福利厚生2】",
    ],
  },
  // 必要に応じて追加
];

// --- 相談窓口（構成案: お問い合わせセクション） ---
export const consultation = {
  phone: {
    number: "【電話番号】",
    hours: "【対応時間（例: 平日 9:00〜18:00）】",
    staff: "【担当者名】",
    note: "【備考（例: 「ホームページを見た」とお伝えください）】",
  },
  email: {
    address: "【メールアドレス】",
    subject: "【推奨件名】",
    responseTime: "【返信目安（例: 2営業日以内に返信）】",
  },
  online: {
    tool: "【オンラインツール名（例: Zoom）】",
    duration: "【所要時間（例: 30分程度）】",
    note: "【備考】",
  },
};

// --- 最終メッセージ（構成案: 締めのメッセージ） ---
export const finalMessage = {
  title: "【メッセージタイトル】",
  message: `【メッセージ本文】

【複数段落の場合は空行で区切る】

【締めの言葉】`,
  signature: "【署名（例: 株式会社○○ 採用担当一同）】",
};

// --- サイト設定（自動生成） ---
export const siteConfig = {
  siteName: `${company.name} 採用サイト`,
  siteDescription: `${company.name}の採用情報サイトです。【キャッチコピーや特徴を記載】`,
  siteUrl: "【採用サイトURL】",
  ogImage: "/images/templates/qa-type/og-image.jpg",
};
