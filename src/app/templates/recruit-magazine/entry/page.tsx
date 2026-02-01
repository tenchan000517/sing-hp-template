
import Link from 'next/link';
import { Header, Footer } from '../_components/Layout';

export default function EntryPage() {
    return (
        <>
            <Header />
            <main className="bg-[var(--color-bg-base)] pt-32 pb-24 min-h-screen">
                <div className="container mx-auto px-6 max-w-2xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-serif font-bold tracking-widest mb-4">ENTRY</h1>
                        <p className="text-sm font-bold opacity-60 tracking-widest">応募・お問い合わせ</p>
                    </div>

                    <div className="bg-white p-8 md:p-12 shadow-md">
                        <form className="space-y-8">
                            <div>
                                <label className="block text-xs font-bold text-gray-400 tracking-widest mb-3">HOPE <span className="text-[var(--color-accent)]">*</span></label>
                                <div className="space-y-3">
                                    {['正社員に応募する', '工場見学・カジュアル面談を希望', 'その他お問い合わせ'].map((opt) => (
                                        <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                                            <input type="radio" name="hope" className="w-5 h-5 text-[var(--color-primary)] border-gray-300 focus:ring-[var(--color-primary)]" />
                                            <span className="font-bold text-gray-700 group-hover:text-[var(--color-primary)] transition-colors">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-400 tracking-widest mb-3">NAME <span className="text-[var(--color-accent)]">*</span></label>
                                <input type="text" className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[var(--color-primary)] bg-transparent transition-colors placeholder-gray-300" placeholder="山田 太郎" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-400 tracking-widest mb-3">EMAIL <span className="text-[var(--color-accent)]">*</span></label>
                                <input type="email" className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[var(--color-primary)] bg-transparent transition-colors placeholder-gray-300" placeholder="sample@example.com" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-400 tracking-widest mb-3">PHONE <span className="text-[var(--color-accent)]">*</span></label>
                                <input type="tel" className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[var(--color-primary)] bg-transparent transition-colors placeholder-gray-300" placeholder="090-0000-0000" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-400 tracking-widest mb-3">MESSAGE</label>
                                <textarea rows={4} className="w-full border border-gray-300 p-4 focus:outline-none focus:border-[var(--color-primary)] bg-transparent transition-colors rounded-none placeholder-gray-300" placeholder="ご質問や、希望の連絡時間帯などがあればご記入ください。"></textarea>
                            </div>

                            <div className="pt-8">
                                <button type="submit" className="w-full bg-[var(--color-primary)] hover:bg-black text-white font-bold tracking-widest py-5 transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    SEND MESSAGE
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
