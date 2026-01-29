"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, Clock, TrendingUp, Heart } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  FileText,
  Clock,
  TrendingUp,
  Heart,
};

interface Question {
  q: string;
  a: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  questions: Question[];
}

interface FAQSectionProps {
  categories: Category[];
}

export default function FAQSection({ categories }: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || "");
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (questionId: string) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(questionId)) {
      newOpenQuestions.delete(questionId);
    } else {
      newOpenQuestions.add(questionId);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="よくある質問"
          subtitle="応募前の疑問を解消"
          align="center"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 mb-8">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || FileText;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all ${
                  activeCategory === category.id
                    ? "bg-[#1565C0] text-white shadow-lg"
                    : "bg-white text-text-secondary border border-border hover:border-[#1565C0] hover:text-[#1565C0]"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Questions */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {currentCategory && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {currentCategory.questions.map((question, index) => {
                  const questionId = `${activeCategory}-${index}`;
                  const isOpen = openQuestions.has(questionId);

                  return (
                    <div
                      key={questionId}
                      className="bg-white rounded-xl border border-border overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(questionId)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-bg-tertiary transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1565C0]/10 text-[#1565C0] flex items-center justify-center font-bold text-sm">
                            Q
                          </span>
                          <span className="font-medium text-text-primary pt-1">
                            {question.q}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-text-muted flex-shrink-0 ml-4 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pl-16">
                              <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFC107]/20 text-[#FFC107] flex items-center justify-center font-bold text-sm">
                                  A
                                </span>
                                <p className="text-text-secondary leading-relaxed pt-1">
                                  {question.a}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
