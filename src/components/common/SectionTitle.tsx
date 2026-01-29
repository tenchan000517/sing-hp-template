"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  border?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  align = "left",
  border = true,
  className = "",
}: SectionTitleProps) {
  const alignStyles = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${alignStyles[align]} ${className}`}
    >
      {subtitle && (
        <span className="inline-block text-sm font-medium text-[var(--color-primary)] mb-2 tracking-wider uppercase">
          {subtitle}
        </span>
      )}
      <h2
        className={`text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] ${
          border && align === "left" ? "section-title-bordered" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
