import Link from "next/link";

export default function NotFound() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-8 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">404</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-100">Page not found</h1>
      <p className="mt-3 text-sm text-slate-300">The requested page does not exist or has moved.</p>
      <Link
        href="/"
        className="mt-5 inline-block rounded-md border border-blue-400/40 bg-blue-500/15 px-4 py-2 text-sm font-medium text-blue-200"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
