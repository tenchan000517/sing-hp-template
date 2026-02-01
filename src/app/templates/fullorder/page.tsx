import Link from "next/link";
import Layout, { CTASection } from "./_components/Layout";
import {
  hero,
  reasons,
  services,
  equipmentCarousel,
  recruitTeaser,
  company,
} from "@/data/fullorder/sample";

// ヒーローセクション
function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-[#2C3E50]">
      {/* 背景画像（プレースホルダー） */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/90 to-[#2C3E50]/70" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${hero.backgroundImage})`,
        }}
      />

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          {hero.catchphrase}
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 tracking-wide">
          {hero.subcopy}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={hero.ctaPrimary.href}
            className="bg-[#E67E22] hover:bg-[#D35400] text-white px-8 py-4 rounded font-bold transition-colors text-lg"
          >
            {hero.ctaPrimary.label}
          </Link>
          <Link
            href={hero.ctaSecondary.href}
            className="border-2 border-white text-white hover:bg-white hover:text-[#2C3E50] px-8 py-4 rounded font-bold transition-colors text-lg"
          >
            {hero.ctaSecondary.label}
          </Link>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

// 選ばれる3つの理由セクション
function ReasonsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-4">
          選ばれる3つの理由
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Why customers choose us
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {reasons.map((reason) => (
            <div key={reason.id} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#E67E22] mb-4">
                {reason.number}
              </div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 対応加工サマリーセクション
function ServicesSection() {
  const icons: Record<string, React.ReactNode> = {
    lathe: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth={2} />
        <path strokeWidth={2} d="M12 6v6l4 2" />
      </svg>
    ),
    machining: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2} />
        <path strokeWidth={2} d="M9 3v18M3 9h18" />
      </svg>
    ),
    complex: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="8" cy="6" r="2" strokeWidth={2} />
        <circle cx="16" cy="12" r="2" strokeWidth={2} />
        <circle cx="10" cy="18" r="2" strokeWidth={2} />
      </svg>
    ),
    prototype: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    smalllot: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    mass: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  };

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-4">
          対応加工
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Our machining capabilities
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="text-center p-6 bg-white rounded hover:shadow-lg transition-shadow"
            >
              <div className="text-[#2C3E50] mb-4 flex justify-center">
                {icons[service.icon]}
              </div>
              <h3 className="font-bold text-[#2C3E50]">{service.name}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/templates/fullorder/service"
            className="inline-flex items-center gap-2 text-[#E67E22] font-bold hover:underline"
          >
            サービス詳細を見る
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// 設備カルーセルセクション
function EquipmentSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-4">
          設備・信頼の証
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Our equipment & certifications
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {equipmentCarousel.map((equip) => (
            <div
              key={equip.id}
              className="group"
            >
              <div className="aspect-[4/3] bg-gray-200 rounded overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2} />
                    <circle cx="8.5" cy="8.5" r="1.5" strokeWidth={2} />
                    <path strokeWidth={2} d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-[#2C3E50] mb-1">{equip.name}</h3>
              <p className="text-sm text-gray-500 mb-1">{equip.model}</p>
              <p className="text-sm text-[#E67E22]">{equip.feature}</p>
            </div>
          ))}
        </div>

        {/* 認証バッジ */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 bg-[#F8F9FA] px-6 py-3 rounded">
            <svg className="w-6 h-6 text-[#2C3E50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-bold text-[#2C3E50]">ISO9001:2015 認証</span>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/templates/fullorder/equipment"
            className="inline-flex items-center gap-2 text-[#E67E22] font-bold hover:underline"
          >
            設備一覧を見る
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// 採用ティーザーセクション
function RecruitSection() {
  return (
    <section className="relative py-32 bg-[#2C3E50]">
      {/* 背景画像（プレースホルダー） */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(${recruitTeaser.backgroundImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/80 to-[#2C3E50]/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {recruitTeaser.heading}
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {recruitTeaser.badges.map((badge, index) => (
            <div key={index} className="bg-white/10 backdrop-blur px-6 py-4 rounded">
              <div className="text-sm text-white/70 mb-1">{badge.label}</div>
              <div className="text-2xl font-bold text-[#E67E22]">{badge.value}</div>
            </div>
          ))}
        </div>

        <Link
          href={recruitTeaser.cta.href}
          className="inline-flex items-center gap-2 bg-[#E67E22] hover:bg-[#D35400] text-white px-8 py-4 rounded font-bold transition-colors"
        >
          {recruitTeaser.cta.label}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

// お問い合わせ導線セクション
function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">
              お気軽にお問い合わせください
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              技術相談・お見積もりは無料です。<br />
              「こんな形状、作れる？」「急ぎだけど対応できる？」<br />
              どんなご相談でも、まずはお気軽にご連絡ください。
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">お電話</p>
                <a
                  href={`tel:${company.phone.replace(/-/g, "")}`}
                  className="text-3xl font-bold text-[#2C3E50]"
                >
                  {company.phone}
                </a>
                <p className="text-sm text-gray-500">{company.hours}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">所在地</p>
                <p className="text-[#2C3E50]">{company.address.full}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#F8F9FA] p-8 rounded">
            <h3 className="text-xl font-bold text-[#2C3E50] mb-4">
              Webでのお問い合わせ
            </h3>
            <p className="text-gray-600 mb-6">
              図面添付も可能です。通常1営業日以内にご返答いたします。
            </p>
            <Link
              href="/templates/fullorder/contact"
              className="block w-full bg-[#E67E22] hover:bg-[#D35400] text-white text-center py-4 rounded font-bold transition-colors"
            >
              お問い合わせフォームへ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FullorderTopPage() {
  return (
    <Layout>
      <HeroSection />
      <ReasonsSection />
      <ServicesSection />
      <EquipmentSection />
      <RecruitSection />
      <ContactSection />
    </Layout>
  );
}
