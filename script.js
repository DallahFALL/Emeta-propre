// script.js — e-META vNext (stable)
(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setRtl(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
    const rtl = document.getElementById("rtlStylesheet");
    if (rtl) rtl.disabled = (lang !== "ar");
  }
const val = resolveKey(dict, key);
if (val != null) el.textContent = val;

  function applyI18n(lang) {
    const dict = (window.I18N && window.I18N[lang]) ? window.I18N[lang] : null;
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = resolveKey(dict, key);
if (val != null) el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const val = resolveKey(dict, key);
if (val != null) el.setAttribute("placeholder", val);

    });
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    setRtl(lang);
    applyI18n(lang);
    const sel = document.getElementById("langSelect");
    if (sel) sel.value = lang;
  }

  function scrollToForm() {
    const form = document.getElementById("form");
    if (form) form.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.addEventListener("DOMContentLoaded", () => {
    // init language
    setLang(getLang());

    // language switch
    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.addEventListener("change", (e) => setLang(e.target.value));
    }

    // burger
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");
    if (burger && nav) {
      burger.addEventListener("click", () => {
        nav.classList.toggle("open");
        burger.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
      });
    }

    // CTA buttons
    const startBtn = document.getElementById("startBtn");
    const customBtn = document.getElementById("customBtn");
    startBtn && startBtn.addEventListener("click", scrollToForm);
    customBtn && customBtn.addEventListener("click", scrollToForm);

    // basic client-side validation message (light)
    const form = document.getElementById("emetaForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        const consent = document.getElementById("consent");
        if (consent && !consent.checked) {
          e.preventDefault();
          consent.focus();
        }
      });
    }
  });
})();
