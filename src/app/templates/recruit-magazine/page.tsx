
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from './_components/Layout';
import { articles, stats, company } from '@/data/recruit-magazine/sample';

export default function RecruitMagazinePage() {
    const featuredArticle = articles[0];
    const pickupArticles = articles.slice(1);

    return (
        <>
            <Header />
            <main className="bg-[var(--color-bg-base)] pt-20 overflow-hidden">

                {/* Section 1: Magazine Cover */}
                <section className="min-h-[calc(100vh-80px)] container mx-auto px-6 py-8 md:py-12 flex flex-col md:flex-row gap-8 items-stretch">
                    {/* Left: Titles */}
                    <div className="w-full md:w-1/3 flex flex-col justify-between order-2 md:order-1 relative">
                        <div className="hidden md:block absolute top-0 left-0 w-px h-full bg-gray-300"></div>
                        <div className="hidden md:block absolute top-0 right-0 w-px h-full bg-gray-300"></div>

                        <div className="text-center md:text-left pt-8 md:pl-8">
                            <p className="text-xs font-bold tracking-[0.3em] mb-4 text-gray-500">LATEST ISSUE Vol.01</p>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-8" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                                技術は、<br />受け継がれる。
                            </h2>
                        </div>

                        <div className="pb-8 md:pl-8">
                            <div className="bg-white p-6 shadow-sm border border-gray-100">
                                <span className="inline-block bg-[var(--color-accent)] text-white text-[10px] font-bold px-2 py-1 mb-2">FEATURE</span>
                                <h3 className="text-xl font-bold mb-4 leading-relaxed font-serif">
                                    {featuredArticle.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                                    {featuredArticle.excerpt}
                                </p>
                                <Link href={`/templates/recruit-magazine/article/${featuredArticle.id}`} className="text-xs font-bold tracking-widest text-[var(--color-accent)]">
                                    READ MORE →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right: Main Image */}
                    <div className="w-full md:w-2/3 relative order-1 md:order-2 group cursor-pointer">
                        <div className="absolute inset-0 border-2 border-[var(--color-primary)] translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        <div className="relative h-full w-full overflow-hidden min-h-[400px]">
                            <Image
                                src={featuredArticle.image}
                                alt={featuredArticle.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Section 2: Pickup Articles */}
                <section className="py-24 border-t border-gray-200">
                    <div className="container mx-auto px-6">
                        <div className="flex justify-between items-end mb-12">
                            <h2 className="text-4xl font-serif font-bold italic">Pick Up</h2>
                            <Link href="/templates/recruit-magazine/people" className="text-sm font-bold tracking-widest hover:text-[var(--color-accent)]">VIEW ALL →</Link>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {pickupArticles.map((article) => (
                                <Link key={article.id} href={`/templates/recruit-magazine/article/${article.id}`} className="group cursor-pointer flex flex-col h-full block">
                                    <div className="aspect-[4/3] bg-gray-200 mb-6 relative overflow-hidden">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold tracking-widest border border-gray-900">
                                            {article.category}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 font-serif group-hover:text-[var(--color-accent)] transition-colors whitespace-pre-line">
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex gap-2 text-xs text-gray-400 font-bold uppercase tracking-wider">
                                        <span>{article.date}</span>
                                        <span>/</span>
                                        <div className="flex gap-2">
                                            {article.tags?.slice(0, 2).map(tag => <span key={tag}>#{tag}</span>)}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 3: Stats (Infographic) */}
                <section className="py-24 bg-white text-[var(--color-primary)] overflow-hidden">
                    <div className="container mx-auto px-6">
                        <h2 className="text-center font-serif text-3xl font-bold mb-16">DATA of MIKAWA PRECISION</h2>

                        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center w-40 md:w-48">
                                    <div className="w-20 h-20 mx-auto bg-[var(--color-bg-base)] rounded-full flex items-center justify-center mb-6 text-2xl border-2 border-dashed border-[var(--color-primary)]">
                                        {/* Icon Placeholder */}
                                        <span>{i + 1}</span>
                                    </div>
                                    <p className="font-bold text-gray-400 text-sm mb-2 tracking-widest">{stat.label}</p>
                                    <p className="text-4xl md:text-5xl font-bold font-serif">
                                        {stat.value}<span className="text-lg font-sans font-normal ml-1">{stat.unit}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 4: CEO Resume */}
                <section className="py-24 bg-[var(--color-bg-base)]">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="bg-white p-8 md:p-12 shadow-lg relative rotate-1 hover:rotate-0 transition-transform duration-500">
                            {/* Tape visual */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/50 rotate-[-2deg]"></div>

                            <div className="flex flex-col md:flex-row gap-12">
                                <div className="w-full md:w-1/3">
                                    <div className="aspect-[3/4] bg-gray-200 border-4 border-white shadow-sm -rotate-2 relative overflow-hidden">
                                        <Image
                                            src="/images/templates/recruit-magazine/ceo.jpg"
                                            alt={company.representative}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="mt-4 text-center font-handwriting">
                                        <p className="text-xl font-bold">{company.representative}</p>
                                        <p className="text-sm text-gray-500">Representative Director</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3 font-serif">
                                    <h3 className="text-2xl font-bold mb-6 border-b-2 border-[var(--color-primary)] inline-block pb-2">
                                        社長の「裏」履歴書
                                    </h3>
                                    <dl className="grid grid-cols-1 gap-6">
                                        <div>
                                            <dt className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">HOBBY</dt>
                                            <dd className="text-lg font-bold border-b border-gray-200 pb-2">黒鯛釣り（週末は海にいます）</dd>
                                        </div>
                                        <div>
                                            <dt className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">FAVORITE WORD</dt>
                                            <dd className="text-lg font-bold border-b border-gray-200 pb-2">「なんとかなる」</dd>
                                        </div>
                                        <div>
                                            <dt className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">MESSAGE</dt>
                                            <dd className="text-xl leading-relaxed font-bold text-[var(--color-primary)]">
                                                「失敗してもいいから、<br />挑戦しよう。」
                                            </dd>
                                        </div>
                                    </dl>
                                    <div className="mt-8 text-right">
                                        <Link href="/templates/recruit-magazine/about" className="inline-block border text-sm border-gray-900 px-6 py-2 hover:bg-gray-900 hover:text-white transition-colors">
                                            もっと知る →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="bg-[var(--color-primary)] text-white py-20 text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold mb-8">Let's talk together.</h2>
                        <p className="mb-10 opacity-80">まずは、工場を見に来ませんか？</p>
                        <Link href="/templates/recruit-magazine/entry" className="inline-block bg-white text-[var(--color-primary)] px-12 py-4 font-bold tracking-widest hover:bg-gray-100 transition-colors">
                            ENTRY / CONTACT
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
