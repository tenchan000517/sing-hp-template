"use client";

import Image from "next/image";
import Layout, { CTASection } from "../_components/Layout";
import { lawyers } from "@/data/trust-visual/sample";

export default function LawyersPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-[#1a365d] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <p className="text-[#38a169] font-medium mb-2">Lawyers</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold">
              弁護士紹介
            </h1>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              経験豊富な弁護士が、あなたのお悩みに寄り添います。
            </p>
          </div>
        </div>
      </section>

      {/* Lawyers List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {lawyers.map((lawyer, index) => (
              <div
                key={lawyer.id}
                className={`grid md:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={lawyer.photo}
                      alt={lawyer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <span className="inline-block bg-[#1a365d] text-white text-sm px-4 py-1 rounded mb-4">
                    {lawyer.position}
                  </span>
                  <h2 className="font-serif text-3xl text-[#1a365d] font-bold mb-1">
                    {lawyer.name}
                  </h2>
                  <p className="text-gray-500 text-sm mb-6">{lawyer.nameKana}</p>

                  {/* Profile Table */}
                  <div className="bg-[#f7fafc] rounded-lg p-6 mb-6">
                    <table className="w-full text-sm">
                      <tbody>
                        <tr>
                          <th className="text-left text-gray-500 py-2 w-1/3">
                            弁護士登録
                          </th>
                          <td className="py-2 text-[#1a365d]">
                            {lawyer.registrationYear}年（弁護士歴
                            {lawyer.experience}年）
                          </td>
                        </tr>
                        <tr>
                          <th className="text-left text-gray-500 py-2">
                            所属
                          </th>
                          <td className="py-2 text-[#1a365d]">
                            {lawyer.barNumber}
                          </td>
                        </tr>
                        <tr>
                          <th className="text-left text-gray-500 py-2">
                            専門分野
                          </th>
                          <td className="py-2 text-[#1a365d]">
                            {lawyer.specialties.join("、")}
                          </td>
                        </tr>
                        {lawyer.certifications.length > 0 && (
                          <tr>
                            <th className="text-left text-gray-500 py-2">
                              資格
                            </th>
                            <td className="py-2 text-[#1a365d]">
                              {lawyer.certifications.join("、")}
                            </td>
                          </tr>
                        )}
                        <tr>
                          <th className="text-left text-gray-500 py-2">
                            学歴
                          </th>
                          <td className="py-2 text-[#1a365d]">
                            {lawyer.education}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Message */}
                  <div className="border-l-4 border-[#38a169] pl-6">
                    <p className="text-gray-600 leading-relaxed italic">
                      「{lawyer.message}」
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-[#f7fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl text-[#1a365d] font-bold">
              弁護士チームの特徴
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-[#38a169] mb-2">8名</p>
              <p className="text-gray-600">所属弁護士</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-[#38a169] mb-2">3名</p>
              <p className="text-gray-600">女性弁護士</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-[#38a169] mb-2">25年</p>
              <p className="text-gray-600">最長弁護士歴</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
