import { Metadata } from "next";
import BenefitsSection from "@/components/templates/story-type/BenefitsSection";
import OfficeGallery from "@/components/templates/story-type/OfficeGallery";
import TrainingSection from "@/components/templates/story-type/TrainingSection";
import FadeIn from "@/components/animations/FadeIn";
import { company, benefits, training, office } from "@/data/story-type/sample";

export const metadata: Metadata = {
  title: "はたらく環境",
  description: `${company.name}の福利厚生、オフィス環境、教育・研修制度をご紹介します。社員が安心して長く働ける環境を整えています。`,
};

export default function EnvironmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium opacity-80 tracking-wider uppercase mb-4 block">
                ENVIRONMENT
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                はたらく環境
              </h1>
              <p className="text-lg opacity-90 leading-relaxed">
                福利厚生、オフィス環境、教育制度など、
                <br className="hidden md:block" />
                社員が安心して働ける環境をご紹介します。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <BenefitsSection benefits={benefits} />

      {/* Office */}
      <OfficeGallery office={office} />

      {/* Training */}
      <TrainingSection training={training} />
    </>
  );
}
