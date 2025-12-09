script_js = r"""/* =====================================================
   e-META v5.0 – Multilingue, WhatsApp, Make Webhook, UI
   ===================================================== */

const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/dagmll5s04nubg7dp2gujws72zzedvx2";

/* =============================
   Configuration des langues
   ============================= */

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

      hero_badge: "IA décisionnelle",
      hero_title: "e-META — L’assistant IA pluridisciplinaire",
      hero_sub:
        "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",
      form_title: "Requête décisionnelle e-META",

      label_fullname: "Nom complet",
      label_phone: "Téléphone WhatsApp (optionnel)",
      label_email: "Email (optionnel)",
      label_theme: "Domaine / Thème",
      label_title: "Titre court de la décision",
      label_expected: "Résultat attendu",
      label_budget: "Budget indicatif",
      label_currency: "Devise",
      label_deadline: "Délai souhaité",
      label_urgency: "Urgence (1–5)",
      label_details: "Contexte détaillé",
      label_file: "Lien fichier (optionnel)",

      legend_delivery: "Mode de restitution",
      delivery_auto: "Automatique",
      delivery_whatsapp: "WhatsApp",
      delivery_email: "Email",
      delivery_display: "Affichage direct",

      consent_text:
        "J’autorise e-META à analyser mes données pour fournir une réponse personnalisée.",
      consent_link: "Voir la politique de confidentialité",

      btn_send: "Envoyer",
      btn_reset: "Réinitialiser",

      about_title: "À propos",
      about_body:
        "e-META structure vos demandes et génère une synthèse stratégique adaptée à votre contexte décisionnel.",
      faq_title: "FAQ",
      faq_q1: "Comment fonctionne e-META ?",
      faq_a1:
        "Remplissez le formulaire avec votre besoin, choisissez le mode de restitution et recevez une synthèse intelligente générée par IA, envoyée par email, WhatsApp ou affichage direct.",
      contact_title: "Contact",
      contact_emailLabel: "Email :",
      contact_whatsapp_hint:
        "Vous pouvez aussi démarrer une conversation directe sur WhatsApp en cliquant sur le bouton en haut à droite.",

      footer: "© 2025 e-META • Simplement. Intelligemment.",
      footer_privacy: "Politique de confidentialité",

      whatsapp_greeting:
        "Bonjour, je souhaite une assistance via e-META pour une nouvelle requête.",

      /* Privacy page */
      privacy_title: "Politique de confidentialité – e-META",
      privacy_h1: "Politique de confidentialité – e-META",
      privacy_updated_label: "Dernière mise à jour :",
      privacy_updated_value: "08/12/2025",
      privacy_1_title: "1. Données collectées",
      privacy_1_intro:
        "Les données suivantes peuvent être collectées via e-META :",
      privacy_1_1: "Identité : nom et prénom ;",
      privacy_1_2: "Coordonnées : email, numéro WhatsApp ;",
      privacy_1_3:
        "Informations de contexte : domaine, titre du projet, objectifs, contraintes ;",
      privacy_1_4: "Budget : montant indicatif et devise ;",
      privacy_1_5: "Informations complémentaires : délai, urgence, lien fichier ;",
      privacy_1_6: "Préférences : mode de restitution choisi ;",
      privacy_2_title: "2. Finalité du traitement",
      privacy_2_text:
        "Vos données servent uniquement à générer une analyse personnalisée via l’IA. Elles ne sont jamais vendues ni partagées avec des tiers.",
      privacy_3_title: "3. Durée de conservation",
      privacy_3_text:
        "Les données sont conservées uniquement le temps nécessaire à l’analyse puis sont automatiquement supprimées ou anonymisées.",
      privacy_4_title: "4. Sécurité",
      privacy_4_text:
        "e-META applique des mesures avancées pour protéger vos données (chiffrement, accès restreints, stockage sécurisé).",
      privacy_5_title: "5. Vos droits",
      privacy_5_text:
        "Vous pouvez demander la suppression de vos données à tout moment en écrivant à"
    },
    placeholders: {
      fullname: "ex : Abdoulaye FALL",
      phone: "+221 77 000 00 00",
      email: "ex : contact@e-meta.app",
      theme: "Sélectionnez un domaine",
      title: "Titre court de votre décision",
      expected: "Ex : dossier de financement, plan stratégique, prototype...",
      budget: "Ex : 70000",
      deadline: "Ex : 30 jours",
      urgency: "3",
      details:
        "Décrivez le contexte, les contraintes, les objectifs prioritaires…",
      file: "URL Google Drive, PDF…"
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

      hero_badge: "Decision AI",
      hero_title: "e-META — The Multidisciplinary AI Assistant",
      hero_sub:
        "Smart form to analyze, diagnose and recommend suitable solutions.",
      form_title: "e-META decision request",

      label_fullname: "Full name",
      label_phone: "Phone (WhatsApp, optional)",
      label_email: "Email (optional)",
      label_theme: "Domain / Topic",
      label_title: "Decision short title",
      label_expected: "Expected result",
      label_budget: "Indicative budget",
      label_currency: "Currency",
      label_deadline: "Desired deadline",
      label_urgency: "Urgency (1–5)",
      label_details: "Detailed context",
      label_file: "File link (optional)",

      legend_delivery: "Delivery mode",
      delivery_auto: "Automatic",
      delivery_whatsapp: "WhatsApp",
      delivery_email: "Email",
      delivery_display: "On-screen display",

      consent_text:
        "I authorize e-META to analyze my data in order to provide a tailored answer.",
      consent_link: "View privacy policy",

      btn_send: "Send",
      btn_reset: "Reset",

      about_title: "About",
      about_body:
        "e-META structures your request and generates a strategic summary adapted to your context.",
      faq_title: "FAQ",
      faq_q1: "How does e-META work?",
      faq_a1:
        "Fill in the form with your needs, choose the delivery mode and receive an intelligent AI-generated summary by email, WhatsApp or direct display.",
      contact_title: "Contact",
      contact_emailLabel: "Email:",
      contact_whatsapp_hint:
        "You can also start a direct WhatsApp conversation using the button in the top right corner.",

      footer: "© 2025 e-META • Simply. Intelligently.",
      footer_privacy: "Privacy policy",

      whatsapp_greeting:
        "Hello, I would like support from e-META for a new request.",

      privacy_title: "Privacy Policy – e-META",
      privacy_h1: "Privacy Policy – e-META",
      privacy_updated_label: "Last update:",
      privacy_updated_value: "2025-12-08",
      privacy_1_title: "1. Data collected",
      privacy_1_intro: "The following data may be collected via e-META:",
      privacy_1_1: "Identity: first and last name;",
      privacy_1_2: "Contact details: email address, WhatsApp number;",
      privacy_1_3:
        "Context information: domain, project title, objectives, constraints;",
      privacy_1_4: "Budget: indicative amount and currency;",
      privacy_1_5: "Additional information: deadline, urgency, file link;",
      privacy_1_6: "Preferences: selected delivery mode;",
      privacy_2_title: "2. Purpose of processing",
      privacy_2_text:
        "Your data is used only to generate a personalized AI-based analysis. It is never sold or shared with third parties.",
      privacy_3_title: "3. Retention period",
      privacy_3_text:
        "Data is kept only for the time necessary to perform the analysis, then automatically deleted or anonymized.",
      privacy_4_title: "4. Security",
      privacy_4_text:
        "e-META applies advanced measures to protect your data (encryption, restricted access, secure storage).",
      privacy_5_title: "5. Your rights",
      privacy_5_text:
        "You can request deletion of your data at any time by writing to"
    },
    placeholders: {
      fullname: "Your full name",
      phone: "+221…",
      email: "example@mail.com",
      theme: "Select a domain",
      title: "Short title of your decision",
      expected: "Ex: funding file, strategic plan, prototype...",
      budget: "Estimated amount",
      deadline: "Ex: 30 days",
      urgency: "3",
      details:
        "Describe the context, constraints or key priorities for your request…",
      file: "Google Drive, PDF URL…"
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

      hero_badge: "IA de decisión",
      hero_title: "e-META — El asistente de IA multidisciplinario",
      hero_sub:
        "Formulario inteligente para analizar, diagnosticar y recomendar soluciones adecuadas.",
      form_title: "Solicitud de decisión e-META",

      label_fullname: "Nombre completo",
      label_phone: "Teléfono (WhatsApp, opcional)",
      label_email: "Email (opcional)",
      label_theme: "Dominio / Tema",
      label_title: "Título corto de la decisión",
      label_expected: "Resultado esperado",
      label_budget: "Presupuesto indicativo",
      label_currency: "Divisa",
      label_deadline: "Plazo deseado",
      label_urgency: "Urgencia (1–5)",
      label_details: "Contexto detallado",
      label_file: "Enlace de archivo (opcional)",

      legend_delivery: "Modo de entrega",
      delivery_auto: "Automático",
      delivery_whatsapp: "WhatsApp",
      delivery_email: "Email",
      delivery_display: "Visualización directa",

      consent_text:
        "Autorizo a e-META a analizar mis datos para proporcionar una respuesta personalizada.",
      consent_link: "Ver política de privacidad",

      btn_send: "Enviar",
      btn_reset: "Restablecer",

      about_title: "Acerca de",
      about_body:
        "e-META estructura sus solicitudes y produce una síntesis estratégica adaptada a su contexto.",
      faq_title: "FAQ",
      faq_q1: "¿Cómo funciona e-META?",
      faq_a1:
        "Complete el formulario con su necesidad, elija el modo de entrega y reciba una síntesis inteligente generada por IA, enviada por email, WhatsApp o visualización directa.",
      contact_title: "Contacto",
      contact_emailLabel: "Email:",
      contact_whatsapp_hint:
        "También puede iniciar una conversación directa por WhatsApp usando el botón de la esquina superior derecha.",

      footer: "© 2025 e-META • Simplemente. Inteligentemente.",
      footer_privacy: "Política de privacidad",

      whatsapp_greeting:
        "Hola, me gustaría recibir apoyo de e-META para una nueva solicitud.",

      privacy_title: "Política de privacidad – e-META",
      privacy_h1: "Política de privacidad – e-META",
      privacy_updated_label: "Última actualización:",
      privacy_updated_value: "08/12/2025",
      privacy_1_title: "1. Datos recopilados",
      privacy_1_intro: "Los siguientes datos pueden recopilarse a través de e-META:",
      privacy_1_1: "Identidad: nombre y apellidos;",
      privacy_1_2: "Datos de contacto: email, número de WhatsApp;",
      privacy_1_3:
        "Información de contexto: dominio, título del proyecto, objetivos, restricciones;",
      privacy_1_4: "Presupuesto: monto indicativo y divisa;",
      privacy_1_5: "Información adicional: plazo, urgencia, enlace de archivo;",
      privacy_1_6: "Preferencias: modo de entrega elegido;",
      privacy_2_title: "2. Finalidad del tratamiento",
      privacy_2_text:
        "Sus datos se utilizan únicamente para generar un análisis personalizado mediante IA. Nunca se venden ni se comparten con terceros.",
      privacy_3_title: "3. Plazo de conservación",
      privacy_3_text:
        "Los datos se conservan sólo durante el tiempo necesario para realizar el análisis y luego se eliminan o anonimizan automáticamente.",
      privacy_4_title: "4. Seguridad",
      privacy_4_text:
        "e-META aplica medidas avanzadas para proteger sus datos (cifrado, acceso restringido, almacenamiento seguro).",
      privacy_5_title: "5. Sus derechos",
      privacy_5_text:
        "Puede solicitar la eliminación de sus datos en cualquier momento escribiendo a"
    },
    placeholders: {
      fullname: "Su nombre completo",
      phone: "+221…",
      email: "ejemplo@mail.com",
      theme: "Seleccione un dominio",
      title: "Título corto de su decisión",
      expected:
        "Ej.: expediente de financiación, plan estratégico, prototipo...",
      budget: "Monto estimado",
      deadline: "Ej.: 30 días",
      urgency: "3",
      details:
        "Describa el contexto, las restricciones o las prioridades importantes…",
      file: "URL de Google Drive, PDF…"
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

      hero_badge: "ذكاء اصطناعي للقرار",
      hero_title: "e-META — المساعد الذكي متعدّد التخصصات",
      hero_sub: "نموذج ذكي لتحليل وتشخيص واقتراح حلول مناسبة حسب السياق.",
      form_title: "طلب قرار عبر e-META",

      label_fullname: "الاسم الكامل",
      label_phone: "الهاتف (واتساب، اختياري)",
      label_email: "البريد الإلكتروني (اختياري)",
      label_theme: "المجال / الموضوع",
      label_title: "عنوان مختصر للقرار",
      label_expected: "النتيجة المتوقعة",
      label_budget: "الميزانية التقديرية",
      label_currency: "العملة",
      label_deadline: "المدة المطلوبة",
      label_urgency: "درجة الاستعجال (1–5)",
      label_details: "السياق بالتفصيل",
      label_file: "رابط ملف (اختياري)",

      legend_delivery: "طريقة الإرسال",
      delivery_auto: "تلقائي",
      delivery_whatsapp: "واتساب",
      delivery_email: "البريد الإلكتروني",
      delivery_display: "عرض مباشر",

      consent_text:
        "أوافق على قيام e-META بتحليل بياناتي لتقديم إجابة مخصّصة.",
      consent_link: "عرض سياسة الخصوصية",

      btn_send: "إرسال",
      btn_reset: "إعادة الضبط",

      about_title: "حول",
      about_body:
        "يقوم e-META بتنظيم طلبك وإنتاج خلاصة استراتيجية مناسبة لسياقك.",
      faq_title: "الأسئلة الشائعة",
      faq_q1: "كيف يعمل e-META؟",
      faq_a1:
        "قم بملء النموذج باحتياجاتك، واختر طريقة الاستلام، وسيُنشئ e-META خلاصة ذكية مكيّفة مع وضعك، تُرسل عبر البريد الإلكتروني أو واتساب أو تعرض مباشرة.",
      contact_title: "اتصال",
      contact_emailLabel: "البريد الإلكتروني:",
      contact_whatsapp_hint:
        "يمكنك أيضاً بدء محادثة مباشرة على واتساب بالضغط على الزر في أعلى الصفحة.",

      footer: "© 2025 e-META • ببساطة. بذكاء.",
      footer_privacy: "سياسة الخصوصية",

      whatsapp_greeting:
        "مرحباً، أود الحصول على مساعدة من e-META لطلب جديد.",

      privacy_title: "سياسة الخصوصية – e-META",
      privacy_h1: "سياسة الخصوصية – e-META",
      privacy_updated_label: "آخر تحديث:",
      privacy_updated_value: "08/12/2025",
      privacy_1_title: "1. البيانات التي يتم جمعها",
      privacy_1_intro: "يمكن لـ e-META جمع البيانات التالية:",
      privacy_1_1: "الهوية: الاسم واللقب؛",
      privacy_1_2: "بيانات الاتصال: البريد الإلكتروني، رقم واتساب؛",
      privacy_1_3:
        "معلومات السياق: المجال، عنوان المشروع، الأهداف، القيود؛",
      privacy_1_4: "الميزانية: المبلغ التقديري والعملــة؛",
      privacy_1_5: "معلومات إضافية: المدة، درجة الاستعجال، رابط الملف؛",
      privacy_1_6: "التفضيلات: طريقة الإرسال المختارة؛",
      privacy_2_title: "2. الغرض من معالجة البيانات",
      privacy_2_text:
        "تُستخدم بياناتك فقط لإعداد تحليل مخصّص يعتمد على الذكاء الاصطناعي. لا يتم بيعها أو مشاركتها مع أي طرف ثالث.",
      privacy_3_title: "3. مدة الاحتفاظ بالبيانات",
      privacy_3_text:
        "يتم الاحتفاظ بالبيانات فقط للمدة اللازمة لإجراء التحليل، ثم تُحذف أو تُلغى هويتها تلقائياً.",
      privacy_4_title: "4. الأمان",
      privacy_4_text:
        "يطبق e-META إجراءات متقدمة لحماية بياناتك (تشفير، صلاحيات وصول محدودة، تخزين آمن).",
      privacy_5_title: "5. حقوقك",
      privacy_5_text:
        "يمكنك طلب حذف بياناتك في أي وقت عبر الكتابة إلى"
    },
    placeholders: {
      fullname: "اسمك الكامل",
      phone: "+221…",
      email: "example@mail.com",
      theme: "اختر مجالاً",
      title: "عنوان مختصر لقرارك",
      expected: "مثال: ملف تمويل، خطة استراتيجية، نموذج أولي...",
      budget: "المبلغ التقديري",
      deadline: "مثال: 30 يوماً",
      urgency: "3",
      details: "اشرح السياق والقيود أو الأولويات المهمة…",
      file: "رابط Google Drive أو PDF…"
    },
    themes: [
      "— اختر مجالاً —",
      "الزراعة",
      "النقل",
      "الطاقة",
      "المالية والبنوك",
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
  if (!selectedValue && options[0]) {
    selectEl.selectedIndex = 0;
  }
}

function buildFormSummary(lang) {
  const cfg = LANG_CONFIG[lang] || LANG_CONFIG.fr;
  const t = cfg.texts;

  const theme = document.getElementById("themeSelect")?.value || "";
  const expected = document.getElementById("expected")?.value || "";
  const budget = document.getElementById("budget")?.value || "";
  const currency = document.getElementById("currencySelect")?.value || "";
  const fullname = document.getElementById("fullname")?.value || "";
  const phone = document.getElementById("phone")?.value || "";
  const email = document.getElementById("email")?.value || "";
  const title = document.getElementById("title")?.value || "";
  const deadline = document.getElementById("deadline")?.value || "";
  const urgency = document.getElementById("urgency")?.value || "";
  const details = document.getElementById("details")?.value || "";
  const fileLink = document.getElementById("fileLink")?.value || "";

  const lines = [
    `${t.label_title}: ${title || "-"}`,
    `${t.label_theme}: ${theme || "-"}`,
    `${t.label_expected}: ${expected || "-"}`,
    `${t.label_budget}: ${budget || "-"} ${currency}`,
    `${t.label_deadline}: ${deadline || "-"}`,
    `${t.label_urgency}: ${urgency || "-"}`,
    `${t.label_fullname}: ${fullname || "-"}`,
    `${t.label_phone}: ${phone || "-"}`,
    `${t.label_email}: ${email || "-"}`,
    `${t.label_file}: ${fileLink || "-"}`,
    "",
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
    msg = cfg.texts.whatsapp_greeting;
  } else {
    const summary = buildFormSummary(lang);
    msg = `${cfg.texts.whatsapp_greeting}\n\n${summary}`;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}

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
  try {
    localStorage.setItem("emetaLang", lang);
  } catch (e) {
    /* ignore */
  }

  document.documentElement.lang = lang === "ar" ? "ar" : lang;
  document.body.classList.toggle("rtl", lang === "ar");

  const t = cfg.texts;

  /* Nav */
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

  /* Hero */
  document
    .querySelectorAll('[data-i18n="hero_badge"]')
    .forEach((el) => (el.textContent = t.hero_badge));
  document
    .querySelectorAll('[data-i18n="hero_title"]')
    .forEach((el) => (el.textContent = t.hero_title));
  document
    .querySelectorAll('[data-i18n="hero_sub"]')
    .forEach((el) => (el.textContent = t.hero_sub));

  /* Formulaire (si présent) */
  const form = document.getElementById("requestForm");
  if (form) {
    const setText = (selector, key) => {
      const el = form.querySelector(selector);
      if (el && t[key]) el.textContent = t[key];
    };

    setText('label[for="fullname"]', "label_fullname");
    setText('label[for="phone"]', "label_phone");
    setText('label[for="email"]', "label_email");
    setText('label[for="themeSelect"]', "label_theme");
    setText('label[for="title"]', "label_title");
    setText('label[for="expected"]', "label_expected");
    setText('label[for="budget"]', "label_budget");
    setText('label[for="currencySelect"]', "label_currency");
    setText('label[for="deadline"]', "label_deadline");
    setText('label[for="urgency"]', "label_urgency");
    setText('label[for="details"]', "label_details");
    setText('label[for="fileLink"]', "label_file");

    const legend = form.querySelector(".delivery legend");
    if (legend) legend.textContent = t.legend_delivery;

    const deliveryLabels = form.querySelectorAll(".delivery label");
    if (deliveryLabels[0]) {
      const spanText = deliveryLabels[0].querySelector("span");
      if (spanText) spanText.textContent = t.delivery_auto;
    }
    if (deliveryLabels[1]) {
      const spanText = deliveryLabels[1].querySelector("span");
      if (spanText) spanText.textContent = t.delivery_email;
    }
    if (deliveryLabels[2]) {
      const spanText = deliveryLabels[2].querySelector("span");
      if (spanText) spanText.textContent = t.delivery_whatsapp;
    }
    if (deliveryLabels[3]) {
      const spanText = deliveryLabels[3].querySelector("span");
      if (spanText) spanText.textContent = t.delivery_display;
    }

    const consentSpan = form.querySelector(".emeta-consent span");
    if (consentSpan) consentSpan.textContent = t.consent_text;
    const consentLink = form.querySelector(".emeta-privacy-link");
    if (consentLink) consentLink.textContent = t.consent_link;

    const sendBtn = document.getElementById("sendBtn");
    if (sendBtn) sendBtn.textContent = t.btn_send;
    const resetBtn = document.getElementById("resetBtn");
    if (resetBtn) resetBtn.textContent = t.btn_reset;

    /* Placeholders */
    const setPlaceholder = (id, key) => {
      const el = document.getElementById(id);
      if (el && cfg.placeholders[key]) el.placeholder = cfg.placeholders[key];
    };

    setPlaceholder("fullname", "fullname");
    setPlaceholder("phone", "phone");
    setPlaceholder("email", "email");
    setPlaceholder("title", "title");
    setPlaceholder("expected", "expected");
    setPlaceholder("budget", "budget");
    setPlaceholder("deadline", "deadline");
    setPlaceholder("urgency", "urgency");
    setPlaceholder("details", "details");
    setPlaceholder("fileLink", "file");

    /* Thèmes & devises */
    const themeSelect = document.getElementById("themeSelect");
    populateSelect(
      themeSelect,
      cfg.themes.map((label) => ({ value: label, label })),
      ""
    );

    const currencySelect = document.getElementById("currencySelect");
    populateSelect(currencySelect, cfg.currencies, cfg.defaultCurrency);
  }

  /* Sections texte */
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
  const contactHint = document.querySelector(
    '#contact p[data-i18n="contact_whatsapp_hint"]'
  );
  if (contactHint) contactHint.textContent = t.contact_whatsapp_hint;

  const footerText = document.getElementById("footerText");
  if (footerText) footerText.textContent = t.footer;

  document
    .querySelectorAll('[data-i18n="footer_privacy"]')
    .forEach((el) => (el.textContent = t.footer_privacy));

  /* Lang button */
  const langFlag = document.getElementById("langFlag");
  const langCode = document.getElementById("langCode");
  if (langFlag) langFlag.textContent = cfg.flag;
  if (langCode) langCode.textContent = cfg.code;

  /* Page confidentialité (si présente) */
  const privacyH1 = document.querySelector('[data-i18n="privacy_h1"]');
  if (privacyH1) {
    const setP = (selector, key) => {
      const el = document.querySelector(selector);
      if (el && t[key]) el.textContent = t[key];
    };

    document
      .querySelectorAll('[data-i18n="privacy_title"]')
      .forEach((el) => (el.textContent = t.privacy_title));
    document.title = t.privacy_title;

    setP('[data-i18n="privacy_1_title"]', "privacy_1_title");
    setP('[data-i18n="privacy_1_intro"]', "privacy_1_intro");
    setP('[data-i18n="privacy_1_1"]', "privacy_1_1");
    setP('[data-i18n="privacy_1_2"]', "privacy_1_2");
    setP('[data-i18n="privacy_1_3"]', "privacy_1_3");
    setP('[data-i18n="privacy_1_4"]', "privacy_1_4");
    setP('[data-i18n="privacy_1_5"]', "privacy_1_5");
    setP('[data-i18n="privacy_1_6"]', "privacy_1_6");
    setP('[data-i18n="privacy_2_title"]', "privacy_2_title");
    setP('[data-i18n="privacy_2_text"]', "privacy_2_text");
    setP('[data-i18n="privacy_3_title"]', "privacy_3_title");
    setP('[data-i18n="privacy_3_text"]', "privacy_3_text");
    setP('[data-i18n="privacy_4_title"]', "privacy_4_title");
    setP('[data-i18n="privacy_4_text"]', "privacy_4_text");
    setP('[data-i18n="privacy_5_title"]', "privacy_5_title");

    const updLabel = document.querySelector(
      '[data-i18n="privacy_updated_label"]'
    );
    if (updLabel && t.privacy_updated_label) {
      updLabel.textContent = t.privacy_updated_label;
    }
    const updValue = document.querySelector(
      '[data-i18n="privacy_updated_value"]'
    );
    if (updValue && t.privacy_updated_value) {
      updValue.textContent = t.privacy_updated_value;
    }

    const p5 = document.querySelector('[data-i18n="privacy_5_text"]');
    if (p5) {
      const link = p5.querySelector("a");
      p5.textContent = t.privacy_5_text;
      if (link) {
        p5.appendChild(document.createTextNode(" "));
        p5.appendChild(link);
      }
    }
  }
}

/* =============================
   DOM Ready
   ============================= */

document.addEventListener("DOMContentLoaded", () => {
  console.log("e-META v5.0 loaded");

  const burgerBtn = document.getElementById("burgerBtn");
  const mainNav = document.getElementById("mainNav");
  const langToggle = document.getElementById("langToggle");
  const langMenu = document.getElementById("langMenu");

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
      if (window.innerWidth > 820) {
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

  /* --- Boutons WhatsApp (toutes pages) --- */
  document
    .querySelectorAll(".whatsappBtnGlobal")
    .forEach((btn) =>
      btn.addEventListener("click", () => {
        const url = buildWhatsappUrl(currentLang, true);
        if (url) window.open(url, "_blank");
      })
    );

  /* --- Bouton Envoyer (page formulaire uniquement) --- */
  const sendBtn = document.getElementById("sendBtn");
  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      const cfg = LANG_CONFIG[currentLang] || LANG_CONFIG.fr;
      const t = cfg.texts;

      const deliveryChoice =
        document.querySelector('input[name="delivery"]:checked')?.value ||
        "auto";

      const email = document.getElementById("email")?.value || "";
      const phone = document.getElementById("phone")?.value || "";

      let resolvedDelivery = deliveryChoice;
      if (deliveryChoice === "auto") {
        if (email) resolvedDelivery = "email";
        else if (phone) resolvedDelivery = "whatsapp";
        else resolvedDelivery = "display";
      }

      const summary = buildFormSummary(currentLang);

      const payload = {
        lang: currentLang,
        deliveryChoice,
        deliveryResolved: resolvedDelivery,
        theme: document.getElementById("themeSelect")?.value || "",
        title: document.getElementById("title")?.value || "",
        expected: document.getElementById("expected")?.value || "",
        budget: document.getElementById("budget")?.value || "",
        currency: document.getElementById("currencySelect")?.value || "",
        fullname: document.getElementById("fullname")?.value || "",
        phone,
        email,
        deadline: document.getElementById("deadline")?.value || "",
        urgency: document.getElementById("urgency")?.value || "",
        details: document.getElementById("details")?.value || "",
        fileLink: document.getElementById("fileLink")?.value || "",
        consent: document.getElementById("consent")?.checked || false,
        summary
      };

      sendToMake(payload);

      if (resolvedDelivery === "whatsapp") {
        const url = buildWhatsappUrl(currentLang, false);
        if (url) window.open(url, "_blank");
      } else if (resolvedDelivery === "email") {
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
        const win = window.open("", "_blank", "width=640,height=720");
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

  /* --- Bouton Reset --- */
  const resetBtn = document.getElementById("resetBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const form = document.getElementById("requestForm");
      if (form) form.reset();
      applyLanguage(currentLang || "fr");
    });
  }

  /* --- Langue par défaut (avec persistance) --- */
  let initialLang = "fr";
  try {
    const stored = localStorage.getItem("emetaLang");
    if (stored && LANG_CONFIG[stored]) initialLang = stored;
  } catch (e) {
    /* ignore */
  }
  applyLanguage(initialLang);
});
"""

