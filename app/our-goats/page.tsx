import type { Metadata } from "next";
import OurGoatsContent from "@/components/OurGoats/OurGoatsContent";

export const metadata: Metadata = {
  title: "Our Goats - Butwal Goat Farm | Premium Boer, Barbari, and Sirohi Breeds",
  description: "Discover Butwal Goat Farm's premium goat breeds including Boer, Barbari, Sirohi, Khari, and indigenous goats. Learn about our breeding excellence in Nepal.",
  keywords: ["Boer goats Nepal", "Barbari goats", "Sirohi goats", "Khari goats", "Sinhal goats", "Chyangra goats", "Terai goats", "indigenous goats Nepal", "goat breeds"],
  openGraph: {
    title: "Our Goats - Butwal Goat Farm",
    description: "Discover Butwal Goat Farm's premium goat breeds including Boer, Barbari, and Sirohi.",
    url: "https://butwal-goat-farm.vercel.app/our-goats",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Goats - Butwal Goat Farm",
    description: "Discover Butwal Goat Farm's premium goat breeds including Boer, Barbari, and Sirohi.",
  },
  alternates: {
    canonical: "https://butwal-goat-farm.vercel.app/our-goats",
  },
};

export default function OurGoatsPage() {
  return <OurGoatsContent />;
}
