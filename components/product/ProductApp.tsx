"use client";

import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { OnboardingLayout } from "@/components/onboarding/OnboardingLayout";
import { ProgressStepper } from "@/components/onboarding/ProgressStepper";
import {
  groupSubjectKeys,
  productCopy,
  resultPerformance,
  riskScores,
  subjectStats,
  topicProgress,
  type ClassId,
  type GoalId,
  type GroupId,
  type ProductLocale,
} from "@/lib/productI18n";
import type { EducationSector } from "@/lib/onboardingI18n";
import {
  findTopic,
  getSubjectsForProfile,
  learningUi,
  subjects as learningSubjects,
  type SubjectId,
} from "@/lib/learningCatalog";

const localeList: ProductLocale[] = ["az", "ru", "en"];
const groupIds: GroupId[] = ["group_1", "group_2", "group_3", "group_4"];
const classIds: ClassId[] = ["10", "11", "graduate"];
const goalIds: GoalId[] = ["repeat", "score", "exam", "mock", "weak"];

function isLocale(value: string): value is ProductLocale {
  return localeList.includes(value as ProductLocale);
}

function useProductLocale() {
  const params = useParams<{ locale: string }>();
  return isLocale(params.locale) ? params.locale : "az";
}

function useLocaleSwitch(locale: ProductLocale) {
  const pathname = usePathname();
  const router = useRouter();
  return (next: ProductLocale) => {
    window.localStorage.setItem("onboarding_locale", next);
    window.localStorage.setItem("dim-ai-locale", next);
    document.documentElement.lang = next;
    router.push(pathname.replace(`/${locale}`, `/${next}`));
  };
}

function useLearningProfile() {
  const [sector, setSector] = useState<EducationSector>("ru_sector");
  const [group, setGroupState] = useState<GroupId>("group_2");
  const [studentClass, setStudentClass] = useState<ClassId>("11");
  const [goals, setGoals] = useState<GoalId[]>([]);

  useEffect(() => {
    const savedSector = localStorage.getItem("onboarding_sector");
    const savedGroup = localStorage.getItem("onboarding_group") as GroupId | null;
    const savedClass = localStorage.getItem("onboarding_class") as ClassId | null;
    const savedGoals = localStorage.getItem("onboarding_goals");
    if (savedSector === "az_sector" || savedSector === "azerbaijani") setSector("az_sector");
    if (savedSector === "ru_sector" || savedSector === "russian") setSector("ru_sector");
    if (savedGroup && groupIds.includes(savedGroup)) setGroupState(savedGroup);
    if (savedClass && classIds.includes(savedClass)) setStudentClass(savedClass);
    if (savedGoals) {
      try {
        setGoals(JSON.parse(savedGoals) as GoalId[]);
      } catch {}
    }
  }, []);

  return { sector, group, studentClass, goals };
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-border bg-white shadow-[0_10px_32px_rgba(17,24,39,0.05)] ${className}`}>{children}</div>;
}

function Bar({ value, tone = "primary" }: { value: number; tone?: "primary" | "success" | "warning" | "error" }) {
  const colors = { primary: "bg-primary", success: "bg-success", warning: "bg-warning", error: "bg-error" };
  return <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full ${colors[tone]}`} style={{ width: `${value}%` }} /></div>;
}

function ActionLink({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return (
    <Link href={href} className={`inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-2.5 text-sm font-bold transition ${secondary ? "border border-border bg-white text-ink hover:border-primary hover:text-primary" : "bg-primary text-white shadow-[0_10px_25px_rgba(91,92,246,0.2)] hover:bg-primary-dark"}`}>
      {children}
    </Link>
  );
}

function PageTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return <div><h1 className="text-3xl font-black tracking-normal text-ink md:text-4xl">{title}</h1>{subtitle ? <p className="mt-3 max-w-3xl leading-7 text-muted">{subtitle}</p> : null}</div>;
}

function Disclaimer({ text }: { text: string }) {
  return <p className="border-t border-border pt-5 text-center text-xs leading-5 text-muted">{text}</p>;
}

function ProductLayout({ locale, children }: { locale: ProductLocale; children: ReactNode }) {
  const copy = productCopy[locale];
  const pathname = usePathname();
  const switchLocale = useLocaleSwitch(locale);
  const profile = useLearningProfile();
  const sectorName = profile.sector === "az_sector"
    ? { az: "Az bölməsi", ru: "Азербайджанский сектор", en: "Azerbaijani sector" }[locale]
    : { az: "Rus bölməsi", ru: "Русский сектор", en: "Russian sector" }[locale];
  const nav = [
    [copy.nav.dashboard, `/${locale}/dashboard`, "⌂"],
    [copy.nav.subjects, `/${locale}/subjects`, "▦"],
    [copy.nav.tests, `/${locale}/test`, "✓"],
    [copy.nav.review, `/${locale}/weak-topics`, "↻"],
    [copy.nav.progress, `/${locale}/results`, "↗"],
    [copy.nav.pro, `/${locale}/pro-analytics`, "◆"],
    [copy.nav.profile, `/${locale}/profile`, "○"],
  ];

  return (
    <div className="min-h-screen bg-page text-ink">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 border-r border-border bg-white p-5 lg:flex lg:flex-col">
        <Link href="/" className="flex items-center gap-3" aria-label={`${copy.brand} — home`}>
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary font-black text-white">D</span>
          <span className="text-xl font-black">{copy.brand}</span>
        </Link>
        <nav className="mt-9 grid gap-1.5">
          {nav.map(([label, href, icon]) => {
            const active = pathname === href || ((href.includes("/subjects") || href.endsWith("/test")) && pathname.startsWith(href));
            return <Link key={href} href={href} className={`flex h-11 items-center gap-3 rounded-xl px-3 text-sm font-bold ${active ? "bg-soft-purple text-primary" : "text-muted hover:bg-slate-50 hover:text-ink"}`}><span className="w-6 text-center">{icon}</span>{label}</Link>;
          })}
        </nav>
        <div className="mt-auto">
          <Link href={`/${locale}/profile`} className="flex items-center gap-3 rounded-xl bg-page p-3"><span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-sm font-black text-white">T</span><span><strong className="block text-sm">{copy.user}</strong><small className="text-muted">{sectorName} · {copy.groups[profile.group].title} · {profile.studentClass}</small></span></Link>
        </div>
      </aside>
      <div className="fixed right-6 top-5 z-50 hidden rounded-xl border border-border bg-white p-1 shadow-[0_8px_24px_rgba(17,24,39,0.08)] lg:flex">
        {localeList.map((item) => <button key={item} onClick={() => switchLocale(item)} className={`h-8 min-w-10 rounded-lg text-xs font-black uppercase ${locale === item ? "bg-primary text-white" : "text-muted hover:bg-soft-purple"}`}>{item}</button>)}
      </div>
      <header className="sticky top-0 z-30 border-b border-border bg-white lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="font-black" aria-label={`${copy.brand} — home`}>{copy.brand}</Link>
          <div className="flex rounded-lg border border-border p-1">{localeList.map((item) => <button key={item} onClick={() => switchLocale(item)} className={`h-8 min-w-9 rounded-md text-xs font-black uppercase ${locale === item ? "bg-primary text-white" : "text-muted"}`}>{item}</button>)}</div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-7 md:px-8 lg:ml-60 lg:pb-10 lg:pt-10">{children}<div className="mt-10"><Disclaimer text={copy.disclaimer} /></div></main>
      <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-border bg-white px-1 py-2 lg:hidden">
        {nav.slice(0, 5).map(([label, href, icon]) => <Link key={href} href={href} className={`grid place-items-center gap-1 text-[10px] font-bold ${pathname === href ? "text-primary" : "text-muted"}`}><span className="text-lg">{icon}</span><span className="max-w-16 truncate">{label}</span></Link>)}
      </nav>
    </div>
  );
}

function LocaleOnboarding({ locale, children }: { locale: ProductLocale; children: ReactNode }) {
  const copy = productCopy[locale];
  const switchLocale = useLocaleSwitch(locale);
  return <OnboardingLayout locale={locale} brand={copy.brand} logoLabel={copy.brand} onLocaleChange={switchLocale}>{children}</OnboardingLayout>;
}

function OnboardingFrame({ locale, progress, title, subtitle, children, back, onContinue, continueText }: { locale: ProductLocale; progress: string; title: string; subtitle: string; children: ReactNode; back: string; onContinue: () => void; continueText: string }) {
  const copy = productCopy[locale];
  return (
    <LocaleOnboarding locale={locale}>
      <section className="mx-auto w-full rounded-3xl border border-border bg-white p-5 shadow-[0_24px_70px_rgba(17,24,39,0.09)] sm:p-8 md:p-10">
        <ProgressStepper label={progress} value={progress.includes("2") ? 50 : progress.includes("3") ? 75 : 100} />
        <div className="mx-auto mt-8 max-w-2xl text-center"><h1 className="text-3xl font-black md:text-4xl">{title}</h1><p className="mt-3 leading-7 text-muted">{subtitle}</p></div>
        {children}
        <div className="mt-8 flex flex-col-reverse justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <ActionLink href={back} secondary>{copy.actions.back}</ActionLink>
          <button onClick={onContinue} className="min-h-11 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(91,92,246,0.2)] hover:bg-primary-dark">{continueText}</button>
        </div>
      </section>
    </LocaleOnboarding>
  );
}

function GroupPage({ locale }: { locale: ProductLocale }) {
  const copy = productCopy[locale];
  const router = useRouter();
  const [group, setGroup] = useState<GroupId>("group_2");
  const [sector, setSector] = useState<EducationSector>("ru_sector");
  useEffect(() => {
    const savedGroup = localStorage.getItem("onboarding_group") as GroupId | null;
    const savedSector = localStorage.getItem("onboarding_sector") as EducationSector | null;
    if (savedGroup && groupIds.includes(savedGroup)) setGroup(savedGroup);
    if (savedSector === "az_sector" || savedSector === "ru_sector") setSector(savedSector);
  }, []);
  const subjectName = (key: string) => {
    if (key === "sectorLanguage") return sector === "az_sector" ? copy.subjects.azerbaijani : copy.subjects.russian;
    if (key === "sectorLiterature") return sector === "az_sector" ? copy.subjects.azerbaijaniLit : copy.subjects.russianLit;
    return copy.subjects[key as keyof typeof copy.subjects];
  };
  return <OnboardingFrame locale={locale} progress={copy.onboarding.group.progress} title={copy.onboarding.group.title} subtitle={copy.onboarding.group.subtitle} back={`/${locale}/onboarding/sector`} continueText={copy.actions.continue} onContinue={() => { localStorage.setItem("onboarding_group", group); router.push(`/${locale}/onboarding/class`); }}>
    <div className="mt-8 grid gap-4 md:grid-cols-2" role="radiogroup">
      {groupIds.map((id) => <button key={id} role="radio" aria-checked={group === id} onClick={() => setGroup(id)} className={`relative rounded-2xl border p-5 text-left transition ${group === id ? "border-primary bg-soft-purple shadow-[0_14px_35px_rgba(91,92,246,0.14)]" : "border-border hover:border-primary/50"}`}>
        <span className={`absolute right-4 top-4 grid h-7 w-7 place-items-center rounded-full border-2 ${group === id ? "border-primary bg-primary text-white" : "border-border text-transparent"}`}>✓</span>
        <h2 className="pr-10 text-xl font-black">{copy.groups[id].title}</h2><p className="mt-2 text-sm text-muted">{copy.groups[id].desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">{groupSubjectKeys[id].map((key) => <span key={key} className="rounded-lg bg-white px-2.5 py-1.5 text-xs font-semibold text-muted">{subjectName(key)}</span>)}</div>
      </button>)}
    </div>
  </OnboardingFrame>;
}

function ClassPage({ locale }: { locale: ProductLocale }) {
  const copy = productCopy[locale]; const router = useRouter(); const [value, setValue] = useState<ClassId>("11");
  useEffect(() => { const saved = localStorage.getItem("onboarding_class") as ClassId | null; if (saved && classIds.includes(saved)) setValue(saved); }, []);
  return <OnboardingFrame locale={locale} progress={copy.onboarding.class.progress} title={copy.onboarding.class.title} subtitle={copy.onboarding.class.subtitle} back={`/${locale}/onboarding/group`} continueText={copy.actions.continue} onContinue={() => { localStorage.setItem("onboarding_class", value); router.push(`/${locale}/onboarding/goals`); }}>
    <div className="mx-auto mt-8 grid max-w-2xl gap-3" role="radiogroup">{classIds.map((id) => <button key={id} role="radio" aria-checked={value === id} onClick={() => setValue(id)} className={`flex min-h-20 items-center justify-between rounded-2xl border px-5 text-left text-lg font-black ${value === id ? "border-primary bg-soft-purple text-primary" : "border-border"}`}><span>{copy.onboarding.class.options[id]}</span><span className={`grid h-7 w-7 place-items-center rounded-full ${value === id ? "bg-primary text-white" : "border-2 border-border text-transparent"}`}>✓</span></button>)}</div>
  </OnboardingFrame>;
}

function GoalsPage({ locale }: { locale: ProductLocale }) {
  const copy = productCopy[locale]; const router = useRouter(); const [values, setValues] = useState<GoalId[]>(goalIds);
  useEffect(() => { const saved = localStorage.getItem("onboarding_goals"); if (saved) { try { const parsed = JSON.parse(saved) as GoalId[]; if (parsed.length) setValues(parsed); } catch {} } }, []);
  const toggle = (id: GoalId) => setValues((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  return <OnboardingFrame locale={locale} progress={copy.onboarding.goals.progress} title={copy.onboarding.goals.title} subtitle={copy.onboarding.goals.subtitle} back={`/${locale}/onboarding/class`} continueText={copy.onboarding.goals.submit} onContinue={() => { localStorage.setItem("onboarding_goals", JSON.stringify(values)); router.push(`/${locale}/dashboard`); }}>
    <div className="mt-8 grid gap-3 md:grid-cols-2">{goalIds.map((id, index) => { const selected = values.includes(id); return <button key={id} onClick={() => toggle(id)} aria-pressed={selected} className={`relative min-h-32 rounded-2xl border p-5 text-left ${selected ? "border-primary bg-soft-purple" : "border-border"}`}><span className="text-2xl text-primary">{["↻", "↗", "◎", "✓", "!"][index]}</span><h2 className="mt-3 pr-8 font-black">{copy.goals[id][0]}</h2><p className="mt-2 text-sm leading-6 text-muted">{copy.goals[id][1]}</p><span className={`absolute right-4 top-4 grid h-7 w-7 place-items-center rounded-full ${selected ? "bg-primary text-white" : "border-2 border-border text-transparent"}`}>✓</span></button>; })}</div>
  </OnboardingFrame>;
}

function Dashboard({ locale }: { locale: ProductLocale }) {
  const c = productCopy[locale]; const statValues = ["12%", "4", "68%", "2", "287"]; const subjects = subjectStats.map(([key, progress]) => [c.subjects[key], progress] as const);
  const recs = [[c.geography.topics[2], c.subjects.geography], [c.geography.topics[7], c.subjects.geography], [`${c.subjects.azHistory} XIX`, c.subjects.azHistory]];
  return <ProductLayout locale={locale}><div className="space-y-7"><PageTitle title={`${c.dashboard.hello} 👋`} subtitle={`${c.dashboard.subtitle} · ${c.profileLine}`} />
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">{c.dashboard.stats.map((label, i) => <Card key={label} className="p-5"><p className="text-sm font-semibold text-muted">{label}</p><p className="mt-3 text-3xl font-black">{statValues[i]}</p></Card>)}</div>
    <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]"><Card className="p-6"><h2 className="text-xl font-black">{c.dashboard.subjectsTitle}</h2><div className="mt-5 space-y-4">{subjects.map(([name, value]) => <div key={name}><div className="mb-2 flex justify-between text-sm font-bold"><span>{name}</span><span>{value}%</span></div><Bar value={value} /></div>)}</div><div className="mt-6"><ActionLink href={`/${locale}/subjects`}>{c.actions.open}</ActionLink></div></Card>
      <div className="space-y-5"><Card className="p-6"><h2 className="text-xl font-black">{c.dashboard.recommended}</h2><div className="mt-4 space-y-3">{recs.map(([title, subject]) => <div key={title} className="rounded-xl bg-page p-4"><strong className="block">{title}</strong><span className="text-sm text-muted">{subject}</span></div>)}</div><div className="mt-5 flex flex-wrap gap-2"><ActionLink href={`/${locale}/test`}>{c.dashboard.startTest}</ActionLink><ActionLink href={`/${locale}/weak-topics`} secondary>{c.dashboard.reviewTopics}</ActionLink></div></Card>
      <Card className="border-primary/20 bg-soft-purple p-6"><span className="rounded-full bg-primary px-3 py-1 text-xs font-black text-white">PRO</span><h2 className="mt-4 text-xl font-black">{c.dashboard.proTitle}</h2><p className="mt-2 text-sm leading-6 text-muted">{c.dashboard.proText}</p><div className="mt-4"><ActionLink href={`/${locale}/pro-analytics`}>{c.dashboard.proButton}</ActionLink></div></Card></div></div>
  </div></ProductLayout>;
}

function SubjectsPage({ locale }: { locale: ProductLocale }) {
  const c = productCopy[locale];
  return <ProductLayout locale={locale}><div className="space-y-7"><PageTitle title={c.subjectsPage.title} subtitle={c.subjectsPage.subtitle} /><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{subjectStats.map(([key, progress, avg, tests], index) => <Card key={key} className="p-6"><span className="grid h-12 w-12 place-items-center rounded-xl bg-soft-purple text-xl font-black text-primary">{["∑", "A", "◎", "⌛", "Я"][index]}</span><h2 className="mt-5 text-xl font-black">{c.subjects[key]}</h2><p className="mt-2 min-h-12 text-sm leading-6 text-muted">{c.subjectsPage.descriptions[key]}</p><div className="mt-5"><div className="mb-2 flex justify-between text-sm font-bold"><span>{c.subjectsPage.progress}</span><span>{progress}%</span></div><Bar value={progress} /></div><div className="mt-5 grid grid-cols-2 gap-3 text-sm"><div className="rounded-xl bg-page p-3"><span className="text-muted">{c.subjectsPage.average}</span><strong className="mt-1 block text-lg">{avg}</strong></div><div className="rounded-xl bg-page p-3"><span className="text-muted">{c.subjectsPage.tests}</span><strong className="mt-1 block text-lg">{tests}</strong></div></div><div className="mt-5"><ActionLink href={key === "geography" ? `/${locale}/subjects/geography` : `/${locale}/subjects`}>{c.actions.open}</ActionLink></div></Card>)}</div></div></ProductLayout>;
}

function GeographyPage({ locale }: { locale: ProductLocale }) {
  const c = productCopy[locale];
  return <ProductLayout locale={locale}><div className="space-y-7"><PageTitle title={c.geography.title} subtitle={c.geography.subtitle} /><div className="flex gap-2 overflow-x-auto border-b border-border pb-3">{c.geography.tabs.map((tab, i) => <button key={tab} className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-bold ${i === 0 ? "bg-soft-purple text-primary" : "text-muted"}`}>{tab}</button>)}</div>
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]"><Card className="overflow-hidden">{c.geography.topics.map((topic, i) => <div key={topic} className={`border-b border-border p-4 last:border-0 ${i === 2 ? "bg-soft-purple" : ""}`}><div className="mb-2 flex justify-between gap-3 text-sm font-bold"><span>{topic}</span><span>{topicProgress[i]}%</span></div><Bar value={topicProgress[i]} tone={topicProgress[i] >= 70 ? "success" : topicProgress[i] > 0 ? "warning" : "primary"} /></div>)}</Card>
    <Card className="p-7"><p className="text-sm font-black uppercase text-primary">{c.geography.selected}</p><h2 className="mt-3 text-3xl font-black">{c.geography.topics[2]}</h2><div className="mt-5"><div className="mb-2 flex justify-between font-bold"><span>{c.subjectsPage.progress}</span><span>45%</span></div><Bar value={45} tone="warning" /></div><h3 className="mt-7 font-black">{c.geography.studied}</h3><ul className="mt-4 space-y-3">{c.geography.studiedItems.map((item) => <li key={item} className="flex gap-3 text-sm text-muted"><span className="text-success">✓</span>{item}</li>)}</ul><div className="mt-7 flex flex-wrap gap-3"><ActionLink href={`/${locale}/review/climate-weather`}>{c.geography.startTopic}</ActionLink><ActionLink href={`/${locale}/test`} secondary>{c.geography.takeTest}</ActionLink></div></Card></div>
  </div></ProductLayout>;
}

function LearningDashboard({ locale }: { locale: ProductLocale }) {
  const c = productCopy[locale];
  const ui = learningUi[locale];
  const profile = useLearningProfile();
  const profileSubjects = getSubjectsForProfile(profile.group, profile.sector);
  const average = Math.round(profileSubjects.reduce((sum, subject) => sum + subject.progress, 0) / profileSubjects.length);
  const completed = profileSubjects.reduce((sum, subject) => sum + subject.completed, 0);
  const sectorName = profile.sector === "az_sector"
    ? { az: "Azərbaycan", ru: "Азербайджанский", en: "Azerbaijani" }[locale]
    : { az: "Rus", ru: "Русский", en: "Russian" }[locale];

  return <ProductLayout locale={locale}><div className="space-y-7">
    <PageTitle title={`${c.dashboard.hello} 👋`} subtitle={c.dashboard.subtitle} />
    <Card className="p-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div><p className="text-sm font-black uppercase text-primary">{ui.profile}</p><p className="mt-2 text-lg font-black">{c.groups[profile.group].title}</p></div>
        <div className="flex flex-wrap gap-2 text-sm font-bold text-muted">
          <span className="rounded-lg bg-page px-3 py-2">{ui.sector}: {sectorName}</span>
          <span className="rounded-lg bg-page px-3 py-2">{ui.class}: {profile.studentClass}</span>
        </div>
      </div>
      {profile.goals.length > 0 && <div className="mt-4 flex flex-wrap gap-2"><span className="text-sm font-bold text-muted">{ui.selectedGoals}:</span>{profile.goals.map((goal) => <span key={goal} className="rounded-full bg-soft-purple px-3 py-1 text-xs font-bold text-primary">{c.goals[goal][0]}</span>)}</div>}
    </Card>
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {[[c.dashboard.stats[0], `${average}%`], [c.dashboard.stats[1], completed], [c.dashboard.stats[2], "68%"], [c.dashboard.stats[3], "2"]].map(([label, value]) => <Card key={label} className="p-5"><p className="text-sm font-semibold text-muted">{label}</p><p className="mt-3 text-3xl font-black">{value}</p></Card>)}
    </div>
    <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
      <Card className="p-6"><h2 className="text-xl font-black">{c.dashboard.subjectsTitle}</h2><div className="mt-5 space-y-5">{profileSubjects.map((subject) => <div key={subject.id}><div className="mb-2 flex justify-between gap-3 text-sm font-bold"><Link href={`/${locale}/subjects/${subject.id}`} className="hover:text-primary">{subject.name[locale]}</Link><span>{subject.progress}%</span></div><Bar value={subject.progress} /></div>)}</div><div className="mt-6"><ActionLink href={`/${locale}/subjects`}>{c.actions.open}</ActionLink></div></Card>
      <div className="space-y-5"><Card className="p-6"><h2 className="text-xl font-black">{c.dashboard.recommended}</h2><div className="mt-4 space-y-3">{profileSubjects.slice(0, 3).map((subject) => <Link key={subject.id} href={`/${locale}/subjects/${subject.id}`} className="block rounded-xl bg-page p-4 transition hover:bg-soft-purple"><strong className="block">{subject.topics[0].name[locale]}</strong><span className="text-sm text-muted">{subject.name[locale]}</span></Link>)}</div><div className="mt-5"><ActionLink href={`/${locale}/test`}>{c.dashboard.startTest}</ActionLink></div></Card>
      <Card className="border-primary/20 bg-soft-purple p-6"><span className="rounded-full bg-primary px-3 py-1 text-xs font-black text-white">PRO</span><h2 className="mt-4 text-xl font-black">{c.dashboard.proTitle}</h2><p className="mt-2 text-sm leading-6 text-muted">{c.dashboard.proText}</p></Card></div>
    </div>
  </div></ProductLayout>;
}

function LearningSubjectsPage({ locale }: { locale: ProductLocale }) {
  const c = productCopy[locale];
  const ui = learningUi[locale];
  const profile = useLearningProfile();
  const profileSubjects = getSubjectsForProfile(profile.group, profile.sector);

  return <ProductLayout locale={locale}><div className="space-y-7">
    <PageTitle title={c.subjectsPage.title} subtitle={`${c.groups[profile.group].title} · ${ui.groupSubjects}`} />
    <div className="flex items-center gap-3 rounded-xl border border-primary/20 bg-soft-purple px-4 py-3 text-sm">
      <span className="font-semibold text-muted">{ui.group}:</span>
      <strong className="text-primary">{c.groups[profile.group].title}</strong>
    </div>
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{profileSubjects.map((subject) => <Card key={subject.id} className="flex flex-col p-6">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-soft-purple text-xl font-black text-primary">{subject.icon}</span>
      <h2 className="mt-5 text-xl font-black">{subject.name[locale]}</h2><p className="mt-2 min-h-12 text-sm leading-6 text-muted">{subject.description[locale]}</p>
      <div className="mt-5"><div className="mb-2 flex justify-between text-sm font-bold"><span>{c.subjectsPage.progress}</span><span>{subject.progress}%</span></div><Bar value={subject.progress} /></div>
      <div className="mt-5 grid grid-cols-2 gap-3 text-sm"><div className="rounded-xl bg-page p-3"><span className="text-muted">{ui.completed}</span><strong className="mt-1 block text-lg">{subject.completed}/{subject.topics.length}</strong></div><div className="rounded-xl bg-page p-3"><span className="text-muted">{ui.estimated}</span><strong className="mt-1 block text-lg">{subject.estimated}</strong></div></div>
      <div className="mt-5"><ActionLink href={`/${locale}/subjects/${subject.id}`}>{c.actions.open}</ActionLink></div>
    </Card>)}</div>
  </div></ProductLayout>;
}

function LearningSubjectPage({ locale, subjectId }: { locale: ProductLocale; subjectId: string }) {
  const c = productCopy[locale];
  const ui = learningUi[locale];
  const subject = learningSubjects[subjectId as SubjectId];
  const [tab, setTab] = useState<"overview" | "topics" | "notes" | "tests" | "statistics">("overview");
  if (!subject) return <LearningSubjectsPage locale={locale} />;
  const tabs = [["overview", ui.overview], ["topics", ui.topics], ["notes", ui.notes], ["tests", ui.tests], ["statistics", ui.statistics]] as const;

  return <ProductLayout locale={locale}><div className="space-y-7">
    <div className="flex items-center gap-4"><span className="grid h-14 w-14 place-items-center rounded-xl bg-soft-purple text-2xl font-black text-primary">{subject.icon}</span><PageTitle title={subject.name[locale]} subtitle={subject.description[locale]} /></div>
    <div className="flex gap-2 overflow-x-auto border-b border-border pb-3">{tabs.map(([id, label]) => <button key={id} onClick={() => setTab(id)} className={`min-h-11 whitespace-nowrap rounded-lg px-4 text-sm font-bold ${tab === id ? "bg-soft-purple text-primary" : "text-muted hover:text-primary"}`}>{label}</button>)}</div>
    {tab === "overview" && <div className="grid gap-6 lg:grid-cols-[1fr_320px]"><Card className="p-7"><h2 className="text-xl font-black">{ui.subjectIntro}</h2><div className="mt-6"><div className="mb-2 flex justify-between font-bold"><span>{c.subjectsPage.progress}</span><span>{subject.progress}%</span></div><Bar value={subject.progress} /></div><div className="mt-6 grid gap-3 sm:grid-cols-2"><div className="rounded-xl bg-page p-4"><span className="text-sm text-muted">{ui.completed}</span><strong className="mt-1 block text-2xl">{subject.completed}/{subject.topics.length}</strong></div><div className="rounded-xl bg-page p-4"><span className="text-sm text-muted">{ui.estimated}</span><strong className="mt-1 block text-2xl">{subject.estimated}</strong></div></div></Card><Card className="p-6"><h2 className="font-black">{ui.recent}</h2><p className="mt-3 text-sm leading-6 text-muted">{ui.placeholder}</p></Card></div>}
    {tab === "topics" && <div className="grid gap-4 md:grid-cols-2">{subject.topics.map((topic, index) => {
      const duplicate = Object.values(learningSubjects).filter((item) => findTopic(item, topic.slug)).length > 1;
      const routeSlug = duplicate ? `${subject.id}--${topic.slug}` : topic.slug;
      return <Link key={topic.slug} href={`/${locale}/topics/${routeSlug}`} className="rounded-2xl border border-border bg-white p-5 shadow-[0_10px_32px_rgba(17,24,39,0.04)] transition hover:-translate-y-0.5 hover:border-primary"><div className="flex items-center justify-between gap-4"><div><span className="text-xs font-black text-primary">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-2 font-black">{topic.name[locale]}</h2></div><span className="text-xl text-primary">→</span></div></Link>;
    })}</div>}
    {tab !== "overview" && tab !== "topics" && <Card className="p-10 text-center"><h2 className="text-xl font-black">{tabs.find(([id]) => id === tab)?.[1]}</h2><p className="mt-3 text-muted">{ui.placeholder}</p></Card>}
  </div></ProductLayout>;
}

function LearningTopicPage({ locale, slug }: { locale: ProductLocale; slug: string }) {
  const c = productCopy[locale];
  const ui = learningUi[locale];
  const [subjectPrefix, topicSlug] = slug.includes("--") ? slug.split("--", 2) : ["", slug];
  const subject = subjectPrefix
    ? learningSubjects[subjectPrefix as SubjectId]
    : Object.values(learningSubjects).find((item) => findTopic(item, topicSlug));
  const topic = subject ? findTopic(subject, topicSlug) : undefined;
  if (!subject || !topic) return <LearningSubjectsPage locale={locale} />;

  return <ProductLayout locale={locale}><div className="space-y-7">
    <PageTitle title={topic.name[locale]} subtitle={subject.name[locale]} />
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]"><Card className="p-7"><p className="text-sm font-black uppercase text-primary">{ui.topicProgress}</p><div className="mt-4"><div className="mb-2 flex justify-between font-bold"><span>{topic.name[locale]}</span><span>0%</span></div><Bar value={0} /></div><div className="mt-8 rounded-2xl bg-page p-6"><h2 className="text-xl font-black">{ui.comingSoon}</h2><p className="mt-3 leading-7 text-muted">{ui.topicDescription}</p></div><div className="mt-7 flex flex-wrap gap-3"><button className="rounded-xl bg-primary px-6 py-3 font-bold text-white">{ui.learn}</button><button disabled className="cursor-not-allowed rounded-xl border border-border px-6 py-3 font-bold text-muted opacity-60">{ui.disabledTest}</button></div></Card><Card className="p-6"><span className="grid h-12 w-12 place-items-center rounded-xl bg-soft-purple text-xl font-black text-primary">{subject.icon}</span><h2 className="mt-4 font-black">{subject.name[locale]}</h2><p className="mt-2 text-sm leading-6 text-muted">{subject.description[locale]}</p><div className="mt-5"><ActionLink href={`/${locale}/subjects/${subject.id}`} secondary>{c.actions.back}</ActionLink></div></Card></div>
  </div></ProductLayout>;
}

type TestAttempt = {
  testId: string;
  title: string;
  score: number;
  correct: number;
  total: number;
  duration: string;
  completedAt: string;
};

const testLibraryCopy = {
  az: {
    title: "Testlər", subtitle: "Fənn və imtahan üzrə test qovluqları", exam: "Ümumi imtahan", examText: "Qrupunuzun bütün fənləri üzrə sınaq imtahanları",
    tests: "test", lastResult: "Son nəticə", noResult: "Hələ nəticə yoxdur", open: "Qovluğu aç", folder: "Test qovluğu",
    latestOnly: "Hər test üçün yalnız son cəhd göstərilir.", correct: "Düzgün cavab", duration: "Vaxt", completed: "Tamamlanıb",
    start: "Testə başla", retry: "Yenidən keç", analytics: "Son cəhdin analitikası", back: "Bütün qovluqlar",
  },
  ru: {
    title: "Тесты", subtitle: "Папки тестов по предметам и общему экзамену", exam: "Общий экзамен", examText: "Пробные экзамены по всем предметам вашей группы",
    tests: "теста", lastResult: "Последний результат", noResult: "Результатов пока нет", open: "Открыть папку", folder: "Папка тестов",
    latestOnly: "Для каждого теста показана только последняя попытка.", correct: "Правильные ответы", duration: "Время", completed: "Пройден",
    start: "Начать тест", retry: "Пройти снова", analytics: "Аналитика последней попытки", back: "Все папки",
  },
  en: {
    title: "Tests", subtitle: "Test folders by subject and full exam", exam: "Full exam", examText: "Mock exams covering every subject in your group",
    tests: "tests", lastResult: "Latest result", noResult: "No results yet", open: "Open folder", folder: "Test folder",
    latestOnly: "Only the latest attempt is shown for each test.", correct: "Correct answers", duration: "Time", completed: "Completed",
    start: "Start test", retry: "Retake", analytics: "Latest attempt analytics", back: "All folders",
  },
};

function latestAttempts(attempts: TestAttempt[]) {
  return Array.from(attempts.reduce((latest, attempt) => {
    const current = latest.get(attempt.testId);
    if (!current || new Date(attempt.completedAt) > new Date(current.completedAt)) latest.set(attempt.testId, attempt);
    return latest;
  }, new Map<string, TestAttempt>()).values()).sort((a, b) => b.completedAt.localeCompare(a.completedAt));
}

function folderAttempts(folderId: string, locale: ProductLocale, subject?: (typeof learningSubjects)[SubjectId]): TestAttempt[] {
  const names = subject?.topics.slice(0, 3).map((topic) => topic.name[locale]) ?? [
    { az: "Diaqnostik imtahan", ru: "Диагностический экзамен", en: "Diagnostic exam" }[locale],
    { az: "Sınaq imtahanı №1", ru: "Пробный экзамен №1", en: "Mock exam #1" }[locale],
    { az: "Sınaq imtahanı №2", ru: "Пробный экзамен №2", en: "Mock exam #2" }[locale],
  ];
  const attempts: TestAttempt[] = [
    { testId: `${folderId}-1`, title: names[0], score: 58, correct: 12, total: 20, duration: "18:42", completedAt: "2026-05-14T12:00:00Z" },
    { testId: `${folderId}-1`, title: names[0], score: 72, correct: 15, total: 20, duration: "16:18", completedAt: "2026-06-06T12:00:00Z" },
    { testId: `${folderId}-2`, title: names[1], score: 64, correct: 13, total: 20, duration: "19:05", completedAt: "2026-06-02T12:00:00Z" },
  ];
  if (folderId === "exam") attempts.push({ testId: "exam-3", title: names[2], score: 0, correct: 0, total: 100, duration: "—", completedAt: "" });
  return attempts;
}

function TestLibraryPage({ locale }: { locale: ProductLocale }) {
  const profile = useLearningProfile();
  const copy = testLibraryCopy[locale];
  const profileSubjects = getSubjectsForProfile(profile.group, profile.sector);
  const folders = [{ id: "exam", icon: "◎", name: copy.exam, description: copy.examText }, ...profileSubjects.map((subject) => ({ id: subject.id, icon: subject.icon, name: subject.name[locale], description: subject.description[locale] }))];

  return <ProductLayout locale={locale}><div className="space-y-7"><PageTitle title={copy.title} subtitle={copy.subtitle} />
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{folders.map((folder) => {
      const subject = folder.id === "exam" ? undefined : learningSubjects[folder.id as SubjectId];
      const attempts = latestAttempts(folderAttempts(folder.id, locale, subject));
      const completed = attempts.filter((attempt) => attempt.completedAt);
      const latest = completed[0];
      return <Card key={folder.id} className="flex flex-col p-6"><div className="flex items-start justify-between gap-4"><span className="grid h-12 w-12 place-items-center rounded-xl bg-soft-purple text-xl font-black text-primary">{folder.icon}</span><span className="rounded-full bg-page px-3 py-1 text-xs font-bold text-muted">{attempts.length} {copy.tests}</span></div><p className="mt-5 text-xs font-black uppercase text-primary">{copy.folder}</p><h2 className="mt-2 text-xl font-black">{folder.name}</h2><p className="mt-2 min-h-12 text-sm leading-6 text-muted">{folder.description}</p><div className="mt-5 rounded-xl bg-page p-4"><span className="text-sm text-muted">{copy.lastResult}</span>{latest ? <div className="mt-2 flex items-end justify-between"><strong className="text-2xl">{latest.score}%</strong><span className="text-sm font-bold text-muted">{latest.correct}/{latest.total}</span></div> : <strong className="mt-2 block">{copy.noResult}</strong>}</div><div className="mt-5"><ActionLink href={`/${locale}/test/folder/${folder.id}`}>{copy.open}</ActionLink></div></Card>;
    })}</div>
  </div></ProductLayout>;
}

function TestFolderPage({ locale, folderId }: { locale: ProductLocale; folderId: string }) {
  const profile = useLearningProfile();
  const copy = testLibraryCopy[locale];
  const allowedSubjects = getSubjectsForProfile(profile.group, profile.sector);
  const subject = folderId === "exam" ? undefined : allowedSubjects.find((item) => item.id === folderId);
  if (folderId !== "exam" && !subject) return <TestLibraryPage locale={locale} />;
  const title = folderId === "exam" ? copy.exam : subject!.name[locale];
  const attempts = latestAttempts(folderAttempts(folderId, locale, subject));

  return <ProductLayout locale={locale}><div className="space-y-7"><div><ActionLink href={`/${locale}/test`} secondary>{copy.back}</ActionLink><div className="mt-6"><PageTitle title={title} subtitle={copy.latestOnly} /></div></div>
    <div className="grid gap-5">{attempts.map((attempt, index) => {
      const completed = Boolean(attempt.completedAt);
      return <Card key={attempt.testId} className="p-6"><div className="flex flex-col gap-5 lg:flex-row lg:items-center"><div className="flex flex-1 items-start gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-soft-purple font-black text-primary">{index + 1}</span><div><h2 className="text-lg font-black">{attempt.title}</h2><p className="mt-1 text-sm text-muted">{completed ? `${copy.completed}: ${new Date(attempt.completedAt).toLocaleDateString(locale === "az" ? "az-AZ" : locale === "ru" ? "ru-RU" : "en-US")}` : copy.noResult}</p></div></div>{completed && <div className="grid grid-cols-3 gap-3 lg:w-[430px]"><div className="rounded-xl bg-page p-3"><small className="text-muted">{copy.lastResult}</small><strong className="mt-1 block text-xl">{attempt.score}%</strong></div><div className="rounded-xl bg-page p-3"><small className="text-muted">{copy.correct}</small><strong className="mt-1 block text-xl">{attempt.correct}/{attempt.total}</strong></div><div className="rounded-xl bg-page p-3"><small className="text-muted">{copy.duration}</small><strong className="mt-1 block text-xl">{attempt.duration}</strong></div></div>}<ActionLink href={`/${locale}/test/session`}>{completed ? copy.retry : copy.start}</ActionLink></div>{completed && <div className="mt-5 border-t border-border pt-5"><div className="mb-2 flex justify-between text-sm font-bold"><span>{copy.analytics}</span><span>{attempt.score}%</span></div><Bar value={attempt.score} tone={attempt.score >= 75 ? "success" : attempt.score >= 50 ? "warning" : "error"} /></div>}</Card>;
    })}</div>
  </div></ProductLayout>;
}

function TestSessionPage({ locale }: { locale: ProductLocale }) {
  const c = productCopy[locale]; const router = useRouter(); const [selected, setSelected] = useState(2);
  return <ProductLayout locale={locale}><div className="space-y-6"><div className="flex flex-wrap items-end justify-between gap-4"><PageTitle title={c.testPage.title} subtitle={c.testPage.progress} /><span className="rounded-xl bg-soft-purple px-4 py-2 font-black text-primary">{c.testPage.timer}</span></div><Bar value={35} />
    <div className="grid gap-6 xl:grid-cols-[1fr_320px]"><Card className="p-6 md:p-8"><h2 className="text-xl font-black leading-8">{c.testPage.question}</h2><div className="mt-7 grid gap-3">{c.testPage.options.map((option, i) => <button key={option} onClick={() => setSelected(i)} className={`flex min-h-14 items-center gap-4 rounded-xl border px-4 text-left font-semibold ${selected === i ? "border-primary bg-soft-purple text-primary" : "border-border"}`}><span className={`grid h-8 w-8 place-items-center rounded-full border text-sm font-black ${selected === i ? "border-primary bg-primary text-white" : "border-border"}`}>{String.fromCharCode(65 + i)}</span>{option}</button>)}</div><div className="mt-8 flex flex-wrap justify-between gap-3"><button className="rounded-xl border border-border px-5 py-3 font-bold">{c.actions.back}</button><button className="rounded-xl px-5 py-3 font-bold text-muted">{c.actions.skip}</button><button onClick={() => router.push(`/${locale}/results`)} className="rounded-xl bg-primary px-6 py-3 font-bold text-white">{c.testPage.finish}</button></div></Card>
    <Card className="p-6"><p className="text-sm text-muted">{c.testPage.currentTopic}</p><p className="mt-1 font-black">{c.geography.topics[2]}</p><div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-xl bg-page p-3"><small className="text-muted">{c.testPage.currentScore}</small><strong className="mt-1 block text-xl">2 / 3</strong></div><div className="rounded-xl bg-page p-3"><small className="text-muted">{c.testPage.timeLeft}</small><strong className="mt-1 block text-xl">{c.testPage.timer}</strong></div></div><h3 className="mt-6 font-black">{c.testPage.overview}</h3><div className="mt-3 grid grid-cols-5 gap-2">{Array.from({ length: 20 }, (_, i) => <span key={i} className={`grid aspect-square place-items-center rounded-lg text-xs font-bold ${i < 6 ? "bg-emerald-50 text-success" : i === 6 ? "bg-primary text-white" : "bg-page text-muted"}`}>{i + 1}</span>)}</div></Card></div>
  </div></ProductLayout>;
}

function ResultsPage({ locale }: { locale: ProductLocale }) {
  const c = productCopy[locale];
  return <ProductLayout locale={locale}><div className="space-y-7"><PageTitle title={c.results.title} /><div className="grid gap-5 lg:grid-cols-[320px_1fr]"><Card className="grid place-items-center p-8 text-center"><div className="grid h-44 w-44 place-items-center rounded-full border-[14px] border-primary/20"><span className="text-5xl font-black text-primary">70%</span></div></Card><div className="grid gap-4 sm:grid-cols-2">{[c.results.correct, c.results.time, c.results.friends, c.results.best].map((item) => <Card key={item} className="p-5"><p className="text-lg font-black">{item}</p></Card>)}</div></div>
    <div className="grid gap-6 xl:grid-cols-[1fr_300px]"><Card className="p-6"><h2 className="text-xl font-black">{c.results.performance}</h2><div className="mt-5 space-y-4">{c.geography.studiedItems.map((item, i) => <div key={item}><div className="mb-2 flex justify-between text-sm font-bold"><span>{item}</span><span>{resultPerformance[i]}%</span></div><Bar value={resultPerformance[i]} tone={resultPerformance[i] >= 80 ? "success" : resultPerformance[i] >= 60 ? "warning" : "error"} /></div>)}</div></Card><Card className="p-6"><h2 className="text-xl font-black">{c.results.mistakes}</h2><div className="mt-4 flex flex-wrap gap-2">{[5,12,17,19].map((n) => <span key={n} className="rounded-lg bg-red-50 px-3 py-2 text-sm font-bold text-error">#{n}</span>)}</div></Card></div><div className="flex flex-wrap gap-3"><ActionLink href={`/${locale}/test`}>{c.results.retry}</ActionLink><ActionLink href={`/${locale}/weak-topics`} secondary>{c.results.weak}</ActionLink><ActionLink href={`/${locale}/subjects/geography`} secondary>{c.results.topics}</ActionLink></div>
  </div></ProductLayout>;
}

function WeakTopicsPage({ locale }: { locale: ProductLocale }) {
  const c = productCopy[locale]; const topics = [[c.geography.topics[2],40,c.weak.high],[c.geography.topics[5],55,c.weak.medium],[c.geography.topics[4],65,c.weak.medium]] as const;
  return <ProductLayout locale={locale}><div className="space-y-7"><PageTitle title={c.weak.title} subtitle={c.weak.subtitle} /><div className="grid gap-5">{topics.map(([topic, score, priority], i) => <Card key={topic} className="p-6"><div className="flex flex-col gap-5 md:flex-row md:items-center"><div className={`grid h-20 w-20 shrink-0 place-items-center rounded-full border-8 ${i === 0 ? "border-red-100 text-error" : "border-amber-100 text-warning"} text-xl font-black`}>{score}%</div><div className="flex-1"><div className="flex flex-wrap items-center gap-3"><h2 className="text-xl font-black">{topic}</h2><span className={`rounded-full px-3 py-1 text-xs font-bold ${i === 0 ? "bg-red-50 text-error" : "bg-amber-50 text-warning"}`}>{priority}</span></div><p className="mt-2 text-sm leading-6 text-muted">{c.weak.frequent}</p><div className="mt-4 flex flex-wrap gap-2"><ActionLink href={`/${locale}/review/climate-weather`}>{c.actions.learn}</ActionLink><ActionLink href={`/${locale}/test`} secondary>{c.actions.solve}</ActionLink></div></div></div></Card>)}</div></div></ProductLayout>;
}

function ReviewPage({ locale }: { locale: ProductLocale }) {
  const c = productCopy[locale];
  return <ProductLayout locale={locale}><div className="space-y-7"><div className="flex flex-wrap items-start justify-between gap-4"><PageTitle title={c.reviewPage.title} /><div className="flex gap-2"><span className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-error">{c.reviewPage.high}</span><span className="rounded-full bg-soft-purple px-3 py-1.5 text-xs font-bold text-primary">{c.reviewPage.score}</span></div></div><div className="flex gap-2 overflow-x-auto border-b border-border pb-3">{c.reviewPage.tabs.map((tab, i) => <button key={tab} className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-bold ${i === 0 ? "bg-soft-purple text-primary" : "text-muted"}`}>{tab}</button>)}</div>
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]"><Card className="p-7"><p className="text-lg leading-8">{c.reviewPage.summary}</p><h2 className="mt-8 text-xl font-black">{c.reviewPage.tabs[1]}</h2><ul className="mt-4 space-y-4">{c.reviewPage.facts.map((fact) => <li key={fact} className="flex gap-3 leading-7 text-muted"><span className="text-primary">●</span>{fact}</li>)}</ul></Card><Card className="p-7"><h2 className="text-xl font-black">{c.reviewPage.tabs[2]}</h2><ul className="mt-4 space-y-3">{c.reviewPage.questions.map((q) => <li key={q} className="rounded-xl bg-page p-4 text-sm font-semibold">{q}</li>)}</ul></Card></div><div className="flex flex-wrap gap-3"><ActionLink href={`/${locale}/test`}>{c.reviewPage.test}</ActionLink><ActionLink href={`/${locale}/weak-topics`} secondary>{c.reviewPage.back}</ActionLink></div>
  </div></ProductLayout>;
}

function ProPage({ locale }: { locale: ProductLocale }) {
  const c = productCopy[locale]; const metrics = [[c.pro.forecast,"472"],[c.pro.range,"450–495"],[c.pro.average,"64%"],[c.pro.solved,"842"],[c.pro.correct,"68%"]];
  return <ProductLayout locale={locale}><div className="space-y-7"><div className="flex flex-wrap items-start justify-between gap-4"><PageTitle title={c.pro.title} subtitle={c.pro.subtitle} /><span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-black text-warning">{c.pro.demo}</span></div><div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">{metrics.map(([label,value]) => <Card key={label} className="p-5"><p className="text-sm font-semibold text-muted">{label}</p><p className="mt-3 text-3xl font-black">{value}</p></Card>)}</div>
    <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]"><Card className="p-6"><h2 className="text-xl font-black">{c.pro.compare}</h2><div className="mt-4 flex flex-wrap gap-2">{c.pro.filters.map((f) => <span key={f} className="rounded-lg bg-page px-3 py-2 text-xs font-bold">{f}</span>)}</div><p className="mt-7 text-2xl font-black text-primary">{c.pro.better}</p><div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-[67%] rounded-full bg-primary" /></div><div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">{[[c.pro.place,"1248 / 3721"],[c.pro.groupAvg,"58%"],[c.pro.top10,"89%+"],[c.pro.top25,"72%+"]].map(([l,v]) => <div key={l} className="rounded-xl bg-page p-3"><small className="text-muted">{l}</small><strong className="mt-1 block">{v}</strong></div>)}</div></Card>
    <Card className="p-6"><h2 className="text-xl font-black">{c.pro.scoreForecast}</h2><p className="mt-5 text-sm text-muted">{c.pro.today}</p><p className="mt-1 text-5xl font-black text-primary">472</p><p className="mt-2 font-bold">{c.pro.range}: 450–495</p><div className="mt-6 rounded-xl bg-emerald-50 p-4"><small className="text-success">{c.pro.improved}</small><strong className="mt-1 block text-3xl text-success">510</strong></div><h3 className="mt-6 font-black">{c.pro.affects}</h3><div className="mt-3 flex flex-wrap gap-2">{c.pro.factors.map((f) => <span key={f} className="rounded-lg bg-page px-3 py-2 text-xs font-semibold">{f}</span>)}</div></Card></div>
    <Card className="p-6"><h2 className="text-xl font-black">{c.pro.risks}</h2><div className="mt-5 grid gap-4 md:grid-cols-3">{[c.geography.topics[2],c.geography.topics[7],c.geography.topics[4]].map((topic,i) => <div key={topic} className="rounded-xl border border-border p-4"><div className="mb-2 flex justify-between font-bold"><span>{topic}</span><span>{riskScores[i]}%</span></div><Bar value={riskScores[i]} tone={i < 2 ? "error" : "warning"} /></div>)}</div><button className="mt-6 rounded-xl bg-primary px-6 py-3 font-bold text-white">{c.actions.upgrade}</button></Card>
  </div></ProductLayout>;
}

function ProfilePage({ locale }: { locale: ProductLocale }) {
  const c = productCopy[locale];
  const profile = useLearningProfile();
  const labels = [c.profile.name, c.profile.language, c.profile.sector, c.profile.group, c.profile.class, c.profile.plan];
  const sectorName = profile.sector === "az_sector"
    ? { az: "Az bölməsi", ru: "Азербайджанский сектор", en: "Azerbaijani sector" }[locale]
    : { az: "Rus bölməsi", ru: "Русский сектор", en: "Russian sector" }[locale];
  const className = profile.studentClass === "graduate"
    ? { az: "Məzun", ru: "Выпускник", en: "Graduate" }[locale]
    : { az: `${profile.studentClass}-ci sinif`, ru: `${profile.studentClass} класс`, en: `${profile.studentClass}th grade` }[locale];
  const profileLine = `${sectorName} · ${c.groups[profile.group].title} · ${className}`;
  const values = ["Tural", locale.toUpperCase(), sectorName, c.groups[profile.group].title, className, "Free"];
  const selectedGoals = profile.goals.length ? profile.goals : goalIds;

  return <ProductLayout locale={locale}><div className="space-y-7"><PageTitle title={c.profile.title} /><div className="grid gap-6 lg:grid-cols-[1fr_320px]"><Card className="p-6"><div className="flex items-center gap-4 border-b border-border pb-6"><span className="grid h-16 w-16 place-items-center rounded-full bg-primary text-2xl font-black text-white">T</span><div><h2 className="text-2xl font-black">Tural</h2><p className="text-muted">{profileLine}</p></div></div><dl className="mt-6 grid gap-4 sm:grid-cols-2">{labels.map((label,i) => <div key={label} className="rounded-xl bg-page p-4"><dt className="text-sm text-muted">{label}</dt><dd className="mt-1 font-black">{values[i]}</dd></div>)}</dl><div className="mt-5 rounded-xl bg-soft-purple p-4"><p className="text-sm text-muted">{c.profile.goals}</p><div className="mt-3 flex flex-wrap gap-2">{selectedGoals.map((id) => <span key={id} className="rounded-lg bg-white px-3 py-2 text-xs font-semibold">{c.goals[id][0]}</span>)}</div></div></Card><Card className="p-6"><div className="grid gap-3">{c.profile.actions.map((action,i) => <button key={action} className={`min-h-11 rounded-xl border px-4 text-left font-bold ${i === 3 ? "border-red-100 text-error" : "border-border hover:border-primary hover:text-primary"}`}>{action}</button>)}</div></Card></div></div></ProductLayout>;
}

function SectorRedirect({ locale }: { locale: ProductLocale }) {
  const router = useRouter();
  useEffect(() => { localStorage.setItem("onboarding_locale", locale); router.replace("/onboarding/sector"); }, [locale, router]);
  return <div className="grid min-h-screen place-items-center bg-page"><div className="h-10 w-10 animate-spin rounded-full border-4 border-soft-purple border-t-primary" /></div>;
}

export function ProductRoute() {
  const locale = useProductLocale();
  const params = useParams<{ path?: string[] }>();
  const path = (params.path ?? []).join("/");
  if (path === "onboarding/sector") return <SectorRedirect locale={locale} />;
  if (path === "onboarding/group") return <GroupPage locale={locale} />;
  if (path === "onboarding/class") return <ClassPage locale={locale} />;
  if (path === "onboarding/goals") return <GoalsPage locale={locale} />;
  if (path === "dashboard" || path === "") return <LearningDashboard locale={locale} />;
  if (path === "subjects") return <LearningSubjectsPage locale={locale} />;
  if (path.startsWith("subjects/")) return <LearningSubjectPage locale={locale} subjectId={path.split("/")[1]} />;
  if (path.startsWith("topics/")) return <LearningTopicPage locale={locale} slug={path.split("/")[1]} />;
  if (path === "test") return <TestLibraryPage locale={locale} />;
  if (path.startsWith("test/folder/")) return <TestFolderPage locale={locale} folderId={path.split("/")[2]} />;
  if (path === "test/session") return <TestSessionPage locale={locale} />;
  if (path === "results") return <ResultsPage locale={locale} />;
  if (path === "weak-topics") return <WeakTopicsPage locale={locale} />;
  if (path === "review/climate-weather") return <ReviewPage locale={locale} />;
  if (path === "pro-analytics") return <ProPage locale={locale} />;
  if (path === "profile") return <ProfilePage locale={locale} />;
  return <Dashboard locale={locale} />;
}
