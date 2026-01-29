/* =====================================================
   e-META — SPA Router
   Routes:
   #/        -> views/home.html
   #/form    -> views/form.html
   #/privacy -> views/privacy.html
===================================================== */
(function () {
  "use strict";

  const app = document.getElementById("app");
  const ROUTES = {
    "/": "views/home.html",
    "/form": "views/form.html",
    "/privacy": "views/privacy.html",
  };

  function normalizeHash() {
    const raw = (location.hash || "#/").replace("#", "");
    return raw.startsWith("/") ? raw : "/" + raw;
  }

  async function loadView(path) {
    const url = ROUTES[path] || ROUTES["/"];
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error("View load failed: " + url);
    return await res.text();
  }

  function scrollTopSmart() {
    // évite que le header couvre le haut sur mobile
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }

  async function render() {
    if (!app) return;

    const path = normalizeHash();
    try {
      const html = await loadView(path);
      app.innerHTML = html;

      // appliquer i18n sur la vue injectée
      if (window.EMETA_UI) {
        const lang = window.EMETA_UI.getLang();
        window.EMETA_UI.setRTL(lang);
        window.EMETA_UI.applyI18n(lang);
      }

      scrollTopSmart();
    } catch (e) {
      console.error(e);
      app.innerHTML = `<div class="container" style="padding:24px">
        <h2>Erreur</h2><p>Impossible de charger la vue.</p>
      </div>`;
    }
  }

  window.EMETA = {
    refreshViewI18n: () => {
      if (window.EMETA_UI) {
        const lang = window.EMETA_UI.getLang();
        window.EMETA_UI.applyI18n(lang);
      }
    },
  };

  window.addEventListener("hashchange", render);

  document.addEventListener("DOMContentLoaded", () => {
    // Init UI first (lang persisted)
    if (window.EMETA_UI) window.EMETA_UI.initUI();

    // default route
    if (!location.hash) location.hash = "#/";
    render();
  });
})();

