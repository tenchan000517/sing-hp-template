
export const company = {
    name: "スカイリフォーム株式会社",
    representative: "山田 健一",
    representativeTitle: "代表取締役",
    founded: "2005年",
    foundedYears: 19,
    address: "〒460-0008 愛知県名古屋市中区栄3-15-33 栄ガスビル6F",
    tel: "052-265-8900",
    email: "info@sky-reform.co.jp",
    business: "住宅リフォーム全般（キッチン・浴室・トイレ・外壁・屋根・内装）",
    certification: ["建設業許可（愛知県知事許可 般-5 第12345号）", "住宅リフォーム事業者団体登録"],
};

export const hero = {
    catch: "暮らしを、もっと心地よく。",
    sub: "創業19年・施工実績5,000件以上。地域密着のリフォーム専門店。",
    cta: "無料見積もり・ご相談はこちら",
};

export const trustLogos = [
    { name: "建設業許可", image: "/images/templates/leadgen-minimal/logo-construction.png" },
    { name: "LIXIL認定店", image: "/images/templates/leadgen-minimal/logo-lixil.png" },
    { name: "TOTO認定店", image: "/images/templates/leadgen-minimal/logo-toto.png" },
];

export const solutions = [
    {
        titulo: "明朗会計、追加料金なし",
        detail: "見積もり金額が最終金額。工事中の追加請求は一切ありません。安心の定額パッケージもご用意。",
        icon: "Yen",
    },
    {
        titulo: "地域密着19年の信頼",
        detail: "名古屋市を中心に5,000件以上の施工実績。ご近所の口コミ・紹介が売上の70%を占めています。",
        icon: "Users",
    },
    {
        titulo: "職人品質を直接お届け",
        detail: "自社職人による一貫施工。中間マージンがないから、高品質をお手頃価格で実現します。",
        icon: "Hammer",
    },
];

export const works = [
    {
        id: 1,
        title: "キッチンリフォーム",
        spec: "名古屋市緑区 / 築25年マンション / 工期5日",
        image: "/images/templates/leadgen-minimal/work-kitchen.jpg",
    },
    {
        id: 2,
        title: "浴室リフォーム",
        spec: "名古屋市千種区 / 戸建て / ユニットバス交換",
        image: "/images/templates/leadgen-minimal/work-bath.jpg",
    },
    {
        id: 3,
        title: "外壁塗装・屋根工事",
        spec: "名古屋市名東区 / 築30年戸建て / 遮熱塗料使用",
        image: "/images/templates/leadgen-minimal/work-exterior.jpg",
    },
];

export const recruitBanner = {
    catch: "お客様の「ありがとう」がやりがいです。",
    data: [
        { label: "平均残業", value: "月10h以内" },
        { label: "有給取得率", value: "90%" },
    ],
    cta: "採用情報を見る",
};

export const specs = [
    { name: "キッチン・浴室・トイレ", range: "全メーカー対応", material: "LIXIL, TOTO, Panasonic, タカラスタンダード 他" },
    { name: "内装リフォーム", range: "壁紙・床・建具", material: "クロス張替え、フローリング、畳、障子 他" },
    { name: "外壁・屋根", range: "塗装・葺き替え", material: "シリコン、フッ素、遮熱塗料、ガルバリウム 他" },
];

export const qualityFlow = [
    { step: 1, title: "現地調査・ヒアリング", desc: "お悩みをじっくりお聞きします" },
    { step: 2, title: "詳細見積もり", desc: "材料費・工賃を明確にご提示" },
    { step: 3, title: "自社職人による施工", desc: "丁寧・迅速・きれいな仕上がり" },
    { step: 4, title: "完工検査・お引き渡し", desc: "最終チェック後、保証書発行" },
];

export const equipments = [
    { name: "施工対応エリア", model: "名古屋市全域、尾張・三河地区", count: 0 },
    { name: "自社職人", model: "内装・水回り・外装専門チーム", count: 25 },
    { name: "工事車両", model: "ハイエース・軽バン", count: 12 },
    { name: "アフターサポート", model: "最長10年保証・24時間緊急対応", count: 0 },
];

export const jobs = [
    { title: "リフォーム営業", type: "正社員", salary: "月給25万円〜 + インセンティブ" },
    { title: "施工スタッフ（内装）", type: "正社員", salary: "月給28万円〜" },
    { title: "施工スタッフ（水回り）", type: "正社員", salary: "月給28万円〜" },
];

export const companyInfo = [
    { label: "会社名", value: company.name },
    { label: "代表者", value: `${company.representativeTitle} ${company.representative}` },
    { label: "所在地", value: company.address },
    { label: "設立", value: company.founded },
    { label: "資本金", value: "3,000万円" },
    { label: "従業員数", value: "45名（職人25名含む）" },
    { label: "事業内容", value: company.business },
    { label: "許認可", value: company.certification.join(", ") },
];

export const ceoMessage = {
    title: "地域に根ざし、信頼を積み重ねる。",
    message: "創業以来、私たちは「お客様の立場で考える」ことを大切にしてきました。リフォームは、お客様の大切な住まいに手を入れる仕事。だからこそ、一軒一軒に真摯に向き合い、施工後も長くお付き合いできる関係を築いていきたい。「スカイリフォームに頼んでよかった」その言葉が、私たちの一番の喜びです。",
    image: "/images/templates/leadgen-minimal/ceo.jpg",
};

export const navigation = [
    { href: "/templates/leadgen-minimal", label: "ホーム" },
    { href: "/templates/leadgen-minimal/cases", label: "施工事例" },
    { href: "/templates/leadgen-minimal/equipment", label: "対応工事" },
    { href: "/templates/leadgen-minimal/company", label: "会社概要" },
    { href: "/templates/leadgen-minimal/recruit", label: "採用情報" },
    { href: "/templates/leadgen-minimal/contact", label: "お問い合わせ" },
];
