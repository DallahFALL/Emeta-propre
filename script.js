/* e-META — script.js: menu, i18n glue, form stub */
(function(){
  'use strict';

  function ready(fn){ if(document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }

  ready(function(){
    // language detection & persistence
    const urlParams = new URLSearchParams(location.search);
    const urlLang = urlParams.get('lang');
    const saved = localStorage.getItem('emeta_lang');
    const lang = urlLang || saved || 'fr';
    setLang(lang);

    // burger menu
    const burger = document.getElementById('burgerBtn');
    const nav = document.getElementById('mainNav');
    if(burger && nav){
      burger.addEventListener('click', ()=>{
        const open = nav.classList.toggle('open');
        burger.setAttribute('aria-expanded', open? 'true':'false');
      });
    }

    // populate selects from I18N arrays (if present)
    function populateSelect(id, optionsKey, placeholderKey){
      const sel = document.getElementById(id);
      if(!sel) return;
      // clear
      sel.innerHTML = '';
      const dict = (window.I18N && window.I18N[lang]) || {};
      const placeholder = dict[placeholderKey] || '';
      const opts = dict[optionsKey] || [];
      const empty = document.createElement('option');
      empty.value = '';
      empty.textContent = placeholder;
      sel.appendChild(empty);
      opts.forEach(o=>{
        const el = document.createElement('option');
        el.value = o;
        el.textContent = o;
        sel.appendChild(el);
      });
    }

    populateSelect('domain','field.domain.options','field.domain.placeholder');
    populateSelect('decisionType','field.decisionType.options','field.decisionType.placeholder');

    // wire language select UI
    const langSelect = document.getElementById('langSelect');
    if(langSelect){
      langSelect.value = lang;
      langSelect.addEventListener('change', (e)=>{
        const newLang = e.target.value;
        setLang(newLang);
        // reload page to reflect new locale file where needed; preserve hash
        const url = new URL(location.href);
        url.searchParams.set('lang', newLang);
        // navigate without losing state
        location.href = url.toString();
      });
    }


    // start button scroll
    const startBtn = document.getElementById('startBtn');
    if(startBtn){
      startBtn.addEventListener('click', ()=>{
        document.querySelector('#form')?.scrollIntoView({behavior:'smooth',block:'start'});
      });
    }

    // help icons labels fallback
    document.querySelectorAll('.help-icon').forEach(icon=>{
      if(icon && icon.textContent.trim()===''){
        icon.textContent = icon.classList.contains('help-privacy')? 'P': 'G';
      }
    });

    // form submit stub
    const form = document.getElementById('emetaForm');
    if(form){
      form.addEventListener('submit', (e)=>{
        e.preventDefault();
        if(!form.checkValidity()){ form.reportValidity(); return; }
        alert((lang==='fr')? 'Formulaire envoyé (simulation)' : (lang==='en')? 'Form submitted (simulation)' : 'Form submitted');
      });
    }

    // set correct privacy & guide links based on lang
    const helpPrivacy = document.getElementById('helpPrivacy');
    const helpGuide = document.getElementById('helpGuide');
    const privacyLink = document.getElementById('privacyLink');
    const footerPrivacy = document.getElementById('footerPrivacy');
    const map = { fr: 'privacy_fr.html', en:'privacy_en.html', es:'privacy_es.html', ar:'privacy_ar.html' };
    const guideMap = { fr: 'guide_fr.html', en:'guide_en.html', es:'guide_es.html', ar:'guide_ar.html' };
    function setHelpLinks(l){
      const p = map[l]||map['fr'];
      const g = guideMap[l]||guideMap['fr'];
      if(helpPrivacy) helpPrivacy.href = p;
      if(helpGuide) helpGuide.href = g;
      if(privacyLink) privacyLink.href = p;
      if(footerPrivacy) footerPrivacy.href = p;
    }
    setHelpLinks(lang);

    // apply translations to DOM (text and placeholders)
    applyTranslations(lang);

    // utility functions
    function setLang(l){
      localStorage.setItem('emeta_lang', l);
      document.documentElement.lang = l;
      document.documentElement.dir = (l === 'ar') ? 'rtl' : 'ltr';
    }

    function applyTranslations(l){
      const dict = (window.I18N && window.I18N[l]) || (window.I18N && window.I18N['fr']) || {};
      // text
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const key = el.getAttribute('data-i18n');
        if(dict[key]) el.textContent = dict[key];
      });
      // placeholders
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
        const key = el.getAttribute('data-i18n-placeholder');
        if(dict[key]) el.placeholder = dict[key];
      });

      // if selects are empty (populated earlier), ensure first option uses translated placeholder
      ['domain','decisionType'].forEach(id=>{
        const s = document.getElementById(id);
        if(s && s.options && s.options.length>0){
          const key = (id==='domain')? 'field.domain.placeholder':'field.decisionType.placeholder';
          if(dict[key]) s.options[0].textContent = dict[key];
        }
      });

      // help icons content
      document.querySelectorAll('.help-icon').forEach(icon=>{
        const isPrivacy = icon.classList.contains('help-privacy');
        const key = isPrivacy? 'help.privacy':'help.guide';
        if(dict[key]) icon.title = dict[key];
      });
    }

  }); // ready
})();
