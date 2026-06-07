import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-gradient-to-r from-primary to-primary-dark text-white shadow-glow hover:translate-y-[-1px]",
  secondary: "border border-border bg-white text-ink hover:border-primary hover:text-primary",
  ghost: "text-muted hover:bg-soft-purple hover:text-primary",
};

export function Button({ href, children, variant = "primary", className = "", ...props }: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
