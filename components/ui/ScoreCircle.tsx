export function ScoreCircle({ value, label }: { value: number; label: string }) {
  const degrees = Math.round((value / 100) * 360);
  return (
    <div
      className="grid h-44 w-44 place-items-center rounded-full"
      style={{
        background: `conic-gradient(#5B5CF6 ${degrees}deg, #EEF0FF 0deg)`,
      }}
    >
      <div className="grid h-36 w-36 place-items-center rounded-full bg-white text-center shadow-inner">
        <div>
          <div className="text-4xl font-black tracking-tight text-ink">{value}%</div>
          <div className="mt-1 text-sm font-medium text-muted">{label}</div>
        </div>
      </div>
    </div>
  );
}
