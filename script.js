// =====================================================
// e-META — script.js FINAL STABLE
// i18n FR / EN / ES / AR
// RTL auto
// =====================================================

(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";

  /* ================= UTIL ================= */

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setRtl(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

    const rtl = document.getElementById("rtlStylesheet");
    if (rtl) rtl.disabled = (lang !== "ar");
  }

  /* ================= I18N ================= */

  function applyI18n(lang) {
    if (!window.I18N || typeof window.I18N !== "object") {
      console.error("❌ I18N global manquant ou invalide");
      return;
    }

    const dict = window.I18N[lang];
    if (!dict) {
      console.error("❌ Dictionnaire i18n introuvable pour :", lang);
      return;
    }

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      } else {
        console.warn("⚠️ Clé i18n manquante :", key);
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) {
        el.placeholder = dict[key];
      }
    });
  }

  /* ================= LANG SELECT ================= */

  function bindLangSelect() {
    const select = document.getElementById("langSelect");
    if (!select) return;

    select.addEventListener("change", () => {
      setLang(select.value);
    });
  }

  function syncLangSelect(lang) {
    const select = document.getElementById("langSelect");
    if (select) select.value = lang;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    setRtl(lang);
    applyI18n(lang);
    syncLangSelect(lang);
  }

  /* ================= BURGER ================= */

  function bindBurger() {
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

  /* ================= INIT ================= */

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    setLang(lang);
    bindLangSelect();
    bindBurger();
  });

})();
