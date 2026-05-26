import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const SITE_TITLE = "Coiffure Masculine — Salon de coiffure homme · Le Thor";
const SITE_DESCRIPTION =
  "Coupe, barbe et entretien masculin dans une atmosphère sobre et élégante. Salon de coiffure homme au Thor, dans le Vaucluse.";

export const metadata: Metadata = {
  metadataBase: new URL("https://coiffure-masculine.fr"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "coiffeur homme Le Thor",
    "barbier Vaucluse",
    "salon de coiffure homme",
    "dégradé",
    "taille de barbe",
    "coiffure masculine",
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen bg-ink-900 font-sans text-fog antialiased selection:bg-accent/20">
        {children}
      </body>
    </html>
  );
}
