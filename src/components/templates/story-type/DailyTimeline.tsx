"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Sun, Moon, Coffee } from "lucide-react";

interface Schedule {
  time: string;
  activity: string;
}

interface Member {
  id: string;
  name: string;
  position: string;
  schedule: Schedule[];
}

interface DailyTimelineProps {
  members: Member[];
}

const getTimeIcon = (time: string) => {
  const hour = parseInt(time.split(":")[0]);
  if (hour < 12) return Sun;
  if (hour < 17) return Clock;
  return Moon;
};

const getTimeColor = (time: string) => {
  const hour = parseInt(time.split(":")[0]);
  if (hour < 10) return "from-orange-100 to-yellow-100";
  if (hour < 14) return "from-yellow-100 to-green-100";
  if (hour < 17) return "from-green-100 to-blue-100";
  return "from-blue-100 to-purple-100";
};

export default function DailyTimeline({ members }: DailyTimelineProps) {
  const [activeTab, setActiveTab] = useState(members[0]?.id || "");
  const activeMember = members.find((m) => m.id === activeTab);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {members.map((member) => (
            <button
              key={member.id}
              onClick={() => setActiveTab(member.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === member.id
                  ? "bg-[var(--color-primary)] text-white shadow-lg"
                  : "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-primary)]/10"
              }`}
            >
              {member.position}
              <span className="hidden sm:inline">（{member.name}さん）</span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          {activeMember && (
            <motion.div
              key={activeMember.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                  {activeMember.name}さんの1日
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  {activeMember.position}
                </p>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-primary)]/50 to-[var(--color-primary)]/20" />

                {activeMember.schedule.map((item, index) => {
                  const Icon = getTimeIcon(item.time);
                  const isBreak = item.activity.includes("休憩");

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="relative flex items-start gap-6 mb-6 last:mb-0"
                    >
                      {/* Time marker */}
                      <div className="relative z-10 flex-shrink-0">
                        <div
                          className={`w-16 h-16 rounded-full flex flex-col items-center justify-center shadow-md ${
                            isBreak
                              ? "bg-[var(--color-accent)]"
                              : "bg-[var(--color-primary)]"
                          } text-white`}
                        >
                          {isBreak ? (
                            <Coffee className="w-5 h-5 mb-0.5" />
                          ) : (
                            <Icon className="w-5 h-5 mb-0.5" />
                          )}
                          <span className="text-xs font-bold">{item.time}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div
                        className={`flex-1 p-4 rounded-lg bg-gradient-to-r ${getTimeColor(
                          item.time
                        )} border border-[var(--color-border)]`}
                      >
                        <p className="text-[var(--color-text-primary)] font-medium">
                          {item.activity}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
