/* ===========================
   e-META — app.js (CORE)
=========================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Langue persistée
  const lang = localStorage.getItem("emeta_lang") || "fr";
  window.setLang(lang, false);

  // 2. Router initial
  window.loadRoute(location.hash || "#/home");

  // 3. Écoute navigation
  window.addEventListener("hashchange", () => {
    window.loadRoute(location.hash);
  });
});
