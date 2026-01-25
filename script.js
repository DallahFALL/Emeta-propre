/* =====================================================
   e-META — script.js FINAL DYNAMIQUE
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

  function populateSelect(id, items) {
    const select = document.getElementById(id);
    if (!select || !Array.isArray(items)) return;

    const currentValue = select.value;
    select.innerHTML = "";

    items.forEach(opt => {
      const option = document.createElement("option");
      option.value = opt.value;
      option.textContent = opt.label;
      select.appendChild(option);
    });

    if (currentValue) select.value = currentValue;
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

    if (dict["select.domain"]) {
      populateSelect("domain", dict["select.domain"]);
    }
    if (dict["select.decisionType"]) {
      populateSelect("decisionType", dict["select.decisionType"]);
    }

    if (dict["meta.title"]) document.title = dict["meta.title"];
  }

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    setLang(lang);
    applyI18n(lang);

    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.value = lang;
      langSelect.addEventListener("change", () => {
        setLang(langSelect.value);
        applyI18n(langSelect.value);
        requestAnimationFrame(() => applyI18n(langSelect.value)); // mobile repaint
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
