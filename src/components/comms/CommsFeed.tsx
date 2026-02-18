"use client";

import { useMemo, useState } from "react";
import type { CommsFeedItem } from "@/types";
import { MediaEmbed } from "@/components/comms/MediaEmbed";

export function CommsFeed({ items }: { items: CommsFeedItem[] }) {
  const [kind, setKind] = useState<"all" | "video" | "x_space" | "article">("all");

  const filtered = useMemo(() => {
    if (kind === "all") {
      return items;
    }
    return items.filter((item) => item.kind === kind);
  }, [items, kind]);

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap gap-2 rounded-xl border border-white/10 bg-slate-900/70 p-3">
        {([
          ["all", "All"],
          ["video", "Video"],
          ["x_space", "X Spaces"],
          ["article", "Articles"],
        ] as const).map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setKind(value)}
            aria-pressed={kind === value}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
              kind === value
                ? "bg-blue-500/25 text-blue-200"
                : "border border-white/15 bg-slate-900 text-slate-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((item) => (
          <MediaEmbed
            key={item.id}
            title={item.title}
            description={item.description}
            href={item.href}
            kind={item.kind}
            date={item.date}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-300">
          No communication entries match the current filter.
        </p>
      ) : null}
    </section>
  );
}
