"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { useAppStore } from "@/store/useAppStore";

export function ThemeToggle() {
  const darkMode = useAppStore((state) => state.darkMode);
  const toggleDarkMode = useAppStore((state) => state.toggleDarkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-label="Toggle color theme"
      className="rounded-md border border-border bg-card p-2 text-foreground transition hover:border-blue-400"
    >
      {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
