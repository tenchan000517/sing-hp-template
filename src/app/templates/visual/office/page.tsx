"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import { company, officeAreas, facilities } from "@/data/visual/sample";

export default function OfficePage() {
  const [selectedArea, setSelectedArea] = useState(officeAreas[0]);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="mb-4 block text-sm font-medium uppercase tracking-widest opacity-80">
            OFFICE
          </span>
          <h1 className="text-3xl font-bold md:text-4xl">オフィス紹介</h1>
          <p className="mt-4 text-lg opacity-90">
            クリエイティブを生み出す空間をご紹介
          </p>
        </div>
      </section>

      {/* Office Tour */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="mb-8 text-center text-2xl font-bold">
              エリア別フォトツアー
            </h2>
          </FadeIn>

          {/* Area Tabs */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {officeAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area)}
                className={`filter-btn ${
                  selectedArea.id === area.id
                    ? "filter-btn-active"
                    : "filter-btn-inactive"
                }`}
              >
                {area.name}
              </button>
            ))}
          </div>

          {/* Area Content */}
          <motion.div
            key={selectedArea.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-4xl"
          >
            <p className="mb-6 text-center text-[var(--color-text-secondary)]">
              {selectedArea.description}
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {selectedArea.photos.map((photo, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-md"
                >
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    width={800}
                    height={600}
                    className="w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <p className="bg-white p-3 text-center text-sm text-[var(--color-text-secondary)]">
                    {photo.caption}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-[var(--color-bg-secondary)] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="mb-12 text-center text-2xl font-bold">
              設備・備品紹介
            </h2>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            {facilities.map((category, catIndex) => (
              <FadeIn key={category.category} direction="up" delay={catIndex * 0.1}>
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="mb-4 border-b border-[var(--color-border)] pb-2 text-lg font-bold text-[var(--color-primary)]">
                    {category.category}
                  </h3>
                  <ul className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <p className="font-medium text-[var(--color-text-primary)]">
                          {item.name}
                        </p>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="mb-8 text-center text-2xl font-bold">アクセス</h2>
          </FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-lg font-medium">{company.name}</p>
            <p className="text-[var(--color-text-secondary)]">
              〒{company.address.postalCode}
            </p>
            <p className="text-[var(--color-text-secondary)]">
              {company.address.full}
            </p>
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">
              東急東横線・日比谷線「中目黒駅」徒歩5分
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
