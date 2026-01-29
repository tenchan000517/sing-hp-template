"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import Card from "@/components/common/Card";

interface Business {
  id: string;
  name: string;
  description: string;
  features: string[];
}

interface BusinessSectionProps {
  businesses: Business[];
}

const colors = ["#2E7D32", "#1565C0", "#7B1FA2"];

export default function BusinessSection({ businesses }: BusinessSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg-secondary)]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="私たちの事業"
          subtitle="BUSINESS"
          description="お客様の課題を解決するため、3つの事業を展開しています。"
          align="center"
          border={false}
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {businesses.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card padding="lg" className="h-full">
                {/* Number */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4"
                  style={{ backgroundColor: colors[index % colors.length] }}
                >
                  {index + 1}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                  {business.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {business.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {business.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: colors[index % colors.length] }}
                      />
                      <span className="text-[var(--color-text-secondary)]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
