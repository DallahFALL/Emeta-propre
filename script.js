/* =====================================================
   e-META — script.js vNext FINAL PRO
   International • Stable • Index + Privacy Sync
   FR / EN / ES / AR • RTL auto • Mobile UX ready
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
    return new URLSearchParams(window.location.search).get("lang");
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

  const currentLang = resolveLang();
  setLang(currentLang);

  /* =========================
     APPLY I18N (TEXT + PLACEHOLDER)
  ========================= */
  function applyI18n(lang) {
    if (!window.I18N || !window.I18N[lang]) return;
    const dict = window.I18N[lang];

    // Text
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key]) el.placeholder = dict[key];
    });

    // Title (context-aware)
    if (document.body.classList.contains("privacy-page") && dict["privacy.meta.title"]) {
      document.title = dict["privacy.meta.title"];
    } else if (dict["meta.title"]) {
      document.title = dict["meta.title"];
    }
  }

  applyI18n(currentLang);

  /* =========================
     LANGUAGE SELECTOR (INDEX)
  ========================= */
  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener("change", () => {
      const newLang = langSelect.value;
      setLang(newLang);
      applyI18n(newLang);
      updatePrivacyLinks(newLang);
      syncPrivacyPDF(newLang);
    });
  }

  /* =========================
     PRIVACY LINKS LANG SYNC
  ========================= */
  function updatePrivacyLinks(lang) {
    document.querySelectorAll('a[href="privacy.html"]').forEach(link => {
      link.href = `privacy.html?lang=${lang}`;
    });
  }
  updatePrivacyLinks(currentLang);

  /* =========================
     PRIVACY PDF LANG SWITCH
  ========================= */
  function syncPrivacyPDF(lang) {
    const link = document.getElementById("pdfPrivacyLink");
    if (!link) return;

    const map = {
      fr: "docs/privacy_fr.pdf",
      en: "docs/privacy_en.pdf",
      es: "docs/privacy_es.pdf",
      ar: "docs/privacy_ar.pdf"
    };
    link.href = map[lang] || map.fr;
  }
  syncPrivacyPDF(currentLang);

  /* =========================
     BURGER MENU — MOBILE
  ========================= */
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("is-open");
      burger.setAttribute(
        "aria-expanded",
        nav.classList.contains("is-open")
      );
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* =========================
     CTA HERO → FORM
  ========================= */
  const startBtn = document.getElementById("startBtn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      const form = document.getElementById("form");
      if (form) form.scrollIntoView({ behavior: "smooth" });
    });
  }

})();
