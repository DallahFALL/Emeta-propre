/* =====================================================
   e-META — script.js SAFE & STABLE
   Objectif : UX + responsive sans casser la logique
===================================================== */

(function () {
  "use strict";

  /* ===== BURGER MENU ===== */
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("open");
      burger.setAttribute(
        "aria-expanded",
        nav.classList.contains("open")
      );
    });
  }

  /* ===== SCROLL CTA ===== */
  const startBtn = document.getElementById("startBtn");
  const formSection = document.getElementById("form");

  if (startBtn && formSection) {
    startBtn.addEventListener("click", () => {
      formSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  /* ===== LANGUE PERSISTANTE ===== */
  const langSelect = document.getElementById("langSelect");
  const rtlStylesheet = document.getElementById("rtlStylesheet");

  if (langSelect) {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) langSelect.value = savedLang;

    langSelect.addEventListener("change", () => {
      const lang = langSelect.value;
      localStorage.setItem("lang", lang);

      if (typeof window.applyI18n === "function") {
        window.applyI18n(lang);
      }

      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      if (rtlStylesheet) {
        rtlStylesheet.disabled = lang !== "ar";
      }
    });
  }

  /* ===== SÉCURITÉ AFFICHAGE FORM ===== */
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("emetaForm");
    if (form) {
      form.style.display = "flex";
    }
  });

})();
/* =====================================================
   RESPONSIVE NAV + SCROLL FIX
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  // Burger menu
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("active");
      burger.setAttribute(
        "aria-expanded",
        nav.classList.contains("active")
      );
    });
  }

  // Scroll vers formulaire
  const startBtn = document.getElementById("startBtn");
  const formSection = document.getElementById("form");

  if (startBtn && formSection) {
    startBtn.addEventListener("click", () => {
      formSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});
