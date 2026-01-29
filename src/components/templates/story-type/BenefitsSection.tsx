"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Banknote,
  Shield,
  Gift,
} from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

interface BenefitItem {
  name: string;
  description: string;
}

interface Benefits {
  vacation: BenefitItem[];
  allowances: BenefitItem[];
  insurance: BenefitItem[];
  others: BenefitItem[];
}

interface BenefitsSectionProps {
  benefits: Benefits;
}

const categories = [
  { key: "vacation", label: "休暇・休日", icon: Calendar, color: "#4CAF50" },
  { key: "allowances", label: "手当・補助", icon: Banknote, color: "#2196F3" },
  { key: "insurance", label: "保険・年金", icon: Shield, color: "#9C27B0" },
  { key: "others", label: "その他", icon: Gift, color: "#FF9800" },
];

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg-secondary)]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="充実の福利厚生・制度"
          subtitle="BENEFITS"
          description="社員が安心して長く働けるよう、様々な制度を整えています。"
          align="center"
          border={false}
        />

        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const items = benefits[category.key as keyof Benefits];

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-[var(--color-border)] overflow-hidden"
              >
                {/* Header */}
                <div
                  className="flex items-center gap-3 px-6 py-4"
                  style={{ backgroundColor: `${category.color}10` }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: category.color }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-[var(--color-text-primary)]">
                    {category.label}
                  </h3>
                </div>

                {/* Items */}
                <ul className="divide-y divide-[var(--color-border)]">
                  {items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="px-6 py-3 flex justify-between items-start gap-4"
                    >
                      <span className="font-medium text-sm text-[var(--color-text-primary)]">
                        {item.name}
                      </span>
                      <span className="text-sm text-[var(--color-text-secondary)] text-right">
                        {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
