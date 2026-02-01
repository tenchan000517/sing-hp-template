"use client";

import Image from "next/image";
import Layout, { CTASection } from "../_components/Layout";
import {
  ceoMessage,
  officeInfo,
  access,
  company,
} from "@/data/trust-visual/sample";

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-[#1a365d] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <p className="text-[#38a169] font-medium mb-2">About Us</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold">
              事務所概要
            </h1>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#38a169] font-medium mb-2">Message</p>
            <h2 className="font-serif text-3xl text-[#1a365d] font-bold">
              {ceoMessage.heading}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={ceoMessage.photo}
                alt={`${ceoMessage.title} ${ceoMessage.name}`}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="prose prose-lg text-gray-600">
                {ceoMessage.message.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-500 text-sm">{ceoMessage.title}</p>
                <p className="font-serif text-2xl text-[#1a365d] font-bold">
                  {ceoMessage.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#38a169] font-medium mb-2">Information</p>
            <h2 className="font-serif text-3xl text-[#1a365d] font-bold">
              事務所情報
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <tbody>
                {officeInfo.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <th className="py-4 px-6 text-left text-[#1a365d] font-medium w-1/3">
                      {item.label}
                    </th>
                    <td className="py-4 px-6 text-gray-600">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#38a169] font-medium mb-2">Access</p>
            <h2 className="font-serif text-3xl text-[#1a365d] font-bold">
              {access.heading}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Map */}
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src={access.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="事務所所在地"
              />
            </div>

            {/* Directions */}
            <div>
              <h3 className="font-bold text-[#1a365d] text-xl mb-6">
                {company.address.full}
              </h3>
              <div className="space-y-4">
                {access.directions.map((dir, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-[#f7fafc] rounded"
                  >
                    <span className="bg-[#1a365d] text-white text-xs px-3 py-1 rounded font-medium">
                      {dir.method}
                    </span>
                    <p className="text-gray-600">{dir.detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-[#f7fafc] rounded-lg">
                <h4 className="font-bold text-[#1a365d] mb-2">お問い合わせ</h4>
                <p className="text-2xl font-bold text-[#1a365d] mb-1">
                  {company.phone}
                </p>
                <p className="text-gray-500 text-sm">{company.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
