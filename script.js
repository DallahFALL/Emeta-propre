/* =====================================================
   e-META — script.js (i18n GLOBAL + RTL)
===================================================== */

const translations = {
  fr: {
    tagline: "Assistant IA multilingue de prise de décision",
    "nav.home": "Accueil",
    "nav.form": "Formulaire",
    "nav.privacy": "Confidentialité",

    "hero.title": "Donnez à vos décisions le niveau d’un cabinet de consulting premium",
    "hero.subtitle": "e-META analyse votre contexte, vos objectifs, vos contraintes, vos KPIs et vos ressources pour générer une feuille de route claire, exploitable et documentée.",
    "hero.claim": "e-META n’est pas un chatbot. C’est un moteur d’intelligence décisionnelle inspiré par des cadres de conseil de premier ordre.",

    "cta.start": "Démarrer une analyse stratégique",

    "footer.text": "e-META © 2025 — Assistant IA de décision stratégique",
    "footer.privacy": "Politique de confidentialité",
    "footer.back": "Retour à l’accueil"
  },

  en: {
    tagline: "Multilingual AI decision intelligence assistant",
    "nav.home": "Home",
    "nav.form": "Form",
    "nav.privacy": "Privacy",

    "hero.title": "Give your decisions the level of a premium consulting firm",
    "hero.subtitle": "e-META analyzes your context, objectives and constraints to deliver clear, actionable recommendations.",
    "hero.claim": "e-META is not a chatbot. It is a decision intelligence engine inspired by top-tier consulting frameworks.",

    "cta.start": "Start a strategic analysis",

    "footer.text": "e-META © 2025 — Strategic decision AI assistant",
    "footer.privacy": "Privacy policy",
    "footer.back": "Back to home"
  },

  ar: {
    tagline: "مساعد ذكاء اصطناعي متعدد اللغات لاتخاذ القرار",
    "nav.home": "الرئيسية",
    "nav.form": "النموذج",
    "nav.privacy": "الخصوصية",

    "hero.title": "امنح قراراتك مستوى شركات الاستشارات العالمية",
    "hero.subtitle": "يقوم e-META بتحليل السياق والأهداف والقيود ومؤشرات الأداء لتقديم توصيات واضحة وقابلة للتنفيذ.",
    "hero.claim": "e-META ليس روبوت دردشة، بل محرك ذكاء لاتخاذ القرار مستوحى من أطر الاستشارات العالمية.",

    "cta.start": "بدء تحليل استراتيجي",

    "footer.text": "e-META © 2025 — مساعد ذكاء استراتيجي",
    "footer.privacy": "سياسة الخصوصية",
    "footer.back": "العودة إلى الرئيسية"
  }
};

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  const rtlStylesheet = document.getElementById("rtlStylesheet");
  if (rtlStylesheet) {
    rtlStylesheet.disabled = lang !== "ar";
  }

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "fr";
  applyLanguage(savedLang);

  const switcher = document.getElementById("languageSwitcher");
  if (switcher) {
    switcher.value = savedLang;
    switcher.addEventListener("change", e => {
      applyLanguage(e.target.value);
    });
  }

  // Burger menu
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");
  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
});
