"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, Bookmark, Heart } from "lucide-react";

interface TemplateCardProps {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  color: string;
  href: string;
  image: string;
  status: "available" | "coming-soon";
  index: number;
  company?: string;
  date?: string;
}

export default function TemplateCard({
  name,
  subtitle,
  color,
  href,
  image,
  status,
  index,
  company,
  date,
}: TemplateCardProps) {
  const isAvailable = status === "available";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <div
        className={`relative bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 ${
          isAvailable
            ? "hover:shadow-lg cursor-pointer"
            : "opacity-60"
        }`}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Color accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ backgroundColor: color }}
          />

          {/* Status badge */}
          {!isAvailable && (
            <div className="absolute top-3 right-3">
              <span className="px-2 py-1 text-xs font-medium bg-black/60 text-white rounded">
                Coming Soon
              </span>
            </div>
          )}

          {/* Hover overlay */}
          {isAvailable && (
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-[var(--color-text-primary)] truncate">
                {company || name}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] truncate">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-1">
              <span
                className="px-2 py-0.5 text-xs font-medium rounded"
                style={{ backgroundColor: `${color}15`, color: color }}
              >
                {name}
              </span>
            </div>
            {date && (
              <span className="text-xs text-[var(--color-text-muted)]">
                {date}
              </span>
            )}
          </div>
        </div>

        {/* Link overlay */}
        {isAvailable && (
          <Link href={href} className="absolute inset-0">
            <span className="sr-only">{name}を見る</span>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
