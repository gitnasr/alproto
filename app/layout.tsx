import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactModalProvider } from "@/components/contact-modal";
import { AmbientField } from "@/components/ambient-field";
import "./globals.css";

/* PPNeueMontreal is proprietary; Inter is the reference's named substitute.
   One typeface carries every context here — there is no second face. 200 is
   loaded because the ultra-light body setting is half the brand's signature,
   and 600 because the uppercase labels are the only place weight climbs. */
const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:5000"),
  title: {
    default: "Silosage: Mission-critical software engineering",
    template: "%s · Silosage",
  },
  description:
    "High-performance digital product engineering firm. We architect, engineer, and deploy mission-critical software systems for global enterprises.",
  openGraph: {
    siteName: "Silosage",
    type: "website",
    title: "Silosage: Mission-critical software engineering",
    description:
      "High-performance digital product engineering firm. We architect, engineer, and deploy mission-critical software systems for global enterprises.",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body>
        <ContactModalProvider>
          <SiteHeader />
          <main className="w-full bg-page pt-28">{children}</main>
          <SiteFooter />
          <AmbientField />
        </ContactModalProvider>
      </body>
    </html>
  );
}
