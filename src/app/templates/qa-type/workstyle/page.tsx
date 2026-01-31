import { Metadata } from "next";
import { PageHero, QASection } from "@/components/templates/qa-type";
import { company, workstyleQA } from "@/data/qa-type/sample";
import { generateFAQSchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: `働き方Q&A | ${company.name} 採用サイト`,
  description: `${company.name}の給与・待遇・勤務時間・休日について詳しく解説。給与体系、残業時間、有給取得率、福利厚生など、働き方に関する疑問にお答えします。`,
};

// FAQ Schema for LLMO
const faqSchema = generateFAQSchema([
  ...workstyleQA.salary,
  ...workstyleQA.workingHours,
]);

export default function WorkstylePage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <PageHero
        title="働き方Q&A"
        subtitle="WORKSTYLE"
        description="給与・待遇・勤務時間・休日など、働き方の詳細をお伝えします"
      />

      {/* Salary Q&A */}
      <QASection
        title="給与・待遇について"
        subtitle="給与体系、昇給、賞与、各種手当など"
        items={workstyleQA.salary}
        defaultOpenIndex={0}
        backgroundColor="bg-white"
      />

      {/* Working Hours Q&A */}
      <QASection
        title="勤務時間・休日について"
        subtitle="勤務時間、残業、休日、有給休暇など"
        items={workstyleQA.workingHours}
        defaultOpenIndex={0}
        backgroundColor="bg-gray-50"
      />

      {/* Key Data Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            働きやすさを数字で見る
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#E3F2FD] rounded-xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#1976D2] mb-2">
                118<span className="text-lg">日</span>
              </p>
              <p className="text-sm text-gray-600">年間休日</p>
            </div>
            <div className="bg-[#FFF3E0] rounded-xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#F57C00] mb-2">
                15<span className="text-lg">時間</span>
              </p>
              <p className="text-sm text-gray-600">月平均残業</p>
            </div>
            <div className="bg-[#E8F5E9] rounded-xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#388E3C] mb-2">
                75<span className="text-lg">%</span>
              </p>
              <p className="text-sm text-gray-600">有給取得率</p>
            </div>
            <div className="bg-[#FCE4EC] rounded-xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#C2185B] mb-2">
                85<span className="text-lg">%</span>
              </p>
              <p className="text-sm text-gray-600">育休取得率</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            福利厚生一覧
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "社会保険", value: "完備（健康・厚生年金・雇用・労災）" },
                { label: "交通費", value: "月2万円まで支給" },
                { label: "住宅手当", value: "世帯主に月1万円" },
                { label: "資格手当", value: "フォークリフト月3,000円〜" },
                { label: "資格取得支援", value: "受験費用全額会社負担" },
                { label: "作業着貸与", value: "無料支給" },
                { label: "退職金制度", value: "勤続3年以上" },
                { label: "社員食堂", value: "1食300円〜" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white rounded-lg p-4 border border-gray-200"
                >
                  <div className="w-2 h-2 rounded-full bg-[#4CAF50]" />
                  <div>
                    <p className="font-bold text-gray-900">{item.label}</p>
                    <p className="text-sm text-gray-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#E8F5E9]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            働き方について質問がある方へ
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            給与・待遇について詳しく知りたい方は、お気軽にお問い合わせください。
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
