import { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import ApplicationForm from "@/components/templates/story-type/ApplicationForm";
import { company, jobs } from "@/data/data-driven/sample";

export const metadata: Metadata = {
  title: "応募する",
  description: `${company.name}への応募フォームです。必要事項をご入力の上、送信してください。`,
};

export default function ApplyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D47A1] to-[#1A1A1A] text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium opacity-80 tracking-wider uppercase mb-4 block">
                ENTRY
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">応募する</h1>
              <p className="text-lg opacity-90 leading-relaxed">
                ご応募ありがとうございます。
                <br className="hidden md:block" />
                以下のフォームに必要事項をご入力の上、送信してください。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <span className="text-sm text-text-muted">平均年収</span>
              <p className="font-bold text-[#1565C0]">580万円</p>
            </div>
            <div>
              <span className="text-sm text-text-muted">選考期間</span>
              <p className="font-bold text-[#1565C0]">2〜3週間</p>
            </div>
            <div>
              <span className="text-sm text-text-muted">リモート</span>
              <p className="font-bold text-[#1565C0]">週3日〜可</p>
            </div>
            <div>
              <span className="text-sm text-text-muted">入社日</span>
              <p className="font-bold text-[#1565C0]">相談可</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-tertiary)]">
        <div className="container mx-auto px-4">
          <ApplicationForm
            jobs={jobs.map((j) => ({ id: j.id, title: j.title }))}
            phone={company.phone}
            email={company.email}
          />
        </div>
      </section>
    </>
  );
}
