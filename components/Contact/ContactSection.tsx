"use client";

import React, { useEffect, useRef, useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";



export default function ContactSection() {
  const sectionContentRef = useRef<HTMLDivElement | null>(null);
  const [showContent, setShowContent] = useState(false);
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
  };

  useEffect(() => {
    const sectionContent = sectionContentRef.current;

    if (!sectionContent || showContent) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContent(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(sectionContent);

    return () => observer.disconnect();
  }, [showContent]);

  return (
    <section className="relative w-full overflow-hidden bg-[#1A3322]/3 py-12 font-sans md:py-16">
      <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full bg-white"></div>

      <div
        ref={sectionContentRef}
        className="templateContainer relative z-10 mx-auto !max-w-7xl"
      >
        <div
          className={`mx-auto mb-7 max-w-2xl text-center transition-all duration-700 ease-out ${
            showContent
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          <h1 className="mb-3 text-2xl font-[350] leading-tight text-[#1A3322] md:text-4xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-gray-600">
            Learn more about our premium Boer, Barbari, and Sirohi goat breeding,
            indigenous goat farming, and commitment to supporting commercial goat
            farmers across Nepal.
          </p>
        </div>

        {/* Main White Card Container */}
        <div
          className={`flex flex-col gap-10 rounded-md border border-gray-100 bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-700 ease-out md:p-8 lg:flex-row lg:gap-12 lg:p-12 ${
            showContent
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "160ms" }}
        >
          {/* Left Column: Form */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6">
              <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-[#1A3322]">
                Send Enquiry
              </span>
              <h2 className="text-2xl font-[350] leading-tight text-[#1A3322]">
                Tell us about your goat farming needs
              </h2>
            </div>
            <form id="appointmentForm" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 gap-3 md:gap-4 md:grid-cols-2">
                {/* Full Name */}
                <div
                  className={`form-group transition-all duration-700 ease-out ${
                    showContent
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                  style={{ transitionDelay: "320ms" }}
                >
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-[15px] text-gray-700 placeholder:text-gray-400 transition-colors focus:border-[#2D5A3D] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2D5A3D]"
                  />
                </div>

                {/* Email Address */}
                <div
                  className={`form-group transition-all duration-700 ease-out ${
                    showContent
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                  style={{ transitionDelay: "420ms" }}
                >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-[15px] text-gray-700 placeholder:text-gray-400 transition-colors focus:border-[#2D5A3D] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2D5A3D]"
                  />
                </div>

                {/* Phone Number */}
                <div
                  className={`form-group transition-all duration-700 ease-out ${
                    showContent
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                  style={{ transitionDelay: "520ms" }}
                >
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-[15px] text-gray-700 placeholder:text-gray-400 transition-colors focus:border-[#2D5A3D] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2D5A3D]"
                  />
                </div>

                {/* Subject */}
                <div
                  className={`form-group transition-all duration-700 ease-out ${
                    showContent
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                  style={{ transitionDelay: "620ms" }}
                >
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Boer, Barbari, Sirohi goats, breeding stock, or farm support"
                    required
                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-[15px] text-gray-700 placeholder:text-gray-400 transition-colors focus:border-[#2D5A3D] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2D5A3D]"
                  />
                </div>

                {/* Message */}
                <div
                  className={`form-group transition-all duration-700 ease-out md:col-span-2 ${
                    showContent
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                  style={{ transitionDelay: "720ms" }}
                >
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-[15px] text-gray-700 placeholder:text-gray-400 transition-colors focus:border-[#2D5A3D] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2D5A3D]"
                  ></textarea>
                </div>

                {/* Button Aligned to Left */}
                <div
                  className={`form-group mt-2 transition-all duration-700 ease-out md:col-span-2 ${
                    showContent
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                  style={{ transitionDelay: "820ms" }}
                >
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-linear-to-r from-[#1B5E20] to-[#2E7D32] px-8 py-3.5 text-[15px] font-bold text-white transition-opacity duration-300 hover:opacity-90 sm:w-fit"
                  >
                    Send Enquiry
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column: Contact Details */}
          <div className="w-full border-t border-gray-100 pt-8 lg:w-1/2 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div className="mb-7">
              <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-[#1A3322]">
                Quick Contact
              </span>
              <h2 className="text-2xl font-[350] leading-tight text-[#1A3322]">
                Reach Us
              </h2>
            </div>

            <div className="space-y-7">
              <div
                className={`flex gap-4 transition-all duration-700 ease-out ${
                  showContent
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: "360ms" }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2E7D32]/10 text-[#2E7D32] max-sm:h-9 max-sm:w-9">
                  <IoLocationSharp className="text-xl max-sm:text-lg" />
                </span>
                <div>
                  <h3 className="mb-1 text-[17px] font-medium text-[#1A3322]">
                    Office Address
                  </h3>
                  <p className="text-[15px] leading-relaxed text-gray-600">
                    Shankharapur, Chapakobot, Nanglebhare,
                    <br />
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>

         
              <div
                className={`flex gap-4 transition-all duration-700 ease-out ${
                  showContent
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2E7D32]/10 text-[#2E7D32] max-sm:h-9 max-sm:w-9">
                  <BsTelephoneFill className="text-lg max-sm:text-base" />
                </span>
                <div>
                  <h3 className="mb-2 text-[17px] font-medium text-[#1A3322]">
                    Customer Support
                  </h3>
                  <div className="space-y-2 text-[15px] leading-relaxed text-gray-600">
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <span className="w-14 text-gray-400">Mobile:</span>
                      <a
                        href="tel:+9779845328462"
                        className="transition-colors hover:text-[#1A3322]"
                      >
                        +977 9845328462
                      </a>
                      <span className="text-gray-300">|</span>
                      <a
                        href="tel:+9779851032739"
                        className="transition-colors hover:text-[#1A3322]"
                      >
                        +977 9851032739
                      </a>
                    </div>
                    {/* <div className="flex gap-x-3">
                      <span className="w-14 text-gray-400">Office:</span>
                      <a
                        href="tel:02502382691"
                        className="transition-colors hover:text-[#1A3322]"
                      >
                        0250 2382691
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>

              <div
                className={`flex gap-4 transition-all duration-700 ease-out ${
                  showContent
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: "640ms" }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2E7D32]/10 text-[#2E7D32] max-sm:h-9 max-sm:w-9">
                  <MdEmail className="text-xl max-sm:text-lg" />
                </span>
                <div>
                  <h3 className="mb-1 text-[17px] font-medium text-[#1A3322]">
                    Email
                  </h3>
                  <div className="space-y-1 text-[15px] leading-relaxed text-gray-600">
                    <a
                      href="mailto:info@goatfirm.com"
                      className="block break-all transition-colors hover:text-[#1A3322]"
                    >
                      info@goatfirm.com
                    </a>
                    <a
                      href="mailto:sales@goatfirm.com"
                      className="block break-all transition-colors hover:text-[#1A3322]"
                    >
                      sales@goatfirm.com
                    </a>
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
