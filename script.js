/* =====================================================
   e-META v4.4 – Multilingue, WhatsApp, Make & UI
   Compatible GitHub Pages, responsive OK
   ===================================================== */

/* ========= Webhook Make ========= */
// 👉 Tu peux changer l'URL ici si besoin
const MAKE_WEBHOOK_URL =
  "https://hook.eu2.make.com/h7dfvrhhe382dtbim745aj3pxh8k53sw";

/* ========= Config langues ========= */

const LANG_CONFIG = {
  fr: {
    code: "FR",
    flag: "🇫🇷",
    whatsappNumber: "221782607212",
    defaultCurrency: "XOF",
    texts: {
      nav_home: "Accueil",
      nav_about: "À propos",
      nav_faq: "FAQ",
      nav_contact: "Contact",
      hero_title: "e-META — L’assistant IA pluridisciplinaire",
      hero_sub:
        "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",
      form_title: "Requête personnalisée",

      label_theme: "Domaine / Thème",
      label_expected: "Résultat attendu",
      label_budget: "Budget indicatif",
      label_currency: "Devise",
      label_fullname: "Nom complet",
      label_phone: "Téléphone (WhatsApp)",
      label_email: "Email",
      label_details: "Détails / Contexte",

      legend_delivery: "Mode de restitution",
      delivery_whatsapp: "WhatsApp",
      delivery_email: "Email",
      delivery_display: "Affichage direct",

      btn_send: "Envoyer la requête",

      about_title: "À propos",
      about_body:
        "e-META structure les demandes et produit une synthèse stratégique adaptée au contexte.",
      faq_title: "FAQ",
      faq_q1: "Comment fonctionne e-META ?",
      faq_a1:
        "Remplissez le formulaire avec votre besoin, choisissez le mode de restitution et recevez une synthèse intelligente adaptée à votre contexte.",
      contact_title: "Contact",
      contact_emailLabel: "Email :",
      footer: "© 2025 e-META • Simplement. Intelligemment.",
      whatsapp_greeting:
        "Bonjour, je souhaite une assistance via e-META pour une nouvelle requête."
    },
    placeholders: {
      expected: "Ex : Dossier de financement, plan stratégique, prototype...",
      budget: "Montant estimé",
      fullname: "Votre nom complet",
      phone: "+221…",
      email: "exemple@mail.com",
      details:
        "Décrivez le contexte, les contraintes ou les priorités importantes…"
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
      nav_home: "Home",
      nav_about: "About",
      nav_faq: "FAQ",
      nav_contact: "Contact",
      hero_title: "e-META — The Multidisciplinary AI Assistant",
      hero_sub:
        "Smart form to analyze, diagnose and recommend suitable solutions.",
      form_title: "Custom Request",

      label_theme: "Domain / Topic",
      label_expected: "Expected result",
      label_budget: "Indicative budget",
      label_currency: "Currency",
      label_fullname: "Full name",
      label_phone: "Phone (WhatsApp)",
      label_email: "Email",
      label_details: "Details / Context",

      legend_delivery: "Delivery mode",
      delivery_whatsapp: "WhatsApp",
      delivery_email: "Email",
      delivery_display: "Direct display",

      btn_send: "Send request",

      about_title: "About",
      about_body:
        "e-META structures your request and produces a strategic summary adapted to your context.",
      faq_title: "FAQ",
      faq_q1: "How does e-META work?",
      faq_a1:
        "Fill in the form with your needs, choose how you want to receive the result, and e-META generates an intelligent summary.",
      contact_title: "Contact",
      contact_emailLabel: "Email:",
      footer: "© 2025 e-META • Simply. Intelligently.",
      whatsapp_greeting:
        "Hello, I would like support from e-META for a new request."
    },
    placeholders: {
      expected: "Ex: Funding file, strategic plan, prototype...",
      budget: "Estimated amount",
      fullname: "Your full name",
      phone: "+221…",
      email: "example@mail.com",
      details:
        "Describe the context, constraints or key priorities for your request…"
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
      nav_home: "Inicio",
      nav_about: "Acerca de",
      nav_faq: "FAQ",
      nav_contact: "Contacto",
      hero_title: "e-META — El asistente de IA multidisciplinario",
      hero_sub:
        "Formulario inteligente para analizar, diagnosticar y recomendar soluciones adecuadas.",
      form_title: "Solicitud personalizada",

      label_theme: "Dominio / Tema",
      label_expected: "Resultado esperado",
      label_budget: "Presupuesto indicativo",
      label_currency: "Divisa",
      label_fullname: "Nombre completo",
      label_phone: "Teléfono (WhatsApp)",
      label_email: "Email",
      label_details: "Detalles / Contexto",

      legend_delivery: "Modo de entrega",
      delivery_whatsapp: "WhatsApp",
      delivery_email: "Email",
      delivery_display: "Visualización directa",

      btn_send: "Enviar solicitud",

      about_title: "Acerca de",
      about_body:
        "e-META estructura las solicitudes y produce una síntesis estratégica adaptada al contexto.",
      faq_title: "FAQ",
      faq_q1: "¿Cómo funciona e-META?",
      faq_a1:
        "Complete el formulario con su necesidad, elija el modo de entrega y reciba una síntesis inteligente adaptada a su contexto.",
      contact_title: "Contacto",
      contact_emailLabel: "Email:",
      footer: "© 2025 e-META • Simplemente. Inteligentemente.",
      whatsapp_greeting:
        "Hola, me gustaría recibir apoyo de e-META para una nueva solicitud."
    },
    placeholders: {
      expected:
        "Ej.: expediente de financiación, plan estratégico, prototipo...",
      budget: "Monto estimado",
      fullname: "Su nombre completo",
      phone: "+221…",
      email: "ejemplo@mail.com",
      details:
        "Describa el contexto, las restricciones o las prioridades importantes…"
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
      nav_home: "الرئيسية",
      nav_about: "حول",
      nav_faq: "الأسئلة الشائعة",
      nav_contact: "اتصال",
      hero_title: "e-META — المساعد الذكي متعدّد التخصصات",
      hero_sub:
        "نموذج ذكي لتحليل وتشخيص و اقتراح حلول مناسبة حسب السياق.",
      form_title: "طلب مخصص",

      label_theme: "المجال / الموضوع",
      label_expected: "النتيجة المتوقعة",
      label_budget: "الميزانية التقديرية",
      label_currency: "العملة",
      label_fullname: "الاسم الكامل",
      label_phone: "الهاتف (واتساب)",
      label_email: "البريد الإلكتروني",
      label_details: "التفاصيل / السياق",

      legend_delivery: "طريقة الإرسال",
      delivery_whatsapp: "واتساب",
      delivery_email: "البريد الإلكتروني",
      delivery_display: "عرض مباشر",

      btn_send: "إرسال الطلب",

      about_title: "حول",
      about_body:
        "يقوم e-META بتنظيم طلبك وإنتاج خلاصة استراتيجية مناسبة لسياقك.",
      faq_title: "الأسئلة الشائعة",
      faq_q1: "كيف يعمل e-META؟",
      faq_a1:
        "قم بملء النموذج باحتياجاتك، واختر طريقة الاستلام، وسيُنشئ e-META خلاصة ذكية مكيّفة مع وضعك.",
      contact_title: "اتصال",
      contact_emailLabel: "البريد الإلكتروني:",
      footer: "© 2025 e-META • ببساطة. بذكاء.",
      whatsapp_greeting:
        "مرحباً، أود الحصول على مساعدة من e-META لطلب جديد."
    },
    placeholders: {
      expected: "مثال: ملف تمويل، خطة استراتيجية، نموذج أولي...",
      budget: "المبلغ التقديري",
      fullname: "اسمك الكامل",
      phone: "+221…",
      email: "example@mail.com",
      details: "اشرح السياق والقيود أو الأولويات المهمة…"
    },
    themes: [
      "— اختر مجالاً —",
      "الزراعة",
      "النقل",
      "الطاقة",
      "المالية و البنوك",
      "العقار",
      "التقنية و الذكاء الاصطناعي",
      "التعليم و التدريب",
      "الصحة",
      "الصناعة و الإنتاج",
      "الخدمات",
      "الريادة و الشركات الناشئة",
      "المشاريع العامة / المنظمات",
      "الاستراتيجية و الحوكمة",
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

let currentLang = "fr";

/* =============================
   Helpers
   ============================= */

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
  if (!selectedValue && options.length > 0) {
    selectEl.selectedIndex = 0;
  }
}

function buildFormSummary(lang) {
  const cfg = LANG_CONFIG[lang] || LANG_CONFIG.fr;

  const getVal = (id) =>
    document.getElementById(id)?.value?.trim() || "-";

  const theme = getVal("themeSelect");
  const expected = getVal("expected");
  const budget = getVal("budget");
  const currency = document.getElementById("currencySelect")?.value || "";
  const fullname = getVal("fullname");
  const phone = getVal("phone");
  const email = getVal("email");
  const details = getVal("details");

  const t = cfg.texts;

  return [
    `${t.label_theme}: ${theme}`,
    `${t.label_expected}: ${expected}`,
    `${t.label_budget}: ${budget} ${currency}`,
    `${t.label_fullname}: ${fullname}`,
    `${t.label_phone}: ${phone}`,
    `${t.label_email}: ${email}`,
    `${t.label_details}:`,
    details
  ].join("\n");
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

/* ===== Envoi silencieux vers Make ===== */

function sendToMake(payload) {
  if (!MAKE_WEBHOOK_URL) return;
  try {
    fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).catch((err) => {
      console.error("Erreur envoi Make :", err);
    });
  } catch (e) {
    console.error("Erreur fetch Make :", e);
  }
}

/* =============================
   Application de la langue
   ============================= */

function applyLanguage(lang) {
  const cfg = LANG_CONFIG[lang];
  if (!cfg) return;
  currentLang = lang;

  // html lang & RTL
  document.documentElement.lang = lang === "ar" ? "ar" : lang;
  document.body.classList.toggle("rtl", lang === "ar");

  const t = cfg.texts;

  // Nav
  document
    .querySelectorAll('[data-i18n="nav_home"]')
    .forEach((el) => (el.textContent = t.nav_home));
  document
    .querySelectorAll('[data-i18n="nav_about"]')
    .forEach((el) => (el.textContent = t.nav_about));
  document
    .querySelectorAll('[data-i18n="nav_faq"]')
    .forEach((el) => (el.textContent = t.nav_faq));
  document
    .querySelectorAll('[data-i18n="nav_contact"]')
    .forEach((el) => (el.textContent = t.nav_contact));

  // Hero
  document
    .querySelectorAll('[data-i18n="hero_title"]')
    .forEach((el) => (el.textContent = t.hero_title));
  document
    .querySelectorAll('[data-i18n="hero_sub"]')
    .forEach((el) => (el.textContent = t.hero_sub));

  // Form title
  document
    .querySelectorAll('[data-i18n="form_title"]')
    .forEach((el) => (el.textContent = t.form_title));

  const form = document.getElementById("requestForm");
  if (form) {
    const labels = form.querySelectorAll(".grid label");
    if (labels[0]) labels[0].textContent = t.label_theme;
    if (labels[1]) labels[1].textContent = t.label_expected;
    if (labels[2]) labels[2].textContent = t.label_budget;
    if (labels[3]) labels[3].textContent = t.label_currency;
    if (labels[4]) labels[4].textContent = t.label_fullname;
    if (labels[5]) labels[5].textContent = t.label_phone;
    if (labels[6]) labels[6].textContent = t.label_email;
    if (labels[7]) labels[7].textContent = t.label_details;

    const legend = form.querySelector(".delivery legend");
    if (legend) legend.textContent = t.legend_delivery;

    const deliveryLabels = form.querySelectorAll(".delivery label");
    if (deliveryLabels[0]) {
      const span = deliveryLabels[0].querySelector("span");
      if (span) span.textContent = t.delivery_whatsapp;
    }
    if (deliveryLabels[1]) {
      const span = deliveryLabels[1].querySelector("span");
      if (span) span.textContent = t.delivery_email;
    }
    if (deliveryLabels[2]) {
      const span = deliveryLabels[2].querySelector("span");
      if (span) span.textContent = t.delivery_display;
    }

    const sendBtn = document.getElementById("sendBtn");
    if (sendBtn) sendBtn.textContent = t.btn_send;
  }

  // Placeholders
  const expectedInput = document.getElementById("expected");
  if (expectedInput) expectedInput.placeholder = cfg.placeholders.expected;
  const budgetInput = document.getElementById("budget");
  if (budgetInput) budgetInput.placeholder = cfg.placeholders.budget;
  const fullnameInput = document.getElementById("fullname");
  if (fullnameInput) fullnameInput.placeholder = cfg.placeholders.fullname;
  const phoneInput = document.getElementById("phone");
  if (phoneInput) phoneInput.placeholder = cfg.placeholders.phone;
  const emailInput = document.getElementById("email");
  if (emailInput) emailInput.placeholder = cfg.placeholders.email;
  const detailsInput = document.getElementById("details");
  if (detailsInput) detailsInput.placeholder = cfg.placeholders.details;

  // Themes & currencies
  const themeSelect = document.getElementById("themeSelect");
  populateSelect(
    themeSelect,
    cfg.themes.map((label) => ({ value: label, label }))
  );

  const currencySelect = document.getElementById("currencySelect");
  populateSelect(currencySelect, cfg.currencies, cfg.defaultCurrency);

  // Sections
  const aboutTitle = document.querySelector("#about h3");
  const aboutBody = document.querySelector("#about p");
  if (aboutTitle) aboutTitle.textContent = t.about_title;
  if (aboutBody) aboutBody.textContent = t.about_body;

  const faqTitle = document.querySelector("#faq h3");
  const faqSummary = document.querySelector("#faq summary");
  const faqBody = document.querySelector("#faq details p");
  if (faqTitle) faqTitle.textContent = t.faq_title;
  if (faqSummary) faqSummary.textContent = t.faq_q1;
  if (faqBody) faqBody.textContent = t.faq_a1;

  const contactTitle = document.querySelector("#contact h3");
  const contactP = document.querySelector("#contact p");
  if (contactTitle) contactTitle.textContent = t.contact_title;
  if (contactP) {
    const emailLink = contactP.querySelector("a");
    contactP.textContent = `${t.contact_emailLabel} `;
    if (emailLink) contactP.appendChild(emailLink);
  }

  const footerText = document.getElementById("footerText");
  if (footerText) footerText.textContent = t.footer;

  // Lang button (flag + code)
  const langFlag = document.getElementById("langFlag");
  const langCode = document.getElementById("langCode");
  if (langFlag) langFlag.textContent = cfg.flag;
  if (langCode) langCode.textContent = cfg.code;
}

/* =============================
   UI wiring on DOM ready
   ============================= */

document.addEventListener("DOMContentLoaded", () => {
  console.log("e-META v4.4 loaded");

  const burgerBtn = document.getElementById("burgerBtn");
  const mainNav = document.getElementById("mainNav");
  const langToggle = document.getElementById("langToggle");
  const langMenu = document.getElementById("langMenu");
  const whatsappBtn = document.getElementById("whatsappBtn");
  const sendBtn = document.getElementById("sendBtn");

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
      if (window.innerWidth > 720) {
        burgerBtn.classList.remove("active");
        mainNav.classList.remove("open");
      }
    });
  }

  /* --- Language selector --- */
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

  /* --- WhatsApp header button --- */
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      const url = buildWhatsappUrl(currentLang, true);
      if (url) window.open(url, "_blank");
    });
  }

  /* --- Form send button --- */
  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      const delivery =
        document.querySelector('input[name="delivery"]:checked')?.value ||
        "whatsapp";

      const summary = buildFormSummary(currentLang);

      // payload pour Make
      const payload = {
        lang: currentLang,
        theme: document.getElementById("themeSelect")?.value || "",
        expected: document.getElementById("expected")?.value || "",
        budget: document.getElementById("budget")?.value || "",
        currency: document.getElementById("currencySelect")?.value || "",
        fullname: document.getElementById("fullname")?.value || "",
        phone: document.getElementById("phone")?.value || "",
        email: document.getElementById("email")?.value || "",
        details: document.getElementById("details")?.value || "",
        deliveryMode: delivery,
        summary
      };

      // Envoi silencieux vers Make
      sendToMake(payload);

      // Comportement côté utilisateur
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

  /* --- Langues : appliquer FR par défaut --- */
  applyLanguage("fr");
});
