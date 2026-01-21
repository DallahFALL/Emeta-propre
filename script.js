/* =====================================================
   e-META — SCRIPT.JS FINAL PRO
   - i18n stable (index + privacy)
   - Header sticky + auto-shrink (no jump)
   - Burger menu responsive
   - Mobile safe / RTL safe
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =========================
     CONFIG
  ========================= */
  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";
  const RTL_LANGS = ["ar"];

  /* =========================
     URL → STORAGE SYNC
  ========================= */
  (function syncLangFromURL() {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    if (urlLang) {
      localStorage.setItem(STORAGE_KEY, urlLang);
    }
  })();

  /* =========================
     LANG RESOLUTION
  ========================= */
  function getLangFromURL() {
    return new URLSearchParams(window.location.search).get("lang");
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
     APPLY I18N
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
     INIT LANG
  ========================= */
  const lang = resolveLang();
  setLang(lang);
  applyI18n(lang);

  /* =========================
     LANG SELECT
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
     BURGER MENU (MOBILE SAFE)
  ========================= */
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
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
  const form = document.getElementById("form");

  if (startBtn && form) {
    startBtn.addEventListener("click", () => {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
});

/* =====================================================
   HEADER STICKY + AUTO-SHRINK — PRO++ (NO JUMP)
===================================================== */
(function () {
  const header = document.querySelector(".site-header");
  if (!header) return;

  let lastState = false;

  window.addEventListener(
    "scroll",
    () => {
      const shouldShrink = window.scrollY > 40;

      if (shouldShrink !== lastState) {
        header.classList.toggle("is-shrink", shouldShrink);
        lastState = shouldShrink;
      }
    },
    { passive: true }
  );
})();
