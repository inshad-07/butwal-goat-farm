"use client";

export default function HeroVideo() {

  return (
    <>
      <section className="relative flex h-[90svh] w-full overflow-hidden bg-black md:h-dvh">
        {/* Background Image Wrapper - Clips to section */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Mobile Background - No fixed attachment */}
          <div className="absolute inset-0 bg-cover bg-position-[58%_center] opacity-85 md:bg-center md:opacity-80 md:hidden" style={{
            backgroundImage: 'url("/home/Three-Goats-in-a-Sunny-Pasture-(1).webp")',
          }}></div>

          {/* Desktop Background - Fixed attachment */}
          <div className="absolute inset-0 hidden bg-cover bg-center opacity-80 md:block" style={{
            backgroundImage: 'url("/home/Three-Goats-in-a-Sunny-Pasture.webp")',
            backgroundAttachment: 'fixed',
          }}></div>
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
