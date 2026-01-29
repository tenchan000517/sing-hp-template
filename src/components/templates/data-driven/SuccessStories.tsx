"use client";

import { motion } from "framer-motion";
import { TrendingUp, Award } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

interface SuccessStory {
  id: string;
  name: string;
  age: number;
  joinYear: number;
  beforePosition: string;
  currentPosition: string;
  salaryIncrease: number;
  certifications: string[];
  story: string;
}

interface SuccessStoriesProps {
  stories: SuccessStory[];
}

export default function SuccessStories({ stories }: SuccessStoriesProps) {
  const currentYear = new Date().getFullYear();

  return (
    <section className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="成長事例"
          subtitle="実際のキャリアアップ事例をご紹介"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">
                    {story.name}
                  </span>
                </div>
                <div>
                  <p className="text-text-muted text-sm">
                    {story.age}歳 / 入社{currentYear - story.joinYear}年目
                  </p>
                </div>
              </div>

              {/* Career Progress */}
              <div className="bg-bg-secondary rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-text-muted">入社時</span>
                  <span className="text-sm text-text-muted">現在</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-text-secondary">
                    {story.beforePosition}
                  </span>
                  <div className="flex-1 h-0.5 bg-primary/20 relative">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <span className="text-sm font-bold text-primary">
                    {story.currentPosition}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">年収アップ</p>
                    <p className="font-bold text-green-600">
                      +{story.salaryIncrease}%
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">取得資格</p>
                    <p className="font-bold text-amber-600">
                      {story.certifications.length}個
                    </p>
                  </div>
                </div>
              </div>

              {/* Story */}
              <p className="text-sm text-text-secondary leading-relaxed">
                {story.story}
              </p>

              {/* Certifications */}
              <div className="flex flex-wrap gap-2 mt-4">
                {story.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
