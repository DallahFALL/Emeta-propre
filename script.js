/* =====================================================
   e-META — script.js FINAL PRO (CLEAN & STABLE)
   - i18n FR / EN / ES / AR
   - RTL automatique
   - Liens PDF dynamiques
   - Menu mobile
   - CTA scroll
   - Validation intelligente
   - Résumé intelligent
   - Score de complétude
   - PDF résumé
   - Pré-prompt IA
   - Verrou UX
   - Sauvegarde locale automatique
===================================================== */

(function () {
  "use strict";

  /* ================= CONFIG ================= */
  const STORAGE_KEY = "emeta_lang";
  const AUTOSAVE_KEY = "emeta_form_autosave";
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

  function scrollToForm() {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  }

  /* ================= DOM READY ================= */
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("emetaForm");
    const submitBtn = form?.querySelector(".btn-submit");
    const summaryBox = document.getElementById("summaryBox");
    const summaryContent = document.getElementById("summaryContent");

    if (!form || !submitBtn || !summaryBox || !summaryContent) return;

    /* ===== Lang init ===== */
    setLang(getLang());
    document.getElementById("langSelect")
      ?.addEventListener("change", e => setLang(e.target.value));

    /* ===== Menu ===== */
    document.getElementById("burgerBtn")
      ?.addEventListener("click", () => {
        document.getElementById("mainNav")?.classList.toggle("open");
      });

    /* ===== CTA ===== */
    document.getElementById("startBtn")?.addEventListener("click", scrollToForm);
    document.getElementById("customBtn")?.addEventListener("click", scrollToForm);

    /* ===== Validation intelligente ===== */
    function updateSubmitState() {
      const title = document.getElementById("decisionTitle");
      const problem = document.getElementById("problem");
      const consent = document.getElementById("consent");

      const valid =
        title?.value.trim().length >= 5 &&
        problem?.value.trim().length >= 20 &&
        consent?.checked;

      submitBtn.disabled = !valid;
    }

    ["decisionTitle", "problem"].forEach(id =>
      document.getElementById(id)?.addEventListener("input", updateSubmitState)
    );
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
      fields.forEach(f => {
        if (!f.name || !f.value) return;
        if (f.type === "checkbox" && !f.checked) return;

        const label = form.querySelector(`label[for="${f.id}"]`);
        const item = document.createElement("div");
        item.className = "summary-item";
        item.innerHTML = `<span>${label?.innerText || f.name}</span><strong>${f.value}</strong>`;
        summaryContent.appendChild(item);
      });

      /* ===== SCORE ===== */
      const scoreFill = document.getElementById("scoreFill");
      const scoreText = document.getElementById("scoreText");
      const required = form.querySelectorAll("input[required], textarea[required], select[required]");

      let filled = 0;
      required.forEach(f => {
        if ((f.type === "checkbox" && f.checked) || (f.value || "").trim()) filled++;
      });

      const score = Math.round((filled / required.length) * 100);
      if (scoreFill) scoreFill.style.width = score + "%";
      if (scoreText) {
        scoreText.textContent =
          score < 50 ? "Demande incomplète – amélioration recommandée"
          : score < 80 ? "Bonne base – précisions utiles"
          : "Demande très bien structurée";
      }

      summaryBox.hidden = false;
      summaryBox.scrollIntoView({ behavior: "smooth" });
    }

    document.getElementById("editSummaryBtn")
      ?.addEventListener("click", () => summaryBox.hidden = true);

    document.getElementById("downloadSummaryBtn")
      ?.addEventListener("click", () => {
        const win = window.open("", "_blank");
        win.document.write(`
          <html><body style="font-family:Arial;padding:24px">
          <h1>Résumé e-META</h1>${summaryContent.innerHTML}
          </body></html>
        `);
        win.document.close();
        win.print();
      });

    /* ===== CONFIRMATION FINALE (UX LOCK + IA) ===== */
    document.getElementById("confirmSummaryBtn")
      ?.addEventListener("click", () => {

        const btn = document.getElementById("confirmSummaryBtn");
        btn.disabled = true;
        btn.textContent = "Analyse en cours…";

        let aiSummary = "CONTEXTE STRUCTURÉ DE LA DÉCISION :\n\n";
        summaryContent.querySelectorAll(".summary-item").forEach(item => {
          aiSummary += `- ${item.innerText.replace(/\n/g, " : ")}\n`;
        });

        document.getElementById("metaSummaryInput").value = aiSummary;
        localStorage.removeItem(AUTOSAVE_KEY);

        form.submit();
      });

    /* ================= AUTOSAVE ================= */
    function saveFormState() {
      const data = {};
      form.querySelectorAll("input, textarea, select").forEach(el => {
        if (!el.name) return;
        data[el.name] = el.type === "checkbox" ? el.checked : el.value;
      });
      localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(data));
    }

    function restoreFormState() {
      const raw = localStorage.getItem(AUTOSAVE_KEY);
      if (!raw) return;
      try {
        const data = JSON.parse(raw);
        form.querySelectorAll("input, textarea, select").forEach(el => {
          if (el.name in data) {
            el.type === "checkbox" ? el.checked = data[el.name] : el.value = data[el.name];
          }
        });
      } catch {}
    }

    restoreFormState();
    form.addEventListener("input", saveFormState);
    form.addEventListener("change", saveFormState);

  });
   /* =====================================================
   e-META — i18n AUTO SUR PAGES SECONDAIRES (privacy, etc.)
===================================================== */

(function applyLangOnAllPages() {
  const lang = localStorage.getItem("emeta_lang") || "fr";

  // HTML lang + dir
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // RTL CSS
  const rtl = document.getElementById("rtlStylesheet");
  if (rtl) rtl.disabled = lang !== "ar";

  // I18N contenu
  const dict = window.I18N?.[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

})();

})();
