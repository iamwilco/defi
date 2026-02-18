export const APP_TITLE = "USDM DeFi Coalition Dashboard - Proof of Growth";

const dataModeEnv = process.env.NEXT_PUBLIC_DATA_MODE;

export const DATA_MODE = dataModeEnv === "live" ? "live" : "mock";

export const NAV_ITEMS = [
  { href: "/", label: "Dashboard" },
  { href: "/blog", label: "DeFi Pulse" },
  { href: "/guides", label: "How-To" },
  { href: "/entities", label: "Entities" },
  { href: "/incentives", label: "Incentives" },
  { href: "/comms", label: "Comms" },
  { href: "/wallet", label: "Wallet" },
];

export const REFRESH_INTERVAL_MS = 5 * 60 * 1000;
export const QUERY_REFETCH_INTERVAL_MS = DATA_MODE === "live" ? REFRESH_INTERVAL_MS : false;
