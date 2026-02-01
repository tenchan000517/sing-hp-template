
import Link from 'next/link';
import { Header, Footer } from '../_components/Layout';
import { company, companyInfo } from '@/data/leadgen-minimal/sample';

export default function LeadgenMinimalCompanyPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <section className="bg-[var(--color-primary)] text-white py-24">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Company</h1>
                        <p className="text-xl opacity-80">会社概要</p>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="flex flex-col md:flex-row gap-12 mb-20 items-center">
                            <div className="w-full md:w-1/3">
                                <div className="aspect-[3/4] bg-gray-200 w-full flex items-center justify-center text-gray-400 font-bold">
                                    IMAGE: CEO
                                </div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                                    「できない」と言わない町工場でありたい。
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    創業以来50年以上、私たちは「お客様の困りごと」と向き合い続けてきました。<br />
                                    他社が断るような難加工、短納期案件こそ、私たちの技術力を証明する機会です。<br />
                                    これからも、愛知県岡崎市から日本のモノづくりを支えてまいります。
                                </p>
                                <p className="font-bold text-gray-800 text-right">
                                    {company.representativeTitle} {company.representative}
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-8 border-l-4 border-[var(--color-accent)] pl-6">
                            会社情報
                        </h2>
                        <div className="border-t border-gray-200">
                            {companyInfo.map((info, index) => (
                                <div key={index} className="flex flex-col md:flex-row border-b border-gray-200">
                                    <div className="w-full md:w-1/3 bg-gray-50 p-4 font-bold text-gray-600">
                                        {info.label}
                                    </div>
                                    <div className="w-full md:w-2/3 p-4 text-gray-800">
                                        {info.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Access Map Placeholder */}
                <section className="h-96 bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-2xl">
                    Google Maps embed area ({company.address})
                </section>
            </main>
            <Footer />
        </>
    );
}
