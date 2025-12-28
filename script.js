/* =====================================================
   e-META — script.js PRO (International + Make + Display)
   - i18n dynamique FR / EN / ES / AR (window.I18N)
   - Ne remplace JAMAIS par du vide si clé manquante
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
  const RTL_LANGS = new Set(["ar"]);

  // ✅ Mets ici ton Webhook Make (Custom webhook URL)
  // Exemple: https://hook.eu1.make.com/xxxxxxxxxxxxxxxxxxxx
  const MAKE_WEBHOOK_URL = "PASTE_YOUR_MAKE_WEBHOOK_URL_HERE";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const getDict = (lang) => {
    const all = window.I18N || {};
    return all[lang] || all[DEFAULT_LANG] || {};
  };

  function setRTL(lang) {
    const rtl = RTL_LANGS.has(lang);
    document.documentElement.dir = rtl ? "rtl" : "ltr";
  }

 function applyI18n(lang) {
  const dict = window.I18N?.[lang] || {};
  const fallback = window.I18N?.fr || {};

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = dict[key] || fallback[key];
    if (typeof val === "string") {
      el.textContent = val;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const val = dict[key] || fallback[key];
    if (typeof val === "string") {
      el.setAttribute("placeholder", val);
    }
  });
}

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    setRTL(lang);
    applyI18n(lang);

    const switcher = $("#languageSwitcher");
    if (switcher && switcher.value !== lang) switcher.value = lang;

    localStorage.setItem(STORAGE_KEY, lang);
  }

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

  function initCTA() {
    const go = () => {
      const form = $("#form");
      if (form) form.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const ctaHero = $("#ctaStart");
    const ctaHeader = $("#btnCustomRequest");
    if (ctaHero) ctaHero.addEventListener("click", go);
    if (ctaHeader) ctaHeader.addEventListener("click", go);
  }

  function initLangSwitcher() {
    const switcher = $("#languageSwitcher");
    if (!switcher) return;
    switcher.addEventListener("change", (e) => setLanguage(e.target.value));
  }

  function setStatus(msg) {
    const status = $("#formStatus");
    if (status) status.textContent = msg || "";
  }

  function showDisplayPanel(content, isHtml = false) {
    const panel = $("#displayPanel");
    const box = $("#displayContent");
    if (!panel || !box) return;

    if (isHtml) {
      box.innerHTML = content;
    } else {
      box.innerHTML = `<pre>${escapeHtml(String(content || ""))}</pre>`;
    }

    panel.hidden = false;
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function hideDisplayPanel() {
    const panel = $("#displayPanel");
    if (panel) panel.hidden = true;
  }

  function escapeHtml(str) {
    return str
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function collectFormData(formEl) {
    const fd = new FormData(formEl);
    const data = {};

    for (const [k, v] of fd.entries()) {
      // handle checkboxes manually below
      if (k in data) {
        if (!Array.isArray(data[k])) data[k] = [data[k]];
        data[k].push(v);
      } else {
        data[k] = v;
      }
    }

    // checkboxes
    data.outputEmail = !!$("#outputEmail")?.checked;
    data.outputWhatsapp = !!$("#outputWhatsapp")?.checked;
    data.outputPdf = !!$("#outputPdf")?.checked;
    data.outputDisplay = !!$("#outputDisplay")?.checked;

    data.consent = !!$("#consent")?.checked;

    // urgency range numeric
    const urg = $("#urgency");
    data.urgency = urg ? Number(urg.value || 3) : 3;

    // language
    data.lang = document.documentElement.lang || DEFAULT_LANG;
    data.dir = document.documentElement.dir || "ltr";

    // timestamp
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

    // Make peut répondre vide ou texte
    // On tente JSON sinon on garde texte
    try {
      return JSON.parse(text);
    } catch {
      return { ok: res.ok, display_text: text };
    }
  }

  function initDisplayClose() {
    const btn = $("#displayCloseBtn");
    if (!btn) return;
    btn.addEventListener("click", hideDisplayPanel);
  }

  function initFormSubmit() {
    const form = $("#emetaForm");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      hideDisplayPanel();
      setStatus("");

      // consent mandatory
      const consent = $("#consent");
      if (!consent?.checked) {
        setStatus("⚠️ Consentement requis.");
        consent?.focus();
        return;
      }

      const payload = collectFormData(form);

      // If WhatsApp output selected, WhatsApp number should exist (soft validation)
      if (payload.outputWhatsapp && !payload.contactWhatsapp) {
        setStatus("⚠️ WhatsApp sélectionné : veuillez renseigner le numéro.");
        $("#contactWhatsapp")?.focus();
        return;
      }

      // If Email output selected, email should exist (soft validation)
      if (payload.outputEmail && !payload.contactEmail) {
        setStatus("⚠️ Email sélectionné : veuillez renseigner l’adresse e-mail.");
        $("#contactEmail")?.focus();
        return;
      }

      setStatus("⏳ Envoi en cours…");

      try {
        const result = await postToMake(payload);

        // ✅ Affichage direct si demandé (et si Make renvoie quelque chose)
        if (payload.outputDisplay) {
          const html = result?.display_html;
          const txt = result?.display_text || result?.message || JSON.stringify(result, null, 2);
          if (typeof html === "string" && html.trim() !== "") {
            showDisplayPanel(html, true);
          } else {
            showDisplayPanel(txt, false);
          }
        }

        setStatus("✅ Requête envoyée avec succès.");
        // Option : reset automatique si tu veux
        // form.reset();

      } catch (err) {
        setStatus("❌ Erreur d’envoi. Vérifiez le Webhook Make.");
        if ($("#outputDisplay")?.checked) {
          showDisplayPanel(String(err?.message || err), false);
        }
      }
    });
  }

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


  
