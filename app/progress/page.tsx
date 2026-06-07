import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatCard } from "@/components/ui/StatCard";
import { topicPerformance } from "@/lib/sampleData";

const history = [
  ["Diagnostic test", "62%", "Today"],
  ["Climate practice", "70%", "Yesterday"],
  ["Map skills quiz", "82%", "2 days ago"],
];

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">Progress dashboard</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-ink">Track your improvement</h1>
        <p className="mt-3 max-w-2xl text-muted">
          See how you are performing and decide what to improve before the next retest.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Overall progress" value="62%" detail="You are improving" />
        <StatCard label="Tests completed" value="4" detail="2 this week" />
        <StatCard label="Average score" value="68%" detail="+6% trend" />
        <StatCard label="Weak topics" value="3" detail="Review first" />
      </div>

      <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <Card>
          <h2 className="text-2xl font-black text-ink">Topic performance</h2>
          <div className="mt-5 grid gap-4">
            {topicPerformance.map((topic) => (
              <div key={topic.id}>
                <div className="mb-2 flex items-center justify-between text-sm font-bold">
                  <span>{topic.name}</span>
                  <span>{topic.score}%</span>
                </div>
                <ProgressBar value={topic.score} tone={topic.score >= 75 ? "success" : topic.score >= 55 ? "warning" : "error"} />
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-black text-ink">Recent test history</h2>
          <div className="mt-5 grid gap-3">
            {history.map(([name, score, date]) => (
              <div key={name} className="rounded-2xl border border-border p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-black text-ink">{name}</p>
                    <p className="text-sm text-muted">{date}</p>
                  </div>
                  <span className="text-xl font-black text-primary">{score}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}
