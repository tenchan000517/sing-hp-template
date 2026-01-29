import { Metadata } from "next";
import DailyTimeline from "@/components/templates/story-type/DailyTimeline";
import FadeIn from "@/components/animations/FadeIn";
import { company, members } from "@/data/story-type/sample";

export const metadata: Metadata = {
  title: "1日の流れ",
  description: `${company.name}で働く1日の流れをご紹介します。職種ごとに、出社から退社までのスケジュールを詳しくお伝えします。`,
};

export default function DailyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium opacity-80 tracking-wider uppercase mb-4 block">
                DAILY SCHEDULE
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                1日の流れ
              </h1>
              <p className="text-lg opacity-90 leading-relaxed">
                職種ごとに、出社から退社までの1日をご紹介します。
                <br className="hidden md:block" />
                タブを切り替えて、気になる職種の1日を見てみましょう。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <DailyTimeline members={members} />
    </>
  );
}
