"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { landingCopy } from "@/lib/landingI18n";
import type { ProductLocale } from "@/lib/productI18n";

const locales: ProductLocale[] = ["az", "ru", "en"];
const stepIcons = ["1", "2", "3", "4"];
const benefitIcons = ["↗", "!", "%", "≡"];

export default function HomePage() {
  const [locale, setLocale] = useState<ProductLocale>("az");
  const copy = landingCopy[locale];

  useEffect(() => {
    const saved = localStorage.getItem("onboarding_locale") as ProductLocale | null;
    if (saved && locales.includes(saved)) setLocale(saved);
  }, []);

  function changeLocale(next: ProductLocale) {
    setLocale(next);
    localStorage.setItem("onboarding_locale", next);
    localStorage.setItem("dim-ai-locale", next);
    document.documentElement.lang = next;
  }

  function rememberLocale() {
    localStorage.setItem("onboarding_locale", locale);
    localStorage.setItem("dim-ai-locale", locale);
  }

  return (
    <div className="min-h-screen bg-white text-ink">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8 md:py-4">
          <Link href="/" className="flex items-center gap-3" aria-label="DİM AI">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-lg font-black text-white shadow-[0_8px_24px_rgba(91,92,246,0.28)]">D</span>
            <span className="text-xl font-black">DİM AI</span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            <a href="#how" className="text-sm font-semibold text-muted hover:text-ink focus-visible:outline-primary">{copy.nav[0]}</a>
            <a href="#benefits" className="text-sm font-semibold text-muted hover:text-ink focus-visible:outline-primary">{copy.nav[1]}</a>
            <a href="#result" className="text-sm font-semibold text-muted hover:text-ink focus-visible:outline-primary">{copy.nav[2]}</a>
            <Link href={`/${locale}/profile`} className="text-sm font-semibold text-muted hover:text-ink">{copy.login}</Link>
          </nav>
          <div className="flex items-center gap-2">
            <div className="flex rounded-xl border border-border bg-white p-1">
              {locales.map((item) => <button key={item} onClick={() => changeLocale(item)} aria-pressed={locale === item} className={`h-8 min-w-9 rounded-lg text-xs font-black uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${locale === item ? "bg-primary text-white" : "text-muted hover:bg-soft-purple"}`}>{item}</button>)}
            </div>
            <Link onClick={rememberLocale} href="/onboarding/sector" className="hidden min-h-11 items-center rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-glow hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:inline-flex">{copy.cta}</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="overflow-hidden border-b border-border bg-[linear-gradient(180deg,#FFFFFF_0%,#F6F7FB_100%)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex rounded-full border border-primary/15 bg-soft-purple px-4 py-2 text-sm font-bold text-primary">{copy.badge}</span>
                <span className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-bold text-success">{copy.beta}</span>
              </div>
              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.08] sm:text-5xl md:text-6xl">{copy.hero}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{copy.subhero}</p>
              <div className="mt-7 flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                <Link onClick={rememberLocale} href="/onboarding/sector" className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-7 text-sm font-bold text-white shadow-glow hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto">{copy.cta}</Link>
                <span className="px-2 text-sm font-semibold text-muted">✓ {copy.ctaNote}</span>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {copy.groups.map((group) => <Link onClick={rememberLocale} key={group} href="/onboarding/sector" className="rounded-full border border-border bg-white px-4 py-2 text-sm font-bold text-muted transition hover:border-primary hover:bg-soft-purple hover:text-primary focus-visible:outline-primary">{group}</Link>)}
              </div>
            </div>

            <div id="result" className="relative scroll-mt-24">
              <div className="absolute -inset-5 rounded-[36px] bg-soft-purple/80 blur-2xl" />
              <div className="relative rounded-3xl border border-border bg-white p-5 shadow-[0_28px_80px_rgba(17,24,39,0.12)] sm:p-7">
                <div className="flex items-start justify-between border-b border-border pb-5">
                  <div><p className="text-xs font-black uppercase text-primary">{copy.analytics.label}</p><h2 className="mt-1 text-xl font-black">{copy.analytics.title}</h2></div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-success">{copy.analytics.growth}</span>
                </div>
                <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-2xl bg-soft-purple p-5">
                  <div><p className="text-xs font-semibold text-muted">{copy.analytics.now}</p><p className="mt-1 text-4xl font-black text-primary">472</p></div>
                  <span className="text-2xl font-black text-success">→</span>
                  <div><p className="text-xs font-semibold text-muted">{copy.analytics.after}</p><p className="mt-1 text-4xl font-black text-success">510</p></div>
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-[78%] rounded-full bg-gradient-to-r from-primary to-success" /></div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border p-4"><p className="text-xs text-muted">{copy.analytics.range}</p><strong className="mt-1 block text-xl">450–495</strong></div>
                  <div className="rounded-xl border border-border p-4"><p className="text-xs text-muted">{copy.analytics.average}</p><strong className="mt-1 block text-xl">438</strong></div>
                </div>
                <div className="mt-3 rounded-xl border border-red-100 bg-red-50/60 p-4">
                  <div className="flex items-center justify-between gap-3"><p className="text-xs font-black uppercase text-error">{copy.analytics.weak}</p><span className="text-xs font-bold text-success">{copy.analytics.better}</span></div>
                  <div className="mt-3 flex flex-wrap gap-2"><span className="rounded-lg bg-white px-3 py-2 text-sm font-bold">{copy.analytics.topic1}</span><span className="rounded-lg bg-white px-3 py-2 text-sm font-bold">{copy.analytics.topic2}</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="scroll-mt-24 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="max-w-2xl"><h2 className="text-3xl font-black md:text-4xl">{copy.stepsTitle}</h2><p className="mt-3 leading-7 text-muted">{copy.stepsSub}</p></div>
            <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{copy.steps.map(([title, text], index) => <article key={title} className="rounded-2xl border border-border bg-white p-5 shadow-[0_10px_30px_rgba(17,24,39,0.05)]"><span className="grid h-10 w-10 place-items-center rounded-xl bg-soft-purple font-black text-primary">{stepIcons[index]}</span><h3 className="mt-5 text-lg font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></article>)}</div>
          </div>
        </section>

        <section id="benefits" className="scroll-mt-24 bg-page py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center"><h2 className="text-3xl font-black md:text-4xl">{copy.benefitsTitle}</h2><p className="mt-3 leading-7 text-muted">{copy.benefitsSub}</p></div>
            <div className="mt-9 grid gap-4 md:grid-cols-2">{copy.benefits.map(([title, text], index) => <article key={title} className="flex gap-4 rounded-2xl border border-border bg-white p-6 shadow-[0_10px_30px_rgba(17,24,39,0.05)]"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-soft-purple text-lg font-black text-primary">{benefitIcons[index]}</span><div><h3 className="text-lg font-black">{title}</h3><p className="mt-2 leading-6 text-muted">{text}</p></div></article>)}</div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <div className="rounded-3xl bg-ink px-6 py-12 text-white shadow-soft md:px-12">
              <h2 className="text-3xl font-black md:text-4xl">{copy.finalTitle}</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">{copy.finalText}</p>
              <Link onClick={rememberLocale} href="/onboarding/sector" className="mt-7 inline-flex min-h-12 items-center rounded-xl bg-primary px-7 text-sm font-bold text-white hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{copy.cta}</Link>
              <p className="mt-3 text-sm text-slate-400">✓ {copy.ctaNote}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-page">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8"><strong>DİM AI</strong><p className="text-sm text-muted">{copy.footer}</p></div>
      </footer>
    </div>
  );
}
