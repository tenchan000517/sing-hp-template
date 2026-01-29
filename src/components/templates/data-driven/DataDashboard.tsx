"use client";

import { motion } from "framer-motion";
import DataCard from "./DataCard";
import SectionTitle from "@/components/common/SectionTitle";

interface DashboardItem {
  id: string;
  label: string;
  value: number;
  unit: string;
  description?: string;
  trend?: string;
  trendDirection?: "up" | "down";
  industryAverage?: number;
}

interface DataDashboardProps {
  title?: string;
  subtitle?: string;
  data: DashboardItem[];
}

export default function DataDashboard({
  title = "数字で見る会社の魅力",
  subtitle = "客観的なデータで当社の強みをご紹介します",
  data,
}: DataDashboardProps) {
  return (
    <section className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          align="center"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {data.map((item, index) => (
            <DataCard
              key={item.id}
              label={item.label}
              value={item.value}
              unit={item.unit}
              description={item.description}
              trend={item.trend}
              trendDirection={item.trendDirection}
              industryAverage={item.industryAverage}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
