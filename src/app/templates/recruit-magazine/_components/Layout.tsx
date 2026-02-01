
import Link from 'next/link';
import { navigation, company } from '@/data/recruit-magazine/sample';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-base)]/90 backdrop-blur-sm border-b border-gray-200 h-20 flex items-center transition-all">
            <div className="container mx-auto px-6 h-full flex justify-between items-center">
                <Link href="/templates/recruit-magazine" className="flex flex-col leading-tight group">
                    <span className="text-xl font-bold tracking-widest group-hover:text-[var(--color-primary-light)] transition-colors">MEISTER'S LIFE</span>
                    <span className="text-[10px] tracking-wider text-gray-500">MIKAWA PRECISION RECRUIT</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-bold tracking-widest hover:text-[var(--color-accent)] transition-colors relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-accent)] transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="/templates/recruit-magazine/entry"
                        className="bg-[var(--color-primary)] hover:bg-black text-white px-6 py-2 rounded-none font-bold text-xs tracking-widest transition-colors border border-[var(--color-primary)] hover:border-black"
                    >
                        ENTRY
                    </Link>
                </div>

                {/* Mobile Menu Button - Placeholder */}
                <button className="md:hidden p-2">
                    <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
                    <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
                    <span className="block w-6 h-0.5 bg-current"></span>
                </button>
            </div>
        </header>
    );
}

export function Footer() {
    return (
        <footer className="bg-[var(--color-primary)] text-white py-16">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 border-b border-white/10 pb-16">
                    <div>
                        <h2 className="text-3xl font-bold tracking-widest mb-4">MEISTER'S LIFE</h2>
                        <p className="text-sm opacity-60 max-w-md leading-relaxed">
                            技術は、受け継がれる。<br />
                            三河精密工業株式会社 採用サイト
                        </p>
                        <div className="mt-8 text-sm opacity-80">
                            <p>{company.name}</p>
                            <p>{company.address}</p>
                        </div>
                    </div>

                    <div className="flex gap-12 text-sm font-bold tracking-widest">
                        <ul className="space-y-4">
                            {navigation.slice(0, 3).map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="hover:text-gray-300 transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="space-y-4">
                            {navigation.slice(3).map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="hover:text-gray-300 transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-xs opacity-40 gap-4">
                    <p>© {new Date().getFullYear()} {company.nameEn} All Rights Reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Site Map</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
