/* =====================================================
   e-META — script.js FINAL (STABLE & ROBUST)
   - Langues dynamiques FR / EN / ES / AR
   - RTL automatique
   - Compatible index.html + privacy.html
   - Fix hash (#form) + reload i18n
===================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";

  /* -----------------------------
     Lang helpers
  ----------------------------- */
  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setHtmlDir(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

    const rtlCSS = document.getElementById("rtlStylesheet");
    if (rtlCSS) {
      rtlCSS.disabled = (lang !== "ar");
    }
  }

  /* -----------------------------
     Apply i18n safely
  ----------------------------- */
  function applyI18n(lang) {
    if (!window.I18N || !window.I18N[lang]) return;

    const dict = window.I18N[lang];

    // Text content
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key];

      if (value && value.trim() !== "") {
        el.textContent = value;
        el.style.display = "";
      } else {
        // Hide empty translated nodes (fix • • •)
        el.textContent = "";
        el.style.display = "none";
      }
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const value = dict[key];
      if (value) el.setAttribute("placeholder", value);
    });

    // Page title
    if (dict["meta.title"]) {
      document.title = dict["meta.title"];
    }
  }

  /* -----------------------------
     Set language globally
  ----------------------------- */
  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    setHtmlDir(lang);
    applyI18n(lang);

    // Sync selector
    const select = document.getElementById("langSelect");
    if (select) select.value = lang;
  }

  /* -----------------------------
     Scroll helper
  ----------------------------- */
  function scrollToForm() {
    const form = document.getElementById("form");
    if (!form) return;

    form.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  /* -----------------------------
     DOM READY
  ----------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    setLang(lang);

    /* Language selector */
    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.addEventListener("change", (e) => {
        setLang(e.target.value);
      });
    }

    /* Burger menu */
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");

    if (burger && nav) {
      burger.addEventListener("click", () => {
        nav.classList.toggle("open");
        burger.setAttribute(
          "aria-expanded",
          nav.classList.contains("open") ? "true" : "false"
        );
      });
    }

    /* CTA buttons */
    const startBtn = document.getElementById("startBtn");
    const customBtn = document.getElementById("customBtn");

    if (startBtn) startBtn.addEventListener("click", scrollToForm);
    if (customBtn) customBtn.addEventListener("click", scrollToForm);

    /* Consent validation */
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

  /* -----------------------------
     HASH FIX (#form)
     Re-apply i18n after navigation
  ----------------------------- */
  window.addEventListener("hashchange", () => {
    applyI18n(getLang());
  });

})();
