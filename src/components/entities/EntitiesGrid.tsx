"use client";

import { useMemo, useState } from "react";
import type { CoalitionEntity } from "@/types";
import { EntityCard } from "@/components/entities/EntityCard";

export function EntitiesGrid({ entities }: { entities: CoalitionEntity[] }) {
  const [query, setQuery] = useState("");
  const [role, setRole] = useState("all");

  const roles = useMemo(() => ["all", ...new Set(entities.map((entity) => entity.role))], [entities]);

  const filtered = useMemo(() => {
    return entities.filter((entity) => {
      const matchQuery =
        query.length === 0 ||
        entity.name.toLowerCase().includes(query.toLowerCase()) ||
        entity.description.toLowerCase().includes(query.toLowerCase());
      const matchRole = role === "all" || entity.role === role;
      return matchQuery && matchRole;
    });
  }, [entities, query, role]);

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 rounded-xl border border-white/10 bg-slate-900/70 p-4 sm:flex-row sm:items-center sm:justify-between">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search entities"
          aria-label="Search coalition entities"
          className="w-full rounded-md border border-white/15 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-blue-400 sm:max-w-sm"
        />

        <select
          value={role}
          onChange={(event) => setRole(event.target.value)}
          aria-label="Filter entities by role"
          className="rounded-md border border-white/15 bg-slate-950 px-3 py-2 text-sm text-slate-100"
        >
          {roles.map((item) => (
            <option key={item} value={item}>
              {item === "all" ? "All roles" : item}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((entity) => (
          <EntityCard key={entity.id} entity={entity} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-300">
          No entities match your current filters.
        </p>
      ) : null}
    </section>
  );
}
