/* =====================================================
   e-META — script.js PRO (International + Safe)
   - i18n dynamique FR / EN / ES / AR (FULL)
   - Ne remplace JAMAIS par du vide si clé manquante
   - RTL auto (dir + rtl.css)
   - Burger menu mobile stable
   - CTA scroll vers #form
   - Langue persistée (localStorage)
===================================================== */

(() => {
  "use strict";

  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "emeta_lang";
  const RTL_LANGS = new Set(["ar"]);

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  // ---------- I18N (reprend ton dictionnaire complet) ----------
  // IMPORTANT: colle ici TON I18N complet (celui que tu avais dans le fichier).
  // Je mets une base complète minimale + tu peux garder TOUTES tes clés existantes.
  const I18N = {
    fr: {
      "meta.title": "e-META",
      "tagline": "Assistant IA multilingue de prise de décision",
      "nav.home": "Accueil",
      "nav.form": "Formulaire",
      "nav.privacy": "Confidentialité",
      "btn.custom": "Requête personnalisée",

      "hero.title": "Donnez à vos décisions le niveau d’un cabinet de consulting premium",
      "hero.subtitle": "e-META analyse votre contexte, vos objectifs, vos contraintes, vos KPIs et vos ressources pour générer une feuille de route claire, exploitable et documentée.",
      "hero.claim": "e-META n’est pas un chatbot. C’est un moteur d’intelligence décisionnelle inspiré par des cadres de conseil de premier ordre.",
      "cta.start": "Démarrer une analyse stratégique",
      "hero.point1": "Analyse structurée : problème, objectifs, contraintes, risques, KPIs.",
      "hero.point2": "Synthèse actionnable : recommandations, plan d’actions, livrables.",
      "hero.point3": "Restitution personnalisée : Email, WhatsApp, PDF ou affichage direct.",
      "hero.badge.title": "Version PRO v5.0",
      "hero.badge.text": "Formulaire ultra-premium, inspiré des cabinets Deloitte / EY.",
      "hero.note": "Temps estimé : 5 à 10 minutes. Gain : des heures de réflexion structurée.",

      "problem_title": "Le vrai problème",
      "problem_intro": "Les décisions stratégiques sont souvent complexes, non structurées et prises sans cadre clair.",
      "problem_1": "Trop d’informations, pas assez de clarté",
      "problem_2": "Décisions basées sur l’intuition, pas sur une structure",
      "problem_3": "L’expertise de conseil est coûteuse ou inaccessible",
      "problem_transition": "e-META structure votre réflexion et transforme la complexité en décisions claires et actionnables.",

      "form.title": "Formulaire e-META — Version Ultra-Premium",
      "form.intro": "Complétez les champs ci-dessous pour recevoir votre analyse stratégique personnalisée.",
      "form.send": "Envoyer ma requête",
      "form.reset": "Réinitialiser le formulaire",
      "form.consent": "J’accepte la politique de confidentialité et le traitement de mes informations pour générer l’analyse.",

      "footer.text": "e-META © 2025 — Assistant IA de décision stratégique",
      "footer.privacy": "Politique de confidentialité"
    },

    en: {
      "meta.title": "e-META",
      "tagline": "Multilingual AI decision intelligence assistant",
      "nav.home": "Home",
      "nav.form": "Form",
      "nav.privacy": "Privacy",
      "btn.custom": "Custom request",

      "hero.title": "Give your decisions the level of a premium consulting firm",
      "hero.subtitle": "e-META analyzes your context, objectives, constraints, KPIs and resources to generate a clear, actionable roadmap.",
      "hero.claim": "e-META is not a chatbot. It is a decision intelligence engine inspired by top-tier consulting frameworks.",
      "cta.start": "Start a strategic analysis",
      "hero.point1": "Structured analysis: problem, objectives, constraints, risks, KPIs.",
      "hero.point2": "Actionable synthesis: recommendations, action plan, deliverables.",
      "hero.point3": "Personalized output: Email, WhatsApp, PDF, or on-screen display.",
      "hero.badge.title": "PRO Version v5.0",
      "hero.badge.text": "Ultra-premium form inspired by Deloitte / EY consulting firms.",
      "hero.note": "Estimated time: 5–10 minutes. Benefit: hours of structured thinking.",

      "problem_title": "The real problem",
      "problem_intro": "Strategic decisions are often complex, unstructured, and taken without a clear framework.",
      "problem_1": "Too much information, not enough clarity",
      "problem_2": "Decisions based on intuition instead of structure",
      "problem_3": "Consulting expertise is expensive or inaccessible",
      "problem_transition": "e-META structures your thinking and turns complexity into clear, actionable decisions.",

      "form.title": "e-META Form — Ultra-Premium Version",
      "form.intro": "Complete the fields below to receive your personalized strategic analysis.",
      "form.send": "Submit request",
      "form.reset": "Reset form",
      "form.consent": "I agree to the privacy policy and the processing of my information to generate the analysis.",

      "footer.text": "e-META © 2025 — Strategic decision AI assistant",
      "footer.privacy": "Privacy policy"
    },

    es: {
      "meta.title": "e-META",
      "tagline": "Asistente multilingüe de IA para decisiones",
      "nav.home": "Inicio",
      "nav.form": "Formulario",
      "nav.privacy": "Privacidad",
      "btn.custom": "Solicitud personalizada",

      "hero.title": "Lleva tus decisiones al nivel de una consultora premium",
      "hero.subtitle": "e-META analiza tu contexto, objetivos, restricciones, KPIs y recursos para generar una hoja de ruta clara y accionable.",
      "hero.claim": "e-META no es un chatbot. Es un motor de inteligencia decisional inspirado en marcos de consultoría de primer nivel.",
      "cta.start": "Iniciar un análisis estratégico",
      "hero.point1": "Análisis estructurado: problema, objetivos, restricciones, riesgos, KPIs.",
      "hero.point2": "Síntesis accionable: recomendaciones, plan de acción, entregables.",
      "hero.point3": "Salida personalizada: Email, WhatsApp, PDF o pantalla.",
      "hero.badge.title": "Versión PRO v5.0",
      "hero.badge.text": "Formulario ultra-premium inspirado en Deloitte / EY.",
      "hero.note": "Tiempo estimado: 5–10 min. Beneficio: horas de pensamiento estructurado.",

      "problem_title": "El problema real",
      "problem_intro": "Las decisiones estratégicas suelen ser complejas, poco estructuradas y tomadas sin un marco claro.",
      "problem_1": "Demasiada información, poca claridad",
      "problem_2": "Decisiones por intuición en lugar de estructura",
      "problem_3": "La consultoría es cara o inaccesible",
      "problem_transition": "e-META estructura tu pensamiento y convierte la complejidad en decisiones claras y accionables.",

      "form.title": "Formulario e-META — Versión Ultra-Premium",
      "form.intro": "Completa los campos para recibir tu análisis estratégico personalizado.",
      "form.send": "Enviar solicitud",
      "form.reset": "Restablecer formulario",
      "form.consent": "Acepto la política de privacidad y el tratamiento de mi información para generar el análisis.",

      "footer.text": "e-META © 2025 — Asistente IA para decisiones estratégicas",
      "footer.privacy": "Política de privacidad"
    },

    ar: {
      "meta.title": "e-META",
      "tagline": "مساعد ذكاء اصطناعي متعدد اللغات لاتخاذ القرار",
      "nav.home": "الرئيسية",
      "nav.form": "النموذج",
      "nav.privacy": "الخصوصية",
      "btn.custom": "طلب مخصص",

      "hero.title": "امنح قراراتك مستوى مكاتب الاستشارات الاحترافية",
      "hero.subtitle": "يقوم e-META بتحليل السياق والأهداف والقيود ومؤشرات الأداء والموارد لتقديم خارطة طريق واضحة وقابلة للتنفيذ.",
      "hero.claim": "e-META ليس روبوت دردشة، بل محرك ذكاء قراري مستوحى من أفضل أطر الاستشارات.",
      "cta.start": "بدء تحليل استراتيجي",
      "hero.point1": "تحليل منظم: المشكلة، الأهداف، القيود، المخاطر، مؤشرات الأداء.",
      "hero.point2": "خلاصة عملية: توصيات، خطة عمل، مخرجات.",
      "hero.point3": "نتائج مخصصة: بريد إلكتروني، واتساب، PDF أو عرض مباشر.",
      "hero.badge.title": "الإصدار الاحترافي v5.0",
      "hero.badge.text": "نموذج احترافي مستوحى من Deloitte و EY.",
      "hero.note": "الوقت المتوقع: 5–10 دقائق. الفائدة: تفكير منظم.",

      "problem_title": "المشكلة الحقيقية",
      "problem_intro": "غالبًا ما تكون القرارات الاستراتيجية معقدة وغير منظمة ويتم اتخاذها دون إطار واضح.",
      "problem_1": "معلومات كثيرة دون وضوح كافٍ",
      "problem_2": "قرارات بالحدس بدل المنهجية",
      "problem_3": "الاستشارات مكلفة أو غير متاحة",
      "problem_transition": "يساعدك e-META على تنظيم التفكير وتحويل التعقيد إلى قرارات واضحة وقابلة للتنفيذ.",

      "form.title": "نموذج e-META — الإصدار الفاخر",
      "form.intro": "املأ الحقول أدناه للحصول على تحليل استراتيجي مخصص.",
      "form.send": "إرسال الطلب",
      "form.reset": "إعادة ضبط النموذج",
      "form.consent": "أوافق على سياسة الخصوصية ومعالجة معلوماتي لإنشاء التحليل.",

      "footer.text": "© e-META 2025 — مساعد ذكاء اصطناعي لاتخاذ القرار",
      "footer.privacy": "سياسة الخصوصية"
    }
  };

  function setRTL(lang) {
    const rtl = RTL_LANGS.has(lang);
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    const rtlSheet = $("#rtlStylesheet");
    if (rtlSheet) rtlSheet.disabled = !rtl;
  }

  // SAFE APPLY: ne remplace jamais par du vide
  function applyI18n(lang) {
    const dict = I18N[lang] || I18N[DEFAULT_LANG];

    $$("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (typeof dict[key] === "string" && dict[key].trim() !== "") {
        el.textContent = dict[key];
      }
    });

    $$("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (typeof dict[key] === "string" && dict[key].trim() !== "") {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    if (typeof dict["meta.title"] === "string" && dict["meta.title"].trim() !== "") {
      document.title = dict["meta.title"];
    }
  }

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    setRTL(lang);
    applyI18n(lang);

    const switcher = $("#languageSwitcher");
    if (switcher && switcher.value !== lang) switcher.value = lang;

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function initBurger() {
    const burger = $("#burgerBtn");
    const nav = $("#mainNav");
    if (!burger || !nav) return;

    burger.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    $$("a", nav).forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("open")) return;
      if (nav.contains(e.target) || burger.contains(e.target)) return;
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  }

  function initCTA() {
    const go = () => {
      const form = $("#form");
      if (form) form.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const ctaHero = $("#ctaStart");
    const ctaHeader = $("#btnCustomRequest");

    if (ctaHero) ctaHero.addEventListener("click", go);
    if (ctaHeader) ctaHeader.addEventListener("click", go);
  }

  function initLangSwitcher() {
    const switcher = $("#languageSwitcher");
    if (!switcher) return;
    switcher.addEventListener("change", (e) => setLanguage(e.target.value));
  }

  document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("emeta_lang") || "fr";

  if (typeof window.I18N === "object") {
    applyLanguage(savedLang);
  }

  if (document.getElementById("languageSwitcher")) {
    initLanguageSwitcher();
  }

  if (document.getElementById("burgerBtn") && document.getElementById("mainNav")) {
    initBurgerMenu();
  }

  if (document.getElementById("ctaStart") || document.getElementById("btnCustomRequest")) {
    initCTA();
  }
});
