
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '../_components/Layout';
import { jobs, recruitBanner } from '@/data/leadgen-minimal/sample';

export default function LeadgenMinimalRecruitPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <section className="bg-gray-100 py-24 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full">
                        <Image
                            src="/images/templates/leadgen-minimal/recruit-team.jpg"
                            alt="採用情報"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)]">
                                {recruitBanner.catch}
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                未経験からでもプロになれる環境がここにあります。
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-12 border-l-4 border-[var(--color-accent)] pl-6">
                            募集要項
                        </h2>

                        <div className="grid gap-8">
                            {jobs.map((job, index) => (
                                <div key={index} className="border border-gray-200 p-8 rounded-sm hover:shadow-md transition-shadow">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                        <h3 className="text-xl font-bold text-[var(--color-primary)]">{job.title}</h3>
                                        <span className="bg-[var(--color-bg-secondary)] text-[var(--color-primary)] px-3 py-1 rounded-full text-sm font-bold mt-2 md:mt-0">
                                            {job.type}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-6 border-b border-gray-100 pb-4">
                                        {job.salary}
                                    </p>
                                    <Link
                                        href="/templates/leadgen-minimal/contact" // Simplified flow
                                        className="block w-full text-center bg-[var(--color-primary)] text-white py-3 font-bold hover:bg-[var(--color-primary-light)] transition-colors rounded-sm"
                                    >
                                        この求人に応募する
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-[var(--color-bg-secondary)] text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">見学も随時受付中</h2>
                        <p className="text-gray-600 mb-8">
                            工場の雰囲気を見てみたい、という方も歓迎します。お問い合わせフォームからご連絡ください。
                        </p>
                        <Link
                            href="/templates/leadgen-minimal/contact"
                            className="text-[var(--color-accent)] font-bold border-b border-[var(--color-accent)] hover:opacity-80 transition-opacity"
                        >
                            お問い合わせフォームへ
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
