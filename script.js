/* ============================================
   e-META v5.0 – Formulaire décisionnel avancé
   Compatible Make + OpenAI + WhatsApp + Email
   ============================================ */

const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/dagmll5s04nubg7dp2gujws72zzedvx2";

/* ==========================
   CONFIG MULTILINGUE
   ========================== */

const LANG = {
  fr: {
    domains: [
      "Agriculture", "Énergie", "Finances", "Immobilier",
      "Industrie", "Transport", "Technologie", "Santé",
      "Éducation", "Logistique", "Gouvernance", "Autre"
    ],
    currencies: [
      { value: "XOF", label: "XOF — Franc CFA" },
      { value: "EUR", label: "EUR — Euro" },
      { value: "USD", label: "USD — Dollar" },
      { value: "GBP", label: "GBP — Livre" }
    ],
    placeholders: {
      title: "Ex: Lancement d’un projet énergie solaire",
      context: "Décrivez la situation actuelle…",
      objectives: "Quels résultats souhaitez-vous atteindre ?",
      constraints: "Contraintes, risques, limites…",
      deadline: "Ex: 3 mois, Q1 2026…"
    }
  },

  en: {
    domains: [
      "Agriculture", "Energy", "Finance", "Real Estate",
      "Industry", "Transport", "Technology", "Health",
      "Education", "Logistics", "Governance", "Other"
    ],
    currencies: [
      { value: "USD", label: "USD — US Dollar" },
      { value: "EUR", label: "EUR — Euro" },
      { value: "GBP", label: "GBP — Pound" },
      { value: "XOF", label: "XOF — CFA Franc" }
    ],
    placeholders: {
      title: "Eg: Solar energy project launch",
      context: "Describe the current situation…",
      objectives: "What results do you expect?",
      constraints: "Constraints, risks, limits…",
      deadline: "Eg: 3 months, Q1 2026…"
    }
  },

  es: {
    domains: [
      "Agricultura", "Energía", "Finanzas", "Inmobiliario",
      "Industria", "Transporte", "Tecnología", "Salud",
      "Educación", "Logística", "Gobernanza", "Otro"
    ],
    currencies: [
      { value: "EUR", label: "EUR — Euro" },
      { value: "USD", label: "USD — Dólar" },
      { value: "GBP", label: "GBP — Libra" },
      { value: "XOF", label: "XOF — Franco CFA" }
    ],
    placeholders: {
      title: "Ej: Lanzamiento de proyecto solar",
      context: "Describa la situación actual…",
      objectives: "¿Qué resultados busca?",
      constraints: "Restricciones, riesgos, límites…",
      deadline: "Ej: 3 meses, Q1 2026…"
    }
  },

  ar: {
    domains: [
      "الزراعة", "الطاقة", "المالية", "العقار",
      "الصناعة", "النقل", "التقنية", "الصحة",
      "التعليم", "اللوجستية", "الحوكمة", "أخرى"
    ],
    currencies: [
      { value: "XOF", label: "XOF — فرنك إفريقي" },
      { value: "USD", label: "USD — دولار" },
      { value: "EUR", label: "EUR — يورو" },
      { value: "GBP", label: "GBP — جنيه" }
    ],
    placeholders: {
      title: "مثال: إطلاق مشروع طاقة شمسية",
      context: "اشرح الوضع الحالي…",
      objectives: "ما هي الأهداف المطلوبة؟",
      constraints: "القيود والمخاطر…",
      deadline: "مثال: 3 أشهر، 2026…"
    }
  }
};

let currentLang = "fr";

/* ==============================
   INITIALISATION LANG et LISTES
   ============================== */

function applyLanguage(lang) {
  currentLang = lang;

  const cfg = LANG[lang];

  // DOMAINS
  const domainSelect = document.getElementById("domain");
  domainSelect.innerHTML = "";
  cfg.domains.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d;
    opt.textContent = d;
    domainSelect.appendChild(opt);
  });

  // CURRENCIES
  const currencySelect = document.getElementById("budget_currency");
  currencySelect.innerHTML = "";
  cfg.currencies.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.value;
    opt.textContent = c.label;
    currencySelect.appendChild(opt);
  });

  // Placeholders
  document.getElementById("decision_title").placeholder = cfg.placeholders.title;
  document.getElementById("context").placeholder = cfg.placeholders.context;
  document.getElementById("objectives").placeholder = cfg.placeholders.objectives;
  document.getElementById("constraints").placeholder = cfg.placeholders.constraints;
  document.getElementById("deadline").placeholder = cfg.placeholders.deadline;
}

/* ==============================
   ENVOI VERS MAKE
   ============================== */

function sendToMake(payload) {
  fetch(MAKE_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
  .catch(err => console.error("Erreur webhook:", err));
}

/* ==============================
   FORM SUBMIT
   ============================== */

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage("fr"); // Chargement initial
  
  // Changement de langue via menu principal du site
  const langSelect = document.getElementById("language");
  langSelect.addEventListener("change", () => {
    applyLanguage(langSelect.value);
  });

  document.getElementById("sendBtn").addEventListener("click", () => {

    const payload = {
      full_name: full_name.value,
      email: email.value,
      whatsapp: whatsapp.value,
      language: language.value,
      domain: domain.value,
      decision_title: decision_title.value,
      context: context.value,
      objectives: objectives.value,
      constraints: constraints.value,
      budget_amount: budget_amount.value,
      budget_currency: budget_currency.value,
      deadline: deadline.value,
      urgency: urgency.value,
      output_preference: document.querySelector("input[name='output_preference']:checked").value,
      attachment_url: attachment_url.value,
      consent: consent.checked
    };

    if (!payload.consent) {
      alert("Veuillez cocher la case de consentement.");
      return;
    }

    sendToMake(payload);

    alert("Votre requête a été envoyée à e-META. Vous recevrez une synthèse personnalisée.");
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("emetaForm").reset();
    applyLanguage(currentLang);
  });
});
