document.addEventListener('DOMContentLoaded', ()=>{
  'use strict';

  const STORAGE_KEY = 'emeta_lang';
  const DEFAULT_LANG = 'fr';
  const RTL_LANGS = ['ar'];

  function resolveLang(){
    return new URLSearchParams(location.search).get('lang') || localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang){
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';

    // enable rtl stylesheet if present
    const rtl = document.getElementById('rtlStylesheet');
    if(rtl){ rtl.disabled = !RTL_LANGS.includes(lang); }
  }

  function populateSelects(dict){
    // domain
    const domain = document.getElementById('domain');
    if(domain && Array.isArray(dict['field.domain.options'])){
      domain.innerHTML = '<option value="">' + (dict['field.domain.placeholder'] || '') + '</option>';
      dict['field.domain.options'].forEach(opt=>{ const o=document.createElement('option'); o.value=opt; o.textContent=opt; domain.appendChild(o); });
    }
    // decisionType
    const dt = document.getElementById('decisionType');
    if(dt && Array.isArray(dict['field.decisionType.options'])){
      dt.innerHTML = '<option value="">' + (dict['field.decisionType.placeholder'] || '') + '</option>';
      dict['field.decisionType.options'].forEach(opt=>{ const o=document.createElement('option'); o.value=opt; o.textContent=opt; dt.appendChild(o); });
    }
  }

  function applyI18n(lang){
    if(!window.I18N || !window.I18N[lang]) return;
    const dict = window.I18N[lang];

    // text nodes
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const k = el.getAttribute('data-i18n');
      if(dict[k]) el.textContent = dict[k];
    });

    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const k = el.getAttribute('data-i18n-placeholder');
      if(dict[k]) el.placeholder = dict[k];
    });

    // populate selects that depend on i18n arrays
    populateSelects(dict);

    // update privacy/pdf link text if present
    const pdfLink = document.getElementById('pdfPrivacyLink');
    if(pdfLink && dict['privacy.download']) pdfLink.textContent = dict['privacy.download'];

    // update title
    if(dict['meta.title']) document.title = dict['meta.title'];
  }

  // initialize
  const lang = resolveLang();
  setLang(lang);
  applyI18n(lang);

  // sync language selectors (header and footer and privacy page select if present)
  const headerSel = document.getElementById('langSelect');
  const headerSel2 = document.getElementById('langSelectPrivacy');
  [headerSel, headerSel2].forEach(sel=>{
    if(!sel) return;
    sel.value = lang;
    sel.addEventListener('change', ()=>{
      const v = sel.value;
      setLang(v);
      applyI18n(v);
      // update privacy links in header/footer to include lang param
      document.querySelectorAll('a[href$="privacy.html"]').forEach(a=>{
        try{ const u=new URL(a.href, location.href); u.searchParams.set('lang', v); a.href = u.toString(); }catch(e){}
      });
      // reflect in URL without reload
      try{ const u = new URL(location.href); u.searchParams.set('lang', v); history.replaceState({}, '', u.toString()); }catch(e){}
    });
  });

  // burger
  const burger = document.getElementById('burgerBtn');
  const nav = document.getElementById('mainNav');
  if(burger && nav){
    burger.addEventListener('click', ()=>{
      const open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=>{ nav.classList.remove('is-open'); if(burger) burger.setAttribute('aria-expanded','false'); }));
  }

  // small UI niceties: start button scroll to form
  const start = document.getElementById('startBtn');
  if(start){ start.addEventListener('click', ()=>{ document.getElementById('form').scrollIntoView({behavior:'smooth', block:'start'}); }); }

  // when privacy page, ensure pdf link updated
  if(location.pathname && location.pathname.endsWith('privacy.html')){
    const pdfMap = { fr: 'docs/privacy_fr.pdf', en: 'docs/privacy_en.pdf', es: 'docs/privacy_es.pdf', ar: 'docs/privacy_ar.pdf' };
    const pdf = document.getElementById('pdfPrivacyLink');
    const cur = resolveLang();
    if(pdf && pdfMap[cur]) pdf.href = pdfMap[cur];
  }

});
