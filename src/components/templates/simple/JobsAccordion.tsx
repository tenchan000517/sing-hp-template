"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Briefcase, Banknote } from "lucide-react";

interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
  preferred?: string[];
  workingHours: string;
  holidays: string;
  benefits: string[];
}

interface JobsAccordionProps {
  jobs: Job[];
}

export default function JobsAccordion({ jobs }: JobsAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="jobs" className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-light tracking-wider text-gray-900 mb-12 text-center">
            募集職種
          </h2>

          <div className="divide-y divide-gray-200 bg-white">
            {jobs.map((job) => (
              <div key={job.id}>
                <button
                  onClick={() => setOpenId(openId === job.id ? null : job.id)}
                  className="w-full py-6 px-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="text-lg md:text-xl font-medium text-gray-900">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Banknote className="w-4 h-4" />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openId === job.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openId === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-6">
                        {/* 仕事内容 */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-2">
                            仕事内容
                          </h4>
                          <p className="text-sm text-gray-600">
                            {job.description}
                          </p>
                        </div>

                        {/* 応募資格 */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-2">
                            応募資格
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-gray-400">-</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 歓迎スキル */}
                        {job.preferred && job.preferred.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-2">
                              歓迎スキル
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {job.preferred.map((pref, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-gray-400">-</span>
                                  {pref}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* 勤務条件 */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-1">
                              勤務時間
                            </h4>
                            <p className="text-sm text-gray-600">{job.workingHours}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-1">
                              休日
                            </h4>
                            <p className="text-sm text-gray-600">{job.holidays}</p>
                          </div>
                        </div>

                        {/* 福利厚生 */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-2">
                            福利厚生
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.benefits.map((benefit, i) => (
                              <span
                                key={i}
                                className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded"
                              >
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* 応募ボタン */}
                        <div className="pt-4">
                          <a
                            href="#apply"
                            className="inline-block bg-gray-900 text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors"
                          >
                            この職種に応募する
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
