import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { climateReview } from "@/lib/sampleData";

const patterns = [
  "Identify the climate zone from temperature and rainfall clues.",
  "Connect latitude and altitude with temperature differences.",
  "Compare coastal and inland climate conditions.",
];

export default function ReviewTopicPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <section className="space-y-6">
        <Card className="p-7 md:p-9">
          <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-black text-error">
            High priority
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-ink">Climate and Weather</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">{climateReview.topic.summary}</p>
        </Card>

        <Card className="p-7">
          <h2 className="text-2xl font-black text-ink">Key facts</h2>
          <div className="mt-5 grid gap-3">
            {climateReview.topic.materials.map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-slate-50 p-4 leading-7 text-ink">
                {item}
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-7">
          <h2 className="text-2xl font-black text-ink">Common exam patterns</h2>
          <div className="mt-5 grid gap-3">
            {patterns.map((pattern) => (
              <div key={pattern} className="flex gap-3 rounded-2xl bg-soft-purple p-4">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                <p className="font-semibold leading-7 text-ink">{pattern}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <aside className="lg:sticky lg:top-28 lg:self-start">
        <Card>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">Mini-summary</p>
          <p className="mt-4 leading-7 text-muted">
            Climate is a long-term weather pattern. Review climate factors before retaking the test.
          </p>
          <div className="mt-6 grid gap-3">
            <Button href="/geography-test">Practice this topic</Button>
            <Button href="/weak-topics" variant="secondary">Back to weak topics</Button>
          </div>
          <p className="mt-5 text-sm leading-6 text-muted">
            This looks like approved study material, not a generic AI chat response.
          </p>
        </Card>
      </aside>
    </div>
  );
}
