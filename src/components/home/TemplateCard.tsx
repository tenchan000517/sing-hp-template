"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

interface TemplateCardProps {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  features: readonly string[];
  color: string;
  href: string;
  status: "available" | "coming-soon";
  index: number;
}

export default function TemplateCard({
  name,
  subtitle,
  description,
  features,
  color,
  href,
  status,
  index,
}: TemplateCardProps) {
  const isAvailable = status === "available";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div
        className={`relative h-full bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 ${
          isAvailable
            ? "hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            : "opacity-75"
        }`}
      >
        {/* Color Header */}
        <div
          className="px-6 py-4"
          style={{ backgroundColor: color }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">
                {name}
              </h3>
              <p className="text-sm text-white/80">
                {subtitle}
              </p>
            </div>
            {!isAvailable && (
              <span className="px-3 py-1 text-xs font-medium bg-white/20 text-white rounded-full">
                Coming Soon
              </span>
            )}
          </div>
        </div>

        <div className="p-6">
          {/* Description */}
          <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <Check
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color }}
                />
                <span className="text-[var(--color-text-secondary)]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          {isAvailable ? (
            <div
              className="inline-flex items-center gap-2 font-medium transition-colors"
              style={{ color }}
            >
              <span>テンプレートを見る</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          ) : (
            <span className="inline-flex items-center gap-2 text-gray-400 font-medium">
              <span>準備中</span>
            </span>
          )}
        </div>

        {/* Hover overlay for available templates */}
        {isAvailable && (
          <Link href={href} className="absolute inset-0">
            <span className="sr-only">{name}テンプレートを見る</span>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
