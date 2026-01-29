"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  color?: string;
  height?: number;
  delay?: number;
}

export default function ProgressBar({
  value,
  max = 100,
  label,
  showValue = true,
  color = "#1565C0",
  height = 8,
  delay = 0,
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className="text-sm text-text-secondary">{label}</span>
          )}
          {showValue && (
            <span className="text-sm font-medium text-primary">
              {value}{max !== 100 ? `/${max}` : "%"}
            </span>
          )}
        </div>
      )}
      <div
        className="bg-bg-secondary rounded-full overflow-hidden"
        style={{ height }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
