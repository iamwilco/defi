import type { Metadata } from "next";
import { contentOwnershipPolicies } from "@/lib/mockData";
import { getContentBlogPosts } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Admin Preview | USDM Coalition",
  description: "Protected content preview and ownership controls.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPage() {
  const posts = await getContentBlogPosts();

  return (
    <div className="space-y-8">
      <header>
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-red">Protected</p>
        <h1 className="mt-2 text-3xl font-bold text-foreground">Admin Content Preview</h1>
        <p className="mt-2 text-sm text-(--text-secondary)">
          This route is guarded by basic auth middleware when `ADMIN_BASIC_AUTH_ENABLED=true`.
        </p>
      </header>

      <section className="rounded-2xl border border-white/8 bg-white/2 p-5 backdrop-blur-sm">
        <h2 className="text-lg font-semibold text-foreground">Blog Content Queue</h2>
        <p className="mt-1 text-xs text-(--text-muted)">
          Source: `src/content/blog/*.md` parsed through `getContentBlogPosts()`.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-(--text-secondary)">
          {posts.map((post) => (
            <li key={post.slug} className="rounded-lg border border-white/6 bg-white/2 px-3 py-2">
              <p className="font-medium text-foreground">{post.title}</p>
              <p className="text-xs text-(--text-muted)">
                {post.entity} • {post.author} • {post.date} • Phase {post.phase}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-white/8 bg-white/2 p-5 backdrop-blur-sm">
        <h2 className="text-lg font-semibold text-foreground">Ownership and Removal Rights</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="min-w-full text-left text-xs text-(--text-secondary)">
            <thead className="text-(--text-muted)">
              <tr>
                <th className="px-2 py-2 font-medium">Entity</th>
                <th className="px-2 py-2 font-medium">Content Owner</th>
                <th className="px-2 py-2 font-medium">Rights</th>
                <th className="px-2 py-2 font-medium">Request Path</th>
              </tr>
            </thead>
            <tbody>
              {contentOwnershipPolicies.map((policy) => (
                <tr key={policy.id} className="border-t border-white/6">
                  <td className="px-2 py-2 text-foreground">{policy.entity}</td>
                  <td className="px-2 py-2">{policy.contentOwner}</td>
                  <td className="px-2 py-2">
                    {policy.removalRights === "entity_only" ? "Entity Only" : "Shared Governance"}
                  </td>
                  <td className="px-2 py-2">{policy.removalRequestPath}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
