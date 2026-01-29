import { Metadata } from "next";
import MemberInterview from "@/components/templates/story-type/MemberInterview";
import FadeIn from "@/components/animations/FadeIn";
import { company, members } from "@/data/story-type/sample";

export const metadata: Metadata = {
  title: "先輩社員の声",
  description: `${company.name}で働く先輩社員のインタビューをご紹介します。入社のきっかけ、仕事のやりがい、1日の流れなど、リアルな声をお届けします。`,
};

export default function MembersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium opacity-80 tracking-wider uppercase mb-4 block">
                MEMBER&apos;S VOICE
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                先輩社員の声
              </h1>
              <p className="text-lg opacity-90 leading-relaxed">
                {company.name}で働く先輩社員にインタビュー。
                <br className="hidden md:block" />
                入社のきっかけから現在まで、リアルな声をお届けします。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Member List Navigation */}
      <section className="py-8 bg-[var(--color-bg-secondary)] sticky top-16 lg:top-20 z-40 border-b border-[var(--color-border)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {members.map((member) => (
              <a
                key={member.id}
                href={`#${member.id}`}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-colors shadow-sm"
              >
                {member.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Member Interviews */}
      {members.map((member, index) => (
        <MemberInterview key={member.id} member={member} index={index} />
      ))}
    </>
  );
}
