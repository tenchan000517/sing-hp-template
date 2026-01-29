import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "採用HPテンプレート | SING",
    template: "%s | 採用HPテンプレート",
  },
  description: "中小企業向け採用ホームページテンプレート集。ストーリー型、データ訴求型など、企業の魅力を最大限に伝えるテンプレートをご用意しています。",
  keywords: ["採用サイト", "採用HP", "テンプレート", "中小企業", "求人"],
  authors: [{ name: "SING" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "採用HPテンプレート",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
