"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-goats", label: "Our Goats / Breeds" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header2() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !isScrolled;
  const whatsappNumber = "9779811449565";
  const whatsappMessage = "Hello! I'm interested in your goat breeding services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const navLinkClass = `relative rounded-full px-3 py-2 text-[15px] font-medium transition-all duration-300 after:absolute after:bottom-1 after:left-3 after:right-3 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 ${
    isTransparent
      ? "text-white drop-shadow-sm"
      : "text-black"
  }`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* --- DESKTOP TOP BAR (Scrolls away normally) --- */}
      <div className="hidden lg:block w-full h-10 bg-linear-to-r from-[#1B5E20] to-[#2E7D32] overflow-hidden font-sans relative">
        <div className="templateContainer flex h-full items-center justify-between relative z-10">
          {/* Left side: Social Links */}
          <div className="flex items-center z-10">
            <span className="text-white text-[15px] font-medium mr-4">
              Follow Us:
            </span>
            <div className="flex space-x-5">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Butwal Goat Farm on Facebook"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaFacebookF size={16} />
                <span className="sr-only">
                  Visit Butwal Goat Farm on Facebook
                </span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Butwal Goat Farm on Instagram"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaInstagram size={18} />
                <span className="sr-only">
                  Visit Butwal Goat Farm on Instagram
                </span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Contact Butwal Goat Farm on WhatsApp"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaWhatsapp size={18} />
                <span className="sr-only">
                  Contact Butwal Goat Farm on WhatsApp
                </span>
              </a>
            </div>
          </div>

          {/* Right side: Contact Info with Slanted Edge */}
          <div className="relative h-full">
            <div className="absolute left-[calc(100%-1px)] top-0 h-full w-screen bg-white" />
            <div
              className="bg-white text-black flex items-center pr-0 pl-16 z-10 h-full relative"
              style={{
                clipPath: "polygon(2rem 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              <div className="flex items-center text-[15px] font-medium">
                <FaPhoneAlt className="mr-3" size={16} />
                <span>Call Us: (+977) 981-1449565</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR (Sticky on Scroll) --- */}
      {/* Moved the sticky classes to the header element itself */}
      <header
        className={`sticky top-0 z-50 w-full font-sans transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-out ${
          isHomePage ? "-mb-16" : ""
        } ${
          isTransparent
            ? "bg-transparent shadow-none"
            : "bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)] backdrop-blur-md"
        }`}
      >
        <nav className="templateContainer">
          <div className="flex justify-between items-center h-16 lg:h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src={
                  isTransparent
                    ? "/logo/white-text-logo.webp"
                    : "/logo/black-text-logo.webp"
                }
                alt="Butwal Goat Farm"
                width={220}
                height={88}
                priority
                className="h-12 lg:h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={navLinkClass}>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href="tel:+9779811449565"
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[13px] font-medium transition-colors ${
                  isTransparent
                    ? "text-white border border-white hover:border-[#2E7D32] hover:text-[#2E7D32]"
                    : "bg-[#1B5E20] text-white hover:bg-[#2E7D32]"
                }`}
              >
                <FaPhoneAlt size={12} />
                <span>Call Now</span>
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`focus:outline-none pl-2 transition-colors ${
                  isOpen ? "invisible pointer-events-none" : ""
                } ${
                  isTransparent
                    ? "text-white hover:text-[#2E7D32]"
                    : "text-black hover:text-[#2E7D32]"
                }`}
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <FiX size={28} strokeWidth={2.4} />
                ) : (
                  <FiMenu size={28} strokeWidth={2.4} />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* --- MOBILE SLIDE MENU --- */}
      <div
        className={`fixed inset-0 z-[999] lg:hidden transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close Menu"
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 z-0 bg-black/55"
        />

        <div
          className={`relative z-10 h-full w-[82vw] max-w-[340px] bg-[#ffffff] shadow-[10px_0_30px_rgba(15,23,42,0.18)] transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-gray-100 bg-[#ffffff] px-5">
            <Image
              src="/logo/black-text-logo.webp"
              alt="Butwal Goat Farm"
              width={200}
              height={80}
              className="h-12 w-auto"
            />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 text-black transition-colors hover:text-[#2E7D32]"
              aria-label="Close Menu"
            >
              <FiX size={24} strokeWidth={2.4} />
            </button>
          </div>

          <div className="flex flex-col bg-[#ffffff] px-5 pt-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                onClick={() => setIsOpen(false)}
                href={link.href}
                className="block rounded-md pl-0 pr-3 py-2 text-[15px] font-medium text-[#1A3322] transition-colors hover:bg-[#1B5E20]/10 hover:text-[#2E7D32]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Contact & Socials Info */}
          <div className="mx-5 mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center text-[#2E7D32] font-medium text-[15px] mb-4">
              <FaPhoneAlt className="mr-3" size={16} />
              <span>(+977) 981-1449565</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Butwal Goat Farm on Facebook"
                className="text-[#2E7D32] transition-colors hover:text-[#2E7D32] bg-gray-100 rounded-md p-2"
              >
                <FaFacebookF size={16} />
                <span className="sr-only">
                  Visit Butwal Goat Farm on Facebook
                </span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Butwal Goat Farm on Instagram"
                className="text-[#2E7D32] transition-colors hover:text-[#2E7D32] bg-gray-100 rounded-md p-2"
              >
                <FaInstagram size={18} />
                <span className="sr-only">
                  Visit Butwal Goat Farm on Instagram
                </span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Contact Butwal Goat Farm on WhatsApp"
                className="text-[#2E7D32] transition-colors hover:text-[#2E7D32] bg-gray-100 rounded-md p-2"
              >
                <FaWhatsapp size={18} />
                <span className="sr-only">
                  Contact Butwal Goat Farm on WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
