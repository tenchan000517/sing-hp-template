"use client";

import { templates } from "@/lib/constants";
import TemplateCard from "@/components/home/TemplateCard";
import FadeIn from "@/components/animations/FadeIn";
import { Building2, Users, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative">
          <FadeIn direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                中小企業向け
                <br />
                採用HPテンプレート
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
                企業の魅力を最大限に伝える採用サイトを、
                <br className="hidden md:block" />
                簡単に構築できるテンプレート集です。
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Building2 className="w-4 h-4" />
                  <span>5種類のテンプレート</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="w-4 h-4" />
                  <span>採用に特化した設計</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4" />
                  <span>SEO/LLMO対応</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-secondary)]">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-4">
                テンプレート一覧
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                企業の特性や採用戦略に合わせて、最適なテンプレートをお選びください。
                <br />
                カードをクリックすると、実際のテンプレートを確認できます。
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <TemplateCard
                key={template.id}
                {...template}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-4">
                テンプレートの特徴
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <FadeIn direction="up" delay={0}>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                  レスポンシブ対応
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  スマートフォン、タブレット、PCすべてのデバイスで最適な表示を実現。
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                  SEO/LLMO最適化
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  検索エンジンとAI検索の両方に最適化された構造化データを実装。
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                  高速表示
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Next.jsの最新機能を活用し、高速なページ読み込みを実現。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-text-primary)] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-70">
            © 2025 採用HPテンプレート. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
