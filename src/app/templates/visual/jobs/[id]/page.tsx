import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Calendar, Briefcase } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/common/Button";
import { jobs } from "@/data/visual/sample";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);
  if (!job) return { title: "職種詳細" };
  return {
    title: `${job.title} - 募集要項`,
    description: job.description,
  };
}

export function generateStaticParams() {
  return jobs.map((job) => ({ id: job.id }));
}

export default async function JobDetailPage({ params }: PageProps) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={job.photos[0]}
          alt={job.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <Link
              href="/templates/visual/jobs"
              className="mb-4 inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100"
            >
              <ArrowLeft className="h-4 w-4" />
              職種一覧に戻る
            </Link>
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded bg-[var(--color-accent)] px-2 py-0.5 text-xs font-medium">
                {job.type}
              </span>
              <span className="text-xs opacity-80">{job.openings}名募集</span>
            </div>
            <h1 className="text-3xl font-bold md:text-4xl">{job.title}</h1>
            <p className="mt-2 text-lg opacity-90">{job.catchphrase}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Quick Info */}
            <FadeIn direction="up">
              <div className="mb-12 grid gap-4 rounded-xl bg-[var(--color-bg-secondary)] p-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                    <Briefcase className="h-5 w-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)]">給与</p>
                    <p className="font-medium">
                      {(job.salary.min / 10000).toFixed(0)}〜
                      {(job.salary.max / 10000).toFixed(0)}万円
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                    <MapPin className="h-5 w-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)]">勤務地</p>
                    <p className="font-medium">{job.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                    <Clock className="h-5 w-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)]">勤務時間</p>
                    <p className="font-medium">
                      {job.workingHours.start}〜{job.workingHours.end}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                    <Calendar className="h-5 w-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)]">年間休日</p>
                    <p className="font-medium">{job.holidays.annual}日</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Job Description */}
            <FadeIn direction="up" delay={0.1}>
              <div className="mb-12">
                <h2 className="mb-4 text-xl font-bold">仕事内容</h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {job.description}
                </p>
              </div>
            </FadeIn>

            {/* Requirements */}
            <FadeIn direction="up" delay={0.2}>
              <div className="mb-12">
                <h2 className="mb-4 text-xl font-bold">応募資格</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-medium text-[var(--color-primary)]">
                      必須条件
                    </h3>
                    <ul className="list-inside list-disc space-y-1 text-[var(--color-text-secondary)]">
                      {job.requirements.required.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-medium text-[var(--color-primary)]">
                      歓迎条件
                    </h3>
                    <ul className="list-inside list-disc space-y-1 text-[var(--color-text-secondary)]">
                      {job.requirements.preferred.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  {job.requirements.welcome && (
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.welcome.map((item, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-[var(--color-accent)]/10 px-3 py-1 text-sm text-[var(--color-accent)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>

            {/* Benefits */}
            <FadeIn direction="up" delay={0.3}>
              <div className="mb-12">
                <h2 className="mb-4 text-xl font-bold">待遇・福利厚生</h2>
                <div className="flex flex-wrap gap-2">
                  {job.benefits.map((benefit, index) => (
                    <span
                      key={index}
                      className="rounded-lg bg-[var(--color-bg-secondary)] px-4 py-2 text-sm"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn direction="up" delay={0.4}>
              <div className="rounded-xl bg-[var(--color-primary)] p-8 text-center text-white">
                <h2 className="mb-4 text-2xl font-bold">
                  この職種に応募する
                </h2>
                <p className="mb-6 opacity-90">
                  少しでも興味があれば、まずはお気軽にエントリーください
                </p>
                <Button
                  href="/templates/visual/entry"
                  variant="outline"
                  size="lg"
                  className="border-white bg-white text-[var(--color-primary)] hover:bg-transparent hover:text-white"
                >
                  エントリーする
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Photos */}
      {job.photos.length > 1 && (
        <section className="bg-[var(--color-bg-secondary)] py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-xl font-bold">
              仕事風景
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {job.photos.slice(1).map((photo, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <Image
                    src={photo}
                    alt={`${job.title}の仕事風景`}
                    width={800}
                    height={600}
                    className="w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
