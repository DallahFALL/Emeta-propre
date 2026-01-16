/* =====================================================
   e-META — script.js (SAFE VERSION)
   - Aucun masquage du formulaire
   - Responsive stable
   - Langues OK
   - Burger menu OK
===================================================== */

(function () {
  "use strict";

  /* =========================
     BURGER MENU
  ========================== */
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      const expanded = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });
  }

  /* =========================
     SCROLL CTA → FORM
  ========================== */
  const startBtn = document.getElementById("startBtn");
  const formSection = document.getElementById("form");

  if (startBtn && formSection) {
    startBtn.addEventListener("click", () => {
      formSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  /* =========================
     LANGUE (NE TOUCHE PAS AU FORM)
  ========================== */
  const langSelect = document.getElementById("langSelect");
  const rtlStylesheet = document.getElementById("rtlStylesheet");

  if (langSelect) {
    langSelect.addEventListener("change", () => {
      const lang = langSelect.value;
      document.documentElement.lang = lang;

      if (lang === "ar") {
        document.documentElement.dir = "rtl";
        if (rtlStylesheet) rtlStylesheet.disabled = false;
      } else {
        document.documentElement.dir = "ltr";
        if (rtlStylesheet) rtlStylesheet.disabled = true;
      }
    });
  }

  /* =========================
     IMPORTANT : NE PAS TOUCHER
     AUX FIELDSETS / DISPLAY
  ========================== */
})();
