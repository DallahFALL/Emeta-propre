/* =====================================================
   e-META — script.js FINAL
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

    const rtlCss = document.getElementById("rtlStylesheet");
    if (rtlCss) rtlCss.disabled = !RTL_LANGS.includes(lang);
  }

  function applyI18n(lang) {
    const dict = window.I18N?.[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key]) el.placeholder = dict[key];
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
