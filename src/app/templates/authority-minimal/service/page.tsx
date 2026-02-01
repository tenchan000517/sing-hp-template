
import Link from 'next/link';
import { Header, Footer } from '../_components/Layout';
import { specs, qualityFlow, orderFlow, faq } from '@/data/authority-minimal/sample';

export default function ServicePage() {
    return (
        <>
            <Header />
            <main className="pt-20 bg-[var(--color-bg-secondary)] min-h-screen">
                {/* Page Title */}
                <div className="bg-[var(--color-primary)] text-white py-20">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl font-bold mb-4">サービス・事業内容</h1>
                        <p className="opacity-80">創業52年の確かな技術と信頼</p>
                    </div>
                </div>

                <div className="container mx-auto px-6 py-16 space-y-24">
                    {/* Section 1: Overview */}
                    <section className="bg-white p-10 md:p-16 rounded-sm shadow-sm max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-8">三河精密の加工技術</h2>
                        <p className="text-lg text-gray-700 leading-loose">
                            NC旋盤、マシニングセンタ、複合加工機。多彩な設備と50年のノウハウで、あらゆる金属加工ニーズにワンストップでお応えします。試作開発から量産まで、お客様の「作りたい」をカタチにします。
                        </p>
                    </section>

                    {/* Section 2: Specs (Table) */}
                    <section className="max-w-5xl mx-auto">
                        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-8 border-l-4 border-[var(--color-accent)] pl-4">対応可能範囲</h2>
                        <div className="bg-white rounded-sm overflow-hidden border border-gray-200">
                            <table className="w-full text-left">
                                <tbody>
                                    {specs.map((spec, index) => (
                                        <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                                            <th className="py-6 px-6 md:px-10 bg-gray-50 font-bold text-[var(--color-primary)] w-1/3 md:w-1/4 align-top">{spec.label}</th>
                                            <td className="py-6 px-6 md:px-10 text-gray-700 leading-relaxed">{spec.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Section 3: Quality Flow */}
                    <section className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-12 border-l-4 border-[var(--color-accent)] pl-4">不良品ゼロへの挑戦</h2>

                        <div className="grid md:grid-cols-4 gap-8">
                            {qualityFlow.map((flow, index) => (
                                <div key={flow.step} className="bg-white p-8 relative pt-12 group">
                                    <div className="absolute top-0 left-0 bg-[var(--color-primary)] text-white font-bold px-4 py-2 text-sm z-10">Step 0{flow.step}</div>
                                    {index < qualityFlow.length - 1 && (
                                        <div className="hidden md:block absolute top-16 -right-6 w-12 h-[2px] bg-gray-300 z-0" />
                                    )}
                                    <h3 className="text-lg font-bold text-[var(--color-primary)] mb-4">{flow.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{flow.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 bg-white p-8 md:flex gap-8 items-center border-l-4 border-[var(--color-accent)]">
                            <div className="w-full md:w-1/3 aspect-video bg-gray-200 shrink-0">
                                {/* Image Placeholder: Quality */}
                                <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold">Image: Quality Control</div>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-[var(--color-primary)]">三次元測定機による徹底した品質管理</h4>
                                <p className="text-gray-600">最新の三次元測定機を導入し、複雑な形状の部品も正確に測定。データに基づいた品質保証体制を確立しています。</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Order Flow */}
                    <section className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-12 border-l-4 border-[var(--color-accent)] pl-4">ご依頼の流れ</h2>
                        <div className="space-y-6">
                            {orderFlow.map((flow) => (
                                <div key={flow.step} className="flex gap-6 items-start p-6 bg-white border border-gray-100 rounded-sm">
                                    <div className="flex flex-col items-center gap-2 pt-1">
                                        <span className="text-[var(--color-accent)] font-bold text-xl">0{flow.step}</span>
                                        <div className="w-[1px] h-full bg-[var(--color-accent)] opacity-30 min-h-[20px]" />
                                    </div>
                                    <div className="pb-4">
                                        <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">{flow.title}</h3>
                                        <p className="text-gray-600">{flow.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <Link href="/templates/authority-minimal/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white px-12 py-4 rounded-sm font-bold text-lg transition-colors">
                                お見積り・ご相談はこちら
                            </Link>
                        </div>
                    </section>

                    {/* Section 5: FAQ */}
                    <section id="qa" className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-12 border-l-4 border-[var(--color-accent)] pl-4">よくある質問</h2>
                        <div className="space-y-4">
                            {faq.map((item) => (
                                <details key={item.id} className="bg-white border border-gray-100 rounded-sm group">
                                    <summary className="flex justify-between items-center cursor-pointer p-6 font-bold text-[var(--color-primary)] hover:bg-gray-50 transition-colors">
                                        <span className="pr-4">{item.question}</span>
                                        <span className="text-[var(--color-accent)] text-xl group-open:rotate-45 transition-transform">+</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                        {item.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
