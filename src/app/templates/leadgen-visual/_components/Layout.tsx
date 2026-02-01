
import Link from 'next/link';
import { navigation, company } from '@/data/leadgen-visual/sample';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-base)]/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
            <div className="container mx-auto px-6 h-full flex justify-between items-center">
                <Link href="/templates/leadgen-visual" className="flex items-center gap-3 group">
                    <span className="text-2xl font-bold tracking-widest text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                        MIKAWA
                    </span>
                    <span className="text-[10px] tracking-wider opacity-60">PRECISION METAL WORKS</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-xs font-bold tracking-[0.2em] text-gray-400 hover:text-[var(--color-accent)] transition-colors relative"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="/templates/leadgen-visual/contact"
                        className="bg-[var(--color-accent)]/10 hover:bg-[var(--color-accent)] text-[var(--color-accent)] hover:text-black px-6 py-3 border border-[var(--color-accent)] rounded-sm font-bold text-xs tracking-widest transition-all shadow-[0_0_10px_var(--color-accent-glow)] hover:shadow-[0_0_20px_var(--color-accent-glow)]"
                    >
                        ESTIMATE
                    </Link>
                </div>

                {/* Mobile Menu Button - Placeholder */}
                <button className="md:hidden text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
}

export function Footer() {
    return (
        <footer className="bg-[var(--color-surface)] text-[var(--color-text)] py-20 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
                    <div>
                        <h2 className="text-4xl font-bold tracking-widest mb-2 text-[var(--color-text)]">MIKAWA</h2>
                        <p className="text-sm opacity-50 tracking-[0.2em] mb-8">PRECISION METAL WORKS</p>
                        <address className="not-italic opacity-60 text-sm leading-loose">
                            {company.address}<br />
                            <a href={`tel:${company.phone}`} className="hover:text-[var(--color-accent)] transition-colors">{company.phone}</a>
                        </address>
                    </div>

                    <div className="flex gap-8 justify-end text-xs font-bold tracking-widest opacity-60">
                        {navigation.map((item) => (
                            <Link key={item.href} href={item.href} className="hover:text-[var(--color-accent)] transition-colors">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-[10px] tracking-widest opacity-30">
                    <p>© {new Date().getFullYear()} {company.nameEn}. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
