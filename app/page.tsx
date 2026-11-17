import type { Metadata } from "next";
import AboutSection from "@/components/Home/AboutSection";
import FaqSection from "@/components/Home/FaqSection";
import GoatBreedsSection from "@/components/Home/GoatBreedsSection";
import GoatTrading from "@/components/Home/GoatTrading";
import GalleryPreview from "@/components/Home/GalleryPreview";
import HeroVideo from "@/components/Home/HeroVideo";
import Services from "@/components/Home/Services";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Image from "next/image";
import Founder from "@/components/About/Founder";

export const metadata: Metadata = {
  title: "Home - Butwal Goat Farm | Premium Boer, Barbari, and Sirohi Goat Breeding in Butwal, Nepal",
  description: "Butwal Goat Farm delivers premium Boer, Barbari, and Sirohi goat breeding, indigenous goat farming, and dependable livestock services for commercial farmers in Butwal, Lumbini Province, and across Nepal.",
  keywords: ["goat farm Butwal", "goat breeding Butwal", "Boer goats Butwal", "Barbari goats Nepal", "Sirohi goats Nepal", "goat farm Lumbini Province", "goat farm Nepal", "livestock Nepal", "commercial goat farming Nepal", "indigenous goats Nepal", "goat for sale Butwal"],
  openGraph: {
    title: "Butwal Goat Farm - Premium Goat Breeding in Butwal, Nepal",
    description: "Premium Boer, Barbari, and Sirohi goat breeding for commercial farmers in Butwal, Lumbini Province, and across Nepal.",
    url: "https://butwal-goat-farm.vercel.app/",
    siteName: "Butwal Goat Farm",
    locale: "en_US",
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
    title: "Butwal Goat Farm - Premium Goat Breeding in Butwal, Nepal",
    description: "Premium Boer, Barbari, and Sirohi goat breeding for commercial farmers in Butwal, Lumbini Province, and across Nepal.",
    images: ["/logo/Butwal-Goat-Farm-Logo.webp"],
  },
  alternates: {
    canonical: "https://butwal-goat-farm.vercel.app/",
  },
};

export default function Home() {
  return (
   <div>
    <HeroVideo/>
    <AboutSection/>
    <GoatBreedsSection/>
    <GalleryPreview/>
    <WhyChooseUs/>
    <Services/>
    <GoatTrading/>
    <Founder/>
    <FaqSection/>
   </div>
  );
}
