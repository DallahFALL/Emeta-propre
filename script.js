/* script.js — e-META minimal pro (coller en entier) */
(function(){
  "use strict";
  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";

  function setHtmlLang(lang){
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
    localStorage.setItem(STORAGE_KEY, lang);
    // toggle rtl stylesheet
    const rtl = document.getElementById('rtlStylesheet');
    if(rtl) rtl.disabled = (lang !== "ar");
  }

  function populateSelectOptions(){
    // domain select
    const domainOptions = (window.I18N && window.I18N[langSelected] && window.I18N[langSelected]["field.domain.options"]) || [];
    const typeOptions = (window.I18N && window.I18N[langSelected] && window.I18N[langSelected]["field.decisionType.options"]) || [];

    const domainSel = document.getElementById('domain');
    const typeSel = document.getElementById('decisionType');

    if(domainSel && domainOptions.length){
      // clear existing options except first placeholder
      while(domainSel.options.length > 1) domainSel.remove(1);
      domainOptions.forEach(opt => {
        const o = document.createElement('option'); o.value = opt; o.textContent = opt; domainSel.appendChild(o);
      });
    }
    if(typeSel && typeOptions.length){
      while(typeSel.options.length > 1) typeSel.remove(1);
      typeOptions.forEach(opt => {
        const o = document.createElement('option'); o.value = opt; o.textContent = opt; typeSel.appendChild(o);
      });
    }
  }

  function translatePage(){
    const lang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    setHtmlLang(lang);

    // use provided I18N object
    const dict = window.I18N && window.I18N[lang] ? window.I18N[lang] : window.I18N[DEFAULT_LANG];

    // text nodes mapping (data-i18n attributes)
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(!key) return;
      if(dict[key]) el.textContent = dict[key];
    });

    // placeholders: data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key = el.getAttribute('data-i18n-placeholder');
      if(dict[key]) el.placeholder = dict[key];
    });

    // legends and option arrays population
    populateSelectOptions();

    // update help icons text if empty
    document.querySelectorAll('.help-icon').forEach(icon=>{
      if(icon.textContent.trim()===''){
        if(icon.classList.contains('help-privacy')) icon.textContent = dict['help.privacy'] ? dict['help.privacy'].slice(0,1) : 'P';
        if(icon.classList.contains('help-guide')) icon.textContent = dict['help.guide'] ? dict['help.guide'].slice(0,1) : 'G';
      }
    });

    // update privacy pdf links
    document.querySelectorAll('a[href$="privacy.html"]').forEach(a=>{
      const url = new URL(a.href, location.href);
      url.searchParams.set('lang', lang);
      a.href = url.toString();
    });

    // update privacy PDF button if present
    const pdfMap = {
      fr: "docs/privacy_fr.pdf",
      en: "docs/privacy_en.pdf",
      es: "docs/privacy_es.pdf",
      ar: "docs/privacy_ar.pdf",
    };
    const pdfLink = document.getElementById('privacyPdf') || document.getElementById('pdfPrivacyLink');
    if(pdfLink && pdfMap[lang]) pdfLink.href = pdfMap[lang];
  }

  // burger menu
  function bindMenu(){
    const burger = document.getElementById('burgerBtn');
    const nav = document.getElementById('mainNav');
    if(!burger || !nav) return;
    burger.addEventListener('click', ()=>{
      const open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // lang select
  function bindLangSelect(){
    const sel = document.getElementById('langSelect');
    if(!sel) return;
    sel.value = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    sel.addEventListener('change', (e)=>{
      setHtmlLang(e.target.value);
      translatePage();
      // if user clicked privacy, ensure pages open with the new lang
    });
  }

  // center hero texts: just ensure CSS sets text-align:center; already in style.css
  document.addEventListener('DOMContentLoaded', function(){
    bindMenu();
    bindLangSelect();
    translatePage();

    // start button
    const startBtn = document.getElementById('startBtn');
    if(startBtn){
      startBtn.addEventListener('click', ()=> document.querySelector('#form')?.scrollIntoView({behavior:'smooth'}));
    }

    // simple form handler (replace with real submission)
    const form = document.getElementById('emetaForm');
    if(form){
      form.addEventListener('submit', function(e){
        e.preventDefault();
        if(!form.checkValidity()){ form.reportValidity(); return; }
        // TODO: replace alert with real submission
        alert((document.documentElement.lang === 'fr') ? 'Formulaire envoyé (simulation)' : 'Form submitted (simulation)');
      });
    }
  });

  // helper: set initial selection and global var
  const langSelected = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;

})();
