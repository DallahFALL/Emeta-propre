/* =====================================================
   e-META — script.js (FINAL)
   - i18n dynamique (FR/EN/ES/AR) + placeholders + values
   - RTL auto (dir + rtl.css)
   - Burger menu mobile
   - CTA scroll vers #form
===================================================== */
(function () {
  "use strict";

  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "emeta_lang";

  const rtlSheet = document.getElementById("rtlStylesheet");

  const qs = (sel, root = document) => root.querySelector(sel);
  const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const I18N = {
    fr: {
      "meta.title": "e-META",
      tagline: "Assistant IA multilingue de prise de décision",
      "nav.home": "Accueil",
      "nav.form": "Formulaire",
      "nav.privacy": "Confidentialité",
      "btn.custom": "Requête personnalisée",

      "hero.title": "Donnez à vos décisions le niveau d’un cabinet de consulting premium",
      "hero.subtitle": "e-META analyse votre contexte, vos objectifs, vos contraintes, vos KPIs et vos ressources pour générer une feuille de route claire, exploitable et documentée.",
      "hero.claim": "e-META n’est pas un chatbot. C’est un moteur d’intelligence décisionnelle inspiré par des cadres de conseil de premier ordre.",
      "cta.start": "Démarrer une analyse stratégique",
      "hero.point1": "Analyse structurée : problème, objectifs, contraintes, risques, KPIs.",
      "hero.point2": "Synthèse actionnable : recommandations, plan d’actions, livrables.",
      "hero.point3": "Restitution personnalisée : Email, WhatsApp, PDF ou affichage direct.",
      "hero.badge.title": "Version PRO v5.0",
      "hero.badge.text": "Formulaire ultra-premium, inspiré des cabinets Deloitte / EY.",
      "hero.note": "Temps estimé : 5 à 10 minutes. Gain : des heures de réflexion structurée.",

      problem_title: "Le vrai problème",
      problem_intro: "Les décisions stratégiques sont souvent complexes, non structurées et prises sans cadre clair.",
      "problem_1": "Trop d’informations, pas assez de clarté",
      "problem_2": "Décisions basées sur l’intuition, pas sur une structure",
      "problem_3": "L’expertise de conseil est coûteuse ou inaccessible",
      problem_transition: "e-META structure votre réflexion et transforme la complexité en décisions claires et actionnables.",

      "form.title": "Formulaire e-META — Version Ultra-Premium",
      "form.intro": "Complétez les champs ci-dessous pour recevoir votre analyse stratégique personnalisée.",
      "form.send": "Envoyer ma requête",
      "form.reset": "Réinitialiser le formulaire",

      "footer.text": "e-META © 2025 — Assistant IA de décision stratégique",
      "footer.privacy": "Politique de confidentialité",

      "privacy.meta.title": "Politique de confidentialité – e-META",
      "privacy.title": "Politique de confidentialité",
      "privacy.intro": "Cette politique explique comment e-META collecte, utilise et protège vos informations lorsque vous utilisez notre service.",
      "privacy.section1.title": "1. Responsable du traitement",
      "privacy.section1.text": "Le service e-META est édité par son porteur de projet. Pour toute question liée à la protection des données, utilisez les coordonnées indiquées sur le site.",
      "privacy.section2.title": "2. Données collectées",
      "privacy.section2.text": "Les catégories de données suivantes peuvent être collectées :",
      "privacy.section2.item1": "Informations fournies volontairement dans le formulaire (contexte, objectifs, contraintes, données de projet).",
      "privacy.section2.item2": "Coordonnées de contact si vous les renseignez (adresse e-mail, numéro WhatsApp).",
      "privacy.section2.item3": "Liens vers des documents externes (Drive, Dropbox, Notion, PDF en ligne, etc.).",
      "privacy.section3.title": "3. Finalités du traitement",
      "privacy.section3.item1": "Générer une synthèse décisionnelle structurée (analyse, options, recommandations).",
      "privacy.section3.item2": "Restituer le résultat via e-mail, WhatsApp, PDF ou affichage selon votre choix.",
      "privacy.section3.item3": "Améliorer la qualité du service (statistiques techniques non nominatives).",
      "privacy.section4.title": "4. Base légale",
      "privacy.section4.text1": "Le traitement repose sur votre consentement, donné lors de l’envoi du formulaire.",
      "privacy.section4.text2": "Vous pouvez retirer votre consentement à tout moment en nous contactant.",
      "privacy.section5.title": "5. Conservation",
      "privacy.section5.text": "Les données sont conservées le temps nécessaire au traitement de votre demande et à la fourniture du service.",
      "privacy.section6.title": "6. Partage des données",
      "privacy.section6.text": "Aucune donnée personnelle n’est vendue. Les données peuvent être traitées par des prestataires techniques strictement nécessaires (hébergement, e-mail, messagerie).",
      "privacy.section7.title": "7. Sécurité",
      "privacy.section7.text": "Nous mettons en œuvre des mesures de sécurité adaptées pour protéger vos informations contre l’accès non autorisé.",
      "privacy.section8.title": "8. Vos droits",
      "privacy.section8.item1": "Droit d’accès",
      "privacy.section8.item2": "Droit de rectification",
      "privacy.section8.item3": "Droit d’effacement",
      "privacy.section8.item4": "Droit d’opposition et de limitation",
      "privacy.section9.title": "9. Transferts internationaux",
      "privacy.section9.text": "Certains services techniques peuvent impliquer des transferts de données hors de votre pays, avec des garanties adaptées.",
      "privacy.section10.title": "10. Contact",
      "privacy.section10.text": "Pour toute demande liée à la confidentialité, contactez-nous via les coordonnées indiquées sur le site.",
      "privacy.back": "Retour à l’accueil"
    },

    en: {
      "meta.title": "e-META",
      tagline: "Multilingual AI decision intelligence assistant",
      "nav.home": "Home",
      "nav.form": "Form",
      "nav.privacy": "Privacy",
      "btn.custom": "Custom request",

      "hero.title": "Give your decisions the level of a premium consulting firm",
      "hero.subtitle": "e-META analyzes your context, objectives, constraints, KPIs and resources to generate a clear, actionable roadmap.",
      "hero.claim": "e-META is not a chatbot. It is a decision intelligence engine inspired by top-tier consulting frameworks.",
      "cta.start": "Start a strategic analysis",
      "hero.point1": "Structured analysis: problem, objectives, constraints, risks, KPIs.",
      "hero.point2": "Actionable synthesis: recommendations, action plan, deliverables.",
      "hero.point3": "Personalized output: Email, WhatsApp, PDF, or on-screen display.",
      "hero.badge.title": "PRO Version v5.0",
      "hero.badge.text": "Ultra-premium form inspired by Deloitte / EY consulting firms.",
      "hero.note": "Estimated time: 5–10 minutes. Benefit: hours of structured thinking.",

      problem_title: "The real problem",
      problem_intro: "Strategic decisions are often complex, unstructured, and taken without a clear framework.",
      "problem_1": "Too much information, not enough clarity",
      "problem_2": "Decisions based on intuition instead of structure",
      "problem_3": "Consulting expertise is expensive or inaccessible",
      problem_transition: "e-META structures your thinking and turns complexity into clear, actionable decisions.",

      "form.title": "e-META Form — Ultra-Premium Version",
      "form.intro": "Complete the fields below to receive your personalized strategic analysis.",
      "form.send": "Submit request",
      "form.reset": "Reset form",

      "footer.text": "e-META © 2025 — Strategic decision AI assistant",
      "footer.privacy": "Privacy policy",

      "privacy.meta.title": "Privacy policy – e-META",
      "privacy.title": "Privacy policy",
      "privacy.intro": "This policy explains how e-META collects, uses, and protects your information when you use our service.",
      "privacy.section1.title": "1. Data controller",
      "privacy.section1.text": "e-META is operated by its project owner. For any privacy question, use the contact details provided on the website.",
      "privacy.section2.title": "2. Data collected",
      "privacy.section2.text": "The following data categories may be collected:",
      "privacy.section2.item1": "Information voluntarily provided in the form (context, objectives, constraints, project data).",
      "privacy.section2.item2": "Contact details if provided (email address, WhatsApp number).",
      "privacy.section2.item3": "Links to external documents (Drive, Dropbox, Notion, online PDFs, etc.).",
      "privacy.section3.title": "3. Purposes",
      "privacy.section3.item1": "Generate a structured decision summary (analysis, options, recommendations).",
      "privacy.section3.item2": "Deliver the result via email, WhatsApp, PDF or on-screen display, according to your choice.",
      "privacy.section3.item3": "Improve service quality (non-identifying technical statistics).",
      "privacy.section4.title": "4. Legal basis",
      "privacy.section4.text1": "Processing is based on your consent when you submit the form.",
      "privacy.section4.text2": "You can withdraw your consent at any time by contacting us.",
      "privacy.section5.title": "5. Retention",
      "privacy.section5.text": "Data is retained only as long as necessary to process your request and provide the service.",
      "privacy.section6.title": "6. Data sharing",
      "privacy.section6.text": "No personal data is sold. Data may be processed by strictly necessary technical providers (hosting, email, messaging).",
      "privacy.section7.title": "7. Security",
      "privacy.section7.text": "We implement appropriate security measures to protect your information from unauthorized access.",
      "privacy.section8.title": "8. Your rights",
      "privacy.section8.item1": "Right of access",
      "privacy.section8.item2": "Right to rectification",
      "privacy.section8.item3": "Right to erasure",
      "privacy.section8.item4": "Right to object and restrict processing",
      "privacy.section9.title": "9. International transfers",
      "privacy.section9.text": "Some technical services may involve cross-border transfers, with appropriate safeguards.",
      "privacy.section10.title": "10. Contact",
      "privacy.section10.text": "For any privacy request, contact us using the details provided on the website.",
      "privacy.back": "Back to home"
    },

    es: {
      "meta.title": "e-META",
      tagline: "Asistente multilingüe de IA para decisiones",
      "nav.home": "Inicio",
      "nav.form": "Formulario",
      "nav.privacy": "Privacidad",
      "btn.custom": "Solicitud personalizada",

      "hero.title": "Lleva tus decisiones al nivel de una consultora premium",
      "hero.subtitle": "e-META analiza tu contexto, objetivos, restricciones, KPIs y recursos para generar una hoja de ruta clara y accionable.",
      "hero.claim": "e-META no es un chatbot. Es un motor de inteligencia decisional inspirado en marcos de consultoría de primer nivel.",
      "cta.start": "Iniciar un análisis estratégico",
      "hero.point1": "Análisis estructurado: problema, objetivos, restricciones, riesgos, KPIs.",
      "hero.point2": "Síntesis accionable: recomendaciones, plan de acción, entregables.",
      "hero.point3": "Salida personalizada: Email, WhatsApp, PDF o pantalla.",
      "hero.badge.title": "Versión PRO v5.0",
      "hero.badge.text": "Formulario ultra-premium inspirado en Deloitte / EY.",
      "hero.note": "Tiempo estimado: 5–10 min. Beneficio: horas de pensamiento estructurado.",

      problem_title: "El problema real",
      problem_intro: "Las decisiones estratégicas suelen ser complejas, poco estructuradas y tomadas sin un marco claro.",
      "problem_1": "Demasiada información, poca claridad",
      "problem_2": "Decisiones por intuición en lugar de estructura",
      "problem_3": "La consultoría es cara o inaccesible",
      problem_transition: "e-META estructura tu pensamiento y convierte la complejidad en decisiones claras y accionables.",

      "form.title": "Formulario e-META — Versión Ultra-Premium",
      "form.intro": "Completa los campos para recibir tu análisis estratégico personalizado.",
      "form.send": "Enviar solicitud",
      "form.reset": "Restablecer formulario",

      "footer.text": "e-META © 2025 — Asistente IA para decisiones estratégicas",
      "footer.privacy": "Política de privacidad",

      "privacy.meta.title": "Política de privacidad – e-META",
      "privacy.title": "Política de privacidad",
      "privacy.intro": "Esta política explica cómo e-META recopila, utiliza y protege tu información.",
      "privacy.section1.title": "1. Responsable",
      "privacy.section1.text": "e-META es operado por su propietario del proyecto. Para cualquier consulta, usa los datos del sitio.",
      "privacy.section2.title": "2. Datos recopilados",
      "privacy.section2.text": "Se pueden recopilar las siguientes categorías:",
      "privacy.section2.item1": "Información proporcionada en el formulario (contexto, objetivos, restricciones, datos del proyecto).",
      "privacy.section2.item2": "Datos de contacto si se proporcionan (email, WhatsApp).",
      "privacy.section2.item3": "Enlaces a documentos externos (Drive, Dropbox, Notion, PDF, etc.).",
      "privacy.section3.title": "3. Finalidades",
      "privacy.section3.item1": "Generar una síntesis estructurada (análisis, opciones, recomendaciones).",
      "privacy.section3.item2": "Entregar el resultado por email, WhatsApp, PDF o pantalla.",
      "privacy.section3.item3": "Mejorar el servicio (estadísticas técnicas no identificativas).",
      "privacy.section4.title": "4. Base legal",
      "privacy.section4.text1": "El tratamiento se basa en tu consentimiento al enviar el formulario.",
      "privacy.section4.text2": "Puedes retirar tu consentimiento en cualquier momento contactándonos.",
      "privacy.section5.title": "5. Conservación",
      "privacy.section5.text": "Los datos se conservan solo el tiempo necesario para prestar el servicio.",
      "privacy.section6.title": "6. Compartición",
      "privacy.section6.text": "No se venden datos personales. Pueden intervenir proveedores técnicos necesarios (hosting, email, mensajería).",
      "privacy.section7.title": "7. Seguridad",
      "privacy.section7.text": "Aplicamos medidas de seguridad adecuadas para proteger tu información.",
      "privacy.section8.title": "8. Tus derechos",
      "privacy.section8.item1": "Acceso",
      "privacy.section8.item2": "Rectificación",
      "privacy.section8.item3": "Supresión",
      "privacy.section8.item4": "Oposición y limitación",
      "privacy.section9.title": "9. Transferencias internacionales",
      "privacy.section9.text": "Algunos servicios pueden implicar transferencias con garantías apropiadas.",
      "privacy.section10.title": "10. Contacto",
      "privacy.section10.text": "Para solicitudes de privacidad, contáctanos con los datos del sitio.",
      "privacy.back": "Volver al inicio"
    },

    ar: {
      "meta.title": "e-META",
      tagline: "مساعد ذكاء اصطناعي متعدد اللغات لاتخاذ القرار",
      "nav.home": "الرئيسية",
      "nav.form": "النموذج",
      "nav.privacy": "الخصوصية",
      "btn.custom": "طلب مخصص",

      "hero.title": "امنح قراراتك مستوى مكاتب الاستشارات الاحترافية",
      "hero.subtitle": "يقوم e-META بتحليل السياق والأهداف والقيود ومؤشرات الأداء والموارد لتقديم خارطة طريق واضحة وقابلة للتنفيذ.",
      "hero.claim": "e-META ليس روبوت دردشة، بل محرك ذكاء قراري مستوحى من أفضل أطر الاستشارات.",
      "cta.start": "بدء تحليل استراتيجي",
      "hero.point1": "تحليل منظم: المشكلة، الأهداف، القيود، المخاطر، مؤشرات الأداء.",
      "hero.point2": "خلاصة عملية: توصيات، خطة عمل، مخرجات.",
      "hero.point3": "نتائج مخصصة: بريد إلكتروني، واتساب، PDF أو عرض مباشر.",
      "hero.badge.title": "الإصدار الاحترافي v5.0",
      "hero.badge.text": "نموذج احترافي مستوحى من Deloitte و EY.",
      "hero.note": "الوقت المتوقع: 5–10 دقائق. الفائدة: تفكير منظم.",

      problem_title: "المشكلة الحقيقية",
      problem_intro: "غالبًا ما تكون القرارات الاستراتيجية معقدة وغير منظمة ويتم اتخاذها دون إطار واضح.",
      "problem_1": "معلومات كثيرة دون وضوح كافٍ",
      "problem_2": "قرارات بالحدس بدل المنهجية",
      "problem_3": "الاستشارات مكلفة أو غير متاحة",
      problem_transition: "يساعدك e-META على تنظيم التفكير وتحويل التعقيد إلى قرارات واضحة وقابلة للتنفيذ.",

      "form.title": "نموذج e-META — الإصدار الفاخر",
      "form.intro": "املأ الحقول أدناه للحصول على تحليل استراتيجي مخصص.",
      "form.send": "إرسال الطلب",
      "form.reset": "إعادة ضبط النموذج",

      "footer.text": "© e-META 2025 — مساعد ذكاء اصطناعي لاتخاذ القرار",
      "footer.privacy": "سياسة الخصوصية",

      "privacy.meta.title": "سياسة الخصوصية – e-META",
      "privacy.title": "سياسة الخصوصية",
      "privacy.intro": "توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك عند استخدام الخدمة.",
      "privacy.section1.title": "1. مسؤول المعالجة",
      "privacy.section1.text": "يتم تشغيل e-META من قبل صاحب المشروع. لأي استفسار، استخدم معلومات الاتصال الموجودة على الموقع.",
      "privacy.section2.title": "2. البيانات التي يتم جمعها",
      "privacy.section2.text": "قد يتم جمع الفئات التالية من البيانات:",
      "privacy.section2.item1": "المعلومات المقدمة في النموذج (السياق، الأهداف، القيود، بيانات المشروع).",
      "privacy.section2.item2": "بيانات الاتصال إذا تم إدخالها (البريد الإلكتروني، رقم واتساب).",
      "privacy.section2.item3": "روابط لمستندات خارجية (Drive, Dropbox, Notion, PDF...).",
      "privacy.section3.title": "3. الأهداف",
      "privacy.section3.item1": "إنشاء ملخص قراري منظم (تحليل، خيارات، توصيات).",
      "privacy.section3.item2": "إرسال النتيجة عبر البريد الإلكتروني أو واتساب أو PDF أو عرض مباشر.",
      "privacy.section3.item3": "تحسين جودة الخدمة (إحصاءات تقنية غير تعريفية).",
      "privacy.section4.title": "4. الأساس القانوني",
      "privacy.section4.text1": "تعتمد المعالجة على موافقتك عند إرسال النموذج.",
      "privacy.section4.text2": "يمكنك سحب الموافقة في أي وقت عبر التواصل معنا.",
      "privacy.section5.title": "5. مدة الاحتفاظ",
      "privacy.section5.text": "يتم الاحتفاظ بالبيانات للمدة اللازمة لتقديم الخدمة ومعالجة الطلب.",
      "privacy.section6.title": "6. مشاركة البيانات",
      "privacy.section6.text": "لا يتم بيع البيانات الشخصية. قد تتم المعالجة عبر مزودين تقنيين ضروريين فقط.",
      "privacy.section7.title": "7. الأمان",
      "privacy.section7.text": "نطبق إجراءات أمان مناسبة لحماية معلوماتك من الوصول غير المصرح به.",
      "privacy.section8.title": "8. حقوقك",
      "privacy.section8.item1": "حق الوصول",
      "privacy.section8.item2": "حق التصحيح",
      "privacy.section8.item3": "حق الحذف",
      "privacy.section8.item4": "حق الاعتراض والتقييد",
      "privacy.section9.title": "9. التحويلات الدولية",
      "privacy.section9.text": "قد تتضمن بعض الخدمات تحويلات دولية مع ضمانات مناسبة.",
      "privacy.section10.title": "10. تواصل",
      "privacy.section10.text": "لطلبات الخصوصية، تواصل معنا عبر بيانات الموقع.",
      "privacy.back": "العودة للرئيسية"
    }
  };

  function setRTL(isRtl) {
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    if (rtlSheet) rtlSheet.disabled = !isRtl;
  }

  function applyTextI18n(dict) {
    qsa("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = dict[key];
      if (typeof val === "string") el.textContent = val;
    });

    qsa("[data-i18n-placeholder], input[placeholder], textarea[placeholder]").forEach((el) => {
      const keyAttr = el.getAttribute("data-i18n-placeholder");
      const ph = el.getAttribute("placeholder");
      const key = keyAttr || ph;
      if (key && dict[key]) el.setAttribute("placeholder", dict[key]);
    });

    qsa("[data-i18n-value]").forEach((el) => {
      const key = el.getAttribute("data-i18n-value");
      if (key && dict[key]) el.value = dict[key];
    });

    const titleKeyEl = qs("title[data-i18n]");
    if (titleKeyEl) {
      const k = titleKeyEl.getAttribute("data-i18n");
      if (k && dict[k]) document.title = dict[k];
    } else if (dict["meta.title"]) {
      document.title = dict["meta.title"];
    }
  }

  function applyLang(lang) {
    const dict = I18N[lang] || I18N[DEFAULT_LANG];
    document.documentElement.lang = lang;
    setRTL(lang === "ar");
    applyTextI18n(dict);

    const switcher = qs("#languageSwitcher");
    if (switcher && switcher.value !== lang) switcher.value = lang;

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function initBurger() {
    const burger = qs("#burgerBtn");
    const nav = qs("#mainNav");
    if (!burger || !nav) return;

    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    qsa("a", nav).forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("open")) return;
      if (nav.contains(e.target) || burger.contains(e.target)) return;
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  }

  function initCTA() {
    const cta = qs("#ctaStart");
    if (cta) {
      cta.addEventListener("click", () => {
        const form = qs("#form");
        if (form) form.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
    const btn = qs("#btnCustomRequest");
    if (btn) {
      btn.addEventListener("click", () => {
        const form = qs("#form");
        if (form) form.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  function initLangSwitcher() {
    const switcher = qs("#languageSwitcher");
    if (!switcher) return;
    switcher.addEventListener("change", (e) => applyLang(e.target.value));
  }

  document.addEventListener("DOMContentLoaded", () => {
    initBurger();
    initCTA();
    initLangSwitcher();
    applyLang(localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG);
  });
})();

burgerBtn.addEventListener("click", () => {
  mainNav.classList.toggle("open");
  /* ===============================
   MOBILE MENU — FIX FINAL
=============================== */
document.addEventListener("DOMContentLoaded", () => {

  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");

  if (!burger || !nav) return;

  // Toggle menu
  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu when clicking a link
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("open")) return;
    if (nav.contains(e.target) || burger.contains(e.target)) return;
    nav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  });

});
 
});

