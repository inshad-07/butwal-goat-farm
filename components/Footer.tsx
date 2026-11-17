"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2025);
  const whatsappNumber = "9779847044546";
  const whatsappMessage = "Hello! I'm interested in your goat breeding services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#011527] text-white/75 pt-12 pb-4 font-sans">
      <div className="templateContainer">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <Link href="/" className="mb-6 inline-flex items-center">
              <Image
                src="/logo/white-text-logo.webp"
                alt="Butwal Goat Farm Premium Boer, Barbari, and Sirohi Goat Breeding logo"
                width={190}
                height={76}
                className="h-20 w-auto"
              />
            </Link>

            <p className="text-[15px] leading-relaxed mb-6 text-white/65">
              We sell premium Boer, Barbari, and Sirohi goats with
              indigenous goat farming and dependable livestock services for
              commercial farmers across Nepal.
            </p>

            <div className="flex space-x-4 text-white">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Butwal Goat Farm on Facebook"
                className="hover:text-[#1B5E20] transition-colors"
              >
                <FaFacebookF size={18} />
                <span className="sr-only">
                  Visit Butwal Goat Farm on Facebook
                </span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Butwal Goat Farm on Instagram"
                className="hover:text-[#1B5E20] transition-colors"
              >
                <FaInstagram size={19} />
                <span className="sr-only">
                  Visit Butwal Goat Farm on Instagram
                </span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Contact Butwal Goat Farm on WhatsApp"
                className="hover:text-[#1B5E20] transition-colors"
              >
                <FaWhatsapp size={19} />
                <span className="sr-only">
                  Contact Butwal Goat Farm on WhatsApp
                </span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h5 className="text-white font-medium text-lg mb-4">Company</h5>
              <ul className="space-y-3 text-[15px] text-white/65">
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#1B5E20] transition-colors"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#1B5E20] transition-colors"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/our-goats"
                    className="hover:text-[#1B5E20] transition-colors"
                  >
                    Our Goats
                  </Link>
                </li>

                <li>
                  <Link
                    href="/gallery"
                    className="hover:text-[#1B5E20] transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#1B5E20] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-medium text-lg mb-4">
                Our Products
              </h5>
              <ul className="space-y-3 text-[15px] text-white/65">
                <li>
                  <Link
                    href="/our-goats"
                    className="hover:text-[#1B5E20] transition-colors"
                  >
                    Boer Goats
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-goats"
                    className="hover:text-[#1B5E20] transition-colors"
                  >
                    Barbari Goats
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-goats"
                    className="hover:text-[#1B5E20] transition-colors"
                  >
                    Sirohi Goats
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="mb-6">
              <div className="text-white font-medium flex items-center gap-2 mb-1">
                <IoLocationSharp className="text-[#2E7D32]" /> Office Location
              </div>
              <p className="text-[15px] text-white/65 pl-6">
              Butwal,
                <br />
                Lumbini Province 32907, Nepal
              </p>
            </div>

            

            <div className="mb-6">
              <div className="text-white font-medium flex items-center gap-2 mb-1">
                <BsTelephoneFill className="text-[#2E7D32]" /> Support Any Time
              </div>
              <div className="pl-6 text-[15px] text-white/65">
                <div className="mb-2">
                  <span className="block text-xs uppercase tracking-wide text-white/40">
                    Mobile
                  </span>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    <a
                      href="tel:+9779847044546"
                      className="hover:text-[#1B5E20] transition-colors"
                    >
                      +977 9847044546
                    </a>
                  </div>
                </div>
                {/* <div>
                  <span className="block text-xs uppercase tracking-wide text-white/40">
                    Office
                  </span>
                  <a
                    href="tel:02502382691"
                    className="hover:text-[#1B5E20] transition-colors"
                  >
                    0250 2382691
                  </a>
                </div> */}
              </div>
            </div>

            <div>
              <div className="text-white font-medium flex items-center gap-2 mb-1">
                <MdEmail className="text-[#2E7D32]" /> Send a Message
              </div>
              <div className="pl-6 text-[15px] text-white/65 space-y-1">
                <a
                  href="mailto:ainshad711@gmail.com"
                  className="block hover:text-[#1B5E20] transition-colors"
                >
                  ainshad711@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-4">
        <div className="templateContainer text-center text-sm text-white/55">
          <div>
            Copyright {currentYear} -{" "}
            <Link href="/" className="hover:text-[#1B5E20] transition-colors">
              Butwal Goat Farm
            </Link>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
