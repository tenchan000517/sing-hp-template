import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/common/Button";
import { members } from "@/data/visual/sample";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const member = members.find((m) => m.id === id);
  if (!member) return { title: "社員詳細" };
  return {
    title: `${member.name} - ${member.position}`,
    description: `${member.name}さんのインタビュー。${member.interview.reason.slice(0, 100)}...`,
  };
}

export function generateStaticParams() {
  return members.map((member) => ({ id: member.id }));
}

export default async function MemberDetailPage({ params }: PageProps) {
  const { id } = await params;
  const member = members.find((m) => m.id === id);

  if (!member) {
    notFound();
  }

  const interviewQuestions = [
    { q: "この会社を選んだ理由は？", a: member.interview.reason },
    { q: "今の仕事内容は？", a: member.interview.work },
    { q: "仕事のやりがいは？", a: member.interview.rewarding },
    { q: "失敗談や苦労したことは？", a: member.interview.failure },
    { q: "職場の雰囲気は？", a: member.interview.atmosphere },
    { q: "オフの過ごし方は？", a: member.interview.privateTime },
    { q: "応募を考えている方へ", a: member.interview.message },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <Link
              href="/templates/visual/people"
              className="mb-4 inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100"
            >
              <ArrowLeft className="h-4 w-4" />
              社員一覧に戻る
            </Link>
            <p className="mb-2 text-sm">
              {member.department} / {member.position} / {member.joinYear}年入社
            </p>
            <h1 className="text-3xl font-bold md:text-4xl">{member.name}</h1>
          </div>
        </div>
      </section>

      {/* Interview */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          {interviewQuestions.map((item, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.1}>
              <div
                className={`mb-12 ${index % 2 === 0 ? "" : "md:text-right"}`}
              >
                <span className="mb-2 inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1 text-sm font-medium text-[var(--color-primary)]">
                  Q{index + 1}
                </span>
                <h3 className="mb-4 text-xl font-bold text-[var(--color-text-primary)]">
                  {item.q}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {item.a}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Gallery */}
      {member.gallery && member.gallery.length > 0 && (
        <section className="bg-[var(--color-bg-secondary)] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">
              {member.name}さんの日常
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {member.gallery.map((photo, index) => (
                <FadeIn key={index} direction="up" delay={index * 0.1}>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      width={600}
                      height={400}
                      className="w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <p className="mt-2 text-center text-sm text-[var(--color-text-secondary)]">
                      {photo.caption}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[var(--color-primary)] py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-2xl font-bold">
            {member.name}さんと一緒に働きませんか？
          </h2>
          <p className="mb-8 opacity-90">
            私たちはあなたの応募を心よりお待ちしています
          </p>
          <Button
            href="/templates/visual/jobs"
            variant="outline"
            className="border-white bg-white text-[var(--color-primary)] hover:bg-transparent hover:text-white"
          >
            募集職種を見る
          </Button>
        </div>
      </section>
    </>
  );
}
