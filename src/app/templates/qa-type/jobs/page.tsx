import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/templates/qa-type";
import { company, jobs } from "@/data/qa-type/sample";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: `募集要項 | ${company.name} 採用サイト`,
  description: `${company.name}の募集職種一覧。製造スタッフ、品質管理など、各職種の仕事内容、応募資格、給与、福利厚生を詳しくご紹介します。`,
};

export default function JobsPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="募集要項"
        subtitle="JOB OPENINGS"
        description="現在募集中の職種をご紹介します"
      />

      {/* Jobs List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {jobs.map((job, index) => (
              <FadeIn key={job.id} direction="up" delay={index * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {/* Job Header */}
                  <div className="bg-gradient-to-r from-[#4CAF50] to-[#66BB6A] p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-white/20 text-sm px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold">{job.title}</h2>
                  </div>

                  {/* Job Content */}
                  <div className="p-6">
                    {/* Description */}
                    <p className="text-gray-700 mb-6">{job.description}</p>

                    {/* Key Info */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="w-5 h-5 text-[#4CAF50]" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <span className="text-lg">💰</span>
                        <span className="font-bold text-gray-900">
                          {job.salary}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Clock className="w-5 h-5 text-[#4CAF50]" />
                        <span>{job.workingHours}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Calendar className="w-5 h-5 text-[#4CAF50]" />
                        <span>{job.holidays}</span>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="mb-6">
                      <h3 className="font-bold text-gray-900 mb-3">応募資格</h3>
                      <ul className="space-y-2">
                        {job.requirements.map((req, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <CheckCircle2 className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Preferred */}
                    <div className="mb-6">
                      <h3 className="font-bold text-gray-900 mb-3">
                        歓迎スキル（なくてもOK）
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {job.preferred.map((pref, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {pref}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h3 className="font-bold text-gray-900 mb-3">福利厚生</h3>
                      <div className="flex flex-wrap gap-2">
                        {job.benefits.map((benefit, i) => (
                          <span
                            key={i}
                            className="bg-[#E8F5E9] text-[#2E7D32] px-3 py-1 rounded-full text-sm"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="flex justify-center pt-4 border-t border-gray-100">
                      <Link
                        href="/templates/qa-type/contact"
                        className="inline-flex items-center gap-2 bg-[#4CAF50] text-white font-bold py-3 px-8 rounded-full hover:bg-[#43A047] transition-colors"
                      >
                        この職種に応募する
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              ご応募をお考えの方へ
            </h2>
            <p className="text-gray-700 mb-6">
              募集要項に記載のない職種や条件についても、
              お気軽にお問い合わせください。
              あなたの経験やスキルに合ったポジションをご提案できる場合もあります。
            </p>
            <Link
              href="/templates/qa-type/contact"
              className="inline-block bg-[#FF9800] text-white font-bold py-3 px-8 rounded-full hover:bg-[#F57C00] transition-colors"
            >
              まずは相談する
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
