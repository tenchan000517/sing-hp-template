"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserCheck,
  Clock,
  Users,
  Heart,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

interface AnxietyItem {
  id: number;
  question: string;
  answer: string;
  example?: string;
  data?: {
    label: string;
    value?: number;
    unit?: string;
    values?: number[];
    months?: string[];
    industry?: number;
    industryLabel?: string;
  };
  icon: string;
}

interface Top5AccordionProps {
  title?: string;
  items: AnxietyItem[];
}

const iconMap: Record<string, React.ReactNode> = {
  "user-check": <UserCheck className="w-6 h-6" />,
  clock: <Clock className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
  "shield-check": <ShieldCheck className="w-6 h-6" />,
};

export default function Top5Accordion({
  title = "応募前の不安TOP5",
  items,
}: Top5AccordionProps) {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="top5-section" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600">
            クリックして詳しい回答をご覧ください
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleItem(item.id)}
                className={`w-full flex items-center gap-4 p-5 text-left transition-colors ${
                  openId === item.id
                    ? "bg-[#4CAF50] text-white"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-900"
                }`}
              >
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    openId === item.id
                      ? "bg-white/20"
                      : "bg-[#4CAF50]/10 text-[#4CAF50]"
                  }`}
                >
                  {iconMap[item.icon] || <UserCheck className="w-6 h-6" />}
                </div>

                {/* Question */}
                <div className="flex-grow">
                  <span
                    className={`text-sm font-medium ${
                      openId === item.id ? "text-white/80" : "text-[#4CAF50]"
                    }`}
                  >
                    Q{item.id}.
                  </span>
                  <p className="text-base md:text-lg font-bold">
                    {item.question}
                  </p>
                </div>

                {/* Arrow */}
                <ChevronDown
                  className={`flex-shrink-0 w-6 h-6 transition-transform duration-300 ${
                    openId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer Content */}
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border-t border-gray-100">
                      {/* Answer */}
                      <div className="mb-4">
                        <span className="inline-block bg-[#FF9800] text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                          A.
                        </span>
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>

                      {/* Example */}
                      {item.example && (
                        <div className="mt-4 p-4 bg-[#F1F8E9] rounded-lg">
                          <p className="text-sm font-bold text-[#4CAF50] mb-2">
                            具体例
                          </p>
                          <p className="text-gray-700 text-sm">
                            {item.example}
                          </p>
                        </div>
                      )}

                      {/* Data Visualization */}
                      {item.data && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm font-bold text-gray-700 mb-3">
                            {item.data.label}
                          </p>

                          {/* Single Value Display */}
                          {item.data.value !== undefined && !item.data.values && (
                            <div className="flex items-end gap-4">
                              <div className="text-4xl font-bold text-[#4CAF50]">
                                {item.data.value}
                                <span className="text-xl">
                                  {item.data.unit}
                                </span>
                              </div>
                              {item.data.industry !== undefined && (
                                <div className="text-gray-500 text-sm">
                                  <span className="block">
                                    {item.data.industryLabel}:
                                  </span>
                                  <span className="font-bold">
                                    {item.data.industry}
                                    {item.data.unit}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Bar Chart for Monthly Data */}
                          {item.data.values && item.data.months && (() => {
                            const months = item.data.months;
                            return (
                              <div className="mt-2">
                                <div className="flex items-end gap-1 h-24">
                                  {item.data.values?.map((value, i) => (
                                    <div
                                      key={i}
                                      className="flex-1 flex flex-col items-center"
                                    >
                                      <div
                                        className="w-full bg-[#4CAF50] rounded-t transition-all duration-500"
                                        style={{
                                          height: `${(value / 30) * 100}%`,
                                          minHeight: "4px",
                                        }}
                                      />
                                      <span className="text-[10px] text-gray-500 mt-1">
                                        {months?.[i]}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                                <p className="text-xs text-gray-500 text-right mt-2">
                                  単位：時間
                                </p>
                              </div>
                            );
                          })()}
                        </div>
                      )}
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
