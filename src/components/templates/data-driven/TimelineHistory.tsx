"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";

interface HistoryItem {
  year: number;
  title: string;
  description: string;
}

interface TimelineHistoryProps {
  history: HistoryItem[];
}

export default function TimelineHistory({ history }: TimelineHistoryProps) {
  return (
    <section className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="沿革"
          subtitle="成長の軌跡"
          align="center"
        />

        <div className="max-w-3xl mx-auto mt-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />

            {history.map((item, index) => (
              <motion.div
                key={item.year}
                className={`relative flex items-start gap-8 mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Year badge */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                    <h3 className="font-bold text-lg text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
