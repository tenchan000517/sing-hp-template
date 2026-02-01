"use client";

import { templates } from "@/lib/constants";
import TemplateCard from "@/components/home/TemplateCard";
import FadeIn from "@/components/animations/FadeIn";
import { LayoutGrid, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                <LayoutGrid className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-[var(--color-text-primary)]">
                  Sing WEB Design
                </h1>
                <p className="text-xs text-red-500 font-medium">
                  ※ 本URL及びソースコードは当社独自開発のため、第三者への共有はお控えください
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
              <Sparkles className="w-4 h-4" />
              <span>{templates.length} テンプレート</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Section Title */}
        <FadeIn direction="up">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
              テンプレート一覧
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)]">
              企業の特性や目的に合わせて、最適なテンプレートをお選びください。
            </p>
          </div>
        </FadeIn>

        {/* Templates Grid - 4 columns like reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {templates.map((template, index) => (
            <TemplateCard
              key={template.id}
              {...template}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm text-[var(--color-text-muted)]">
            © 2026 Sing WEB Design. All Rights Reserved.
          </p>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">
            Proprietary Technology - Unauthorized reproduction or distribution is strictly prohibited.
          </p>
        </div>
      </footer>
    </main>
  );
}
