"use client";

import Image from "next/image";
import { FaLongArrowAltRight, FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function GoatBreedsSection() {
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
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [showSectionContent]);

  const breeds = [
    {
      id: "01",
      name: "Boer Goat",
      description: "Known for its muscular body, strong build and meat-production potential. A popular choice for commercial goat breeding.",
      origin: "South Africa",
      image: "/about/Three-Goats-Feeding-at-a-Rustic-Trough.webp",
    },
    {
      id: "02",
      name: "Barbari Goat",
      description: "A compact breed recognized by its white coat with brown or reddish spots. Suitable for intensive and stall-fed farming systems.",
      origin: "India",
      image: "/about/Educational-Goat-Breed-Identification.webp",
    },
    {
      id: "03",
      name: "Sirohi Goat",
      description: "A medium-sized breed known for its compact body, brown coat and distinctive darker patches.",
      origin: "Rajasthan, India",
      image: "/about/Labeled-Goats-in-a-Rural-Pasture.webp",
    },
  ];

  return (
    <section className="flex w-full items-center overflow-hidden bg-white py-12 md:py-16 lg:py-20 font-sans">
      <div ref={sectionRef} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-8 md:space-y-12">
          {/* Header */}
          <div className="text-center">
            <div
              className={`flex items-center justify-center gap-3 text-[#1A3322] font-medium tracking-widest text-[10px] sm:text-xs uppercase transition-all duration-700 ease-out ${
                showSectionContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <span className="w-1 h-3 sm:h-4 bg-linear-to-b from-[#1B5E20] to-[#2E7D32] rounded-sm"></span>
              <span>EXPLORE OUR COLLECTION</span>
            </div>

            <h2
              className={`text-2xl sm:text-3xl md:text-[44px] font-[350] leading-8 sm:leading-10 md:leading-tight text-[#1A3322] mt-3 sm:mt-4 transition-all duration-700 ease-out ${
                showSectionContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "120ms" }}
            >
              Discover Our Premium Goat Breeds
            </h2>

            <p
              className={`text-gray-600 text-[13px] sm:text-[15px] leading-relaxed max-w-2xl mx-auto mt-3 sm:mt-4 px-2 transition-all duration-700 ease-out ${
                showSectionContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "240ms" }}
            >
              Explore our selected goat breeds, each with unique characteristics and farming potential.
            </p>
          </div>

          {/* Breeds Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {breeds.map((breed, index) => (
              <div
                key={breed.id}
                className={`group bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden transition-all duration-700 ease-out hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] ${
                  showSectionContent
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: `${360 + index * 120}ms` }}
              >
                <div className="relative aspect-4/3.5 overflow-hidden p-2 sm:p-3">
                  <Image
                    src={breed.image}
                    alt={breed.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4 flex flex-col space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <h3 className="text-lg sm:text-xl font-medium text-[#1A3322]">
                      {breed.name}
                    </h3>
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-[#1B5E20] font-medium text-xs sm:text-sm">
                      {breed.id}
                    </span>
                  </div>

                  <p className="text-gray-600 text-[13px] sm:text-[15px] leading-relaxed line-clamp-2">
                    {breed.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <span className="font-medium">Origin:</span>
                    <span>{breed.origin}</span>
                  </div>

                  <div className="flex gap-2 sm:gap-3 mt-2">
                    <button className="bg-linear-to-r from-[#1B5E20] to-[#2E7D32] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-md font-medium text-[13px] sm:text-[15px] hover:from-[#145A18] hover:to-[#1B5E20] transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(27,94,32,0.3)] hover:shadow-[0_6px_25px_rgba(27,94,32,0.4)] hover:-translate-y-0.5 flex-1 flex items-center justify-center gap-2">
                      <FaWhatsapp className="text-base sm:text-lg" />
                      WhatsApp
                    </button>
                    <button className="bg-[#505050] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-md font-medium text-[13px] sm:text-[15px] hover:bg-[#4B5563] transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(107,114,128,0.3)] hover:shadow-[0_6px_25px_rgba(107,114,128,0.4)] hover:-translate-y-0.5 flex-1 flex items-center justify-center gap-2">
                      View Details
                      <FaLongArrowAltRight className="text-xs sm:text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
