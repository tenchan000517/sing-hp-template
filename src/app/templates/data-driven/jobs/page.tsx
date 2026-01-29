import { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import JobsTable from "@/components/templates/data-driven/JobsTable";
import Button from "@/components/common/Button";
import { company, jobs } from "@/data/data-driven/sample";
import { Briefcase, TrendingUp, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "募集要項",
  description: `${company.name}の募集職種一覧です。エンジニア、PM、未経験者まで幅広く募集中。`,
};

const highlights = [
  {
    icon: TrendingUp,
    label: "平均年収",
    value: "580万円",
    note: "業界平均+28%",
  },
  {
    icon: Calendar,
    label: "年間休日",
    value: "125日",
    note: "完全週休2日制",
  },
  {
    icon: Clock,
    label: "残業時間",
    value: "15.2h/月",
    note: "業界平均の半分以下",
  },
  {
    icon: Briefcase,
    label: "リモート率",
    value: "68%",
    note: "フルリモート可",
  },
];

export default function JobsPage() {
  const totalOpenings = jobs.reduce((acc, job) => acc + job.openings, 0);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D47A1] to-[#1A1A1A] text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium opacity-80 tracking-wider uppercase mb-4 block">
                JOB OPENINGS
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">募集要項</h1>
              <p className="text-lg opacity-90 leading-relaxed mb-8">
                現在{jobs.length}職種・計{totalOpenings}名を募集しています。
                <br className="hidden md:block" />
                あなたの経験とスキルを活かせるポジションを探してください。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <FadeIn key={item.label} delay={index * 0.1}>
                <div className="text-center">
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-[#1565C0]" />
                  <p className="text-sm text-text-muted mb-1">{item.label}</p>
                  <p className="text-2xl font-bold text-text-primary">
                    {item.value}
                  </p>
                  <p className="text-xs text-[#1565C0]">{item.note}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="bg-[var(--color-bg-secondary)]">
        <JobsTable jobs={jobs} />
      </section>

      {/* Selection Flow */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              選考フロー
            </h2>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: 1, title: "応募", duration: "随時" },
                { step: 2, title: "書類選考", duration: "3営業日以内" },
                { step: 3, title: "一次面接", duration: "オンライン" },
                { step: 4, title: "最終面接", duration: "対面/オンライン" },
                { step: 5, title: "内定", duration: "2-3週間で" },
              ].map((item, index) => (
                <FadeIn key={item.step} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#1565C0] text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <p className="font-bold text-text-primary">{item.title}</p>
                    <p className="text-sm text-text-muted">{item.duration}</p>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      →
                    </div>
                  )}
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1565C0] to-[#0D47A1] text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              まずはお気軽にご応募ください
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              カジュアル面談も受け付けています。
              <br />
              「まだ転職を決めていない」という方も大歓迎です。
            </p>
            <Button href="/templates/data-driven/apply" variant="accent" size="lg">
              応募フォームへ
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
