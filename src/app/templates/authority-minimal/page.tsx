
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from './_components/Layout';
import { problems, strengths, works, recruitTeaser } from '@/data/authority-minimal/sample';

export default function AuthorityMinimalPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Section 1: Hero */}
                <section className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/templates/authority-minimal/hero-main.jpg"
                            alt="精密金属加工"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="relative z-20 text-center text-white px-6">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                            0.005mmの約束。
                        </h1>
                        <p className="text-base md:text-lg opacity-90 mb-10 tracking-wide">
                            愛知県岡崎市。NC旋盤・マシニング複合加工の三河精密工業
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/templates/authority-minimal/contact"
                                className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white px-10 py-4 rounded-sm font-bold text-lg transition-all hover:tracking-wide w-full sm:w-auto"
                            >
                                加工のご相談・お見積り
                            </Link>
                            <Link
                                href="/templates/authority-minimal/recruit"
                                className="border border-white/80 hover:bg-white/10 text-white px-10 py-4 rounded-sm font-bold text-lg transition-all w-full sm:w-auto"
                            >
                                採用情報はこちら
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Section 2: Problems (Icon List, Anti-Card) */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-10 leading-snug">
                                    こんな『困った』<br />ありませんか？
                                </h2>
                                <div className="space-y-6">
                                    {problems.map((problem) => (
                                        <div key={problem.id} className="flex items-start gap-4 p-4 hover:bg-[var(--color-bg-secondary)] transition-colors rounded-sm group">
                                            <div className="w-6 h-6 rounded-full bg-[var(--color-bg-secondary)] group-hover:bg-[var(--color-accent)] flex items-center justify-center mt-1 transition-colors shrink-0">
                                                <svg className="w-3 h-3 text-[var(--color-accent)] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <p className="text-lg font-medium text-gray-700">{problem.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-[var(--color-bg-secondary)] p-10 md:p-16 rounded-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/10 rounded-bl-full" />
                                <h3 className="text-2xl font-bold mb-6 text-[var(--color-primary)]">三河精密なら、<br />解決できます。</h3>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    創業52年で培ったノウハウと、最新の複合加工機・三次元測定機を駆使して、高精度・短納期・小ロットの『無理難題』にお応えします。『困ったときは三河さん』その言葉が私たちの誇りです。
                                </p>
                                <Link href="/templates/authority-minimal/service" className="text-[var(--color-accent)] font-bold hover:underline inline-flex items-center gap-2">
                                    当社の強みを見る
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Strengths (Z-Layout) */}
                <section className="py-24 bg-[var(--color-bg-secondary)]">
                    <div className="container mx-auto px-6 space-y-24">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">選ばれる3つの理由</h2>
                        </div>

                        {strengths.map((strength, index) => {
                            const strengthImages = [
                                '/images/templates/authority-minimal/equip-cmm.jpg',
                                '/images/templates/authority-minimal/equip-nc.jpg',
                                '/images/templates/authority-minimal/equip-complex.jpg'
                            ];
                            return (
                                <div key={strength.id} className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="w-full md:w-1/2 aspect-[4/3] relative rounded-sm overflow-hidden group">
                                        <Image
                                            src={strengthImages[index]}
                                            alt={strength.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 space-y-6">
                                        <span className="text-[var(--color-accent)] font-bold tracking-widest text-sm uppercase">Reason 0{strength.id}</span>
                                        <h3 className="text-3xl font-bold text-[var(--color-primary)] leading-tight">{strength.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-lg">{strength.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Section 4: Works (Anti-Card Masonry/Grid) */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex justify-between items-end mb-16">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">加工事例</h2>
                                <p className="text-gray-500">多品種・小ロット・難形状。確かな技術の証。</p>
                            </div>
                            <Link href="/templates/authority-minimal/service" className="hidden md:inline-block border-b-2 border-[var(--color-accent)] text-[var(--color-primary)] pb-1 font-bold hover:text-[var(--color-accent)] transition-colors">
                                実績一覧を見る
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                            {works.map((work, index) => {
                                const workImages = [
                                    '/images/templates/authority-minimal/process-nc.jpg',
                                    '/images/templates/authority-minimal/process-mc.jpg',
                                    '/images/templates/authority-minimal/process-complex.jpg',
                                    '/images/templates/authority-minimal/equip-nc.jpg',
                                    '/images/templates/authority-minimal/equip-mc.jpg',
                                    '/images/templates/authority-minimal/equip-complex.jpg'
                                ];
                                return (
                                    <div key={work.id} className="group relative aspect-square bg-gray-100 overflow-hidden cursor-pointer">
                                        <Image
                                            src={workImages[index % workImages.length]}
                                            alt={work.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />

                                        {/* Overlay Content */}
                                        <div className="absolute inset-0 bg-[var(--color-primary)]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6 text-center">
                                            <h4 className="text-xl font-bold mb-2">{work.title}</h4>
                                            <p className="text-sm opacity-80 mb-1">{work.material}</p>
                                            <p className="text-xs opacity-60 uppercase tracking-widest">{work.process}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-12 text-center md:hidden">
                            <Link href="/templates/authority-minimal/service" className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-bold text-sm">
                                実績一覧を見る
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Section 5: Recruit Teaser */}
                <section className="relative py-32 bg-gray-900 text-white overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/images/templates/authority-minimal/recruit-team.jpg"
                            alt="採用情報"
                            fill
                            className="object-cover opacity-40"
                        />
                    </div>
                    <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />

                    <div className="container relative z-10 mx-auto px-6">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                {recruitTeaser.catch}
                            </h2>
                            <p className="text-lg opacity-80 mb-10 leading-relaxed">
                                {recruitTeaser.text}
                            </p>
                            <Link
                                href="/templates/authority-minimal/recruit"
                                className="inline-block bg-[#F7931E] hover:bg-[#e08214] text-white px-10 py-4 rounded-sm font-bold text-lg transition-colors"
                            >
                                採用情報を見る（先輩インタビュー）
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
