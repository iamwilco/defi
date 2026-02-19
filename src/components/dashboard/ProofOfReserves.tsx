export function ProofOfReserves() {
  return (
    <div className="space-y-3 text-sm text-(--text-secondary)">
      <article className="rounded-xl border border-white/8 bg-white/2 p-4 backdrop-blur-sm">
        <h4 className="font-semibold text-foreground">Matteo&apos;s Take: A Real Look at Our Reserves</h4>
        <p className="mt-1">Verified by pros to help keep your USDM safe and sound.</p>
        <a href="#" className="mt-2 inline-block text-accent-blue hover:underline">
          Read article
        </a>
      </article>
      <article className="rounded-xl border border-white/8 bg-white/2 p-4 backdrop-blur-sm">
        <h4 className="font-semibold text-foreground">Fluid Withdrawal Check</h4>
        <p className="mt-1">A real stress test showing users could still withdraw smoothly when markets got noisy.</p>
        <a href="#" className="mt-2 inline-block text-accent-blue hover:underline">
          View summary
        </a>
      </article>
    </div>
  );
}
