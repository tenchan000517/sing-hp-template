"use client";

import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

interface CEOMessageProps {
  companyName: string;
  ceo: {
    name: string;
    title: string;
    message: string;
  };
  image?: string;
}

export default function CEOMessage({
  companyName,
  ceo,
  image = "/images/templates/story-type/ceo.jpg",
}: CEOMessageProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-start max-w-5xl mx-auto">
          {/* Image */}
          <FadeIn direction="right" className="lg:col-span-2">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={image}
                alt={`${ceo.title} ${ceo.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </FadeIn>

          {/* Message */}
          <FadeIn direction="left" className="lg:col-span-3">
            <div>
              <span className="text-sm font-medium text-[var(--color-primary)] tracking-wider uppercase mb-2 block">
                MESSAGE
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-8 section-title-bordered">
                代表メッセージ
              </h2>

              <div className="bg-[var(--color-bg-tertiary)] p-6 md:p-8 rounded-xl border border-[var(--color-border)]">
                <div className="text-4xl text-[var(--color-primary)]/20 font-serif mb-4">
                  &ldquo;
                </div>
                <div className="font-serif text-[var(--color-text-secondary)] leading-loose whitespace-pre-line text-sm md:text-base">
                  {ceo.message}
                </div>
                <div className="text-4xl text-[var(--color-primary)]/20 font-serif text-right mt-4">
                  &rdquo;
                </div>
              </div>

              {/* Signature */}
              <div className="mt-6 text-right">
                <p className="text-sm text-[var(--color-text-muted)] mb-1">
                  {companyName}
                </p>
                <p className="text-lg font-bold text-[var(--color-text-primary)]">
                  {ceo.title} {ceo.name}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
