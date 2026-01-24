// i18n.js — compact translations (from conversation)
window.I18N = {
  fr: { /* ... (omitted here for brevity in file) ... */ },
  en: { /* ... */ },
  es: { /* ... */ },
  ar: { /* ... */ }
};
window.getI18n = function(lang){ return window.I18N[lang] || window.I18N['fr']; };
