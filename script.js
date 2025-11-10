document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSelect");
  const domainSelect = document.getElementById("domain");
  const currencySelect = document.getElementById("currency");

  // 🌐 Détection automatique de la langue du navigateur
  const browserLang = navigator.language.slice(0, 2);
  const defaultLang = ["fr", "en", "es", "ar"].includes(browserLang)
    ? browserLang
    : "fr";
  langSelect.value = defaultLang;

  // 🔠 Dictionnaire des traductions
  const t = {
    fr: {
      hero_title: "e-META — L’assistant IA pluridisciplinaire",
      hero_lead:
        "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",
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
      about: "À propos",
      about_text:
        "e-META structure les demandes et produit une synthèse stratégique adaptée au contexte.",
      faq: "FAQ",
      faq_q1: "Comment fonctionne e-META ?",
      faq_a1:
        "Remplissez le formulaire ; e-META analyse et recommande les actions les plus pertinentes.",
      contact: "Contact",
      footer_tagline: "Simplement. Intelligemment.",

      placeholders: {
        expectedResult: "Ex : Dossier de financement, plan stratégique...",
        budget: "Montant estimé",
        name: "Votre nom complet",
        email: "exemple@mail.com",
        phone: "+221...",
        details: "Décrivez le contexte, contraintes ou attentes...",
      },

      domains: [
        "— Choisir —",
        "Agriculture & Gestion des terres",
        "Environnement & Climat",
        "Énergie & Solaire",
        "Commerce & Distribution",
        "E-commerce & Digital",
        "Finance & Comptabilité",
        "FinTech / Mobile Money",
        "Marketing & Communication",
        "Technologie & Innovation",
        "Éducation & Formation",
        "Santé & Bien-être",
        "Transport & Logistique",
        "Immobilier & Construction",
        "Industrie & Production",
        "Juridique & Conformité",
      ],
    },

    en: {
      hero_title: "e-META — The multidisciplinary AI assistant",
      hero_lead:
        "Smart form to analyze, diagnose, and recommend tailored solutions.",
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
      about: "About",
      about_text:
        "e-META structures requests and generates actionable strategic syntheses.",
      faq: "FAQ",
      faq_q1: "How does e-META work?",
      faq_a1:
        "Fill in the form; e-META analyzes and recommends the most relevant actions.",
      contact: "Contact",
      footer_tagline: "Simply. Intelligently.",

      placeholders: {
        expectedResult: "Ex: Funding file, strategic plan...",
        budget: "Estimated amount",
        name: "Your full name",
        email: "example@mail.com",
        phone: "+1...",
        details: "Describe the context, constraints, or expectations...",
      },

      domains: [
        "— Choose —",
        "Agriculture & Land Management",
        "Environment & Climate",
        "Energy & Solar",
        "Commerce & Retail",
        "E-commerce & Digital",
        "Finance & Accounting",
        "FinTech / Mobile Money",
        "Marketing & Communication",
        "Technology & Innovation",
        "Education & Training",
        "Health & Well-being",
        "Transport & Logistics",
        "Real Estate & Construction",
        "Industry & Production",
        "Legal & Compliance",
      ],
    },

    es: {
      hero_title: "e-META — Asistente IA multidisciplinario",
      hero_lead:
        "Formulario inteligente para analizar, diagnosticar y recomendar soluciones adaptadas.",
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
      about: "Acerca de",
      about_text:
        "e-META organiza las solicitudes y produce un análisis estratégico adaptado al contexto.",
      faq: "FAQ",
      faq_q1: "¿Cómo funciona e-META?",
      faq_a1:
        "Complete el formulario; e-META analiza y recomienda las acciones más relevantes.",
      contact: "Contacto",
      footer_tagline: "Simple. Inteligente.",

      placeholders: {
        expectedResult: "Ej: Archivo de financiación, plan estratégico...",
        budget: "Monto estimado",
        name: "Tu nombre completo",
        email: "ejemplo@mail.com",
        phone: "+34...",
        details: "Describe el contexto, limitaciones o expectativas...",
      },

      domains: [
        "— Elegir —",
        "Agricultura y Gestión de Tierras",
        "Medio Ambiente y Clima",
        "Energía y Solar",
        "Comercio y Distribución",
        "Comercio electrónico y Digital",
        "Finanzas y Contabilidad",
        "FinTech / Dinero Móvil",
        "Marketing y Comunicación",
        "Tecnología e Innovación",
        "Educación y Formación",
        "Salud y Bienestar",
        "Transporte y Logística",
        "Inmobiliario y Construcción",
        "Industria y Producción",
        "Jurídico y Cumplimiento",
      ],
    },

    ar: {
      hero_title: "e-META — المساعد الذكي المتعدد المجالات",
      hero_lead:
        "نموذج ذكي لتحليل وتشخيص وتوصية حلول مخصصة.",
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
      about: "حول",
      about_text:
        "يقوم e-META بتنظيم الطلبات وإنتاج تحليل استراتيجي مخصص.",
      faq: "الأسئلة الشائعة",
      faq_q1: "كيف يعمل e-META؟",
      faq_a1: "املأ النموذج؛ يقوم e-META بتحليل البيانات ويوصي بالإجراءات المناسبة.",
      contact: "اتصال",
      footer_tagline: "ببساطة. بذكاء.",

      placeholders: {
        expectedResult: "مثال: ملف تمويل، خطة استراتيجية...",
        budget: "المبلغ المقدر",
        name: "اسمك الكامل",
        email: "example@mail.com",
        phone: "+966...",
        details: "اشرح السياق أو القيود أو التوقعات...",
      },

      domains: [
        "— اختر —",
        "الزراعة وإدارة الأراضي",
        "البيئة والمناخ",
        "الطاقة والطاقة الشمسية",
        "التجارة والتوزيع",
        "التجارة الإلكترونية والرقمية",
        "المالية والمحاسبة",
        "التكنولوجيا المالية / الأموال المتنقلة",
        "التسويق والاتصال",
        "التكنولوجيا والابتكار",
        "التعليم والتدريب",
        "الصحة والرفاهية",
        "النقل واللوجستيات",
        "العقارات والبناء",
        "الصناعة والإنتاج",
        "القانون والامتثال",
      ],
    },
  };

  function updateContent(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (t[lang][key]) el.textContent = t[lang][key];
    });

    // placeholders dynamiques
    Object.entries(t[lang].placeholders).forEach(([id, text]) => {
      const field = document.getElementById(id);
      if (field) field.placeholder = text;
    });

    // mise à jour domaines
    domainSelect.innerHTML = "";
    t[lang].domains.forEach(opt => {
      const option = document.createElement("option");
      option.textContent = opt;
      domainSelect.appendChild(option);
    });

    // direction RTL pour arabe
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
  }

  langSelect.addEventListener("change", e => updateContent(e.target.value));
  updateContent(defaultLang);
});
