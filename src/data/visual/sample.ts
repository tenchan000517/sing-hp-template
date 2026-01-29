// 株式会社クリエイティブスタジオ - ビジュアル型サンプルデータ

export const company = {
  name: "株式会社クリエイティブスタジオ",
  nameKana: "クリエイティブスタジオ",
  nameEn: "CREATIVE STUDIO Inc.",
  established: "2015年4月",
  establishedYear: 2015,
  employees: 42,
  capital: "5,000万円",
  ceo: {
    name: "渡辺 美咲",
    nameKana: "ワタナベ ミサキ",
    title: "代表取締役",
  },
  business: "デザイン・クリエイティブ制作",
  businessDescription: "ブランディング、Webデザイン、グラフィックデザイン、映像制作を手がけるクリエイティブスタジオ。大手企業から地元ブランドまで幅広いクライアントの課題を、美しいビジュアルで解決します。",
  address: {
    full: "東京都目黒区中目黒2-8-12",
    prefecture: "東京都",
    city: "目黒区",
    street: "中目黒2-8-12",
    building: "クリエイティブスタジオビル",
    postalCode: "153-0061",
  },
  phone: "03-XXXX-XXXX",
  email: "recruit@creativestudio-example.co.jp",
  website: "https://creativestudio-example.co.jp",
  color: {
    primary: "#7B1FA2",
    accent: "#E91E63",
  },
};

// 3つのキーワード
export const keywords = [
  {
    id: 1,
    keyword: "チームワーク",
    subtext: "一人で悩まない。仲間がいる。",
    image: "/images/templates/visual/keyword-teamwork.jpg",
  },
  {
    id: 2,
    keyword: "成長",
    subtext: "できることが、毎日増えていく。",
    image: "/images/templates/visual/keyword-growth.jpg",
  },
  {
    id: 3,
    keyword: "やりがい",
    subtext: "お客様の「ありがとう」が、明日への力に。",
    image: "/images/templates/visual/keyword-rewarding.jpg",
  },
];

// ギャラリー写真カテゴリ
export const galleryCategories = [
  { id: "all", label: "ALL" },
  { id: "people", label: "PEOPLE" },
  { id: "office", label: "OFFICE" },
  { id: "work", label: "WORK" },
  { id: "event", label: "EVENT" },
  { id: "product", label: "PRODUCT" },
];

// ギャラリー写真データ
export const galleryPhotos = [
  // PEOPLE
  { id: 1, category: "people", src: "/images/templates/visual/gallery/people-01.jpg", alt: "デザイナーの作業風景" },
  { id: 2, category: "people", src: "/images/templates/visual/gallery/people-02.jpg", alt: "チームミーティング" },
  { id: 3, category: "people", src: "/images/templates/visual/gallery/people-03.jpg", alt: "クリエイターの笑顔" },
  { id: 4, category: "people", src: "/images/templates/visual/gallery/people-04.jpg", alt: "プレゼンテーション" },
  { id: 5, category: "people", src: "/images/templates/visual/gallery/people-05.jpg", alt: "ブレインストーミング" },
  { id: 6, category: "people", src: "/images/templates/visual/gallery/people-06.jpg", alt: "新人研修" },
  // OFFICE
  { id: 7, category: "office", src: "/images/templates/visual/gallery/office-01.jpg", alt: "オフィス全景" },
  { id: 8, category: "office", src: "/images/templates/visual/gallery/office-02.jpg", alt: "エントランス" },
  { id: 9, category: "office", src: "/images/templates/visual/gallery/office-03.jpg", alt: "ミーティングルーム" },
  { id: 10, category: "office", src: "/images/templates/visual/gallery/office-04.jpg", alt: "カフェスペース" },
  { id: 11, category: "office", src: "/images/templates/visual/gallery/office-05.jpg", alt: "デスク環境" },
  // WORK
  { id: 12, category: "work", src: "/images/templates/visual/gallery/work-01.jpg", alt: "デザイン作業" },
  { id: 13, category: "work", src: "/images/templates/visual/gallery/work-02.jpg", alt: "撮影現場" },
  { id: 14, category: "work", src: "/images/templates/visual/gallery/work-03.jpg", alt: "編集作業" },
  { id: 15, category: "work", src: "/images/templates/visual/gallery/work-04.jpg", alt: "クライアント打ち合わせ" },
  { id: 16, category: "work", src: "/images/templates/visual/gallery/work-05.jpg", alt: "校正作業" },
  // EVENT
  { id: 17, category: "event", src: "/images/templates/visual/gallery/event-01.jpg", alt: "社員旅行" },
  { id: 18, category: "event", src: "/images/templates/visual/gallery/event-02.jpg", alt: "忘年会" },
  { id: 19, category: "event", src: "/images/templates/visual/gallery/event-03.jpg", alt: "BBQ" },
  { id: 20, category: "event", src: "/images/templates/visual/gallery/event-04.jpg", alt: "誕生日会" },
  // PRODUCT
  { id: 21, category: "product", src: "/images/templates/visual/gallery/product-01.jpg", alt: "制作物1" },
  { id: 22, category: "product", src: "/images/templates/visual/gallery/product-02.jpg", alt: "制作物2" },
  { id: 23, category: "product", src: "/images/templates/visual/gallery/product-03.jpg", alt: "制作物3" },
  { id: 24, category: "product", src: "/images/templates/visual/gallery/product-04.jpg", alt: "制作物4" },
];

// 社員データ
export const members = [
  {
    id: "tanaka",
    name: "田中 優花",
    nameKana: "タナカ ユウカ",
    age: 28,
    joinYear: 2020,
    yearsOfService: 5,
    position: "アートディレクター",
    department: "デザイン部",
    previousJob: "広告代理店",
    photo: "/images/templates/visual/members/tanaka-main.jpg",
    oneLiner: "毎日が新しいチャレンジ",
    gallery: [
      { src: "/images/templates/visual/members/tanaka-01.jpg", caption: "入社当時" },
      { src: "/images/templates/visual/members/tanaka-02.jpg", caption: "デザイン作業中" },
      { src: "/images/templates/visual/members/tanaka-03.jpg", caption: "チームミーティング" },
      { src: "/images/templates/visual/members/tanaka-04.jpg", caption: "クライアント打ち合わせ" },
      { src: "/images/templates/visual/members/tanaka-05.jpg", caption: "プライベート" },
    ],
    interview: {
      reason: "前職では決まったフォーマットでの制作が多く、もっと自由にクリエイティブを追求したいと思っていました。この会社の作品を見て「ここで働きたい」と直感しました。",
      work: "ブランディングプロジェクトのアートディレクションを担当しています。クライアントの想いをヒアリングし、ビジュアルで形にしていく仕事です。",
      rewarding: "自分がディレクションしたデザインが街中で使われているのを見ると、本当に嬉しくなります。お客様から「イメージ通りです！」と言われる瞬間が最高です。",
      failure: "初めて任されたプロジェクトで、クライアントの要望を聞きすぎて方向性がブレてしまったことがあります。それ以来、コンセプトをしっかり固めることを心がけています。",
      atmosphere: "みんなクリエイティブに対して真剣で、でも和気あいあいとした雰囲気です。良いアイデアは年次関係なく採用されますし、困った時は必ず誰かが助けてくれます。",
      privateTime: "カメラが趣味で、休日は街歩きしながら写真を撮っています。旅行先での写真は仕事のインスピレーションにもなっています。",
      message: "クリエイティブな仕事がしたい人にとって、最高の環境だと思います。一緒に素敵な作品を作りましょう！",
    },
  },
  {
    id: "suzuki",
    name: "鈴木 健太",
    nameKana: "スズキ ケンタ",
    age: 32,
    joinYear: 2018,
    yearsOfService: 7,
    position: "シニアデザイナー",
    department: "デザイン部",
    previousJob: "Web制作会社",
    photo: "/images/templates/visual/members/suzuki-main.jpg",
    oneLiner: "デザインで人を幸せにする",
    gallery: [
      { src: "/images/templates/visual/members/suzuki-01.jpg", caption: "作業風景" },
      { src: "/images/templates/visual/members/suzuki-02.jpg", caption: "後輩指導" },
      { src: "/images/templates/visual/members/suzuki-03.jpg", caption: "チーム作業" },
    ],
    interview: {
      reason: "デザインの幅を広げたくて転職しました。Webだけでなくグラフィックやブランディングまでトータルでできるところに惹かれました。",
      work: "Webデザインをメインに、グラフィックデザインも担当しています。最近は後輩の育成にも力を入れています。",
      rewarding: "自分のデザインがクライアントのビジネスに貢献できた時が一番やりがいを感じます。数字で結果が見えるのもWebならではですね。",
      failure: "締め切り間際に大きな修正が入り、徹夜作業になったことがあります。それ以来、余裕を持ったスケジュール管理を心がけています。",
      atmosphere: "プロフェッショナル意識が高いですが、ピリピリした感じはありません。お互いをリスペクトしながら、いい作品を作ろうという雰囲気です。",
      privateTime: "サッカー観戦が趣味で、休日はスタジアムに行くことも。社内にも同じチームのファンがいて盛り上がります。",
      message: "デザインスキルはもちろん、人間的にも成長できる会社です。一緒に働ける日を楽しみにしています！",
    },
  },
  {
    id: "yamamoto",
    name: "山本 さくら",
    nameKana: "ヤマモト サクラ",
    age: 25,
    joinYear: 2023,
    yearsOfService: 2,
    position: "デザイナー",
    department: "デザイン部",
    previousJob: "新卒入社",
    photo: "/images/templates/visual/members/yamamoto-main.jpg",
    oneLiner: "夢だったデザイナーになれました",
    gallery: [
      { src: "/images/templates/visual/members/yamamoto-01.jpg", caption: "入社式" },
      { src: "/images/templates/visual/members/yamamoto-02.jpg", caption: "研修中" },
      { src: "/images/templates/visual/members/yamamoto-03.jpg", caption: "初めての案件" },
    ],
    interview: {
      reason: "美大でグラフィックデザインを学び、実践的なスキルを身につけられる会社を探していました。会社説明会で見た先輩方の作品に感動して応募しました。",
      work: "先輩のアシスタントをしながら、バナー制作や簡単なグラフィック制作を担当しています。少しずつ任される範囲が広がってきました。",
      rewarding: "自分がデザインしたものが実際に使われているのを見ると、本当に嬉しいです。先輩から「上手くなったね」と言われた時は泣きそうでした。",
      failure: "入社直後、指示を聞き逃して間違った修正をしてしまったことがあります。メモを取る大切さを学びました。",
      atmosphere: "質問しやすい雰囲気で、先輩方が丁寧に教えてくれます。ランチは女性社員で一緒に食べることも多く、楽しいです。",
      privateTime: "カフェ巡りが趣味です。素敵な内装やメニューデザインを見るのが楽しいし、仕事の参考にもなります。",
      message: "新卒でも、やる気があればどんどん成長できる環境です。一緒に頑張りましょう！",
    },
  },
  {
    id: "sato",
    name: "佐藤 大輝",
    nameKana: "サトウ ダイキ",
    age: 30,
    joinYear: 2019,
    yearsOfService: 6,
    position: "映像ディレクター",
    department: "映像制作部",
    previousJob: "映像制作会社",
    photo: "/images/templates/visual/members/sato-main.jpg",
    oneLiner: "映像で感動を届ける",
    gallery: [
      { src: "/images/templates/visual/members/sato-01.jpg", caption: "撮影現場" },
      { src: "/images/templates/visual/members/sato-02.jpg", caption: "編集作業" },
      { src: "/images/templates/visual/members/sato-03.jpg", caption: "ロケハン" },
    ],
    interview: {
      reason: "前職では企業VPが中心でしたが、もっとクリエイティブな映像に挑戦したくて転職しました。ここでは自分のアイデアを形にできます。",
      work: "ブランドムービーやCMの企画・撮影・編集をトータルで担当しています。デザイナーと連携しながら、統一感のある映像を作ります。",
      rewarding: "自分が作った映像で視聴者が感動してくれた時が最高です。SNSで反響があると、やってよかったと心から思えます。",
      failure: "撮影当日に機材トラブルが発生し、予定通り撮れなかったことがあります。事前の機材チェックの重要性を痛感しました。",
      atmosphere: "映像チームは少人数ですが、その分結束力があります。全員がプロフェッショナルで、刺激を受ける毎日です。",
      privateTime: "映画鑑賞が趣味で、週末は映画館に行くことが多いです。撮影技法を研究するのも楽しいですね。",
      message: "映像制作に情熱がある方、一緒に感動を作りましょう！",
    },
  },
  {
    id: "ito",
    name: "伊藤 真由",
    nameKana: "イトウ マユ",
    age: 27,
    joinYear: 2021,
    yearsOfService: 4,
    position: "プロジェクトマネージャー",
    department: "制作管理部",
    previousJob: "IT企業",
    photo: "/images/templates/visual/members/ito-main.jpg",
    oneLiner: "チームの力を最大化する",
    gallery: [
      { src: "/images/templates/visual/members/ito-01.jpg", caption: "進行管理" },
      { src: "/images/templates/visual/members/ito-02.jpg", caption: "クライアント対応" },
      { src: "/images/templates/visual/members/ito-03.jpg", caption: "チームMTG" },
    ],
    interview: {
      reason: "前職ではシステム開発のPMをしていましたが、クリエイティブな仕事に関わりたくて転職しました。ものづくりの最前線で働けるのが魅力でした。",
      work: "プロジェクトの進行管理とクライアント対応を担当しています。クリエイターが最高のパフォーマンスを発揮できるよう、全体をコーディネートします。",
      rewarding: "大変なプロジェクトが無事納品できた時の達成感は格別です。チーム全員で喜びを分かち合える瞬間が好きです。",
      failure: "クライアントとクリエイターの間で板挟みになり、うまく調整できなかったことがあります。今は早めのコミュニケーションを心がけています。",
      atmosphere: "クリエイターへのリスペクトがある会社です。PMも単なる管理者ではなく、チームの一員として扱ってもらえます。",
      privateTime: "ヨガとピラティスが趣味です。デスクワークが多いので、体を動かすことでリフレッシュしています。",
      message: "クリエイティブに興味があるけど、デザインは苦手...という方にもPMはおすすめです！",
    },
  },
];

// オフィスエリア
export const officeAreas = [
  {
    id: "workspace",
    name: "執務スペース",
    description: "開放的なワンフロアで、デザイナー・映像クリエイターが一緒に働いています。",
    photos: [
      { src: "/images/templates/visual/office/workspace-01.jpg", caption: "執務スペース全景" },
      { src: "/images/templates/visual/office/workspace-02.jpg", caption: "デスク周り" },
      { src: "/images/templates/visual/office/workspace-03.jpg", caption: "モニター環境" },
    ],
  },
  {
    id: "meeting",
    name: "会議室",
    description: "クライアントとの打ち合わせや、チームミーティングに使用します。",
    photos: [
      { src: "/images/templates/visual/office/meeting-01.jpg", caption: "大会議室" },
      { src: "/images/templates/visual/office/meeting-02.jpg", caption: "小会議室" },
    ],
  },
  {
    id: "cafe",
    name: "カフェスペース",
    description: "コーヒーを飲みながら、リラックスして会話できるスペースです。",
    photos: [
      { src: "/images/templates/visual/office/cafe-01.jpg", caption: "カフェカウンター" },
      { src: "/images/templates/visual/office/cafe-02.jpg", caption: "ラウンジエリア" },
    ],
  },
  {
    id: "studio",
    name: "撮影スタジオ",
    description: "社内に撮影スタジオを完備。商品撮影から人物撮影まで対応できます。",
    photos: [
      { src: "/images/templates/visual/office/studio-01.jpg", caption: "スタジオ全景" },
      { src: "/images/templates/visual/office/studio-02.jpg", caption: "撮影機材" },
    ],
  },
];

// 設備・備品
export const facilities = [
  {
    category: "デスク環境",
    items: [
      { name: "広々デスク", description: "W140cm×D70cmの広々デスク" },
      { name: "デュアルモニター", description: "27インチモニター2台が標準装備" },
      { name: "高機能チェア", description: "長時間作業も快適なエルゴノミクスチェア" },
    ],
  },
  {
    category: "IT環境",
    items: [
      { name: "Mac Pro / iMac", description: "最新のMac環境を用意" },
      { name: "Adobe CC", description: "全アプリケーション使い放題" },
      { name: "高速Wi-Fi", description: "ギガビット回線で快適作業" },
    ],
  },
  {
    category: "リフレッシュ",
    items: [
      { name: "エスプレッソマシン", description: "本格コーヒーが無料" },
      { name: "フリードリンク", description: "お茶、ジュース各種" },
      { name: "スナックコーナー", description: "お菓子・軽食を常備" },
    ],
  },
];

// 社内イベント
export const events = [
  {
    month: "4月",
    name: "入社式・歓迎会",
    description: "新しい仲間を歓迎するパーティー。先輩との交流を深めます。",
    photos: [
      "/images/templates/visual/events/april-01.jpg",
      "/images/templates/visual/events/april-02.jpg",
    ],
  },
  {
    month: "6月",
    name: "社員旅行",
    description: "年に1回の社員旅行。昨年は沖縄に行きました！",
    photos: [
      "/images/templates/visual/events/june-01.jpg",
      "/images/templates/visual/events/june-02.jpg",
      "/images/templates/visual/events/june-03.jpg",
    ],
  },
  {
    month: "8月",
    name: "BBQ大会",
    description: "屋上テラスでBBQ。家族参加OKのアットホームなイベントです。",
    photos: [
      "/images/templates/visual/events/august-01.jpg",
      "/images/templates/visual/events/august-02.jpg",
    ],
  },
  {
    month: "12月",
    name: "忘年会・表彰式",
    description: "1年の締めくくり。優秀社員の表彰やクリエイティブ大賞の発表も。",
    photos: [
      "/images/templates/visual/events/december-01.jpg",
      "/images/templates/visual/events/december-02.jpg",
      "/images/templates/visual/events/december-03.jpg",
    ],
  },
];

// 募集職種
export const jobs = [
  {
    id: "designer",
    title: "グラフィックデザイナー",
    type: "正社員",
    catchphrase: "美しいデザインで、ブランドを輝かせる",
    salary: {
      min: 280000,
      max: 450000,
      unit: "月給",
      note: "経験・能力を考慮の上、決定します",
    },
    location: "東京本社（目黒区中目黒）",
    description: "ブランディング、広告、パッケージなど幅広いグラフィックデザインを担当。クライアントの想いをカタチにする仕事です。",
    requirements: {
      required: [
        "Illustrator/Photoshopの実務経験（1年以上）",
        "ポートフォリオ提出可能な方",
      ],
      preferred: [
        "ブランディングの経験",
        "印刷知識",
        "映像制作の経験",
      ],
      welcome: ["業界経験不問", "第二新卒歓迎"],
    },
    workingHours: {
      start: "10:00",
      end: "19:00",
      break: 60,
      overtime: "月平均20時間程度",
    },
    holidays: {
      type: "完全週休2日制",
      days: ["土曜", "日曜", "祝日"],
      annual: 125,
      others: ["年末年始", "夏季休暇", "慶弔休暇", "有給休暇", "リフレッシュ休暇"],
    },
    benefits: [
      "社会保険完備",
      "交通費全額支給",
      "Adobe CC支給",
      "書籍購入補助",
      "セミナー参加費補助",
      "リモートワーク可",
    ],
    photos: [
      "/images/templates/visual/jobs/designer-01.jpg",
      "/images/templates/visual/jobs/designer-02.jpg",
    ],
    openings: 2,
  },
  {
    id: "web-designer",
    title: "Webデザイナー",
    type: "正社員",
    catchphrase: "Webで体験をデザインする",
    salary: {
      min: 300000,
      max: 500000,
      unit: "月給",
      note: "経験・能力を考慮の上、決定します",
    },
    location: "東京本社（目黒区中目黒）/ リモート可",
    description: "企業サイト、EC、ブランドサイトのデザインを担当。UIだけでなくUXまで考え抜いたデザインを目指します。",
    requirements: {
      required: [
        "Webデザインの実務経験（2年以上）",
        "Figma/XDの使用経験",
        "HTML/CSSの基礎知識",
      ],
      preferred: [
        "JavaScript/Reactの知識",
        "モーショングラフィックスの経験",
        "ディレクション経験",
      ],
      welcome: ["グラフィックデザイナーからの転向歓迎"],
    },
    workingHours: {
      start: "10:00",
      end: "19:00",
      break: 60,
      overtime: "月平均15時間程度",
    },
    holidays: {
      type: "完全週休2日制",
      days: ["土曜", "日曜", "祝日"],
      annual: 125,
      others: ["年末年始", "夏季休暇", "慶弔休暇", "有給休暇", "リフレッシュ休暇"],
    },
    benefits: [
      "社会保険完備",
      "交通費全額支給",
      "フルリモート可",
      "フレックスタイム制",
      "副業OK",
      "自己啓発支援",
    ],
    photos: [
      "/images/templates/visual/jobs/web-designer-01.jpg",
      "/images/templates/visual/jobs/web-designer-02.jpg",
    ],
    openings: 3,
  },
  {
    id: "video-creator",
    title: "映像クリエイター",
    type: "正社員",
    catchphrase: "映像で心を動かす",
    salary: {
      min: 300000,
      max: 550000,
      unit: "月給",
      note: "経験・能力を考慮の上、決定します",
    },
    location: "東京本社（目黒区中目黒）",
    description: "ブランドムービー、CM、SNS動画など幅広い映像制作を担当。企画から撮影、編集まで一貫して携われます。",
    requirements: {
      required: [
        "映像制作の実務経験（1年以上）",
        "Premiere Pro/After Effectsの経験",
        "撮影経験",
      ],
      preferred: [
        "Cinema 4D/Blenderの経験",
        "カラーグレーディングの知識",
        "ドローン操縦免許",
      ],
      welcome: ["YouTuber出身者歓迎", "個人制作実績のある方歓迎"],
    },
    workingHours: {
      start: "10:00",
      end: "19:00",
      break: 60,
      overtime: "月平均25時間程度",
    },
    holidays: {
      type: "完全週休2日制",
      days: ["土曜", "日曜", "祝日"],
      annual: 125,
      others: ["年末年始", "夏季休暇", "慶弔休暇", "有給休暇"],
    },
    benefits: [
      "社会保険完備",
      "交通費全額支給",
      "機材購入補助",
      "撮影経費全額負担",
      "社内スタジオ使い放題",
    ],
    photos: [
      "/images/templates/visual/jobs/video-01.jpg",
      "/images/templates/visual/jobs/video-02.jpg",
    ],
    openings: 1,
  },
];

// サイト設定
export const siteConfig = {
  siteName: `${company.name} 採用サイト`,
  siteDescription: `${company.name}の採用情報サイトです。デザイン・映像制作のプロフェッショナルを募集しています。`,
  siteUrl: "https://recruit.creativestudio-example.co.jp",
  ogImage: "/images/templates/visual/og-image.jpg",
};
