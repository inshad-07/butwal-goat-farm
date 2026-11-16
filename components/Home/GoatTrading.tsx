"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function GoatTrading() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [showSectionContent, setShowSectionContent] = useState(false);
  const [animateStats, setAnimateStats] = useState(false);
  const [countedValues, setCountedValues] = useState({ goats: 0, farmers: 0, districts: 0, quality: 0 });
  const whatsappNumber = "9779847044546";
  const whatsappMessage = "Hello! I'm interested in your goat breeding services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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

  useEffect(() => {
    const stats = statsRef.current;

    if (!stats || animateStats) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateStats(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    observer.observe(stats);

    return () => observer.disconnect();
  }, [animateStats]);

  useEffect(() => {
    if (!animateStats) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCountedValues({
        goats: Math.floor(500 * easeOut),
        farmers: Math.floor(200 * easeOut),
        districts: Math.floor(50 * easeOut),
        quality: Math.floor(100 * easeOut),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCountedValues({ goats: 500, farmers: 200, districts: 50, quality: 100 });
      }
    }, interval);

    return () => clearInterval(timer);
  }, [animateStats]);

  return (
    <section className="flex w-full items-center overflow-hidden bg-white pt-6 pb-10 sm:pt-8 sm:pb-14 md:pt-14 md:pb-14 font-sans">
      <div ref={sectionRef} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-8 md:space-y-12">
          {/* Header */}
          <div className="text-center">
            <h2
              className={`text-2xl font-[350] leading-tight text-[#1A3322] md:text-4xl mb-3 transition-all duration-700 ease-out ${
                showSectionContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              Buy & Sell Goats
            </h2>

            <p
              className={`text-gray-600 text-[13px] sm:text-[15px] leading-relaxed max-w-2xl mx-auto transition-all duration-700 ease-out ${
                showSectionContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "120ms" }}
            >
              Premium goats from our farm and a trusted marketplace for farmers across Nepal.
            </p>
          </div>

          {/* Trading Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
            {/* Our Goats Section */}
            <div
              className={`rounded-xl sm:rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden transition-all duration-700 ease-out hover:shadow-[0_12px_40px(rgb(0,0,0,0.12))] ${
                showSectionContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "240ms" }}
            >
              {/* Mobile: Stacked layout */}
              <div className="lg:hidden">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/about/dnygpshzyrhhieccwwwj.webp"
                    alt="Premium Boer goats for sale"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-8">
                  <h3 className="text-[#1A3322] text-xl sm:text-2xl font-medium mb-2">
                    Our Premium Goats
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    Buy healthy Boer, Barbari, Sirohi, and indigenous goats directly from our farm with guaranteed quality and health.
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1A3322] text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full font-medium text-sm hover:bg-[#1B5E20] transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
                  >
                    <FaWhatsapp className="text-sm sm:text-base" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Desktop: Overlay layout */}
              <div className="hidden lg:block relative aspect-video overflow-hidden">
                <Image
                  src="/about/dnygpshzyrhhieccwwwj.webp"
                  alt="Premium Boer goats for sale"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="text-white text-xl sm:text-2xl font-medium mb-2">
                    Our Premium Goats
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4">
                    Buy healthy Boer, Barbari, Sirohi, and indigenous goats directly from our farm with guaranteed quality and health.
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white px-4 py-2 sm:px-5 sm:py-2 rounded-full font-medium text-sm hover:bg-white hover:text-[#1B5E20] transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.4)] hover:-translate-y-0.5"
                  >
                    <FaWhatsapp className="text-sm sm:text-base" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Farmers Marketplace Section */}
            <div
              className={`rounded-xl sm:rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden transition-all duration-700 ease-out hover:shadow-[0_12px_40px(rgb(0,0,0,0.12))] ${
                showSectionContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "360ms" }}
            >
              {/* Mobile: Stacked layout */}
              <div className="lg:hidden">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/about/fmz2vnhyvgaozpkidhci.webp"
                    alt="Farmers marketplace for selling goats"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-8">
                  <h3 className="text-[#1A3322] text-xl sm:text-2xl font-medium mb-2">
                    Farmers Marketplace
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    Sell your goats through our trusted platform. We connect farmers with buyers across Nepal at fair prices.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#1A3322] text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full font-medium text-sm hover:bg-[#505050] transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
                  >
                    <FaWhatsapp className="text-sm sm:text-base" />
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Desktop: Overlay layout */}
              <div className="hidden lg:block relative aspect-video overflow-hidden">
                <Image
                  src="/about/fmz2vnhyvgaozpkidhci.webp"
                  alt="Farmers marketplace for selling goats"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="text-white text-xl sm:text-2xl font-medium mb-2">
                    Farmers Marketplace
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4">
                    Sell your goats through our trusted platform. We connect farmers with buyers across Nepal at fair prices.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white px-4 py-2 sm:px-5 sm:py-2 rounded-full font-medium text-sm hover:bg-white hover:text-[#505050] transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.4)] hover:-translate-y-0.5"
                  >
                    <FaWhatsapp className="text-sm sm:text-base" />
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-4 transition-all duration-700 ease-out ${
              showSectionContent
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "480ms" }}
          >
            <div className="text-center p-4 sm:p-6 rounded-xl bg-[#1A3322]/5">
              <div className="text-2xl sm:text-3xl font-medium text-[#1A3322] mb-1">{countedValues.goats}+</div>
              <div className="text-gray-600 text-xs sm:text-sm">Goats Sold</div>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl bg-[#1A3322]/5">
              <div className="text-2xl sm:text-3xl font-medium text-[#1A3322] mb-1">{countedValues.farmers}+</div>
              <div className="text-gray-600 text-xs sm:text-sm">Happy Farmers</div>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl bg-[#1A3322]/5">
              <div className="text-2xl sm:text-3xl font-medium text-[#1A3322] mb-1">{countedValues.districts}+</div>
              <div className="text-gray-600 text-xs sm:text-sm">Districts Covered</div>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl bg-[#1A3322]/5">
              <div className="text-2xl sm:text-3xl font-medium text-[#1A3322] mb-1">{countedValues.quality}%</div>
              <div className="text-gray-600 text-xs sm:text-sm">Quality Assured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
