// simple language loader + UI behavior
const LANG_PATH = 'frontend/lang'; // adjust if needed
const available = ['fr','en','es','ar'];
const langSelect = document.getElementById('langSelect');
const packsGrid = document.getElementById('packsGrid');
const whatsappBtn = document.getElementById('whatsappBtn');

// fill language selector
available.forEach(code=>{
  const opt = document.createElement('option');
  opt.value = code; opt.text = code.toUpperCase();
  langSelect.appendChild(opt);
});

// load default language from localStorage or browser
const defaultLang = localStorage.getItem('lang') || (navigator.language||'fr').slice(0,2);
langSelect.value = available.includes(defaultLang) ? defaultLang : 'fr';

async function loadLang(code){
  try{
    const url = `${LANG_PATH}/${code}.json`;
    const res = await fetch(url);
    if(!res.ok) throw new Error('Lang load failed');
    const dict = await res.json();
    applyTranslations(dict, code);
    localStorage.setItem('lang', code);
    document.documentElement.lang = code;
  }catch(e){
    console.warn('loadLang error',e);
  }
}

function applyTranslations(dict,code){
  // translate data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(dict[key]) el.textContent = dict[key];
  });
  // translate cards (keys attr)
  document.querySelectorAll('[data-key-title]').forEach(el=>{
    const key = el.getAttribute('data-key-title');
    if(dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-key-desc]').forEach(el=>{
    const key = el.getAttribute('data-key-desc');
    if(dict[key]) el.textContent = dict[key];
  });
  // update pack buttons text if present
  document.querySelectorAll('.open-pack').forEach(btn=>{
    if(dict['pack.open']) btn.textContent = dict['pack.open'];
  });
  // for dir RTL
  if(code === 'ar') document.documentElement.setAttribute('lang','ar');
  else document.documentElement.setAttribute('lang',code);
}

// language change
langSelect.addEventListener('change',()=> loadLang(langSelect.value));
loadLang(langSelect.value); // initial load

// menu toggle for mobile
const menuToggle = document.getElementById('menuToggle');
menuToggle.addEventListener('click',()=>{
  document.getElementById('mainNav').classList.toggle('open');
});

// PACK modal logic
const modal = document.getElementById('packModal');
const modalTitle = document.getElementById('modalTitle');
const selectedPackInput = document.getElementById('selectedPack');
const closeModal = document.getElementById('closeModal');
const cancelForm = document.getElementById('cancelForm');
const packForm = document.getElementById('packForm');

document.querySelectorAll('.open-pack').forEach(btn=>{
  btn.addEventListener('click', e=>{
    const packName = btn.dataset.pack || btn.closest('.card')?.querySelector('.card-title')?.textContent || 'Pack';
    openModal(packName);
  });
});

function openModal(pack){
  selectedPackInput.value = pack;
  modalTitle.textContent = `Pack — ${pack}`;
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
  // reset form
  packForm.reset();
}

function closeModalFn(){
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}
closeModal.addEventListener('click', closeModalFn);
cancelForm.addEventListener('click', closeModalFn);

// submit handling: simple behavior: build mailto or wa message or display
packForm.addEventListener('submit', e=>{
  e.preventDefault();
  const fd = new FormData(packForm);
  const obj = Object.fromEntries(fd.entries());
  const mode = fd.get('mode') || 'email';
  const summary = `Pack: ${obj.pack}\nTitre: ${obj.need}\nBudget: ${obj.budget}\nTaille équipe: ${obj.teamSize}\nNom: ${obj.name}\nEmail: ${obj.email}\nTéléphone: ${obj.phone}\nDetails:\n${obj.details}`;

  if(mode === 'whatsapp'){
    const phone = obj.phone.replace(/\s+/g,'').replace(/^\+/, '');
    const text = encodeURIComponent(summary);
    const waUrl = `https://wa.me/${phone || '221782607212'}?text=${text}`;
    window.open(waUrl,'_blank');
    showFeedback('Message WhatsApp ouvert.');
    closeModalFn();
    return;
  }

  if(mode === 'email'){
    const to = obj.email || 'contact@e-meta.app';
    const subject = encodeURIComponent(`Demande e-META: ${obj.pack}`);
    const body = encodeURIComponent(summary);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    showFeedback('Client mail ouvert.');
    closeModalFn();
    return;
  }

  // display - show short result
  showFeedback('Restitution affichée ci-dessous : (exemple)');
  // simple display example
  const displayEl = document.createElement('div');
  displayEl.style.padding = '12px';
  displayEl.style.background = '#fff';
  displayEl.style.borderRadius = '8px';
  displayEl.style.marginTop = '12px';
  displayEl.textContent = summary;
  packForm.appendChild(displayEl);
});

function showFeedback(msg){
  const fb = document.getElementById('formFeedback');
  fb.textContent = msg;
  setTimeout(()=> fb.textContent = '', 4000);
}

// whatsapp top button
whatsappBtn.addEventListener('click', ()=>{
  window.open('https://wa.me/221782607212','_blank');
});
