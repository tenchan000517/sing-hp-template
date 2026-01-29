"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { navigation } from "@/lib/constants";
import Button from "./Button";

interface HeaderProps {
  companyName: string;
  applyUrl?: string;
  templateType?: "story-type" | "data-driven" | "visual";
}

export default function Header({
  companyName,
  applyUrl,
  templateType = "story-type"
}: HeaderProps) {
  const navItems = templateType === "data-driven"
    ? navigation.dataDriven
    : templateType === "visual"
    ? navigation.visual
    : navigation.storyType;

  const defaultApplyUrl = templateType === "data-driven"
    ? "/templates/data-driven/apply"
    : templateType === "visual"
    ? "/templates/visual/entry"
    : "/templates/story-type/apply";

  const finalApplyUrl = applyUrl || defaultApplyUrl;
  const homeUrl = templateType === "data-driven"
    ? "/templates/data-driven"
    : templateType === "visual"
    ? "/templates/visual"
    : "/templates/story-type";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  // This is a standard pattern for resetting UI state on navigation
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      setIsMobileMenuOpen(false);
    }
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md py-2"
            : "bg-white/95 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href={homeUrl}
              className="font-bold text-lg text-[var(--color-primary)] hover:opacity-80 transition-opacity"
            >
              {companyName}
              <span className="text-sm font-normal ml-2 text-[var(--color-text-secondary)]">
                採用サイト
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "text-[var(--color-primary)] bg-[var(--color-primary)]/10"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:block">
              <Button href={finalApplyUrl} variant="accent" size="sm">
                応募する
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] rounded-lg transition-colors"
              aria-label="メニューを開く"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white z-50 lg:hidden shadow-xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
                  <span className="font-bold text-[var(--color-primary)]">
                    {companyName}
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] rounded-lg transition-colors"
                    aria-label="メニューを閉じる"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto py-4">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center justify-between px-4 py-3 text-base transition-colors ${
                          isActive
                            ? "text-[var(--color-primary)] bg-[var(--color-primary)]/10"
                            : "text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-5 h-5 text-[var(--color-text-muted)]" />
                      </Link>
                    );
                  })}
                </nav>

                {/* CTA Button */}
                <div className="p-4 border-t border-[var(--color-border)]">
                  <Button href={finalApplyUrl} variant="accent" fullWidth>
                    応募する
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
