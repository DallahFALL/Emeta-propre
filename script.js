document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSelect");
  const domainSelect = document.getElementById("domain");
  const html = document.documentElement;

  const userLang = (navigator.language || "fr").slice(0, 2);
  const savedLang = localStorage.getItem("lang") || userLang;
  const lang = ["fr", "en", "es", "ar"].includes(savedLang) ? savedLang : "fr";
  langSelect.value = lang;
  applyTranslations(lang);

  langSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    localStorage.setItem("lang", lang);
    applyTranslations(lang);
  });

  function applyTranslations(lang) {
    const t = translations[lang];
    html.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });

    // --- Traduction des domaines dynamiques ---
    domainSelect.innerHTML = "";
    t.domains.forEach(opt => {
      const option = document.createElement("option");
      option.textContent = opt;
      domainSelect.appendChild(option);
    });
  }
});

const translations = {
  fr: {
    brand: "e-META", hero_title: "e-META — L’assistant IA pluridisciplinaire",
    hero_lead: "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",
    form_title: "Requête personnalisée",
    label_domain: "Domaine / Thème", label_expected: "Résultat attendu",
    label_budget: "Budget indicatif", label_currency: "Devise",
    label_name: "Nom complet", label_phone: "Téléphone (WhatsApp)",
    label_email: "Email", label_details: "Détails / Contexte",
    label_mode: "Mode de restitution", mode_whatsapp: "WhatsApp",
    mode_email: "Email", mode_display: "Affichage direct",
    btn_send: "Envoyer la requête", btn_reset: "Réinitialiser",
    footer_tagline: "© 2025 e-META • Simplement. Intelligemment.",
    domains: ["— Choisir —","Agriculture","Environnement","Énergie","Commerce","E-commerce","Finance","FinTech","Marketing","Technologie","Éducation","Santé","Transport","Immobilier","Juridique","Industrie"]
  },
  en: {
    brand: "e-META", hero_title: "e-META — The Multidisciplinary AI Assistant",
    hero_lead: "Smart form to analyze, diagnose, and recommend tailored solutions.",
    form_title: "Custom Request",
    label_domain: "Domain / Topic", label_expected: "Expected result",
    label_budget: "Indicative budget", label_currency: "Currency",
    label_name: "Full name", label_phone: "Phone (WhatsApp)",
    label_email: "Email", label_details: "Details / Context",
    label_mode: "Delivery mode", mode_whatsapp: "WhatsApp",
    mode_email: "Email", mode_display: "On-screen display",
    btn_send: "Send request", btn_reset: "Reset",
    footer_tagline: "© 2025 e-META • Simply. Intelligently.",
    domains: ["— Choose —","Agriculture","Environment","Energy","Commerce","E-commerce","Finance","FinTech","Marketing","Technology","Education","Health","Transport","Real Estate","Legal","Industry"]
  },
  es: {
    brand: "e-META", hero_title: "e-META — El asistente de IA multidisciplinario",
    hero_lead: "Formulario inteligente para analizar, diagnosticar y recomendar soluciones adaptadas.",
    form_title: "Solicitud personalizada",
    label_domain: "Dominio / Tema", label_expected: "Resultado esperado",
    label_budget: "Presupuesto indicativo", label_currency: "Moneda",
    label_name: "Nombre completo", label_phone: "Teléfono (WhatsApp)",
    label_email: "Correo", label_details: "Detalles / Contexto",
    label_mode: "Modo de entrega", mode_whatsapp: "WhatsApp",
    mode_email: "Correo", mode_display: "Visualización directa",
    btn_send: "Enviar solicitud", btn_reset: "Restablecer",
    footer_tagline: "© 2025 e-META • Simplemente. Inteligentemente.",
    domains: ["— Elegir —","Agricultura","Medio ambiente","Energía","Comercio","Comercio electrónico","Finanzas","FinTech","Marketing","Tecnología","Educación","Salud","Transporte","Inmobiliario","Jurídico","Industria"]
  },
  ar: {
    brand: "إي-ميتا", hero_title: "إي-ميتا — المساعد الذكي المتعدد التخصصات",
    hero_lead: "نموذج ذكي لتحليل وتشخيص وتوصية حلول مخصصة.",
    form_title: "طلب مخصص",
    label_domain: "المجال / الموضوع", label_expected: "النتيجة المتوقعة",
    label_budget: "الميزانية التقديرية", label_currency: "العملة",
    label_name: "الاسم الكامل", label_phone: "الهاتف (واتساب)",
    label_email: "البريد الإلكتروني", label_details: "التفاصيل / السياق",
    label_mode: "طريقة الإرسال", mode_whatsapp: "واتساب",
    mode_email: "البريد الإلكتروني", mode_display: "العرض المباشر",
    btn_send: "إرسال الطلب", btn_reset: "إعادة الضبط",
    footer_tagline: "© 2025 إي-ميتا • ببساطة. بذكاء.",
    domains: ["— اختر —","الزراعة","البيئة","الطاقة","التجارة","التجارة الإلكترونية","المالية","فينتك","التسويق","التكنولوجيا","التعليم","الصحة","النقل","العقارات","القانون","الصناعة"]
  }
};
