
import Link from 'next/link';
import { company, navigation } from '@/data/standard/sample';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm h-20 flex items-center">
            <div className="container mx-auto px-6 h-full flex justify-between items-center">
                <Link href="/templates/standard" className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[var(--color-primary)] tracking-wide">
                        {company.name}
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[var(--color-primary)] transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="/templates/standard/contact"
                        className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white px-6 py-3 rounded font-bold text-sm transition-colors shadow-sm"
                    >
                        お問い合わせ・お見積り
                    </Link>
                </div>

                {/* Mobile Menu Button (Placeholder) */}
                <button className="md:hidden text-gray-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
}

export function Footer() {
    return (
        <footer className="bg-[var(--color-primary)] text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold mb-6">{company.name}</h3>
                        <p className="text-sm opacity-80 leading-relaxed mb-4">
                            {company.address}<br />
                            TEL: {company.phone}
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons Placeholder */}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-1">
                        <h4 className="font-bold mb-4 text-sm tracking-wider opacity-60">メニュー</h4>
                        <ul className="space-y-3 text-sm opacity-80">
                            {navigation.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="hover:text-[var(--color-accent)] transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Business Info */}
                    <div className="md:col-span-1">
                        <h4 className="font-bold mb-4 text-sm tracking-wider opacity-60">事業内容</h4>
                        <ul className="space-y-3 text-sm opacity-80">
                            <li>NC旋盤加工</li>
                            <li>マシニング加工</li>
                            <li>複合加工</li>
                            <li>品質保証</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="md:col-span-1">
                        <div className="bg-white/10 p-6 rounded">
                            <p className="text-xs opacity-80 mb-2">図面があれば最短30分で回答</p>
                            <p className="text-lg font-bold mb-4">お急ぎの方はこちら</p>
                            <Link
                                href="/templates/standard/contact"
                                className="block w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-center py-3 rounded font-bold text-sm transition-colors text-white"
                            >
                                無料見積もり依頼
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-xs opacity-40">
                    <p>© {new Date().getFullYear()} {company.nameEn} All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
