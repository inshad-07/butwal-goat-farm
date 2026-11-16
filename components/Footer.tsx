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
                alt="Goat Firm Premium Boer, Barbari, and Sirohi Goat Breeding logo"
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
                aria-label="Visit Goat Firm on Facebook"
                className="hover:text-[#1B5E20] transition-colors"
              >
                <FaFacebookF size={18} />
                <span className="sr-only">
                  Visit Goat Firm on Facebook
                </span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Goat Firm on Instagram"
                className="hover:text-[#1B5E20] transition-colors"
              >
                <FaInstagram size={19} />
                <span className="sr-only">
                  Visit Goat Firm on Instagram
                </span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Contact Goat Firm on WhatsApp"
                className="hover:text-[#1B5E20] transition-colors"
              >
                <FaWhatsapp size={19} />
                <span className="sr-only">
                  Contact Goat Firm on WhatsApp
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
                    href="/product"
                    className="hover:text-[#1B5E20] transition-colors"
                  >
                    Product
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
                    href="/product"
                    className="hover:text-[#1B5E20] transition-colors"
                  >
                    Boer Goats
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className="hover:text-[#1B5E20] transition-colors"
                  >
                    Barbari Goats
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
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
                Shankharapur, Chapakobot, Nanglebhare,
                <br />
                Kathmandu, Nepal
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
                      href="tel:+9779845328462"
                      className="hover:text-[#1B5E20] transition-colors"
                    >
                      +977 9845328462
                    </a>
                    <span className="text-white/30">|</span>
                    <a
                      href="tel:+9779851032739"
                      className="hover:text-[#1B5E20] transition-colors"
                    >
                      +977 9851032739
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
                  href="mailto:info@goatfirm.com"
                  className="block hover:text-[#1B5E20] transition-colors"
                >
                  info@goatfirm.com
                </a>
                <a
                  href="mailto:sales@goatfirm.com"
                  className="block hover:text-[#1B5E20] transition-colors"
                >
                  sales@goatfirm.com
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
              Goat Firm
            </Link>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
