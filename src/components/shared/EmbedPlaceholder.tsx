import { PlayCircle } from "lucide-react";

interface EmbedPlaceholderProps {
  title: string;
  label: string;
  type?: "video" | "diagram" | "checklist";
  href?: string;
}

function typeLabel(type: EmbedPlaceholderProps["type"]) {
  if (type === "diagram") {
    return "Diagram";
  }
  if (type === "checklist") {
    return "Checklist";
  }
  return "Video";
}

export function EmbedPlaceholder({ title, label, type = "video", href = "#" }: EmbedPlaceholderProps) {
  return (
    <div className="rounded-xl border border-dashed border-blue-400/30 bg-blue-500/5 p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] uppercase tracking-wide text-blue-200">{typeLabel(type)} Placeholder</span>
        <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-300 hover:text-blue-200">
          <PlayCircle className="h-3.5 w-3.5" />
          Watch
        </a>
      </div>
      <p className="mt-2 text-sm font-medium text-[color:var(--text-primary)]">{title}</p>
      <p className="mt-1 text-xs text-[color:var(--text-secondary)]">{label}</p>
    </div>
  );
}
