/* =====================================================
   e-META — script.js
   Langues globales + RTL + placeholders + persistance
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "emeta_lang";

  const langSelect = document.getElementById("langSelect");
  const rtlStylesheet = document.getElementById("rtlStylesheet");

  function applyTranslations(lang) {
    if (!window.I18N || !I18N[lang]) return;

    /* Texte classique */
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (I18N[lang][key]) {
        el.innerHTML = I18N[lang][key];
      }
    });

    /* Placeholders */
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (I18N[lang][key]) {
        el.setAttribute("placeholder", I18N[lang][key]);
      }
    });

    /* Direction RTL */
    if (lang === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
      rtlStylesheet?.removeAttribute("disabled");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", lang);
      rtlStylesheet?.setAttribute("disabled", "true");
    }

    localStorage.setItem(STORAGE_KEY, lang);
  }

  /* Initialisation */
  const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  if (langSelect) langSelect.value = savedLang;
  applyTranslations(savedLang);

  /* Changement manuel */
  langSelect?.addEventListener("change", e => {
    applyTranslations(e.target.value);
  });
});
