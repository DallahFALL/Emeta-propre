const resources = {
    fr: {
        "nav.home": "Accueil",
        "nav.form": "Expertise",
        "nav.privacy": "Confidentialité",
        "header.tagline": "Assistant IA stratégique de niveau Cabinet Conseil",
        "hero.title": "Donnez à vos décisions le niveau d’un cabinet de conseil premium",
        "hero.subtitle": "e-META structure votre contexte et vos objectifs pour produire une recommandation claire, actionnable et documentée.",
        "hero.cta": "Commencer l'analyse",
        "hero.trust": "Protégé par IA Souveraine & Blockchain",
        "hero.badge.title": "Analyse Stratégique",
        "hero.badge.text": "Une méthodologie structurée inspirée des plus grands cabinets mondiaux.",
        "hero.note": "Traitement analytique complexe, pas un simple chatbot.",
        "footer.rights": "Tous droits réservés.",
        "form.loading": "Initialisation de l'expert IA..."
    },
    en: {
        "nav.home": "Home",
        "nav.form": "Expertise",
        "nav.privacy": "Privacy",
        "header.tagline": "Strategic AI Assistant at Management Consulting Level",
        "hero.title": "Give your decisions the edge of a premium consulting firm",
        "hero.subtitle": "e-META structures your context and objectives to produce clear, actionable, and documented recommendations.",
        "hero.cta": "Start Analysis",
        "hero.trust": "Protected by Sovereign AI & Blockchain",
        "hero.badge.title": "Strategic Analysis",
        "hero.badge.text": "A structured methodology inspired by the world's leading consulting firms.",
        "hero.note": "Complex analytical processing, not a simple chatbot.",
        "footer.rights": "All rights reserved.",
        "form.loading": "Initializing AI Expert..."
    },
    es: {
        "nav.home": "Inicio",
        "nav.form": "Experiencia",
        "nav.privacy": "Privacidad",
        "header.tagline": "Asistente de IA estratégica a nivel de Consultoría de Gestión",
        "hero.title": "Dé a sus decisiones el nivel de una consultoría premium",
        "hero.subtitle": "e-META estructura su contexto y objetivos para producir recomendaciones claras, procesables y documentadas.",
        "hero.cta": "Iniciar análisis",
        "hero.trust": "Protegido por IA Soberana y Blockchain",
        "hero.badge.title": "Análisis Estratégico",
        "hero.badge.text": "Una metodología estructurada inspirada en las principales consultoras del mundo.",
        "hero.note": "Procesamiento analítico complejo, no es un simple chatbot.",
        "footer.rights": "Todos los derechos reservados.",
        "form.loading": "Iniciando experto en IA..."
    },
    ar: {
        "nav.home": "الرئيسية",
        "nav.form": "الخبرة",
        "nav.privacy": "الخصوصية",
        "header.tagline": "مساعد استراتيجي بالذكاء الاصطناعي بمستوى استشاري",
        "hero.title": "ارتقِ بقراراتك إلى مستوى الاستشارات المتميزة",
        "hero.subtitle": "تقوم e-META بهيكلة سياقك وأهدافك لتقديم توصيات واضحة وقابلة للتنفيذ وموثقة.",
        "hero.cta": "ابدأ التحليل",
        "hero.trust": "محمي بواسطة الذكاء الاصطناعي السيادي والبلوكشين",
        "hero.badge.title": "التحليل الاستراتيجي",
        "hero.badge.text": "منهجية منظمة مستوحاة من أكبر شركات الاستشارات العالمية.",
        "hero.note": "هذا ليس مجرد دردشة آلي. كل إجابة تتبع منهجية قرار متقدمة.",
        "footer.rights": "جميع الحقوق محفوظة.",
        "form.loading": "جارٍ تشغيل خبير الذكاء الاصطناعي..."
    }
};

function updateContent(lang) {
    // 1. Mettre à jour tous les textes qui ont l'attribut data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (resources[lang] && resources[lang][key]) {
            el.innerText = resources[lang][key];
        }
    });

    // 2. Gérer le sens de lecture (RTL pour l'arabe)
    const rtlStylesheet = document.getElementById('rtlStylesheet');
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
        if (rtlStylesheet) rtlStylesheet.disabled = false;
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = lang;
        if (rtlStylesheet) rtlStylesheet.disabled = true;
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('uiLangSelect');
    
    if (selector) {
        // Appliquer la langue sélectionnée par défaut au départ
        updateContent(selector.value);

        // Écouter les changements du menu déroulant
        selector.addEventListener('change', (e) => {
            updateContent(e.target.value);
        });
    }
});
