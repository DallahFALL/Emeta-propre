/* ================= e-META i18n GLOBAL ================= */

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

    // Activer TOUS les sélecteurs de langue existants
    document.querySelectorAll("select").forEach(sel => {
      if ([...sel.options].some(o => ["fr","en","es","ar"].includes(o.value?.toLowerCase()))) {
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
