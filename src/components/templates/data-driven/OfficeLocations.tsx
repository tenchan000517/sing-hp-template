"use client";

import { motion } from "framer-motion";
import { MapPin, Users } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

interface Office {
  name: string;
  address: string;
  employees: number;
}

interface OfficeLocationsProps {
  offices: Office[];
  totalEmployees: number;
}

export default function OfficeLocations({ offices, totalEmployees }: OfficeLocationsProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="拠点ネットワーク"
          subtitle={`全国${offices.length}拠点で${totalEmployees}名が活躍中`}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          {offices.map((office, index) => (
            <motion.div
              key={office.name}
              className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-text-primary">{office.name}</h3>
              </div>

              <p className="text-sm text-text-secondary mb-4">
                {office.address}
              </p>

              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-text-muted" />
                <span className="text-text-secondary">
                  <span className="font-bold text-primary">{office.employees}</span>名
                </span>
              </div>

              {/* Employee percentage bar */}
              <div className="mt-3">
                <div className="h-2 bg-bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(office.employees / totalEmployees) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  />
                </div>
                <p className="text-xs text-text-muted mt-1 text-right">
                  {Math.round((office.employees / totalEmployees) * 100)}%
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
