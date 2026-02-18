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

  return (
    <article className="space-y-6">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-wide text-blue-300">{post.entity}</p>
        <h1 className="text-3xl font-bold text-slate-50">{post.title}</h1>
        <p className="text-sm text-slate-400">
          {post.author} • {post.date}
        </p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-blue-400/40 bg-blue-500/10 px-2 py-1 text-xs text-blue-200"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-invert max-w-3xl">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>

      <nav className="grid gap-3 rounded-xl border border-white/10 bg-slate-900/70 p-4 sm:grid-cols-2" aria-label="Post navigation">
        {previousPost ? (
          <Link href={`/blog/${previousPost.slug}`} className="text-sm text-blue-300 hover:text-blue-200">
            ← {previousPost.title}
          </Link>
        ) : (
          <span className="text-sm text-slate-500">No previous post</span>
        )}

        {nextPost ? (
          <Link href={`/blog/${nextPost.slug}`} className="text-right text-sm text-blue-300 hover:text-blue-200">
            {nextPost.title} →
          </Link>
        ) : (
          <span className="text-right text-sm text-slate-500">No next post</span>
        )}
      </nav>
    </article>
  );
}
