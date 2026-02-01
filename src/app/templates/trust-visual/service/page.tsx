"use client";

import Image from "next/image";
import Layout, { CTASection } from "../_components/Layout";
import { services } from "@/data/trust-visual/sample";

export default function ServicePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-[#1a365d] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <p className="text-[#38a169] font-medium mb-2">Services</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold">
              専門分野
            </h1>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              相続・遺言、企業法務、離婚・家事事件、不動産取引など、
              幅広い分野でご相談をお受けしております。
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h2 className="font-serif text-3xl text-[#1a365d] font-bold mb-4">
                    {service.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="font-bold text-[#1a365d] mb-3">対応内容</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-[#38a169] rounded-full" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  {service.stats && service.stats.length > 0 && (
                    <div className="flex gap-6 mb-6">
                      {service.stats.map((stat, i) => (
                        <div key={i} className="bg-[#f7fafc] px-4 py-3 rounded">
                          <span className="text-[#38a169] font-bold text-2xl">
                            {stat.number.toLocaleString()}
                          </span>
                          <span className="text-[#38a169] text-sm ml-1">
                            {stat.unit}
                          </span>
                          <p className="text-gray-500 text-xs mt-1">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Fees */}
                  {service.fees && service.fees.length > 0 && (
                    <div className="bg-[#f7fafc] p-6 rounded-lg">
                      <h3 className="font-bold text-[#1a365d] mb-4">
                        料金の目安
                      </h3>
                      <div className="space-y-2">
                        {service.fees.map((fee, i) => (
                          <div
                            key={i}
                            className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
                          >
                            <span className="text-gray-600">{fee.item}</span>
                            <span className="font-bold text-[#1a365d]">
                              {fee.price}
                            </span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-4">
                        ※ 上記は目安です。詳細はご相談時にご説明いたします。
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Notice */}
      <section className="py-16 bg-[#f7fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl text-[#1a365d] font-bold mb-4">
            明確な料金体系
          </h2>
          <p className="text-gray-600 mb-8">
            当事務所では、ご相談時に必ず見積もりをお出しし、
            追加費用が発生する場合は事前にご説明いたします。
            料金についてご不明な点がございましたら、お気軽にお尋ねください。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <p className="text-3xl font-bold text-[#38a169] mb-2">無料</p>
              <p className="text-gray-600">初回相談30分</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-3xl font-bold text-[#38a169] mb-2">100%</p>
              <p className="text-gray-600">事前見積もり</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-3xl font-bold text-[#38a169] mb-2">0円</p>
              <p className="text-gray-600">着手金（一部案件）</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
