"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface Keyword {
  id: number;
  keyword: string;
  subtext: string;
  image: string;
}

interface KeywordSectionProps {
  keywords: Keyword[];
}

function KeywordItem({ keyword, index }: { keyword: Keyword; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div
      ref={ref}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src={keyword.image}
          alt={keyword.keyword}
          fill
          className="object-cover"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 px-4 text-center text-white"
      >
        <span className="mb-4 block text-sm font-medium uppercase tracking-widest opacity-80">
          KEYWORD {index + 1}
        </span>
        <h2
          className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
        >
          {keyword.keyword}
        </h2>
        <p
          className="text-lg md:text-xl lg:text-2xl"
          style={{ textShadow: "0 1px 10px rgba(0,0,0,0.3)" }}
        >
          {keyword.subtext}
        </p>
      </motion.div>
    </div>
  );
}

export default function KeywordSection({ keywords }: KeywordSectionProps) {
  return (
    <section>
      {keywords.map((keyword, index) => (
        <KeywordItem key={keyword.id} keyword={keyword} index={index} />
      ))}
    </section>
  );
}
