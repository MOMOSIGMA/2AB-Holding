"use client";

import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0f141b] text-gray-300 border-t border-white/10">
      <div className="container mx-auto px-6 py-18">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
                2AB Holding
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-xl">
                Création de sites web modernes, applications Android et solutions digitales sur-mesure pour entreprises ambitieuses à Dakar, Sénégal.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-4">Offres</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Site Vitrine
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    E-commerce
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Application Android
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
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
                  <Phone className="w-5 h-5 shrink-0 mt-0.5 text-cyan-300" />
                  <a href="tel:+221771463012" className="hover:text-white transition-colors">
                    +221 77 146 30 12
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 shrink-0 mt-0.5 text-cyan-300" />
                  <a href="mailto:mbathily700@gmail.com" className="hover:text-white transition-colors break-all">
                    mbathily700@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-cyan-300" />
                  <span>Dakar, Sénégal</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-gray-400">
                © {currentYear} 2AB Holding. Tous droits réservés.
              </p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">
                  Mentions légales
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Confidentialité
                </a>
                <a href="#" className="hover:text-white transition-colors">
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
