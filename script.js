/* =====================================================
   e-META — SCRIPT.JS FINAL PRO
   - i18n stable
   - Header auto-shrink (no jump)
   - Burger menu responsive
===================================================== */

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
  }

  const lang = resolveLang();
  setLang(lang);
  applyI18n(lang);

  /* LANG SELECT */
  const langSelect = document.getElementById("langSelect");
  if(langSelect){
    langSelect.value = lang;
    langSelect.addEventListener("change",()=>{
      setLang(langSelect.value);
      applyI18n(langSelect.value);
    });
  }

  /* BURGER MENU */
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");

  if(burger && nav){
    burger.addEventListener("click",()=>{
      const open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded",open);
    });

    nav.querySelectorAll("a").forEach(a=>{
      a.addEventListener("click",()=>{
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded","false");
      });
    });
  }

  /* HEADER SHRINK */
  const header = document.querySelector(".site-header");
  let ticking=false;

  function onScroll(){
    header.classList.toggle("is-shrink",window.scrollY>40);
    ticking=false;
  }

  window.addEventListener("scroll",()=>{
    if(!ticking){
      ticking=true;
      requestAnimationFrame(onScroll);
    }
  },{passive:true});
});
