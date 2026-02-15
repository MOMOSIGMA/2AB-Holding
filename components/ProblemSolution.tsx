"use client";

import { Target, TrendingUp, Users, Zap } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Content - Side by Side */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left: Value Proposition */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-red-50 border border-red-200 rounded-full">
                <span className="text-red-600 font-bold text-sm">⚠️ Opportunité manquée</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                Chaque jour sans site web =
                <span className="block mt-3 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  Clients perdus
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Pendant que vos concurrents génèrent des ventes en ligne 24/7, 
                vous perdez des opportunités. Il est temps de changer ça.
              </p>
              
              <a
                href="https://wa.me/221762641751"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="w-6 h-6" />
                Transformer mon business
              </a>
            </div>
            
            {/* Right: Results/Benefits */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2">24/7</div>
                  <div className="text-gray-600 font-medium">Visibilité Continue</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2">3x</div>
                  <div className="text-gray-600 font-medium">Plus de Leads</div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2">100%</div>
                  <div className="text-gray-600 font-medium">Crédibilité Pro</div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border border-orange-100 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2">&lt;2s</div>
                  <div className="text-gray-600 font-medium">Chargement</div>
                </div>
              </div>
              
              {/* Trust Badge */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 text-white">
                <div className="text-2xl font-bold mb-2">✓ Paiement sécurisé</div>
                <div className="text-2xl font-bold mb-2">✓ Support 24/7</div>
                <div className="text-2xl font-bold">✓ Garantie satisfaction</div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
