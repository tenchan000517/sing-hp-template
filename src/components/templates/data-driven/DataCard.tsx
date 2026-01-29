"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/animations/CountUp";
import { TrendingUp, TrendingDown } from "lucide-react";

interface DataCardProps {
  label: string;
  value: number;
  unit: string;
  description?: string;
  trend?: string;
  trendDirection?: "up" | "down";
  industryAverage?: number;
  delay?: number;
}

export default function DataCard({
  label,
  value,
  unit,
  description,
  trend,
  trendDirection,
  industryAverage,
  delay = 0,
}: DataCardProps) {
  return (
    <motion.div
      className="data-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <p className="text-sm text-text-secondary mb-2">{label}</p>
      <div className="flex items-baseline gap-1 mb-2">
        <span className="stat-number">
          <CountUp end={value} decimals={value % 1 !== 0 ? 1 : 0} />
        </span>
        <span className="text-lg text-text-secondary">{unit}</span>
      </div>

      {trend && (
        <div className={`flex items-center gap-1 text-sm mb-2 ${
          trendDirection === "up" ? "text-green-600" : "text-blue-600"
        }`}>
          {trendDirection === "up" ? (
            <TrendingUp size={16} />
          ) : (
            <TrendingDown size={16} />
          )}
          <span>前年比 {trend}</span>
        </div>
      )}

      {industryAverage !== undefined && (
        <div className="mt-3 pt-3 border-t border-border">
          <div className="flex justify-between text-xs text-text-muted">
            <span>業界平均</span>
            <span>{industryAverage}{unit}</span>
          </div>
          <div className="progress-bar mt-2">
            <motion.div
              className="progress-bar-fill"
              initial={{ width: 0 }}
              whileInView={{
                width: `${Math.min((value / industryAverage) * 50, 100)}%`
              }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: delay + 0.5 }}
            />
          </div>
        </div>
      )}

      {description && (
        <p className="text-xs text-text-muted mt-2">{description}</p>
      )}
    </motion.div>
  );
}
