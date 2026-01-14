/* =====================================================
   e-META — script.js FINAL PRO
   - Langues dynamiques FR / EN / ES / AR
   - RTL automatique
   - Liens PDF dynamiques par langue
   - Burger menu mobile
   - Scroll CTA vers formulaire
   - Activation intelligente du bouton submit
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

  /* ================= I18N ================= */
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

  /* ================= PDF LINKS ================= */
  function syncHelpLinks(lang) {
    const guide = document.getElementById("pdfGuideLink");
    const privacy = document.getElementById("pdfPrivacyLink");

    if (guide) guide.href = GUIDE_PDF[lang] || GUIDE_PDF.fr;
    if (privacy) privacy.href = PRIVACY_PDF[lang] || PRIVACY_PDF.fr;
  }

  /* ================= SET LANG ================= */
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

  /* ================= SUBMIT LOGIC (PRO) ================= */
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
    /* Lang init */
    setLang(getLang());

    /* Lang switch */
    document
      .getElementById("langSelect")
      ?.addEventListener("change", e => setLang(e.target.value));

    /* Burger menu */
    document
      .getElementById("burgerBtn")
      ?.addEventListener("click", () => {
        const nav = document.getElementById("mainNav");
        nav?.classList.toggle("open");
      });

    /* CTA scroll */
    document.getElementById("startBtn")?.addEventListener("click", scrollToForm);
    document.getElementById("customBtn")?.addEventListener("click", scrollToForm);

    /* Submit intelligent */
    ["decisionTitle", "problem"].forEach(id => {
      document.getElementById(id)
        ?.addEventListener("input", updateSubmitState);
    });

    document
      .getElementById("consent")
      ?.addEventListener("change", updateSubmitState);

    updateSubmitState();

    /* Sécurité submit */
    document
      .getElementById("emetaForm")
      ?.addEventListener("submit", e => {
        if (document.querySelector(".btn-submit")?.disabled) {
          e.preventDefault();
        }
      });
  });

})();
/* =====================================================
   e-META — RÉSUMÉ INTELLIGENT AVANT SOUMISSION
===================================================== */

(function () {
  const form = document.getElementById("emetaForm");
  const summaryBox = document.getElementById("summaryBox");
  const summaryContent = document.getElementById("summaryContent");
  const submitBtn = form.querySelector(".btn-submit");

  if (!form || !submitBtn) return;

  // Intercepter le clic sur "Soumettre"
  submitBtn.addEventListener("click", function (e) {
    if (submitBtn.disabled) return;

    e.preventDefault();
    generateSummary();
  });

  function generateSummary() {
    summaryContent.innerHTML = "";

    const fields = form.querySelectorAll("input, textarea, select");
    fields.forEach((field) => {
      if (!field.name || !field.value) return;
      if (field.type === "checkbox" && !field.checked) return;

      const label = form.querySelector(`label[for="${field.id}"]`);
      const labelText = label ? label.innerText : field.name;

      const item = document.createElement("div");
      item.className = "summary-item";
      item.innerHTML = `
        <span>${labelText}</span>
        <strong>${field.value}</strong>
      `;
      summaryContent.appendChild(item);
    });

    summaryBox.hidden = false;
    summaryBox.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Modifier → revenir au formulaire
  document.getElementById("editSummaryBtn")?.addEventListener("click", () => {
    summaryBox.hidden = true;
  });

  // Confirmer → envoi réel
  document.getElementById("confirmSummaryBtn")?.addEventListener("click", () => {
    summaryBox.hidden = true;
    form.submit();
  });
})();
