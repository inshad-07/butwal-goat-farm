import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import StructuredData from "@/components/StructuredData";
import SmoothScroll from "@/components/SmoothScroll";

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
  title: "Butwal Goat Farm - Premium Boer, Barbari, and Sirohi Goat Breeding in Butwal, Nepal",
  description: "Butwal Goat Farm is the leading goat breeding farm in Butwal, Nepal. We specialize in premium Boer, Barbari, and Sirohi goat breeds, indigenous goat farming, and livestock services for commercial farmers across Lumbini Province and Nepal.",
  keywords: ["goat farm Butwal", "goat breeding Butwal", "Boer goats Butwal", "Barbari goats Nepal", "Sirohi goats Nepal", "goat farm Lumbini Province", "goat farm Nepal", "livestock Nepal", "commercial goat farming Nepal", "indigenous goats Nepal", "Khari goats Butwal", "Sinhal goats", "Chyangra goats", "Terai goats", "goat for sale Butwal", "goat suppliers Nepal", "meat goat breeders Nepal", "dairy goat breeds Nepal"],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/logo/black-text-logo.webp", sizes: "any", type: "image/webp" },
    ],
    apple: "/logo/black-text-logo.webp",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Butwal Goat Farm",
  },
  verification: {
    google: "3NIS_M6iMQmn4sAcqIcHc-fxTP6ONeURbBDf9R-PK80",
  },
  openGraph: {
    title: "Butwal Goat Farm - Premium Goat Breeding in Butwal, Nepal",
    description: "Leading goat breeding farm in Butwal, Nepal. Premium Boer, Barbari, and Sirohi goat breeds for commercial farmers across Lumbini Province.",
    url: "https://butwal-goat-farm.vercel.app/",
    siteName: "Butwal Goat Farm",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo/black-text-logo.webp",
        width: 1200,
        height: 630,
        alt: "Butwal Goat Farm - Premium Goat Breeding in Butwal, Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Butwal Goat Farm - Premium Goat Breeding in Butwal, Nepal",
    description: "Leading goat breeding farm in Butwal, Nepal. Premium Boer, Barbari, and Sirohi goat breeds for commercial farmers.",
    images: ["/logo/black-text-logo.webp"],
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
      <body className="min-h-full flex flex-col">
        <StructuredData/>
        <SmoothScroll/>
        <Header2/>
        {children}
        <Footer/>
        <WhatsAppFloating/>
        </body>
    </html>
  );
}
