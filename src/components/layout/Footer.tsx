import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/6 bg-black/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent-blue">Coalition</h3>
            <p className="mt-2 text-xs leading-relaxed text-(--text-muted)">
              Moneta/W3I • NBX • Fluid • Wave Capital — powering DeFi Proof of Growth on Cardano.
            </p>
            <div className="mt-3 flex items-center gap-3">
              <Image src="/logos/moneta-logo.png" alt="Moneta logo" width={64} height={20} className="h-5 w-auto object-contain" />
              <Image src="/logos/nbx-logo.png" alt="NBX logo" width={48} height={20} className="h-5 w-auto object-contain" />
              <Image src="/logos/fluid-logo.png" alt="Fluid logo" width={56} height={20} className="h-5 w-auto object-contain" />
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent-gold">Content Ownership</h3>
            <p className="mt-2 text-xs leading-relaxed text-(--text-muted)">
              Content owned by respective entities. Entities may remove authored content; contribution metrics remain as
              historical data.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent-green">Links</h3>
            <ul className="mt-2 space-y-1.5 text-xs">
              <li>
                <Link href="/entities" className="text-(--text-muted) transition hover:text-foreground">
                  Join / Leave Process →
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-(--text-muted) transition hover:text-foreground">
                  Getting Started Guides →
                </Link>
              </li>
              <li>
                <Link href="/wallet" className="text-(--text-muted) transition hover:text-foreground">
                  Connect Wallet →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/6 pt-4 text-center text-[10px] text-(--text-muted)">
          DeFi Coalition — Built on Cardano
        </div>
      </div>
    </footer>
  );
}
