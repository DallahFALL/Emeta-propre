/* =====================================================
   e-META — script.js FINAL COHÉRENT & STABLE
===================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";
  const RTL_LANGS = ["ar"];

  /* --------------------
     LANG CORE
  -------------------- */
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

  /* --------------------
     SELECT BUILDER
  -------------------- */
  function populateSelect(id, items) {
    const select = document.getElementById(id);
    if (!select || !Array.isArray(items)) return;

    const previous = select.value;
    select.innerHTML = "";

    items.forEach(item => {
      const opt = document.createElement("option");
      opt.value = item.value;
      opt.textContent = item.label;
      select.appendChild(opt);
    });

    if (previous) select.value = previous;
  }

  /* --------------------
     RENDER UI (SINGLE SOURCE)
  -------------------- */
  function renderUI(lang) {
    const dict = window.I18N && window.I18N[lang];
    if (!dict) {
      console.warn("i18n missing for lang:", lang);
      return;
    }

    /* Text content */
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    /* Placeholders */
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key]) el.placeholder = dict[key];
    });

    /* Dynamic selects */
    populateSelect("domain", dict["select.domain"]);
    populateSelect("decisionType", dict["select.decisionType"]);

    /* Meta title */
    if (dict["meta.title"]) document.title = dict["meta.title"];
  }

  /* --------------------
     INIT
  -------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    setLang(lang);
    renderUI(lang);

    /* Language selector */
    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.value = lang;
      langSelect.addEventListener("change", () => {
        const newLang = langSelect.value;
        setLang(newLang);
        renderUI(newLang);

        /* Mobile repaint safety */
        requestAnimationFrame(() => renderUI(newLang));
      });
    }

    /* Burger */
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");
    if (burger && nav) {
      burger.addEventListener("click", () => {
        nav.classList.toggle("is-open");
      });
    }

    /* CTA scroll */
    const start = document.getElementById("startBtn");
    if (start) {
      start.addEventListener("click", () => {
        const form = document.getElementById("form");
        if (form) form.scrollIntoView({ behavior: "smooth" });
      });
    }
  });

})();
