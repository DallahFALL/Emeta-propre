// === e-META script.js v3.5 ===
// ✅ Traduction dynamique, placeholders, liste Domaines, WhatsApp actif

document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("languageSelect");
  const whatsappBtn = document.querySelector(".whatsapp-btn");
  const domainSelect = document.getElementById("domainSelect");

  // === Lien WhatsApp (ton numéro) ===
  whatsappBtn.addEventListener("click", () => {
    window.open("https://wa.me/221782607212", "_blank");
  });

  // === Dictionnaire complet multilingue ===
  const translations = {
    fr: {
      home: "Accueil",
      about: "À propos",
      faq: "FAQ",
      contact: "Contact",
      hero_title: "L’assistant IA pluridisciplinaire",
      hero_subtitle: "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",
      form_title: "Requête personnalisée",
      domain_label: "Domaine / Thème",
      choose_domain: "— Choisir —",
      domains: [
        "Agriculture",
        "Finance",
        "Énergie",
        "Technologie",
        "Éducation",
        "Santé",
        "Commerce",
        "Transport",
        "Environnement",
        "Immobilier",
        "Tourisme",
        "Communication",
        "Marketing",
        "E-commerce",
        "Industrie",
        "BTP / Construction",
        "Recherche & Innovation",
        "Administration publique",
        "Culture & Médias",
        "Autre"
      ],
      expected_label: "Résultat attendu",
      expected_placeholder: "Ex : Dossier de financement, plan stratégique...",
      budget_label: "Budget indicatif",
      budget_placeholder: "Montant estimé",
      currency_label: "Devise",
      name_label: "Nom complet",
      name_placeholder: "Votre nom complet",
      phone_label: "Téléphone (WhatsApp)",
      phone_placeholder: "+221...",
      details_label: "Détails / Contexte",
      details_placeholder: "Décrivez le contexte, contraintes ou priorités...",
      delivery_label: "Mode de restitution",
      delivery_whatsapp: "WhatsApp",
      delivery_email: "Email",
      delivery_display: "Affichage direct",
      submit_btn: "Envoyer la requête",
      reset_btn: "Réinitialiser",
      about_title: "À propos",
      about_text: "e-META structure les demandes et produit une synthèse stratégique adaptée au contexte.",
      faq_title: "FAQ",
      faq_q1: "Comment fonctionne e-META ?",
      faq_a1: "e-META utilise l’intelligence artificielle pour analyser vos besoins, hiérarchiser vos priorités et proposer une synthèse stratégique personnalisée.",
      contact_title: "Contact",
      footer_slogan: "Simplement. Intelligemment."
    },
    en: {
      home: "Home",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      hero_title: "The multidisciplinary AI assistant",
      hero_subtitle: "Smart form to analyze, diagnose, and recommend tailored solutions.",
      form_title: "Custom Request",
      domain_label: "Domain / Theme",
      choose_domain: "— Choose —",
      domains: [
        "Agriculture",
        "Finance",
        "Energy",
        "Technology",
        "Education",
        "Health",
        "Commerce",
        "Transport",
        "Environment",
        "Real Estate",
        "Tourism",
        "Communication",
        "Marketing",
        "E-commerce",
        "Industry",
        "Construction",
        "Research & Innovation",
        "Public Administration",
        "Culture & Media",
        "Other"
      ],
      expected_label: "Expected result",
      expected_placeholder: "Ex: Funding plan, business model, prototype...",
      budget_label: "Indicative budget",
      budget_placeholder: "Estimated amount",
      currency_label: "Currency",
      name_label: "Full name",
      name_placeholder: "Your full name",
      phone_label: "Phone (WhatsApp)",
      phone_placeholder: "+221...",
      details_label: "Details / Context",
      details_placeholder: "Describe the context, constraints or priorities...",
      delivery_label: "Delivery mode",
      delivery_whatsapp: "WhatsApp",
      delivery_email: "Email",
      delivery_display: "Direct display",
      submit_btn: "Send request",
      reset_btn: "Reset",
      about_title: "About",
      about_text: "e-META structures your requests and produces a strategic synthesis adapted to context.",
      faq_title: "FAQ",
      faq_q1: "How does e-META work?",
      faq_a1: "e-META uses AI to analyze your needs, prioritize objectives and generate an actionable strategic summary.",
      contact_title: "Contact",
      footer_slogan: "Simply. Intelligently."
    },
    es: {
      home: "Inicio",
      about: "Acerca de",
      faq: "FAQ",
      contact: "Contacto",
      hero_title: "El asistente de IA multidisciplinario",
      hero_subtitle: "Formulario inteligente para analizar, diagnosticar y recomendar soluciones adaptadas.",
      form_title: "Solicitud personalizada",
      domain_label: "Dominio / Tema",
      choose_domain: "— Seleccionar —",
      domains: [
        "Agricultura",
        "Finanzas",
        "Energía",
        "Tecnología",
        "Educación",
        "Salud",
        "Comercio",
        "Transporte",
        "Medio ambiente",
        "Bienes raíces",
        "Turismo",
        "Comunicación",
        "Marketing",
        "Comercio electrónico",
        "Industria",
        "Construcción",
        "Investigación e Innovación",
        "Administración pública",
        "Cultura y Medios",
        "Otro"
      ],
      expected_label: "Resultado esperado",
      expected_placeholder: "Ej: plan de financiación, modelo de negocio...",
      budget_label: "Presupuesto indicativo",
      budget_placeholder: "Monto estimado",
      currency_label: "Moneda",
      name_label: "Nombre completo",
      name_placeholder: "Tu nombre completo",
      phone_label: "Teléfono (WhatsApp)",
      phone_placeholder: "+221...",
      details_label: "Detalles / Contexto",
      details_placeholder: "Describe el contexto, limitaciones o prioridades...",
      delivery_label: "Modo de entrega",
      delivery_whatsapp: "WhatsApp",
      delivery_email: "Correo",
      delivery_display: "Visualización directa",
      submit_btn: "Enviar solicitud",
      reset_btn: "Restablecer",
      about_title: "Acerca de",
      about_text: "e-META estructura las solicitudes y produce un resumen estratégico adaptado al contexto.",
      faq_title: "FAQ",
      faq_q1: "¿Cómo funciona e-META?",
      faq_a1: "e-META usa IA para analizar tus necesidades y crear un resumen estratégico personalizado.",
      contact_title: "Contacto",
      footer_slogan: "Simplemente. Inteligentemente."
    },
    ar: {
      home: "الرئيسية",
      about: "حول",
      faq: "الأسئلة الشائعة",
      contact: "اتصال",
      hero_title: "المساعد الذكي المتعدد المجالات",
      hero_subtitle: "نموذج ذكي لتحليل وتشخيص وتوصية حلول مخصصة.",
      form_title: "طلب مخصص",
      domain_label: "المجال / الموضوع",
      choose_domain: "— اختر —",
      domains: [
        "الزراعة",
        "التمويل",
        "الطاقة",
        "التكنولوجيا",
        "التعليم",
        "الصحة",
        "التجارة",
        "النقل",
        "البيئة",
        "العقارات",
        "السياحة",
        "الاتصال",
        "التسويق",
        "التجارة الإلكترونية",
        "الصناعة",
        "البناء",
        "البحث والابتكار",
        "الإدارة العامة",
        "الثقافة والإعلام",
        "أخرى"
      ],
      expected_label: "النتيجة المتوقعة",
      expected_placeholder: "مثلاً: خطة تمويل، نموذج عمل...",
      budget_label: "الميزانية التقديرية",
      budget_placeholder: "المبلغ المقدر",
      currency_label: "العملة",
      name_label: "الاسم الكامل",
      name_placeholder: "اسمك الكامل",
      phone_label: "الهاتف (واتساب)",
      phone_placeholder: "+221...",
      details_label: "التفاصيل / السياق",
      details_placeholder: "اشرح السياق أو القيود أو الأولويات...",
      delivery_label: "طريقة الاسترجاع",
      delivery_whatsapp: "واتساب",
      delivery_email: "البريد الإلكتروني",
      delivery_display: "العرض المباشر",
      submit_btn: "إرسال الطلب",
      reset_btn: "إعادة التعيين",
      about_title: "حول",
      about_text: "يقوم e-META بتحليل طلبك وإنشاء ملخص استراتيجي مخصص لاحتياجاتك.",
      faq_title: "الأسئلة الشائعة",
      faq_q1: "كيف يعمل e-META؟",
      faq_a1: "يستخدم e-META الذكاء الاصطناعي لتحليل طلبك وتقديم ملخص استراتيجي مناسب.",
      contact_title: "اتصال",
      footer_slogan: "ببساطة. بذكاء."
    }
  };

  // === Fonction de mise à jour de langue ===
  function updateLanguage(lang) {
    const t = translations[lang];

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (t[key]) el.placeholder = t[key];
    });

    // Liste dynamique des domaines
    domainSelect.innerHTML = "";
    const opt = document.createElement("option");
    opt.textContent = t.choose_domain;
    opt.disabled = true;
    opt.selected = true;
    domainSelect.appendChild(opt);
    t.domains.forEach(dom => {
      const option = document.createElement("option");
      option.textContent = dom;
      domainSelect.appendChild(option);
    });

    // RTL pour arabe
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
    document.body.style.textAlign = (lang === "ar") ? "right" : "left";
  }

  // === Détection automatique de la langue navigateur ===
  const userLang = navigator.language.slice(0, 2);
  const defaultLang = ["fr", "en", "es", "ar"].includes(userLang) ? userLang : "fr";
  langSelect.value = defaultLang;
  updateLanguage(defaultLang);

  // === Sur changement manuel ===
  langSelect.addEventListener("change", e => updateLanguage(e.target.value));
});
