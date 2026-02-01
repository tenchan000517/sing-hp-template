
export const company = {
  name: "三河精密工業株式会社",
  representative: "伊藤 正樹",
  representativeTitle: "代表取締役",
  founded: "1973年",
  foundedYears: 52,
  address: "〒444-0802 愛知県岡崎市美合町字並松1-23",
  tel: "0564-52-3456",
  email: "info@mikawa-seimitsu.co.jp",
  business: "精密金属部品加工 (NC旋盤・マシニング複合加工)",
  certification: ["ISO9001 (2005年取得)", "大手自動車部品メーカー認定サプライヤー"],
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26135.53982465384!2d137.1583!3d34.9256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004990000000001%3A0x0!2z5LiJ5rKz57K-5a-G5bel5qWt!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp", // Placeholder map
};

export const problems = [
  {
    id: 1,
    text: "他社で『その精度は出せない』と断られた",
  },
  {
    id: 2,
    text: "試作1個だけ頼みたいが、嫌がられる",
  },
  {
    id: 3,
    text: "来週までに部品が必要なのに、どこも満杯",
  },
  {
    id: 4,
    text: "今の工場の品質が安定せず困っている",
  },
];

export const strengths = [
  {
    id: 1,
    title: "±0.005mmの超精密加工",
    description: "恒温室完備、三次元測定機による全数検査体制。ミクロン単位の公差要求にも、熟練の技と最新設備で確実にお応えします。",
    image: "/images/templates/authority-minimal/strength-precision.jpg",
  },
  {
    id: 2,
    title: "最短3日の特急対応",
    description: "『ラインを止めるな』その重みを理解しています。独自の工程管理とスタッフの連携で、緊急の試作・修正もスピーディーに対応します。",
    image: "/images/templates/authority-minimal/strength-speed.jpg",
  },
  {
    id: 3,
    title: "1個からの小ロット・試作歓迎",
    description: "大手が嫌がる小ロットこそ、技術力の見せ所。量産前の試作から、一品ものの治具製作まで、遠慮なくご相談ください。",
    image: "/images/templates/authority-minimal/strength-lot.jpg",
  },
];

export const works = [
  {
    id: 1,
    title: "自動車エンジン部品",
    material: "S45C",
    process: "NC旋盤 + マシニング",
    image: "/images/templates/authority-minimal/work-01.jpg",
  },
  {
    id: 2,
    title: "油圧機器バルブ",
    material: "SUS304",
    process: "複合加工",
    image: "/images/templates/authority-minimal/work-02.jpg",
  },
  {
    id: 3,
    title: "半導体製造装置部品",
    material: "A5052",
    process: "マシニング",
    image: "/images/templates/authority-minimal/work-03.jpg",
  },
   {
    id: 4,
    title: "医療機器パーツ",
    material: "チタン",
    process: "複合加工",
    image: "/images/templates/authority-minimal/work-04.jpg",
  },
   {
    id: 5,
    title: "航空機用ブラケット",
    material: "A7075",
    process: "マシニング（5軸）",
    image: "/images/templates/authority-minimal/work-05.jpg",
  },
   {
    id: 6,
    title: "FA自動機部品",
    material: "SS400",
    process: "NC旋盤",
    image: "/images/templates/authority-minimal/work-06.jpg",
  },
];

export const recruitTeaser = {
  catch: "真面目に、コツコツ。でも、笑い声は絶えない。",
  text: "三河精密は、モノづくりが大好きな人たちの集まりです。未経験でも大丈夫。先輩たちが丁寧に教えます。冷暖房完備の快適なこの場所で、一生モノの技術を身につけませんか？",
  image: "/images/templates/authority-minimal/recruit-bg.jpg",
};

export const specs = [
  { label: "加工分類", value: "精密部品切削加工、試作加工、治具製作" },
  { label: "対応材質", value: "鉄（SS400, S45C, SCM, SKD等）、ステンレス（SUS303, 304, 316, 430等）、アルミ（A5052, A2017, A7075等）、真鍮、銅、樹脂（POM, MCナイロン等）" },
  { label: "加工サイズ", value: "φ2 〜 φ300mm / 角物 □500mmまで" },
  { label: "ロット数", value: "1個 〜 3,000個/月" },
];

export const qualityFlow = [
  { step: 1, title: "工程内検査", description: "加工ごとの寸法チェック" },
  { step: 2, title: "ダブルチェック", description: "別担当者による確認" },
  { step: 3, title: "最終全数検査", description: "三次元測定機などを用いた出荷前検査" },
  { step: 4, title: "検査表添付", description: "ご要望に応じた成績書の発行" },
];

export const orderFlow = [
  { step: 1, title: "お問い合わせ", description: "図面（PDF/DXF）をお送りください" },
  { step: 2, title: "お見積り", description: "原則24時間以内に回答します" },
  { step: 3, title: "ご発注", description: "納期を確認し、加工手配" },
  { step: 4, title: "加工・検査", description: "材料調達から検査まで" },
  { step: 5, title: "納品", description: "宅配便または自社便にてお届け" },
];

export const equipments = [
  {
    category: "NC旋盤",
    count: 15,
    models: "ヤマザキマザック QT-Compact 他",
    image: "/images/templates/authority-minimal/equip-nc-line.jpg",
  },
  {
    category: "マシニングセンタ",
    count: 8,
    models: "オークマ MB-46VA 他",
    image: "/images/templates/authority-minimal/equip-maching.jpg",
  },
  {
    category: "複合加工機",
    count: 3,
    models: "ヤマザキマザック INTEGREX",
    description: "工程集約により、高精度・短納期を実現",
  },
  {
    category: "検査設備",
    models: "三次元測定機（ミツトヨ）、画像寸法測定器、各種デジタルノギス・マイクロメーター",
  },
];

export const ceoMessage = {
  title: "良いモノを作る。ただそれだけに、50年。",
  text: [
    "創業以来、私たちはここ岡崎の地で、来る日も来る日も金属と向き合ってきました。",
    "派手なことはできません。しかし、頂いた図面通りのものを、納期通りに、確実に仕上げる。",
    "その当たり前の積み重ねが、今の三河精密を作っています。",
    "社員は家族です。彼らが安心して技術を磨ける環境を守ることが、私の仕事です。",
    "これからも、地域に愛され、お客様に頼られる町工場であり続けます。",
  ],
  name: "伊藤 正樹",
  image: "/images/templates/authority-minimal/ceo-portrait.jpg",
};

export const recruitConcept = {
  catch: "手に職を、心にゆとりを。",
  text: "三河精密は、『見て覚えろ』なんて言いません。未経験からでもプロになれる研修制度と、優しく教える先輩たちがいます。残業は少なく、休みはしっかり。プライベートも大切にしながら、日本のモノづくりを支える仕事をしませんか？",
};

export const infographics = [
  { label: "残業時間", value: "15", unit: "時間/月", description: "業界平均より圧倒的に少ない" },
  { label: "有給消化率", value: "85", unit: "%", description: "休みやすい環境" },
  { label: "平均勤続年数", value: "14.5", unit: "年", description: "居心地の良さの証明" },
  { label: "文系出身率", value: "60", unit: "%", description: "未経験でも安心" },
];

export const interviews = [
  {
    id: 1,
    name: "田村",
    role: "製造部・入社3年目",
    age: "21歳",
    background: "商業高校卒",
    catch: "工具の名前も知らなかった僕が、今では機械3台を任されています。",
    text: "最初は図面の読み方すら分かりませんでした。でも、先輩が機械の横で『ここはこう削るんだよ』と何度でも教えてくれて。初めて自分のプログラムで部品が完成した時の感動は忘れられません。",
    image: "/images/templates/authority-minimal/interview-tamura.jpg",
  },
  {
    id: 2,
    name: "佐々木",
    role: "総務部・入社5年目",
    age: "30代",
    background: "中途",
    catch: "子育てと両立できる、理解のある職場です。",
    text: "子供の急な熱でも『早く帰ってあげて』と快く送り出してくれる。そんな温かい職場です。製造の皆さんも優しくて、事務の私にも気さくに話しかけてくれます。",
    image: "/images/templates/authority-minimal/interview-sasaki.jpg",
  },
  {
    id: 3,
    name: "山本",
    role: "製造部長・勤続30年",
    age: "50代",
    background: "高卒",
    catch: "次の世代に、この技術を全部継承したい。",
    text: "私が若い頃に教わった技術と、最新のデジタル技術。その両方を若手に伝えていくのが私の使命です。三河精密の未来を作るのは、今の若い人たちですから。",
    image: "/images/templates/authority-minimal/interview-yamamoto.jpg",
  },
];

export const jobs = [
  {
    title: "NC旋盤オペレーター",
    type: "正社員",
    salary: "月給20万円〜40万円",
    description: "プログラミングから加工、検査まで。",
  },
  {
    title: "マシニングオペレーター",
    type: "正社員",
    salary: "月給20万円〜40万円",
    description: "多品種小ロットの精密部品加工。",
  },
  {
    title: "品質管理",
    type: "正社員",
    salary: "月給19万円〜35万円",
    description: "三次元測定機を用いた検査業務。",
  },
  {
    title: "一般事務",
    type: "正社員",
    salary: "月給18万円〜25万円",
    description: "電話応対、伝票整理、生産管理補助。",
  },
];

export const faq = [
  {
    id: 1,
    question: "見積もりはどのくらいで届きますか？",
    answer: "図面をお送りいただければ、原則24時間以内（1営業日以内）にお見積もりをご提出します。複雑な形状や特殊材質の場合は、確認のご連絡をさせていただくことがあります。",
  },
  {
    id: 2,
    question: "最小ロットは何個からですか？",
    answer: "1個から対応いたします。試作品や治具など、1個だけのご依頼も大歓迎です。「他社で断られた」という小ロット案件こそ、私たちの得意分野です。",
  },
  {
    id: 3,
    question: "どのような材質に対応していますか？",
    answer: "鉄（SS400、S45C、SCM、SKD等）、ステンレス（SUS303、304、316等）、アルミ（A5052、A2017、A7075等）、真鍮、銅、樹脂（POM、MCナイロン等）に対応しています。特殊材質もご相談ください。",
  },
  {
    id: 4,
    question: "図面がなくても相談できますか？",
    answer: "はい、可能です。現物やスケッチ、イメージ図からでもお見積もりいたします。「こんな部品が作りたい」というご相談から、一緒に形にしていきましょう。",
  },
  {
    id: 5,
    question: "納期はどのくらいですか？",
    answer: "通常2週間程度ですが、形状や数量により異なります。お急ぎの場合は最短3日での特急対応も可能ですので、まずはご相談ください。",
  },
];
