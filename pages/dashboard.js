import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import { stats, aiTips } from "../utils/mockData";

export default function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-3">Your Growth</h2>

        <div className="flex gap-3 overflow-x-auto mb-6">
          {stats.map((s, i) => (
            <StatCard key={i} title={s.title} value={s.value} />
          ))}
        </div>

        <h3 className="font-semibold mb-2">AI Tips</h3>

        <div className="space-y-2">
          {aiTips.map((tip, i) => (
            <div
              key={i}
              className="bg-slate-800 p-3 rounded-lg text-sm"
            >
              🤖 {tip}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
