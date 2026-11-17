import type { Metadata } from "next";
import ContactSection from "@/components/Contact/ContactSection";
import Map from "@/components/Contact/Map";

export const metadata: Metadata = {
  title: "Contact Us - Butwal Goat Farm | Get in Touch for Premium Goat Breeding",
  description: "Contact Butwal Goat Farm for premium Boer, Barbari, and Sirohi goat breeding services in Nepal. Reach out for inquiries, partnerships, and farm support.",
  keywords: ["contact goat farm Nepal", "goat breeding inquiry", "buy goats Nepal", "goat farm partnership", "livestock services Nepal"],
  openGraph: {
    title: "Contact Us - Butwal Goat Farm",
    description: "Contact Butwal Goat Farm for premium goat breeding services in Nepal.",
    url: "https://butwal-goat-farm.vercel.app/contact",
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
    title: "Contact Us - Butwal Goat Farm",
    description: "Contact Butwal Goat Farm for premium goat breeding services in Nepal.",
    images: ["/logo/Butwal-Goat-Farm-Logo.webp"],
  },
  alternates: {
    canonical: "https://butwal-goat-farm.vercel.app/contact",
  },
};

export default function Page() {
    return (
        <div>
          <ContactSection/>
          <div className="container mx-auto px-4 ">
            <Map />
          </div>
        </div>
    );
}