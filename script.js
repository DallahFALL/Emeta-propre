// e-META — script.js (lightweight)
(function(){
  'use strict';
  // Wait DOM
  function ready(fn){ if(document.readyState!='loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }

  ready(function(){
    // --- Elements
    const burger = document.getElementById('burgerBtn');
    const nav = document.getElementById('mainNav');
    const langBtn = document.getElementById('langBtn');
    const langList = document.getElementById('langList');
    const startBtn = document.getElementById('startBtn');
    const privacyLinks = document.querySelectorAll('a[href$="privacy.html"]');

    // --- Burger menu toggle
    if(burger && nav){
      burger.addEventListener('click', ()=>{
        const open = nav.classList.toggle('open');
        burger.setAttribute('aria-expanded', open? 'true':'false');
      });
    }

    // --- Language selector
    function setLang(lang){
      try{ localStorage.setItem('emeta_lang', lang); }catch(e){}
      document.documentElement.lang = lang;
      document.documentElement.dir = (lang==='ar')? 'rtl':'ltr';
      // update visible lang label
      if(langBtn) langBtn.textContent = (lang||'fr').toUpperCase() + ' ▾';
      // apply translations (lightweight)
      if(window.getI18n){ applyTranslations(window.getI18n(lang)); }
      // ensure privacy links get lang param
      document.querySelectorAll('a[href$="privacy.html"]').forEach(a=>{
        try{ const u=new URL(a.href, location.href); u.searchParams.set('lang', lang); a.href = u.toString(); }catch(e){}
      });
    }

    // Toggle list
    if(langBtn && langList){
      langBtn.addEventListener('click', ()=>{ const open = langList.style.display==='block'; langList.style.display = open? 'none':'block'; langBtn.setAttribute('aria-expanded', (!open).toString()); });
      // pick language
      langList.querySelectorAll('li').forEach(li=> li.addEventListener('click', ()=>{ const lang = li.dataset.lang; setLang(lang); langList.style.display='none'; }));
    }

    // apply translations helper
    function applyTranslations(dict){
      if(!dict) return;
      // text content
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const key = el.getAttribute('data-i18n');
        if(dict[key]) el.textContent = dict[key];
      });
      // placeholders
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
        const key = el.getAttribute('data-i18n-placeholder');
        if(dict[key]) el.setAttribute('placeholder', dict[key]);
      });
      // select options population for domain & decisionType
      const domainSel = document.getElementById('domain');
      const typeSel = document.getElementById('decisionType');
      if(domainSel && dict['field.domain.options']){
        domainSel.innerHTML = '';
        const ph = document.createElement('option'); ph.value=''; ph.textContent = dict['field.domain.placeholder']||''; domainSel.appendChild(ph);
        dict['field.domain.options'].forEach((o,i)=>{ const opt=document.createElement('option'); opt.value = 'd'+i; opt.textContent = o; domainSel.appendChild(opt); });
      }
      if(typeSel && dict['field.decisionType.options']){
        typeSel.innerHTML='';
        const ph = document.createElement('option'); ph.value=''; ph.textContent = dict['field.decisionType.placeholder']||''; typeSel.appendChild(ph);
        dict['field.decisionType.options'].forEach((o,i)=>{ const opt=document.createElement('option'); opt.value='t'+i; opt.textContent=o; typeSel.appendChild(opt); });
      }
    }

    // --- Start button scroll
    if(startBtn){ startBtn.addEventListener('click', ()=>{ document.querySelector('#form')?.scrollIntoView({behavior:'smooth',block:'start'}); }); }

    // --- help icon fallback labels
    document.querySelectorAll('.help-icon').forEach(icon=>{ if(!icon.textContent.trim()){ icon.textContent = icon.classList.contains('help-privacy')? 'P' : 'G'; } });

    // --- simple form handler
    const form = document.getElementById('emetaForm');
    if(form){
      form.addEventListener('submit', function(e){ e.preventDefault(); if(!form.checkValidity()){ form.reportValidity(); return; } alert((document.documentElement.lang==='fr')? 'Formulaire envoyé (simulation)' : 'Form submitted (simulation)'); });
    }

    // init language from localStorage or html
    const saved = (localStorage.getItem('emeta_lang')) || (document.documentElement.lang || 'fr');
    setLang(saved);

    // close lang list when clicking outside
    document.addEventListener('click', function(e){ if(!e.target.closest('.header-actions') && langList) langList.style.display = 'none'; });

  });
})();
