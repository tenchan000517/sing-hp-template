"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion, MessageCircle } from "lucide-react";

interface QAItem {
  question: string;
  answer: string;
}

interface QASectionProps {
  title?: string;
  subtitle?: string;
  items: QAItem[];
  defaultOpenIndex?: number;
  variant?: "default" | "compact" | "minimal";
  backgroundColor?: string;
}

export default function QASection({
  title,
  subtitle,
  items,
  defaultOpenIndex = 0,
  variant = "default",
  backgroundColor = "bg-white",
}: QASectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-12 md:py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              {title}
            </h2>
            {subtitle && <p className="text-gray-600 text-sm">{subtitle}</p>}
          </motion.div>
        )}

        {/* QA List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`border rounded-lg overflow-hidden ${
                variant === "minimal"
                  ? "border-gray-100"
                  : "border-gray-200 shadow-sm"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleItem(index)}
                className={`w-full flex items-start gap-3 p-4 text-left transition-colors ${
                  openIndex === index
                    ? variant === "minimal"
                      ? "bg-gray-50"
                      : "bg-[#E8F5E9]"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                {/* Q Icon */}
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    openIndex === index
                      ? "bg-[#4CAF50] text-white"
                      : "bg-[#4CAF50]/10 text-[#4CAF50]"
                  }`}
                >
                  <MessageCircleQuestion className="w-4 h-4" />
                </div>

                {/* Question Text */}
                <div className="flex-grow pt-1">
                  <p
                    className={`font-medium ${
                      variant === "compact" ? "text-sm" : "text-base"
                    } text-gray-900`}
                  >
                    {item.question}
                  </p>
                </div>

                {/* Arrow */}
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-gray-400 transition-transform duration-300 mt-1 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 bg-white">
                      <div className="flex items-start gap-3 pt-2 border-t border-gray-100">
                        {/* A Icon */}
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF9800]/10 text-[#FF9800] flex items-center justify-center">
                          <MessageCircle className="w-4 h-4" />
                        </div>

                        {/* Answer Text */}
                        <div className="flex-grow pt-1">
                          <p
                            className={`text-gray-700 leading-relaxed ${
                              variant === "compact" ? "text-sm" : "text-base"
                            }`}
                          >
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
