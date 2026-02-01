
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
                        <h1 className="text-4xl font-bold mb-4">チーム紹介</h1>
                        <p className="opacity-80">DX成功を支える専門家集団</p>
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
                                        {equip.count !== undefined && equip.count > 0 && (
                                            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                                                <span className="font-bold">メンバー数</span>
                                                <span className="text-2xl font-bold text-[var(--color-primary)]">
                                                    {equip.count} <span className="text-sm font-normal text-gray-500">名</span>
                                                </span>
                                            </div>
                                        )}

                                        <div>
                                            <p className="font-bold mb-2 text-sm text-gray-500 uppercase tracking-widest">専門領域</p>
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
                        <h3 className="text-2xl font-bold mb-4">まずはお気軽にご相談ください</h3>
                        <p className="mb-8 opacity-80">DXの課題整理から、具体的なプロジェクトのご相談まで、お気軽にお問い合わせください。</p>
                        <a href="/templates/authority-minimal/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-sm font-bold hover:bg-gray-100 transition-colors">
                            お問い合わせ・ご相談
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
