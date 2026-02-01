"use client";

import { useState } from "react";
import { Header, Footer } from "../_components/Layout";
import { company } from "@/data/standard/sample";

export default function ContactPage() {
  const [formData, setFormData] = useState<Record<string, string>>({
    type: "加工のお見積り",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactTypes = ["加工のお見積り", "技術相談", "採用について", "その他"];

  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="bg-[var(--color-bg-secondary)] py-12 md:py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              お問い合わせ
            </h1>
            <p className="text-gray-600">お見積り・技術相談・採用について</p>
          </div>
        </div>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-2xl">
            {/* Phone Contact */}
            <div className="bg-[var(--color-bg-secondary)] p-8 rounded text-center mb-16">
              <p className="font-bold text-gray-500 mb-2">
                お電話でのお問い合わせ
              </p>
              <a
                href={`tel:${company.phone}`}
                className="text-4xl font-bold text-[var(--color-primary)] block mb-2"
              >
                {company.phone}
              </a>
              <p className="text-sm text-gray-400">
                受付時間 8:00〜17:00（土日祝休み）
              </p>
            </div>

            {submitted ? (
              <div className="bg-[var(--color-bg-secondary)] p-12 rounded text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                  お問い合わせありがとうございます
                </h3>
                <p className="text-gray-600 mb-6">
                  内容を確認の上、通常1営業日以内にご連絡いたします。
                  <br />
                  しばらくお待ちください。
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[var(--color-accent)] font-bold hover:underline"
                >
                  別のお問い合わせをする
                </button>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-bold text-gray-700 mb-2">
                    お問い合わせ種別 <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {contactTypes.map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="type"
                          value={type}
                          checked={formData.type === type}
                          onChange={(e) =>
                            setFormData({ ...formData, type: e.target.value })
                          }
                          className="w-5 h-5 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                        />
                        <span className="text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-bold text-gray-700 mb-2">
                      会社名
                    </label>
                    <input
                      type="text"
                      value={formData.company || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded px-4 py-3 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] focus:outline-none"
                      placeholder="例: 株式会社三河精密"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded px-4 py-3 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] focus:outline-none"
                      placeholder="例: 山田 太郎"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-bold text-gray-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded px-4 py-3 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] focus:outline-none"
                      placeholder="sample@example.com"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-2">
                      電話番号 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded px-4 py-3 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] focus:outline-none"
                      placeholder="090-1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] focus:outline-none resize-none"
                    placeholder="お問い合わせ内容をご記入ください。図面がある場合は、その旨もご記載ください。"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-2">
                    図面添付 <span className="text-gray-400 text-sm">任意</span>
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.dxf,.dwg,.step,.stp,.iges,.igs,.jpg,.jpeg,.png"
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[var(--color-primary)] file:text-white file:font-bold file:cursor-pointer"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    対応形式：PDF, DXF, DWG, STEP, IGES, JPG, PNG（最大10MB）
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white font-bold py-4 rounded shadow hover:shadow-lg transition-all text-lg"
                >
                  内容を確認して送信する
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
