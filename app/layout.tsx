import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DELTART | Digital Growth Systems",
  description:
    "Premium digital growth systems for businesses that need performance, perception, and measurable outcomes.",
  keywords: [
    "digital growth agency",
    "high-performance websites",
    "AI automation",
    "conversion optimization",
    "DELTART",
  ],
  openGraph: {
    title: "DELTART | Digital Growth Systems",
    description:
      "Web, e-commerce, AI, and conversion systems engineered for measurable business growth.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
