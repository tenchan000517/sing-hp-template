"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Code, Users } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

interface CareerStep {
  level: number;
  title: string;
  years: string;
}

interface CareerPath {
  id: string;
  name: string;
  description: string;
  steps: CareerStep[];
}

interface CareerFlowchartProps {
  paths: CareerPath[];
}

export default function CareerFlowchart({ paths }: CareerFlowchartProps) {
  const [activePath, setActivePath] = useState(paths[0]?.id || "");

  const activePathData = paths.find((p) => p.id === activePath);

  const getIcon = (id: string) => {
    return id === "specialist" ? Code : Users;
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="キャリアパス"
          subtitle="2つの成長ルートから選べる"
          align="center"
        />

        <div className="max-w-4xl mx-auto mt-12">
          {/* Path Selector */}
          <div className="flex justify-center gap-4 mb-12">
            {paths.map((path) => {
              const Icon = getIcon(path.id);
              return (
                <button
                  key={path.id}
                  onClick={() => setActivePath(path.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all ${
                    activePath === path.id
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border bg-white hover:border-primary/50"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activePath === path.id
                        ? "bg-primary text-white"
                        : "bg-bg-secondary text-text-secondary"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p
                      className={`font-bold ${
                        activePath === path.id
                          ? "text-primary"
                          : "text-text-primary"
                      }`}
                    >
                      {path.name}
                    </p>
                    <p className="text-sm text-text-muted">{path.description}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Flowchart */}
          {activePathData && (
            <motion.div
              key={activePath}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
                {activePathData.steps.map((step, index) => (
                  <div key={step.level} className="flex items-center">
                    {/* Step Card */}
                    <motion.div
                      className={`relative w-48 p-4 rounded-xl border-2 ${
                        index === activePathData.steps.length - 1
                          ? "border-primary bg-primary text-white"
                          : "border-border bg-white"
                      }`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Level Badge */}
                      <div
                        className={`absolute -top-3 left-4 px-3 py-1 rounded-full text-xs font-bold ${
                          index === activePathData.steps.length - 1
                            ? "bg-accent text-white"
                            : "bg-primary text-white"
                        }`}
                      >
                        Level {step.level}
                      </div>

                      <div className="mt-2">
                        <p
                          className={`font-bold ${
                            index === activePathData.steps.length - 1
                              ? "text-white"
                              : "text-text-primary"
                          }`}
                        >
                          {step.title}
                        </p>
                        <p
                          className={`text-sm mt-1 ${
                            index === activePathData.steps.length - 1
                              ? "text-white/80"
                              : "text-text-muted"
                          }`}
                        >
                          {step.years}
                        </p>
                      </div>
                    </motion.div>

                    {/* Arrow */}
                    {index < activePathData.steps.length - 1 && (
                      <motion.div
                        className="hidden md:block mx-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.05 }}
                      >
                        <ChevronRight className="w-6 h-6 text-primary" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Note */}
              <p className="text-center text-sm text-text-muted mt-8">
                ※ 年数は目安です。スキル・実績に応じて昇格スピードは変わります
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
