import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { MagicGridBackground } from "@/components/magic-grid-background";
import "./globals.css";

export const metadata: Metadata = {
  title: "Disruptive Brands | Operator-led DTC growth",
  description:
    "Disruptive Brands builds the paid media, lifecycle, creative, analytics, and automation systems behind high-growth DTC brands.",
  openGraph: {
    title: "Disruptive Brands",
    description: "The growth engine behind DTC brands doing 8 figures.",
    url: "https://disruptivebrands.co",
    siteName: "Disruptive Brands",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MagicGridBackground />
        <div className="relative z-10">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
