/* ==========================================================
   e-META – Traduction dynamique multilingue v2.8
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSelect");
  const html = document.documentElement;

  // --- Détection automatique de la langue du navigateur ---
  const userLang = (navigator.language || navigator.userLanguage || "fr").slice(0, 2);
  const savedLang = localStorage.getItem("selectedLang");
  const defaultLang = savedLang || (["fr", "en", "es", "ar"].includes(userLang) ? userLang : "fr");

  langSelect.value = defaultLang;
  applyTranslations(defaultLang);

  // --- Sur changement manuel ---
  langSelect.addEventListener("change", (e) => {
    const selected = e.target.value;
    localStorage.setItem("selectedLang", selected);
    applyTranslations(selected);
  });

  // --- Fonction principale de traduction ---
  function applyTranslations(lang) {
    const t = translations[lang] || translations.fr;

    // Direction pour l'arabe
    if (lang === "ar") {
      html.setAttribute("dir", "rtl");
      html.setAttribute("lang", "ar");
    } else {
      html.setAttribute("dir", "ltr");
      html.setAttribute("lang", lang);
    }

    // Application des textes traduits
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });

    // Application des placeholders
    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key && t[key]) el.placeholder = t[key];
    });
  }
});

/* ==========================================================
   Dictionnaire de traductions multilingues
   ========================================================== */

const translations = {
  fr: {
    brand: "e-META",
    home: "Accueil",
    about: "À propos",
    faq: "FAQ",
    contact: "Contact",
    whatsapp: "WhatsApp",
    hero_title: "e-META — L’assistant IA pluridisciplinaire",
    hero_lead: "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",
    form_title: "Requête personnalisée",
    label_domain: "Domaine / Thème",
    label_expected: "Résultat attendu",
    label_budget: "Budget indicatif",
    label_currency: "Devise",
    label_name: "Nom complet",
    label_phone: "Téléphone (WhatsApp)",
    label_email: "Email",
    label_details: "Détails / Contexte",
    btn_send: "Envoyer la requête",
    btn_reset: "Réinitialiser",
    about_text: "e-META structure les demandes et produit une synthèse stratégique adaptée au contexte.",
    faq_q1: "Comment fonctionne e-META ?",
    faq_a1: "Remplissez la requête ; e-META génère un diagnostic, 3 options stratégiques et une recommandation priorisée.",
    footer_tagline: "© 2025 e-META • Simplement. Intelligemment.",
    // Bloc Mode de restitution
    label_mode: "Mode de restitution",
    mode_whatsapp: "WhatsApp",
    mode_email: "Email",
    mode_display: "Affichage direct"
  },

  en: {
    brand: "e-META",
    home: "Home",
    about: "About",
    faq: "FAQ",
    contact: "Contact",
    whatsapp: "WhatsApp",
    hero_title: "e-META — The Multidisciplinary AI Assistant",
    hero_lead: "Smart form to analyze, diagnose, and recommend tailored solutions.",
    form_title: "Custom Request",
    label_domain: "Domain / Topic",
    label_expected: "Expected result",
    label_budget: "Indicative budget",
    label_currency: "Currency",
    label_name: "Full name",
    label_phone: "Phone (WhatsApp)",
    label_email: "Email",
    label_details: "Details / Context",
    btn_send: "Send request",
    btn_reset: "Reset",
    about_text: "e-META structures your requests and produces clear, actionable syntheses.",
    faq_q1: "How does e-META work?",
    faq_a1: "Fill in the request; e-META generates a diagnosis, 3 strategic options, and a prioritized recommendation.",
    footer_tagline: "© 2025 e-META • Simply. Intelligently.",
    label_mode: "Delivery mode",
    mode_whatsapp: "WhatsApp",
    mode_email: "Email",
    mode_display: "On-screen display"
  },

  es: {
    brand: "e-META",
    home: "Inicio",
    about: "Acerca de",
    faq: "FAQ",
    contact: "Contacto",
    whatsapp: "WhatsApp",
    hero_title: "e-META — El asistente de IA multidisciplinario",
    hero_lead: "Formulario inteligente para analizar, diagnosticar y recomendar soluciones adaptadas.",
    form_title: "Solicitud personalizada",
    label_domain: "Dominio / Tema",
    label_expected: "Resultado esperado",
    label_budget: "Presupuesto indicativo",
    label_currency: "Moneda",
    label_name: "Nombre completo",
    label_phone: "Teléfono (WhatsApp)",
    label_email: "Correo",
    label_details: "Detalles / Contexto",
    btn_send: "Enviar solicitud",
    btn_reset: "Restablecer",
    about_text: "e-META estructura las solicitudes y produce un análisis estratégico adaptado al contexto.",
    faq_q1: "¿Cómo funciona e-META?",
    faq_a1: "Complete la solicitud; e-META genera un diagnóstico, 3 opciones estratégicas y una recomendación prioritaria.",
    footer_tagline: "© 2025 e-META • Simplemente. Inteligentemente.",
    label_mode: "Modo de entrega",
    mode_whatsapp: "WhatsApp",
    mode_email: "Correo",
    mode_display: "Visualización directa"
  },

  ar: {
    brand: "إي-ميتا",
    home: "الرئيسية",
    about: "حول",
    faq: "الأسئلة الشائعة",
    contact: "اتصال",
    whatsapp: "واتساب",
    hero_title: "إي-ميتا — المساعد الذكي المتعدد التخصصات",
    hero_lead: "نموذج ذكي لتحليل وتشخيص وتوصية حلول مخصصة.",
    form_title: "طلب مخصص",
    label_domain: "المجال / الموضوع",
    label_expected: "النتيجة المتوقعة",
    label_budget: "الميزانية التقديرية",
    label_currency: "العملة",
    label_name: "الاسم الكامل",
    label_phone: "الهاتف (واتساب)",
    label_email: "البريد الإلكتروني",
    label_details: "التفاصيل / السياق",
    btn_send: "إرسال الطلب",
    btn_reset: "إعادة الضبط",
    about_text: "تنظم إي-ميتا الطلبات وتنتج ملخصات استراتيجية واضحة وقابلة للتنفيذ.",
    faq_q1: "كيف تعمل إي-ميتا؟",
    faq_a1: "املأ الطلب؛ تقوم إي-ميتا بإنشاء تشخيص، وثلاثة خيارات استراتيجية، وتوصية ذات أولوية.",
    footer_tagline: "© 2025 إي-ميتا • ببساطة. بذكاء.",
    label_mode: "طريقة الإرسال",
    mode_whatsapp: "واتساب",
    mode_email: "البريد الإلكتروني",
    mode_display: "العرض المباشر"
  }
};
