"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";

interface HistoryItem {
  year: number;
  title: string;
  description: string;
}

interface CompanyHistoryProps {
  companyName: string;
  history: HistoryItem[];
}

export default function CompanyHistory({ companyName, history }: CompanyHistoryProps) {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg-tertiary)]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={`${companyName}のあゆみ`}
          subtitle="HISTORY"
          align="center"
          border={false}
        />

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto mt-12">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-primary)]/20 md:-translate-x-0.5" />

          {history.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Year marker */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center -translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}
              >
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <span className="inline-block text-2xl font-bold text-[var(--color-primary)] mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
