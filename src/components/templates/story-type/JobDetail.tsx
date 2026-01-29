"use client";

import {
  MapPin,
  Clock,
  Calendar,
  Banknote,
  Briefcase,
  CheckCircle,
  User,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/common/Button";
import FadeIn from "@/components/animations/FadeIn";

interface SelectionStep {
  step: number;
  title: string;
  description: string;
}

interface Job {
  id: string;
  title: string;
  type: string;
  salary: {
    min: number;
    max: number;
    unit: string;
    note: string;
  };
  location: string;
  description: string;
  details: string[];
  requirements: {
    required: string[];
    preferred: string[];
    welcome: string[];
  };
  workingHours: {
    start: string;
    end: string;
    break: number;
    overtime: string;
  };
  holidays: {
    type: string;
    days: string[];
    annual: number;
    others: string[];
  };
  benefits: string[];
  selectionProcess: SelectionStep[];
  appeal: string;
}

interface JobDetailProps {
  job: Job;
  index: number;
}

export default function JobDetail({ job, index }: JobDetailProps) {
  const formatSalary = () => {
    const minFormatted = (job.salary.min / 10000).toFixed(0);
    const maxFormatted = (job.salary.max / 10000).toFixed(0);
    return `${job.salary.unit}${minFormatted}万円〜${maxFormatted}万円`;
  };

  return (
    <article
      id={job.id}
      className={`py-16 md:py-24 scroll-mt-24 ${
        index % 2 === 0 ? "bg-white" : "bg-[var(--color-bg-tertiary)]"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium rounded-full mb-4">
                {job.type}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-3">
                {job.title}
              </h2>
              <p className="text-lg text-[var(--color-accent)] font-medium">
                {job.appeal}
              </p>
            </div>
          </FadeIn>

          {/* Overview */}
          <FadeIn direction="up" delay={0.1}>
            <div className="bg-white rounded-xl shadow-sm border border-[var(--color-border)] p-6 md:p-8 mb-8">
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 section-title-bordered">
                仕事内容
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                {job.description}
              </p>
              <ul className="space-y-2">
                {job.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--color-text-secondary)]">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Requirements */}
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white rounded-xl shadow-sm border border-[var(--color-border)] p-6 md:p-8 mb-8">
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 section-title-bordered">
                募集要項
              </h3>

              <dl className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 pb-4 border-b border-[var(--color-border)]">
                  <dt className="flex items-center gap-2 text-[var(--color-text-muted)] w-32 flex-shrink-0">
                    <Banknote className="w-4 h-4" />
                    給与
                  </dt>
                  <dd className="text-[var(--color-text-primary)]">
                    <span className="font-bold text-lg">{formatSalary()}</span>
                    <span className="block text-sm text-[var(--color-text-secondary)] mt-1">
                      {job.salary.note}
                    </span>
                  </dd>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-2 pb-4 border-b border-[var(--color-border)]">
                  <dt className="flex items-center gap-2 text-[var(--color-text-muted)] w-32 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                    勤務地
                  </dt>
                  <dd className="text-[var(--color-text-primary)]">{job.location}</dd>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-2 pb-4 border-b border-[var(--color-border)]">
                  <dt className="flex items-center gap-2 text-[var(--color-text-muted)] w-32 flex-shrink-0">
                    <Clock className="w-4 h-4" />
                    勤務時間
                  </dt>
                  <dd className="text-[var(--color-text-primary)]">
                    {job.workingHours.start}〜{job.workingHours.end}（休憩{job.workingHours.break}分）
                    <span className="block text-sm text-[var(--color-text-secondary)] mt-1">
                      残業：{job.workingHours.overtime}
                    </span>
                  </dd>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-2 pb-4 border-b border-[var(--color-border)]">
                  <dt className="flex items-center gap-2 text-[var(--color-text-muted)] w-32 flex-shrink-0">
                    <Calendar className="w-4 h-4" />
                    休日休暇
                  </dt>
                  <dd className="text-[var(--color-text-primary)]">
                    {job.holidays.type}（{job.holidays.days.join("・")}）
                    <span className="block text-sm text-[var(--color-text-secondary)] mt-1">
                      年間休日{job.holidays.annual}日 / {job.holidays.others.join("、")}
                    </span>
                  </dd>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <dt className="flex items-center gap-2 text-[var(--color-text-muted)] w-32 flex-shrink-0">
                    <Briefcase className="w-4 h-4" />
                    待遇
                  </dt>
                  <dd className="text-[var(--color-text-secondary)] text-sm">
                    {job.benefits.join(" / ")}
                  </dd>
                </div>
              </dl>
            </div>
          </FadeIn>

          {/* Requirements */}
          <FadeIn direction="up" delay={0.3}>
            <div className="bg-white rounded-xl shadow-sm border border-[var(--color-border)] p-6 md:p-8 mb-8">
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 section-title-bordered">
                応募資格・求める人物像
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="font-medium text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-[var(--color-primary)]" />
                    必須条件
                  </p>
                  <ul className="ml-6 space-y-1">
                    {job.requirements.required.map((req, i) => (
                      <li key={i} className="text-sm text-[var(--color-text-secondary)] list-disc">
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {job.requirements.preferred.length > 0 && (
                  <div>
                    <p className="font-medium text-[var(--color-text-primary)] mb-2">
                      歓迎条件
                    </p>
                    <ul className="ml-6 space-y-1">
                      {job.requirements.preferred.map((req, i) => (
                        <li key={i} className="text-sm text-[var(--color-text-secondary)] list-disc">
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  {job.requirements.welcome.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Selection Process */}
          <FadeIn direction="up" delay={0.4}>
            <div className="bg-white rounded-xl shadow-sm border border-[var(--color-border)] p-6 md:p-8 mb-8">
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 section-title-bordered">
                選考フロー
              </h3>

              <div className="flex flex-col md:flex-row gap-4">
                {job.selectionProcess.map((step, i) => (
                  <div key={step.step} className="flex-1 relative">
                    <div className="flex md:flex-col items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1 md:text-center">
                        <p className="font-bold text-[var(--color-text-primary)]">
                          {step.title}
                        </p>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {i < job.selectionProcess.length - 1 && (
                      <ArrowRight className="hidden md:block absolute -right-2 top-4 w-4 h-4 text-[var(--color-text-muted)]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* CTA */}
          <div className="text-center">
            <Button href="/templates/story-type/apply" variant="accent" size="lg">
              この職種に応募する
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
