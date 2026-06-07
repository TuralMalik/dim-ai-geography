"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useI18n, type Locale } from "@/lib/i18n";

const locales: Locale[] = ["ru", "az", "en"];
const navItems = [
  { href: "/", label: "Home", icon: "⌂" },
  { href: "/geography-test", label: "Test", icon: "▣" },
  { href: "/weak-topics", label: "Weak Topics", icon: "◇" },
  { href: "/review/climate", label: "Review", icon: "✎" },
  { href: "/progress", label: "Progress", icon: "▥" },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { locale, setLocale, localeLabels } = useI18n();

  if (pathname === "/") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-page text-ink">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[216px] border-r border-border bg-white px-5 py-6 shadow-[8px_0_30px_rgba(17,24,39,0.04)] lg:flex lg:flex-col">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-soft-purple text-3xl shadow-sm">
            🌍
          </div>
          <div>
            <div className="text-lg font-black leading-5 tracking-tight">DİM AI</div>
            <div className="text-xs font-bold text-muted">Geography</div>
          </div>
        </Link>

        <nav className="mt-10 grid gap-2">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex h-12 items-center gap-3 rounded-xl px-3 text-sm font-black transition ${
                  active
                    ? "bg-soft-purple text-primary"
                    : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                }`}
              >
                <span className={`grid h-7 w-7 place-items-center rounded-lg ${active ? "bg-white" : "bg-slate-50"}`}>
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto space-y-3">
          <Link href="/progress" className="flex h-11 items-center gap-3 rounded-xl px-3 text-sm font-bold text-slate-700 hover:bg-slate-50">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-slate-50">⚙</span>
            Settings
          </Link>
          <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-sm font-black text-white">
              T
            </div>
            <div>
              <div className="text-sm font-black">Tural</div>
              <div className="text-xs font-semibold text-muted">Student</div>
            </div>
          </div>
        </div>
      </aside>

      <header className="sticky top-0 z-30 border-b border-border bg-white/90 backdrop-blur-xl lg:hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-4">
          <Link href="/" className="flex items-center gap-2 font-black">
            <span className="text-2xl">🌍</span>
            DİM AI
          </Link>
          <div className="flex items-center rounded-2xl border border-border bg-white p-1 shadow-sm">
            {locales.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLocale(item)}
                className={`h-8 min-w-9 rounded-xl px-2 text-xs font-black ${
                  locale === item ? "bg-primary text-white" : "text-muted"
                }`}
              >
                {localeLabels[item]}
              </button>
            ))}
          </div>
          <nav className="flex w-full gap-1 overflow-x-auto rounded-2xl border border-border bg-white p-1 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="whitespace-nowrap rounded-xl px-3 py-2 font-bold text-muted">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div className="lg:pl-[216px]">
        <div className="hidden justify-end px-8 pt-6 lg:flex">
          <div className="flex items-center rounded-2xl border border-border bg-white p-1 shadow-sm">
            {locales.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLocale(item)}
                className={`h-9 min-w-11 rounded-xl px-3 text-sm font-black transition ${
                  locale === item ? "bg-primary text-white" : "text-muted hover:bg-soft-purple hover:text-primary"
                }`}
              >
                {localeLabels[item]}
              </button>
            ))}
          </div>
        </div>
        <main className="mx-auto max-w-[1180px] px-4 py-6 md:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
