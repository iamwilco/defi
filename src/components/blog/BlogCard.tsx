"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/types";

const ENTITY_LOGOS: Record<string, string> = {
  NBX: "/logos/nbx-logo.png",
  Fluid: "/logos/fluid-logo.png",
  "Moneta/W3I": "/logos/moneta-logo.png",
  "Moneta / W3I": "/logos/moneta-logo.png",
};

const phaseColors = {
  1: "border-accent-blue/20 hover:border-accent-blue/40",
  2: "border-accent-gold/20 hover:border-accent-gold/40",
  3: "border-accent-green/20 hover:border-accent-green/40",
};

const phaseBadgeColors = {
  1: "bg-accent-blue/15 text-accent-blue",
  2: "bg-accent-gold/15 text-accent-gold",
  3: "bg-accent-green/15 text-accent-green",
};

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.article
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group rounded-2xl border bg-white/2 p-5 backdrop-blur-sm transition-all duration-300 ${phaseColors[post.phase]}`}
    >
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-blue">
          {ENTITY_LOGOS[post.entity] ? (
            <Image src={ENTITY_LOGOS[post.entity]} alt={`${post.entity} logo`} width={14} height={14} className="rounded-sm" />
          ) : null}
          <span>{post.entity}</span>
        </p>
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${phaseBadgeColors[post.phase]}`}>
          Phase {post.phase}
        </span>
      </div>
      <h3 className="mt-2 text-lg font-bold text-foreground group-hover:text-accent-blue transition-colors">{post.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">{post.excerpt}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-(--text-muted)">{post.date}</span>
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-medium text-accent-blue transition hover:text-accent-blue/80"
        >
          Read post →
        </Link>
      </div>
    </motion.article>
  );
}
