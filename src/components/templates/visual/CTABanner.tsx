"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/common/Button";

interface CTABannerProps {
  mainCopy?: string;
  subCopy?: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImage?: string;
}

export default function CTABanner({
  mainCopy = "あなたも、私たちの仲間に。",
  subCopy = "まずは募集職種をチェック",
  buttonText = "募集職種を見る",
  buttonHref = "/templates/visual/jobs",
  backgroundImage = "/images/templates/visual/cta-bg.jpg",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-primary)]/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{mainCopy}</h2>
          <p className="mb-8 text-lg opacity-90">{subCopy}</p>
          <Button
            href={buttonHref}
            variant="outline"
            size="lg"
            className="border-white bg-white text-[var(--color-primary)] hover:bg-transparent hover:text-white"
          >
            {buttonText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
