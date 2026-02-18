interface MediaEmbedProps {
  title: string;
  description: string;
  href: string;
}

export function MediaEmbed({ title, description, href }: MediaEmbedProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
      <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
      <a href={href} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-blue-300 hover:text-blue-200">
        Open link →
      </a>
    </article>
  );
}
