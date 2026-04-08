import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "1ChipFix — Fast Windshield Chip Repair",
  description:
    "Get your windshield chip repaired fast by licensed mobile technicians. 1ChipFix comes to you for chip fixes that last.",
  openGraph: {
    title: "1ChipFix — Fast Windshield Chip Repair",
    description:
      "Mobile chip repair specialists. Same-day appointments. Stop a chip from turning into a crack.",
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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18073899451"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18073899451');
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
