// ============================================================
// データ訴求型テンプレート - プレースホルダー版
// ============================================================
// 【使い方】
// 1. このファイルをコピーして data.ts として保存
// 2. 【】で囲まれた部分を構成案の内容で置き換える
// 3. 数値データは正確な値を入力（グラフに反映されます）
// 4. 配列の要素数は構成案に合わせて増減可能
// ============================================================

export const company = {
  // --- 企業基本情報（構成案: 企業情報セクション） ---
  name: "【企業名】",
  nameKana: "【企業名カナ】",
  nameEn: "【企業名英語表記】",
  established: "【設立年月】",
  establishedYear: 0, // 【設立年（数値）】
  employees: 0, // 【従業員数（数値）】
  capital: "【資本金】",
  revenue: "【売上高（例: 28億円）】",
  revenueGrowth: 0, // 【売上成長率（数値・%）】
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

  // --- 沿革（構成案: 会社の歴史セクション） ---
  history: [
    { year: 0, title: "【出来事タイトル1】", description: "【出来事説明1】" },
    { year: 0, title: "【出来事タイトル2】", description: "【出来事説明2】" },
    // 必要に応じて追加
  ],

  // --- 拠点情報（構成案: オフィス一覧） ---
  offices: [
    { name: "【拠点名1（例: 本社（東京））】", address: "【住所1】", employees: 0 },
    // 必要に応じて追加
  ],
};

// --- 成長推移データ（構成案: 成長データセクション） ---
// グラフ表示用の年次推移データ
export const growthData = {
  revenue: [
    { year: 0, value: 0 }, // 【年, 売上（億円）】
    { year: 0, value: 0 },
    // 過去5〜6年分のデータ
  ],
  employees: [
    { year: 0, value: 0 }, // 【年, 従業員数】
    { year: 0, value: 0 },
  ],
  projects: [
    { year: 0, value: 0 }, // 【年, プロジェクト数】
    { year: 0, value: 0 },
  ],
};

// --- ダッシュボードデータ（構成案: 数字で見る会社セクション） ---
// 主要指標を9項目程度でまとめる
export const dashboardData = [
  {
    id: "retention",
    label: "【指標名1（例: 定着率）】",
    value: 0, // 【数値】
    unit: "【単位（例: %）】",
    description: "【説明（例: 入社3年以内の定着率）】",
    trend: "【トレンド（例: +2.1%）】",
    trendDirection: "up" as const, // up または down
    industryAverage: 0, // 【業界平均（数値）】
  },
  {
    id: "avgTenure",
    label: "【指標名2】",
    value: 0,
    unit: "【単位】",
    description: "【説明】",
    trend: "【トレンド】",
    trendDirection: "up" as const,
    industryAverage: 0,
  },
  // 必要に応じて追加（6〜9項目程度が目安）
];

// --- 受賞・認証実績（構成案: 受賞歴セクション） ---
export const awards = [
  {
    id: "award-1",
    name: "【受賞・認証名1】",
    year: 0, // 【取得年（数値）】
    description: "【説明】",
    logo: "/images/templates/data-driven/award-1.png",
  },
  // 必要に応じて追加
];

// --- 業界比較データ（構成案: 業界比較セクション） ---
export const industryComparison = [
  { item: "【比較項目1（例: 平均年収）】", company: 0, industry: 0, unit: "【単位】" },
  { item: "【比較項目2（例: 有給取得率）】", company: 0, industry: 0, unit: "【単位】" },
  // 必要に応じて追加（4〜8項目程度が目安）
];

// --- 労働環境データ（構成案: 働きやすさデータセクション） ---
export const workplaceStats = {
  workHours: {
    average: 0, // 【平均労働時間（数値）】
    core: { start: "【コアタイム開始】", end: "【コアタイム終了】" },
    flex: { start: "【フレックス開始】", end: "【フレックス終了】" },
    remoteRatio: 0, // 【リモートワーク率（数値・%）】
  },
  vacation: {
    annualDays: 0, // 【年間休日（数値）】
    paidLeaveAverage: 0, // 【有給平均取得日数（数値）】
    paidLeaveRate: 0, // 【有給取得率（数値・%）】
    specialLeaves: [
      "【特別休暇1】",
      "【特別休暇2】",
    ],
  },
  benefits: {
    totalCostPerEmployee: 0, // 【1人あたり福利厚生費（万円）】
    breakdown: [
      { name: "【カテゴリ1】", value: 0, color: "#000000" }, // 【割合（%）、色】
      { name: "【カテゴリ2】", value: 0, color: "#000000" },
      // 合計100%になるように
    ],
  },
  diversity: {
    genderRatio: { male: 0, female: 0 }, // 【男女比（%）】
    ageDistribution: [
      { range: "20代", value: 0 },
      { range: "30代", value: 0 },
      { range: "40代", value: 0 },
      { range: "50代以上", value: 0 },
    ],
    foreignNationals: 0, // 【外国籍社員比率（%）】
    disabilityEmployment: 0, // 【障がい者雇用率（%）】
  },
};

// --- 給与モデルケース（構成案: 給与モデルセクション） ---
export const salaryModels = [
  {
    position: "【ポジション名1】",
    years: 0, // 【入社年数（数値）】
    age: 0, // 【年齢（数値）】
    annual: 0, // 【年収（万円）】
    monthly: 0, // 【月給（円）】
    bonus: 0, // 【賞与（万円）】
    description: "【説明（例: 第二新卒・未経験入社）】",
  },
  // 必要に応じて追加（3〜5パターン程度が目安）
];

// --- 昇給・昇格実績（構成案: キャリアアップセクション） ---
export const promotionStats = {
  averagePromotionYears: 0, // 【平均昇進年数（数値）】
  promotionRate: 0, // 【年間昇進率（%）】
  salaryIncreaseRate: 0, // 【平均昇給率（%）】
  positions: [
    { level: 1, title: "【職位名1】", avgYears: 0, count: 0 },
    { level: 2, title: "【職位名2】", avgYears: 0, count: 0 },
    // 必要に応じて追加
  ],
};

// --- キャリアパスデータ（構成案: キャリアパスセクション） ---
export const careerData = {
  paths: [
    {
      id: "specialist",
      name: "【キャリアパス1名】",
      description: "【キャリアパス1説明】",
      steps: [
        { level: 1, title: "【ステップ1タイトル】", years: "【年数（例: 1-3年目）】" },
        { level: 2, title: "【ステップ2タイトル】", years: "【年数】" },
        // 必要に応じて追加
      ],
    },
    // キャリアパス2以降は上記をコピーして追加
  ],
  successStories: [
    {
      id: "case1",
      name: "【社員名（イニシャル可）】",
      age: 0,
      joinYear: 0,
      beforePosition: "【入社時ポジション】",
      currentPosition: "【現在のポジション】",
      salaryIncrease: 0, // 【年収増加率（%）】
      certifications: ["【取得資格1】", "【取得資格2】"],
      story: "【キャリアストーリー（2-3文）】",
    },
    // 必要に応じて追加
  ],
  trainingPrograms: [
    {
      category: "【研修カテゴリ1】",
      programs: [
        { name: "【研修名1】", duration: "【期間】", target: "【対象者】" },
        // 必要に応じて追加
      ],
    },
    // カテゴリ2以降は上記をコピーして追加
  ],
};

// --- 募集職種データ（構成案: 募集要項セクション） ---
export const jobs = [
  {
    id: "job-1",
    title: "【職種名1】",
    type: "【雇用形態】",
    experience: "【経験要件（例: 経験者優遇、未経験可）】",
    salary: {
      min: 0, // 【最低年収（万円）】
      max: 0, // 【最高年収（万円）】
      unit: "年収（万円）",
    },
    location: "【勤務地】",
    description: "【職種説明】",
    requirements: {
      required: [
        "【必須条件1】",
        "【必須条件2】",
      ],
      preferred: [
        "【歓迎条件1】",
        "【歓迎条件2】",
      ],
    },
    benefits: [
      "【福利厚生1】",
      "【福利厚生2】",
    ],
    openings: 0, // 【募集人数（数値）】
  },
  // 必要に応じて追加
];

// --- よくある質問（構成案: FAQセクション） ---
export const faqData = {
  categories: [
    {
      id: "application",
      name: "【カテゴリ名1（例: 応募・選考）】",
      icon: "FileText", // FileText, Clock, TrendingUp, Heart など
      questions: [
        {
          q: "【質問1】",
          a: "【回答1】",
        },
        // 必要に応じて追加
      ],
    },
    // カテゴリ2以降は上記をコピーして追加
  ],
};

// --- サイト設定（自動生成） ---
export const siteConfig = {
  siteName: `${company.name} 採用サイト`,
  siteDescription: `${company.name}の採用情報サイトです。データで見る、成長できる環境。${company.business}のプロフェッショナルを募集しています。`,
  siteUrl: "【採用サイトURL】",
  ogImage: "/images/templates/data-driven/og-image.jpg",
};
