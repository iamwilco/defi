export function ProofOfReserves() {
  return (
    <div className="space-y-3 text-sm text-(--text-secondary)">
      <article className="rounded-xl border border-white/8 bg-white/2 p-4 backdrop-blur-sm">
        <h4 className="font-semibold text-foreground">Matteo: Proof of Reserves Deep Dive</h4>
        <p className="mt-1">Third-party breakdown of reserve transparency and reporting standards.</p>
        <a href="#" className="mt-2 inline-block text-accent-blue hover:underline">
          Read article
        </a>
      </article>
      <article className="rounded-xl border border-white/8 bg-white/2 p-4 backdrop-blur-sm">
        <h4 className="font-semibold text-foreground">Fluid Withdrawal Validation</h4>
        <p className="mt-1">Reference event proving withdrawal liquidity under stress conditions.</p>
        <a href="#" className="mt-2 inline-block text-accent-blue hover:underline">
          View summary
        </a>
      </article>
    </div>
  );
}
