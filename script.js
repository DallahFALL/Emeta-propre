/* =========================================
   e-META v5.0 – SCRIPT GLOBAL (STYLE A)
   - Multilingue FR/EN/ES/AR
   - WhatsApp + Email + Affichage direct
   - Webhook Make optionnel
   ========================================= */

const MAKE_WEBHOOK_URL =
  "https://hook.eu2.make.com/dagmll5s04nubg7dp2gujws72zzedvx2"; // adapte si besoin

let currentLang = "fr";

/* ---------- Configuration langues ---------- */

const LANG_CONFIG = {
  fr: {
    code: "FR",
    flag: "🇫🇷",
    whatsappNumber: "221782607212",
    defaultCurrency: "XOF",
    texts: {
      /* nav & titre */
      page_title_main: "e-META — Assistant IA Multilingue",
      nav_home: "Accueil",
      nav_about: "À propos",
      nav_faq: "FAQ",
      nav_contact: "Contact",
      nav_privacy: "Politique de confidentialité",

      /* hero */
      hero_title: "e-META — L’assistant IA pluridisciplinaire",
      hero_sub:
        "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",

      /* formulaire */
      form_title: "Requête personnalisée",
      label_theme: "Domaine / Thème",
      label_title: "Titre court de la décision",
      label_expected: "Résultat attendu",
      label_budget: "Budget indicatif",
      label_currency: "Devise",
      label_fullname: "Nom complet",
      label_phone: "Téléphone (WhatsApp)",
      label_email: "Email",
      label_details: "Détails / Contexte",
      label_file: "Lien fichier (optionnel)",

      legend_delivery: "Mode de restitution",
      delivery_whatsapp: "WhatsApp",
      delivery_email: "Email",
      delivery_display: "Affichage direct",

      btn_send: "Envoyer la requête",
      btn_reset: "Réinitialiser",

      /* sections */
      about_title: "À propos",
      about_body:
        "e-META structure les demandes et produit une synthèse stratégique adaptée au contexte.",
      faq_title: "FAQ",
      faq_q1: "Comment fonctionne e-META ?",
      faq_a1:
        "Remplissez le formulaire et recevez une analyse intelligente selon le mode de restitution choisi.",
      contact_title: "Contact",
      contact_emailLabel: "Email :",

      footer: "© 2025 e-META • Simplement. Intelligemment.",

      /* WhatsApp */
      whatsapp_greeting:
        "Bonjour, je souhaite une assistance via e-META pour une nouvelle requête.",

      /* Privacy */
      privacy_title: "Politique de confidentialité – e-META",
      privacy_h1: "Politique de confidentialité – e-META",
      privacy_updated: "Dernière mise à jour :",
      privacy_1_title: "1. Données collectées",
      privacy_1_1: "Identité : nom et prénom",
      privacy_1_2: "Coordonnées : email, WhatsApp",
      privacy_1_3:
        "Informations de contexte : domaine, titre du projet, objectifs, contraintes",
      privacy_1_4: "Budget : montant + devise",
      privacy_1_5:
        "Informations complémentaires : délai, urgence, lien fichier et préférences de restitution",
      privacy_2_title: "2. Finalité du traitement",
      privacy_2_text:
        "Vos données servent uniquement à générer une analyse personnalisée via IA. Elles ne sont jamais vendues ni partagées.",
      privacy_3_title: "3. Durée de conservation",
      privacy_3_text:
        "Les données sont conservées uniquement le temps nécessaire à l’analyse, puis supprimées ou anonymisées.",
      privacy_4_title: "4. Sécurité",
      privacy_4_text:
        "e-META applique des mesures avancées pour protéger vos données (chiffrement, accès restreints, stockage sécurisé).",
      privacy_5_title: "5. Vos droits",
      privacy_5_text:
        "Vous pouvez demander la suppression de vos données à tout moment en écrivant à contact@e-meta.app."
    },
    placeholders: {
      decisionTitle: "Ex : Étude de faisabilité, stratégie, diagnostic…",
      expected: "Ex : Dossier de financement, plan stratégique, prototype…",
      budget: "Montant estimé",
      fullname: "Votre nom complet",
      phone: "+221…",
      email: "exemple@mail.com",
      details:
        "Décrivez le contexte, les contraintes ou les priorités importantes…",
      filelink: "URL Google Drive, PDF, document en ligne…"
    },
    themes: [
      "— Domaine —",
      "Agriculture",
      "Transport",
      "Énergie",
      "Finances & Banque",
      "Immobilier",
      "Technologie & IA",
      "Éducation & Formation",
      "Santé",
      "Industrie & Production",
      "Services",
      "Entrepreneuriat & Startups",
      "Projets publics / ONG",
      "Stratégie & Gouvernance",
      "Autre"
    ],
    currencies: [
      { value: "XOF", label: "XOF — Franc CFA" },
      { value: "EUR", label: "EUR — Euro" },
      { value: "USD", label: "USD — Dollar américain" },
      { value: "GBP", label: "GBP — Livre sterling" },
      { value: "CNY", label: "CNY — Yuan chinois" }
    ]
  },

  en: {
    code: "EN",
    flag: "🇬🇧",
    whatsappNumber: "221782607212",
    defaultCurrency: "USD",
    texts: {
      page_title_main: "e-META — Multilingual AI Assistant",
      nav_home: "Home",
      nav_about: "About",
      nav_faq: "FAQ",
      nav_contact: "Contact",
      nav_privacy: "Privacy policy",

      hero_title: "e-META — The Multidisciplinary AI Assistant",
      hero_sub:
        "Smart form to analyze, diagnose and recommend the most suitable solutions.",

      form_title: "Custom request",
      label_theme: "Domain / Topic",
      label_title: "Decision short title",
      label_expected: "Expected result",
      label_budget: "Indicative budget",
      label_currency: "Currency",
      label_fullname: "Full name",
      label_phone: "Phone (WhatsApp)",
      label_email: "Email",
      label_details: "Details / Context",
      label_file: "File link (optional)",

      legend_delivery: "Delivery mode",
      delivery_whatsapp: "WhatsApp",
      delivery_email: "Email",
      delivery_display: "Direct display",

      btn_send: "Send request",
      btn_reset: "Reset",

      about_title: "About",
      about_body:
        "e-META structures your requests and produces a strategic summary tailored to your context.",
      faq_title: "FAQ",
      faq_q1: "How does e-META work?",
      faq_a1:
        "Fill in the form and receive an intelligent analysis using your preferred output channel.",
      contact_title: "Contact",
      contact_emailLabel: "Email:",

      footer: "© 2025 e-META • Simply. Intelligently.",

      whatsapp_greeting:
        "Hello, I would like support from e-META for a new request.",

      privacy_title: "Privacy policy – e-META",
      privacy_h1: "Privacy policy – e-META",
      privacy_updated: "Last update:",
      privacy_1_title: "1. Data collected",
      privacy_1_1: "Identity: first and last name",
      privacy_1_2: "Contact details: email, WhatsApp",
      privacy_1_3:
        "Context information: domain, project title, objectives, constraints",
      privacy_1_4: "Budget: amount + currency",
      privacy_1_5:
        "Additional information: deadline, urgency, file link and delivery preferences",
      privacy_2_title: "2. Purpose of processing",
      privacy_2_text:
        "Your data is only used to generate a personalized AI-powered analysis. It is never sold or shared.",
      privacy_3_title: "3. Retention period",
      privacy_3_text:
        "Data is stored only for the time required to perform the analysis, then deleted or anonymized.",
      privacy_4_title: "4. Security",
      privacy_4_text:
        "e-META applies advanced measures to protect your data (encryption, restricted access, secure storage).",
      privacy_5_title: "5. Your rights",
      privacy_5_text:
        "You can request the deletion of your data at any time by writing to contact@e-meta.app."
    },
    placeholders: {
      decisionTitle: "Ex: Feasibility study, strategy, diagnosis…",
      expected: "Ex: Funding file, strategic plan, prototype...",
      budget: "Estimated amount",
      fullname: "Your full name",
      phone: "+221…",
      email: "example@mail.com",
      details:
        "Describe the context, constraints or key priorities for your request…",
      filelink: "Google Drive URL, PDF, online document…"
    },
    themes: [
      "— Domain —",
      "Agriculture",
      "Transport",
      "Energy",
      "Finance & Banking",
      "Real Estate",
      "Technology & AI",
      "Education & Training",
      "Health",
      "Industry & Manufacturing",
      "Services",
      "Entrepreneurship & Startups",
      "Public / NGO projects",
      "Strategy & Governance",
      "Other"
    ],
    currencies: [
      { value: "USD", label: "USD — US Dollar" },
      { value: "EUR", label: "EUR — Euro" },
      { value: "GBP", label: "GBP — Pound sterling" },
      { value: "XOF", label: "XOF — West African CFA" },
      { value: "CNY", label: "CNY — Chinese Yuan" }
    ]
  },

  es: {
    code: "ES",
    flag: "🇪🇸",
    whatsappNumber: "221782607212",
    defaultCurrency: "EUR",
    texts: {
      page_title_main: "e-META — Asistente de IA multilingüe",
      nav_home: "Inicio",
      nav_about: "Acerca de",
      nav_faq: "FAQ",
      nav_contact: "Contacto",
      nav_privacy: "Política de privacidad",

      hero_title: "e-META — El asistente de IA multidisciplinario",
      hero_sub:
        "Formulario inteligente para analizar, diagnosticar y recomendar soluciones adecuadas.",

      form_title: "Solicitud personalizada",
      label_theme: "Dominio / Tema",
      label_title: "Título breve de la decisión",
      label_expected: "Resultado esperado",
      label_budget: "Presupuesto indicativo",
      label_currency: "Divisa",
      label_fullname: "Nombre completo",
      label_phone: "Teléfono (WhatsApp)",
      label_email: "Email",
      label_details: "Detalles / Contexto",
      label_file: "Enlace de archivo (opcional)",

      legend_delivery: "Modo de entrega",
      delivery_whatsapp: "WhatsApp",
      delivery_email: "Email",
      delivery_display: "Visualización directa",

      btn_send: "Enviar solicitud",
      btn_reset: "Restablecer",

      about_title: "Acerca de",
      about_body:
        "e-META estructura las solicitudes y produce una síntesis estratégica adaptada al contexto.",
      faq_title: "FAQ",
      faq_q1: "¿Cómo funciona e-META?",
      faq_a1:
        "Complete el formulario y reciba un análisis inteligente en el canal de entrega elegido.",
      contact_title: "Contacto",
      contact_emailLabel: "Email:",

      footer: "© 2025 e-META • Simplemente. Inteligentemente.",

      whatsapp_greeting:
        "Hola, me gustaría recibir apoyo de e-META para una nueva solicitud.",

      privacy_title: "Política de privacidad – e-META",
      privacy_h1: "Política de privacidad – e-META",
      privacy_updated: "Última actualización:",
      privacy_1_title: "1. Datos recopilados",
      privacy_1_1: "Identidad: nombre y apellidos",
      privacy_1_2: "Datos de contacto: email, WhatsApp",
      privacy_1_3:
        "Información de contexto: dominio, título del proyecto, objetivos, restricciones",
      privacy_1_4: "Presupuesto: importe + divisa",
      privacy_1_5:
        "Información adicional: plazo, urgencia, enlace de archivo y preferencias de entrega",
      privacy_2_title: "2. Finalidad del tratamiento",
      privacy_2_text:
        "Sus datos se usan únicamente para generar un análisis personalizado mediante IA. Nunca se venden ni se comparten.",
      privacy_3_title: "3. Plazo de conservación",
      privacy_3_text:
        "Los datos se conservan sólo durante el tiempo necesario para el análisis y luego se eliminan o anonimizan.",
      privacy_4_title: "4. Seguridad",
      privacy_4_text:
        "e-META aplica medidas avanzadas para proteger sus datos (cifrado, accesos restringidos, almacenamiento seguro).",
      privacy_5_title: "5. Sus derechos",
      privacy_5_text:
        "Puede solicitar la eliminación de sus datos en cualquier momento escribiendo a contact@e-meta.app."
    },
    placeholders: {
      decisionTitle: "Ej.: estudio de viabilidad, estrategia, diagnóstico…",
      expected:
        "Ej.: expediente de financiación, plan estratégico, prototipo...",
      budget: "Monto estimado",
      fullname: "Su nombre completo",
      phone: "+221…",
      email: "ejemplo@mail.com",
      details:
        "Describa el contexto, las restricciones o las prioridades importantes…",
      filelink: "URL de Google Drive, PDF, documento en línea…"
    },
    themes: [
      "— Dominio —",
      "Agricultura",
      "Transporte",
      "Energía",
      "Finanzas y banca",
      "Bienes raíces",
      "Tecnología e IA",
      "Educación y formación",
      "Salud",
      "Industria y producción",
      "Servicios",
      "Emprendimiento y startups",
      "Proyectos públicos / ONG",
      "Estrategia y gobernanza",
      "Otro"
    ],
    currencies: [
      { value: "EUR", label: "EUR — Euro" },
      { value: "USD", label: "USD — Dólar estadounidense" },
      { value: "GBP", label: "GBP — Libra esterlina" },
      { value: "XOF", label: "XOF — Franco CFA" },
      { value: "CNY", label: "CNY — Yuan chino" }
    ]
  },

  ar: {
    code: "AR",
    flag: "🇸🇦",
    whatsappNumber: "221782607212",
    defaultCurrency: "XOF",
    texts: {
      page_title_main: "e-META — المساعد الذكي متعدّد اللغات",
      nav_home: "الرئيسية",
      nav_about: "حول",
      nav_faq: "الأسئلة الشائعة",
      nav_contact: "اتصال",
      nav_privacy: "سياسة الخصوصية",

      hero_title: "e-META — المساعد الذكي متعدّد التخصّصات",
      hero_sub:
        "نموذج ذكي لتحليل طلبك وتشخيصه واقتراح حلول مناسبة حسب السياق.",

      form_title: "طلب مخصّص",
      label_theme: "المجال / الموضوع",
      label_title: "عنوان مختصر للقرار",
      label_expected: "النتيجة المتوقّعة",
      label_budget: "الميزانية التقديرية",
      label_currency: "العملة",
      label_fullname: "الاسم الكامل",
      label_phone: "الهاتف (واتساب)",
      label_email: "البريد الإلكتروني",
      label_details: "التفاصيل / السياق",
      label_file: "رابط الملف (اختياري)",

      legend_delivery: "طريقة الإرسال",
      delivery_whatsapp: "واتساب",
      delivery_email: "البريد الإلكتروني",
      delivery_display: "عرض مباشر",

      btn_send: "إرسال الطلب",
      btn_reset: "إعادة التهيئة",

      about_title: "حول",
      about_body:
        "يقوم e-META بتنظيم طلبك وإنتاج خلاصة استراتيجية مناسبة لسياقك.",
      faq_title: "الأسئلة الشائعة",
      faq_q1: "كيف يعمل e-META؟",
      faq_a1:
        "املأ النموذج واختر طريقة الاستلام، وسيولّد e-META خلاصة ذكية ملائمة لوضعك.",
      contact_title: "اتصال",
      contact_emailLabel: "البريد الإلكتروني:",

      footer: "© 2025 e-META • ببساطة. بذكاء.",

      whatsapp_greeting:
        "مرحباً، أود الحصول على مساعدة من e-META بخصوص طلب جديد.",

      privacy_title: "سياسة الخصوصية – e-META",
      privacy_h1: "سياسة الخصوصية – e-META",
      privacy_updated: "آخر تحديث:",
      privacy_1_title: "1. البيانات التي يتم جمعها",
      privacy_1_1: "الهوية: الاسم واللقب",
      privacy_1_2: "بيانات الاتصال: البريد الإلكتروني، واتساب",
      privacy_1_3:
        "معلومات السياق: المجال، عنوان المشروع، الأهداف، القيود",
      privacy_1_4: "الميزانية: المبلغ + العملة",
      privacy_1_5:
        "معلومات إضافية: الأجل، درجة الاستعجال، رابط الملف وتفضيلات الإرسال",
      privacy_2_title: "2. هدف المعالجة",
      privacy_2_text:
        "تُستخدم بياناتك فقط لإنتاج تحليل شخصي عبر الذكاء الاصطناعي، ولا تُباع أو تُشارك أبداً.",
      privacy_3_title: "3. مدة الاحتفاظ بالبيانات",
      privacy_3_text:
        "تُحفظ البيانات فقط للمدّة اللازمة لإجراء التحليل ثم يتم حذفها أو إخفاء هويتها.",
      privacy_4_title: "4. الأمان",
      privacy_4_text:
        "يعتمد e-META تدابير متقدّمة لحماية بياناتك (تشفير، وصول مقيّد، تخزين آمن).",
      privacy_5_title: "5. حقوقك",
      privacy_5_text:
        "يمكنك طلب حذف بياناتك في أي وقت عبر مراسلة contact@e-meta.app."
    },
    placeholders: {
      decisionTitle: "مثال: دراسة جدوى، خطة استراتيجية، تشخيص…",
      expected: "مثال: ملف تمويل، خطة استراتيجية، نموذج أولي…",
      budget: "المبلغ التقديري",
      fullname: "اسمك الكامل",
      phone: "+221…",
      email: "example@mail.com",
      details: "اشرح السياق والقيود أو الأولويات المهمة…",
      filelink: "رابط Google Drive أو PDF أو وثيقة إلكترونية…"
    },
    themes: [
      "— اختر مجالاً —",
      "الزراعة",
      "النقل",
      "الطاقة",
      "المالية والبنوك",
      "العقار",
      "التقنية والذكاء الاصطناعي",
      "التعليم والتدريب",
      "الصحة",
      "الصناعة والإنتاج",
      "الخدمات",
      "الريادة والشركات الناشئة",
      "المشاريع العامة / المنظمات",
      "الاستراتيجية والحوكمة",
      "أخرى"
    ],
    currencies: [
      { value: "XOF", label: "XOF — فرنك إفريقي" },
      { value: "USD", label: "USD — دولار أمريكي" },
      { value: "EUR", label: "EUR — يورو" },
      { value: "GBP", label: "GBP — جنيه إسترليني" },
      { value: "CNY", label: "CNY — يوان صيني" }
    ]
  }
};

/* ---------- Helpers ---------- */

function populateSelect(selectEl, options, selectedValue) {
  if (!selectEl) return;
  selectEl.innerHTML = "";
  options.forEach((opt) => {
    const o = document.createElement("option");
    o.value = opt.value || opt;
    o.textContent = opt.label || opt;
    if (selectedValue && selectedValue === o.value) {
      o.selected = true;
    }
    selectEl.appendChild(o);
  });
}

function buildFormSummary(lang) {
  const cfg = LANG_CONFIG[lang] || LANG_CONFIG.fr;
  const t = cfg.texts;

  const theme = document.getElementById("themeSelect")?.value || "";
  const decisionTitle = document.getElementById("decisionTitle")?.value || "";
  const expected = document.getElementById("expected")?.value || "";
  const budget = document.getElementById("budget")?.value || "";
  const currency = document.getElementById("currencySelect")?.value || "";
  const fullname = document.getElementById("fullname")?.value || "";
  const phone = document.getElementById("phone")?.value || "";
  const email = document.getElementById("email")?.value || "";
  const details = document.getElementById("details")?.value || "";
  const filelink = document.getElementById("filelink")?.value || "";

  const lines = [
    `${t.label_theme}: ${theme || "-"}`,
    `${t.label_title}: ${decisionTitle || "-"}`,
    `${t.label_expected}: ${expected || "-"}`,
    `${t.label_budget}: ${budget || "-"} ${currency}`,
    `${t.label_fullname}: ${fullname || "-"}`,
    `${t.label_phone}: ${phone || "-"}`,
    `${t.label_email}: ${email || "-"}`,
    `${t.label_details}:`,
    details || "-",
    "",
    `${t.label_file}: ${filelink || "-"}`
  ];

  return lines.join("\n");
}

function buildWhatsappUrl(lang, isHeaderButton = false) {
  const cfg = LANG_CONFIG[lang] || LANG_CONFIG.fr;
  const number = (cfg.whatsappNumber || "").replace(/\D/g, "");
  if (!number) return null;

  let msg;
  if (isHeaderButton) {
    msg = cfg.texts.whatsapp_greeting;
  } else {
    const summary = buildFormSummary(lang);
    msg = `${cfg.texts.whatsapp_greeting}\n\n${summary}`;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}

/* Envoi vers Make (silencieux) */

function sendToMake(payload) {
  if (!MAKE_WEBHOOK_URL) return;
  try {
    fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    }).catch((err) => console.error("Erreur envoi Make :", err));
  } catch (e) {
    console.error("Erreur fetch Make :", e);
  }
}

/* ---------- Application de la langue ---------- */

function applyLanguage(lang) {
  const cfg = LANG_CONFIG[lang];
  if (!cfg) return;
  currentLang = lang;

  // html lang + RTL
  document.documentElement.lang = lang === "ar" ? "ar" : lang;
  document.body.classList.toggle("rtl", lang === "ar");

  const t = cfg.texts;

  // Tous les éléments data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = t[key];
    if (!value) return;

    if (el.tagName === "TITLE") {
      el.textContent = value;
    } else {
      el.textContent = value;
    }
  });

  // Bouton WhatsApp texte (facultatif)
  const waBtn = document.getElementById("whatsappBtn");
  if (waBtn) waBtn.textContent = "WhatsApp";

  // Placeholders
  const p = cfg.placeholders;
  const decisionTitle = document.getElementById("decisionTitle");
  if (decisionTitle) decisionTitle.placeholder = p.decisionTitle || "";
  const expected = document.getElementById("expected");
  if (expected) expected.placeholder = p.expected || "";
  const budget = document.getElementById("budget");
  if (budget) budget.placeholder = p.budget || "";
  const fullname = document.getElementById("fullname");
  if (fullname) fullname.placeholder = p.fullname || "";
  const phone = document.getElementById("phone");
  if (phone) phone.placeholder = p.phone || "";
  const email = document.getElementById("email");
  if (email) email.placeholder = p.email || "";
  const details = document.getElementById("details");
  if (details) details.placeholder = p.details || "";
  const filelink = document.getElementById("filelink");
  if (filelink) filelink.placeholder = p.filelink || "";

  // Listes (thèmes / devises)
  const themeSelect = document.getElementById("themeSelect");
  if (themeSelect)
    populateSelect(
      themeSelect,
      cfg.themes.map((label) => ({ value: label, label }))
    );

  const currencySelect = document.getElementById("currencySelect");
  if (currencySelect)
    populateSelect(currencySelect, cfg.currencies, cfg.defaultCurrency);

  // Texte du footer (si id présent)
  const footerText = document.getElementById("footerText");
  if (footerText && t.footer) footerText.textContent = t.footer;

  // Flag + code
  const langFlag = document.getElementById("langFlag");
  const langCode = document.getElementById("langCode");
  if (langFlag) langFlag.textContent = cfg.flag;
  if (langCode) langCode.textContent = cfg.code;
}

/* ---------- Wiring DOM ---------- */

document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("burgerBtn");
  const mainNav = document.getElementById("mainNav");
  const langToggle = document.getElementById("langToggle");
  const langMenu = document.getElementById("langMenu");
  const whatsappBtn = document.getElementById("whatsappBtn");
  const sendBtn = document.getElementById("sendBtn");
  const resetBtn = document.getElementById("resetBtn");
  const form = document.getElementById("requestForm");

  /* --- Burger menu --- */
  if (burgerBtn && mainNav) {
    burgerBtn.addEventListener("click", () => {
      burgerBtn.classList.toggle("active");
      mainNav.classList.toggle("open");
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        burgerBtn.classList.remove("active");
        mainNav.classList.remove("open");
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        burgerBtn.classList.remove("active");
        mainNav.classList.remove("open");
      }
    });
  }

  /* --- Sélecteur de langue --- */
  if (langToggle && langMenu) {
    langToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      langMenu.classList.toggle("show");
    });

    langMenu.querySelectorAll("li").forEach((item) => {
      item.addEventListener("click", () => {
        const lang = item.dataset.lang;
        applyLanguage(lang);
        langMenu.classList.remove("show");
      });
    });

    document.addEventListener("click", (e) => {
      if (!langMenu.contains(e.target) && e.target !== langToggle) {
        langMenu.classList.remove("show");
      }
    });
  }

  /* --- Bouton WhatsApp (header) --- */
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      const url = buildWhatsappUrl(currentLang, true);
      if (url) window.open(url, "_blank");
    });
  }

  /* --- Envoi formulaire --- */
  if (sendBtn && form) {
    sendBtn.addEventListener("click", () => {
      const delivery =
        document.querySelector('input[name="delivery"]:checked')?.value ||
        "whatsapp";

      const summary = buildFormSummary(currentLang);

      const payload = {
        lang: currentLang,
        theme: document.getElementById("themeSelect")?.value || "",
        decisionTitle: document.getElementById("decisionTitle")?.value || "",
        expected: document.getElementById("expected")?.value || "",
        budget: document.getElementById("budget")?.value || "",
        currency: document.getElementById("currencySelect")?.value || "",
        fullname: document.getElementById("fullname")?.value || "",
        phone: document.getElementById("phone")?.value || "",
        email: document.getElementById("email")?.value || "",
        details: document.getElementById("details")?.value || "",
        filelink: document.getElementById("filelink")?.value || "",
        deliveryMode: delivery,
        summary
      };

      // Envoi silencieux vers Make
      sendToMake(payload);

      if (delivery === "whatsapp") {
        const url = buildWhatsappUrl(currentLang, false);
        if (url) window.open(url, "_blank");
      } else if (delivery === "email") {
        const subjectMap = {
          fr: "Nouvelle requête e-META",
          en: "New e-META request",
          es: "Nueva solicitud e-META",
          ar: "طلب جديد عبر e-META"
        };
        const subject =
          subjectMap[currentLang] || subjectMap.fr || "e-META request";
        const mailto = `mailto:contact@e-meta.app?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(summary)}`;
        window.location.href = mailto;
      } else {
        // Affichage direct
        const win = window.open("", "_blank", "width=600,height=700");
        if (win) {
          win.document.write(
            `<pre style="font-family:system-ui, sans-serif; white-space:pre-wrap; padding:16px;">${summary}</pre>`
          );
        } else {
          alert(summary);
        }
      }
    });
  }

  /* --- Reset formulaire --- */
  if (resetBtn && form) {
    resetBtn.addEventListener("click", () => {
      form.reset();
      // réapplique placeholders + listes
      applyLanguage(currentLang || "fr");
    });
  }

  // Langue par défaut
  applyLanguage("fr");
});
