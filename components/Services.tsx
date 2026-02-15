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
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl md:text-7xl font-black text-gray-900">
              Solutions{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Digitales
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies de pointe pour propulser votre business en ligne
            </p>
          </div>
          
          {/* Services Grid - Large Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-gray-100 overflow-hidden"
                  style={{ animationDelay: `${service.delay}s` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 space-y-6">
                    {/* Icon with gradient background */}
                    <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all">
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
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Arrow indicator */}
                    <div className="pt-4">
                      <div className={`inline-flex items-center gap-2 text-transparent bg-gradient-to-r ${service.color} bg-clip-text font-semibold group-hover:gap-4 transition-all`}>
                        <span>En savoir plus</span>
                        <ArrowRight className="w-5 h-5" style={{ color: 'currentColor', WebkitTextFillColor: 'currentColor' }} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Additional Services Row */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-center gap-4 mb-4">
                <Bot className="w-8 h-8 text-green-600" />
                <h4 className="text-xl font-bold text-gray-900">IA & Automatisation</h4>
              </div>
              <p className="text-gray-600">Chatbots, workflows intelligents et outils IA</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100">
              <div className="flex items-center gap-4 mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
                <h4 className="text-xl font-bold text-gray-900">Performance</h4>
              </div>
              <p className="text-gray-600">Optimisation vitesse et référencement Google</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
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
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-110 transition-all duration-300"
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
