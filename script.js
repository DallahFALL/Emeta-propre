// script.js - language loader, dynamic packs, modal handling, simple form submit
const LANG_PATH = 'frontend/lang/';
const DEFAULT_LANG = 'fr';
let LANG = DEFAULT_LANG;
let translations = {};

// DOM refs
const langSelect = document.getElementById('langSelect');
const packsGrid = document.getElementById('packsGrid');
const faqList = document.getElementById('faqList');
const faqFooter = document.getElementById('faqFooter');
const discoverBtn = document.getElementById('discoverPacks');
const modal = document.getElementById('formModal');
const closeModal = document.getElementById('closeModal');
const packForm = document.getElementById('packForm');
const packIdInput = document.getElementById('packId');
const formTitle = document.getElementById('formTitle');
const formFeedback = document.getElementById('formFeedback');

// helper to set text of elements with data-i18n
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if (key && translations[key]) el.innerText = translations[key];
  });
  // placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && translations[key]) el.placeholder = translations[key];
  });
  // update page lang attribute for RTL
  document.documentElement.lang = LANG;
}

// load JSON translation file
async function loadLang(lang=DEFAULT_LANG){
  try{
    const res = await fetch(`${LANG_PATH}${lang}.json`, {cache:'no-store'});
    if(!res.ok) throw new Error('lang not found');
    translations = await res.json();
    LANG = lang;
    applyTranslations();
    buildPacks();
    buildFAQ();
    buildFooterFAQ();
    // update select
    if(langSelect) langSelect.value = lang;
  }catch(e){
    console.error('Could not load lang', e);
  }
}

// build packs from translations.packs (array)
function buildPacks(){
  packsGrid.innerHTML = '';
  const packs = translations['packs.list'] || [];
  for(const p of packs){
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      </div>
      <div><button class="open-btn" data-pack="${p.id}">${translations['buttons.open']||'Ouvrir'}</button></div>
    `;
    packsGrid.appendChild(card);
  }
  // attach click handlers
  packsGrid.querySelectorAll('.open-btn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const packId = e.currentTarget.dataset.pack;
      openPackForm(packId);
    });
  });
}

// FAQ build
function buildFAQ(){
  if(!faqList) return;
  faqList.innerHTML = '';
  const fa = translations['faq.items'] || [];
  for(const f of fa){
    const li = document.createElement('li');
    li.textContent = f;
    faqList.appendChild(li);
  }
}

// footer FAQ shorter
function buildFooterFAQ(){
  if(!faqFooter) return;
  faqFooter.innerHTML = '';
  const fa = translations['faq.items'] || [];
  for(let i=0;i<Math.min(2,fa.length);i++){
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#faq';
    a.textContent = fa[i];
    li.appendChild(a);
    faqFooter.appendChild(li);
  }
}

// open modal and prefill based on pack
function openPackForm(packId){
  packIdInput.value = packId;
  // set form title + request placeholder from pack if available
  const pack = (translations['packs.list']||[]).find(x=>x.id===packId);
  if(pack){
    formTitle.innerText = `${pack.title} — ${translations['form.title']||'Demande'}`;
    document.getElementById('userRequest').placeholder = pack.suggestion || translations['form.requestPlaceholder'] || '';
  } else {
    formTitle.innerText = translations['form.title']||'Pack — Demande';
    document.getElementById('userRequest').placeholder = translations['form.requestPlaceholder'] || '';
  }

  modal.setAttribute('aria-hidden','false');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// close modal
function closePackModal(){
  modal.setAttribute('aria-hidden','true');
  modal.style.display = 'none';
  document.body.style.overflow = '';
  formFeedback.innerText = '';
  packForm.reset();
}

// form submit (simple demo: show feedback and reset)
packForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = new FormData(packForm);
  const obj = {};
  for(const [k,v] of data.entries()) obj[k]=v;
  // basic validation
  if(!obj.request || !obj.email){
    formFeedback.innerText = translations['form.errors.missing'] || 'Veuillez remplir les champs demandés.';
    return;
  }
  // simulate submission
  formFeedback.innerText = translations['form.sending'] || 'Envoi en cours...';
  setTimeout(()=>{
    formFeedback.innerText = translations['form.sent'] || 'Merci — nous revenons vers vous sous peu.';
    setTimeout(()=>closePackModal(),1500);
  },900);
});

// UI events
document.getElementById('closeModal').addEventListener('click', closePackModal);
document.getElementById('cancelForm').addEventListener('click', closePackModal);
discoverPacks && discoverPacks.addEventListener('click', ()=> location.hash = '#packs');
document.getElementById('whatsBtn').addEventListener('click', ()=> {
  // open WhatsApp chat (example)
  window.open('https://wa.me/221782607212', '_blank');
});

// language selection
langSelect.addEventListener('change', (e)=>{
  const lang = e.target.value;
  loadLang(lang);
});

// clicking outside modal to close
modal.addEventListener('click', (e)=>{
  if(e.target === modal) closePackModal();
});

// initial load
loadLang(DEFAULT_LANG);
