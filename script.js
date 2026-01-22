/* e-META — script.js (ready-to-paste patch)
   - Lang resolution (URL / localStorage)
   - Apply i18n to text + placeholders
   - Burger toggle with aria-expanded
   - Header auto-shrink (no jump)
   - CTA to scroll to #form (or open Tally if configured)
   Paste this file as your script.js (replace existing) */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";
  const RTL_LANGS = ["ar"];

  /* LANG RESOLUTION */
  function resolveLang(){
    return (
      new URLSearchParams(window.location.search).get("lang") ||
      localStorage.getItem(STORAGE_KEY) ||
      DEFAULT_LANG
    );
  }

  function setLang(lang){
    try{
      localStorage.setItem(STORAGE_KEY, lang);
    }catch(e){/* ignore */}
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
  }

  function applyI18n(lang){
    if(!window.I18N || !window.I18N[lang]) return;
    const dict = window.I18N[lang];

    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const k = el.getAttribute("data-i18n");
      if(k && dict[k]) el.textContent = dict[k];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
      const k = el.getAttribute("data-i18n-placeholder");
      if(k && dict[k]) el.placeholder = dict[k];
    });
  }

  const lang = resolveLang();
  setLang(lang);
  applyI18n(lang);

  /* LANG SELECT */
  const langSelect = document.getElementById("langSelect");
  if(langSelect){
    langSelect.value = lang;
    langSelect.addEventListener("change",()=>{
      const v = langSelect.value;
      setLang(v);
      applyI18n(v);
    });
  }

  /* BURGER MENU */
  const burger = document.getElementById("burgerBtn") || document.querySelector(".burger");
  const nav = document.getElementById("mainNav") || document.querySelector(".nav");

  if(burger && nav){
    burger.addEventListener("click", ()=>{
      const open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* HEADER SHRINK */
  const header = document.querySelector(".site-header");
  let lastScroll = 0;
  if(header){
    window.addEventListener("scroll", ()=>{
      const y = window.scrollY || window.pageYOffset;
      if(y > 40){
        header.classList.add("is-shrink");
      } else {
        header.classList.remove("is-shrink");
      }
      lastScroll = y;
    }, {passive:true});
  }

  /* CTA primary: scroll to form (if exists) */
  const startBtn = document.getElementById("startBtn") || document.querySelector(".cta-primary");
  if(startBtn){
    startBtn.addEventListener("click", (e)=>{
      e.preventDefault();
      const form = document.getElementById("form");
      if(form){
        form.scrollIntoView({behavior:"smooth",block:"start"});
        // small focus for accessibility
        const firstInput = form.querySelector("input,textarea,select,button");
        if(firstInput) firstInput.focus({preventScroll:true});
      } else {
        // if you use Tally, open the form URL in a new tab
        const tallyUrl = startBtn.getAttribute("data-tally-url");
        if(tallyUrl){
          window.open(tallyUrl,"_blank","noopener");
        }
      }
    });
  }

  /* Accessibility: ensure nav links close mobile menu after click */
  if(nav){
    nav.querySelectorAll("a").forEach(a=>{
      a.addEventListener("click", ()=>{
        nav.classList.remove("is-open");
        if(burger) burger.setAttribute("aria-expanded","false");
      });
    });
  }

  /* Small fix: placeholders with i18n after dynamic load */
  // Re-apply i18n after potential async loads
  setTimeout(()=> applyI18n(resolveLang()), 500);
});