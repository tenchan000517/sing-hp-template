"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import Card from "@/components/common/Card";

interface Member {
  id: string;
  name: string;
  age: number;
  yearsOfService: number;
  position: string;
  photo: string;
  catchphrase: string;
}

interface GrowthStorySectionProps {
  members: Member[];
}

export default function GrowthStorySection({ members }: GrowthStorySectionProps) {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg-secondary)]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="先輩たちの成長ストーリー"
          subtitle="MEMBER'S VOICE"
          description="入社後どのように成長していったのか、先輩社員のリアルな声をご紹介します。"
          align="center"
          border={false}
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {members.slice(0, 3).map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                href={`/templates/story-type/members#${member.id}`}
                padding="none"
                className="overflow-hidden h-full"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm opacity-80">
                      {member.position} / 入社{member.yearsOfService}年目
                    </p>
                    <p className="text-lg font-bold">{member.name}さん（{member.age}歳）</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4 line-clamp-3">
                    「{member.catchphrase}」
                  </p>
                  <div className="flex items-center text-[var(--color-primary)] text-sm font-medium">
                    <span>詳しく見る</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            href="/templates/story-type/members"
            className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:underline"
          >
            <span>もっと見る</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
