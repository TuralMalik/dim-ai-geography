"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { OnboardingLayout } from "@/components/onboarding/OnboardingLayout";
import { ProgressStepper } from "@/components/onboarding/ProgressStepper";
import { SectorCard } from "@/components/onboarding/SectorCard";
import {
  onboardingCopy,
  type EducationSector,
  type OnboardingLocale,
} from "@/lib/onboardingI18n";

const sectors: EducationSector[] = ["az_sector", "ru_sector"];

export default function SectorSelectionPage() {
  const router = useRouter();
  const [locale, setLocale] = useState<OnboardingLocale>("az");
  const [selectedSector, setSelectedSector] = useState<EducationSector | null>(null);
  const copy = onboardingCopy[locale];

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("onboarding_locale") as OnboardingLocale | null;
    const savedSector = window.localStorage.getItem("onboarding_sector") as EducationSector | null;

    if (savedLocale && savedLocale in onboardingCopy) setLocale(savedLocale);
    if (savedSector === "az_sector" || savedSector === "ru_sector") setSelectedSector(savedSector);
  }, []);

  function changeLocale(nextLocale: OnboardingLocale) {
    setLocale(nextLocale);
    window.localStorage.setItem("onboarding_locale", nextLocale);
    window.localStorage.setItem("dim-ai-locale", nextLocale);
    document.documentElement.lang = nextLocale;
  }

  function selectSector(sector: EducationSector) {
    setSelectedSector(sector);
    window.localStorage.setItem("onboarding_sector", sector);
  }

  function continueOnboarding() {
    if (!selectedSector) return;
    // TODO: Replace with a locale-aware group route when the group step is implemented.
    router.push("/onboarding/group");
  }

  return (
    <OnboardingLayout
      locale={locale}
      brand={copy.brand}
      logoLabel={copy.logoLabel}
      onLocaleChange={changeLocale}
    >
      <section className="mx-auto w-full rounded-3xl border border-border bg-white p-5 shadow-[0_24px_70px_rgba(17,24,39,0.09)] sm:p-8 md:p-10">
        <ProgressStepper label={copy.progress} value={25} />

        <div className="mx-auto mt-9 max-w-2xl text-center">
          <h1 className="text-3xl font-black leading-tight tracking-normal text-ink sm:text-4xl">
            {copy.title}
          </h1>
          <p className="mt-3 text-base leading-7 text-muted sm:text-lg">{copy.subtitle}</p>
        </div>

        <div
          className="mt-9 grid gap-4 md:grid-cols-2"
          role="radiogroup"
          aria-label={copy.sectorGroupLabel}
        >
          {sectors.map((sector) => {
            const sectorCopy = copy.sectors[sector];
            return (
              <SectorCard
                key={sector}
                sector={sector}
                badge={sectorCopy.badge}
                title={sectorCopy.title}
                bullets={sectorCopy.bullets}
                selected={selectedSector === sector}
                selectedLabel={copy.selectedLabel}
                onSelect={selectSector}
              />
            );
          })}
        </div>

        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-5 border-t border-border pt-6 sm:flex-row">
          <p className="text-center text-sm text-muted sm:text-left">
            {copy.accountPrompt}{" "}
            <Link href="/progress" className="font-bold text-primary hover:text-primary-dark">
              {copy.login}
            </Link>
          </p>
          <button
            type="button"
            disabled={!selectedSector}
            onClick={continueOnboarding}
            className="min-h-12 w-full rounded-xl bg-primary px-7 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(91,92,246,0.22)] transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none sm:w-auto sm:min-w-40"
          >
            {selectedSector ? copy.continueActive : copy.continueInactive}
          </button>
        </div>
      </section>
    </OnboardingLayout>
  );
}

