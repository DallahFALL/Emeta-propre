// === e-META Script v3.1 ===
// Gestion multilingue complète avec détection automatique + placeholders + domaines dynamiques

document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSelect");
  const elements = document.querySelectorAll("[data-i18n]");
  const domainSelect = document.getElementById("domain");
  const placeholders = {
    expectedResult: document.getElementById("expectedResult"),
    budget: document.getElementById("budget"),
    name: document.getElementById("name"),
    phone: document.getElementById("phone"),
    email: document.getElementById("email"),
    details: document.getElementById("details"),
  };

  // === Traductions principales ===
  const translations = {
    fr: {
      home: "Accueil",
      about: "À propos",
      faq: "FAQ",
      contact: "Contact",
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
      placeholders: {
        expectedResult: "Ex : Dossier de financement, plan stratégique, prototype...",
        budget: "Montant estimé",
        name: "Votre nom complet",
        phone: "+221...",
        email: "exemple@mail.com",
        details: "Décrivez le contexte, contraintes ou priorités..."
      },
      domains: [
        "Agriculture & Agro-industrie",
        "Environnement & Climat",
        "Énergie & Solaire",
        "Commerce & Distribution",
        "E-commerce & Digital",
        "Finance & Comptabilité",
        "FinTech / Mobile Money",
        "Marketing & Communication",
        "Santé & Bien-être",
        "Technologie & Innovation",
        "Éducation & Formation",
        "Transport & Logistique",
        "Juridique & Conformité",
        "Immobilier & Construction",
        "Industrie & Production"
      ]
    },
    en: {
      home: "Home",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
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
      label_mode: "Output mode",
      mode_whatsapp: "WhatsApp",
      mode_email: "Email",
      mode_display: "Direct display",
      btn_send: "Send request",
      btn_reset: "Reset",
      about_text: "e-META structures your requests and produces a strategic synthesis adapted to your context.",
      faq_q1: "How does e-META work?",
      faq_a1: "Fill in the form; e-META generates a diagnosis, three strategic options, and a prioritized recommendation.",
      placeholders: {
        expectedResult: "Ex: Funding file, strategic plan, prototype...",
        budget: "Estimated amount",
        name: "Your full name",
        phone: "+221...",
        email: "example@mail.com",
        details: "Describe the context, constraints, or expectations..."
      },
      domains: [
        "Agriculture & Agribusiness",
        "Environment & Climate",
        "Energy & Solar",
        "Trade & Distribution",
        "E-commerce & Digital",
        "Finance & Accounting",
        "FinTech / Mobile Money",
        "Marketing & Communication",
        "Health & Wellness",
        "Technology & Innovation",
        "Education & Training",
        "Transport & Logistics",
        "Legal & Compliance",
        "Real Estate & Construction",
        "Industry & Manufacturing"
      ]
    },
    es: {
      home: "Inicio",
      about: "Acerca de",
      faq: "FAQ",
      contact: "Contacto",
      hero_title: "e-META — Asistente IA Multidisciplinario",
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
      label_mode: "Modo de salida",
      mode_whatsapp: "WhatsApp",
      mode_email: "Correo",
      mode_display: "Visualización directa",
      btn_send: "Enviar solicitud",
      btn_reset: "Restablecer",
      about_text: "e-META estructura las solicitudes y produce un resumen estratégico adaptado al contexto.",
      faq_q1: "¿Cómo funciona e-META?",
      faq_a1: "Complete el formulario; e-META genera un diagnóstico, tres opciones estratégicas y una recomendación priorizada.",
      placeholders: {
        expectedResult: "Ej: Archivo de financiación, plan estratégico, prototipo...",
        budget: "Monto estimado",
        name: "Su nombre completo",
        phone: "+221...",
        email: "ejemplo@mail.com",
        details: "Describa el contexto, limitaciones o expectativas..."
      },
      domains: [
        "Agricultura & Agroindustria",
        "Medio Ambiente & Clima",
        "Energía & Solar",
        "Comercio & Distribución",
        "E-commerce & Digital",
        "Finanzas & Contabilidad",
        "FinTech / Dinero Móvil",
        "Marketing & Comunicación",
        "Salud & Bienestar",
        "Tecnología & Innovación",
        "Educación & Formación",
        "Transporte & Logística",
        "Legal & Cumplimiento",
        "Inmobiliario & Construcción",
        "Industria & Producción"
      ]
    },
    ar: {
      home: "الرئيسية",
      about: "حول",
      faq: "الأسئلة الشائعة",
      contact: "اتصال",
      hero_title: "e-META — المساعد الذكي المتعدد المجالات",
      hero_lead: "نموذج ذكي للتحليل والتشخيص وتوصية حلول مخصصة.",
      form_title: "طلب مخصص",
      label_domain: "المجال / الموضوع",
      label_expected: "النتيجة المتوقعة",
      label_budget: "الميزانية التقديرية",
      label_currency: "العملة",
      label_name: "الاسم الكامل",
      label_phone: "الهاتف (واتساب)",
      label_email: "البريد الإلكتروني",
      label_details: "التفاصيل / السياق",
      label_mode: "طريقة الاسترجاع",
      mode_whatsapp: "واتساب",
      mode_email: "البريد",
      mode_display: "عرض مباشر",
      btn_send: "إرسال الطلب",
      btn_reset: "إعادة التعيين",
      about_text: "يقوم e-META بهيكلة الطلبات وإنتاج تحليل استراتيجي مناسب للسياق.",
      faq_q1: "كيف يعمل e-META؟",
      faq_a1: "املأ النموذج؛ يقوم e-META بإنشاء تشخيص وثلاث خيارات استراتيجية وتوصية ذات أولوية.",
      placeholders: {
        expectedResult: "مثال: ملف تمويل، خطة استراتيجية، نموذج أولي...",
        budget: "المبلغ المقدر",
        name: "اسمك الكامل",
        phone: "+221...",
        email: "example@mail.com",
        details: "اشرح السياق أو القيود أو التوقعات..."
      },
      domains: [
        "الزراعة والصناعة الزراعية",
        "البيئة والمناخ",
        "الطاقة والطاقة الشمسية",
        "التجارة والتوزيع",
        "التجارة الإلكترونية والرقمية",
        "التمويل والمحاسبة",
        "FinTech / المال عبر الهاتف",
        "التسويق والاتصال",
        "الصحة والرفاهية",
        "التكنولوجيا والابتكار",
        "التعليم والتدريب",
        "النقل واللوجستيات",
        "القانون والامتثال",
        "العقارات والبناء",
        "الصناعة والإنتاج"
      ]
    }
  };

  // === Fonction de mise à jour de la langue ===
  function updateLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    document.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;

    // Traduction texte
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });

    // Placeholder dynamiques
    Object.entries(placeholders).forEach(([key, input]) => {
      if (t.placeholders[key]) input.placeholder = t.placeholders[key];
    });

    // Domaines dynamiques
    domainSelect.innerHTML = `<option value="">— ${t.label_domain.split(" / ")[0]} —</option>`;
    t.domains.forEach(d => {
      const opt = document.createElement("option");
      opt.textContent = d;
      domainSelect.appendChild(opt);
    });
  }

  // Détection automatique
  const browserLang = navigator.language.slice(0, 2);
  const defaultLang = ["fr", "en", "es", "ar"].includes(browserLang) ? browserLang : "fr";
  langSelect.value = defaultLang;
  updateLanguage(defaultLang);

  // Changement manuel
  langSelect.addEventListener("change", e => updateLanguage(e.target.value));
});
