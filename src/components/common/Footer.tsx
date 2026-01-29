"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { navigation } from "@/lib/constants";
import Button from "./Button";

interface FooterProps {
  company: {
    name: string;
    address: {
      full: string;
    };
    phone: string;
    email: string;
  };
  applyUrl?: string;
}

export default function Footer({ company, applyUrl = "/templates/story-type/apply" }: FooterProps) {
  return (
    <footer className="bg-[var(--color-text-primary)] text-white">
      {/* CTA Section */}
      <div className="bg-[var(--color-primary)]">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                一緒に働く仲間を募集しています
              </h3>
              <p className="opacity-90">
                あなたのご応募をお待ちしています。まずはお気軽にお問い合わせください。
              </p>
            </div>
            <div className="flex gap-4">
              <Button href={applyUrl} variant="accent" size="lg">
                応募する
              </Button>
              <Button
                href="/templates/story-type/jobs"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]"
              >
                募集職種を見る
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">{company.name}</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{company.address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${company.phone}`} className="hover:opacity-100 transition-opacity">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:opacity-100 transition-opacity">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>平日 9:00〜18:00</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-4">サイトマップ</h4>
            <ul className="space-y-2 text-sm">
              {navigation.storyType.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">関連リンク</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  コーポレートサイト
                </a>
              </li>
              <li>
                <Link
                  href="#"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  利用規約
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm opacity-60">
            © {new Date().getFullYear()} {company.name} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
