/* =========================
   e-META – script v3.8
   ========================= */

// --- Config langues (i18n) ---
const I18N = {
  fr: {
    _flag: "🇫🇷", _code: "FR", _dir: "ltr", _defaultCurrency: "XOF",
    nav_home: "Accueil", nav_about: "À propos", nav_faq: "FAQ", nav_contact: "Contact",
    hero_title: "e-META — L’assistant IA pluridisciplinaire",
    hero_sub: "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",
    form_title: "Requête personnalisée",
    label_domain: "Domaine / Thème",
    label_expected: "Résultat attendu",
    label_budget: "Budget indicatif",
    label_currency: "Devise",
    label_fullname: "Nom complet",
    label_phone: "Téléphone (WhatsApp)",
    label_email: "Email",
    label_details: "Détails / Contexte",
    label_delivery: "Mode de restitution",
    delivery_whatsapp: "WhatsApp",
    delivery_email: "Email",
    delivery_display: "Affichage direct",
    btn_send: "Envoyer la requête",
    btn_reset: "Réinitialiser",
    about_title: "À propos",
    about_body: "e-META structure les demandes et produit une synthèse stratégique adaptée au contexte.",
    faq_q1: "Comment fonctionne e-META ?",
    faq_a1: "Remplissez le formulaire, e-META analyse vos données, propose une synthèse et restitue selon le mode choisi.",
    contact_title: "Contact",
    contact_label: "Email :",
    footer: "© 2025 e-META • Simplement. Intelligemment.",
    placeholders: {
      expected: "Ex : Dossier de financement, plan stratégique, prototype…",
      budget: "Montant estimé",
      fullname: "Votre nom complet",
      phone: "+221…",
      email: "exemple@mail.com",
      details: "Décrivez le contexte, contraintes ou priorités…"
    },
    themes: [
      "— Domaine —","Agriculture","Environnement","Énergie","Commerce",
      "E-commerce","Finance","FinTech","Financement","Marketing",
      "Technologie","Éducation","Santé","Transport","Immobilier"
    ],
    currencies: {
      XOF: "XOF — Franc CFA", EUR: "EUR — Euro", USD: "USD — US Dollar",
      GBP: "GBP — British Pound", MAD: "MAD — Dirham", NGN: "NGN — Naira",
      GHS: "GHS — Cedi", XAF: "XAF — CEMAC Franc", DZD: "DZD — Dinar"
    }
  },
  en: {
    _flag: "🇬🇧", _code: "EN", _dir: "ltr", _defaultCurrency: "USD",
    nav_home: "Home", nav_about: "About", nav_faq: "FAQ", nav_contact: "Contact",
    hero_title: "e-META — The Multidisciplinary AI Assistant",
    hero_sub: "Smart form to analyze, diagnose and recommend suitable solutions.",
    form_title: "Custom Request",
    label_domain: "Domain / Topic",
    label_expected: "Expected result",
    label_budget: "Indicative budget",
    label_currency: "Currency",
    label_fullname: "Full name",
    label_phone: "Phone (WhatsApp)",
    label_email: "Email",
    label_details: "Details / Context",
    label_delivery: "Delivery mode",
    delivery_whatsapp: "WhatsApp",
    delivery_email: "Email",
    delivery_display: "Direct display",
    btn_send: "Send request",
    btn_reset: "Reset",
    about_title: "About",
    about_body: "e-META structures requests and produces a strategic synthesis adapted to the context.",
    faq_q1: "How does e-META work?",
    faq_a1: "Fill the form; e-META analyzes your data, proposes a synthesis and returns it via the chosen mode.",
    contact_title: "Contact",
    contact_label: "Email:",
    footer: "© 2025 e-META • Simply. Intelligently.",
    placeholders: {
      expected: "Ex: Funding file, strategic plan, prototype…",
      budget: "Estimated amount",
      fullname: "Your full name",
      phone: "+44…",
      email: "example@mail.com",
      details: "Describe context, constraints or priorities…"
    },
    themes: [
      "— Domain —","Agriculture","Environment","Energy","Trade",
      "E-commerce","Finance","FinTech","Funding","Marketing",
      "Technology","Education","Health","Transport","Real estate"
    ],
    currencies: {
      USD: "USD — US Dollar", EUR: "EUR — Euro", GBP: "GBP — British Pound",
      XOF: "XOF — West African CFA", NGN: "NGN — Naira", GHS: "GHS — Cedi",
      MAD: "MAD — Dirham", XAF: "XAF — Central African CFA", JPY: "JPY — Yen"
    }
  },
  es: {
    _flag: "🇪🇸", _code: "ES", _dir: "ltr", _defaultCurrency: "EUR",
    nav_home: "Inicio", nav_about: "Acerca de", nav_faq: "FAQ", nav_contact: "Contacto",
    hero_title: "e-META — El asistente de IA multidisciplinario",
    hero_sub: "Formulario inteligente para analizar, diagnosticar y recomendar soluciones adecuadas.",
    form_title: "Solicitud personalizada",
    label_domain: "Dominio / Tema",
    label_expected: "Resultado esperado",
    label_budget: "Presupuesto indicativo",
    label_currency: "Moneda",
    label_fullname: "Nombre completo",
    label_phone: "Teléfono (WhatsApp)",
    label_email: "Email",
    label_details: "Detalles / Contexto",
    label_delivery: "Modo de entrega",
    delivery_whatsapp: "WhatsApp",
    delivery_email: "Email",
    delivery_display: "Visualización directa",
    btn_send: "Enviar solicitud",
    btn_reset: "Restablecer",
    about_title: "Acerca de",
    about_body: "e-META estructura las solicitudes y produce una síntesis estratégica adaptada al contexto.",
    faq_q1: "¿Cómo funciona e-META?",
    faq_a1: "Complete el formulario; e-META analiza sus datos, propone una síntesis y la entrega según el modo elegido.",
    contact_title: "Contacto",
    contact_label: "Email:",
    footer: "© 2025 e-META • Simple. Inteligentemente.",
    placeholders: {
      expected: "Ej: Expediente de financiación, plan estratégico, prototipo…",
      budget: "Monto estimado",
      fullname: "Su nombre completo",
      phone: "+34…",
      email: "ejemplo@mail.com",
      details: "Describa el contexto, restricciones o prioridades…"
    },
    themes: [
      "— Dominio —","Agricultura","Medio ambiente","Energía","Comercio",
      "E-commerce","Finanzas","FinTech","Financiación","Marketing",
      "Tecnología","Educación","Salud","Transporte","Bienes raíces"
    ],
    currencies: {
      EUR: "EUR — Euro", USD: "USD — Dólar", GBP: "GBP — Libra",
      XOF: "XOF — Franco CFA", MXN: "MXN — Peso", ARS: "ARS — Peso Argentino",
      COP: "COP — Peso Colombiano", CLP: "CLP — Peso Chileno", BRL: "BRL — Real"
    }
  },
  ar: {
    _flag: "🇸🇦", _code: "AR", _dir: "rtl", _defaultCurrency: "SAR",
    nav_home: "الرئيسية", nav_about: "حول", nav_faq: "الأسئلة الشائعة", nav_contact: "اتصال",
    hero_title: "e-META — المساعد الذكي المتعدد المجالات",
    hero_sub: "نموذج ذكي للتحليل والتشخيص والتوصية بحلول مناسبة.",
    form_title: "طلب مخصص",
    label_domain: "المجال / الموضوع",
    label_expected: "النتيجة المتوقعة",
    label_budget: "الميزانية التقديرية",
    label_currency: "العملة",
    label_fullname: "الاسم الكامل",
    label_phone: "الهاتف (واتساب)",
    label_email: "البريد الإلكتروني",
    label_details: "التفاصيل / السياق",
    label_delivery: "طريقة الاسترجاع",
    delivery_whatsapp: "واتساب",
    delivery_email: "البريد",
    delivery_display: "عرض مباشر",
    btn_send: "إرسال الطلب",
    btn_reset: "إعادة الضبط",
    about_title: "حول",
    about_body: "يقوم e-META بهيكلة الطلبات وإنتاج تحليل استراتيجي مناسب للسياق.",
    faq_q1: "كيف يعمل e-META؟",
    faq_a1: "املأ النموذج، يحلل e-META بياناتك ويقدم خلاصة وفق طريقة الاسترجاع المختارة.",
    contact_title: "اتصال",
    contact_label: "البريد:",
    footer: "© 2025 e-META • ببساطة. بذكاء.",
    placeholders: {
      expected: "مثال: ملف تمويل، خطة إستراتيجية، نموذج أولي…",
      budget: "المبلغ التقديري",
      fullname: "اسمك الكامل",
      phone: "+966…",
      email: "example@mail.com",
      details: "صف السياق أو القيود أو الأولويات…"
    },
    themes: [
      "— اختر —","الزراعة","البيئة","الطاقة","التجارة",
      "التجارة الإلكترونية","المالية","التقنية المالية","التمويل","التسويق",
      "التكنولوجيا","التعليم","الصحة","النقل","العقارات"
    ],
    currencies: {
      SAR:"SAR — الريال السعودي", AED:"AED — الدرهم", QAR:"QAR — الريال القطري",
      MAD:"MAD — الدرهم المغربي", EGP:"EGP — الجنيه", DZD:"DZD — الدينار",
      TND:"TND — الدينار التونسي", USD:"USD — الدولار", EUR:"EUR — اليورو"
    }
  }
};

// WhatsApp routing per language/region (configurable)
const WHATSAPP_MAP = {
  fr: "221782607212",
  en: "447700900000",
  es: "34600000000",
  ar: "966500000000"
};

// --- DOM refs ---
const els = {
  langToggle: document.getElementById("langToggle"),
  langMenu: document.getElementById("langMenu"),
  langFlag: document.getElementById("langFlag"),
  langCode: document.getElementById("langCode"),
  burgerBtn: document.getElementById("burgerBtn"),
  mainNav: document.getElementById("mainNav"),
  themeSelect: document.getElementById("themeSelect"),
  currencySelect: document.getElementById("currencySelect"),
  expected: document.getElementById("expected"),
  budget: document.getElementById("budget"),
  fullname: document.getElementById("fullname"),
  phone: document.getElementById("phone"),
  email: document.getElementById("email"),
  details: document.getElementById("details"),
  sendBtn: document.getElementById("sendBtn"),
  whatsappBtn: document.getElementById("whatsappBtn"),
  footerText: document.getElementById("footerText")
};

let LANG = (localStorage.getItem("EMETA_LANG") || "fr");

// Populate selects
function fillThemesAndCurrencies() {
  const t = I18N[LANG];

  // Themes
  els.themeSelect.innerHTML = "";
  t.themes.forEach((label, idx) => {
    const opt = document.createElement("option");
    opt.value = idx === 0 ? "" : label;
    opt.textContent = label;
    els.themeSelect.appendChild(opt);
  });

  // Currencies
  els.currencySelect.innerHTML = "";
  Object.entries(t.currencies).forEach(([code, label]) => {
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = label;
    els.currencySelect.appendChild(opt);
  });

  // Default currency per language
  const def = t._defaultCurrency;
  if (def && t.currencies[def]) els.currencySelect.value = def;
}

// Apply language
function applyLang() {
  const dict = I18N[LANG];

  // Direction (RTL for Arabic)
  document.documentElement.lang = LANG;
  if (dict._dir === "rtl") document.body.classList.add("rtl");
  else document.body.classList.remove("rtl");

  // Nav & labels
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.getAttribute("data-i18n");
    if (dict[key]) node.textContent = dict[key];
  });

  // Placeholders
  els.expected.placeholder = dict.placeholders.expected;
  els.budget.placeholder = dict.placeholders.budget;
  els.fullname.placeholder = dict.placeholders.fullname;
  els.phone.placeholder = dict.placeholders.phone;
  els.email.placeholder = dict.placeholders.email;
  els.details.placeholder = dict.placeholders.details;

  // Footer
  els.footerText.textContent = dict.footer;

  // Flag
  els.langFlag.textContent = dict._flag;
  els.langCode.textContent = dict._code;

  fillThemesAndCurrencies();
}

// Language menu events
els.langToggle.addEventListener("click", () => {
  const open = els.langMenu.classList.toggle("show");
  els.langToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

els.langMenu.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", () => {
    LANG = li.dataset.lang;
    localStorage.setItem("EMETA_LANG", LANG);
    els.langMenu.classList.remove("show");
    applyLang();
  });
});

// Burger menu
els.burgerBtn.addEventListener("click", () => {
  els.mainNav.classList.toggle("show");
});

// WhatsApp routing
function buildWhatsappLink() {
  const num = WHATSAPP_MAP[LANG] || WHATSAPP_MAP.fr;
  const theme = els.themeSelect.value || "";
  const exp = els.expected.value || "";
  const bud = els.budget.value || "";
  const cur = els.currencySelect.value || "";
  const name = els.fullname.value || "";
  const phone = els.phone.value || "";
  const detail = els.details.value || "";

  const msg =
`e-META Request
Name: ${name}
Phone: ${phone}
Domain: ${theme}
Expected: ${exp}
Budget: ${bud} ${cur}
Details: ${detail}`;

  return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
}

// WhatsApp button header
els.whatsappBtn.addEventListener("click", () => {
  window.open(buildWhatsappLink(), "_blank");
});

// Send button (uses selected delivery mode)
els.sendBtn.addEventListener("click", () => {
  const mode = document.querySelector('input[name="delivery"]:checked')?.value || "whatsapp";
  if (mode === "whatsapp") {
    window.open(buildWhatsappLink(), "_blank");
  } else if (mode === "email") {
    const mailto = `mailto:contact@e-meta.app?subject=e-META Request&body=${encodeURIComponent(buildEmailBody())}`;
    window.location.href = mailto;
  } else {
    alert("✅ Requête prise en compte. Résultat affiché ici (mode démo).");
  }
});

function buildEmailBody(){
  const theme = els.themeSelect.value || "";
  const exp = els.expected.value || "";
  const bud = els.budget.value || "";
  const cur = els.currencySelect.value || "";
  const name = els.fullname.value || "";
  const phone = els.phone.value || "";
  const mail = els.email.value || "";
  const detail = els.details.value || "";
  return `Name: ${name}
Phone: ${phone}
Email: ${mail}
Domain: ${theme}
Expected: ${exp}
Budget: ${bud} ${cur}
Details:
${detail}
`;
}

// Init
applyLang();

// Close lang menu on outside click
document.addEventListener("click", (e) => {
  if (!e.target.closest(".langbox")) els.langMenu.classList.remove("show");
});
