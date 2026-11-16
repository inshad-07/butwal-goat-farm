"use client";

import Image from "next/image";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function GalleryPreview() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [showSectionContent, setShowSectionContent] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const galleryImages = [
    {
      src: "/about/Three-Goats-Feeding-at-a-Rustic-Trough.webp",
      alt: "Boer goats feeding at trough",
      title: "Boer Goats"
    },
    {
      src: "/about/Educational-Goat-Breed-Identification.webp",
      alt: "Khari goat indigenous breed",
      title: "Khari Breed"
    },
    {
      src: "/about/Labeled-Goats-in-a-Rural-Pasture.webp",
      alt: "Goats in rural pasture",
      title: "Pasture Grazing"
    },
    {
      src: "/about/Three-Goats-Feeding-at-a-Rustic-Trough.webp",
      alt: "Boer goats feeding at trough",
      title: "Boer Goats"
    },
    {
      src: "/about/Educational-Goat-Breed-Identification.webp",
      alt: "Khari goat indigenous breed",
      title: "Khari Breed"
    },
    {
      src: "/about/Labeled-Goats-in-a-Rural-Pasture.webp",
      alt: "Goats in rural pasture",
      title: "Pasture Grazing"
    },
  ];

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (galleryImages.length - visibleCards + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (galleryImages.length - visibleCards + 1)) % (galleryImages.length - visibleCards + 1));
  };

  return (
    <section className="flex w-full items-center overflow-hidden bg-white pt-4 pb-10 sm:pt-8 sm:pb-14 md:pt-0 md:pb-14 font-sans">
      <div ref={sectionRef} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`rounded-xl sm:rounded-2xl border border-gray-100 bg-[#F3F5F4] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden transition-all duration-700 ease-out ${
            showSectionContent
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          {/* Header */}
          <div className="px-6 sm:px-8 md:px-12 pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-8 md:pb-10 text-center">
            <h2
              className={`text-2xl font-[350] leading-tight text-[#1A3322] md:text-4xl mb-3 transition-all duration-700 ease-out ${
                showSectionContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "120ms" }}
            >
              Our Gallery
            </h2>

            <p
              className={`text-[#1A3322] text-[13px] sm:text-[15px] leading-relaxed max-w-2xl mx-auto transition-all duration-700 ease-out ${
                showSectionContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "240ms" }}
            >
              Take a visual tour of our premium goat farm. From healthy Boer goats to our breeding facilities,
              see the quality and care we put into raising our goats across Nepal.
            </p>
          </div>

          {/* Carousel */}
          <div
            className={`relative px-4 sm:px-6 md:px-8 pb-8 sm:pb-10 md:pb-12 transition-all duration-700 ease-out ${
              showSectionContent
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "360ms" }}
          >
            <div className="relative">
              {/* Cards Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                >
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className={`shrink-0 px-1.5 sm:px-2 lg:px-2.5 ${
                        visibleCards === 1 ? 'w-full' : visibleCards === 2 ? 'w-1/2' : 'w-1/3'
                      }`}
                    >
                      <div className="group relative aspect-4/3 overflow-hidden rounded-md sm:rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={600}
                          height={450}
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#1A3322]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                            <h3 className="text-white text-lg sm:text-xl font-medium">{image.title}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={prevSlide}
                  className="flex items-center justify-center px-5 py-1 rounded-full bg-transparent text-[#1A3322] border-2 border-[#1A3322] shadow-none hover:bg-[#1A3322]/10 transition-all duration-300 hover:scale-105"
                >
                  <FaLongArrowAltLeft className="h-4 w-4" />
                </button>

                <button
                  onClick={nextSlide}
                  className="flex items-center justify-center px-5 py-1 rounded-full bg-transparent text-[#1A3322] border-2 border-[#1A3322] shadow-none hover:bg-[#1A3322]/10 transition-all duration-300 hover:scale-105"
                >
                  <FaLongArrowAltRight className="h-4 w-4" />
                </button>
              </div>

              {/* Dots Indicator - Hidden on mobile */}
              <div className="hidden md:flex justify-center gap-2 mt-6">
                {Array.from({ length: galleryImages.length - visibleCards + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-[#1A3322]"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
