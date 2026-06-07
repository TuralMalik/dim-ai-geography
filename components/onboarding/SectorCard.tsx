import type { EducationSector } from "@/lib/onboardingI18n";

type SectorCardProps = {
  sector: EducationSector;
  badge: string;
  title: string;
  bullets: readonly string[];
  selected: boolean;
  selectedLabel: string;
  onSelect: (sector: EducationSector) => void;
};

export function SectorCard({
  sector,
  badge,
  title,
  bullets,
  selected,
  selectedLabel,
  onSelect,
}: SectorCardProps) {
  const isAzerbaijani = sector === "az_sector";

  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={() => onSelect(sector)}
      className={`relative min-h-64 w-full rounded-2xl border p-6 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 ${
        selected
          ? "border-primary bg-soft-purple shadow-[0_18px_45px_rgba(91,92,246,0.16)]"
          : "border-border bg-white shadow-[0_10px_30px_rgba(17,24,39,0.05)] hover:border-primary/50 hover:shadow-soft"
      }`}
    >
      <span
        className={`absolute right-5 top-5 grid h-7 w-7 place-items-center rounded-full border-2 text-sm font-black transition ${
          selected ? "border-primary bg-primary text-white" : "border-border bg-white text-transparent"
        }`}
        aria-hidden="true"
      >
        ✓
      </span>

      <span
        className={`grid h-16 w-16 place-items-center rounded-full border-4 border-white text-sm font-black text-white shadow-md ${
          isAzerbaijani
            ? "bg-[linear-gradient(180deg,#2D9CDB_0_33%,#EF3340_33%_66%,#27AE60_66%)]"
            : "bg-[linear-gradient(180deg,#FFFFFF_0_33%,#2864DC_33%_66%,#EF4444_66%)] text-ink"
        }`}
      >
        {badge}
      </span>

      <h2 className="mt-6 pr-10 text-xl font-black leading-7 text-ink">{title}</h2>
      <ul className="mt-5 space-y-3">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm font-medium leading-6 text-muted">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            {bullet}
          </li>
        ))}
      </ul>
      <span className="sr-only">{selected ? selectedLabel : ""}</span>
    </button>
  );
}

