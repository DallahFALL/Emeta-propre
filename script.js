/* =====================================================
   e-META — script.js (FINAL)
   - i18n FR / EN / ES / AR (RTL auto)
   - Persist langue (localStorage)
   - Burger menu mobile
   - CTA scroll vers #form
   - Support data-i18n + data-i18n-placeholder
===================================================== */

(function () {
  "use strict";

  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "emeta_lang";
  const rtlSheet = document.getElementById("rtlStylesheet");

  // ---------- i18n DICTIONARY ----------
  const I18N = {
    fr: {
      // Global
      tagline: "Assistant IA multilingue de prise de décision",

      "nav.home": "Accueil",
      "nav.form": "Formulaire",
      "nav.privacy": "Confidentialité",

      // Hero
      "hero.title": "Donnez à vos décisions le niveau d’un cabinet de consulting premium",
      "hero.subtitle":
        "e-META analyse votre contexte, vos objectifs, vos contraintes, vos KPIs et vos ressources pour générer une feuille de route claire, exploitable et documentée.",
      "hero.claim":
        "e-META n’est pas un chatbot. C’est un moteur d’intelligence décisionnelle inspiré par des cadres de conseil de premier ordre.",

      "cta.start": "Démarrer une analyse stratégique",

      "hero.point1": "Analyse structurée : problème, objectifs, contraintes, risques, KPIs.",
      "hero.point2": "Synthèse actionnable : recommandations, plan d’actions, livrables.",
      "hero.point3": "Restitution personnalisée : Email, WhatsApp, PDF ou affichage direct.",

      "hero.badge.title": "Version PRO v5.0",
      "hero.badge.text": "Formulaire ultra-premium, inspiré des cabinets Deloitte / EY.",
      "hero.note": "Temps estimé : 5 à 10 minutes. Gain : des heures de réflexion structurée.",

      // Problem section
      problem_title: "Le vrai problème",
      problem_intro:
        "Les décisions stratégiques sont souvent complexes, non structurées et prises sans cadre clair.",
      problem_1: "Trop d’informations, pas assez de clarté",
      problem_2: "Décisions basées sur l’intuition, pas sur une structure",
      problem_3: "L’expertise de conseil est coûteuse ou inaccessible",
      problem_transition:
        "e-META structure votre réflexion et transforme la complexité en décisions claires et actionnables.",

      // Form header (au-dessus de TON formulaire)
      "form.title": "Formulaire e-META — Version Ultra-Premium",
      "form.intro": "Complétez les champs ci-dessous pour recevoir votre analyse stratégique personnalisée.",

      // Form buttons
      "form.send": "Envoyer ma requête",
      "form.reset": "Réinitialiser le formulaire",

      // Footer
      "footer.text": "e-META © 2025 — Assistant IA de décision stratégique",
      "footer.privacy": "Politique de confidentialité",
      "footer.back": "Retour à l’accueil",

      // Privacy meta/title
      "privacy.meta.title": "Politique de confidentialité – e-META",
      "privacy.title": "Politique de confidentialité",
      "privacy.intro":
        "Cette politique explique comment e-META collecte, utilise et protège vos informations lorsque vous utilisez notre service.",

      "privacy.section1.title": "1. Responsable du traitement",
      "privacy.section1.text":
        "Le service e-META est édité par son porteur de projet. Pour toute question relative à la protection des données, utilisez les coordonnées indiquées sur le site.",

      "privacy.section2.title": "2. Données collectées",
      "privacy.section2.text": "Les catégories de données suivantes peuvent être collectées :",
      "privacy.section2.item1": "Informations fournies volontairement dans le formulaire (contexte, objectifs, contraintes, données de projet).",
      "privacy.section2.item2": "Coordonnées de contact si vous les renseignez (adresse e-mail, numéro WhatsApp).",
      "privacy.section2.item3": "Liens vers des documents externes (Drive, Dropbox, Notion, PDF en ligne, etc.).",

      "privacy.section3.title": "3. Finalités du traitement",
      "privacy.section3.item1": "Générer une synthèse décisionnelle structurée (analyse, options, recommandations).",
      "privacy.section3.item2": "Restituer le résultat via e-mail, WhatsApp, PDF ou affichage selon votre choix.",
      "privacy.section3.item3": "Améliorer la qualité du service (statistiques anonymisées si nécessaire).",

      "privacy.section4.title": "4. Base légale",
      "privacy.section4.text1": "Le traitement repose sur votre consentement lorsque vous soumettez le formulaire.",
      "privacy.section4.text2": "Certaines données peuvent être nécessaires pour exécuter le service demandé.",

      "privacy.section5.title": "5. Conservation des données",
      "privacy.section5.text":
        "Les données sont conservées pendant la durée strictement nécessaire à la génération et à la transmission de votre synthèse, sauf obligation légale contraire.",

      "privacy.section6.title": "6. Partage des données",
      "privacy.section6.text":
        "Aucune donnée personnelle n’est vendue. Les données peuvent transiter via des prestataires techniques (hébergement, e-mail, messagerie) uniquement pour fournir le service.",

      "privacy.section7.title": "7. Sécurité",
      "privacy.section7.text":
        "Des mesures de sécurité raisonnables sont mises en œuvre pour protéger vos informations contre l’accès non autorisé.",

      "privacy.section8.title": "8. Vos droits",
      "privacy.section8.item1": "Accès, rectification et suppression de vos données.",
      "privacy.section8.item2": "Limitation ou opposition au traitement dans certains cas.",
      "privacy.section8.item3": "Retrait du consentement à tout moment.",
      "privacy.section8.item4": "Réclamation auprès de l’autorité compétente si applicable.",

      "privacy.section9.title": "9. Transferts internationaux",
      "privacy.section9.text":
        "Selon les prestataires utilisés, certaines données peuvent être traitées en dehors de votre pays, avec des garanties appropriées.",

      "privacy.section10.title": "10. Contact",
      "privacy.section10.text":
        "Pour toute demande liée à la confidentialité, contactez l’équipe e-META via les informations publiées sur le site."
    },

    en: {
      tagline: "Multilingual AI decision intelligence assistant",

      "nav.home": "Home",
      "nav.form": "Form",
      "nav.privacy": "Privacy",

      "hero.title": "Give your decisions the level of a premium consulting firm",
      "hero.subtitle":
        "e-META analyzes your context, objectives, constraints, KPIs and resources to deliver clear, actionable recommendations.",
      "hero.claim":
        "e-META is not a chatbot. It is a decision intelligence engine inspired by top-tier consulting frameworks.",

      "cta.start": "Start a strategic analysis",

      "hero.point1": "Structured analysis: problem, objectives, constraints, risks, KPIs.",
      "hero.point2": "Actionable synthesis: recommendations, action plan, deliverables.",
      "hero.point3": "Personalized output: Email, WhatsApp, PDF or direct display.",

      "hero.badge.title": "PRO Version v5.0",
      "hero.badge.text": "Ultra-premium form inspired by Deloitte / EY consulting firms.",
      "hero.note": "Estimated time: 5–10 minutes. Benefit: hours of structured thinking.",

      problem_title: "The real problem",
      problem_intro:
        "Strategic decisions are often complex, unstructured, and taken without a clear framework.",
      problem_1: "Too much information, not enough clarity",
      problem_2: "Decisions based on intuition instead of structure",
      problem_3: "Consulting expertise is expensive or inaccessible",
      problem_transition:
        "e-META structures your thinking and transforms complexity into clear, actionable decisions.",

      "form.title": "e-META Form — Ultra-Premium Version",
      "form.intro": "Complete the fields below to receive your personalized strategic analysis.",

      "form.send": "Submit request",
      "form.reset": "Reset form",

      "footer.text": "e-META © 2025 — Strategic decision AI assistant",
      "footer.privacy": "Privacy policy",
      "footer.back": "Back to home",

      "privacy.meta.title": "Privacy Policy – e-META",
      "privacy.title": "Privacy Policy",
      "privacy.intro":
        "This policy explains how e-META collects, uses and protects your information when you use our service.",

      "privacy.section1.title": "1. Data controller",
      "privacy.section1.text":
        "e-META is operated by its project owner. For privacy requests, use the contact details published on the website.",

      "privacy.section2.title": "2. Data collected",
      "privacy.section2.text": "The following categories of data may be collected:",
      "privacy.section2.item1": "Information voluntarily provided in the form (context, objectives, constraints, project data).",
      "privacy.section2.item2": "Contact details if provided (email address, WhatsApp number).",
      "privacy.section2.item3": "Links to external documents (Drive, Dropbox, Notion, online PDFs, etc.).",

      "privacy.section3.title": "3. Purposes",
      "privacy.section3.item1": "Generate a structured decision summary (analysis, options, recommendations).",
      "privacy.section3.item2": "Deliver results via email, WhatsApp, PDF or on-screen display based on your choice.",
      "privacy.section3.item3": "Improve service quality (anonymous analytics if needed).",

      "privacy.section4.title": "4. Legal basis",
      "privacy.section4.text1": "Processing is based on your consent when you submit the form.",
      "privacy.section4.text2": "Some data may be required to provide the requested service.",

      "privacy.section5.title": "5. Data retention",
      "privacy.section5.text":
        "Data is kept only as long as necessary to generate and deliver your summary, unless legal obligations apply.",

      "privacy.section6.title": "6. Data sharing",
      "privacy.section6.text":
        "No personal data is sold. Data may transit through technical providers (hosting, email, messaging) only to deliver the service.",

      "privacy.section7.title": "7. Security",
      "privacy.section7.text":
        "Reasonable security measures are implemented to protect your information from unauthorized access.",

      "privacy.section8.title": "8. Your rights",
      "privacy.section8.item1": "Access, rectification and deletion of your data.",
      "privacy.section8.item2": "Restriction or objection to processing in some cases.",
      "privacy.section8.item3": "Withdraw consent at any time.",
      "privacy.section8.item4": "Lodge a complaint with the competent authority if applicable.",

      "privacy.section9.title": "9. International transfers",
      "privacy.section9.text":
        "Depending on providers, some data may be processed outside your country with appropriate safeguards.",

      "privacy.section10.title": "10. Contact",
      "privacy.section10.text":
        "For privacy-related requests, contact the e-META team using the details published on the website."
    },

    es: {
      tagline: "Asistente multilingüe de inteligencia para decisiones",

      "nav.home": "Inicio",
      "nav.form": "Formulario",
      "nav.privacy": "Privacidad",

      "hero.title": "Lleva tus decisiones al nivel de una consultora premium",
      "hero.subtitle":
        "e-META analiza tu contexto, objetivos, restricciones, KPIs y recursos para ofrecer recomendaciones claras y accionables.",
      "hero.claim":
        "e-META no es un chatbot. Es un motor de inteligencia decisional inspirado en marcos de consultoría de primer nivel.",

      "cta.start": "Iniciar un análisis estratégico",

      "hero.point1": "Análisis estructurado: problema, objetivos, restricciones, riesgos, KPIs.",
      "hero.point2": "Síntesis accionable: recomendaciones, plan de acción, entregables.",
      "hero.point3": "Salida personalizada: Email, WhatsApp, PDF o visualización directa.",

      "hero.badge.title": "Versión PRO v5.0",
      "hero.badge.text": "Formulario ultra-premium inspirado en Deloitte / EY.",
      "hero.note": "Tiempo estimado: 5–10 minutos. Beneficio: pensamiento estructurado.",

      problem_title: "El verdadero problema",
      problem_intro:
        "Las decisiones estratégicas suelen ser complejas, poco estructuradas y tomadas sin un marco claro.",
      problem_1: "Demasiada información, poca claridad",
      problem_2: "Decisiones por intuición en lugar de estructura",
      problem_3: "La consultoría es cara o inaccesible",
      problem_transition:
        "e-META estructura tu pensamiento y convierte la complejidad en decisiones claras y accionables.",

      "form.title": "Formulario e-META — Versión Ultra-Premium",
      "form.intro": "Completa los campos para recibir tu análisis estratégico personalizado.",

      "form.send": "Enviar solicitud",
      "form.reset": "Restablecer formulario",

      "footer.text": "e-META © 2025 — Asistente de decisiones estratégicas",
      "footer.privacy": "Política de privacidad",
      "footer.back": "Volver al inicio",

      "privacy.meta.title": "Política de Privacidad – e-META",
      "privacy.title": "Política de Privacidad",
      "privacy.intro":
        "Esta política explica cómo e-META recopila, usa y protege tu información cuando utilizas nuestro servicio.",

      "privacy.section1.title": "1. Responsable del tratamiento",
      "privacy.section1.text":
        "e-META es operado por el responsable del proyecto. Para solicitudes de privacidad, usa los datos de contacto publicados en el sitio.",

      "privacy.section2.title": "2. Datos recopilados",
      "privacy.section2.text": "Se pueden recopilar las siguientes categorías de datos:",
      "privacy.section2.item1": "Información proporcionada en el formulario (contexto, objetivos, restricciones, datos del proyecto).",
      "privacy.section2.item2": "Datos de contacto si se proporcionan (correo, WhatsApp).",
      "privacy.section2.item3": "Enlaces a documentos externos (Drive, Dropbox, Notion, PDFs, etc.).",

      "privacy.section3.title": "3. Finalidades",
      "privacy.section3.item1": "Generar un resumen decisional estructurado (análisis, opciones, recomendaciones).",
      "privacy.section3.item2": "Entregar resultados por email, WhatsApp, PDF o en pantalla según tu elección.",
      "privacy.section3.item3": "Mejorar la calidad del servicio (analíticas anónimas si es necesario).",

      "privacy.section4.title": "4. Base legal",
      "privacy.section4.text1": "El tratamiento se basa en tu consentimiento al enviar el formulario.",
      "privacy.section4.text2": "Algunos datos pueden ser necesarios para prestar el servicio solicitado.",

      "privacy.section5.title": "5. Conservación",
      "privacy.section5.text":
        "Los datos se conservan solo el tiempo necesario para generar y entregar tu resumen, salvo obligación legal.",

      "privacy.section6.title": "6. Compartición",
      "privacy.section6.text":
        "No se vende información personal. Los datos pueden pasar por proveedores técnicos solo para prestar el servicio.",

      "privacy.section7.title": "7. Seguridad",
      "privacy.section7.text":
        "Se aplican medidas razonables para proteger tu información contra accesos no autorizados.",

      "privacy.section8.title": "8. Tus derechos",
      "privacy.section8.item1": "Acceso, rectificación y eliminación de datos.",
      "privacy.section8.item2": "Limitación u oposición en ciertos casos.",
      "privacy.section8.item3": "Retirar el consentimiento en cualquier momento.",
      "privacy.section8.item4": "Presentar una reclamación ante la autoridad competente si aplica.",

      "privacy.section9.title": "9. Transferencias internacionales",
      "privacy.section9.text":
        "Según proveedores, los datos pueden tratarse fuera de tu país con garantías adecuadas.",

      "privacy.section10.title": "10. Contacto",
      "privacy.section10.text":
        "Para solicitudes de privacidad, contacta con el equipo e-META mediante los datos publicados en el sitio."
    },

    ar: {
      tagline: "مساعد ذكاء اصطناعي متعدد اللغات لاتخاذ القرار",

      "nav.home": "الرئيسية",
      "nav.form": "النموذج",
      "nav.privacy": "الخصوصية",

      "hero.title": "امنح قراراتك مستوى مكاتب الاستشارات الاحترافية",
      "hero.subtitle":
        "يقوم e-META بتحليل السياق والأهداف والقيود ومؤشرات الأداء والموارد لتقديم توصيات واضحة وقابلة للتنفيذ.",
      "hero.claim":
        "e-META ليس روبوت دردشة، بل محرك ذكاء قراري مستوحى من أطر استشارية من الدرجة الأولى.",

      "cta.start": "بدء تحليل استراتيجي",

      "hero.point1": "تحليل منظم: المشكلة، الأهداف، القيود، المخاطر، مؤشرات الأداء.",
      "hero.point2": "خلاصة عملية: توصيات، خطة عمل، مخرجات.",
      "hero.point3": "نتائج مخصصة: بريد إلكتروني، واتساب، PDF أو عرض مباشر.",

      "hero.badge.title": "الإصدار الاحترافي v5.0",
      "hero.badge.text": "نموذج احترافي مستوحى من Deloitte و EY.",
      "hero.note": "الوقت المتوقع: من 5 إلى 10 دقائق. الفائدة: تفكير منظم.",

      problem_title: "المشكلة الحقيقية",
      problem_intro:
        "غالبًا ما تكون القرارات الاستراتيجية معقدة وغير منظمة ويتم اتخاذها دون إطار واضح.",
      problem_1: "معلومات كثيرة دون وضوح كافٍ",
      problem_2: "قرارات بالحدس بدلًا من منهجية",
      problem_3: "الاستشارات مكلفة أو غير متاحة",
      problem_transition:
        "يقوم e-META بتنظيم تفكيرك وتحويل التعقيد إلى قرارات واضحة وقابلة للتنفيذ.",

      "form.title": "نموذج e-META — الإصدار الاحترافي",
      "form.intro": "املأ الحقول أدناه للحصول على تحليل استراتيجي مخصص.",

      "form.send": "إرسال الطلب",
      "form.reset": "إعادة ضبط النموذج",

      "footer.text": "© e-META 2025 — مساعد ذكاء لاتخاذ القرار",
      "footer.privacy": "سياسة الخصوصية",
      "footer.back": "العودة إلى الرئيسية",

      "privacy.meta.title": "سياسة الخصوصية – e-META",
      "privacy.title": "سياسة الخصوصية",
      "privacy.intro":
        "توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك عند استخدام خدمة e-META.",

      "privacy.section1.title": "1. مسؤول المعالجة",
      "privacy.section1.text":
        "يتم تشغيل e-META من قبل صاحب المشروع. لطلبات الخصوصية، استخدم بيانات الاتصال المنشورة على الموقع.",

      "privacy.section2.title": "2. البيانات التي يتم جمعها",
      "privacy.section2.text": "قد يتم جمع الفئات التالية من البيانات:",
      "privacy.section2.item1": "المعلومات المقدمة عبر النموذج (السياق، الأهداف، القيود، بيانات المشروع).",
      "privacy.section2.item2": "بيانات الاتصال إذا تم إدخالها (البريد الإلكتروني، رقم واتساب).",
      "privacy.section2.item3": "روابط لمستندات خارجية (Drive، Dropbox، Notion، PDF...).",

      "privacy.section3.title": "3. الأغراض",
      "privacy.section3.item1": "إنتاج ملخص قراري منظم (تحليل، خيارات، توصيات).",
      "privacy.section3.item2": "تسليم النتائج عبر البريد أو واتساب أو PDF أو العرض على الشاشة حسب اختيارك.",
      "privacy.section3.item3": "تحسين جودة الخدمة (إحصاءات مجهولة عند الحاجة).",

      "privacy.section4.title": "4. الأساس القانوني",
      "privacy.section4.text1": "تعتمد المعالجة على موافقتك عند إرسال النموذج.",
      "privacy.section4.text2": "قد تكون بعض البيانات ضرورية لتقديم الخدمة المطلوبة.",

      "privacy.section5.title": "5. مدة الاحتفاظ",
      "privacy.section5.text":
        "يتم الاحتفاظ بالبيانات فقط للمدة اللازمة لإنتاج وتسليم الملخص، ما لم توجد التزامات قانونية.",

      "privacy.section6.title": "6. مشاركة البيانات",
      "privacy.section6.text":
        "لا يتم بيع أي بيانات شخصية. قد تمر البيانات عبر مزودي خدمات تقنيين فقط لتقديم الخدمة.",

      "privacy.section7.title": "7. الأمان",
      "privacy.section7.text":
        "يتم تطبيق إجراءات أمان معقولة لحماية معلوماتك من الوصول غير المصرح به.",

      "privacy.section8.title": "8. حقوقك",
      "privacy.section8.item1": "الوصول إلى بياناتك وتصحيحها وحذفها.",
      "privacy.section8.item2": "تقييد المعالجة أو الاعتراض عليها في بعض الحالات.",
      "privacy.section8.item3": "سحب الموافقة في أي وقت.",
      "privacy.section8.item4": "تقديم شكوى للجهة المختصة إذا لزم الأمر.",

      "privacy.section9.title": "9. التحويلات الدولية",
      "privacy.section9.text":
        "وفقًا للمزودين، قد تتم معالجة البيانات خارج بلدك مع ضمانات مناسبة.",

      "privacy.section10.title": "10. التواصل",
      "privacy.section10.text":
        "لطلبات الخصوصية، تواصل مع فريق e-META عبر البيانات المنشورة على الموقع."
    }
  };

  // ---------- helpers ----------
  function normalizeLang(lang) {
    return (lang || "").toLowerCase().trim() || DEFAULT_LANG;
  }

  function setDirAndRTL(lang) {
    const isRTL = lang === "ar";
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    if (rtlSheet) rtlSheet.disabled = !isRTL;
  }

  function translatePage(dict) {
    // text nodes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }
    });

    // placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    // page title if present
    const t = document.querySelector('title[data-i18n="privacy.meta.title"]');
    if (t && dict["privacy.meta.title"]) document.title = dict["privacy.meta.title"];
  }

  function applyLang(lang) {
    const safeLang = normalizeLang(lang);
    const dict = I18N[safeLang] || I18N[DEFAULT_LANG];

    setDirAndRTL(safeLang);
    translatePage(dict);

    localStorage.setItem(STORAGE_KEY, safeLang);

    const switcher = document.getElementById("languageSwitcher");
    if (switcher) switcher.value = safeLang;
  }

  // ---------- burger menu ----------
  function setupBurger() {
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");
    if (!burger || !nav) return;

    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // close menu when clicking link (mobile)
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        if (nav.classList.contains("open")) {
          nav.classList.remove("open");
          burger.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // ---------- CTA scroll ----------
  function setupCTA() {
    const cta = document.getElementById("ctaStart");
    if (!cta) return;

    cta.addEventListener("click", () => {
      const formSection = document.getElementById("form");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth", block: "start" });
        // focus first input if exists
        const firstInput = formSection.querySelector("input, select, textarea, button");
        if (firstInput) setTimeout(() => firstInput.focus({ preventScroll: true }), 450);
      }
    });
  }

  // ---------- init ----------
  const savedLang = normalizeLang(localStorage.getItem(STORAGE_KEY)) || DEFAULT_LANG;

  document.addEventListener("DOMContentLoaded", () => {
    applyLang(savedLang);

    const switcher = document.getElementById("languageSwitcher");
    if (switcher) {
      switcher.value = savedLang;
      switcher.addEventListener("change", (e) => applyLang(e.target.value));
    }

    setupBurger();
    setupCTA();
  });
})();
