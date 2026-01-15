/* =====================================================
   e-META — script.js FINAL PRO (CLEAN)
   - i18n FR / EN / ES / AR
   - RTL automatique
   - Liens PDF dynamiques
   - Menu mobile
   - CTA scroll
   - Validation intelligente
   - Résumé + Score + PDF + Pré-prompt IA
===================================================== */

(function () {
  "use strict";

  /* ================= CONFIG ================= */
  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";

  const GUIDE_PDF = {
    fr: "pdf/eMETA_Guide_Formulaire_FR.pdf",
    en: "pdf/eMETA_Guide_Formulaire_EN.pdf",
    es: "pdf/eMETA_Guide_Formulaire_ES.pdf",
    ar: "pdf/eMETA_Guide_Formulaire_AR.pdf"
  };

  const PRIVACY_PDF = {
    fr: "pdf/eMETA_Privacy_CGU_FR.pdf",
    en: "pdf/eMETA_Privacy_CGU_EN.pdf",
    es: "pdf/eMETA_Privacy_CGU_ES.pdf",
    ar: "pdf/eMETA_Privacy_CGU_AR.pdf"
  };

  /* ================= LANG ================= */
  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setRtl(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    const rtl = document.getElementById("rtlStylesheet");
    if (rtl) rtl.disabled = lang !== "ar";
  }

  function applyI18n(lang) {
    const dict = window.I18N?.[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key]) el.placeholder = dict[key];
    });
  }

  function syncHelpLinks(lang) {
    const guide = document.getElementById("pdfGuideLink");
    const privacy = document.getElementById("pdfPrivacyLink");

    if (guide) guide.href = GUIDE_PDF[lang] || GUIDE_PDF.fr;
    if (privacy) privacy.href = PRIVACY_PDF[lang] || PRIVACY_PDF.fr;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    setRtl(lang);
    applyI18n(lang);
    syncHelpLinks(lang);

    const select = document.getElementById("langSelect");
    if (select) select.value = lang;
  }

  /* ================= SCROLL ================= */
  function scrollToForm() {
    document.getElementById("form")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  /* ================= VALIDATION ================= */
  function updateSubmitState() {
    const title = document.getElementById("decisionTitle");
    const problem = document.getElementById("problem");
    const consent = document.getElementById("consent");
    const submitBtn = document.querySelector(".btn-submit");

    if (!title || !problem || !consent || !submitBtn) return;

    const isValid =
      title.value.trim().length >= 5 &&
      problem.value.trim().length >= 20 &&
      consent.checked;

    submitBtn.disabled = !isValid;
  }

  /* ================= DOM READY ================= */
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("emetaForm");
    const submitBtn = form?.querySelector(".btn-submit");
    const summaryBox = document.getElementById("summaryBox");
    const summaryContent = document.getElementById("summaryContent");

    if (!form || !submitBtn || !summaryBox || !summaryContent) return;

    /* Lang init */
    setLang(getLang());

    document.getElementById("langSelect")
      ?.addEventListener("change", e => setLang(e.target.value));

    document.getElementById("burgerBtn")
      ?.addEventListener("click", () => {
        document.getElementById("mainNav")?.classList.toggle("open");
      });

    document.getElementById("startBtn")?.addEventListener("click", scrollToForm);
    document.getElementById("customBtn")?.addEventListener("click", scrollToForm);

    ["decisionTitle", "problem"].forEach(id => {
      document.getElementById(id)
        ?.addEventListener("input", updateSubmitState);
    });

    document.getElementById("consent")
      ?.addEventListener("change", updateSubmitState);

    updateSubmitState();

    /* ================= RÉSUMÉ INTELLIGENT ================= */

    submitBtn.addEventListener("click", e => {
      if (submitBtn.disabled) return;
      e.preventDefault();
      generateSummary();
    });

    function generateSummary() {
      summaryContent.innerHTML = "";

      const fields = form.querySelectorAll("input, textarea, select");
      fields.forEach(field => {
        if (!field.name || !field.value) return;
        if (field.type === "checkbox" && !field.checked) return;

        const label = form.querySelector(`label[for="${field.id}"]`);
        const labelText = label ? label.innerText : field.name;

        const item = document.createElement("div");
        item.className = "summary-item";
        item.innerHTML = `<span>${labelText}</span><strong>${field.value}</strong>`;
        summaryContent.appendChild(item);
      });

      /* ===== SCORE ===== */
      const scoreFill = document.getElementById("scoreFill");
      const scoreText = document.getElementById("scoreText");

      const requiredFields = form.querySelectorAll(
        "input[required], textarea[required], select[required]"
      );

      let filled = 0;
      requiredFields.forEach(f => {
        if (
          (f.type === "checkbox" && f.checked) ||
          (f.type !== "checkbox" && f.value.trim() !== "")
        ) filled++;
      });

      const score = Math.round((filled / requiredFields.length) * 100);
      if (scoreFill) scoreFill.style.width = score + "%";
      if (scoreText) {
        scoreText.textContent =
          score < 50 ? "Demande incomplète – amélioration recommandée"
          : score < 80 ? "Bonne base – quelques précisions utiles"
          : "Demande très bien structurée";
      }

      summaryBox.hidden = false;
      summaryBox.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    /* Modifier */
    document.getElementById("editSummaryBtn")
      ?.addEventListener("click", () => {
        summaryBox.hidden = true;
      });

    /* Télécharger PDF */
    document.getElementById("downloadSummaryBtn")
      ?.addEventListener("click", () => {
        const win = window.open("", "_blank");
        win.document.write(`
          <html><head><title>Résumé e-META</title></head>
          <body style="font-family:Arial;padding:24px">
            <h1>Résumé de la demande</h1>
            ${summaryContent.innerHTML}
          </body></html>
        `);
        win.document.close();
        win.print();
      });

    /* Confirmer → IA */
    document.getElementById("confirmSummaryBtn")
      ?.addEventListener("click", () => {
        let aiSummary = "CONTEXTE STRUCTURÉ DE LA DÉCISION :\n\n";
        summaryContent.querySelectorAll(".summary-item").forEach(item => {
          const label = item.querySelector("span")?.innerText;
          const value = item.querySelector("strong")?.innerText;
          if (label && value) aiSummary += `- ${label} : ${value}\n`;
        });

        const hidden = document.getElementById("metaSummaryInput");
        if (hidden) hidden.value = aiSummary;

        form.submit();
      });
  });

})();
