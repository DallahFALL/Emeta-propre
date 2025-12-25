/* =====================================================
   e-META — script.js (i18n + UX stable)
   - Fix JS breaking "..." token
   - i18n FR/EN/ES/AR + RTL handling
   - Burger menu
   - CTA scroll to #form
   - Form submit (Make webhook) + Reset
===================================================== */

const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/9giawgap6b3yjmxtx5i9bc30hjixbu48";

/** Minimal but complete i18n map for visible UI.
 *  If a key is missing, the current HTML text is kept. */
const I18N = {
  fr: {
    tagline: "Assistant IA multilingue de prise de décision",
    "nav.home": "Accueil",
    "nav.form": "Formulaire",
    "nav.privacy": "Confidentialité",
    "cta.start": "Démarrer une analyse stratégique",
    "problem_title": "Le vrai problème",
    "problem_1": "Trop d’informations, pas assez de clarté",
    "problem_2": "Décisions basées sur l’intuition, pas sur une structure",
    "problem_3": "L’expertise de conseil est coûteuse ou inaccessible",
    "footer.copy": "e-META © 2025 — Assistant IA de décision stratégique",
    "footer.text": "e-META © 2025 — Assistant IA de décision stratégique",
    "footer.privacy": "Politique de confidentialité",
    "footer.back": "Retour à l’accueil",

    "privacy.meta.title": "Politique de confidentialité – e-META",
    "privacy.title": "Politique de confidentialité",
    "privacy.intro": "Cette politique explique comment e-META collecte, utilise et protège vos informations lorsque vous utilisez notre service.",
    "privacy.section1.title": "1. Responsable du traitement",
    "privacy.section1.text": "Le service e-META est édité par son porteur de projet. Pour toute question relative à la protection des données, utilisez les coordonnées indiquées sur le site.",
    "privacy.section2.title": "2. Données collectées",
    "privacy.section2.text": "Les catégories de données suivantes peuvent être collectées :",
    "privacy.section2.item1": "Informations fournies volontairement dans le formulaire (contexte, objectifs, contraintes, données de projet).",
    "privacy.section2.item2": "Coordonnées de contact si vous les renseignez (e-mail, numéro WhatsApp).",
    "privacy.section2.item3": "Liens vers des documents externes (Drive, Dropbox, Notion, PDF en ligne, etc.).",
    "privacy.section3.title": "3. Finalités du traitement",
    "privacy.section3.item1": "Générer une synthèse décisionnelle structurée (analyse, options, recommandations).",
    "privacy.section3.item2": "Restituer le résultat via e-mail, WhatsApp, PDF ou affichage selon votre choix.",
    "privacy.section3.item3": "Améliorer la qualité du service (statistiques anonymisées, debug).",
    "privacy.section4.title": "4. Base légale",
    "privacy.section4.text1": "Le traitement repose sur votre consentement et/ou l’exécution du service demandé.",
    "privacy.section4.text2": "Vous pouvez retirer votre consentement à tout moment en nous contactant.",
    "privacy.section5.title": "5. Durée de conservation",
    "privacy.section5.text": "Les données sont conservées le temps nécessaire à la fourniture du service et à des fins légales/techniques, puis supprimées ou anonymisées.",
    "privacy.section6.title": "6. Partage des données",
    "privacy.section6.text": "Aucune donnée personnelle n’est vendue. Des prestataires techniques peuvent traiter des données uniquement pour exécuter le service (hébergement, e-mail, WhatsApp).",
    "privacy.section7.title": "7. Sécurité",
    "privacy.section7.text": "Nous mettons en œuvre des mesures raisonnables de sécurité (contrôles d’accès, chiffrement en transit, bonnes pratiques).",
    "privacy.section8.title": "8. Vos droits",
    "privacy.section8.item1": "Accès, rectification et mise à jour de vos données.",
    "privacy.section8.item2": "Suppression et limitation du traitement (selon les cas).",
    "privacy.section8.item3": "Portabilité des données lorsque applicable.",
    "privacy.section8.item4": "Opposition au traitement dans certains cas.",
    "privacy.section9.title": "9. Transferts internationaux",
    "privacy.section9.text": "Certains prestataires peuvent être situés hors de votre pays. Nous privilégions des garanties appropriées lorsque nécessaire.",
    "privacy.section10.title": "10. Contact",
    "privacy.section10.text": "Pour toute question sur la confidentialité, contactez-nous via les coordonnées figurant sur le site e-meta.app."
  },

  en: {
    tagline: "Multilingual AI decision intelligence assistant",
    "nav.home": "Home",
    "nav.form": "Form",
    "nav.privacy": "Privacy",
    "cta.start": "Start a strategic analysis",
    "problem_title": "The real problem",
    "problem_1": "Too much information, not enough clarity",
    "problem_2": "Decisions driven by intuition, not structure",
    "problem_3": "Top-tier consulting is expensive or inaccessible",
    "footer.copy": "e-META © 2025 — Decision intelligence assistant",
    "footer.text": "e-META © 2025 — Decision intelligence assistant",
    "footer.privacy": "Privacy policy",
    "footer.back": "Back to home",

    "privacy.meta.title": "Privacy Policy – e-META",
    "privacy.title": "Privacy Policy",
    "privacy.intro": "This policy explains how e-META collects, uses and protects your information when you use our service.",
    "privacy.section1.title": "1. Data controller",
    "privacy.section1.text": "e-META is operated by the project owner. For any privacy question, use the contact details provided on the website.",
    "privacy.section2.title": "2. Data we collect",
    "privacy.section2.text": "The following categories may be collected:",
    "privacy.section2.item1": "Information you provide in the form (context, goals, constraints, project data).",
    "privacy.section2.item2": "Contact details if provided (email address, WhatsApp number).",
    "privacy.section2.item3": "Links to external documents (Drive, Dropbox, Notion, online PDFs, etc.).",
    "privacy.section3.title": "3. Purposes",
    "privacy.section3.item1": "Generate a structured decision brief (analysis, options, recommendations).",
    "privacy.section3.item2": "Deliver results via email, WhatsApp, PDF or on-screen display.",
    "privacy.section3.item3": "Improve service quality (anonymized stats, debugging).",
    "privacy.section4.title": "4. Legal basis",
    "privacy.section4.text1": "Processing relies on your consent and/or the performance of the requested service.",
    "privacy.section4.text2": "You can withdraw your consent at any time by contacting us.",
    "privacy.section5.title": "5. Retention",
    "privacy.section5.text": "We keep data only as long as needed to provide the service and for legal/technical needs, then delete or anonymize it.",
    "privacy.section6.title": "6. Sharing",
    "privacy.section6.text": "We do not sell personal data. Technical providers may process data only to deliver the service (hosting, email, WhatsApp).",
    "privacy.section7.title": "7. Security",
    "privacy.section7.text": "We apply reasonable security measures (access control, encryption in transit, best practices).",
    "privacy.section8.title": "8. Your rights",
    "privacy.section8.item1": "Access, rectify and update your data.",
    "privacy.section8.item2": "Delete and restrict processing (where applicable).",
    "privacy.section8.item3": "Data portability where applicable.",
    "privacy.section8.item4": "Object to processing in certain cases.",
    "privacy.section9.title": "9. International transfers",
    "privacy.section9.text": "Some providers may be located outside your country. We favor appropriate safeguards where required.",
    "privacy.section10.title": "10. Contact",
    "privacy.section10.text": "For any privacy question, contact us using the details available on e-meta.app."
  },

  es: {
    tagline: "Asistente multilingüe de inteligencia para decisiones",
    "nav.home": "Inicio",
    "nav.form": "Formulario",
    "nav.privacy": "Privacidad",
    "cta.start": "Iniciar un análisis estratégico",
    "problem_title": "El problema real",
    "problem_1": "Demasiada información, poca claridad",
    "problem_2": "Decisiones por intuición, no por estructura",
    "problem_3": "La consultoría de alto nivel es cara o inaccesible",
    "footer.copy": "e-META © 2025 — Asistente de inteligencia para decisiones",
    "footer.text": "e-META © 2025 — Asistente de inteligencia para decisiones",
    "footer.privacy": "Política de privacidad",
    "footer.back": "Volver al inicio"
  },

  ar: {
    tagline: "مساعد ذكاء متعدد اللغات لاتخاذ القرار",
    "nav.home": "الرئيسية",
    "nav.form": "النموذج",
    "nav.privacy": "الخصوصية",
    "cta.start": "ابدأ تحليلاً استراتيجياً",
    "problem_title": "المشكلة الحقيقية",
    "problem_1": "معلومات كثيرة دون وضوح كافٍ",
    "problem_2": "قرارات حدسية دون إطار منظم",
    "problem_3": "الخبرة الاستشارية مكلفة أو غير متاحة",
    "footer.copy": "e-META © 2025 — مساعد ذكاء لاتخاذ القرار",
    "footer.text": "e-META © 2025 — مساعد ذكاء لاتخاذ القرار",
    "footer.privacy": "سياسة الخصوصية",
    "footer.back": "العودة إلى الرئيسية"
  }
};

function getRtlLink() {
  return document.getElementById("rtlStylesheet");
}

function setDirAndRtl(lang) {
  const isRTL = lang === "ar";
  document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", lang);

  const rtlLink = getRtlLink();
  if (rtlLink) rtlLink.disabled = !isRTL;
}

function applyI18n(lang) {
  const dict = I18N[lang] || I18N.fr;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if (typeof val === "string" && val.trim().length) el.textContent = val;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const val = dict[key];
    if (typeof val === "string" && val.trim().length) el.setAttribute("placeholder", val);
  });

  const titleEl = document.querySelector("title[data-i18n]");
  if (titleEl) {
    const key = titleEl.getAttribute("data-i18n");
    const val = dict[key];
    if (val) document.title = val;
  }
}

function setLanguage(lang) {
  const safe = (lang && I18N[lang]) ? lang : "fr";
  localStorage.setItem("eMETA_LANG", safe);

  const sw = document.getElementById("languageSwitcher");
  if (sw) sw.value = safe;

  setDirAndRtl(safe);
  applyI18n(safe);
}

function initLanguage() {
  const sw = document.getElementById("languageSwitcher");
  const saved = localStorage.getItem("eMETA_LANG");
  const initial = saved || (sw ? sw.value : "fr");
  setLanguage(initial);

  if (sw) sw.addEventListener("change", (e) => setLanguage(e.target.value));
}

function initBurger() {
  const btn = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function initCTA() {
  const cta = document.getElementById("ctaStart");
  if (!cta) return;
  cta.addEventListener("click", () => smoothScrollTo("form"));
}

function formToObject(form) {
  const data = {};
  new FormData(form).forEach((value, key) => {
    if (data[key] !== undefined) {
      if (!Array.isArray(data[key])) data[key] = [data[key]];
      data[key].push(value);
    } else {
      data[key] = value;
    }
  });
  return data;
}

function setStatus(msg, type = "info") {
  const el = document.getElementById("formStatus");
  if (!el) return;
  el.textContent = msg;
  el.dataset.type = type;
  el.style.display = msg ? "block" : "none";
}

function initForm() {
  const form = document.getElementById("emetaForm");
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const resetBtn = form.querySelector('button[type="reset"]');

  if (resetBtn) resetBtn.addEventListener("click", () => setStatus(""));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const consent = form.querySelector('input[type="checkbox"][name="consent"], #consent');
    if (consent && !consent.checked) {
      setStatus("Veuillez accepter l’utilisation des informations pour générer l’analyse.", "error");
      consent.focus();
      return;
    }

    if (submitBtn) submitBtn.disabled = true;
    setStatus("Envoi en cours…", "info");

    const payload = {
      source: "e-meta.app",
      page: location.pathname,
      lang: document.documentElement.lang || "fr",
      timestamp: new Date().toISOString(),
      answers: formToObject(form)
    };

    try {
      const res = await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("HTTP " + res.status);

      setStatus("✅ Requête envoyée. Vous recevrez votre restitution selon l’option choisie.", "success");
    } catch (err) {
      console.error(err);
      setStatus("❌ Erreur d’envoi. Vérifiez votre connexion ou le Webhook Make.", "error");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initBurger();
  initCTA();
  initForm();
});
