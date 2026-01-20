/* =====================================================
   e-META — script.js vNext FINAL PRO
   Index + Privacy • i18n • RTL • Stable
   FR / EN / ES / AR • Production-ready
===================================================== */

(function () {
  "use strict";

  /* =========================
     CONFIG
  ========================= */
  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";
  const RTL_LANGS = ["ar"];

  /* =========================
     LANGUAGE RESOLUTION
  ========================= */
  function getLangFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("lang");
  }

  function getStoredLang() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function resolveLang() {
    return getLangFromURL() || getStoredLang() || DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

    const rtlCSS = document.getElementById("rtlStylesheet");
    if (rtlCSS) {
      rtlCSS.disabled = !RTL_LANGS.includes(lang);
    }
  }

  /* =========================
     APPLY I18N
  ========================= */
  function applyI18n(lang) {
    if (!window.I18N || !I18N[lang]) return;

    const dict = I18N[lang];

    // Text nodes
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });

    // Title
    if (dict["meta.title"]) {
      document.title = dict["meta.title"];
    }
  }

  /* =========================
     PDF LANGUAGE SWITCH (PRIVACY)
  ========================= */
  function syncPrivacyPDF(lang) {
    const link = document.getElementById("privacyPdf");
    if (!link) return;

    const map = {
      fr: "docs/privacy_fr.pdf",
      en: "docs/privacy_en.pdf",
      es: "docs/privacy_es.pdf",
      ar: "docs/privacy_ar.pdf"
    };

    if (map[lang]) link.href = map[lang];
  }

  /* =========================
     NAV LINKS → LANG SYNC
  ========================= */
  function syncPrivacyLinks(lang) {
    document
      .querySelectorAll('a[href="privacy.html"]')
      .forEach(link => {
        link.href = `privacy.html?lang=${lang}`;
      });
  }

  /* =========================
     BURGER MENU (MOBILE)
  ========================= */
  function initBurger() {
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");
    if (!burger || !nav) return;

    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open);
    });
  }

  /* =========================
     INIT
  ========================= */
  const lang = resolveLang();
  setLang(lang);
  applyI18n(lang);
  syncPrivacyPDF(lang);
  syncPrivacyLinks(lang);
  initBurger();

})();
