/* ============================================================
   e-META — Script multilingue dynamique (FR / EN / ES / AR)
   Version : 2.3
   Auteur  : Abdoulaye FALL & e-META Dev
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  // --- Dictionnaire multilingue principal -------------------------------
  const translations = {
    fr: {
      "choose": "— Choisir —",
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
      "placeholder_expected": "Ex : Dossier de financement, plan stratégique, prototype...",
      "placeholder_details": "Décrivez le contexte, les contraintes ou vos attentes principales...",
      "placeholder_budget": "Montant estimé",
      "placeholder_name": "Votre nom complet",
      "placeholder_email": "exemple@mail.com",
      "placeholder_phone": "+221...",
      "about_text": "e-META structure vos demandes et produit des synthèses claires et exploitables selon votre domaine.",
      "faq_q1": "Comment fonctionne e-META ?",
      "faq_a1": "Remplissez la requête personnalisée. e-META analyse vos données et génère une synthèse stratégique multilingue.",
      "tagline": "Simplement. Intelligemment.",
      // Devises
      "cur.USD": "USD — Dollar américain",
      "cur.EUR": "EUR — Euro",
      "cur.GBP": "GBP — Livre sterling",
      "cur.XOF": "XOF — Franc CFA (UEMOA)",
      "cur.XAF": "XAF — Franc CFA (CEMAC)",
      "cur.CFA": "CFA — Franc CFA",
      "cur.JPY": "JPY — Yen japonais",
      "cur.CNY": "CNY — Yuan chinois",
      "cur.CAD": "CAD — Dollar canadien",
      "cur.AUD": "AUD — Dollar australien"
    },

    en: {
      "choose": "— Choose —",
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
      "placeholder_expected": "Ex: Funding file, strategic plan, prototype...",
      "placeholder_details": "Describe the context, constraints, or expectations...",
      "placeholder_budget": "Estimated amount",
      "placeholder_name": "Your full name",
      "placeholder_email": "example@mail.com",
      "placeholder_phone": "+221...",
      "about_text": "e-META structures your requests and produces clear, actionable summaries adapted to your field.",
      "faq_q1": "How does e-META work?",
      "faq_a1": "Fill in the custom request. e-META analyzes your data and generates a multilingual strategic summary.",
      "tagline": "Simply. Intelligently.",
      // Currencies
      "cur.USD": "USD — US Dollar",
      "cur.EUR": "EUR — Euro",
      "cur.GBP": "GBP — Pound Sterling",
      "cur.XOF": "XOF — West African CFA Franc",
      "cur.XAF": "XAF — Central African CFA Franc",
      "cur.CFA": "CFA — CFA Franc",
      "cur.JPY": "JPY — Japanese Yen",
      "cur.CNY": "CNY — Chinese Yuan",
      "cur.CAD": "CAD — Canadian Dollar",
      "cur.AUD": "AUD — Australian Dollar"
    },

    es: {
      "choose": "— Elegir —",
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
      "mode_display": "Visualización",
      "btn_send": "Enviar solicitud",
      "btn_reset": "Restablecer",
      "placeholder_expected": "Ej: Plan estratégico, expediente de financiación...",
      "placeholder_details": "Describe el contexto, limitaciones o expectativas...",
      "placeholder_budget": "Monto estimado",
      "placeholder_name": "Tu nombre completo",
      "placeholder_email": "ejemplo@mail.com",
      "placeholder_phone": "+221...",
      "about_text": "e-META estructura tus solicitudes y genera resúmenes claros y prácticos según tu campo.",
      "faq_q1": "¿Cómo funciona e-META?",
      "faq_a1": "Completa la solicitud personalizada. e-META analiza tus datos y genera un resumen estratégico multilingüe.",
      "tagline": "Simplemente. Inteligentemente.",
      // Monedas
      "cur.USD": "USD — Dólar estadounidense",
      "cur.EUR": "EUR — Euro",
      "cur.GBP": "GBP — Libra esterlina",
      "cur.XOF": "XOF — Franco CFA (UEMOA)",
      "cur.XAF": "XAF — Franco CFA (CEMAC)",
      "cur.CFA": "CFA — Franco CFA",
      "cur.JPY": "JPY — Yen japonés",
      "cur.CNY": "CNY — Yuan chino",
      "cur.CAD": "CAD — Dólar canadiense",
      "cur.AUD": "AUD — Dólar australiano"
    },

    ar: {
      "choose": "— اختر —",
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
      "placeholder_expected": "مثلاً: خطة استراتيجية، مشروع تمويل...",
      "placeholder_details": "اشرح السياق أو القيود أو التوقعات...",
      "placeholder_budget": "المبلغ المقدر",
      "placeholder_name": "اسمك الكامل",
      "placeholder_email": "example@mail.com",
      "placeholder_phone": "+221...",
      "about_text": "يقوم e-META بتنظيم الطلبات وإنشاء ملخصات واضحة وقابلة للتنفيذ وفقاً للمجال.",
      "faq_q1": "كيف يعمل e-META؟",
      "faq_a1": "املأ الطلب المخصص. يقوم e-META بتحليل بياناتك وإنشاء ملخص استراتيجي متعدد اللغات.",
      "tagline": "ببساطة. بذكاء.",
      // العملات
      "cur.USD": "USD — دولار أمريكي",
      "cur.EUR": "EUR — يورو",
      "cur.GBP": "GBP — جنيه إسترليني",
      "cur.XOF": "XOF — فرنك غرب أفريقي (UEMOA)",
      "cur.XAF": "XAF — فرنك وسط أفريقي (CEMAC)",
      "cur.CFA": "CFA — فرنك س ف ا",
      "cur.JPY": "JPY — ين ياباني",
      "cur.CNY": "CNY — يوان صيني",
      "cur.CAD": "CAD — دولار كندي",
      "cur.AUD": "AUD — دولار أسترالي"
    }
  };

  // --- Détection automatique de la langue du navigateur ----------
  const browserLang = navigator.language.substring(0, 2).toLowerCase();
  const supportedLangs = ["fr", "en", "es", "ar"];
  const initialLang = localStorage.getItem("eMETA_lang") || (supportedLangs.includes(browserLang) ? browserLang : "fr");

  const langSelect = document.getElementById("langSelect");
  if (langSelect) langSelect.value = initialLang;
  setLanguage(initialLang);

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

    // Traduction du placeholder "Choisir"
    const domainSelect = document.getElementById("domain");
    if (domainSelect) {
      const firstOption = domainSelect.options[0];
      firstOption.textContent = dict["choose"];
    }

    // Traduction des devises
    const currencySelect = document.getElementById("currency");
    if (currencySelect) {
      Array.from(currencySelect.options).forEach(opt => {
        const key = `cur.${opt.value}`;
        if (dict[key]) opt.textContent = dict[key];
      });
    }

    // Mise à jour des placeholders
    const placeholders = {
      expectedResult: "placeholder_expected",
      details: "placeholder_details",
      budget: "placeholder_budget",
      name: "placeholder_name",
      email: "placeholder_email",
      phone: "placeholder_phone"
    };
    for (const id in placeholders) {
      const el = document.getElementById(id);
      if (el && dict[placeholders[id]]) el.placeholder = dict[placeholders[id]];
    }
  }

  // --- Bouton WhatsApp --------------------------------------------
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
