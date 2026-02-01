
import Link from 'next/link';
import { Header, Footer } from '../_components/Layout';

const equipment = [
    { name: "Mazak QTN-200", type: "NC Lathe", specs: "Max Turning Dia: φ380mm" },
    { name: "Mazak VCN-530C", type: "Vertical MC", specs: "X:1050 Y:530 Z:510" },
    { name: "Okuma LB3000", type: "NC Lathe (Y-axis)", specs: "Max Turning Dia: φ300mm" },
    { name: "Mitutoyo Crysta-Apex", type: "CMM", specs: "Accuracy: 1.7μm" },
    { name: "Keyence IM-7000", type: "Image Measurer", specs: "Instant Measurement" },
    { name: "Mazak INTEGREX i-200", type: "Multi-Tasking", specs: "5-Axis / Mill-Turn" },
];

export default function EquipmentPage() {
    return (
        <>
            <Header />
            <main className="pt-20 lg:pt-32 pb-24 min-h-screen">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">EQUIPMENT</h1>
                    <p className="text-[var(--color-accent)] font-bold tracking-widest mb-24">主要設備一覧</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {equipment.map((item, i) => (
                            <div key={i} className="group relative aspect-[4/3] bg-[var(--color-surface)] border border-white/5 overflow-hidden">
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-bold text-2xl group-hover:scale-110 transition-transform duration-700">
                                    Machine Photo
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                                    <p className="text-[var(--color-accent)] text-xs font-bold tracking-widest mb-2">{item.type}</p>
                                    <h3 className="text-2xl font-bold mb-4">{item.name}</h3>
                                    <div className="w-8 h-px bg-white/30 mb-4"></div>
                                    <p className="text-sm text-gray-300 font-mono">{item.specs}</p>
                                </div>

                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                                    <h3 className="text-lg font-bold">{item.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
