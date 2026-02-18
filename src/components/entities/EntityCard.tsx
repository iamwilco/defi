import Image from "next/image";
import type { CoalitionEntity } from "@/types";

export function EntityCard({ entity }: { entity: CoalitionEntity }) {
  return (
    <article className="rounded-2xl border border-white/8 bg-white/2 p-5 backdrop-blur-sm">
      <div className="mb-3 flex items-center gap-3">
        <Image src={entity.logo} alt={`${entity.name} logo`} width={36} height={36} className="rounded-md" />
        <div>
          <h3 className="text-lg font-semibold text-foreground">{entity.name}</h3>
          <p className="text-xs text-accent-blue">{entity.role}</p>
        </div>
      </div>
      <p className="text-sm text-(--text-secondary)">{entity.description}</p>
      {entity.website && (
        <a href={entity.website} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-accent-blue hover:underline">
          Visit website →
        </a>
      )}
    </article>
  );
}
