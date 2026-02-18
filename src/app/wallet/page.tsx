"use client";

import Link from "next/link";
import { Wallet, ArrowUpRight, Clock, Coins, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useWallet, shortenAddress } from "@/web3/useWallet";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrapper";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

const mockHistory = [
  { id: "tx1", type: "Supply", asset: "USDM", amount: 500, date: "2026-02-17", status: "confirmed" },
  { id: "tx2", type: "Borrow", asset: "fGLD", amount: 120, date: "2026-02-16", status: "confirmed" },
  { id: "tx3", type: "Claim", asset: "Loyalty Boost", amount: 12.5, date: "2026-02-15", status: "confirmed" },
  { id: "tx4", type: "Supply", asset: "USDM", amount: 300, date: "2026-02-12", status: "confirmed" },
];

const mockIncentives = [
  { name: "Early Bird Boost", earned: 24.5, currency: "USDM" },
  { name: "Loyalty Boost", earned: 12.5, currency: "USDM" },
];

function ConnectedDashboard() {
  const { address, provider, balance } = useWallet();

  return (
    <div className="space-y-8">
      <FadeIn>
        <div className="rounded-2xl border border-accent-blue/20 bg-linear-to-br from-accent-blue/5 to-transparent p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-(--text-muted)">Connected via {provider}</p>
              <p className="mt-1 font-mono text-sm text-foreground">{address ? shortenAddress(address, 12) : ""}</p>
            </div>
            <div className="flex gap-6">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-(--text-muted)">ADA Balance</p>
                <AnimatedCounter value={balance?.ada ?? 0} decimals={1} className="text-2xl font-bold text-foreground" suffix=" ₳" />
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-(--text-muted)">USDM Balance</p>
                <AnimatedCounter value={balance?.usdm ?? 0} decimals={0} prefix="$" className="text-2xl font-bold text-accent-blue" />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2">
        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-white/8 bg-white/2 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Coins className="h-4 w-4 text-accent-gold" />
              <h2 className="text-xs font-semibold uppercase tracking-wider text-(--text-muted)">Incentives Earned</h2>
            </div>
            <StaggerContainer className="mt-4 space-y-3" staggerDelay={0.1}>
              {mockIncentives.map((inc) => (
                <StaggerItem key={inc.name}>
                  <div className="flex items-center justify-between rounded-xl border border-white/6 bg-white/2 px-3 py-2.5">
                    <span className="text-sm text-(--text-secondary)">{inc.name}</span>
                    <span className="font-bold text-accent-gold">+{inc.earned} {inc.currency}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="rounded-2xl border border-white/8 bg-white/2 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent-green" />
              <h2 className="text-xs font-semibold uppercase tracking-wider text-(--text-muted)">Positions</h2>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between rounded-xl border border-accent-blue/15 bg-accent-blue/5 px-3 py-2.5">
                <div>
                  <p className="text-sm font-medium text-foreground">USDM Supply</p>
                  <p className="text-xs text-(--text-muted)">Fluid Protocol</p>
                </div>
                <span className="font-bold text-accent-blue">$800</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-accent-gold/15 bg-accent-gold/5 px-3 py-2.5">
                <div>
                  <p className="text-sm font-medium text-foreground">fGLD Borrow</p>
                  <p className="text-xs text-(--text-muted)">Fluid Protocol</p>
                </div>
                <span className="font-bold text-accent-gold">$120</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.3}>
        <div className="rounded-2xl border border-white/8 bg-white/2 p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent-blue" />
            <h2 className="text-xs font-semibold uppercase tracking-wider text-(--text-muted)">Transaction History</h2>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left text-xs">
              <thead className="text-(--text-muted)">
                <tr>
                  <th className="px-2 py-2 font-medium">Type</th>
                  <th className="px-2 py-2 font-medium">Asset</th>
                  <th className="px-2 py-2 font-medium">Amount</th>
                  <th className="px-2 py-2 font-medium">Date</th>
                  <th className="px-2 py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockHistory.map((tx) => (
                  <tr key={tx.id} className="border-t border-white/6">
                    <td className="px-2 py-2 font-medium text-foreground">{tx.type}</td>
                    <td className="px-2 py-2 text-(--text-secondary)">{tx.asset}</td>
                    <td className="px-2 py-2 text-(--text-secondary)">{tx.amount}</td>
                    <td className="px-2 py-2 text-(--text-muted)">{tx.date}</td>
                    <td className="px-2 py-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent-green/10 px-2 py-0.5 text-accent-green">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

function ConnectPrompt() {
  const { connect, connecting } = useWallet();

  return (
    <FadeIn className="flex flex-col items-center justify-center py-20 text-center">
      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(0, 123, 255, 0.3), 0 0 60px rgba(0, 123, 255, 0.1)",
            "0 0 30px rgba(0, 123, 255, 0.5), 0 0 80px rgba(0, 123, 255, 0.2)",
            "0 0 20px rgba(0, 123, 255, 0.3), 0 0 60px rgba(0, 123, 255, 0.1)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-accent-blue/30 bg-accent-blue/10"
      >
        <Wallet className="h-8 w-8 text-accent-blue" />
      </motion.div>
      <h2 className="text-2xl font-bold text-foreground">Connect Your Wallet</h2>
      <p className="mt-2 max-w-md text-sm text-(--text-secondary)">
        Link your Cardano wallet to view your personal dashboard — contributions, earned incentives, and on-chain history.
      </p>
      <div className="mt-6 flex gap-3">
        {(["eternl", "nami", "lace"] as const).map((w) => (
          <button
            key={w}
            type="button"
            disabled={connecting}
            onClick={() => connect(w)}
            className="rounded-xl border border-accent-blue/30 bg-accent-blue/10 px-5 py-2.5 text-sm font-medium capitalize text-accent-blue transition hover:bg-accent-blue/20 hover:shadow-[0_0_15px_rgba(0,123,255,0.2)] disabled:opacity-50"
          >
            {w}
          </button>
        ))}
      </div>
      <Link href="/" className="mt-8 text-xs text-(--text-muted) transition hover:text-foreground">
        <ArrowUpRight className="mr-1 inline h-3 w-3" />
        Back to Dashboard
      </Link>
    </FadeIn>
  );
}

export default function WalletPage() {
  const { connected } = useWallet();

  return (
    <div className="space-y-8">
      <header>
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-blue">Personal</p>
        <h1 className="mt-2 text-3xl font-bold text-foreground">Wallet Dashboard</h1>
        <p className="mt-2 text-sm text-(--text-secondary)">
          Your personal contributions, incentives, and on-chain activity.
        </p>
      </header>

      {connected ? <ConnectedDashboard /> : <ConnectPrompt />}
    </div>
  );
}
