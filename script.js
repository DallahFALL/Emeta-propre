/* =====================================================
   e-META — script.js (FINAL • STABLE)
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

  function populateSelect(id, items) {
    const select = document.getElementById(id);
    if (!select || !Array.isArray(items)) return;

    const current = select.value;
    select.innerHTML = "";

    items.forEach(o => {
      const opt = document.createElement("option");
      opt.value = o.value;
      opt.textContent = o.label;
      select.appendChild(opt);
    });

    if (current) select.value = current;
  }

  function renderUI(lang) {
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

    populateSelect("domain", dict["select.domain"]);
    populateSelect("decisionType", dict["select.decisionType"]);

    if (dict["meta.title"]) document.title = dict["meta.title"];
  }

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    setLang(lang);
    renderUI(lang);

    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.value = lang;
      langSelect.addEventListener("change", () => {
        const l = langSelect.value;
        setLang(l);
        renderUI(l);
      });
    }
  });
})();
