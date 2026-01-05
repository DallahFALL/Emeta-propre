/* =====================================================
   e-META — script.js FINAL STABLE
   - Langue globale (localStorage)
   - Compatible index.html + privacy.html
   - Aucun impact sur responsive
===================================================== */

(function () {
  "use strict";

  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "lang";

  /* ---------- Utils ---------- */
  function getSavedLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function saveLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function setDirection(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }

  /* ---------- Traduction ---------- */
  function translatePage(lang) {
    if (!window.I18N || !window.I18N[lang]) return;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const value = window.I18N[lang][key];
      if (value) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const value = window.I18N[lang][key];
      if (value) el.setAttribute("placeholder", value);
    });
  }

  /* ---------- Initialisation ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    const lang = getSavedLang();
    setDirection(lang);
    translatePage(lang);

    // Le sélecteur de langue n'existe QUE sur index.html
    const switcher = document.getElementById("langSwitcher");
    if (switcher) {
      switcher.value = lang;

      switcher.addEventListener("change", () => {
        const newLang = switcher.value;
        saveLang(newLang);
        setDirection(newLang);
        translatePage(newLang);
      });
    }
  });

})();
