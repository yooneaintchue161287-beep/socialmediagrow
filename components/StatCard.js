export default function StatCard({ title, value }) {
  return (
    <div className="bg-slate-800 rounded-xl p-4 min-w-[140px]">
      <p className="text-sm text-gray-400">{title}</p>
      <p className="text-xl font-bold text-cyan-400">{value}</p>
    </div>
  );
}
