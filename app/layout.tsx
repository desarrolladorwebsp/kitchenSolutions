import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const siteUrl = "https://kitchensolution.cl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kitchen Solutions | Cocinas Premium en Chile",
    template: "%s | Kitchen Solutions",
  },
  description:
    "Diseño, fabricación e instalación de cocinas premium a medida en Chile. Cocina moderna, remodelación y asesoría personalizada con planificación 3D.",
  applicationName: "Kitchen Solutions",
  keywords: [
    "cocinas premium Chile",
    "diseño de cocinas",
    "cocina a medida",
    "remodelación de cocina",
    "fabricación de cocinas",
    "instalación de cocinas",
    "cocina moderna",
    "muebles de cocina",
    "Kitchen Solutions",
    "cocinas en Chicureo",
    "cocinas en Santiago",
  ],
  authors: [{ name: "Kitchen Solutions" }],
  creator: "Kitchen Solutions",
  publisher: "Kitchen Solutions",
  category: "home improvement",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "Kitchen Solutions",
    title: "Kitchen Solutions | Cocinas Premium en Chile",
    description:
      "Encuentra cocinas premium, diseño 3D, mobiliario a medida y asesoría personalizada para transformar tu hogar.",
    images: [
      {
        url: "/images/og_grahp.jpg",
        width: 1200,
        height: 630,
        alt: "Kitchen Solutions - Cocinas Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Solutions | Cocinas Premium en Chile",
    description:
      "Diseño, fabricación e instalación de cocinas premium a medida en Chile.",
    images: ["/images/og_grahp.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121212",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#ffffff] text-[#171717]">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
