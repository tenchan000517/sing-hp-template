"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, Home, Users, Heart, Briefcase } from "lucide-react";
import CountUp from "@/components/animations/CountUp";
import SectionTitle from "@/components/common/SectionTitle";

interface WorkplaceStats {
  workHours: {
    average: number;
    remoteRatio: number;
  };
  vacation: {
    annualDays: number;
    paidLeaveRate: number;
  };
}

interface LaborDataSectionProps {
  stats: WorkplaceStats;
  overtimeHours: number;
  satisfactionScore: number;
}

export default function LaborDataSection({
  stats,
  overtimeHours,
  satisfactionScore,
}: LaborDataSectionProps) {
  const dataCards = [
    {
      icon: Clock,
      label: "1日の平均労働時間",
      value: stats.workHours.average,
      unit: "時間",
      description: "効率的な働き方を推進",
      color: "#1565C0",
    },
    {
      icon: Briefcase,
      label: "月平均残業時間",
      value: overtimeHours,
      unit: "時間",
      description: "業界平均28時間を大きく下回る",
      color: "#2E7D32",
    },
    {
      icon: Home,
      label: "リモートワーク率",
      value: stats.workHours.remoteRatio,
      unit: "%",
      description: "柔軟な働き方をサポート",
      color: "#7B1FA2",
    },
    {
      icon: Calendar,
      label: "年間休日",
      value: stats.vacation.annualDays,
      unit: "日",
      description: "完全週休2日制 + 祝日",
      color: "#F57C00",
    },
    {
      icon: Users,
      label: "有給取得率",
      value: stats.vacation.paidLeaveRate,
      unit: "%",
      description: "取得しやすい環境づくり",
      color: "#00838F",
    },
    {
      icon: Heart,
      label: "社員満足度",
      value: satisfactionScore,
      unit: "/5",
      description: "社内アンケート結果",
      color: "#C62828",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="労働環境データ"
          subtitle="ワークライフバランスを数字で証明"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {dataCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${card.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: card.color }} />
                  </div>
                  <span className="text-sm text-text-secondary">
                    {card.label}
                  </span>
                </div>

                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: card.color }}
                  >
                    <CountUp
                      end={card.value}
                      decimals={card.value % 1 !== 0 ? 1 : 0}
                    />
                  </span>
                  <span className="text-lg text-text-muted">{card.unit}</span>
                </div>

                <p className="text-xs text-text-muted">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
