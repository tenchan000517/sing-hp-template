"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileQuestion,
  Users,
  GraduationCap,
  Briefcase,
  ChevronRight,
} from "lucide-react";

interface Category {
  id: string;
  title: string;
  description: string;
  href: string;
  color: string;
  icon: string;
}

interface CategoryNavigationProps {
  title?: string;
  categories: Category[];
}

const iconMap: Record<string, React.ReactNode> = {
  "file-question": <FileQuestion className="w-8 h-8" />,
  users: <Users className="w-8 h-8" />,
  "graduation-cap": <GraduationCap className="w-8 h-8" />,
  briefcase: <Briefcase className="w-8 h-8" />,
};

export default function CategoryNavigation({
  title = "あなたの不安は？",
  categories,
}: CategoryNavigationProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
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
            該当するカテゴリをクリックして、詳しい回答をご覧ください
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={category.href}
                className="block h-full p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ backgroundColor: category.color }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center mb-4 text-gray-700">
                  {iconMap[category.icon] || (
                    <FileQuestion className="w-8 h-8" />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">
                  {category.description}
                </p>

                {/* Link Arrow */}
                <div className="flex items-center text-[#4CAF50] font-medium text-sm">
                  <span>詳しく見る</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
