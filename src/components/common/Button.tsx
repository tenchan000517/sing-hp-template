"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "accent" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<HTMLMotionProps<"button">, keyof ButtonBaseProps> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)]",
  secondary:
    "bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-border)]",
  accent:
    "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)]",
  outline:
    "bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
  ghost:
    "bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2";

  const className = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    fullWidth ? "w-full" : ""
  }`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  };

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <motion.div {...motionProps} className={fullWidth ? "w-full" : "inline-block"}>
        <Link href={href} className={className} {...linkProps}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button className={className} {...motionProps} {...(props as HTMLMotionProps<"button">)}>
      {children}
    </motion.button>
  );
}
