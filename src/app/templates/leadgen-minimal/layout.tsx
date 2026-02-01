import type { Metadata } from "next";
import BackToTopBar from "@/components/common/BackToTopBar";

export const metadata: Metadata = {
    title: "株式会社リードグロース | BtoBマーケティング支援",
    description: "リード獲得から商談創出まで、御社の営業プロセスを最適化。月額5万円からのスモールスタートで、確実な成果をお届けします。",
};

export default function LeadgenMinimalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <BackToTopBar />
            <div data-template="leadgen-minimal" className="min-h-screen bg-white font-sans text-slate-800">
                {children}
            </div>
        </>
    );
}
