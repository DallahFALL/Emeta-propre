/* ============================================================
   e-META v4.4 — Langues, Thèmes, Devises, WhatsApp, Make, UI
   Version propre, stable, compatible GitHub Pages
   ============================================================ */

const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/xxxxxxx"; // ← mettre ton URL Make ici

let currentLang = "fr";

/* =========================================
   Chargement JSON i18n
   ========================================= */
async function loadLangJSON(lang) {
  try {
    const res = await fetch(`${lang}.json`);
    return await res.json();
  } catch (e) {
    console.error("Erreur chargement JSON:", e);
    return null;
  }
}

/* =========================================
   Appliquer la langue
   ========================================= */
async function applyLanguage(lang) {
  const cfg = await loadLangJSON(lang);
  if (!cfg) return;

  currentLang = lang;
  document.documentElement.lang = lang;
  document.body.classList.toggle("rtl", lang === "ar");

  /* TEXTES DIRECTS */
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (cfg.texts[key]) el.textContent = cfg.texts[key];
  });

  /* PLACEHOLDERS */
  document.querySelector("#expected").placeholder = cfg.placeholders.expected;
  document.querySelector("#budget").placeholder   = cfg.placeholders.budget;
  document.querySelector("#fullname").placeholder = cfg.placeholders.fullname;
  document.querySelector("#phone").placeholder    = cfg.placeholders.phone;
  document.querySelector("#email").placeholder    = cfg.placeholders.email;
  document.querySelector("#details").placeholder  = cfg.placeholders.details;

  /* LISTE : DOMAINES / THEMES */
  populateSelect(
    document.querySelector("#themeSelect"),
    cfg.themes.map(th => ({ value: th, label: th })),
    cfg.themes[0]
  );

  /* LISTE : DEVISES */
  populateSelect(
    document.querySelector("#currencySelect"),
    cfg.currencies,
    cfg.defaultCurrency
  );

  /* Mise à jour flag + code langue */
  document.querySelector("#langFlag").textContent = cfg.flag;
  document.querySelector("#langCode").textContent = cfg.code;
}

/* =========================================
   Helpers
   ========================================= */
function populateSelect(selectEl, options, selectedValue) {
  if (!selectEl) return;
  selectEl.innerHTML = "";
  options.forEach(opt => {
    const o = document.createElement("option");
    o.value = opt.value;
    o.textContent = opt.label;
    if (opt.value === selectedValue) o.selected = true;
    selectEl.appendChild(o);
  });
}

function getVal(id) {
  return document.getElementById(id)?.value?.trim() || "-";
}

/* =========================================
   Générer le résumé
   ========================================= */
function buildFormSummary(cfg) {
  return (
    `${cfg.texts.label_theme}: ${getVal("themeSelect")}\n` +
    `${cfg.texts.label_expected}: ${getVal("expected")}\n` +
    `${cfg.texts.label_budget}: ${getVal("budget")} ${getVal("currencySelect")}\n` +
    `${cfg.texts.label_fullname}: ${getVal("fullname")}\n` +
    `${cfg.texts.label_phone}: ${getVal("phone")}\n` +
    `${cfg.texts.label_email}: ${getVal("email")}\n` +
    `${cfg.texts.label_details}:\n${getVal("details")}`
  );
}

/* =========================================
   WhatsApp
   ========================================= */
async function buildWhatsappUrl(isHeader = false) {
  const cfg = await loadLangJSON(currentLang);
  if (!cfg) return;

  const number = cfg.whatsappNumber.replace(/\D/g, "");
  let msg = cfg.texts.whatsapp_greeting;

  if (!isHeader) msg += "\n\n" + buildFormSummary(cfg);

  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}

/* =========================================
   Envoi vers MAKE
   ========================================= */
async function sendToMake() {
  const cfg = await loadLangJSON(currentLang);
  const payload = {
    lang: currentLang,
    theme: getVal("themeSelect"),
    expected: getVal("expected"),
    budget: getVal("budget"),
    currency: getVal("currencySelect"),
    fullname: getVal("fullname"),
    phone: getVal("phone"),
    email: getVal("email"),
    details: getVal("details"),
    summary: buildFormSummary(cfg)
  };

  if (!MAKE_WEBHOOK_URL) return;

  fetch(MAKE_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).catch(err => console.error("Erreur Make:", err));
}

/* =========================================
   Affichage direct
   ========================================= */
function displayInline(summary) {
  const win = window.open("", "_blank", "width=600,height=700");
  if (win) {
    win.document.write(
      `<pre style="font-family:system-ui; white-space:pre-wrap; padding:16px;">${summary}</pre>`
    );
  } else {
    alert(summary);
  }
}

/* =========================================
   DOM READY
   ========================================= */
document.addEventListener("DOMContentLoaded", async () => {

  /* LANG MENU */
  const langToggle = document.querySelector("#langToggle");
  const langMenu   = document.querySelector("#langMenu");

  langToggle.addEventListener("click", e => {
    e.stopPropagation();
    langMenu.classList.toggle("show");
  });

  langMenu.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
      applyLanguage(li.dataset.lang);
      langMenu.classList.remove("show");
    });
  });

  document.addEventListener("click", () => langMenu.classList.remove("show"));

  /* BURGER */
  document.querySelector("#burgerBtn").addEventListener("click", () => {
    document.querySelector("#burgerBtn").classList.toggle("active");
    document.querySelector("#mainNav").classList.toggle("open");
  });

  /* WHATSAPP HEADER */
  document.querySelector("#whatsappBtn").addEventListener("click", async () => {
    const url = await buildWhatsappUrl(true);
    if (url) window.open(url, "_blank");
  });

  /* SEND FORM */
  document.querySelector("#sendBtn").addEventListener("click", async () => {
    const cfg = await loadLangJSON(currentLang);
    const delivery = document.querySelector('input[name="delivery"]:checked').value;

    const summary = buildFormSummary(cfg);

    /* Envoi silencieux vers MAKE */
    sendToMake();

    /* Routage */
    if (delivery === "whatsapp") {
      const url = await buildWhatsappUrl(false);
      if (url) window.open(url, "_blank");
    } else if (delivery === "email") {
      const subject = cfg.texts.subject || "Nouvelle requête e-META";
      window.location.href =
        `mailto:contact@e-meta.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary)}`;
    } else {
      displayInline(summary);
    }
  });

  /* Charger FR au démarrage */
  applyLanguage("fr");
});
