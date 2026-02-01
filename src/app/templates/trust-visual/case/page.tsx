"use client";

import Image from "next/image";
import Layout, { CTASection } from "../_components/Layout";
import { caseStudies, satisfactionBreakdown } from "@/data/trust-visual/sample";

export default function CasePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-[#1a365d] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <p className="text-[#38a169] font-medium mb-2">Case Studies</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold">
              解決事例
            </h1>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              実際にご依頼いただいた案件の解決事例をご紹介します。
              ※プライバシー保護のため、一部内容を変更しています。
            </p>
          </div>
        </div>
      </section>

      {/* Satisfaction Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-[#38a169] font-medium mb-2">Client Satisfaction</p>
            <h2 className="font-serif text-2xl text-[#1a365d] font-bold">
              依頼者満足度
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {satisfactionBreakdown.map((item) => (
              <div key={item.label} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#38a169"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${(item.percentage / 100) * 251.2} 251.2`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-[#1a365d]">
                    {item.percentage}%
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases List */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((caseItem) => (
              <div
                key={caseItem.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <div className="grid md:grid-cols-3">
                  {/* Image */}
                  <div className="aspect-[4/3] md:aspect-auto relative">
                    <Image
                      src={caseItem.image}
                      alt={caseItem.title}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-[#1a365d] text-white text-sm px-4 py-1 rounded">
                      {caseItem.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 p-8">
                    <h3 className="font-serif text-2xl text-[#1a365d] font-bold mb-4">
                      {caseItem.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{caseItem.summary}</p>

                    <div className="space-y-4">
                      {/* Challenge */}
                      <div className="bg-[#f7fafc] p-4 rounded">
                        <h4 className="font-bold text-[#1a365d] text-sm mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 bg-[#1a365d] text-white rounded-full flex items-center justify-center text-xs">
                            1
                          </span>
                          ご相談内容
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {caseItem.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="bg-[#f7fafc] p-4 rounded">
                        <h4 className="font-bold text-[#1a365d] text-sm mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 bg-[#1a365d] text-white rounded-full flex items-center justify-center text-xs">
                            2
                          </span>
                          解決策
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {caseItem.solution}
                        </p>
                      </div>

                      {/* Result */}
                      <div className="bg-[#38a169]/10 p-4 rounded border-l-4 border-[#38a169]">
                        <h4 className="font-bold text-[#38a169] text-sm mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 bg-[#38a169] text-white rounded-full flex items-center justify-center text-xs">
                            3
                          </span>
                          解決結果
                        </h4>
                        <p className="text-gray-700 text-sm">
                          {caseItem.result}
                        </p>
                      </div>
                    </div>

                    {/* Client Voice */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-gray-600 italic text-sm">
                        「{caseItem.clientVoice}」
                      </p>
                      <div className="flex items-center justify-between mt-4 text-sm">
                        <span className="text-gray-500">
                          解決期間: {caseItem.duration}
                        </span>
                        <span className="text-[#1a365d] font-medium">
                          担当弁護士: {caseItem.担当}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            ※ 掲載している事例は、依頼者様の許可を得た上で、
            プライバシー保護のため一部内容を変更しています。
            <br />
            実際の解決内容は案件によって異なります。
          </p>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
