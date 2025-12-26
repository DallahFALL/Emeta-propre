/* =====================================================
   e-META — script.js FINAL & STABLE
   International i18n + RTL + Responsive-safe
===================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";

  /* ================= I18N DICTIONARY ================= */
  const I18N = {
    fr: {
      tagline: "Assistant IA multilingue de prise de décision",

      "nav.home": "Accueil",
      "nav.form": "Formulaire",
      "nav.privacy": "Confidentialité",

      "cta.start": "Démarrer une analyse stratégique",
      "btn.customRequest": "Requête personnalisée",

      "hero.title": "Donnez à vos décisions le niveau d’un cabinet de consulting premium",
      "hero.subtitle":
        "e-META analyse votre contexte, vos objectifs, vos contraintes, vos KPIs et vos ressources pour générer une feuille de route claire, exploitable et documentée.",
      "hero.claim":
        "e-META n’est pas un chatbot. C’est un moteur d’intelligence décisionnelle inspiré par des cadres de conseil de premier ordre.",

      /* PROBLEM BLOCK */
      "problem_title": "Le vrai problème",
      "problem_intro":
        "Les décisions stratégiques sont souvent complexes, non structurées et prises sans cadre clair.",
      "problem_transition":
        "e-META structure votre réflexion et transforme la complexité en décisions claires et actionnables.",
      "problem_1": "Trop d’informations, pas assez de clarté",
      "problem_2": "Décisions basées sur l’intuition plutôt que sur une méthode",
      "problem_3": "Accès limité à l’expertise stratégique",

      /* FORM */
      "form.title": "Formulaire e-META — Version Ultra-Premium",
      "form.intro":
        "Complétez les champs ci-dessous pour recevoir votre analyse stratégique personnalisée.",
      "form.send": "Envoyer ma requête",
      "form.reset": "Réinitialiser le formulaire",

      /* FOOTER */
      "footer.text": "e-META © 2025 — Assistant IA de décision stratégique",
      "footer.privacy": "Politique de confidentialité"
    },

    en: {
      tagline: "Multilingual AI decision intelligence assistant",

      "nav.home": "Home",
      "nav.form": "Form",
      "nav.privacy": "Privacy",

      "cta.start": "Start a strategic analysis",
      "btn.customRequest": "Custom request",

      "hero.title": "Give your decisions the level of a premium consulting firm",
      "hero.subtitle":
        "e-META analyzes your context, objectives, constraints, KPIs and resources to deliver clear, actionable recommendations.",
      "hero.claim":
        "e-META is not a chatbot. It is a decision intelligence engine inspired by top-tier consulting frameworks.",

      "problem_title": "The real problem",
      "problem_intro":
        "Strategic decisions are often complex, unstructured, and taken without a clear framework.",
      "problem_transition":
        "e-META structures your thinking and transforms complexity into clear, actionable decisions.",
      "problem_1": "Too much information, not enough clarity",
      "problem_2": "Decisions based on intuition rather than structure",
      "problem_3": "Limited access to strategic expertise",

      "form.title": "e-META Form — Ultra-Premium Version",
      "form.intro":
        "Complete the fields below to receive your personalized strategic analysis.",
      "form.send": "Submit my request",
      "form.reset": "Reset the form",

      "footer.text": "e-META © 2025 — Strategic decision intelligence assistant",
      "footer.privacy": "Privacy policy"
    },

    es: {
      tagline: "Asistente de inteligencia decisional con IA multilingüe",

      "nav.home": "Inicio",
      "nav.form": "Formulario",
      "nav.privacy": "Privacidad",

      "cta.start": "Iniciar análisis estratégico",
      "btn.customRequest": "Solicitud personalizada",

      "hero.title":
        "Lleve sus decisiones al nivel de una consultoría premium",
      "hero.subtitle":
        "e-META analiza su contexto, objetivos, restricciones, KPIs y recursos para generar recomendaciones claras.",
      "hero.claim":
        "e-META no es un chatbot. Es un motor de inteligencia decisional inspirado en consultoras líderes.",

      "problem_title": "El verdadero problema",
      "problem_intro":
        "Las decisiones estratégicas suelen ser complejas, no estructuradas y tomadas sin un marco claro.",
      "problem_transition":
        "e-META estructura su pensamiento y transforma la complejidad en decisiones accionables.",
      "problem_1": "Demasiada información, poca claridad",
      "problem_2": "Decisiones basadas en intuición",
      "problem_3": "Acceso limitado a la consultoría estratégica",

      "form.title": "Formulario e-META — Versión Ultra-Premium",
      "form.intro":
        "Complete los campos para recibir su análisis estratégico personalizado.",
      "form.send": "Enviar solicitud",
      "form.reset": "Restablecer formulario",

      "footer.text": "e-META © 2025 — Asistente de inteligencia decisional",
      "footer.privacy": "Política de privacidad"
    },

    ar: {
      tagline: "مساعد ذكي متعدد اللغات لاتخاذ القرار",

      "nav.home": "الرئيسية",
      "nav.form": "النموذج",
      "nav.privacy": "الخصوصية",

      "cta.start": "بدء التحليل الاستراتيجي",
      "btn.customRequest": "طلب مخصص",

      "hero.title":
        "امنح قراراتك مستوى مكاتب الاستشارات المتميزة",
      "hero.subtitle":
        "يحلل e-META سياقك وأهدافك وقيودك ومؤشرات الأداء والموارد لإنشاء توصيات واضحة.",
      "hero.claim":
        "e-META ليس روبوت محادثة، بل محرك ذكاء لاتخاذ القرار مستوحى من أطر استشارية عالمية.",

      "problem_title": "المشكلة الحقيقية",
      "problem_intro":
        "غالبًا ما تكون القرارات الاستراتيجية معقدة وغير منظمة وتُتخذ دون إطار واضح.",
      "problem_transition":
        "يقوم e-META بتنظيم تفكيرك وتحويل التعقيد إلى قرارات قابلة للتنفيذ.",
      "problem_1": "كثرة المعلومات وقلة الوضوح",
      "problem_2": "قرارات مبنية على الحدس",
      "problem_3": "صعوبة الوصول إلى الخبرة الاستراتيجية",

      "form.title": "نموذج e-META — الإصدار الاحترافي",
      "form.intro":
        "يرجى ملء الحقول أدناه للحصول على التحليل الاستراتيجي الخاص بك.",
      "form.send": "إرسال الطلب",
      "form.reset": "إعادة تعيين النموذج",

      "footer.text": "e-META © 2025 — مساعد ذكي لاتخاذ القرار",
      "footer.privacy": "سياسة الخصوصية"
    }
  };

  /* ================= CORE ================= */

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && I18N[saved]) return saved;
    const nav = navigator.language.slice(0, 2);
    return I18N[nav] ? nav : DEFAULT_LANG;
  }

  function applyLanguage(lang) {
    if (!I18N[lang]) lang = DEFAULT_LANG;

    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    const rtlCss = document.getElementById("rtlStylesheet");
    if (rtlCss) rtlCss.disabled = lang !== "ar";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (I18N[lang][key]) el.textContent = I18N[lang][key];
    });

    const switcher = document.getElementById("languageSwitcher");
    if (switcher) switcher.value = lang;
  }

  function initLanguageSwitcher() {
    const switcher = document.getElementById("languageSwitcher");
    if (!switcher) return;
    switcher.addEventListener("change", e => applyLanguage(e.target.value));
  }

  function initCTA() {
    const btn = document.getElementById("ctaStart");
    if (!btn) return;
    btn.addEventListener("click", () => {
      document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLanguageSwitcher();
    initCTA();
    applyLanguage(getLang());
  });

})();
