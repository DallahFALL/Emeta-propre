/* =====================================================
   e-META UI BRIDGE
   - Switch langue UI
   - Appelle ton setLang EXISTANT
   - Gère RTL proprement
===================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";

  function setDir(lang){
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
  }

  function bindUiLangSelect(){
    const sel = document.getElementById("uiLangSelect");
    if (!sel) return;

    // sync initial
    const current = localStorage.getItem(STORAGE_KEY) || "fr";
    sel.value = current;
    setDir(current);

    sel.addEventListener("change", () => {
      const lang = sel.value;

      // stocke
      localStorage.setItem(STORAGE_KEY, lang);

      // RTL
      setDir(lang);

      // appelle ton i18n EXISTANT si présent
      if (typeof window.setLang === "function") {
        window.setLang(lang);
      }
    });
  }

  function bindBurger(){
    const btn = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");
    if (!btn || !nav) return;

    btn.addEventListener("click", () => {
      nav.classList.toggle("open");
      btn.setAttribute(
        "aria-expanded",
        nav.classList.contains("open") ? "true" : "false"
      );
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    bindUiLangSelect();
    bindBurger();
  });

})();
