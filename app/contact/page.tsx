import type { Metadata } from "next";
import ContactSection from "@/components/Contact/ContactSection";
import Map from "@/components/Contact/Map";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Us - Butwal Goat Farm | Get in Touch for Premium Goat Breeding",
  description: "Contact Butwal Goat Farm for premium Boer, Barbari, and Sirohi goat breeding services across Nepal. Reach out for inquiries, partnerships, and farm support from Kathmandu, Pokhara, Chitwan, Biratnagar, Butwal, Rupandehi, and all of Nepal.",
  keywords: ["contact goat farm Nepal", "goat breeding inquiry", "buy goats Nepal", "goat farm partnership", "livestock services Nepal", "goat farm Kathmandu", "goat farm Pokhara", "goat farm Chitwan", "goat farm Biratnagar", "goat farm Butwal", "goat farm Rupandehi", "goat farm Taulihawa", "goat farm Lumbini", "goat farm Siddharthanagar"],
  openGraph: {
    title: "Contact Us - Butwal Goat Farm",
    description: "Contact Butwal Goat Farm for premium goat breeding services across Nepal.",
    url: "https://butwal-goat-farm.vercel.app/contact",
    type: "website",
    images: [
      {
        url: "/logo/butwal-goat-farm-logo.webp",
        width: 1200,
        height: 630,
        alt: "Butwal Goat Farm - Premium Goat Breeding Across Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Butwal Goat Farm",
    description: "Contact Butwal Goat Farm for premium goat breeding services across Nepal.",
    images: ["/logo/butwal-goat-farm-logo.webp"],
  },
  alternates: {
    canonical: "https://butwal-goat-farm.vercel.app/contact",
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
      name: "Contact",
      item: "https://butwal-goat-farm.vercel.app/contact",
    },
  ],
};

export default function Page() {
    return (
        <>
          <Script
            id="breadcrumb-schema-contact"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
          <div>
            <ContactSection/>
            <div className="container mx-auto px-4 ">
              <Map />
            </div>
          </div>
        </>
    );
}