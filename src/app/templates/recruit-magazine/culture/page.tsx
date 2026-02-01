
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '../_components/Layout';
import { articles } from '@/data/recruit-magazine/sample';

export default function CulturePage() {
    const cultureArticles = articles.filter(a => a.category === 'CULTURE');

    return (
        <>
            <Header />
            <main className="bg-[var(--color-bg-base)] pt-32 pb-24 min-h-screen">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h1 className="text-5xl font-serif font-bold tracking-widest mb-4">CULTURE</h1>
                        <p className="text-sm font-bold opacity-60 tracking-widest">三河精密の「日常」</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cultureArticles.map((article) => (
                            <Link key={article.id} href={`/templates/recruit-magazine/article/${article.id}`} className="bg-white p-4 shadow-sm border border-gray-100 group cursor-pointer rotate-1 hover:rotate-0 transition-transform duration-300 block">
                                <div className="aspect-square relative overflow-hidden mb-4">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <h2 className="text-xl font-bold font-serif mb-2 group-hover:text-[var(--color-accent)] transition-colors whitespace-pre-line">
                                    {article.title}
                                </h2>
                                <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                                    {article.excerpt}
                                </p>
                                <span className="text-xs font-bold tracking-widest text-[var(--color-accent)] mt-2 inline-block">READ MORE →</span>
                            </Link>
                        ))}

                        {/* Dummy Items for Grid View */}
                        {[1, 2].map((i) => (
                            <div key={i} className="bg-white p-4 shadow-sm border border-gray-100 group cursor-pointer -rotate-1 hover:rotate-0 transition-transform duration-300 opacity-60 relative">
                                <div className="absolute inset-0 bg-white/50 z-10 flex items-center justify-center font-bold text-gray-400 tracking-widest">COMING SOON</div>
                                <div className="aspect-square bg-gray-100 mb-4"></div>
                                <div className="h-6 bg-gray-100 w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-100 w-full mb-1"></div>
                                <div className="h-4 bg-gray-100 w-2/3"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
