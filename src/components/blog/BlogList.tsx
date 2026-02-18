import { blogPosts } from "@/lib/mockData";
import { BlogCard } from "@/components/blog/BlogCard";

export function BlogList() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {blogPosts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
