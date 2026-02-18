interface MediaEmbedProps {
  title: string;
  description: string;
  href: string;
  kind?: "video" | "x_space" | "article";
  date?: string;
}

export function MediaEmbed({ title, description, href, kind = "video", date }: MediaEmbedProps) {
  const kindLabel = kind === "x_space" ? "X Space" : kind === "article" ? "Article" : "Video";

  return (
    <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
      <div className="mb-3 aspect-video rounded-lg border border-dashed border-blue-400/30 bg-blue-500/5 p-3">
        <p className="text-xs uppercase tracking-wide text-blue-200">Embed Placeholder</p>
        <p className="mt-1 text-sm text-slate-300">{kindLabel} preview frame</p>
      </div>

      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-blue-400/40 bg-blue-500/10 px-2 py-1 text-[11px] font-medium text-blue-200">
          {kindLabel}
        </span>
        {date ? <span className="text-xs text-slate-400">{date}</span> : null}
      </div>

      <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
      <a href={href} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-blue-300 hover:text-blue-200">
        Open link →
      </a>
    </article>
  );
}
