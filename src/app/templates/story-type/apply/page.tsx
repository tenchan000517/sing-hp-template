import { Metadata } from "next";
import ApplicationForm from "@/components/templates/story-type/ApplicationForm";
import FadeIn from "@/components/animations/FadeIn";
import { company, jobs } from "@/data/story-type/sample";

export const metadata: Metadata = {
  title: "応募する",
  description: `${company.name}への応募フォームです。必要事項をご入力の上、送信してください。`,
};

export default function ApplyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white py-20 md:py-28">
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
