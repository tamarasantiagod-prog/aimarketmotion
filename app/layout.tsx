import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "MarketMotion — GTM & AI Strategy for Growing Businesses", template: "%s | MarketMotion" },
  description: "AI enablement, go-to-market (GTM) enablement, growth strategy and Ideal Customer Profile (ICP) definition for small businesses and scale-ups. Senior product marketing expertise, built on 25 years across global SaaS and enterprise tech.",
  metadataBase: new URL("https://aimarketmotion.com"),
  openGraph: {
    siteName: "MarketMotion",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
