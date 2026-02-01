import type { Metadata } from "next";
import { company } from "@/data/trust-visual/sample";
import BackToTopBar from "@/components/common/BackToTopBar";

export const metadata: Metadata = {
  title: {
    default: `${company.name} | あなたの「困った」を解決します`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
};

export default function TrustVisualLayout({
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
