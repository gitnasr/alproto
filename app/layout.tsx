import type { Metadata } from "next";
import { Hanken_Grotesk, Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactModalProvider } from "@/components/contact-modal";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:5000"),
  title: {
    default: "Nahjj — Mission-critical software engineering",
    template: "%s · Nahjj",
  },
  description:
    "High-performance digital product engineering firm. We architect, engineer, and deploy mission-critical software systems for global enterprises.",
  openGraph: {
    siteName: "Nahjj",
    type: "website",
    title: "Nahjj — Mission-critical software engineering",
    description:
      "High-performance digital product engineering firm. We architect, engineer, and deploy mission-critical software systems for global enterprises.",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hanken.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body>
        <ContactModalProvider>
          <SiteHeader />
          <main className="w-full bg-canvas pt-20">{children}</main>
          <SiteFooter />
        </ContactModalProvider>
      </body>
    </html>
  );
}
