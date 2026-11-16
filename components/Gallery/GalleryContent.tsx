"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function GalleryContent() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [showSectionContent, setShowSectionContent] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[number] | null>(null);

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
      alt: "Goat feeding time",
      title: "Feeding Time"
    },
    {
      src: "/about/Educational-Goat-Breed-Identification.webp",
      alt: "Indigenous goat breeds",
      title: "Indigenous Breeds"
    },
    {
      src: "/about/Labeled-Goats-in-a-Rural-Pasture.webp",
      alt: "Rural goat farming",
      title: "Rural Farming"
    },
  ];

  return (
    <section className="flex w-full items-center overflow-hidden bg-[#1A3322]/2 font-sans pt-8 pb-10 sm:pt-16 sm:pb-14 md:pt-20 md:pb-16">
      <div ref={sectionRef} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-8 md:space-y-12">
          {/* Header */}
          <div className="text-center">
            <h1
              className={`text-2xl font-[350] leading-tight text-[#1A3322] md:text-4xl mb-3 transition-all duration-700 ease-out ${
                showSectionContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              Our Gallery
            </h1>

            <p
              className={`text-gray-600 text-[13px] sm:text-[15px] leading-relaxed max-w-2xl mx-auto mt-3 sm:mt-4 px-2 transition-all duration-700 ease-out ${
                showSectionContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "120ms" }}
            >
              Take a visual tour of our premium goat farm. From healthy Boer goats to our breeding facilities,
              see the quality and care we put into raising our goats across Nepal.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`group relative aspect-4/3 overflow-hidden rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-700 ease-out hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] cursor-pointer ${
                  showSectionContent
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: `${240 + index * 100}ms` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-white text-lg sm:text-xl font-medium">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 sm:p-6 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-8 md:right-8 text-white hover:text-gray-300 transition-colors z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-10 sm:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="relative w-full max-w-6xl max-h-[85vh] flex items-center justify-center">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={900}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
          </div>
          <div className="mt-3 sm:mt-4 text-center">
            <h3 className="text-white text-xl sm:text-2xl font-medium">{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
}
