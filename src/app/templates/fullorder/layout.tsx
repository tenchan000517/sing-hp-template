import type { Metadata } from "next";
import { company } from "@/data/fullorder/sample";
import BackToTopBar from "@/components/common/BackToTopBar";

export const metadata: Metadata = {
  title: {
    default: `${company.name} | 航空宇宙・医療機器 精密加工`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
};

export default function FullorderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BackToTopBar />
      {children}
    </>
  );
}
