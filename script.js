/* ============================================================
   e-META — Gestion multilingue dynamique (FR / EN / ES / AR)
   Version : 2.1
   Auteur  : Abdoulaye FALL & e-META Dev
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  // --- Dictionnaire multilingue -----------------------------------
  const translations = {
    fr: {
      "page_title": "e-META — Requête personnalisée",
      "brand": "e-META",
      "home": "Accueil",
      "about": "À propos",
      "faq": "FAQ",
      "contact": "Contact",
      "whatsapp": "WhatsApp",
      "hero_title": "e-META — L'assistant IA pluridisciplinaire",
      "hero_lead": "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",
      "form_title": "Requête personnalisée",
      "label_domain": "Domaine / Thème",
      "label_expected": "Résultat attendu",
      "label_team": "Taille de l'équipe",
      "label_budget": "Budget indicatif",
      "label_currency": "Devise",
      "label_name": "Nom complet",
      "label_email": "Email",
      "label_phone": "Téléphone (WhatsApp)",
      "label_details": "Détails / Contexte",
      "label_mode": "Mode de restitution",
      "mode_email": "Email",
      "mode_whatsapp": "WhatsApp",
      "mode_display": "Affichage",
      "btn_send": "Envoyer la requête",
      "btn_reset": "Réinitialiser",
      "about_text": "e-META structure vos demandes et produit des synthèses claires et exploitables selon votre domaine.",
      "faq_q1": "Comment fonctionne e-META ?",
      "faq_a1": "Remplissez la requête personnalisée. e-META analyse vos données et génère une synthèse stratégique multilingue.",
      "tagline": "Simplement. Intelligemment."
    },

    en: {
      "page_title": "e-META — Custom Request",
      "brand": "e-META",
      "home": "Home",
      "about": "About",
      "faq": "FAQ",
      "contact": "Contact",
      "whatsapp": "WhatsApp",
      "hero_title": "e-META — The Multidisciplinary AI Assistant",
      "hero_lead": "Smart form to analyze, diagnose and recommend tailored solutions.",
      "form_title": "Custom Request",
      "label_domain": "Domain / Topic",
      "label_expected": "Expected outcome",
      "label_team": "Team size",
      "label_budget": "Indicative budget",
      "label_currency": "Currency",
      "label_name": "Full name",
      "label_email": "Email",
      "label_phone": "Phone (WhatsApp)",
      "label_details": "Details / Context",
      "label_mode": "Delivery method",
      "mode_email": "Email",
      "mode_whatsapp": "WhatsApp",
      "mode_display": "On-screen",
      "btn_send": "Send request",
      "btn_reset": "Reset",
      "about_text": "e-META structures your requests and generates clear, actionable syntheses for your field.",
      "faq_q1": "How does e-META work?",
      "faq_a1": "Fill in the custom request. e-META analyzes your inputs and generates a multilingual strategic summary.",
      "tagline": "Simply. Intelligently."
    },

    es: {
      "page_title": "e-META — Solicitud personalizada",
      "brand": "e-META",
      "home": "Inicio",
      "about": "Acerca de",
      "faq": "FAQ",
      "contact": "Contacto",
      "whatsapp": "WhatsApp",
      "hero_title": "e-META — Asistente IA multidisciplinario",
      "hero_lead": "Formulario inteligente para analizar, diagnosticar y recomendar soluciones adaptadas.",
      "form_title": "Solicitud personalizada",
      "label_domain": "Dominio / Tema",
      "label_expected": "Resultado esperado",
      "label_team": "Tamaño del equipo",
      "label_budget": "Presupuesto indicativo",
      "label_currency": "Moneda",
      "label_name": "Nombre completo",
      "label_email": "Correo electrónico",
      "label_phone": "Teléfono (WhatsApp)",
      "label_details": "Detalles / Contexto",
      "label_mode": "Modo de entrega",
      "mode_email": "Correo electrónico",
      "mode_whatsapp": "WhatsApp",
      "mode_display": "Visualización",
      "btn_send": "Enviar solicitud",
      "btn_reset": "Restablecer",
      "about_text": "e-META estructura tus solicitudes y produce síntesis claras y prácticas según tu campo.",
      "faq_q1": "¿Cómo funciona e-META?",
      "faq_a1": "Completa la solicitud personalizada. e-META analiza tus datos y genera un resumen estratégico multilingüe.",
      "tagline": "Simplemente. Inteligentemente."
    },

    ar: {
      "page_title": "e-META — طلب مخصص",
      "brand": "إي-ميتا",
      "home": "الرئيسية",
      "about": "حول",
      "faq": "الأسئلة الشائعة",
      "contact": "اتصال",
      "whatsapp": "واتساب",
      "hero_title": "إي-ميتا — المساعد الذكي متعدد المجالات",
      "hero_lead": "نموذج ذكي لتحليل وتشخيص وتوصية حلول مخصصة.",
      "form_title": "طلب مخصص",
      "label_domain": "المجال / الموضوع",
      "label_expected": "النتيجة المتوقعة",
      "label_team": "حجم الفريق",
      "label_budget": "الميزانية التقديرية",
      "label_currency": "العملة",
      "label_name": "الاسم الكامل",
      "label_email": "البريد الإلكتروني",
      "label_phone": "الهاتف (واتساب)",
      "label_details": "التفاصيل / السياق",
      "label_mode": "طريقة التسليم",
      "mode_email": "البريد الإلكتروني",
      "mode_whatsapp": "واتساب",
      "mode_display": "العرض على الشاشة",
      "btn_send": "إرسال الطلب",
      "btn_reset": "إعادة الضبط",
      "about_text": "يقوم e-META بتنظيم الطلبات وإنشاء ملخصات واضحة وقابلة للتنفيذ وفقاً للمجال.",
      "faq_q1": "كيف يعمل e-META؟",
      "faq_a1": "املأ الطلب المخصص. يقوم e-META بتحليل بياناتك وإنشاء ملخص استراتيجي متعدد اللغات.",
      "tagline": "ببساطة. بذكاء."
    }
  };

  // --- Fonctions utilitaires -----------------------------------

  function setLanguage(lang) {
    const dict = translations[lang] || translations.fr;
    document.documentElement.lang = lang;

    // Gestion RTL pour l'arabe
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // Met à jour les éléments data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    // Met à jour le titre de la page
    document.title = dict["page_title"] || "e-META";

    // Met à jour les placeholders
    if (lang === "en") {
      document.getElementById("expectedResult").placeholder = "Ex: Funding file, strategic plan, prototype...";
      document.getElementById("details").placeholder = "Describe context, constraints, or expectations...";
      document.getElementById("budget").placeholder = "Estimated amount";
    } else if (lang === "es") {
      document.getElementById("expectedResult").placeholder = "Ej: Plan estratégico, expediente de financiación...";
      document.getElementById("details").placeholder = "Describe el contexto, limitaciones o expectativas...";
      document.getElementById("budget").placeholder = "Monto estimado";
    } else if (lang === "ar") {
      document.getElementById("expectedResult").placeholder = "مثلاً: خطة استراتيجية، مشروع تمويل...";
      document.getElementById("details").placeholder = "اشرح السياق أو القيود أو التوقعات...";
      document.getElementById("budget").placeholder = "المبلغ المقدر";
    } else {
      // FR par défaut
      document.getElementById("expectedResult").placeholder = "Ex : Dossier de financement, plan stratégique...";
      document.getElementById("details").placeholder = "Décrivez le contexte, les contraintes ou vos attentes...";
      document.getElementById("budget").placeholder = "Montant estimé";
    }
  }

  // --- Initialisation ------------------------------------------
  const langSelect = document.getElementById("langSelect");
  const defaultLang = localStorage.getItem("eMETA_lang") || "fr";
  langSelect.value = defaultLang;
  setLanguage(defaultLang);

  // --- Changement de langue ------------------------------------
  langSelect.addEventListener("change", () => {
    const lang = langSelect.value;
    localStorage.setItem("eMETA_lang", lang);
    setLanguage(lang);
  });

  // --- Bouton WhatsApp -----------------------------------------
  const whatsappBtn = document.getElementById("whatsappBtn");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      const phoneInput = document.getElementById("phone");
      const phone = phoneInput ? phoneInput.value.replace(/\D/g, "") : "";
      const msg = encodeURIComponent("Bonjour, je souhaite soumettre une requête via e-META.");
      const url = phone
        ? `https://wa.me/${phone}?text=${msg}`
        : `https://wa.me/?text=${msg}`;
      window.open(url, "_blank");
    });
  }

  // --- Menu mobile (burger) ------------------------------------
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

});
