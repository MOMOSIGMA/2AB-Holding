"use client";

import { MessageCircle, Palette, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Contact",
    description: "15 min de discussion pour comprendre votre vision",
    icon: MessageCircle,
    color: "from-blue-600 to-cyan-500"
  },
  {
    number: "2",
    title: "Création",
    description: "Design + développement avec votre feedback continu",
    icon: Palette,
    color: "from-purple-600 to-pink-500"
  },
  {
    number: "3",
    title: "Lancement",
    description: "Mise en ligne + formation + suivi performance",
    icon: Rocket,
    color: "from-green-600 to-emerald-500"
  }
];

export default function Process() {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl md:text-7xl font-black text-white">
              Simple & 
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Efficace</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              De l&apos;idée au site en ligne en 3 étapes. C&apos;est tout.
            </p>
          </div>
          
          {/* Steps - Horizontal Flow */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 border border-gray-700 hover:border-cyan-500/50 transform hover:-translate-y-4 transition-all duration-500">
                    {/* Number badge */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} text-white text-3xl font-black rounded-2xl mb-6 shadow-xl`}>
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-6">
                      <Icon className="w-16 h-16 text-cyan-400" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow between steps (desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 z-20">
                      <div className="text-6xl text-cyan-400/30">→</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-6 p-12 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-3xl backdrop-blur-sm">
              <p className="text-2xl text-gray-300 font-light max-w-2xl">
                Prêt à démarrer ? Premier échange gratuit sans engagement
              </p>
              <a
                href="https://wa.me/221762641751"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-110 transition-all duration-300 flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Discutons sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
