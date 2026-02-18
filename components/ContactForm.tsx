"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

interface ContactFormProps {
  embedded?: boolean;
}

type Step = 1 | 2 | 3 | 4 | 5;

type FormData = {
  // Section 1: Infos générales
  fullName: string;
  companyName: string;
  slogan: string;
  whatsapp: string;
  phone: string;
  email: string;
  cityCountry: string;
  sector: string;

  // Section 2: Situation digitale
  businessAge: string;
  digitalPresence: string[];
  monthlyClients: string;
  advertisingNow: string;

  // Section 3: Objectifs & projet
  objective: string[];
  siteType: string[];
  productsCount: string;
  paymentMethods: string[];
  biggestProblem: string;
  sixMonthsVision: string;

  // Section 4: Design & budget
  hasLogo: string;
  preferredColors: string;
  inspirationSites: string;
  style: string;
  budgetRange: string;
  adInvestmentReady: string;
  startWhen: string;
  deadline: string;

  // Section 5: Questions spécifiques
  projectDetails: string;
  competitors: string;
  differentiation: string;
  successCriteria: string;
};

type SavedPayload = {
  data: FormData;
  step: Step;
  expiresAt: number;
};

const TOTAL_STEPS = 5;
const STORAGE_KEY = "2ab_quote_form_v4";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24;

const initialData: FormData = {
  fullName: "",
  companyName: "",
  slogan: "",
  whatsapp: "",
  phone: "",
  email: "",
  cityCountry: "",
  sector: "",
  businessAge: "",
  digitalPresence: [],
  monthlyClients: "",
  advertisingNow: "",
  objective: [],
  siteType: [],
  productsCount: "",
  paymentMethods: [],
  biggestProblem: "",
  sixMonthsVision: "",
  hasLogo: "",
  preferredColors: "",
  inspirationSites: "",
  style: "",
  budgetRange: "",
  adInvestmentReady: "",
  startWhen: "",
  deadline: "",
  projectDetails: "",
  competitors: "",
  differentiation: "",
  successCriteria: "",
};

const sectionLabels = ["Général", "Situation", "Objectifs", "Design & Budget", "Projet"];
const objectiveOptions = ["Plus de visibilité", "Plus de ventes", "Améliorer l'image", "Lancer un nouveau produit", "Créer un site", "Automatiser"];
const digitalOptions = ["Page Facebook", "Instagram", "TikTok", "Site web", "Fiche Google Business", "Aucun"];
const siteTypeOptions = ["Site vitrine", "E-commerce", "Blog", "Application web", "Application Android", "Landing page"];
const paymentOptions = ["Wave", "Orange Money", "Carte bancaire", "Paiement à la livraison"];
const styleOptions = ["Moderne", "Minimaliste", "Luxe", "Corporate", "Dynamique"];
const budgetOptions = ["Moins de 50 000 FCFA", "50 000 – 150 000 FCFA", "150 000 – 500 000 FCFA", "500 000 FCFA +", "À discuter"];

const getSavedSnapshot = () => {
  if (typeof window === "undefined") {
    return { data: initialData, step: 1 as Step, restored: false };
  }
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return { data: initialData, step: 1 as Step, restored: false };
  try {
    const saved = JSON.parse(raw) as SavedPayload;
    if (saved.expiresAt <= Date.now()) {
      window.localStorage.removeItem(STORAGE_KEY);
      return { data: initialData, step: 1 as Step, restored: false };
    }
    const safeStep = saved.step >= 1 && saved.step <= TOTAL_STEPS ? saved.step : 1;
    return { data: saved.data, step: safeStep as Step, restored: true };
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return { data: initialData, step: 1 as Step, restored: false };
  }
};

export default function ContactForm({ embedded = false }: ContactFormProps) {
  const [savedSnapshot] = useState(getSavedSnapshot);
  const [step, setStep] = useState<Step>(savedSnapshot.step);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>(savedSnapshot.data);
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [restored, setRestored] = useState(savedSnapshot.restored);

  const isDirty = useMemo(() => JSON.stringify(formData) !== JSON.stringify(initialData), [formData]);

  useEffect(() => {
    if (isSubmitted || typeof window === "undefined") return;
    const payload: SavedPayload = { data: formData, step, expiresAt: Date.now() + SESSION_TTL_MS };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [formData, step, isSubmitted]);

  useEffect(() => {
    if (typeof window === "undefined" || isSubmitted) return;
    const onBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!isDirty) return;
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [isDirty, isSubmitted]);

  // Génération du message WhatsApp compatible ASCII
  function buildAsciiMessage(formData: FormData, score: number, seriousness: string) {
    return [
      '🚀 *NOUVEAU LEAD - FORMULAIRE PRO*',
      '',
      '╭───────────── GENERAL',
      '• Nom : ' + formData.fullName,
      '• Entreprise : ' + formData.companyName,
      '• Slogan : ' + formData.slogan,
      '• WhatsApp : ' + formData.whatsapp,
      '• Téléphone : ' + formData.phone,
      '• Email : ' + formData.email,
      '• Ville/Pays : ' + formData.cityCountry,
      '• Secteur : ' + formData.sector,
      '',
      '╭───────────── SITUATION',
      '• Ancienneté : ' + formData.businessAge,
      '• Présence digitale : ' + formData.digitalPresence.join(', '),
      '• Clients/mois : ' + formData.monthlyClients,
      '• Publicité actuelle : ' + formData.advertisingNow,
      '',
      '╭───────────── OBJECTIFS & PROJET',
      '• Objectifs : ' + formData.objective.join(', '),
      '• Type de site : ' + formData.siteType.join(', '),
      (formData.productsCount ? '• Nombre de produits : ' + formData.productsCount : ''),
      (formData.paymentMethods.length > 0 ? '• Paiements : ' + formData.paymentMethods.join(', ') : ''),
      '• Problème principal : ' + formData.biggestProblem,
      '• Vision 6 mois : ' + formData.sixMonthsVision,
      '',
      '╭───────────── DESIGN & BUDGET',
      '• Logo : ' + formData.hasLogo,
      '• Couleurs : ' + formData.preferredColors,
      '• Sites inspiration : ' + formData.inspirationSites,
      '• Style : ' + formData.style,
      '• Budget : ' + formData.budgetRange,
      '• Prêt à investir pub : ' + formData.adInvestmentReady,
      '• Démarrage : ' + formData.startWhen,
      '• Date livraison : ' + formData.deadline,
      '',
      '╭───────────── PROJET',
      '• Description : ' + formData.projectDetails,
      '• Concurrents : ' + formData.competitors,
      '• Différenciation : ' + formData.differentiation,
      '• Critère de succès : ' + formData.successCriteria,
      '',
      '╭───────────── QUALIFICATION',
      '• Score : ' + score + '/10',
      '• Niveau : ' + seriousness
    ].filter(Boolean).join('\n');
  }

  // Handlers pour les champs du formulaire fusionné
  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }
  function onObjectiveToggle(value: string) {
    setFormData(prev => {
      const arr = prev.objective.includes(value)
        ? prev.objective.filter(v => v !== value)
        : [...prev.objective, value];
      return { ...prev, objective: arr };
    });
  }
  function onSiteTypeToggle(value: string) {
    setFormData(prev => {
      const arr = prev.siteType.includes(value)
        ? prev.siteType.filter(v => v !== value)
        : [...prev.siteType, value];
      return { ...prev, siteType: arr };
    });
  }
  function onPaymentToggle(value: string) {
    setFormData(prev => {
      const arr = prev.paymentMethods.includes(value)
        ? prev.paymentMethods.filter(v => v !== value)
        : [...prev.paymentMethods, value];
      return { ...prev, paymentMethods: arr };
    });
  }
  function onDigitalToggle(value: string) {
    setFormData(prev => {
      if (value === "Aucun") return { ...prev, digitalPresence: prev.digitalPresence.includes("Aucun") ? [] : ["Aucun"] };
      const base = prev.digitalPresence.filter((x) => x !== "Aucun");
      return { ...prev, digitalPresence: base.includes(value) ? base.filter((x) => x !== value) : [...base, value] };
    });
  }

  // Validation par étape
  function validateStep(s: Step): string[] {
    const e: string[] = [];
    if (s === 1) {
      if (!formData.fullName.trim()) e.push("Nom complet requis");
      if (!formData.companyName.trim()) e.push("Entreprise requise");
      if (!formData.whatsapp.trim()) e.push("WhatsApp requis");
      if (!formData.cityCountry.trim()) e.push("Ville/Pays requis");
      if (!formData.sector.trim()) e.push("Secteur requis");
    }
    if (s === 2) {
      if (!formData.businessAge) e.push("Ancienneté requise");
      if (formData.digitalPresence.length === 0) e.push("Présence digitale requise");
      if (!formData.monthlyClients.trim()) e.push("Clients/mois requis");
      if (!formData.advertisingNow) e.push("Réponse publicité requise");
    }
    if (s === 3) {
      if (formData.objective.length === 0) e.push("Objectifs requis");
      if (formData.siteType.length === 0) e.push("Type de site requis");
      if (formData.siteType.includes("E-commerce") && !formData.productsCount.trim()) e.push("Nombre de produits requis pour e-commerce");
      if (formData.siteType.includes("E-commerce") && formData.paymentMethods.length === 0) e.push("Méthodes de paiement requises pour e-commerce");
      if (!formData.biggestProblem.trim()) e.push("Problème principal requis");
      if (!formData.sixMonthsVision.trim()) e.push("Vision à 6 mois requise");
    }
    if (s === 4) {
      if (!formData.hasLogo) e.push("Logo requis");
      if (!formData.style) e.push("Style requis");
      if (!formData.budgetRange) e.push("Budget requis");
      if (!formData.adInvestmentReady) e.push("Niveau d'engagement pub requis");
      if (!formData.startWhen) e.push("Délai de démarrage requis");
    }
    if (s === 5) {
      if (!formData.projectDetails.trim()) e.push("Projet détaillé requis");
      if (!formData.competitors.trim()) e.push("Concurrents requis");
      if (!formData.differentiation.trim()) e.push("Différenciation requise");
      if (!formData.successCriteria.trim()) e.push("Critère de succès requis");
    }
    return e;
  }
  // Score sérieux
  function seriousnessScore() {
    let score = 0;
    if (formData.budgetRange === "150 000 – 500 000 FCFA") score += 2;
    if (formData.budgetRange === "500 000 FCFA +") score += 3;
    if (formData.adInvestmentReady === "Oui") score += 2;
    if (formData.adInvestmentReady === "À discuter") score += 1;
    if (formData.startWhen === "Immédiatement") score += 2;
    if (formData.startWhen === "Ce mois-ci") score += 1;
    if (formData.projectDetails.trim().length >= 80) score += 1;
    return score;
  }
  function seriousnessLabel(score: number) {
    if (score >= 7) return "Très sérieux";
    if (score >= 4) return "Moyen";
    return "À qualifier";
  }
  // Navigation étapes
  function goNext() {
    const stepErrors = validateStep(step);
    setErrors(stepErrors);
    if (stepErrors.length > 0) return;
    if (step < TOTAL_STEPS) {
      setStep((step + 1) as Step);
      setTimeout(() => {
        if (formRef.current) {
          formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }
  function goPrev() {
    setErrors([]);
    if (step === 1) return;
    setStep((step - 1) as Step);
  }

  return (
    <section className={`${embedded ? "py-0 bg-transparent" : "py-24 bg-linear-to-br from-gray-900 to-black"} relative`} id="contact-form">
      <div className={`${embedded ? "" : "container mx-auto px-6"}`}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 text-sm text-cyan-300">Progression: {Math.round((step / TOTAL_STEPS) * 100)}%</div>
          <div className="mb-8 flex justify-between text-sm text-gray-400">{sectionLabels.map((label, i) => <span key={label} className={i + 1 <= step ? "text-white" : ""}>{label}</span>)}</div>
          {restored && <div className="mb-4 p-3 rounded-lg bg-cyan-900/30 border border-cyan-600/30 text-cyan-200">Brouillon restauré automatiquement. Expiration du brouillon: 24h.</div>}
          <form
            ref={formRef}
            onSubmit={e => {
              e.preventDefault();
              // Validation toutes étapes
              const allErrors = ([1,2,3,4,5] as Step[]).flatMap(s => validateStep(s));
              setErrors(allErrors);
              if (allErrors.length > 0) return;
              // Message WhatsApp ASCII
              const score = seriousnessScore();
              const seriousness = seriousnessLabel(score);
              const message = buildAsciiMessage(formData, score, seriousness);
              window.open(`https://wa.me/221762641751?text=${encodeURIComponent(message)}`, "_blank");
              setIsSubmitted(true);
              window.localStorage.removeItem(STORAGE_KEY);
              setErrors([]);
            }}
            className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 space-y-6"
          >
                        {step === 2 && (
                          <>
                            <h3 className="text-base font-semibold text-cyan-200 mb-2">Situation digitale</h3>
                            <select className="w-full px-4 py-3 bg-gray-900/90 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none" name="businessAge" value={formData.businessAge} onChange={onChange}>
                              <option value="">Depuis combien de temps votre business existe ? *</option>
                              <option value="Moins de 6 mois">Moins de 6 mois</option>
                              <option value="6 mois – 1 an">6 mois – 1 an</option>
                              <option value="1 – 3 ans">1 – 3 ans</option>
                              <option value="3 ans +">3 ans +</option>
                            </select>
                            <div className="grid md:grid-cols-2 gap-3">
                              {digitalOptions.map((item) => (
                                <label key={item} className="flex items-center gap-3 px-4 py-3 bg-white/10 border border-white/20 rounded-lg cursor-pointer hover:border-cyan-400">
                                  <input type="checkbox" checked={formData.digitalPresence.includes(item)} onChange={() => onDigitalToggle(item)} className="w-5 h-5" />
                                  <span className="text-white">{item}</span>
                                </label>
                              ))}
                            </div>
                            <input className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none" name="monthlyClients" value={formData.monthlyClients} onChange={onChange} placeholder="Ex : 50 clients" />
                            <select className="w-full px-4 py-3 bg-gray-900/90 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none" name="advertisingNow" value={formData.advertisingNow} onChange={onChange}>
                              <option value="">Faites-vous actuellement de la publicité ? *</option>
                              <option value="Oui">Oui</option>
                              <option value="Non">Non</option>
                            </select>
                          </>
                        )}
            {step === 1 && <>
              <div className="flex flex-col gap-1">
                <label htmlFor="fullName" className="text-xs text-cyan-100/80 pl-1">Nom complet *</label>
                <input id="fullName" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none" name="fullName" value={formData.fullName} onChange={onChange} placeholder="Ex : Mohamed Bathily" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="companyName" className="text-xs text-cyan-100/80 pl-1">Nom de l'entreprise *</label>
                <input id="companyName" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none" name="companyName" value={formData.companyName} onChange={onChange} placeholder="Ex : Autoboss" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="slogan" className="text-xs text-cyan-100/80 pl-1">Slogan (optionnel)</label>
                <input id="slogan" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none" name="slogan" value={formData.slogan} onChange={onChange} placeholder="Ex : Votre mobilité, notre passion" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="whatsapp" className="text-xs text-cyan-100/80 pl-1">Numéro WhatsApp *</label>
                <input id="whatsapp" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none" name="whatsapp" value={formData.whatsapp} onChange={onChange} placeholder="Ex : 771234567" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-xs text-cyan-100/80 pl-1">Téléphone *</label>
                <input id="phone" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none" name="phone" value={formData.phone} onChange={onChange} placeholder="Ex : 771234567" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-xs text-cyan-100/80 pl-1">Email *</label>
                <input id="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none" name="email" value={formData.email} onChange={onChange} placeholder="Ex : contact@autoboss.com" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="cityCountry" className="text-xs text-cyan-100/80 pl-1">Ville, Pays *</label>
                <input id="cityCountry" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none" name="cityCountry" value={formData.cityCountry} onChange={onChange} placeholder="Ex : Dakar, Sénégal" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="sector" className="text-xs text-cyan-100/80 pl-1">Secteur d'activité *</label>
                <input id="sector" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none" name="sector" value={formData.sector} onChange={onChange} placeholder="Ex : Automobile, Immobilier, Restauration..." />
              </div>
            </>}
            {/* SECTION 3 */}
            {step === 3 && <>
              <h3 className="text-base font-semibold text-cyan-200 mb-2">Objectifs & projet</h3>
              <div className="mb-2 text-xs text-cyan-100/80">Sélectionnez un ou plusieurs objectifs pour votre projet (ex : visibilité, automatisation, ventes...)</div>
              <div className="flex flex-col gap-1 mb-2">
                <label className="text-xs text-cyan-100/80 pl-1">Objectifs *</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {objectiveOptions.map((item) => (
                    <label key={item} className={`flex items-center gap-3 px-4 py-3 bg-white/10 border rounded-lg cursor-pointer hover:border-cyan-400 ${errors.some(e=>e.toLowerCase().includes('objectifs')) ? 'border-red-500' : 'border-white/20'}`}>
                      <input type="checkbox" checked={formData.objective.includes(item)} onChange={() => onObjectiveToggle(item)} className="w-5 h-5" />
                      <span className="text-white">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="text-xs text-gray-400 mb-2">Vous pouvez cocher plusieurs objectifs.</div>
              <div className="flex flex-col gap-1 mb-2">
                <label className="text-xs text-cyan-100/80 pl-1">Type de site *</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {siteTypeOptions.map((item) => (
                    <label key={item} className={`flex items-center gap-3 px-4 py-3 bg-white/10 border rounded-lg cursor-pointer hover:border-cyan-400 ${errors.some(e=>e.toLowerCase().includes('type de site')) ? 'border-red-500' : 'border-white/20'}`}>
                      <input type="checkbox" checked={formData.siteType.includes(item)} onChange={() => onSiteTypeToggle(item)} className="w-5 h-5" />
                      <span className="text-white">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
              {formData.siteType.includes("E-commerce") && <>
                <div className="flex flex-col gap-1 mb-2">
                  <label htmlFor="productsCount" className="text-xs text-cyan-100/80 pl-1">Nombre de produits *</label>
                  <input id="productsCount" className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none ${errors.some(e=>e.toLowerCase().includes('produits')) ? 'border-red-500' : 'border-white/20'}`} name="productsCount" value={formData.productsCount} onChange={onChange} placeholder="Ex : 50 produits" />
                </div>
                <div className="flex flex-col gap-1 mb-2">
                  <label className="text-xs text-cyan-100/80 pl-1">Méthodes de paiement *</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {paymentOptions.map((item) => (
                      <label key={item} className={`flex items-center gap-3 px-4 py-3 bg-white/10 border rounded-lg cursor-pointer hover:border-cyan-400 ${errors.some(e=>e.toLowerCase().includes('paiement')) ? 'border-red-500' : 'border-white/20'}`}>
                        <input type="checkbox" checked={formData.paymentMethods.includes(item)} onChange={() => onPaymentToggle(item)} className="w-5 h-5" />
                        <span className="text-white">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </>}
              <div className="flex flex-col gap-1 mb-2">
                <label htmlFor="biggestProblem" className="text-xs text-cyan-100/80 pl-1">Problème principal *</label>
                <textarea id="biggestProblem" className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none ${errors.some(e=>e.toLowerCase().includes('problème principal')) ? 'border-red-500' : 'border-white/20'}`} name="biggestProblem" value={formData.biggestProblem} onChange={onChange} rows={3} placeholder="Ex : manque de visibilité, peu de clients..." />
              </div>
              <div className="flex flex-col gap-1 mb-2">
                <label htmlFor="sixMonthsVision" className="text-xs text-cyan-100/80 pl-1">Vision à 6 mois *</label>
                <textarea id="sixMonthsVision" className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none ${errors.some(e=>e.toLowerCase().includes('vision à 6 mois')) ? 'border-red-500' : 'border-white/20'}`} name="sixMonthsVision" value={formData.sixMonthsVision} onChange={onChange} rows={3} placeholder="Ex : doubler mon chiffre d'affaires, lancer un nouveau service..." />
              </div>
            </>}
            {/* SECTION 4 */}
            {step === 4 && <>
              <h3 className="text-base font-semibold text-cyan-200 mb-2">Design & budget</h3>
              <select className="w-full px-4 py-3 bg-gray-900/90 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none" name="hasLogo" value={formData.hasLogo} onChange={onChange}>
                <option value="">Avez-vous un logo ? *</option>
                <option value="Oui, j'ai un logo">Oui, j'ai un logo</option>
                <option value="Non, besoin d'un logo">Non, besoin d'un logo</option>
                <option value="En cours de création">En cours de création</option>
              </select>
              <input className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none" name="preferredColors" value={formData.preferredColors} onChange={onChange} placeholder="Ex : bleu, blanc, rouge..." />
              <input className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none" name="inspirationSites" value={formData.inspirationSites} onChange={onChange} placeholder="Ex : https://exemple.com, https://autre.com" />
              <select className="w-full px-4 py-3 bg-gray-900/90 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none" name="style" value={formData.style} onChange={onChange}>
                <option value="">Style souhaité *</option>
                {styleOptions.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
              <select className="w-full px-4 py-3 bg-gray-900/90 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none" name="budgetRange" value={formData.budgetRange} onChange={onChange}>
                <option value="">Budget estimé *</option>
                {budgetOptions.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
              <select className="w-full px-4 py-3 bg-gray-900/90 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none" name="adInvestmentReady" value={formData.adInvestmentReady} onChange={onChange}>
                <option value="">Prêt à investir dans la publicité ? *</option>
                <option value="Oui">Oui</option>
                <option value="Non">Non</option>
                <option value="À discuter">À discuter</option>
              </select>
              <select className="w-full px-4 py-3 bg-gray-900/90 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none" name="startWhen" value={formData.startWhen} onChange={onChange}>
                <option value="">Quand souhaitez-vous commencer ? *</option>
                <option value="Immédiatement">Immédiatement</option>
                <option value="Ce mois-ci">Ce mois-ci</option>
                <option value="Plus tard">Plus tard</option>
              </select>
              <input className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none" name="deadline" value={formData.deadline} onChange={onChange} placeholder="Ex : dans 2 mois, dès que possible..." />
            </>}
            {/* SECTION 5 */}
            {step === 5 && <>
              <h3 className="text-base font-semibold text-cyan-200 mb-2">Questions spécifiques</h3>
              <textarea className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none" name="projectDetails" value={formData.projectDetails} onChange={onChange} rows={4} placeholder="Ex : je vends des voitures importées, je veux un site simple avec catalogue, contact WhatsApp..." />
              <textarea className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none" name="competitors" value={formData.competitors} onChange={onChange} rows={3} placeholder="Ex : DakarAuto, SenAuto, etc." />
              <textarea className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none" name="differentiation" value={formData.differentiation} onChange={onChange} rows={3} placeholder="Ex : livraison rapide, SAV, prix bas, etc." />
              <textarea className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none" name="successCriteria" value={formData.successCriteria} onChange={onChange} rows={3} placeholder="Ex : 100 ventes/mois, 50 demandes de contact, etc." />
            </>}
            {errors.length > 0 && <div className="rounded-lg border border-red-500/40 bg-red-900/20 p-4 text-red-200">{errors.map((e) => <div key={e}>• {e}</div>)}</div>}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              {step > 1 ? (
                <button type="button" onClick={goPrev} className="flex items-center gap-2 px-5 py-3 bg-white/10 text-white rounded-full hover:bg-white/20">
                  <ArrowLeft className="w-4 h-4" /> Retour
                </button>
              ) : <div />}
              {step < TOTAL_STEPS ? (
                <button type="button" onClick={goNext} className="ml-auto flex items-center gap-2 px-7 py-3 bg-linear-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold hover:shadow-cyan-500/40">
                  Continuer <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button type="submit" className="ml-auto flex items-center gap-2 px-8 py-4 bg-linear-to-r from-green-600 to-emerald-500 text-white rounded-full font-bold hover:shadow-green-500/40">
                  <CheckCircle className="w-5 h-5" /> Envoyer mon projet
                </button>
              )}
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
            <span>Le formulaire reste intact si l&apos;utilisateur revient avant expiration (24h).</span>
            {isDirty && !isSubmitted && (
              <button type="button" onClick={() => { setFormData(initialData); setStep(1); setErrors([]); setRestored(false); window.localStorage.removeItem(STORAGE_KEY); }} className="text-cyan-300 hover:text-cyan-200">
                Réinitialiser
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
