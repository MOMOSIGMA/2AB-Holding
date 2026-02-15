"use client";

import { Shield, Zap, Smartphone, Headphones, MapPin, Star } from "lucide-react";

const benefits = [
  {
    icon: Star,
    title: "Design Moderne",
    description: "Interfaces élégantes qui impressionnent vos clients"
  },
  {
    icon: Zap,
    title: "Rapide & Sécurisé",
    description: "Performance optimale et sécurité maximale"
  },
  {
    icon: Smartphone,
    title: "100% Responsive",
    description: "Parfait sur mobile, tablette et desktop"
  },
  {
    icon: Headphones,
    title: "Support Personnalisé",
    description: "Accompagnement et assistance continue"
  },
  {
    icon: MapPin,
    title: "Basé à Dakar",
    description: "Service local, qualité internationale"
  },
  {
    icon: Shield,
    title: "Garantie Qualité",
    description: "Satisfaction client ou remboursement"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Pourquoi me <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">choisir ?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Excellence technique et proximité locale pour votre réussite digitale
            </p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100%", label: "Satisfaction" },
              { value: "24/7", label: "Disponibilité" },
              { value: "<3s", label: "Temps de chargement" },
              { value: "SEO", label: "Optimisé Google" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
