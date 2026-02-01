"use client";

import { useState } from "react";
import Link from "next/link";
import { Header, Footer } from "../_components/Layout";
import { company } from "@/data/leadgen-minimal/sample";

export default function LeadgenMinimalContactPage() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-[var(--color-primary)] text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              無料相談・お見積もり
            </h1>
            <p className="opacity-80">
              図面をお送りいただければ、通常1営業日以内にお見積もりをご提出します
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Form */}
              <div className="md:col-span-2">
                {submitted ? (
                  <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                      お問い合わせありがとうございます
                    </h3>
                    <p className="text-gray-600 mb-6">
                      内容を確認の上、通常1営業日以内にご連絡いたします。<br />
                      しばらくお待ちください。
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[var(--color-primary)] font-bold hover:underline"
                    >
                      別のお問い合わせをする
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          会社名 <span className="text-gray-400 font-normal">任意</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company || ""}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          お名前 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name || ""}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          メールアドレス <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email || ""}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          電話番号 <span className="text-gray-400 font-normal">任意</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone || ""}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          お問い合わせ種別 <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="type"
                          required
                          value={formData.type || ""}
                          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                        >
                          <option value="">選択してください</option>
                          <option value="見積依頼">お見積もり依頼</option>
                          <option value="技術相談">技術相談</option>
                          <option value="採用">採用について</option>
                          <option value="その他">その他</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          お問い合わせ内容 <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={6}
                          value={formData.message || ""}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent resize-none"
                          placeholder="ご相談内容、ご要望などをお書きください"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          図面添付 <span className="text-gray-400 font-normal">任意</span>
                        </label>
                        <input
                          type="file"
                          name="file"
                          accept=".pdf,.dxf,.dwg,.step,.stp,.iges,.igs"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[var(--color-primary)] file:text-white file:font-bold file:cursor-pointer"
                        />
                        <p className="text-xs text-gray-500 mt-2">
                          対応形式：PDF, DXF, DWG, STEP, IGES（最大10MB）
                        </p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <p className="text-xs text-gray-500 mb-4">
                        お送りいただいた個人情報は、お問い合わせへの回答以外の目的には使用いたしません。
                      </p>
                      <button
                        type="submit"
                        className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white py-4 rounded-lg font-bold transition-colors text-lg"
                      >
                        送信する
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-[var(--color-primary)] mb-4">
                    お電話でのお問い合わせ
                  </h3>
                  <a
                    href={`tel:${company.tel.replace(/-/g, "")}`}
                    className="text-2xl font-bold text-[var(--color-primary)] block mb-2"
                  >
                    {company.tel}
                  </a>
                  <p className="text-sm text-gray-500">
                    平日 8:00〜17:00
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-[var(--color-primary)] mb-4">
                    回答までの目安
                  </h3>
                  <p className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                    1営業日以内
                  </p>
                  <p className="text-sm text-gray-500">
                    お急ぎの場合はお電話ください
                  </p>
                </div>

                <div className="bg-[var(--color-primary)]/5 p-6 rounded-2xl">
                  <h3 className="font-bold text-[var(--color-primary)] mb-2">
                    こんなお悩みをお持ちの方へ
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-primary)]">✓</span>
                      他社で断られた難加工品がある
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-primary)]">✓</span>
                      納期が厳しいが対応してほしい
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-primary)]">✓</span>
                      小ロットでも対応してほしい
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-primary)]">✓</span>
                      品質にこだわりたい
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
