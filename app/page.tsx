import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";

const statCards = [
  ["Overall Progress", "62%", "Keep going, you're improving!"],
  ["Tests Completed", "4", "Keep practicing"],
  ["Average Score", "68%", "You're doing great"],
  ["Weak Topics", "2", "Focus on them first"],
];

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-soft md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,#EEF0FF,transparent_32%),radial-gradient(circle_at_30%_100%,#EEF0FF,transparent_26%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <h1 className="text-6xl font-black leading-none tracking-tight text-ink md:text-7xl">DİM AI</h1>
            <p className="mt-3 text-3xl font-black text-slate-500">Geography</p>
            <p className="mt-6 text-xl font-bold text-ink">Prepare smarter for DİM exams.</p>
            <p className="mt-3 max-w-xl leading-7 text-muted">
              Take tests, find weak topics, review short summaries, and improve your score step by step.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/geography-test">Start diagnostic test</Button>
              <Button href="/weak-topics" variant="secondary">View weak topics</Button>
            </div>
          </div>

          <div className="relative min-h-[320px]">
            <div className="absolute left-1/2 top-4 grid h-48 w-48 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-blue-100 to-soft-purple text-8xl shadow-glow">
              🌍
            </div>
            <div className="absolute bottom-24 left-10 h-20 w-28 rounded-t-full bg-soft-purple opacity-80" />
            <div className="absolute bottom-12 right-8 h-20 w-32 rounded-t-full bg-soft-purple opacity-80" />
            <div className="absolute bottom-12 left-1/2 h-8 w-48 -translate-x-1/2 rounded-xl bg-primary/20" />
            <div className="absolute bottom-0 left-1/2 h-5 w-64 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-primary-dark shadow-glow" />
            <div className="absolute bottom-8 left-1/2 h-10 w-56 -translate-x-1/2 rounded-xl border border-orange-200 bg-white shadow-soft" />
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {statCards.map(([label, value, detail]) => (
          <Card key={label} className="p-6">
            <p className="text-sm font-bold text-muted">{label}</p>
            <p className="mt-5 text-4xl font-black tracking-tight text-ink">{value}</p>
            {label === "Overall Progress" ? <ProgressBar value={62} className="mt-4 h-2" /> : null}
            <p className="mt-4 text-sm font-medium text-muted">{detail}</p>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
        <Card className="p-6">
          <h2 className="text-xl font-black text-ink">Your Weak Topics</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              ["Climate and Weather", "40%", "High Priority", "This topic often appears in exam."],
              ["Natural Zones", "55%", "Medium Priority", "Review to improve your score."],
            ].map(([topic, score, priority, note]) => (
              <div key={topic} className="rounded-2xl border border-border p-5">
                <div className="flex items-center gap-5">
                  <div className="grid h-20 w-20 place-items-center rounded-full border-4 border-red-100 text-lg font-black text-error">
                    {score}
                  </div>
                  <div>
                    <h3 className="font-black text-ink">{topic}</h3>
                    <span className="mt-2 inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-black text-error">
                      {priority}
                    </span>
                    <p className="mt-3 text-sm leading-6 text-muted">{note}</p>
                  </div>
                </div>
                <Button href="/review/climate" className="mt-5 w-full">Review now</Button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-black text-ink">Recommended for you</h2>
          <p className="mt-8 text-lg font-black text-ink">Review Climate and Weather</p>
          <p className="mt-3 leading-7 text-muted">Improve this topic and boost your exam score.</p>
          <Button href="/review/climate" className="mt-8 w-full">Start reviewing</Button>
        </Card>
      </section>
    </div>
  );
}
