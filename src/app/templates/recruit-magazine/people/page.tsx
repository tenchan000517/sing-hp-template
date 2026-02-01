
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '../_components/Layout';
import { articles } from '@/data/recruit-magazine/sample';

export default function PeoplePage() {
    const peopleArticles = articles.filter(a => a.category === 'PEOPLE');

    return (
        <>
            <Header />
            <main className="bg-[var(--color-bg-base)] pt-32 pb-24 min-h-screen">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h1 className="text-5xl font-serif font-bold tracking-widest mb-4">PEOPLE</h1>
                        <p className="text-sm font-bold opacity-60 tracking-widest">三河精密の「人」</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16">
                        {peopleArticles.map((article) => (
                            <Link key={article.id} href={`/templates/recruit-magazine/article/${article.id}`} className="group cursor-pointer block">
                                <div className="aspect-[3/4] bg-gray-200 mb-6 relative overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className="text-[10px] font-bold tracking-widest bg-[var(--color-primary)] text-white px-2 py-1 mb-4">
                                        {article.tags?.[0] || 'INTERVIEW'}
                                    </span>
                                    <h2 className="text-2xl font-serif font-bold leading-normal mb-4 group-hover:text-[var(--color-accent)] transition-colors whitespace-pre-line">
                                        {article.title}
                                    </h2>
                                    <p className="text-gray-600 leading-loose mb-6 text-sm">
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
