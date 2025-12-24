/* =========================================================
   e-META v5 PRO — script.js (harmonisé)
   - Burger menu mobile
   - i18n FR/EN/ES/AR (text + placeholders + hints)
   - RTL auto for Arabic
   - WhatsApp global button
   ========================================================= */

(function () {
  "use strict";

  const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/9giawgap6b3yjmxtx5i9bc30hjixbu48";

  const TRANSLATIONS = {
    fr: {
      tagline: "Assistant IA multilingue de prise de décision",
      "nav.home": "Accueil",
      "nav.form": "Formulaire",
      "nav.privacy": "Confidentialité",
      "btn.whatsapp": "Requête personnalisée",

      "hero.title": "Donnez à vos décisions le niveau d’un cabinet de consulting premium",
      "hero.subtitle": "e-META analyse votre contexte, vos objectifs, vos contraintes, vos KPIs et vos ressources pour générer une feuille de route claire, exploitable et documentée.",
      "hero.positioning": "e-META n’est pas un chatbot. C’est un moteur d’intelligence décisionnelle inspiré par des cadres de conseil de premier ordre.",
      "cta.start": "Démarrer une analyse stratégique",

      "hero.point1": "Analyse structurée : problème, objectifs, contraintes, risques, KPIs.",
      "hero.point2": "Synthèse actionnable : recommandations, plan d’actions, livrables.",
      "hero.point3": "Restitution personnalisée : Email, WhatsApp, PDF, ou simple affichage.",

      "hero.badge.title": "Version PRO v5.0",
      "hero.badge.text": "Formulaire ultra-premium, inspiré des cabinets Deloitte / EY.",
      "hero.note": "Temps estimé : 5 à 10 minutes pour remplir le formulaire, gain : des heures de réflexion structurée.",

      "form.title": "Formulaire e-META – Version Ultra-Premium (Consulting Business)",
      "form.intro": "Plus vos réponses sont précises, plus la synthèse de e-META sera professionnelle et exploitable.",

      "problem_title": "Le vrai problème",
      "problem_1": "Trop d’informations, pas assez de clarté",
      "problem_2": "Décisions basées sur l’intuition, pas sur une structure",
      "problem_3": "L’expertise “cabinet” est coûteuse ou inaccessible",

      "group.general": "1. Informations générales",
      "group.analysis": "2. Analyse stratégique – Niveau cabinet de conseil",
      "group.budget": "3. Budget, délais & urgence",
      "group.output": "4. Mode de restitution & contact",

      "field.domain.label": "Domaine / Thème principal",
      "field.domain.placeholder": "Sélectionnez un domaine",
      "field.domain.strategy": "Stratégie & Gouvernance",
      "field.domain.finance": "Finance & Modèle économique",
      "field.domain.marketing": "Marketing & Croissance",
      "field.domain.operations": "Opérations & Supply Chain",
      "field.domain.hr": "Ressources humaines & Organisation",
      "field.domain.it": "Systèmes d’information & IA",
      "field.domain.legal": "Juridique & Conformité",
      "field.domain.impact": "Impact social & environnemental",
      "field.domain.other": "Autre (préciser dans le contexte)",

      "field.projectType.label": "Type de projet",
      "field.projectType.placeholder": "Sélectionnez le type de projet",
      "field.projectType.diagnostic": "Diagnostic & Analyse",
      "field.projectType.business": "Business model / Plan d’affaires",
      "field.projectType.roadmap": "Feuille de route stratégique",
      "field.projectType.process": "Optimisation de processus",
      "field.projectType.prototype": "Prototypage / MVP",
      "field.projectType.funding": "Dossier de financement / levée de fonds",
      "field.projectType.other": "Autre",

      "field.projectTitle.label": "Titre court du projet ou de la décision",
      "field.projectTitle.placeholder": "Ex : Optimisation de la stratégie de distribution e-META",

      "field.problem.label": "Problème central à résoudre",
      "field.problem.placeholder": "Décrivez clairement le problème, la décision ou le défi principal auquel vous faites face.",
      "field.objectives.label": "Objectifs principaux",
      "field.objectives.placeholder": "Listez 3 à 5 objectifs que vous souhaitez atteindre.",
      "field.constraints.label": "Contraintes & risques majeurs",
      "field.constraints.placeholder": "Budget limité, délais courts, ressources humaines, contraintes réglementaires, etc.",
      "field.kpis.label": "KPIs / Indicateurs de performance visés",
      "field.kpis.placeholder": "Ex : CA mensuel, marge, clients actifs, délais, satisfaction, etc.",
      "field.resources.label": "Ressources déjà disponibles",
      "field.resources.placeholder": "Équipe, outils, partenaires, données, budget initial, infrastructure, etc.",
      "field.deliverables.label": "Livrables attendus",
      "field.deliverables.placeholder": "Ex : note stratégique, plan d’actions, business plan, pitch deck, etc.",
      "field.successIndicators.label": "Indicateurs de succès (comment saurez-vous que c’est une réussite ?)",
      "field.successIndicators.placeholder": "Ex : atteindre un niveau de ventes, signer un partenariat, valider un pilote, etc.",
      "field.context.label": "Contexte détaillé (facultatif mais fortement recommandé)",
      "field.context.placeholder": "Contexte global, historique, acteurs, décisions déjà prises, éléments clés, etc.",

      "field.budgetMin.label": "Budget minimum envisagé",
      "field.budgetMin.placeholder": "Ex : 1000000",
      "field.budgetMax.label": "Budget maximum (si applicable)",
      "field.budgetMax.placeholder": "Ex : 2500000",
      "field.deadline.label": "Délai souhaité pour disposer de la synthèse / recommandation",
      "field.deadline.placeholder": "Ex : 7 jours, 1 mois, avant telle date précise...",
      "field.urgency.label": "Niveau d’urgence (1 = faible, 5 = critique)",
      "field.urgency.low": "Faible",
      "field.urgency.medium": "Normal",
      "field.urgency.high": "Critique",

      "field.outputMode.label": "Mode de restitution souhaité (vous pouvez en cocher plusieurs)",
      "field.outputMode.email": "Email détaillé",
      "field.outputMode.whatsapp": "Message WhatsApp structuré",
      "field.outputMode.pdf": "Synthèse PDF",
      "field.outputMode.display": "Affichage simple dans e-META",

      "field.email.label": "Adresse e-mail (si restitution par email ou PDF)",
      "field.email.placeholder": "adresse@email.com",
      "field.whatsapp.label": "Numéro WhatsApp avec indicatif pays",
      "field.whatsapp.placeholder": "+221782607212",

      "field.fileLink.label": "Lien vers un fichier ou dossier (facultatif)",
      "field.fileLink.placeholder": "Lien Google Drive, Dropbox, Notion, PDF, etc.",
      "field.fileLink.hint": "Collez ici un lien vers un fichier (Google Drive, Dropbox, Notion, PDF en ligne…)",

      "field.consent.label": "J’accepte que les informations fournies soient utilisées uniquement pour générer une analyse e-META. Aucune donnée personnelle ne sera revendue ou partagée à des tiers.",

      "form.submit": "Envoyer ma requête",
      "form.reset": "Réinitialiser le formulaire",

      "footer.text": "e-META – Assistant IA de décision. Donnez à vos projets un niveau d’analyse stratégique premium.",
      "footer.privacy": "Politique de confidentialité"
    },

    en: {
      tagline: "Decision Intelligence Engine",
      "nav.home": "Home",
      "nav.form": "Form",
      "nav.privacy": "Privacy",
      "btn.whatsapp": "Custom request",

      "hero.title": "Upgrade your decisions to premium consulting level",
      "hero.subtitle": "e-META analyzes your context, goals, constraints, KPIs and resources to produce a clear, actionable decision roadmap.",
      "hero.positioning": "e-META is not a chatbot. It is a decision intelligence engine inspired by top-tier consulting frameworks.",
      "cta.start": "Start a strategic analysis",

      "hero.point1": "Structured analysis: problem, goals, constraints, risks, KPIs.",
      "hero.point2": "Actionable synthesis: recommendations, action plan, deliverables.",
      "hero.point3": "Personalized delivery: Email, WhatsApp, PDF, or on-screen.",

      "hero.badge.title": "PRO v5.0",
      "hero.badge.text": "Ultra-premium form inspired by top consulting frameworks.",
      "hero.note": "Estimated time: 5–10 minutes. Benefit: hours of structured thinking saved.",

      "form.title": "e-META Form — Ultra-Premium (Consulting Business)",
      "form.intro": "The more precise your answers, the more professional and actionable the synthesis.",

      "problem_title": "The real problem",
      "problem_1": "Too much information, not enough clarity",
      "problem_2": "Decisions based on intuition, not structure",
      "problem_3": "Consulting expertise is expensive or inaccessible",

      "group.general": "1. General information",
      "group.analysis": "2. Strategic analysis — Consulting level",
      "group.budget": "3. Budget, timeline & urgency",
      "group.output": "4. Delivery mode & contact",

      "field.domain.label": "Domain / Main topic",
      "field.domain.placeholder": "Select a domain",
      "field.domain.strategy": "Strategy & Governance",
      "field.domain.finance": "Finance & Business model",
      "field.domain.marketing": "Marketing & Growth",
      "field.domain.operations": "Operations & Supply Chain",
      "field.domain.hr": "HR & Organization",
      "field.domain.it": "Information Systems & AI",
      "field.domain.legal": "Legal & Compliance",
      "field.domain.impact": "Social & environmental impact",
      "field.domain.other": "Other",

      "field.projectType.label": "Project type",
      "field.projectType.placeholder": "Select project type",
      "field.projectType.diagnostic": "Diagnostic & Analysis",
      "field.projectType.business": "Business model / Business plan",
      "field.projectType.roadmap": "Strategic roadmap",
      "field.projectType.process": "Process optimization",
      "field.projectType.prototype": "Prototype / MVP",
      "field.projectType.funding": "Funding file / Fundraising",
      "field.projectType.other": "Other",

      "field.projectTitle.label": "Short project / decision title",
      "field.projectTitle.placeholder": "e.g., e-META distribution strategy optimization",

      "field.problem.label": "Central problem to solve",
      "field.problem.placeholder": "Describe the problem, decision or main challenge you face.",
      "field.objectives.label": "Main objectives",
      "field.objectives.placeholder": "List 3 to 5 objectives you want to achieve.",
      "field.constraints.label": "Major constraints & risks",
      "field.constraints.placeholder": "Limited budget, short timeline, regulatory constraints, etc.",
      "field.kpis.label": "Target KPIs / performance indicators",
      "field.kpis.placeholder": "e.g., monthly revenue, margin, active customers, lead time, satisfaction…",
      "field.resources.label": "Available resources",
      "field.resources.placeholder": "Team, tools, partners, data, budget, infrastructure…",
      "field.deliverables.label": "Expected deliverables",
      "field.deliverables.placeholder": "e.g., strategy memo, action plan, business plan, pitch deck…",
      "field.successIndicators.label": "Success indicators (how will you know it worked?)",
      "field.successIndicators.placeholder": "e.g., sales target, partnership signed, pilot validated…",
      "field.context.label": "Detailed context (optional but recommended)",
      "field.context.placeholder": "Background, stakeholders, prior decisions, key facts…",

      "field.budgetMin.label": "Minimum budget",
      "field.budgetMin.placeholder": "e.g., 1000000",
      "field.budgetMax.label": "Maximum budget (if any)",
      "field.budgetMax.placeholder": "e.g., 2500000",
      "field.deadline.label": "Desired deadline for the synthesis",
      "field.deadline.placeholder": "e.g., 7 days, 1 month, before a specific date…",
      "field.urgency.label": "Urgency level (1 = low, 5 = critical)",
      "field.urgency.low": "Low",
      "field.urgency.medium": "Normal",
      "field.urgency.high": "Critical",

      "field.outputMode.label": "Preferred delivery mode (you can select several)",
      "field.outputMode.email": "Detailed email",
      "field.outputMode.whatsapp": "Structured WhatsApp message",
      "field.outputMode.pdf": "PDF synthesis",
      "field.outputMode.display": "On-screen display in e-META",

      "field.email.label": "Email address (for email or PDF)",
      "field.email.placeholder": "email@domain.com",
      "field.whatsapp.label": "WhatsApp number with country code",
      "field.whatsapp.placeholder": "+221782607212",

      "field.fileLink.label": "Link to a file or folder (optional)",
      "field.fileLink.placeholder": "Google Drive, Dropbox, Notion, PDF, etc.",
      "field.fileLink.hint": "Paste a public link to a document (Drive, Dropbox, Notion, online PDF…)",

      "field.consent.label": "I agree that provided information is used only to generate an e-META analysis. No personal data will be sold or shared.",

      "form.submit": "Submit request",
      "form.reset": "Reset form",

      "footer.text": "e-META — Decision intelligence inspired by top consulting frameworks.",
      "footer.privacy": "Privacy policy"
    },

    es: {
      tagline: "Motor de inteligencia para decisiones",
      "nav.home": "Inicio",
      "nav.form": "Formulario",
      "nav.privacy": "Privacidad",
      "btn.whatsapp": "Solicitud personalizada",

      "hero.title": "Lleva tus decisiones al nivel de una consultoría premium",
      "hero.subtitle": "e-META analiza tu contexto, objetivos, restricciones, KPI y recursos para producir una hoja de ruta clara y accionable.",
      "hero.positioning": "e-META no es un chatbot. Es un motor de inteligencia para decisiones inspirado en marcos de consultoría de primer nivel.",
      "cta.start": "Iniciar análisis estratégico",

      "hero.point1": "Análisis estructurado: problema, objetivos, restricciones, riesgos, KPI.",
      "hero.point2": "Síntesis accionable: recomendaciones, plan de acción, entregables.",
      "hero.point3": "Entrega personalizada: Email, WhatsApp, PDF o en pantalla.",

      "hero.badge.title": "PRO v5.0",
      "hero.badge.text": "Formulario ultra premium inspirado en consultoría.",
      "hero.note": "Tiempo estimado: 5–10 min. Beneficio: horas de pensamiento estructurado.",

      "form.title": "Formulario e-META — Ultra-Premium (Consultoría)",
      "form.intro": "Cuanto más precisas sean tus respuestas, más útil y profesional será la síntesis.",

      "problem_title": "El problema real",
      "problem_1": "Demasiada información, poca claridad",
      "problem_2": "Decisiones por intuición, no por estructura",
      "problem_3": "La consultoría es costosa o inaccesible"
    },

    ar: {
      tagline: "محرك ذكاء لاتخاذ القرار",
      "nav.home": "الرئيسية",
      "nav.form": "النموذج",
      "nav.privacy": "الخصوصية",
      "btn.whatsapp": "طلب مخصص",

      "hero.title": "ارفع قراراتك إلى مستوى الاستشارات الاحترافية",
      "hero.subtitle": "يحلّل e-META السياق والأهداف والقيود ومؤشرات الأداء والموارد لإنتاج خارطة طريق واضحة قابلة للتنفيذ.",
      "hero.positioning": "e-META ليس روبوت دردشة. إنه محرك ذكاء لاتخاذ القرار مستوحى من أطر استشارية رفيعة المستوى.",
      "cta.start": "ابدأ التحليل الاستراتيجي",

      "hero.point1": "تحليل منظم: المشكلة، الأهداف، القيود، المخاطر، مؤشرات الأداء.",
      "hero.point2": "خلاصة قابلة للتنفيذ: توصيات، خطة عمل، مخرجات.",
      "hero.point3": "إخراج مخصص: بريد، واتساب، PDF أو عرض مباشر.",

      "hero.badge.title": "PRO v5.0",
      "hero.badge.text": "نموذج احترافي مستوحى من الاستشارات.",
      "hero.note": "الوقت المتوقع: 5–10 دقائق. الفائدة: ساعات من التفكير المنظم.",

      "form.title": "نموذج e-META — نسخة Ultra-Premium",
      "form.intro": "كلما كانت إجاباتك أدق كانت الخلاصة أكثر احترافية وقابلية للتنفيذ.",

      "problem_title": "المشكلة الحقيقية",
      "problem_1": "معلومات كثيرة دون وضوح كافٍ",
      "problem_2": "قرارات حدسية دون إطار منظم",
      "problem_3": "الخبرة الاستشارية مكلفة أو غير متاحة"
    }
  };

  /* =========================
     Helpers
  ========================= */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  function getSavedLang() {
    return localStorage.getItem("emeta_lang") || "fr";
  }

  function setDir(lang) {
    const rtl = lang === "ar";
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }

  function applyTranslations(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    $$("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });
  }

  /* =========================
     Burger menu
  ========================= */
  function initBurger() {
    const burgerBtn = $("#burgerBtn");
    const nav = $("#mainNav");
    if (!burgerBtn || !nav) return;

    burgerBtn.addEventListener("click", () => {
      const open = !nav.classList.contains("open");
      nav.classList.toggle("open", open);
      burgerBtn.setAttribute("aria-expanded", String(open));
    });
  }

  /* =========================
     Language switcher
  ========================= */
  function initLanguage() {
    const switcher = $("#languageSwitcher");
    const lang = getSavedLang();

    if (switcher) switcher.value = lang;
    setDir(lang);
    applyTranslations(lang);

    if (!switcher) return;
    switcher.addEventListener("change", (e) => {
      const newLang = e.target.value;
      localStorage.setItem("emeta_lang", newLang);
      setDir(newLang);
      applyTranslations(newLang);
    });
  }

  /* =========================
     WhatsApp button (global)
  ========================= */
  function initWhatsApp() {
    $$(".whatsappBtnGlobal").forEach((btn) => {
      btn.addEventListener("click", () => {
        const message = "Bonjour e-META, je souhaite faire une requête personnalisée.";
        const phone = "221782607212";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
      });
    });
  }

  /* =========================
     Form submission -> Make webhook (simple)
  ========================= */
  function initForm() {
    const form = $("#emetaForm");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const payload = {};
      formData.forEach((value, key) => {
        if (payload[key]) {
          // multiple checkbox values
          if (!Array.isArray(payload[key])) payload[key] = [payload[key]];
          payload[key].push(value);
        } else {
          payload[key] = value;
        }
      });

      try {
        const res = await fetch(MAKE_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        if (!res.ok) throw new Error("Webhook error");

        form.reset();
        alert("✅ e-META: requête envoyée.");
      } catch (err) {
        console.error(err);
        alert("❌ Erreur d’envoi. Vérifie la connexion Make.");
      }
    });
  }

  /* =========================
     Init
  ========================= */
  function init() {
    initBurger();
    initLanguage();
    initWhatsApp();
    initForm();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
