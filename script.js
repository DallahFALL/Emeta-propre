/* =====================================================
   e-META v4.2 – Script compatible index.html actuel
   ===================================================== */

let currentLang = "fr";

/* =====================================================
   HELPERS
   ===================================================== */

function setText(selector, text) {
  document.querySelectorAll(selector).forEach((el) => {
    el.textContent = text || "";
  });
}

function setPlaceholder(id, value) {
  const el = document.getElementById(id);
  if (el) el.placeholder = value;
}

function populateSelect(selectEl, options, defaultValue) {
  if (!selectEl) return;
  selectEl.innerHTML = "";

  options.forEach((opt) => {
    const o = document.createElement("option");
    o.value = opt.value || opt;
    o.textContent = opt.label || opt;
    if (defaultValue && defaultValue === o.value) o.selected = true;
    selectEl.appendChild(o);
  });
}

/* =====================================================
   FORM SUMMARY
   ===================================================== */

function buildFormSummary(lang) {
  const cfg = LANG_CONFIG[lang];
  const t = cfg.texts;

  const get = (id) => document.getElementById(id)?.value || "-";

  return (
    `${t.label_theme}: ${get("themeSelect")}\n` +
    `${t.label_expected}: ${get("expected")}\n` +
    `${t.label_budget}: ${get("budget")} ${get("currencySelect")}\n` +
    `${t.label_fullname}: ${get("fullname")}\n` +
    `${t.label_phone}: ${get("phone")}\n` +
    `${t.label_email}: ${get("email")}\n` +
    `${t.label_details}:\n${get("details")}`
  );
}

/* =====================================================
   WHATSAPP URL
   ===================================================== */

function buildWhatsappUrl(lang, headerOnly = false) {
  const cfg = LANG_CONFIG[lang];
  const number = cfg.whatsappNumber.replace(/\D/g, "");

  let msg = cfg.texts.whatsapp_greeting;
  if (!headerOnly) msg += "\n\n" + buildFormSummary(lang);

  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}

/* =====================================================
   APPLY LANGUAGE – Version compatible HTML actuel
   ===================================================== */

function applyLanguage(lang) {
  const cfg = LANG_CONFIG[lang];
  if (!cfg) return;

  currentLang = lang;

  document.documentElement.lang = lang;
  document.body.classList.toggle("rtl", lang === "ar");

  const t = cfg.texts;

  /* Navigation */
  setText('[data-i18n="nav_home"]', t.nav_home);
  setText('[data-i18n="nav_about"]', t.nav_about);
  setText('[data-i18n="nav_faq"]', t.nav_faq);
  setText('[data-i18n="nav_contact"]', t.nav_contact);

  /* Hero */
  setText('[data-i18n="hero_title"]', t.hero_title);
  setText('[data-i18n="hero_sub"]', t.hero_sub);

  /* Form title */
  setText('[data-i18n="form_title"]', t.form_title);

  /* Labels du formulaire – structure EXACTE de ton HTML */
  const labels = document.querySelectorAll("#requestForm .grid label");
  if (labels[0]) labels[0].textContent = t.label_theme;
  if (labels[1]) labels[1].textContent = t.label_expected;
  if (labels[2]) labels[2].textContent = t.label_budget;
  if (labels[3]) labels[3].textContent = t.label_currency;
  if (labels[4]) labels[4].textContent = t.label_fullname;
  if (labels[5]) labels[5].textContent = t.label_phone;
  if (labels[6]) labels[6].textContent = t.label_email;
  if (labels[7]) labels[7].textContent = t.label_details;

  /* Delivery legend */
  const legend = document.querySelector(".delivery legend");
  if (legend) legend.textContent = t.legend_delivery;

  /* Delivery radios — structure réelle de ton HTML */
  const radios = document.querySelectorAll(".delivery label");
  if (radios[0]) radios[0].lastChild.textContent = " " + t.delivery_whatsapp;
  if (radios[1]) radios[1].lastChild.textContent = " " + t.delivery_email;
  if (radios[2]) radios[2].lastChild.textContent = " " + t.delivery_display;

  /* Placeholders */
  setPlaceholder("expected", cfg.placeholders.expected);
  setPlaceholder("budget", cfg.placeholders.budget);
  setPlaceholder("fullname", cfg.placeholders.fullname);
  setPlaceholder("phone", cfg.placeholders.phone);
  setPlaceholder("email", cfg.placeholders.email);
  setPlaceholder("details", cfg.placeholders.details);

  /* Themes & currencies */
  populateSelect(
    document.getElementById("themeSelect"),
    cfg.themes.map((th) => ({ value: th, label: th })),
    cfg.themes[0]
  );

  populateSelect(
    document.getElementById("currencySelect"),
    cfg.currencies,
    cfg.defaultCurrency
  );

  /* About */
  setText("#about h3", t.about_title);
  setText("#about p", t.about_body);

  /* FAQ */
  setText("#faq h3", t.faq_title);
  setText("#faq summary", t.faq_q1);
  setText("#faq details p", t.faq_a1);

  /* Contact */
  const contactTitle = document.querySelector("#contact h3");
  const contactP = document.querySelector("#contact p");
  if (contactTitle) contactTitle.textContent = t.contact_title;
  if (contactP) {
    const a = contactP.querySelector("a");
    contactP.textContent = `${t.contact_emailLabel} `;
    if (a) contactP.appendChild(a);
  }

  /* Footer */
  setText("#footerText", t.footer);

  /* Lang button */
  const flag = document.getElementById("langFlag");
  const code = document.getElementById("langCode");
  if (flag) flag.textContent = cfg.flag;
  if (code) code.textContent = cfg.code;
}

/* =====================================================
   SEND EMAIL / DISPLAY
   ===================================================== */

function sendByEmail(summary) {
  const subjectMap = {
    fr: "Nouvelle requête e-META",
    en: "New e-META request",
    es: "Nueva solicitud e-META",
    ar: "طلب جديد عبر e-META"
  };
  const subject = subjectMap[currentLang];

  window.location.href =
    `mailto:contact@e-meta.app?subject=` +
    encodeURIComponent(subject) +
    `&body=` +
    encodeURIComponent(summary);
}

function displayInline(summary) {
  const win = window.open("", "_blank", "width=600,height=700");
  if (!win) return alert(summary);

  win.document.write(
    `<pre style="white-space:pre-wrap;font-family:system-ui;padding:16px;">${summary}</pre>`
  );
}

/* =====================================================
   EVENTS
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* Burger */
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

  /* Language selector */
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

  /* WhatsApp header */
  const whatsappBtn = document.getElementById("whatsappBtn");
  if (whatsappBtn)
    whatsappBtn.addEventListener("click", () =>
      window.open(buildWhatsappUrl(currentLang, true), "_blank")
    );

  /* Send form */
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

  /* Load default */
  applyLanguage("fr");
});
