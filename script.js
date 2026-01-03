/* =====================================================
   e-META — script.js FINAL STABLE
   - Une seule source de vérité pour la langue
   - Compatible index.html + privacy.html
   - Support AR + RTL
===================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "lang";
  const DEFAULT_LANG = "fr";

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

    if (typeof window.applyTranslations === "function") {
      window.applyTranslations(lang);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    applyLang(lang);

    document.querySelectorAll("select.lang-select").forEach(select => {
      select.value = lang;
      select.addEventListener("change", e => {
        const next = e.target.value;
        localStorage.setItem(STORAGE_KEY, next);
        applyLang(next);
      });
    });
  });

})();
