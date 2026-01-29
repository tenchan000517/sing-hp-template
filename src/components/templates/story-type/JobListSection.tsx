"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Banknote, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

interface Job {
  id: string;
  title: string;
  type: string;
  salary: {
    min: number;
    max: number;
    unit: string;
  };
  location: string;
  description: string;
  appeal: string;
}

interface JobListSectionProps {
  jobs: Job[];
}

export default function JobListSection({ jobs }: JobListSectionProps) {
  const formatSalary = (job: Job) => {
    const minFormatted = (job.salary.min / 10000).toFixed(0);
    const maxFormatted = (job.salary.max / 10000).toFixed(0);
    return `${job.salary.unit}${minFormatted}万円〜${maxFormatted}万円`;
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="募集中の職種"
          subtitle="RECRUIT"
          description="現在募集中の職種をご紹介します。"
          align="center"
          border={false}
        />

        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                href={`/templates/story-type/jobs#${job.id}`}
                padding="lg"
                className="h-full border-t-4 border-t-[var(--color-primary)]"
              >
                {/* Badge */}
                <span className="inline-block px-3 py-1 text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full mb-4">
                  {job.type}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                  {job.title}
                </h3>

                {/* Appeal */}
                <p className="text-sm text-[var(--color-accent)] font-medium mb-4">
                  {job.appeal}
                </p>

                {/* Details */}
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)] mb-6">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[var(--color-text-muted)]" />
                    <span>{job.location}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Banknote className="w-4 h-4 text-[var(--color-text-muted)]" />
                    <span>{formatSalary(job)}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Briefcase className="w-4 h-4 text-[var(--color-text-muted)] mt-0.5" />
                    <span>{job.description}</span>
                  </li>
                </ul>

                {/* Link */}
                <div className="flex items-center text-[var(--color-primary)] font-medium text-sm">
                  <span>詳細を見る</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button href="/templates/story-type/apply" variant="accent" size="lg">
            応募する
          </Button>
        </div>
      </div>
    </section>
  );
}
