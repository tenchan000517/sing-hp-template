
import Link from 'next/link';
import { Header, Footer } from './_components/Layout';
import { company, recruit, news } from '@/data/standard/sample';

export default function StandardPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Section 1: Hero */}
                <section className="relative min-h-[600px] flex items-center bg-[var(--color-primary)] overflow-hidden">
                    {/* Background Image Placeholder */}
                    <div className="absolute inset-0 z-0 bg-gray-900">
                        {/* Replace with actual image */}
                        <div className="w-full h-full opacity-30 bg-gradient-to-r from-gray-900 to-transparent"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-white">
                        <div className="max-w-3xl">
                            <p className="text-lg md:text-xl font-medium mb-4 text-[var(--color-accent)] tracking-widest uppercase">
                                Since {company.establishedYear}
                            </p>
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                                {company.catchphrase}
                            </h1>
                            <p className="text-xl md:text-2xl opacity-90 mb-12 font-light">
                                {company.subCatchphrase}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/templates/standard/contact"
                                    className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white px-8 py-4 rounded font-bold text-lg transition-transform hover:-translate-y-1 text-center"
                                >
                                    技術相談・お見積もり
                                </Link>
                                <Link
                                    href="/templates/standard/recruit"
                                    className="bg-white/10 hover:bg-white/20 backdrop-blur text-white border border-white/30 px-8 py-4 rounded font-bold text-lg transition-transform hover:-translate-y-1 text-center"
                                >
                                    採用情報を見る
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: News */}
                <section className="py-12 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                            <h2 className="text-lg font-bold text-[var(--color-primary)] whitespace-nowrap">NEWS</h2>
                            <div className="space-y-4 md:space-y-0 md:space-x-8 flex flex-col md:flex-row flex-1">
                                {news.slice(0, 2).map((item, index) => (
                                    <div key={index} className="flex gap-4 items-center group cursor-pointer">
                                        <span className="text-sm text-gray-500">{item.date}</span>
                                        <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">{item.category}</span>
                                        <span className="text-sm font-medium group-hover:text-[var(--color-primary)] transition-colors line-clamp-1">
                                            {item.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <Link href="/templates/standard/news" className="text-sm text-[var(--color-primary)] hover:underline whitespace-nowrap">
                                一覧を見る →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Section 3: Strengths */}
                <section className="py-24 bg-[var(--color-bg-secondary)]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-[var(--color-accent)] font-bold tracking-widest uppercase text-sm">OUR STRENGTHS</span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[var(--color-primary)]">三河精密が選ばれる理由</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {company.strengths.map((strength, index) => (
                                <div key={index} className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-[var(--color-bg-secondary)] rounded-full flex items-center justify-center mb-6 text-[var(--color-primary)]">
                                        <span className="text-xl font-bold">0{index + 1}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)]">{strength.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {strength.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 4: Trust/Achievements */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">
                                    創業52年の信頼と実績。<br />
                                    品質への妥協なき挑戦。
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    私たちは1973年の創業以来、自動車部品を中心とした精密加工において、常に高い品質基準をクリアし続けてきました。
                                    ISO9001認証取得に加え、徹底した社内品質管理体制により、大手メーカー様からも長年にわたり認定サプライヤーとしての信頼をいただいています。
                                </p>

                                <div className="flex gap-4 mb-8">
                                    {company.certifications.map((cert, i) => (
                                        <span key={i} className="inline-block bg-gray-100 text-[var(--color-primary)] px-4 py-2 rounded font-bold text-sm">
                                            {cert}
                                        </span>
                                    ))}
                                </div>

                                <Link href="/templates/standard/about" className="inline-block border-b-2 border-[var(--color-accent)] text-[var(--color-primary)] font-bold pb-1 hover:text-[var(--color-accent)] transition-colors">
                                    会社案内を見る
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {/* Placeholder for Logos/Images */}
                                <div className="bg-gray-100 aspect-square flex items-center justify-center text-gray-400 font-bold">Client Logo</div>
                                <div className="bg-gray-100 aspect-square flex items-center justify-center text-gray-400 font-bold">Client Logo</div>
                                <div className="bg-gray-100 aspect-square flex items-center justify-center text-gray-400 font-bold">ISO Cert</div>
                                <div className="bg-gray-100 aspect-square flex items-center justify-center text-gray-400 font-bold">Factory Img</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: Recruit Teaser */}
                <section className="relative py-32 bg-[var(--color-primary-dark)] overflow-hidden text-white">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <div className="absolute inset-0 z-0 bg-gray-800">
                        {/* Place Image Here */}
                    </div>

                    <div className="container mx-auto px-6 relative z-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            {recruit.message.title}
                        </h2>
                        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm md:text-base font-medium opacity-90">
                            <span>残業月平均15h</span>
                            <span className="w-px h-6 bg-white/30 hidden md:block"></span>
                            <span>有給取得率85%</span>
                            <span className="w-px h-6 bg-white/30 hidden md:block"></span>
                            <span>文系入社60%</span>
                        </div>
                        <Link
                            href="/templates/standard/recruit"
                            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded font-bold text-lg hover:bg-gray-100 transition-colors"
                        >
                            採用情報を見る
                        </Link>
                    </div>
                </section>

                {/* Section 6: Contact */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">お気軽にお問い合わせください</h2>
                        <p className="text-gray-600 mb-12">
                            試作、お見積り、技術的なご相談など、どんなことでもお答えします。<br />
                            お急ぎの場合はお電話でも承っております。
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-[var(--color-bg-secondary)] p-8 rounded text-center">
                                <p className="text-sm text-gray-500 mb-2">お電話でのお問い合わせ</p>
                                <a href={`tel:${company.phone}`} className="text-3xl font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors block mb-2">
                                    {company.phone}
                                </a>
                                <p className="text-xs text-gray-400">受付時間 8:00〜17:00（土日祝除く）</p>
                            </div>
                            <div className="bg-[var(--color-primary)] p-8 rounded text-center text-white">
                                <p className="text-sm opacity-80 mb-2">Webからのお問い合わせ</p>
                                <Link
                                    href="/templates/standard/contact"
                                    className="block bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] py-3 rounded font-bold transition-colors w-full"
                                >
                                    お問い合わせフォーム
                                </Link>
                                <p className="text-xs opacity-60 mt-2">24時間受付中 / 最短30分で回答</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
