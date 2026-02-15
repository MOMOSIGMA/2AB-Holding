"use client";

import { useEffect, useState } from "react";
import { FileText, X } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function FloatingQuoteModal() {
  const [showButton, setShowButton] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 px-5 py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold shadow-2xl hover:shadow-cyan-500/50 transition-all"
          aria-label="Ouvrir le formulaire de devis"
        >
          <span className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Devis gratuit
          </span>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-60 bg-black/80 backdrop-blur-sm p-4 md:p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto relative">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="sticky top-4 ml-auto mb-4 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Fermer le formulaire"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-6 text-center">
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
              >
                Ouvrir la page devis
              </Link>
            </div>

            <ContactForm embedded />
          </div>
        </div>
      )}
    </>
  );
}
