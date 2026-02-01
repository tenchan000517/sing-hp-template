
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "MEISTER'S LIFE | 三河精密工業 採用サイト",
    description: "技術は、受け継がれる。三河精密工業株式会社の採用オウンドメディア。",
};

export default function RecruitMagazineLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            data-template="recruit-magazine"
            className="min-h-screen font-serif text-[#2d3748]"
            style={{
                "--color-primary": "#2d3748",
                "--color-primary-light": "#4a5568",
                "--color-accent": "#e53e3e",
                "--color-bg-base": "#FAF9F6",
                "--color-bg-paper": "#ffffff",
            } as React.CSSProperties}
        >
            {children}
        </div>
    );
}
