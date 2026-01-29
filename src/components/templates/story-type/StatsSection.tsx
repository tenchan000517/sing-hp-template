"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/animations/CountUp";
import { Calendar, Users, Smile, GraduationCap } from "lucide-react";

interface StatItem {
  value: number;
  unit: string;
  label: string;
  description: string;
}

interface StatsSectionProps {
  stats: StatItem[];
}

const icons = [Calendar, Users, Smile, GraduationCap];

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
                className="text-center p-6 rounded-xl bg-[var(--color-bg-secondary)] transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-1">
                  <CountUp
                    value={stat.value}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    suffix={stat.unit}
                  />
                </div>
                <div className="text-lg font-medium text-[var(--color-text-primary)] mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-[var(--color-text-muted)]">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
