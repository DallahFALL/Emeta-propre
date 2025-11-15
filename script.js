/* =====================================================
   e-META v4.2 – Multilingue, WhatsApp, Formulaire, UI
   Version optimisée, sécurisée, et 100% compatible v4.1
   ===================================================== */

let currentLang = "fr";

/* =====================================================
   APPLY LANGUAGE (CORE FUNCTION)
   ===================================================== */
function applyLanguage(lang) {
  const cfg = LANG_CONFIG[lang];
  if (!cfg) return;

  currentLang = lang;

  /* ---------- HTML LANG + RTL ---------- */
  document.documentElement.lang = lang;
  document.body.classList.toggle("rtl", lang === "ar");

  const t = cfg.texts;

  /* ---------- NAVIGATION ---------- */
  setText('[data-i18n="nav_home"]', t.nav_home);
  setText('[data-i18n="nav_about"]', t.nav_about);
  setText('[data-i18n="nav_faq"]', t.nav_faq);
  setText('[data-i18n="nav_contact"]', t.nav_contact);

  /* ---------- HERO ---------- */
  setText('[data-i18n="hero_title"]', t.hero_title);
  setText('[data-i18n="hero_sub"]', t.hero_sub);

  /* ---------- FORM TITLE ---------- */
  setText('[data-i18n="form_title"]', t.form_title);

  /* ---------- FORM LABELS ---------- */
  const labels = document.querySelectorAll("#requestForm .grid label");
  if (labels[0]) labels[0].textContent = t.label_theme;
  if (labels[1]) labels[1].textContent = t.label_expected;
  if (labels[2]) labels[2].textContent = t.label_budget;
  if (labels[3]) labels[3].textContent = t.label_currency;
  if (labels[4]) labels[4].textContent = t.label_fullname;
  if (labels[5]) labels[5].textContent = t.label_phone;
  if (labels[6]) labels[6].textContent = t.label_email;
  if (labels[7]) labels[7].textContent = t.label_details;

  /* ---------- DELIVERY LABELS ---------- */
  const legend = document.querySelector(".delivery legend");
  if (legend) legend.textContent = t.legend_delivery;

  rewriteRadioLabel(".delivery label:nth-child(1)", t.delivery_whatsapp);
  rewriteRadioLabel(".delivery label:nth-child(2)", t.delivery_email);
  rewriteRadioLabel(".delivery label:nth-child(3)", t.delivery_display);

  /* ---------- PLACEHOLDERS ---------- */
  setPlaceholder("#expected", cfg.placeholders.expected);
  setPlaceholder("#budget", cfg.placeholders.budget);
  setPlaceholder("#fullname", cfg.placeholders.fullname);
  setPlaceholder("#phone", cfg.placeholders.phone);
  setPlaceholder("#email", cfg.placeholders.email);
  setPlaceholder("#details", cfg.placeholders.details);

  /* ---------- THEMES ---------- */
  populateSelect(
    document.getElementById("themeSelect"),
    cfg.themes.map((t) => ({ value: t, label: t })),
    cfg.themes[0]
  );

  /* ---------- CURRENCIES ---------- */
  populateSelect(
    document.getElementById("currencySelect"),
    cfg.currencies,
    cfg.defaultCurrency
  );

  /* ---------- SECTIONS ---------- */
  setText("#about h3", t.about_title);
  setText("#about p", t.about_body);

  setText("#faq h3", t.faq_title);
  setText("#faq summary", t.faq_q1);
  setText("#faq details p", t.faq_a1);

  /* ---------- CONTACT ---------- */
  const contactTitle = document.querySelector("#contact h3");
  const contactP = document.querySelector("#contact p");
  if (contactTitle) contactTitle.textContent = t.contact_title;

  if (contactP) {
    const emailLink = contactP.querySelector("a");
    contactP.textContent = `${t.contact_emailLabel} `;
    if (emailLink) contactP.appendChild(emailLink);
  }

  /* ---------- FOOTER ---------- */
  setText("#footerText", t.footer);

  /* ---------- LANGUAGE BUTTON ---------- */
  const flag = document.getElementById("langFlag");
  const code = document.getElementById("langCode");
  if (flag) flag.textContent = cfg.flag;
  if (code) code.textContent = cfg.code;
}

/* =====================================================
   HELPERS (SOLIDES & OPTIMISÉS)
   ===================================================== */

function setText(selector, text) {
  document.querySelectorAll(selector).forEach((el) => {
    if (el) el.textContent = text || "";
  });
}

function setPlaceholder(selector, text) {
  const el = document.querySelector(selector);
  if (el) el.placeholder = text || "";
}

function rewriteRadioLabel(selector, text) {
  const label = document.querySelector(selector);
  if (!label) return;

  const input = label.querySelector("input");
  label.textContent = "";
  if (input) label.appendChild(input);
  label.append(" " + text);
}

function populateSelect(selectEl, options, selectedValue) {
  if (!selectEl) return;

  selectEl.innerHTML = "";
  options.forEach((opt) => {
    const o = document.createElement("option");
    o.value = opt.value;
    o.textContent = opt.label;
    if (selectedValue && selectedValue === o.value) o.selected = true;
    selectEl.appendChild(o);
  });
}

function buildFormSummary(lang) {
  const cfg = LANG_CONFIG[lang];
  const t = cfg.texts;

  const getVal = (id) =>
    document.getElementById(id)?.value?.trim() || "-";

  return (
    `${t.label_theme}: ${getVal("themeSelect")}\n` +
    `${t.label_expected}: ${getVal("expected")}\n` +
    `${t.label_budget}: ${getVal("budget")} ${getVal("currencySelect")}\n` +
    `${t.label_fullname}: ${getVal("fullname")}\n` +
    `${t.label_phone}: ${getVal("phone")}\n` +
    `${t.label_email}: ${getVal("email")}\n` +
    `${t.label_details}:\n${getVal("details")}`
  );
}

function buildWhatsappUrl(lang, headerOnly = false) {
  const cfg = LANG_CONFIG[lang];
  const number = cfg.whatsappNumber.replace(/\D/g, "");

  let msg = cfg.texts.whatsapp_greeting;
  if (!headerOnly) {
    msg += "\n\n" + buildFormSummary(lang);
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}

/* =====================================================
   UI EVENTS
   ===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  /* --- BURGER --- */
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => {
        burger.classList.remove("active");
        nav.classList.remove("open");
      })
    );
  }

  /* --- LANG MENU --- */
  const langToggle = document.getElementById("langToggle");
  const langMenu = document.getElementById("langMenu");

  if (langToggle && langMenu) {
    langToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      langMenu.classList.toggle("show");
    });

    langMenu.querySelectorAll("li").forEach((item) =>
      item.addEventListener("click", () => {
        applyLanguage(item.dataset.lang);
        langMenu.classList.remove("show");
      })
    );

    document.addEventListener("click", () =>
      langMenu.classList.remove("show")
    );
  }

  /* --- WHATSAPP --- */
  const whatsappBtn = document.getElementById("whatsappBtn");
  if (whatsappBtn)
    whatsappBtn.addEventListener("click", () => {
      const url = buildWhatsappUrl(currentLang, true);
      window.open(url, "_blank");
    });

  /* --- SEND FORM --- */
  const sendBtn = document.getElementById("sendBtn");
  if (sendBtn)
    sendBtn.addEventListener("click", () => {
      const delivery = document.querySelector(
        'input[name="delivery"]:checked'
      )?.value;

      const summary = buildFormSummary(currentLang);

      if (delivery === "whatsapp") {
        window.open(buildWhatsappUrl(currentLang, false), "_blank");
      } else if (delivery === "email") {
        sendByEmail(summary);
      } else {
        displayInline(summary);
      }
    });

  /* --- LOAD DEFAULT LANG --- */
  applyLanguage("fr");
});

/* =====================================================
   EMAIL + AFFICHAGE DIRECT
   ===================================================== */
function sendByEmail(summary) {
  const subjectMap = {
    fr: "Nouvelle requête e-META",
    en: "New e-META Request",
    es: "Nueva solicitud e-META",
    ar: "طلب جديد عبر e-META"
  };

  const subject = subjectMap[currentLang] || subjectMap.fr;

  window.location.href =
    `mailto:contact@e-meta.app?subject=` +
    encodeURIComponent(subject) +
    `&body=` +
    encodeURIComponent(summary);
}

function displayInline(summary) {
  const win = window.open("", "_blank", "width=600,height=700");
  if (win) {
    win.document.write(
      `<pre style="font-family:system-ui;white-space:pre-wrap;padding:16px;">${summary}</pre>`
    );
  } else {
    alert(summary);
  }
}
