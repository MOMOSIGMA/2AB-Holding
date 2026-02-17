"use client";

import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    title: "Voitures Sénégal",
    category: "E-commerce Automobile",
    description: "Plateforme complète de vente de véhicules avec recherche avancée et gestion intelligente",
    url: "https://voituressenegal.com/",
    color: "from-blue-600 to-cyan-500",
    tech: ["Next.js", "Database", "Search"]
  },
  {
    title: "Caille & Œuf Dakar",
    category: "E-commerce Alimentaire",
    description: "Boutique en ligne moderne pour la vente d'œufs et cailles avec système de commande",
    url: "https://caille-oeuf-dakar.netlify.app/",
    color: "from-orange-600 to-red-500",
    tech: ["React", "E-commerce", "Netlify"]
  },
  {
    title: "Dabakh Fitness & Wellness",
    category: "Site Vitrine Sport",
    description: "Site premium pour centre de fitness avec réservations et programmes d'entraînement",
    url: "https://dabakh-fitness-wellness.vercel.app/",
    color: "from-green-600 to-emerald-500",
    tech: ["Next.js", "Booking", "Vercel"]
  },
  {
    title: "HostMate AI",
    category: "Application IA",
    description: "Plateforme intelligente d'assistance pour hôtes avec automatisation IA",
    url: "https://hostmate-ai.netlify.app/",
    color: "from-purple-600 to-pink-500",
    tech: ["AI", "React", "Automation"]
  },
  {
    title: "MarcheNet Afrique",
    category: "Marketplace",
    description: "Marketplace africaine moderne avec paiements sécurisés et livraison tracking",
    url: "https://marchenet-afrique.vercel.app/",
    color: "from-yellow-600 to-orange-500",
    tech: ["Next.js", "Payment", "Logistics"]
  }
];

export default function Portfolio() {
  return (
    <section className="py-32 bg-[#0f141b] relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/15 rounded-full backdrop-blur-sm mb-4">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-blue-200 font-semibold">Projets en Production</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white">
              Réalisations Concrètes
            </h2>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des sites web performants qui génèrent des résultats réels pour mes clients
            </p>
          </div>
          
          {/* Portfolio Grid - Masonry Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative p-8 space-y-6">
                  {/* Icon/Category Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`px-4 py-2 bg-linear-to-r ${project.color} text-white text-sm font-bold rounded-full shadow-lg`}>
                      {project.category}
                    </span>
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <ExternalLink className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Visit Link */}
                  <div className="pt-4 flex items-center gap-2 text-blue-200 font-semibold group-hover:gap-4 transition-all">
                    <span>Visiter le site</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-20">
            <div className="inline-flex flex-col items-center gap-6 p-12 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
              <p className="text-2xl text-gray-300 font-light">
                Votre projet pourrait être le prochain sur cette liste
              </p>
              <a
                href="https://wa.me/221762641751"
                className="group px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3"
              >
                Discutons de votre vision
                <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
