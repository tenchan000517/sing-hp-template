"use client";

import { motion } from "framer-motion";

interface Benefit {
  label: string;
  value: string;
}

interface BenefitsGridProps {
  benefits: Benefit[];
}

export default function BenefitsGrid({ benefits }: BenefitsGridProps) {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-light tracking-wider text-gray-900 mb-12 text-center">
            福利厚生
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex justify-between border-b border-gray-200 pb-3"
              >
                <span className="text-gray-600 text-sm">{benefit.label}</span>
                <span className="text-gray-900 text-sm font-medium">{benefit.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
