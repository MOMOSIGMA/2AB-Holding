"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle, Sparkles, Zap, Trophy } from "lucide-react";

interface FormData {
  // Étape 1 - Infos entreprise
  companyName: string;
  slogan: string;
  activity: string;
  yearCreated: string;
  location: string;
  phone: string;
  email: string;
  whatsapp: string;
  
  // Étape 2 - Détails projet
  objective: string[];
  mainGoal: string;
  siteType: string[];
  productsCount: string;
  paymentMethods: string[];
  
  // Étape 3 - Design & Budget
  hasLogo: string;
  preferredColors: string;
  inspirationSites: string;
  style: string;
  budget: string;
  deadline: string;
  successCriteria: string;
}

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    slogan: "",
    activity: "",
    yearCreated: "",
    location: "",
    phone: "",
    email: "",
    whatsapp: "",
    objective: [],
    mainGoal: "",
    siteType: [],
    productsCount: "",
    paymentMethods: [],
    hasLogo: "",
    preferredColors: "",
    inspirationSites: "",
    style: "",
    budget: "",
    deadline: "",
    successCriteria: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: keyof FormData, value: string) => {
    setFormData(prev => {
      const currentArray = prev[name] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      return { ...prev, [name]: newArray };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Créer le message WhatsApp
    const message = `🚀 NOUVEAU PROJET - 2AB HOLDING

📋 ENTREPRISE
━━━━━━━━━━━━━━━
• Nom: ${formData.companyName}
• Slogan: ${formData.slogan || 'Non fourni'}
• Activité: ${formData.activity}
• Année: ${formData.yearCreated}
• Localisation: ${formData.location}
• Téléphone: ${formData.phone}
• Email: ${formData.email}
• WhatsApp: ${formData.whatsapp}

🎯 OBJECTIFS
━━━━━━━━━━━━━━━
• Objectifs: ${formData.objective.join(', ')}
• Objectif principal: ${formData.mainGoal}
• Type de site: ${formData.siteType.join(', ')}
${formData.productsCount ? `• Nombre de produits: ${formData.productsCount}` : ''}
${formData.paymentMethods.length > 0 ? `• Paiements: ${formData.paymentMethods.join(', ')}` : ''}

🎨 DESIGN & BUDGET
━━━━━━━━━━━━━━━
• Logo: ${formData.hasLogo}
• Couleurs: ${formData.preferredColors}
• Style: ${formData.style}
• Sites inspiration: ${formData.inspirationSites || 'Non fourni'}
• Budget: ${formData.budget}
• Délai: ${formData.deadline}

💎 CRITÈRE DE SUCCÈS
━━━━━━━━━━━━━━━
${formData.successCriteria}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/221771463012?text=${encodedMessage}`, '_blank');
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const motivationalMessages = [
    {
      icon: Sparkles,
      title: "Excellent début ! 🎯",
      message: "Tu sais bien ce que tu veux et tu es à deux doigts de passer dans la cour des grands",
      color: "from-blue-600 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Impressionnant ! ⚡",
      message: "Ton projet prend forme. Plus qu'une étape pour concrétiser ta vision digitale",
      color: "from-purple-600 to-pink-500"
    },
    {
      icon: Trophy,
      title: "C'est le moment ! 🏆",
      message: "Tu es prêt à transformer ton business. Finalisons ensemble ce projet ambitieux",
      color: "from-green-600 to-emerald-500"
    }
  ];

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-black text-white mb-2">Parlons de votre entreprise</h3>
        <p className="text-gray-400">Commençons par les bases</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white font-semibold mb-2">Nom de l'entreprise *</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
            placeholder="Ma Super Entreprise"
            required
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Slogan</label>
          <input
            type="text"
            name="slogan"
            value={formData.slogan}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
            placeholder="Votre phrase d'accroche"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-white font-semibold mb-2">Description de l'activité *</label>
          <textarea
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
            placeholder="Que fait votre entreprise ?"
            required
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Année de création</label>
          <input
            type="text"
            name="yearCreated"
            value={formData.yearCreated}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
            placeholder="2020"
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Localisation *</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
            placeholder="Dakar, Sénégal"
            required
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Téléphone *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
            placeholder="+221 77 123 45 67"
            required
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Email professionnel *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
            placeholder="contact@entreprise.com"
            required
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">WhatsApp</label>
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
            placeholder="+221 77 123 45 67"
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-black text-white mb-2">Détails du projet</h3>
        <p className="text-gray-400">Aidez-nous à comprendre votre vision</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-white font-semibold mb-3">Pourquoi voulez-vous un site web ? *</label>
          <div className="grid md:grid-cols-2 gap-3">
            {['Présence en ligne', 'Vendre en ligne', 'Générer des leads', 'Montrer portfolio', 'Réservation en ligne', 'Autre'].map(obj => (
              <label key={obj} className="flex items-center gap-3 px-4 py-3 bg-white/10 border border-white/20 rounded-lg cursor-pointer hover:border-cyan-400 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.objective.includes(obj)}
                  onChange={() => handleCheckboxChange('objective', obj)}
                  className="w-5 h-5"
                />
                <span className="text-white">{obj}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Quel est votre objectif principal ? *</label>
          <select
            name="mainGoal"
            value={formData.mainGoal}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900/90 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none [&>option]:bg-gray-900 [&>option]:text-white"
            required
          >
            <option value="" className="bg-gray-900 text-gray-400">Sélectionnez...</option>
            <option value="Plus de ventes" className="bg-gray-900 text-white">Plus de ventes</option>
            <option value="Plus de clients" className="bg-gray-900 text-white">Plus de clients</option>
            <option value="Image professionnelle" className="bg-gray-900 text-white">Image professionnelle</option>
            <option value="Automatisation" className="bg-gray-900 text-white">Automatisation</option>
          </select>
        </div>

        <div>
          <label className="block text-white font-semibold mb-3">Type de site souhaité *</label>
          <div className="grid md:grid-cols-2 gap-3">
            {['Site vitrine', 'E-commerce', 'Blog', 'Application web', 'Application Android', 'Landing page'].map(type => (
              <label key={type} className="flex items-center gap-3 px-4 py-3 bg-white/10 border border-white/20 rounded-lg cursor-pointer hover:border-cyan-400 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.siteType.includes(type)}
                  onChange={() => handleCheckboxChange('siteType', type)}
                  className="w-5 h-5"
                />
                <span className="text-white">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {formData.siteType.includes('E-commerce') && (
          <>
            <div>
              <label className="block text-white font-semibold mb-2">Combien de produits ?</label>
              <input
                type="text"
                name="productsCount"
                value={formData.productsCount}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                placeholder="Ex: 50-100 produits"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-3">Méthodes de paiement souhaitées</label>
              <div className="grid md:grid-cols-2 gap-3">
                {['Wave', 'Orange Money', 'Carte bancaire', 'Paiement à la livraison'].map(method => (
                  <label key={method} className="flex items-center gap-3 px-4 py-3 bg-white/10 border border-white/20 rounded-lg cursor-pointer hover:border-cyan-400 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.paymentMethods.includes(method)}
                      onChange={() => handleCheckboxChange('paymentMethods', method)}
                      className="w-5 h-5"
                    />
                    <span className="text-white">{method}</span>
                  </label>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-black text-white mb-2">Design & Budget</h3>
        <p className="text-gray-400">Dernière étape avant le grand saut</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white font-semibold mb-2">Avez-vous un logo ? *</label>
          <select
            name="hasLogo"
            value={formData.hasLogo}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900/90 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none [&>option]:bg-gray-900 [&>option]:text-white"
            required
          >
            <option value="" className="bg-gray-900 text-gray-400">Sélectionnez...</option>
            <option value="Oui, j'ai un logo" className="bg-gray-900 text-white">Oui, j'ai un logo</option>
            <option value="Non, besoin d'un logo" className="bg-gray-900 text-white">Non, besoin d'un logo</option>
            <option value="En cours de création" className="bg-gray-900 text-white">En cours de création</option>
          </select>
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Couleurs préférées</label>
          <input
            type="text"
            name="preferredColors"
            value={formData.preferredColors}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
            placeholder="Ex: Bleu et blanc"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-white font-semibold mb-2">Sites que vous aimez (liens)</label>
          <textarea
            name="inspirationSites"
            value={formData.inspirationSites}
            onChange={handleChange}
            rows={2}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
            placeholder="https://exemple1.com, https://exemple2.com"
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Style souhaité *</label>
          <select
            name="style"
            value={formData.style}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900/90 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none [&>option]:bg-gray-900 [&>option]:text-white"
            required
          >
            <option value="" className="bg-gray-900 text-gray-400">Sélectionnez...</option>
            <option value="Moderne" className="bg-gray-900 text-white">Moderne</option>
            <option value="Minimaliste" className="bg-gray-900 text-white">Minimaliste</option>
            <option value="Luxe" className="bg-gray-900 text-white">Luxe</option>
            <option value="Corporate" className="bg-gray-900 text-white">Corporate</option>
            <option value="Dynamique" className="bg-gray-900 text-white">Dynamique</option>
          </select>
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Budget estimé *</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900/90 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none [&>option]:bg-gray-900 [&>option]:text-white"
            required
          >
            <option value="" className="bg-gray-900 text-gray-400">Sélectionnez...</option>
            <option value="50k – 100k FCFA" className="bg-gray-900 text-white">50k – 100k FCFA</option>
            <option value="100k – 300k FCFA" className="bg-gray-900 text-white">100k – 300k FCFA</option>
            <option value="300k+ FCFA" className="bg-gray-900 text-white">300k+ FCFA</option>
            <option value="À discuter" className="bg-gray-900 text-white">À discuter</option>
          </select>
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Date souhaitée de livraison</label>
          <input
            type="text"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
            placeholder="Ex: Dans 1 mois"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-white font-semibold mb-2">👉 Qu'est-ce qui vous ferait dire que ce projet est un succès ? *</label>
          <textarea
            name="successCriteria"
            value={formData.successCriteria}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
            placeholder="Décrivez votre vision du succès..."
            required
          />
        </div>
      </div>
    </div>
  );

  const MotivationalBanner = ({ data }: { data: typeof motivationalMessages[0] }) => {
    const Icon = data.icon;
    return (
      <div className={`mb-8 p-6 bg-gradient-to-r ${data.color} rounded-2xl text-white text-center`}>
        <div className="flex items-center justify-center gap-3 mb-3">
          <Icon className="w-8 h-8" />
          <h4 className="text-2xl font-black">{data.title}</h4>
        </div>
        <p className="text-lg">{data.message}</p>
      </div>
    );
  };

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden" id="contact-form">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Lancez votre{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Projet
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              3 étapes rapides pour concrétiser votre vision digitale
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    step >= num 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white' 
                      : 'bg-white/10 text-gray-400'
                  }`}>
                    {step > num ? <CheckCircle className="w-6 h-6" /> : num}
                  </div>
                  {num < 3 && (
                    <div className={`w-24 md:w-32 h-1 mx-2 ${
                      step > num ? 'bg-gradient-to-r from-blue-600 to-cyan-500' : 'bg-white/10'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>Entreprise</span>
              <span>Projet</span>
              <span>Design</span>
            </div>
          </div>

          {/* Motivational Banner */}
          {step > 1 && <MotivationalBanner data={motivationalMessages[step - 2]} />}

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Retour
                </button>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all"
                >
                  Continuer
                  <ArrowRight className="w-6 h-6" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-full font-black text-xl shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all"
                >
                  <Trophy className="w-7 h-7" />
                  Envoyer mon projet
                  <ArrowRight className="w-7 h-7" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
