"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-xl shadow-2xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <Image 
              src="/logo.png" 
              alt="2AB Holding Logo" 
              width={180} 
              height={60}
              className="h-12 w-auto transition-all group-hover:scale-105"
              priority
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className={`font-semibold transition-colors ${
                isScrolled ? "text-gray-300 hover:text-cyan-400" : "text-white hover:text-cyan-400"
              }`}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className={`font-semibold transition-colors ${
                isScrolled ? "text-gray-300 hover:text-cyan-400" : "text-white hover:text-cyan-400"
              }`}
            >
              Portfolio
            </a>
            <a
              href="#process"
              className={`font-semibold transition-colors ${
                isScrolled ? "text-gray-300 hover:text-cyan-400" : "text-white hover:text-cyan-400"
              }`}
            >
              Process
            </a>
            <a
              href="#contact-form"
              className={`font-semibold transition-colors ${
                isScrolled ? "text-gray-300 hover:text-cyan-400" : "text-white hover:text-cyan-400"
              }`}
            >
              Devis Gratuit
            </a>
            <a
              href="https://wa.me/221771463012"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 bg-black/95 backdrop-blur-xl border-t border-white/10">
            <nav className="flex flex-col gap-4">
              <a
                href="#services"
                className="text-gray-300 font-semibold hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-gray-300 font-semibold hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#process"
                className="text-gray-300 font-semibold hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Process
              </a>
              <a
                href="#contact-form"
                className="text-gray-300 font-semibold hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Devis Gratuit
              </a>
              <a
                href="https://wa.me/221771463012"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold shadow-lg w-fit mt-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
