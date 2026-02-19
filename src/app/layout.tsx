import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { ClientParticles } from "@/components/animations/ClientParticles";
import { APP_TITLE } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP_TITLE,
  description:
    "DeFi Coalition dashboard for growth, contributions, incentives, and education on Cardano.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <div className="relative flex min-h-screen overflow-x-hidden text-foreground">
            <ClientParticles />
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent-blue focus:px-3 focus:py-2 focus:text-sm focus:text-white"
            >
              Skip to main content
            </a>

            {/* Sidebar — fixed left nav */}
            <Sidebar />

            {/* Content column: top bar + main + footer */}
            <div className="relative z-10 flex min-h-screen min-w-0 flex-1 flex-col">
              <Navbar />
              <main id="main-content" className="mx-auto w-full min-w-0 max-w-6xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
