import { Metadata } from "next";
import CompanyHistory from "@/components/templates/story-type/CompanyHistory";
import CEOMessage from "@/components/templates/story-type/CEOMessage";
import BusinessSection from "@/components/templates/story-type/BusinessSection";
import FadeIn from "@/components/animations/FadeIn";
import { company } from "@/data/story-type/sample";

export const metadata: Metadata = {
  title: "私たちのストーリー",
  description: `${company.name}の歴史、代表メッセージ、事業内容をご紹介します。創業から今日まで、私たちが大切にしてきた想いをお伝えします。`,
};

export default function StoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium opacity-80 tracking-wider uppercase mb-4 block">
                OUR STORY
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                私たちのストーリー
              </h1>
              <p className="text-lg opacity-90 leading-relaxed">
                {company.name}は{company.establishedYear}年の創業以来、
                <br className="hidden md:block" />
                「人を大切にする」という想いを胸に歩んできました。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Company History */}
      <CompanyHistory companyName={company.name} history={company.history} />

      {/* CEO Message */}
      <CEOMessage companyName={company.name} ceo={company.ceo} />

      {/* Business Section */}
      <BusinessSection businesses={company.businesses} />
    </>
  );
}
