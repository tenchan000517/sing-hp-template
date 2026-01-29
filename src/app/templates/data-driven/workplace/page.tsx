import { Metadata } from "next";
import LaborDataSection from "@/components/templates/data-driven/LaborDataSection";
import SalaryModelSection from "@/components/templates/data-driven/SalaryModelSection";
import BenefitsBreakdown from "@/components/templates/data-driven/BenefitsBreakdown";
import { company, workplaceStats, salaryModels, dashboardData } from "@/data/data-driven/sample";

export const metadata: Metadata = {
  title: "数字で見る働きやすさ",
  description: `${company.name}の労働環境、給与水準、福利厚生をデータでご紹介します。`,
};

export default function WorkplacePage() {
  const overtimeData = dashboardData.find((d) => d.id === "overtime");
  const satisfactionData = dashboardData.find((d) => d.id === "satisfaction");

  return (
    <>
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            数字で見る働きやすさ
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            客観的なデータで当社の労働環境をご紹介します
          </p>
        </div>
      </div>

      <LaborDataSection
        stats={workplaceStats}
        overtimeHours={overtimeData?.value || 15.2}
        satisfactionScore={satisfactionData?.value || 4.2}
      />

      <SalaryModelSection models={salaryModels} />

      <BenefitsBreakdown
        totalCost={workplaceStats.benefits.totalCostPerEmployee}
        breakdown={workplaceStats.benefits.breakdown}
      />
    </>
  );
}
