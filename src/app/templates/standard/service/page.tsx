
import Link from 'next/link';
import { Header, Footer } from '../_components/Layout';
import { services } from '@/data/standard/sample';

export default function ServicePage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <div className="bg-[var(--color-bg-secondary)] py-12 md:py-20">
                    <div className="container mx-auto px-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">事業案内</h1>
                        <p className="text-gray-600">三河精密の技術とサービス</p>
                    </div>
                </div>

                {/* Services List */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 space-y-24">
                        {services.map((service, index) => (
                            <div key={index} id={service.title} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="w-full md:w-1/2 aspect-video bg-gray-200 rounded relative overflow-hidden group">
                                    {/* Image Placeholder */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">
                                        {service.title} Image
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--color-primary)]">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-4">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-700">
                                                <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Capability Table */}
                <section className="py-24 bg-[var(--color-bg-secondary)]">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-2xl font-bold mb-12 text-[var(--color-primary)] text-center">加工対応範囲</h2>
                        <div className="bg-white rounded p-8 shadow-sm overflow-x-auto">
                            <table className="w-full min-w-[600px] text-left border-collapse">
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-gray-600 w-1/3 bg-gray-50">加工種類</th>
                                        <td className="py-4 px-6 text-gray-800">NC旋盤、マシニング、複合加工、研磨、ワイヤーカット</td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-gray-600 bg-gray-50">対応材質</th>
                                        <td className="py-4 px-6 text-gray-800">鉄（SS, S45C, Chromoly）、ステンレス（SUS303, 304, 316）、アルミ、真鍮、樹脂、チタン</td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-gray-600 bg-gray-50">加工サイズ</th>
                                        <td className="py-4 px-6 text-gray-800">φ10〜φ300mm（旋盤）、500×1000mm（マシニング）</td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-gray-600 bg-gray-50">対応ロット</th>
                                        <td className="py-4 px-6 text-gray-800">1個（試作）から月産10,000個（量産）まで</td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-gray-600 bg-gray-50">納期</th>
                                        <td className="py-4 px-6 text-gray-800">通常2週間〜（最短3日出荷の特急対応あり）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Quality Control Flow */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">品質管理体制</h2>
                            <p className="text-gray-600">不良品流出ゼロを目指す、徹底したチェック体制</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 relative">
                            {/* Process Steps */}
                            <div className="bg-white p-6 rounded border border-gray-200 text-center relative z-10">
                                <div className="text-4xl mb-4">👷</div>
                                <h3 className="font-bold mb-2">① 工程内検査</h3>
                                <p className="text-sm text-gray-600">各工程完了時に作業者自身が必ず寸法チェック。</p>
                            </div>
                            <div className="bg-white p-6 rounded border border-gray-200 text-center relative z-10">
                                <div className="text-4xl mb-4">👀</div>
                                <h3 className="font-bold mb-2">② ダブルチェック</h3>
                                <p className="text-sm text-gray-600">次工程の担当者が前工程の品質を再確認。</p>
                            </div>
                            <div className="bg-white p-6 rounded border border-gray-200 text-center relative z-10">
                                <div className="text-4xl mb-4">🔍</div>
                                <h3 className="font-bold mb-2">③ 全数検査</h3>
                                <p className="text-sm text-gray-600">出荷前に専任検査員が全製品を厳しくチェック。</p>
                            </div>
                            <div className="bg-white p-6 rounded border border-gray-200 text-center relative z-10">
                                <div className="text-4xl mb-4">📦</div>
                                <h3 className="font-bold mb-2">④ 出荷・梱包</h3>
                                <p className="text-sm text-gray-600">打痕や傷がつかないよう丁寧に梱包して出荷。</p>
                            </div>

                            {/* Arrow Line (Desktop only) */}
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-0"></div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-[var(--color-primary)] text-white text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">
                            その図面、三河精密ならカタチにできます。
                        </h2>
                        <Link
                            href="/templates/standard/contact"
                            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] px-10 py-4 rounded font-bold text-lg transition-colors"
                        >
                            加工の相談をする
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
