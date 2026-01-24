/* script.js - handles i18n sync, burger, populating selects */
document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";
  const RTL_LANGS = ["ar"];

  function resolveLang(){
    return (
      new URLSearchParams(window.location.search).get("lang") ||
      localStorage.getItem(STORAGE_KEY) ||
      DEFAULT_LANG
    );
  }

  function setLang(lang){
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
  }

  function applyI18n(lang){
    if(!window.I18N || !window.I18N[lang]) return;
    const dict = window.I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const k = el.getAttribute("data-i18n");
      if(dict[k]) el.textContent = dict[k];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
      const k = el.getAttribute("data-i18n-placeholder");
      if(dict[k]) el.placeholder = dict[k];
    });
    const pdfLink = document.getElementById("pdfPrivacyLink");
    if(pdfLink){
      const map = { fr: "docs/privacy_fr.pdf", en: "docs/privacy_en.pdf", es: "docs/privacy_es.pdf", ar: "docs/privacy_ar.pdf" };
      pdfLink.href = map[lang] || map.fr;
      if(window.I18N[lang]["privacy.download"]) pdfLink.textContent = window.I18N[lang]["privacy.download"];
    }
  }

  function populateSelects(lang){
    try{
      const domain = document.getElementById("domain");
      const decType = document.getElementById("decisionType");
      if(domain && decType && window.I18N && window.I18N[lang]){
        const opts = window.I18N[lang]["field.domain.options"] || [];
        domain.innerHTML = '<option value="">'+(window.I18N[lang]['field.domain.placeholder']||'')+'</option>';
        opts.forEach(o=> domain.insertAdjacentHTML('beforeend', `<option>${o}</option>`));
        const opts2 = window.I18N[lang]["field.decisionType.options"] || [];
        decType.innerHTML = '<option value="">'+(window.I18N[lang]['field.decisionType.placeholder']||'')+'</option>';
        opts2.forEach(o=> decType.insertAdjacentHTML('beforeend', `<option>${o}</option>`));
      }
    }catch(e){console.warn(e)}
  }

  const lang = resolveLang();
  setLang(lang);

  const init = () => {
    applyI18n(lang);
    populateSelects(lang);
    const langSelect = document.getElementById("langSelect");
    if(langSelect){
      langSelect.value = lang;
      langSelect.addEventListener("change", ()=>{
        const v = langSelect.value;
        setLang(v);
        applyI18n(v);
        populateSelects(v);
        document.querySelectorAll('a[href$="privacy.html"]').forEach(a=>{
          try{ const url = new URL(a.href, location.href); url.searchParams.set('lang', v); a.href = url.toString(); }catch(e){}
        });
      });
    }

    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");
    if(burger && nav){
      burger.addEventListener("click", ()=>{
        const open = nav.classList.toggle("is-open");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      });
      nav.querySelectorAll("a").forEach(a=> a.addEventListener("click", ()=>{
        if(nav.classList.contains("is-open")) nav.classList.remove("is-open");
        if(burger) burger.setAttribute("aria-expanded","false");
      }));
    }

    const startBtn = document.getElementById("startBtn");
    if(startBtn){
      startBtn.addEventListener("click", ()=>{
        const el = document.getElementById("form");
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      });
    }
  };

  if(window.I18N) init();
  else{
    window.addEventListener('load', ()=>{ setTimeout(()=>{ if(window.I18N) init(); }, 50); });
  }
});
