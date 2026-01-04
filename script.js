/* =====================================================
   e-META — SCRIPT UNIQUE & STABLE
   ✔ Multilingue global (index + privacy)
   ✔ RTL / LTR auto
   ✔ Header responsive
   ✔ Burger mobile
   ✔ CTA scroll
===================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "lang";
  const DEFAULT_LANG = "fr";

  /* ================= LANG ================= */
  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

    // RTL CSS
    const rtlCSS = document.getElementById("rtlStylesheet");
    if (rtlCSS) rtlCSS.disabled = (lang !== "ar");

    // Traductions
    if (typeof window.applyTranslations === "function") {
      window.applyTranslations(lang);
    }

    // Sync sélecteurs langue
    document.querySelectorAll("select.lang-select").forEach(sel => {
      sel.value = lang;
    });
  }

  /* ================= DOM READY ================= */
  document.addEventListener("DOMContentLoaded", () => {

    /* ===== INIT LANG ===== */
    applyLang(getLang());

    document.querySelectorAll("select.lang-select").forEach(sel => {
      sel.addEventListener("change", e => setLang(e.target.value));
    });

    /* ===== BURGER MENU ===== */
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");

    if (burger && nav) {
      burger.addEventListener("click", () => {
        nav.classList.toggle("open");
      });
    }

    /* ===== CTA HERO SCROLL ===== */
    const ctaStart = document.querySelector(".cta-primary");
    const formSection = document.querySelector("#form");

    if (ctaStart && formSection) {
      ctaStart.addEventListener("click", () => {
        formSection.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  });

})();
