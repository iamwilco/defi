import Link from "next/link";
import type { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
      <p className="text-xs uppercase tracking-wide text-blue-300">{post.entity}</p>
      <h3 className="mt-1 text-xl font-semibold text-slate-100">{post.title}</h3>
      <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
      <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
        <span>{post.date}</span>
        <span>Phase {post.phase}</span>
      </div>
      <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
        Read post →
      </Link>
    </article>
  );
}
