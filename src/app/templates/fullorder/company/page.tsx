import type { Metadata } from "next";
import Layout, { CTASection } from "../_components/Layout";
import { ceoMessage, companyInfo, history, access, clients } from "@/data/fullorder/sample";

export const metadata: Metadata = {
  title: "会社概要",
  description: "三河精密工業株式会社の会社概要。創業52年、精密金属加工のプロフェッショナル集団です。",
};

// ヒーローセクション
function PageHero() {
  return (
    <section className="bg-[#2C3E50] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">会社概要</h1>
        <p className="text-white/80 text-lg">
          創業52年、困ったときに頼れる存在であり続けるために
        </p>
      </div>
    </section>
  );
}

// 代表メッセージセクション
function CeoMessageSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-4">
          {ceoMessage.heading}
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Message from CEO
        </p>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <div className="aspect-[3/4] bg-gray-200 rounded overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">{ceoMessage.title}</p>
              <p className="text-xl font-bold text-[#2C3E50]">{ceoMessage.name}</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="prose prose-lg max-w-none">
              {ceoMessage.message.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="text-gray-600 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 会社情報セクション
function CompanyInfoSection() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-4">
          会社情報
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Company Information
        </p>

        <div className="bg-white rounded overflow-hidden">
          <table className="w-full">
            <tbody>
              {companyInfo.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0">
                  <th className="py-5 px-6 text-left text-[#2C3E50] font-bold bg-gray-50 w-1/3">
                    {item.label}
                  </th>
                  <td className="py-5 px-6 text-gray-600">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 主要取引先 */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-[#2C3E50] mb-6 text-center">
            主要取引先
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client, idx) => (
              <span
                key={idx}
                className="bg-white px-6 py-3 rounded text-[#2C3E50]"
              >
                {client}
              </span>
            ))}
            <span className="bg-white px-6 py-3 rounded text-gray-500">
              他多数
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// 沿革セクション
function HistorySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-4">
          沿革
        </h2>
        <p className="text-center text-gray-600 mb-16">
          History
        </p>

        <div className="relative">
          {/* タイムライン線 */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#E67E22]/30 -translate-x-1/2" />

          <div className="space-y-8">
            {history.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex items-start gap-8 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* 年度（PC） */}
                <div className={`hidden md:block w-1/2 ${idx % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                  <span className="text-2xl font-bold text-[#E67E22]">{item.year}</span>
                </div>

                {/* ドット */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#E67E22] rounded-full -translate-x-1/2 mt-1" />

                {/* 内容 */}
                <div className={`pl-12 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  {/* 年度（モバイル） */}
                  <span className="md:hidden text-lg font-bold text-[#E67E22] block mb-1">{item.year}</span>
                  <p className="text-gray-600">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// アクセスセクション
function AccessSection() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-4">
          {access.heading}
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Access
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 地図 */}
          <div className="aspect-[4/3] bg-gray-200 rounded overflow-hidden">
            <iframe
              src={access.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>

          {/* アクセス情報 */}
          <div>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-6">
              三河精密工業株式会社
            </h3>
            <p className="text-gray-600 mb-6">
              〒444-0802 愛知県岡崎市美合町字並松1-23
            </p>

            <div className="space-y-4">
              {access.directions.map((direction, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-20 flex-shrink-0">
                    <span className="inline-block bg-[#2C3E50] text-white text-sm px-3 py-1 rounded">
                      {direction.method}
                    </span>
                  </div>
                  <p className="text-gray-600">{direction.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white rounded">
              <p className="text-sm text-gray-500 mb-1">お車でお越しの方</p>
              <p className="text-[#2C3E50]">
                無料駐車場20台完備しております。<br />
                お気軽にお越しください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CompanyPage() {
  return (
    <Layout>
      <PageHero />
      <CeoMessageSection />
      <CompanyInfoSection />
      <HistorySection />
      <AccessSection />
      <CTASection />
    </Layout>
  );
}
