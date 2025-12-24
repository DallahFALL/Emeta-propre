(function () {
  const rtlStylesheet = document.getElementById("rtlStylesheet");
  const langBtn = document.getElementById("langBtn");
  const langMenu = document.getElementById("langMenu");
  const langLabel = document.getElementById("langLabel");

  const I18N = {
    fr: {
      "tagline": "Assistant IA multilingue de prise de décision",
      "nav.home": "Accueil",
      "nav.form": "Formulaire",
      "nav.privacy": "Confidentialité",
      "cta.start": "Commencer",
      "cta.startLong": "Démarrer une analyse stratégique",
      "cta.privacy": "Voir la politique",
      "hero.title": "Donnez à vos décisions le niveau d’un cabinet de conseil premium",
      "hero.subtitle": "e-META analyse votre contexte, objectifs, contraintes et risques pour produire une synthèse claire, actionnable et multilingue.",
      "hero.b1": "Analyse structurée : problème, objectifs, contraintes, risques, KPI",
      "hero.b2": "Recommandations : options, arbitrages, plan d’action",
      "hero.b3": "Restitution : Email, WhatsApp, PDF ou affichage direct",
      "hero.badge": "PRO v5.0 — International",
      "hero.mini": "Temps estimé : 5–10 min • Synthèse premium • Décisions plus rapides",
      "problem_title": "Le vrai problème",
      "problem_1": "Trop d’informations, pas assez de clarté",
      "problem_2": "Décisions basées sur l’intuition, pas sur une structure",
      "problem_3": "L’expertise “cabinet” est coûteuse ou inaccessible",
      "form.title": "Formulaire e-META — Version Ultra-Premium",
      "form.intro": "Plus vos réponses sont précises, plus la synthèse e-META sera professionnelle et exploitable.",
      "footer.note": "Assistant IA de décision — restitution Email / WhatsApp / PDF / Affichage.",
      "footer.top": "Haut de page"
    },
    en: {
      "tagline": "Multilingual AI decision assistant",
      "nav.home": "Home",
      "nav.form": "Form",
      "nav.privacy": "Privacy",
      "cta.start": "Start",
      "cta.startLong": "Start a strategic analysis",
      "cta.privacy": "View policy",
      "hero.title": "Upgrade your decisions to premium consulting level",
      "hero.subtitle": "e-META analyzes context, goals, constraints and risks to deliver a clear, actionable multilingual synthesis.",
      "hero.b1": "Structured analysis: problem, goals, constraints, risks, KPIs",
      "hero.b2": "Recommendations: options, tradeoffs, action plan",
      "hero.b3": "Delivery: Email, WhatsApp, PDF or on-page display",
      "hero.badge": "PRO v5.0 — International",
      "hero.mini": "Estimated time: 5–10 min • Premium output • Faster decisions",
      "problem_title": "The real problem",
      "problem_1": "Too much information, not enough clarity",
      "problem_2": "Decisions based on intuition, not structure",
      "problem_3": "Consulting expertise is expensive or inaccessible",
      "form.title": "e-META Form — Ultra-Premium Version",
      "form.intro": "The more precise your answers, the more professional and actionable the e-META synthesis becomes.",
      "footer.note": "AI decision assistant — Email / WhatsApp / PDF / On-page delivery.",
      "footer.top": "Back to top"
    },
    es: {
      "tagline": "Asistente IA multilingüe para la toma de decisiones",
      "nav.home": "Inicio",
      "nav.form": "Formulario",
      "nav.privacy": "Privacidad",
      "cta.start": "Empezar",
      "cta.startLong": "Iniciar un análisis estratégico",
      "cta.privacy": "Ver política",
      "hero.title": "Lleva tus decisiones al nivel de una consultoría premium",
      "hero.subtitle": "e-META analiza contexto, objetivos, restricciones y riesgos para generar una síntesis clara, accionable y multilingüe.",
      "hero.b1": "Análisis estructurado: problema, objetivos, restricciones, riesgos, KPI",
      "hero.b2": "Recomendaciones: opciones, compromisos, plan de acción",
      "hero.b3": "Entrega: Email, WhatsApp, PDF o visualización en la página",
      "hero.badge": "PRO v5.0 — Internacional",
      "hero.mini": "Tiempo estimado: 5–10 min • Resultado premium • Decisiones más rápidas",
      "problem_title": "El problema real",
      "problem_1": "Demasiada información, poca claridad",
      "problem_2": "Decisiones por intuición, no por estructura",
      "problem_3": "La consultoría es costosa o inaccesible",
      "form.title": "Formulario e-META — Versión Ultra-Premium",
      "form.intro": "Cuanto más precisas sean tus respuestas, más profesional y útil será la síntesis de e-META.",
      "footer.note": "Asistente IA — entrega por Email / WhatsApp / PDF / en pantalla.",
      "footer.top": "Arriba"
    },
    ar: {
      "tagline": "مساعد ذكاء اصطناعي متعدد اللغات لاتخاذ القرار",
      "nav.home": "الرئيسية",
      "nav.form": "النموذج",
      "nav.privacy": "الخصوصية",
      "cta.start": "ابدأ",
      "cta.startLong": "ابدأ تحليلاً استراتيجياً",
      "cta.privacy": "عرض السياسة",
      "hero.title": "امنح قراراتك مستوى استشارات احترافية",
      "hero.subtitle": "يقوم e-META بتحليل السياق والأهداف والقيود والمخاطر لإنتاج خلاصة واضحة قابلة للتنفيذ وبعدة لغات.",
      "hero.b1": "تحليل منظم: المشكلة، الأهداف، القيود، المخاطر، مؤشرات الأداء",
      "hero.b2": "توصيات: خيارات، مفاضلات، خطة عمل",
      "hero.b3": "الإخراج: بريد إلكتروني، واتساب، PDF أو عرض داخل الصفحة",
      "hero.badge": "PRO v5.0 — دولي",
      "hero.mini": "الوقت المتوقع: 5–10 دقائق • مخرجات احترافية • قرارات أسرع",
      "problem_title": "المشكلة الحقيقية",
      "problem_1": "معلومات كثيرة دون وضوح كافٍ",
      "problem_2": "قرارات حدسية دون إطار منظم",
      "problem_3": "الخبرة الاستشارية مكلفة أو غير متاحة",
      "form.title": "نموذج e-META — نسخة Ultra-Premium",
      "form.intro": "كلما كانت إجاباتك أدق، كانت خلاصة e-META أكثر احترافية وقابلية للتنفيذ.",
      "footer.note": "مساعد قرار بالذكاء الاصطناعي — بريد/واتساب/PDF/عرض مباشر.",
      "footer.top": "أعلى الصفحة"
    }
  };

  function setDir(lang) {
    const isRtl = lang === "ar";
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    rtlStylesheet.disabled = !isRtl;
  }

  function applyI18n(lang) {
    const dict = I18N[lang] || I18N.fr;
    document.documentElement.lang = lang;
    setDir(lang);

    // Text nodes
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });

    // Optional: aria-label
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key]) el.setAttribute("aria-label", dict[key]);
    });

    // UI label
    if (langLabel) langLabel.textContent = lang.toUpperCase();
  }

  function saveLang(lang) {
    localStorage.setItem("emeta_lang", lang);
  }

  function getLang() {
    return localStorage.getItem("emeta_lang") || "fr";
  }

  // Lang dropdown
  function toggleMenu(force) {
    const open = typeof force === "boolean" ? force : (langMenu.style.display !== "block");
    langMenu.style.display = open ? "block" : "none";
    langBtn.setAttribute("aria-expanded", String(open));
  }

  if (langBtn && langMenu) {
    langBtn.addEventListener("click", () => toggleMenu());
    document.addEventListener("click", (e) => {
      if (!langMenu.contains(e.target) && !langBtn.contains(e.target)) toggleMenu(false);
    });
    langMenu.querySelectorAll("button[data-lang]").forEach(btn => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        saveLang(lang);
        applyI18n(lang);
        toggleMenu(false);
      });
    });
  }

  // Init
  applyI18n(getLang());
})();
