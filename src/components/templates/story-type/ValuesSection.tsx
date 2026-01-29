"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

interface ValuesSectionProps {
  title: string;
  description: string;
  values: {
    title: string;
    description: string;
  }[];
  image?: string;
}

export default function ValuesSection({
  title,
  description,
  values,
  image = "/images/templates/story-type/values.jpg",
}: ValuesSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg-tertiary)]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <FadeIn direction="right">
            <div>
              <h2 className="section-title-bordered text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-6">
                {title}
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed font-serif mb-8 whitespace-pre-line">
                {description}
              </p>

              {/* Values list */}
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--color-text-primary)] mb-1">
                        {value.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Image */}
          <FadeIn direction="left">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/20 to-transparent z-10" />
              <Image
                src={image}
                alt="私たちの価値観"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
