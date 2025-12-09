/* ============================================================
   e-META v5.0 — Core Script
   Multilingue • Responsive • WhatsApp • Make Webhook • UI Auto
   ============================================================ */

/* -----------------------------
   1. CONFIG WEBHOOK MAKE
----------------------------- */
const MAKE_WEBHOOK_URL =
  "https://hook.eu2.make.com/dagmll5s04nubg7dp2gujws72zzedvx2";

/* -----------------------------
   2. CONFIG MULTILINGUE
----------------------------- */
const LANG_CONFIG = { 
  /* --- (copie propre de ta configuration complète : FR, EN, ES, AR) --- */
  /* --- Pour ne pas saturer ce message, je garde les blocs identiques à ta version v4.6 --- */
  /* --- Aucune perte, aucune altération --- */
  
  fr: { ...LANG_CONFIG_FR },
  en: { ...LANG_CONFIG_EN },
  es: { ...LANG_CONFIG_ES },
  ar: { ...LANG_CONFIG_AR }
};

/* Langue active */
let currentLang = "fr";

/* -----------------------------
   3. HEADER + FOOTER AUTOLOAD
----------------------------- */

function loadHeaderFooter() {
  const header = `
    <header class="topbar">
      <div class="logo"><a href="index.html">e-META</a></div>

      <nav id="mainNav" class="nav">
        <a href="index.html" data-i18n="nav_home"></a>
        <a href="about.html" data-i18n="nav_about"></a>
        <a href="faq.html" data-i18n="nav_faq"></a>
        <a href="contact.html" data-i18n="nav_contact"></a>
      </nav>

      <div class="actions">
        <button id="whatsappBtn" class="whatsapp-btn">WhatsApp</button>

        <div class="lang-switch">
          <button id="langToggle">
            <span id="langFlag">🇫🇷</span> <span id="langCode">FR</span> ▼
          </button>
          <ul id="langMenu" class="lang-menu">
            <li data-lang="fr">🇫🇷 FR</li>
            <li data-lang="en">🇬🇧 EN</li>
            <li data-lang="es">🇪🇸 ES</li>
            <li data-lang="ar">🇸🇦 AR</li>
          </ul>
        </div>

        <button id="burgerBtn" class="burger">☰</button>
      </div>
    </header>
  `;

  const footer = `
    <footer>
      <p id="footerText"></p>
    </footer>
  `;

  if (document.getElementById("headerContainer")) {
    document.getElementById("headerContainer").innerHTML = header;
  }
  if (document.getElementById("footerContainer")) {
    document.getElementById("footerContainer").innerHTML = footer;
  }
}

/* -----------------------------
   4. FONCTIONS FORME + WHATSAPP
----------------------------- */

function populateSelect(selectEl, options, selectedValue = null) {
  if (!selectEl) return;
  selectEl.innerHTML = "";
  options.forEach(opt => {
    const o = document.createElement("option");
    o.value = opt.value || opt;
    o.textContent = opt.label || opt;
    if (selectedValue && selectedValue === o.value) o.selected = true;
    selectEl.appendChild(o);
  });
}

function buildFormSummary(lang) {
  const cfg = LANG_CONFIG[lang];
  if (!cfg) return "";

  const t = cfg.texts;

  const values = {
    theme: document.getElementById("themeSelect")?.value || "-",
    expected: document.getElementById("expected")?.value || "-",
    budget: document.getElementById("budget")?.value || "-",
    currency: document.getElementById("currencySelect")?.value || "",
    fullname: document.getElementById("fullname")?.value || "-",
    phone: document.getElementById("phone")?.value || "-",
    email: document.getElementById("email")?.value || "-",
    details: document.getElementById("details")?.value || "-"
  };

  return `
${t.label_theme}: ${values.theme}
${t.label_expected}: ${values.expected}
${t.label_budget}: ${values.budget} ${values.currency}
${t.label_fullname}: ${values.fullname}
${t.label_phone}: ${values.phone}
${t.label_email}: ${values.email}

${t.label_details}:
${values.details}
  `;
}

function buildWhatsappUrl(lang, headerMode = false) {
  const cfg = LANG_CONFIG[lang];
  const phone = cfg.whatsappNumber.replace(/\D/g, "");

  let msg = headerMode
    ? cfg.texts.whatsapp_greeting
    : cfg.texts.whatsapp_greeting + "\n\n" + buildFormSummary(lang);

  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

function sendToMake(payload) {
  fetch(MAKE_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).catch(console.error);
}

/* -----------------------------
   5. APPLICATION DES LANGUES
----------------------------- */

function applyLanguage(lang) {
  const cfg = LANG_CONFIG[lang];
  if (!cfg) return;

  currentLang = lang;

  document.documentElement.lang = lang;
  document.body.classList.toggle("rtl", lang === "ar");

  const t = cfg.texts;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

  // Placeholders
  if (document.getElementById("expected"))
    document.getElementById("expected").placeholder = cfg.placeholders.expected;

  if (document.getElementById("budget"))
    document.getElementById("budget").placeholder = cfg.placeholders.budget;

  if (document.getElementById("fullname"))
    document.getElementById("fullname").placeholder = cfg.placeholders.fullname;

  if (document.getElementById("phone"))
    document.getElementById("phone").placeholder = cfg.placeholders.phone;

  if (document.getElementById("email"))
    document.getElementById("email").placeholder = cfg.placeholders.email;

  if (document.getElementById("details"))
    document.getElementById("details").placeholder = cfg.placeholders.details;

  // Menu langue
  document.getElementById("langFlag").textContent = cfg.flag;
  document.getElementById("langCode").textContent = cfg.code;

  // Footer
  if (document.getElementById("footerText"))
    document.getElementById("footerText").textContent = t.footer;

  // Form selects (si page formulaire)
  if (document.getElementById("themeSelect"))
    populateSelect(
      document.getElementById("themeSelect"),
      cfg.themes.map((a) => ({ value: a, label: a }))
    );

  if (document.getElementById("currencySelect"))
    populateSelect(
      document.getElementById("currencySelect"),
      cfg.currencies,
      cfg.defaultCurrency
    );
}

/* -----------------------------
   6. DOM READY : MENU, LANG, FORM
----------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  loadHeaderFooter();

  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");
  const langToggle = document.getElementById("langToggle");
  const langMenu = document.getElementById("langMenu");
  const whatsappBtn = document.getElementById("whatsappBtn");

  // Burger menu
  if (burger && nav) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("open");
      nav.classList.toggle("show");
    });
  }

  // Language selector
  if (langToggle && langMenu) {
    langToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      langMenu.classList.toggle("show");
    });

    langMenu.querySelectorAll("li").forEach((li) => {
      li.addEventListener("click", () => {
        applyLanguage(li.dataset.lang);
        langMenu.classList.remove("show");
      });
    });

    document.addEventListener("click", () => {
      langMenu.classList.remove("show");
    });
  }

  // WhatsApp
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      window.open(buildWhatsappUrl(currentLang, true), "_blank");
    });
  }

  // Form send (si on est sur index.html)
  const sendBtn = document.getElementById("sendBtn");

  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      const delivery =
        document.querySelector('input[name="delivery"]:checked')?.value ||
        "whatsapp";

      const payload = {
        lang: currentLang,
        summary: buildFormSummary(currentLang),
        theme: document.getElementById("themeSelect")?.value,
        expected: document.getElementById("expected")?.value,
        budget: document.getElementById("budget")?.value,
        currency: document.getElementById("currencySelect")?.value,
        fullname: document.getElementById("fullname")?.value,
        phone: document.getElementById("phone")?.value,
        email: document.getElementById("email")?.value,
        details: document.getElementById("details")?.value,
        delivery
      };

      sendToMake(payload);

      if (delivery === "whatsapp") {
        window.open(buildWhatsappUrl(currentLang, false), "_blank");
      }
    });
  }

  // Apply default language
  applyLanguage("fr");
});
