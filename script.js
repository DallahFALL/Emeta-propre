/* =====================================================
   e-META — script.js vNext FINAL PRO
   i18n COMPLETE • Index + Privacy
   Text + Placeholder + RTL
===================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";
  const RTL_LANGS = ["ar"];

  /* =========================
     LANG RESOLUTION
  ========================= */
  function getLang() {
    const params = new URLSearchParams(window.location.search);
    return (
      params.get("lang") ||
      localStorage.getItem(STORAGE_KEY) ||
      DEFAULT_LANG
    );
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  /* =========================
     APPLY I18N
  ========================= */
  function applyI18n(lang) {
    const dict = window.I18N?.[lang];
    if (!dict) return;

    /* ---- TEXT CONTENT ---- */
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    /* ---- PLACEHOLDERS ---- */
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });

    /* ---- TITLE ATTR ---- */
    document.querySelectorAll("[data-i18n-title]").forEach(el => {
      const key = el.getAttribute("data-i18n-title");
      if (dict[key]) el.setAttribute("title", dict[key]);
    });

    /* ---- HTML LANG + DIR ---- */
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

    /* ---- RTL CSS ---- */
    const rtlSheet = document.getElementById("rtlStylesheet");
    if (rtlSheet) {
      rtlSheet.disabled = !RTL_LANGS.includes(lang);
    }
  }

  /* =========================
     LANGUAGE SELECTOR
  ========================= */
  function initLangSelector(lang) {
    const select = document.getElementById("langSelect");
    if (!select) return;

    select.value = lang;
    select.addEventListener("change", () => {
      const newLang = select.value;
      setLang(newLang);
      applyI18n(newLang);
    });
  }

  /* =========================
     INIT
  ========================= */
  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    setLang(lang);
    applyI18n(lang);
    initLangSelector(lang);
  });

})();
