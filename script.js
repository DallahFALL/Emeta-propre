/* ==========================================================
   e-META – Traduction & responsive – v2.9 (final)
   - Détection langue → localStorage fallback
   - RTL automatique pour AR
   - Traduction data-i18n & placeholders
   - Domaines & Devises générés dynamiquement
   - Menu burger responsive
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const langSelect = document.getElementById("langSelect");
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const domainSelect = document.getElementById("domain");
  const currencySelect = document.getElementById("currency");

  // ----- Langue par défaut
  const browserLang = (navigator.language || "fr").slice(0,2).toLowerCase();
  const stored = localStorage.getItem("selectedLang");
  const defaultLang = stored || (["fr","en","es","ar"].includes(browserLang) ? browserLang : "fr");
  langSelect.value = defaultLang;
  applyTranslations(defaultLang);

  // ----- Changement manuel
  langSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    localStorage.setItem("selectedLang", lang);
    applyTranslations(lang);
  });

  // ----- Menu burger
  menuToggle.addEventListener("click", () => {
    const opened = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", opened ? "true" : "false");
  });
  // Fermer le menu en cliquant un lien
  mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));

  // ----- Fonction d’application des traductions
  function applyTranslations(lang){
    const t = translations[lang] || translations.fr;

    // Direction / langue
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    html.setAttribute("lang", lang);

    // Textes simples
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      if(t[key]) el.textContent = t[key];
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
      const key = el.getAttribute("data-i18n-placeholder");
      if(t[key]) el.placeholder = t[key];
    });

    // Domaines – conserver l’index sélectionné
    const oldIndex = domainSelect.selectedIndex;
    domainSelect.innerHTML = "";
    (t.domains || []).forEach(label=>{
      const opt = document.createElement("option");
      opt.textContent = label;
      domainSelect.appendChild(opt);
    });
    domainSelect.selectedIndex = Math.min(Math.max(oldIndex,0), domainSelect.options.length-1);

    // Devises – conserver le code sélectionné
    const oldCode = currencySelect.value || "USD";
    currencySelect.innerHTML = "";
    (t.currencies || []).forEach(item=>{
      const opt = document.createElement("option");
      opt.value = item.code;
      opt.textContent = item.label;
      currencySelect.appendChild(opt);
    });
    currencySelect.value = oldCode;
    if(!currencySelect.value){ currencySelect.value = "USD"; }
  }
});

/* ================== Dictionnaire ================== */
const translations = {
  fr: {
    brand:"e-META",
    home:"Accueil", about:"À propos", faq:"FAQ", contact:"Contact", whatsapp:"WhatsApp",
    hero_title:"e-META — L’assistant IA pluridisciplinaire",
    hero_lead:"Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",
    form_title:"Requête personnalisée",
    label_domain:"Domaine / Thème",
    label_expected:"Résultat attendu",
    label_budget:"Budget indicatif",
    label_currency:"Devise",
    label_name:"Nom complet",
    label_phone:"Téléphone (WhatsApp)",
    label_email:"Email",
    label_details:"Détails / Contexte",
    // placeholders
    ph_expected:"Ex : Dossier de financement, plan stratégique, prototype…",
    ph_budget:"Montant estimé",
    ph_name:"Votre nom complet",
    ph_phone:"+221…",
    ph_email:"exemple@mail.com",
    ph_details:"Décrivez le contexte, contraintes ou attentes…",
    // restitution
    label_mode:"Mode de restitution",
    mode_whatsapp:"WhatsApp",
    mode_email:"Email",
    mode_display:"Affichage direct",
    // misc
    btn_send:"Envoyer la requête",
    btn_reset:"Réinitialiser",
    about_text:"e-META structure les demandes et produit une synthèse stratégique adaptée au contexte.",
    faq_q1:"Comment fonctionne e-META ?",
    faq_a1:"Remplissez la requête ; e-META génère un diagnostic, 3 options stratégiques et une recommandation priorisée.",
    footer_tagline:"Simplement. Intelligemment.",
    // listes
    domains:[
      "— Choisir —","Agriculture","Environnement","Énergie","Commerce","E-commerce",
      "Finance","FinTech","Marketing","Technologie","Éducation","Santé",
      "Transport","Immobilier","Juridique","Industrie"
    ],
    currencies:[
      {code:"USD",label:"USD — Dollar américain"},
      {code:"EUR",label:"EUR — Euro"},
      {code:"XOF",label:"XOF — Franc CFA (UEMOA)"},
      {code:"XAF",label:"XAF — Franc CFA (CEMAC)"},
      {code:"GBP",label:"GBP — Livre sterling"},
      {code:"CNY",label:"CNY — Yuan chinois"}
    ]
  },

  en: {
    brand:"e-META",
    home:"Home", about:"About", faq:"FAQ", contact:"Contact", whatsapp:"WhatsApp",
    hero_title:"e-META — The Multidisciplinary AI Assistant",
    hero_lead:"Smart form to analyze, diagnose, and recommend tailored solutions.",
    form_title:"Custom Request",
    label_domain:"Domain / Topic",
    label_expected:"Expected result",
    label_budget:"Indicative budget",
    label_currency:"Currency",
    label_name:"Full name",
    label_phone:"Phone (WhatsApp)",
    label_email:"Email",
    label_details:"Details / Context",
    ph_expected:"e.g., Funding file, strategic plan, prototype…",
    ph_budget:"Estimated amount",
    ph_name:"Your full name",
    ph_phone:"+221…",
    ph_email:"example@mail.com",
    ph_details:"Describe the context, constraints or expectations…",
    label_mode:"Delivery mode",
    mode_whatsapp:"WhatsApp",
    mode_email:"Email",
    mode_display:"On-screen display",
    btn_send:"Send request",
    btn_reset:"Reset",
    about_text:"e-META structures your requests and delivers clear, actionable syntheses.",
    faq_q1:"How does e-META work?",
    faq_a1:"Fill the request; e-META generates a diagnosis, 3 strategic options, and a prioritized recommendation.",
    footer_tagline:"Simply. Intelligently.",
    domains:[
      "— Choose —","Agriculture","Environment","Energy","Commerce","E-commerce",
      "Finance","FinTech","Marketing","Technology","Education","Health",
      "Transport","Real Estate","Legal","Industry"
    ],
    currencies:[
      {code:"USD",label:"USD — US Dollar"},
      {code:"EUR",label:"EUR — Euro"},
      {code:"XOF",label:"XOF — West African CFA franc"},
      {code:"XAF",label:"XAF — Central African CFA franc"},
      {code:"GBP",label:"GBP — Pound sterling"},
      {code:"CNY",label:"CNY — Chinese yuan"}
    ]
  },

  es: {
    brand:"e-META",
    home:"Inicio", about:"Acerca de", faq:"FAQ", contact:"Contacto", whatsapp:"WhatsApp",
    hero_title:"e-META — El asistente de IA multidisciplinario",
    hero_lead:"Formulario inteligente para analizar, diagnosticar y recomendar soluciones adaptadas.",
    form_title:"Solicitud personalizada",
    label_domain:"Dominio / Tema",
    label_expected:"Resultado esperado",
    label_budget:"Presupuesto indicativo",
    label_currency:"Moneda",
    label_name:"Nombre completo",
    label_phone:"Teléfono (WhatsApp)",
    label_email:"Correo",
    label_details:"Detalles / Contexto",
    ph_expected:"Ej.: expediente de financiación, plan estratégico, prototipo…",
    ph_budget:"Monto estimado",
    ph_name:"Su nombre completo",
    ph_phone:"+221…",
    ph_email:"ejemplo@mail.com",
    ph_details:"Describa el contexto, limitaciones o expectativas…",
    label_mode:"Modo de entrega",
    mode_whatsapp:"WhatsApp",
    mode_email:"Correo",
    mode_display:"Visualización directa",
    btn_send:"Enviar solicitud",
    btn_reset:"Restablecer",
    about_text:"e-META estructura las solicitudes y produce síntesis estratégicas útiles.",
    faq_q1:"¿Cómo funciona e-META?",
    faq_a1:"Complete la solicitud; e-META genera un diagnóstico, 3 opciones estratégicas y una recomendación prioritaria.",
    footer_tagline:"Simplemente. Inteligentemente.",
    domains:[
      "— Elegir —","Agricultura","Medio ambiente","Energía","Comercio","Comercio electrónico",
      "Finanzas","FinTech","Marketing","Tecnología","Educación","Salud",
      "Transporte","Inmobiliario","Jurídico","Industria"
    ],
    currencies:[
      {code:"USD",label:"USD — Dólar estadounidense"},
      {code:"EUR",label:"EUR — Euro"},
      {code:"XOF",label:"XOF — Franco CFA (UEMOA)"},
      {code:"XAF",label:"XAF — Franco CFA (CEMAC)"},
      {code:"GBP",label:"GBP — Libra esterlina"},
      {code:"CNY",label:"CNY — Yuan chino"}
    ]
  },

  ar: {
    brand:"إي-ميتا",
    home:"الرئيسية", about:"حول", faq:"الأسئلة الشائعة", contact:"اتصال", whatsapp:"واتساب",
    hero_title:"إي-ميتا — المساعد الذكي المتعدد التخصصات",
    hero_lead:"نموذج ذكي لتحليل وتشخيص وتوصية حلول مخصصة.",
    form_title:"طلب مخصص",
    label_domain:"المجال / الموضوع",
    label_expected:"النتيجة المتوقعة",
    label_budget:"الميزانية التقديرية",
    label_currency:"العملة",
    label_name:"الاسم الكامل",
    label_phone:"الهاتف (واتساب)",
    label_email:"البريد الإلكتروني",
    label_details:"التفاصيل / السياق",
    ph_expected:"مثال: ملف تمويل، خطة استراتيجية، نموذج أولي…",
    ph_budget:"المبلغ المُقدّر",
    ph_name:"اسمك الكامل",
    ph_phone:"+221…",
    ph_email:"example@mail.com",
    ph_details:"اشرح السياق أو القيود أو التوقّعات…",
    label_mode:"طريقة الإرسال",
    mode_whatsapp:"واتساب",
    mode_email:"البريد الإلكتروني",
    mode_display:"العرض المباشر",
    btn_send:"إرسال الطلب",
    btn_reset:"إعادة الضبط",
    about_text:"تنظّم إي-ميتا الطلبات وتنتج خلاصات استراتيجية واضحة قابلة للتنفيذ.",
    faq_q1:"كيف تعمل إي-ميتا؟",
    faq_a1:"املأ الطلب؛ تنشئ إي-ميتا تشخيصًا، وثلاثة خيارات استراتيجية، وتوصية ذات أولوية.",
    footer_tagline:"ببساطة. بذكاء.",
    domains:[
      "— اختر —","الزراعة","البيئة","الطاقة","التجارة","التجارة الإلكترونية",
      "المالية","فينتك","التسويق","التكنولوجيا","التعليم","الصحة",
      "النقل","العقارات","القانون","الصناعة"
    ],
    currencies:[
      {code:"USD",label:"USD — الدولار الأمريكي"},
      {code:"EUR",label:"EUR — اليورو"},
      {code:"XOF",label:"XOF — فرنك CFA (اتحاد غرب أفريقيا)"},
      {code:"XAF",label:"XAF — فرنك CFA (وسط أفريقيا)"},
      {code:"GBP",label:"GBP — الجنيه الإسترليني"},
      {code:"CNY",label:"CNY — اليوان الصيني"}
    ]
  }
};
