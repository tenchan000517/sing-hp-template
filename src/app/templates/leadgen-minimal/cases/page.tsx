
import Link from 'next/link';
import { Header, Footer } from '../_components/Layout';
import { works } from '@/data/leadgen-minimal/sample';

export default function LeadgenMinimalCasesPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <section className="bg-[var(--color-primary)] text-white py-24">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Works / Cases</h1>
                        <p className="text-xl opacity-80">加工事例・導入実績</p>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <p className="mb-12 text-gray-600 max-w-3xl leading-relaxed">
                            自動車部品、半導体製造装置、航空宇宙関連など、多岐にわたる分野での実績がございます。<br />
                            ※ 守秘義務により掲載できない事例も多数ございます。詳細はお問い合わせください。
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {works.map((work) => (
                                <div key={work.id} className="group cursor-pointer">
                                    <div className="aspect-[4/3] bg-gray-100 mb-6 overflow-hidden relative rounded-sm">
                                        <div className="absolute inset-0 bg-gray-200 transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold opacity-50">
                                            IMAGE: {work.title}
                                        </div>
                                    </div>
                                    <div className="border-l-2 border-[var(--color-accent)] pl-4">
                                        <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                                            {work.title}
                                        </h3>
                                        <p className="text-sm font-mono text-gray-500 mb-2">
                                            {work.spec}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-[var(--color-bg-secondary)] text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-8 text-[var(--color-primary)]">
                            図面がない段階でのご相談も承ります
                        </h2>
                        <Link
                            href="/templates/leadgen-minimal/contact"
                            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white px-12 py-4 rounded-sm font-bold shadow-lg transition-all"
                        >
                            技術相談・お見積り
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
