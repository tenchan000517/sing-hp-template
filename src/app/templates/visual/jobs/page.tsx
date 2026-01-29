import { Metadata } from "next";
import JobCard from "@/components/templates/visual/JobCard";
import CTABanner from "@/components/templates/visual/CTABanner";
import { company, jobs } from "@/data/visual/sample";

export const metadata: Metadata = {
  title: "JOBS",
  description: `${company.name}の募集職種一覧。デザイナー・映像クリエイターを募集中。`,
};

export default function JobsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="mb-4 block text-sm font-medium uppercase tracking-widest opacity-80">
            JOBS
          </span>
          <h1 className="text-3xl font-bold md:text-4xl">募集職種</h1>
          <p className="mt-4 text-lg opacity-90">
            あなたの「やりたい」を実現できる仕事があります
          </p>
        </div>
      </section>

      {/* Job List */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {jobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        mainCopy="気になる職種はありましたか？"
        subCopy="まずはお気軽にエントリーください"
        buttonText="エントリーする"
        buttonHref="/templates/visual/entry"
      />
    </>
  );
}
