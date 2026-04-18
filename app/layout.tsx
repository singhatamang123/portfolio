import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
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
  keywords: ["Singha Tamang", "Frontend Developer", "Next.js", "React", "Portfolio"],
  authors: [{ name: "Singha Tamang" }],
  openGraph: {
    title: "Singha Tamang | Frontend Developer",
    description: "I craft fast, modern, and responsive web experiences.",
    images: [
      {
        url: "/singha.jpg",
        width: 800,
        height: 600,
        alt: "Singha Tamang",
      },
    ],
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
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        {children}

        {/* Performance Monitoring */}
        <SpeedInsights />

        {/* Visitor Analytics */}
        <Analytics />
      </body>
    </html>
  );
}