// ============================================================
// ビジュアル型テンプレート - プレースホルダー版
// ============================================================
// 【使い方】
// 1. このファイルをコピーして data.ts として保存
// 2. 【】で囲まれた部分を構成案の内容で置き換える
// 3. 画像パスは実際の画像ファイルに合わせて更新
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

// --- 3つのキーワード（構成案: コンセプトキーワードセクション） ---
// 会社の魅力を3つのキーワードで表現
export const keywords = [
  {
    id: 1,
    keyword: "【キーワード1（例: チームワーク）】",
    subtext: "【サブテキスト1（例: 一人で悩まない。仲間がいる。）】",
    image: "/images/templates/visual/keyword-1.jpg",
  },
  {
    id: 2,
    keyword: "【キーワード2】",
    subtext: "【サブテキスト2】",
    image: "/images/templates/visual/keyword-2.jpg",
  },
  {
    id: 3,
    keyword: "【キーワード3】",
    subtext: "【サブテキスト3】",
    image: "/images/templates/visual/keyword-3.jpg",
  },
];

// --- ギャラリー写真カテゴリ（構成案: ギャラリーセクション） ---
export const galleryCategories = [
  { id: "all", label: "ALL" },
  { id: "people", label: "PEOPLE" },
  { id: "office", label: "OFFICE" },
  { id: "work", label: "WORK" },
  { id: "event", label: "EVENT" },
  // 必要に応じて追加・変更
];

// --- ギャラリー写真データ（構成案: ギャラリーセクション） ---
// 各カテゴリごとに写真を追加
export const galleryPhotos = [
  // PEOPLE
  { id: 1, category: "people", src: "/images/templates/visual/gallery/people-01.jpg", alt: "【画像説明1】" },
  { id: 2, category: "people", src: "/images/templates/visual/gallery/people-02.jpg", alt: "【画像説明2】" },
  // OFFICE
  { id: 3, category: "office", src: "/images/templates/visual/gallery/office-01.jpg", alt: "【画像説明3】" },
  { id: 4, category: "office", src: "/images/templates/visual/gallery/office-02.jpg", alt: "【画像説明4】" },
  // WORK
  { id: 5, category: "work", src: "/images/templates/visual/gallery/work-01.jpg", alt: "【画像説明5】" },
  { id: 6, category: "work", src: "/images/templates/visual/gallery/work-02.jpg", alt: "【画像説明6】" },
  // EVENT
  { id: 7, category: "event", src: "/images/templates/visual/gallery/event-01.jpg", alt: "【画像説明7】" },
  // 必要に応じて追加（16〜30枚程度が目安）
];

// --- 社員データ（構成案: 社員紹介セクション） ---
// 3〜6名程度が目安
export const members = [
  {
    id: "member-1",
    name: "【社員名1】",
    nameKana: "【社員名カナ1】",
    age: 0, // 【年齢（数値）】
    joinYear: 0, // 【入社年（数値）】
    yearsOfService: 0, // 【勤続年数（数値）】
    position: "【役職・ポジション1】",
    department: "【部署名1】",
    previousJob: "【前職（例: 新卒入社）】",
    photo: "/images/templates/visual/members/member1-main.jpg",
    oneLiner: "【一言メッセージ（キャッチフレーズ）】",
    gallery: [
      { src: "/images/templates/visual/members/member1-01.jpg", caption: "【キャプション1】" },
      { src: "/images/templates/visual/members/member1-02.jpg", caption: "【キャプション2】" },
      // 3〜5枚程度
    ],
    interview: {
      reason: "【入社理由】",
      work: "【仕事内容】",
      rewarding: "【やりがい】",
      failure: "【失敗談・学び】",
      atmosphere: "【職場の雰囲気】",
      privateTime: "【プライベートの過ごし方】",
      message: "【求職者へのメッセージ】",
    },
  },
  // 社員2以降は上記をコピーして追加
];

// --- オフィスエリア（構成案: オフィス紹介セクション） ---
export const officeAreas = [
  {
    id: "area-1",
    name: "【エリア名1（例: 執務スペース）】",
    description: "【エリア説明1】",
    photos: [
      { src: "/images/templates/visual/office/area1-01.jpg", caption: "【キャプション1】" },
      { src: "/images/templates/visual/office/area1-02.jpg", caption: "【キャプション2】" },
    ],
  },
  // エリア2以降は上記をコピーして追加（3〜5エリア程度が目安）
];

// --- 設備・備品（構成案: 設備紹介セクション） ---
export const facilities = [
  {
    category: "【カテゴリ名1（例: デスク環境）】",
    items: [
      { name: "【設備名1】", description: "【説明1】" },
      { name: "【設備名2】", description: "【説明2】" },
    ],
  },
  // カテゴリ2以降は上記をコピーして追加
];

// --- 社内イベント（構成案: カルチャーセクション） ---
export const events = [
  {
    month: "【月（例: 4月）】",
    name: "【イベント名1】",
    description: "【イベント説明1】",
    photos: [
      "/images/templates/visual/events/event1-01.jpg",
      "/images/templates/visual/events/event1-02.jpg",
    ],
  },
  // イベント2以降は上記をコピーして追加（3〜6イベント程度が目安）
];

// --- 募集職種（構成案: 募集要項セクション） ---
export const jobs = [
  {
    id: "job-1",
    title: "【職種名1】",
    type: "【雇用形態】",
    catchphrase: "【職種キャッチコピー】",
    salary: {
      min: 0, // 【最低月給（数値）】
      max: 0, // 【最高月給（数値）】
      unit: "月給",
      note: "【備考】",
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
      welcome: [
        "【こんな方歓迎1】",
        "【こんな方歓迎2】",
      ],
    },
    workingHours: {
      start: "【始業時刻】",
      end: "【終業時刻】",
      break: 60, // 【休憩時間（分）】
      overtime: "【残業目安】",
    },
    holidays: {
      type: "【休日タイプ】",
      days: ["【休日1】", "【休日2】"],
      annual: 0, // 【年間休日（数値）】
      others: ["【その他休暇1】", "【その他休暇2】"],
    },
    benefits: [
      "【福利厚生1】",
      "【福利厚生2】",
    ],
    photos: [
      "/images/templates/visual/jobs/job1-01.jpg",
      "/images/templates/visual/jobs/job1-02.jpg",
    ],
    openings: 0, // 【募集人数（数値）】
  },
  // 職種2以降は上記をコピーして追加
];

// --- サイト設定（自動生成） ---
export const siteConfig = {
  siteName: `${company.name} 採用サイト`,
  siteDescription: `${company.name}の採用情報サイトです。【職種・特徴を簡潔に】を募集しています。`,
  siteUrl: "【採用サイトURL】",
  ogImage: "/images/templates/visual/og-image.jpg",
};
