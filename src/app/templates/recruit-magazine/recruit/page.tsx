
import Link from 'next/link';
import { Header, Footer } from '../_components/Layout';
import { jobs } from '@/data/recruit-magazine/sample';

export default function RecruitPage() {
    return (
        <>
            <Header />
            <main className="bg-[var(--color-bg-base)] pt-32 pb-24 min-h-screen">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-24">
                        <h1 className="text-5xl font-serif font-bold tracking-widest mb-4">JOIN US</h1>
                        <p className="text-sm font-bold opacity-60 tracking-widest">募集要項</p>
                    </div>

                    <div className="grid gap-12">
                        {jobs.map((job) => (
                            <div key={job.id} className="bg-white p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12 hover:shadow-md transition-shadow relative overflow-hidden">
                                <div className="w-full md:w-2/3">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="bg-[var(--color-primary)] text-white text-xs font-bold px-3 py-1">{job.type}</span>
                                        <span className="text-[var(--color-accent)] font-bold">{job.salary}</span>
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold mb-6">{job.title}</h2>
                                    <p className="text-gray-600 leading-loose mb-8 text-sm">
                                        {job.description}
                                    </p>

                                    <div className="bg-gray-50 p-6 rounded">
                                        <h3 className="text-xs font-bold text-gray-400 mb-4 tracking-widest">こんな人におすすめ</h3>
                                        <ul className="space-y-2">
                                            {job.recommends.map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-700">
                                                    <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/3 flex flex-col justify-between border-l border-gray-100 md:pl-12 pt-8 md:pt-0">
                                    <div>
                                        <h3 className="text-xs font-bold text-gray-400 mb-4 tracking-widest">正直な「きつい」ところ</h3>
                                        <div className="flex gap-4 items-start">
                                            <span className="text-2xl">💦</span>
                                            <p className="text-xs text-gray-600 leading-relaxed font-medium">
                                                {job.hard}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <Link
                                            href={`/templates/recruit-magazine/entry?job=${job.id}`}
                                            className="block w-full bg-[var(--color-primary)] text-white text-center py-4 font-bold hover:bg-black transition-colors"
                                        >
                                            ENTRY →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <div className="bg-white p-12 max-w-3xl mx-auto border-t-4 border-[var(--color-accent)]">
                            <h2 className="text-2xl font-serif font-bold mb-6">「まずは話を聞いてみたい」でもOKです。</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                工場見学やカジュアルな面談も随時受け付けています。<br />
                                履歴書なしで、まずは工場の雰囲気を見に来てください。
                            </p>
                            <Link href="/templates/recruit-magazine/entry" className="inline-block border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-10 py-3 font-bold hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                                工場見学に申し込む
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
