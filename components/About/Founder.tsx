"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Founder() {
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
    <section className="flex w-full items-center overflow-hidden bg-white pt-6 pb-10 sm:pt-8 sm:pb-14 md:pt-4 md:pb-16 font-sans">
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
              Meet Our Founder
            </h2>

            <p
              className={`text-[#1A3322] text-[14px] sm:text-[16px] leading-relaxed max-w-2xl mx-auto transition-all duration-700 ease-out ${
                showSectionContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "240ms" }}
            >
              The visionary behind Butwal Goat Farm's commitment to excellence in goat breeding across Nepal.
            </p>
          </div>

          {/* Founder Card */}
          <div
            className={`px-4 sm:px-8 md:px-12 pb-8 sm:pb-10 md:pb-12 transition-all duration-700 ease-out ${
              showSectionContent
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
          }`}
            style={{ transitionDelay: "360ms" }}
          >
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-12 items-center">
              {/* Image */}
              <div className="flex-shrink-0 w-full sm:w-auto">
                <div className="aspect-[4/5] w-full sm:w-64 md:w-72 lg:w-80 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                  <Image
                    src="/about/gfpfmvj2xvscl5vvlg25.webp"
                    alt="Founder"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="mb-3">
                  <h3 className="text-xl sm:text-2xl font-[350] text-[#1A3322] mb-1">
                    Wazid Ali
                  </h3>
                  <p className="text-[#2E7D32] font-medium text-xs sm:text-sm tracking-wide uppercase">
                    Founder & CEO
                  </p>
                </div>

                <p className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed mb-3">
                  With years of dedicated experience in goat farming and animal husbandry, our founder established Butwal Goat Farm with a vision to revolutionize goat breeding in Nepal. Passionate about sustainable agriculture and empowering local farmers, he has transformed the farm into a model of excellence in goat husbandry.
                </p>

                <p className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed mb-4">
                  His expertise extends to advanced breeding techniques, nutrition management, and disease prevention, ensuring the highest quality of livestock. Through workshops and hands-on training, he continues to share knowledge with fellow farmers, contributing to the growth of Nepal's agricultural sector.
                </p>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-sm">
                  <div className="rounded-xl sm:rounded-2xl border-2 border-gray-200 p-2 sm:p-3">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#2E7D32]/10 flex items-center justify-center shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 sm:h-7 sm:w-7 text-[#2E7D32]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] sm:text-xs text-gray-500 mb-1">Experience</p>
                        <p className="text-xs sm:text-sm font-medium text-[#1A3322]">10+ Years</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl sm:rounded-2xl border-2 border-gray-200 p-2 sm:p-3">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#2E7D32]/10 flex items-center justify-center shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 sm:h-7 sm:w-7 text-[#2E7D32]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] sm:text-xs text-gray-500 mb-1">Farmers Trained</p>
                        <p className="text-xs sm:text-sm font-medium text-[#1A3322]">500+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
