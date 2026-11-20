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
  title: "Home - Butwal Goat Farm | Premium Boer, Barbari, and Sirohi Goat Breeding Across Nepal",
  description: "Butwal Goat Farm delivers premium Boer, Barbari, and Sirohi goat breeding, indigenous goat farming, and dependable livestock services for commercial farmers in Kathmandu, Pokhara, Chitwan, Biratnagar, Butwal, and across all of Nepal.",
  keywords: ["goat farm Nepal", "goat breeding Nepal", "Boer goats Nepal", "Barbari goats Nepal", "Sirohi goats Nepal", "goat farm Kathmandu", "goat farm Pokhara", "goat farm Chitwan", "goat farm Biratnagar", "goat farm Butwal", "goat farm Lumbini Province", "livestock Nepal", "commercial goat farming Nepal", "indigenous goats Nepal", "goat for sale Nepal", "goat farm Lalitpur", "goat farm Bhaktapur", "goat farm Nepalgunj", "goat farm Bharatpur", "goat farm Birgunj"],
  authors: [{ name: "Butwal Goat Farm" }],
  creator: "Butwal Goat Farm",
  publisher: "Butwal Goat Farm",
  openGraph: {
    title: "Butwal Goat Farm - Premium Goat Breeding Across Nepal",
    description: "Premium Boer, Barbari, and Sirohi goat breeding for commercial farmers in Kathmandu, Pokhara, Chitwan, Biratnagar, Butwal, and across all of Nepal.",
    url: "https://butwal-goat-farm.vercel.app/",
    siteName: "Butwal Goat Farm",
    locale: "en_US",
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
    title: "Butwal Goat Farm - Premium Goat Breeding Across Nepal",
    description: "Premium Boer, Barbari, and Sirohi goat breeding for commercial farmers in Kathmandu, Pokhara, Chitwan, Biratnagar, Butwal, and across all of Nepal.",
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
