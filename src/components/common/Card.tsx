"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  shadow?: "none" | "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  border?: boolean;
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const shadowStyles = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
};

const roundedStyles = {
  none: "",
  sm: "rounded-sm",
  md: "rounded-lg",
  lg: "rounded-xl",
  full: "rounded-full",
};

export default function Card({
  children,
  className = "",
  href,
  hover = true,
  padding = "md",
  shadow = "sm",
  rounded = "md",
  border = false,
}: CardProps) {
  const baseStyles = "bg-white overflow-hidden";
  const borderStyles = border ? "border border-[var(--color-border)]" : "";

  const cardClassName = `${baseStyles} ${paddingStyles[padding]} ${shadowStyles[shadow]} ${roundedStyles[rounded]} ${borderStyles} ${className}`;

  const hoverAnimation = hover
    ? {
        whileHover: {
          y: -5,
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.12)",
        },
        transition: { duration: 0.3 },
      }
    : {};

  const content = (
    <motion.div className={cardClassName} {...hoverAnimation}>
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
