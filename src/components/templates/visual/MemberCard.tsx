"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Member {
  id: string;
  name: string;
  position: string;
  department: string;
  joinYear: number;
  photo: string;
  oneLiner: string;
}

interface MemberCardProps {
  member: Member;
  index?: number;
}

export default function MemberCard({ member, index = 0 }: MemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/templates/visual/people/${member.id}`}
        className="member-card-visual group block"
      >
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover"
        />
        <div className="member-card-info">
          <p className="mb-1 text-sm opacity-80">
            {member.department} / {member.joinYear}年入社
          </p>
          <h3 className="mb-2 text-xl font-bold">{member.name}</h3>
          <p className="text-sm font-medium text-[var(--color-accent-light)]">
            {member.position}
          </p>
          <p className="mt-2 text-sm opacity-80">「{member.oneLiner}」</p>
        </div>
      </Link>
    </motion.div>
  );
}
