"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

interface TrainingStep {
  step: number;
  title: string;
  duration: string;
  description: string;
  contents: string[];
}

interface Certification {
  name: string;
  support: string;
}

interface Training {
  steps: TrainingStep[];
  certifications: Certification[];
}

interface TrainingSectionProps {
  training: Training;
}

export default function TrainingSection({ training }: TrainingSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg-tertiary)]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="安心の教育・研修制度"
          subtitle="TRAINING"
          description="未経験の方も安心してスタートできるよう、充実した研修制度を用意しています。"
          align="center"
          border={false}
        />

        {/* Training Steps */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid md:grid-cols-2 gap-6">
            {training.steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-[var(--color-border)] p-6 relative overflow-hidden"
              >
                {/* Step number background */}
                <div className="absolute -top-4 -right-4 text-8xl font-bold text-[var(--color-primary)]/5">
                  {step.step}
                </div>

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--color-text-primary)]">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[var(--color-primary)]">
                        {step.duration}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                    {step.description}
                  </p>

                  {/* Contents */}
                  <ul className="space-y-1">
                    {step.contents.map((content, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"
                      >
                        <ArrowRight className="w-3 h-3 text-[var(--color-primary)]" />
                        {content}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mt-12 bg-white rounded-xl shadow-sm border border-[var(--color-border)] p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[var(--color-text-primary)]">
                資格取得支援制度
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                仕事に役立つ資格の取得を会社がサポートします
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {training.certifications.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-[var(--color-bg-tertiary)] rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[var(--color-primary)]" />
                  <span className="font-medium text-[var(--color-text-primary)]">
                    {cert.name}
                  </span>
                </div>
                <span className="text-sm text-[var(--color-accent)]">
                  {cert.support}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
