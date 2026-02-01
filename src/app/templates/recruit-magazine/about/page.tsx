
import Link from 'next/link';
import { Header, Footer } from '../_components/Layout';
import { company, history } from '@/data/recruit-magazine/sample';

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="bg-[var(--color-bg-base)] pt-32 pb-24 min-h-screen">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-24">
                        <h1 className="text-5xl font-serif font-bold tracking-widest mb-4">DATA & HISTORY</h1>
                        <p className="text-sm font-bold opacity-60 tracking-widest">数字と歴史で見る{company.name}</p>
                    </div>

                    {/* History */}
                    <section className="mb-32">
                        <h2 className="text-2xl font-bold font-serif mb-12 border-l-4 border-[var(--color-primary)] pl-4">HISTORY</h2>
                        <div className="relative border-l border-gray-300 ml-4 space-y-16 py-4">
                            {history.map((item) => (
                                <div key={item.year} className="relative pl-12">
                                    <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 bg-[var(--color-primary)] rounded-full"></div>
                                    <div className="text-4xl font-bold font-serif opacity-20 absolute -top-8 left-12">{item.year}</div>
                                    <h3 className="text-xl font-bold mb-4 pt-2">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Company Data */}
                    <section>
                        <h2 className="text-2xl font-bold font-serif mb-12 border-l-4 border-[var(--color-primary)] pl-4">DATA</h2>
                        <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100">
                            <dl className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="border-b border-gray-100 pb-4">
                                    <dt className="text-xs font-bold text-gray-400 mb-2">会社名</dt>
                                    <dd className="font-bold">{company.name}</dd>
                                </div>
                                <div className="border-b border-gray-100 pb-4">
                                    <dt className="text-xs font-bold text-gray-400 mb-2">代表者</dt>
                                    <dd className="font-bold">{company.representative}</dd>
                                </div>
                                <div className="border-b border-gray-100 pb-4">
                                    <dt className="text-xs font-bold text-gray-400 mb-2">設立</dt>
                                    <dd className="font-bold">{company.established}</dd>
                                </div>
                                <div className="border-b border-gray-100 pb-4">
                                    <dt className="text-xs font-bold text-gray-400 mb-2">資本金</dt>
                                    <dd className="font-bold">{company.capital}</dd>
                                </div>
                                <div className="border-b border-gray-100 pb-4">
                                    <dt className="text-xs font-bold text-gray-400 mb-2">従業員数</dt>
                                    <dd className="font-bold">{company.employees}</dd>
                                </div>
                                <div className="border-b border-gray-100 pb-4 md:col-span-2">
                                    <dt className="text-xs font-bold text-gray-400 mb-2">所在地</dt>
                                    <dd className="font-bold">{company.address}</dd>
                                </div>
                                <div className="border-b border-gray-100 pb-4 md:col-span-3">
                                    <dt className="text-xs font-bold text-gray-400 mb-2">事業内容</dt>
                                    <dd className="font-bold leading-relaxed">
                                        {company.business}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
