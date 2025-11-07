// script.js - simple i18n loader + packs renderer + modal form behavior
(() => {
  const LANG_SELECT = document.getElementById('langSelect');
  const PACKS_GRID = document.getElementById('packsGrid');
  const DISCOVER = document.getElementById('discoverPacks');
  const WHATS_BTN = document.getElementById('whatsBtn');
  const MODAL = document.getElementById('packFormModal');
  const MODAL_CLOSE = document.getElementById('modalClose');
  const MODAL_TITLE_NAME = document.getElementById('modalPackName');
  const PACK_FORM = document.getElementById('packForm');
  const PACK_ID = document.getElementById('packId');

  // list of candidate base paths to find lang files (works in many repo layouts)
  const LANG_BASES = [
    'frontend/lang',
    '/frontend/lang',
    'lang',
    '/lang',
    './frontend/lang',
    './lang'
  ];

  let currentLang = localStorage.getItem('emeta_lang') || 'fr';
  LANG_SELECT.value = currentLang;

  // try to fetch file from candidate paths
  async function fetchLangJson(lang) {
    for (const base of LANG_BASES) {
      const url = `${base}/${lang}.json`;
      try {
        const res = await fetch(url, {cache: 'no-store'});
        if (res.ok) return res.json();
      } catch (e) { /* try next */ }
    }
    throw new Error('Lang file not found for ' + lang);
  }

  // apply i18n: set elements having data-i18n to key
  function applyI18n(dict) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = get(dict, key) || el.textContent;
      if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    });
    // render packs array
    if (dict.packs && Array.isArray(dict.packs)) {
      PACKS_GRID.innerHTML = '';
      dict.packs.forEach(p => {
        const art = document.createElement('article');
        art.className = 'pack-card';
        art.setAttribute('data-pack', p.id);
        art.innerHTML = `
          <h3 class="pack-title">${p.title}</h3>
          <p class="pack-desc">${p.desc}</p>
          <button class="open-pack btn-outline" data-pack="${p.id}">${dict.btn.open || 'Ouvrir'}</button>
        `;
        PACKS_GRID.appendChild(art);
      });
      attachPackButtons();
    }
  }

  // helper to read nested keys a.b.c
  function get(obj, path) {
    return path.split('.').reduce((o,k)=> (o && o[k]!==undefined)?o[k]:null, obj);
  }

  // open modal with pack details
  function openForm(packId, packTitle) {
    MODAL.setAttribute('aria-hidden','false');
    MODAL.style.display='flex';
    MODAL_TITLE_NAME.textContent = packTitle;
    PACK_ID.value = packId;
    document.body.style.overflow='hidden';
  }
  function closeForm() {
    MODAL.setAttribute('aria-hidden','true');
    MODAL.style.display='none';
    document.body.style.overflow='';
    PACK_FORM.reset();
  }

  function attachPackButtons() {
    document.querySelectorAll('.open-pack').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = btn.dataset.pack;
        // title from card
        const card = btn.closest('.pack-card');
        const title = card.querySelector('.pack-title').textContent;
        openForm(id, title);
      });
    });
  }

  // form submit
  PACK_FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData(PACK_FORM);
    const mode = form.get('mode') || 'email';
    const summary = `
Pack: ${form.get('packId')}
Objectif: ${form.get('objective') || '-'}
Taille équipe: ${form.get('teamSize') || '-'}
Budget: ${form.get('budget') || '-'}
Nom: ${form.get('clientName') || '-'}
Email: ${form.get('clientEmail') || '-'}
Phone: ${form.get('clientPhone') || '-'}
Détails: ${form.get('details') || '-'}
`.trim();

    if (mode === 'email') {
      // open mailto with summary
      const to = 'contact@e-meta.app';
      const subj = encodeURIComponent(`Demande pack ${form.get('packId')}`);
      const body = encodeURIComponent(summary);
      window.location.href = `mailto:${to}?subject=${subj}&body=${body}`;
    } else if (mode === 'whatsapp') {
      const phone = form.get('clientPhone') || '221782607212';
      const text = encodeURIComponent(summary);
      window.open(`https://wa.me/${phone.replace(/\D/g,'') || '221782607212'}?text=${text}`, '_blank');
    } else {
      // display summary - simple: alert or inline -- we show alert and close
      alert(summary);
    }
    closeForm();
  });

  // modal close
  MODAL_CLOSE.addEventListener('click', closeForm);
  document.getElementById('formCancel').addEventListener('click', closeForm);

  // open packs section
  DISCOVER.addEventListener('click', () => {
    document.getElementById('packs').scrollIntoView({behavior:'smooth'});
  });

  // WhatsApp top button
  WHATS_BTN.addEventListener('click', ()=> {
    window.open('https://wa.me/221782607212','_blank');
  });

  // menu hamburger for small screens
  document.getElementById('menuBtn').addEventListener('click', () => {
    const nav = document.querySelector('.main-nav ul');
    if (nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });

  // FAQ toggles simple
  document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', ()=> {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      // simple: show a small bullet style or collapse behaviour can be added
    });
  });

  // language change
  LANG_SELECT.addEventListener('change', async (e) => {
    const lang = e.target.value;
    await changeLang(lang);
  });

  async function changeLang(lang) {
    try {
      const dict = await fetchLangJson(lang);
      applyI18n(dict);
      currentLang = lang;
      localStorage.setItem('emeta_lang', lang);
      // set html lang & dir
      document.documentElement.lang = lang;
      document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
      // small tweak: if rtl, keep select on right via CSS not here
    } catch (err) {
      console.error(err);
      alert('Lang load error: ' + err.message);
    }
  }

  // initial load
  changeLang(currentLang);
})();
