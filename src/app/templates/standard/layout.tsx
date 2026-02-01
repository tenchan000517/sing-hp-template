
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "三河精密工業株式会社 | 精密金属部品加工",
    description: "愛知県岡崎市の精密金属部品加工。NC旋盤・マシニング複合加工。±0.005mmの超精密加工と最短3日の特急対応。",
};

export default function StandardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            data-template="standard"
            className="min-h-screen bg-white font-sans text-[#333]"
            style={{
                "--color-primary": "#1E3A5F",
                "--color-primary-light": "#2C5282",
                "--color-primary-dark": "#152a45",
                "--color-accent": "#F39C12",
                "--color-accent-light": "#F6AD55",
                "--color-bg-secondary": "#F5F7FA",
            } as React.CSSProperties}
        >
            {children}
        </div>
    );
}
