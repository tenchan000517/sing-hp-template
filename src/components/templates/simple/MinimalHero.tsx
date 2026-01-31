"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface MinimalHeroProps {
  companyName: string;
  tagline: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function MinimalHero({
  companyName,
  tagline,
  buttonText = "採用情報を見る",
  onButtonClick,
}: MinimalHeroProps) {
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      // デフォルトでは次のセクションへスクロール
      const nextSection = document.getElementById("company");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative">
      <div className="text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-6 text-gray-900"
        >
          {companyName}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 mb-12 tracking-wide"
        >
          {tagline}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          onClick={handleClick}
          className="border border-gray-900 px-8 py-3 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300 tracking-wider text-sm"
        >
          {buttonText}
        </motion.button>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-gray-400 tracking-widest mb-2">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
