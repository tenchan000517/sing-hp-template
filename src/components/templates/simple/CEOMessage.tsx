"use client";

import { motion } from "framer-motion";

interface CEOMessageProps {
  name: string;
  title: string;
  message: string;
}

export default function CEOMessage({ name, title, message }: CEOMessageProps) {
  return (
    <section className="py-24 md:py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-light tracking-wider mb-12">
            メッセージ
          </h2>

          <div className="space-y-6">
            <p className="text-gray-300 text-sm md:text-base leading-loose whitespace-pre-line">
              {message}
            </p>

            <div className="pt-8">
              <p className="text-gray-400 text-sm">{title}</p>
              <p className="text-lg font-light tracking-wider mt-1">{name}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
