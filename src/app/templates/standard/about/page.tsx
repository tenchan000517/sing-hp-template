
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '../_components/Layout';
import { company } from '@/data/standard/sample';

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <div className="bg-[var(--color-bg-secondary)] py-12 md:py-20">
                    <div className="container mx-auto px-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">会社概要</h1>
                        <p className="text-gray-600">私たちについて</p>
                    </div>
                </div>

                {/* CEO Message */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="w-full md:w-1/3 aspect-[3/4] rounded relative overflow-hidden">
                                <Image
                                    src="/images/templates/standard/generated/ceo_portrait.jpg"
                                    alt={`代表取締役 ${company.representative}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="w-full md:w-2/3">
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--color-primary)]">
                                    技術の継承と、<br />
                                    新たなる挑戦。
                                </h2>
                                <p className="text-gray-600 leading-loose mb-8">
                                    三河精密工業は、1973年の創業以来、この愛知の地でモノづくりに励んでまいりました。
                                    創業から半世紀、私たちは常に「お客様の困っていることを解決する」という一心で、技術を磨き続けてきました。
                                    <br /><br />
                                    時代は変われど、モノづくりの本質は変わりません。それは「人」です。
                                    最新の設備があっても、それを使いこなす社員の情熱と技術がなければ、良い製品は生まれません。
                                    私たちはこれからも、人を育て、技術を継承し、お客様の期待を超える価値を提供し続けてまいります。
                                </p>
                                <div className="text-right">
                                    <p className="text-xl font-bold text-[var(--color-primary)]">{company.representative}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Company Info */}
                <section className="py-24 bg-[var(--color-bg-secondary)]">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-2xl font-bold mb-10 text-[var(--color-primary)] text-center">会社情報</h2>
                        <div className="bg-white rounded p-8 shadow-sm">
                            <dl className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 text-sm md:text-base border-b border-gray-100 last:border-b-0 pb-6 mb-6">
                                <dt className="font-bold text-gray-500 md:col-span-1">会社名</dt>
                                <dd className="md:col-span-2 text-gray-800">{company.name}</dd>
                            </dl>
                            <dl className="grid grid-cols-1 md:grid-cols-3 gap-y-4 text-sm md:text-base border-gray-100 border-t py-6">
                                <dt className="font-bold text-gray-500 md:col-span-1">設立</dt>
                                <dd className="md:col-span-2 text-gray-800">{company.established}</dd>
                            </dl>
                            <dl className="grid grid-cols-1 md:grid-cols-3 gap-y-4 text-sm md:text-base border-gray-100 border-t py-6">
                                <dt className="font-bold text-gray-500 md:col-span-1">代表者</dt>
                                <dd className="md:col-span-2 text-gray-800">{company.representative}</dd>
                            </dl>
                            <dl className="grid grid-cols-1 md:grid-cols-3 gap-y-4 text-sm md:text-base border-gray-100 border-t py-6">
                                <dt className="font-bold text-gray-500 md:col-span-1">資本金</dt>
                                <dd className="md:col-span-2 text-gray-800">{company.capital}</dd>
                            </dl>
                            <dl className="grid grid-cols-1 md:grid-cols-3 gap-y-4 text-sm md:text-base border-gray-100 border-t py-6">
                                <dt className="font-bold text-gray-500 md:col-span-1">従業員数</dt>
                                <dd className="md:col-span-2 text-gray-800">{company.employees}名</dd>
                            </dl>
                            <dl className="grid grid-cols-1 md:grid-cols-3 gap-y-4 text-sm md:text-base border-gray-100 border-t py-6">
                                <dt className="font-bold text-gray-500 md:col-span-1">所在地</dt>
                                <dd className="md:col-span-2 text-gray-800">
                                    {company.address}<br />
                                    TEL: {company.phone}
                                </dd>
                            </dl>
                            <dl className="grid grid-cols-1 md:grid-cols-3 gap-y-4 text-sm md:text-base border-gray-100 border-t py-6">
                                <dt className="font-bold text-gray-500 md:col-span-1">事業内容</dt>
                                <dd className="md:col-span-2 text-gray-800">{company.business}</dd>
                            </dl>
                            <dl className="grid grid-cols-1 md:grid-cols-3 gap-y-4 text-sm md:text-base border-gray-100 border-t pt-6">
                                <dt className="font-bold text-gray-500 md:col-span-1">認証</dt>
                                <dd className="md:col-span-2 text-gray-800">
                                    <div className="flex gap-2 flex-wrap">
                                        {company.certifications.map((cert, i) => (
                                            <span key={i} className="bg-gray-100 px-3 py-1 rounded text-xs">{cert}</span>
                                        ))}
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </section>

                {/* Access */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-2xl font-bold mb-10 text-[var(--color-primary)]">アクセス</h2>
                        <div className="w-full aspect-video bg-gray-200 rounded overflow-hidden relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.123456789!2d137.16!3d34.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDU1JzEyLjAiTiAxMzfCsDA5JzM2LjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            />
                        </div>
                        <p className="mt-6 text-gray-600">
                            名鉄名古屋本線「美合駅」より車で5分<br />
                            東名高速道路「岡崎IC」より車で10分
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
