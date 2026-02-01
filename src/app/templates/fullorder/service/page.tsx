import type { Metadata } from "next";
import Layout, { CTASection } from "../_components/Layout";
import { processTypes, specs, qualityFlow } from "@/data/fullorder/sample";

export const metadata: Metadata = {
  title: "サービス・事業内容",
  description: "NC旋盤、マシニング、複合加工。精密金属加工のあらゆるニーズにお応えします。",
};

// ヒーローセクション
function PageHero() {
  return (
    <section className="bg-[#2C3E50] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">サービス・事業内容</h1>
        <p className="text-white/80 text-lg">
          金属加工のあらゆるニーズにお応えします
        </p>
      </div>
    </section>
  );
}

// 加工種類セクション
function ProcessTypesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-4">
          加工種類
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Machining Types
        </p>

        <div className="space-y-20">
          {processTypes.map((process, index) => (
            <div
              key={process.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="aspect-[4/3] bg-gray-200 rounded overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2} />
                      <circle cx="8.5" cy="8.5" r="1.5" strokeWidth={2} />
                      <path strokeWidth={2} d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">
                  {process.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {process.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-[#2C3E50] mb-3">対応スペック</h4>
                  <ul className="space-y-2">
                    {process.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-[#E67E22] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#2C3E50] mb-3">主な加工事例</h4>
                  <div className="flex flex-wrap gap-2">
                    {process.cases.map((c, idx) => (
                      <span
                        key={idx}
                        className="bg-[#F8F9FA] text-[#2C3E50] px-3 py-1 rounded text-sm"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 対応スペックセクション
function SpecsSection() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-4">
          対応仕様
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Specifications
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 対応材質 */}
          <div className="bg-white p-8 rounded">
            <h3 className="text-xl font-bold text-[#2C3E50] mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#E67E22]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              対応材質
            </h3>
            <ul className="space-y-3">
              {specs.materials.map((material, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${material.available ? "text-[#E67E22]" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    {material.name}
                    {material.note && (
                      <span className="text-sm text-[#E67E22] ml-1">({material.note})</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 対応サイズ */}
          <div className="bg-white p-8 rounded">
            <h3 className="text-xl font-bold text-[#2C3E50] mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#E67E22]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              対応サイズ
            </h3>
            <table className="w-full">
              <tbody>
                {specs.sizes.map((size, idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-0">
                    <td className="py-3 text-gray-600">{size.item}</td>
                    <td className="py-3 text-[#2C3E50] font-medium text-right">{size.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ロット対応 */}
          <div className="bg-white p-8 rounded">
            <h3 className="text-xl font-bold text-[#2C3E50] mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#E67E22]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              ロット対応
            </h3>
            <table className="w-full">
              <tbody>
                {specs.lots.map((lot, idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-0">
                    <td className="py-3 text-gray-600">{lot.type}</td>
                    <td className="py-3 text-[#2C3E50] font-medium text-right">{lot.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

// 品質管理フローセクション
function QualityFlowSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-4">
          品質管理体制
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Quality Control Process
        </p>

        <div className="relative">
          {/* フロー接続線（PC） */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#E67E22]/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-5 gap-8">
            {qualityFlow.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-white md:bg-transparent text-center">
                  <div className="w-16 h-16 bg-[#E67E22] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold relative z-10">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-[#2C3E50] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {/* 矢印（モバイル） */}
                {index < qualityFlow.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <svg className="w-6 h-6 text-[#E67E22]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-[#F8F9FA] px-8 py-4 rounded">
            <svg className="w-8 h-8 text-[#2C3E50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-bold text-[#2C3E50]">ISO9001:2015 認証取得</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicePage() {
  return (
    <Layout>
      <PageHero />
      <ProcessTypesSection />
      <SpecsSection />
      <QualityFlowSection />
      <CTASection />
    </Layout>
  );
}
