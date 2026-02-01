import type { Metadata } from "next";
import BackToTopBar from "@/components/common/BackToTopBar";

export const metadata: Metadata = {
    title: "スカイリフォーム株式会社 | 名古屋のリフォーム専門店",
    description: "創業19年・施工実績5,000件以上。キッチン・浴室・外壁塗装など住宅リフォーム全般に対応。地域密着の安心施工で暮らしを快適に。",
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
