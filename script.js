// script.js - Assure le chargement dynamique des langues, packs, modal et envoi simple
(() => {
  const LANG_PATH = 'frontend/lang/';
  const defaultLang = document.documentElement.lang || 'fr';
  const langSelect = document.getElementById('langSelect');
  const packsContainer = document.getElementById('packsContainer');
  const packModal = document.getElementById('packModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalClose = document.getElementById('modalClose');
  const packForm = document.getElementById('packForm');
  const formResult = document.getElementById('formResult');
  const discoverBtn = document.getElementById('discoverPacks');
  const whatsappBtn = document.getElementById('whatsappBtn');

  let translations = {};
  let currentLang = defaultLang;
  let packsData = [];

  async function loadLang(lang){
    try{
      const resp = await fetch(`${LANG_PATH}${lang}.json`);
      if(!resp.ok) throw new Error('Lang file missing');
      const json = await resp.json();
      translations[lang] = json;
      return json;
    }catch(e){
      console.error('Erreur chargement langue', e);
      return {};
    }
  }

  function t(key){
    return (translations[currentLang] && translations[currentLang][key]) || key;
  }

  function applyTranslations(){
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    // set html lang attribute
    document.documentElement.lang = currentLang;
    // handle direction automatically for Arabic
    if(currentLang === 'ar'){
      document.documentElement.setAttribute('dir','rtl');
    }else{
      document.documentElement.setAttribute('dir','ltr');
    }
    // populate packs text
    renderPacks();
  }

  async function init(){
    // load current lang + others in background
    await loadLang(currentLang);
    ['fr','en','es','ar'].forEach(async l => {
      if(l !== currentLang) await loadLang(l);
    });

    // use translations to get packs list or fallback
    packsData = translations[currentLang].packs || [
      {key:'marketing', title:'Marketing', desc:'Brief campagne, estimation budget et canaux.'},
      {key:'funding', title:'Funding', desc:'Demande structurée, modèles financiers.'},
      {key:'recruitment', title:'Recruitment', desc:'Brief rôle, budget et timeline.'},
      {key:'product', title:'Product', desc:'Positionnement, pricing, GTM.'}
    ];

    applyTranslations();
  }

  function renderPacks(){
    // get pack list from translations (handle dynamic change)
    const langPacks = (translations[currentLang] && translations[currentLang].packs) || packsData;
    packsContainer.innerHTML = '';
    langPacks.forEach(p => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div>
          <h4>${p.title}</h4>
          <p>${p.desc}</p>
        </div>
        <div style="margin-top:12px;">
          <button class="btn open-pack" data-key="${p.key}">${t('btn_open') || 'Ouvrir'}</button>
        </div>
      `;
      packsContainer.appendChild(card);
    });

    // wire open-pack
    document.querySelectorAll('.open-pack').forEach(b => {
      b.addEventListener('click', (e) => {
        const key = e.currentTarget.getAttribute('data-key');
        openPackModal(key);
      });
    });
  }

  function openPackModal(key){
    // set title and packKey
    const pack = (translations[currentLang].packs || packsData).find(p=>p.key===key) || {title:key};
    modalTitle.textContent = pack.title;
    document.getElementById('packKey').value = key;
    packForm.reset();
    formResult.innerHTML = '';
    packModal.setAttribute('aria-hidden','false');
    packModal.style.display = 'flex';
    // scroll top of modal
    document.querySelector('.modal-body').scrollTop = 0;
  }

  function closeModal(){
    packModal.setAttribute('aria-hidden','true');
    packModal.style.display = 'none';
  }

  // form submit handler: three simple modes
  packForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const fd = new FormData(packForm);
    const data = Object.fromEntries(fd.entries());
    const mode = data.mode || 'email';
    const subject = `[e-META] Demande: ${data.need || 'Pack'}`;
    // Create body from fields
    const bodyLines = [
      `Pack: ${data.packKey || ''}`,
      `Question principale: ${data.need || ''}`,
      `Champ1: ${data.field1 || ''}`,
      `Champ2: ${data.field2 || ''}`,
      `Nom: ${data.name || ''}`,
      `Email: ${data.email || ''}`,
      `Téléphone: ${data.phone || ''}`,
      `Détails: ${data.details || ''}`,
    ];
    const body = bodyLines.join('\n');

    if(mode === 'email'){
      const mailto = `mailto:contact@e-meta.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    }else if(mode === 'whatsapp'){
      // open wa.me with message
      const phone = data.phone ? data.phone.replace(/\s+/g,'') : '221782607212';
      const wa = `https://wa.me/${phone.replace('+','') || '221782607212'}?text=${encodeURIComponent(subject + '\n' + body)}`;
      window.open(wa, '_blank');
    }else{ // display
      formResult.innerHTML = `<strong>${t('form_result_title') || 'Réponse'}</strong><pre>${escapeHtml(body)}</pre>`;
    }
  });

  function escapeHtml(unsafe){
    return unsafe.replace(/[&<"'>]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
  }

  modalClose.addEventListener('click', closeModal);
  document.getElementById('formCancel').addEventListener('click', closeModal);

  // close on background click
  packModal.addEventListener('click', (e) => {
    if(e.target === packModal) closeModal();
  });

  // FAQ toggles
  document.querySelectorAll('.faq-q').forEach(b => {
    b.addEventListener('click', () => {
      const expanded = b.getAttribute('aria-expanded') === 'true';
      b.setAttribute('aria-expanded', !expanded);
    });
  });

  // language switcher
  langSelect.value = currentLang;
  langSelect.addEventListener('change', async (e) => {
    currentLang = e.target.value;
    if(!translations[currentLang]) await loadLang(currentLang);
    // if packs not in new language, try to find fallback
    applyTranslations();
  });

  // discover button scrolls to packs
  discoverBtn.addEventListener('click', () => {
    document.getElementById('packs').scrollIntoView({behavior:'smooth'});
  });

  // mobile menu button toggles nav (simple)
  document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    const nav = document.getElementById('mainNav');
    if(nav.style.display === 'flex'){nav.style.display='none';}
    else nav.style.display='flex';
  });

  // set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // initial load
  init();

})();
