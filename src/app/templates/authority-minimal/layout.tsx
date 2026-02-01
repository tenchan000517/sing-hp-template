
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "三河精密工業株式会社 | 精密金属部品加工",
    description: "愛知県岡崎市の精密金属部品加工。NC旋盤・マシニング複合加工。±0.005mmの超精密加工と最短3日の特急対応。",
};

export default function AuthorityMinimalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div data-template="authority-minimal" className="min-h-screen bg-white font-sans text-[#333]">
            {children}
        </div>
    );
}
