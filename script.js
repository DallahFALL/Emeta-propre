/* ===== CONFIG TRANSLATIONS / OPTIONS ===== */
const FLAGS = { FR: "🇫🇷", EN: "🇬🇧", ES: "🇪🇸", AR: "🇸🇦" };

const i18n = {
  FR: {
    home: "Accueil", about: "À propos", faq: "FAQ", contact: "Contact",
    hero_title: "e-META — L’assistant IA pluridisciplinaire",
    hero_sub: "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",
    form_title: "Requête personnalisée",
    label_domain: "Domaine / Thème", label_expected: "Résultat attendu", label_budget: "Budget indicatif",
    label_currency: "Devise", label_fullname: "Nom complet", label_phone: "Téléphone (WhatsApp)",
    label_email: "Email", label_details: "Détails / Contexte", label_mode: "Mode de restitution",
    mode_whatsapp: "WhatsApp", mode_email: "Email", mode_display: "Affichage direct",
    ph_expected: "Ex : Dossier de financement, plan stratégique, prototype...",
    ph_budget: "Montant estimé", ph_fullname: "Votre nom complet", ph_phone: "+221…", ph_email: "exemple@mail.com",
    ph_details: "Décrivez le contexte, contraintes ou priorités...",
    btn_submit: "Envoyer la requête", btn_reset: "Réinitialiser",
    about_text: "e-META structure les demandes et produit une synthèse stratégique adaptée au contexte.",
    faq_question: "Comment fonctionne e-META ?",
    faq_answer: "e-META collecte vos informations, les analyse avec l’IA, et restitue une synthèse personnalisée via WhatsApp, email ou affichage direct.",
    copyright: "© 2025 e-META • Simplement. Intelligemment.",
    domains: [
      "— Domaine —","Agriculture","Environnement","Énergie","Commerce","E-commerce","Finance","FinTech","Financement",
      "Marketing","Technologie","Éducation","Santé","Transport","Immobilier","Construction","Logistique","Tourisme",
      "Industrie","Médias","Services publics","Gouvernance","Sécurité","RH / Recrutement"
    ],
    currencies: [
      "USD — Dollar américain","EUR — Euro","XOF — Franc CFA","GBP — Livre sterling","JPY — Yen japonais",
      "CAD — Dollar canadien","CNY — Yuan chinois","AED — Dirham des Émirats","MAD — Dirham marocain",
      "NGN — Naira nigérian","GHS — Cedi ghanéen","ZAR — Rand sud-africain"
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
    ph_expected: "Ex: Funding file, strategic plan, prototype...", ph_budget: "Estimated amount",
    ph_fullname: "Your full name", ph_phone: "+221…", ph_email: "example@mail.com",
    ph_details: "Describe context, constraints or priorities...",
    btn_submit: "Send request", btn_reset: "Reset",
    about_text: "e-META structures requests and produces a strategic summary adapted to the context.",
    faq_question: "How does e-META work?",
    faq_answer: "e-META gathers your inputs, analyzes them with AI, and returns a tailored strategic summary via WhatsApp, email, or direct display.",
    copyright: "© 2025 e-META • Simply. Intelligently.",
    domains: [
      "— Domain —","Agriculture","Environment","Energy","Commerce","E-commerce","Finance","FinTech","Funding",
      "Marketing","Technology","Education","Health","Transport","Real estate","Construction","Logistics","Tourism",
      "Industry","Media","Public services","Governance","Security","HR / Recruitment"
    ],
    currencies: [
      "USD — US Dollar","EUR — Euro","XOF — West African CFA franc","GBP — Pound sterling","JPY — Japanese Yen",
      "CAD — Canadian Dollar","CNY — Chinese Yuan","AED — UAE Dirham","MAD — Moroccan Dirham",
      "NGN — Nigerian Naira","GHS — Ghanaian Cedi","ZAR — South African Rand"
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
    mode_whatsapp: "WhatsApp", mode_email: "Email", mode_display: "Visualización directa",
    ph_expected: "Ej.: Dossier de financiamiento, plan estratégico, prototipo...", ph_budget: "Monto estimado",
    ph_fullname: "Su nombre completo", ph_phone: "+221…", ph_email: "ejemplo@mail.com",
    ph_details: "Describa el contexto, limitaciones o prioridades...",
    btn_submit: "Enviar solicitud", btn_reset: "Restablecer",
    about_text: "e-META estructura las solicitudes y produce un resumen estratégico adaptado al contexto.",
    faq_question: "¿Cómo funciona e-META?",
    faq_answer: "e-META recopila sus datos, los analiza con IA y entrega un resumen estratégico por WhatsApp, email o visualización directa.",
    copyright: "© 2025 e-META • Simplemente. Inteligentemente.",
    domains: [
      "— Dominio —","Agricultura","Medio ambiente","Energía","Comercio","Comercio electrónico","Finanzas","FinTech","Financiación",
      "Marketing","Tecnología","Educación","Salud","Transporte","Bienes raíces","Construcción","Logística","Turismo",
      "Industria","Medios","Servicios públicos","Gobernanza","Seguridad","RR. HH. / Reclutamiento"
    ],
    currencies: [
      "USD — Dólar estadounidense","EUR — Euro","XOF — Franco CFA de África Occidental","GBP — Libra esterlina","JPY — Yen japonés",
      "CAD — Dólar canadiense","CNY — Yuan chino","AED — Dírham de EAU","MAD — Dírham marroquí",
      "NGN — Naira nigeriano","GHS — Cedi ghanés","ZAR — Rand sudafricano"
    ]
  },
  AR: {
    home: "الرئيسية", about: "حول", faq: "الأسئلة الشائعة", contact: "اتصال",
    hero_title: "e-META — المساعد الذكي متعدّد التخصّصات",
    hero_sub: "نموذج ذكي للتحليل والتشخيص و توصية حلول مخصّصة.",
    form_title: "طلب مخصّص",
    label_domain: "المجال / الموضوع", label_expected: "النتيجة المتوقعة", label_budget: "الميزانية التقديرية",
    label_currency: "العملة", label_fullname: "الاسم الكامل", label_phone: "الهاتف (واتساب)",
    label_email: "البريد الإلكتروني", label_details: "التفاصيل / السياق", label_mode: "طريقة الاسترجاع",
    mode_whatsapp: "واتساب", mode_email: "البريد", mode_display: "عرض مباشر",
    ph_expected: "مثال: ملف تمويل، خطة استراتيجية، نموذج أولي...", ph_budget: "المبلغ المقدّر",
    ph_fullname: "اسمك الكامل", ph_phone: "+221…", ph_email: "example@mail.com",
    ph_details: "اشرح السياق أو القيود أو الأولويات...",
    btn_submit: "إرسال الطلب", btn_reset: "إعادة التعيين",
    about_text: "يقوم e-META بهيكلة الطلبات وإنتاج خلاصة استراتيجية مناسبة للسياق.",
    faq_question: "كيف يعمل e-META ؟",
    faq_answer: "يجمع e-META معلوماتك ويحللها بالذكاء الاصطناعي ثم يعرض خلاصة مخصّصة عبر واتساب أو البريد أو العرض المباشر.",
    copyright: "© 2025 e-META • ببساطة. بذكاء.",
    domains: [
      "— المجال —","الزراعة","البيئة","الطاقة","التجارة","التجارة الإلكترونية","المالية","التقنية المالية","التمويل",
      "التسويق","التكنولوجيا","التعليم","الصحة","النقل","العقارات","البناء","اللوجستيات","السياحة",
      "الصناعة","الإعلام","الخدمات العامة","الحوكمة","الأمن","الموارد البشرية / التوظيف"
    ],
    currencies: [
      "USD — الدولار الأمريكي","EUR — اليورو","XOF — فرنك غرب إفريقيا","GBP — الجنيه الإسترليني","JPY — الين الياباني",
      "CAD — الدولار الكندي","CNY — اليوان الصيني","AED — الدرهم الإماراتي","MAD — الدرهم المغربي",
      "NGN — النيرة النيجيرية","GHS — السيدي الغاني","ZAR — الراند الجنوب أفريقي"
    ]
  }
};

/* ===== HELPERS ===== */
const $ = s => document.querySelector(s);

function fillSelect(select, items) {
  select.innerHTML = items.map(text => `<option>${text}</option>`).join("");
}

function setPlaceholders(lang) {
  const t = i18n[lang];
  $("#expected").placeholder = t.ph_expected;
  $("#budget").placeholder   = t.ph_budget;
  $("#fullname").placeholder = t.ph_fullname;
  $("#phone").placeholder    = t.ph_phone;
  $("#email").placeholder    = t.ph_email;
  $("#details").placeholder  = t.ph_details;
}

function translateStatic(lang) {
  const t = i18n[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });
  // copyright / footer mail stays
  $("#flag").textContent = FLAGS[lang] || "🌐";
  document.dir = (lang === "AR") ? "rtl" : "ltr";
}

function applyLanguage(lang) {
  const t = i18n[lang];
  // Header + footer + labels
  translateStatic(lang);
  // Placeholders
  setPlaceholders(lang);
  // Domain & currency dynamic lists
  fillSelect($("#domain"), t.domains);
  fillSelect($("#currency"), t.currencies);
  // Save choice
  localStorage.setItem("emeta_lang", lang);
  // Ensure select shows current
  $("#languageSelect").value = lang;
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("emeta_lang") || "FR";
  applyLanguage(saved);

  // Language switch
  $("#languageSelect").addEventListener("change", e => {
    applyLanguage(e.target.value);
  });

  // WhatsApp CTA
  $("#whatsappBtn").addEventListener("click", () => {
    // ouvre une nouvelle conversation vide avec le numéro si renseigné
    const phone = $("#phone").value.replace(/\D/g, "");
    const url = phone ? `https://wa.me/${phone}` : `https://wa.me/`;
    window.open(url, "_blank");
  });

  // Form (demo)
  $("#requestForm").addEventListener("submit", e => {
    e.preventDefault();
    alert("✅ Requête envoyée (démo).");
  });
});
