"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { QuestionCard } from "@/components/ui/QuestionCard";
import { calculateSampleResult, correctAnswers, sampleTest } from "@/lib/sampleData";
import { saveResult } from "@/lib/api";

export default function GeographyTestPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [answered, setAnswered] = useState(false);
  const question = sampleTest.questions[current];
  const selected = answers[question.id];
  const progress = Math.round(((current + 1) / sampleTest.questions.length) * 100);
  const score = sampleTest.questions.reduce(
    (total, item) => total + (answers[item.id] === correctAnswers[item.id] ? 1 : 0),
    0,
  );

  function choose(answerId: string) {
    if (answered) return;
    setAnswers((value) => ({ ...value, [question.id]: answerId }));
    setAnswered(true);
  }

  function next() {
    if (current < sampleTest.questions.length - 1) {
      setCurrent((value) => value + 1);
      setAnswered(false);
      return;
    }
    const result = calculateSampleResult(answers);
    saveResult(result);
    router.push("/results");
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <section className="space-y-5">
        <Card className="p-4">
          <div className="mb-3 flex items-center justify-between gap-3 text-sm font-bold">
            <span className="text-primary">Question {current + 1} of {sampleTest.questions.length}</span>
            <span className="text-muted">Estimated time: 12 min</span>
          </div>
          <ProgressBar value={progress} />
        </Card>
        <QuestionCard
          question={question}
          selected={selected}
          correctAnswer={correctAnswers[question.id]}
          answered={answered}
          onSelect={choose}
        />
        <div className="flex justify-end">
          <Button onClick={next} disabled={!selected}>
            {current < sampleTest.questions.length - 1 ? "Next question" : "Finish test"}
          </Button>
        </div>
      </section>

      <aside className="lg:sticky lg:top-28 lg:self-start">
        <Card>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">Live score</p>
          <div className="mt-4 text-5xl font-black text-ink">{score}/{sampleTest.questions.length}</div>
          <p className="mt-2 text-sm text-muted">You are improving. Answer carefully before moving on.</p>
          <div className="mt-6 space-y-4">
            <div>
              <p className="text-sm font-bold text-muted">Current topic</p>
              <p className="mt-1 font-black text-ink">{question.topic_name}</p>
            </div>
            <div>
              <p className="text-sm font-bold text-muted">What to do next</p>
              <p className="mt-1 text-sm leading-6 text-muted">Review before retaking the test if this topic feels uncertain.</p>
            </div>
          </div>
        </Card>
      </aside>
    </div>
  );
}
