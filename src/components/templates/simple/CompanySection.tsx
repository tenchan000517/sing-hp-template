"use client";

import { motion } from "framer-motion";

interface CompanyInfo {
  label: string;
  value: string;
}

interface CompanySectionProps {
  description: string;
  info: CompanyInfo[];
}

export default function CompanySection({ description, info }: CompanySectionProps) {
  return (
    <section id="company" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-light tracking-wider text-gray-900 mb-12 text-center">
            会社について
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* 左: 説明文 */}
            <div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {description}
              </p>
            </div>

            {/* 右: 基本情報 */}
            <div className="space-y-4">
              {info.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex justify-between border-b border-gray-200 pb-3"
                >
                  <span className="text-gray-500 text-sm">{item.label}</span>
                  <span className="text-gray-900 text-sm">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
