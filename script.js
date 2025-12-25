/* =====================================================
   e-META — script.js (i18n + UI FIX)
===================================================== */

const translations = {
  fr: {
    tagline: "Assistant IA multilingue de prise de décision",
    "nav.home": "Accueil",
    "nav.form": "Formulaire",
    "nav.privacy": "Confidentialité",
    "cta.start": "Démarrer une analyse stratégique",
    "footer.back": "Retour à l’accueil",
    "footer.copy": "e-META © 2025 — Assistant IA de décision stratégique"
  },
  en: {
    tagline: "Multilingual AI decision intelligence assistant",
    "nav.home": "Home",
    "nav.form": "Form",
    "nav.privacy": "Privacy",
    "cta.start": "Start a strategic analysis",
    "footer.back": "Back to home",
    "footer.copy": "e-META © 2025 — AI decision intelligence assistant"
  },
  ar: {
    tagline: "مساعد ذكي متعدد اللغات لاتخاذ القرار",
    "nav.home": "الرئيسية",
    "nav.form": "النموذج",
    "nav.privacy": "الخصوصية",
    "cta.start": "بدء تحليل استراتيجي",
    "footer.back": "العودة إلى الرئيسية",
    "footer.copy": "© e-META 2025 — مساعد ذكي لاتخاذ القرار"
  }
};

/* ---------- APPLY TRANSLATIONS ---------- */
function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  localStorage.setItem("lang", lang);
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "fr";
  const switcher = document.getElementById("languageSwitcher");

  if (switcher) {
    switcher.value = savedLang;
    switcher.addEventListener("change", e => {
      applyTranslations(e.target.value);
    });
  }

  applyTranslations(savedLang);

  /* Burger menu */
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");
  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  /* CTA scroll */
  const cta = document.querySelector(".cta-primary");
  const form = document.getElementById("form");
  if (cta && form) {
    cta.addEventListener("click", () => {
      form.scrollIntoView({ behavior: "smooth" });
    });
  }

  /* Reset form */
  const resetBtn = document.querySelector(".btn-secondary");
  const formEl = document.querySelector("form");
  if (resetBtn && formEl) {
    resetBtn.addEventListener("click", () => {
      formEl.reset();
    });
  }
});
