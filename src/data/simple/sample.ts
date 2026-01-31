// 株式会社シンプル - シンプル型サンプルデータ

export const company = {
  name: "株式会社シンプル",
  nameKana: "シンプル",
  nameEn: "SIMPLE Inc.",
  tagline: "シンプルに、本質を。",
  description: "私たちは、複雑な課題をシンプルなソリューションで解決するコンサルティング会社です。創業以来、クライアントのビジネスに寄り添い、持続的な成長を支援してきました。",
  established: "2018年4月",
  establishedYear: 2018,
  employees: 28,
  capital: "3,000万円",
  ceo: {
    name: "木村 誠一",
    nameKana: "キムラ セイイチ",
    title: "代表取締役",
  },
  business: "経営コンサルティング",
  businessDescription: "中小企業を中心に、経営戦略の立案から実行支援まで一貫してサポート。DX推進、業務改善、組織開発など幅広い領域で成果を上げています。",
  address: {
    full: "東京都千代田区丸の内1-1-1",
    prefecture: "東京都",
    city: "千代田区",
    street: "丸の内1-1-1",
    building: "シンプルビル 5F",
    postalCode: "100-0005",
  },
  phone: "03-XXXX-XXXX",
  email: "recruit@simple-example.co.jp",
  website: "https://simple-example.co.jp",
  color: {
    primary: "#424242",
    accent: "#000000",
  },
};

// 会社の基本情報（リスト形式）
export const companyInfo = [
  { label: "設立", value: "2018年4月" },
  { label: "従業員数", value: "28名" },
  { label: "所在地", value: "東京都千代田区" },
  { label: "事業内容", value: "経営コンサルティング" },
];

// 募集職種
export const jobs = [
  {
    id: "consultant",
    title: "コンサルタント",
    type: "正社員",
    location: "東京",
    salary: "年収400万円〜700万円",
    description: "クライアント企業の経営課題を分析し、解決策を立案・実行支援します。未経験から挑戦できる環境です。",
    requirements: [
      "大卒以上",
      "論理的思考力のある方",
      "コミュニケーション能力のある方",
    ],
    preferred: [
      "コンサルティング経験",
      "事業会社での企画・経営経験",
      "MBA保有者",
    ],
    workingHours: "9:00〜18:00（休憩1時間）",
    holidays: "完全週休2日制（土日祝）、年間休日125日",
    benefits: [
      "社会保険完備",
      "交通費全額支給",
      "書籍購入補助",
      "資格取得支援",
      "リモートワーク可",
    ],
  },
  {
    id: "analyst",
    title: "データアナリスト",
    type: "正社員",
    location: "東京",
    salary: "年収450万円〜800万円",
    description: "クライアントのデータを分析し、意思決定に必要なインサイトを提供します。",
    requirements: [
      "大卒以上",
      "Excel/SQLの基本操作",
      "統計の基礎知識",
    ],
    preferred: [
      "Python/Rでの分析経験",
      "BIツール使用経験",
      "機械学習の知識",
    ],
    workingHours: "9:00〜18:00（休憩1時間）",
    holidays: "完全週休2日制（土日祝）、年間休日125日",
    benefits: [
      "社会保険完備",
      "交通費全額支給",
      "資格取得支援",
      "フルリモート可",
      "副業OK",
    ],
  },
  {
    id: "assistant",
    title: "コンサルタントアシスタント",
    type: "正社員",
    location: "東京",
    salary: "年収350万円〜500万円",
    description: "コンサルタントのサポート業務を担当。資料作成、リサーチ、クライアント対応など幅広く経験できます。",
    requirements: [
      "大卒以上",
      "基本的なPCスキル",
      "事務経験1年以上",
    ],
    preferred: [
      "秘書・アシスタント経験",
      "英語力",
      "調査・リサーチ経験",
    ],
    workingHours: "9:00〜18:00（休憩1時間）",
    holidays: "完全週休2日制（土日祝）、年間休日125日",
    benefits: [
      "社会保険完備",
      "交通費全額支給",
      "時短勤務可",
      "育児・介護支援制度",
    ],
  },
];

// 福利厚生
export const benefits = [
  { label: "年間休日", value: "125日" },
  { label: "有給休暇", value: "入社半年後10日" },
  { label: "リモートワーク", value: "週3日まで可" },
  { label: "フレックス", value: "コアタイム10:00-15:00" },
  { label: "社会保険", value: "完備" },
  { label: "交通費", value: "全額支給" },
  { label: "書籍購入", value: "月1万円まで補助" },
  { label: "資格取得", value: "費用全額負担" },
];

// よくある質問
export const faqs = [
  {
    question: "未経験でも応募できますか？",
    answer: "はい、コンサルタント職は未経験歓迎です。入社後3ヶ月の研修と、先輩によるOJTで基礎から学べます。",
  },
  {
    question: "選考期間はどのくらいですか？",
    answer: "応募から内定まで約2〜3週間です。書類選考→1次面接→最終面接の流れです。",
  },
  {
    question: "リモートワークはできますか？",
    answer: "はい、週3日までリモートワーク可能です。チームやプロジェクトにより調整しています。",
  },
  {
    question: "残業はどのくらいありますか？",
    answer: "月平均15〜20時間程度です。繁忙期は増えることもありますが、36協定を遵守しています。",
  },
  {
    question: "服装の規定はありますか？",
    answer: "社内はカジュアルOK。クライアント訪問時はビジネスカジュアル以上を推奨しています。",
  },
];

// 代表メッセージ
export const ceoMessage = {
  name: "木村 誠一",
  title: "代表取締役",
  message: `私たちは「シンプルに、本質を」という理念のもと、
クライアントの課題解決に取り組んでいます。

複雑な問題を、分かりやすく整理し、
実行可能な解決策に落とし込む。
それが私たちの仕事です。

一緒に成長できる仲間を募集しています。
お会いできることを楽しみにしています。`,
};

// サイト設定
export const siteConfig = {
  siteName: `${company.name} 採用サイト`,
  siteDescription: `${company.name}の採用情報サイトです。コンサルタント、アナリストを募集しています。`,
  siteUrl: "https://recruit.simple-example.co.jp",
  ogImage: "/images/templates/simple/og-image.jpg",
};
