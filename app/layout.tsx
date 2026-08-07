import type { Metadata } from "next";
import "@fontsource/fira-sans/400.css";
import "@fontsource/fira-sans/500.css";
import "@fontsource/fira-sans/600.css";
import "@fontsource/fira-sans-condensed/500.css";
import "@fontsource/fira-sans-condensed/600.css";
import "@fontsource/fira-sans-condensed/700.css";
import "@fontsource/fira-mono/400.css";
import "@fontsource/fira-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Certus — Ihr LV, automatisch bepreist",
    template: "%s · Certus",
  },
  description:
    "Certus bepreist Ihr Leistungsverzeichnis und liefert ein compliance-geprüftes, bepreistes .ONLV zurück in ABK/NEVARIS — mit Ihren eigenen Lieferanten, inklusive Subunternehmer. Für Baumeister & Generalunternehmer in Österreich.",
  keywords: [
    "AVA",
    "Kalkulation",
    "LV bepreisen",
    "ÖNORM A 2063",
    "ABK",
    "NEVARIS",
    "ONLV",
    "Baumeister",
    "Generalunternehmer",
    "Preisspiegel",
  ],
  openGraph: {
    title: "Certus — Ihr LV, automatisch bepreist",
    description:
      "Bepreistes .ONLV zurück in Ihre AVA — mit Ihren eigenen Lieferanten, inklusive Subunternehmer.",
    locale: "de_AT",
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
    <html lang="de-AT" className="h-full">
      <body className="flex min-h-full flex-col bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
