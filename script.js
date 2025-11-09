/* ============================================================
   e-META — Script multilingue complet (FR / EN / ES / AR)
   Version : 2.6 — Header + Footer inclus
   Auteur  : Abdoulaye FALL & e-META Dev
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  // --- Dictionnaire global --------------------------------------
  const translations = {
    fr: {
      // Menu principal
      home: "Accueil",
      about: "À propos",
      faq: "FAQ",
      contact: "Contact",
      footer_tagline: "© 2025 e-META • Simplement. Intelligemment.",
      hero_title: "e-META — L'assistant IA pluridisciplinaire",
      hero_lead: "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",
      form_title: "Requête personnalisée",
      btn_send: "Envoyer la requête",
      btn_reset: "Réinitialiser",
      choose: "— Choisir —",

      placeholders: {
        expectedResult: "Ex : Dossier de financement, plan stratégique, prototype...",
        details: "Décrivez le contexte, les contraintes ou vos attentes principales...",
        budget: "Montant estimé",
        name: "Votre nom complet",
        email: "exemple@mail.com",
        phone: "+221..."
      }
    },

    en: {
      home: "Home",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      footer_tagline: "© 2025 e-META • Simply. Intelligently.",
      hero_title: "e-META — The Multidisciplinary AI Assistant",
      hero_lead: "Smart form to analyze, diagnose and recommend tailored solutions.",
      form_title: "Custom Request",
      btn_send: "Send request",
      btn_reset: "Reset",
      choose: "— Choose —",

      placeholders: {
        expectedResult: "Ex: Funding file, strategic plan, prototype...",
        details: "Describe the context, constraints, or expectations...",
        budget: "Estimated amount",
        name: "Your full name",
        email: "example@mail.com",
        phone: "+221..."
      }
    },

    es: {
      home: "Inicio",
      about: "Acerca de",
      faq: "FAQ",
      contact: "Contacto",
      footer_tagline: "© 2025 e-META • Simplemente. Inteligentemente.",
      hero_title: "e-META — Asistente IA multidisciplinario",
      hero_lead: "Formulario inteligente para analizar, diagnosticar y recomendar soluciones adaptadas.",
      form_title: "Solicitud personalizada",
      btn_send: "Enviar solicitud",
      btn_reset: "Restablecer",
      choose: "— Elegir —",

      placeholders: {
        expectedResult: "Ej: Plan estratégico, expediente de financiación...",
        details: "Describe el contexto, limitaciones o expectativas...",
        budget: "Monto estimado",
        name: "Tu nombre completo",
        email: "ejemplo@mail.com",
        phone: "+221..."
      }
    },

    ar: {
      home: "الرئيسية",
      about: "حول",
      faq: "الأسئلة الشائعة",
      contact: "اتصال",
      footer_tagline: "© 2025 إي-ميتا • ببساطة. بذكاء.",
      hero_title: "إي-ميتا — المساعد الذكي متعدد المجالات",
      hero_lead: "نموذج ذكي لتحليل وتشخيص وتوصية حلول مخصصة.",
      form_title: "طلب مخصص",
      btn_send: "إرسال الطلب",
      btn_reset: "إعادة الضبط",
      choose: "— اختر —",

      placeholders: {
        expectedResult: "مثلاً: خطة استراتيجية، مشروع تمويل...",
        details: "اشرح السياق أو القيود أو التوقعات...",
        budget: "المبلغ المقدر",
        name: "اسمك الكامل",
        email: "example@mail.com",
        phone: "+221..."
      }
    }
  };

  // --- Détection automatique langue du navigateur ----------------
  const browserLang = navigator.language.substring(0, 2).toLowerCase();
  const supported = ["fr", "en", "es", "ar"];
  const initialLang =
    localStorage.getItem("eMETA_lang") ||
    (supported.includes(browserLang) ? browserLang : "fr");

  const langSelect = document.getElementById("langSelect");
  if (langSelect) langSelect.value = initialLang;
  applyLang(initialLang);

  // --- Écouteur changement manuel --------------------------------
  if (langSelect) {
    langSelect.addEventListener("change", e => {
      const newLang = e.target.value;
      localStorage.setItem("eMETA_lang", newLang);
      applyLang(newLang);
    });
  }

  // --- Fonction principale de traduction --------------------------
  function applyLang(lang) {
    const dict = translations[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // --- HEADER / FOOTER ---
    updateText("#mainNav a[data-i18n='home']", dict.home);
    updateText("#mainNav a[data-i18n='about']", dict.about);
    updateText("#mainNav a[data-i18n='faq']", dict.faq);
    updateText("#mainNav a[data-i18n='contact']", dict.contact);
    updateText(".site-footer", dict.footer_tagline);

    // --- TITRES & FORM ---
    updateText(".hero-title", dict.hero_title);
    updateText(".lead", dict.hero_lead);
    updateText("[data-i18n='form_title']", dict.form_title);
    updateText("[data-i18n='btn_send']", dict.btn_send);
    updateText("[data-i18n='btn_reset']", dict.btn_reset);

    // --- Choisir / Choose ---
    const domainSelect = document.getElementById("domain");
    if (domainSelect && domainSelect.options[0])
      domainSelect.options[0].textContent = dict.choose;

    // --- Placeholders ---
    for (const id in dict.placeholders) {
      const el = document.getElementById(id);
      if (el) el.placeholder = dict.placeholders[id];
    }

    // --- Alignement RTL pour arabe ---
    document.body.style.direction = lang === "ar" ? "rtl" : "ltr";
    document.body.style.textAlign = lang === "ar" ? "right" : "left";
  }

  // --- Fonction utilitaire ---
  function updateText(selector, text) {
    const el = document.querySelector(selector);
    if (el && text) el.textContent = text;
  }

  // --- Bouton WhatsApp -------------------------------------------
  const whatsappBtn = document.getElementById("whatsappBtn");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      const phone = (document.getElementById("phone")?.value || "").replace(/\D/g, "");
      const msg = encodeURIComponent("Bonjour, je souhaite soumettre une requête via e-META.");
      const url = phone ? `https://wa.me/${phone}?text=${msg}` : `https://wa.me/?text=${msg}`;
      window.open(url, "_blank");
    });
  }

  // --- Menu mobile -----------------------------------------------
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }
});
