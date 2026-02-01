
import Link from 'next/link';
import { Header, Footer } from './_components/Layout';
import { company, works } from '@/data/leadgen-visual/sample';

export default function LeadgenVisualPage() {
    return (
        <>
            <Header />
            <main className="pt-20">

                {/* Section 1: Cinematic Hero */}
                <section className="relative h-[calc(100vh-80px)] overflow-hidden flex items-center justify-center">
                    {/* Video Background Placeholder */}
                    <div className="absolute inset-0 bg-black z-0">
                        <div className="w-full h-full opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-[#0F172A] to-[#0F172A]"></div>
                        {/* Imagine a looping video of CNC machining here */}
                        <div className="absolute inset-0 flex items-center justify-center text-white/10 text-9xl font-bold tracking-tighter opacity-20 select-none">
                            0.005mm
                        </div>
                    </div>

                    <div className="relative z-10 text-center container mx-auto px-6">
                        <p className="text-[var(--color-accent)] font-bold tracking-[0.3em] mb-4 text-sm animate-fade-in-up">
                            {company.subCatchphrase}
                        </p>
                        <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-wide animate-fade-in-up delay-100">
                            美しさは、<br />
                            精度の証明。
                        </h1>

                        {/* Scroll Indicator */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                            <span className="text-[10px] tracking-widest">SCROLL</span>
                            <div className="w-px h-12 bg-[var(--color-accent)]"></div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Gallery of Works */}
                <section className="py-32 bg-[var(--color-bg-base)]">
                    <div className="container mx-auto px-6 mb-20 text-center">
                        <h2 className="text-3xl font-bold tracking-widest mb-4">WORKS</h2>
                        <p className="text-[var(--color-accent)] text-sm tracking-[0.2em]">工業芸術の結晶</p>
                    </div>

                    <div className="container mx-auto px-6">
                        <div className="flex flex-col gap-32">
                            {works.map((work, index) => (
                                <div key={work.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="w-full md:w-1/2 aspect-[4/3] relative group cursor-pointer">
                                        <div className="absolute inset-0 border border-white/10 transition-all duration-500 group-hover:inset-4 group-hover:border-[var(--color-accent)]"></div>
                                        <div className="absolute inset-2 bg-[var(--color-surface)] overflow-hidden">
                                            {/* Image Placeholder */}
                                            <div className="w-full h-full bg-black/20 hover:scale-110 transition-transform duration-700 flex items-center justify-center text-white/20 font-bold text-xl">
                                                Product Photo {work.id}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 md:px-12">
                                        <div className="text-[var(--color-accent)] font-bold text-xs tracking-widest mb-2">0{index + 1}</div>
                                        <h3 className="text-3xl font-bold mb-6 tracking-wide">{work.title}</h3>
                                        <p className="text-gray-400 leading-loose mb-8">
                                            {work.description}
                                        </p>
                                        <Link href="/templates/leadgen-visual/service" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest border-b border-[var(--color-accent)] pb-1 hover:text-[var(--color-accent)] transition-colors">
                                            VIEW DETAILS <span className="text-[var(--color-accent)]">→</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 3: About Movie (Text Overlay) */}
                <section className="relative py-40 overflow-hidden">
                    <div className="absolute inset-0 bg-[#0F172A] z-0">
                        {/* Background moving visual */}
                        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.1)_25%,rgba(6,182,212,0.1)_50%,transparent_50%,transparent_75%,rgba(6,182,212,0.1)_75%,rgba(6,182,212,0.1)_100%)] bg-[length:20px_20px]"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12 tracking-wide">
                            図面に込められた<br />
                            <span className="text-[var(--color-accent)]">意図</span>を読み解く。
                        </h2>
                        <p className="text-lg text-gray-400 leading-loose mb-12">
                            創業以来52年、私たちは「ただ削るだけ」の仕事を拒んできました。<br />
                            設計者が何を実現したいのか、その部品はどう機能するのか。<br />
                            背景にある思想まで理解して初めて、<br />
                            0.005mmの精度に魂が宿ると信じているからです。
                        </p>
                        <Link
                            href="/templates/leadgen-visual/company"
                            className="inline-block border border-white/20 px-10 py-4 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all tracking-widest text-sm"
                        >
                            ABOUT US
                        </Link>
                    </div>
                </section>

                {/* Section 4: Recruit Visual */}
                <section className="flex flex-col md:flex-row h-auto md:h-[600px] border-t border-white/5">
                    <div className="w-full md:w-1/2 h-[400px] md:h-full bg-[var(--color-surface)] relative group overflow-hidden">
                        {/* Image Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-2xl group-hover:scale-105 transition-transform duration-700">
                            Recruit Image
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                            <p className="text-xs font-bold tracking-widest text-[var(--color-accent)] mb-2">INTERVIEW</p>
                            <p className="text-xl font-bold">入社3年目 田村の挑戦</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-[var(--color-bg-base)]">
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                ミクロンを操る、<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-white">アーティスト</span>になろう。
                            </h2>
                            <p className="text-gray-400 mb-12 leading-relaxed">
                                工場の常識を変える、クリエイティブな仕事がここにある。<br />
                                残業月平均15h。快適な環境で、技術を磨く。
                            </p>
                            <Link
                                href="/templates/leadgen-visual/recruit"
                                className="inline-block bg-white text-[var(--color-bg-base)] px-12 py-4 font-bold tracking-widest hover:bg-[var(--color-accent)] transition-colors"
                            >
                                JOIN OUR TEAM
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Section 5: Contact */}
                <section className="py-32 bg-[var(--color-bg-base)] relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-accent)] blur-[150px] opacity-10 rounded-full pointer-events-none"></div>

                    <div className="container mx-auto px-6 relative z-10 max-w-2xl">
                        <div className="bg-[var(--color-surface)]/50 backdrop-blur-xl border border-white/10 p-12 rounded-2xl shadow-2xl">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold mb-4">CONTACT</h2>
                                <p className="text-gray-400">図面送付・技術相談はこちらから</p>
                            </div>

                            <form className="space-y-6">
                                <div>
                                    <input type="text" placeholder="COMPANY NAME" className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[var(--color-accent)] transition-colors text-lg placeholder-white/20" />
                                </div>
                                <div>
                                    <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[var(--color-accent)] transition-colors text-lg placeholder-white/20" />
                                </div>
                                <div>
                                    <textarea rows={3} placeholder="MESSAGE" className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[var(--color-accent)] transition-colors text-lg placeholder-white/20 resize-none"></textarea>
                                </div>
                                <div className="pt-8">
                                    <button className="w-full bg-[var(--color-accent)] text-black font-bold py-5 tracking-widest hover:shadow-[0_0_30px_var(--color-accent-glow)] transition-all rounded-sm uppercase">
                                        Send Inquiry
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
