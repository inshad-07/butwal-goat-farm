"use client";
import Image from "next/image";
import { useState } from "react";
import { FiPhone, FiX } from "react-icons/fi";

export default function HeroVideo() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for your enquiry! Our goat farming team will connect with you shortly.");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsBookModalOpen(false);
  };

  return (
    <>
      <section className="relative flex min-h-[90svh] w-full overflow-hidden bg-black md:min-h-dvh">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* Mobile Image */}
          <Image
            src="/home/Three-Goats-in-a-Sunny-Pasture-(1).webp"
            alt="Premium Boer, Barbari, and Sirohi goat breeding farm in Nepal"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[58%_center] opacity-85 md:hidden"
          />
          {/* Desktop Image */}
          <Image
            src="/home/Three-Goats-in-a-Sunny-Pasture.webp"
            alt="Premium Boer, Barbari, and Sirohi goat breeding farm in Nepal"
            fill
            priority
            sizes="100vw"
            className="hidden object-cover object-center opacity-80 md:block"
          />
        </div>

        {/* Gradient Overlay (Replaces traditional boxes for a seamless, un-boxed look) */}
        <div className="absolute inset-0 bg-black/10 bg-linear-to-t from-black/65 via-black/35 to-black/5 md:from-black/20 md:via-black/10 md:to-transparent" />

        {/* Content Container - Bottom */}
        <div className="relative z-10 flex min-h-[90svh] w-full items-end pb-24 pt-24 md:min-h-dvh md:items-end md:pb-24 md:pt-24 lg:pb-14 lg:pt-24">
          <div className="templateContainer w-full">
            <div className="w-full md:w-3/4 lg:w-1/2 mx-auto md:mx-0">
              <div className="flex flex-col gap-3.5 items-center text-center md:items-start md:text-left md:gap-6">
                {/* Centered Heading */}
                <h1 className="w-full max-w-82.5 font-heading text-[28px] capitalize font-semibold leading-8 tracking-[0.015em] text-white sm:max-w-130 sm:text-[38px] sm:leading-10.5 md:max-w-4xl md:text-[58px] md:leading-[58.2px]">
                  PREMIUM GOAT
                  <br className="hidden md:block" /> BREEDING IN NEPAL
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isBookModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setIsBookModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-white p-3.5 md:max-w-xl md:p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsBookModalOpen(false)}
              className="absolute right-4 top-4 cursor-pointer rounded-full p-1 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
              aria-label="Close quote form"
            >
              <FiX className="text-xl" />
            </button>

            <h3 className="mb-1.5 font-heading text-[22px] md:text-[28px] font-normal leading-[1.2] text-[#101010]">
              Get Goat Quote
            </h3>
            <p className="mb-3 max-w-[360px] font-bricolage-grotesque text-sm md:mb-4 md:max-w-[400px] md:text-[15px] font-light leading-relaxed text-[#5f5f5f]">
              Share your goat farming requirement—Boer, Barbari, Sirohi goats,
              indigenous breeds, breeding stock, or technical support—and our
              team will connect with you shortly.
            </p>

            <form
              className="space-y-2.5 md:space-y-3"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-2.5 md:gap-3">
                <div>
                  <label className="mb-1.5 block font-bricolage-grotesque text-sm font-light text-[#5f5f5f]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="h-8.5 w-full rounded-md border border-[#E3E5E6] bg-[#F8F9FA] px-3 font-bricolage-grotesque text-sm text-slate-700 transition-colors placeholder:text-gray-400 focus:border-[#1B5E20] focus:outline-none focus:ring-1 focus:ring-[#1B5E20] md:h-10"
                    required
                  />
                </div>

                <div>
                  <label className="mb-1.5 block font-bricolage-grotesque text-sm font-light text-[#5f5f5f]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="h-8.5 w-full rounded-md border border-[#E3E5E6] bg-[#F8F9FA] px-3 font-bricolage-grotesque text-sm text-slate-700 transition-colors placeholder:text-gray-400 focus:border-[#1B5E20] focus:outline-none focus:ring-1 focus:ring-[#1B5E20] md:h-10"
                    required
                  />
                </div>

                <div>
                  <label className="mb-1.5 block font-bricolage-grotesque text-sm font-light text-[#5f5f5f]">
                    Phone No.
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Type your phone number"
                    className="h-8.5 w-full rounded-md border border-[#E3E5E6] bg-[#F8F9FA] px-3 font-bricolage-grotesque text-sm text-slate-700 transition-colors placeholder:text-gray-400 focus:border-[#1B5E20] focus:outline-none focus:ring-1 focus:ring-[#1B5E20] md:h-10"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block font-bricolage-grotesque text-sm font-light text-[#5f5f5f]">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Boer, Barbari, Sirohi goats, breeding stock, or farm support"
                    className="h-8.5 w-full rounded-md border border-[#E3E5E6] bg-[#F8F9FA] px-3 font-bricolage-grotesque text-sm text-slate-700 transition-colors placeholder:text-gray-400 focus:border-[#1B5E20] focus:outline-none focus:ring-1 focus:ring-[#1B5E20] md:h-10"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block font-bricolage-grotesque text-sm font-light text-[#5f5f5f]">
                  Farming Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goat farming requirement"
                  className="h-16 w-full resize-y rounded-md border border-[#E3E5E6] bg-[#F8F9FA] p-2.5 font-bricolage-grotesque text-sm text-slate-700 transition-colors placeholder:text-gray-400 focus:border-[#1B5E20] focus:outline-none focus:ring-1 focus:ring-[#1B5E20] md:h-24"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-auto cursor-pointer rounded-md bg-linear-to-r from-[#1B5E20] to-[#2E7D32] px-6 py-1.5 text-sm font-medium text-white transition-colors duration-300 hover:opacity-90 md:py-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
