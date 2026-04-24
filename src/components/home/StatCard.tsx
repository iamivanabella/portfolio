type StatCardProps = {
  title: string;
  value: string;
  trend: string;
};

export function StatCard({ title, value, trend }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-line bg-white p-4 shadow-[0_8px_24px_rgba(15,33,79,0.04)]">
      <p className="text-[10px] font-semibold text-muted">{title}</p>
      <p className="mt-2 text-lg font-bold text-ink">{value}</p>
      <p className="mt-1 text-[10px] font-semibold text-emerald-500">{trend}</p>
    </div>
  );
}
