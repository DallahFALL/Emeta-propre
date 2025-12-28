/* =====================================================
   e-META — script.js FINAL (PRO)
   - i18n dynamique (FR / EN / ES / AR)
   - RTL auto (dir + rtl.css)
   - Burger menu mobile (stable)
   - CTA scroll vers #form
   - Langue persistée (localStorage)
===================================================== */

(function () {
  "use strict";

  /* =====================
     CONFIG
  ===================== */
  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "emeta_lang";

  const rtlStylesheet = document.getElementById("rtlStylesheet");

  const qs = (s, r = document) => r.querySelector(s);
  const qsa = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* =====================
     I18N DICTIONARY
     (reprend exactement ta base validée)
  ===================== */
  const I18N = window.I18N || {}; 
  // ⬆️ optionnel si tu veux externaliser plus tard
  // sinon laisse ton objet I18N inline ici si tu préfères

  /* =====================
     RTL HANDLER
  ===================== */
  function setRTL(enable) {
    document.documentElement.dir = enable ? "rtl" : "ltr";
    if (rtlStylesheet) rtlStylesheet.disabled = !enable;
  }

  /* =====================
     APPLY TRANSLATIONS
  ===================== */
  function applyI18n(dict) {
    if (!dict) return;

    qsa("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    qsa("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });

    qsa("[data-i18n-value]").forEach(el => {
      const key = el.getAttribute("data-i18n-value");
      if (dict[key]) el.value = dict[key];
    });

    if (dict["meta.title"]) document.title = dict["meta.title"];
  }

  /* =====================
     APPLY LANGUAGE
  ===================== */
  function applyLanguage(lang) {
    const dict = I18N[lang] || I18N[DEFAULT_LANG];
    document.documentElement.lang = lang;

    setRTL(lang === "ar");
    applyI18n(dict);

    const switcher = qs("#languageSwitcher");
    if (switcher) switcher.value = lang;

    localStorage.setItem(STORAGE_KEY, lang);
  }

  /* =====================
     BURGER MENU (MOBILE)
  ===================== */
  function initBurgerMenu() {
    const burger = qs("#burgerBtn");
    const nav = qs("#mainNav");

    if (!burger || !nav) return;

    burger.addEventListener("click", e => {
      e.stopPropagation();
      const open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    qsa("a", nav).forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", e => {
      if (!nav.classList.contains("open")) return;
      if (nav.contains(e.target) || burger.contains(e.target)) return;
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  }

  /* =====================
     CTA SCROLL
  ===================== */
  function initCTA() {
    const scrollToForm = () => {
      const form = qs("#form");
      if (form) form.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const ctaHero = qs("#ctaStart");
    const ctaHeader = qs("#btnCustomRequest");

    if (ctaHero) ctaHero.addEventListener("click", scrollToForm);
    if (ctaHeader) ctaHeader.addEventListener("click", scrollToForm);
  }

  /* =====================
     LANGUAGE SWITCHER
  ===================== */
  function initLanguageSwitcher() {
    const switcher = qs("#languageSwitcher");
    if (!switcher) return;
    switcher.addEventListener("change", e => applyLanguage(e.target.value));
  }

  /* =====================
     INIT
  ===================== */
  document.addEventListener("DOMContentLoaded", () => {
    initBurgerMenu();
    initCTA();
    initLanguageSwitcher();

    const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    applyLanguage(savedLang);
  });

})();
