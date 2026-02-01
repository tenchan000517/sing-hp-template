
import Link from 'next/link';
import { company } from '@/data/authority-minimal/sample';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 h-20 flex items-center">
            <div className="container mx-auto px-6 h-full flex justify-between items-center">
                <Link href="/templates/authority-minimal" className="text-[var(--color-primary)] font-bold text-xl md:text-2xl tracking-tight">
                    {company.name}
                </Link>

                <div className="flex items-center gap-8">
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/templates/authority-minimal/service" className="text-gray-600 hover:text-[var(--color-primary)] transition-colors text-sm font-medium">事業内容</Link>
                        <Link href="/templates/authority-minimal/equipment" className="text-gray-600 hover:text-[var(--color-primary)] transition-colors text-sm font-medium">チーム紹介</Link>
                        <Link href="/templates/authority-minimal/company" className="text-gray-600 hover:text-[var(--color-primary)] transition-colors text-sm font-medium">会社概要</Link>
                        <Link href="/templates/authority-minimal/recruit" className="text-gray-600 hover:text-[var(--color-primary)] transition-colors text-sm font-medium">採用情報</Link>
                    </nav>
                    <Link
                        href="/templates/authority-minimal/contact"
                        className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white px-6 py-3 rounded-sm text-sm font-bold transition-colors"
                    >
                        お問い合わせ
                    </Link>
                </div>
            </div>
        </header>
    );
}

export function Footer() {
    return (
        <footer className="bg-[var(--color-primary)] text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Col 1: Logo & Address */}
                    <div className="md:col-span-1">
                        <div className="font-bold text-2xl mb-6">{company.name}</div>
                        <p className="text-sm opacity-80 leading-relaxed mb-4">
                            {company.address}<br />
                            TEL: {company.tel}
                        </p>
                    </div>

                    {/* Col 2: Info */}
                    <div className="md:col-span-1">
                        <h3 className="font-bold mb-4 text-sm tracking-wider opacity-60">企業情報</h3>
                        <ul className="space-y-3 text-sm opacity-80">
                            <li><Link href="/templates/authority-minimal/company" className="hover:text-[var(--color-accent)] transition-colors">会社概要</Link></li>
                            <li><Link href="/templates/authority-minimal/equipment" className="hover:text-[var(--color-accent)] transition-colors">チーム紹介</Link></li>
                            <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">個人情報保護方針</a></li>
                        </ul>
                    </div>

                    {/* Col 3: Links */}
                    <div className="md:col-span-1">
                        <h3 className="font-bold mb-4 text-sm tracking-wider opacity-60">事業内容</h3>
                        <ul className="space-y-3 text-sm opacity-80">
                            <li><Link href="/templates/authority-minimal/service" className="hover:text-[var(--color-accent)] transition-colors">サービス概要</Link></li>
                            <li><Link href="/templates/authority-minimal/service#flow" className="hover:text-[var(--color-accent)] transition-colors">ご依頼の流れ</Link></li>
                            <li><Link href="/templates/authority-minimal/service#qa" className="hover:text-[var(--color-accent)] transition-colors">よくある質問</Link></li>
                        </ul>
                    </div>

                    {/* Col 4: CTA */}
                    <div className="md:col-span-1">
                        <div className="bg-[#0D192E] p-6 rounded-lg">
                            <p className="text-xs opacity-60 mb-2">DXのお悩み、お気軽にご相談ください</p>
                            <div className="text-xl font-bold mb-4">まずは無料相談</div>
                            <Link
                                href="/templates/authority-minimal/contact"
                                className="block w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-center py-3 rounded-sm font-bold text-sm transition-colors"
                            >
                                お問い合わせ
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-xs opacity-40">
                    © {new Date().getFullYear()} {company.name} All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
