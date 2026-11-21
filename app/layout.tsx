import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import GoogleTranslateFloatingButton from "@/components/GoogleTranslateFloatingButton";
import StructuredData from "@/components/StructuredData";
import SmoothScroll from "@/components/SmoothScroll";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://butwal-goat-farm.vercel.app"),
  title: "Butwal Goat Farm - Premium Boer, Barbari, and Sirohi Goat Breeding Across Nepal",
  description: "Butwal Goat Farm is the leading goat breeding farm in Nepal. We specialize in premium Boer, Barbari, and Sirohi goat breeds, indigenous goat farming, and livestock services for commercial farmers across Kathmandu, Pokhara, Chitwan, Biratnagar, Butwal, Rupandehi, and all of Nepal.",
  keywords: ["goat farm Nepal", "goat breeding Nepal", "Boer goats Nepal", "Barbari goats Nepal", "Sirohi goats Nepal", "goat farm Kathmandu", "goat farm Pokhara", "goat farm Chitwan", "goat farm Biratnagar", "goat farm Butwal", "goat farm Lumbini Province", "livestock Nepal", "commercial goat farming Nepal", "indigenous goats Nepal", "Khari goats Nepal", "Sinhal goats", "Chyangra goats", "Terai goats", "goat for sale Nepal", "goat suppliers Nepal", "meat goat breeders Nepal", "dairy goat breeds Nepal", "goat farm Lalitpur", "goat farm Bhaktapur", "goat farm Nepalgunj", "goat farm Bharatpur", "goat farm Birgunj", "goat farm Rupandehi", "goat farm Taulihawa", "goat farm Lumbini", "goat farm Bhairahawa", "goat farm Siddharthanagar", "goat farm Kapilvastu", "goat farm Dhangadhi", "goat farm Butwal Nepal"],
  authors: [{ name: "Butwal Goat Farm" }],
  creator: "Butwal Goat Farm",
  publisher: "Butwal Goat Farm",
  applicationName: "Butwal Goat Farm",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Butwal Goat Farm",
  },
  verification: {
    google: "3NIS_M6iMQmn4sAcqIcHc-fxTP6ONeURbBDf9R-PK80",
  },
  other: {
    "application-name": "Butwal Goat Farm",
    "apple-mobile-web-app-title": "Butwal Goat Farm",
    "site-name": "Butwal Goat Farm",
  },
  openGraph: {
    title: "Butwal Goat Farm - Premium Goat Breeding Across Nepal",
    description: "Leading goat breeding farm in Nepal. Premium Boer, Barbari, and Sirohi goat breeds for commercial farmers across Kathmandu, Pokhara, Chitwan, Biratnagar, Butwal, Rupandehi, and all of Nepal.",
    url: "https://butwal-goat-farm.vercel.app/",
    siteName: "Butwal Goat Farm",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo/butwal-goat-farm-logo.webp",
        width: 1200,
        height: 630,
        alt: "Butwal Goat Farm - Premium Goat Breeding Across Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Butwal Goat Farm - Premium Goat Breeding Across Nepal",
    description: "Leading goat breeding farm in Nepal. Premium Boer, Barbari, and Sirohi goat breeds for commercial farmers across Nepal.",
    images: ["/logo/butwal-goat-farm-logo.webp"],
  },
  alternates: {
    canonical: "https://butwal-goat-farm.vercel.app/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-full flex flex-col">
        <StructuredData/>
        <SmoothScroll/>
        <Header2/>
        {children}
        <Footer/>
        <WhatsAppFloating/>
        <GoogleTranslateFloatingButton/>
        <ServiceWorkerRegistration/>
        </body>
    </html>
  );
}
