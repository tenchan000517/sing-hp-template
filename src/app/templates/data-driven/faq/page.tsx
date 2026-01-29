import { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import FAQSection from "@/components/templates/data-driven/FAQSection";
import Button from "@/components/common/Button";
import { company, faqData } from "@/data/data-driven/sample";
import { Mail, Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "よくある質問",
  description: `${company.name}への応募に関するよくある質問と回答。選考・働き方・キャリア・待遇についてお答えします。`,
};

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D47A1] to-[#1A1A1A] text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium opacity-80 tracking-wider uppercase mb-4 block">
                FAQ
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                よくある質問
              </h1>
              <p className="text-lg opacity-90 leading-relaxed">
                応募・選考・働き方について、
                <br className="hidden md:block" />
                よくいただく質問をまとめました。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-bg-secondary)]">
        <FAQSection categories={faqData.categories} />
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                解決しない場合は
              </h2>
              <p className="text-text-secondary mb-10">
                ご不明な点がございましたら、お気軽にお問い合わせください。
                <br />
                採用担当者が丁寧にお答えいたします。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[var(--color-bg-tertiary)] rounded-xl">
                  <Phone className="w-8 h-8 mx-auto mb-4 text-[#1565C0]" />
                  <h3 className="font-bold mb-2">お電話</h3>
                  <p className="text-text-secondary text-sm mb-2">
                    平日 9:00-18:00
                  </p>
                  <a
                    href={`tel:${company.phone}`}
                    className="text-[#1565C0] font-medium hover:underline"
                  >
                    {company.phone}
                  </a>
                </div>

                <div className="p-6 bg-[var(--color-bg-tertiary)] rounded-xl">
                  <Mail className="w-8 h-8 mx-auto mb-4 text-[#1565C0]" />
                  <h3 className="font-bold mb-2">メール</h3>
                  <p className="text-text-secondary text-sm mb-2">
                    24時間受付
                  </p>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-[#1565C0] font-medium hover:underline break-all"
                  >
                    {company.email}
                  </a>
                </div>

                <div className="p-6 bg-[var(--color-bg-tertiary)] rounded-xl">
                  <MessageCircle className="w-8 h-8 mx-auto mb-4 text-[#1565C0]" />
                  <h3 className="font-bold mb-2">カジュアル面談</h3>
                  <p className="text-text-secondary text-sm mb-2">
                    選考なしでお話しできます
                  </p>
                  <a
                    href="/templates/data-driven/apply?type=casual"
                    className="text-[#1565C0] font-medium hover:underline"
                  >
                    申し込む →
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1565C0] to-[#0D47A1] text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              まずはエントリーから
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              応募書類の準備は後からでもOK。
              <br />
              まずはお気軽にエントリーください。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href="/templates/data-driven/apply"
                variant="accent"
                size="lg"
              >
                エントリーする
              </Button>
              <Button
                href="/templates/data-driven/jobs"
                variant="outline"
                size="lg"
              >
                募集職種を見る
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
