"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    const mq = window.matchMedia("(min-width: 768px)");
    let raf = 0;
    let sectionTop = 0;

    const update = () => {
      raf = 0;
      const y = Math.max(0, window.scrollY - sectionTop);
      bg.style.transform = mq.matches ? `translateY(${y}px)` : "";
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const measure = () => {
      sectionTop = section.getBoundingClientRect().top + window.scrollY;
      update();
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative flex h-[90svh] w-full overflow-hidden bg-black md:h-dvh">
        {/* Background Image - Clips to section */}
        <div className="absolute inset-0 overflow-hidden">
          <div ref={bgRef} className="absolute inset-x-0 top-0 h-dvh will-change-transform">
            <picture className="block h-full w-full">
              <source
                media="(min-width: 768px)"
                srcSet="/home/three-goats-sunny-pasture-hero.webp"
              />
              <img
                src="/home/three-goats-sunny-pasture-mobile.webp"
                alt="Premium Boer goats grazing in a sunny pasture at Butwal Goat Farm, Nepal"
                className="h-full w-full object-cover object-[58%_center] opacity-85 md:object-center md:opacity-80"
                fetchPriority="high"
              />
            </picture>
          </div>
        </div>

        {/* Gradient Overlay - Absolute */}
        <div className="absolute inset-0 bg-black/10 bg-linear-to-t from-black/30 via-black/15 to-black/2 md:from-black/5 md:via-black/2 md:to-transparent" />

        {/* Content Container - Scrollable */}
        <div className="relative z-10 flex h-full w-full items-end overflow-y-auto pb-12 pt-24 md:items-end md:pb-24 md:pt-24 lg:pb-14 lg:pt-24">
          <div className="templateContainer w-full" style={{
            animation: 'fadeUp 1s ease-out forwards'
          }}>
            <style>{`
              @keyframes fadeUp {
                from {
                  opacity: 0;
                  transform: translateY(30px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
            <div className="w-full md:w-3/4 lg:w-1/2 mx-auto md:mx-0">
              <div className="flex flex-col gap-3.5 items-center text-center md:items-start md:text-left md:gap-6">
                {/* Centered Heading */}
                <h1 className="w-full max-w-82.5 font-heading text-[28px] capitalize font-semibold leading-8 tracking-[0.015em] text-white sm:max-w-130 sm:text-[38px] sm:leading-10.5 md:max-w-4xl md:text-[58px] md:leading-[58.2px]">
                  PREMIUM GOAT
                  <br className="hidden md:block" /> BREEDING IN NEPAL
                </h1>
                
                {/* Subtitle */}
                <p className="text-base text-white/90 sm:text-lg md:text-xl max-w-lg leading-relaxed">
                  Buy & Sell Quality Goat Breeds
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
