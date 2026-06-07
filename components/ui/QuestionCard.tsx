import { Card } from "@/components/ui/Card";
import type { TestQuestion } from "@/lib/api";

export function QuestionCard({
  question,
  selected,
  correctAnswer,
  answered,
  onSelect,
}: {
  question: TestQuestion;
  selected?: string;
  correctAnswer?: string;
  answered: boolean;
  onSelect: (answerId: string) => void;
}) {
  return (
    <Card className="p-6 md:p-8">
      <p className="text-sm font-bold uppercase tracking-wide text-primary">{question.topic_name}</p>
      <h1 className="mt-3 text-2xl font-black leading-tight tracking-tight text-ink md:text-3xl">
        {question.question}
      </h1>
      <div className="mt-6 grid gap-3">
        {question.options.map((option) => {
          const isSelected = selected === option.id;
          const isCorrect = answered && option.id === correctAnswer;
          const isWrong = answered && isSelected && option.id !== correctAnswer;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option.id)}
              className={`flex items-center gap-3 rounded-2xl border p-4 text-left text-sm font-semibold transition ${
                isCorrect
                  ? "border-success bg-emerald-50 text-emerald-800"
                  : isWrong
                    ? "border-error bg-red-50 text-red-800"
                    : isSelected
                      ? "border-primary bg-soft-purple text-primary"
                      : "border-border bg-white text-ink hover:border-primary hover:bg-soft-purple"
              }`}
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-xs font-black shadow-sm">
                {option.id.toUpperCase()}
              </span>
              {option.text}
            </button>
          );
        })}
      </div>
      {answered ? (
        <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-muted">
          {question.explanation}
        </div>
      ) : null}
    </Card>
  );
}
