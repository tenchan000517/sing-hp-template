"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { PageHero, ConsultationSection, FinalMessage } from "@/components/templates/qa-type";
import { company, consultation, finalMessage, jobs } from "@/data/qa-type/sample";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    inquiryType: "application",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send data to an API
    console.log("Form submitted:", formState);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero */}
      <PageHero
        title="まだ不安がある方へ"
        subtitle="CONTACT"
        description="お気軽にご相談ください。納得してから応募できます。"
      />

      {/* Consultation Methods */}
      <ConsultationSection
        title="まだ不安が残っていますか？"
        subtitle="お気軽にご相談ください。"
        phone={consultation.phone}
        email={consultation.email}
        online={consultation.online}
      />

      {/* Application Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              応募・お問い合わせフォーム
            </h2>
            <p className="text-gray-600">
              応募または質問を送信してください。2営業日以内にご連絡します。
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#E8F5E9] rounded-2xl p-8 text-center"
              >
                <CheckCircle className="w-16 h-16 text-[#4CAF50] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  送信完了しました
                </h3>
                <p className="text-gray-700 mb-6">
                  お問い合わせありがとうございます。
                  <br />
                  2営業日以内に担当者からご連絡いたします。
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#4CAF50] font-bold hover:underline"
                >
                  新しいお問い合わせを送信する
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 rounded-2xl p-8"
              >
                {/* Inquiry Type */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    お問い合わせ種別 <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="inquiryType"
                        value="application"
                        checked={formState.inquiryType === "application"}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#4CAF50]"
                      />
                      <span>応募したい</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="inquiryType"
                        value="inquiry"
                        checked={formState.inquiryType === "inquiry"}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#4CAF50]"
                      />
                      <span>質問・相談したい</span>
                    </label>
                  </div>
                </div>

                {/* Name */}
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 outline-none transition-colors"
                    placeholder="山田 太郎"
                  />
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 outline-none transition-colors"
                    placeholder="example@email.com"
                  />
                </div>

                {/* Phone */}
                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 outline-none transition-colors"
                    placeholder="090-1234-5678"
                  />
                </div>

                {/* Position */}
                <div className="mb-6">
                  <label
                    htmlFor="position"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    希望職種
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formState.position}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 outline-none transition-colors"
                  >
                    <option value="">選択してください</option>
                    {jobs.map((job) => (
                      <option key={job.id} value={job.id}>
                        {job.title}
                      </option>
                    ))}
                    <option value="undecided">まだ決まっていない</option>
                  </select>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    {formState.inquiryType === "application"
                      ? "志望動機・自己PR"
                      : "ご質問・ご相談内容"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 outline-none transition-colors resize-none"
                    placeholder={
                      formState.inquiryType === "application"
                        ? "志望動機やアピールポイントをご記入ください（任意）"
                        : "ご質問やご相談内容をご記入ください"
                    }
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#4CAF50] text-white font-bold py-4 px-8 rounded-full hover:bg-[#43A047] transition-colors"
                >
                  <Send className="w-5 h-5" />
                  {formState.inquiryType === "application"
                    ? "応募する"
                    : "送信する"}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  ※ 送信いただいた情報は、採用選考および質問への回答以外の目的には使用しません。
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Final Message */}
      <FinalMessage
        title={finalMessage.title}
        message={finalMessage.message}
        signature={finalMessage.signature}
        ctaText="募集要項を見る"
        ctaHref="/templates/qa-type/jobs"
      />
    </>
  );
}
