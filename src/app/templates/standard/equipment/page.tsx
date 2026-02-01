
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '../_components/Layout';

const equipmentList = [
    {
        category: "NC旋盤",
        items: [
            { name: "Mazak QTN-200", count: 5, specs: "最大加工径φ300mm" },
            { name: "Okuma LB3000", count: 3, specs: "Y軸付き" },
            { name: "Mori Seiki NL2500", count: 2, specs: "サブスピンドル付" },
        ]
    },
    {
        category: "マシニングセンタ",
        items: [
            { name: "Mazak VCN-530C", count: 4, specs: "X:1050 Y:530 Z:510" },
            { name: "Okuma MB-46VA", count: 2, specs: "高剛性仕様" },
            { name: "Fanuc Robodrill", count: 2, specs: "高速加工機" },
        ]
    },
    {
        category: "複合加工機",
        items: [
            { name: "Mazak INTEGREX i-200", count: 3, specs: "同時5軸加工" },
        ]
    },
    {
        category: "測定・検査機器",
        items: [
            { name: "三次元測定機 Mitutoyo Crysta-Apex", count: 2, specs: "精度 1.7µm" },
            { name: "画像寸法測定器 Keyence IM-7000", count: 1, specs: "" },
            { name: "表面粗さ測定機", count: 3, specs: "" },
        ]
    },
];

export default function EquipmentPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <div className="bg-[var(--color-bg-secondary)] py-12 md:py-20">
                    <div className="container mx-auto px-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">設備紹介</h1>
                        <p className="text-gray-600">高品質を生み出す最新の設備群</p>
                    </div>
                </div>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { image: '/images/templates/standard/generated/construction_wide.jpg', name: '建設現場' },
                                { image: '/images/templates/standard/generated/cad_operation.jpg', name: 'CAD設計' },
                                { image: '/images/templates/standard/generated/inspection_work.jpg', name: '品質検査' },
                                { image: '/images/templates/standard/generated/completed_building_sky.jpg', name: '完成建物' },
                                { image: '/images/templates/standard/generated/renovation_interior.jpg', name: 'リノベーション' },
                                { image: '/images/templates/standard/generated/project_house.jpg', name: '住宅建築' },
                            ].map((item, i) => (
                                <div key={i} className="aspect-[4/3] rounded relative overflow-hidden group">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                                        <p className="text-white text-sm font-bold">{item.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-[var(--color-bg-secondary)]">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-2xl font-bold mb-12 text-[var(--color-primary)] text-center">主要設備一覧</h2>

                        <div className="space-y-12">
                            {equipmentList.map((category, idx) => (
                                <div key={idx}>
                                    <h3 className="text-xl font-bold mb-6 border-l-4 border-[var(--color-accent)] pl-4 text-gray-800">
                                        {category.category}
                                    </h3>
                                    <div className="bg-white rounded shadow-sm overflow-hidden">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="bg-gray-50 border-b border-gray-100">
                                                <tr>
                                                    <th className="py-4 px-6 font-bold text-gray-600 text-sm">メーカー・機種名</th>
                                                    <th className="py-4 px-6 font-bold text-gray-600 text-sm w-24 text-center">台数</th>
                                                    <th className="py-4 px-6 font-bold text-gray-600 text-sm w-1/3">仕様・特徴</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {category.items.map((item, i) => (
                                                    <tr key={i} className="hover:bg-gray-50/50">
                                                        <td className="py-4 px-6 text-gray-800 font-medium">{item.name}</td>
                                                        <td className="py-4 px-6 text-gray-800 text-center">{item.count}</td>
                                                        <td className="py-4 px-6 text-gray-600 text-sm">{item.specs}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
