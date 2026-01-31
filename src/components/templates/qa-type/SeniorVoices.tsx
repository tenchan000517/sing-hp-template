"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

interface SeniorVoice {
  id: string;
  name: string;
  role: string;
  years: number;
  image: string;
  beforeAnxiety: string;
  currentFeelings: string;
}

interface SeniorVoicesProps {
  title?: string;
  subtitle?: string;
  voices: SeniorVoice[];
}

export default function SeniorVoices({
  title = "先輩たちも、最初は不安でした",
  subtitle = "同じ不安を乗り越えた先輩の声をお聞きください",
  voices,
}: SeniorVoicesProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
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
          <p className="text-gray-600">{subtitle}</p>
        </motion.div>

        {/* Voice Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {voices.map((voice, index) => (
            <motion.div
              key={voice.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-64 bg-gray-100">
                <Image
                  src={voice.image}
                  alt={voice.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x500?text=Photo";
                  }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Name Badge */}
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold text-lg">{voice.name}</p>
                  <p className="text-sm opacity-90">
                    {voice.role}・入社{voice.years}年
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Before Anxiety */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-white bg-gray-400 px-2 py-1 rounded">
                      応募前の不安
                    </span>
                  </div>
                  <div className="relative pl-4 border-l-2 border-gray-300">
                    <Quote className="absolute -left-3 -top-1 w-5 h-5 text-gray-400 bg-white" />
                    <p className="text-gray-600 text-sm italic">
                      {voice.beforeAnxiety}
                    </p>
                  </div>
                </div>

                {/* Current Feelings */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-white bg-[#4CAF50] px-2 py-1 rounded">
                      今の気持ち
                    </span>
                  </div>
                  <div className="relative pl-4 border-l-2 border-[#4CAF50]">
                    <Quote className="absolute -left-3 -top-1 w-5 h-5 text-[#4CAF50] bg-white" />
                    <p className="text-gray-700 text-sm font-medium">
                      {voice.currentFeelings}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
