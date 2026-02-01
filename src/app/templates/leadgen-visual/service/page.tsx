
import Link from 'next/link';
import { Header, Footer } from '../_components/Layout';
import { works } from '@/data/leadgen-visual/sample';

export default function ServicePage() {
    return (
        <>
            <Header />
            <main className="pt-20 lg:pt-32 pb-24 min-h-screen">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">SERVICE</h1>
                    <p className="text-[var(--color-accent)] font-bold tracking-widest mb-24">事業内容・加工プロセス</p>

                    <div className="grid gap-32">
                        {/* Section 1: Process Flow */}
                        <section>
                            <h2 className="text-3xl font-bold mb-16 border-l-4 border-[var(--color-accent)] pl-6">PROCESS FLOW</h2>
                            <div className="grid md:grid-cols-4 gap-8">
                                {['図面解析', 'CAMプログラム', '精密加工', '三次元測定'].map((step, i) => (
                                    <div key={i} className="relative group">
                                        <div className="aspect-square bg-[var(--color-surface)] border border-white/5 flex items-center justify-center mb-6 relative overflow-hidden">
                                            {/* Image Placeholder */}
                                            <div className="absolute inset-0 bg-[var(--color-accent)]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                            <span className="text-4xl opacity-20 font-bold group-hover:opacity-100 group-hover:text-[var(--color-accent)] transition-all">0{i + 1}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{step}</h3>
                                        <p className="text-sm text-gray-400">プロセスの詳細説明文が入ります。品質担保のためのこだわりポイントなど。</p>

                                        {/* Arrow */}
                                        {i < 3 && (
                                            <div className="hidden md:block absolute top-[40%] -right-6 text-gray-600">→</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 2: Products */}
                        <section>
                            <h2 className="text-3xl font-bold mb-16 border-l-4 border-[var(--color-accent)] pl-6">PRODUCTS</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {works.map((work) => (
                                    <div key={work.id} className="bg-[var(--color-surface)] p-1">
                                        <div className="aspect-square bg-black mb-4 relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-bold">Photo</div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                                            <p className="text-sm text-gray-400 leading-relaxed border-t border-white/10 pt-4">
                                                {work.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
