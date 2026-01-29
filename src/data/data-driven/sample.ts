// 株式会社テックフォース - データ訴求型サンプルデータ

export const company = {
  name: "株式会社テックフォース",
  nameKana: "テックフォース",
  nameEn: "TECHFORCE Inc.",
  established: "2010年4月",
  establishedYear: 2010,
  employees: 156,
  capital: "1億2,000万円",
  revenue: "28億円",
  revenueGrowth: 18.5,
  ceo: {
    name: "田中 誠一",
    nameKana: "タナカ セイイチ",
    title: "代表取締役CEO",
  },
  business: "ITソリューション・システム開発",
  businessDescription: "企業向けDX支援、クラウドシステム開発、AIソリューション提供を行うIT企業。大手企業から中小企業まで幅広いクライアントの課題解決をサポート。",
  address: {
    full: "東京都渋谷区恵比寿1-20-8",
    prefecture: "東京都",
    city: "渋谷区",
    street: "恵比寿1-20-8",
    building: "テックフォースビル",
    postalCode: "150-0013",
  },
  phone: "03-XXXX-XXXX",
  email: "recruit@techforce-example.co.jp",
  website: "https://techforce-example.co.jp",
  color: {
    primary: "#1565C0",
    accent: "#FFC107",
  },
  history: [
    { year: 2010, title: "創業", description: "渋谷区にてシステム開発事業を開始。社員5名でスタート。" },
    { year: 2013, title: "事業拡大", description: "クラウドソリューション事業を開始。社員30名に成長。" },
    { year: 2016, title: "本社移転", description: "恵比寿に本社ビルを取得。大阪支社を開設。" },
    { year: 2019, title: "AIソリューション事業開始", description: "AI/ML部門を新設。社員100名突破。" },
    { year: 2022, title: "福岡支社開設", description: "九州エリアへの展開開始。社員150名に。" },
    { year: 2024, title: "さらなる成長へ", description: "売上高30億円を目指し、採用強化中。" },
  ],
  offices: [
    { name: "本社（東京）", address: "東京都渋谷区恵比寿1-20-8", employees: 98 },
    { name: "大阪支社", address: "大阪府大阪市北区梅田2-5-10", employees: 38 },
    { name: "福岡支社", address: "福岡県福岡市博多区博多駅前3-12-1", employees: 20 },
  ],
};

// 成長推移データ（グラフ用）
export const growthData = {
  revenue: [
    { year: 2019, value: 12 },
    { year: 2020, value: 15 },
    { year: 2021, value: 18 },
    { year: 2022, value: 22 },
    { year: 2023, value: 24 },
    { year: 2024, value: 28 },
  ],
  employees: [
    { year: 2019, value: 68 },
    { year: 2020, value: 85 },
    { year: 2021, value: 102 },
    { year: 2022, value: 120 },
    { year: 2023, value: 142 },
    { year: 2024, value: 156 },
  ],
  projects: [
    { year: 2019, value: 45 },
    { year: 2020, value: 62 },
    { year: 2021, value: 78 },
    { year: 2022, value: 95 },
    { year: 2023, value: 118 },
    { year: 2024, value: 135 },
  ],
};

// ダッシュボードデータ（9項目）
export const dashboardData = [
  {
    id: "retention",
    label: "定着率",
    value: 94.2,
    unit: "%",
    description: "入社3年以内の定着率",
    trend: "+2.1%",
    trendDirection: "up" as const,
    industryAverage: 72,
  },
  {
    id: "avgTenure",
    label: "平均勤続年数",
    value: 6.8,
    unit: "年",
    description: "全社員の平均",
    trend: "+0.5年",
    trendDirection: "up" as const,
    industryAverage: 4.2,
  },
  {
    id: "paidLeave",
    label: "有給取得率",
    value: 82.5,
    unit: "%",
    description: "年間平均取得率",
    trend: "+5.3%",
    trendDirection: "up" as const,
    industryAverage: 58,
  },
  {
    id: "overtime",
    label: "平均残業時間",
    value: 15.2,
    unit: "時間/月",
    description: "全社員の月平均",
    trend: "-3.8h",
    trendDirection: "down" as const,
    industryAverage: 28,
  },
  {
    id: "remoteWork",
    label: "リモートワーク率",
    value: 68,
    unit: "%",
    description: "リモート勤務利用者",
    trend: "+12%",
    trendDirection: "up" as const,
    industryAverage: 35,
  },
  {
    id: "training",
    label: "研修時間",
    value: 120,
    unit: "時間/年",
    description: "1人あたりの研修時間",
    trend: "+15h",
    trendDirection: "up" as const,
    industryAverage: 45,
  },
  {
    id: "promotion",
    label: "昇進率",
    value: 28.5,
    unit: "%",
    description: "年間昇進率",
    trend: "+3.2%",
    trendDirection: "up" as const,
    industryAverage: 18,
  },
  {
    id: "satisfaction",
    label: "社員満足度",
    value: 4.2,
    unit: "/5",
    description: "社内アンケート結果",
    trend: "+0.3",
    trendDirection: "up" as const,
    industryAverage: 3.4,
  },
  {
    id: "diversity",
    label: "女性管理職比率",
    value: 32,
    unit: "%",
    description: "管理職に占める女性の割合",
    trend: "+5%",
    trendDirection: "up" as const,
    industryAverage: 15,
  },
];

// 受賞・認証実績
export const awards = [
  {
    id: "health",
    name: "健康経営優良法人",
    year: 2024,
    description: "従業員の健康管理を経営的な視点で考え、戦略的に実践する企業として認定",
    logo: "/images/templates/data-driven/award-health.png",
  },
  {
    id: "workStyle",
    name: "働き方改革推進企業",
    year: 2023,
    description: "東京都より働き方改革に積極的に取り組む企業として認定",
    logo: "/images/templates/data-driven/award-workstyle.png",
  },
  {
    id: "dx",
    name: "DX認定事業者",
    year: 2023,
    description: "経済産業省よりDX推進のための準備が整っている事業者として認定",
    logo: "/images/templates/data-driven/award-dx.png",
  },
  {
    id: "growth",
    name: "ベストベンチャー100",
    year: 2022,
    description: "これから成長が期待されるベンチャー企業100社に選出",
    logo: "/images/templates/data-driven/award-venture.png",
  },
];

// 業界比較データ
export const industryComparison = [
  { item: "平均年収", company: 580, industry: 450, unit: "万円" },
  { item: "有給取得率", company: 82.5, industry: 58, unit: "%" },
  { item: "残業時間", company: 15.2, industry: 28, unit: "h/月" },
  { item: "離職率", company: 5.8, industry: 15, unit: "%" },
  { item: "育休取得率", company: 95, industry: 45, unit: "%" },
  { item: "研修時間", company: 120, industry: 45, unit: "h/年" },
];

// 労働環境データ
export const workplaceStats = {
  workHours: {
    average: 7.8,
    core: { start: "10:00", end: "15:00" },
    flex: { start: "07:00", end: "22:00" },
    remoteRatio: 68,
  },
  vacation: {
    annualDays: 125,
    paidLeaveAverage: 14.2,
    paidLeaveRate: 82.5,
    specialLeaves: ["リフレッシュ休暇（5日）", "バースデー休暇", "アニバーサリー休暇"],
  },
  benefits: {
    totalCostPerEmployee: 48,
    breakdown: [
      { name: "健康・医療", value: 35, color: "#1565C0" },
      { name: "住宅支援", value: 25, color: "#1E88E5" },
      { name: "育児・介護", value: 20, color: "#42A5F5" },
      { name: "自己啓発", value: 15, color: "#64B5F6" },
      { name: "その他", value: 5, color: "#90CAF9" },
    ],
  },
  diversity: {
    genderRatio: { male: 62, female: 38 },
    ageDistribution: [
      { range: "20代", value: 35 },
      { range: "30代", value: 40 },
      { range: "40代", value: 20 },
      { range: "50代以上", value: 5 },
    ],
    foreignNationals: 8,
    disabilityEmployment: 2.5,
  },
};

// 給与モデルケース
export const salaryModels = [
  {
    position: "エンジニア（未経験）",
    years: 1,
    age: 25,
    annual: 380,
    monthly: 270000,
    bonus: 56,
    description: "第二新卒・未経験入社",
  },
  {
    position: "エンジニア（中堅）",
    years: 5,
    age: 30,
    annual: 520,
    monthly: 370000,
    bonus: 76,
    description: "プロジェクトリーダー経験あり",
  },
  {
    position: "シニアエンジニア",
    years: 8,
    age: 35,
    annual: 680,
    monthly: 480000,
    bonus: 104,
    description: "技術リード・後輩指導",
  },
  {
    position: "マネージャー",
    years: 10,
    age: 38,
    annual: 820,
    monthly: 580000,
    bonus: 124,
    description: "チームマネジメント",
  },
];

// 昇給・昇格実績
export const promotionStats = {
  averagePromotionYears: 3.2,
  promotionRate: 28.5,
  salaryIncreaseRate: 5.8,
  positions: [
    { level: 1, title: "メンバー", avgYears: 0, count: 85 },
    { level: 2, title: "シニアメンバー", avgYears: 2.5, count: 35 },
    { level: 3, title: "リーダー", avgYears: 4.5, count: 20 },
    { level: 4, title: "マネージャー", avgYears: 7, count: 12 },
    { level: 5, title: "シニアマネージャー", avgYears: 10, count: 4 },
  ],
};

// キャリアパスデータ
export const careerData = {
  paths: [
    {
      id: "specialist",
      name: "スペシャリスト",
      description: "技術を極めるキャリアパス",
      steps: [
        { level: 1, title: "エンジニア", years: "1-3年目" },
        { level: 2, title: "シニアエンジニア", years: "4-6年目" },
        { level: 3, title: "テックリード", years: "7-9年目" },
        { level: 4, title: "プリンシパル", years: "10年目〜" },
      ],
    },
    {
      id: "management",
      name: "マネジメント",
      description: "組織を率いるキャリアパス",
      steps: [
        { level: 1, title: "メンバー", years: "1-2年目" },
        { level: 2, title: "チームリーダー", years: "3-5年目" },
        { level: 3, title: "マネージャー", years: "6-8年目" },
        { level: 4, title: "部長・執行役員", years: "9年目〜" },
      ],
    },
  ],
  successStories: [
    {
      id: "case1",
      name: "A.K.",
      age: 32,
      joinYear: 2018,
      beforePosition: "未経験入社",
      currentPosition: "テックリード",
      salaryIncrease: 185,
      certifications: ["AWS Solutions Architect", "PMP"],
      story: "文系出身・未経験で入社。3年間でバックエンドのスペシャリストに成長し、現在は5名のチームをリード。",
    },
    {
      id: "case2",
      name: "M.S.",
      age: 35,
      joinYear: 2016,
      beforePosition: "エンジニア（中途）",
      currentPosition: "マネージャー",
      salaryIncrease: 220,
      certifications: ["情報処理安全確保支援士"],
      story: "中途入社5年目でマネージャーに昇進。15名のチームを率い、大規模プロジェクトを成功に導く。",
    },
  ],
  trainingPrograms: [
    {
      category: "技術研修",
      programs: [
        { name: "新人技術研修", duration: "3ヶ月", target: "新卒・未経験" },
        { name: "クラウド技術研修", duration: "2週間", target: "全エンジニア" },
        { name: "AI/ML入門研修", duration: "1ヶ月", target: "希望者" },
      ],
    },
    {
      category: "ビジネス研修",
      programs: [
        { name: "ロジカルシンキング", duration: "2日", target: "3年目以上" },
        { name: "プロジェクトマネジメント", duration: "3日", target: "リーダー候補" },
        { name: "マネジメント研修", duration: "5日", target: "マネージャー候補" },
      ],
    },
    {
      category: "自己啓発支援",
      programs: [
        { name: "資格取得支援", duration: "通年", target: "全社員" },
        { name: "外部セミナー参加", duration: "随時", target: "全社員" },
        { name: "書籍購入補助", duration: "通年", target: "全社員" },
      ],
    },
  ],
};

// 募集職種データ
export const jobs = [
  {
    id: "frontend-engineer",
    title: "フロントエンドエンジニア",
    type: "正社員",
    experience: "経験者優遇",
    salary: {
      min: 400,
      max: 700,
      unit: "年収（万円）",
    },
    location: "東京本社（リモート可）",
    description: "React/Next.jsを使用したWebアプリケーション開発",
    requirements: {
      required: [
        "React/Vue.jsでの開発経験2年以上",
        "TypeScriptでの開発経験",
        "Git/GitHubの使用経験",
      ],
      preferred: [
        "Next.jsでの開発経験",
        "テスト駆動開発の経験",
        "CI/CD環境の構築経験",
      ],
    },
    benefits: [
      "フルリモート可",
      "フレックスタイム制",
      "年間休日125日",
      "資格取得支援",
    ],
    openings: 5,
  },
  {
    id: "backend-engineer",
    title: "バックエンドエンジニア",
    type: "正社員",
    experience: "経験者優遇",
    salary: {
      min: 450,
      max: 800,
      unit: "年収（万円）",
    },
    location: "東京本社（リモート可）",
    description: "Python/Go言語を使用したAPI・マイクロサービス開発",
    requirements: {
      required: [
        "Python/Go/Javaいずれかでの開発経験3年以上",
        "RDBMSの設計・運用経験",
        "RESTful APIの設計・開発経験",
      ],
      preferred: [
        "クラウドインフラ（AWS/GCP）の経験",
        "コンテナ技術（Docker/Kubernetes）の経験",
        "マイクロサービスアーキテクチャの経験",
      ],
    },
    benefits: [
      "フルリモート可",
      "フレックスタイム制",
      "年間休日125日",
      "資格取得支援",
    ],
    openings: 8,
  },
  {
    id: "project-manager",
    title: "プロジェクトマネージャー",
    type: "正社員",
    experience: "経験者",
    salary: {
      min: 600,
      max: 900,
      unit: "年収（万円）",
    },
    location: "東京本社",
    description: "大規模システム開発プロジェクトのマネジメント",
    requirements: {
      required: [
        "PM/PL経験3年以上",
        "10名以上のチームマネジメント経験",
        "顧客折衝・提案経験",
      ],
      preferred: [
        "PMP資格保有",
        "アジャイル開発の経験",
        "DXプロジェクトの経験",
      ],
    },
    benefits: [
      "フレックスタイム制",
      "年間休日125日",
      "ストックオプション付与",
      "マネジメント研修",
    ],
    openings: 3,
  },
  {
    id: "junior-engineer",
    title: "エンジニア（未経験可）",
    type: "正社員",
    experience: "未経験可",
    salary: {
      min: 350,
      max: 450,
      unit: "年収（万円）",
    },
    location: "東京本社・大阪支社",
    description: "充実した研修制度でエンジニアとしてのキャリアをスタート",
    requirements: {
      required: [
        "ITに興味がある方",
        "学習意欲がある方",
        "チームワークを大切にできる方",
      ],
      preferred: [
        "プログラミングスクール修了",
        "個人開発の経験",
        "IT系資格保有",
      ],
    },
    benefits: [
      "3ヶ月の研修制度",
      "メンター制度",
      "資格取得支援",
      "年間休日125日",
    ],
    openings: 10,
  },
];

// よくある質問
export const faqData = {
  categories: [
    {
      id: "application",
      name: "応募・選考",
      icon: "FileText",
      questions: [
        {
          q: "未経験でも応募できますか？",
          a: "はい、未経験の方も積極的に採用しています。3ヶ月の充実した研修制度があり、未経験入社の方の定着率は92%です。入社後もメンター制度でしっかりサポートします。",
        },
        {
          q: "選考プロセスを教えてください",
          a: "書類選考 → 一次面接（オンライン） → 二次面接（対面） → 最終面接 → 内定の流れです。応募から内定まで平均2〜3週間です。",
        },
        {
          q: "リモートでの面接は可能ですか？",
          a: "一次面接はオンラインで実施しています。遠方の方は最終面接までオンライン対応可能です。",
        },
      ],
    },
    {
      id: "workstyle",
      name: "働き方",
      icon: "Clock",
      questions: [
        {
          q: "リモートワークは可能ですか？",
          a: "はい、週3日以上のリモートワークが可能です。現在、社員の68%がリモートワークを活用しています。必要な機材は会社から支給します。",
        },
        {
          q: "残業はどのくらいありますか？",
          a: "全社平均で月15.2時間です。業界平均（28時間）と比較して少なく、残業削減に積極的に取り組んでいます。",
        },
        {
          q: "フレックスタイム制度はありますか？",
          a: "はい、コアタイム（10:00-15:00）のフレックスタイム制を導入しています。育児や介護との両立もしやすい環境です。",
        },
      ],
    },
    {
      id: "career",
      name: "キャリア・成長",
      icon: "TrendingUp",
      questions: [
        {
          q: "キャリアパスについて教えてください",
          a: "スペシャリスト路線とマネジメント路線の2つのキャリアパスがあります。半年に一度のキャリア面談で、希望に応じたキャリア設計をサポートします。",
        },
        {
          q: "研修制度はありますか？",
          a: "年間120時間の研修時間を確保しています。技術研修、ビジネス研修、外部セミナー参加など多様なプログラムがあります。費用は全額会社負担です。",
        },
        {
          q: "資格取得のサポートはありますか？",
          a: "受験費用・教材費を全額会社負担、合格時には報奨金（最大10万円）を支給しています。業務時間内での学習時間も確保できます。",
        },
      ],
    },
    {
      id: "benefits",
      name: "待遇・福利厚生",
      icon: "Heart",
      questions: [
        {
          q: "給与水準はどのくらいですか？",
          a: "業界平均より約28%高い水準です。中途入社3年目で平均520万円、5年目で平均680万円の実績があります。",
        },
        {
          q: "育児・介護支援はありますか？",
          a: "育休取得率95%（男性含む）、時短勤務、保育園費用補助などの制度があります。復職率は100%です。",
        },
        {
          q: "健康面のサポートはありますか？",
          a: "健康経営優良法人認定企業として、年2回の健康診断、メンタルヘルスサポート、スポーツジム補助などを提供しています。",
        },
      ],
    },
  ],
};

export const siteConfig = {
  siteName: `${company.name} 採用サイト`,
  siteDescription: `${company.name}の採用情報サイトです。データで見る、成長できる環境。${company.business}のプロフェッショナルを募集しています。`,
  siteUrl: "https://recruit.techforce-example.co.jp",
  ogImage: "/images/templates/data-driven/og-image.jpg",
};
