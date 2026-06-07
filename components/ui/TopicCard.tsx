import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { scoreTone } from "@/lib/sampleData";

export function TopicCard({
  name,
  score,
  priority,
  reason,
}: {
  name: string;
  score: number;
  priority: string;
  reason: string;
}) {
  const tone = scoreTone(score);
  const barTone = tone === "strong" ? "success" : tone === "medium" ? "warning" : "error";
  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-ink">{name}</h3>
          <p className="mt-1 text-sm leading-6 text-muted">{reason}</p>
        </div>
        <span className="rounded-full bg-soft-purple px-3 py-1 text-xs font-bold text-primary">
          {priority}
        </span>
      </div>
      <div>
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-semibold text-muted">Score</span>
          <span className="font-black text-ink">{score}%</span>
        </div>
        <ProgressBar value={score} tone={barTone} />
      </div>
      <div className="mt-auto flex flex-wrap gap-2">
        <Button href="/review/climate" className="flex-1">Review topic</Button>
        <Button href="/geography-test" variant="secondary" className="flex-1">Practice questions</Button>
      </div>
    </Card>
  );
}
