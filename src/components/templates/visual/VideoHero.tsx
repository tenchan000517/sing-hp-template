"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface VideoHeroProps {
  mainCopy: string;
  videoUrl?: string;
  posterImage?: string;
}

export default function VideoHero({
  mainCopy,
  videoUrl = "/videos/hero.mp4",
  posterImage = "/images/templates/visual/hero-poster.jpg",
}: VideoHeroProps) {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={posterImage}
          className="h-full w-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-white">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center text-4xl font-bold md:text-6xl lg:text-7xl"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
        >
          {mainCopy}
        </motion.h1>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white"
        aria-label="スクロールして詳細を見る"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase opacity-80">
            SCROLL
          </span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}
