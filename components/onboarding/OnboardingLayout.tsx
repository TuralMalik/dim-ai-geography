import Link from "next/link";
import type { ReactNode } from "react";
import type { OnboardingLocale } from "@/lib/onboardingI18n";
import { onboardingLocales } from "@/lib/onboardingI18n";

type OnboardingLayoutProps = {
  children: ReactNode;
  locale: OnboardingLocale;
  brand: string;
  logoLabel: string;
  onLocaleChange: (locale: OnboardingLocale) => void;
};

export function OnboardingLayout({
  children,
  locale,
  brand,
  logoLabel,
  onLocaleChange,
}: OnboardingLayoutProps) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF_0%,#F6F7FB_100%)] text-ink">
      <header className="border-b border-border/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label={logoLabel}>
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-lg font-black text-white shadow-[0_8px_24px_rgba(91,92,246,0.24)]">
              D
            </span>
            <span className="text-xl font-black">{brand}</span>
          </Link>

          <div className="flex items-center rounded-xl border border-border bg-white p-1 shadow-sm">
            {onboardingLocales.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => onLocaleChange(item)}
                aria-pressed={locale === item}
                className={`h-9 min-w-11 rounded-lg px-3 text-xs font-black uppercase transition ${
                  locale === item ? "bg-primary text-white" : "text-muted hover:bg-soft-purple hover:text-primary"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl items-center px-5 py-10 md:min-h-[calc(100vh-73px)] md:px-8 md:py-16">
        {children}
      </main>
    </div>
  );
}

