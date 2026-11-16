import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import StructuredData from "@/components/StructuredData";

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
  title: "Butwal Goat Farm - Premium Boer, Barbari, and Sirohi Goat Breeding in Nepal",
  description: "Butwal Goat Farm delivers premium Boer, Barbari, and Sirohi goat breeding, indigenous goat farming, and dependable livestock services for commercial farmers across Nepal.",
  keywords: ["goat breeding Nepal", "Boer goats Nepal", "Barbari goats", "Sirohi goats", "goat farm Nepal", "livestock Nepal", "commercial goat farming", "indigenous goats Nepal", "Khari goats", "Sinhal goats", "Chyangra goats", "Terai goats"],
  manifest: "/manifest.json",
  themeColor: "#1B5E20",
  icons: {
    icon: "/logo/black-text-logo.webp",
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
    title: "Butwal Goat Farm - Premium Goat Breeding in Nepal",
    description: "Premium Boer, Barbari, and Sirohi goat breeding for commercial farmers across Nepal.",
    url: "https://butwal-goat-farm.vercel.app/",
    siteName: "Butwal Goat Farm",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo/black-text-logo.webp",
        width: 1200,
        height: 630,
        alt: "Butwal Goat Farm - Premium Goat Breeding in Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Butwal Goat Farm - Premium Goat Breeding in Nepal",
    description: "Premium Boer, Barbari, and Sirohi goat breeding for commercial farmers across Nepal.",
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
        <Header2/>
        {children}
        <Footer/>
        <WhatsAppFloating/>
        </body>
    </html>
  );
}
