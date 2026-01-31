import { Metadata } from "next";
import { PageHero, SelectionFlow, QASection } from "@/components/templates/qa-type";
import { company, selectionQA } from "@/data/qa-type/sample";
import { generateFAQSchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: `選考について | ${company.name} 採用サイト`,
  description: `${company.name}の選考プロセスを完全公開。面接内容、服装、準備すべきこと、選考期間など、選考に関する疑問をすべて解消します。`,
};

// FAQ Schema for LLMO
const faqSchema = generateFAQSchema(selectionQA.interviewQA);

export default function SelectionPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <PageHero
        title="選考について"
        subtitle="SELECTION PROCESS"
        description="選考プロセスを完全に透明化。不安なく選考に臨めます。"
      />

      {/* Selection Flow */}
      <SelectionFlow
        title="選考フローの全て"
        subtitle="応募から内定までの流れを詳しくご説明します"
        steps={selectionQA.flow}
        totalDuration={selectionQA.totalDuration}
      />

      {/* Interview Q&A */}
      <QASection
        title="面接についてのQ&A"
        subtitle="面接で聞かれること、準備すべきこと、服装など"
        items={selectionQA.interviewQA}
        defaultOpenIndex={0}
        backgroundColor="bg-gray-50"
      />

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              面接を受ける方へのメッセージ
            </h2>
            <div className="bg-[#FFF8E1] rounded-2xl p-8">
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-bold text-[#FF9800]">緊張しても大丈夫です。</span>
                  <br />
                  面接官も緊張していることを理解しています。
                  詰まっても、ゆっくり話しても構いません。
                </p>
                <p>
                  <span className="font-bold text-[#FF9800]">完璧な回答を求めていません。</span>
                  <br />
                  ありのままのあなたを見せてください。
                  正直に話していただくことが一番大切です。
                </p>
                <p>
                  <span className="font-bold text-[#FF9800]">質問は大歓迎です。</span>
                  <br />
                  逆質問の時間に、気になることは何でも聞いてください。
                  選考はお互いを知る機会です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#E8F5E9]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            選考について質問がある方へ
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            選考に関する疑問がございましたら、お気軽にお問い合わせください。
          </p>
          <a
            href="/templates/qa-type/contact"
            className="inline-block bg-[#4CAF50] text-white font-bold py-3 px-8 rounded-full hover:bg-[#43A047] transition-colors"
          >
            問い合わせる
          </a>
        </div>
      </section>
    </>
  );
}
