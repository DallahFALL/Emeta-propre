/* ==========================================================
   e-META – Traduction dynamique multilingue v3.0
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const langSelect = document.getElementById("langSelect");
  const domainSelect = document.getElementById("domain");
  const currencySelect = document.getElementById("currency");

  // 🔍 Détection automatique de la langue du navigateur
  const browserLang = (navigator.language || navigator.userLanguage || "fr").slice(0, 2);
  const savedLang = localStorage.getItem("selectedLang");
  const defaultLang = savedLang || (["fr", "en", "es", "ar"].includes(browserLang) ? browserLang : "fr");
  langSelect.value = defaultLang;

  // Application initiale
  applyTranslations(defaultLang);

  // Changement manuel de langue
  langSelect.addEventListener("change", (e) => {
    const newLang = e.target.value;
    localStorage.setItem("selectedLang", newLang);
    applyTranslations(newLang);
  });

  // Fonction principale de traduction
  function applyTranslations(lang) {
    const t = translations[lang] || translations.fr;

    // Changement direction texte (RTL si arabe)
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    // Traduction des textes (balises avec data-i18n)
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });

    // Traduction des placeholders (input / textarea)
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (t[key]) el.placeholder = t[key];
    });

    // Traduction des options de la liste Domaine
    domainSelect.querySelectorAll("option").forEach(opt => {
      const key = opt.getAttribute("data-i18n-option");
      if (t[key]) opt.textContent = t[key];
    });

    // Traduction des options de la liste Devise
    currencySelect.querySelectorAll("option").forEach(opt => {
      const key = opt.getAttribute("data-i18n-option");
      if (t[key]) opt.textContent = t[key];
    });
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

    // Titre et sous-titre
    hero_title: "e-META — L’assistant IA pluridisciplinaire",
    hero_lead: "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",

    // Formulaire
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

    // Informations
    about_text: "e-META structure les demandes et produit une synthèse stratégique adaptée au contexte.",
    faq_q1: "Comment fonctionne e-META ?",
    faq_a1: "Remplissez la requête ; e-META génère un diagnostic, trois options stratégiques et une recommandation priorisée.",
    footer_tagline: "Simplement. Intelligemment.",

    // Placeholders
    ph_expected: "Ex : Dossier de financement, plan stratégique, prototype…",
    ph_budget: "Montant estimé",
    ph_name: "Votre nom complet",
    ph_email: "exemple@mail.com",
    ph_phone: "+221...",
    ph_details: "Décrivez le contexte, contraintes ou priorités…",

    // Domaines
    choose: "— Choisir —",
    domain_agriculture: "Agriculture",
    domain_environment: "Environnement & Climat",
    domain_energy: "Énergie & Solaire",
    domain_commerce: "Commerce & Distribution",
    domain_digital: "E-commerce & Digital",
    domain_finance: "Finance & Comptabilité",
    domain_fintech: "FinTech / Mobile Money",
    domain_funding: "Financement & Partenariat",
    domain_marketing: "Marketing & Communication",
    domain_technology: "Technologie & Innovation",
    domain_education: "Éducation & Formation",
    domain_health: "Santé & Bien-être",
    domain_transport: "Transport & Logistique",
    domain_realestate: "Immobilier & Construction",
    domain_law: "Juridique & Conformité",
    domain_industry: "Industrie & Production",

    // Devises
    usd: "USD — Dollar américain",
    eur: "EUR — Euro",
    gbp: "GBP — Livre sterling",
    xof: "XOF — Franc CFA",
    xaf: "XAF — Franc CFA BEAC"
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
    about_text: "e-META structures requests and produces actionable strategic syntheses.",
    faq_q1: "How does e-META work?",
    faq_a1: "Fill in the form; e-META generates a diagnosis, three strategic options and a prioritized recommendation.",
    footer_tagline: "Simply. Intelligently.",

    ph_expected: "Ex: Funding file, strategic plan, prototype...",
    ph_budget: "Estimated amount",
    ph_name: "Your full name",
    ph_email: "example@mail.com",
    ph_phone: "+1...",
    ph_details: "Describe the context, constraints or priorities...",

    choose: "— Choose —",
    domain_agriculture: "Agriculture",
    domain_environment: "Environment & Climate",
    domain_energy: "Energy & Solar",
    domain_commerce: "Trade & Distribution",
    domain_digital: "E-commerce & Digital",
    domain_finance: "Finance & Accounting",
    domain_fintech: "FinTech / Mobile Money",
    domain_funding: "Funding & Partnership",
    domain_marketing: "Marketing & Communication",
    domain_technology: "Technology & Innovation",
    domain_education: "Education & Training",
    domain_health: "Health & Wellness",
    domain_transport: "Transport & Logistics",
    domain_realestate: "Real Estate & Construction",
    domain_law: "Legal & Compliance",
    domain_industry: "Industry & Production",

    usd: "USD — US Dollar",
    eur: "EUR — Euro",
    gbp: "GBP — Pound sterling",
    xof: "XOF — West African CFA franc",
    xaf: "XAF — Central African CFA franc"
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
    about_text: "e-META organiza las solicitudes y produce análisis estratégicos adaptados.",
    faq_q1: "¿Cómo funciona e-META?",
    faq_a1: "Complete el formulario; e-META genera un diagnóstico, tres opciones estratégicas y una recomendación prioritaria.",
    footer_tagline: "Simple. Inteligente.",

    ph_expected: "Ej: archivo de financiación, plan estratégico, prototipo...",
    ph_budget: "Monto estimado",
    ph_name: "Tu nombre completo",
    ph_email: "ejemplo@mail.com",
    ph_phone: "+34...",
    ph_details: "Describe el contexto, limitaciones o expectativas...",

    choose: "— Elegir —",
    domain_agriculture: "Agricultura",
    domain_environment: "Medio ambiente y clima",
    domain_energy: "Energía y solar",
    domain_commerce: "Comercio y distribución",
    domain_digital: "Comercio electrónico y digital",
    domain_finance: "Finanzas y contabilidad",
    domain_fintech: "FinTech / Dinero móvil",
    domain_funding: "Financiación y asociación",
    domain_marketing: "Marketing y comunicación",
    domain_technology: "Tecnología e innovación",
    domain_education: "Educación y formación",
    domain_health: "Salud y bienestar",
    domain_transport: "Transporte y logística",
    domain_realestate: "Bienes raíces y construcción",
    domain_law: "Legal y cumplimiento",
    domain_industry: "Industria y producción",

    usd: "USD — Dólar estadounidense",
    eur: "EUR — Euro",
    gbp: "GBP — Libra esterlina",
    xof: "XOF — Franco CFA",
    xaf: "XAF — Franco CFA BEAC"
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
    about_text: "تنظم إي-ميتا الطلبات وتنتج تحليلات استراتيجية مخصصة.",
    faq_q1: "كيف تعمل إي-ميتا؟",
    faq_a1: "املأ الطلب؛ تقوم إي-ميتا بإنشاء تشخيص، وثلاثة خيارات استراتيجية، وتوصية ذات أولوية.",
    footer_tagline: "ببساطة. بذكاء.",

    ph_expected: "مثلاً: ملف تمويل، خطة استراتيجية، نموذج أولي...",
    ph_budget: "المبلغ المقدر",
    ph_name: "اسمك الكامل",
    ph_email: "example@mail.com",
    ph_phone: "+966...",
    ph_details: "اشرح السياق أو القيود أو التوقعات...",

    choose: "— اختر —",
    domain_agriculture: "الزراعة",
    domain_environment: "البيئة والمناخ",
    domain_energy: "الطاقة والطاقة الشمسية",
    domain_commerce: "التجارة والتوزيع",
    domain_digital: "التجارة الإلكترونية والرقمية",
    domain_finance: "المالية والمحاسبة",
    domain_fintech: "التكنولوجيا المالية / الأموال المتنقلة",
    domain_funding: "التمويل والشراكة",
    domain_marketing: "التسويق والاتصال",
    domain_technology: "التكنولوجيا والابتكار",
    domain_education: "التعليم والتدريب",
    domain_health: "الصحة والرفاهية",
    domain_transport: "النقل واللوجستيات",
    domain_realestate: "العقارات والبناء",
    domain_law: "القانون والامتثال",
    domain_industry: "الصناعة والإنتاج",

    usd: "دولار أمريكي — USD",
    eur: "يورو — EUR",
    gbp: "جنيه إسترليني — GBP",
    xof: "فرنك غرب أفريقي — XOF",
    xaf: "فرنك وسط أفريقي — XAF"
  }
};
