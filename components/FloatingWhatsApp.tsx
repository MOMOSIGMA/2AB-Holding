"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {/* Floating Button */}
      <a
        href="https://wa.me/221762641751"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="relative">
          {/* Pulse animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          
          {/* Button */}
          <div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
            <MessageCircle className="w-8 h-8" />
          </div>
          
          {/* Tooltip */}
          {isOpen && (
            <div className="absolute bottom-full right-0 mb-4 bg-white text-gray-900 px-4 py-3 rounded-lg shadow-xl whitespace-nowrap animate-fade-in">
              <div className="font-semibold">Besoin d&apos;aide ?</div>
              <div className="text-sm text-gray-600">Discutons sur WhatsApp</div>
              <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
            </div>
          )}
        </div>
      </a>
    </>
  );
}
