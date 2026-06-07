"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { ScoreCircle } from "@/components/ui/ScoreCircle";
import { StatCard } from "@/components/ui/StatCard";
import { loadResult, type TestResult } from "@/lib/api";
import { sampleResult, scoreTone } from "@/lib/sampleData";

export default function ResultsPage() {
  const [result, setResult] = useState<TestResult>(sampleResult);

  useEffect(() => {
    setResult(loadResult() ?? sampleResult);
  }, []);

  return (
    <div className="space-y-6">
      <section className="grid gap-6 lg:grid-cols-[360px_1fr]">
        <Card className="grid place-items-center p-8 text-center">
          <ScoreCircle value={result.accuracy_percent} label="Score" />
          <h1 className="mt-6 text-3xl font-black text-ink">Diagnostic results</h1>
          <p className="mt-2 text-muted">You are improving. Focus on weak topics before retaking.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/weak-topics">Review weak topics</Button>
            <Button href="/geography-test" variant="secondary">Retake test</Button>
          </div>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          <StatCard label="Correct answers" value={`${result.score}`} detail={`Out of ${result.total}`} />
          <StatCard label="Incorrect answers" value={`${result.total - result.score}`} detail="Review explanations" />
          <StatCard label="Time spent" value="09:40" detail="Good exam pace" />
        </div>
      </section>

      <Card className="p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">Performance by topic</p>
            <h2 className="mt-2 text-2xl font-black text-ink">What should you improve?</h2>
          </div>
          <p className="text-sm font-semibold text-muted">Green strong, yellow medium, red weak</p>
        </div>
        <div className="mt-6 grid gap-4">
          {result.breakdown.map((topic) => {
            const tone = scoreTone(topic.accuracy_percent);
            const barTone = tone === "strong" ? "success" : tone === "medium" ? "warning" : "error";
            return (
              <div key={topic.topic_id} className="rounded-2xl border border-border p-4">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-black text-ink">{topic.topic_name}</h3>
                    <p className="text-sm text-muted">{topic.correct}/{topic.total} correct</p>
                  </div>
                  <span className="text-2xl font-black text-ink">{topic.accuracy_percent}%</span>
                </div>
                <ProgressBar value={topic.accuracy_percent} tone={barTone} />
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
