import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-slate-900">
      <h1 className="font-bold text-cyan-400">GrowFast</h1>
      <Link href="/dashboard" className="text-sm text-white">
        Dashboard
      </Link>
    </div>
  );
}
