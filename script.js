/* =====================================================
   e-META — script.js
   i18n + RTL + UI fixes
===================================================== */

const translations = {
  fr: {
    tagline: "Assistant IA multilingue de prise de décision",
    "nav.home": "Accueil",
    "nav.form": "Formulaire",
    "nav.privacy": "Confidentialité",

    "hero.title": "Donnez à vos décisions le niveau d’un cabinet de consulting premium",
    "hero.subtitle": "e-META analyse votre contexte, vos objectifs et vos contraintes pour produire une recommandation claire et actionnable.",
    "cta.start": "Démarrer une analyse stratégique",

    "form.submit": "Envoyer ma requête",
    "form.reset": "Réinitialiser le formulaire",

    "footer.text": "e-META — Assistant IA de décision stratégique",
    "footer.privacy": "Politique de confidentialité"
  },

  en: {
    tagline: "Multilingual AI decision intelligence assistant",
    "nav.home": "Home",
    "nav.form": "Form",
    "nav.privacy": "Privacy",

    "hero.title": "Give your decisions the level of a premium consulting firm",
    "hero.subtitle": "e-META analyzes your context, objectives and constraints to deliver clear, actionable recommendations.",
    "cta.start": "Start a strategic analysis",

    "form.submit": "Submit request",
    "form.reset": "Reset form",

    "footer.text": "e-META — Strategic decision intelligence assistant",
    "footer.privacy": "Privacy policy"
  },

  ar: {
    tagline: "مساعد ذكي متعدد اللغات لاتخاذ القرار",
    "nav.home": "الرئيسية",
    "nav.form": "النموذج",
    "nav.privacy": "الخصوصية",

    "hero.title": "امنح قراراتك مستوى مكاتب الاستشارات المتميزة",
    "hero.subtitle": "يحلل e-META سياقك وأهدافك وقيودك لتقديم توصيات واضحة وقابلة للتنفيذ.",
    "cta.start": "بدء تحليل استراتيجي",

    "form.submit": "إرسال الطلب",
    "form.reset": "إعادة تعيين النموذج",

    "footer.text": "e-META — مساعد ذكي لاتخاذ القرار الاستراتيجي",
    "footer.privacy": "سياسة الخصوصية"
  }
};

/* ===== APPLY LANGUAGE ===== */
function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // RTL CSS
  let rtl = document.getElementById("rtl-css");
  if (lang === "ar") {
    if (!rtl) {
      rtl = document.createElement("link");
      rtl.rel = "stylesheet";
      rtl.href = "rtl.css";
      rtl.id = "rtl-css";
      document.head.appendChild(rtl);
    }
  } else if (rtl) {
    rtl.remove();
  }

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("languageSwitcher");
  const saved = localStorage.getItem("lang") || "fr";
  if (switcher) {
    switcher.value = saved;
    switcher.addEventListener("change", e => applyLanguage(e.target.value));
  }
  applyLanguage(saved);
});
