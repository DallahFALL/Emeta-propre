/* script.js - i18n + form handling + small UI helpers */
(() => {
  const LANG_PATH = "./frontend/lang/";
  const AVAILABLE = ["fr","en","es","ar"];
  const DEFAULT_LANG = "fr";
  const WA_NUMBER = "+221782607212"; // change if needed

  async function loadLangFile(code){
    try {
      const res = await fetch(`${LANG_PATH}${code}.json`, {cache:"no-cache"});
      if(!res.ok) throw new Error("Lang file not found");
      return await res.json();
    } catch(e){
      console.warn("Load lang error", e);
      return null;
    }
  }

  function applyTranslations(dict){
    if(!dict) return;
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      const val = dict[key];
      if(val === undefined) return;
      if(el.tagName.toLowerCase()==="input" && el.placeholder){
        el.placeholder = val;
      } else {
        el.innerText = val;
      }
    });
  }

  function setHtmlLang(code){
    const html = document.documentElement;
    html.setAttribute("lang", code);
    html.setAttribute("dir", code === "ar" ? "rtl" : "ltr");
  }

  function initLangSelector(current){
    const sel = document.getElementById("langSelect");
    if(!sel) return;
    sel.innerHTML = "";
    AVAILABLE.forEach(c=>{
      const o = document.createElement("option");
      o.value = c;
      o.textContent = c.toUpperCase();
      sel.appendChild(o);
    });
    sel.value = current;
    sel.addEventListener("change", async (e) => {
      await changeLang(e.target.value);
    });
  }

  async function changeLang(code){
    const dict = await loadLangFile(code) || await loadLangFile(DEFAULT_LANG);
    applyTranslations(dict);
    setHtmlLang(code);
  }

  function initMenuToggle(){
    const btn = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");
    if(!btn || !nav) return;
    btn.addEventListener("click", ()=> nav.classList.toggle("open"));
  }

  function initPackForm(){
    const form = document.getElementById("packForm");
    if(!form) return;
    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      const fd = new FormData(form);
      const payload = {
        pack: fd.get("pack") || "general",
        name: fd.get("name") || "",
        email: fd.get("email") || "",
        phone: fd.get("phone") || "",
        details: fd.get("details") || "",
        mode: fd.get("mode") || "email"
      };
      handleFormSubmit(payload);
    });
    const cancel = document.getElementById("btnCancel");
    if(cancel) cancel.addEventListener("click", (e)=>{ e.preventDefault(); form.reset(); });
  }

  function handleFormSubmit(p){
    const subject = `Demande pack: ${p.pack}`;
    const body = `Pack: ${p.pack}\nNom: ${p.name}\nEmail: ${p.email}\nTéléphone: ${p.phone}\n\nDétails:\n${p.details}`;

    if(p.mode === "email"){
      const to = encodeURIComponent(p.email || "contact@e-meta.app");
      const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    } else if(p.mode === "whatsapp"){
      const msg = `${subject}\n${body}`;
      const wa = `https://wa.me/${WA_NUMBER.replace(/\D/g,"")}?text=${encodeURIComponent(msg)}`;
      window.open(wa, "_blank");
    } else {
      const out = document.getElementById("formResult");
      if(out){ out.innerText = body; out.scrollIntoView({behavior:"smooth"}); }
      else alert(body);
    }
  }

  function initPackOpenLinks(){
    document.querySelectorAll("[data-pack-open]").forEach(btn=>{
      btn.addEventListener("click", (e)=>{
        e.preventDefault();
        const pack = btn.getAttribute("data-pack-open");
        const select = document.querySelector("select[name='pack']");
        if(select) select.value = pack;
        const form = document.getElementById("packForm");
        if(form) form.scrollIntoView({behavior:"smooth"});
      });
    });
  }

  document.addEventListener("DOMContentLoaded", async ()=>{
    initMenuToggle();
    initPackForm();
    initPackOpenLinks();

    const userLang = (navigator.language||navigator.userLanguage||DEFAULT_LANG).slice(0,2);
    const start = AVAILABLE.includes(userLang) ? userLang : DEFAULT_LANG;
    initLangSelector(start);

    const dict = await loadLangFile(start) || await loadLangFile(DEFAULT_LANG);
    applyTranslations(dict);
    setHtmlLang(start);
  });

})();
