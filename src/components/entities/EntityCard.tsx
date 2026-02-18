import Image from "next/image";
import type { CoalitionEntity } from "@/types";

export function EntityCard({ entity }: { entity: CoalitionEntity }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
      <div className="mb-3 flex items-center gap-3">
        <Image src={entity.logo} alt={`${entity.name} logo`} width={36} height={36} className="rounded-md" />
        <div>
          <h3 className="text-lg font-semibold text-slate-100">{entity.name}</h3>
          <p className="text-xs text-blue-300">{entity.role}</p>
        </div>
      </div>
      <p className="text-sm text-slate-300">{entity.description}</p>
      <a href={entity.website} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-blue-300 hover:text-blue-200">
        Visit website →
      </a>
    </article>
  );
}
