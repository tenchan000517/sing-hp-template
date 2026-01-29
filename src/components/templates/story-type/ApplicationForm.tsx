"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, CheckCircle } from "lucide-react";
import Button from "@/components/common/Button";

interface Job {
  id: string;
  title: string;
}

interface ApplicationFormProps {
  jobs: Job[];
  phone: string;
  email: string;
}

export default function ApplicationForm({
  jobs,
  phone,
  email,
}: ApplicationFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center"
      >
        <div className="w-20 h-20 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-[var(--color-primary)]" />
        </div>
        <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
          ご応募ありがとうございます
        </h3>
        <p className="text-[var(--color-text-secondary)] mb-6">
          内容を確認の上、担当者より3営業日以内にご連絡いたします。
          <br />
          しばらくお待ちください。
        </p>
        <Button href="/templates/story-type" variant="outline">
          トップページに戻る
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Form */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
            応募フォーム
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-6">
            以下のフォームに必要事項をご入力の上、送信してください。
            <br />
            <span className="text-[var(--color-accent)]">※</span>は必須項目です。
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-[var(--color-text-primary)] mb-1"
                >
                  姓<span className="text-[var(--color-accent)]">※</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-shadow"
                  placeholder="山田"
                />
              </div>
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-[var(--color-text-primary)] mb-1"
                >
                  名<span className="text-[var(--color-accent)]">※</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-shadow"
                  placeholder="太郎"
                />
              </div>
            </div>

            {/* Furigana */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="lastNameKana"
                  className="block text-sm font-medium text-[var(--color-text-primary)] mb-1"
                >
                  セイ<span className="text-[var(--color-accent)]">※</span>
                </label>
                <input
                  type="text"
                  id="lastNameKana"
                  name="lastNameKana"
                  required
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-shadow"
                  placeholder="ヤマダ"
                />
              </div>
              <div>
                <label
                  htmlFor="firstNameKana"
                  className="block text-sm font-medium text-[var(--color-text-primary)] mb-1"
                >
                  メイ<span className="text-[var(--color-accent)]">※</span>
                </label>
                <input
                  type="text"
                  id="firstNameKana"
                  name="firstNameKana"
                  required
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-shadow"
                  placeholder="タロウ"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[var(--color-text-primary)] mb-1"
              >
                メールアドレス<span className="text-[var(--color-accent)]">※</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-shadow"
                placeholder="example@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-[var(--color-text-primary)] mb-1"
              >
                電話番号<span className="text-[var(--color-accent)]">※</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-shadow"
                placeholder="090-1234-5678"
              />
            </div>

            {/* Job Position */}
            <div>
              <label
                htmlFor="position"
                className="block text-sm font-medium text-[var(--color-text-primary)] mb-1"
              >
                応募職種<span className="text-[var(--color-accent)]">※</span>
              </label>
              <select
                id="position"
                name="position"
                required
                className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-shadow bg-white"
              >
                <option value="">選択してください</option>
                {jobs.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Motivation */}
            <div>
              <label
                htmlFor="motivation"
                className="block text-sm font-medium text-[var(--color-text-primary)] mb-1"
              >
                志望動機<span className="text-[var(--color-accent)]">※</span>
                <span className="text-[var(--color-text-muted)] ml-2 font-normal">
                  （300文字以内）
                </span>
              </label>
              <textarea
                id="motivation"
                name="motivation"
                required
                rows={5}
                maxLength={300}
                className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-shadow resize-none"
                placeholder="応募のきっかけや志望理由をご記入ください"
              />
            </div>

            {/* Privacy Policy */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="mt-1 w-4 h-4 text-[var(--color-primary)] border-[var(--color-border)] rounded focus:ring-[var(--color-primary)]"
                />
                <span className="text-sm text-[var(--color-text-secondary)]">
                  <a
                    href="#"
                    className="text-[var(--color-primary)] hover:underline"
                  >
                    プライバシーポリシー
                  </a>
                  に同意の上、送信してください。
                  <span className="text-[var(--color-accent)]">※</span>
                </span>
              </label>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="accent"
              size="lg"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  送信中...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  この内容で応募する
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>

      {/* Other ways to apply */}
      <div className="lg:col-span-1">
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-6 sticky top-24">
          <h3 className="font-bold text-[var(--color-text-primary)] mb-4">
            その他の応募方法
          </h3>

          {/* Phone */}
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-[var(--color-text-muted)]">
                  電話で応募
                </p>
                <a
                  href={`tel:${phone}`}
                  className="text-lg font-bold text-[var(--color-text-primary)] hover:text-[var(--color-primary)]"
                >
                  {phone}
                </a>
              </div>
            </div>
            <p className="text-xs text-[var(--color-text-muted)]">
              受付時間：平日9:00〜18:00
              <br />
              「採用サイトを見た」とお伝えください
            </p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-[var(--color-text-muted)]">
                  メールで応募
                </p>
                <a
                  href={`mailto:${email}`}
                  className="text-sm font-bold text-[var(--color-text-primary)] hover:text-[var(--color-primary)] break-all"
                >
                  {email}
                </a>
              </div>
            </div>
            <p className="text-xs text-[var(--color-text-muted)]">
              件名：「〇〇職 応募」
              <br />
              履歴書を添付の上、志望動機をご記載ください
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
