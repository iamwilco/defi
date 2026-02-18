"use client";

import { create } from "zustand";

export type WalletProvider = "eternl" | "nami" | "lace";

interface WalletState {
  connected: boolean;
  address: string | null;
  provider: WalletProvider | null;
  balance: { ada: number; usdm: number } | null;
  connecting: boolean;
  connect: (provider: WalletProvider) => Promise<void>;
  disconnect: () => void;
}

export const useWallet = create<WalletState>((set) => ({
  connected: false,
  address: null,
  provider: null,
  balance: null,
  connecting: false,

  connect: async (provider: WalletProvider) => {
    set({ connecting: true });

    // TODO: Replace with real Lucid.js / CIP-30 wallet connection
    // Simulated connection delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const mockAddress = `addr1q${provider}_mock_${Math.random().toString(36).slice(2, 10)}`;

    set({
      connected: true,
      address: mockAddress,
      provider,
      balance: { ada: 2450.5, usdm: 1200.0 },
      connecting: false,
    });
  },

  disconnect: () => {
    set({
      connected: false,
      address: null,
      provider: null,
      balance: null,
      connecting: false,
    });
  },
}));

export function shortenAddress(address: string, chars = 6): string {
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}
