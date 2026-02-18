"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="rounded-2xl border border-red-400/30 bg-red-500/10 p-6 text-red-100">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <p className="mt-2 text-sm text-red-200">An unexpected error occurred while rendering this page.</p>
      <button
        type="button"
        onClick={reset}
        className="mt-4 rounded-md border border-red-300/60 bg-red-400/20 px-4 py-2 text-sm font-medium"
      >
        Try again
      </button>
    </div>
  );
}
