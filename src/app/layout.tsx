import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WindowFix — Fast Windshield Chip Repair",
  description:
    "Get your windshield chip repaired fast. Mobile technicians come to you. Free quotes in 60 seconds.",
  openGraph: {
    title: "WindowFix — Fast Windshield Chip Repair",
    description:
      "Mobile chip repair service. Same-day appointments. Don't let a chip become a crack.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
