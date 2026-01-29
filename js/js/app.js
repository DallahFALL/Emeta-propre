/* =====================================================
   e-META — SPA Router (STABLE)
===================================================== */

(function () {
  const app = document.getElementById("app");
  if (!app) {
    console.error("❌ #app not found");
    return;
  }

  const routes = {
    "#/": "views/home.html",
    "#/form": "views/form.html",
    "#/privacy": "views/privacy.html"
  };

  async function loadView(path) {
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error("View not found: " + path);
      const html = await res.text();
      app.innerHTML = html;

      // 🔁 IMPORTANT : réappliquer i18n après injection
      if (window.EMETA_UI && EMETA_UI.applyI18n) {
        EMETA_UI.applyI18n();
      }
    } catch (err) {
      app.innerHTML = `<p style="color:red">${err.message}</p>`;
      console.error(err);
    }
  }

  function router() {
    const hash = location.hash || "#/";
    const view = routes[hash] || routes["#/"];
    loadView(view);
  }

  window.addEventListener("hashchange", router);
  window.addEventListener("DOMContentLoaded", router);
})();
