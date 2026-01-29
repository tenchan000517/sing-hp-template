import { Metadata } from "next";
import HeroSection from "@/components/templates/story-type/HeroSection";
import StatsSection from "@/components/templates/story-type/StatsSection";
import ValuesSection from "@/components/templates/story-type/ValuesSection";
import GrowthStorySection from "@/components/templates/story-type/GrowthStorySection";
import JobListSection from "@/components/templates/story-type/JobListSection";
import { company, stats, members, jobs } from "@/data/story-type/sample";

export const metadata: Metadata = {
  title: "HOME",
  description: `${company.name}の採用情報サイトです。私たちと一緒に働く仲間を募集しています。未経験者歓迎、充実の研修制度で安心してスタートできます。`,
};

export default function StoryTypeHome() {
  // Values section content
  const valuesContent = {
    title: "お客様と社員を大切に、地域に貢献する",
    description: `私たちは${company.business}を通じて、地域のお客様に安心と快適をお届けしています。

創業以来大切にしてきたのは「人を大切にする」こと。
これは単なるスローガンではありません。

例えば、社員一人ひとりの成長に寄り添い、
未経験から一人前になるまで、先輩がマンツーマンでサポートします。

こうした日々の積み重ねが、お客様からの「ありがとう」につながり、
社員一人ひとりの成長とやりがいを生み出しています。

あなたも私たちと一緒に、この想いを体現する仲間になりませんか？`,
    values: company.values,
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        mainCopy={`${company.name}で、あなたの「できる」が増えていく。`}
        subCopy="未経験から始めた先輩たちが、今、設備のプロフェッショナルに。"
        ctaText="先輩たちのストーリーを見る"
        ctaHref="/templates/story-type/members"
      />

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Values Section */}
      <ValuesSection {...valuesContent} />

      {/* Growth Story Section */}
      <GrowthStorySection members={members} />

      {/* Job List Section */}
      <JobListSection jobs={jobs} />
    </>
  );
}
