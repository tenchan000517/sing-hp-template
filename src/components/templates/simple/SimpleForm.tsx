"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Job {
  id: string;
  title: string;
}

interface SimpleFormProps {
  jobs: Job[];
}

export default function SimpleForm({ jobs }: SimpleFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 実際の実装ではAPIへ送信
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <section id="apply" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-light tracking-wider text-gray-900 mb-6">
              ありがとうございます
            </h2>
            <p className="text-gray-600 mb-8">
              ご応募いただきありがとうございます。
              <br />
              3営業日以内にご連絡いたします。
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="border border-gray-300 px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
            >
              フォームに戻る
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-light tracking-wider text-gray-900 mb-4 text-center">
            応募する
          </h2>
          <p className="text-gray-500 text-sm text-center mb-12">
            以下のフォームよりご応募ください。
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* お名前 */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-3 focus:border-gray-900 focus:outline-none transition-colors bg-transparent"
                placeholder="山田 太郎"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-3 focus:border-gray-900 focus:outline-none transition-colors bg-transparent"
                placeholder="email@example.com"
              />
            </div>

            {/* 電話番号 */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                電話番号 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-3 focus:border-gray-900 focus:outline-none transition-colors bg-transparent"
                placeholder="090-1234-5678"
              />
            </div>

            {/* 希望職種 */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                希望職種 <span className="text-red-500">*</span>
              </label>
              <select
                name="position"
                required
                value={formData.position}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-3 focus:border-gray-900 focus:outline-none transition-colors bg-transparent appearance-none"
              >
                <option value="">選択してください</option>
                {jobs.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.title}
                  </option>
                ))}
              </select>
            </div>

            {/* メッセージ */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                メッセージ（任意）
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border-b border-gray-300 py-3 focus:border-gray-900 focus:outline-none transition-colors bg-transparent resize-none"
                placeholder="ご質問やアピールしたいことなど"
              />
            </div>

            {/* 送信ボタン */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 text-sm tracking-wider hover:bg-gray-800 transition-colors"
              >
                応募する
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              ご入力いただいた個人情報は採用選考の目的のみに使用し、
              <br className="hidden md:block" />
              適切に管理いたします。
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
