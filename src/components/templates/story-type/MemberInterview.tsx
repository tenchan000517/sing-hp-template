"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

interface Schedule {
  time: string;
  activity: string;
}

interface Interview {
  reason: string;
  anxiety: string;
  reality: string;
  rewarding: string;
  failure: string;
  growth: string;
  atmosphere: string;
  message: string;
}

interface Member {
  id: string;
  name: string;
  age: number;
  yearsOfService: number;
  position: string;
  department: string;
  previousJob: string;
  photo: string;
  catchphrase: string;
  interview: Interview;
  schedule: Schedule[];
}

interface MemberInterviewProps {
  member: Member;
  index: number;
}

const questions = [
  { key: "reason", label: "この会社を選んだ理由は？" },
  { key: "anxiety", label: "入社前に不安だったことは？" },
  { key: "reality", label: "実際に働いてみてどうでしたか？" },
  { key: "rewarding", label: "今の仕事のやりがいは？" },
  { key: "failure", label: "失敗談や苦労したことは？" },
  { key: "growth", label: "どんな成長を実感していますか？" },
  { key: "atmosphere", label: "職場の雰囲気は？" },
  { key: "message", label: "応募を考えている方へメッセージ" },
];

export default function MemberInterview({ member, index }: MemberInterviewProps) {
  return (
    <article id={member.id} className="scroll-mt-24">
      <div className={`py-16 md:py-24 ${index % 2 === 0 ? "bg-white" : "bg-[var(--color-bg-tertiary)]"}`}>
        <div className="container mx-auto px-4">
          {/* Profile Header */}
          <FadeIn direction="up">
            <div className="grid lg:grid-cols-3 gap-8 items-start mb-12">
              {/* Photo */}
              <div className="lg:col-span-1">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="lg:col-span-2">
                <div className="inline-block px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium rounded-full mb-4">
                  {member.department} / {member.position}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-2">
                  {member.name}さん（{member.age}歳）
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  入社{member.yearsOfService}年目 / 前職：{member.previousJob}
                </p>
                <p className="text-xl text-[var(--color-primary)] font-medium">
                  「{member.catchphrase}」
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Interview Q&A */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {questions.map((q, i) => (
                <motion.div
                  key={q.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <div className="bg-[var(--color-primary)]/10 px-4 py-2 rounded-t-lg">
                    <p className="font-bold text-[var(--color-primary)]">
                      Q. {q.label}
                    </p>
                  </div>
                  <div className="bg-white px-4 py-4 rounded-b-lg border border-t-0 border-[var(--color-border)]">
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {member.interview[q.key as keyof Interview]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Schedule */}
            <FadeIn direction="up" className="mt-12">
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6 section-title-bordered">
                {member.name}さんの1日
              </h3>
              <div className="relative pl-6 border-l-2 border-[var(--color-primary)]/30">
                {member.schedule.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="relative pb-6 last:pb-0"
                  >
                    <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-[var(--color-primary)] border-2 border-white" />
                    <div className="flex gap-4">
                      <span className="font-bold text-[var(--color-primary)] w-14 flex-shrink-0">
                        {item.time}
                      </span>
                      <span className="text-[var(--color-text-secondary)]">
                        {item.activity}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </article>
  );
}
