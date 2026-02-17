"use client";

import { Monitor, ShoppingCart, Bot, Smartphone, Zap, Palette, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Sites Web Premium",
    description: "Design moderne, ultra-rapide et optimisé pour la conversion",
    features: ["Design sur-mesure", "Performance optimale", "SEO intégré"],
    color: "from-blue-600 to-cyan-500",
    delay: 0
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Pro",
    description: "Boutiques en ligne qui transforment les visiteurs en clients",
    features: ["Paiement sécurisé", "Gestion stock", "Analytics"],
    color: "from-purple-600 to-pink-500",
    delay: 0.2
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description: "Apps natives performantes pour Android",
    features: ["UI/UX soignée", "Performance native", "Maintenance"],
    color: "from-orange-600 to-red-500",
    delay: 0.4
  }
];

export default function Services() {
  return (
    <section className="py-32 bg-[#f7f8fa] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl md:text-7xl font-black text-gray-950">Nos solutions digitales</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des offres claires, pensées pour la performance business et la crédibilité de votre marque.
            </p>
          </div>
          
          {/* Services Grid - Large Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                  style={{ animationDelay: `${service.delay}s` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 space-y-6">
                    {/* Icon with gradient background */}
                    <div className={`inline-flex p-5 rounded-2xl bg-linear-to-br ${service.color} shadow-md`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl font-bold text-gray-950">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features list */}
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700">
                          <div className={`w-2 h-2 rounded-full bg-linear-to-r ${service.color}`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Arrow indicator */}
                    <div className="pt-4">
                      <div className="inline-flex items-center gap-2 text-blue-700 font-semibold group-hover:gap-3 transition-all">
                        <span>En savoir plus</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Additional Services Row */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <Bot className="w-8 h-8 text-green-600" />
                <h4 className="text-xl font-bold text-gray-900">IA & Automatisation</h4>
              </div>
              <p className="text-gray-600">Chatbots, workflows intelligents et outils IA</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
                <h4 className="text-xl font-bold text-gray-900">Performance</h4>
              </div>
              <p className="text-gray-600">Optimisation vitesse et référencement Google</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <Palette className="w-8 h-8 text-purple-600" />
                <h4 className="text-xl font-bold text-gray-900">Design Premium</h4>
              </div>
              <p className="text-gray-600">Interface unique adaptée à votre marque</p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-20">
            <a
              href="https://wa.me/221762641751"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gray-950 text-white rounded-full font-bold text-lg hover:bg-blue-700"
            >
              Discutons de votre projet
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
