/* =====================================================
   e-META v4.2 — i18n JSON (sécurisé)
   ===================================================== */

let currentLang = "fr";
let i18nData = {};

/* ---------- 1. Chargement JSON ---------- */
async function loadLangJSON(lang) {
  try {
    const res = await fetch(`./lang/${lang}.json?v=${Date.now()}`);
    if (!res.ok) throw new Error("Fichier de langue introuvable");
    i18nData = await res.json();
    currentLang = lang;
    applyLanguage();
  } catch (e) {
    console.error("Erreur i18n:", e);
    if (lang !== "fr") {
      // fallback FR
      loadLangJSON("fr");
    }
  }
}

/* ---------- 2. Application de la langue ---------- */
function applyLanguage() {
  if (!i18nData || !i18nData.nav) return;

  // <html lang=".."> + RTL
  document.documentElement.lang = currentLang;
  document.body.classList.toggle("rtl", currentLang === "ar");

  /* NAV */
  setText("[data-i18n='nav_home']", i18nData.nav.home);
  setText("[data-i18n='nav_about']", i18nData.nav.about);
  setText("[data-i18n='nav_faq']", i18nData.nav.faq);
  setText("[data-i18n='nav_contact']", i18nData.nav.contact);

  /* HERO */
  setText("[data-i18n='hero_title']", i18nData.hero.title);
  setText("[data-i18n='hero_sub']", i18nData.hero.subtitle);

  /* TITRE FORMULAIRE */
  setText("[data-i18n='form_title']", i18nData.form.title);

  /* LABELS DU FORMULAIRE (ordre des <label> dans .grid) */
  setFormLabel(0, i18nData.form.theme);
  setFormLabel(1, i18nData.form.expected);
  setFormLabel(2, i18nData.form.budget);
  setFormLabel(3, i18nData.form.currency);
  setFormLabel(4, i18nData.form.fullname);
  setFormLabel(5, i18nData.form.phone);
  setFormLabel(6, i18nData.form.email);
  setFormLabel(7, i18nData.form.details);

  /* PLACEHOLDERS */
  setPlaceholder("#expected", i18nData.placeholders.expected);
  setPlaceholder("#budget", i18nData.placeholders.budget);
  setPlaceholder("#fullname", i18nData.placeholders.fullname);
  setPlaceholder("#phone", i18nData.placeholders.phone);
  setPlaceholder("#email", i18nData.placeholders.email);
  setPlaceholder("#details", i18nData.placeholders.details);

  /* THEMES */
  if (Array.isArray(i18nData.themes)) {
    const themeSelect = document.getElementById("themeSelect");
    if (themeSelect) {
      themeSelect.innerHTML = "";
      i18nData.themes.forEach((t) => {
        const opt = document.createElement("option");
        opt.value = t;
        opt.textContent = t;
        themeSelect.appendChild(opt);
      });
    }
  }

  /* DEVISES */
  if (Array.isArray(i18nData.currencies)) {
    const currencySelect = document.getElementById("currencySelect");
    if (currencySelect) {
      currencySelect.innerHTML = "";
      i18nData.currencies.forEach((c) => {
        const opt = document.createElement("option");
        opt.value = c.value;
        opt.textContent = c.label;
        currencySelect.appendChild(opt);
      });
      const def = i18nData.defaultCurrency || i18nData.currencies[0]?.value;
      if (def) currencySelect.value = def;
    }
  }

  /* MODE DE RESTITUTION */
  const legend = document.querySelector(".delivery legend");
  if (legend) legend.textContent = i18nData.form.delivery_mode;

  const deliveryLabels = document.querySelectorAll(".delivery label");
  if (deliveryLabels[0]) rewriteRadioLabel(deliveryLabels[0], i18nData.form.delivery_whatsapp);
  if (deliveryLabels[1]) rewriteRadioLabel(deliveryLabels[1], i18nData.form.delivery_email);
  if (deliveryLabels[2]) rewriteRadioLabel(deliveryLabels[2], i18nData.form.delivery_display);

  /* BOUTON ENVOYER */
  setText("#sendBtn", i18nData.form.send_btn);

  /* ABOUT */
  const aboutTitle = document.querySelector("#about h3");
  const aboutBody = document.querySelector("#about p");
  if (aboutTitle) aboutTitle.textContent = i18nData.about.title;
  if (aboutBody) aboutBody.textContent = i18nData.about.body;

  /* FAQ */
  const faqTitle = document.querySelector("#faq h3");
  const faqSummary = document.querySelector("#faq summary");
  const faqBody = document.querySelector("#faq details p");
  if (faqTitle) faqTitle.textContent = i18nData.faq.title;
  if (faqSummary) faqSummary.textContent = i18nData.faq.q1;
  if (faqBody) faqBody.textContent = i18nData.faq.a1;

  /* CONTACT */
  const contactTitle = document.querySelector("#contact h3");
  const contactP = document.querySelector("#contact p");
  if (contactTitle) contactTitle.textContent = i18nData.contact.title;
  if (contactP) {
    const link = contactP.querySelector("a");
    contactP.textContent = i18nData.contact.emailLabel + " ";
    if (link) contactP.appendChild(link);
  }

  /* FOOTER */
  setText("#footerText", i18nData.footer);

  /* BOUTON LANGUE (drapeau + code) */
  const flag = document.getElementById("langFlag");
  const code = document.getElementById("langCode");
  if (flag && i18nData.flag) flag.textContent = i18nData.flag;
  if (code && i18nData.code) code.textContent = i18nData.code;
}

/* ---------- Helpers Texte & Labels ---------- */
function setText(selector, text) {
  if (!text) return;
  document.querySelectorAll(selector).forEach((el) => (el.textContent = text));
}

function setFormLabel(index, text) {
  if (!text) return;
  const labels = document.querySelectorAll(".grid label");
  if (labels[index]) labels[index].textContent = text;
}

function setPlaceholder(selector, text) {
  const el = document.querySelector(selector);
  if (el && typeof text === "string") el.placeholder = text;
}

function rewriteRadioLabel(labelEl, text) {
  if (!labelEl || !text) return;
  const input = labelEl.querySelector("input");
  labelEl.textContent = "";
  if (input) labelEl.appendChild(input);
  labelEl.append(" " + text);
}

/* ---------- 3. WhatsApp ---------- */
function buildSummary() {
  if (!i18nData.form) return "";

  const f = i18nData.form;
  const getVal = (id) => (document.getElementById(id)?.value || "").trim();

  const theme = getVal("themeSelect");
  const expected = getVal("expected");
  const budget = getVal("budget");
  const currency = getVal("currencySelect");
  const fullname = getVal("fullname");
  const phone = getVal("phone");
  const email = getVal("email");
  const details = getVal("details");

  return (
    `📌 ${f.theme}: ${theme}\n` +
    `📌 ${f.expected}: ${expected}\n` +
    `📌 ${f.budget}: ${budget} ${currency}\n` +
    `📌 ${f.fullname}: ${fullname}\n` +
    `📌 ${f.phone}: ${phone}\n` +
    `📌 ${f.email}: ${email}\n` +
    `📌 ${f.details}:\n${details}`
  );
}

function sendToWhatsApp(headerMode = false) {
  const numRaw = i18nData.whatsappNumber || "";
  const number = numRaw.replace(/\D/g, "");
  if (!number) {
    console.warn("Numéro WhatsApp non défini dans le JSON");
    return;
  }

  let message = i18nData.whatsapp_greeting || "";
  if (!headerMode) {
    const summary = buildSummary();
    if (summary) message += "\n\n" + summary;
  }

  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

/* ---------- 4. Envoi formulaire ---------- */
function sendForm() {
  const deliveryInput = document.querySelector("input[name='delivery']:checked");
  const mode = deliveryInput ? deliveryInput.value : "whatsapp";

  if (mode === "whatsapp") {
    sendToWhatsApp(false);
    return;
  }

  const summary = buildSummary();

  if (mode === "email") {
    const subject = encodeURIComponent(i18nData.form?.title || "e-META request");
    const body = encodeURIComponent(summary);
    window.location.href = `mailto:contact@e-meta.app?subject=${subject}&body=${body}`;
    return;
  }

  // affichage direct
  const win = window.open("", "_blank", "width=600,height=700");
  if (win && summary) {
    win.document.write(
      `<pre style="padding:20px;font-family:system-ui, sans-serif;white-space:pre-wrap;">${summary}</pre>`
    );
  }
}

/* ---------- 5. Initialisation DOM ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // Burger (optionnel)
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");
  if (burger && nav) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      nav.classList.toggle("open");
    });
  }

  // Langues (bouton + menu)
  const langToggle = document.getElementById("langToggle");
  const langMenu = document.getElementById("langMenu");
  if (langToggle && langMenu) {
    langToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      langMenu.classList.toggle("show");
    });

    langMenu.querySelectorAll("li[data-lang]").forEach((li) => {
      li.addEventListener("click", () => {
        const lang = li.getAttribute("data-lang");
        if (lang) loadLangJSON(lang);
        langMenu.classList.remove("show");
      });
    });

    document.addEventListener("click", () => langMenu.classList.remove("show"));
  }

  // Bouton header WhatsApp
  const waBtn = document.getElementById("whatsappBtn");
  if (waBtn) waBtn.addEventListener("click", () => sendToWhatsApp(true));

  // Bouton "Envoyer"
  const sendBtn = document.getElementById("sendBtn");
  if (sendBtn) sendBtn.addEventListener("click", sendForm);

  // Charger FR par défaut
  loadLangJSON("fr");
});
