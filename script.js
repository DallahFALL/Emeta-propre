/* =====================================================
   e-META — script.js FINAL (GLOBAL)
   - Lang select (id="langSelect" ou tout <select> compatible)
   - localStorage key UNIQUE : "lang"
   - Appelle window.applyTranslations(lang)
===================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "lang";
  const DEFAULT_LANG = "fr";
  const SUPPORTED = ["fr", "en", "es", "ar"];

  function getLang() {
    const v = (localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG).toLowerCase();
    return SUPPORTED.includes(v) ? v : DEFAULT_LANG;
  }

  function setLang(lang) {
    const v = (lang || DEFAULT_LANG).toLowerCase();
    const finalLang = SUPPORTED.includes(v) ? v : DEFAULT_LANG;

    localStorage.setItem(STORAGE_KEY, finalLang);

    // RTL
    document.documentElement.lang = finalLang;
    document.documentElement.dir = finalLang === "ar" ? "rtl" : "ltr";

    // Translation engine (from i18n.js)
    if (typeof window.applyTranslations === "function") {
      window.applyTranslations(finalLang);
    }

    // Sync selects
    document.querySelectorAll("select").forEach((sel) => {
      const hasLangOptions = [...sel.options].some((o) => SUPPORTED.includes((o.value || "").toLowerCase()));
      if (hasLangOptions) sel.value = finalLang;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    // init
    setLang(getLang());

    // bind all selects having lang options
    document.querySelectorAll("select").forEach((sel) => {
      const hasLangOptions = [...sel.options].some((o) => SUPPORTED.includes((o.value || "").toLowerCase()));
      if (!hasLangOptions) return;

      sel.addEventListener("change", (e) => setLang(e.target.value));
    });
  });
})();
