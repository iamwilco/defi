"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface DashboardCardProps {
  title: string;
  value?: string;
  children?: ReactNode;
  accent?: "blue" | "gold" | "green" | "default";
}

export function DashboardCard({ title, value, children, accent = "default" }: DashboardCardProps) {
  const borderAccents = {
    blue: "hover:border-accent-blue/30",
    gold: "hover:border-accent-gold/30",
    green: "hover:border-accent-green/30",
    default: "hover:border-white/15",
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`group rounded-2xl border border-white/8 bg-white/2 p-5 backdrop-blur-sm transition-all duration-300 ${borderAccents[accent]} hover:bg-white/4`}
    >
      <h3 className="text-xs font-semibold uppercase tracking-wider text-(--text-muted)">{title}</h3>
      {value ? <p className="mt-2 text-2xl font-bold text-foreground">{value}</p> : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </motion.section>
  );
}
