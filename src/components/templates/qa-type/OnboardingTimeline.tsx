"use client";

import { motion } from "framer-motion";
import {
  Sun,
  Calendar,
  CalendarDays,
  CalendarCheck,
  Award,
} from "lucide-react";

interface TimelineSchedule {
  time: string;
  activity: string;
}

interface TimelinePeriod {
  title: string;
  schedule?: TimelineSchedule[];
  items?: string[];
}

interface OnboardingTimelineProps {
  title?: string;
  subtitle?: string;
  firstDay: TimelinePeriod;
  firstWeek: TimelinePeriod;
  firstMonth: TimelinePeriod;
  threeMonths: TimelinePeriod;
  sixMonthsToYear: TimelinePeriod;
}

const periodIcons = [Sun, Calendar, CalendarDays, CalendarCheck, Award];
const periodColors = ["#4CAF50", "#66BB6A", "#81C784", "#A5D6A7", "#C8E6C9"];

export default function OnboardingTimeline({
  title = "入社初日からの流れ",
  subtitle = "入社後の不安を具体的なイメージで解消します",
  firstDay,
  firstWeek,
  firstMonth,
  threeMonths,
  sixMonthsToYear,
}: OnboardingTimelineProps) {
  const periods = [firstDay, firstWeek, firstMonth, threeMonths, sixMonthsToYear];

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

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {periods.map((period, index) => {
            const IconComponent = periodIcons[index];
            const bgColor = periodColors[index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline Line */}
                {index < periods.length - 1 && (
                  <div
                    className="absolute left-6 top-14 bottom-0 w-1 z-0"
                    style={{
                      background: `linear-gradient(to bottom, ${bgColor}, ${
                        periodColors[index + 1]
                      })`,
                    }}
                  />
                )}

                <div className="relative z-10 flex gap-4">
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
                    style={{ backgroundColor: bgColor }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    {/* Period Title */}
                    <h3
                      className="text-lg font-bold mb-4"
                      style={{ color: bgColor }}
                    >
                      {period.title}
                    </h3>

                    {/* Schedule (for first day) */}
                    {period.schedule && (
                      <div className="space-y-2">
                        {period.schedule.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0"
                          >
                            <span className="flex-shrink-0 w-14 text-sm font-mono font-bold text-[#4CAF50]">
                              {item.time}
                            </span>
                            <span className="text-gray-700 text-sm">
                              {item.activity}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Items (for other periods) */}
                    {period.items && (
                      <ul className="space-y-2">
                        {period.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-700 text-sm"
                          >
                            <span
                              className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                              style={{ backgroundColor: bgColor }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
