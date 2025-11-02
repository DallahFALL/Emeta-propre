/* script.js
   - Gestion langues (localStorage)
   - Chargement des fichiers JSON de traduction
   - Rendu automatique des éléments avec data-i18n
   - Force html[lang] et dir pour éviter "flash" LTR->RTL
   - Ajuste position floating WhatsApp etc.
*/

/* ---------- CONFIG ---------- */
const TRANSLATIONS_PATH = 'frontend/lang'; // <-- si tes fichiers sont /lang à la racine change en 'lang'
const AVAILABLE_LANGS = ['fr','en','es','ar'];
let LANG = localStorage.getItem('e_meta_lang') || (navigator.language || 'fr').slice(0,2);
if (!AVAILABLE_LANGS.includes(LANG)) LANG = 'fr';

const translations = {}; // cache pour traductions

/* ---------- small helper: fetch JSON safely ---------- */
async function fetchJSON(path) {
  try {
    const res = await fetch(path, {cache: "no-store"});
    if (!res.ok) throw new Error('Fetch failed ' + res.status);
    return await res.json();
  } catch (err) {
    console.warn('fetchJSON', path, err);
    return null;
  }
}

/* ---------- load translations for `LANG` (and fallback to 'en' if missing) ---------- */
async function loadTranslations() {
  if (translations[LANG]) return translations[LANG];
  const p = `${TRANSLATIONS_PATH}/${LANG}.json`;
  const data = await fetchJSON(p);
  if (data) {
    translations[LANG] = data;
    return data;
  }
  if (LANG !== 'en') {
    const alt = await fetchJSON(`${TRANSLATIONS_PATH}/en.json`);
    if (alt) { translations['en'] = alt; return alt; }
  }
  translations[LANG] = {};
  return {};
}

/* ---------- read dotted keys safely, e.g. "hero.title" ---------- */
function t(key) {
  if (!key) return '';
  const root = translations[LANG] || {};
  const parts = key.split('.');
  let cur = root;
  for (const p of parts) {
    if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p];
    else { cur = null; break; }
  }
  return cur ?? '';
}

/* ---------- Render all elements with data-i18n ---------- */
function renderAll() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const val = t(key);
    if (!val) return; // keep existing content if translation missing
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      // placeholder or value
      if (el.hasAttribute('placeholder')) el.placeholder = val;
      else el.value = val;
    } else {
      // preserve simple HTML where needed (e.g. links)
      el.innerHTML = val;
    }
  });
  // update document title if exists
  const titleKey = document.documentElement.dataset.titleKey;
  if (titleKey) {
    const v = t(titleKey);
    if (v) document.title = v;
  }
}

/* ---------- Apply language settings to <html> to avoid flashes ---------- */
function applyHtmlLangAndDir(lang) {
  document.documentElement.lang = lang;
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
    document.documentElement.classList.add('rtl-mode');
  } else {
    document.documentElement.dir = 'ltr';
    document.documentElement.classList.remove('rtl-mode');
  }
}

/* ---------- Populate language selector (id="langSelect") ---------- */
function populateLangSelect() {
  const sel = document.getElementById('langSelect');
  if (!sel) return;
  // clear and fill
  sel.innerHTML = '';
  const map = { fr: 'FR', en: 'EN', es: 'ES', ar: 'AR' };
  AVAILABLE_LANGS.forEach(code => {
    const opt = document.createElement('option');
    opt.value = code;
    opt.textContent = map[code] || code.toUpperCase();
    sel.appendChild(opt);
  });
  sel.value = LANG;

  sel.addEventListener('change', async (e) => {
    LANG = e.target.value;
    localStorage.setItem('e_meta_lang', LANG);
    applyHtmlLangAndDir(LANG);
    await loadTranslations();
    renderAll();
  });
}

/* ---------- Quick bootstrap: apply language quickly to avoid flash ---------- */
applyHtmlLangAndDir(LANG);

/* ---------- Start: load translations and render on DOMContentLoaded ---------- */
document.addEventListener('DOMContentLoaded', async () => {
  // populate selector
  populateLangSelect();

  // load translations and render texts
  await loadTranslations();
  renderAll();

  // attach external clickable actions (example CTA anchor for packs)
  // If you have buttons with data-open-pack attributes, simple handler:
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-open-pack]');
    if (!btn) return;
    const pack = btn.getAttribute('data-open-pack');
    if (!pack) return;
    // navigate to pack form page e.g. /pack.html?pack=marketing or render modal
    window.location = `./forms/pack.html?pack=${encodeURIComponent(pack)}&lang=${LANG}`;
  });
});

/* ---------- Optional: small helper to register new translations dynamically ---------- */
window.__eMetaRegisterTranslationsFor = (langObj, langCode='fr') => {
  translations[langCode] = langObj;
  if (langCode === LANG) renderAll();
};

/* ---------- expose getTranslation for debugging */ 
window.__eMetaGetT = t;
