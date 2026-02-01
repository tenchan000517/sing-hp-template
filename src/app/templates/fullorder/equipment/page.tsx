import type { Metadata } from "next";
import Image from "next/image";
import Layout, { CTASection } from "../_components/Layout";
import { equipments } from "@/data/fullorder/sample";

export const metadata: Metadata = {
  title: "設備紹介",
  description: "三河精密工業の加工設備・測定機器をご紹介。最新鋭の設備で高精度加工を実現します。",
};

// ヒーローセクション
function PageHero() {
  return (
    <section className="bg-[#2C3E50] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">設備紹介</h1>
        <p className="text-white/80 text-lg">
          最新鋭の設備で高精度加工を実現
        </p>
      </div>
    </section>
  );
}

// 設備カテゴリセクション
function EquipmentCategorySection({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: typeof equipments.machining;
}) {
  return (
    <div className="mb-20 last:mb-0">
      <h2 className="text-2xl font-bold text-[#2C3E50] mb-2">{title}</h2>
      <p className="text-gray-600 mb-8">{subtitle}</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-[4/3] bg-gray-200 relative">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-[#2C3E50] text-lg mb-1">{item.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{item.model}</p>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 text-gray-500">スペック</td>
                    <td className="py-2 text-[#2C3E50] text-right">{item.spec}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 text-gray-500">導入</td>
                    <td className="py-2 text-[#2C3E50] text-right">{item.year}</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-500">台数</td>
                    <td className="py-2 text-[#E67E22] font-bold text-right">{item.quantity}台</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EquipmentPage() {
  return (
    <Layout>
      <PageHero />

      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EquipmentCategorySection
            title="加工設備"
            subtitle="Machining Equipment"
            items={equipments.machining}
          />

          <EquipmentCategorySection
            title="測定設備"
            subtitle="Measurement Equipment"
            items={equipments.measurement}
          />

          <EquipmentCategorySection
            title="CAD/CAM"
            subtitle="Design & Programming"
            items={equipments.cadcam}
          />
        </div>
      </section>

      {/* 設備投資方針 */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">
            設備投資への姿勢
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            三河精密は、創業以来「最新の設備で最高の品質を」という方針を貫いています。
            お客様の多様なニーズにお応えするため、加工設備・測定設備への継続的な投資を行い、
            常に最先端の加工技術を提供できる体制を整えています。
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E67E22] mb-2">15台+</div>
              <p className="text-gray-600">NC加工機保有台数</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E67E22] mb-2">3年</div>
              <p className="text-gray-600">平均設備更新サイクル</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E67E22] mb-2">24h</div>
              <p className="text-gray-600">稼働体制（一部設備）</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
