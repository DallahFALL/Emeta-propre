/* =====================================================
   e-META — script.js FINAL (Langue globale unique)
   - Langue stockée dans localStorage
   - Appliquée automatiquement sur toutes les pages
   - Support FR / EN / ES / AR (+ RTL auto)
===================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function applyLang(lang) {
    const dict = window.I18N && window.I18N[lang];
    if (!dict) return;

    // HTML lang + dir
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // Text nodes
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    applyLang(lang);

    // Sélecteur de langue (UNIQUEMENT si présent)
    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.value = lang;
      langSelect.addEventListener("change", () => {
        const newLang = langSelect.value;
        setLang(newLang);
        applyLang(newLang);
      });
    }
  });

})();
