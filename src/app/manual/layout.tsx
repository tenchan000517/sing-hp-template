import { Metadata } from "next";

export const metadata: Metadata = {
  title: "修正マニュアル | 採用HPテンプレート",
  description: "Claude Codeへの指示マニュアル - テンプレートの修正方法をケースバイケースで解説",
};

export default function ManualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
