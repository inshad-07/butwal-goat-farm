import Script from "next/script";

export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Butwal Goat Farm",
    alternateName: "Butwal Goat Farm Nepal",
    description: "Premium Boer, Barbari, and Sirohi goat breeding in Nepal. We provide high-quality goat breeds and livestock services for commercial farmers across Kathmandu, Pokhara, Chitwan, Biratnagar, Butwal, Rupandehi, Taulihawa, Lumbini, and all of Nepal.",
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
    areaServed: ["Nepal", "Kathmandu", "Pokhara", "Chitwan", "Biratnagar", "Butwal", "Rupandehi", "Taulihawa", "Lumbini", "Bhairahawa", "Siddharthanagar", "Kapilvastu", "Lalitpur", "Bhaktapur", "Nepalgunj", "Bharatpur", "Birgunj", "Dhangadhi", "Lumbini Province", "Bagmati Province", "Gandaki Province", "Province 1", "Province 2", "Karnali Province", "Sudurpashchim Province"],
    priceRange: "$$",
    openingHours: "Mo-Su 08:00-18:00",
    sameAs: [
      "https://www.facebook.com/wazid.ali.69740",
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
    alternateName: "Butwal Goat Farm Nepal",
    description: "Premium goat breeding farm in Nepal. Specializing in Boer, Barbari, and Sirohi goat breeds for commercial farming across Kathmandu, Pokhara, Chitwan, Biratnagar, Butwal, Rupandehi, Taulihawa, Lumbini, and all of Nepal.",
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
    areaServed: ["Nepal", "Kathmandu", "Pokhara", "Chitwan", "Biratnagar", "Butwal", "Rupandehi", "Taulihawa", "Lumbini", "Bhairahawa", "Siddharthanagar", "Kapilvastu", "Lalitpur", "Bhaktapur", "Nepalgunj", "Bharatpur", "Birgunj", "Dhangadhi", "Lumbini Province", "Bagmati Province", "Gandaki Province", "Province 1", "Province 2", "Karnali Province", "Sudurpashchim Province"],
    priceRange: "$$",
    openingHours: "Mo-Su 08:00-18:00",
    image: "https://butwal-goat-farm.vercel.app/logo/black-text-logo.webp",
    sameAs: [
      "https://www.facebook.com/wazid.ali.69740",
    ],
  };

  const webSiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Butwal Goat Farm",
    alternateName: "Butwal Goat Farm Nepal",
    url: "https://butwal-goat-farm.vercel.app",
    description: "Premium Boer, Barbari, and Sirohi goat breeding across Nepal",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://butwal-goat-farm.vercel.app/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
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
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteData) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  );
}
