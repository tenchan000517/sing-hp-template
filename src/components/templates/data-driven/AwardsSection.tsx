"use client";

import { motion } from "framer-motion";
import { Award, Shield, Sparkles, Trophy } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

interface AwardItem {
  id: string;
  name: string;
  year: number;
  description: string;
  logo?: string;
}

interface AwardsSectionProps {
  title?: string;
  subtitle?: string;
  awards: AwardItem[];
}

const getIcon = (id: string) => {
  const icons: Record<string, typeof Award> = {
    health: Shield,
    workStyle: Sparkles,
    dx: Trophy,
    growth: Award,
  };
  return icons[id] || Award;
};

export default function AwardsSection({
  title = "認定・受賞実績",
  subtitle = "第三者機関からの評価",
  awards,
}: AwardsSectionProps) {
  return (
    <section className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {awards.map((award, index) => {
            const Icon = getIcon(award.id);
            return (
              <motion.div
                key={award.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent-light rounded-full text-xs font-medium mb-2">
                    {award.year}年
                  </span>
                  <h3 className="font-bold text-text-primary mb-2">
                    {award.name}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
