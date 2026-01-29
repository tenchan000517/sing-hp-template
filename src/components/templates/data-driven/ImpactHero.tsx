"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/animations/CountUp";
import Button from "@/components/common/Button";

interface HeroStat {
  value: number;
  unit: string;
  label: string;
}

interface ImpactHeroProps {
  companyName: string;
  tagline: string;
  description: string;
  stats: HeroStat[];
  ctaUrl?: string;
  ctaText?: string;
}

export default function ImpactHero({
  companyName,
  tagline,
  description,
  stats,
  ctaUrl = "/templates/data-driven/apply",
  ctaText = "応募する",
}: ImpactHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#0D47A1] via-[#1565C0] to-[#1E88E5] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Company Name */}
          <motion.p
            className="text-white/80 text-sm mb-4 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {companyName}
          </motion.p>

          {/* Tagline */}
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {tagline}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-white/90 text-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>

          {/* Impact Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl md:text-5xl font-bold">
                    <CountUp end={stat.value} duration={2} delay={0.5 + index * 0.1} />
                  </span>
                  <span className="text-xl text-white/80">{stat.unit}</span>
                </div>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button href={ctaUrl} variant="accent" size="lg">
              {ctaText}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 50L60 45.7C120 41.3 240 32.7 360 36.5C480 40.3 600 56.7 720 61.2C840 65.7 960 58.3 1080 53.3C1200 48.3 1320 45.7 1380 44.3L1440 43V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
