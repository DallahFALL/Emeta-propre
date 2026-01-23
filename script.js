________________________________________
script.js
(function(){
  'use strict';

  const LANG_KEY = 'emeta_lang';
  const defaultLang = localStorage.getItem(LANG_KEY) || (navigator.language||'fr').substr(0,2) || 'fr';
  let lang = defaultLang in window.I18N ? defaultLang : 'fr';

  function setLang(l){
    lang = l;
    localStorage.setItem(LANG_KEY,l);
    document.documentElement.lang = l;
    document.documentElement.dir = (l==='ar') ? 'rtl' : 'ltr';
    applyTranslations();
    fillSelects();
    updatePrivacyPdfLink();
  }

  function applyTranslations(){
    const dict = window.getI18n(lang);
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(dict[key]) el.textContent = dict[key];
    });
    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key = el.getAttribute('data-i18n-placeholder');
      if(dict[key]) el.placeholder = dict[key];
    });
  }

  function fillSelects(){
    const dict = window.getI18n(lang);
    // domain options
    const domain = document.getElementById('domain');
    if(domain && dict['field.domain.options']){
      domain.innerHTML = '';
      const ph = document.createElement('option'); ph.value=''; ph.textContent = dict['field.domain.placeholder']; domain.appendChild(ph);
      dict['field.domain.options'].forEach(opt=>{ const o = document.createElement('option'); o.value = opt; o.textContent = opt; domain.appendChild(o); });
    }
    // decisionType
    const dt = document.getElementById('decisionType');
    if(dt && dict['field.decisionType.options']){
      dt.innerHTML = '';
      const ph = document.createElement('option'); ph.value=''; ph.textContent = dict['field.decisionType.placeholder']; dt.appendChild(ph);
      dict['field.decisionType.options'].forEach(opt=>{ const o = document.createElement('option'); o.value = opt; o.textContent = opt; dt.appendChild(o); });
    }
  }

  function updatePrivacyPdfLink(){
    const map = {
      fr: 'pdf/eMETA_Privacy_CGU_FR.pdf',
      en: 'pdf/eMETA_Privacy_CGU_EN.pdf',
      es: 'pdf/eMETA_Privacy_CGU_ES.pdf',
      ar: 'pdf/eMETA_Privacy_CGU_AR.pdf'
    };
    const linkEls = document.querySelectorAll('[data-privacy-pdf]');
    linkEls.forEach(a=>{ a.href = map[lang] || map['fr']; });
  }

  // menu toggle
  function setupMenu(){
    const burger = document.getElementById('burgerBtn');
    const nav = document.getElementById('mainNav');
    if(!burger || !nav) return;
    burger.addEventListener('click', ()=>{
      const open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open? 'true':'false');
      nav.style.display = open? 'flex':'none';
    });
  }

  // language selector
  function setupLangSelect(){
    const sel = document.getElementById('langSelect');
    if(!sel) return;
    sel.value = lang;
    sel.addEventListener('change', e=>{ setLang(e.target.value);
      // open privacy in same language if user was on privacy
      if(location.pathname.endsWith('privacy.html')){
        location.search = '?lang='+e.target.value;
      }
    });
  }

  // Start CTAs
  function setupCTAs(){
    const start = document.getElementById('startBtn');
    if(start){ start.addEventListener('click', ()=>{ document.getElementById('form')?.scrollIntoView({behavior:'smooth'}); }); }
  }

  // on load
  document.addEventListener('DOMContentLoaded', ()=>{
    setupMenu();
    setupLangSelect();
    setupCTAs();
    setLang(lang);
  });

})();
