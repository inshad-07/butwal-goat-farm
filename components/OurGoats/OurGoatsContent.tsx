"use client";

import Image from "next/image";
import { FaLongArrowAltRight, FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function OurGoatsContent() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());

  const goatBreeds = [
    {
      id: 1,
      title: "Boer Goats",
      description: "Boer goats are world-renowned for their exceptional meat production capabilities. Originating from South Africa, they are known for their muscular build, rapid growth rate, and high-quality meat yield, making them the top choice for commercial goat farming.",
      image: "/goat/boer-goat.webp",
      alt: "Boer goat breed in pasture - premium meat goat for commercial farming with muscular build",
      badge: "Premium Meat Breed",
      points: ["High meat yield", "Fast growth rate", "Muscular build", "Excellent for commercial farming"],
      buttonText: "Learn More",
      imageLeft: true,
    },

    {
      id: 2,
      title: "Barbari Goats",
      description: "Barbari goats are one of the most popular indigenous breeds in Nepal, well-adapted to local conditions. They are known for their dual-purpose utility - both meat and milk production, making them ideal for small farmers.",
      image: "/goat/barbari-goat.webp",
      alt: "Barbari goat breed spotted white and brown - indigenous dual-purpose goat for Nepalese farmers",
      badge: "Indigenous Breed",
      points: ["Dual-purpose: meat & milk", "Adapted to local climate", "Low maintenance", "High twinning rate"],
      buttonText: "Learn More",
      imageLeft: false,
    },

    {
      id: 3,
      title: "Sirohi Goats",
      description: "Sirohi goats are a hardy dual-purpose breed from Rajasthan, India, known for their adaptability to various climatic conditions. They have a distinctive brown coat with darker patches and are valued for both meat and milk production.",
      image: "/goat/sirohi-goat.webp",
      alt: "Sirohi goat breed brown coat - dual purpose dairy and meat goat from Rajasthan",
      badge: "Dual-Purpose Breed",
      points: ["Dual-purpose: meat & milk", "Adaptable to climates", "Hardy and resilient", "Good reproductive rate"],
      buttonText: "Learn More",
      imageLeft: true,
    },
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Product",
        position: 1,
        name: "Boer Goats",
        description: "Boer goats are world-renowned for their exceptional meat production capabilities. Originating from South Africa, they are known for their muscular build, rapid growth rate, and high-quality meat yield, making them the top choice for commercial goat farming.",
        image: "https://butwal-goat-farm.vercel.app/goat/boer-goat.webp",
        brand: {
          "@type": "Organization",
          name: "Butwal Goat Farm"
        },
        offers: {
          "@type": "Offer",
          price: "1900-2500",
          priceCurrency: "NPR",
          availability: "https://schema.org/InStock",
          url: "https://butwal-goat-farm.vercel.app/our-goats"
        }
      },
      {
        "@type": "Product",
        position: 2,
        name: "Barbari Goats",
        description: "Barbari goats are one of the most popular indigenous breeds in Nepal, well-adapted to local conditions. They are known for their dual-purpose utility - both meat and milk production, making them ideal for small farmers.",
        image: "https://butwal-goat-farm.vercel.app/goat/barbari-goat.webp",
        brand: {
          "@type": "Organization",
          name: "Butwal Goat Farm"
        },
        offers: {
          "@type": "Offer",
          price: "900-1500",
          priceCurrency: "NPR",
          availability: "https://schema.org/InStock",
          url: "https://butwal-goat-farm.vercel.app/our-goats"
        }
      },
      {
        "@type": "Product",
        position: 3,
        name: "Sirohi Goats",
        description: "Sirohi goats are a hardy dual-purpose breed from Rajasthan, India, known for their adaptability to various climatic conditions. They have a distinctive brown coat with darker patches and are valued for both meat and milk production.",
        image: "https://butwal-goat-farm.vercel.app/goat/sirohi-goat.webp",
        brand: {
          "@type": "Organization",
          name: "Butwal Goat Farm"
        },
        offers: {
          "@type": "Offer",
          price: "900-1500",
          priceCurrency: "NPR",
          availability: "https://schema.org/InStock",
          url: "https://butwal-goat-farm.vercel.app/our-goats"
        }
      }
    ]
  };

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, index]));
            observer.disconnect();
          }
        },
        { threshold: 0.1 },
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Main Page Heading */}
        <section className="flex w-full items-center overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 font-sans">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-[350] leading-8 sm:leading-10 md:leading-tight text-[#1A3322]">
                Our Premium Goat Breeds
              </h1>
              <p className="text-gray-600 text-[13px] sm:text-[15px] leading-relaxed max-w-2xl mx-auto mt-4">
                Discover our premium goat breeds including Boer, Barbari, Sirohi, Khari, and indigenous goats tailored for Nepal's diverse ecological zones.
              </p>
            </div>
          </div>
        </section>

        {/* Goat Breed Sections - Zigzag Layout */}
        {goatBreeds.map((breed, index) => (
          <section
            key={breed.id}
            ref={(el) => {
              sectionRefs.current[index] = el as HTMLDivElement | null;
            }}
            className="flex w-full items-center overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 font-sans"
          >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 ${
                  breed.imageLeft ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Image Column */}
                <div className={`w-full ${breed.imageLeft ? "" : "lg:col-start-2"}`}>
                  <div
                    className={`relative overflow-hidden rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-700 ease-out ${
                      visibleSections.has(index)
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 sm:translate-y-8 opacity-0"
                    }`}
                    style={{ transitionDelay: "0ms" }}
                  >
                    <Image
                      src={breed.image}
                      alt={breed.alt}
                      width={500}
                      height={400}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Content Column */}
                <div className={`relative z-10 flex flex-col space-y-4 sm:space-y-6 ${breed.imageLeft ? "" : "lg:col-start-1"}`}>
                  {/* Badge */}
                  <div
                    className={`flex items-center gap-3 text-[#1A3322] font-medium tracking-widest text-[10px] sm:text-xs uppercase transition-all duration-700 ease-out ${
                      visibleSections.has(index)
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }`}
                    style={{ transitionDelay: "120ms" }}
                  >
                    <span className="w-1 h-3 sm:h-4 bg-gradient-to-b from-[#1B5E20] to-[#2E7D32] rounded-sm"></span>
                    <span>{breed.badge}</span>
                  </div>

                  {/* Title */}
                  <h2
                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-[350] leading-8 sm:leading-10 md:leading-tight text-[#1A3322] transition-all duration-700 ease-out ${
                      visibleSections.has(index)
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }`}
                    style={{ transitionDelay: "240ms" }}
                  >
                    {breed.title}
                  </h2>

                  {/* Description */}
                  <p
                    className={`w-full text-gray-600 text-[13px] sm:text-[15px] leading-relaxed transition-all duration-700 ease-out ${
                      visibleSections.has(index)
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }`}
                    style={{ transitionDelay: "360ms" }}
                  >
                    {breed.description}
                  </p>

                  {/* Points */}
                  <div
                    className={`space-y-2 sm:space-y-3 transition-all duration-700 ease-out ${
                      visibleSections.has(index)
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }`}
                    style={{ transitionDelay: "480ms" }}
                  >
                    {breed.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-2 sm:gap-3">
                        <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-[#2E7D32]/10 text-[#2E7D32] mt-0.5">
                          <svg
                            className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-[13px] sm:text-[15px] leading-relaxed text-gray-600">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div
                    className={`flex gap-3 sm:gap-4 mt-2 transition-all duration-700 ease-out ${
                      visibleSections.has(index)
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }`}
                    style={{ transitionDelay: "600ms" }}
                  >
                    <button className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md font-medium text-[12px] sm:text-[13px] hover:from-[#145A18] hover:to-[#1B5E20] transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(27,94,32,0.3)] hover:shadow-[0_6px_25px_rgba(27,94,32,0.4)] hover:-translate-y-0.5 w-fit flex items-center justify-center gap-2">
                      <FaWhatsapp className="text-sm sm:text-base" />
                      WhatsApp
                    </button>
                    <button className="bg-[#505050] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md font-medium text-[12px] sm:text-[13px] hover:bg-[#4B5563] transition-all duration-300 ease-out shadow-[0_4px 20px_rgba(107,114,128,0.3)] hover:shadow-[0_6px 25px_rgba(107,114,128,0.4)] hover:-translate-y-0.5 w-fit flex items-center justify-center gap-2">
                      Contact Us
                      <FaLongArrowAltRight className="text-xs" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
