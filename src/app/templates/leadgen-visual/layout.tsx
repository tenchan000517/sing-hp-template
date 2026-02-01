import type { Metadata } from "next";
import BackToTopBar from "@/components/common/BackToTopBar";

export const metadata: Metadata = {
    title: "三河精密工業 - Precision is Beautiful",
    description: "愛知県岡崎市の精密金属加工。±0.005mmの高精度が生み出す機能美。",
};

export default function LeadgenVisualLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <BackToTopBar />
            <div
                data-template="leadgen-visual"
                className="min-h-screen bg-[var(--color-bg-base)] text-[var(--color-text)] font-sans antialiased selection:bg-[var(--color-accent)] selection:text-black"
                style={{
                    "--color-bg-base": "#0F172A",
                    "--color-text": "#F8FAFC",
                    "--color-accent": "#06B6D4",
                    "--color-accent-glow": "rgba(6, 182, 212, 0.5)",
                    "--color-surface": "#1E293B",
                } as React.CSSProperties}
            >
                {children}
            </div>
        </>
    );
}
