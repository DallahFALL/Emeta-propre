/* =====================================================
   e-META v4.7-R — Responsive Fix, Multilingue, WhatsApp, Make Webhook
   ===================================================== */

/* --- Webhook Make --- */
const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/dagmll5s04nubg7dp2gujws72zzedvx2";

/* --- Config langues --- */
const LANG_CONFIG = { /* ... TON BLOC LANG_CONFIG EST IDENTIQUE ... */ };

/* langue active */
let currentLang = "fr";

/* =====================================================
   HELPERS
   ===================================================== */

function populateSelect(selectEl, options, selectedValue) {
  if (!selectEl) return;
  selectEl.innerHTML = "";
  options.forEach((opt) => {
    const o = document.createElement("option");
    o.value = opt.value || opt;
    o.textContent = opt.label || opt;
    if (selectedValue && selectedValue === o.value) o.selected = true;
    selectEl.appendChild(o);
  });
}

function buildFormSummary(lang) {
  const cfg = LANG_CONFIG[lang] || LANG_CONFIG.fr;

  const get = (id) => document.getElementById(id)?.value || "";

  const t = cfg.texts;
  return [
    `${t.label_theme}: ${get("themeSelect")}`,
    `${t.label_expected}: ${get("expected")}`,
    `${t.label_budget}: ${get("budget")} ${get("currencySelect")}`,
    `${t.label_fullname}: ${get("fullname")}`,
    `${t.label_phone}: ${get("phone")}`,
    `${t.label_email}: ${get("email")}`,
    `${t.label_details}:`,
    get("details") || "-"
  ].join("\n");
}

function buildWhatsappUrl(lang, isHeader) {
  const cfg = LANG_CONFIG[lang];
  const number = cfg.whatsappNumber.replace(/\D/g, "");
  if (!number) return null;

  const msg = isHeader
    ? cfg.texts.whatsapp_greeting
    : `${cfg.texts.whatsapp_greeting}\n\n${buildFormSummary(lang)}`;

  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}

function sendToMake(payload) {
  if (!MAKE_WEBHOOK_URL) return;
  fetch(MAKE_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).catch(console.error);
}

/* =====================================================
   APPLY LANGUAGE
   ===================================================== */

function applyLanguage(lang) {
  const cfg = LANG_CONFIG[lang];
  if (!cfg) return;

  currentLang = lang;

  /* Fix RTL */
  document.documentElement.lang = lang;
  document.body.classList.toggle("rtl", lang === "ar");

  /* UI Texts */
  const t = cfg.texts;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });

  /* Placeholders */
  const ph = cfg.placeholders;
  const ids = ["expected", "budget", "fullname", "phone", "email", "details"];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el && ph[id]) el.placeholder = ph[id];
  });

  /* Selects */
  populateSelect(
    document.getElementById("themeSelect"),
    cfg.themes.map((x) => ({ value: x, label: x }))
  );

  populateSelect(
    document.getElementById("currencySelect"),
    cfg.currencies,
    cfg.defaultCurrency
  );

  /* Update flag + code */
  document.getElementById("langFlag").textContent = cfg.flag;
  document.getElementById("langCode").textContent = cfg.code;

  /* Fix responsive after language switch */
  setTimeout(() => adjustResponsive(), 50);
}

/* =====================================================
   RESPONSIVE FIXER
   ===================================================== */

function adjustResponsive() {
  const width = window.innerWidth;

  const nav = document.getElementById("mainNav");
  const burger = document.getElementById("burgerBtn");

  if (!nav || !burger) return;

  if (width > 768) {
    nav.classList.remove("open");
    burger.classList.remove("active");
  }
}

/* =====================================================
   DOM READY
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  console.log("e-META v4.7-R loaded");

  const burgerBtn = document.getElementById("burgerBtn");
  const mainNav = document.getElementById("mainNav");
  const langToggle = document.getElementById("langToggle");
  const langMenu = document.getElementById("langMenu");
  const whatsappBtn = document.getElementById("whatsappBtn");
  const sendBtn = document.getElementById("sendBtn");
  const resetBtn = document.getElementById("resetBtn");

  /* --- BURGER MENU Mobile Fix --- */
  if (burgerBtn && mainNav) {
    burgerBtn.onclick = () => {
      burgerBtn.classList.toggle("active");
      mainNav.classList.toggle("open");
    };

    /* fermeture au clic extérieur */
    document.addEventListener("click", (e) => {
      const clickInsideNav =
        mainNav.contains(e.target) || burgerBtn.contains(e.target);
      if (!clickInsideNav) {
        mainNav.classList.remove("open");
        burgerBtn.classList.remove("active");
      }
    });

    /* fermeture quand on clique un lien */
    mainNav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        mainNav.classList.remove("open");
        burgerBtn.classList.remove("active");
      })
    );
  }

  /* --- LANGUAGE MENU --- */
  if (langToggle && langMenu) {
    langToggle.onclick = (e) => {
      e.stopPropagation();
      langMenu.classList.toggle("show");
    };

    langMenu.querySelectorAll("li").forEach((li) =>
      li.addEventListener("click", () => {
        applyLanguage(li.dataset.lang);
        langMenu.classList.remove("show");
      })
    );

    document.addEventListener("click", (e) => {
      if (!langMenu.contains(e.target)) langMenu.classList.remove("show");
    });
  }

  /* --- WhatsApp header button --- */
  if (whatsappBtn) {
    whatsappBtn.onclick = () => {
      const url = buildWhatsappUrl(currentLang, true);
      if (url) window.open(url, "_blank");
    };
  }

  /* --- SEND BUTTON --- */
  if (sendBtn) {
    sendBtn.onclick = () => {
      const delivery =
        document.querySelector('input[name="delivery"]:checked')?.value ||
        "whatsapp";

      const summary = buildFormSummary(currentLang);

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
        deliveryMode: delivery,
        summary
      };

      sendToMake(payload);

      if (delivery === "whatsapp") {
        const url = buildWhatsappUrl(currentLang, false);
        if (url) window.open(url, "_blank");
      } else if (delivery === "email") {
        const subject =
          {
            fr: "Nouvelle requête e-META",
            en: "New e-META request",
            es: "Nueva solicitud e-META",
            ar: "طلب جديد عبر e-META"
          }[currentLang] || "e-META request";

        window.location.href = `mailto:contact@e-meta.app?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(summary)}`;
      } else {
        const win = window.open("", "_blank", "width=600,height=700");
        win?.document.write(
          `<pre style="font-family:system-ui; white-space:pre-wrap; padding:16px;">${summary}</pre>`
        );
      }
    };
  }

  /* --- RESET BUTTON --- */
  if (resetBtn) {
    resetBtn.onclick = () => {
      requestForm.reset();
      applyLanguage(currentLang);
    };
  }

  /* --- Init FR --- */
  applyLanguage("fr");

  /* Ajustement responsive */
  adjustResponsive();

  window.addEventListener("resize", adjustResponsive);
});
