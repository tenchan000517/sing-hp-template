"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface ComparisonItem {
  item: string;
  company: number;
  industry: number;
  unit: string;
}

interface ComparisonTableProps {
  data: ComparisonItem[];
  companyLabel?: string;
  industryLabel?: string;
}

export default function ComparisonTable({
  data,
  companyLabel = "当社",
  industryLabel = "業界平均",
}: ComparisonTableProps) {
  const getDifference = (company: number, industry: number, item: string) => {
    const diff = company - industry;
    // 残業時間など、低い方が良い項目
    const lowerIsBetter = item.includes("残業") || item.includes("離職");

    if (lowerIsBetter) {
      if (diff < 0) return { icon: TrendingUp, color: "text-green-600", better: true };
      if (diff > 0) return { icon: TrendingDown, color: "text-red-600", better: false };
    } else {
      if (diff > 0) return { icon: TrendingUp, color: "text-green-600", better: true };
      if (diff < 0) return { icon: TrendingDown, color: "text-red-600", better: false };
    }
    return { icon: Minus, color: "text-gray-400", better: null };
  };

  return (
    <div className="overflow-x-auto">
      <table className="comparison-table">
        <thead>
          <tr>
            <th className="w-1/4">項目</th>
            <th className="w-1/4 text-center">{companyLabel}</th>
            <th className="w-1/4 text-center">{industryLabel}</th>
            <th className="w-1/4 text-center">差分</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            const { icon: Icon, color, better } = getDifference(
              row.company,
              row.industry,
              row.item
            );
            const diff = Math.abs(row.company - row.industry);

            return (
              <motion.tr
                key={row.item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <td className="font-medium">{row.item}</td>
                <td className="text-center">
                  <span className={`font-bold ${better ? "text-primary" : ""}`}>
                    {row.company}
                  </span>
                  <span className="text-sm text-text-muted ml-1">{row.unit}</span>
                </td>
                <td className="text-center text-text-secondary">
                  {row.industry}
                  <span className="text-sm text-text-muted ml-1">{row.unit}</span>
                </td>
                <td className="text-center">
                  <div className={`flex items-center justify-center gap-1 ${color}`}>
                    <Icon size={16} />
                    <span className="font-medium">
                      {row.company > row.industry ? "+" : "-"}
                      {diff}
                      {row.unit}
                    </span>
                  </div>
                </td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
