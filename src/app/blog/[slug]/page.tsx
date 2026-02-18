import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getContentBlogPosts } from "@/lib/content/blog";

export async function generateStaticParams() {
  const blogPosts = await getContentBlogPosts();
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const blogPosts = await getContentBlogPosts();
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: `${post.title} | USDM Coalition`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const blogPosts = await getContentBlogPosts();
  const { slug } = await params;
  const postIndex = blogPosts.findIndex((item) => item.slug === slug);
  const post = postIndex >= 0 ? blogPosts[postIndex] : undefined;

  if (!post) {
    notFound();
  }

  const previousPost = postIndex > 0 ? blogPosts[postIndex - 1] : undefined;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : undefined;

  const phaseColors: Record<number, string> = {
    1: "border-accent-blue/30 bg-accent-blue/10 text-accent-blue",
    2: "border-accent-gold/30 bg-accent-gold/10 text-accent-gold",
    3: "border-accent-green/30 bg-accent-green/10 text-accent-green",
  };
  const phaseBadge = phaseColors[post.phase] ?? phaseColors[1];

  return (
    <article className="mx-auto max-w-3xl space-y-8">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-xs text-(--text-muted) transition hover:text-foreground"
      >
        ← Back to DeFi Pulse
      </Link>

      {/* Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${phaseBadge}`}>
            Phase {post.phase}
          </span>
          <span className="text-xs text-(--text-muted)">{post.entity}</span>
        </div>
        <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">{post.title}</h1>
        <p className="text-sm text-(--text-secondary)">
          By {post.author} • {post.date}
        </p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-(--text-secondary)"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Divider */}
      <div className="h-px bg-white/8" />

      {/* Content */}
      <div className="prose prose-invert prose-headings:text-foreground prose-headings:font-bold prose-p:text-(--text-secondary) prose-p:leading-relaxed prose-a:text-accent-blue prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:rounded prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-accent-blue prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:rounded-xl prose-pre:border prose-pre:border-white/8 prose-pre:bg-black/40 prose-li:text-(--text-secondary) prose-blockquote:border-accent-blue/30 prose-blockquote:text-(--text-muted) prose-hr:border-white/8 prose-table:text-sm prose-th:text-foreground prose-td:text-(--text-secondary) max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/8" />

      {/* Post navigation */}
      <nav className="grid gap-4 sm:grid-cols-2" aria-label="Post navigation">
        {previousPost ? (
          <Link
            href={`/blog/${previousPost.slug}`}
            className="group rounded-xl border border-white/8 bg-white/2 p-4 transition hover:border-accent-blue/20 hover:bg-white/4"
          >
            <span className="text-[10px] font-medium uppercase tracking-wider text-(--text-muted)">Previous</span>
            <p className="mt-1 text-sm font-medium text-foreground group-hover:text-accent-blue">← {previousPost.title}</p>
          </Link>
        ) : (
          <div />
        )}
        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="group rounded-xl border border-white/8 bg-white/2 p-4 text-right transition hover:border-accent-blue/20 hover:bg-white/4"
          >
            <span className="text-[10px] font-medium uppercase tracking-wider text-(--text-muted)">Next</span>
            <p className="mt-1 text-sm font-medium text-foreground group-hover:text-accent-blue">{nextPost.title} →</p>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </article>
  );
}
