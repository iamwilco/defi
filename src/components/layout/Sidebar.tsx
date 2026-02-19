"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Newspaper,
  BookOpen,
  Users,
  Gift,
  Radio,
  Wallet,
  Menu,
  X,
  ChevronLeft,
} from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

const NAV_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "/": LayoutDashboard,
  "/blog": Newspaper,
  "/guides": BookOpen,
  "/entities": Users,
  "/incentives": Gift,
  "/comms": Radio,
  "/wallet": Wallet,
};

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarWidth = collapsed ? "w-[68px]" : "w-60";

  return (
    <>
      {/* Mobile trigger — visible on small screens */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed left-3 top-3 z-50 rounded-lg border border-white/10 bg-black/80 p-2 text-foreground backdrop-blur-xl transition hover:bg-white/10 lg:hidden"
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-y-0 left-0 z-50 flex w-60 flex-col border-r border-white/6 bg-black/95 backdrop-blur-xl lg:hidden"
            >
              <SidebarContent
                pathname={pathname}
                collapsed={false}
                onNavigate={() => setMobileOpen(false)}
              />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="absolute right-3 top-3 rounded-lg p-1.5 text-(--text-muted) transition hover:bg-white/10 hover:text-foreground"
                aria-label="Close navigation"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop sidebar — reserve layout width + fixed panel */}
      <div className={`hidden shrink-0 lg:block ${sidebarWidth}`} aria-hidden="true" />
      <aside
        className={`fixed inset-y-0 left-0 z-40 hidden border-r border-white/6 bg-black/40 backdrop-blur-xl transition-all duration-300 lg:flex lg:flex-col ${sidebarWidth}`}
      >
        <SidebarContent pathname={pathname} collapsed={collapsed} />
        <button
          type="button"
          onClick={() => setCollapsed((prev) => !prev)}
          className="absolute -right-3 top-6 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-black/80 text-(--text-muted) transition hover:bg-white/10 hover:text-foreground"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ChevronLeft className={`h-3 w-3 transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`} />
        </button>
      </aside>
    </>
  );
}

function SidebarContent({
  pathname,
  collapsed,
  onNavigate,
}: {
  pathname: string;
  collapsed: boolean;
  onNavigate?: () => void;
}) {
  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className={`flex items-center border-b border-white/6 px-4 py-4 ${collapsed ? "justify-center" : "gap-2.5"}`}>
        <Link href="/" className="flex items-center gap-2.5" onClick={onNavigate}>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-blue/15 text-accent-blue">
            <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12h8M12 8v8" />
            </svg>
          </span>
          {!collapsed && (
            <span className="text-sm font-bold tracking-wide text-foreground">
              DeFi <span className="text-accent-blue">Coalition</span>
            </span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-2 py-4" aria-label="Primary">
        {NAV_ITEMS.map((item) => {
          const Icon = NAV_ICONS[item.href] ?? LayoutDashboard;
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-accent-blue/10 text-accent-blue"
                  : "text-(--text-muted) hover:bg-white/5 hover:text-foreground"
              } ${collapsed ? "justify-center" : ""}`}
            >
              <Icon className={`h-[18px] w-[18px] shrink-0 ${isActive ? "text-accent-blue" : ""}`} />
              {!collapsed && <span>{item.label}</span>}
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-accent-blue"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              {collapsed && (
                <span className="pointer-events-none absolute left-full ml-2 hidden rounded-lg border border-white/10 bg-black/90 px-2.5 py-1 text-xs text-foreground shadow-lg backdrop-blur-xl group-hover:block">
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className={`border-t border-white/6 p-3 ${collapsed ? "px-2" : ""}`}>
        {!collapsed && (
          <div className="rounded-xl border border-white/6 bg-white/2 p-2.5">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse-glow" />
              <span className="text-[10px] font-medium uppercase tracking-wider text-(--text-muted)">Cardano</span>
            </div>
            <p className="mt-1 text-[10px] text-(--text-secondary)">Mainnet — synced</p>
          </div>
        )}
        {collapsed && (
          <div className="flex justify-center" title="Cardano mainnet — synced">
            <span className="h-2 w-2 rounded-full bg-accent-green animate-pulse-glow" />
          </div>
        )}
      </div>
    </div>
  );
}
