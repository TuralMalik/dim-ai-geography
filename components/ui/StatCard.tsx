import { Card } from "@/components/ui/Card";

export function StatCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-soft-purple" />
      <p className="text-sm font-medium text-muted">{label}</p>
      <p className="mt-3 text-3xl font-black tracking-tight text-ink">{value}</p>
      <p className="mt-2 text-sm text-muted">{detail}</p>
    </Card>
  );
}
