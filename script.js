/* =====================================================
   e-META — script.js FINAL i18n + RTL
===================================================== */

(function () {
  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "emeta_lang";
  const rtlSheet = document.getElementById("rtlStylesheet");

  const I18N = {
    fr: {
      tagline: "Assistant IA multilingue de prise de décision",
      "nav.home": "Accueil",
      "nav.form": "Formulaire",
      "nav.privacy": "Confidentialité",

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
      problem_transition: "e-META structure votre réflexion et transforme la complexité en décisions claires et actionnables.",

      "form.title": "Formulaire e-META — Version Ultra-Premium",
      "form.intro": "Complétez les champs ci-dessous pour recevoir votre analyse stratégique personnalisée.",

      "footer.text": "e-META © 2025 — Assistant IA de décision stratégique",
      "footer.privacy": "Politique de confidentialité"
       "privacy.title": "Politique de confidentialité",
"privacy.intro": "Cette politique explique comment e-META collecte, utilise et protège vos données.",
"privacy.s1.title": "1. Responsable du traitement",
"privacy.s1.text": "e-META est édité par son porteur de projet.",
"privacy.s2.title": "2. Données collectées",
"privacy.s2.item1": "Informations fournies dans le formulaire.",
"privacy.s2.item2": "Coordonnées si renseignées.",
"privacy.s2.item3": "Liens vers des documents externes.",
"privacy.s3.title": "3. Finalité du traitement",
"privacy.s3.text": "Produire une analyse stratégique personnalisée.",
"privacy.back": "Retour à l’accueil"
    },

    en: {
      tagline: "Multilingual AI decision intelligence assistant",
      "nav.home": "Home",
      "nav.form": "Form",
      "nav.privacy": "Privacy",

      "hero.title": "Give your decisions the level of a premium consulting firm",
      "hero.subtitle": "e-META analyzes your context, objectives, constraints, KPIs and resources to deliver clear, actionable recommendations.",
      "hero.claim": "e-META is not a chatbot. It is a decision intelligence engine inspired by top-tier consulting frameworks.",

      "cta.start": "Start a strategic analysis",

      "hero.point1": "Structured analysis: problem, objectives, constraints, risks, KPIs.",
      "hero.point2": "Actionable synthesis: recommendations, action plan, deliverables.",
      "hero.point3": "Personalized output: Email, WhatsApp, PDF or direct display.",

      "hero.badge.title": "PRO Version v5.0",
      "hero.badge.text": "Ultra-premium form inspired by Deloitte / EY consulting firms.",
      "hero.note": "Estimated time: 5–10 minutes. Benefit: hours of structured thinking.",

      problem_title: "The real problem",
      problem_intro: "Strategic decisions are often complex, unstructured, and taken without a clear framework.",
      problem_transition: "e-META structures your thinking and turns complexity into clear, actionable decisions.",

      "form.title": "e-META Form — Ultra-Premium Version",
      "form.intro": "Complete the fields below to receive your personalized strategic analysis.",

      "footer.text": "e-META © 2025 — Strategic decision AI assistant",
      "footer.privacy": "Privacy policy"
   "privacy.title": "Privacy policy",
"privacy.intro": "This policy explains how e-META collects, uses and protects your data.",
"privacy.s1.title": "1. Data controller",
"privacy.s1.text": "e-META is operated by its project owner.",
"privacy.s2.title": "2. Data collected",
"privacy.s2.item1": "Information provided through the form.",
"privacy.s2.item2": "Contact details if provided.",
"privacy.s2.item3": "Links to external documents.",
"privacy.s3.title": "3. Purpose",
"privacy.s3.text": "To deliver a personalized strategic analysis.",
"privacy.back": "Back to home"
    },

    ar: {
      tagline: "مساعد ذكاء اصطناعي متعدد اللغات لاتخاذ القرار",
      "nav.home": "الرئيسية",
      "nav.form": "النموذج",
      "nav.privacy": "الخصوصية",

      "hero.title": "امنح قراراتك مستوى مكاتب الاستشارات الاحترافية",
      "hero.subtitle": "يقوم e-META بتحليل السياق والأهداف والقيود ومؤشرات الأداء والموارد لتقديم توصيات واضحة وقابلة للتنفيذ.",
      "hero.claim": "e-META ليس روبوت دردشة، بل محرك ذكاء قراري مستوحى من أفضل أطر الاستشارات.",

      "cta.start": "بدء تحليل استراتيجي",

      "hero.point1": "تحليل منظم: المشكلة، الأهداف، القيود، المخاطر، مؤشرات الأداء.",
      "hero.point2": "خلاصة عملية: توصيات، خطة عمل، مخرجات.",
      "hero.point3": "نتائج مخصصة: بريد إلكتروني، واتساب، PDF أو عرض مباشر.",

      "hero.badge.title": "الإصدار الاحترافي v5.0",
      "hero.badge.text": "نموذج احترافي مستوحى من Deloitte و EY.",
      "hero.note": "الوقت المتوقع: من 5 إلى 10 دقائق. الفائدة: تفكير منظم.",

      problem_title: "المشكلة الحقيقية",
      problem_intro: "غالبًا ما تكون القرارات الاستراتيجية معقدة وغير منظمة.",
      problem_transition: "يقوم e-META بتحويل التعقيد إلى قرارات واضحة.",

      "form.title": "نموذج e-META — الإصدار الاحترافي",
      "form.intro": "املأ الحقول أدناه للحصول على تحليل استراتيجي مخصص.",

      "footer.text": "© e-META 2025 — مساعد ذكاء اصطناعي لاتخاذ القرار",
      "footer.privacy": "سياسة الخصوصية"
       "privacy.title": "سياسة الخصوصية",
"privacy.intro": "توضح هذه السياسة كيفية جمع واستخدام وحماية بياناتك.",
"privacy.s1.title": "1. مسؤول المعالجة",
"privacy.s1.text": "يتم تشغيل e-META من قبل صاحب المشروع.",
"privacy.s2.title": "2. البيانات التي يتم جمعها",
"privacy.s2.item1": "المعلومات المقدمة عبر النموذج.",
"privacy.s2.item2": "بيانات الاتصال إذا تم إدخالها.",
"privacy.s2.item3": "روابط لمستندات خارجية.",
"privacy.s3.title": "3. الغرض من المعالجة",
"privacy.s3.text": "تقديم تحليل استراتيجي مخصص.",
"privacy.back": "العودة إلى الصفحة الرئيسية"
    }
  };

  function applyLang(lang) {
    const dict = I18N[lang] || I18N[DEFAULT_LANG];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    if (rtlSheet) rtlSheet.disabled = lang !== "ar";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  const saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  applyLang(saved);

  const switcher = document.getElementById("languageSwitcher");
  if (switcher) {
    switcher.value = saved;
    switcher.addEventListener("change", e => applyLang(e.target.value));
  }
})();
