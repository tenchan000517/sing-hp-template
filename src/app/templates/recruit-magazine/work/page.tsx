
import Link from 'next/link';
import { Header, Footer } from '../_components/Layout';
import { articles } from '@/data/recruit-magazine/sample';

export default function WorkPage() {
    const workArticles = articles.filter(a => a.category === 'WORKS');

    return (
        <>
            <Header />
            <main className="bg-[var(--color-bg-base)] pt-32 pb-24 min-h-screen">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h1 className="text-5xl font-serif font-bold tracking-widest mb-4">WORKS</h1>
                        <p className="text-sm font-bold opacity-60 tracking-widest">挑む「仕事」</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-24">
                        {workArticles.map((article) => (
                            <Link key={article.id} href={`/templates/recruit-magazine/article/${article.id}`} className="group cursor-pointer flex flex-col md:flex-row gap-12 items-center block">
                                <div className="w-full md:w-1/2 aspect-video bg-gray-200 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gray-300 transition-transform duration-700 group-hover:scale-105"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">Work Photo</div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="text-xs font-bold text-gray-400 mb-2">{article.date}</div>
                                    <h2 className="text-3xl font-serif font-bold leading-tight mb-6 group-hover:text-[var(--color-accent)] transition-colors whitespace-pre-line">
                                        {article.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {article.excerpt}
                                    </p>
                                    <span className="text-xs font-bold tracking-widest text-[var(--color-accent)]">READ MORE →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
