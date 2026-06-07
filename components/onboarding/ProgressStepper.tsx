type ProgressStepperProps = {
  label: string;
  value: number;
};

export function ProgressStepper({ label, value }: ProgressStepperProps) {
  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-bold text-primary">{label}</span>
        <span className="text-xs font-semibold text-muted">{value}%</span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-soft-purple"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-label={label}
      >
        <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

