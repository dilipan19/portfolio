import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Developer Portfolio | United Systems",
  description:
    "A premium Manchester United inspired software portfolio for projects, writing, and AI experiments.",
  openGraph: {
    title: "Developer Portfolio | United Systems",
    description:
      "Dark-mode-first portfolio with bento projects, technical writing, AI labs, and a high-fidelity United-inspired jersey hero.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <body>
        {children}
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
