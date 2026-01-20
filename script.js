/* =====================================================
   e-META — script.js vNext FINAL PRO
   International • Stable • Index + Privacy Sync
   FR / EN / ES / AR • RTL auto • Mobile UX ready
===================================================== */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  /* =========================
     CONFIG
  ========================= */
  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";
  const RTL_LANGS = ["ar"];

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
      dict["meta.title"] ||
      document.title;
  }

  const lang = resolveLang();
  setLang(lang);
  applyI18n(lang);

  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.value = lang;
    langSelect.addEventListener("change", () => {
      const newLang = langSelect.value;
      setLang(newLang);
      applyI18n(newLang);
      updatePrivacyLinks(newLang);
    });
  }

  function updatePrivacyLinks(lang) {
    document.querySelectorAll('a[href="privacy.html"]').forEach(link => {
      link.href = `privacy.html?lang=${lang}`;
    });
  }

  updatePrivacyLinks(lang);

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

  const startBtn = document.getElementById("startBtn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      const form = document.getElementById("form");
      if (form) form.scrollIntoView({ behavior: "smooth" });
    });
  }
});
