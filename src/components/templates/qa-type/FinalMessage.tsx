"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface FinalMessageProps {
  title: string;
  message: string;
  signature: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function FinalMessage({
  title,
  message,
  signature,
  ctaText = "応募する",
  ctaHref = "/templates/qa-type/contact",
}: FinalMessageProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-bold mb-8">{title}</h2>

          {/* Message */}
          <div className="text-lg md:text-xl leading-relaxed mb-8 whitespace-pre-line opacity-95">
            {message}
          </div>

          {/* Signature */}
          <p className="text-base opacity-80 mb-12">{signature}</p>

          {/* CTA Button */}
          <Link
            href={ctaHref}
            className="inline-block bg-white text-[#4CAF50] font-bold text-lg py-4 px-12 rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            {ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
