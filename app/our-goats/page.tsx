import type { Metadata } from "next";
import OurGoatsContent from "@/components/OurGoats/OurGoatsContent";

export const metadata: Metadata = {
  title: "Our Goats - Butwal Goat Farm | Premium Boer, Barbari, and Sirohi Breeds in Butwal, Nepal",
  description: "Discover Butwal Goat Farm's premium goat breeds including Boer, Barbari, Sirohi, Khari, and indigenous goats. Learn about our breeding excellence in Butwal, Lumbini Province, and across Nepal.",
  keywords: ["Boer goats Butwal", "Barbari goats Nepal", "Sirohi goats Nepal", "Khari goats Butwal", "Sinhal goats", "Chyangra goats", "Terai goats", "indigenous goats Nepal", "goat breeds Butwal", "goat for sale Butwal", "meat goat breeds Nepal", "dairy goat breeds Nepal"],
  openGraph: {
    title: "Our Goats - Butwal Goat Farm",
    description: "Discover Butwal Goat Farm's premium goat breeds including Boer, Barbari, and Sirohi in Butwal, Nepal.",
    url: "https://butwal-goat-farm.vercel.app/our-goats",
    type: "website",
    images: [
      {
        url: "/logo/Butwal-Goat-Farm-Logo.webp",
        width: 1200,
        height: 630,
        alt: "Butwal Goat Farm - Premium Goat Breeding in Butwal, Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Goats - Butwal Goat Farm",
    description: "Discover Butwal Goat Farm's premium goat breeds including Boer, Barbari, and Sirohi in Butwal, Nepal.",
    images: ["/logo/Butwal-Goat-Farm-Logo.webp"],
  },
  alternates: {
    canonical: "https://butwal-goat-farm.vercel.app/our-goats",
  },
};

export default function OurGoatsPage() {
  return <OurGoatsContent />;
}
