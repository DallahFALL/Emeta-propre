(function () {
  "use strict";

  const STORAGE_KEY = "lang";
  const DEFAULT_LANG = "fr";

  const I18N = {
    fr: {
      "header.tagline": "Assistant IA multilingue de prise de décision",
      "nav.home": "Accueil",
      "nav.form": "Formulaire",
      "nav.privacy": "Confidentialité",
      "btn.customRequest": "Requête personnalisée",

      "hero.title": "Donnez à vos décisions le niveau d’un cabinet de consulting premium",
      "hero.subtitle": "Analyse stratégique structurée, exploitable et professionnelle.",
      "hero.cta": "Démarrer une analyse stratégique",
      "hero.panel": "Version PRO v5.0 – inspirée des cabinets Deloitte / EY.",

      "form.title": "Formulaire e-META – Version Ultra-Premium",
      "form.intro": "Remplissez les champs ci-dessous pour recevoir votre synthèse e-META.",

      "footer.text": "© e-META 2025 — Strategic decision intelligence assistant",
      "footer.privacy": "Politique de confidentialité"
    },

    en: {
      "header.tagline": "Multilingual AI decision assistant",
      "nav.home": "Home",
      "nav.form": "Form",
      "nav.privacy": "Privacy",
      "btn.customRequest": "Custom request",

      "hero.title": "Give your decisions the level of a premium consulting firm",
      "hero.subtitle": "Structured, actionable and professional strategic analysis.",
      "hero.cta": "Start strategic analysis",
      "hero.panel": "PRO v5.0 version – inspired by Deloitte / EY frameworks.",

      "form.title": "e-META Form – Ultra-Premium Version",
      "form.intro": "Fill in the fields below to receive your e-META synthesis.",

      "footer.text": "© e-META 2025 — Strategic decision intelligence assistant",
      "footer.privacy": "Privacy policy"
    },

    es: {
      "header.tagline": "Asistente IA multilingüe para la toma de decisiones",
      "nav.home": "Inicio",
      "nav.form": "Formulario",
      "nav.privacy": "Privacidad",
      "btn.customRequest": "Solicitud personalizada",

      "hero.title": "Lleve sus decisiones al nivel de una consultoría premium",
      "hero.subtitle": "Análisis estratégico estructurado y accionable.",
      "hero.cta": "Iniciar análisis estratégico",
      "hero.panel": "Versión PRO v5.0 inspirada en Deloitte / EY.",

      "form.title": "Formulario e-META – Versión Ultra-Premium",
      "form.intro": "Complete los campos para recibir su síntesis e-META.",

      "footer.text": "© e-META 2025 — Asistente de inteligencia estratégica",
      "footer.privacy": "Política de privacidad"
    },

    ar: {
      "header.tagline": "مساعد ذكاء اصطناعي متعدد اللغات لاتخاذ القرار",
      "nav.home": "الرئيسية",
      "nav.form": "النموذج",
      "nav.privacy": "الخصوصية",
      "btn.customRequest": "طلب مخصص",

      "hero.title": "امنح قراراتك مستوى مكاتب الاستشارات المتميزة",
      "hero.subtitle": "تحليل استراتيجي واضح وقابل للتنفيذ.",
      "hero.cta": "بدء التحليل الاستراتيجي",
      "hero.panel": "الإصدار الاحترافي v5.0 مستوحى من Deloitte / EY.",

      "form.title": "نموذج e-META – النسخة الاحترافية",
      "form.intro": "يرجى ملء الحقول للحصول على التحليل.",

      "footer.text": "© e-META 2025 — مساعد ذكاء اتخاذ القرار",
      "footer.privacy": "سياسة الخصوصية"
    }
  };

  function applyLanguage(lang) {
    if (!I18N[lang]) lang = DEFAULT_LANG;
    localStorage.setItem(STORAGE_KEY, lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    const rtl = document.getElementById("rtlStylesheet");
    if (rtl) rtl.disabled = lang !== "ar";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = I18N[lang][key] || "";
    });

    const switcher = document.getElementById("languageSwitcher");
    if (switcher) switcher.value = lang;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    applyLanguage(saved);

    const switcher = document.getElementById("languageSwitcher");
    if (switcher) {
      switcher.addEventListener("change", e => applyLanguage(e.target.value));
    }

    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");
    if (burger && nav) {
      burger.addEventListener("click", () => nav.classList.toggle("open"));
    }

    const cta = document.getElementById("ctaRequest");
    if (cta) {
      cta.addEventListener("click", () => {
        document.getElementById("form").scrollIntoView({ behavior: "smooth" });
      });
    }
  });
})();
