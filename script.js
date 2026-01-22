/* =====================================================
   e-META — SCRIPT.JS FINAL PRO
   - i18n stable (index + privacy)
   - Header fixed + auto-shrink (no jump)
   - Header intelligent (hide down / show up)
   - Burger menu mobile safe
   - RTL safe
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =========================
     CONFIG
  ========================= */
  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";
  const RTL_LANGS = ["ar"];

  /* =========================
     URL → STORAGE SYNC
  ========================= */
  (() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    if (urlLang) localStorage.setItem(STORAGE_KEY, urlLang);
  })();

  /* =========================
     LANG RESOLUTION
  ========================= */
  const getLangFromURL = () =>
    new URLSearchParams(window.location.search).get("lang");

  const resolveLang = () =>
    getLangFromURL() ||
    localStorage.getItem(STORAGE_KEY) ||
    DEFAULT_LANG;

  const setLang = lang => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

    const rtlCSS = document.getElementById("rtlStylesheet");
    if (rtlCSS) rtlCSS.disabled = !RTL_LANGS.includes(lang);
  };

  /* =========================
     APPLY I18N
  ========================= */
  const applyI18n = lang => {
    if (!window.I18N || !window.I18N[lang]) return;
    const dict = window.I18N[lang];

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });

    document.title =
      dict["privacy.meta.title"] ||
      dict["meta.title"] ||
      document.title;
  };

  /* =========================
     INIT LANGUAGE
  ========================= */
  const lang = resolveLang();
  setLang(lang);
  applyI18n(lang);

  /* =========================
     LANG SELECT
  ========================= */
  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.value = lang;
    langSelect.addEventListener("change", () => {
      const newLang = langSelect.value;
      setLang(newLang);
      applyI18n(newLang);
      syncPrivacyLinks(newLang);
    });
  }

  /* =========================
     PRIVACY LINK SYNC
  ========================= */
  function syncPrivacyLinks(lang) {
    document.querySelectorAll('a[href="privacy.html"]').forEach(link => {
      link.href = `privacy.html?lang=${lang}`;
    });
  }
  syncPrivacyLinks(lang);

  /* =========================
     BURGER MENU — MOBILE SAFE
  ========================= */
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* =========================
     CTA HERO → FORM
  ========================= */
  const startBtn = document.getElementById("startBtn");
  const form = document.getElementById("form");

  if (startBtn && form) {
    startBtn.addEventListener("click", () => {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
});

/* =====================================================
   HEADER INTELLIGENT — PRO++
   - shrink après 40px
   - hide on scroll down
   - show on scroll up
   - no jump / rAF optimisé
===================================================== */
(() => {
  const header = document.querySelector(".site-header");
  if (!header) return;

  let lastY = window.scrollY;
  let ticking = false;

  const onScroll = () => {
    const y = window.scrollY;

    /* Shrink visuel */
    header.classList.toggle("is-shrink", y > 40);

    /* Hide / show intelligent */
    if (y > lastY && y > 120) {
      header.classList.add("is-hidden");     // scroll down
    } else {
      header.classList.remove("is-hidden"); // scroll up
    }

    lastY = y;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    },
    { passive: true }
  );

  onScroll(); // init
})();
/* ===============================
   HERO — CADRAGE CABINET PRO
================================ */

.hero {
  padding: 72px 0 56px;
}

.hero-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;
  align-items: center;
}

/* Texte principal */
.hero h1 {
  max-width: 680px;
  font-size: clamp(2rem, 3vw, 2.6rem);
  line-height: 1.15;
}

/* Texte descriptif */
.hero-subtitle,
.hero-points {
  max-width: 620px;
}

/* Colonne droite cabinet */
.hero-cabinet {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  padding: 28px;
}

/* CTA */
.cta-primary {
  margin-top: 18px;
}
@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;
  }

  .hero h1,
  .hero-subtitle,
  .hero-points {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-points {
    list-style-position: inside;
    padding-left: 0;
  }
}
/* ===============================
   FORM — CADRAGE PRO CABINET
================================ */

.form-section {
  padding: 64px 0 80px;
}

.emeta-form {
  max-width: 960px;
  margin: 0 auto;
}

/* Fieldsets élégants */
.field-group {
  padding: 28px;
  margin-bottom: 24px;
}

/* Titres */
.field-group legend {
  font-size: 1.05rem;
}

/* Champs */
.field {
  margin-bottom: 18px;
}

/* Textareas équilibrées */
textarea {
  min-height: 140px;
}

/* Grille PRO desktop */
.grid-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}
@media (max-width: 900px) {
  .emeta-form {
    padding: 0 6px;
  }

  .field-group {
    padding: 20px;
  }

  .grid-2 {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  textarea {
    min-height: 120px;
  }
}
@media (max-width: 900px) {
  .emeta-form {
    padding: 0 6px;
  }

  .field-group {
    padding: 20px;
  }

  .grid-2 {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  textarea {
    min-height: 120px;
  }
}
/* ===============================
   FORM — FIN PROPRE & RESPIRATION
================================ */

.form-actions {
  margin-top: 32px;
}

.form-actions button {
  min-width: 240px;
}

/* Micro-copy confiance */
.form-trust-note {
  margin-top: 18px;
  font-size: 0.85rem;
  opacity: 0.7;
}
