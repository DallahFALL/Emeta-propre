/* ==========================================================
   e-META – Traduction dynamique multilingue v2.9
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSelect");
  const html = document.documentElement;

  // Détection automatique de la langue du navigateur
  const userLang = (navigator.language || navigator.userLanguage || "fr").slice(0, 2);
  const savedLang = localStorage.getItem("selectedLang");
  const defaultLang = savedLang || (["fr", "en", "es", "ar"].includes(userLang) ? userLang : "fr");

  langSelect.value = defaultLang;
  applyTranslations(defaultLang);

  // Sur changement manuel
  langSelect.addEventListener("change", (e) => {
    const selected = e.target.value;
    localStorage.setItem("selectedLang", selected);
    applyTranslations(selected);
  });

  // Fonction principale de traduction
  function applyTranslations(lang) {
    const t = translations[lang] || translations.fr;

    // Direction RTL pour l’arabe
    if (lang === "ar") {
      html.setAttribute("dir", "rtl");
      html.setAttribute("lang", "ar");
      document.body.classList.add("rtl");
    } else {
      html.setAttribute("dir", "ltr");
      html.setAttribute("lang", lang);
      document.body.classList.remove("rtl");
    }

    // Traduction du texte
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });

    // Traduction des placeholders
    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key && t[key]) el.placeholder = t[key];
    });

    // Traduction des options du menu déroulant Domaine
    const domainSelect = document.getElementById("domain");
    if (domainSelect) {
      domainSelect.querySelectorAll("option").forEach((opt) => {
        const key = opt.getAttribute("data-i18n-option");
        if (key && t[key]) opt.textContent = t[key];
      });
    }

    // Traduction du sélecteur de devise
    const currencySelect = document.getElementById("currency");
    if (currencySelect) {
      currencySelect.querySelectorAll("option").forEach((opt) => {
        const key = opt.getAttribute("data-i18n-option");
        if (key && t[key]) opt.textContent = t[key];
      });
    }
  }
});

/* ==========================================================
   Dictionnaire multilingue complet
   ========================================================== */

const translations = {
  fr: {
    // Navigation
    home: "Accueil",
    about: "À propos",
    faq: "FAQ",
    contact: "Contact",
    whatsapp: "WhatsApp",
    brand: "e-META",

    // Contenu principal
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
    label_mode: "Mode de restitution",
    mode_whatsapp: "WhatsApp",
    mode_email: "Email",
    mode_display: "Affichage direct",
    btn_send: "Envoyer la requête",
    btn_reset: "Réinitialiser",
    about_text: "e-META structure les demandes et produit une synthèse stratégique adaptée au contexte.",
    faq_q1: "Comment fonctionne e-META ?",
    faq_a1: "Remplissez la requête ; e-META génère un diagnostic, trois options stratégiques et une recommandation priorisée.",
    footer_tagline: "© 2025 e-META • Simplement. Intelligemment.",

    // Placeholders
    ph_expected: "Ex : Dossier de financement, plan stratégique, prototype…",
    ph_budget: "Montant estimé",
    ph_name: "Votre nom complet",
    ph_email: "exemple@mail.com",
    ph_phone: "+221...",
    ph_details: "Décrivez le contexte, contraintes ou priorités…"
  },

  en: {
    home: "Home",
    about: "About",
    faq: "FAQ",
    contact: "Contact",
    whatsapp: "WhatsApp",
    brand: "e-META",

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
    label_mode: "Delivery mode",
    mode_whatsapp: "WhatsApp",
    mode_email: "Email",
    mode_display: "On-screen display",
    btn_send: "Send request",
    btn_reset: "Reset",
    about_text: "e-META structures your requests and provides a clear, strategic synthesis adapted to your context.",
    faq_q1: "How does e-META work?",
    faq_a1: "Fill in the request; e-META generates a diagnosis, three strategic options and a prioritized recommendation.",
    footer_tagline: "© 2025 e-META • Simply. Intelligently.",

    ph_expected: "Ex: Funding file, strategic plan, prototype...",
    ph_budget: "Estimated amount",
    ph_name: "Your full name",
    ph_email: "example@mail.com",
    ph_phone: "+221...",
    ph_details: "Describe the context, constraints or expectations..."
  },

  es: {
    home: "Inicio",
    about: "Acerca de",
    faq: "FAQ",
    contact: "Contacto",
    whatsapp: "WhatsApp",
    brand: "e-META",

    hero_title: "e-META — El asistente de IA multidisciplinario",
    hero_lead: "Formulario inteligente para analizar, diagnosticar y recomendar soluciones adaptadas.",
    form_title: "Solicitud personalizada",
    label_domain: "Dominio / Tema",
    label_expected: "Resultado esperado",
    label_budget: "Presupuesto indicativo",
    label_currency: "Moneda",
    label_name: "Nombre completo",
    label_phone: "Teléfono (WhatsApp)",
    label_email: "Correo electrónico",
    label_details: "Detalles / Contexto",
    label_mode: "Modo de entrega",
    mode_whatsapp: "WhatsApp",
    mode_email: "Correo",
    mode_display: "Visualización directa",
    btn_send: "Enviar solicitud",
    btn_reset: "Restablecer",
    about_text: "e-META estructura las solicitudes y produce un análisis estratégico adaptado al contexto.",
    faq_q1: "¿Cómo funciona e-META?",
    faq_a1: "Complete la solicitud; e-META genera un diagnóstico, tres opciones estratégicas y una recomendación prioritaria.",
    footer_tagline: "© 2025 e-META • Simplemente. Inteligentemente.",

    ph_expected: "Ej: archivo de financiación, plan estratégico, prototipo...",
    ph_budget: "Monto estimado",
    ph_name: "Su nombre completo",
    ph_email: "ejemplo@mail.com",
    ph_phone: "+221...",
    ph_details: "Describa el contexto, limitaciones o expectativas..."
  },

  ar: {
    home: "الرئيسية",
    about: "حول",
    faq: "الأسئلة الشائعة",
    contact: "اتصال",
    whatsapp: "واتساب",
    brand: "إي-ميتا",

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
    label_mode: "طريقة الإرسال",
    mode_whatsapp: "واتساب",
    mode_email: "البريد الإلكتروني",
    mode_display: "العرض المباشر",
    btn_send: "إرسال الطلب",
    btn_reset: "إعادة الضبط",
    about_text: "تنظم إي-ميتا الطلبات وتنتج ملخصات استراتيجية واضحة وقابلة للتنفيذ.",
    faq_q1: "كيف تعمل إي-ميتا؟",
    faq_a1: "املأ الطلب؛ تقوم إي-ميتا بإنشاء تشخيص، وثلاثة خيارات استراتيجية، وتوصية ذات أولوية.",
    footer_tagline: "© 2025 إي-ميتا • ببساطة. بذكاء.",

    ph_expected: "مثلاً: ملف تمويل، خطة استراتيجية، نموذج أولي...",
    ph_budget: "المبلغ المقدر",
    ph_name: "اسمك الكامل",
    ph_email: "example@mail.com",
    ph_phone: "+221...",
    ph_details: "اشرح السياق أو القيود أو التوقعات..."
  }
};
