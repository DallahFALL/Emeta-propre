/* =====================================================
   e-META — script.js vNext (STABLE)
   - Lang persistence (index + privacy)
   - i18n FR / EN / ES / AR
   - URL param ?lang=xx (option PRO)
===================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";

  /* ===============================
     1. Déterminer la langue active
  =============================== */
  function getLang() {
    // 1️⃣ priorité à l’URL (?lang=en)
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");

    if (urlLang) {
      localStorage.setItem(STORAGE_KEY, urlLang);
      return urlLang;
    }

    // 2️⃣ sinon localStorage
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  /* ===============================
     2. Appliquer la langue
  =============================== */
  function applyLanguage(lang) {
    if (!window.I18N || !window.I18N[lang]) return;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // RTL stylesheet
    const rtl = document.getElementById("rtlStylesheet");
    if (rtl) rtl.disabled = lang !== "ar";

    // Text content
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (window.I18N[lang][key]) {
        el.textContent = window.I18N[lang][key];
      }
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (window.I18N[lang][key]) {
        el.setAttribute("placeholder", window.I18N[lang][key]);
      }
    });
  }

  /* ===============================
     3. Initialisation au chargement
  =============================== */
  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    applyLanguage(lang);

    // Sync select langue si présent
    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.value = lang;

      langSelect.addEventListener("change", e => {
        const newLang = e.target.value;
        localStorage.setItem(STORAGE_KEY, newLang);
        applyLanguage(newLang);
      });
    }
  });

})();
