/* =====================================================
   e-META v5.0 – Multilingue, WhatsApp, Make, UI responsive
   ===================================================== */

/* ---------- CONFIG MAKE WEBHOOK ---------- */
const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/dagmll5s04nubg7dp2gujws72zzedvx2";

/* ---------- CONFIG LANGUES & TRADUCTIONS ---------- */

const LANG_CONFIG = {
  fr: {
    code: "FR",
    flag: "🇫🇷",
    whatsappNumber: "221782607212",
    defaultCurrency: "XOF",
    i18n: {
      // Titres page
      page_title_main: "e-META – Assistant IA Multilingue",
      nav_home: "Accueil",
      nav_about: "À propos",
      nav_faq: "FAQ",
      nav_contact: "Contact",
      nav_privacy: "Politique de confidentialité",

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

      about_title: "À propos",
      about_body:
        "e-META structure les demandes et produit une synthèse stratégique adaptée au contexte.",
      faq_title: "FAQ",
      faq_q1: "Comment fonctionne e-META ?",
      faq_a1:
        "Remplissez le formulaire avec votre besoin, choisissez le mode de restitution et recevez une synthèse intelligente.",
      contact_title: "Contact",
      contact_intro: "Email :",
      footer_text: "© 2025 e-META • Simplement. Intelligemment.",

      // Politique de confidentialité
      privacy_title: "Politique de confidentialité – e-META",
      privacy_h1: "Politique de confidentialité – e-META",
      privacy_updated: "Dernière mise à jour :",
      privacy_1_title: "1. Données collectées",
      privacy_1_1:
        "Identité : nom et prénom.",
      privacy_1_2:
        "Coordonnées : email, téléphone WhatsApp.",
      privacy_1_3:
        "Informations de contexte : domaine, objectifs, contraintes.",
      privacy_1_4:
        "Budget : montant et devise.",
      privacy_1_5:
        "Informations complémentaires : délai, urgence, lien de fichier.",

      privacy_2_title: "2. Finalité du traitement",
      privacy_2_text:
        "Vos données sont utilisées uniquement pour analyser votre demande et générer une réponse personnalisée via l’IA. Elles ne sont jamais revendues ni partagées à des tiers commerciaux.",

      privacy_3_title: "3. Durée de conservation",
      privacy_3_text:
        "Les données sont conservées uniquement le temps nécessaire à l’analyse puis éventuellement anonymisées pour améliorer les performances du service.",

      privacy_4_title: "4. Sécurité",
      privacy_4_text:
        "e-META applique des mesures techniques et organisationnelles pour protéger vos données (canaux sécurisés, stockage contrôlé, accès limité).",

      privacy_5_title: "5. Vos droits",
      privacy_5_text:
        "Vous pouvez demander la suppression ou la correction de vos données en écrivant à : contact@e-meta.app."
    },
    placeholders: {
      expected: "Ex : dossier de financement, plan stratégique, prototype...",
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
    ],
    whatsapp_greeting:
      "Bonjour, je souhaite une assistance via e-META pour une nouvelle requête."
  },

  en: {
    code: "EN",
    flag: "🇬🇧",
    whatsappNumber: "221782607212",
    defaultCurrency: "USD",
    i18n: {
      page_title_main: "e-META – Multilingual AI Assistant",
      nav_home: "Home",
      nav_about: "About",
      nav_faq: "FAQ",
      nav_contact: "Contact",
      nav_privacy: "Privacy policy",

      hero_title: "e-META — The Multidisciplinary AI Assistant",
      hero_sub:
        "Smart form to analyze, diagnose and recommend tailored solutions.",

      form_title: "Custom request",
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

      about_title: "About",
      about_body:
        "e-META structures your request and produces a strategic summary adapted to your context.",
      faq_title: "FAQ",
      faq_q1: "How does e-META work?",
      faq_a1:
        "Fill in the form with your needs, choose how you want to receive the result and e-META generates an intelligent summary.",
      contact_title: "Contact",
      contact_intro: "Email:",
      footer_text: "© 2025 e-META • Simply. Intelligently.",

      privacy_title: "Privacy policy – e-META",
      privacy_h1: "Privacy policy – e-META",
      privacy_updated: "Last update:",
      privacy_1_title: "1. Data collected",
      privacy_1_1:
        "Identity: first and last name.",
      privacy_1_2:
        "Contact details: email, WhatsApp phone number.",
      privacy_1_3:
        "Context information: domain, objectives, constraints.",
      privacy_1_4:
        "Budget: amount and currency.",
      privacy_1_5:
        "Additional information: deadline, urgency, file link.",

      privacy_2_title: "2. Purpose of processing",
      privacy_2_text:
        "Your data is used only to analyse your request and generate a personalised AI-based answer. It is never sold or shared with commercial third parties.",

      privacy_3_title: "3. Storage duration",
      privacy_3_text:
        "Data is stored only for the time necessary to process your request and may then be anonymised to improve the service.",

      privacy_4_title: "4. Security",
      privacy_4_text:
        "e-META applies technical and organisational measures to protect your data (secured channels, controlled storage, restricted access).",

      privacy_5_title: "5. Your rights",
      privacy_5_text:
        "You may request deletion or correction of your data by contacting: contact@e-meta.app."
    },
    placeholders: {
      expected: "Ex: funding file, strategic plan, prototype...",
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
      "Real estate",
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
    ],
    whatsapp_greeting:
      "Hello, I would like support from e-META for a new request."
  },

  es: {
    code: "ES",
    flag: "🇪🇸",
    whatsappNumber: "221782607212",
    defaultCurrency: "EUR",
    i18n: {
      page_title_main: "e-META – Asistente IA Multilingüe",
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

      about_title: "Acerca de",
      about_body:
        "e-META estructura las solicitudes y produce una síntesis estratégica adaptada al contexto.",
      faq_title: "FAQ",
      faq_q1: "¿Cómo funciona e-META?",
      faq_a1:
        "Complete el formulario con su necesidad, elija el modo de entrega y reciba una síntesis inteligente.",
      contact_title: "Contacto",
      contact_intro: "Email:",
      footer_text: "© 2025 e-META • Simplemente. Inteligentemente.",

      privacy_title: "Política de privacidad – e-META",
      privacy_h1: "Política de privacidad – e-META",
      privacy_updated: "Última actualización:",
      privacy_1_title: "1. Datos recopilados",
      privacy_1_1:
        "Identidad: nombre y apellidos.",
      privacy_1_2:
        "Datos de contacto: email, teléfono WhatsApp.",
      privacy_1_3:
        "Información de contexto: dominio, objetivos, restricciones.",
      privacy_1_4:
        "Presupuesto: importe y divisa.",
      privacy_1_5:
        "Información adicional: plazo, urgencia, enlace de archivo.",

      privacy_2_title: "2. Finalidad del tratamiento",
      privacy_2_text:
        "Sus datos se utilizan únicamente para analizar su solicitud y generar una respuesta personalizada mediante IA. Nunca se venden ni se comparten con terceros comerciales.",

      privacy_3_title: "3. Duración de conservación",
      privacy_3_text:
        "Los datos se conservan solo durante el tiempo necesario para el análisis y pueden anonimizarse posteriormente para mejorar el servicio.",

      privacy_4_title: "4. Seguridad",
      privacy_4_text:
        "e-META aplica medidas técnicas y organizativas para proteger sus datos (canales seguros, almacenamiento controlado, acceso restringido).",

      privacy_5_title: "5. Sus derechos",
      privacy_5_text:
        "Puede solicitar la eliminación o corrección de sus datos escribiendo a: contact@e-meta.app."
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
    ],
    whatsapp_greeting:
      "Hola, me gustaría recibir apoyo de e-META para una nueva solicitud."
  },

  ar: {
    code: "AR",
    flag: "🇸🇦",
    whatsappNumber: "221782607212",
    defaultCurrency: "XOF",
    i18n: {
      page_title_main: "e-META – المساعد الذكي متعدّد اللغات",
      nav_home: "الرئيسية",
      nav_about: "حول",
      nav_faq: "الأسئلة الشائعة",
      nav_contact: "اتصال",
      nav_privacy: "سياسة الخصوصية",

      hero_title: "e-META — المساعد الذكي متعدّد التخصصات",
      hero_sub:
        "نموذج ذكي لتحليل طلبك، تشخيصه و اقتراح حلول مناسبة حسب السياق.",

      form_title: "طلب مخصّص",

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

      about_title: "حول",
      about_body:
        "يقوم e-META بتنظيم طلبك وإنتاج خلاصة استراتيجية مناسبة لسياقك.",
      faq_title: "الأسئلة الشائعة",
      faq_q1: "كيف يعمل e-META؟",
      faq_a1:
        "قم بملء النموذج باحتياجاتك، واختر طريقة الاستلام، وسيُنشئ e-META خلاصة ذكية مكيّفة مع وضعك.",
      contact_title: "اتصال",
      contact_intro: "البريد الإلكتروني:",
      footer_text: "© 2025 e-META • ببساطة. بذكاء.",

      privacy_title: "سياسة الخصوصية – e-META",
      privacy_h1: "سياسة الخصوصية – e-META",
      privacy_updated: "آخر تحديث:",
      privacy_1_title: "1. البيانات التي يتم جمعها",
      privacy_1_1:
        "الهوية: الاسم و اللقب.",
      privacy_1_2:
        "بيانات الاتصال: البريد الإلكتروني، رقم هاتف واتساب.",
      privacy_1_3:
        "معلومات السياق: المجال، الأهداف، القيود.",
      privacy_1_4:
        "الميزانية: المبلغ و العملة.",
      privacy_1_5:
        "معلومات إضافية: الأجل، درجة الاستعجال، رابط الملف.",

      privacy_2_title: "2. هدف المعالجة",
      privacy_2_text:
        "نستعمل بياناتك فقط لتحليل طلبك و إنشاء إجابة مخصصة عبر الذكاء الاصطناعي. لا تُباع بياناتك و لا تُشارك مع أطراف تجارية.",

      privacy_3_title: "3. مدة الاحتفاظ بالبيانات",
      privacy_3_text:
        "تُحتفظ البيانات للمدة اللازمة فقط لمعالجة الطلب، ثم يمكن إخفاء هويتها لتحسين أداء الخدمة.",

      privacy_4_title: "4. الأمان",
      privacy_4_text:
        "يطبق e-META تدابير تقنية و تنظيمية لحماية بياناتك (قنوات مؤمنة، تخزين مراقب، صلاحيات وصول محدودة).",

      privacy_5_title: "5. حقوقك",
      privacy_5_text:
        "يمكنك طلب حذف أو تصحيح بياناتك عبر البريد: contact@e-meta.app."
    },
    placeholders: {
      expected: "مثال: ملف تمويل، خطة استراتيجية، نموذج أولي...",
      budget: "المبلغ التقديري",
      fullname: "اسمك الكامل",
      phone: "+221…",
      email: "example@mail.com",
      details: "اشرح السياق و القيود أو الأولويات المهمة…"
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
    ],
    whatsapp_greeting:
      "مرحباً، أود الحصول على مساعدة من e-META لطلب جديد."
  }
};

let currentLang = "fr";

/* =====================================================
   HELPERS
   ===================================================== */

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
  if (!selectedValue && options[0]) {
    selectEl.selectedIndex = 0;
  }
}

function buildFormSummary(lang) {
  const cfg = LANG_CONFIG[lang] || LANG_CONFIG.fr;
  const t = cfg.i18n;

  const theme = document.getElementById("themeSelect")?.value || "";
  const expected = document.getElementById("expected")?.value || "";
  const budget = document.getElementById("budget")?.value || "";
  const currency = document.getElementById("currencySelect")?.value || "";
  const fullname = document.getElementById("fullname")?.value || "";
  const phone = document.getElementById("phone")?.value || "";
  const email = document.getElementById("email")?.value || "";
  const details = document.getElementById("details")?.value || "";

  const lines = [
    `${t.label_theme}: ${theme || "-"}`,
    `${t.label_expected}: ${expected || "-"}`,
    `${t.label_budget}: ${budget || "-"} ${currency}`,
    `${t.label_fullname}: ${fullname || "-"}`,
    `${t.label_phone}: ${phone || "-"}`,
    `${t.label_email}: ${email || "-"}`,
    `${t.label_details}:`,
    details || "-"
  ];

  return lines.join("\n");
}

function buildWhatsappUrl(lang, isHeaderButton = false) {
  const cfg = LANG_CONFIG[lang] || LANG_CONFIG.fr;
  const number = (cfg.whatsappNumber || "").replace(/\D/g, "");
  if (!number) return null;

  let msg;
  if (isHeaderButton) {
    msg = cfg.whatsapp_greeting;
  } else {
    const summary = buildFormSummary(lang);
    msg = `${cfg.whatsapp_greeting}\n\n${summary}`;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}

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

/* =====================================================
   LANGUAGE APPLICATION
   ===================================================== */

function applyLanguage(lang) {
  const cfg = LANG_CONFIG[lang];
  if (!cfg) return;

  currentLang = lang;
  localStorage.setItem("eMetaLang", lang);

  const i18n = cfg.i18n;

  document.documentElement.lang = lang === "ar" ? "ar" : lang;
  document.body.classList.toggle("rtl", lang === "ar");

  // Tous les éléments avec data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const txt = i18n[key];
    if (txt) {
      el.textContent = txt;
    }
  });

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

  // Listes déroulantes
  const themeSelect = document.getElementById("themeSelect");
  if (themeSelect) {
    populateSelect(
      themeSelect,
      cfg.themes.map((label) => ({ value: label, label }))
    );
  }

  const currencySelect = document.getElementById("currencySelect");
  if (currencySelect) {
    populateSelect(currencySelect, cfg.currencies, cfg.defaultCurrency);
  }

  // Sections About / FAQ / Contact / Footer si présents
  const aboutTitle = document.querySelector("#about h3");
  if (aboutTitle && i18n.about_title) aboutTitle.textContent = i18n.about_title;
  const aboutBody = document.querySelector("#about p");
  if (aboutBody && i18n.about_body) aboutBody.textContent = i18n.about_body;

  const faqTitle = document.querySelector("#faq h3");
  if (faqTitle && i18n.faq_title) faqTitle.textContent = i18n.faq_title;
  const faqSummary = document.querySelector("#faq summary");
  if (faqSummary && i18n.faq_q1) faqSummary.textContent = i18n.faq_q1;
  const faqBody = document.querySelector("#faq details p");
  if (faqBody && i18n.faq_a1) faqBody.textContent = i18n.faq_a1;

  const contactTitle = document.querySelector("#contact h3");
  if (contactTitle && i18n.contact_title)
    contactTitle.textContent = i18n.contact_title;
  const contactP = document.querySelector("#contact p");
  if (contactP) {
    const link = contactP.querySelector("a");
    contactP.textContent = i18n.contact_intro ? i18n.contact_intro + " " : "";
    if (link) contactP.appendChild(link);
  }

  const footerText = document.getElementById("footerText");
  if (footerText && i18n.footer_text) footerText.textContent = i18n.footer_text;

  // Bouton langue (flag + code)
  const langFlag = document.getElementById("langFlag");
  const langCode = document.getElementById("langCode");
  if (langFlag) langFlag.textContent = cfg.flag;
  if (langCode) langCode.textContent = cfg.code;
}

/* =====================================================
   HEADER & FOOTER TEMPLATE (pour privacy.html)
   ===================================================== */

function injectLayoutIfNeeded() {
  const headerContainer = document.getElementById("headerContainer");
  if (headerContainer) {
    headerContainer.innerHTML = `
      <header class="header">
        <div class="nav-wrapper">
          <a href="index.html#home" class="brand">
            <img id="logo" src="01_Logo_Sources/eMETA-official-logo.svg.png" alt="e-META Logo" class="logo">
            <span class="brand-text">e-META</span>
          </a>

          <button id="burgerBtn" class="burger" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>

          <nav id="mainNav" class="nav">
            <a href="index.html#home" data-i18n="nav_home">Accueil</a>
            <a href="index.html#about" data-i18n="nav_about">À propos</a>
            <a href="index.html#faq" data-i18n="nav_faq">FAQ</a>
            <a href="index.html#contact" data-i18n="nav_contact">Contact</a>
            <a href="privacy.html" data-i18n="nav_privacy">Politique de confidentialité</a>
          </nav>

          <div class="actions">
            <button id="whatsappBtn" class="btn-wa">WhatsApp</button>
            <div class="langbox">
              <button id="langToggle" class="lang-btn" type="button">
                <span id="langFlag">🇫🇷</span>
                <span id="langCode">FR</span> ▼
              </button>
              <ul id="langMenu" class="lang-menu">
                <li data-lang="fr">🇫🇷 Français</li>
                <li data-lang="en">🇬🇧 English</li>
                <li data-lang="es">🇪🇸 Español</li>
                <li data-lang="ar">🇸🇦 العربية</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    `;
  }

  const footerContainer = document.getElementById("footerContainer");
  if (footerContainer) {
    footerContainer.innerHTML = `
      <footer class="footer">
        <p id="footerText" data-i18n="footer_text">© 2025 e-META • Simplement. Intelligemment.</p>
      </footer>
    `;
  }
}

/* =====================================================
   DOM READY
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  console.log("e-META v5.0 loaded");

  // Si on est sur privacy.html, on injecte header+footer
  injectLayoutIfNeeded();

  const burgerBtn = document.getElementById("burgerBtn");
  const mainNav = document.getElementById("mainNav");
  const langToggle = document.getElementById("langToggle");
  const langMenu = document.getElementById("langMenu");
  const whatsappBtn = document.getElementById("whatsappBtn");
  const sendBtn = document.getElementById("sendBtn");
  const resetBtn = document.getElementById("resetBtn");

  /* ------- Burger menu ------- */
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
      if (window.innerWidth > 860) {
        burgerBtn.classList.remove("active");
        mainNav.classList.remove("open");
      }
    });
  }

  /* ------- Language selector ------- */
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

  /* ------- WhatsApp header button ------- */
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      const url = buildWhatsappUrl(currentLang, true);
      if (url) window.open(url, "_blank");
    });
  }

  /* ------- Form send ------- */
  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      const delivery =
        document.querySelector('input[name="delivery"]:checked')?.value ||
        "whatsapp";
      const summary = buildFormSummary(currentLang);

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

  /* ------- Reset ------- */
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const form = document.getElementById("requestForm");
      if (form) form.reset();
      applyLanguage(currentLang || "fr");
    });
  }

  // Langue par défaut (ou dernière langue utilisée)
  const savedLang = localStorage.getItem("eMetaLang") || "fr";
  applyLanguage(savedLang);
});
