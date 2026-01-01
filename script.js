document.addEventListener("DOMContentLoaded", () => {

  /* ================= CTA HERO ================= */
  const ctaStart = document.querySelector(".cta-primary");
  const formSection = document.querySelector("#form");

  if (ctaStart && formSection) {
    ctaStart.addEventListener("click", () => {
      formSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

  /* ================= HEADER CTA ================= */
  const ctaHeader = document.querySelector(".cta-header");

  if (ctaHeader && formSection) {
    ctaHeader.addEventListener("click", () => {
      formSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

  /* ================= SUBMIT (PLACEHOLDER) ================= */
  const submitBtn = document.querySelector(".cta-submit");

  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      // Ici Make / Webhook
      console.log("Requête stratégique envoyée");
    });
  }

});
