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
    const params = new URLSearchParams(window.location.search);
    return params.get("lang");
  }

  function getStoredLang() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function resolveLang() {
    return (
      getLangFromURL() ||
      getStoredLang() ||
      DEFAULT_LANG
    );
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
  }

  const currentLang = resolveLang();
  setLang(currentLang);

  /* =========================
     APPLY I18N (TEXT + PLACEHOLDER)
  ========================= */
  function applyI18n(lang) {
    if (!window.I18N || !window.I18N[lang]) return;

    const dict = window.I18N[lang];

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });

    document.title =
      dict["privacy.meta.title"] ||
      dict["meta.title"] ||
      document.title;
  }

  applyI18n(currentLang);

  /* =========================
     LANGUAGE SELECTOR
  ========================= */
  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.value = currentLang;

    langSelect.addEventListener("change", () => {
      const newLang = langSelect.value;
      setLang(newLang);
      applyI18n(newLang);
      updatePrivacyLinks(newLang);
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
     BURGER MENU — MOBILE (FIXED)
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

    /* Close menu on link click (UX PRO) */
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* =========================
     CTA HERO → FORM SCROLL
  ========================= */
  const startBtn = document.getElementById("startBtn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      const form = document.getElementById("form");
      if (form) {
        form.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

})();
