import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matthew Foxwell",
  description: "Portfolio website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          defer
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v3.11.0/mapbox-gl.css"
          rel="stylesheet"
        ></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]`}
      >
        {children}
        {/* NOTE: Vercel scripts can be blocked by ad-blockers */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
