/* =====================================================
   e-META — script.js FINAL PRO
   - Burger menu mobile
   - Scroll intelligent vers formulaire
   - Gestion langues FR / EN / ES / AR
   - Persistance langue (localStorage)
   - RTL auto (ar)
   - Compatible index.html + privacy.html
===================================================== */

(function () {
  "use strict";

  /* ===============================
     CONFIG
  ============================== */
  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "emeta_lang";

  /* ===============================
     DOM READY
  ============================== */
  document.addEventListener("DOMContentLoaded", () => {
    initBurger();
    initScrollButtons();
    initLanguage();
  });

  /* ===============================
     BURGER MENU
  ============================== */
  function initBurger() {
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");

    if (!burger || !nav) return;

    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Fermer menu au clic sur un lien
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ===============================
     SCROLL VERS FORMULAIRE
  ============================== */
  function initScrollButtons() {
    const form = document.getElementById("form");

    if (!form) return;

    const scrollToForm = () => {
      form.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    };

    document.getElementById("startBtn")?.addEventListener("click", scrollToForm);
    document.getElementById("customBtn")?.addEventListener("click", scrollToForm);

    // Lien menu "Formulaire"
    document.querySelectorAll('a[href="#form"]').forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToForm();
      });
    });
  }

  /* ===============================
     LANGUES & RTL
  ============================== */
  function initLanguage() {
    const select = document.getElementById("langSelect");
    if (!select) return;

    // Langue stockée
    const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    select.value = savedLang;
    applyLanguage(savedLang);

    // Changement utilisateur
    select.addEventListener("change", () => {
      const lang = select.value;
      localStorage.setItem(STORAGE_KEY, lang);
      applyLanguage(lang);
    });
  }

  /* ===============================
     APPLY LANGUAGE
  ============================== */
  function applyLanguage(lang) {
    // Direction RTL
    const isRTL = lang === "ar";
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");

    // Charger RTL CSS si nécessaire
    const rtlCSS = document.getElementById("rtlStylesheet");
    if (rtlCSS) {
      rtlCSS.disabled = !isRTL;
    }

    // Traductions
    if (window.I18N && window.I18N[lang]) {
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (window.I18N[lang][key]) {
          el.innerHTML = window.I18N[lang][key];
        }
      });
    }

    // Placeholders
    if (window.I18N && window.I18N[lang]) {
      document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (window.I18N[lang][key]) {
          el.setAttribute("placeholder", window.I18N[lang][key]);
        }
      });
    }
  }

})();
