import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/Providers";
import { AppLayout } from "@/components/layout/AppLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Buenity - Menú Digital para Restaurantes",
  description: "Convierte tu menú en una experiencia digital elegante que tus clientes aman usar. Sin Canva. Sin PDFs borrosos. Sin links feos.",
  keywords: ["menú digital", "restaurantes", "QR code", "carta digital", "menú online"],
  authors: [{ name: "Buenity" }],
  openGraph: {
    title: "Buenity - Menú Digital para Restaurantes",
    description: "Convierte tu menú en una experiencia digital elegante que tus clientes aman usar.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFD60A" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <AppLayout
            hideHeaderOnRoutes={["/admin", "/dashboard"]}
            hideFooterOnRoutes={["/admin", "/dashboard"]}
          >
            {children}
          </AppLayout>
        </Providers>
      </body>
    </html>
  );
}
