/* =====================================================
   e-META — script.js vNext FINAL PRO
   Index + Privacy • i18n • RTL • Stable
===================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";
  const RTL_LANGS = ["ar"];

  /* ===== LANG RESOLUTION ===== */
  function getLangFromURL() {
    return new URLSearchParams(window.location.search).get("lang");
  }

  function getLang() {
    return getLangFromURL() || localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function applyLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

    const rtlCSS = document.getElementById("rtlStylesheet");
    if (rtlCSS) rtlCSS.disabled = !RTL_LANGS.includes(lang);
  }

  /* ===== APPLY I18N ===== */
  function applyI18n(lang) {
    if (!window.I18N || !I18N[lang]) return;
    const dict = I18N[lang];

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key]) el.placeholder = dict[key];
    });

    // ✅ TITLE FIX (index vs privacy)
    if (dict["privacy.meta.title"] && document.body.classList.contains("privacy-page")) {
      document.title = dict["privacy.meta.title"];
    } else if (dict["meta.title"]) {
      document.title = dict["meta.title"];
    }
  }

  /* ===== PRIVACY PDF ===== */
  function syncPrivacyPDF(lang) {
    const link = document.getElementById("privacyPdf");
    if (!link) return;

    const map = {
      fr: "docs/privacy_fr.pdf",
      en: "docs/privacy_en.pdf",
      es: "docs/privacy_es.pdf",
      ar: "docs/privacy_ar.pdf"
    };
    link.href = map[lang] || map.fr;
  }

  /* ===== PROPAGATE LANG TO LINKS ===== */
  function propagateLang(lang) {
    document.querySelectorAll('a[href="privacy.html"]').forEach(a => {
      a.href = `privacy.html?lang=${lang}`;
    });
  }

  /* ===== BURGER ===== */
  function initBurger() {
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");
    if (!burger || !nav) return;

    burger.onclick = () => {
      nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", nav.classList.contains("open"));
    };
  }

  /* ===== INIT ===== */
  const lang = getLang();
  applyLang(lang);
  applyI18n(lang);
  syncPrivacyPDF(lang);
  propagateLang(lang);
  initBurger();

})();
