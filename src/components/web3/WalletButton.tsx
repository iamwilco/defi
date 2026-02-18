"use client";

import { useState } from "react";
import { Wallet, ChevronDown, LogOut, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useWallet, shortenAddress, type WalletProvider } from "@/web3/useWallet";

const wallets: { id: WalletProvider; label: string; color: string }[] = [
  { id: "eternl", label: "Eternl", color: "#007BFF" },
  { id: "nami", label: "Nami", color: "#349EA3" },
  { id: "lace", label: "Lace", color: "#7B61FF" },
];

export function WalletButton() {
  const { connected, address, provider, connecting, balance, connect, disconnect } = useWallet();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  if (connected && address) {
    return (
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 rounded-xl border border-accent-blue/30 bg-accent-blue/10 px-3 py-2 text-xs font-medium text-accent-blue transition hover:border-accent-blue/50 hover:shadow-[0_0_15px_rgba(0,123,255,0.2)]"
        >
          <span className="h-2 w-2 rounded-full bg-accent-green animate-pulse-glow" />
          <span>{shortenAddress(address)}</span>
          <ChevronDown className="h-3 w-3" />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-white/10 bg-[#0a0a14]/95 p-3 shadow-xl backdrop-blur-xl"
            >
              <div className="mb-2 text-xs text-[var(--text-muted)]">
                Connected via <span className="font-medium text-foreground">{provider}</span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="mb-2 flex w-full items-center gap-2 rounded-lg bg-white/5 px-2 py-1.5 text-xs text-[var(--text-secondary)] transition hover:bg-white/10"
              >
                {copied ? <Check className="h-3 w-3 text-accent-green" /> : <Copy className="h-3 w-3" />}
                <span className="truncate">{address}</span>
              </button>
              {balance && (
                <div className="mb-3 space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">ADA</span>
                    <span className="font-medium text-foreground">{balance.ada.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">USDM</span>
                    <span className="font-medium text-accent-blue">{balance.usdm.toLocaleString()}</span>
                  </div>
                </div>
              )}
              <button
                type="button"
                onClick={() => { disconnect(); setOpen(false); }}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-accent-red/30 bg-accent-red/10 px-3 py-1.5 text-xs font-medium text-accent-red transition hover:bg-accent-red/20"
              >
                <LogOut className="h-3 w-3" />
                Disconnect
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        disabled={connecting}
        className="flex items-center gap-2 rounded-xl border border-accent-blue/30 bg-accent-blue/10 px-3 py-2 text-xs font-medium text-accent-blue transition hover:border-accent-blue/50 hover:shadow-[0_0_15px_rgba(0,123,255,0.2)] disabled:opacity-50"
      >
        <Wallet className="h-3.5 w-3.5" />
        {connecting ? "Connecting..." : "Connect Wallet"}
      </button>

      <AnimatePresence>
        {open && !connecting && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full z-50 mt-2 w-48 rounded-xl border border-white/10 bg-[#0a0a14]/95 p-2 shadow-xl backdrop-blur-xl"
          >
            <p className="mb-2 px-2 text-xs text-[var(--text-muted)]">Select wallet</p>
            {wallets.map((w) => (
              <button
                key={w.id}
                type="button"
                onClick={() => { connect(w.id); setOpen(false); }}
                className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-xs font-medium text-foreground transition hover:bg-white/5"
              >
                <span className="h-2 w-2 rounded-full" style={{ background: w.color }} />
                {w.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
