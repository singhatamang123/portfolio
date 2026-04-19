import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import SmoothScroll from "./components/SmoothScroll";
import VibeSwitcher from "./components/VibeSwitcher";
import EasterEgg from "./components/EasterEgg";
import LiveStatus from "./components/LiveStatus";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Singha Tamang | Frontend Developer",
  description: "I build fast, modern, and pixel-perfect web applications with clean code and beautiful interfaces.",
  keywords: ["Singha Tamang", "Frontend Developer", "Next.js", "React", "Portfolio", "Brutalist Design"],
  authors: [{ name: "Singha Tamang" }],
  metadataBase: new URL("https://singha-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    title: "Singha Tamang | Frontend Developer",
    description: "I craft fast, modern, and brutally beautiful web experiences. Open to Freelance.",
    siteName: "Singha Tamang Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Singha Tamang — Frontend Developer. Open to Freelance.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Singha Tamang | Frontend Developer",
    description: "I craft fast, modern, and brutally beautiful web experiences. Open to Freelance.",
    images: ["/opengraph-image"],
    creator: "@singhatamang",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col transition-all duration-700">
        <Preloader />
        <CustomCursor />
        <VibeSwitcher />
        <EasterEgg />
        <LiveStatus />
        <div id="chaos-wrapper" className="flex-1 flex flex-col origin-center">
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </div>

        {/* Performance Monitoring */}
        <SpeedInsights />

        {/* Visitor Analytics */}
        <Analytics />
      </body>
    </html>
  );
}