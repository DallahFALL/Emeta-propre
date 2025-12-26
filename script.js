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
