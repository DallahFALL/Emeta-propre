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
   e-META — I18N ENGINE (SAFE)
   ======================= */
(() => {
  "use strict";

  const DEFAULT_LANG = "fr";
  const LANG_KEY = "emeta_lang";

  function getLang() {
    return localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
  }

  function applyI18n(lang) {
    if (!window.I18N || !window.I18N[lang]) {
      console.error("❌ I18N global manquant ou dictionnaire absent pour :", lang);
      return;
    }
    const dict = window.I18N[lang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });
  }

  function applyDir(lang) {
    const isRTL = lang === "ar";
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;

    const rtlCss = document.getElementById("rtlStylesheet");
    if (rtlCss) rtlCss.disabled = !isRTL;
  }

  function setLang(lang) {
    if (!window.I18N || !window.I18N[lang]) return;
    localStorage.setItem(LANG_KEY, lang);
    applyI18n(lang);
    applyDir(lang);

    // sync UI select si présent
    const select = document.getElementById("langSelect");
    if (select) select.value = lang;
  }

  function bindLangUI() {
    // 1) Select <select id="langSelect">
    const select = document.getElementById("langSelect");
    if (select) {
      select.addEventListener("change", () => setLang(select.value));
      select.value = getLang();
    }

    // 2) Boutons data-lang (si tu en as)
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    applyI18n(lang);
    applyDir(lang);
    bindLangUI();
  });
})();

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
