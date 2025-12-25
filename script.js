/* =========================
   e-META — script.js
   i18n + menu + RTL
========================= */

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

    problem_title: "Le vrai problème",
    problem_1: "Trop d’informations, pas assez de clarté",
    problem_2: "Décisions basées sur l’intuition, pas sur une structure",
    problem_3: "L’expertise de conseil est coûteuse ou inaccessible",

    "form.send": "Envoyer ma requête",
    "form.reset": "Réinitialiser le formulaire",

    "footer.text": "e-META © 2025 — Assistant IA de décision stratégique",
    "footer.privacy": "Politique de confidentialité"
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

    problem_title: "The real problem",
    problem_1: "Too much information, not enough clarity",
    problem_2: "Decisions based on intuition, not structure",
    problem_3: "Consulting expertise is expensive or inaccessible",

    "form.send": "Submit request",
    "form.reset": "Reset form",

    "footer.text": "e-META © 2025 — Strategic decision intelligence assistant",
    "footer.privacy": "Privacy policy"
  },

  ar: {
    tagline: "مساعد ذكاء اصطناعي لاتخاذ القرار",
    "nav.home": "الرئيسية",
    "nav.form": "النموذج",
    "nav.privacy": "الخصوصية",

    "hero.title": "امنح قراراتك مستوى شركات الاستشارات الكبرى",
    "hero.subtitle": "يقوم e-META بتحليل السياق والأهداف والقيود لتقديم توصيات واضحة وقابلة للتنفيذ.",
    "hero.claim": "e-META ليس روبوت محادثة، بل محرك ذكاء لاتخاذ القرار مستوحى من أطر استشارية عالمية.",
    "cta.start": "ابدأ تحليلاً استراتيجياً",

    problem_title: "المشكلة الحقيقية",
    problem_1: "كثرة المعلومات دون وضوح",
    problem_2: "قرارات غير منظمة",
    problem_3: "الاستشارات مكلفة أو غير متاحة",

    "form.send": "إرسال الطلب",
    "form.reset": "إعادة تعيين النموذج",

    "footer.text": "e-META © 2025 — مساعد ذكاء لاتخاذ القرار",
    "footer.privacy": "سياسة الخصوصية"
  }
};

/* ===== Apply language ===== */
function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.getElementById("rtlStylesheet").disabled = lang !== "ar";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);
}

/* ===== Init ===== */
document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("languageSwitcher");
  const savedLang = localStorage.getItem("lang") || "fr";

  langSelect.value = savedLang;
  applyLanguage(savedLang);

  langSelect.addEventListener("change", e => {
    applyLanguage(e.target.value);
  });

  /* Burger menu */
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");

  burger?.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});
