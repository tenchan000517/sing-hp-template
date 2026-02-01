"use client";

import { useState } from "react";
import Layout from "../_components/Layout";
import { contactForm, company } from "@/data/fullorder/sample";

// ヒーローセクション
function PageHero() {
  return (
    <section className="bg-[#2C3E50] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">{contactForm.heading}</h1>
        <p className="text-white/80 text-lg">
          技術相談・お見積もりはお気軽にどうぞ
        </p>
      </div>
    </section>
  );
}

// お問い合わせフォーム
function ContactForm() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">
          お問い合わせありがとうございます
        </h3>
        <p className="text-gray-600 mb-6">
          内容を確認の上、通常1営業日以内にご連絡いたします。<br />
          しばらくお待ちください。
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-[#E67E22] font-bold hover:underline"
        >
          別のお問い合わせをする
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded">
      <p className="text-gray-600 mb-8">{contactForm.description}</p>

      <div className="space-y-6">
        {contactForm.fields.map((field) => (
          <div key={field.name}>
            <label className="block text-[#2C3E50] font-bold mb-2">
              {field.label}
              {field.required && (
                <span className="text-[#E67E22] ml-1">*</span>
              )}
              {!field.required && (
                <span className="text-gray-400 text-sm font-normal ml-2">任意</span>
              )}
            </label>

            {field.type === "select" ? (
              <select
                name={field.name}
                required={field.required}
                value={formData[field.name] || ""}
                onChange={(e) =>
                  setFormData({ ...formData, [field.name]: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
              >
                <option value="">選択してください</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                name={field.name}
                required={field.required}
                rows={6}
                value={formData[field.name] || ""}
                onChange={(e) =>
                  setFormData({ ...formData, [field.name]: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:border-transparent resize-none"
              />
            ) : field.type === "file" ? (
              <div>
                <input
                  type="file"
                  name={field.name}
                  accept=".pdf,.dxf,.dwg,.step,.stp,.iges,.igs"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[#E67E22] file:text-white file:font-bold file:cursor-pointer"
                />
                {field.note && (
                  <p className="text-sm text-gray-500 mt-2">{field.note}</p>
                )}
              </div>
            ) : (
              <input
                type={field.type}
                name={field.name}
                required={field.required}
                placeholder={(field as { placeholder?: string }).placeholder}
                value={formData[field.name] || ""}
                onChange={(e) =>
                  setFormData({ ...formData, [field.name]: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-sm text-gray-500 mb-6">{contactForm.privacyNote}</p>
        <button
          type="submit"
          className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white py-4 rounded font-bold transition-colors text-lg"
        >
          {contactForm.submitLabel}
        </button>
      </div>
    </form>
  );
}

// 連絡先情報
function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded">
        <h3 className="text-xl font-bold text-[#2C3E50] mb-6">
          お電話でのお問い合わせ
        </h3>
        <a
          href={`tel:${company.phone.replace(/-/g, "")}`}
          className="text-3xl font-bold text-[#2C3E50] block mb-2"
        >
          {company.phone}
        </a>
        <p className="text-gray-600">{company.hours}</p>
      </div>

      <div className="bg-white p-8 rounded">
        <h3 className="text-xl font-bold text-[#2C3E50] mb-6">
          FAXでのお問い合わせ
        </h3>
        <p className="text-3xl font-bold text-[#2C3E50] mb-2">{company.fax}</p>
        <p className="text-gray-600">24時間受付</p>
      </div>

      <div className="bg-white p-8 rounded">
        <h3 className="text-xl font-bold text-[#2C3E50] mb-6">所在地</h3>
        <p className="text-gray-600 mb-4">{company.address.full}</p>
        <div className="aspect-video bg-gray-200 rounded overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.123456789!2d137.16!3d34.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDU1JzEyLjAiTiAxMzfCsDA5JzM2LjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          />
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Layout>
      <PageHero />

      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
