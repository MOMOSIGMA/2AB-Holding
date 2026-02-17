"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/80"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image 
              src="/Logo.png" 
              alt="2AB Holding Logo" 
              width={180} 
              height={60}
              className="h-12 w-auto transition-all group-hover:scale-105"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#services"
              className={`font-semibold transition-colors ${
                isScrolled ? "text-gray-700 hover:text-blue-700" : "text-white/90 hover:text-white"
              }`}
            >
              Services
            </Link>
            <Link
              href="/#portfolio"
              className={`font-semibold transition-colors ${
                isScrolled ? "text-gray-700 hover:text-blue-700" : "text-white/90 hover:text-white"
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/#process"
              className={`font-semibold transition-colors ${
                isScrolled ? "text-gray-700 hover:text-blue-700" : "text-white/90 hover:text-white"
              }`}
            >
              Process
            </Link>
            <Link
              href="/devis"
              className={`font-semibold transition-colors ${
                isScrolled ? "text-gray-700 hover:text-blue-700" : "text-white/90 hover:text-white"
              }`}
            >
              Devis Gratuit
            </Link>
            <a
              href="https://wa.me/221762641751"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-950 text-white rounded-full font-semibold hover:bg-blue-700"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-full border ${
              isScrolled
                ? "border-gray-300 text-gray-900 bg-white"
                : "border-white/30 text-white bg-white/10 backdrop-blur"
            }`}
            aria-label="Toggle menu"
          >
            <span className="text-sm font-semibold">Menu</span>
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 bg-white/95 backdrop-blur-xl border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <Link
                href="/#services"
                className="text-gray-700 font-semibold hover:text-blue-700 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#portfolio"
                className="text-gray-700 font-semibold hover:text-blue-700 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/#process"
                className="text-gray-700 font-semibold hover:text-blue-700 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Process
              </Link>
              <Link
                href="/devis"
                className="text-gray-700 font-semibold hover:text-blue-700 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Devis Gratuit
              </Link>
              <a
                href="https://wa.me/221762641751"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-gray-950 text-white rounded-full font-semibold w-fit mt-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
