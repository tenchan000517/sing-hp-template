"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Briefcase, Lightbulb, Clock, Users } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

interface Program {
  name: string;
  duration: string;
  target: string;
}

interface TrainingCategory {
  category: string;
  programs: Program[];
}

interface TrainingSupportProps {
  trainingPrograms: TrainingCategory[];
  trainingHoursPerYear: number;
}

const categoryIcons: Record<string, typeof BookOpen> = {
  技術研修: BookOpen,
  ビジネス研修: Briefcase,
  自己啓発支援: Lightbulb,
};

export default function TrainingSupport({
  trainingPrograms,
  trainingHoursPerYear,
}: TrainingSupportProps) {
  const [activeCategory, setActiveCategory] = useState(
    trainingPrograms[0]?.category || ""
  );

  const activePrograms = trainingPrograms.find(
    (t) => t.category === activeCategory
  )?.programs;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="研修・スキルアップ支援"
          subtitle={`年間${trainingHoursPerYear}時間の研修時間を確保`}
          align="center"
        />

        <div className="max-w-4xl mx-auto mt-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {trainingPrograms.map((category) => {
              const Icon = categoryIcons[category.category] || BookOpen;
              return (
                <button
                  key={category.category}
                  onClick={() => setActiveCategory(category.category)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all ${
                    activeCategory === category.category
                      ? "bg-primary text-white shadow-md"
                      : "bg-bg-secondary text-text-secondary hover:bg-bg-tertiary"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.category}
                </button>
              );
            })}
          </div>

          {/* Programs List */}
          <motion.div
            key={activeCategory}
            className="bg-white rounded-xl shadow-sm border border-border overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {activePrograms?.map((program, index) => (
              <motion.div
                key={program.name}
                className="flex items-center p-5 border-b border-border last:border-b-0 hover:bg-bg-tertiary transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-1">
                  <h4 className="font-bold text-text-primary mb-1">
                    {program.name}
                  </h4>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-text-muted">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-text-muted">
                      <Users className="w-4 h-4" />
                      <span>{program.target}</span>
                    </div>
                  </div>
                </div>
                <div className="badge badge-primary">対象</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Support Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              {
                title: "費用全額会社負担",
                description: "研修費用・教材費・受験料はすべて会社が負担",
              },
              {
                title: "業務時間内で受講可",
                description: "勤務時間内で研修・自己学習の時間を確保",
              },
              {
                title: "合格報奨金制度",
                description: "資格取得時に最大10万円の報奨金を支給",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-primary/5 border border-primary/20 rounded-lg p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
