import { Metadata } from "next";
import CompanyOverview from "@/components/templates/data-driven/CompanyOverview";
import TimelineHistory from "@/components/templates/data-driven/TimelineHistory";
import OfficeLocations from "@/components/templates/data-driven/OfficeLocations";
import { company } from "@/data/data-driven/sample";

export const metadata: Metadata = {
  title: "企業データ",
  description: `${company.name}の会社概要、沿革、拠点情報をデータでご紹介します。`,
};

export default function CompanyPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">企業データ</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            数字と事実で当社をご紹介します
          </p>
        </div>
      </div>

      <CompanyOverview
        company={{
          name: company.name,
          nameEn: company.nameEn,
          established: company.established,
          employees: company.employees,
          capital: company.capital,
          revenue: company.revenue,
          revenueGrowth: company.revenueGrowth,
          business: company.business,
          address: company.address,
          ceo: company.ceo,
        }}
      />

      <TimelineHistory history={company.history} />

      <OfficeLocations
        offices={company.offices}
        totalEmployees={company.employees}
      />
    </>
  );
}
