import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Création Sites Web & Applications Android | Dakar, Sénégal",
  description: "Développement de sites web modernes, e-commerce et applications Android à Dakar. Design professionnel, automatisation IA et support personnalisé.",
  keywords: ["création site web Dakar", "développeur web Sénégal", "application Android", "e-commerce", "site vitrine"],
  authors: [{ name: "2AB Holding" }],
  openGraph: {
    title: "Création Sites Web & Applications Android | Dakar",
    description: "Sites web modernes et applications Android professionnels à Dakar, Sénégal",
    locale: "fr_SN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
