/* =====================================================
   e-META — script.js FINAL STABLE (SINGLE SOURCE OF TRUTH)
   - Langues dynamiques FR / EN / ES / AR
   - RTL automatique
   - Selects traduits dynamiquement
   - Mobile + Desktop OK
===================================================== */

(function () {
  "use strict";

  /* ================= CONFIG ================= */
  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";
  const RTL_LANGS = ["ar"];

  /* ================= LANG CORE ================= */
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

  /* ================= SELECT BUILDER ================= */
  function populateSelect(id, items) {
    const select = document.getElementById(id);
    if (!select || !Array.isArray(items)) return;

    const current = select.value;
    select.innerHTML = "";

    items.forEach(item => {
      const option = document.createElement("option");
      option.value = item.value;
      option.textContent = item.label;
      select.appendChild(option);
    });

    if (current) select.value = current;
  }

  /* ================= RENDER UI ================= */
  function renderUI(lang) {
    const dict = window.I18N && window.I18N[lang];
    if (!dict) {
      console.warn("i18n missing for language:", lang);
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

    /* Selects dynamiques */
    populateSelect("domain", dict["select.domain"]);
    populateSelect("decisionType", dict["select.decisionType"]);

    /* Title */
    if (dict["meta.title"]) document.title = dict["meta.title"];
  }

  /* ================= INIT ================= */
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
        requestAnimationFrame(() => renderUI(newLang)); // sécurité mobile
      });
    }

    /* Burger menu */
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");
    if (burger && nav) {
      burger.addEventListener("click", () => {
        nav.classList.toggle("is-open");
      });
    }

    /* CTA scroll */
    const startBtn = document.getElementById("startBtn");
    if (startBtn) {
      startBtn.addEventListener("click", () => {
        const form = document.getElementById("form");
        if (form) form.scrollIntoView({ behavior: "smooth" });
      });
    }
  });

})();
function renderOptionsI18n(dict) {
  document.querySelectorAll("option[data-i18n]").forEach(opt => {
    const key = opt.dataset.i18n;
    if (dict[key]) opt.textContent = dict[key];
  });
}
