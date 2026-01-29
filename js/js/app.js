console.log("✅ app.js chargé");

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (!app) {
    console.error("❌ #app introuvable");
    return;
  }

  app.innerHTML = `
    <section style="padding:40px;color:white">
      <h1>TEST OK</h1>
      <p>Le moteur SPA fonctionne.</p>
    </section>
  `;
});
