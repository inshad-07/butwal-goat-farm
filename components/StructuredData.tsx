import Script from "next/script";

export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Butwal Goat Farm",
    description: "Premium Boer, Barbari, and Sirohi goat breeding in Nepal. We provide high-quality goat breeds and livestock services for commercial farmers across Nepal.",
    url: "https://butwal-goat-farm.vercel.app",
    logo: "https://butwal-goat-farm.vercel.app/logo/black-text-logo.webp",
    telephone: "+9779811449565",
    email: "info@butwalgoatfarm.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "MFQ7+M5M",
      addressLocality: "Butwal",
      addressRegion: "Lumbini Province",
      postalCode: "32907",
      addressCountry: "NP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "27.7006",
      longitude: "83.4676",
    },
    areaServed: ["Nepal", "Butwal", "Lumbini Province"],
    priceRange: "$$",
    openingHours: "Mo-Su 08:00-18:00",
    sameAs: [
      "https://www.facebook.com/goatfirm",
      "https://www.instagram.com/goatfirm",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+9779811449565",
      contactType: "customer service",
      availableLanguage: ["English", "Nepali"],
    },
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Butwal Goat Farm",
    description: "Premium goat breeding farm in Butwal, Nepal. Specializing in Boer, Barbari, and Sirohi goat breeds for commercial farming.",
    url: "https://butwal-goat-farm.vercel.app",
    telephone: "+9779811449565",
    address: {
      "@type": "PostalAddress",
      streetAddress: "MFQ7+M5M",
      addressLocality: "Butwal",
      addressRegion: "Lumbini Province",
      postalCode: "32907",
      addressCountry: "NP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "27.7006",
      longitude: "83.4676",
    },
    areaServed: ["Butwal", "Lumbini Province", "Nepal"],
    priceRange: "$$",
    openingHours: "Mo-Su 08:00-18:00",
    image: "https://butwal-goat-farm.vercel.app/logo/black-text-logo.webp",
    sameAs: [
      "https://www.facebook.com/goatfirm",
      "https://www.instagram.com/goatfirm",
    ],
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://butwal-goat-farm.vercel.app/",
      },
    ],
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  );
}
