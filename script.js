document.addEventListener("DOMContentLoaded", function () {
  "use strict";
/* =========================
   URL → STORAGE SYNC (FIX PRIVACY)
========================= */
(function syncLangFromURL(){
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  if (urlLang) {
    localStorage.setItem("emeta_lang", urlLang);
  }
})();

  /* =========================
     CONFIG
  ========================= */
  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";
  const RTL_LANGS = ["ar"];

  /* =========================
     LANG RESOLUTION
  ========================= */
  function getLangFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("lang");
  }

  function resolveLang() {
    return (
      getLangFromURL() ||
      localStorage.getItem(STORAGE_KEY) ||
      DEFAULT_LANG
    );
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

    const rtlCSS = document.getElementById("rtlStylesheet");
    if (rtlCSS) rtlCSS.disabled = !RTL_LANGS.includes(lang);
  }

  /* =========================
     APPLY I18N (CORE)
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

  /* =========================
     INIT LANGUAGE
  ========================= */
  const lang = resolveLang();
  setLang(lang);
  applyI18n(lang);

  /* =========================
     LANG SELECT (IF EXISTS)
  ========================= */
  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.value = lang;
    langSelect.addEventListener("change", () => {
      const newLang = langSelect.value;
      setLang(newLang);
      applyI18n(newLang);
      syncPrivacyLinks(newLang);
    });
  }

  /* =========================
     PRIVACY LINK SYNC
  ========================= */
  function syncPrivacyLinks(lang) {
    document.querySelectorAll('a[href="privacy.html"]').forEach(link => {
      link.href = `privacy.html?lang=${lang}`;
    });
  }
  syncPrivacyLinks(lang);

  /* =========================
     BURGER MENU (SAFE)
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
     CTA HERO → FORM (SAFE)
  ========================= */
  const startBtn = document.getElementById("startBtn");
  const form = document.getElementById("form");

  if (startBtn && form) {
    startBtn.addEventListener("click", () => {
      form.scrollIntoView({ behavior: "smooth" });
    });
  }
});
