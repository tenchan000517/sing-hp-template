
import Image from 'next/image';
import { Header, Footer } from '../_components/Layout';
import { equipments } from '@/data/authority-minimal/sample';

export default function EquipmentPage() {
    return (
        <>
            <Header />
            <main className="pt-20 bg-[var(--color-bg-secondary)] min-h-screen">
                {/* Page Title */}
                <div className="bg-[var(--color-primary)] text-white py-20">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl font-bold mb-4">設備紹介</h1>
                        <p className="opacity-80">高精度加工を支える最新鋭の設備群</p>
                    </div>
                </div>

                <div className="container mx-auto px-6 py-24 space-y-24 max-w-6xl">
                    {equipments.map((equip, index) => {
                        const equipmentImages = [
                            '/images/templates/authority-minimal/equip-nc.jpg',
                            '/images/templates/authority-minimal/equip-mc.jpg',
                            '/images/templates/authority-minimal/equip-complex.jpg',
                            '/images/templates/authority-minimal/equip-cmm.jpg'
                        ];
                        return (
                        <section key={index} className="flex flex-col md:flex-row gap-12 items-center bg-white p-8 md:p-12 rounded-sm shadow-sm md:odd:flex-row-reverse">
                            {/* Image Area */}
                            <div className="w-full md:w-1/2 aspect-video relative group overflow-hidden">
                                <Image
                                    src={equipmentImages[index % equipmentImages.length]}
                                    alt={equip.category}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Text Area */}
                            <div className="w-full md:w-1/2">
                                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6 border-b-2 border-[var(--color-accent)] inline-block pb-2">
                                    {equip.category}
                                </h2>

                                <div className="space-y-6 text-gray-700">
                                    {equip.count && (
                                        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                                            <span className="font-bold">保有台数</span>
                                            <span className="text-2xl font-bold text-[var(--color-primary)]">{equip.count} <span className="text-sm font-normal text-gray-500">台</span></span>
                                        </div>
                                    )}

                                    <div>
                                        <p className="font-bold mb-2 text-sm text-gray-500 uppercase tracking-widest">主な機種</p>
                                        <p className="text-lg font-medium">{equip.models}</p>
                                    </div>

                                    {equip.description && (
                                        <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-sm text-sm">
                                            {equip.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </section>
                        );
                    })}

                    <div className="bg-[var(--color-primary)] text-white p-12 text-center rounded-sm">
                        <h3 className="text-2xl font-bold mb-4">設備見学も随時受け付けております</h3>
                        <p className="mb-8 opacity-80">実際の加工現場をご覧になりたい方は、お気軽にお問い合わせください。</p>
                        <a href="/templates/authority-minimal/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-sm font-bold hover:bg-gray-100 transition-colors">
                            お問い合わせ・見学依頼
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
