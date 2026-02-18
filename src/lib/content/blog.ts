import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import type { BlogPost } from "@/types";
import { blogPosts as fallbackPosts } from "@/lib/mockData";

const BLOG_CONTENT_DIR = path.join(process.cwd(), "src/content/blog");

type FrontMatter = {
  slug?: string;
  title?: string;
  excerpt?: string;
  author?: string;
  entity?: string;
  date?: string;
  tags?: string;
  phase?: string;
};

function parseFrontMatter(markdown: string) {
  const trimmed = markdown.trimStart();

  if (!trimmed.startsWith("---")) {
    return { data: {} as FrontMatter, content: markdown };
  }

  const end = trimmed.indexOf("\n---", 3);
  if (end === -1) {
    return { data: {} as FrontMatter, content: markdown };
  }

  const rawFrontMatter = trimmed.slice(3, end).trim();
  const content = trimmed.slice(end + 4).trim();

  const data = rawFrontMatter.split("\n").reduce<FrontMatter>((acc, line) => {
    const separator = line.indexOf(":");
    if (separator <= 0) {
      return acc;
    }

    const key = line.slice(0, separator).trim() as keyof FrontMatter;
    const value = line.slice(separator + 1).trim();
    acc[key] = value;
    return acc;
  }, {});

  return { data, content };
}

function toBlogPost(data: FrontMatter, content: string) {
  const phase = Number(data.phase);
  if (!data.slug || !data.title || !data.excerpt || !data.author || !data.entity || !data.date) {
    return null;
  }

  if (phase !== 1 && phase !== 2 && phase !== 3) {
    return null;
  }

  const tags = (data.tags ?? "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  return {
    slug: data.slug,
    title: data.title,
    excerpt: data.excerpt,
    author: data.author,
    entity: data.entity,
    date: data.date,
    tags,
    phase,
    content,
  } satisfies BlogPost;
}

export async function getContentBlogPosts(): Promise<BlogPost[]> {
  try {
    const entries = await readdir(BLOG_CONTENT_DIR, { withFileTypes: true });

    const posts = await Promise.all(
      entries
        .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
        .map(async (entry) => {
          const filePath = path.join(BLOG_CONTENT_DIR, entry.name);
          const markdown = await readFile(filePath, "utf8");
          const { data, content } = parseFrontMatter(markdown);
          return toBlogPost(data, content);
        }),
    );

    const validPosts = posts.filter((post): post is BlogPost => post !== null);
    if (validPosts.length === 0) {
      return fallbackPosts;
    }

    return validPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
  } catch {
    return fallbackPosts;
  }
}

export async function getContentBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getContentBlogPosts();
  return posts.find((post) => post.slug === slug);
}
