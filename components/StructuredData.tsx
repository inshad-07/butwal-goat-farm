import Script from "next/script";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Butwal Goat Farm",
    description: "Premium Boer, Barbari, and Sirohi goat breeding in Nepal",
    url: "https://butwal-goat-farm.vercel.app",
    telephone: "+9779847044546",
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
    areaServed: "Nepal",
    priceRange: "$$",
    openingHours: "Mo-Su 08:00-18:00",
    sameAs: [
      "https://www.facebook.com/goatfirm",
      "https://www.instagram.com/goatfirm",
    ],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
