
import Link from 'next/link';
import { Header, Footer } from '../_components/Layout';
import { specs, qualityFlow } from '@/data/leadgen-minimal/sample';

export default function LeadgenMinimalServicePage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <section className="bg-[var(--color-primary)] text-white py-24">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Service & Quality</h1>
                        <p className="text-xl opacity-80">加工技術・品質管理体制</p>
                    </div>
                </section>

                {/* Specs */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-12 border-l-4 border-[var(--color-accent)] pl-6">
                            加工技術詳細
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 text-gray-700">
                                        <th className="p-4 border-b border-gray-200">加工分類</th>
                                        <th className="p-4 border-b border-gray-200">対応サイズ・範囲</th>
                                        <th className="p-4 border-b border-gray-200">対応材質・特徴</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {specs.map((spec, index) => (
                                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="p-4 font-bold text-[var(--color-primary)]">{spec.name}</td>
                                            <td className="p-4 text-gray-600">{spec.range}</td>
                                            <td className="p-4 text-gray-600">{spec.material}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Quality Flow */}
                <section className="py-24 bg-[var(--color-bg-secondary)]">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-12 border-l-4 border-[var(--color-accent)] pl-6">
                            品質管理フロー
                        </h2>

                        <div className="relative">
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0" />
                            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                                {qualityFlow.map((flow, index) => (
                                    <div key={index} className="bg-white p-8 rounded-sm shadow-sm text-center">
                                        <div className="w-12 h-12 bg-[var(--color-accent)] text-white text-xl font-bold flex items-center justify-center rounded-full mx-auto mb-6">
                                            {flow.step}
                                        </div>
                                        <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">{flow.title}</h3>
                                        <p className="text-gray-600 text-sm">{flow.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="text-center mt-12 bg-white p-6 inline-block rounded-sm shadow-sm border border-gray-100 mx-auto w-full">
                            <p className="font-bold text-[var(--color-primary)]">
                                全数検査・成績書発行も対応可能です。<br />
                                航空宇宙・医療機器レベルの厳格な品質要求にもお応えします。
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-8 text-[var(--color-primary)]">まずはお気軽にご相談ください</h2>
                        <Link
                            href="/templates/leadgen-minimal/contact"
                            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white px-12 py-4 rounded-sm font-bold shadow-lg transition-all"
                        >
                            無料見積もり依頼
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
