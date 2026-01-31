"use client";

import { motion } from "framer-motion";
import {
  FileText,
  FileCheck,
  UserCheck,
  Building,
  Trophy,
  ArrowDown,
} from "lucide-react";

interface FlowStep {
  step: number;
  title: string;
  description: string;
  duration: string;
  point: string;
  passRate?: number;
  location?: string;
  interviewers?: number;
}

interface SelectionFlowProps {
  title?: string;
  subtitle?: string;
  steps: FlowStep[];
  totalDuration?: string;
}

const stepIcons = [FileText, FileCheck, UserCheck, Building, Trophy];
const stepColors = [
  "#E3F2FD",
  "#FFF3E0",
  "#E8F5E9",
  "#F3E5F5",
  "#FFF8E1",
];

export default function SelectionFlow({
  title = "選考フローの全て",
  subtitle = "選考プロセスを完全に透明化。不安なく選考に臨めます。",
  steps,
  totalDuration = "約2週間",
}: SelectionFlowProps) {
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

        {/* Flow Steps */}
        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = stepIcons[index] || FileText;
            const bgColor = stepColors[index] || "#E3F2FD";

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gray-200 z-0" />
                )}

                {/* Step Card */}
                <div className="relative z-10 flex gap-4 pb-8">
                  {/* Step Number & Icon */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: bgColor }}
                  >
                    <IconComponent className="w-6 h-6 text-gray-700" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white bg-[#4CAF50] px-2 py-1 rounded">
                          STEP {step.step}
                        </span>
                        <h3 className="font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <span className="text-sm text-gray-500">
                        {step.duration}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-3">
                      {step.description}
                    </p>

                    {/* Additional Info */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {step.passRate && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          通過率: 約{step.passRate}%
                        </span>
                      )}
                      {step.location && (
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          場所: {step.location}
                        </span>
                      )}
                      {step.interviewers && (
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          面接官: {step.interviewers}名
                        </span>
                      )}
                    </div>

                    {/* Point */}
                    <div className="bg-[#FFF8E1] rounded-lg p-3">
                      <p className="text-sm text-gray-700">
                        <span className="font-bold text-[#FF9800]">
                          ポイント:
                        </span>{" "}
                        {step.point}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center -mt-4 mb-4 pl-12">
                    <ArrowDown className="w-5 h-5 text-gray-300" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Total Duration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-2 bg-[#4CAF50] text-white px-6 py-3 rounded-full font-bold">
            <Trophy className="w-5 h-5" />
            応募から内定まで: {totalDuration}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
