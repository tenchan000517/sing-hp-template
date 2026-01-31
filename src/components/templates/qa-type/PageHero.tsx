"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageHero({
  title,
  subtitle,
  description,
}: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {subtitle && (
            <span className="text-sm font-medium opacity-80 tracking-wider uppercase mb-4 block">
              {subtitle}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          {description && (
            <p className="text-lg opacity-90 max-w-2xl mx-auto">{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
