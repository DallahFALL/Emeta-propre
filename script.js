/* ============================================
   e-META v5.2 – Formulaire décisionnel avancé
   ============================================ */

const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/dagmll5s04nubg7dp2gujws72zzedvx2";

let currentLang = "fr";

const LANG_CONFIG = {
  fr: {
    ui: {
      flag: "🇫🇷",
      code: "FR",
      nav_home: "Accueil",
      nav_about: "À propos",
      nav_faq: "FAQ",
      nav_contact: "Contact",
      hero_title: "e-META — L’assistant IA pluridisciplinaire",
      hero_sub:
        "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",
      form_title: "Requête décisionnelle e-META",
      label_full_name: "Nom complet",
      label_email: "Email (optionnel)",
      label_whatsapp: "WhatsApp (optionnel)",
      label_domain: "Domaine / Thème",
      label_title: "Titre court de la décision",
      label_context: "Contexte détaillé",
      label_objectives: "Objectifs recherchés",
      label_constraints: "Contraintes (optionnel)",
      label_budget_amount: "Budget (montant)",
      label_budget_currency: "Devise",
      label_deadline: "Délai souhaité",
      label_urgency: "Urgence (1–5)",
      label_output: "Mode de restitution",
      output_auto: "Automatique",
      output_email: "Email",
      output_whatsapp: "WhatsApp",
      output_display: "Affichage direct",
      label_attachment: "Lien fichier (optionnel)",
      label_consent_main:
        "J’autorise e-META à analyser mes données pour fournir une réponse personnalisée.",
      label_privacy_link: "Voir la politique de confidentialité",
      btn_send: "Envoyer",
      btn_reset: "Réinitialiser",
      about_title: "À propos",
      about_body:
        "e-META structure les demandes et produit une synthèse stratégique adaptée au contexte, pour faciliter la prise de décision dans tous les domaines.",
      faq_title: "FAQ",
      faq_q1: "Comment fonctionne e-META ?",
      faq_a1:
        "Remplissez le formulaire avec votre besoin, choisissez le mode de restitution et e-META génère une synthèse intelligente, prête à être utilisée.",
      contact_title: "Contact",
      contact_email_label: "Email :",
      contact_support_label: "Support :",
      footer_text: "© 2025 e-META • Simplement. Intelligemment."
    },
    domains: [
      "Agriculture",
      "Énergie",
      "Finances & Banque",
      "Immobilier",
      "Industrie & Production",
      "Transport & Logistique",
      "Technologie & IA",
      "Santé",
      "Éducation & Formation",
      "Gouvernance & Stratégie",
      "Projets publics / ONG",
      "Autre"
    ],
    domainExamples: {
      Agriculture: "Déploiement d’une ferme irriguée intelligente",
      "Énergie": "Lancement d’une mini-centrale solaire rurale",
      "Finances & Banque": "Création d’un fonds de micro-crédit solidaire",
      Immobilier: "Construction d’un immeuble R+3 à vocation locative",
      "Industrie & Production": "Mise en place d’une unité de transformation",
      "Transport & Logistique": "Optimisation de la flotte de livraison",
      "Technologie & IA": "Lancement d’une plateforme IA de recommandation",
      Santé: "Ouverture d’un centre médical de proximité",
      "Éducation & Formation": "Création d’un centre de formation digitale",
      "Gouvernance & Stratégie": "Plan stratégique triennal d’une organisation",
      "Projets publics / ONG": "Programme d’appui aux agriculteurs vulnérables"
    },
    currencies: [
      { value: "XOF", label: "XOF — Franc CFA" },
      { value: "EUR", label: "EUR — Euro" },
      { value: "USD", label: "USD — Dollar américain" },
      { value: "GBP", label: "GBP — Livre sterling" }
    ],
    placeholders: {
      context:
        "Décrivez la situation actuelle, les acteurs, les enjeux, les zones géographiques…",
      objectives:
        "Quels résultats concrets souhaitez-vous ? Indicateurs, impacts, cibles…",
      constraints:
        "Contraintes, risques, limites de budget, délais, ressources humaines…",
      deadline: "Ex : 3 mois, T2 2026, avant fin 2025…"
    }
  },

  en: {
    ui: {
      flag: "🇬🇧",
      code: "EN",
      nav_home: "Home",
      nav_about: "About",
      nav_faq: "FAQ",
      nav_contact: "Contact",
      hero_title: "e-META — The multidisciplinary AI assistant",
      hero_sub:
        "Smart decision form to analyse, diagnose and recommend tailored solutions.",
      form_title: "e-META decision request",
      label_full_name: "Full name",
      label_email: "Email (optional)",
      label_whatsapp: "WhatsApp (optional)",
      label_domain: "Domain / Topic",
      label_title: "Short decision title",
      label_context: "Detailed context",
      label_objectives: "Objectives",
      label_constraints: "Constraints (optional)",
      label_budget_amount: "Budget (amount)",
      label_budget_currency: "Currency",
      label_deadline: "Desired deadline",
      label_urgency: "Urgency (1–5)",
      label_output: "Delivery channel",
      output_auto: "Automatic",
      output_email: "Email",
      output_whatsapp: "WhatsApp",
      output_display: "On-screen display",
      label_attachment: "File link (optional)",
      label_consent_main:
        "I authorize e-META to analyse my data to provide a tailored answer.",
      label_privacy_link: "View privacy policy",
      btn_send: "Send",
      btn_reset: "Reset",
      about_title: "About",
      about_body:
        "e-META structures your request and generates a strategic summary adapted to your context.",
      faq_title: "FAQ",
      faq_q1: "How does e-META work?",
      faq_a1:
        "Fill in the form, choose your preferred delivery mode and e-META produces an intelligent summary.",
      contact_title: "Contact",
      contact_email_label: "Email:",
      contact_support_label: "Support:",
      footer_text: "© 2025 e-META • Simply. Intelligently."
    },
    domains: [
      "Agriculture",
      "Energy",
      "Finance & Banking",
      "Real Estate",
      "Industry & Manufacturing",
      "Transport & Logistics",
      "Technology & AI",
      "Health",
      "Education & Training",
      "Governance & Strategy",
      "Public / NGO projects",
      "Other"
    ],
    domainExamples: {
      Agriculture: "Launch of an irrigated smart farm project",
      Energy: "Deployment of a rural solar mini-grid",
      "Finance & Banking": "Creation of a micro-credit fund for SMEs",
      "Real Estate": "Development of a R+3 rental building",
      "Industry & Manufacturing": "New agro-processing plant",
      "Transport & Logistics": "Redesign of last-mile delivery network",
      "Technology & AI": "AI assistant for financial decision support",
      Health: "Opening of a community health centre",
      "Education & Training": "Digital academy for entrepreneurs",
      "Governance & Strategy": "3-year strategic plan for an NGO",
      "Public / NGO projects": "Inclusive agriculture support programme"
    },
    currencies: [
      { value: "USD", label: "USD — US Dollar" },
      { value: "EUR", label: "EUR — Euro" },
      { value: "GBP", label: "GBP — Pound sterling" },
      { value: "XOF", label: "XOF — West African CFA" }
    ],
    placeholders: {
      context:
        "Describe the current situation, stakeholders, geography, constraints…",
      objectives:
        "What concrete results do you expect? KPIs, impact, target groups…",
      constraints:
        "Constraints, risks, budget limits, deadlines, human resources…",
      deadline: "Eg: 3 months, Q2 2026, by end of 2025…"
    }
  },

  es: {
    ui: {
      flag: "🇪🇸",
      code: "ES",
      nav_home: "Inicio",
      nav_about: "Acerca de",
      nav_faq: "FAQ",
      nav_contact: "Contacto",
      hero_title: "e-META — El asistente de IA multidisciplinario",
      hero_sub:
        "Formulario inteligente para analizar, diagnosticar y recomendar soluciones adecuadas.",
      form_title: "Solicitud de decisión e-META",
      label_full_name: "Nombre completo",
      label_email: "Email (opcional)",
      label_whatsapp: "WhatsApp (opcional)",
      label_domain: "Dominio / Tema",
      label_title: "Título breve de la decisión",
      label_context: "Contexto detallado",
      label_objectives: "Objetivos buscados",
      label_constraints: "Restricciones (opcional)",
      label_budget_amount: "Presupuesto (monto)",
      label_budget_currency: "Divisa",
      label_deadline: "Plazo deseado",
      label_urgency: "Urgencia (1–5)",
      label_output: "Canal de entrega",
      output_auto: "Automático",
      output_email: "Email",
      output_whatsapp: "WhatsApp",
      output_display: "Visualización directa",
      label_attachment: "Enlace de archivo (opcional)",
      label_consent_main:
        "Autorizo a e-META a analizar mis datos para proporcionar una respuesta personalizada.",
      label_privacy_link: "Ver política de privacidad",
      btn_send: "Enviar",
      btn_reset: "Restablecer",
      about_title: "Acerca de",
      about_body:
        "e-META estructura las solicitudes y genera una síntesis estratégica adaptada al contexto.",
      faq_title: "FAQ",
      faq_q1: "¿Cómo funciona e-META?",
      faq_a1:
        "Complete el formulario, elija el canal de entrega y e-META generará una síntesis inteligente.",
      contact_title: "Contacto",
      contact_email_label: "Email:",
      contact_support_label: "Soporte:",
      footer_text: "© 2025 e-META • Simplemente. Inteligentemente."
    },
    domains: [
      "Agricultura",
      "Energía",
      "Finanzas y banca",
      "Bienes raíces",
      "Industria y producción",
      "Transporte y logística",
      "Tecnología e IA",
      "Salud",
      "Educación y formación",
      "Gobernanza y estrategia",
      "Proyectos públicos / ONG",
      "Otro"
    ],
    domainExamples: {
      Agricultura: "Programa de modernización de explotaciones agrícolas",
      Energía: "Instalación de sistema solar para una comunidad rural",
      "Finanzas y banca": "Fondo de microcrédito para pequeños negocios",
      "Bienes raíces": "Promoción de edificio residencial",
      "Industria y producción": "Planta de transformación agroindustrial",
      "Transporte y logística": "Optimización de rutas de distribución",
      "Tecnología e IA": "Plataforma de recomendación con IA",
      Salud: "Centro médico comunitario",
      "Educación y formación": "Centro de formación profesional digital",
      "Gobernanza y estrategia": "Plan estratégico de una organización",
      "Proyectos públicos / ONG": "Proyecto de apoyo a comunidades rurales"
    },
    currencies: [
      { value: "EUR", label: "EUR — Euro" },
      { value: "USD", label: "USD — Dólar" },
      { value: "GBP", label: "GBP — Libra esterlina" },
      { value: "XOF", label: "XOF — Franco CFA" }
    ],
    placeholders: {
      context:
        "Describa la situación actual, los actores, el territorio, los retos…",
      objectives:
        "¿Qué resultados concretos busca? Indicadores, impacto, beneficiarios…",
      constraints:
        "Restricciones, riesgos, límites de presupuesto y plazos…",
      deadline: "Ej.: 3 meses, T2 2026, antes de fin de 2025…"
    }
  },

  ar: {
    ui: {
      flag: "🇸🇦",
      code: "AR",
      nav_home: "الرئيسية",
      nav_about: "حول",
      nav_faq: "الأسئلة الشائعة",
      nav_contact: "اتصال",
      hero_title: "e-META — المساعد الذكي متعدّد التخصصات",
      hero_sub:
        "نموذج ذكي لتحليل وتشخيص و اقتراح حلول مناسبة حسب السياق.",
      form_title: "طلب قرار عبر e-META",
      label_full_name: "الاسم الكامل",
      label_email: "البريد الإلكتروني (اختياري)",
      label_whatsapp: "واتساب (اختياري)",
      label_domain: "المجال / الموضوع",
      label_title: "عنوان مختصر للقرار",
      label_context: "السياق بالتفصيل",
      label_objectives: "الأهداف المطلوبة",
      label_constraints: "القيود (اختياري)",
      label_budget_amount: "الميزانية (المبلغ)",
      label_budget_currency: "العملة",
      label_deadline: "الموعد المطلوب",
      label_urgency: "درجة الاستعجال (1–5)",
      label_output: "قناة الإرسال",
      output_auto: "تلقائي",
      output_email: "بريد إلكتروني",
      output_whatsapp: "واتساب",
      output_display: "عرض مباشر",
      label_attachment: "رابط الملف (اختياري)",
      label_consent_main:
        "أوافق على أن يقوم e-META بتحليل بياناتي لتقديم إجابة مخصصة.",
      label_privacy_link: "عرض سياسة الخصوصية",
      btn_send: "إرسال",
      btn_reset: "إعادة التهيئة",
      about_title: "حول",
      about_body:
        "يقوم e-META بتنظيم طلبك وإنتاج خلاصة استراتيجية مناسبة لسياقك.",
      faq_title: "الأسئلة الشائعة",
      faq_q1: "كيف يعمل e-META؟",
      faq_a1:
        "املأ النموذج، واختر قناة الإرسال، وسيقوم e-META بإنشاء خلاصة ذكية جاهزة للاستخدام.",
      contact_title: "اتصال",
      contact_email_label: "البريد الإلكتروني:",
      contact_support_label: "الدعم:",
      footer_text: "© 2025 e-META • ببساطة. بذكاء."
    },
    domains: [
      "الزراعة",
      "الطاقة",
      "المالية و البنوك",
      "العقار",
      "الصناعة و الإنتاج",
      "النقل و اللوجستيك",
      "التقنية و الذكاء الاصطناعي",
      "الصحة",
      "التعليم و التدريب",
      "الحوكمة و الاستراتيجية",
      "المشاريع العامة / الجمعيات",
      "أخرى"
    ],
    domainExamples: {
      "الزراعة": "مشروع تطوير مزرعة ذكية بالري الحديث",
      "الطاقة": "إطلاق نظام طاقة شمسية لقرية ريفية",
      "المالية و البنوك": "صندوق تمويل صغير لدعم المشاريع",
      "العقار": "إنشاء مبنى سكني للاستثمار",
      "الصناعة و الإنتاج": "وحدة لتحويل المنتجات الزراعية",
      "النقل و اللوجستيك": "تحسين شبكة التوزيع والنقل",
      "التقنية و الذكاء الاصطناعي": "منصة استشارات مدعومة بالذكاء الاصطناعي",
      "الصحة": "مركز صحي مجتمعي",
      "التعليم و التدريب": "مركز تدريب مهني رقمي",
      "الحوكمة و الاستراتيجية": "خطة استراتيجية لثلاث سنوات",
      "المشاريع العامة / الجمعيات": "برنامج دعم للأسر الهشة"
    },
    currencies: [
      { value: "XOF", label: "XOF — فرنك إفريقي" },
      { value: "USD", label: "USD — دولار أمريكي" },
      { value: "EUR", label: "EUR — يورو" },
      { value: "GBP", label: "GBP — جنيه إسترليني" }
    ],
    placeholders: {
      context: "اشرح الوضع الحالي والأطراف المعنية والمجال الجغرافي…",
      objectives: "ما هي النتائج التي تريد تحقيقها؟ مؤشرات، تأثير، مستفيدون…",
      constraints: "القيود، المخاطر، حدود الميزانية والآجال…",
      deadline: "مثال: 3 أشهر، 2026، قبل نهاية 2025…"
    }
  }
};

/* -------- helpers --------- */

function setText(key, value) {
  document.querySelectorAll(`[data-i18n="${key}"]`).forEach(el => {
    el.textContent = value;
  });
}

function populateSelect(select, options) {
  if (!select) return;
  select.innerHTML = "";
  options.forEach(opt => {
    const o = document.createElement("option");
    o.value = opt.value || opt;
    o.textContent = opt.label || opt;
    select.appendChild(o);
  });
}

/* ----- apply language ------ */

function applyLanguage(lang) {
  const cfg = LANG_CONFIG[lang] || LANG_CONFIG.fr;
  currentLang = lang;

  // html lang + RTL
  document.documentElement.lang = lang === "ar" ? "ar" : lang;
  const rtl = lang === "ar";
  document.body.classList.toggle("rtl", rtl);

  const ui = cfg.ui;

  // Nav + hero + form + sections
  setText("nav_home", ui.nav_home);
  setText("nav_about", ui.nav_about);
  setText("nav_faq", ui.nav_faq);
  setText("nav_contact", ui.nav_contact);
  setText("hero_title", ui.hero_title);
  setText("hero_sub", ui.hero_sub);
  setText("form_title", ui.form_title);

  setText("label_full_name", ui.label_full_name);
  setText("label_email", ui.label_email);
  setText("label_whatsapp", ui.label_whatsapp);
  setText("label_domain", ui.label_domain);
  setText("label_title", ui.label_title);
  setText("label_context", ui.label_context);
  setText("label_objectives", ui.label_objectives);
  setText("label_constraints", ui.label_constraints);
  setText("label_budget_amount", ui.label_budget_amount);
  setText("label_budget_currency", ui.label_budget_currency);
  setText("label_deadline", ui.label_deadline);
  setText("label_urgency", ui.label_urgency);
  setText("label_output", ui.label_output);
  setText("output_auto", ui.output_auto);
  setText("output_email", ui.output_email);
  setText("output_whatsapp", ui.output_whatsapp);
  setText("output_display", ui.output_display);
  setText("label_attachment", ui.label_attachment);
  setText("label_consent_main", ui.label_consent_main);
  setText("label_privacy_link", ui.label_privacy_link);
  setText("btn_send", ui.btn_send);
  setText("btn_reset", ui.btn_reset);

  setText("about_title", ui.about_title);
  setText("about_body", ui.about_body);
  setText("faq_title", ui.faq_title);
  setText("faq_q1", ui.faq_q1);
  setText("faq_a1", ui.faq_a1);
  setText("contact_title", ui.contact_title);
  setText("contact_email_label", ui.contact_email_label);
  setText("contact_support_label", ui.contact_support_label);
  setText("footer_text", ui.footer_text);

  // Lang button
  const flagEl = document.getElementById("langFlag");
  const codeEl = document.getElementById("langCode");
  if (flagEl) flagEl.textContent = ui.flag;
  if (codeEl) codeEl.textContent = ui.code;

  // hidden language input
  const langInput = document.getElementById("language");
  if (langInput) langInput.value = lang;

  // domains
  const domainSelect = document.getElementById("domain");
  populateSelect(domainSelect, cfg.domains);

  // currencies
  const currencySelect = document.getElementById("budget_currency");
  populateSelect(currencySelect, cfg.currencies);

  // placeholders
  const ph = cfg.placeholders;
  const ctx = document.getElementById("context");
  const obj = document.getElementById("objectives");
  const cons = document.getElementById("constraints");
  const ddl = document.getElementById("deadline");
  if (ctx) ctx.placeholder = ph.context;
  if (obj) obj.placeholder = ph.objectives;
  if (cons) cons.placeholder = ph.constraints;
  if (ddl) ddl.placeholder = ph.deadline;

  // adapter exemple titre selon domaine
  updateDecisionTitlePlaceholder();
}

/* ----- domaine -> exemple ----- */

function updateDecisionTitlePlaceholder() {
  const cfg = LANG_CONFIG[currentLang] || LANG_CONFIG.fr;
  const select = document.getElementById("domain");
  const input = document.getElementById("decision_title");
  if (!select || !input) return;

  const value = select.value;
  const examples = cfg.domainExamples || {};
  const example = examples[value];

  if (example) {
    input.placeholder = example;
  } else {
    // fallback générique
    if (currentLang === "fr") {
      input.placeholder =
        "Ex : Lancement d’un nouveau service ou projet stratégique…";
    } else if (currentLang === "en") {
      input.placeholder =
        "Eg: Launch of a new product or strategic project…";
    } else if (currentLang === "es") {
      input.placeholder =
        "Ej.: Lanzamiento de un nuevo servicio o proyecto estratégico…";
    } else {
      input.placeholder = "مثال: إطلاق مشروع أو خدمة جديدة…";
    }
  }
}

/* ----- Webhook Make ----- */

function sendToMake(payload) {
  fetch(MAKE_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).catch(err => console.error("Erreur webhook:", err));
}

/* ----- DOM ready ----- */

document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("burgerBtn");
  const mainNav = document.getElementById("mainNav");
  if (burgerBtn && mainNav) {
    burgerBtn.addEventListener("click", () => {
      burgerBtn.classList.toggle("active");
      mainNav.classList.toggle("open");
    });
    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        burgerBtn.classList.remove("active");
        mainNav.classList.remove("open");
      });
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        burgerBtn.classList.remove("active");
        mainNav.classList.remove("open");
      }
    });
  }

  // Lang menu
  const langToggle = document.getElementById("langToggle");
  const langMenu = document.getElementById("langMenu");
  if (langToggle && langMenu) {
    langToggle.addEventListener("click", e => {
      e.stopPropagation();
      langMenu.classList.toggle("show");
    });
    langMenu.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    const lang = item.dataset.lang;
    applyLanguage(lang);
    localStorage.setItem("eMetaLang", lang); // 🔴 ligne à ajouter
    langMenu.classList.remove("show");
  });
});

    document.addEventListener("click", e => {
      if (!langMenu.contains(e.target) && e.target !== langToggle) {
        langMenu.classList.remove("show");
      }
    });
  }

  // Domaine change -> exemple
  const domainSelect = document.getElementById("domain");
  if (domainSelect) {
    domainSelect.addEventListener("change", updateDecisionTitlePlaceholder);
  }

  // Boutons Send / Reset
  const sendBtn = document.getElementById("sendBtn");
  const resetBtn = document.getElementById("resetBtn");

  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      const consent = document.getElementById("consent");
      if (!consent || !consent.checked) {
        alert(
          currentLang === "fr"
            ? "Veuillez cocher la case de consentement."
            : currentLang === "en"
            ? "Please tick the consent checkbox."
            : currentLang === "es"
            ? "Por favor marque la casilla de consentimiento."
            : "يرجى تأكيد الموافقة على معالجة البيانات."
        );
        return;
      }

      const payload = {
        full_name: document.getElementById("full_name").value || "",
        email: document.getElementById("email").value || "",
        whatsapp: document.getElementById("whatsapp").value || "",
        language: document.getElementById("language").value || currentLang,
        domain: document.getElementById("domain").value || "",
        decision_title: document.getElementById("decision_title").value || "",
        context: document.getElementById("context").value || "",
        objectives: document.getElementById("objectives").value || "",
        constraints: document.getElementById("constraints").value || "",
        budget_amount: document.getElementById("budget_amount").value || "",
        budget_currency:
          document.getElementById("budget_currency").value || "",
        deadline: document.getElementById("deadline").value || "",
        urgency: document.getElementById("urgency").value || "",
        output_preference:
          document.querySelector("input[name='output_preference']:checked")
            ?.value || "auto",
        attachment_url: document.getElementById("attachment_url").value || "",
        consent: true
      };

      sendToMake(payload);

      alert(
        currentLang === "fr"
          ? "Votre requête a été envoyée à e-META. Vous recevrez une synthèse personnalisée."
          : currentLang === "en"
          ? "Your request has been sent to e-META. You will receive a tailored summary."
          : currentLang === "es"
          ? "Su solicitud ha sido enviada a e-META. Recibirá una síntesis personalizada."
          : "تم إرسال طلبك إلى e-META. ستتلقى خلاصة مخصصة قريباً."
      );
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const form = document.getElementById("emetaForm");
      if (form) form.reset();
      applyLanguage(currentLang || "fr");
    });
  }

  // Bouton WhatsApp (header)
  const waBtn = document.getElementById("whatsappBtn");
  if (waBtn) {
    waBtn.addEventListener("click", () => {
      const number = "221782607212";
      const msg =
        currentLang === "fr"
          ? "Bonjour, je souhaite une analyse décisionnelle via e-META."
          : currentLang === "en"
          ? "Hello, I would like a decision analysis via e-META."
          : currentLang === "es"
          ? "Hola, me gustaría un análisis de decisión con e-META."
          : "مرحباً، أود الحصول على تحليل قرار عبر e-META.";
      const url = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank");
    });
  }

  // Langue par défaut
  applyLanguage("fr");
});

/* --- BURGER MENU MOBILE --- */
const burger = document.getElementById("burgerBtn");
const mobileNav = document.getElementById("mainNav");

if (burger && mobileNav) {
  burger.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });
}
