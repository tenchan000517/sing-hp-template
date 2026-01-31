import { Metadata } from "next";
import {
  MinimalHero,
  CompanySection,
  JobsAccordion,
  BenefitsGrid,
  FAQAccordion,
  SimpleForm,
  CEOMessage,
} from "@/components/templates/simple";
import {
  company,
  companyInfo,
  jobs,
  benefits,
  faqs,
  ceoMessage,
} from "@/data/simple/sample";

export const metadata: Metadata = {
  title: "採用情報",
  description: `${company.name}の採用情報。${company.tagline}`,
};

export default function SimplePage() {
  return (
    <>
      {/* ヒーローセクション */}
      <MinimalHero
        companyName={company.name}
        tagline={company.tagline}
        buttonText="採用情報を見る"
      />

      {/* 会社について */}
      <CompanySection
        description={company.description}
        info={companyInfo}
      />

      {/* 募集職種 */}
      <JobsAccordion jobs={jobs} />

      {/* 福利厚生 */}
      <BenefitsGrid benefits={benefits} />

      {/* よくある質問 */}
      <FAQAccordion faqs={faqs} />

      {/* 代表メッセージ */}
      <CEOMessage
        name={ceoMessage.name}
        title={ceoMessage.title}
        message={ceoMessage.message}
      />

      {/* 応募フォーム */}
      <SimpleForm
        jobs={jobs.map((job) => ({ id: job.id, title: job.title }))}
      />
    </>
  );
}
