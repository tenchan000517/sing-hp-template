"use client";

import { useState } from "react";
import { Header, Footer } from "../_components/Layout";

export default function ContactPage() {
  const [formData, setFormData] = useState<Record<string, string>>({
    type: "見積依頼",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="pt-20 bg-[var(--color-bg-secondary)] min-h-screen">
        {/* Page Title */}
        <div className="bg-[var(--color-primary)] text-white py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">お問い合わせ</h1>
            <p className="opacity-80">お見積り・技術相談・採用について</p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16 max-w-3xl">
          {submitted ? (
            <div className="bg-white p-12 rounded-sm shadow-sm text-center">
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
                内容を確認の上、原則1営業日以内に
                <br />
                担当の水野よりご連絡いたします。
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-[var(--color-accent)] font-bold hover:underline"
              >
                別のお問い合わせをする
              </button>
            </div>
          ) : (
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm">
              <p className="text-gray-600 mb-10 leading-relaxed">
                DXに関するご相談、お見積りは無料です。
                <br />
                原則1営業日以内に担当者よりご連絡いたします。
              </p>

              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Company Name */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">
                    会社名{" "}
                    <span className="text-gray-400 text-sm ml-1">任意</span>
                  </label>
                  <input
                    type="text"
                    value={formData.company || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    placeholder="例：株式会社サンプル"
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">
                    お名前{" "}
                    <span className="text-red-500 text-sm ml-1">必須</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    placeholder="例：山田 太郎"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">
                    メールアドレス{" "}
                    <span className="text-red-500 text-sm ml-1">必須</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    placeholder="例：info@example.com"
                  />
                </div>

                {/* Tel */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">
                    お電話番号{" "}
                    <span className="text-gray-400 text-sm ml-1">任意</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    placeholder="例：03-1234-5678"
                  />
                </div>

                {/* Type */}
                <div>
                  <label className="block font-bold text-gray-700 mb-4">
                    ご用件{" "}
                    <span className="text-red-500 text-sm ml-1">必須</span>
                  </label>
                  <div className="flex flex-col md:flex-row gap-4">
                    <label className="flex items-center gap-2 cursor-pointer border border-gray-200 p-4 rounded-sm hover:bg-gray-50 bg-white">
                      <input
                        type="radio"
                        name="type"
                        value="見積依頼"
                        checked={formData.type === "見積依頼"}
                        onChange={(e) =>
                          setFormData({ ...formData, type: e.target.value })
                        }
                        className="w-5 h-5 text-[var(--color-accent)]"
                      />
                      <span>お見積り依頼</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer border border-gray-200 p-4 rounded-sm hover:bg-gray-50 bg-white">
                      <input
                        type="radio"
                        name="type"
                        value="技術相談"
                        checked={formData.type === "技術相談"}
                        onChange={(e) =>
                          setFormData({ ...formData, type: e.target.value })
                        }
                        className="w-5 h-5 text-[var(--color-accent)]"
                      />
                      <span>技術的なご相談</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer border border-gray-200 p-4 rounded-sm hover:bg-gray-50 bg-white">
                      <input
                        type="radio"
                        name="type"
                        value="採用"
                        checked={formData.type === "採用"}
                        onChange={(e) =>
                          setFormData({ ...formData, type: e.target.value })
                        }
                        className="w-5 h-5 text-[var(--color-accent)]"
                      />
                      <span>採用について</span>
                    </label>
                  </div>
                </div>

                {/* File */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">
                    資料添付{" "}
                    <span className="text-gray-400 text-sm ml-1">任意</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-sm p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group relative">
                    <input
                      type="file"
                      accept=".pdf,.pptx,.docx,.xlsx,.jpg,.jpeg,.png"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="text-gray-400 group-hover:text-[var(--color-accent)] mb-2">
                      <svg
                        className="w-8 h-8 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">
                      クリックしてファイルを選択、またはドラッグ＆ドロップ
                      <br />
                      <span className="text-xs opacity-70">
                        PDF, PowerPoint, Word, Excel, 画像 (最大10MB)
                      </span>
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">
                    お問い合わせ内容{" "}
                    <span className="text-gray-400 text-sm ml-1">任意</span>
                  </label>
                  <textarea
                    value={formData.message || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors h-40 resize-none"
                    placeholder="DXの課題、期待する支援内容、スケジュール感などをご記入ください。"
                  />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white font-bold text-lg py-5 rounded-sm shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                  >
                    上記の内容で送信する
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-4">
                    当サイトのプライバシーポリシーに同意したものとみなします。
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
