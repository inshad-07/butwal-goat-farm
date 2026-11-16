"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappNumber = "9779847044546";
  const whatsappMessage = "Hello! I'm interested in your goat breeding services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp Button Container */}
      <div
        className="relative group"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Pulse Ring Effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" style={{ animationDuration: '2s' }} />
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-50" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />

        {/* Hover Tooltip */}
        {showTooltip && (
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-4 py-2.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 shadow-lg">
            Chat on WhatsApp
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
          </div>
        )}

        {/* Notification Badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-lg animate-bounce z-20">
          1
        </div>

        {/* Main Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 z-10"
        >
          {/* WhatsApp Icon */}
          <FaWhatsapp size={32} />
        </a>
      </div>
    </div>
  );
}
