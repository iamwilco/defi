"use client";

import { useMemo, useState } from "react";
import { commsFeed } from "@/lib/mockData";
import { MediaEmbed } from "@/components/comms/MediaEmbed";

export function CommsFeed() {
  const [kind, setKind] = useState<"all" | "video" | "x_space" | "article">("all");

  const filtered = useMemo(() => {
    if (kind === "all") {
      return commsFeed;
    }
    return commsFeed.filter((item) => item.kind === kind);
  }, [kind]);

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
          <MediaEmbed key={item.id} title={item.title} description={`${item.description} (${item.date})`} href={item.href} />
        ))}
      </div>
    </section>
  );
}
