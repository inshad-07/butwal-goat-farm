import type { Metadata } from "next";
import GalleryContent from "@/components/Gallery/GalleryContent";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Gallery - Butwal Goat Farm | See Our Premium Goats and Farm",
  description: "Explore Butwal Goat Farm's gallery showcasing our premium Boer, Barbari, and Sirohi goats, farm facilities, and breeding operations in Nepal.",
  keywords: ["goat farm gallery", "Boer goats images", "goat breeding photos", "goat farm Nepal", "livestock gallery"],
  openGraph: {
    title: "Gallery - Butwal Goat Farm",
    description: "Explore Butwal Goat Farm's gallery showcasing our premium goats and farm.",
    url: "https://butwal-goat-farm.vercel.app/gallery",
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
    title: "Gallery - Butwal Goat Farm",
    description: "Explore Butwal Goat Farm's gallery showcasing our premium goats and farm.",
    images: ["/logo/Butwal-Goat-Farm-Logo.webp"],
  },
  alternates: {
    canonical: "https://butwal-goat-farm.vercel.app/gallery",
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
      name: "Gallery",
      item: "https://butwal-goat-farm.vercel.app/gallery",
    },
  ],
};

export default function Page() {
    return (
        <>
          <Script
            id="breadcrumb-schema-gallery"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
          <div>
            <GalleryContent/>
          </div>
        </>
    );
}
