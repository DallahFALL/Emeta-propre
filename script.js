/* =====================================================
   e-META — script.js FINAL STABLE
   - Aucun masquage du formulaire
   - Scroll fiable vers le formulaire réel
   - Burger menu propre
   - Langues sans effet destructeur
===================================================== */

(function () {
  "use strict";

  /* =========================
     ELEMENTS
  ========================== */
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");
  const startBtn = document.getElementById("startBtn");
  const form = document.getElementById("emetaForm");
  const langSelect = document.getElementById("langSelect");
  const rtlStylesheet = document.getElementById("rtlStylesheet");

  /* =========================
     BURGER MENU
  ========================== */
  if (burger && nav) {
    burger.addEventListener("click", () => {
      const expanded = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });
  }

  /* =========================
     SCROLL CTA → FORM (FIX)
  ========================== */
  if (startBtn && form) {
    startBtn.addEventListener("click", () => {
      form.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

  /* =========================
     LANGUE (SANS TOUCHER AU FORM)
  ========================== */
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

      /* 🔒 GARANTIE VISIBILITÉ FORMULAIRE */
      if (form) {
        form.style.display = "block";
        form.style.visibility = "visible";
        form.style.opacity = "1";
      }
    });
  }

  /* =========================
     SÉCURITÉ ANTI-RÉGRESSION
  ========================== */
  if (form) {
    form.style.display = "block";
    form.style.visibility = "visible";
    form.style.opacity = "1";
  }

})();
