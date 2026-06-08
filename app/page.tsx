"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { landingCopy } from "@/lib/landingI18n";
import type { ProductLocale } from "@/lib/productI18n";

const locales: ProductLocale[] = ["az", "ru", "en"];
const stepIcons = ["1", "2", "3", "4"];

function BenefitIcon({ index }: { index: number }) {
  const paths = [
    <><path d="M5 17 10 12l3 3 6-8" /><path d="M14 7h5v5" /></>,
    <><path d="M12 3 4.5 6v5.2c0 4.6 3.1 8.8 7.5 9.8 4.4-1 7.5-5.2 7.5-9.8V6L12 3Z" /><path d="M12 8v4" /><path d="M12 16h.01" /></>,
    <><circle cx="8" cy="8" r="3" /><circle cx="16" cy="16" r="3" /><path d="m18 6-12 12" /></>,
    <><path d="M5 5h14v14H5z" /><path d="M8 9h8M8 13h8M8 17h5" /></>,
    <><path d="M9 4h6l1 3h3v13H5V7h3l1-3Z" /><path d="m9 14 2 2 4-5" /></>,
  ];
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current stroke-[1.8] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" strokeLinecap="round" strokeLinejoin="round">{paths[index]}</svg>;
}

export default function HomePage() {
  const [locale, setLocale] = useState<ProductLocale>("az");
  const [groupIndex, setGroupIndex] = useState(1);
  const copy = landingCopy[locale];
  const group = copy.groups[groupIndex];

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

  function startOnboarding() {
    localStorage.setItem("onboarding_locale", locale);
    localStorage.setItem("onboarding_group", `group_${groupIndex + 1}`);
  }

  return (
    <div className="min-h-screen bg-white text-ink">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8 md:py-4">
          <Link href="/" className="flex items-center gap-3" aria-label="DİM AI">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-lg font-black text-white shadow-glow">D</span>
            <span className="text-xl font-black">DİM AI</span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {copy.nav.map((item, index) => (
              <a key={item} href={["#how", "#benefits", "#dashboard", "#faq"][index]} className="text-sm font-semibold text-muted hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">{item}</a>
            ))}
            <Link href={`/${locale}/profile`} className="text-sm font-semibold text-muted hover:text-ink">{copy.login}</Link>
          </nav>
          <div className="flex items-center gap-2">
            <div className="flex rounded-xl border border-border bg-white p-1">
              {locales.map((item) => (
                <button key={item} type="button" onClick={() => changeLocale(item)} aria-pressed={locale === item} className={`h-8 min-w-9 rounded-lg text-xs font-black uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${locale === item ? "bg-primary text-white" : "text-muted hover:bg-soft-purple"}`}>{item}</button>
              ))}
            </div>
            <Link onClick={startOnboarding} href="/onboarding/sector" className="hidden min-h-11 items-center rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-glow hover:bg-primary-dark sm:inline-flex">{copy.cta}</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="overflow-hidden border-b border-border bg-[linear-gradient(180deg,#FFFFFF_0%,#F6F7FB_100%)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20 lg:grid-cols-[1fr_0.92fr] lg:items-start">
            <div>
              <div className="flex flex-wrap gap-2">
                {copy.badges.map((badge, index) => <span key={badge} className={`rounded-full px-4 py-2 text-sm font-bold ${index === 0 ? "border border-primary/15 bg-soft-purple text-primary" : "bg-emerald-50 text-success"}`}>{badge}</span>)}
              </div>
              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.08] sm:text-5xl md:text-6xl">{copy.headline}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{copy.supporting}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link onClick={startOnboarding} href="/onboarding/sector" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-7 text-sm font-bold text-white shadow-glow hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">{copy.cta}</Link>
                <Link href={`/${locale}/pro-analytics`} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-white px-7 text-sm font-bold hover:border-primary hover:text-primary">{copy.secondaryCta}</Link>
              </div>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {copy.trust.map((item) => <span key={item} className="flex items-center gap-2 text-sm font-semibold text-muted"><span className="text-success">✓</span>{item}</span>)}
              </div>

              <div className="mt-8">
                <div className="flex flex-wrap gap-2" role="tablist">
                  {copy.groups.map((item, index) => (
                    <button key={item.name} type="button" role="tab" aria-selected={groupIndex === index} onClick={() => setGroupIndex(index)} className={`rounded-full border px-4 py-2 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${groupIndex === index ? "border-primary bg-primary text-white" : "border-border bg-white text-muted hover:border-primary hover:text-primary"}`}>{item.name}</button>
                  ))}
                </div>
                <div className="mt-3 rounded-2xl border border-border bg-white p-4 shadow-[0_8px_24px_rgba(17,24,39,0.04)]" role="tabpanel">
                  <div className="flex flex-wrap gap-2">{group.careers.map((item) => <span key={item} className="rounded-lg bg-soft-purple px-3 py-1.5 text-xs font-bold text-primary">{item}</span>)}</div>
                  <div className="mt-3 flex flex-wrap gap-2">{group.subjects.map((item) => <span key={item} className="rounded-lg border border-border bg-page px-3 py-2 text-xs font-semibold text-muted">{item}</span>)}</div>
                </div>
              </div>
            </div>

            <div id="result" className="relative scroll-mt-24">
              <div className="absolute -inset-5 rounded-[36px] bg-soft-purple/80 blur-2xl" />
              <div className="relative rounded-3xl border border-border bg-white p-5 shadow-[0_28px_80px_rgba(17,24,39,0.12)] sm:p-7">
                <div className="flex items-start justify-between gap-3 border-b border-border pb-5">
                  <div><p className="text-xs font-black uppercase text-primary">{copy.analytics.label}</p><h2 className="mt-1 text-xl font-black">{copy.analytics.title}</h2></div>
                  <span className="rounded-full bg-soft-purple px-3 py-1 text-xs font-bold text-primary">{copy.analytics.demo}</span>
                </div>
                <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-2xl bg-soft-purple p-5">
                  <div><p className="text-xs font-semibold text-muted">{copy.analytics.now}</p><p className="mt-1 text-4xl font-black text-primary">472</p></div>
                  <span className="text-2xl font-black text-success">→</span>
                  <div><p className="text-xs font-semibold text-muted">{copy.analytics.after}</p><p className="mt-1 text-4xl font-black text-success">510</p></div>
                </div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-[78%] rounded-full bg-gradient-to-r from-primary to-success" /></div>
                  <strong className="text-sm text-success">{copy.analytics.potential}</strong>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border p-4"><p className="text-xs text-muted">{copy.analytics.range}</p><strong className="mt-1 block text-xl">450–495</strong></div>
                  <div className="rounded-xl border border-border p-4"><p className="text-xs text-muted">{copy.analytics.average}</p><strong className="mt-1 block text-xl">438</strong></div>
                </div>
                <div className="mt-3 rounded-xl border border-red-100 bg-red-50/60 p-4">
                  <p className="text-xs font-black uppercase text-error">{copy.analytics.topics}</p>
                  <div className="mt-3 flex flex-wrap gap-2">{copy.analytics.topicNames.map((item) => <span key={item} className="rounded-lg bg-white px-3 py-2 text-sm font-bold">{item}</span>)}</div>
                </div>
                <div className="mt-4 border-t border-border pt-4 text-xs leading-5 text-muted">
                  <p>{copy.analytics.methodology}</p>
                  <p className="mt-1 font-semibold">{copy.analytics.disclaimer}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="scroll-mt-24 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="text-center"><p className="text-sm font-black uppercase text-primary">{copy.how.eyebrow}</p><h2 className="mt-2 text-3xl font-black md:text-4xl">{copy.how.title}</h2></div>
            <div className="mt-9 grid gap-4 md:grid-cols-4">
              {copy.how.items.map((item, index) => <article key={item} className="group relative rounded-2xl border border-border bg-white p-5 text-center shadow-[0_10px_30px_rgba(17,24,39,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-[0_18px_42px_rgba(91,92,246,0.14)]"><span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-soft-purple font-black text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">{stepIcons[index]}</span><h3 className="mt-4 font-black transition-colors duration-300 group-hover:text-primary">{item}</h3>{index < 3 ? <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-xl text-primary/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary md:block">→</span> : null}</article>)}
            </div>
          </div>
        </section>

        <section id="benefits" className="scroll-mt-24 bg-page py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center"><p className="text-sm font-black uppercase text-primary">{copy.benefits.eyebrow}</p><h2 className="mt-2 text-3xl font-black md:text-4xl">{copy.benefits.title}</h2></div>
            <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {copy.benefits.items.map(([title, text], index) => <article key={title} className={`group flex min-h-60 flex-col items-center justify-center rounded-2xl border border-border bg-white p-6 text-center shadow-[0_10px_30px_rgba(17,24,39,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-[0_18px_42px_rgba(91,92,246,0.14)] ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}><span className="grid h-14 w-14 place-items-center rounded-2xl bg-soft-purple text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white"><BenefitIcon index={index} /></span><h3 className="mt-5 text-lg font-black transition-colors duration-300 group-hover:text-primary">{title}</h3><p className="mx-auto mt-2 max-w-sm leading-6 text-muted">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="dashboard" className="scroll-mt-24 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center"><p className="text-sm font-black uppercase text-primary">{copy.dashboard.eyebrow}</p><h2 className="mt-2 text-3xl font-black md:text-4xl">{copy.dashboard.title}</h2><p className="mt-3 leading-7 text-muted">{copy.dashboard.subtitle}</p></div>
            <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-page p-4 shadow-[0_24px_65px_rgba(17,24,39,0.1)] md:p-7">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{copy.dashboard.stats.map(([label, value]) => <div key={label} className="rounded-xl bg-white p-4"><p className="text-xs font-semibold text-muted">{label}</p><p className="mt-2 text-2xl font-black">{value}</p></div>)}</div>
              <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-2xl bg-white p-5"><h3 className="font-black">{copy.dashboard.subjectsTitle}</h3><div className="mt-5 space-y-4">{copy.dashboard.subjects.map(([name, value]) => <div key={name}><div className="mb-2 flex justify-between text-sm font-bold"><span>{name}</span><span>{value}%</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-primary" style={{ width: `${value}%` }} /></div></div>)}</div></div>
                <div className="rounded-2xl bg-white p-5"><h3 className="font-black">{copy.dashboard.recommendation}</h3><div className="mt-4 space-y-3">{copy.dashboard.recommendationItems.map((item) => <div key={item} className="rounded-xl bg-soft-purple p-4 text-sm font-bold text-primary">{item}</div>)}</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ink py-12 text-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
            {copy.proof.map(([value, label]) => <div key={label} className="text-center"><p className="text-3xl font-black text-white">{value}</p><p className="mt-2 text-sm text-slate-300">{label}</p></div>)}
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <h2 className="text-center text-3xl font-black md:text-4xl">{copy.faqTitle}</h2>
            <div className="mt-9 divide-y divide-border border-y border-border">
              {copy.faq.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">{question}<span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-page text-primary transition group-open:rotate-45">+</span></summary><p className="pt-3 text-sm leading-7 text-muted">{answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <div className="rounded-3xl bg-soft-purple px-6 py-10"><h2 className="text-3xl font-black">{copy.headline}</h2><p className="mx-auto mt-3 max-w-xl text-muted">{copy.supporting}</p><Link onClick={startOnboarding} href="/onboarding/sector" className="mt-6 inline-flex min-h-12 items-center rounded-xl bg-primary px-7 text-sm font-bold text-white shadow-glow hover:bg-primary-dark">{copy.cta}</Link></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-page">
        <div className="mx-auto max-w-7xl px-5 py-9 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div><strong className="text-xl">DİM AI</strong><p className="mt-2 text-sm text-muted">{copy.footerText}</p></div>
            <div className="flex flex-wrap gap-5 text-sm font-semibold text-muted">{copy.footerLinks.map((item) => <a key={item} href="#" className="hover:text-primary">{item}</a>)}</div>
          </div>
          <p className="mt-7 border-t border-border pt-5 text-xs leading-5 text-muted">{copy.disclaimer}</p>
        </div>
      </footer>
    </div>
  );
}
