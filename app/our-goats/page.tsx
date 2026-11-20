import type { Metadata } from "next";
import OurGoatsContent from "@/components/OurGoats/OurGoatsContent";

export const metadata: Metadata = {
  title: "Our Goats - Butwal Goat Farm | Premium Boer, Barbari, and Sirohi Breeds Across Nepal",
  description: "Discover Butwal Goat Farm's premium goat breeds including Boer, Barbari, Sirohi, Khari, and indigenous goats. Learn about our breeding excellence serving Kathmandu, Pokhara, Chitwan, Biratnagar, Butwal, and across all of Nepal.",
  keywords: ["Boer goats Nepal", "Barbari goats Nepal", "Sirohi goats Nepal", "Khari goats Nepal", "Sinhal goats", "Chyangra goats", "Terai goats", "indigenous goats Nepal", "goat breeds Nepal", "goat for sale Nepal", "meat goat breeds Nepal", "dairy goat breeds Nepal", "goat farm Kathmandu", "goat farm Pokhara", "goat farm Chitwan", "goat farm Biratnagar", "goat farm Butwal"],
  openGraph: {
    title: "Our Goats - Butwal Goat Farm",
    description: "Discover Butwal Goat Farm's premium goat breeds including Boer, Barbari, and Sirohi across Nepal.",
    url: "https://butwal-goat-farm.vercel.app/our-goats",
    type: "website",
    images: [
      {
        url: "/logo/Butwal-Goat-Farm-Logo.webp",
        width: 1200,
        height: 630,
        alt: "Butwal Goat Farm - Premium Goat Breeding Across Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Goats - Butwal Goat Farm",
    description: "Discover Butwal Goat Farm's premium goat breeds including Boer, Barbari, and Sirohi across Nepal.",
    images: ["/logo/Butwal-Goat-Farm-Logo.webp"],
  },
  alternates: {
    canonical: "https://butwal-goat-farm.vercel.app/our-goats",
  },
};

export default function OurGoatsPage() {
  return <OurGoatsContent />;
}
