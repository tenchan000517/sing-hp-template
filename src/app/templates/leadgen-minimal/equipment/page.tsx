
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '../_components/Layout';
import { equipments } from '@/data/leadgen-minimal/sample';

export default function LeadgenMinimalEquipmentPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <section className="bg-[var(--color-primary)] text-white py-24">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Equipment</h1>
                        <p className="text-xl opacity-80">主要設備・検査機器</p>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        {/* 設備リスト (表組みではなく、リストデザイン) */}
                        <div className="space-y-4">
                            {equipments.map((equip, index) => (
                                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-[var(--color-bg-secondary)] border-l-4 border-[var(--color-primary)] hover:border-[var(--color-accent)] transition-colors">
                                    <div className="mb-2 md:mb-0">
                                        <h3 className="text-xl font-bold text-[var(--color-primary)]">{equip.name}</h3>
                                        <p className="text-gray-500 font-mono text-sm">{equip.model}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold text-[var(--color-primary)]">{equip.count}</span>
                                        <span className="text-sm text-gray-500">台</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20">
                            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-8 border-l-4 border-[var(--color-accent)] pl-6">
                                信頼性の保証（三次元測定機）
                            </h2>
                            <div className="aspect-video w-full relative rounded-sm overflow-hidden">
                                <Image
                                    src="/images/templates/leadgen-minimal/equip-cmm.jpg"
                                    alt="三次元測定機"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="mt-6 text-gray-600 leading-relaxed">
                                最新の三次元測定機を導入し、複雑形状の部品も高精度に測定可能です。<br />
                                測定データはデジタル管理され、ご要望に応じて検査成績書として提出いたします。
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-[var(--color-bg-secondary)] text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-2xl font-bold mb-8 text-[var(--color-primary)]">設備についてのご質問は</h2>
                        <Link
                            href="/templates/leadgen-minimal/contact"
                            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white px-12 py-4 rounded-sm font-bold shadow-lg transition-all"
                        >
                            お問い合わせ
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
