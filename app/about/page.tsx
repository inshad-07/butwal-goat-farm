import type { Metadata } from "next";
import AboutContent from "@/components/About/AboutContent";
import MissionVision from "@/components/About/MissionVision";
import Founder from "@/components/About/Founder";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Us - Butwal Goat Farm | Premium Goat Breeding Excellence Across Nepal",
  description: "Learn about Butwal Goat Farm's premium Boer, Barbari, and Sirohi goat breeding expertise. We specialize in indigenous goat farming across Kathmandu, Pokhara, Chitwan, Biratnagar, Butwal, and all of Nepal's diverse ecological zones.",
  keywords: ["goat farm Nepal", "goat breeding expertise", "indigenous goats", "Boer crossbreeds", "goat farming Nepal", "livestock services", "goat farm Kathmandu", "goat farm Pokhara", "goat farm Chitwan", "goat farm Biratnagar", "goat farm Butwal"],
  openGraph: {
    title: "About Us - Butwal Goat Farm",
    description: "Learn about Butwal Goat Farm's premium goat breeding expertise across Nepal.",
    url: "https://butwal-goat-farm.vercel.app/about",
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
    title: "About Us - Butwal Goat Farm",
    description: "Learn about Butwal Goat Farm's premium goat breeding expertise across Nepal.",
    images: ["/logo/Butwal-Goat-Farm-Logo.webp"],
  },
  alternates: {
    canonical: "https://butwal-goat-farm.vercel.app/about",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://butwal-goat-farm.vercel.app/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://butwal-goat-farm.vercel.app/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div>
        <AboutContent />
        <MissionVision />
        <Founder />
      </div>
    </>
  );
}
