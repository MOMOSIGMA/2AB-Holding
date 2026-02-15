"use client";

import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  2AB
                </span>{" "}
                Holding
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Création de sites web modernes, applications Android et solutions digitales sur-mesure pour entreprises ambitieuses à Dakar, Sénégal.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Site Vitrine
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    E-commerce
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Application Android
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Automatisation IA
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-400" />
                  <a href="tel:+221771463012" className="hover:text-blue-400 transition-colors">
                    +221 77 146 30 12
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-400" />
                  <a href="mailto:mbathily700@gmail.com" className="hover:text-blue-400 transition-colors break-all">
                    mbathily700@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-400" />
                  <span>Dakar, Sénégal</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-gray-400">
                © {currentYear} 2AB Holding. Tous droits réservés.
              </p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Mentions légales
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Confidentialité
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  CGV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
