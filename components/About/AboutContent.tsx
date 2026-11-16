"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutContent() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [showSectionContent, setShowSectionContent] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || showSectionContent) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSectionContent(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [showSectionContent]);

  const points = [
    "Premium Boer, Barbari, and Sirohi goat breeding",
    "100-200 gm/day growth rates with Boer crossbreeds",
    "Technical training and complete farm support",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main About Section */}
      <section className="flex w-full items-center overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 font-sans">
        <div ref={sectionRef} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
            {/* Left Column: Image */}
            <div className="w-full">
              <div
                className={`relative overflow-hidden rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-700 ease-out ${
                  showSectionContent
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 sm:translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "0ms" }}
              >
                <Image
                  src="/about/Three-Goats-Feeding-at-a-Rustic-Trough.webp"
                  alt="Boer goat breeding farm in Nepal"
                  width={800}
                  height={600}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="relative z-10 flex flex-col space-y-4 sm:space-y-6">
              {/* Badge */}
              <div
                className={`flex items-center gap-3 text-[#1A3322] font-medium tracking-widest text-[10px] sm:text-xs uppercase transition-all duration-700 ease-out ${
                  showSectionContent
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: "120ms" }}
              >
                <span className="w-1 h-3 sm:h-4 bg-linear-to-b from-[#1B5E20] to-[#2E7D32] rounded-sm"></span>
                <span>Our Story</span>
              </div>

              {/* Title */}
              <h2
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-[350] leading-8 sm:leading-10 md:leading-tight text-[#1A3322] transition-all duration-700 ease-out ${
                  showSectionContent
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: "240ms" }}
              >
                Premium Goat Breeding Excellence in Nepal
              </h2>

              {/* Description */}
              <p
                className={`w-full text-gray-600 text-[13px] sm:text-[15px] leading-relaxed transition-all duration-700 ease-out ${
                  showSectionContent
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: "360ms" }}
              >
                We specialize in breeding and selling premium Boer, Barbari, and Sirohi goats across Nepal's diverse ecological zones. Our farm provides pure and crossbred Boer goats, along with indigenous breeds like Barbari, Sirohi, Khari, Sinhal, Chyangra, and Terai goats, tailored to local altitudes and farming conditions.
              </p>

              {/* Points */}
              <div
                className={`space-y-2 sm:space-y-3 transition-all duration-700 ease-out ${
                  showSectionContent
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: "480ms" }}
              >
                {points.map((point, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
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

              {/* Button */}
              <button
                className={`bg-linear-to-r from-[#1B5E20] to-[#2E7D32] text-white px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-md font-medium text-[13px] sm:text-[15px] hover:from-[#145A18] hover:to-[#1B5E20] transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(27,94,32,0.3)] hover:shadow-[0_6px_25px_rgba(27,94,32,0.4)] hover:-translate-y-0.5 w-fit mt-2 ${
                  showSectionContent
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
