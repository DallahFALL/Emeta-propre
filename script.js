/* =====================================================
   e-META — script.js FINAL STABLE
   i18n SAFE • RTL AUTO • Lang Select UNIQUE
===================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";
  const LANG_SELECT_ID = "langSelect";

  /* ================= RTL ================= */

  function setRtl(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

    const rtl = document.getElementById("rtlStylesheet");
    if (rtl) rtl.disabled = (lang !== "ar");
  }

/* ================= I18N ================= */

function applyI18n(lang) {
  if (typeof window.I18N !== "object") {
    console.warn("⚠️ I18N non encore prêt, skip");
    return;
  }

  const dict = window.I18N[lang];
  if (!dict) {
    console.warn("⚠️ Dictionnaire i18n manquant :", lang);
    return;
  }

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });
}


  /* ================= LANG ================= */

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    setRtl(lang);
    applyI18n(lang);
    syncLangSelect(lang);
  }

  function bindLangSelect() {
    const select = document.getElementById(LANG_SELECT_ID);
    if (!select) return;

    select.addEventListener("change", () => {
      setLang(select.value);
    });
  }

  function syncLangSelect(lang) {
    const select = document.getElementById(LANG_SELECT_ID);
    if (select && select.value !== lang) {
      select.value = lang;
    }
  }

  /* ================= INIT ================= */

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    setLang(lang);
    bindLangSelect();
  });

})();
