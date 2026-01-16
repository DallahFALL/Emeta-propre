/* =====================================================
   e-META — script.js FINAL CLEAN
   Une seule logique, stable, professionnelle
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ===== BURGER MENU ===== */
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
      burger.setAttribute(
        "aria-expanded",
        nav.classList.contains("nav-open")
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

  /* ===== LANGUE ===== */
  const langSelect = document.getElementById("langSelect");
  const rtlStylesheet = document.getElementById("rtlStylesheet");

  if (langSelect) {
    const savedLang = localStorage.getItem("lang") || "fr";
    langSelect.value = savedLang;

    if (typeof window.applyI18n === "function") {
      window.applyI18n(savedLang);
    }

    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
    if (rtlStylesheet) rtlStylesheet.disabled = savedLang !== "ar";

    langSelect.addEventListener("change", () => {
      const lang = langSelect.value;
      localStorage.setItem("lang", lang);

      if (typeof window.applyI18n === "function") {
        window.applyI18n(lang);
      }

      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      if (rtlStylesheet) rtlStylesheet.disabled = lang !== "ar";
    });
  }

});
