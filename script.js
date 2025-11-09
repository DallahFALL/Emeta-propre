/* ============================================================
   e-META — Script multilingue dynamique (FR / EN / ES / AR)
   Version : 2.2
   Auteur  : Abdoulaye FALL & e-META Dev
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  // --- Dictionnaire multilingue principal -------------------------------
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
      "tagline": "Simplement. Intelligemment.",
      // Domaines
      "dom.agriculture": "Agriculture & Agroécologie",
      "dom.environment": "Environnement & Climat",
      "dom.energy": "Énergie & Solaire",
      "dom.commerce": "Commerce & Distribution",
      "dom.ecommerce": "E-commerce & Digital",
      "dom.finance": "Finance & Comptabilité",
      "dom.fintech": "FinTech / Mobile Money",
      "dom.funding": "Financement & Partenariat",
      "dom.marketing": "Marketing & Communication",
      "dom.technology": "Technologie & Innovation",
      "dom.education": "Éducation & Formation",
      "dom.sante": "Santé & Bien-être",
      "dom.transport": "Transport & Logistique",
      "dom.immobilier": "Immobilier & Construction",
      "dom.juridique": "Juridique & Conformité",
      "dom.industrie": "Industrie & Production",
      "dom.culture": "Culture & Médias",
      "dom.tourisme": "Tourisme & Hôtellerie",
      "dom.rh": "Ressources Humaines",
      "dom.public": "Projets publics & collectivités",
      "dom.artisanal": "Artisanat & Transformation locale",
      "dom.social": "Développement social & communautaire",
      "dom.autre": "Autre"
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
      "label_expected": "Expected result",
      "label_budget": "Indicative budget",
      "label_currency": "Currency",
      "label_name": "Full name",
      "label_email": "Email",
      "label_phone": "Phone (WhatsApp)",
      "label_details": "Details / Context",
      "label_mode": "Delivery method",
      "mode_email": "Email",
      "mode_whatsapp": "WhatsApp",
      "mode_display": "On screen",
      "btn_send": "Send request",
      "btn_reset": "Reset",
      "about_text": "e-META structures your requests and produces clear, actionable summaries adapted to your field.",
      "faq_q1": "How does e-META work?",
      "faq_a1": "Fill in the custom request. e-META analyzes your data and generates a multilingual strategic summary.",
      "tagline": "Simply. Intelligently.",
      // Domains
      "dom.agriculture": "Agriculture & Agroecology",
      "dom.environment": "Environment & Climate",
      "dom.energy": "Energy & Solar",
      "dom.commerce": "Trade & Distribution",
      "dom.ecommerce": "E-commerce & Digital",
      "dom.finance": "Finance & Accounting",
      "dom.fintech": "FinTech / Mobile Money",
      "dom.funding": "Funding & Partnerships",
      "dom.marketing": "Marketing & Communication",
      "dom.technology": "Technology & Innovation",
      "dom.education": "Education & Training",
      "dom.sante": "Health & Well-being",
      "dom.transport": "Transport & Logistics",
      "dom.immobilier": "Real Estate & Construction",
      "dom.juridique": "Legal & Compliance",
      "dom.industrie": "Industry & Production",
      "dom.culture": "Culture & Media",
      "dom.tourisme": "Tourism & Hospitality",
      "dom.rh": "Human Resources",
      "dom.public": "Public Projects & Communities",
      "dom.artisanal": "Craft & Local Processing",
      "dom.social": "Social & Community Development",
      "dom.autre": "Other"
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
      "label_budget": "Presupuesto indicativo",
      "label_currency": "Moneda",
      "label_name": "Nombre completo",
      "label_email": "Correo electrónico",
      "label_phone": "Teléfono (WhatsApp)",
      "label_details": "Detalles / Contexto",
      "label_mode": "Modo de entrega",
      "mode_email": "Correo electrónico",
      "mode_whatsapp": "WhatsApp",
      "mode_display": "Pantalla",
      "btn_send": "Enviar solicitud",
      "btn_reset": "Restablecer",
      "about_text": "e-META estructura tus solicitudes y genera resúmenes claros y prácticos según tu campo.",
      "faq_q1": "¿Cómo funciona e-META?",
      "faq_a1": "Completa la solicitud personalizada. e-META analiza tus datos y genera un resumen estratégico multilingüe.",
      "tagline": "Simplemente. Inteligentemente.",
      // Dominios
      "dom.agriculture": "Agricultura y Agroecología",
      "dom.environment": "Medio Ambiente y Clima",
      "dom.energy": "Energía y Solar",
      "dom.commerce": "Comercio y Distribución",
      "dom.ecommerce": "E-commerce y Digital",
      "dom.finance": "Finanzas y Contabilidad",
      "dom.fintech": "FinTech / Dinero Móvil",
      "dom.funding": "Financiación y Alianzas",
      "dom.marketing": "Marketing y Comunicación",
      "dom.technology": "Tecnología e Innovación",
      "dom.education": "Educación y Formación",
      "dom.sante": "Salud y Bienestar",
      "dom.transport": "Transporte y Logística",
      "dom.immobilier": "Bienes Raíces y Construcción",
      "dom.juridique": "Legal y Cumplimiento",
      "dom.industrie": "Industria y Producción",
      "dom.culture": "Cultura y Medios",
      "dom.tourisme": "Turismo y Hotelería",
      "dom.rh": "Recursos Humanos",
      "dom.public": "Proyectos Públicos y Comunidades",
      "dom.artisanal": "Artesanía y Producción local",
      "dom.social": "Desarrollo social y comunitario",
      "dom.autre": "Otro"
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
      "tagline": "ببساطة. بذكاء.",
      // المجالات
      "dom.agriculture": "الزراعة والإيكولوجيا الزراعية",
      "dom.environment": "البيئة والمناخ",
      "dom.energy": "الطاقة والطاقة الشمسية",
      "dom.commerce": "التجارة والتوزيع",
      "dom.ecommerce": "التجارة الإلكترونية والرقمية",
      "dom.finance": "التمويل والمحاسبة",
      "dom.fintech": "التقنيات المالية / المال المحمول",
      "dom.funding": "التمويل والشراكات",
      "dom.marketing": "التسويق والاتصال",
      "dom.technology": "التكنولوجيا والابتكار",
      "dom.education": "التعليم والتدريب",
      "dom.sante": "الصحة والرفاهية",
      "dom.transport": "النقل واللوجستيات",
      "dom.immobilier": "العقارات والبناء",
      "dom.juridique": "القانون والامتثال",
      "dom.industrie": "الصناعة والإنتاج",
      "dom.culture": "الثقافة والإعلام",
      "dom.tourisme": "السياحة والفنادق",
      "dom.rh": "الموارد البشرية",
      "dom.public": "المشاريع العامة والمجتمعات",
      "dom.artisanal": "الحرف والتحويل المحلي",
      "dom.social": "التنمية الاجتماعية والمجتمعية",
      "dom.autre": "أخرى"
    }
  };

  // --- Détection automatique de la langue du navigateur ----------
  const browserLang = navigator.language.substring(0, 2).toLowerCase();
  const supportedLangs = ["fr", "en", "es", "ar"];
  const initialLang = localStorage.getItem("eMETA_lang") || (supportedLangs.includes(browserLang) ? browserLang : "fr");

  // --- Application de la langue ----------------------------------
  const langSelect = document.getElementById("langSelect");
  if (langSelect) langSelect.value = initialLang;
  setLanguage(initialLang);

  // --- Changement manuel -----------------------------------------
  if (langSelect) {
    langSelect.addEventListener("change", () => {
      const lang = langSelect.value;
      localStorage.setItem("eMETA_lang", lang);
      setLanguage(lang);
    });
  }

  // --- Fonction principale de traduction --------------------------
  function setLanguage(lang) {
    const dict = translations[lang] || translations.fr;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.title = dict["page_title"] || "e-META";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    // Traduction des <option> dans la liste des domaines
    const domainSelect = document.getElementById("domain");
    if (domainSelect) {
      Array.from(domainSelect.options).forEach(opt => {
        const key = `dom.${opt.value}`;
        if (dict[key]) opt.textContent = dict[key];
      });
    }
  }

  // --- Bouton WhatsApp --------------------------------------------
  const whatsappBtn = document.getElementById("whatsappBtn");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      const phone = (document.getElementById("phone")?.value || "").replace(/\D/g, "");
      const msg = encodeURIComponent("Bonjour, je souhaite soumettre une requête via e-META.");
      const url = phone
        ? `https://wa.me/${phone}?text=${msg}`
        : `https://wa.me/?text=${msg}`;
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
