/* =====================================================
   e-META — script.js FINAL PRO (STABLE)
   - Burger menu mobile
   - Scroll intelligent vers formulaire
   - Activation bouton submit
   - Langue persistée (index + privacy)
   - Compatible RTL
===================================================== */

(function () {
  "use strict";

  /* ===============================
     CONFIG
  =============================== */
  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "eMETA_lang";

  /* ===============================
     DOM READY
  =============================== */
  document.addEventListener("DOMContentLoaded", () => {
    initBurger();
    initScrollButtons();
    initLanguage();
    initSubmitLogic();
  });

  /* ===============================
     BURGER MENU
  =============================== */
  function initBurger() {
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");

    if (!burger || !nav) return;

    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", isOpen);
    });

    // Fermer menu après clic (mobile)
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ===============================
     SCROLL VERS FORMULAIRE
  =============================== */
  function initScrollButtons() {
    const scrollToForm = () => {
      document.getElementById("form")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    };

    document.getElementById("startBtn")
      ?.addEventListener("click", scrollToForm);

    document.getElementById("customBtn")
      ?.addEventListener("click", scrollToForm);
  }

  /* ===============================
     LANGUE + PERSISTENCE
  =============================== */
  function initLanguage() {
    const select = document.getElementById("langSelect");
    if (!select || typeof window.I18N === "undefined") return;

    const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    applyLanguage(savedLang);
    select.value = savedLang;

    select.addEventListener("change", e => {
      applyLanguage(e.target.value);
    });
  }

  function applyLanguage(lang) {
    localStorage.setItem(STORAGE_KEY, lang);

    // Direction RTL
    document.documentElement.setAttribute(
      "dir",
      lang === "ar" ? "rtl" : "ltr"
    );

    // Feuille RTL
    const rtl = document.getElementById("rtlStylesheet");
    if (rtl) rtl.disabled = lang !== "ar";

    // Texte
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (window.I18N[lang]?.[key]) {
        el.textContent = window.I18N[lang][key];
      }
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (window.I18N[lang]?.[key]) {
        el.setAttribute("placeholder", window.I18N[lang][key]);
      }
    });
  }

  /* ===============================
     BOUTON SUBMIT INTELLIGENT
  =============================== */
  function initSubmitLogic() {
    const form = document.querySelector("form");
    const submitBtn = document.querySelector(".btn-submit");

    if (!form || !submitBtn) return;

    const requiredFields = form.querySelectorAll(
      "select[required], input[required], textarea[required]"
    );
    const consent = form.querySelector('input[type="checkbox"]');

    const updateState = () => {
      const fieldsOk = [...requiredFields].every(f => f.value.trim() !== "");
      const consentOk = !consent || consent.checked;

      submitBtn.disabled = !(fieldsOk && consentOk);
    };

    form.addEventListener("input", updateState);
    form.addEventListener("change", updateState);

    updateState();
  }

})();
