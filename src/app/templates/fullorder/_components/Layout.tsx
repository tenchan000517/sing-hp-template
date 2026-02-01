"use client";

import Link from "next/link";
import { useState } from "react";
import { company, navigation, cta } from "@/data/fullorder/sample";

// ヘッダーコンポーネント
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ロゴ */}
          <Link href="/templates/fullorder" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#2C3E50] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">三河</span>
            </div>
            <div>
              <span className="text-[#2C3E50] font-bold text-lg tracking-wide">
                {company.name}
              </span>
            </div>
          </Link>

          {/* PC ナビゲーション */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.header.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#2C3E50] hover:text-[#E67E22] transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 電話番号 & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <p className="text-xs text-gray-500">技術相談・お見積もり無料</p>
              <a
                href={`tel:${company.phone.replace(/-/g, "")}`}
                className="text-[#2C3E50] font-bold text-lg tracking-wide"
              >
                {company.phone}
              </a>
            </div>
            <Link
              href={navigation.ctaButton.href}
              className="bg-[#E67E22] hover:bg-[#D35400] text-white px-6 py-3 rounded text-sm font-bold transition-colors"
            >
              {navigation.ctaButton.label}
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-label="メニュー"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-[#2C3E50] transition-transform ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-[#2C3E50] transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-[#2C3E50] transition-transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="px-4 py-4 space-y-2">
            {navigation.header.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-[#2C3E50] hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <p className="text-center text-sm text-gray-500 mb-2">
                技術相談・お見積もり無料
              </p>
              <a
                href={`tel:${company.phone.replace(/-/g, "")}`}
                className="block text-center text-[#2C3E50] font-bold text-xl mb-4"
              >
                {company.phone}
              </a>
              <Link
                href={navigation.ctaButton.href}
                className="block bg-[#E67E22] text-white text-center py-4 rounded font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                {navigation.ctaButton.label}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

// フッターコンポーネント
function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* 会社情報 */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                <span className="text-[#2C3E50] font-bold text-sm">三河</span>
              </div>
              <div>
                <span className="font-bold text-lg">{company.name}</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">{company.address.full}</p>
            <p className="text-gray-300 text-sm mb-2">
              TEL: {company.phone} / FAX: {company.fax}
            </p>
            <p className="text-gray-300 text-sm">{company.hours}</p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h3 className="font-bold mb-4 text-sm">メニュー</h3>
            <nav className="space-y-2">
              {navigation.footer.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-300 hover:text-white text-sm transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-sm">その他</h3>
            <nav className="space-y-2">
              {navigation.footer.slice(4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-300 hover:text-white text-sm transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* 認証バッジ */}
        <div className="mt-8 pt-8 border-t border-gray-600">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="bg-white/10 px-4 py-2 rounded text-sm">
              ISO9001:2015 認証取得
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-4 text-center text-gray-400 text-xs">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// CTAセクションコンポーネント
export function CTASection() {
  return (
    <section className="bg-[#F8F9FA] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl text-[#2C3E50] font-bold mb-4">
          {cta.heading}
        </h2>
        <p className="text-gray-600 mb-8">{cta.subText}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Link
            href={cta.primaryButton.href}
            className="bg-[#E67E22] hover:bg-[#D35400] text-white px-8 py-4 rounded font-bold transition-colors"
          >
            {cta.primaryButton.label}
          </Link>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">お電話でのお問い合わせ</p>
          <a
            href={`tel:${cta.phone.number.replace(/-/g, "")}`}
            className="text-[#2C3E50] text-2xl font-bold"
          >
            {cta.phone.number}
          </a>
          <p className="text-sm text-gray-500 mt-1">{cta.phone.hours}</p>
        </div>
      </div>
    </section>
  );
}

// メインレイアウトコンポーネント
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
}
