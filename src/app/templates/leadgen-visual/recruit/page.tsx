
import Link from 'next/link';
import { Header, Footer } from '../_components/Layout';
import { stats } from '@/data/leadgen-visual/sample';

export default function RecruitPage() {
    return (
        <>
            <Header />
            <main className="pt-20 lg:pt-32 pb-24 min-h-screen">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24 max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">RECRUIT</h1>
                        <p className="text-xl md:text-2xl font-bold leading-relaxed mb-12">
                            ミクロンを操る、<br />
                            <span className="text-[var(--color-accent)]">アーティスト</span>になろう。
                        </p>
                        <p className="text-gray-400 leading-loose">
                            私たちの仕事は、単なる作業ではありません。<br />
                            金属の塊から、コンマ数ミリの精度で「機能」を彫り出す。<br />
                            それはまさに、工業という名のアートです。
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 md:gap-12 mb-32 border-y border-white/10 py-12">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <p className="text-xs font-bold text-gray-500 mb-2 tracking-widest">{stat.label}</p>
                                <p className="text-3xl md:text-5xl font-bold text-[var(--color-accent)]">{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Interview Movies */}
                    <div className="grid md:grid-cols-2 gap-16 mb-32">
                        <div className="group cursor-pointer">
                            <div className="aspect-video bg-[var(--color-surface)] relative mb-6 overflow-hidden">
                                {/* Video Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-4xl group-hover:bg-white/5 transition-colors">
                                    ▶
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                                INTERVIEW 01
                            </h3>
                            <p className="text-gray-400">入社3年目 / 製造部 田村</p>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="aspect-video bg-[var(--color-surface)] relative mb-6 overflow-hidden">
                                {/* Video Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-4xl group-hover:bg-white/5 transition-colors">
                                    ▶
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                                INTERVIEW 02
                            </h3>
                            <p className="text-gray-400">製造部長 山本</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <Link
                            href="/templates/leadgen-visual/contact"
                            className="inline-block bg-[var(--color-accent)] text-black px-12 py-5 font-bold tracking-widest text-lg hover:shadow-[0_0_40px_var(--color-accent-glow)] transition-all rounded-sm"
                        >
                            ENTRY NOW
                        </Link>
                        <p className="mt-8 text-sm text-gray-500">工場見学・カジュアル面談も随時受付中</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
