// 株式会社グリーンテック - サンプルデータ

export const company = {
  name: "株式会社グリーンテック",
  nameKana: "グリーンテック",
  nameEn: "GREENTECH Co., Ltd.",
  established: "2008年4月",
  establishedYear: 2008,
  employees: 48,
  capital: "3,000万円",
  ceo: {
    name: "佐藤 健一",
    nameKana: "サトウ ケンイチ",
    title: "代表取締役",
    career: "大手設備メーカーで15年間勤務後、2008年に独立。環境設備のメンテナンス事業を立ち上げ、地域密着型のサービスで成長を続ける。",
    message: `グリーンテックのホームページをご覧いただき、ありがとうございます。
代表の佐藤健一です。

環境設備の仕事は、目に見えにくいですが、人々の暮らしを支える大切な仕事です。
私自身、この業界で20年以上働いてきましたが、お客様から「ありがとう」と言っていただける瞬間が、今でも一番のやりがいです。

当社では「人を大切にする」ことを何より重視しています。
社員一人ひとりが成長できる環境づくり、そして働きやすい職場づくりに力を入れています。

未経験の方も、経験者の方も、ぜひ一度お話ししましょう。
あなたの「やってみたい」という気持ちを、私たちは大切にします。

ご応募を心よりお待ちしています。`,
  },
  business: "環境設備のメンテナンス・施工",
  businessDescription: "空調設備、給排水設備、電気設備のメンテナンス・施工を行っています。オフィスビル、商業施設、工場など幅広い建物に対応。24時間365日の緊急対応体制で、お客様の安心をサポートしています。",
  address: {
    full: "愛知県名古屋市中区栄3-15-27",
    prefecture: "愛知県",
    city: "名古屋市中区",
    street: "栄3-15-27",
    building: "グリーンテックビル",
    postalCode: "460-0008",
  },
  phone: "052-XXX-XXXX",
  email: "recruit@greentech-example.co.jp",
  website: "https://greentech-example.co.jp",
  color: {
    primary: "#2E7D32",
    accent: "#FF6F00",
  },
  values: [
    {
      title: "お客様第一",
      description: "お客様の声に耳を傾け、期待を超えるサービスを提供します。",
    },
    {
      title: "誠実な対応",
      description: "約束を守り、正直であることを大切にしています。",
    },
    {
      title: "チームワーク",
      description: "一人ひとりの強みを活かし、協力して目標を達成します。",
    },
  ],
  history: [
    {
      year: 2008,
      title: "創業",
      description: "名古屋市中区にて設備メンテナンス事業を開始。社員3名でスタート。",
    },
    {
      year: 2012,
      title: "事業拡大",
      description: "施工事業を開始。対応エリアを愛知県全域に拡大。社員数15名に。",
    },
    {
      year: 2016,
      title: "新社屋完成",
      description: "現在の本社ビルが完成。24時間対応のコールセンターを開設。",
    },
    {
      year: 2020,
      title: "環境への取り組み",
      description: "省エネ設備の提案事業を開始。SDGsへの取り組みを強化。",
    },
    {
      year: 2024,
      title: "さらなる成長へ",
      description: "社員数48名に。三重県・岐阜県への進出を計画中。",
    },
  ],
  businesses: [
    {
      id: "maintenance",
      name: "メンテナンス事業",
      description: "空調・給排水・電気設備の定期点検・修理を行います。予防保全から緊急対応まで、建物設備のトータルサポートを提供。",
      features: ["24時間365日対応", "年間3,000件以上の実績", "資格保有者多数在籍"],
    },
    {
      id: "construction",
      name: "施工事業",
      description: "設備の新設・更新工事を担当。設計から施工、アフターフォローまで一貫して対応します。",
      features: ["設計から施工まで一貫対応", "品質管理の徹底", "工期厳守"],
    },
    {
      id: "consulting",
      name: "省エネコンサルティング",
      description: "エネルギー使用状況を分析し、最適な省エネプランを提案。コスト削減と環境負荷低減を両立。",
      features: ["電気代最大30%削減実績", "補助金申請サポート", "導入後の効果測定"],
    },
  ],
};

export const stats = [
  {
    value: 16,
    unit: "年",
    label: "設立",
    description: "安定した経営基盤",
  },
  {
    value: 8.5,
    unit: "年",
    label: "平均勤続年数",
    description: "長く働ける環境",
  },
  {
    value: 85,
    unit: "%",
    label: "有給取得率",
    description: "休みやすい職場",
  },
  {
    value: 70,
    unit: "%",
    label: "未経験入社",
    description: "充実の研修制度",
  },
];

export const members = [
  {
    id: "yamamoto",
    name: "山本 美咲",
    nameKana: "ヤマモト ミサキ",
    age: 26,
    joinYear: 2022,
    yearsOfService: 3,
    position: "営業アシスタント",
    department: "営業部",
    previousJob: "アパレル販売員",
    photo: "/images/templates/story-type/member1.jpg",
    catchphrase: "「できない」が「できる」に変わる瞬間が嬉しい",
    interview: {
      reason: "前職では立ち仕事が多く、体力的に限界を感じていました。事務の仕事を探していた時に、未経験OKで研修制度が充実しているこの会社を見つけました。面接での雰囲気がとても良く、ここなら長く働けそうだと思いました。",
      anxiety: "パソコンが苦手だったので、事務仕事ができるか不安でした。専門用語も全く分からなかったので、お客様の電話対応ができるか心配でした。",
      reality: "最初の3ヶ月は先輩がマンツーマンで教えてくれて、分からないことは何度でも聞ける環境でした。今ではExcelで見積書を作れるようになり、お客様とも普通に会話できます。",
      rewarding: "お客様から「ありがとう」と言われた時や、営業の方から「助かったよ」と言われた時は本当に嬉しいです。自分の仕事が誰かの役に立っていると実感できます。",
      failure: "入社半年頃、急ぎの見積書の単位を間違えてしまいました。先輩がすぐにフォローしてくれて大事には至りませんでしたが、確認の大切さを学びました。",
      growth: "タイピングが速くなったのはもちろん、電話対応に自信が持てるようになりました。最近は後輩に教えることも増えて、自分も成長したなと感じます。",
      atmosphere: "みんな優しくて、困った時は誰かが必ず声をかけてくれます。お昼は女性社員でおしゃべりしながら食べることが多いです。年齢関係なく話しやすい雰囲気です。",
      message: "未経験でも大丈夫です！私も最初は不安でしたが、周りのサポートのおかげで今はやりがいを持って働けています。一緒に働けることを楽しみにしています。",
    },
    schedule: [
      { time: "08:30", activity: "出社・メールチェック・今日の予定確認" },
      { time: "09:00", activity: "電話対応・来客対応" },
      { time: "10:00", activity: "見積書・請求書の作成" },
      { time: "12:00", activity: "昼休憩（社員食堂または外出）" },
      { time: "13:00", activity: "データ入力・書類整理" },
      { time: "15:00", activity: "営業部のサポート業務" },
      { time: "17:00", activity: "明日の準備・退社" },
    ],
  },
  {
    id: "suzuki",
    name: "鈴木 大輔",
    nameKana: "スズキ ダイスケ",
    age: 32,
    joinYear: 2018,
    yearsOfService: 7,
    position: "施工管理",
    department: "工事部",
    previousJob: "飲食店店長",
    photo: "/images/templates/story-type/member2.jpg",
    catchphrase: "現場を動かす面白さにハマりました",
    interview: {
      reason: "飲食業界から転職を考えていた時、手に職をつけたいと思いました。施工管理は未経験でもチャレンジできて、資格も取得できると聞いて興味を持ちました。",
      anxiety: "建築の知識がゼロだったので、現場で通用するか不安でした。体力面も心配でしたが、前職での経験が意外と活きています。",
      reality: "最初は先輩について現場を回りながら覚えていきました。2年目から徐々に現場を任されるようになり、今では複数の現場を並行して担当しています。",
      rewarding: "工事が完了して、お客様に「きれいになったね」と言っていただける瞬間が最高です。形として残る仕事なので、達成感があります。",
      failure: "資材の発注ミスで工期が遅れそうになったことがあります。その時は協力会社さんに助けてもらいました。以来、確認作業は必ずダブルチェックしています。",
      growth: "入社3年目で2級管工事施工管理技士の資格を取得できました。会社が費用を負担してくれて、勉強会もサポートしてもらえたおかげです。",
      atmosphere: "現場仕事なので、チームワークが大切です。困った時は協力会社さんも含めてみんなで解決策を考えます。飲み会も適度にあって、仲は良いですよ。",
      message: "異業種からの転職でも全然大丈夫です。やる気さえあれば、会社がしっかりサポートしてくれます。一緒に現場を動かしましょう！",
    },
    schedule: [
      { time: "07:30", activity: "現場到着・朝礼・作業指示" },
      { time: "08:00", activity: "現場巡回・作業確認" },
      { time: "10:00", activity: "打ち合わせ・資材確認" },
      { time: "12:00", activity: "昼休憩" },
      { time: "13:00", activity: "午後の作業確認・安全管理" },
      { time: "15:00", activity: "書類作成・報告書作成" },
      { time: "17:00", activity: "現場終礼・翌日の準備" },
      { time: "18:00", activity: "帰社・退社" },
    ],
  },
  {
    id: "ito",
    name: "伊藤 恵理",
    nameKana: "イトウ エリ",
    age: 29,
    joinYear: 2020,
    yearsOfService: 5,
    position: "総務・人事",
    department: "管理部",
    previousJob: "新卒入社",
    photo: "/images/templates/story-type/member3.jpg",
    catchphrase: "社員みんなが働きやすい環境を作りたい",
    interview: {
      reason: "大学で経営学を学んでいて、人事の仕事に興味がありました。説明会で社員の方が楽しそうに話しているのを見て、この会社で働きたいと思いました。",
      anxiety: "新卒なので社会人としてやっていけるか不安でした。特に電話対応やビジネスマナーが心配でしたが、先輩方が丁寧に教えてくれました。",
      reality: "想像以上に幅広い業務を任せてもらえています。採用活動、給与計算、社内イベントの企画など、毎日違う仕事があって飽きません。",
      rewarding: "自分が採用に関わった新入社員が活躍しているのを見ると嬉しいです。社員から「働きやすくなった」と言われることもやりがいです。",
      failure: "給与計算でミスをしてしまい、先輩に迷惑をかけたことがあります。それ以来、重要な業務は必ずチェックリストを使うようにしています。",
      growth: "入社当初は指示されたことをこなすだけでしたが、今は自分から改善提案ができるようになりました。社会保険労務士の資格取得に向けて勉強中です。",
      atmosphere: "部署を超えて仲が良いです。社員旅行や忘年会では普段話さない人とも交流できます。相談しやすい雰囲気があって、働きやすいです。",
      message: "成長したいという気持ちがあれば、会社がしっかり応援してくれます。一緒に会社をより良くしていく仲間をお待ちしています！",
    },
    schedule: [
      { time: "08:30", activity: "出社・メールチェック・スケジュール確認" },
      { time: "09:00", activity: "採用関連業務（書類選考・面接調整）" },
      { time: "11:00", activity: "給与・勤怠データの確認" },
      { time: "12:00", activity: "昼休憩" },
      { time: "13:00", activity: "社内研修の準備・資料作成" },
      { time: "15:00", activity: "社員からの相談対応" },
      { time: "16:30", activity: "翌日の準備・退社" },
    ],
  },
];

export const jobs = [
  {
    id: "construction-manager",
    title: "施工管理スタッフ",
    type: "正社員",
    salary: {
      min: 230000,
      max: 350000,
      unit: "月給",
      note: "経験・能力を考慮の上、決定します",
    },
    location: company.address.city,
    description: "環境設備（空調・給排水・電気）の施工現場管理をお任せします。",
    details: [
      "工程管理：作業スケジュールの作成・進捗管理",
      "品質管理：施工品質のチェック・検査立会い",
      "安全管理：現場の安全確保・作業員への指導",
      "原価管理：資材発注・コスト管理",
      "協力会社との調整・打ち合わせ",
    ],
    requirements: {
      required: ["普通自動車免許（AT限定可）", "高校卒業以上"],
      preferred: ["施工管理経験", "管工事施工管理技士資格"],
      welcome: ["未経験者歓迎", "第二新卒歓迎", "異業種からの転職歓迎"],
    },
    workingHours: {
      start: "08:00",
      end: "17:00",
      break: 60,
      overtime: "月平均20時間程度",
    },
    holidays: {
      type: "週休2日制",
      days: ["土曜", "日曜", "祝日"],
      annual: 120,
      others: ["年末年始", "夏季休暇", "慶弔休暇", "有給休暇"],
    },
    benefits: [
      "社会保険完備",
      "交通費全額支給",
      "資格取得支援制度",
      "退職金制度",
      "社用車貸与",
      "制服貸与",
    ],
    selectionProcess: [
      { step: 1, title: "応募", description: "Webまたはお電話にてご応募ください" },
      { step: 2, title: "書類選考", description: "履歴書・職務経歴書をご提出ください" },
      { step: 3, title: "面接（1〜2回）", description: "現場見学も可能です" },
      { step: 4, title: "内定", description: "入社日はご相談に応じます" },
    ],
    appeal: "未経験から施工管理のプロへ！資格取得を全面サポートします。",
  },
  {
    id: "sales-support",
    title: "営業サポート",
    type: "正社員",
    salary: {
      min: 200000,
      max: 280000,
      unit: "月給",
      note: "経験・能力を考慮の上、決定します",
    },
    location: company.address.city,
    description: "営業部門のバックオフィス業務全般をお任せします。",
    details: [
      "見積書・請求書の作成",
      "電話・メール対応",
      "来客対応",
      "データ入力・書類整理",
      "営業資料の作成補助",
    ],
    requirements: {
      required: ["高校卒業以上", "基本的なPCスキル（Word・Excel）"],
      preferred: ["事務経験", "営業事務経験"],
      welcome: ["未経験者歓迎", "第二新卒歓迎", "ブランクOK"],
    },
    workingHours: {
      start: "08:30",
      end: "17:30",
      break: 60,
      overtime: "月平均10時間程度",
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
      "資格取得支援制度",
      "退職金制度",
      "時短勤務制度",
      "育児・介護休暇",
    ],
    selectionProcess: [
      { step: 1, title: "応募", description: "Webまたはお電話にてご応募ください" },
      { step: 2, title: "書類選考", description: "履歴書をご提出ください" },
      { step: 3, title: "面接（1回）", description: "職場見学も可能です" },
      { step: 4, title: "内定", description: "入社日はご相談に応じます" },
    ],
    appeal: "残業少なめ！プライベートと両立しやすい環境です。",
  },
];

export const benefits = {
  vacation: [
    { name: "年間休日120日以上", description: "完全週休2日制（土日祝）" },
    { name: "有給休暇", description: "入社半年後10日付与、取得率85%" },
    { name: "慶弔休暇", description: "結婚・出産・忌引など" },
    { name: "育児・介護休暇", description: "取得実績あり" },
    { name: "リフレッシュ休暇", description: "勤続5年ごとに3日付与" },
  ],
  allowances: [
    { name: "交通費全額支給", description: "上限なし" },
    { name: "住宅手当", description: "月15,000円（条件あり）" },
    { name: "家族手当", description: "配偶者10,000円、子1人5,000円" },
    { name: "資格手当", description: "保有資格に応じて支給" },
    { name: "残業手当", description: "1分単位で全額支給" },
  ],
  insurance: [
    { name: "健康保険", description: "協会けんぽ加入" },
    { name: "厚生年金", description: "加入" },
    { name: "雇用保険", description: "加入" },
    { name: "労災保険", description: "加入" },
    { name: "退職金制度", description: "勤続3年以上" },
  ],
  others: [
    { name: "社員旅行", description: "年1回（参加自由）" },
    { name: "忘年会・歓迎会", description: "会社負担" },
    { name: "制服貸与", description: "作業服・安全靴など" },
    { name: "社員割引", description: "自社サービス20%オフ" },
    { name: "健康診断", description: "年1回、人間ドック補助あり" },
  ],
};

export const training = {
  steps: [
    {
      step: 1,
      title: "入社時研修",
      duration: "5日間",
      description: "会社概要、ビジネスマナー、安全教育、業務の基礎知識を学びます。",
      contents: ["会社概要・理念", "ビジネスマナー", "安全教育", "業界知識の基礎"],
    },
    {
      step: 2,
      title: "OJT研修",
      duration: "3ヶ月",
      description: "先輩社員とのマンツーマン指導で、実務を覚えていきます。",
      contents: ["先輩とのペアワーク", "現場同行", "実務の習得", "定期的な面談"],
    },
    {
      step: 3,
      title: "フォローアップ研修",
      duration: "入社6ヶ月後",
      description: "これまでの振り返りと、今後の目標設定を行います。",
      contents: ["業務の振り返り", "課題の整理", "目標設定", "先輩社員との交流"],
    },
    {
      step: 4,
      title: "継続的なスキルアップ",
      duration: "通年",
      description: "資格取得支援、外部研修参加、社内勉強会を通じて成長をサポート。",
      contents: ["資格取得支援", "外部研修参加", "社内勉強会", "技術講習"],
    },
  ],
  certifications: [
    { name: "管工事施工管理技士", support: "受験費用・講座費用全額会社負担" },
    { name: "電気工事士", support: "受験費用・講座費用全額会社負担" },
    { name: "ボイラー技士", support: "受験費用全額会社負担" },
    { name: "その他業務関連資格", support: "個別相談" },
  ],
};

export const office = {
  name: "本社オフィス",
  description: "2016年に完成した本社ビル。明るく開放的な空間で、社員が快適に働ける環境を整えています。",
  features: [
    "自然光が入る明るい執務スペース",
    "リフレッシュルーム完備",
    "会議室3室",
    "駐車場完備（社員無料）",
    "最寄り駅から徒歩5分",
  ],
  images: [
    { src: "/images/templates/story-type/office-exterior.jpg", alt: "オフィス外観", caption: "本社ビル外観" },
    { src: "/images/templates/story-type/office-entrance.jpg", alt: "エントランス", caption: "明るいエントランス" },
    { src: "/images/templates/story-type/office-workspace.jpg", alt: "執務スペース", caption: "開放的な執務スペース" },
    { src: "/images/templates/story-type/office-meeting.jpg", alt: "会議室", caption: "会議室" },
    { src: "/images/templates/story-type/office-refresh.jpg", alt: "リフレッシュルーム", caption: "リフレッシュルーム" },
  ],
};

export const siteConfig = {
  siteName: `${company.name} 採用サイト`,
  siteDescription: `${company.name}の採用情報サイトです。${company.business}を行う当社で、一緒に働く仲間を募集しています。`,
  siteUrl: "https://recruit.greentech-example.co.jp",
  ogImage: "/images/og-image.jpg",
};
