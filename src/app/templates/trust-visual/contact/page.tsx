"use client";

import { useState } from "react";
import Layout from "../_components/Layout";
import { company, contactForm } from "@/data/trust-visual/sample";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    category: "",
    message: "",
    privacy: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 実際の送信処理はここに実装
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-32 bg-[#f7fafc]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white p-12 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[#38a169] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
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
              <h1 className="font-serif text-2xl text-[#1a365d] font-bold mb-4">
                お問い合わせありがとうございます
              </h1>
              <p className="text-gray-600 mb-8">
                24時間以内にご連絡いたします。
                <br />
                しばらくお待ちください。
              </p>
              <a
                href="/templates/trust-visual"
                className="inline-block bg-[#1a365d] text-white px-8 py-3 rounded font-bold hover:bg-[#2d4a6f] transition-colors"
              >
                トップページに戻る
              </a>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-[#1a365d] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <p className="text-[#38a169] font-medium mb-2">Contact</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold">
              {contactForm.heading}
            </h1>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              {contactForm.description}
            </p>
          </div>
        </div>
      </section>

      {/* Pre-info */}
      <section className="py-12 bg-[#f7fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-[#38a169] mb-2">無料</p>
              <p className="text-gray-600">初回相談30分</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-[#38a169] mb-2">24時間以内</p>
              <p className="text-gray-600">お問い合わせ返答</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-[#38a169] mb-2">秘密厳守</p>
              <p className="text-gray-600">ご相談内容は守られます</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-[#1a365d] font-medium mb-2"
              >
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#38a169] focus:border-transparent"
                placeholder="山田 太郎"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-[#1a365d] font-medium mb-2"
              >
                電話番号 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#38a169] focus:border-transparent"
                placeholder="090-1234-5678"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-[#1a365d] font-medium mb-2"
              >
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#38a169] focus:border-transparent"
                placeholder="example@email.com"
              />
            </div>

            {/* Preferred Date */}
            <div>
              <label
                htmlFor="preferredDate"
                className="block text-[#1a365d] font-medium mb-2"
              >
                ご希望の相談日時
              </label>
              <input
                type="text"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#38a169] focus:border-transparent"
                placeholder="例：平日午後希望、土曜日希望など"
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-[#1a365d] font-medium mb-2"
              >
                ご相談内容 <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#38a169] focus:border-transparent"
              >
                <option value="">選択してください</option>
                <option value="相続・遺言について">相続・遺言について</option>
                <option value="企業法務について">企業法務について</option>
                <option value="離婚・家事事件について">
                  離婚・家事事件について
                </option>
                <option value="不動産について">不動産について</option>
                <option value="その他">その他</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-[#1a365d] font-medium mb-2"
              >
                ご相談内容の詳細 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#38a169] focus:border-transparent resize-none"
                placeholder="ご相談内容をできるだけ詳しくお書きください"
              />
            </div>

            {/* Privacy */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                required
                checked={formData.privacy}
                onChange={handleChange}
                className="mt-1 w-5 h-5 text-[#38a169] border-gray-300 rounded focus:ring-[#38a169]"
              />
              <label htmlFor="privacy" className="text-gray-600 text-sm">
                <a
                  href="/templates/trust-visual/privacy"
                  className="text-[#38a169] underline"
                >
                  プライバシーポリシー
                </a>
                に同意の上、送信します。
              </label>
            </div>

            {/* Submit */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-[#38a169] hover:bg-[#2f855a] text-white px-12 py-4 rounded font-bold text-lg transition-colors"
              >
                送信する
              </button>
            </div>

            {/* Note */}
            <p className="text-center text-gray-500 text-sm">
              {contactForm.privacyNote}
            </p>
          </form>
        </div>
      </section>

      {/* Phone Contact */}
      <section className="py-16 bg-[#f7fafc]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl text-[#1a365d] font-bold mb-4">
            お電話でのご相談
          </h2>
          <p className="text-gray-600 mb-6">
            お急ぎの方、直接お話しされたい方はお電話でもご相談を承っております。
          </p>
          <a
            href={`tel:${company.phone.replace(/-/g, "")}`}
            className="text-3xl font-bold text-[#1a365d]"
          >
            {company.phone}
          </a>
          <p className="text-gray-500 mt-2">{company.hours}</p>
        </div>
      </section>
    </Layout>
  );
}
