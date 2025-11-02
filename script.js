// script.js (Option B: external packs.json + lang/*)
// Usage: drop at root, lang files in /lang/, packs.json at root.

const LANG_PATH = 'lang/';
const PACKS_PATH = 'packs.json';
let LANG = localStorage.getItem('e_meta_lang') || 'fr';
let translations = {};
let packs = [];

document.addEventListener('DOMContentLoaded', async () => {
  // set selector (if exists)
  const sel = document.getElementById('langSelect');
  if(sel){
    sel.value = LANG;
    sel.addEventListener('change', (e)=>{
      LANG = e.target.value;
      localStorage.setItem('e_meta_lang', LANG);
      loadTranslations().then(()=> renderAll());
    });
  }

  await loadTranslations();
  await loadPacks();
  renderAll();
  setupModal();
  document.getElementById('discoverBtn')?.addEventListener('click', ()=> location.href='#packs');
  document.getElementById('contactBtn')?.addEventListener('click', ()=> openWhatsApp("+221782607212", "Bonjour, je veux en savoir plus sur e-META"));
});

// load language file
async function loadTranslations(){
  try{
    const res = await fetch(`${LANG_PATH}${LANG}.json`);
    if(!res.ok) throw new Error('Lang fetch failed');
    translations = await res.json();
  }catch(err){
    console.warn('Could not load language file, using defaults', err);
    translations = {};
  }
}

// load packs.json
async function loadPacks(){
  try{
    const res = await fetch(PACKS_PATH);
    if(!res.ok) throw new Error('packs fetch failed');
    packs = await res.json();
  }catch(err){
    console.warn('Could not load packs.json; falling back to empty list', err);
    packs = [];
  }
}

// apply translations to DOM nodes
function applyTranslations(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(translations && translations[key]) el.textContent = translations[key];
  });
}

// render packs grid
function renderPacks(){
  const grid = document.getElementById('packsGrid');
  if(!grid) return;
  grid.innerHTML = '';
  if(!packs || packs.length === 0){
    grid.innerHTML = `<p style="color:#666">${translations['packs_empty'] || 'Aucun pack disponible.'}</p>`;
    return;
  }
  packs.forEach(p=>{
    const title = (p.title && (p.title[LANG] || p.title.fr || p.id)) ;
    const desc = (p.desc && (p.desc[LANG] || p.desc.fr || '')) ;
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `<h3>${escapeHtml(title)}</h3><p class="muted">${escapeHtml(desc)}</p><p><a href="#" class="open-pack" data-id="${p.id}">${translations['open'] || 'Ouvrir'}</a></p>`;
    grid.appendChild(card);
  });

  document.querySelectorAll('.open-pack').forEach(a=>{
    a.addEventListener('click', (ev)=>{
      ev.preventDefault();
      const id = a.dataset.id;
      const pack = packs.find(x=>x.id===id);
      openModalForPack(pack);
    });
  });
}

// render all (translations + packs)
function renderAll(){
  applyTranslations();
  renderPacks();
}

// modal logic
function setupModal(){
  const modal = document.getElementById('formModal');
  if(!modal) return;
  modal.setAttribute('aria-hidden','true');
  document.getElementById('modalClose')?.addEventListener('click', closeModal);
  document.getElementById('formCancel')?.addEventListener('click', closeModal);
  document.getElementById('packForm')?.addEventListener('submit', handleFormSubmit);
}

function openModalForPack(pack){
  if(!pack) return alert('Pack introuvable');
  document.getElementById('packName').textContent = pack.title?.[LANG] || pack.title?.fr || pack.id;
  const modal = document.getElementById('formModal');
  modal.setAttribute('aria-hidden','false');
  document.getElementById('packForm').dataset.pack = pack.id;
  document.getElementById('packForm').reset();
  document.getElementById('resultArea').hidden = true;
}

function closeModal(){
  const modal = document.getElementById('formModal');
  modal && modal.setAttribute('aria-hidden','true');
}

function handleFormSubmit(e){
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const payload = Object.fromEntries(data.entries());
  const packId = form.dataset.pack || 'unknown';
  const pack = packs.find(p=>p.id===packId) || {title:{fr:'Pack',en:'Pack'}};
  const bodyText = `Demande e-META: pack=${packId}\nNom: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nDétails:\n${payload.details}`;
  const mode = payload.delivery || 'email';

  if(mode === 'email'){
    const to = 'contact@e-meta.app';
    const subject = encodeURIComponent(`${translations['email_subject_prefix'] || 'Demande pack'} ${pack.title?.[LANG] || pack.title?.fr || ''}`);
    const body = encodeURIComponent(bodyText);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    closeModal();
    return;
  }

  if(mode === 'whatsapp'){
    const phone = (payload.phone && payload.phone.trim()) ? payload.phone : '+221782607212';
    const phoneNormalized = phone.replace(/[^\d]/g,'');
    const msg = encodeURIComponent(bodyText);
    window.open(`https://wa.me/${phoneNormalized}?text=${msg}`, '_blank');
    closeModal();
    return;
  }

  if(mode === 'inline'){
    const resultArea = document.getElementById('resultArea');
    const content = document.getElementById('resultContent');
    const short = `${pack.title?.[LANG] || pack.title?.fr || ''} — ${translations['inline_sample'] || 'Synthèse initiale: clarifier l’objectif, définir le budget et prioriser.'}`;
    content.textContent = short;
    resultArea.hidden = false;
    return;
  }
}

// helper functions
function openWhatsApp(phone, text){
  const phoneClean = phone.replace(/[^\d]/g,'');
  window.open(`https://wa.me/${phoneClean}?text=${encodeURIComponent(text)}`, '_blank');
}
function escapeHtml(s){ if(!s) return ''; return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
