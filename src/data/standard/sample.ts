
export const company = {
    name: "三河精密工業株式会社",
    nameKana: "ミカワセイミツコウギョウ",
    nameEn: "Mikawa Precision Industry Co., Ltd.",
    established: "1973年",
    establishedYear: 1973,
    representative: "代表取締役 伊藤 正樹",
    capital: "5,000万円",
    employees: 68,
    address: "〒444-0802 愛知県岡崎市美合町字並松1-23",
    phone: "0564-52-3456",
    email: "info@mikawa-seimitsu.co.jp",
    business: "精密金属部品加工（NC旋盤、マシニング、複合加工）",
    businessDescription: "自動車部品を中心とした精密金属加工。±0.005mmの高精度加工と最短3日の短納期対応で、お客様のモノづくりをサポートします。",
    certifications: ["ISO9001:2015取得", "エコアクション21認証"],
    catchphrase: "0.005mmの約束。",
    subCatchphrase: "精密加工52年。困った時の、三河精密。",
    strengths: [
        {
            title: "±0.005mmの精度",
            description: "三次元測定機による全数検査で品質を保証。ミクロン単位のオーダーに応えます。",
            icon: "Scale"
        },
        {
            title: "最短3日のスピード",
            description: "独自の工程管理システムにより、見積もりから納品までをスピーディーに。",
            icon: "Zap"
        },
        {
            title: "他社お断り案件歓迎",
            description: "最新の複合加工機と52年のノウハウで、難形状の加工も実現します。",
            icon: "Award"
        }
    ]
};

export const navigation = [
    { href: "/templates/standard", label: "HOME" },
    { href: "/templates/standard/about", label: "会社概要" },
    { href: "/templates/standard/service", label: "事業案内" },
    { href: "/templates/standard/equipment", label: "設備紹介" },
    { href: "/templates/standard/recruit", label: "採用情報" },
    { href: "/templates/standard/contact", label: "お問い合わせ" },
];

export const services = [
    {
        title: "NC旋盤加工",
        description: "φ10〜φ300までの丸物加工に対応。試作から量産まで柔軟に対応します。",
        image: "/images/templates/standard/service_lathe.jpg",
        features: ["小径から大径まで", "高硬度材対応", "複雑形状"]
    },
    {
        title: "マシニング加工",
        description: "複雑な3次元形状も高精度に加工。アルミ、ステンレス、チタンなど難削材も可能です。",
        image: "/images/templates/standard/service_machining.jpg",
        features: ["5軸加工", "精密穴あけ", "3D形状"]
    },
    {
        title: "複合加工",
        description: "旋盤とマシニングの工程を1台で完結。工程集約により、高精度・短納期・低コストを実現。",
        image: "/images/templates/standard/service_multi.jpg",
        features: ["工程集約", "リードタイム短縮", "高精度保証"]
    }
];

export const news = [
    {
        date: "2024.01.15",
        category: "お知らせ",
        title: "最新の5軸制御マシニングセンタを導入しました"
    },
    {
        date: "2023.12.20",
        category: "お知らせ",
        title: "年末年始休業のお知らせ"
    },
    {
        date: "2023.11.10",
        category: "採用情報",
        title: "2025年度新卒採用のエントリー受付を開始しました"
    }
];

export const recruit = {
    message: {
        title: "一緒に、ミクロンに挑む仲間を。",
        body: "三河精密工業は、創業以来52年間、技術の継承と革新を大切にしてきました。\n最新の機械があっても、それを使いこなすのは「人」です。\n私たちは、社員一人ひとりの成長が会社の成長につながると信じています。\n未経験からプロフェッショナルへ。私たちと一緒に、ミクロンの世界に挑戦しませんか。"
    },
    stats: [
        { label: "月平均残業時間", value: "15時間", unit: "" },
        { label: "有給休暇取得率", value: "85%", unit: "" },
        { label: "文系出身比率", value: "60%", unit: "" },
        { label: "平均勤続年数", value: "12年", unit: "" }
    ],
    members: [
        {
            name: "田村 健太",
            position: "製造部 / 入社3年目",
            image: "/images/templates/standard/member_tamura.jpg",
            message: "未経験でしたが、先輩が手取り足取り教えてくれました。今は自分の作った部品が車に使われているのが誇りです。"
        },
        {
            name: "佐々木 由美",
            position: "総務部 / 入社5年目",
            image: "/images/templates/standard/member_sasaki.jpg",
            message: "子育ての急な用事でも、みんなで助け合う風土があります。女性が働きやすい環境が整っていると感じます。"
        },
        {
            name: "山本 剛",
            position: "製造部長 / 入社18年目",
            image: "/images/templates/standard/member_yamamoto.jpg",
            message: "失敗を恐れずに挑戦してほしい。私たちが全力でサポートします。一緒に「世界一の品質」を目指しましょう。"
        }
    ]
};
