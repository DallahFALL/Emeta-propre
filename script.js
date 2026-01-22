/* script.js — i18n + header/menu + privacy PDF mapping + small helpers
   Attends que i18n.js fournisse window.I18N (obj de traductions).
*/

(function(){
  "use strict";

  const LS_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";

  // Helpers
  function getLang(){ return localStorage.getItem(LS_KEY) || DEFAULT_LANG; }
  function setLang(l){
    localStorage.setItem(LS_KEY, l);
    document.documentElement.lang = l;
    document.documentElement.dir = (l === "ar") ? "rtl" : "ltr";
    // update privacy links and pdf mapping
    updatePrivacyLinks(l);
  }

  // Apply I18N to DOM: looks for data-i18n and data-i18n-placeholder
  function applyI18n(lang){
    const dict = window.I18N && window.I18N[lang];
    if(!dict){
      console.warn("I18N missing for", lang);
      return;
    }
    // text nodes
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      if(dict[key]) el.innerText = dict[key];
      else el.innerText = ""; // avoid empty placeholders
    });
    // placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
      const key = el.getAttribute("data-i18n-placeholder");
      if(dict[key]) el.setAttribute("placeholder", dict[key]);
    });
    // options too (some <option> have data-i18n)
    document.querySelectorAll("option[data-i18n]").forEach(opt=>{
      const key = opt.getAttribute("data-i18n");
      if(dict[key]) opt.textContent = dict[key];
    });
  }

  // PRIVACY PDF mapping + ensure privacy links use lang query param
  function updatePrivacyLinks(lang){
    // append lang query to local privacy links
    document.querySelectorAll('a[href^="privacy.html"]').forEach(a=>{
      const url = new URL(a.getAttribute("href"), location.origin);
      url.searchParams.set("lang", lang);
      a.setAttribute("href", url.pathname + url.search);
    });
    // set PDF map if element exists
    const pdfMap = {
      fr: "pdf/eMETA_Privacy_CGU_FR.pdf",
      en: "pdf/eMETA_Privacy_CGU_EN.pdf",
      es: "pdf/eMETA_Privacy_CGU_ES.pdf",
      ar: "pdf/eMETA_Privacy_CGU_AR.pdf"
    };
    // set any link with id privacyPdf if present
    const privacyPdf = document.getElementById("privacyPdf");
    if(privacyPdf && pdfMap[lang]) privacyPdf.href = pdfMap[lang];
    // guide pdf mapping (if any)
    const guideMap = {
      fr: "pdf/eMETA_Guide_Formulaire_FR.pdf",
      en: "pdf/eMETA_Guide_Formulaire_EN.pdf",
      es: "pdf/eMETA_Guide_Formulaire_ES.pdf",
      ar: "pdf/eMETA_Guide_Formulaire_AR.pdf"
    };
    const guidePdf = document.getElementById("guidePdf");
    if(guidePdf && guideMap[lang]) guidePdf.href = guideMap[lang];
  }

  // Header / burger toggler
  function initHeader(){
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");
    if(!burger || !nav) return;
    burger.addEventListener("click", ()=>{
      const expanded = burger.getAttribute("aria-expanded")==="true";
      burger.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });
    // close nav on link click (mobile)
    nav.querySelectorAll("a").forEach(a=>{
      a.addEventListener("click", ()=>{ nav.classList.remove("open"); burger.setAttribute("aria-expanded","false"); });
    });
  }

  // CTA to scroll to form
  function initCTA(){
    const start = document.getElementById("startBtn");
    const form = document.getElementById("form");
    if(start && form){
      start.addEventListener("click", ()=> {
        form.scrollIntoView({behavior:"smooth",block:"start"});
      });
    }
  }

  // language select UI
  function initLang(){
    const sel = document.getElementById("langSelect");
    const lang = getLang();
    if(sel){
      sel.value = lang;
      sel.addEventListener("change", (e)=>{
        const newLang = e.target.value;
        setLang(newLang);
        applyI18n(newLang);
      });
    }
    // initial application
    setLang(lang);
    applyI18n(lang);
  }

  // fix for privacy page load: if privacy.html has ?lang=xx set LS
  (function syncLangFromUrl(){
    const params = new URLSearchParams(location.search);
    const urlLang = params.get("lang");
    if(urlLang){
      localStorage.setItem(LS_KEY, urlLang);
      document.documentElement.lang = urlLang;
      document.documentElement.dir = (urlLang==="ar") ? "rtl":"ltr";
    }
  })();

  // Fix for reset button visual (ensure reset triggers styles)
  function initResetStyle(){
    document.querySelectorAll("button[type='reset']").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        // small animation to make it visible
        btn.style.transition = "box-shadow .25s";
        btn.style.boxShadow = "0 6px 18px rgba(0,0,0,0.35)";
        setTimeout(()=> btn.style.boxShadow = "", 300);
      });
    });
  }

  // run in DOMContentLoaded
  document.addEventListener("DOMContentLoaded", ()=>{
    initHeader();
    initCTA();
    initLang();
    initResetStyle();

    // ensure privacy/help icons present and mapped
    updatePrivacyLinks(getLang());

    // if I18N data changes later, you can call applyI18n(getLang()) again
  });

})();
