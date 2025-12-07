/* ============================================
   e-META v5.1 – Formulaire décisionnel avancé
   ============================================ */

const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/dagmll5s04nubg7dp2gujws72zzedvx2";

/* --------- Configuration langues ---------- */

const LANG_CONFIG = {
  fr: {
    ui: {
      lang_flag: "🇫🇷",
      lang_code: "FR",
      form_title: "Requête décisionnelle e-META",
      full_name: "Nom complet",
      email: "Email (optionnel)",
      whatsapp: "WhatsApp (optionnel)",
      domain: "Domaine / Thème",
      title: "Titre court de la décision",
      context: "Contexte détaillé",
      objectives: "Objectifs recherchés",
      constraints: "Contraintes (optionnel)",
      budget_amount: "Budget (montant)",
      budget_currency: "Devise",
      deadline: "Délai souhaité",
      urgency: "Urgence (1–5)",
      output: "Mode de restitution",
      output_auto: "Automatique",
      output_email: "Email",
      output_whatsapp: "WhatsApp",
      output_display: "Affichage direct",
      attachment: "Lien fichier (optionnel)",
      consent_main:
        "J’autorise e-META à analyser mes données pour fournir une réponse personnalisée.",
      privacy_link: "Voir la politique de confidentialité"
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
    currencies: [
      { value: "XOF", label: "XOF — Franc CFA" },
      { value: "EUR", label: "EUR — Euro" },
      { value: "USD", label: "USD — Dollar américain" },
      { value: "GBP", label: "GBP — Livre sterling" }
    ],
    placeholders: {
      title: "Ex : Lancement d’une station-service, projet solaire, etc.",
      context: "Décrivez la situation actuelle, le contexte, les acteurs concernés…",
      objectives: "Quels résultats concrets souhaitez-vous obtenir ?",
      constraints: "Contraintes, risques, limites de budget, délais, ressources…",
      deadline: "Ex : 3 mois, Q1 2026, avant fin 2025…"
    }
  },

  en: {
    ui: {
      lang_flag: "🇬🇧",
      lang_code: "EN",
      form_title: "e-META decision request",
      full_name: "Full name",
      email: "Email (optional)",
      whatsapp: "WhatsApp (optional)",
      domain: "Domain / Topic",
      title: "Short decision title",
      context: "Detailed context",
      objectives: "Objectives",
      constraints: "Constraints (optional)",
      budget_amount: "Budget (amount)",
      budget_currency: "Currency",
      deadline: "Desired deadline",
      urgency: "Urgency (1–5)",
      output: "Delivery channel",
      output_auto: "Automatic",
      output_email: "Email",
      output_whatsapp: "WhatsApp",
      output_display: "On-screen display",
      attachment: "File link (optional)",
      consent_main:
        "I authorize e-META to analyse my data to provide a tailored answer.",
      privacy_link: "View privacy policy"
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
    currencies: [
      { value: "USD", label: "USD — US Dollar" },
      { value: "EUR", label: "EUR — Euro" },
      { value: "GBP", label: "GBP — Pound sterling" },
      { value: "XOF", label: "XOF — West African CFA" }
    ],
    placeholders: {
      title: "Eg: Solar project launch, service station opening, etc.",
      context: "Describe the current situation, stakeholders, environment…",
      objectives: "What concrete results do you expect?",
      constraints: "Constraints, risks, budget limits, deadlines…",
      deadline: "Eg: 3 months, Q1 2026, by end of 2025…"
    }
  },

  es: {
    ui: {
      lang_flag: "🇪🇸",
      lang_code: "ES",
      form_title: "Solicitud de decisión e-META",
      full_name: "Nombre completo",
      email: "Email (opcional)",
      whatsapp: "WhatsApp (opcional)",
      domain: "Dominio / Tema",
      title: "Título breve de la decisión",
      context: "Contexto detallado",
      objectives: "Objetivos buscados",
      constraints: "Restricciones (opcional)",
      budget_amount: "Presupuesto (monto)",
      budget_currency: "Divisa",
      deadline: "Plazo deseado",
      urgency: "Urgencia (1–5)",
      output: "Canal de entrega",
      output_auto: "Automático",
      output_email: "Email",
      output_whatsapp: "WhatsApp",
      output_display: "Visualización directa",
      attachment: "Enlace de archivo (opcional)",
      consent_main:
        "Autorizo a e-META a analizar mis datos para proporcionar una respuesta personalizada.",
      privacy_link: "Ver política de privacidad"
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
    currencies: [
      { value: "EUR", label: "EUR — Euro" },
      { value: "USD", label: "USD — Dólar" },
      { value: "GBP", label: "GBP — Libra esterlina" },
      { value: "XOF", label: "XOF — Franco CFA" }
    ],
    placeholders: {
      title: "Ej: Lanzamiento de proyecto solar, estación de servicio…",
      context: "Describa la situación actual, partes interesadas, entorno…",
      objectives: "¿Qué resultados concretos busca?",
      constraints: "Restricciones, riesgos, límites de presupuesto, plazos…",
      deadline: "Ej: 3 meses, Q1 2026, antes de fin de 2025…"
    }
  },

  ar: {
    ui: {
      lang_flag: "🇸🇦",
      lang_code: "AR",
      form_title: "طلب قرار عبر e-META",
      full_name: "الاسم الكامل",
      email: "البريد الإلكتروني (اختياري)",
      whatsapp: "واتساب (اختياري)",
      domain: "المجال / الموضوع",
      title: "عنوان مختصر للقرار",
      context: "السياق بالتفصيل",
      objectives: "الأهداف المطلوبة",
      constraints: "القيود (اختياري)",
      budget_amount: "الميزانية (المبلغ)",
      budget_currency: "العملة",
      deadline: "الموعد المطلوب",
      urgency: "درجة الاستعجال (1–5)",
      output: "قناة الإرسال",
      output_auto: "تلقائي",
      output_email: "بريد إلكتروني",
      output_whatsapp: "واتساب",
      output_display: "عرض مباشر على الشاشة",
      attachment: "رابط الملف (اختياري)",
      consent_main:
        "أوافق على أن يقوم e-META بتحليل بياناتي لتقديم إجابة مخصصة.",
      privacy_link: "عرض سياسة الخصوصية"
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
      "التعليم و التكوين",
      "الحوكمة و الاستراتيجية",
      "المشاريع العامة / الجمعيات",
      "أخرى"
    ],
    currencies: [
      { value: "XOF", label: "XOF — فرنك إفريقي" },
      { value: "USD", label: "USD — دولار أمريكي" },
      { value: "EUR", label: "EUR — يورو" },
      { value: "GBP", label: "GBP — جنيه إسترليني" }
    ],
    placeholders: {
      title: "مثال: إطلاق مشروع طاقة شمسية، فتح محطة وقود…",
      context: "اشرح الوضع الحالي، الأطراف المعنية، والبيئة…",
      objectives: "ما هي النتائج التي تريد تحقيقها؟",
      constraints: "القيود، المخاطر، حدود الميزانية و الآجال…",
      deadline: "مثال: 3 أشهر، 2026، قبل نهاية 2025…"
    }
  }
};

let currentLang = "fr";

/* -------- Helpers I18N -------- */

function setText(key, value) {
  document
    .querySelectorAll(`[data-i18n="${key}"]`)
    .forEach(el => (el.textContent = value));
}

function applyLanguage(lang) {
  const cfg = LANG_CONFIG[lang] || LANG_CONFIG.fr;
  currentLang = lang;

  // direction (RTL pour arabe)
  document.documentElement.lang = lang === "ar" ? "ar" : lang;
  document.body.classList.toggle("rtl", lang === "ar");

  // input caché pour Make
  const langInput = document.getElementById("language");
  if (langInput) langInput.value = lang;

  // textes UI
  const ui = cfg.ui;
  setText("form_title", ui.form_title);
  setText("label_full_name", ui.full_name);
  setText("label_email", ui.email);
  setText("label_whatsapp", ui.whatsapp);
  setText("label_domain", ui.domain);
  setText("label_title", ui.title);
  setText("label_context", ui.context);
  setText("label_objectives", ui.objectives);
  setText("label_constraints", ui.constraints);
  setText("label_budget_amount", ui.budget_amount);
  setText("label_budget_currency", ui.budget_currency);
  setText("label_deadline", ui.deadline);
  setText("label_urgency", ui.urgency);
  setText("label_output", ui.output);
  setText("output_auto", ui.output_auto);
  setText("output_email", ui.output_email);
  setText("output_whatsapp", ui.output_whatsapp);
  setText("output_display", ui.output_display);
  setText("label_attachment", ui.attachment);
  setText("label_consent_main", ui.consent_main);
  setText("label_privacy_link", ui.privacy_link);

  // drapeau + code dans le header
  const langFlag = document.getElementById("langFlag");
  const langCode = document.getElementById("langCode");
  if (langFlag) langFlag.textContent = ui.lang_flag;
  if (langCode) langCode.textContent = ui.lang_code;

  // domaines
  const domainSelect = document.getElementById("domain");
  if (domainSelect) {
    domainSelect.innerHTML = "";
    cfg.domains.forEach(d => {
      const opt = document.createElement("option");
      opt.value = d;
      opt.textContent = d;
      domainSelect.appendChild(opt);
    });
  }

  // devises
  const currencySelect = document.getElementById("budget_currency");
  if (currencySelect) {
    currencySelect.innerHTML = "";
    cfg.currencies.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c.value;
      opt.textContent = c.label;
      currencySelect.appendChild(opt);
    });
  }

  // placeholders
  const p = cfg.placeholders;
  const titleInput = document.getElementById("decision_title");
  const contextInput = document.getElementById("context");
  const objInput = document.getElementById("objectives");
  const consInput = document.getElementById("constraints");
  const deadlineInput = document.getElementById("deadline");
  if (titleInput) titleInput.placeholder = p.title;
  if (contextInput) contextInput.placeholder = p.context;
  if (objInput) objInput.placeholder = p.objectives;
  if (consInput) consInput.placeholder = p.constraints;
  if (deadlineInput) deadlineInput.placeholder = p.deadline;
}

/* -------- Envoi Webhook Make -------- */

function sendToMake(payload) {
  fetch(MAKE_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).catch(err => console.error("Erreur webhook:", err));
}

/* -------- DOM Ready -------- */

document.addEventListener("DOMContentLoaded", () => {
  // burger (mobile)
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
      if (window.innerWidth > 720) {
        burgerBtn.classList.remove("active");
        mainNav.classList.remove("open");
      }
    });
  }

  // Sélecteur de langue du header
  const langToggle = document.getElementById("langToggle");
  const langMenu = document.getElementById("langMenu");
  if (langToggle && langMenu) {
    langToggle.addEventListener("click", e => {
      e.stopPropagation();
      langMenu.classList.toggle("show");
    });
    langMenu.querySelectorAll("li").forEach(item => {
      item.addEventListener("click", () => {
        const lang = item.dataset.lang || "fr";
        applyLanguage(lang);
        langMenu.classList.remove("show");
      });
    });
    document.addEventListener("click", e => {
      if (!langMenu.contains(e.target) && e.target !== langToggle) {
        langMenu.classList.remove("show");
      }
    });
  }

  // Boutons formulaire
  const sendBtn = document.getElementById("sendBtn");
  const resetBtn = document.getElementById("resetBtn");

  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      const consent = document.getElementById("consent");
      if (!consent || !consent.checked) {
        alert("Veuillez cocher la case de consentement.");
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
        budget_currency: document.getElementById("budget_currency").value || "",
        deadline: document.getElementById("deadline").value || "",
        urgency: document.getElementById("urgency").value || "",
        output_preference:
          document.querySelector("input[name='output_preference']:checked")
            ?.value || "auto",
        attachment_url: document.getElementById("attachment_url").value || "",
        consent: true
      };

      sendToMake(payload);
      alert("Votre requête a été envoyée à e-META. Vous recevrez une synthèse personnalisée.");
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const form = document.getElementById("emetaForm");
      if (form) form.reset();
      applyLanguage(currentLang || "fr");
    });
  }

  // Langue par défaut
  applyLanguage("fr");
});
