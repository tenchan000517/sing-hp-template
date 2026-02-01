"use client";

import Image from "next/image";
import Link from "next/link";
import Layout, { CTASection } from "./_components/Layout";
import {
  company,
  stats,
  reasons,
  services,
  caseStudies,
  media,
} from "@/data/trust-visual/sample";

// 数字カウンターコンポーネント
function StatCounter({
  number,
  unit,
  label,
}: {
  number: number;
  unit: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <div className="flex items-baseline justify-center">
        <span className="text-4xl md:text-5xl font-bold text-[#1a365d]">
          {number.toLocaleString()}
        </span>
        <span className="text-xl md:text-2xl text-[#1a365d] ml-1">{unit}</span>
      </div>
      <p className="text-gray-600 text-sm mt-2">{label}</p>
    </div>
  );
}

export default function TrustVisualTopPage() {
  const featuredCases = caseStudies.filter((c) => c.featured).slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f7fafc] to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* テキストエリア */}
            <div>
              <p className="text-[#38a169] font-medium mb-4">
                初回相談30分無料
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a365d] font-bold leading-tight mb-6">
                あなたの「困った」を
                <br />
                解決します。
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                相続、企業法務、離婚問題など、
                <br className="hidden md:block" />
                5,000件以上の相談実績。
                <br className="hidden md:block" />
                まずはお気軽にご相談ください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/templates/trust-visual/contact"
                  className="bg-[#38a169] hover:bg-[#2f855a] text-white px-8 py-4 rounded font-bold text-center transition-colors"
                >
                  無料相談を予約する
                </Link>
                <a
                  href={`tel:${company.phone.replace(/-/g, "")}`}
                  className="border-2 border-[#1a365d] text-[#1a365d] hover:bg-[#1a365d] hover:text-white px-8 py-4 rounded font-bold text-center transition-colors"
                >
                  {company.phone}
                </a>
              </div>
            </div>

            {/* 画像エリア */}
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/templates/trust-visual/hero.jpg"
                  alt="代表弁護士 田中裕子"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* 実績バッジ */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-xs text-gray-500">相談実績</p>
                <p className="text-2xl font-bold text-[#1a365d]">
                  5,000<span className="text-sm">件以上</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCounter
                key={stat.id}
                number={stat.number}
                unit={stat.unit}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#38a169] font-medium mb-2">Why Choose Us</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a365d] font-bold">
              選ばれる理由
            </h2>
          </div>

          <div className="space-y-16">
            {reasons.map((reason, index) => (
              <div
                key={reason.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={reason.image}
                      alt={reason.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <span className="text-[#38a169] text-5xl font-bold opacity-30">
                    {reason.number}
                  </span>
                  <h3 className="font-serif text-2xl text-[#1a365d] font-bold mt-2 mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {reason.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {reason.evidence.map((ev, i) => (
                      <div
                        key={i}
                        className="bg-white px-4 py-3 rounded shadow-sm"
                      >
                        <span className="text-[#38a169] font-bold text-xl">
                          {ev.number.toLocaleString()}
                        </span>
                        <span className="text-[#38a169] text-sm ml-1">
                          {ev.unit}
                        </span>
                        <p className="text-gray-500 text-xs mt-1">{ev.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#38a169] font-medium mb-2">Our Services</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a365d] font-bold">
              取扱分野
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href="/templates/trust-visual/service"
                className="group"
              >
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg">
                    {service.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/templates/trust-visual/service"
              className="inline-block border-2 border-[#1a365d] text-[#1a365d] hover:bg-[#1a365d] hover:text-white px-8 py-3 rounded font-bold transition-colors"
            >
              専門分野の詳細を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#38a169] font-medium mb-2">Case Studies</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a365d] font-bold">
              解決事例
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[16/9] relative">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-[#1a365d] text-white text-xs px-3 py-1 rounded">
                    {caseItem.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#1a365d] mb-3">
                    {caseItem.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {caseItem.summary}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      解決期間: {caseItem.duration}
                    </span>
                    <span className="text-[#38a169] font-medium">
                      担当: {caseItem.担当}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/templates/trust-visual/case"
              className="inline-block border-2 border-[#1a365d] text-[#1a365d] hover:bg-[#1a365d] hover:text-white px-8 py-3 rounded font-bold transition-colors"
            >
              すべての解決事例を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#38a169] font-medium mb-2">Media</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a365d] font-bold">
              メディア掲載
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {media.map((item) => (
              <div key={item.id} className="border-l-4 border-[#38a169] pl-6">
                <p className="text-[#38a169] text-sm font-medium mb-1">
                  {item.name}
                </p>
                <p className="text-gray-500 text-xs mb-2">{item.date}</p>
                <h3 className="font-bold text-[#1a365d] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
}
