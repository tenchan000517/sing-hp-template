import { Metadata } from "next";
import CareerFlowchart from "@/components/templates/data-driven/CareerFlowchart";
import SuccessStories from "@/components/templates/data-driven/SuccessStories";
import TrainingSupport from "@/components/templates/data-driven/TrainingSupport";
import { company, careerData, dashboardData } from "@/data/data-driven/sample";

export const metadata: Metadata = {
  title: "キャリアパス",
  description: `${company.name}のキャリアパス、成長事例、研修制度をご紹介します。`,
};

export default function CareerPage() {
  const trainingHours = dashboardData.find((d) => d.id === "training")?.value || 120;

  return (
    <>
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">キャリアパス</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            あなたの成長をデータで支える環境があります
          </p>
        </div>
      </div>

      <CareerFlowchart paths={careerData.paths} />

      <SuccessStories stories={careerData.successStories} />

      <TrainingSupport
        trainingPrograms={careerData.trainingPrograms}
        trainingHoursPerYear={trainingHours}
      />
    </>
  );
}
