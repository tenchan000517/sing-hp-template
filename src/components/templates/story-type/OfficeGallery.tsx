"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/animations/FadeIn";

interface OfficeImage {
  src: string;
  alt: string;
  caption: string;
}

interface Office {
  name: string;
  description: string;
  features: string[];
  images: OfficeImage[];
}

interface OfficeGalleryProps {
  office: Office;
}

export default function OfficeGallery({ office }: OfficeGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? office.images.length - 1 : selectedIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === office.images.length - 1 ? 0 : selectedIndex + 1
      );
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="私たちのオフィス"
          subtitle="OFFICE"
          align="center"
          border={false}
        />

        {/* Description */}
        <FadeIn direction="up">
          <div className="max-w-2xl mx-auto text-center mt-8 mb-12">
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
              {office.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {office.features.map((feature, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[var(--color-bg-secondary)] text-sm text-[var(--color-text-secondary)] rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {office.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                <p className="text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
              onClick={closeLightbox}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image */}
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-4xl max-h-[80vh] w-full mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={office.images[selectedIndex].src}
                    alt={office.images[selectedIndex].alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
                <p className="text-white text-center mt-4 text-lg">
                  {office.images[selectedIndex].caption}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
