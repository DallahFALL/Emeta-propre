/* =====================================================
   e-META — script.js v7 (ULTRA-MODULAIRE & SAFE)
   - i18n multi-pages (FR / EN / ES / AR)
   - Synchronisation inter-pages
   - Aucun crash JS si élément absent
   - RTL automatique
===================================================== */

(function () {
  "use strict";

  /* =========================
     CONFIG
  ========================= */
  const CONFIG = {
    DEFAULT_LANG: "fr",
    STORAGE_KEY: "emeta_lang",
    RTL_LANGS: ["ar"]
  };

  /* =========================
     UTILITIES
  ========================= */
  function qs(selector, scope = document) {
    return scope.querySelector(selector);
  }

  function qsa(selector, scope = document) {
    return Array.from(scope.querySelectorAll(selector));
  }

  function safe(fn) {
    try {
      fn();
    } catch (e) {
      console.warn("[e-META]", e.message);
    }
  }

  /* =========================
     I18N ENGINE
  ========================= */
  function applyI18n(lang) {
    const dict = window.I18N?.[lang] || {};
    const fallback = window.I18N?.[CONFIG.DEFAULT_LANG] || {};

    // html lang / dir
    document.documentElement.lang = lang;
    document.documentElement.dir = CONFIG.RTL_LANGS.includes(lang)
      ? "rtl"
      : "ltr";

    // text nodes
    qsa("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key] || fallback[key];
      if (typeof value === "string") {
        el.textContent = value;
      }
    });

    // placeholders
    qsa("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const value = dict[key] || fallback[key];
      if (typeof value === "string") {
        el.setAttribute("placeholder", value);
      }
    });

    // meta title
    const titleKey = qs("title[data-i18n]");
    if (titleKey) {
      const key = titleKey.getAttribute("data-i18n");
      const value = dict[key] || fallback[key];
      if (value) document.title = value;
    }

    localStorage.setItem(CONFIG.STORAGE_KEY, lang);
  }

  function getSavedLang() {
    return (
      localStorage.getItem(CONFIG.STORAGE_KEY) || CONFIG.DEFAULT_LANG
    );
  }

  /* =========================
     LANGUAGE SWITCHER
  ========================= */
  function initLanguageSwitcher() {
    const switcher = qs("#languageSwitcher");
    if (!switcher) return;

    const lang = getSavedLang();
    switcher.value = lang;

    switcher.addEventListener("change", e => {
      applyI18n(e.target.value);
    });
  }

  /* =========================
     BURGER MENU
  ========================= */
  function initBurgerMenu() {
    const burger = qs("#burgerBtn");
    const nav = qs("#mainNav");

    if (!burger || !nav) return;

    burger.addEventListener("click", () => {
      nav.classList.toggle("open");
      burger.setAttribute(
        "aria-expanded",
        nav.classList.contains("open")
      );
    });
  }

  /* =========================
     PAGE HELPERS (OPTIONAL)
  ========================= */
  function initScrollToForm() {
    qsa("[data-scroll-to]").forEach(btn => {
      btn.addEventListener("click", e => {
        const target = qs(btn.getAttribute("data-scroll-to"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  /* =========================
     INIT APP
  ========================= */
  document.addEventListener("DOMContentLoaded", () => {
    safe(() => applyI18n(getSavedLang()));
    safe(initLanguageSwitcher);
    safe(initBurgerMenu);
    safe(initScrollToForm);
  });

})();
