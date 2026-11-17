import type { Metadata } from "next";
import AboutContent from "@/components/About/AboutContent";
import MissionVision from "@/components/About/MissionVision";
import Founder from "@/components/About/Founder";

export const metadata: Metadata = {
  title: "About Us - Butwal Goat Farm | Premium Goat Breeding Excellence in Nepal",
  description: "Learn about Butwal Goat Farm's premium Boer, Barbari, and Sirohi goat breeding expertise. We specialize in indigenous goat farming across Nepal's diverse ecological zones.",
  keywords: ["goat farm Nepal", "goat breeding expertise", "indigenous goats", "Boer crossbreeds", "goat farming Nepal", "livestock services"],
  openGraph: {
    title: "About Us - Butwal Goat Farm",
    description: "Learn about Butwal Goat Farm's premium goat breeding expertise in Nepal.",
    url: "https://butwal-goat-farm.vercel.app/about",
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
    title: "About Us - Butwal Goat Farm",
    description: "Learn about Butwal Goat Farm's premium goat breeding expertise in Nepal.",
    images: ["/logo/Butwal-Goat-Farm-Logo.webp"],
  },
  alternates: {
    canonical: "https://butwal-goat-farm.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      <AboutContent />
      <MissionVision />
      <Founder />
    </div>
  );
}
