"use client";

import { ArrowRight, Phone, MessageCircle, Sparkles, Code, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            
            {/* Floating Icons */}
            <div className="flex justify-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl shadow-2xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl shadow-2xl animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="p-3 bg-gradient-to-br from-orange-600 to-red-500 rounded-2xl shadow-2xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
                <Rocket className="w-8 h-8 text-white" />
              </div>
            </div>
            
            {/* Main heading with gradient animation */}
            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              <span className="block text-white mb-4">Transformez votre</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Vision Digitale
              </span>
              <span className="block text-white mt-4 text-5xl md:text-7xl">en Réalité 🚀</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Sites web <span className="text-cyan-400 font-semibold">ultra-performants</span>, 
              e-commerce <span className="text-purple-400 font-semibold">qui convertissent</span> et 
              applications <span className="text-blue-400 font-semibold">innovantes</span>
            </p>
            
            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-8 py-8">
              <div className="text-center">
                <div className="text-5xl font-black text-cyan-400">20+</div>
                <div className="text-gray-400 text-sm">Projets Réalisés</div>
              </div>
              <div className="w-px h-16 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-5xl font-black text-purple-400">100%</div>
                <div className="text-gray-400 text-sm">Satisfaction</div>
              </div>
              <div className="w-px h-16 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-5xl font-black text-blue-400">&lt;2s</div>
                <div className="text-gray-400 text-sm">Temps Chargement</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <a
                href="https://wa.me/221771463012"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-110 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  Démarrer Maintenant
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="tel:+221771463012"
                className="group px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-lg border-2 border-white/20 hover:bg-white/20 hover:border-cyan-400 transform hover:scale-110 transition-all duration-300 flex items-center gap-3"
              >
                <Phone className="w-6 h-6" />
                +221 77 146 30 12
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-12 text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>Disponible 24/7</span>
              </div>
              <div>⚡ Réponse en &lt;1h</div>
              <div>🇸🇳 Basé à Dakar</div>
              <div>🔒 Paiement sécurisé</div>
            </div>
          </div>
          
          {/* 3D Browser Mockup */}
          <div className="mt-24 relative perspective-1000">
            <div className="relative mx-auto max-w-6xl transform hover:scale-105 transition-transform duration-500">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              
              {/* Browser window */}
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-2 shadow-2xl border border-gray-700 transform rotate-x-12">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 rounded-t-2xl">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 mx-4 px-4 py-1 bg-gray-900 rounded-lg text-gray-500 text-sm">
                    2abholding.com - Site Premium
                  </div>
                </div>
                
                {/* Content preview with gradient bars */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-b-2xl p-8 space-y-4">
                  <div className="h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg w-1/2 animate-pulse"></div>
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                  <div className="grid grid-cols-3 gap-6 pt-6">
                    <div className="h-32 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl transform hover:scale-105 transition-transform"></div>
                    <div className="h-32 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl transform hover:scale-105 transition-transform"></div>
                    <div className="h-32 bg-gradient-to-br from-orange-600 to-red-500 rounded-xl transform hover:scale-105 transition-transform"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
