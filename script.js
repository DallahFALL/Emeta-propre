/* =====================================================
   e-META — script.js FINAL
   - Langue globale unique (localStorage)
   - RTL automatique pour AR
   - Aucun i18n exécuté sur privacy.html
===================================================== */

(function () {
  "use strict";

  const LANG_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";

  /* ==========================
     LANGUE GLOBALE
  ========================== */

  function getLang() {
    return localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
  }

  // Appliquer la langue dès le chargement
  const currentLang = getLang();
  setLang(currentLang);

  /* ==========================
     SELECTEUR DE LANGUE (INDEX UNIQUEMENT)
  ========================== */

  const langSelect = document.querySelector("[data-lang-select]");
  if (langSelect) {
    langSelect.value = currentLang;

    langSelect.addEventListener("change", (e) => {
      setLang(e.target.value);
      location.reload();
    });
  }

  /* ==========================
     I18N — UNIQUEMENT SUR INDEX
  ========================== */

  if (document.body.dataset.page === "home" && window.I18N) {
    const translations = window.I18N[currentLang] || {};

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (translations[key]) {
        el.innerHTML = translations[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (translations[key]) {
        el.placeholder = translations[key];
      }
    });
  }

})();
