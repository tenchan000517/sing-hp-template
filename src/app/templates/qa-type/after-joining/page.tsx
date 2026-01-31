import { Metadata } from "next";
import { PageHero, OnboardingTimeline, QASection } from "@/components/templates/qa-type";
import { company, afterJoiningQA } from "@/data/qa-type/sample";
import { generateFAQSchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: `入社後について | ${company.name} 採用サイト`,
  description: `${company.name}入社後の流れを詳しく解説。入社初日から1年目までの研修、OJT、サポート体制など、入社後の不安を事前に解消します。`,
};

// FAQ Schema for LLMO
const faqSchema = generateFAQSchema(afterJoiningQA.qa);

export default function AfterJoiningPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <PageHero
        title="入社後について"
        subtitle="AFTER JOINING"
        description="入社後の不安を具体的なイメージで解消します"
      />

      {/* Onboarding Timeline */}
      <OnboardingTimeline
        title="入社初日からの流れ"
        subtitle="入社後の1年間を詳しくご説明します"
        firstDay={afterJoiningQA.onboardingTimeline.firstDay}
        firstWeek={afterJoiningQA.onboardingTimeline.firstWeek}
        firstMonth={afterJoiningQA.onboardingTimeline.firstMonth}
        threeMonths={afterJoiningQA.onboardingTimeline.threeMonths}
        sixMonthsToYear={afterJoiningQA.onboardingTimeline.sixMonthsToYear}
      />

      {/* After Joining Q&A */}
      <QASection
        title="入社後の不安Q&A"
        subtitle="入社後に起こりうる不安を事前に解消"
        items={afterJoiningQA.qa}
        defaultOpenIndex={0}
        backgroundColor="bg-gray-50"
      />

      {/* Support System */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              入社後のサポート体制
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#E3F2FD] rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">専任OJT担当</h3>
                <p className="text-sm text-gray-600">
                  入社後3ヶ月間、専任の先輩社員がマンツーマンで指導します。
                </p>
              </div>
              <div className="bg-[#FFF3E0] rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">定期面談</h3>
                <p className="text-sm text-gray-600">
                  月1回の面談で、悩みや不安を相談できる機会を設けています。
                </p>
              </div>
              <div className="bg-[#E8F5E9] rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">充実の研修</h3>
                <p className="text-sm text-gray-600">
                  座学研修、実技研修、フォローアップ研修など、段階的に学べます。
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
            入社後について質問がある方へ
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            入社後の不安がまだ残っている方は、お気軽にご相談ください。
            実際に働いている先輩社員の話を聞くこともできます。
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
