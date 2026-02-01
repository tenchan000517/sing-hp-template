import type { Metadata } from "next";
import BackToTopBar from "@/components/common/BackToTopBar";

export const metadata: Metadata = {
    title: "株式会社テックフロンティア | DX戦略コンサルティング",
    description: "DX戦略策定から実行支援まで一気通貫。大手コンサル出身者が直接担当。製造、金融、小売、医療など累計150社以上の支援実績。",
};

export default function AuthorityMinimalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <BackToTopBar />
            <div data-template="authority-minimal" className="min-h-screen bg-white font-sans text-[#333]">
                {children}
            </div>
        </>
    );
}
