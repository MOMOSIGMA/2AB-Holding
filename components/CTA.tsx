"use client";

import { MessageCircle, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          
          {/* Icon */}
          <div className="flex justify-center">
            <div className="inline-flex p-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Zap className="w-16 h-16 text-white" />
            </div>
          </div>
          
          {/* Main heading */}
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
            Transformons votre vision
            <br />
            <span className="inline-block mt-4 px-8 py-4 bg-white text-transparent bg-clip-text">
              en site web performant
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto font-light">
            Premier échange gratuit • Devis sous 24h • Paiement sécurisé
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <a
              href="https://wa.me/221762641751"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-12 py-6 bg-white text-blue-600 rounded-full font-black text-xl shadow-2xl hover:shadow-white/50 transform hover:scale-110 transition-all duration-300 flex items-center gap-4"
            >
              <MessageCircle className="w-7 h-7" />
              <span>Discutons sur WhatsApp</span>
              <span className="text-3xl group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-12 pt-12 text-white/80 text-lg">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>Réponse en moins d&apos;1h</span>
            </div>
            <div>🇸🇳 Dakar, Sénégal</div>
            <div>⚡ Livraison rapide</div>
          </div>
          
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-black text-white mb-2">20+</div>
              <div className="text-white/70">Projets Réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-white mb-2">100%</div>
              <div className="text-white/70">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-white mb-2">24/7</div>
              <div className="text-white/70">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
