"use client";

import { motion } from "framer-motion";
import SimplePieChart from "./SimplePieChart";
import SectionTitle from "@/components/common/SectionTitle";
import CountUp from "@/components/animations/CountUp";

interface BenefitItem {
  name: string;
  value: number;
  color: string;
}

interface BenefitsBreakdownProps {
  totalCost: number;
  breakdown: BenefitItem[];
}

export default function BenefitsBreakdown({
  totalCost,
  breakdown,
}: BenefitsBreakdownProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="福利厚生への投資"
          subtitle="1人あたりの年間福利厚生費"
          align="center"
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Chart */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-sm border border-border"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <SimplePieChart
                data={breakdown}
                height={300}
                innerRadius={70}
                outerRadius={110}
                showLabel
              />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Total */}
              <div className="text-center lg:text-left mb-8">
                <p className="text-sm text-text-muted mb-2">
                  1人あたり年間投資額
                </p>
                <div className="flex items-baseline justify-center lg:justify-start gap-1">
                  <span className="text-5xl font-bold text-primary">
                    <CountUp end={totalCost} />
                  </span>
                  <span className="text-xl text-text-muted">万円</span>
                </div>
              </div>

              {/* Breakdown List */}
              <div className="space-y-4">
                {breakdown.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-text-primary font-medium">
                          {item.name}
                        </span>
                        <span className="text-text-secondary">
                          {item.value}%
                        </span>
                      </div>
                      <div className="h-2 bg-bg-secondary rounded-full overflow-hidden mt-1">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: item.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
