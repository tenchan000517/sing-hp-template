"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Send, CheckCircle } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/common/Button";
import { company, jobs } from "@/data/visual/sample";

export default function EntryPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 実際の実装ではここでフォーム送信処理を行う
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <>
        <section className="flex min-h-[80vh] items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] py-20 text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <CheckCircle className="mx-auto mb-6 h-20 w-20" />
            <h1 className="mb-4 text-3xl font-bold">
              エントリーありがとうございます
            </h1>
            <p className="mb-8 opacity-90">
              内容を確認の上、担当者よりご連絡いたします。
              <br />
              しばらくお待ちください。
            </p>
            <Button
              href="/templates/visual"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]"
            >
              トップに戻る
            </Button>
          </motion.div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/templates/visual/entry-bg.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-primary)]/90" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <span className="mb-4 block text-sm font-medium uppercase tracking-widest opacity-80">
            ENTRY
          </span>
          <h1 className="text-3xl font-bold md:text-4xl">エントリー</h1>
          <p className="mt-4 text-lg opacity-90">
            あなたのご応募をお待ちしています
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <FadeIn direction="up">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    お名前 <span className="text-[var(--color-accent)]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
                    placeholder="山田 太郎"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    メールアドレス{" "}
                    <span className="text-[var(--color-accent)]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
                    placeholder="example@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
                    placeholder="090-1234-5678"
                  />
                </div>

                {/* Position */}
                <div>
                  <label
                    htmlFor="position"
                    className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    希望職種{" "}
                    <span className="text-[var(--color-accent)]">*</span>
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
                  >
                    <option value="">選択してください</option>
                    {jobs.map((job) => (
                      <option key={job.id} value={job.id}>
                        {job.title}
                      </option>
                    ))}
                    <option value="other">その他・未定</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    自己PR・ご質問など
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
                    placeholder="自己PRや質問があればご記入ください"
                  />
                </div>

                {/* Privacy Policy */}
                <div className="rounded-lg bg-[var(--color-bg-secondary)] p-4">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                    />
                    <span className="text-sm text-[var(--color-text-secondary)]">
                      <a
                        href="#"
                        className="text-[var(--color-primary)] underline"
                      >
                        個人情報の取り扱い
                      </a>
                      について同意の上、送信します。
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-8 py-4 text-lg font-medium text-white transition-all hover:bg-[var(--color-primary-light)] hover:scale-[1.02]"
                  >
                    <Send className="h-5 w-5" />
                    エントリーする
                  </button>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-[var(--color-bg-secondary)] py-16">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-xl font-bold">お問い合わせ</h2>
              <p className="mb-6 text-[var(--color-text-secondary)]">
                ご不明な点がございましたら、お気軽にお問い合わせください。
              </p>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">{company.name}</span> 採用担当
                </p>
                <p className="text-[var(--color-text-secondary)]">
                  TEL: {company.phone}
                </p>
                <p className="text-[var(--color-text-secondary)]">
                  Email:{" "}
                  <a
                    href={`mailto:${company.email}`}
                    className="text-[var(--color-primary)] hover:underline"
                  >
                    {company.email}
                  </a>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
