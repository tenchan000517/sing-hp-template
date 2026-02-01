import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Layout from "../_components/Layout";
import {
  recruitConcept,
  infographics,
  interviews,
  jobs,
  entryCta,
} from "@/data/fullorder/sample";

export const metadata: Metadata = {
  title: "採用情報",
  description: "三河精密工業の採用情報。ミクロンに挑む仲間を募集しています。未経験者歓迎。",
};

// ヒーローセクション
function PageHero() {
  return (
    <section className="bg-[#2C3E50] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">採用情報</h1>
        <p className="text-white/80 text-lg">
          ミクロンに挑む、仲間を募集しています
        </p>
      </div>
    </section>
  );
}

// コンセプトセクション
function ConceptSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-[#E67E22] font-bold mb-4 tracking-wider">
          {recruitConcept.subheading}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-8">
          {recruitConcept.heading}
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-lg">
          {recruitConcept.lead}
        </p>
      </div>
    </section>
  );
}

// インフォグラフィックセクション
function InfographicsSection() {
  const icons: Record<string, React.ReactNode> = {
    clock: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    plane: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tree: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    book: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    certificate: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    baby: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  };

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-4">
          データで見る三河精密
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Numbers that tell our story
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {infographics.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded text-center">
              <div className="text-[#E67E22] mb-4 flex justify-center">
                {icons[item.icon]}
              </div>
              <div className="text-4xl font-bold text-[#2C3E50] mb-1">
                {item.value}
                <span className="text-lg">{item.unit}</span>
              </div>
              <p className="text-gray-600 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 社員インタビューセクション
function InterviewsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-4">
          社員インタビュー
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Our Team Members
        </p>

        <div className="space-y-24">
          {interviews.map((interview, index) => (
            <div
              key={interview.id}
              className={`grid md:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="aspect-[4/3] bg-gray-200 rounded overflow-hidden relative">
                  <Image
                    src={interview.photo}
                    alt={interview.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">
                    {interview.position} / {interview.years}
                  </p>
                  <h3 className="text-2xl font-bold text-[#2C3E50]">
                    {interview.name}
                  </h3>
                </div>

                <p className="text-2xl font-bold text-[#E67E22] mb-4">
                  「{interview.catchphrase}」
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {interview.lead}
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {interview.story}
                </p>

                {/* 1日のスケジュール */}
                <div className="bg-[#F8F9FA] p-6 rounded">
                  <h4 className="font-bold text-[#2C3E50] mb-4">1日のスケジュール</h4>
                  <div className="space-y-2">
                    {interview.schedule.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <span className="text-[#E67E22] font-bold w-16">{item.time}</span>
                        <span className="text-gray-600">{item.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-6 text-[#2C3E50] font-bold">
                  「{interview.message}」
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 募集要項セクション
function JobsSection() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-4">
          募集要項
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Job Openings
        </p>

        <div className="space-y-8">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded overflow-hidden">
              <div className="bg-[#2C3E50] px-6 py-4">
                <div className="flex items-center gap-4">
                  <span className="bg-[#E67E22] text-white text-sm px-3 py-1 rounded">
                    {job.type}
                  </span>
                  <h3 className="text-xl font-bold text-white">{job.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6">{job.description}</p>

                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <th className="py-4 text-left text-[#2C3E50] font-bold w-32">応募資格</th>
                      <td className="py-4 text-gray-600">
                        <ul className="list-disc list-inside space-y-1">
                          {job.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <th className="py-4 text-left text-[#2C3E50] font-bold">給与</th>
                      <td className="py-4 text-gray-600">{job.salary}</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <th className="py-4 text-left text-[#2C3E50] font-bold">賞与</th>
                      <td className="py-4 text-gray-600">{job.bonus}</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <th className="py-4 text-left text-[#2C3E50] font-bold">勤務時間</th>
                      <td className="py-4 text-gray-600">{job.hours}</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <th className="py-4 text-left text-[#2C3E50] font-bold">休日</th>
                      <td className="py-4 text-gray-600">{job.holidays}</td>
                    </tr>
                    <tr>
                      <th className="py-4 text-left text-[#2C3E50] font-bold align-top">福利厚生</th>
                      <td className="py-4 text-gray-600">
                        <div className="flex flex-wrap gap-2">
                          {job.benefits.map((benefit, idx) => (
                            <span key={idx} className="bg-[#F8F9FA] px-3 py-1 rounded text-sm">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// エントリーCTAセクション
function EntryCtaSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* カジュアル面談 */}
          <div className="bg-[#F8F9FA] p-8 rounded">
            <h3 className="text-xl font-bold text-[#2C3E50] mb-4">
              {entryCta.casual.heading}
            </h3>
            <p className="text-gray-600 mb-6">
              {entryCta.casual.description}
            </p>
            <Link
              href={entryCta.casual.href}
              className="block w-full border-2 border-[#E67E22] text-[#E67E22] hover:bg-[#E67E22] hover:text-white text-center py-4 rounded font-bold transition-colors"
            >
              {entryCta.casual.buttonLabel}
            </Link>
          </div>

          {/* 正式エントリー */}
          <div className="bg-[#2C3E50] p-8 rounded text-white">
            <h3 className="text-xl font-bold mb-4">
              {entryCta.formal.heading}
            </h3>
            <p className="text-white/80 mb-6">
              {entryCta.formal.description}
            </p>
            <Link
              href={entryCta.formal.href}
              className="block w-full bg-[#E67E22] hover:bg-[#D35400] text-white text-center py-4 rounded font-bold transition-colors"
            >
              {entryCta.formal.buttonLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RecruitPage() {
  return (
    <Layout>
      <PageHero />
      <ConceptSection />
      <InfographicsSection />
      <InterviewsSection />
      <JobsSection />
      <EntryCtaSection />
    </Layout>
  );
}
