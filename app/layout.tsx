import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "YNITS Business Operating System",
  description: "Internal operations platform for YNITS",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "YNITS Business Operating System",
    description: "Internal operations platform for YNITS",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
