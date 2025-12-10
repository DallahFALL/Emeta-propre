// =======================
// CONFIG
// =======================

const WHATSAPP_NUMBER = "221782607212";
// Remplace ici par l’URL de ton webhook Make :
const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/REMPLACE_CI";

// =======================
// TRADUCTIONS
// =======================

const translations = {
  fr: {
    tagline: "Assistant IA multilingue de prise de décision",

    "nav.home": "Accueil",
    "nav.form": "Formulaire",
    "nav.privacy": "Confidentialité",

    "btn.whatsapp": "Requête personnalisée",

    "hero.title":
      "Donnez à vos décisions le niveau d’un cabinet de consulting premium",
    "hero.subtitle":
      "e-META analyse votre contexte, vos objectifs, vos contraintes, vos KPIs et vos ressources pour générer une feuille de route claire, exploitable et documentée.",
    "hero.point1":
      "Analyse structurée : problème, objectifs, contraintes, risques, KPIs.",
    "hero.point2":
      "Synthèse actionnable : recommandations, plan d’actions, livrables.",
    "hero.point3":
      "Restitution personnalisée : Email, WhatsApp, PDF, ou simple affichage.",
    "hero.cta": "Commencer une analyse stratégique",
    "hero.badge.title": "Version PRO v5.0",
    "hero.badge.text":
      "Formulaire ultra-premium, inspiré des cabinets Deloitte / EY.",
    "hero.note":
      "Temps estimé : 5 à 10 minutes pour remplir le formulaire, gain : des heures de réflexion structurée.",

    "form.title":
      "Formulaire e-META – Version Ultra-Premium (Consulting Business)",
    "form.intro":
      "Plus vos réponses sont précises, plus la synthèse de e-META sera professionnelle et exploitable.",
    "form.submit": "Envoyer ma requête",
    "form.reset": "Réinitialiser le formulaire",

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
    "field.projectTitle.placeholder":
      "Ex : Optimisation de la stratégie de distribution e-META",

    "field.problem.label": "Problème central à résoudre",
    "field.problem.placeholder":
      "Décrivez clairement le problème, la décision ou le défi principal auquel vous faites face.",

    "field.objectives.label": "Objectifs principaux",
    "field.objectives.placeholder":
      "Listez 3 à 5 objectifs que vous souhaitez atteindre.",

    "field.constraints.label": "Contraintes & risques majeurs",
    "field.constraints.placeholder":
      "Budget limité, délais courts, ressources humaines, contraintes réglementaires, etc.",

    "field.kpis.label": "KPIs / Indicateurs de performance visés",
    "field.kpis.placeholder":
      "Ex : CA mensuel, marge, nombre de clients actifs, délais de traitement, satisfaction client, etc.",

    "field.resources.label": "Ressources déjà disponibles",
    "field.resources.placeholder":
      "Équipe, outils, partenaires, données, budget initial, infrastructure, etc.",

    "field.deliverables.label": "Livrables attendus",
    "field.deliverables.placeholder":
      "Ex : note stratégique, plan d’actions, business plan, canevas financier, argumentaire, pitch deck, etc.",

    "field.successIndicators.label":
      "Indicateurs de succès (comment saurez-vous que c’est une réussite ?)",
    "field.successIndicators.placeholder":
      "Ex : atteindre un certain niveau de ventes, signer un partenariat, valider un pilote, etc.",

    "field.context.label":
      "Contexte détaillé (facultatif mais fortement recommandé)",
    "field.context.placeholder":
      "Expliquez le contexte global, l’historique, les acteurs impliqués, les décisions déjà prises, etc.",

    "field.budgetMin.label": "Budget minimum envisagé",
    "field.budgetMin.placeholder": "Ex : 1000000",
    "field.budgetMax.label": "Budget maximum (si applicable)",
    "field.budgetMax.placeholder": "Ex : 2500000",

    "field.deadline.label":
      "Délai souhaité pour disposer de la synthèse / recommandation",
    "field.deadline.placeholder":
      "Ex : 7 jours, 1 mois, avant telle date précise...",

    "field.urgency.label": "Niveau d’urgence (1 = faible, 5 = critique)",
    "field.urgency.low": "Faible",
    "field.urgency.medium": "Normal",
    "field.urgency.high": "Critique",

    "field.outputMode.label":
      "Mode de restitution souhaité (vous pouvez en cocher plusieurs)",
    "field.outputMode.email": "Email détaillé",
    "field.outputMode.whatsapp": "Message WhatsApp structuré",
    "field.outputMode.pdf": "Synthèse PDF",
    "field.outputMode.display": "Affichage simple dans e-META",

    "field.email.label":
      "Adresse e-mail (si restitution par email ou PDF)",
    "field.email.placeholder": "adresse@email.com",

    "field.whatsapp.label": "Numéro WhatsApp avec indicatif pays",
    "field.whatsapp.placeholder": "+221782607212",

    "field.fileLink.label": "Lien vers un fichier ou dossier (facultatif)",
    "field.fileLink.placeholder":
      "Lien Google Drive, Dropbox, Notion, PDF, etc.",

    "field.consent.label":
      "J’accepte que les informations fournies soient utilisées uniquement pour générer une analyse e-META. Aucune donnée personnelle ne sera revendue ou partagée à des tiers.",

    "footer.text":
      "e-META – Assistant IA de décision. Donnez à vos projets un niveau d’analyse stratégique premium.",
    "footer.privacy": "Politique de confidentialité",

    // Privacy
    "privacy.title": "e-META – Politique de confidentialité",
    "privacy.heading": "Politique de confidentialité e-META",
    "privacy.intro":
      "Cette page décrit la manière dont e-META traite les informations que vous fournissez via le formulaire de décision stratégique.",
    "privacy.section1.title": "1. Données collectées",
    "privacy.section1.text":
      "Les données collectées via le formulaire (problème, objectifs, budget, coordonnées, etc.) sont utilisées exclusivement pour générer une analyse stratégique personnalisée via e-META.",
    "privacy.section2.title": "2. Utilisation des données",
    "privacy.section2.text":
      "Les informations sont utilisées uniquement pour produire la synthèse demandée (email, message WhatsApp, PDF ou affichage). e-META ne vend pas, ne loue pas et ne cède pas vos données personnelles à des tiers.",
    "privacy.section3.title": "3. Durée de conservation",
    "privacy.section3.text":
      "Les données peuvent être conservées pour améliorer la qualité des recommandations et pour l’historique de vos analyses. Vous pouvez demander la suppression de vos données sur simple demande.",
    "privacy.section4.title": "4. Sécurité",
    "privacy.section4.text":
      "e-META met en œuvre des mesures techniques et organisationnelles pour protéger vos données contre les accès non autorisés, la perte ou la divulgation.",
    "privacy.section5.title": "5. Contact",
    "privacy.section5.text":
      "Pour toute question ou demande relative à vos données, vous pouvez contacter l’administrateur d’e-META via le formulaire ou le canal WhatsApp indiqué sur la page principale."
  },

  // Version anglaise simplifiée (tu pourras l’affiner plus tard)
  en: {
    tagline: "Multilingual AI decision assistant",

    "nav.home": "Home",
    "nav.form": "Form",
    "nav.privacy": "Privacy",

    "btn.whatsapp": "Custom request",

    "hero.title":
      "Give your decisions the level of a premium consulting firm",
    "hero.subtitle":
      "e-META analyses your context, objectives, constraints, KPIs and resources to generate a clear, actionable and documented roadmap.",
    "hero.point1":
      "Structured analysis: problem, objectives, constraints, risks, KPIs.",
    "hero.point2":
      "Actionable synthesis: recommendations, action plan, deliverables.",
    "hero.point3":
      "Custom output: Email, WhatsApp, PDF or simple display.",
    "hero.cta": "Start a strategic analysis",
    "hero.badge.title": "PRO Version v5.0",
    "hero.badge.text":
      "Ultra-premium form inspired by leading consulting firms.",
    "hero.note":
      "Estimated time: 5–10 minutes to fill out, saving hours of structured thinking.",

    "form.title":
      "e-META Form – Ultra-Premium Version (Business Consulting)",
    "form.intro":
      "The more accurate your answers, the more professional and useful the e-META synthesis will be.",
    "form.submit": "Send my request",
    "form.reset": "Reset form",

    "group.general": "1. General information",
    "group.analysis": "2. Strategic analysis – Consulting level",
    "group.budget": "3. Budget, timeline & urgency",
    "group.output": "4. Output mode & contact",

    "field.domain.label": "Domain / Main theme",
    "field.domain.placeholder": "Select a domain",
    "field.domain.strategy": "Strategy & Governance",
    "field.domain.finance": "Finance & Business model",
    "field.domain.marketing": "Marketing & Growth",
    "field.domain.operations": "Operations & Supply Chain",
    "field.domain.hr": "Human Resources & Organization",
    "field.domain.it": "Information systems & AI",
    "field.domain.legal": "Legal & Compliance",
    "field.domain.impact": "Social & Environmental impact",
    "field.domain.other": "Other (explain in context)",

    "field.projectType.label": "Project type",
    "field.projectType.placeholder": "Select project type",
    "field.projectType.diagnostic": "Diagnosis & Analysis",
    "field.projectType.business": "Business model / Business plan",
    "field.projectType.roadmap": "Strategic roadmap",
    "field.projectType.process": "Process optimization",
    "field.projectType.prototype": "Prototyping / MVP",
    "field.projectType.funding": "Funding / Investment file",
    "field.projectType.other": "Other",

    "field.projectTitle.label": "Short title of the project or decision",
    "field.projectTitle.placeholder":
      "E.g.: Optimization of e-META distribution strategy",

    "field.problem.label": "Core problem to solve",
    "field.problem.placeholder":
      "Clearly describe the main problem, decision or challenge you are facing.",

    "field.objectives.label": "Main objectives",
    "field.objectives.placeholder":
      "List 3 to 5 objectives you want to achieve.",

    "field.constraints.label": "Main constraints & risks",
    "field.constraints.placeholder":
      "Limited budget, tight deadlines, human resources, regulations, etc.",

    "field.kpis.label": "KPIs / Performance indicators",
    "field.kpis.placeholder":
      "E.g.: monthly revenue, margin, active customers, processing time, satisfaction, etc.",

    "field.resources.label": "Resources already available",
    "field.resources.placeholder":
      "Team, tools, partners, data, initial budget, infrastructure, etc.",

    "field.deliverables.label": "Expected deliverables",
    "field.deliverables.placeholder":
      "E.g.: strategic note, action plan, business plan, financial model, pitch deck, etc.",

    "field.successIndicators.label": "Success indicators",
    "field.successIndicators.placeholder":
      "E.g.: reach a target revenue, sign a partnership, validate a pilot, etc.",

    "field.context.label": "Detailed context (optional but highly recommended)",
    "field.context.placeholder":
      "Describe the global context, history, stakeholders, decisions already made, etc.",

    "field.budgetMin.label": "Minimum estimated budget",
    "field.budgetMin.placeholder": "E.g.: 1000000",
    "field.budgetMax.label": "Maximum budget (if any)",
    "field.budgetMax.placeholder": "E.g.: 2500000",

    "field.deadline.label":
      "Desired delay to receive the synthesis / recommendation",
    "field.deadline.placeholder":
      "E.g.: 7 days, 1 month, before a specific date...",

    "field.urgency.label": "Urgency level (1 = low, 5 = critical)",
    "field.urgency.low": "Low",
    "field.urgency.medium": "Normal",
    "field.urgency.high": "Critical",

    "field.outputMode.label":
      "Preferred output mode (you may select several)",
    "field.outputMode.email": "Detailed email",
    "field.outputMode.whatsapp": "Structured WhatsApp message",
    "field.outputMode.pdf": "PDF synthesis",
    "field.outputMode.display": "Simple display in e-META",

    "field.email.label": "Email address (for email or PDF output)",
    "field.email.placeholder": "email@domain.com",

    "field.whatsapp.label": "WhatsApp number with country code",
    "field.whatsapp.placeholder": "+221782607212",

    "field.fileLink.label": "File or folder link (optional)",
    "field.fileLink.placeholder":
      "Google Drive, Dropbox, Notion, PDF link, etc.",

    "field.consent.label":
      "I accept that this information is used exclusively to generate an e-META analysis. No personal data will be sold or shared with third parties.",

    "footer.text":
      "e-META – AI decision assistant. Give your projects a premium level of strategic analysis.",
    "footer.privacy": "Privacy policy",

    "privacy.title": "e-META – Privacy policy",
    "privacy.heading": "e-META Privacy policy",
    "privacy.intro":
      "This page explains how e-META processes the information you provide via the strategic decision form.",
    "privacy.section1.title": "1. Data collected",
    "privacy.section1.text":
      "Data collected via the form (problem, objectives, budget, contact details, etc.) are used only to build a personalized strategic analysis.",
    "privacy.section2.title": "2. Use of data",
    "privacy.section2.text":
      "Information is used only to produce the requested synthesis (email, WhatsApp message, PDF or on-screen display). e-META does not sell, rent or transfer your data to third parties.",
    "privacy.section3.title": "3. Data retention",
    "privacy.section3.text":
      "Data may be kept to improve the quality of recommendations and to build a history of your analyses. You can request deletion of your data at any time.",
    "privacy.section4.title": "4. Security",
    "privacy.section4.text":
      "e-META implements technical and organizational measures to protect your data from unauthorized access, loss or disclosure.",
    "privacy.section5.title": "5. Contact",
    "privacy.section5.text":
      "For any data-related question or request, you can contact the e-META administrator through the main page form or the WhatsApp channel."
  },

  // Pour le moment, ES & AR peuvent réutiliser EN/FR (à affiner plus tard).
  es: {},
  ar: {}
};

// Helper pour fusionner fallback FR/EN pour ES/AR si vide
function getDictionary(lang) {
  if (translations[lang] && Object.keys(translations[lang]).length > 0) {
    return translations[lang];
  }
  // Par défaut : ES → EN, AR → FR (à personnaliser plus tard)
  if (lang === "es") return translations["en"];
  if (lang === "ar") return translations["fr"];
  return translations["fr"];
}

// =======================
// APPLICATION DE LA LANGUE
// =======================

function applyTranslations(lang) {
  const dict = getDictionary(lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });
}

function setLanguage(lang) {
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("emeta_lang", lang);
  applyTranslations(lang);
}

// =======================
// WHATSAPP
// =======================

function setupWhatsAppButtons() {
  const buttons = document.querySelectorAll(".whatsappBtnGlobal");
  if (!buttons.length) return;

  const baseTextFr =
    "Bonjour, je souhaite une requête personnalisée e-META (version PRO).";
  const baseTextEn =
    "Hello, I would like a custom e-META PRO request.";

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentLang = localStorage.getItem("emeta_lang") || "fr";
      const text =
        currentLang === "en" || currentLang === "es"
          ? baseTextEn
          : baseTextFr;

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        text
      )}`;
      window.open(url, "_blank");
    });
  });
}

// =======================
// BURGER / NAV MOBILE
// =======================

function setupBurgerMenu() {
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");

  if (!burger || !nav) return;

  burger.addEventListener("click", () => {
    burger.classList.toggle("is-open");
    nav.classList.toggle("nav-open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("is-open");
      nav.classList.remove("nav-open");
    });
  });
}

// =======================
// FORMULAIRE + MAKE WEBHOOK
// =======================

function setupForm() {
  const form = document.getElementById("emetaForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Ajout d’infos contextuelles
    data.source = "eMETA v5.0 – Ultra-Premium";
    data.lang = localStorage.getItem("emeta_lang") || "fr";
    data.timestamp = new Date().toISOString();

    if (!MAKE_WEBHOOK_URL || MAKE_WEBHOOK_URL.includes("REMPLACE_CI")) {
      alert(
        "Formulaire prêt. Ajoute l’URL exacte de ton webhook Make dans script.js (const MAKE_WEBHOOK_URL) pour activer l’envoi automatique."
      );
      return;
    }

    try {
      const res = await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        alert(
          "Votre requête e-META a bien été envoyée. Vous recevrez la synthèse selon le mode de restitution choisi."
        );
        form.reset();
      } else {
        console.error("Erreur Webhook", await res.text());
        alert(
          "Une erreur est survenue lors de l’envoi. Merci de réessayer dans quelques instants."
        );
      }
    } catch (err) {
      console.error(err);
      alert(
        "Impossible de contacter le serveur pour le moment. Vérifiez votre connexion ou réessayez plus tard."
      );
    }
  });
}

// =======================
// INIT GLOBAL
// =======================

document.addEventListener("DOMContentLoaded", () => {
  // Langue initiale
  const select = document.getElementById("languageSwitcher");
  const savedLang = localStorage.getItem("emeta_lang") || "fr";

  if (select) {
    select.value = savedLang;
    select.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }

  setLanguage(savedLang);

  setupWhatsAppButtons();
  setupBurgerMenu();
  setupForm();
});
