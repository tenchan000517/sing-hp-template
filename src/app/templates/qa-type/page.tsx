import { Metadata } from "next";
import {
  AnxietyHero,
  Top5Accordion,
  CategoryNavigation,
  SeniorVoices,
  FinalMessage,
} from "@/components/templates/qa-type";
import {
  company,
  top5Anxieties,
  anxietyCategories,
  seniorVoices,
  finalMessage,
} from "@/data/qa-type/sample";
import { generateFAQSchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: `採用情報 | ${company.name}`,
  description: `${company.name}の採用サイトです。応募前の不安・疑問を徹底解消。未経験歓迎、丁寧な研修制度で安心して働けます。`,
};

// FAQ Schema for LLMO
const faqSchema = generateFAQSchema(
  top5Anxieties.map((item) => ({
    question: item.question,
    answer: item.answer,
  }))
);

export default function QATypeHomePage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <AnxietyHero
        mainCopy={company.tagline}
        subCopy="応募前の疑問・不安を徹底解消。納得してからご応募ください。"
        leadText={[
          "「未経験でも大丈夫？」",
          "「残業はどのくらい？」",
          "「職場の雰囲気は？」",
        ]}
        ctaText="よくある質問を見る"
      />

      {/* Top 5 Anxieties */}
      <Top5Accordion
        title="応募前の不安TOP5"
        items={top5Anxieties}
      />

      {/* Category Navigation */}
      <CategoryNavigation
        title="あなたの不安は？"
        categories={anxietyCategories}
      />

      {/* Senior Voices */}
      <SeniorVoices
        title="先輩たちも、最初は不安でした"
        subtitle="同じ不安を乗り越えた先輩の声をお聞きください"
        voices={seniorVoices}
      />

      {/* Final Message */}
      <FinalMessage
        title={finalMessage.title}
        message={finalMessage.message}
        signature={finalMessage.signature}
        ctaText="応募・相談する"
        ctaHref="/templates/qa-type/contact"
      />
    </>
  );
}
