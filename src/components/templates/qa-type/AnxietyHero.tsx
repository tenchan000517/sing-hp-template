"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AnxietyHeroProps {
  mainCopy?: string;
  subCopy?: string;
  leadText?: string[];
  ctaText?: string;
  backgroundImage?: string;
}

export default function AnxietyHero({
  mainCopy = "その不安、すべてお答えします。",
  subCopy = "応募前の疑問・不安を徹底解消。納得してからご応募ください。",
  leadText = [
    "「未経験でも大丈夫？」",
    "「残業はどのくらい？」",
    "「職場の雰囲気は？」",
  ],
  ctaText = "よくある質問を見る",
  backgroundImage,
}: AnxietyHeroProps) {
  const scrollToContent = () => {
    const target = document.getElementById("top5-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32]" />
        )}
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Lead Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="space-y-2">
            {leadText.map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="text-lg md:text-xl text-gray-700 font-medium"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Main Copy */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
        >
          {mainCopy}
        </motion.h1>

        {/* Sub Copy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
        >
          {subCopy}
        </motion.p>

        {/* Additional Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-base text-gray-600 mb-12"
        >
          応募前に気になること、すべてここで解決できます。
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          onClick={scrollToContent}
          className="inline-flex items-center gap-2 bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {ctaText}
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-600">
          <span className="text-sm">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
