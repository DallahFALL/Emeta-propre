<script>
/* ================= e-META i18n ENGINE ================= */

const DEFAULT_LANG = "fr";
const STORAGE_KEY = "emeta_lang";

function applyTranslations(lang) {
  const dict = I18N[lang];
  if (!dict) return;

  // Texte simple
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const keys = el.dataset.i18n.split(".");
    let value = dict;
    keys.forEach(k => value = value?.[k]);
    if (value) el.textContent = value;
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const keys = el.dataset.i18nPlaceholder.split(".");
    let value = dict;
    keys.forEach(k => value = value?.[k]);
    if (value) el.placeholder = value;
  });

  // Lang + RTL
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
}

function setLanguage(lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  applyTranslations(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  const select = document.querySelector(".lang-select");

  if (select) {
    select.value = savedLang;
    select.addEventListener("change", e => {
      setLanguage(e.target.value);
    });
  }

  applyTranslations(savedLang);
});
</script>

.header-actions {
  flex-wrap: wrap;
}

.cta-custom {
  max-width: 100%;
  text-align: center;
}

@media (max-width: 480px) {
  .header-actions {
    flex-direction: column;
    align-items: stretch;
  }
}
