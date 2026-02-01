
import Link from 'next/link';
import Image from 'next/image';
import { Megaphone, Clock, CheckCircle } from 'lucide-react';
import { Header, Footer } from './_components/Layout';
import { hero, trustLogos, solutions, works, recruitBanner, company } from '@/data/leadgen-minimal/sample';

export default function LeadgenMinimalPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Section 1: Hero */}
                <section className="relative h-[calc(100vh-80px)] min-h-[600px] bg-gray-100 flex items-center overflow-hidden">
                    {/* Background Image Area (Right Half for Desktop) */}
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full">
                        <Image
                            src="/images/templates/leadgen-minimal/hero-main.jpg"
                            alt="精密金属加工"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="container relative z-10 mx-auto px-6 h-full flex items-center">
                        <div className="w-full md:w-1/2 pr-0 md:pr-12">
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-[var(--color-primary)]">
                                {hero.catch}
                            </h1>
                            <p className="text-xl md:text-2xl opacity-80 mb-10 text-gray-700 font-medium">
                                {hero.sub}
                            </p>
                            <Link
                                href="/templates/leadgen-minimal/contact"
                                className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white px-10 py-5 rounded-sm font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                            >
                                {hero.cta}
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Section 2: Trust Bar */}
                <section className="py-12 border-b border-gray-100 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            {trustLogos.map((logo, index) => (
                                <div key={index} className="h-12 flex items-center justify-center bg-gray-100 px-6 rounded-sm min-w-[120px]">
                                    <span className="font-bold text-gray-400">{logo.name}</span>
                                </div>
                            ))}
                            <div className="text-sm font-bold text-gray-400 px-4 py-2 border border-gray-200 rounded-sm">
                                創業{company.foundedYears}年の実績
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Solutions (Large List) */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="space-y-32">
                            {solutions.map((sol, index) => {
                                const Icon = index === 0 ? Megaphone : index === 1 ? Clock : CheckCircle;
                                const solutionImages = [
                                    '/images/templates/leadgen-minimal/equip-complex.jpg',
                                    '/images/templates/leadgen-minimal/equip-nc.jpg',
                                    '/images/templates/leadgen-minimal/equip-cmm.jpg'
                                ];
                                return (
                                    <div key={index} className={`flex flex-col md:flex-row gap-12 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                        <div className="w-full md:w-5/12 pt-4">
                                            <div className="text-[var(--color-accent)] mb-6">
                                                <Icon size={64} strokeWidth={1} />
                                            </div>
                                            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-6 leading-tight">
                                                {sol.titulo}
                                            </h2>
                                            <p className="text-lg text-gray-600 leading-loose">
                                                {sol.detail}
                                            </p>
                                        </div>
                                        <div className="w-full md:w-7/12 aspect-[4/3] bg-gray-100 rounded-sm relative overflow-hidden">
                                            <Image
                                                src={solutionImages[index]}
                                                alt={sol.titulo}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Section 4: Works Digest (Carousel-style layout) */}
                <section className="py-32 bg-[var(--color-bg-secondary)] overflow-hidden">
                    <div className="container mx-auto px-6 mb-16 flex justify-between items-end">
                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)]">
                            Works.
                        </h2>
                        <Link href="/templates/leadgen-minimal/equipment" className="text-[var(--color-accent)] font-bold border-b border-[var(--color-accent)] hover:opacity-80 transition-opacity">
                            設備一覧を見る →
                        </Link>
                    </div>

                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            {works.map((work) => (
                                <div key={work.id} className="group cursor-pointer">
                                    <div className="aspect-square bg-white mb-6 overflow-hidden relative">
                                        <Image
                                            src={work.image}
                                            alt={work.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                                        {work.title}
                                    </h3>
                                    <p className="text-sm font-mono text-gray-500">
                                        {work.spec}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 5: Recruit Teaser */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="bg-gray-100 rounded-sm p-12 md:p-24 relative overflow-hidden">
                            <div className="absolute right-0 top-0 w-full md:w-1/2 h-full">
                                <Image
                                    src="/images/templates/leadgen-minimal/recruit-team.jpg"
                                    alt="採用情報"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative z-10 w-full md:w-1/2 pr-0 md:pr-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-8 leading-tight">
                                    {recruitBanner.catch}
                                </h2>
                                <div className="flex gap-8 mb-10">
                                    {recruitBanner.data.map((item, index) => (
                                        <div key={index}>
                                            <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                                            <div className="text-2xl font-bold text-[var(--color-primary)]">{item.value}</div>
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    href="/templates/leadgen-minimal/recruit"
                                    className="inline-block border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-3 rounded-sm font-bold hover:bg-[var(--color-primary)] hover:text-white transition-all"
                                >
                                    {recruitBanner.cta}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6: Closing CTA */}
                <section className="py-32 bg-[var(--color-bg-secondary)]">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-8">
                            まずは、ご連絡ください。
                        </h2>
                        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                            図面がない段階でのご相談も承ります。<br />
                            お急ぎの案件も、まずは一度お問い合わせください。
                        </p>
                        <Link
                            href="/templates/leadgen-minimal/contact"
                            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white px-16 py-6 rounded-sm font-bold text-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                        >
                            無料見積もり・相談
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
