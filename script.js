/* =====================================================
   e-META v4.7 – Multilingue + WhatsApp + Make Webhook
   Version 100% corrigée – Abdoulaye FALL
   ===================================================== */

/* --- Webhook Make (corrigé) --- */
const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/dagmll5s04nubg7dp2gujws72zzedvx2";

/* =====================================================================
   🔥 ENVOI VERS MAKE (VERSION FINALE, FIABLE ET SYNCHRONE)
   ===================================================================== */
async function sendToMake(payload) {
  try {
    const res = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      console.error("Erreur Make response:", res.status);
      alert("⚠️ Erreur : Impossible d’envoyer la requête à e-META.");
      return false;
    }

    return true;
  } catch (err) {
    console.error("Erreur Make fetch:", err);
    alert("⚠️ Erreur réseau lors de l’envoi à e-META.");
    return false;
  }
}

/* =====================================================================
   🔥 Génération propre du résumé
   ===================================================================== */
function buildFormSummary(lang) {
  const cfg = LANG_CONFIG[lang] || LANG_CONFIG.fr;
  const t = cfg.texts;

  return [
    `${t.label_theme}: ${themeSelect.value || "-"}`,
    `${t.label_expected}: ${expected.value || "-"}`,
    `${t.label_budget}: ${budget.value || "-"} ${currencySelect.value}`,
    `${t.label_fullname}: ${fullname.value || "-"}`,
    `${t.label_phone}: ${phone.value || "-"}`,
    `${t.label_email}: ${email.value || "-"}`,
    `${t.label_details}:`,
    details.value || "-"
  ].join("\n");
}

/* =====================================================================
   🔥 Générateur du lien WhatsApp
   ===================================================================== */
function buildWhatsappUrl(lang, includeSummary = true) {
  const cfg = LANG_CONFIG[lang] || LANG_CONFIG.fr;
  const number = cfg.whatsappNumber;

  let text = cfg.texts.whatsapp_greeting;

  if (includeSummary) {
    text += "\n\n" + buildFormSummary(lang);
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/* =====================================================================
   🔥 Chargement des données de langue + select dynamiques
   ===================================================================== */
function populateSelect(selectEl, options, selectedValue) {
  selectEl.innerHTML = "";
  options.forEach((opt) => {
    const o = document.createElement("option");
    o.value = opt.value || opt;
    o.textContent = opt.label || opt;
    if (selectedValue === o.value) o.selected = true;
    selectEl.appendChild(o);
  });
}

function applyLanguage(lang) {
  const cfg = LANG_CONFIG[lang];
  if (!cfg) return;

  currentLang = lang;

  document.documentElement.lang = lang;
  document.body.classList.toggle("rtl", lang === "ar");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (cfg.texts[key]) el.textContent = cfg.texts[key];
  });

  expected.placeholder = cfg.placeholders.expected;
  budget.placeholder = cfg.placeholders.budget;
  fullname.placeholder = cfg.placeholders.fullname;
  phone.placeholder = cfg.placeholders.phone;
  email.placeholder = cfg.placeholders.email;
  details.placeholder = cfg.placeholders.details;

  populateSelect(
    themeSelect,
    cfg.themes.map((t) => ({ value: t, label: t }))
  );
  populateSelect(currencySelect, cfg.currencies, cfg.defaultCurrency);

  langFlag.textContent = cfg.flag;
  langCode.textContent = cfg.code;
}

/* =====================================================================
   🔥 DOM READY – Wiring complet e-META
   ===================================================================== */
let currentLang = "fr";

document.addEventListener("DOMContentLoaded", () => {
  console.log("e-META v4.7 loaded");

  applyLanguage("fr");

  langToggle.addEventListener("click", () => {
    langMenu.classList.toggle("show");
  });

  langMenu.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      applyLanguage(item.dataset.lang);
      langMenu.classList.remove("show");
    });
  });

  whatsappBtn.addEventListener("click", () => {
    window.open(buildWhatsappUrl(currentLang, true), "_blank");
  });

  sendBtn.addEventListener("click", async () => {
    const deliveryMode = document.querySelector(
      'input[name="delivery"]:checked'
    ).value;

    const payload = {
      lang: currentLang,
      theme: themeSelect.value,
      expected: expected.value,
      budget: budget.value,
      currency: currencySelect.value,
      fullname: fullname.value,
      phone: phone.value,
      email: email.value,
      details: details.value,
      deliveryMode,
      summary: buildFormSummary(currentLang),
      timestamp: new Date().toISOString()
    };

    const ok = await sendToMake(payload);
    if (!ok) return;

    if (deliveryMode === "whatsapp") {
      window.open(buildWhatsappUrl(currentLang, true), "_blank");
    } else if (deliveryMode === "email") {
      const subjects = {
        fr: "Nouvelle requête e-META",
        en: "New e-META request",
        es: "Nueva solicitud e-META",
        ar: "طلب جديد عبر e-META"
      };

      const subject = subjects[currentLang] || subjects.fr;

      window.location.href =
        `mailto:${email.value}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(payload.summary)}`;
    } else if (deliveryMode === "display") {
      const win = window.open("", "_blank", "width=650,height=800");
      win.document.write(
        `<pre style="padding:16px; white-space:pre-wrap; font-family:system-ui;">${payload.summary}</pre>`
      );
    }

    alert("Votre requête a été transmise à e-META ✔️");
  });

  resetBtn.addEventListener("click", () => {
    requestForm.reset();
    applyLanguage(currentLang);
  });
});
