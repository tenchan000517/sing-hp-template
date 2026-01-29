"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, Users, Banknote, TrendingUp, MapPin } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

interface CompanyData {
  name: string;
  nameEn: string;
  established: string;
  employees: number;
  capital: string;
  revenue: string;
  revenueGrowth: number;
  business: string;
  address: {
    full: string;
  };
  ceo: {
    name: string;
    title: string;
  };
}

interface CompanyOverviewProps {
  company: CompanyData;
}

export default function CompanyOverview({ company }: CompanyOverviewProps) {
  const dataItems = [
    { icon: Building2, label: "会社名", value: `${company.name}（${company.nameEn}）` },
    { icon: Calendar, label: "設立", value: company.established },
    { icon: Users, label: "従業員数", value: `${company.employees}名` },
    { icon: Banknote, label: "資本金", value: company.capital },
    { icon: TrendingUp, label: "売上高", value: `${company.revenue}（前年比+${company.revenueGrowth}%）` },
    { icon: MapPin, label: "本社所在地", value: company.address.full },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="会社概要"
          subtitle="基本データ"
          align="center"
        />

        <motion.div
          className="max-w-3xl mx-auto mt-12 bg-white rounded-xl shadow-sm border border-border overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <table className="w-full">
            <tbody>
              {dataItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.tr
                    key={item.label}
                    className="border-b border-border last:border-b-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="py-4 px-6 bg-bg-secondary w-1/3">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-primary" />
                        <span className="font-medium text-text-primary">
                          {item.label}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-text-secondary">
                      {item.value}
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
