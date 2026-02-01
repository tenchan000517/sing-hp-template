"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function BackToTopBar() {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // スクロールダウン（下に行く）かつ100px以上スクロールした場合に表示
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(true);
      }
      // スクロールアップ（上に戻る）場合に非表示
      else if (currentScrollY < lastScrollY.current) {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[60] bg-gray-900/90 backdrop-blur-sm h-[30px] flex items-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-xs text-white/80 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-3 h-3" />
          <span>テンプレート一覧に戻る</span>
        </Link>
      </div>
    </div>
  );
}
