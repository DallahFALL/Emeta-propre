(function(){
const K="emeta_lang",D="fr";
function setLang(l){
localStorage.setItem(K,l);
document.documentElement.lang=l;
document.documentElement.dir=l==="ar"?"rtl":"ltr";
document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=I18N[l][e.dataset.i18n]||"");
document.querySelectorAll("[data-i18n-placeholder]").forEach(e=>e.placeholder=I18N[l][e.dataset.i18nPlaceholder]||"");
syncHelpLinks(l);
}
function syncHelpLinks(l){
const g={fr:"pdf/Guide_FR.pdf",en:"pdf/Guide_EN.pdf",es:"pdf/Guide_ES.pdf",ar:"pdf/Guide_AR.pdf"};
const p={fr:"pdf/Privacy_FR.pdf",en:"pdf/Privacy_EN.pdf",es:"pdf/Privacy_ES.pdf",ar:"pdf/Privacy_AR.pdf"};
pdfGuideLink.href=g[l]||g.fr;
pdfPrivacyLink.href=p[l]||p.fr;
}
document.addEventListener("DOMContentLoaded",()=>{
setLang(localStorage.getItem(K)||D);
langSelect.onchange=e=>setLang(e.target.value);
startBtn.onclick=()=>document.getElementById("form").scrollIntoView({behavior:"smooth"});
customBtn.onclick=startBtn.onclick;
});
})();