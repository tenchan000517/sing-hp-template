
import Image from 'next/image';
import { Header, Footer } from '../_components/Layout';
import { ceoMessage, company } from '@/data/authority-minimal/sample';

export default function CompanyPage() {
    return (
        <>
            <Header />
            <main className="pt-20 bg-white min-h-screen">
                {/* Page Title */}
                <div className="bg-[var(--color-primary)] text-white py-20">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl font-bold mb-4">会社概要</h1>
                        <p className="opacity-80">{company.name}について</p>
                    </div>
                </div>

                {/* CEO Message Section */}
                <section className="py-24 bg-[var(--color-bg-secondary)] overflow-hidden">
                    <div className="container mx-auto px-6 relative">
                        {/* Decorative background texter (optional - simplified here) */}

                        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 justify-center">
                            {/* Image */}
                            <div className="w-full md:w-[400px] h-[500px] relative shrink-0 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
                                <Image
                                    src="/images/templates/authority-minimal/ceo.jpg"
                                    alt={`${company.representativeTitle} ${ceoMessage.name}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Message (Vertical on PC) */}
                            <div className="w-full md:flex-1 py-8">
                                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 md:mb-0 md:writing-vertical-rl md:text-orientation-mixed text-[var(--color-primary)] md:h-[450px] tracking-widest leading-loose">
                                    {ceoMessage.title}
                                </h2>

                                <div className="text-gray-700 leading-loose space-y-6 md:space-y-0 md:writing-vertical-rl md:h-[450px] md:mr-12 md:text-justify text-base">
                                    {ceoMessage.text.map((paragraph, i) => (
                                        <p key={i} className="md:mb-6">{paragraph}</p>
                                    ))}
                                </div>

                                <div className="mt-8 md:mt-0 md:writing-vertical-rl md:h-[450px] md:flex md:items-end">
                                    <p className="font-bold text-lg">{company.representativeTitle} {ceoMessage.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Company Info */}
                <section className="py-24 max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-12 text-center">会社情報</h2>
                    <div className="border-t border-gray-200">
                        <dl className="divide-y divide-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-3 py-6">
                                <dt className="font-bold text-[var(--color-primary)] mb-2 md:mb-0">会社名</dt>
                                <dd className="md:col-span-2 text-gray-700">{company.name}</dd>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 py-6">
                                <dt className="font-bold text-[var(--color-primary)] mb-2 md:mb-0">代表者</dt>
                                <dd className="md:col-span-2 text-gray-700">{company.representativeTitle}　{company.representative}</dd>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 py-6">
                                <dt className="font-bold text-[var(--color-primary)] mb-2 md:mb-0">所在地</dt>
                                <dd className="md:col-span-2 text-gray-700">
                                    {company.address}
                                    <div className="mt-4 w-full h-64 bg-gray-200 rounded-sm overflow-hidden">
                                        <iframe
                                            src={company.mapUrl}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                        ></iframe>
                                    </div>
                                </dd>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 py-6">
                                <dt className="font-bold text-[var(--color-primary)] mb-2 md:mb-0">設立</dt>
                                <dd className="md:col-span-2 text-gray-700">{company.founded} (創業{company.foundedYears}年)</dd>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 py-6">
                                <dt className="font-bold text-[var(--color-primary)] mb-2 md:mb-0">事業内容</dt>
                                <dd className="md:col-span-2 text-gray-700">{company.business}</dd>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 py-6">
                                <dt className="font-bold text-[var(--color-primary)] mb-2 md:mb-0">許可・認定</dt>
                                <dd className="md:col-span-2 text-gray-700">
                                    <ul className="list-disc list-inside">
                                        {company.certification.map((cert, i) => (
                                            <li key={i}>{cert}</li>
                                        ))}
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
