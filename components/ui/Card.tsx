import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-white p-5 shadow-soft ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
