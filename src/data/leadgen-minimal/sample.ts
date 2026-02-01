
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
};

export const hero = {
    catch: "0.005mmの約束。",
    sub: "最短3日。困ったときの三河精密。",
    cta: "図面を送って見積もり依頼（無料）",
};

export const trustLogos = [
    { name: "ISO9001", image: "/images/templates/leadgen-minimal/logo-iso.png" },
    { name: "Partner A", image: "/images/templates/leadgen-minimal/partner-a.png" }, // Placeholder
    { name: "Partner B", image: "/images/templates/leadgen-minimal/partner-b.png" }, // Placeholder
];

export const solutions = [
    {
        titulo: "「他社お断り案件」歓迎",
        detail: "難加工、複合加工、小ロット。他社が敬遠する案件こそ、私たちの腕の見せ所です。",
        icon: "Megaphone", // Placeholder for logic
    },
    {
        titulo: "「超特急」対応",
        detail: "独自の工程管理システムにより、最短3日での納品を実現。ラインを止めさせません。",
        icon: "Clock",
    },
    {
        titulo: "「100%良品」保証",
        detail: "最新の三次元測定機による全数検査体制。不良品ゼロをお約束します。",
        icon: "CheckCircle",
    },
];

export const works = [
    {
        id: 1,
        title: "自動車エンジン部品",
        spec: "SUS304 / φ100 / 複合加工",
        image: "/images/templates/leadgen-minimal/work-car.jpg",
    },
    {
        id: 2,
        title: "半導体製造装置パーツ",
        spec: "A5052 / 精密マシニング",
        image: "/images/templates/leadgen-minimal/work-semi.jpg",
    },
    {
        id: 3,
        title: "航空機用ブラケット",
        spec: "Ti-6Al-4V / 5軸加工",
        image: "/images/templates/leadgen-minimal/work-aero.jpg",
    },
];

export const recruitBanner = {
    catch: "真面目に、コツコツ。一生モノの技術を。",
    data: [
        { label: "残業", value: "月15h以内" },
        { label: "有給消化率", value: "85%" },
    ],
    cta: "採用情報・エントリー",
};

export const specs = [
    { name: "NC旋盤加工", range: "φ2 〜 φ300mm", material: "鉄, ステンレス, アルミ, 真鍮" },
    { name: "マシニング加工", range: "X:1000 Y:500 Z:500", material: "全般, 難削材対応" },
    { name: "複合加工", range: "φ200まで", material: "複雑形状対応" },
];

export const qualityFlow = [
    { step: 1, title: "工程内検査", desc: "加工者による自主検査" },
    { step: 2, title: "中間検査", desc: "品質管理担当によるチェック" },
    { step: 3, title: "出荷前全数検査", desc: "三次元測定機を使用" },
];

export const equipments = [
    { name: "NC旋盤", model: "QT-Compact (Mazak)", count: 15 },
    { name: "マシニングセンタ", model: "MB-46VA (Okuma)", count: 8 },
    { name: "複合加工機", model: "INTEGREX (Mazak)", count: 3 },
    { name: "三次元測定機", model: "CRYSTA-Apex (Mitutoyo)", count: 1 },
];

export const jobs = [
    { title: "製造スタッフ (NC旋盤)", type: "正社員", salary: "月給22万円〜" },
    { title: "品質管理", type: "正社員", salary: "月給20万円〜" },
];

export const companyInfo = [
    { label: "会社名", value: company.name },
    { label: "代表者", value: `${company.representativeTitle} ${company.representative}` },
    { label: "所在地", value: company.address },
    { label: "設立", value: company.founded },
    { label: "認証", value: company.certification.join(", ") },
];
