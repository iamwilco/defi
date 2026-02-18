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
    "Joint marketing dashboard for USDM coalition growth, contributions, incentives, and education.",
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
          <div className="relative min-h-screen text-foreground">
            <ClientParticles />
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent-blue focus:px-3 focus:py-2 focus:text-sm focus:text-white"
            >
              Skip to main content
            </a>
            <Navbar />
            <div className="relative z-10 mx-auto flex w-full max-w-7xl">
              <Sidebar />
              <main id="main-content" className="w-full px-4 py-6 sm:px-6 lg:px-8">
                {children}
              </main>
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
