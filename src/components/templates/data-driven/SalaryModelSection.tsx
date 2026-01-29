"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

interface SalaryModel {
  position: string;
  years: number;
  age: number;
  annual: number;
  monthly: number;
  bonus: number;
  description: string;
}

interface SalaryModelSectionProps {
  models: SalaryModel[];
}

export default function SalaryModelSection({ models }: SalaryModelSectionProps) {
  const maxSalary = Math.max(...models.map((m) => m.annual));

  return (
    <section className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="給与モデルケース"
          subtitle="キャリアステージ別の年収例"
          align="center"
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 p-4 bg-bg-secondary border-b border-border text-sm font-medium text-text-secondary">
              <div className="col-span-4">ポジション</div>
              <div className="col-span-2 text-center">年齢</div>
              <div className="col-span-2 text-center">勤続年数</div>
              <div className="col-span-4 text-center">年収</div>
            </div>

            {/* Rows */}
            {models.map((model, index) => (
              <motion.div
                key={model.position}
                className="grid grid-cols-12 gap-4 p-4 border-b border-border last:border-b-0 hover:bg-bg-tertiary transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="col-span-4">
                  <p className="font-medium text-text-primary">{model.position}</p>
                  <p className="text-xs text-text-muted">{model.description}</p>
                </div>
                <div className="col-span-2 text-center text-text-secondary">
                  {model.age}歳
                </div>
                <div className="col-span-2 text-center text-text-secondary">
                  {model.years}年目
                </div>
                <div className="col-span-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="h-3 bg-bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(model.annual / maxSalary) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        />
                      </div>
                    </div>
                    <span className="font-bold text-primary whitespace-nowrap">
                      {model.annual}万円
                    </span>
                  </div>
                  <p className="text-xs text-text-muted mt-1">
                    月給 {(model.monthly / 10000).toFixed(1)}万円 + 賞与 {model.bonus}万円
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-text-primary mb-1">
                  年収は業界平均を約28%上回る水準
                </p>
                <p className="text-sm text-text-secondary">
                  上記は標準的な昇給・昇格を経た場合のモデルケースです。
                  実際の給与は、スキル・実績・役割に応じて決定します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
