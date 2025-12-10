/* ============================================================
   e-META SCRIPT.JS — STYLE A
   Fonctionnalités :
   - Menu burger responsive
   - Bouton WhatsApp actif
   - Sélecteur de langue (FR / EN / ES / AR)
   - Mode RTL automatique
   - Traduction dynamique (textes + placeholders)
   - Champs du formulaire mis à jour selon langue
   ============================================================ */

/* ---------- ELEMENTS DOM ---------- */
const burger = document.getElementById("burgerBtn");
const mainNav = document.getElementById("mainNav");
const langToggle = document.getElementById("langToggle");
const langMenu = document.getElementById("langMenu");
const langFlag = document.getElementById("langFlag");
const langCode = document.getElementById("langCode");

const whatsappBtn = document.getElementById("whatsappBtn");
const resetBtn = document.getElementById("resetBtn");
const sendBtn = document.getElementById("sendBtn");

const themeSelect = document.getElementById("themeSelect");
const currencySelect = document.getElementById("currencySelect");

/* ============================================================
   BURGER MENU
============================================================ */
if (burger) {
  burger.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

/* ============================================================
   WHATSApp BUTTON (direct chat)
============================================================ */
if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    window.open("https://wa.me/221782607212", "_blank");
  });
}

/* ============================================================
   LANG MENU TOGGLE
============================================================ */
if (langToggle) {
  langToggle.addEventListener("click", () => {
    langMenu.classList.toggle("open");
  });
}

document.addEventListener("click", (e) => {
  if (!langToggle.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.classList.remove("open");
  }
});

/* ============================================================
   TRANSLATION SYSTEM
============================================================ */

const translations = {
  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_privacy: "Politique de confidentialité",

    hero_title: "e-META — L’assistant IA pluridisciplinaire",
    hero_sub: "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",

    form_title: "Requête personnalisée",

    label_theme: "Domaine / Thème",
    label_expected: "Résultat attendu",
    label_budget: "Budget indicatif",
    label_currency: "Devise",
    label_fullname: "Nom complet",
    label_phone: "Téléphone (WhatsApp)",
    label_email: "Email",
    label_details: "Détails / Contexte",

    legend_delivery: "Mode de restitution",
    delivery_whatsapp: "WhatsApp",
    delivery_email: "Email",
    delivery_display: "Affichage direct",

    btn_reset: "Réinitialiser",
    btn_send: "Envoyer la requête",

    about_title: "À propos",
    about_body: "e-META structure les demandes et produit une synthèse stratégique adaptée au contexte.",

    faq_title: "FAQ",
    faq_q1: "Comment fonctionne e-META ?",
    faq_a1: "Remplissez le formulaire et recevez une analyse intelligente via le mode de restitution choisi.",

    contact_title: "Contact",
    contact_emailLabel: "Email :",

    footer: "© 2025 e-META • Simplement. Intelligemment."
  },

  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_privacy: "Privacy Policy",

    hero_title: "e-META — The Multidisciplinary AI Assistant",
    hero_sub: "A smart form to analyze, diagnose and recommend appropriate solutions.",

    form_title: "Custom Request",

    label_theme: "Domain / Topic",
    label_expected: "Expected Result",
    label_budget: "Estimated Budget",
    label_currency: "Currency",
    label_fullname: "Full Name",
    label_phone: "Phone (WhatsApp)",
    label_email: "Email",
    label_details: "Details / Context",

    legend_delivery: "Delivery Method",
    delivery_whatsapp: "WhatsApp",
    delivery_email: "Email",
    delivery_display: "Direct Display",

    btn_reset: "Reset",
    btn_send: "Submit Request",

    about_title: "About",
    about_body: "e-META structures requests and produces a strategic synthesis adapted to the context.",

    faq_title: "FAQ",
    faq_q1: "How does e-META work?",
    faq_a1: "Fill out the form and receive an intelligent analysis based on your selected delivery mode.",

    contact_title: "Contact",
    contact_emailLabel: "Email :",

    footer: "© 2025 e-META • Simply. Smartly."
  },

  es: {
    nav_home: "Inicio",
    nav_about: "Acerca de",
    nav_faq: "Preguntas frecuentes",
    nav_contact: "Contacto",
    nav_privacy: "Política de privacidad",

    hero_title: "e-META — El asistente IA multidisciplinario",
    hero_sub: "Formulario inteligente para analizar, diagnosticar y recomendar soluciones adecuadas.",

    form_title: "Solicitud personalizada",

    label_theme: "Dominio / Tema",
    label_expected: "Resultado esperado",
    label_budget: "Presupuesto estimado",
    label_currency: "Moneda",
    label_fullname: "Nombre completo",
    label_phone: "Teléfono (WhatsApp)",
    label_email: "Correo electrónico",
    label_details: "Detalles / Contexto",

    legend_delivery: "Modo de entrega",
    delivery_whatsapp: "WhatsApp",
    delivery_email: "Correo electrónico",
    delivery_display: "Visualización directa",

    btn_reset: "Restablecer",
    btn_send: "Enviar solicitud",

    about_title: "Acerca de",
    about_body: "e-META estructura las solicitudes y produce un análisis estratégico adaptado al contexto.",

    faq_title: "FAQ",
    faq_q1: "¿Cómo funciona e-META?",
    faq_a1: "Complete el formulario y reciba un análisis inteligente según el modo seleccionado.",

    contact_title: "Contacto",
    contact_emailLabel: "Correo :",

    footer: "© 2025 e-META • Simple. Inteligente."
  },

  ar: {
    nav_home: "الرئيسية",
    nav_about: "حول",
    nav_faq: "الأسئلة الشائعة",
    nav_contact: "اتصال",
    nav_privacy: "سياسة الخصوصية",

    hero_title: "e-META — المساعد الذكي متعدد التخصصات",
    hero_sub: "نموذج ذكي لتحليل طلبك وتشخيصه واقتراح حلول مناسبة حسب السياق.",

    form_title: "طلب مخصص",

    label_theme: "المجال / الموضوع",
    label_expected: "النتيجة المتوقعة",
    label_budget: "الميزانية التقديرية",
    label_currency: "العملـة",
    label_fullname: "الاسم الكامل",
    label_phone: "هاتف (واتساب)",
    label_email: "البريد الإلكتروني",
    label_details: "التفاصيل / السياق",

    legend_delivery: "طريقة الإرسال",
    delivery_whatsapp: "واتساب",
    delivery_email: "البريد الإلكتروني",
    delivery_display: "عرض مباشر",

    btn_reset: "إعادة التعيين",
    btn_send: "إرسال الطلب",

    about_title: "حول",
    about_body: "يقوم e-META بهيكلة الطلبات وإنتاج ملخص استراتيجي مناسب للسياق.",

    faq_title: "الأسئلة الشائعة",
    faq_q1: "كيف يعمل e-META؟",
    faq_a1: "املأ النموذج وتلقَّ تحليلًا ذكيًا حسب طريقة الإرسال المختارة.",

    contact_title: "اتصال",
    contact_emailLabel: "البريد :",

    footer: "© 2025 e-META • ببساطة. بذكاء."
  }
};

/* ============================================================
   APPLY TRANSLATION
============================================================ */
function applyLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  /* Placeholder updates */
  if (lang === "ar") document.body.classList.add("rtl");
  else document.body.classList.remove("rtl");

  langFlag.textContent = lang === "ar" ? "🇸🇦" :
                         lang === "es" ? "🇪🇸" :
                         lang === "en" ? "🇬🇧" : "🇫🇷";

  langCode.textContent = lang.toUpperCase();
}

/* CLICK ON LANGUAGE */
document.querySelectorAll("#langMenu li").forEach(li => {
  li.addEventListener("click", () => {
    const lang = li.getAttribute("data-lang");
    langMenu.classList.remove("open");
    applyLanguage(lang);
  });
});

/* Default */
applyLanguage("fr");

/* ============================================================
   POPULATE DOMAIN + CURRENCY LISTS
============================================================ */
const domains = [
  "Agriculture",
  "Business",
  "Finance",
  "Éducation",
  "Informatique",
  "Santé",
  "Trading",
  "Marketing",
  "Immobilier",
  "Transport",
  "Énergie",
  "Sécurité",
  "Tourisme",
  "Analyse stratégique",
  "Projet industriel",
  "Étude de faisabilité"
];

domains.forEach(d => {
  const op = document.createElement("option");
  op.textContent = d;
  themeSelect.appendChild(op);
});

const currencies = ["XOF", "USD", "EUR", "GBP", "AED", "CNY"];

currencies.forEach(c => {
  const op = document.createElement("option");
  op.textContent = c;
  currencySelect.appendChild(op);
});
