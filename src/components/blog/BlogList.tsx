"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/types";
import { BlogCard } from "@/components/blog/BlogCard";

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [phase, setPhase] = useState<"all" | 1 | 2 | 3>("all");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesQuery =
        query.length === 0 ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));

      const matchesPhase = phase === "all" || post.phase === phase;

      return matchesQuery && matchesPhase;
    });
  }, [posts, query, phase]);

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 rounded-xl border border-white/10 bg-slate-900/70 p-4 sm:flex-row sm:items-center sm:justify-between">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by title, excerpt, or tag"
          aria-label="Search blog posts"
          className="w-full rounded-md border border-white/15 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-blue-400 sm:max-w-sm"
        />

        <div className="flex gap-2">
          {(["all", 1, 2, 3] as const).map((value) => (
            <button
              key={String(value)}
              type="button"
              onClick={() => setPhase(value)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                phase === value
                  ? "bg-blue-500/25 text-blue-200"
                  : "border border-white/15 bg-slate-900 text-slate-300 hover:border-blue-400/50"
              }`}
            >
              {value === "all" ? "All" : `Phase ${value}`}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <p className="rounded-xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-300">
          No posts match your current filters.
        </p>
      ) : null}
    </section>
  );
}
