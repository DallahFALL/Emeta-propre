/* =====================================================
   e-META — script.js FINAL (NO HTML TOUCH)
   - Active i18n sur TOUTES les pages
   - Ne modifie AUCUN HTML
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

    // 🔒 Appliquer la langue à TOUTE la page
    applyLang(lang);

    // 🔒 Synchroniser tous les selects de langue (s'il y en a)
    document.querySelectorAll("select").forEach(sel => {
      if (sel.options.length >= 4) {
        sel.value = lang;
        sel.addEventListener("change", e => {
          const next = e.target.value;
          localStorage.setItem(STORAGE_KEY, next);
          applyLang(next);
        });
      }
    });
  });

})();
