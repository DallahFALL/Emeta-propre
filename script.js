/* =====================================================
   e-META — script.js FINAL
   Stable • Anti-clés manquantes • i18n safe
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

  function applyI18n(lang) {
    const dict = window.I18N[lang] || window.I18N[DEFAULT_LANG];

    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    applyI18n(lang);

    const select = document.getElementById("langSelect");
    if (select) {
      select.value = lang;
      select.addEventListener("change", () => {
        setLang(select.value);
        location.reload();
      });
    }

    document.querySelectorAll('a[href="privacy.html"]').forEach(link => {
      link.href = "privacy.html";
    });
  });
})();
