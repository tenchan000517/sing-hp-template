"use client";

import { useState } from "react";
import { Header, Footer } from "../_components/Layout";
import { company } from "@/data/leadgen-visual/sample";

export default function ContactPage() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-base)] text-[var(--color-text)]">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/5 to-transparent" />
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, var(--color-accent) 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold tracking-widest mb-4">
                CONTACT
              </h1>
              <p className="text-sm tracking-[0.3em] opacity-60">
                お問い合わせ・お見積もり
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="grid md:grid-cols-5 gap-12">
              {/* Form */}
              <div className="md:col-span-3">
                {submitted ? (
                  <div className="bg-[var(--color-surface)] p-12 border border-white/10 text-center">
                    <div className="w-16 h-16 border-2 border-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      送信完了
                    </h3>
                    <p className="text-gray-400 mb-6">
                      お問い合わせありがとうございます。<br />
                      通常1営業日以内にご連絡いたします。
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[var(--color-accent)] font-bold hover:underline"
                    >
                      別のお問い合わせをする
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label className="block text-xs font-bold tracking-widest mb-3 text-gray-400">
                        会社名 <span className="text-gray-600">任意</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company || ""}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[var(--color-surface)] border border-white/10 px-4 py-4 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold tracking-widest mb-3 text-gray-400">
                        お名前 <span className="text-[var(--color-accent)]">必須</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name || ""}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[var(--color-surface)] border border-white/10 px-4 py-4 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold tracking-widest mb-3 text-gray-400">
                        メールアドレス <span className="text-[var(--color-accent)]">必須</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email || ""}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[var(--color-surface)] border border-white/10 px-4 py-4 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold tracking-widest mb-3 text-gray-400">
                        電話番号 <span className="text-gray-600">任意</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone || ""}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[var(--color-surface)] border border-white/10 px-4 py-4 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold tracking-widest mb-3 text-gray-400">
                        お問い合わせ種別 <span className="text-[var(--color-accent)]">必須</span>
                      </label>
                      <select
                        name="type"
                        required
                        value={formData.type || ""}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full bg-[var(--color-surface)] border border-white/10 px-4 py-4 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                      >
                        <option value="">選択してください</option>
                        <option value="見積依頼">お見積もり依頼</option>
                        <option value="技術相談">技術相談</option>
                        <option value="採用">採用について</option>
                        <option value="その他">その他</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold tracking-widest mb-3 text-gray-400">
                        お問い合わせ内容 <span className="text-[var(--color-accent)]">必須</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message || ""}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[var(--color-surface)] border border-white/10 px-4 py-4 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold tracking-widest mb-3 text-gray-400">
                        図面添付 <span className="text-gray-600">任意</span>
                      </label>
                      <input
                        type="file"
                        name="file"
                        accept=".pdf,.dxf,.dwg,.step,.stp,.iges,.igs"
                        className="w-full bg-[var(--color-surface)] border border-white/10 px-4 py-4 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-[var(--color-accent)] file:text-black file:font-bold file:cursor-pointer"
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        対応形式：PDF, DXF, DWG, STEP, IGES（最大10MB）
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-[var(--color-accent)] text-black py-5 font-bold tracking-widest hover:bg-[var(--color-accent)]/80 transition-colors shadow-[0_0_30px_var(--color-accent-glow)]"
                      >
                        送信する
                      </button>
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                      お送りいただいた個人情報は、お問い合わせへの回答以外の目的には使用いたしません。
                    </p>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="md:col-span-2 space-y-8">
                <div className="bg-[var(--color-surface)] p-8 border border-white/10">
                  <h3 className="text-xs font-bold tracking-widest text-gray-400 mb-4">
                    PHONE
                  </h3>
                  <a
                    href={`tel:${company.phone.replace(/-/g, "")}`}
                    className="text-2xl font-bold text-[var(--color-accent)] hover:underline"
                  >
                    {company.phone}
                  </a>
                  <p className="text-sm text-gray-400 mt-2">
                    平日 8:00〜17:00
                  </p>
                </div>

                <div className="bg-[var(--color-surface)] p-8 border border-white/10">
                  <h3 className="text-xs font-bold tracking-widest text-gray-400 mb-4">
                    ADDRESS
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {company.address}
                  </p>
                </div>

                <div className="bg-[var(--color-surface)] p-8 border border-white/10">
                  <h3 className="text-xs font-bold tracking-widest text-gray-400 mb-4">
                    RESPONSE TIME
                  </h3>
                  <p className="text-3xl font-bold text-[var(--color-accent)]">
                    24h
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    通常1営業日以内にご返答
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
