console.log("translate.js chargé");

const translations = {
  fr: {
    "hero.title": "Donnez à vos décisions le niveau d’un cabinet de consulting premium",
    "hero.subtitle": "e-META analyse votre contexte, vos objectifs, vos contraintes, vos KPIs et vos ressources pour générer une feuille de route claire, exploitable et documentée.",
    "hero.cta": "Commencer une analyse stratégique",
    "btn.whatsapp": "Requête personnalisée"
  },

  en: {
    "hero.title": "Give your decisions the level of a premium consulting firm",
    "hero.subtitle": "e-META analyzes your context, objectives, constraints, KPIs and resources to generate a clear, actionable and documented roadmap.",
    "hero.cta": "Start a strategic analysis",
    "btn.whatsapp": "Custom request"
  },

  es: {
    "hero.title": "Dé a sus decisiones el nivel de una consultora premium",
    "hero.subtitle": "e-META analiza su contexto, objetivos, restricciones, KPIs y recursos para generar una hoja de ruta clara y accionable.",
    "hero.cta": "Iniciar un análisis estratégico",
    "btn.whatsapp": "Solicitud personalizada"
  },

  ar: {
    "hero.title": "امنح قراراتك مستوى شركة استشارات احترافية",
    "hero.subtitle": "يقوم e-META بتحليل السياق والأهداف والقيود ومؤشرات الأداء والموارد لإنشاء خارطة طريق واضحة وقابلة للتنفيذ.",
    "hero.cta": "بدء تحليل استراتيجي",
    "btn.whatsapp": "طلب مخصص"
  }
};

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("languageSwitcher");
  const defaultLang = "fr";

  applyTranslations(defaultLang);

  if (selector) {
    selector.value = defaultLang;
    selector.addEventListener("change", e => {
      applyTranslations(e.target.value);
    });
  }
});
