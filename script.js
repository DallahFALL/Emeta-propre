/* e-META v4.0 – Responsive & Multilingue */

const LANGS = {
  fr:{flag:"🇫🇷",code:"FR",dir:"ltr",whatsapp:"221782607212",title:"e-META — L’assistant IA pluridisciplinaire",
    sub:"Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",
    domain:["— Domaine —","Agriculture","Énergie","Finance","Technologie","Éducation","Santé","Commerce","Autre"],
    currency:["XOF — Franc CFA","USD — Dollar","EUR — Euro"],
    placeholders:{expected:"Ex : dossier, plan, étude…",budget:"Montant estimé",fullname:"Votre nom complet",phone:"+221…",email:"exemple@mail.com",details:"Décrivez votre besoin…"},
    footer:"© 2025 e-META • Simplement. Intelligemment."},
  en:{flag:"🇬🇧",code:"EN",dir:"ltr",whatsapp:"447700900000",title:"e-META — The Multidisciplinary AI Assistant",
    sub:"Smart form to analyze, diagnose and recommend suitable solutions.",
    domain:["— Domain —","Agriculture","Energy","Finance","Technology","Education","Health","Trade","Other"],
    currency:["USD — Dollar","EUR — Euro","GBP — Pound Sterling"],
    placeholders:{expected:"Ex: Funding file, strategy plan…",budget:"Estimated budget",fullname:"Full name",phone:"+44…",email:"example@mail.com",details:"Describe your request…"},
    footer:"© 2025 e-META • Simply. Intelligently."},
  es:{flag:"🇪🇸",code:"ES",dir:"ltr",whatsapp:"34600000000",title:"e-META — El asistente IA multidisciplinario",
    sub:"Formulario inteligente para analizar, diagnosticar y recomendar soluciones adecuadas.",
    domain:["— Dominio —","Agricultura","Energía","Finanzas","Tecnología","Educación","Salud","Comercio","Otro"],
    currency:["EUR — Euro","USD — Dólar","MXN — Peso mexicano"],
    placeholders:{expected:"Ej: expediente, plan estratégico…",budget:"Monto estimado",fullname:"Nombre completo",phone:"+34…",email:"ejemplo@mail.com",details:"Describa su necesidad…"},
    footer:"© 2025 e-META • Simple. Inteligentemente."},
  ar:{flag:"🇸🇦",code:"AR",dir:"rtl",whatsapp:"966500000000",title:"إي-ميتا — المساعد الذكي المتعدد المجالات",
    sub:"نموذج ذكي للتحليل والتشخيص والتوصية بحلول مناسبة.",
    domain:["— المجال —","الزراعة","الطاقة","المالية","التكنولوجيا","التعليم","الصحة","التجارة","أخرى"],
    currency:["SAR — ريال","USD — دولار","EUR — يورو"],
    placeholders:{expected:"مثال: ملف تمويل، خطة…",budget:"الميزانية المقدّرة",fullname:"الاسم الكامل",phone:"+966…",email:"example@mail.com",details:"اشرح الطلب أو السياق…"},
    footer:"© 2025 إي-ميتا • ببساطة. بذكاء."}
};

let lang=localStorage.getItem("lang")||"fr";
const el=(id)=>document.getElementById(id);
const els={
  burger:el("burgerBtn"),nav:el("mainNav"),langToggle:el("langToggle"),langMenu:el("langMenu"),
  langFlag:el("langFlag"),langCode:el("langCode"),theme:el("themeSelect"),currency:el("currencySelect"),
  expected:el("expected"),budget:el("budget"),fullname:el("fullname"),phone:el("phone"),
  email:el("email"),details:el("details"),footer:el("footerText"),wa:el("whatsappBtn"),send:el("sendBtn")
};

/* ----------- INIT LANG ----------- */
function applyLang(){
  const L=LANGS[lang];
  document.body.dir=L.dir;
  document.querySelector("h1").textContent=L.title;
  document.querySelector("p[data-i18n='hero_sub']").textContent=L.sub;
  els.langFlag.textContent=L.flag; els.langCode.textContent=L.code;
  els.footer.textContent=L.footer;

  els.theme.innerHTML=L.domain.map(d=>`<option>${d}</option>`).join("");
  els.currency.innerHTML=L.currency.map(d=>`<option>${d}</option>`).join("");

  const p=L.placeholders;
  els.expected.placeholder=p.expected; els.budget.placeholder=p.budget;
  els.fullname.placeholder=p.fullname; els.phone.placeholder=p.phone;
  els.email.placeholder=p.email; els.details.placeholder=p.details;
}
applyLang();

/* ----------- LANG SWITCH ----------- */
els.langToggle.addEventListener("click",()=>els.langMenu.classList.toggle("show"));
els.langMenu.querySelectorAll("li").forEach(li=>{
  li.addEventListener("click",()=>{
    lang=li.dataset.lang; localStorage.setItem("lang",lang);
    els.langMenu.classList.remove("show"); applyLang();
  });
});
document.addEventListener("click",(e)=>{if(!e.target.closest(".langbox"))els.langMenu.classList.remove("show")});

/* ----------- BURGER MENU ----------- */
els.burger.addEventListener("click",()=>els.nav.classList.toggle("show"));

/* ----------- WHATSAPP ROUTE ----------- */
function waLink(){
  const L=LANGS[lang];
  const txt=`e-META\nNom: ${els.fullname.value}\nThème: ${els.theme.value}\nBudget: ${els.budget.value} ${els.currency.value}\nDétails: ${els.details.value}`;
  return `https://wa.me/${L.whatsapp}?text=${encodeURIComponent(txt)}`;
}
els.wa.onclick=()=>window.open(waLink(),"_blank");
els.send.onclick=()=>window.open(waLink(),"_blank");
