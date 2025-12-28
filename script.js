<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title data-i18n="privacy.title">Politique de confidentialité</title>

  <meta name="theme-color" content="#0b1020" />
  <link rel="stylesheet" href="style.css" />
</head>

<body>

<header class="site-header">
  <div class="container header-inner">

    <a href="index.html" class="logo" aria-label="e-META">
      <span class="logo-mark">e</span><span class="logo-text">META</span>
      <span class="logo-tagline" data-i18n="tagline">Assistant IA multilingue de prise de décision</span>
    </a>

    <button class="burger" id="burgerBtn" type="button" aria-label="Menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>

    <nav class="nav" id="mainNav" aria-label="Main navigation">
      <ul>
        <li><a href="index.html" data-i18n="nav.home">Accueil</a></li>
        <li><a href="index.html#form" data-i18n="nav.form">Formulaire</a></li>
      </ul>
    </nav>

    <div class="header-actions">
      <select id="languageSwitcher" class="lang-select" aria-label="Language selector">
        <option value="fr">FR</option>
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="ar">ع</option>
      </select>

      <a class="header-cta" href="index.html#form" data-i18n="btn.custom">Requête personnalisée</a>
    </div>

  </div>
</header>

<main class="privacy-page">
  <section class="hero">
    <div class="container">
      <div class="hero-text" style="max-width: 900px; margin: 0 auto;">
        <h1 data-i18n="privacy.title">Politique de confidentialité</h1>
        <p class="hero-subtitle" data-i18n="privacy.intro">
          Cette politique explique comment e-META collecte, utilise et protège vos informations.
        </p>

        <p style="color: rgba(255,255,255,.86); line-height: 1.7;">
          (Tu peux garder ton contenu juridique complet ici — il restera lisible et traduisible si tu ajoutes les clés i18n.)
        </p>

        <a class="privacy-back" href="index.html" data-i18n="privacy.back">← Retour à l’accueil</a>
      </div>
    </div>
  </section>
</main>

<footer class="site-footer">
  <div class="container footer-inner">
    <p class="footer-copy" data-i18n="footer.text">e-META © 2025 — Assistant IA de décision stratégique</p>
    <a href="privacy.html" class="footer-link" data-i18n="footer.privacy">Politique de confidentialité</a>
  </div>
</footer>

<script src="i18n.js"></script>
<script src="script.js"></script>
</body>
</html>

document.addEventListener("DOMContentLoaded", () => {
  // ===== i18n SAFE INIT =====
  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "emeta_lang";

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    const dict = window.I18N?.[lang] || {};
    const fallback = window.I18N?.fr || {};

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = dict[key] || fallback[key];
      if (typeof val === "string") el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = dict[key] || fallback[key];
      if (typeof val === "string") el.setAttribute("placeholder", val);
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  // ===== APPLY SAVED LANG =====
  const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  setLanguage(savedLang);

  // ===== LANGUAGE SWITCHER SAFE =====
  const switcher = document.getElementById("languageSwitcher");
  if (switcher) {
    switcher.value = savedLang;
    switcher.addEventListener("change", e => {
      setLanguage(e.target.value);
    });
  }

  // ===== BURGER MENU SAFE =====
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
});
