"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
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

  return (
    <section className="flex w-full items-center overflow-hidden bg-[#1A3322]/2 pt-6 pb-10 sm:pt-8 sm:pb-14 md:pt-16 md:pb-16  font-sans">
      <div ref={sectionRef} className="templateContainer">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[6fr_6fr] lg:gap-8">
          {/* Left Column: Images & Stats Grid */}
          <div className="w-full">
            <div className="grid grid-cols-2 gap-4 md:gap-4 items-start">
              {/* First Grid Column */}
              <div className="flex flex-col gap-4 md:gap-4 lg:order-0">
                <Image
                  src="/about/boer-goats-feeding-at-trough.webp"
                  alt="Boer goat breeding farm in Nepal"
                  width={1254}
                  height={1254}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className={`w-full h-auto object-cover rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-700 ease-out order-1 lg:order-0 ${
                    showSectionContent
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                  style={{ transitionDelay: "160ms" }}
                />
                <div
                  className={`bg-linear-to-r from-[#1B5E20] to-[#2E7D32] text-white p-4 md:p-6 lg:p-8 rounded-md text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-700 ease-out order-3 lg:order-0 ${
                    showSectionContent
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <h3 className="text-xl md:text-2xl lg:text-[44px] font-medium leading-none mb-2">
                    10.25M+
                  </h3>
                  <h4 className="text-[11px] md:text-[13px] lg:text-[15px] leading-relaxed font-medium">
                    Goat Production
                  </h4>
                </div>
              </div>

              {/* Second Grid Column (Staggered spacing) */}
              <div className="flex flex-col gap-4 md:gap-4 lg:mt-12 lg:order-0">
                <div
                  className={`bg-[#000000] text-white p-4 md:p-6 lg:p-8 rounded-md text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-700 ease-out order-2 lg:order-0 ${
                    showSectionContent
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                  style={{ transitionDelay: "280ms" }}
                >
                  <h3 className="text-xl md:text-2xl lg:text-[44px] font-medium leading-none mb-2">
                    20.3%
                  </h3>
                  <h4 className="text-[11px] md:text-[13px] lg:text-[15px] leading-relaxed font-medium">
                    Goats in Nepal
                  </h4>
                </div>
                <Image
                 src="/about/khari-goats-pastoral-field-nepal.webp"
                  alt="Khari goat indigenous breed in Nepal hills"
                  width={1471}
                  height={1590}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className={`w-full h-auto object-cover rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-700 ease-out order-4 lg:order-0 ${
                    showSectionContent
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                  style={{ transitionDelay: "520ms" }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="relative z-10 flex flex-col space-y-3 md:space-y-4 lg:pl-4">
            <div
              className={`flex items-center gap-3 text-[#1A3322] font-medium tracking-widest text-xs uppercase transition-all duration-700 ease-out ${
                showSectionContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <span className="w-1 h-4 bg-linear-to-b from-[#1B5E20] to-[#2E7D32] rounded-sm"></span>
              <span>About Farm</span>
            </div>

            <h2
              className={`text-2xl font-[350] leading-tight text-[#1A3322] md:text-4xl transition-all duration-700 ease-out ${
                showSectionContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "120ms" }}
            >
              Premium Boer, Barbari, <br className="hidden lg:block" /> &amp;
              Sirohi Goats
            </h2>

            <p
              className={`w-full text-gray-600 text-[14px] sm:text-[16px] leading-relaxed transition-all duration-700 ease-out ${
                showSectionContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "240ms" }}
            >
              We specialize in breeding and selling premium Boer, Barbari, and
              Sirohi goats across Nepal's diverse ecological zones. Our farm
              provides pure and crossbred Boer goats, along with indigenous
              breeds like Barbari, Sirohi, Khari, Sinhal, Chyangra, and Terai
              goats, tailored to local altitudes and farming conditions.
            </p>
            <p
              className={`w-full text-gray-600 text-[14px] sm:text-[16px] leading-relaxed transition-all duration-700 ease-out ${
                showSectionContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "360ms" }}
            >
              With Boer crossbreeds achieving 100-200 gm/day growth rates—nearly
              double native breeds—we help farmers upgrade their herds for
              higher meat production. From Kathmandu, Pokhara, Chitwan, Biratnagar, Butwal, Rupandehi, Taulihawa, Bhairahawa, Siddharthanagar, and across all of Nepal, we deliver
              superior breeding stock, technical training, and complete support
              for commercial goat farming success.
            </p>

            <Link href="/about">
              <button
                className={`bg-linear-to-r from-[#1B5E20] to-[#2E7D32] text-white px-8 py-3 rounded-full font-medium text-[15px] hover:from-[#145A18] hover:to-[#1B5E20] transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(27,94,32,0.3)] hover:shadow-[0_6px_25px_rgba(27,94,32,0.4)] hover:-translate-y-0.5 w-fit flex items-center gap-2 ${
                  showSectionContent
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: "480ms" }}
              >
                About Our Goats
                <FaLongArrowAltRight className="text-sm" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
