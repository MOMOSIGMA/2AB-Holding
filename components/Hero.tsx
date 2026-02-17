"use client";

import { ArrowRight, Phone, MessageCircle, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0d1117] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(29,78,216,0.3),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(6,182,212,0.22),transparent_28%)]"></div>
      <div className="absolute inset-0 grain-overlay opacity-30"></div>

      <div className="container mx-auto px-6 pt-36 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-end">
          <div className="space-y-9">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-blue-100">
              Studio digital basé à Dakar
            </span>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.98] tracking-tight">
              Un design qui marque,
              <span className="block text-blue-300">une présence qui vend.</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/75 max-w-2xl leading-relaxed">
              Nous créons des interfaces claires, élégantes et orientées résultats pour transformer votre visibilité en demandes réelles.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="https://wa.me/221762641751"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                Parler de mon projet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
              </a>

              <a
                href="tel:+221771463012"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 font-semibold"
              >
                <Phone className="w-5 h-5" />
                +221 77 146 30 12
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 pt-3">
              <div>
                <p className="text-4xl font-black text-white">20+</p>
                <p className="text-white/60 text-sm">projets livrés</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white">100%</p>
                <p className="text-white/60 text-sm">focus conversion</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white">&lt; 2s</p>
                <p className="text-white/60 text-sm">vitesse moyenne</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/4 backdrop-blur-md p-8 md:p-10 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200/70 mb-6">Ce que vous obtenez</p>
            <ul className="space-y-4">
              {[
                "Direction artistique sur-mesure, loin des templates IA",
                "Interface pensée pour rassurer et déclencher le contact",
                "Site rapide, SEO-ready et simple à faire évoluer",
                "Accompagnement stratégique après mise en ligne"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/85 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-cyan-300 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/10 pt-6 flex items-center justify-between">
              <span className="text-white/70 text-sm">Disponibilité</span>
              <span className="text-sm font-semibold px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-300/30">
                Nouvelles missions ouvertes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
