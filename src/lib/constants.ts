// Design tokens and constants

export const colors = {
  primary: "#2E7D32",
  primaryLight: "#4CAF50",
  primaryDark: "#1B5E20",
  accent: "#FF6F00",
  accentLight: "#FF9800",
  bgPrimary: "#ffffff",
  bgSecondary: "#F5F5F5",
  bgTertiary: "#FAFAFA",
  textPrimary: "#333333",
  textSecondary: "#666666",
  textMuted: "#999999",
  border: "#E0E0E0",
  borderLight: "#EEEEEE",
} as const;

export const breakpoints = {
  sp: 768,
  tb: 1024,
  pc: 1025,
} as const;

export const animations = {
  fadeIn: {
    duration: 0.6,
    ease: "easeOut",
  },
  countUp: {
    duration: 1.5,
  },
  hover: {
    duration: 0.3,
    scale: 1.02,
    translateY: -5,
  },
  pageTransition: {
    duration: 0.4,
  },
} as const;

export const navigation = {
  storyType: [
    { href: "/templates/story-type", label: "HOME" },
    { href: "/templates/story-type/story", label: "私たちのストーリー" },
    { href: "/templates/story-type/members", label: "先輩社員の声" },
    { href: "/templates/story-type/daily", label: "1日の流れ" },
    { href: "/templates/story-type/jobs", label: "募集職種" },
    { href: "/templates/story-type/environment", label: "はたらく環境" },
    { href: "/templates/story-type/apply", label: "応募する" },
  ],
  dataDriven: [
    { href: "/templates/data-driven", label: "HOME" },
    { href: "/templates/data-driven/company", label: "企業データ" },
    { href: "/templates/data-driven/workplace", label: "数字で見る働きやすさ" },
    { href: "/templates/data-driven/career", label: "キャリアパス" },
    { href: "/templates/data-driven/jobs", label: "募集要項" },
    { href: "/templates/data-driven/faq", label: "よくある質問" },
    { href: "/templates/data-driven/apply", label: "応募する" },
  ],
  visual: [
    { href: "/templates/visual", label: "HOME" },
    { href: "/templates/visual/gallery", label: "GALLERY" },
    { href: "/templates/visual/people", label: "PEOPLE" },
    { href: "/templates/visual/office", label: "OFFICE" },
    { href: "/templates/visual/culture", label: "CULTURE" },
    { href: "/templates/visual/jobs", label: "JOBS" },
    { href: "/templates/visual/entry", label: "ENTRY" },
  ],
} as const;

export const templates = [
  {
    id: "story-type",
    name: "ストーリー型",
    subtitle: "共感採用サイト",
    description: "社員の成長ストーリーと日常を通じて「ここで働く自分」を具体的にイメージさせ、感情的なつながりで応募を促進するテンプレートです。",
    features: [
      "社員インタビュー重視",
      "成長ストーリーの可視化",
      "感情に訴えるデザイン",
      "未経験者採用に最適",
    ],
    suitableFor: [
      "社員の定着率が高く、成長事例が豊富な企業",
      "アットホームな社風を持つ企業",
      "未経験者採用を積極的に行っている企業",
      "教育制度に自信がある企業",
    ],
    color: "#2E7D32",
    href: "/templates/story-type",
    image: "/images/templates/story-type/thumbnail.jpg",
    status: "available",
  },
  {
    id: "data-driven",
    name: "データ訴求型",
    subtitle: "数字で伝える採用サイト",
    description: "客観的なデータと実績を前面に出し、論理的に企業の魅力を伝えるテンプレートです。",
    features: [
      "数字・実績重視",
      "グラフ・チャート活用",
      "比較しやすい情報設計",
      "経験者採用に最適",
    ],
    suitableFor: [
      "実績や数字で差別化できる企業",
      "成長率や給与水準に自信がある企業",
      "データドリブンな企業文化",
      "経験者採用を重視する企業",
    ],
    color: "#1565C0",
    href: "/templates/data-driven",
    image: "/images/templates/data-driven/thumbnail.jpg",
    status: "available",
  },
  {
    id: "simple",
    name: "シンプル型",
    subtitle: "ミニマル採用サイト",
    description: "必要最低限の情報を美しくシンプルに配置した、洗練されたテンプレートです。",
    features: [
      "ミニマルデザイン",
      "高速表示",
      "情報の整理が容易",
      "どの業種にも対応",
    ],
    suitableFor: [
      "シンプルな情報発信を好む企業",
      "ブランドイメージを重視する企業",
      "少人数採用の企業",
      "制作コストを抑えたい企業",
    ],
    color: "#424242",
    href: "/templates/simple",
    image: "/images/templates/simple/thumbnail.jpg",
    status: "coming-soon",
  },
  {
    id: "visual",
    name: "ビジュアル型",
    subtitle: "写真で魅せる採用サイト",
    description: "高品質な写真と動画を中心に、視覚的なインパクトで企業の魅力を伝えるテンプレートです。",
    features: [
      "写真・動画重視",
      "没入感のあるデザイン",
      "SNS映えする構成",
      "若年層採用に最適",
    ],
    suitableFor: [
      "オフィス環境に自信がある企業",
      "写真映えする職場や製品がある企業",
      "クリエイティブな企業文化",
      "若年層をターゲットにした採用",
    ],
    color: "#7B1FA2",
    href: "/templates/visual",
    image: "/images/templates/visual/thumbnail.jpg",
    status: "coming-soon",
  },
  {
    id: "interactive",
    name: "インタラクティブ型",
    subtitle: "体験できる採用サイト",
    description: "クイズやシミュレーションなど、ユーザー参加型のコンテンツで企業との相性を確認できるテンプレートです。",
    features: [
      "参加型コンテンツ",
      "適性診断機能",
      "ゲーミフィケーション",
      "エンゲージメント重視",
    ],
    suitableFor: [
      "ITやテック企業",
      "ユニークな採用を行いたい企業",
      "ミスマッチを減らしたい企業",
      "先進的な企業イメージを打ち出したい企業",
    ],
    color: "#E65100",
    href: "/templates/interactive",
    image: "/images/templates/interactive/thumbnail.jpg",
    status: "available",
  },
] as const;
