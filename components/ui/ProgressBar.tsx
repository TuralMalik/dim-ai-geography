export function ProgressBar({
  value,
  tone = "primary",
  className = "",
}: {
  value: number;
  tone?: "primary" | "success" | "warning" | "error";
  className?: string;
}) {
  const colors = {
    primary: "from-primary to-primary-dark",
    success: "from-success to-emerald-500",
    warning: "from-warning to-amber-500",
    error: "from-error to-rose-500",
  };
  return (
    <div className={`h-3 overflow-hidden rounded-full bg-slate-100 ${className}`}>
      <div
        className={`h-full rounded-full bg-gradient-to-r ${colors[tone]} transition-all`}
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}
