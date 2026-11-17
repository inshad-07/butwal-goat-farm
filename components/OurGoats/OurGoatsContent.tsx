"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight, FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function OurGoatsContent() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const headingRef = useRef<HTMLDivElement | null>(null);
  const [headingVisible, setHeadingVisible] = useState(false);
  const whatsappNumber = "9779811449565";
  const whatsappMessage = "Hello! I'm interested in your goat breeding services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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

  useEffect(() => {
    if (!headingRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Boer Goats",
    description: "Boer goats are world-renowned for their exceptional meat production capabilities. Originating from South Africa, they are known for their muscular build, rapid growth rate, and high-quality meat yield.",
    image: "https://butwal-goat-farm.vercel.app/goat/boer-goat.webp",
    brand: {
      "@type": "Brand",
      name: "Butwal Goat Farm",
    },
    offers: {
      "@type": "Offer",
      price: "2500",
      priceCurrency: "NPR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Butwal Goat Farm",
      },
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
        name: "Our Goats",
        item: "https://butwal-goat-farm.vercel.app/our-goats",
      },
    ],
  };

  return (
    <>
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="breadcrumb-schema-our-goats"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen pt-8 pb-10 sm:pt-16 sm:pb-14 md:pt-20 md:pb-10 bg-white">
        {/* Main Page Heading */}
        <section ref={headingRef} className="flex w-full items-center overflow-hidden font-sans">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1
                className={`text-2xl font-[350] leading-tight text-[#1A3322] md:text-4xl mb-3 transition-all duration-700 ease-out ${
                  headingVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "0ms" }}
              >
                Our Premium Goat Breeds
              </h1>
              <p
                className={`text-gray-600 text-[13px] sm:text-[15px] leading-relaxed max-w-2xl mx-auto mt-4 transition-all duration-700 ease-out ${
                  headingVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "150ms" }}
              >
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
            className="flex w-full items-center overflow-hidden py-12 md:py-16 font-sans"
          >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16 ${
                  breed.imageLeft ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Image Column */}
                <div className={`w-full lg:col-span-5 ${breed.imageLeft ? "" : "lg:col-start-8"}`}>
                  <div
                    className={`relative overflow-hidden rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-700 ease-out group ${
                      visibleSections.has(index)
                        ? "translate-y-0 opacity-100 scale-100"
                        : "translate-y-6 sm:translate-y-8 opacity-0 scale-95"
                    }`}
                    style={{ transitionDelay: "0ms" }}
                  >
                    <Image
                      src={breed.image}
                      alt={breed.alt}
                      width={400}
                      height={320}
                      sizes="(min-width: 1024px) 35vw, 100vw"
                      className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content Column */}
                <div className={`relative z-10 flex flex-col space-y-4 sm:space-y-6 lg:col-span-7 ${breed.imageLeft ? "" : "lg:col-start-1"}`}>
                  {/* Badge */}
                  <div
                    className={`flex items-center gap-3 text-[#1A3322] font-medium tracking-widest text-[10px] sm:text-xs uppercase transition-all duration-700 ease-out ${
                      visibleSections.has(index)
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }`}
                    style={{ transitionDelay: "120ms" }}
                  >
                    <span
                      className={`w-1 h-3 sm:h-4 bg-linear-to-b from-[#1B5E20] to-[#2E7D32] rounded-sm transition-all duration-500 ease-out ${
                        visibleSections.has(index) ? "scale-x-100" : "scale-x-0"
                      }`}
                      style={{ transitionDelay: "220ms" }}
                    ></span>
                    <span className={`transition-all duration-500 ease-out ${visibleSections.has(index) ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "280ms" }}>
                      {breed.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-[350] leading-5 sm:leading-6 md:leading-7 text-[#1A3322] transition-all duration-700 ease-out ${
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
                  <div className="space-y-2 sm:space-y-3">
                    {breed.points.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        className={`flex items-start gap-2 sm:gap-3 transition-all duration-700 ease-out ${
                          visibleSections.has(index)
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }`}
                        style={{ transitionDelay: `${480 + pointIndex * 100}ms` }}
                      >
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
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-linear-to-r from-[#1B5E20] to-[#2E7D32] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium text-[12px] sm:text-[13px] hover:from-[#145A18] hover:to-[#1B5E20] transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(27,94,32,0.3)] hover:shadow-[0_6px_25px_rgba(27,94,32,0.4)] hover:-translate-y-0.5 w-fit flex items-center justify-center gap-2"
                    >
                      <FaWhatsapp className="text-sm sm:text-base" />
                      WhatsApp
                    </a>
                    <Link
                      href="/contact"
                      className="bg-[#505050] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium text-[12px] sm:text-[13px] hover:bg-[#4B5563] transition-all duration-300 ease-out shadow-[0_4px 20px_rgba(107,114,128,0.3)] hover:shadow-[0_6px 25px_rgba(107,114,128,0.4)] hover:-translate-y-0.5 w-fit flex items-center justify-center gap-2"
                    >
                      Contact Us
                      <FaLongArrowAltRight className="text-xs" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
