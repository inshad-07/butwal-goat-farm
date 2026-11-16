import type { Metadata } from "next";
import GalleryContent from "@/components/Gallery/GalleryContent";

export const metadata: Metadata = {
  title: "Gallery - Butwal Goat Farm | See Our Premium Goats and Farm",
  description: "Explore Butwal Goat Farm's gallery showcasing our premium Boer, Barbari, and Sirohi goats, farm facilities, and breeding operations in Nepal.",
  keywords: ["goat farm gallery", "Boer goats images", "goat breeding photos", "goat farm Nepal", "livestock gallery"],
  openGraph: {
    title: "Gallery - Butwal Goat Farm",
    description: "Explore Butwal Goat Farm's gallery showcasing our premium goats and farm.",
    url: "https://butwal-goat-farm.vercel.app/gallery",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery - Butwal Goat Farm",
    description: "Explore Butwal Goat Farm's gallery showcasing our premium goats and farm.",
  },
  alternates: {
    canonical: "https://butwal-goat-farm.vercel.app/gallery",
  },
};

export default function Page() {
    return (
        <div>
          <GalleryContent/>
        </div>
    );
}
