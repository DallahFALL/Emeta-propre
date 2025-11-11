// === script.js v3.3 — e-META Multilingue Responsive ===

// Détection du sélecteur de langue
const langSwitcher = document.getElementById("languageSwitcher");

// Dictionnaire multilingue
const translations = {
  fr: {
    home: "Accueil",
    about: "À propos",
    faq: "FAQ",
    contact: "Contact",
    assistant_title: "L’assistant IA pluridisciplinaire",
    assistant_subtitle: "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",
    form_title: "Requête personnalisée",
    label_domain: "Domaine / Thème",
    label_result: "Résultat attendu",
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
    faq_a1: "L’utilisateur saisit une demande, l’IA analyse et propose une synthèse contextualisée.",
    footer_slogan: "Simplement. Intelligemment.",
    option_choose: "— Domaine —",
    opt_agriculture: "Agriculture",
    opt_education: "Éducation",
    opt_energie: "Énergie",
    opt_environnement: "Environnement",
    opt_finance: "Finance",
    opt_technologie: "Technologie",
    opt_transport: "Transport",
    opt_sante: "Santé",
    opt_marketing: "Marketing",
    opt_ecommerce: "E-commerce",
    ph_result: "Ex : Dossier de financement, plan stratégique, prototype...",
    ph_budget: "Montant estimé",
    ph_name: "Votre nom complet",
    ph_email: "exemple@mail.com",
    ph_details: "Décrivez le contexte, contraintes ou priorités..."
  },
  en: {
    home: "Home",
    about: "About",
    faq: "FAQ",
    contact: "Contact",
    assistant_title: "The Multidisciplinary AI Assistant",
    assistant_subtitle: "Smart form to analyze, diagnose, and recommend tailored solutions.",
    form_title: "Custom Request",
    label_domain: "Domain / Topic",
    label_result: "Expected result",
    label_budget: "Indicative budget",
    label_currency: "Currency",
    label_name: "Full name",
    label_phone: "Phone (WhatsApp)",
    label_email: "Email",
    label_details: "Details / Context",
    label_mode: "Delivery mode",
    mode_whatsapp: "WhatsApp",
    mode_email: "Email",
    mode_display: "Direct display",
    btn_send: "Send request",
    btn_reset: "Reset",
    about_text: "e-META structures requests and produces a strategic summary adapted to context.",
    faq_q1: "How does e-META work?",
    faq_a1: "The user enters a request, the AI analyzes and generates a contextualized summary.",
    footer_slogan: "Simply. Intelligently.",
    option_choose: "— Domain —",
    opt_agriculture: "Agriculture",
    opt_education: "Education",
    opt_energie: "Energy",
    opt_environnement: "Environment",
    opt_finance: "Finance",
    opt_technologie: "Technology",
    opt_transport: "Transport",
    opt_sante: "Health",
    opt_marketing: "Marketing",
    opt_ecommerce: "E-commerce",
    ph_result: "Ex: Funding file, strategic plan, prototype...",
    ph_budget: "Estimated amount",
    ph_name: "Your full name",
    ph_email: "example@mail.com",
    ph_details: "Describe context, constraints or expectations..."
  },
  es: {
    home: "Inicio",
    about: "Acerca de",
    faq: "FAQ",
    contact: "Contacto",
    assistant_title: "El asistente de IA multidisciplinario",
    assistant_subtitle: "Formulario inteligente para analizar, diagnosticar y recomendar soluciones adaptadas.",
    form_title: "Solicitud personalizada",
    label_domain: "Dominio / Tema",
    label_result: "Resultado esperado",
    label_budget: "Presupuesto indicativo",
    label_currency: "Moneda",
    label_name: "Nombre completo",
    label_phone: "Teléfono (WhatsApp)",
    label_email: "Correo",
    label_details: "Detalles / Contexto",
    label_mode: "Modo de entrega",
    mode_whatsapp: "WhatsApp",
    mode_email: "Email",
    mode_display: "Visualización directa",
    btn_send: "Enviar solicitud",
    btn_reset: "Restablecer",
    about_text: "e-META estructura las solicitudes y produce un resumen estratégico adaptado al contexto.",
    faq_q1: "¿Cómo funciona e-META?",
    faq_a1: "El usuario introduce una solicitud, la IA analiza y genera un resumen contextualizado.",
    footer_slogan: "Simplemente. Inteligentemente.",
    option_choose: "— Dominio —",
    opt_agriculture: "Agricultura",
    opt_education: "Educación",
    opt_energie: "Energía",
    opt_environnement: "Medio ambiente",
    opt_finance: "Finanzas",
    opt_technologie: "Tecnología",
    opt_transport: "Transporte",
    opt_sante: "Salud",
    opt_marketing: "Marketing",
    opt_ecommerce: "Comercio electrónico",
    ph_result: "Ej: expediente de financiación, plan estratégico, prototipo...",
    ph_budget: "Monto estimado",
    ph_name: "Su nombre completo",
    ph_email: "ejemplo@mail.com",
    ph_details: "Describa el contexto, limitaciones o expectativas..."
  },
  ar: {
    home: "الرئيسية",
    about: "حول",
    faq: "الأسئلة الشائعة",
    contact: "اتصال",
    assistant_title: "المساعد الذكي المتعدد التخصصات",
    assistant_subtitle: "نموذج ذكي لتحليل وتشخيص وتوصية حلول مخصصة.",
    form_title: "طلب مخصص",
    label_domain: "المجال / الموضوع",
    label_result: "النتيجة المتوقعة",
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
    faq_a1: "يدخل المستخدم الطلب، يقوم الذكاء الاصطناعي بالتحليل ويولّد ملخصاً سياقياً.",
    footer_slogan: "ببساطة. بذكاء.",
    option_choose: "— اختر المجال —",
    opt_agriculture: "الزراعة",
    opt_education: "التعليم",
    opt_energie: "الطاقة",
    opt_environnement: "البيئة",
    opt_finance: "التمويل",
    opt_technologie: "التكنولوجيا",
    opt_transport: "النقل",
    opt_sante: "الصحة",
    opt_marketing: "التسويق",
    opt_ecommerce: "التجارة الإلكترونية",
    ph_result: "مثال: ملف تمويل، خطة استراتيجية، نموذج أولي...",
    ph_budget: "المبلغ المقدر",
    ph_name: "اسمك الكامل",
    ph_email: "example@mail.com",
    ph_details: "اشرح السياق أو القيود أو التوقعات..."
  }
};

// === Fonction de mise à jour ===
function updateLanguage(lang) {
  const dict = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.placeholder = dict[key];
  });

  // Gestion du sens de lecture
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
  document.body.style.textAlign = (lang === "ar") ? "right" : "left";
}

// === Initialisation ===
updateLanguage("fr");

// === Écouteur de changement de langue ===
langSwitcher.addEventListener("change", e => {
  updateLanguage(e.target.value);
});
