import { Metadata } from "next";
import ImpactHero from "@/components/templates/data-driven/ImpactHero";
import DataDashboard from "@/components/templates/data-driven/DataDashboard";
import GrowthChart from "@/components/templates/data-driven/GrowthChart";
import AwardsSection from "@/components/templates/data-driven/AwardsSection";
import IndustryComparison from "@/components/templates/data-driven/IndustryComparison";
import {
  company,
  dashboardData,
  growthData,
  awards,
  industryComparison,
} from "@/data/data-driven/sample";

export const metadata: Metadata = {
  title: "HOME",
  description: `${company.name}の採用サイト。データで見る、成長できる環境。`,
};

const heroStats = [
  { value: company.employees, unit: "名", label: "社員数" },
  { value: 94.2, unit: "%", label: "定着率" },
  { value: 28, unit: "億円", label: "売上高" },
  { value: 14, unit: "期連続", label: "黒字経営" },
];

export default function DataDrivenHomePage() {
  return (
    <>
      <ImpactHero
        companyName={company.name}
        tagline="数字が証明する、成長できる環境"
        description="客観的なデータと実績で、私たちの企業文化と働きやすさをご紹介します。"
        stats={heroStats}
      />

      <DataDashboard data={dashboardData} />

      <GrowthChart
        revenue={growthData.revenue}
        employees={growthData.employees}
        projects={growthData.projects}
      />

      <AwardsSection awards={awards} />

      <IndustryComparison
        data={industryComparison}
        companyName={company.name}
      />
    </>
  );
}
