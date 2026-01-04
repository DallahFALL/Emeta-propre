/* =====================================================
   e-META — script.js vNext (GLOBAL & STABLE)
   - Langues dynamiques FR / EN / ES / AR
   - RTL automatique
   - Compatible index.html & privacy.html
   - Burger menu
   - CTA scroll
===================================================== */

(function () {
  "use strict";

  /* ================= CONFIG ================= */

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";

  /* ================= LANG ================= */

  function getLang() {
    return (
      localStorage.getItem(STORAGE_KEY) ||
      document.documentElement.lang ||
      DEFAULT_LANG
    );
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    const rtl = document.getElementById("rtlStylesheet");
    if (rtl) rtl.disabled = lang !== "ar";

    if (typeof applyI18n === "function") {
      applyI18n(lang);
    }

    const select = document.getElementById("langSelect");
    if (select) select.value = lang;
  }

  /* ================= I18N APPLY ================= */

  function applyI18n(lang) {
    if (!window.I18N || !window.I18N[lang]) return;

    const dict = window.I18N[lang];

    // Text content
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });
  }

  /* ================= UI ================= */

  function initBurger() {
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");
    if (!burger || !nav) return;

    burger.addEventListener("click", () => {
      nav.classList.toggle("open");
      burger.setAttribute(
        "aria-expanded",
        nav.classList.contains("open") ? "true" : "false"
      );
    });
  }

  function initCTA() {
    const scrollToForm = () => {
      const form = document.getElementById("form");
      if (form) {
        form.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const startBtn = document.getElementById("startBtn");
    const customBtn = document.getElementById("customBtn");

    if (startBtn) startBtn.addEventListener("click", scrollToForm);
    if (customBtn) customBtn.addEventListener("click", scrollToForm);
  }

  function initFormValidation() {
    const form = document.getElementById("emetaForm");
    if (!form) return;

    form.addEventListener("submit", e => {
      const consent = document.getElementById("consent");
      if (consent && !consent.checked) {
        e.preventDefault();
        consent.focus();
      }
    });
  }

  /* ================= INIT GLOBAL ================= */

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    setLang(lang);        // 🔑 APPLIQUÉ SUR TOUTES LES PAGES
    initBurger();
    initCTA();
    initFormValidation();

    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.addEventListener("change", e => {
        setLang(e.target.value);
      });
    }
  });

})();
