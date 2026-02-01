
import Link from 'next/link';
import { Header, Footer } from '../_components/Layout';
import { company } from '@/data/leadgen-visual/sample';

export default function CompanyPage() {
    return (
        <>
            <Header />
            <main className="pt-20 lg:pt-32 pb-24 min-h-screen">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">COMPANY</h1>
                    <p className="text-[var(--color-accent)] font-bold tracking-widest mb-24">会社概要・代表挨拶</p>

                    <div className="flex flex-col md:flex-row gap-16 mb-32 items-center">
                        <div className="w-full md:w-1/2 aspect-[3/4] bg-[var(--color-surface)] relative">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-bold">
                                Representative Portrait
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-bold mb-8 leading-normal">
                                「美しさ」とは、<br />
                                機能の極限である。
                            </h2>
                            <p className="text-gray-400 leading-loose mb-12">
                                私たちは50年以上にわたり、金属加工の分野で精度を追求してきました。
                                ミクロン単位の誤差も許さない厳しい世界で、私たちが辿り着いた答え。
                                それは「機能的に優れたものは、見た目も美しい」という真理です。
                                <br /><br />
                                三河精密はこれからも、ただ製品を作るだけでなく、
                                そこにある「機能美」を追求し続けます。
                            </p>
                            <div>
                                <p className="text-lg font-bold">{company.representative}</p>
                                <p className="text-sm text-gray-500">Representative Director</p>
                            </div>
                        </div>
                    </div>

                    <section className="border-t border-white/10 pt-24">
                        <h2 className="text-2xl font-bold mb-12">CORPORATE DATA</h2>
                        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-sm">
                            <div className="border-b border-white/10 pb-4">
                                <dt className="text-gray-500 mb-1 font-bold">COMPANY NAME</dt>
                                <dd className="text-lg">{company.name}</dd>
                            </div>
                            <div className="border-b border-white/10 pb-4">
                                <dt className="text-gray-500 mb-1 font-bold">ESTABLISHED</dt>
                                <dd className="text-lg">{company.established}</dd>
                            </div>
                            <div className="border-b border-white/10 pb-4">
                                <dt className="text-gray-500 mb-1 font-bold">ADDRESS</dt>
                                <dd className="text-lg">{company.address}</dd>
                            </div>
                            <div className="border-b border-white/10 pb-4">
                                <dt className="text-gray-500 mb-1 font-bold">PHONE</dt>
                                <dd className="text-lg">{company.phone}</dd>
                            </div>
                        </dl>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
