import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      darkMode: true,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    {
      name: "usdm-theme-preference",
    },
  ),
);
