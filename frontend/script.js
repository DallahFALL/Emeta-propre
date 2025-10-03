// script.js - minimal i18n + handlers
(async function(){
  const defaultLang = localStorage.getItem('e_meta_lang') || 'fr';
  const select = document.getElementById('lang-select');
  select.value = defaultLang;

  async function loadLang(lang){
    try{
      const res = await fetch(`lang/${lang}.json`);
      if(!res.ok) throw new Error('lang not found');
      const data = await res.json();
      applyLang(data);
      localStorage.setItem('e_meta_lang', lang);
    }catch(e){
      console.warn('i18n load failed', e);
    }
  }

  function applyLang(dict){
    // small replacements
    const title = document.getElementById('hero-title');
    const subtitle = document.getElementById('hero-sub');
    const discover = document.getElementById('discover-btn');
    const herowa = document.getElementById('hero-wa');
    if(dict.site_title) document.title = dict.site_title + ' — Assistant IA';
    if(dict.discover_packs) discover.textContent = dict.discover_packs;
    if(dict.contact_whatsapp) herowa.textContent = dict.contact_whatsapp;
    // nav text
    document.querySelectorAll('.nav a').forEach(a=>{
      if(a.getAttribute('href') === '#packs') a.textContent = dict.discover_packs || a.textContent;
      if(a.getAttribute('href') === '#about') a.textContent = dict.about_title || a.textContent;
      if(a.getAttribute('href') === '#faq') a.textContent = dict.faq_title || a.textContent;
      if(a.getAttribute('href') === '#contact') a.textContent = dict.contact_title || a.textContent;
    });
    // cards open text
    document.querySelectorAll('.card-btn').forEach(btn=>{
      btn.textContent = dict.open_btn || btn.textContent;
    });
  }

  select.addEventListener('change', ()=>loadLang(select.value));
  await loadLang(defaultLang);

  // WhatsApp CTA: open chat (configure in server later)
  document.getElementById('cta-whatsapp').addEventListener('click', ()=>window.open('https://wa.me/221782607212','_blank'));
  document.getElementById('hero-wa').addEventListener('click', ()=>window.open('https://wa.me/221782607212','_blank'));
})();
