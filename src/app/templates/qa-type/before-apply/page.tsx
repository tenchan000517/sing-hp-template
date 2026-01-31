import { Metadata } from "next";
import { PageHero, QASection } from "@/components/templates/qa-type";
import { company, beforeApplyQA } from "@/data/qa-type/sample";
import { generateFAQSchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: `応募前の疑問 | ${company.name} 採用サイト`,
  description: `${company.name}への応募をお考えの方へ。応募資格、学歴、資格、未経験など、応募前のよくある質問にお答えします。`,
};

// FAQ Schema for LLMO
const faqSchema = generateFAQSchema([
  ...beforeApplyQA.qualification,
  ...beforeApplyQA.application,
]);

export default function BeforeApplyPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <PageHero
        title="応募前の疑問"
        subtitle="BEFORE APPLY"
        description="「自分は応募していいのか」という疑問をすべて解消します"
      />

      {/* Qualification Q&A */}
      <QASection
        title="応募資格について"
        subtitle="未経験・学歴・年齢・資格など、応募資格に関する疑問"
        items={beforeApplyQA.qualification}
        defaultOpenIndex={0}
        backgroundColor="bg-white"
      />

      {/* Application Method Q&A */}
      <QASection
        title="応募方法について"
        subtitle="応募の流れ、必要書類、連絡方法など"
        items={beforeApplyQA.application}
        defaultOpenIndex={0}
        backgroundColor="bg-gray-50"
      />

      {/* CTA Section */}
      <section className="py-16 bg-[#E8F5E9]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            応募資格に不安がある方へ
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            ご自身が応募資格を満たしているか不安な場合は、お気軽にお問い合わせください。
            採用担当者が丁寧にお答えします。
          </p>
          <a
            href="/templates/qa-type/contact"
            className="inline-block bg-[#4CAF50] text-white font-bold py-3 px-8 rounded-full hover:bg-[#43A047] transition-colors"
          >
            相談する
          </a>
        </div>
      </section>
    </>
  );
}
