/* script.js
 - Charge les fichiers de langue depuis /frontend/lang/{code}.json
 - Rend dynamiquement les packs, ouvre le formulaire, gère envoi (mailto / wa.me / affichage)
 - Fallback logo: essaye src principal puis data-alt-src
*/

const LANG_DIR = './frontend/lang/'; // place tes JSON ici: frontend/lang/fr.json, en.json, es.json, ar.json
const DEFAULT_LANG = 'fr';
const WHATSAPP_NUMBER = '221782607212';

let currentLangCode = DEFAULT_LANG;
let currentLangJson = null;

document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById('langSelector');
  const saved = localStorage.getItem('emeta_lang') || DEFAULT_LANG;
  if (langSelect) langSelect.value = saved;

  // setup logo fallback
  const siteLogo = document.getElementById('site-logo');
  if (siteLogo) {
    siteLogo.addEventListener('error', () => {
      const alt = siteLogo.getAttribute('data-alt-src');
      if (alt && siteLogo.src.indexOf(alt) === -1) siteLogo.src = alt;
    });
  }

  loadLang(saved);

  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      const code = e.target.value;
      localStorage.setItem('emeta_lang', code);
      loadLang(code);
    });
  }

  // discover button scroll
  const discover = document.getElementById('btn-discover');
  if (discover) discover.addEventListener('click', () => {
    document.getElementById('packs').scrollIntoView({behavior:'smooth'});
  });

  // whatsapp quick
  const waBtn = document.getElementById('whatsappContact');
  if (waBtn) waBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  });

  // modal cancel(s)
  const modalCancel = document.getElementById('formCancelBtn');
  if (modalCancel) modalCancel.addEventListener('click', hideForm);
  const modalCloseIcon = document.getElementById('formCancel');
  if (modalCloseIcon) modalCloseIcon.addEventListener('click', hideForm);
});

async function loadLang(code) {
  try {
    const url = `${LANG_DIR}${code}.json?t=${Date.now()}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Lang file not found: ' + url);
    const json = await res.json();
    currentLangCode = code;
    currentLangJson = json;
    document.documentElement.lang = code;
    document.documentElement.dir = (code === 'ar') ? 'rtl' : 'ltr';

    // fill static nodes data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && json[key] !== undefined) {
        if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
          el.placeholder = json[key];
        } else {
          el.textContent = json[key];
        }
      }
    });

    // update whatsapp button text/href
    const wa = document.getElementById('whatsappContact');
    if (wa && json.btn_whatsapp_text) {
      wa.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(json.btn_whatsapp_text)}`;
      // text is replaced above via data-i18n on inner span
    }

    // render packs
    if (Array.isArray(json.packs)) {
      renderPacks(json.packs);
    } else {
      const grid = document.getElementById('packsGrid');
      if (grid) grid.innerHTML = `<p>${json.no_packs_text || 'Aucun pack.'}</p>`;
    }
  } catch (err) {
    console.error('[eMETA] loadLang error', err);
  }
}

function renderPacks(packs) {
  const grid = document.getElementById('packsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  packs.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'pack-card';
    card.setAttribute('data-pack-id', p.id || `pack-${i}`);
    const title = document.createElement('h3');
    title.className = 'pack-title';
    title.textContent = p.name || (`Pack ${i+1}`);
    const desc = document.createElement('p');
    desc.className = 'pack-desc';
    desc.textContent = p.desc || '';
    const btnWrap = document.createElement('div');
    btnWrap.style.marginTop = '12px';
    const btn = document.createElement('button');
    btn.className = 'open-pack';
    btn.dataset.index = i;
    btn.textContent = p.button || (currentLangJson && currentLangJson.open_btn) || 'Ouvrir';
    btn.addEventListener('click', () => openFormForPack(i));
    btnWrap.appendChild(btn);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(btnWrap);
    grid.appendChild(card);
  });
}

/* Ouvre le formulaire et génère les champs dynamiquement */
function openFormForPack(index) {
  if (!currentLangJson || !Array.isArray(currentLangJson.packs)) return;
  const pack = currentLangJson.packs[index];
  if (!pack) return;

  const section = document.getElementById('packFormSection');
  const packNameInput = document.getElementById('packName');
  const formTitle = document.getElementById('formTitle');
  if (section && packNameInput && formTitle) {
    section.classList.remove('hidden');
    section.classList.add('modal'); // show modal style
    section.setAttribute('aria-hidden', 'false');
    packNameInput.value = pack.name || '';
    formTitle.textContent = (currentLangJson.form_title_prefix || 'Pack —') + ' ' + (pack.name || '');

    // build dynamic fields
    let container = document.getElementById('dynamicFields');
    if (!container) {
      container = document.createElement('div');
      container.id = 'dynamicFields';
      const form = document.getElementById('packForm');
      const actions = document.getElementById('formActions');
      form.insertBefore(container, actions);
    }
    container.innerHTML = '';
    const fields = Array.isArray(pack.fields) && pack.fields.length ? pack.fields : defaultFields();
    fields.forEach(f => {
      const node = createFieldDom(f);
      container.appendChild(node);
    });

    // scroll to modal/top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // attach form submit
  const form = document.getElementById('packForm');
  if (form && !form._bound) {
    form.addEventListener('submit', handleFormSubmit);
    form._bound = true;
  }
}

/* Create form field node */
function createFieldDom(f) {
  const wrapper = document.createElement('div');
  wrapper.className = 'form-field';
  const label = document.createElement('label');
  label.setAttribute('for', `f_${f.key}`);
  label.textContent = f.label || f.key;
  wrapper.appendChild(label);

  let inp;
  const type = (f.type || 'text').toLowerCase();
  if (type === 'textarea') {
    inp = document.createElement('textarea');
    inp.rows = f.rows || 4;
  } else if (type === 'select') {
    inp = document.createElement('select');
    (f.options || []).forEach(o => {
      const opt = document.createElement('option');
      opt.value = o.value || o;
      opt.textContent = o.label || o;
      inp.appendChild(opt);
    });
  } else {
    inp = document.createElement('input');
    inp.type = f.type || 'text';
  }
  inp.id = `f_${f.key}`;
  inp.name = f.key;
  if (f.placeholder) inp.placeholder = f.placeholder;
  if (f.required) inp.required = true;
  inp.className = 'form-input';
  wrapper.appendChild(inp);
  return wrapper;
}

function defaultFields() {
  return [
    { key: 'name', type: 'text', label: currentLangJson && currentLangJson.form_name || 'Nom', placeholder: '', required: true },
    { key: 'email', type: 'email', label: currentLangJson && currentLangJson.form_email || 'Email', placeholder: '' },
    { key: 'details', type: 'textarea', label: currentLangJson && currentLangJson.form_details || 'Détails', placeholder: '' }
  ];
}

function hideForm() {
  const section = document.getElementById('packFormSection');
  if (!section) return;
  section.classList.add('hidden');
  section.setAttribute('aria-hidden', 'true');
  const dyn = document.getElementById('dynamicFields');
  if (dyn) dyn.innerHTML = '';
  const form = document.getElementById('packForm');
  if (form) form.reset();
  const msg = document.getElementById('formMsg');
  if (msg) msg.innerHTML = '';
}

/* Handle submission: mailto / whatsapp / display */
function handleFormSubmit(e) {
  e.preventDefault();
  const f = e.target;
  const fd = {};
  f.querySelectorAll('input,textarea,select').forEach(i => {
    if (!i.name) return;
    fd[i.name] = i.type === 'checkbox' ? i.checked : i.value;
  });

  const mode = (f.querySelector('input[name="mode"]:checked') || {}).value || 'email';
  const subject = `Demande pack: ${fd.packName || fd.pack || ''}`;
  let body = `${subject}\n\n`;
  Object.keys(fd).forEach(k => {
    body += `${k}: ${fd[k]}\n`;
  });

  if (mode === 'email') {
    const mailto = `mailto:contact@e-meta.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  } else if (mode === 'whatsapp') {
    const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
    window.open(wa, '_blank');
  } else {
    const msg = document.getElementById('formMsg');
    if (msg) {
      msg.innerHTML = `<pre>${escapeHtml(body)}</pre>`;
    } else {
      alert('Affichage :\n' + body);
    }
  }

  setTimeout(hideForm, 700);
}

function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}
