

import Link from 'next/link';
import { Menu, Phone, Mail } from 'lucide-react';
import { company } from '@/data/leadgen-minimal/sample';

export function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 h-20 flex items-center transition-all duration-300">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/templates/leadgen-minimal" className="text-xl md:text-2xl font-bold tracking-tighter text-[var(--color-primary)]">
                    {company.name}
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[var(--color-primary)]">
                    <Link href="/templates/leadgen-minimal/cases" className="hover:text-[var(--color-accent)] transition-colors">施工事例</Link>
                    <Link href="/templates/leadgen-minimal/equipment" className="hover:text-[var(--color-accent)] transition-colors">対応工事</Link>
                    <Link href="/templates/leadgen-minimal/company" className="hover:text-[var(--color-accent)] transition-colors">会社概要</Link>
                    <Link href="/templates/leadgen-minimal/recruit" className="hover:text-[var(--color-accent)] transition-colors">採用情報</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex flex-col items-end mr-4">
                        <span className="text-[10px] text-gray-500 font-bold tracking-wider">お急ぎの方はこちら</span>
                        <span className="text-lg font-bold text-[var(--color-primary)] leading-none font-mono">{company.tel}</span>
                    </div>
                    <Link
                        href="/templates/leadgen-minimal/contact"
                        className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white px-6 py-3 rounded-sm font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
                    >
                        無料見積もり
                    </Link>
                </div>
            </div>
        </header>
    );
}

export function Footer() {
    return (
        <footer className="bg-[var(--color-primary)] text-white pt-16 pb-8">
            <div className="container mx-auto px-6 mb-12">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Col 1: Company Info */}
                    <div>
                        <div className="text-2xl font-bold tracking-tighter mb-6">
                            {company.name}
                        </div>
                        <p className="text-sm opacity-80 leading-relaxed mb-6">
                            {company.address}<br />
                            TEL: {company.tel}<br />
                            Email: {company.email}
                        </p>
                        <div className="flex gap-2">
                            {company.certification.map((cert, index) => (
                                <span key={index} className="text-[10px] border border-white/30 px-2 py-1 rounded-sm opacity-70">
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Col 2: Sitemap */}
                    <div className="flex gap-12">
                        <ul className="space-y-4 text-sm font-bold opacity-80">
                            <li><Link href="/templates/leadgen-minimal" className="hover:text-[var(--color-accent)] hover:opacity-100 transition-colors">トップページ</Link></li>
                            <li><Link href="/templates/leadgen-minimal/cases" className="hover:text-[var(--color-accent)] hover:opacity-100 transition-colors">施工事例</Link></li>
                            <li><Link href="/templates/leadgen-minimal/equipment" className="hover:text-[var(--color-accent)] hover:opacity-100 transition-colors">対応工事</Link></li>
                        </ul>
                        <ul className="space-y-4 text-sm font-bold opacity-80">
                            <li><Link href="/templates/leadgen-minimal/company" className="hover:text-[var(--color-accent)] hover:opacity-100 transition-colors">会社概要</Link></li>
                            <li><Link href="/templates/leadgen-minimal/recruit" className="hover:text-[var(--color-accent)] hover:opacity-100 transition-colors">採用情報</Link></li>
                            <li><Link href="/templates/leadgen-minimal/contact" className="hover:text-[var(--color-accent)] hover:opacity-100 transition-colors">お問い合わせ</Link></li>
                        </ul>
                    </div>

                    {/* Col 3: Contact CTA */}
                    <div className="bg-[var(--color-primary-dark)] p-8 rounded-sm text-center">
                        <p className="text-sm font-bold mb-4 opacity-70">リフォームのお見積り依頼はこちら</p>
                        <Link
                            href="/templates/leadgen-minimal/contact"
                            className="block w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white py-4 rounded-sm font-bold transition-all hover:scale-105 shadow-lg"
                        >
                            無料見積もりフォーム
                        </Link>
                        <p className="text-[10px] mt-4 opacity-50">
                            ※ 原則24時間以内にご回答いたします
                        </p>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center">
                <p className="text-xs opacity-40 font-mono">
                    &copy; {company.founded.substring(0, 4)}-2026 {company.name} All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

