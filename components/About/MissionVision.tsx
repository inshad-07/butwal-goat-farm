"use client";

import { useEffect, useRef, useState } from "react";

export default function MissionVision() {
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
    <section className="flex w-full items-center overflow-hidden bg-white pt-6 pb-10 sm:pt-8 sm:pb-14 md:pt-0 md:pb-16 font-sans">
      <div ref={sectionRef} className="templateContainer">
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
              Our Mission & Vision
            </h2>

            <p
              className={`text-gray-600 text-[13px] sm:text-[15px] leading-relaxed max-w-2xl mx-auto transition-all duration-700 ease-out ${
                showSectionContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "120ms" }}
            >
              Discover our commitment to excellence in goat breeding and our vision for the future of agriculture in Nepal.
            </p>
          </div>

          {/* Mission, Vision and Goal Cards */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
            {/* Mission Card */}
            <li
              className={`transition-transform duration-500 md:-rotate-0 ${
                showSectionContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "240ms" }}
            >
              <blockquote className="relative p-5 md:p-8 rounded-4xl bg-white border border-gray-200 shadow-sm hover:shadow-lg h-full flex flex-col before:absolute before:inset-0 before:bg-gray-200/60 before:rounded-4xl before:-z-10 before:border before:border-gray-300/50 before:-rotate-6">
                <footer className="flex items-center gap-4 mb-2">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[#2E7D32]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="mt-2">
                    <p className="font-bold text-sm text-[#1A3322]">MISSION</p>
                    <p className="text-xs text-gray-500">What We Do Today</p>
                  </div>
                </footer>
                <div className="mt-2">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Providing premium goat breeds and farming solutions across Nepal. We breed healthy Boer, Barbari, and Sirohi goats while preserving indigenous breeds.
                  </p>
                </div>
              </blockquote>
            </li>

            {/* Vision Card */}
            <li
              className={`transition-transform duration-500 md:-rotate-0 ${
                showSectionContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "360ms" }}
            >
              <blockquote className="relative p-5 md:p-8 rounded-4xl bg-white border border-gray-200 shadow-sm hover:shadow-lg h-full flex flex-col before:absolute before:inset-0 before:bg-gray-200/60 before:rounded-4xl before:-z-10 before:border before:border-gray-300/50 before:-rotate-6">
                <footer className="flex items-center gap-4 mb-2">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[#2E7D32]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <div className="mt-2">
                    <p className="font-bold text-sm text-[#1A3322]">VISION</p>
                    <p className="text-xs text-gray-500">Where We're Going</p>
                  </div>
                </footer>
                <div className="mt-2">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    To become Nepal's leading goat breeding enterprise, setting benchmarks for quality and sustainability. We envision every farmer having access to superior breeding stock and modern techniques.
                  </p>
                </div>
              </blockquote>
            </li>

            {/* Goal Card */}
            <li
              className={`transition-transform duration-500 md:-rotate-0 ${
                showSectionContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "480ms" }}
            >
              <blockquote className="relative p-5 md:p-8 rounded-4xl bg-white border border-gray-200 shadow-sm hover:shadow-lg h-full flex flex-col before:absolute before:inset-0 before:bg-gray-200/60 before:rounded-4xl before:-z-10 before:border before:border-gray-300/50 before:-rotate-6">
                <footer className="flex items-center gap-4 mb-2">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[#2E7D32]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div className="mt-2">
                    <p className="font-bold text-sm text-[#1A3322]">GOAL</p>
                    <p className="text-xs text-gray-500">Our Target</p>
                  </div>
                </footer>
                <div className="mt-2">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    To contribute significantly to Nepal's agricultural economy by promoting goat farming as a sustainable livelihood. We aim to create a network of successful farmers.
                  </p>
                </div>
              </blockquote>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
