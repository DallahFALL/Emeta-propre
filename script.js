/* ===========================================================
   e-META | script.js v3.7 — Multilangue + Responsive + WhatsApp Routing
   =========================================================== */

// === ÉTAT GLOBAL ===========================================================
const state = { lang: "fr" };

// === DICTIONNAIRE DE TRADUCTIONS ==========================================
const i18n = {
  fr: {
    title: "e-META — L’assistant IA pluridisciplinaire",
    tagline: "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",
    customRequest: "Requête personnalisée",
    domain: "Domaine / Thème",
    expected: "Résultat attendu",
    budget: "Budget indicatif",
    currency: "Devise",
    name: "Nom complet",
    phone: "Téléphone (WhatsApp)",
    email: "Email",
    details: "Détails / Contexte",
    mode: "Mode de restitution",
    send: "Envoyer la requête",
    reset: "Réinitialiser",
    about: "À propos",
    aboutText: "e-META structure les demandes et produit une synthèse stratégique adaptée au contexte.",
    faq: "FAQ",
    faqQ: "Comment fonctionne e-META ?",
    contact: "Contact",
    footer: "© 2025 e-META • Simplement. Intelligemment."
  },
  en: {
    title: "e-META — The Multidisciplinary AI Assistant",
    tagline: "Smart form to analyze, diagnose and recommend suitable solutions.",
    customRequest: "Custom Request",
    domain: "Domain / Topic",
    expected: "Expected result",
    budget: "Indicative budget",
    currency: "Currency",
    name: "Full name",
    phone: "Phone (WhatsApp)",
    email: "Email",
    details: "Details / Context",
    mode: "Delivery mode",
    send: "Send request",
    reset: "Reset",
    about: "About",
    aboutText: "e-META structures requests and produces a strategic synthesis adapted to context.",
    faq: "FAQ",
    faqQ: "How does e-META work?",
    contact: "Contact",
    footer: "© 2025 e-META • Simply. Intelligently."
  },
  es: {
    title: "e-META — El asistente IA multidisciplinario",
    tagline: "Formulario inteligente para analizar, diagnosticar y recomendar soluciones adaptadas.",
    customRequest: "Solicitud personalizada",
    domain: "Dominio / Tema",
    expected: "Resultado esperado",
    budget: "Presupuesto indicativo",
    currency: "Moneda",
    name: "Nombre completo",
    phone: "Teléfono (WhatsApp)",
    email: "Email",
    details: "Detalles / Contexto",
    mode: "Modo de entrega",
    send: "Enviar solicitud",
    reset: "Reiniciar",
    about: "Acerca de",
    aboutText: "e-META estructura las solicitudes y produce una síntesis estratégica adaptada al contexto.",
    faq: "FAQ",
    faqQ: "¿Cómo funciona e-META?",
    contact: "Contacto",
    footer: "© 2025 e-META • Simplemente. Inteligentemente."
  },
  ar: {
    title: "إي-ميتا — المساعد الذكي متعدد التخصصات",
    tagline: "نموذج ذكي لتحليل وتشخيص واقتراح حلول مناسبة.",
    customRequest: "طلب مخصص",
    domain: "المجال / الموضوع",
    expected: "النتيجة المتوقعة",
    budget: "الميزانية التقديرية",
    currency: "العملة",
    name: "الاسم الكامل",
    phone: "الهاتف (واتساب)",
    email: "البريد الإلكتروني",
    details: "التفاصيل / السياق",
    mode: "وضع التسليم",
    send: "إرسال الطلب",
    reset: "إعادة تعيين",
    about: "حول",
    aboutText: "تقوم e-META بتنظيم الطلبات وإنتاج تحليل استراتيجي متكيف مع السياق.",
    faq: "الأسئلة الشائعة",
    faqQ: "كيف تعمل e-META؟",
    contact: "اتصال",
    footer: "© 2025 إي-ميتا • ببساطة. بذكاء."
  }
};

// === LISTE DYNAMIQUE DES DOMAINES =========================================
const domainOptions = [
  "Agriculture", "Énergie", "Éducation", "Santé", "Finance", "Commerce",
  "Transport", "Environnement", "Technologie", "BTP / Construction",
  "Industrie", "Tourisme", "Communication", "Innovation", "Recherche & Développement",
  "Transformation digitale", "Sécurité", "Gouvernance", "Autre"
];

// === LISTE DYNAMIQUE DES DEVISES ==========================================
const currencies = {
  fr: ["XOF — Franc CFA", "USD — Dollar américain", "EUR — Euro", "GBP — Livre sterling"],
  en: ["USD — US Dollar", "EUR — Euro", "GBP — Pound Sterling", "GHS — Ghana Cedi"],
  es: ["USD — Dólar estadounidense", "EUR — Euro", "MXN — Peso mexicano", "ARS — Peso argentino"],
  ar: ["SAR — ريال سعودي", "AED — درهم إماراتي", "EGP — جنيه مصري", "USD — دولار أمريكي"]
};

// === TABLE DES NUMÉROS WHATSAPP PAR LANGUE ================================
const WA_CONTACTS = {
  fr: { number: "221782607212", name: "e-META Sénégal" },
  en: { number: "233550120874", name: "e-META Ghana" },
  es: { number: "34631102478",  name: "e-META España" },
  ar: { number: "971521905611", name: "e-META Dubai" }
};

// === INITIALISATION DOMAINE + DEVISE ======================================
function populateSelects(lang = "fr") {
  const domainSelect = document.getElementById("domainSelect");
  const currencySelect = document.getElementById("currencySelect");
  if (!domainSelect || !currencySelect) return;

  // Domaines
  domainSelect.innerHTML = domainOptions.map(opt => `<option>${opt}</option>`).join("");

  // Devises
  const list = currencies[lang] || currencies.fr;
  currencySelect.innerHTML = list.map(cur => `<option>${cur}</option>`).join("");
}

// === TRADUCTION DYNAMIQUE DU CONTENU ======================================
function applyTranslations(lang) {
  state.lang = lang;
  const t = i18n[lang];
  if (!t) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });

  // Placeholders
  document.getElementById("expectedResult").placeholder =
    lang === "fr" ? "Ex : Dossier de financement, plan stratégique, prototype..." :
    lang === "en" ? "Ex: Funding file, strategic plan, prototype..." :
    lang === "es" ? "Ej: Archivo de financiación, plan estratégico, prototipo..." :
                    "مثال: ملف تمويل، خطة استراتيجية، نموذج أولي...";

  document.getElementById("budgetInput").placeholder =
    lang === "fr" ? "Montant estimé" :
    lang === "en" ? "Estimated amount" :
    lang === "es" ? "Monto estimado" :
                    "المبلغ المقدر";

  document.getElementById("fullName").placeholder =
    lang === "fr" ? "Votre nom complet" :
    lang === "en" ? "Your full name" :
    lang === "es" ? "Tu nombre completo" :
                    "اسمك الكامل";

  document.getElementById("emailInput").placeholder =
    lang === "fr" ? "exemple@mail.com" :
    lang === "en" ? "example@mail.com" :
    lang === "es" ? "ejemplo@mail.com" :
                    "example@mail.com";

  document.getElementById("detailsInput").placeholder =
    lang === "fr" ? "Décrivez le contexte, contraintes ou priorités..." :
    lang === "en" ? "Describe the context, constraints or priorities..." :
    lang === "es" ? "Describa el contexto, restricciones o prioridades..." :
                    "صف السياق أو القيود أو الأولويات...";

  populateSelects(lang);
  updateFlag(lang);
}

// === GESTION DU SÉLECTEUR DE LANGUE ========================================
function updateFlag(lang) {
  const flagMap = { fr: "🇫🇷", en: "🇬🇧", es: "🇪🇸", ar: "🇸🇦" };
  const btn = document.getElementById("languageSelect");
  if (btn) btn.textContent = flagMap[lang] + " " + lang.toUpperCase();
}

document.querySelectorAll(".lang-option").forEach(opt => {
  opt.addEventListener("click", () => {
    const lang = opt.dataset.lang;
    applyTranslations(lang);
  });
});

// === WHATSAPP ROUTING AUTOMATIQUE =========================================
function openWhatsAppDynamic() {
  const lang = state.lang || "fr";
  const { number, name } = WA_CONTACTS[lang] || WA_CONTACTS.fr;

  const domain = document.getElementById("domainSelect")?.value || "";
  const result = document.getElementById("expectedResult")?.value || "";
  const budget = document.getElementById("budgetInput")?.value || "";
  const currency = document.getElementById("currencySelect")?.value || "";
  const fullname = document.getElementById("fullName")?.value || "";
  const phone = document.getElementById("phoneInput")?.value || "";
  const email = document.getElementById("emailInput")?.value || "";
  const details = document.getElementById("detailsInput")?.value || "";

  const t = i18n[lang];
  const text = encodeURIComponent(
`${t.title}
🌍 ${t.domain}: ${domain}
🎯 ${t.expected}: ${result}
💰 ${t.budget}: ${budget} ${currency}
👤 ${t.name}: ${fullname}
📞 ${t.phone}: ${phone}
📧 ${t.email}: ${email}
📝 ${t.details}: ${details}

${t.footer}`
  );

  window.open(`https://wa.me/${number}?text=${text}`, "_blank", "noopener");
}

// === ÉVÉNEMENT BOUTON WHATSAPP ============================================
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("whatsappBtn");
  if (btn) btn.addEventListener("click", e => {
    e.preventDefault();
    openWhatsAppDynamic();
  });
  applyTranslations("fr");
});

// === UI HOOKS : menu mobile & langue (à coller en bas de script.js v3.7) ===
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const primaryNav = document.getElementById("primaryNav");
  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => primaryNav.classList.toggle("open"));
  }

  const langBtn = document.getElementById("languageSelect");
  const langMenu = document.getElementById("languageMenu");
  if (langBtn && langMenu) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langMenu.classList.toggle("show");
    });
    document.addEventListener("click", (e) => {
      if (!langMenu.contains(e.target) && e.target !== langBtn) langMenu.classList.remove("show");
    });
  }

  // Envoi bouton principal = même logique que WhatsApp si "whatsapp" coché
  const send = document.getElementById("sendBtn");
  if (send) {
    send.addEventListener("click", () => {
      const mode = (document.querySelector('input[name="delivery"]:checked')||{}).value;
      if (mode === "whatsapp") openWhatsAppDynamic();
      else if (mode === "email") alert("Mode Email: à câbler avec ton scénario (Make / SMTP).");
      else alert("Affichage direct: à afficher dans la page/résumé.");
    });
  }
});
