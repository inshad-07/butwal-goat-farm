import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";

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
  title: "Goat Firm - Premium Boer, Barbari, and Sirohi Goat Breeding in Nepal",
  description: "Goat Firm delivers premium Boer, Barbari, and Sirohi goat breeding, indigenous goat farming, and dependable livestock services for commercial farmers across Nepal.",
  manifest: "/manifest.json",
  themeColor: "#1B5E20",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Goat Firm",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header2/>
        {children}
        <Footer/>
        <WhatsAppFloating/>
        </body>
    </html>
  );
}
