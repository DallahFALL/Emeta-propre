/* script.js — bascule langues, chargement packs, formulaire dynamique */

const LANG_PATH = './frontend/lang/'; // les JSON dans frontend/lang/
const DEFAULT_LANG = 'fr';
const CONTACT_WA_NUMBER = '221782607212';

document.addEventListener('DOMContentLoaded', () => {
  // init ui
  const langSelector = document.getElementById('langSelector');
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  // load default language
  const saved = localStorage.getItem('emeta_lang') || DEFAULT_LANG;
  langSelector.value = saved;
  loadLang(saved);

  langSelector.addEventListener('change', (e) => {
    const code = e.target.value;
    loadLang(code);
    localStorage.setItem('emeta_lang', code);
  });

  // mobile menu toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  mobileBtn && mobileBtn.addEventListener('click', () => {
    const nav = document.querySelector('.main-nav');
    nav.style.display = (nav.style.display === 'block') ? '' : 'block';
  });

  // form cancel
  document.getElementById('formCancel').addEventListener('click', hideForm);

  // form submit
  document.getElementById('packForm').addEventListener('submit', handleFormSubmit);
});

/* ---- Loading language JSON and translate UI ---- */
async function loadLang(code) {
  try{
    const res = await fetch(`${LANG_PATH}${code}.json`);
    if(!res.ok) throw new Error('Lang file not found');
    const json = await res.json();

    // set html lang (affecte RTL)
    document.documentElement.setAttribute('lang', code);

    // apply translations to elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(json[key]) el.innerText = json[key];
    });

    // load packs area
    renderPacks(json.packs || []);

    // update hero buttons text if needed
    const wsa = document.getElementById('whatsappContact');
    if(wsa) wsa.href = `https://wa.me/${CONTACT_WA_NUMBER}?text=${encodeURIComponent(json.btn_whatsapp_text || '')}`;

  }catch(err){
    console.error('loadLang error', err);
  }
}

/* ---- Render packs from JSON ---- */
function renderPacks(packs){
  const grid = document.getElementById('packsGrid');
  grid.innerHTML = '';
  packs.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'pack-card';
    card.innerHTML = `
      <h3>${escapeHtml(p.name)}</h3>
      <p>${escapeHtml(p.desc)}</p>
      <button class="btn btn-outline open-pack" data-pack="${escapeHtml(p.name)}">${escapeHtml(p.button || 'Ouvrir')}</button>
    `;
    grid.appendChild(card);
  });

  // bind open events
  document.querySelectorAll('.open-pack').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const pack = e.currentTarget.dataset.pack;
      openFormForPack(pack);
    });
  });
}

/* ---- open form with prefill ---- */
function openFormForPack(packName){
  document.getElementById('packFormSection').classList.remove('hidden');
  document.getElementById('packName').value = packName;
  document.getElementById('formTitle').innerText = `Pack — ${packName}`;
  window.scrollTo({top: document.getElementById('packFormSection').offsetTop - 80, behavior:'smooth'});
}

/* ---- hide form ---- */
function hideForm(){
  document.getElementById('packFormSection').classList.add('hidden');
  document.getElementById('packForm').reset();
}

/* ---- handle submit (email / whatsapp / display) ---- */
function handleFormSubmit(e){
  e.preventDefault();
  const form = e.currentTarget;
  const pack = document.getElementById('packName').value;
  const name = document.getElementById('name').value || '';
  const email = document.getElementById('email').value || '';
  const phone = document.getElementById('phone').value || '';
  const details = document.getElementById('details').value || '';
  const mode = form.querySelector('input[name="mode"]:checked').value;

  const subject = `Demande pack: ${pack}`;
  const body = `Pack: ${pack}\nNom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\n\nDétails:\n${details}`;

  if(mode === 'email'){
    const mailto = `mailto:contact@e-meta.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    showFormMsg('Email client ouvert.');
  } else if(mode === 'whatsapp'){
    const text = `${subject}\n${body}`;
    const wa = `https://wa.me/${CONTACT_WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(wa,'_blank');
    showFormMsg('WhatsApp ouvert.');
  } else {
    showFormMsg('Merci — votre demande a été enregistrée et s’affichera ci-dessous :');
    // show result inside the page (simple)
    const disp = document.createElement('pre');
    disp.textContent = body;
    disp.style.background = '#fff';
    disp.style.padding = '12px';
    disp.style.borderRadius = '8px';
    disp.style.marginTop = '12px';
    document.getElementById('formMsg').appendChild(disp);
  }

  // keep form open for user to see result for display mode; otherwise hide after short delay
  if(mode !== 'display'){
    setTimeout(()=>{ hideForm(); }, 900);
  }
}

function showFormMsg(msg){
  const el = document.getElementById('formMsg');
  el.textContent = msg;
}

/* small helper to avoid XSS when injecting pack names */
function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, s=> ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}
