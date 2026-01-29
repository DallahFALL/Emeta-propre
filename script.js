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

/* =======================
   e-META — I18N ENGINE
   ======================= */

const DEFAULT_LANG = "fr";
const LANG_KEY = "emeta_lang";

function getLang() {
  return localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
}

function setLang(lang) {
  if (!window.I18N || !window.I18N[lang]) {
    console.error("❌ I18N dictionnaire manquant pour :", lang);
    return;
  }

  localStorage.setItem(LANG_KEY, lang);
  applyI18n(lang);
  applyDir(lang);
}

/* Appliquer textes */
function applyI18n(lang) {
  const dict = window.I18N[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) el.placeholder = dict[key];
  });
}

/* RTL / LTR */
function applyDir(lang) {
  const isRTL = lang === "ar";
  document.documentElement.dir = isRTL ? "rtl" : "ltr";
  document.documentElement.lang = lang;

  const rtlCss = document.getElementById("rtlStylesheet");
  if (rtlCss) rtlCss.disabled = !isRTL;
}

/* Init au chargement */
document.addEventListener("DOMContentLoaded", () => {
  const lang = getLang();
  applyI18n(lang);
  applyDir(lang);

  // Switch langue
  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.dataset.lang;
      setLang(selected);
    });
  });
});

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
    const stored = localStorage.getItem("emeta_lang");
const lang = stored ? stored : DEFAULT_LANG;
setLang(lang);
    bindLangSelect();
  });

})();
