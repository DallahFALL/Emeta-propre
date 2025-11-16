/* =====================================================
   e-META v4.6 – Langues + Responsive + WhatsApp + Make
   Version propre, unifiée, sans duplications
   ===================================================== */

let currentLang = "fr";

/* =====================================================
   SMALL HELPER FUNCTIONS
   ===================================================== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function populateSelect(selectEl, options, selectedValue) {
  if (!selectEl) return;
  selectEl.innerHTML = "";
  options.forEach((opt) => {
    const o = document.createElement("option");
    o.value = opt.value || opt;
    o.textContent = opt.label || opt;
    if (selectedValue && selectedValue === o.value) {
      o.selected = true;
    }
    selectEl.appendChild(o);
  });
}

function setPlaceholder(id, text) {
  const el = $(id);
  if (el) el.placeholder = text || "";
}

/* =====================================================
   FORM SUMMARY (WHATSAPP / EMAIL / DISPLAY)
   ===================================================== */
function buildFormSummary(lang) {
  const cfg = LANG_CONFIG[lang] || LANG_CONFIG.fr;
  const t = cfg.texts;

  const val = (id) => $(id)?.value?.trim() || "-";

  return [
    `${t.label_theme}: ${val("#themeSelect")}`,
    `${t.label_expected}: ${val("#expected")}`,
    `${t.label_budget}: ${val("#budget")} ${val("#currencySelect")}`,
    `${t.label_fullname}: ${val("#fullname")}`,
    `${t.label_phone}: ${val("#phone")}`,
    `${t.label_email}: ${val("#email")}`,
    `${t.label_details}:`,
    val("#details")
  ].join("\n");
}

function buildWhatsappUrl(lang, headerOnly = false) {
  const cfg = LANG_CONFIG[lang] || LANG_CONFIG.fr;
  const number = cfg.whatsappNumber.replace(/\D/g, "");
  if (!number) return null;

  let msg = cfg.texts.whatsapp_greeting;
  if (!headerOnly) msg += "\n\n" + buildFormSummary(lang);

  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}

/* =====================================================
   APPLY LANGUAGE (MAIN FUNCTION)
   ===================================================== */
function applyLanguage(lang) {
  const cfg = LANG_CONFIG[lang];
  if (!cfg) return;

  currentLang = lang;

  document.documentElement.lang = lang;
  document.body.classList.toggle("rtl", lang === "ar");

  const t = cfg.texts;

  /* NAV */
  $$('[data-i18n="nav_home"]').forEach((el) => (el.textContent = t.nav_home));
  $$('[data-i18n="nav_about"]').forEach((el) => (el.textContent = t.nav_about));
  $$('[data-i18n="nav_faq"]').forEach((el) => (el.textContent = t.nav_faq));
  $$('[data-i18n="nav_contact"]').forEach((el) => (el.textContent = t.nav_contact));

  /* HERO */
  $$('[data-i18n="hero_title"]').forEach((el) => (el.textContent = t.hero_title));
  $$('[data-i18n="hero_sub"]').forEach((el) => (el.textContent = t.hero_sub));

  /* FORM TITLE */
  $$('[data-i18n="form_title"]').forEach((el) => (el.textContent = t.form_title));

  /* LABELS */
  const gridLabels = $$("#requestForm .grid label");
  if (gridLabels[0]) gridLabels[0].textContent = t.label_theme;
  if (gridLabels[1]) gridLabels[1].textContent = t.label_expected;
  if (gridLabels[2]) gridLabels[2].textContent = t.label_budget;
  if (gridLabels[3]) gridLabels[3].textContent = t.label_currency;
  if (gridLabels[4]) gridLabels[4].textContent = t.label_fullname;
  if (gridLabels[5]) gridLabels[5].textContent = t.label_phone;
  if (gridLabels[6]) gridLabels[6].textContent = t.label_email;
  if (gridLabels[7]) gridLabels[7].textContent = t.label_details;

  /* DELIVERY BLOCK */
  const legend = $(".delivery legend");
  if (legend) legend.textContent = t.legend_delivery;

  const delLabels = $$(".delivery label");
  if (delLabels[0]) delLabels[0].querySelector("span").textContent = t.delivery_whatsapp;
  if (delLabels[1]) delLabels[1].querySelector("span").textContent = t.delivery_email;
  if (delLabels[2]) delLabels[2].querySelector("span").textContent = t.delivery_display;

  $("#sendBtn").textContent = t.btn_send;

  /* PLACEHOLDERS */
  setPlaceholder("#expected", cfg.placeholders.expected);
  setPlaceholder("#budget", cfg.placeholders.budget);
  setPlaceholder("#fullname", cfg.placeholders.fullname);
  setPlaceholder("#phone", cfg.placeholders.phone);
  setPlaceholder("#email", cfg.placeholders.email);
  setPlaceholder("#details", cfg.placeholders.details);

  /* THEMES */
  populateSelect(
    $("#themeSelect"),
    cfg.themes.map((x) => ({ value: x, label: x })),
    cfg.themes[0]
  );

  /* CURRENCIES */
  populateSelect($("#currencySelect"), cfg.currencies, cfg.defaultCurrency);

  /* ABOUT */
  $("#about h3").textContent = t.about_title;
  $("#about p").textContent = t.about_body;

  /* FAQ */
  $("#faq h3").textContent = t.faq_title;
  $("#faq summary").textContent = t.faq_q1;
  $("#faq details p").textContent = t.faq_a1;

  /* CONTACT */
  $("#contact h3").textContent = t.contact_title;
  $("#footerText").textContent = t.footer;

  /* LANG BUTTON */
  $("#langFlag").textContent = cfg.flag;
  $("#langCode").textContent = cfg.code;
}

/* =====================================================
   SEND METHODS
   ===================================================== */
function sendByEmail(lang) {
  const summary = buildFormSummary(lang);
  const subjects = {
    fr: "Nouvelle requête e-META",
    en: "New e-META Request",
    es: "Nueva solicitud e-META",
    ar: "طلب جديد عبر e-META"
  };

  const subject = subjects[lang] || subjects.fr;

  window.location.href =
    `mailto:contact@e-meta.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary)}`;
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

/* =====================================================
   DOM READY — UI WIRING
   ===================================================== */
document.addEventListener("DOMContentLoaded", () => {

  /* --- BURGER MENU --- */
  const burgerBtn = $("#burgerBtn");
  const mainNav = $("#mainNav");

  if (burgerBtn && mainNav) {
    burgerBtn.addEventListener("click", () => {
      burgerBtn.classList.toggle("active");
      mainNav.classList.toggle("open");
    });

    mainNav.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => {
        burgerBtn.classList.remove("active");
        mainNav.classList.remove("open");
      })
    );

    window.addEventListener("resize", () => {
      if (window.innerWidth > 720) {
        burgerBtn.classList.remove("active");
        mainNav.classList.remove("open");
      }
    });
  }

  /* --- LANGUAGE MENU --- */
  const langToggle = $("#langToggle");
  const langMenu = $("#langMenu");

  if (langToggle && langMenu) {
    langToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      langMenu.classList.toggle("show");
    });

    $$("#langMenu li").forEach((item) => {
      item.addEventListener("click", () => {
        applyLanguage(item.dataset.lang);
        langMenu.classList.remove("show");
      });
    });

    document.addEventListener("click", (e) => {
      if (!langMenu.contains(e.target) && e.target !== langToggle) {
        langMenu.classList.remove("show");
      }
    });
  }

  /* --- WHATSAPP BUTTON --- */
  $("#whatsappBtn").addEventListener("click", () => {
    const url = buildWhatsappUrl(currentLang, true);
    if (url) window.open(url, "_blank");
  });

  /* --- SEND BUTTON --- */
  $("#sendBtn").addEventListener("click", () => {
    const mode = $('input[name="delivery"]:checked')?.value || "whatsapp";
    const summary = buildFormSummary(currentLang);

    if (mode === "whatsapp") {
      window.open(buildWhatsappUrl(currentLang), "_blank");
    } else if (mode === "email") {
      sendByEmail(currentLang);
    } else {
      displayInline(summary);
    }
  });

  /* DEFAULT LANGUAGE */
  applyLanguage("fr");
});
