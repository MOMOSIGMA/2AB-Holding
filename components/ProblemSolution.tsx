"use client";

import { Target, TrendingUp, Users, Zap } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
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
                <span className="block mt-3 text-red-600">
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
                className="inline-flex items-center gap-3 px-8 py-4 bg-gray-950 text-white rounded-full font-bold text-lg hover:bg-blue-700"
              >
                <Zap className="w-6 h-6" />
                Transformer mon business
              </a>
            </div>
            
            {/* Right: Results/Benefits */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2">24/7</div>
                  <div className="text-gray-600 font-medium">Visibilité Continue</div>
                </div>
                
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                  <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2">3x</div>
                  <div className="text-gray-600 font-medium">Plus de Leads</div>
                </div>
                
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                  <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2">100%</div>
                  <div className="text-gray-600 font-medium">Crédibilité Pro</div>
                </div>
                
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                  <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2">&lt;2s</div>
                  <div className="text-gray-600 font-medium">Chargement</div>
                </div>
              </div>
              
              {/* Trust Badge */}
              <div className="bg-gray-950 rounded-3xl p-8 text-white">
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
