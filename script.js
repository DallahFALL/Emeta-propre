/* =====================================================
   e-META — script.js FINAL (International + Stable)
   - Burger menu mobile
   - Langues dynamiques FR / EN / ES / AR (+ RTL auto)
   - CTA "Requête personnalisée" : scroll vers #form
   - Persist lang via localStorage
===================================================== */

(function () {
  "use strict";

  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "lang";

const I18N = {
  fr: {
    tagline: "Assistant IA multilingue de prise de décision",

    "nav.home": "Accueil",
    "nav.form": "Formulaire",
    "nav.privacy": "Confidentialité",

    "btn.customRequest": "Requête personnalisée",

    "hero.title": "Donnez à vos décisions le niveau d’un cabinet de consulting premium",
    "hero.subtitle":
      "e-META analyse votre contexte, vos objectifs, vos contraintes, vos KPIs et vos ressources pour générer une feuille de route claire.",
    "hero.note":
      "e-META n’est pas un chatbot. C’est un moteur d’intelligence décisionnelle inspiré des cabinets de conseil.",
    "hero.cta": "Démarrer une analyse stratégique",

    "hero.panel":
      "Version PRO v5.0 – Formulaire ultra-premium inspiré des cabinets Deloitte / EY.",
    "hero.point1": "Analyse structurée : problème, objectifs, contraintes, risques, KPIs.",
    "hero.point2": "Synthèse actionnable : recommandations, plan d’actions, livrables.",
    "hero.point3": "Restitution personnalisée : Email, WhatsApp, PDF ou affichage direct.",

    "form.title": "Formulaire e-META — Version Ultra-Premium",
    "form.intro":
      "Remplissez les champs ci-dessous pour recevoir votre synthèse stratégique e-META.",

    "footer.text": "© e-META 2025 — Strategic decision intelligence assistant",
    "footer.privacy": "Politique de confidentialité"
  },

  en: {
    tagline: "Multilingual AI decision intelligence assistant",

    "nav.home": "Home",
    "nav.form": "Form",
    "nav.privacy": "Privacy",

    "btn.customRequest": "Custom request",

    "hero.title": "Give your decisions the level of a premium consulting firm",
    "hero.subtitle":
      "e-META analyzes your context, goals, constraints, KPIs and resources to generate a clear decision roadmap.",
    "hero.note":
      "e-META is not a chatbot. It is a decision intelligence engine inspired by top consulting firms.",
    "hero.cta": "Start strategic analysis",

    "hero.panel":
      "PRO v5.0 – Ultra-premium form inspired by Deloitte / EY standards.",
    "hero.point1": "Structured analysis: problem, goals, constraints, risks, KPIs.",
    "hero.point2": "Actionable synthesis: recommendations, action plan, deliverables.",
    "hero.point3": "Personalized output: Email, WhatsApp, PDF or direct display.",

    "form.title": "e-META Form — Ultra-Premium Version",
    "form.intro":
      "Fill in the fields below to receive your strategic e-META synthesis.",

    "footer.text": "© e-META 2025 — Strategic decision intelligence assistant",
    "footer.privacy": "Privacy policy"
  },

  es: {
    tagline: "Asistente de inteligencia decisional con IA multilingüe",

    "nav.home": "Inicio",
    "nav.form": "Formulario",
    "nav.privacy": "Privacidad",

    "btn.customRequest": "Solicitud personalizada",

    "hero.title":
      "Lleve sus decisiones al nivel de una consultoría premium",
    "hero.subtitle":
      "e-META analiza su contexto, objetivos, restricciones, KPIs y recursos para generar una hoja de ruta clara.",
    "hero.note":
      "e-META no es un chatbot. Es un motor de inteligencia decisional inspirado en consultoras líderes.",
    "hero.cta": "Iniciar análisis estratégico",

    "hero.panel":
      "Versión PRO v5.0 – Formulario ultra-premium inspirado en Deloitte / EY.",
    "hero.point1":
      "Análisis estructurado: problema, objetivos, restricciones, riesgos, KPIs.",
    "hero.point2":
      "Síntesis accionable: recomendaciones, plan de acción, entregables.",
    "hero.point3":
      "Entrega personalizada: Email, WhatsApp, PDF o visualización directa.",

    "form.title": "Formulario e-META — Versión Ultra-Premium",
    "form.intro":
      "Complete los campos para recibir su síntesis estratégica e-META.",

    "footer.text": "© e-META 2025 — Asistente de inteligencia decisional",
    "footer.privacy": "Política de privacidad"
  },

  ar: {
    tagline: "مساعد ذكي متعدد اللغات لاتخاذ القرار",

    "nav.home": "الرئيسية",
    "nav.form": "النموذج",
    "nav.privacy": "الخصوصية",

    "btn.customRequest": "طلب مخصص",

    "hero.title":
      "امنح قراراتك مستوى مكاتب الاستشارات المتميزة",
    "hero.subtitle":
      "يحلل e-META سياقك وأهدافك وقيودك ومؤشرات الأداء والموارد لإنشاء خارطة طريق واضحة.",
    "hero.note":
      "e-META ليس روبوت محادثة، بل محرك ذكاء لاتخاذ القرار مستوحى من كبرى شركات الاستشارات.",
    "hero.cta": "بدء التحليل الاستراتيجي",

    "hero.panel":
      "الإصدار الاحترافي v5.0 – نموذج عالي الجودة مستوحى من Deloitte / EY.",
    "hero.point1":
      "تحليل منظم: المشكلة، الأهداف، القيود، المخاطر، مؤشرات الأداء.",
    "hero.point2":
      "ملخص عملي: توصيات، خطة عمل، مخرجات.",
    "hero.point3":
      "تسليم مخصص: بريد إلكتروني، واتساب، PDF أو عرض مباشر.",

    "form.title": "نموذج e-META — الإصدار الاحترافي",
    "form.intro":
      "يرجى ملء الحقول أدناه للحصول على التحليل الاستراتيجي.",

    "footer.text": "© e-META 2025 — مساعد ذكاء لاتخاذ القرار",
    "footer.privacy": "سياسة الخصوصية"
  }
};
/* ===== FORM ===== */

"form.section.general": "Informations générales",
"form.section.analysis": "Analyse & objectifs",
"form.section.restitution": "Mode de restitution",

"form.domain": "Domaine / thème",
"form.choose": "Choisir…",
"form.projectType": "Type de projet",
"form.projectType.ph": "Ex : Lancement, optimisation, expansion",
"form.projectTitle": "Titre du projet",
"form.projectTitle.ph": "Ex : Lancement international",

"form.problem": "Problème / défi",
"form.problem.ph": "Décrivez le problème en une ou deux phrases…",

"form.objectives": "Objectifs",
"form.objectives.ph": "Que souhaitez-vous atteindre ?",

"form.constraints": "Contraintes",
"form.constraints.ph": "Temps, budget, réglementation…",

"form.kpis": "KPIs visés",
"form.kpis.ph": "Chiffre d’affaires, délais, qualité…",

"restitution.email": "Email",
"restitution.whatsapp": "WhatsApp",
"restitution.pdf": "PDF",
"restitution.display": "Affichage direct",

"form.email": "Adresse email",
"form.email.ph": "adresse@email.com",

"form.whatsapp": "Numéro WhatsApp",
"form.whatsapp.ph": "+221XXXXXXXXX",

/* ===== DOMAINES ===== */
"domain.business": "Business / Stratégie",
"domain.tech": "Technologie",
"domain.agriculture": "Agriculture",
"domain.finance": "Finance",
"domain.other": "Autre"

  function getLang() {
    const saved = (localStorage.getItem(STORAGE_KEY) || "").toLowerCase();
    if (I18N[saved]) return saved;

    const nav = (navigator.language || "fr").slice(0,2).toLowerCase();
    if (I18N[nav]) return nav;

    return DEFAULT_LANG;
  }

  function setRtl(isRtl) {
    document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
    const current = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    document.documentElement.setAttribute("lang", current);

    const rtlCss = document.getElementById("rtlStylesheet");
    if (rtlCss) rtlCss.disabled = !isRtl;
  }

  function t(lang, key) {
    return (I18N[lang] && I18N[lang][key]) || (I18N.fr && I18N.fr[key]) || "";
  }

  function applyLanguage(lang) {
    if (!I18N[lang]) lang = DEFAULT_LANG;

    localStorage.setItem(STORAGE_KEY, lang);
    setRtl(lang === "ar");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(lang, key);
      if (val) el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = t(lang, key);
      if (val) el.setAttribute("placeholder", val);
    });

    document.querySelectorAll("[data-i18n-option]").forEach((opt) => {
      const key = opt.getAttribute("data-i18n-option");
      const val = t(lang, key);
      if (val) opt.textContent = val;
    });

    const switcher = document.getElementById("languageSwitcher");
    if (switcher && switcher.value !== lang) switcher.value = lang;
  }

  function initBurger() {
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");
    if (!burger || !nav) return;

    const close = () => {
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    };

    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("open")) return;
      const target = e.target;
      if (target instanceof Node) {
        const clickedInside = nav.contains(target) || burger.contains(target);
        if (!clickedInside) close();
      }
    });

    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  }

  function initCTA() {
    const cta =
      document.getElementById("ctaRequest") ||
      document.getElementById("ctaWhatsApp") ||
      document.querySelector(".whatsappBtnGlobal");

    if (!cta) return;

    cta.addEventListener("click", () => {
      const form = document.getElementById("form");
      if (form) form.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.location.href = "index.html#form";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initBurger();
    initCTA();

    const switcher = document.getElementById("languageSwitcher");
    const initial = getLang();

    if (switcher) {
      switcher.addEventListener("change", (e) => applyLanguage(e.target.value));
    }

    applyLanguage(initial);
  });

  window.eMETA = window.eMETA || {};
  window.eMETA.applyLanguage = applyLanguage;

})();
