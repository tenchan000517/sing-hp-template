"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Job {
  id: string;
  title: string;
  catchphrase: string;
  salary: {
    min: number;
    max: number;
    unit: string;
  };
  location: string;
  photos: string[];
  openings: number;
}

interface JobCardProps {
  job: Job;
  index?: number;
}

export default function JobCard({ job, index = 0 }: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/templates/visual/jobs/${job.id}`}
        className="group relative block overflow-hidden rounded-xl"
      >
        {/* Background Image */}
        <div className="relative aspect-[16/10]">
          <Image
            src={job.photos[0]}
            alt={job.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded bg-[var(--color-accent)] px-2 py-0.5 text-xs font-medium">
              募集中
            </span>
            <span className="text-xs opacity-80">{job.openings}名募集</span>
          </div>
          <h3 className="mb-2 text-2xl font-bold">{job.title}</h3>
          <p className="mb-3 text-sm opacity-90">{job.catchphrase}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">
              {(job.salary.min / 10000).toFixed(0)}〜
              {(job.salary.max / 10000).toFixed(0)}万円
              <span className="text-xs opacity-80">/{job.salary.unit}</span>
            </span>
            <span className="text-sm opacity-80">{job.location}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
