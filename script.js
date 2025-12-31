/* =====================================================
   e-META — script.js PRO (International + Make + Display)
   - i18n dynamique FR / EN / ES / AR (window.I18N)
   - Logs console si clé i18n manquante
   - RTL auto via <html dir="rtl">
   - Burger menu mobile stable
   - CTA scroll vers #form
   - Persist langue (localStorage)
   - Submit: POST JSON vers Make Webhook
   - Affichage direct si outputDisplay (réponse Make)
===================================================== */

(() => {
  "use strict";

  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "emeta_lang";

  // ✅ Mets ici ton Webhook Make
  const MAKE_WEBHOOK_URL = "PASTE_YOUR_MAKE_WEBHOOK_URL_HERE";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* =====================================================
     🌍 I18N — FONCTION FINALE (celle que tu as validée)
  ===================================================== */
  function applyTranslations(lang) {
    const dict = window.I18N?.[lang];
    if (!dict) return;

    // Texte normal
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      } else {
        console.warn("Missing i18n key:", key);
        el.textContent = "";
      }
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        el.placeholder = dict[key];
      } else {
        console.warn("Missing placeholder key:", key);
        el.placeholder = "";
      }
    });

    // RTL support
    if (lang === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.classList.add("rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.classList.remove("rtl");
    }

    // <title>
    if (dict["meta.title"]) {
      document.title = dict["meta.title"];
    }
  }

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    applyTranslations(lang);

    const switcher = $("#languageSwitcher");
    if (switcher && switcher.value !== lang) {
      switcher.value = lang;
    }

    localStorage.setItem(STORAGE_KEY, lang);
  }

  /* =====================================================
     UI
  ===================================================== */

  function initBurger() {
    const burger = $("#burgerBtn");
    const nav = $("#mainNav");
    if (!burger || !nav) return;

    burger.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    $$("a", nav).forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("open")) return;
      if (nav.contains(e.target) || burger.contains(e.target)) return;
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  }

  function scrollToForm() {
  const form = document.getElementById("form");
  if (form) {
    form.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

    $("#ctaStart")?.addEventListener("click", go);
    $("#btnCustomRequest")?.addEventListener("click", go);
  }

  function initLangSwitcher() {
    const switcher = $("#languageSwitcher");
    if (!switcher) return;
    switcher.addEventListener("change", e => setLanguage(e.target.value));
  }

  /* =====================================================
     DISPLAY PANEL
  ===================================================== */

  function setStatus(msg) {
    const status = $("#formStatus");
    if (status) status.textContent = msg || "";
  }

  function showDisplayPanel(content, isHtml = false) {
    const panel = $("#displayPanel");
    const box = $("#displayContent");
    if (!panel || !box) return;

    box.innerHTML = isHtml
      ? content
      : `<pre>${escapeHtml(String(content || ""))}</pre>`;

    panel.hidden = false;
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function hideDisplayPanel() {
    $("#displayPanel")?.setAttribute("hidden", "true");
  }

  function escapeHtml(str) {
    return str
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  /* =====================================================
     FORM & MAKE
  ===================================================== */

  function collectFormData(formEl) {
    const fd = new FormData(formEl);
    const data = {};

    for (const [k, v] of fd.entries()) {
      if (k in data) {
        if (!Array.isArray(data[k])) data[k] = [data[k]];
        data[k].push(v);
      } else {
        data[k] = v;
      }
    }

    data.outputEmail = !!$("#outputEmail")?.checked;
    data.outputWhatsapp = !!$("#outputWhatsapp")?.checked;
    data.outputPdf = !!$("#outputPdf")?.checked;
    data.outputDisplay = !!$("#outputDisplay")?.checked;
    data.consent = !!$("#consent")?.checked;

    data.urgency = Number($("#urgency")?.value || 3);
    data.lang = document.documentElement.lang || DEFAULT_LANG;
    data.dir = document.documentElement.dir || "ltr";
    data.submittedAt = new Date().toISOString();

    return data;
  }

  async function postToMake(payload) {
    if (!MAKE_WEBHOOK_URL || MAKE_WEBHOOK_URL.includes("PASTE_YOUR")) {
      throw new Error("MAKE_WEBHOOK_URL is not set.");
    }

    const res = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch {
      return { ok: res.ok, display_text: text };
    }
  }

  function initDisplayClose() {
    $("#displayCloseBtn")?.addEventListener("click", hideDisplayPanel);
  }

  function initFormSubmit() {
    const form = $("#emetaForm");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      hideDisplayPanel();
      setStatus("");

      if (!$("#consent")?.checked) {
        setStatus("⚠️ Consentement requis.");
        return;
      }

      const payload = collectFormData(form);

      if (payload.outputWhatsapp && !payload.contactWhatsapp) {
        setStatus("⚠️ WhatsApp sélectionné : numéro requis.");
        return;
      }

      if (payload.outputEmail && !payload.contactEmail) {
        setStatus("⚠️ Email sélectionné : adresse requise.");
        return;
      }

      setStatus("⏳ Envoi en cours…");

      try {
        const result = await postToMake(payload);

        if (payload.outputDisplay) {
          const html = result?.display_html;
          const txt = result?.display_text || JSON.stringify(result, null, 2);
          showDisplayPanel(html && html.trim() ? html : txt, !!html);
        }

        setStatus("✅ Requête envoyée avec succès.");
      } catch (err) {
        setStatus("❌ Erreur d’envoi.");
        showDisplayPanel(String(err.message || err), false);
      }
    });
  }

  /* =====================================================
     INIT
  ===================================================== */

  document.addEventListener("DOMContentLoaded", () => {
    initBurger();
    initCTA();
    initLangSwitcher();
    initDisplayClose();
    initFormSubmit();

    const saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    setLanguage(saved);
  });

})();
