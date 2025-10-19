// script.js - charge les fichiers lang/*.json et applique les textes
const langs = ['fr','en','es','ar'];
const langSelect = document.getElementById('langSelect');
const defaultLang = localStorage.getItem('siteLang') || 'fr';
let currentLang = defaultLang;
const i18nElems = document.querySelectorAll('[data-i18n]');

function buildLangSelect(){
  langs.forEach(l=>{
    const opt = document.createElement('option');
    opt.value = l;
    opt.textContent = l.toUpperCase();
    if(l===currentLang) opt.selected=true;
    langSelect.appendChild(opt);
  });
}
async function loadLang(lang){
  try{
    const res = await fetch(`lang/${lang}.json`);
    if(!res.ok) throw new Error('lang not found');
    const json = await res.json();
    i18nElems.forEach(el=>{
      const key = el.dataset.i18n;
      if(key && json[key]) el.textContent = json[key];
    });
  }catch(e){
    console.warn('Failed to load lang',lang,e);
  }
}

langSelect.addEventListener('change', e=>{
  currentLang = e.target.value;
  localStorage.setItem('siteLang', currentLang);
  loadLang(currentLang);
});

// burger menu toggle
document.getElementById('burgerBtn').addEventListener('click', ()=>{
  const nav = document.getElementById('mainNav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// WhatsApp buttons quick-link
async function whatsLink(){
  // téléphone par défaut - remplacer si besoin
  const phone = '+221782607212';
  return `https://wa.me/${phone.replace(/\D/g,'')}`;
}
document.getElementById('whatsappBtn').addEventListener('click', async ()=>{
  window.open(await whatsLink(), '_blank');
});
document.getElementById('heroWhatsapp').addEventListener('click', async ()=>{
  window.open(await whatsLink(), '_blank');
});

// init
buildLangSelect();
loadLang(currentLang);

// Make pack links preserve language
document.querySelectorAll('.card-btn').forEach(a=>{
  a.addEventListener('click', (e)=>{
    // allow default navigation but append ?lang=xx
    const url = new URL(a.href, location.href);
    url.searchParams.set('lang', currentLang);
    a.href = url.toString();
  });
});
