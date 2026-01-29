import { Metadata } from "next";
import MemberCard from "@/components/templates/visual/MemberCard";
import { company, members } from "@/data/visual/sample";

export const metadata: Metadata = {
  title: "PEOPLE",
  description: `${company.name}で働く社員を紹介。デザイナー・映像クリエイターの声をお届けします。`,
};

export default function PeoplePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="mb-4 block text-sm font-medium uppercase tracking-widest opacity-80">
            PEOPLE
          </span>
          <h1 className="text-3xl font-bold md:text-4xl">社員紹介</h1>
          <p className="mt-4 text-lg opacity-90">
            私たちと一緒に働く仲間たちをご紹介します
          </p>
        </div>
      </section>

      {/* Member Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <MemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
