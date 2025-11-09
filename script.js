/* ============================================================
   e-META — Traduction dynamique FR / EN / ES / AR
   v2.8 — header, footer, labels, placeholders, domaines, devises,
   détection auto + RTL propre + bouton WhatsApp
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  const t = {
    fr: {
      page_title: "e-META — Requête personnalisée",
      brand: "e-META",
      home: "Accueil",
      about: "À propos",
      faq: "FAQ",
      contact: "Contact",
      whatsapp: "WhatsApp",
      footer_tagline: "© 2025 e-META • Simplement. Intelligemment.",
      hero_title: "e-META — L’assistant IA pluridisciplinaire",
      hero_lead: "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",
      form_title: "Requête personnalisée",
      label_domain: "Domaine / Thème",
      label_expected: "Résultat attendu",
      label_budget: "Budget indicatif",
      label_currency: "Devise",
      label_name: "Nom complet",
      label_email: "Email",
      label_phone: "Téléphone (WhatsApp)",
      label_details: "Détails / Contexte",
      btn_send: "Envoyer la requête",
      btn_reset: "Réinitialiser",
      choose: "— Choisir —",
      about_text: "e-META structure les demandes et produit une synthèse stratégique adaptée au contexte.",
      faq_q1: "Comment fonctionne e-META ?",
      faq_a1: "Remplissez la requête ; e-META génère un diagnostic, 3 options stratégiques et une recommandation priorisée.",
      // domaines
      "dom.agriculture":"Agriculture & Agroécologie","dom.environment":"Environnement & Climat","dom.energy":"Énergie & Solaire","dom.commerce":"Commerce & Distribution","dom.ecommerce":"E-commerce & Digital","dom.finance":"Finance & Comptabilité","dom.fintech":"FinTech / Mobile Money","dom.funding":"Financement & Partenariat","dom.marketing":"Marketing & Communication","dom.technology":"Technologie & Innovation","dom.education":"Éducation & Formation","dom.sante":"Santé & Bien-être","dom.transport":"Transport & Logistique","dom.immobilier":"Immobilier & Construction","dom.juridique":"Juridique & Conformité","dom.industrie":"Industrie & Production","dom.culture":"Culture & Médias","dom.tourisme":"Tourisme & Hôtellerie","dom.rh":"Ressources Humaines","dom.public":"Projets publics & collectivités","dom.artisanal":"Artisanat & Transformation locale","dom.social":"Développement social & communautaire","dom.autre":"Autre",
      // devises
      "cur.USD":"USD — Dollar américain","cur.EUR":"EUR — Euro","cur.GBP":"GBP — Livre sterling","cur.XOF":"XOF — Franc CFA (UEMOA)","cur.XAF":"XAF — Franc CFA (CEMAC)","cur.CFA":"CFA — Franc CFA","cur.JPY":"JPY — Yen japonais","cur.CNY":"CNY — Yuan chinois","cur.CAD":"CAD — Dollar canadien","cur.AUD":"AUD — Dollar australien",
      // placeholders
      ph_expected:"Ex : Dossier de financement, plan stratégique, prototype...",
      ph_details:"Décrivez le contexte, les contraintes ou vos attentes principales...",
      ph_budget:"Montant estimé", ph_name:"Votre nom complet", ph_email:"exemple@mail.com", ph_phone:"+221..."
      // 🇫🇷 Français
      label_mode: "Mode de restitution",
      mode_whatsapp: "WhatsApp",
      mode_email: "Email",
      mode_display: "Affichage direct", 
    },

    en: {
      page_title: "e-META — Custom Request",
      brand: "e-META",
      home: "Home", about: "About", faq: "FAQ", contact: "Contact",
      whatsapp: "WhatsApp",
      footer_tagline: "© 2025 e-META • Simply. Intelligently.",
      hero_title: "e-META — The Multidisciplinary AI Assistant",
      hero_lead: "Smart form to analyze, diagnose and recommend tailored solutions.",
      form_title: "Custom Request",
      label_domain: "Domain / Topic",
      label_expected: "Expected result",
      label_budget: "Indicative budget",
      label_currency: "Currency",
      label_name: "Full name",
      label_email: "Email",
      label_phone: "Phone (WhatsApp)",
      label_details: "Details / Context",
      btn_send: "Send request",
      btn_reset: "Reset",
      choose: "— Choose —",
      about_text: "e-META structures your requests and produces a clear, actionable summary adapted to your context.",
      faq_q1: "How does e-META work?",
      faq_a1: "Fill in the request; e-META produces a diagnosis, 3 strategic options and a prioritized recommendation.",
      "dom.agriculture":"Agriculture & Agroecology","dom.environment":"Environment & Climate","dom.energy":"Energy & Solar","dom.commerce":"Trade & Distribution","dom.ecommerce":"E-commerce & Digital","dom.finance":"Finance & Accounting","dom.fintech":"FinTech / Mobile Money","dom.funding":"Funding & Partnerships","dom.marketing":"Marketing & Communication","dom.technology":"Technology & Innovation","dom.education":"Education & Training","dom.sante":"Health & Well-being","dom.transport":"Transport & Logistics","dom.immobilier":"Real Estate & Construction","dom.juridique":"Legal & Compliance","dom.industrie":"Industry & Production","dom.culture":"Culture & Media","dom.tourisme":"Tourism & Hospitality","dom.rh":"Human Resources","dom.public":"Public Projects & Communities","dom.artisanal":"Craft & Local Processing","dom.social":"Social & Community Development","dom.autre":"Other",
      "cur.USD":"USD — US Dollar","cur.EUR":"EUR — Euro","cur.GBP":"GBP — Pound Sterling","cur.XOF":"XOF — West African CFA Franc","cur.XAF":"XAF — Central African CFA Franc","cur.CFA":"CFA — CFA Franc","cur.JPY":"JPY — Japanese Yen","cur.CNY":"CNY — Chinese Yuan","cur.CAD":"CAD — Canadian Dollar","cur.AUD":"AUD — Australian Dollar",
      ph_expected:"Ex: Funding file, strategic plan, prototype...", ph_details:"Describe the context, constraints or expectations...", ph_budget:"Estimated amount", ph_name:"Your full name", ph_email:"example@mail.com", ph_phone:"+221..."
      // 🇬🇧 English
      label_mode: "Delivery mode",
      mode_whatsapp: "WhatsApp",
      mode_email: "Email",
      mode_display: "On-screen display",
    },

    es: {
      page_title: "e-META — Solicitud personalizada",
      brand: "e-META",
      home: "Inicio", about: "Acerca de", faq: "FAQ", contact: "Contacto",
      whatsapp: "WhatsApp",
      footer_tagline: "© 2025 e-META • Simplemente. Inteligentemente.",
      hero_title: "e-META — Asistente IA multidisciplinario",
      hero_lead: "Formulario inteligente para analizar, diagnosticar y recomendar soluciones adaptadas.",
      form_title: "Solicitud personalizada",
      label_domain: "Dominio / Tema",
      label_expected: "Resultado esperado",
      label_budget: "Presupuesto indicativo",
      label_currency: "Moneda",
      label_name: "Nombre completo",
      label_email: "Correo electrónico",
      label_phone: "Teléfono (WhatsApp)",
      label_details: "Detalles / Contexto",
      btn_send: "Enviar solicitud",
      btn_reset: "Restablecer",
      choose: "— Elegir —",
      about_text: "e-META estructura tus solicitudes y produce un resumen estratégico adaptado al contexto.",
      faq_q1: "¿Cómo funciona e-META?",
      faq_a1: "Completa la solicitud; e-META genera un diagnóstico, 3 opciones estratégicas y una recomendación priorizada.",
      "dom.agriculture":"Agricultura y Agroecología","dom.environment":"Medio Ambiente y Clima","dom.energy":"Energía y Solar","dom.commerce":"Comercio y Distribución","dom.ecommerce":"E-commerce y Digital","dom.finance":"Finanzas y Contabilidad","dom.fintech":"FinTech / Dinero Móvil","dom.funding":"Financiación y Alianzas","dom.marketing":"Marketing y Comunicación","dom.technology":"Tecnología e Innovación","dom.education":"Educación y Formación","dom.sante":"Salud y Bienestar","dom.transport":"Transporte y Logística","dom.immobilier":"Bienes Raíces y Construcción","dom.juridique":"Legal y Cumplimiento","dom.industrie":"Industria y Producción","dom.culture":"Cultura y Medios","dom.tourisme":"Turismo y Hotelería","dom.rh":"Recursos Humanos","dom.public":"Proyectos Públicos y Comunidades","dom.artisanal":"Artesanía y Producción Local","dom.social":"Desarrollo Social y Comunitario","dom.autre":"Otro",
      "cur.USD":"USD — Dólar estadounidense","cur.EUR":"EUR — Euro","cur.GBP":"GBP — Libra esterlina","cur.XOF":"XOF — Franco CFA (UEMOA)","cur.XAF":"XAF — Franco CFA (CEMAC)","cur.CFA":"CFA — Franco CFA","cur.JPY":"JPY — Yen japonés","cur.CNY":"CNY — Yuan chino","cur.CAD":"CAD — Dólar canadiense","cur.AUD":"AUD — Dólar australiano",
      ph_expected:"Ej: Plan estratégico, expediente de financiación...", ph_details:"Describe el contexto, limitaciones o expectativas...", ph_budget:"Monto estimado", ph_name:"Tu nombre completo", ph_email:"ejemplo@mail.com", ph_phone:"+221..."
      // 🇪🇸 Español
      label_mode: "Modo de entrega",
      mode_whatsapp: "WhatsApp",
      mode_email: "Correo",
      mode_display: "Visualización directa",
      },

    ar: {
      page_title: "e-META — طلب مخصص",
      brand: "إي-ميتا",
      home: "الرئيسية", about: "حول", faq: "الأسئلة الشائعة", contact: "اتصال",
      whatsapp: "واتساب",
      footer_tagline: "© 2025 إي-ميتا • ببساطة. بذكاء.",
      hero_title: "إي-ميتا — المساعد الذكي متعدد المجالات",
      hero_lead: "نموذج ذكي لتحليل وتشخيص وتوصية حلول مخصصة.",
      form_title: "طلب مخصص",
      label_domain: "المجال / الموضوع",
      label_expected: "النتيجة المتوقعة",
      label_budget: "الميزانية التقديرية",
      label_currency: "العملة",
      label_name: "الاسم الكامل",
      label_email: "البريد الإلكتروني",
      label_phone: "الهاتف (واتساب)",
      label_details: "التفاصيل / السياق",
      btn_send: "إرسال الطلب",
      btn_reset: "إعادة الضبط",
      choose: "— اختر —",
      about_text: "يقوم e-META بتنظيم الطلبات وإنتاج ملخص استراتيجي مناسب للسياق.",
      faq_q1: "كيف يعمل e-META؟",
      faq_a1: "املأ الطلب؛ يُنتج e-META تشخيصًا و3 خيارات استراتيجية وتوصية مرتّبة حسب الأولوية.",
      "dom.agriculture":"الزراعة والإيكولوجيا الزراعية","dom.environment":"البيئة والمناخ","dom.energy":"الطاقة والطاقة الشمسية","dom.commerce":"التجارة والتوزيع","dom.ecommerce":"التجارة الإلكترونية والرقمية","dom.finance":"التمويل والمحاسبة","dom.fintech":"التقنيات المالية / المال المحمول","dom.funding":"التمويل والشراكات","dom.marketing":"التسويق والاتصال","dom.technology":"التكنولوجيا والابتكار","dom.education":"التعليم والتدريب","dom.sante":"الصحة والرفاهية","dom.transport":"النقل واللوجستيات","dom.immobilier":"العقارات والبناء","dom.juridique":"القانون والامتثال","dom.industrie":"الصناعة والإنتاج","dom.culture":"الثقافة والإعلام","dom.tourisme":"السياحة والفنادق","dom.rh":"الموارد البشرية","dom.public":"المشاريع العامة والمجتمعات","dom.artisanal":"الحرف والتحويل المحلي","dom.social":"التنمية الاجتماعية والمجتمعية","dom.autre":"أخرى",
      "cur.USD":"USD — دولار أمريكي","cur.EUR":"EUR — يورو","cur.GBP":"GBP — جنيه إسترليني","cur.XOF":"XOF — فرنك غرب أفريقي (UEMOA)","cur.XAF":"XAF — فرنك وسط أفريقي (CEMAC)","cur.CFA":"CFA — فرنك س ف ا","cur.JPY":"JPY — ين ياباني","cur.CNY":"CNY — يوان صيني","cur.CAD":"CAD — دولار كندي","cur.AUD":"AUD — دولار أسترالي",
      ph_expected:"مثلاً: خطة استراتيجية، مشروع تمويل...", ph_details:"اشرح السياق أو القيود أو التوقعات...", ph_budget:"المبلغ المقدر", ph_name:"اسمك الكامل", ph_email:"example@mail.com", ph_phone:"+221..."
      // 🇸🇦 Arabic
      label_mode: "طريقة الإرسال",
      mode_whatsapp: "واتساب",
      mode_email: "البريد الإلكتروني",
      mode_display: "العرض المباشر",
    }
  };

  const supported = ["fr","en","es","ar"];
  const guess = (navigator.language||"fr").slice(0,2).toLowerCase();
  const initial = localStorage.getItem("eMETA_lang") || (supported.includes(guess) ? guess : "fr");
  const langSelect = document.getElementById("langSelect");
  if (langSelect) langSelect.value = initial;

  applyLang(initial);

  langSelect?.addEventListener("change", e=>{
    const lg = e.target.value;
    localStorage.setItem("eMETA_lang", lg);
    applyLang(lg);
  });

  function applyLang(lg){
    const d = t[lg] || t.fr;

    document.documentElement.lang = lg;
    document.documentElement.dir  = (lg==="ar" ? "rtl" : "ltr");
    document.title = d.page_title;

    // tous les éléments data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      if (d[key]) el.textContent = d[key];
    });

    // placeholders
    setPh("expectedResult", d.ph_expected);
    setPh("details", d.ph_details);
    setPh("budget", d.ph_budget);
    setPh("name", d.ph_name);
    setPh("email", d.ph_email);
    setPh("phone", d.ph_phone);

    // select domaines
    const domain = document.getElementById("domain");
    if (domain){
      if (domain.options[0]) domain.options[0].textContent = d.choose;
      for (let i=1;i<domain.options.length;i++){
        const v = domain.options[i].value;
        const k = "dom."+v;
        if (d[k]) domain.options[i].textContent = d[k];
      }
    }
    // select devise
    const cur = document.getElementById("currency");
    if (cur){
      for (let i=0;i<cur.options.length;i++){
        const v = cur.options[i].value;
        const k = "cur."+v;
        if (d[k]) cur.options[i].textContent = d[k];
      }
    }
  }

  function setPh(id,val){ const el = document.getElementById(id); if(el && val) el.placeholder = val; }

  // menu burger
  const menuToggle = document.getElementById("menuToggle");
  const mainNav    = document.getElementById("mainNav");
  menuToggle?.addEventListener("click", ()=> mainNav.classList.toggle("open"));

  // bouton WhatsApp (titre sans “Contact”)
  const whatsappBtn = document.getElementById("whatsappBtn");
  whatsappBtn?.addEventListener("click", ()=>{
    const num = (document.getElementById("phone")?.value || "").replace(/\D/g,"");
    const msg = encodeURIComponent("Bonjour, je souhaite soumettre une requête via e-META.");
    const url = num ? `https://wa.me/${num}?text=${msg}` : `https://wa.me/?text=${msg}`;
    window.open(url,"_blank");
  });
});
