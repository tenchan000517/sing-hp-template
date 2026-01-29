import { Metadata } from "next";
import JobDetail from "@/components/templates/story-type/JobDetail";
import FadeIn from "@/components/animations/FadeIn";
import { company, jobs } from "@/data/story-type/sample";
import { generateJobPostingSchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "募集職種",
  description: `${company.name}の募集職種をご紹介します。${jobs.map((j) => j.title).join("、")}など、あなたに合った職種を探してみてください。`,
};

// Generate JobPosting schema for each job
const jobPostingSchemas = jobs.map((job) =>
  generateJobPostingSchema({
    title: job.title,
    description: job.description + " " + job.details.join(" "),
    datePosted: new Date().toISOString().split("T")[0],
    employmentType: job.type === "正社員" ? "FULL_TIME" : "PART_TIME",
    hiringOrganization: {
      name: company.name,
      sameAs: company.website,
    },
    jobLocation: {
      addressLocality: company.address.city,
      addressRegion: company.address.prefecture,
    },
    baseSalary: {
      minValue: job.salary.min,
      maxValue: job.salary.max,
      unitText: "MONTH",
    },
    experienceRequirements: job.requirements.required.join(", "),
    benefits: job.benefits.join(", "),
  })
);

export default function JobsPage() {
  return (
    <>
      {/* JSON-LD for each job */}
      {jobPostingSchemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}

      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium opacity-80 tracking-wider uppercase mb-4 block">
                RECRUIT
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">募集職種</h1>
              <p className="text-lg opacity-90 leading-relaxed">
                現在募集中の職種をご紹介します。
                <br className="hidden md:block" />
                あなたに合った職種を見つけてください。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Job List Navigation */}
      <section className="py-8 bg-[var(--color-bg-secondary)] sticky top-16 lg:top-20 z-40 border-b border-[var(--color-border)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {jobs.map((job) => (
              <a
                key={job.id}
                href={`#${job.id}`}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-colors shadow-sm"
              >
                {job.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details */}
      {jobs.map((job, index) => (
        <JobDetail key={job.id} job={job} index={index} />
      ))}
    </>
  );
}
