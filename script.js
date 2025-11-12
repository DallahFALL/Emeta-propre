/* ===============================
   e-META Script v4.3 – Multilingue dynamique
   =============================== */

/* 🌍 Drapeaux */
const FLAGS = {
  FR: "🇫🇷",
  EN: "🇬🇧",
  ES: "🇪🇸",
  AR: "🇸🇦"
};

/* 💬 Traductions */
const translations = {
  FR: {
    home: "Accueil", about: "À propos", faq: "FAQ", contact: "Contact",
    hero_title: "e-META — L’assistant IA pluridisciplinaire",
    hero_sub: "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",
    form_title: "Requête personnalisée",
    label_domain: "Domaine / Thème", label_expected: "Résultat attendu", label_budget: "Budget indicatif",
    label_currency: "Devise", label_fullname: "Nom complet", label_phone: "Téléphone (WhatsApp)",
    label_email: "Email", label_details: "Détails / Contexte", label_mode: "Mode de restitution",
    mode_whatsapp: "WhatsApp", mode_email: "Email", mode_display: "Affichage direct",
    btn_submit: "Envoyer la requête", btn_reset: "Réinitialiser",
    about_text: "e-META structure les demandes et produit une synthèse stratégique adaptée au contexte.",
    faq_question: "Comment fonctionne e-META ?",
    faq_answer: "e-META collecte vos informations, les analyse avec l’IA et restitue une synthèse personnalisée via WhatsApp, email ou affichage direct.",
    copyright: "© 2025 e-META • Simplement. Intelligemment.",
    placeholders: {
      expected: "Ex : Dossier de financement, plan stratégique, prototype...",
      budget: "Montant estimé",
      fullname: "Votre nom complet",
      phone: "+221...",
      email: "exemple@mail.com",
      details: "Décrivez le contexte, contraintes ou priorités..."
    },
    domains: [
      "— Domaine —", "Agriculture", "Énergie", "Environnement", "Commerce", "E-commerce", "FinTech", "Technologie", "Éducation", "Santé", "Transport", "Immobilier", "Construction", "Tourisme", "Industrie", "Médias", "Gouvernance", "Sécurité", "Finance", "RH / Recrutement", "Services publics"
    ],
    currencies: [
      "XOF — Franc CFA", "USD — Dollar américain", "EUR — Euro", "GBP — Livre sterling", "JPY — Yen japonais", "CAD — Dollar canadien", "CNY — Yuan chinois", "AED — Dirham Émirats", "MAD — Dirham marocain", "GHS — Cedi ghanéen", "ZAR — Rand sud-africain"
    ]
  },

  EN: {
    home: "Home", about: "About", faq: "FAQ", contact: "Contact",
    hero_title: "e-META — The Multidisciplinary AI Assistant",
    hero_sub: "Smart form to analyze, diagnose and recommend tailored solutions.",
    form_title: "Custom Request",
    label_domain: "Domain / Topic", label_expected: "Expected result", label_budget: "Indicative budget",
    label_currency: "Currency", label_fullname: "Full name", label_phone: "Phone (WhatsApp)",
    label_email: "Email", label_details: "Details / Context", label_mode: "Delivery mode",
    mode_whatsapp: "WhatsApp", mode_email: "Email", mode_display: "Direct display",
    btn_submit: "Send request", btn_reset: "Reset",
    about_text: "e-META structures requests and produces a strategic summary adapted to the context.",
    faq_question: "How does e-META work?",
    faq_answer: "e-META gathers your inputs, analyzes them with AI, and returns a tailored strategic summary via WhatsApp, email or direct display.",
    copyright: "© 2025 e-META • Simply. Intelligently.",
    placeholders: {
      expected: "Ex: Funding file, strategic plan, prototype...",
      budget: "Estimated amount",
      fullname: "Your full name",
      phone: "+1...",
      email: "example@mail.com",
      details: "Describe the context, constraints, or priorities..."
    },
    domains: [
      "— Domain —", "Agriculture", "Energy", "Environment", "Commerce", "E-commerce", "FinTech", "Technology", "Education", "Health", "Transport", "Real estate", "Construction", "Tourism", "Industry", "Media", "Governance", "Security", "Finance", "HR / Recruitment", "Public services"
    ],
    currencies: [
      "USD — US Dollar", "EUR — Euro", "GBP — Pound sterling", "XOF — West African CFA franc", "JPY — Japanese Yen", "CAD — Canadian Dollar", "CNY — Chinese Yuan", "AED — UAE Dirham", "MAD — Moroccan Dirham", "GHS — Ghanaian Cedi", "ZAR — South African Rand"
    ]
  },

  ES: {
    home: "Inicio", about: "Acerca de", faq: "FAQ", contact: "Contacto",
    hero_title: "e-META — El asistente de IA multidisciplinario",
    hero_sub: "Formulario inteligente para analizar, diagnosticar y recomendar soluciones a medida.",
    form_title: "Solicitud personalizada",
    label_domain: "Dominio / Tema", label_expected: "Resultado esperado", label_budget: "Presupuesto indicativo",
    label_currency: "Moneda", label_fullname: "Nombre completo", label_phone: "Teléfono (WhatsApp)",
    label_email: "Correo", label_details: "Detalles / Contexto", label_mode: "Modo de entrega",
    mode_whatsapp: "WhatsApp", mode_email: "Correo", mode_display: "Visualización directa",
    btn_submit: "Enviar solicitud", btn_reset: "Restablecer",
    about_text: "e-META estructura las solicitudes y produce un resumen estratégico adaptado al contexto.",
    faq_question: "¿Cómo funciona e-META?",
    faq_answer: "e-META recopila sus datos, los analiza con IA y entrega un resumen estratégico personalizado por WhatsApp, correo o visualización directa.",
    copyright: "© 2025 e-META • Simplemente. Inteligentemente.",
    placeholders: {
      expected: "Ej: Plan estratégico, propuesta técnica...",
      budget: "Monto estimado",
      fullname: "Nombre completo",
      phone: "+34...",
      email: "ejemplo@mail.com",
      details: "Describa el contexto o las prioridades..."
    },
    domains: [
      "— Dominio —", "Agricultura", "Energía", "Medio ambiente", "Comercio", "E-commerce", "FinTech", "Tecnología", "Educación", "Salud", "Transporte", "Inmobiliario", "Construcción", "Turismo", "Industria", "Medios", "Gobernanza", "Seguridad", "Finanzas", "RRHH", "Servicios públicos"
    ],
    currencies: [
      "USD — Dólar estadounidense", "EUR — Euro", "XOF — Franco CFA", "GBP — Libra esterlina", "JPY — Yen japonés", "CAD — Dólar canadiense", "CNY — Yuan chino", "AED — Dirham EAU", "MAD — Dirham marroquí", "GHS — Cedi ghanés", "ZAR — Rand sudafricano"
    ]
  },

  AR: {
    home: "الرئيسية", about: "حول", faq: "الأسئلة الشائعة", contact: "اتصال",
    hero_title: "e-META — المساعد الذكي متعدّد التخصّصات",
    hero_sub: "نموذج ذكي للتحليل والتشخيص وتوصية حلول مخصّصة.",
    form_title: "طلب مخصّص",
    label_domain: "المجال / الموضوع", label_expected: "النتيجة المتوقعة", label_budget: "الميزانية التقديرية",
    label_currency: "العملة", label_fullname: "الاسم الكامل", label_phone: "الهاتف (واتساب)",
    label_email: "البريد الإلكتروني", label_details: "التفاصيل / السياق", label_mode: "طريقة الاسترجاع",
    mode_whatsapp: "واتساب", mode_email: "البريد", mode_display: "عرض مباشر",
    btn_submit: "إرسال الطلب", btn_reset: "إعادة التعيين",
    about_text: "يقوم e-META بهيكلة الطلبات وإنتاج خلاصة استراتيجية مناسبة للسياق.",
    faq_question: "كيف يعمل e-META؟",
    faq_answer: "يجمع e-META معلوماتك ويحللها بالذكاء الاصطناعي ثم يعرض الخلاصة عبر واتساب أو البريد أو العرض المباشر.",
    copyright: "© 2025 e-META • ببساطة. بذكاء.",
    placeholders: {
      expected: "مثال: ملف تمويل، خطة استراتيجية...",
      budget: "المبلغ المقدّر",
      fullname: "اسمك الكامل",
      phone: "+966...",
      email: "example@mail.com",
      details: "اشرح السياق أو القيود أو الأولويات..."
    },
    domains: [
      "— المجال —", "الزراعة", "الطاقة", "البيئة", "التجارة", "التجارة الإلكترونية", "التكنولوجيا المالية", "التكنولوجيا", "التعليم", "الصحة", "النقل", "العقارات", "البناء", "السياحة", "الصناعة", "الإعلام", "الحوكمة", "الأمن", "المالية", "الموارد البشرية", "الخدمات العامة"
    ],
    currencies: [
      "XOF — فرنك غرب إفريقيا", "USD — الدولار الأمريكي", "EUR — اليورو", "GBP — الجنيه الإسترليني", "JPY — الين الياباني", "CAD — الدولار الكندي", "CNY — اليوان الصيني", "AED — الدرهم الإماراتي", "MAD — الدرهم المغربي", "GHS — السيدي الغاني", "ZAR — الراند الجنوب إفريقي"
    ]
  }
};

/* ⚙️ Fonction de traduction */
function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // Texte statique
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

  // Placeholders
  document.querySelector("#expected").placeholder = t.placeholders.expected;
  document.querySelector("#budget").placeholder = t.placeholders.budget;
  document.querySelector("#fullname").placeholder = t.placeholders.fullname;
  document.querySelector("#phone").placeholder = t.placeholders.phone;
  document.querySelector("#email").placeholder = t.placeholders.email;
  document.querySelector("#details").placeholder = t.placeholders.details;

  // Listes
  const domain = document.querySelector("#domain");
  domain.innerHTML = t.domains.map(d => `<option>${d}</option>`).join("");
  const currency = document.querySelector("#currency");
  currency.innerHTML = t.currencies.map(c => `<option>${c}</option>`).join("");

  // Drapeau
  document.querySelector("#flag").textContent = FLAGS[lang];

  // RTL si arabe
  document.documentElement.dir = (lang === "AR") ? "rtl" : "ltr";

  localStorage.setItem("lang", lang);
}

/* 🚀 Initialisation */
document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector("#languageSelect");
  const savedLang = localStorage.getItem("lang") || "FR";
  select.value = savedLang;
  applyLanguage(savedLang);

  select.addEventListener("change", e => {
    const lang = e.target.value;
    applyLanguage(lang);
  });
});
