// script.js — language, i18n application, burger + small helpers
document.addEventListener("DOMContentLoaded", () => {
  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";
  const RTL_LANGS = ["ar"];
  const params = new URLSearchParams(location.search);
  const urlLang = params.get("lang");

  function resolveLang(){
    return urlLang || localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang, pushUrl = false){
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
    if(pushUrl){
      try{
        const u = new URL(location.href);
        u.searchParams.set("lang", lang);
        history.replaceState({}, "", u.toString());
      }catch(e){}
    }
  }

  function applyI18n(lang){
    if(!window.I18N || !window.I18N[lang]) return;
    const dict = window.I18N[lang];

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.getAttribute("data-i18n");
      if(dict[k] !== undefined) el.textContent = dict[k];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const k = el.getAttribute("data-i18n-placeholder");
      if(dict[k] !== undefined) el.placeholder = dict[k];
    });

    const domainSelect = document.getElementById("domain");
    const decisionSelect = document.getElementById("decisionType");
    if(domainSelect && dict["field.domain.options"] && Array.isArray(dict["field.domain.options"])){
      domainSelect.innerHTML = '<option value="">—</option>';
      dict["field.domain.options"].forEach(opt => {
        const o = document.createElement("option"); o.value = opt; o.textContent = opt; domainSelect.appendChild(o);
      });
    }
    if(decisionSelect && dict["field.decisionType.options"] && Array.isArray(dict["field.decisionType.options"])){
      decisionSelect.innerHTML = '<option value="">—</option>';
      dict["field.decisionType.options"].forEach(opt => {
        const o = document.createElement("option"); o.value = opt; o.textContent = opt; decisionSelect.appendChild(o);
      });
    }

    // PDF privacy link mapping
    const pdfMap = { fr: "docs/privacy_fr.pdf", en: "docs/privacy_en.pdf", es: "docs/privacy_es.pdf", ar: "docs/privacy_ar.pdf" };
    const pdfLink = document.getElementById("pdfPrivacyLink");
    if(pdfLink){
      pdfLink.href = pdfMap[lang] || pdfMap['fr'];
    }

    if(dict["meta.title"]) document.title = dict["meta.title"];
  }

  const lang = resolveLang();
  setLang(lang, true);
  applyI18n(lang);

  const langSelect = document.getElementById("langSelect");
  if(langSelect){
    langSelect.value = lang;
    langSelect.addEventListener("change", () => {
      const v = langSelect.value;
      setLang(v, true);
      applyI18n(v);
      document.querySelectorAll('a[href$="privacy.html"]').forEach(a => {
        try{
          const u = new URL(a.href, location.href);
          u.searchParams.set("lang", v);
          a.href = u.toString();
        }catch(e){}
      });
      document.querySelectorAll('a[href]').forEach(a=>{
        try{
          const href = a.getAttribute('href');
          if(href && (href.endsWith('.html') || href.includes('index.html'))){
            const u = new URL(a.href, location.href);
            u.searchParams.set("lang", v);
            a.href = u.toString();
          }
        }catch(e){}
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
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", ()=>{ nav.classList.remove("is-open"); burger.setAttribute("aria-expanded","false"); }));
  }

  const startBtn = document.getElementById("startBtn");
  if(startBtn){
    startBtn.addEventListener("click", ()=>{
      const f = document.getElementById("form");
      if(f) f.scrollIntoView({behavior:"smooth", block:"start"});
    });
  }

  const header = document.querySelector(".site-header");
  if(header){
    let tick=false;
    function onScroll(){ header.classList.toggle("is-shrink", window.scrollY > 40); tick=false; }
    window.addEventListener("scroll", ()=>{ if(!tick){ tick=true; requestAnimationFrame(onScroll); }},{passive:true});
  }

});
