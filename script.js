/* =====================================================
   e-META — script.js FINAL RESPONSIVE
   Menu mobile • i18n safe • Scroll form
===================================================== */

(function () {
  "use strict";

  /* ---------- MENU MOBILE ---------- */
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

  /* ---------- CTA SCROLL ---------- */
  const startBtn = document.getElementById("startBtn");
  const formSection = document.getElementById("form");

  if (startBtn && formSection) {
    startBtn.addEventListener("click", () => {
      formSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  /* ---------- LANG INIT SAFE ---------- */
  const langSelect = document.getElementById("langSelect");

  if (langSelect) {
    langSelect.addEventListener("change", () => {
      localStorage.setItem("emeta_lang", langSelect.value);
      location.reload(); // simple & stable
    });

    const savedLang = localStorage.getItem("emeta_lang");
    if (savedLang) {
      langSelect.value = savedLang;
    }
  }

})();
