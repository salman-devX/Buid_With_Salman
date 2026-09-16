import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Salman Ahmad | Full-Stack Web Developer",
    template: "%s | Salman Ahmad",
  },
  description:
    "Portfolio of Salman Ahmad, a Full-Stack Web Developer building modern web applications, APIs and AI-powered solutions.",
  keywords: [
    "Salman Ahmad",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "AI Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Salman Ahmad" }],
  openGraph: {
    title: "Salman Ahmad | Full-Stack Web Developer",
    description:
      "Portfolio of Salman Ahmad, a Full-Stack Web Developer building modern web applications, APIs and AI-powered solutions.",
    url: siteUrl,
    siteName: "Salman Ahmad — Portfolio",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salman Ahmad | Full-Stack Web Developer",
    description:
      "Portfolio of Salman Ahmad, a Full-Stack Web Developer building modern web applications, APIs and AI-powered solutions.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} dark`}>
      <body className="relative min-h-screen overflow-x-hidden bg-[#050811] text-ink selection:bg-signal-ember/30 selection:text-white">
        <ScrollProgress />

        {/* Ambient background glow orbs (Black + Navy + Green + Orange) */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
          {/* Top-left Cyber Green Ambient Orb */}
          <div className="absolute -top-32 -left-32 h-[550px] w-[550px] rounded-full bg-signal-ember/10 blur-[130px]" />
          {/* Top-right Electric Orange Ambient Orb */}
          <div className="absolute top-20 -right-32 h-[600px] w-[600px] rounded-full bg-signal-amber/10 blur-[140px]" />
          {/* Center Deep Navy Blue Ambient Glow */}
          <div className="absolute top-[40%] left-[25%] h-[700px] w-[700px] rounded-full bg-signal-navy/35 blur-[160px]" />
          {/* Bottom Cyber Green & Orange glow */}
          <div className="absolute -bottom-40 right-[10%] h-[500px] w-[500px] rounded-full bg-signal-ember/10 blur-[140px]" />
          
          {/* Subtle Cyber Grid lines */}
          <div 
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: "radial-gradient(rgba(56, 189, 248, 0.4) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-signal-amber focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
