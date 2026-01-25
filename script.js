/* =====================================================
   e-META — script.js FINAL PRO
===================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";
  const RTL_LANGS = ["ar"];

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

    const rtl = document.getElementById("rtlStylesheet");
    if (rtl) rtl.disabled = !RTL_LANGS.includes(lang);
  }

  function applyI18n(lang) {
    const dict = window.I18N?.[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.dataset.i18n;
      if (dict[k]) el.textContent = dict[k];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const k = el.dataset.i18nPlaceholder;
      if (dict[k]) el.placeholder = dict[k];
    });

    if (dict["meta.title"]) document.title = dict["meta.title"];
  }

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    setLang(lang);
    applyI18n(lang);

    const select = document.getElementById("langSelect");
    if (select) {
      select.value = lang;
      select.addEventListener("change", () => {
        setLang(select.value);
        applyI18n(select.value);
      });
    }

    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");
    if (burger && nav) {
      burger.addEventListener("click", () => {
        nav.classList.toggle("is-open");
      });
    }

    const start = document.getElementById("startBtn");
    if (start) {
      start.addEventListener("click", () => {
        document.getElementById("form").scrollIntoView({ behavior: "smooth" });
      });
    }
  });

})();
