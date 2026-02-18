"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold tracking-wide text-slate-100">
          USDM Coalition Dashboard
        </Link>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-blue-300"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <Menu className="h-5 w-5 text-slate-300" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}
