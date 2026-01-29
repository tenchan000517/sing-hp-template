"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Check,
} from "lucide-react";
import Button from "@/components/common/Button";
import SectionTitle from "@/components/common/SectionTitle";

interface Job {
  id: string;
  title: string;
  type: string;
  experience: string;
  salary: {
    min: number;
    max: number;
    unit: string;
  };
  location: string;
  description: string;
  requirements: {
    required: string[];
    preferred: string[];
  };
  benefits: string[];
  openings: number;
}

interface JobsTableProps {
  jobs: Job[];
}

export default function JobsTable({ jobs }: JobsTableProps) {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const toggleExpand = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="募集職種"
          subtitle={`現在${jobs.reduce((acc, job) => acc + job.openings, 0)}名を募集中`}
          align="center"
        />

        <div className="max-w-4xl mx-auto mt-12 space-y-4">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              className="bg-white rounded-xl shadow-sm border border-border overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Job Header */}
              <div
                className="p-6 cursor-pointer hover:bg-bg-tertiary transition-colors"
                onClick={() => toggleExpand(job.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="badge badge-primary">{job.type}</span>
                      <span className="badge badge-success">{job.experience}</span>
                      <span className="text-sm text-text-muted">
                        {job.openings}名募集
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>
                          {job.salary.min}〜{job.salary.max}
                          {job.salary.unit}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    {expandedJob === job.id ? (
                      <ChevronUp className="w-6 h-6 text-text-muted" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-text-muted" />
                    )}
                  </div>
                </div>
              </div>

              {/* Job Details */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedJob === job.id ? "auto" : 0,
                  opacity: expandedJob === job.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 border-t border-border pt-6">
                  {/* Description */}
                  <p className="text-text-secondary mb-6">{job.description}</p>

                  {/* Requirements */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-text-primary mb-3">
                        必須要件
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.required.map((req) => (
                          <li
                            key={req}
                            className="flex items-start gap-2 text-sm text-text-secondary"
                          >
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary mb-3">
                        歓迎要件
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.preferred.map((req) => (
                          <li
                            key={req}
                            className="flex items-start gap-2 text-sm text-text-secondary"
                          >
                            <Check className="w-4 h-4 text-text-muted mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-bold text-text-primary mb-3">
                      この職種の魅力
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="px-3 py-1 bg-accent/10 text-accent-light text-sm rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex justify-center">
                    <Button
                      href={`/templates/data-driven/apply?job=${job.id}`}
                      variant="primary"
                    >
                      この職種に応募する
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
