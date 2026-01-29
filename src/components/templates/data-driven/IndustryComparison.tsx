"use client";

import { motion } from "framer-motion";
import ComparisonTable from "./ComparisonTable";
import SectionTitle from "@/components/common/SectionTitle";

interface ComparisonItem {
  item: string;
  company: number;
  industry: number;
  unit: string;
}

interface IndustryComparisonProps {
  title?: string;
  subtitle?: string;
  data: ComparisonItem[];
  companyName?: string;
}

export default function IndustryComparison({
  title = "業界平均との比較",
  subtitle = "客観的なデータで当社の強みを可視化",
  data,
  companyName = "当社",
}: IndustryComparisonProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          align="center"
        />

        <motion.div
          className="max-w-4xl mx-auto mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl shadow-sm border border-border p-6">
            <ComparisonTable
              data={data}
              companyLabel={companyName}
              industryLabel="業界平均"
            />
          </div>

          <p className="text-center text-sm text-text-muted mt-4">
            ※ 業界平均は厚生労働省および各種調査機関のデータを参照
          </p>
        </motion.div>
      </div>
    </section>
  );
}
