const resources = {
    fr: {
        "header.tagline": "Assistant IA stratégique de niveau Cabinet Conseil",
        "nav.home": "Accueil",
        "nav.form": "Expertise",
        "nav.privacy": "Confidentialité",
        "hero.title": "Donnez à vos décisions le niveau d’un cabinet de conseil premium",
        "hero.subtitle": "e-META structure votre contexte et vos objectifs pour produire une recommandation claire, actionnable et documentée.",
        "hero.cta": "Commencer l'analyse stratégique",
        "hero.trust": "Protégé par IA Souveraine & Blockchain",
        "hero.badge.title": "Analyse Stratégique",
        "hero.badge.text": "Une méthodologie structurée inspirée des plus grands cabinets mondiaux.",
        "hero.note": "Ce n'est pas un chatbot. Chaque réponse suit une méthodologie décisionnelle avancée.",
        "footer.rights": "Tous droits réservés."
    },
    en: {
        "header.tagline": "Strategic AI Assistant at Management Consulting Level",
        "nav.home": "Home",
        "nav.form": "Expertise",
        "nav.privacy": "Privacy",
        "hero.title": "Give your decisions the edge of a premium consulting firm",
        "hero.subtitle": "e-META structures your context and goals to produce clear, actionable, and documented recommendations.",
        "hero.cta": "Start strategic analysis",
        "hero.trust": "Protected by Sovereign AI & Blockchain",
        "hero.badge.title": "Strategic Analysis",
        "hero.badge.text": "A structured methodology inspired by the world's leading consulting firms.",
        "hero.note": "This is not a chatbot. Every response follows advanced decision-making methodology.",
        "footer.rights": "All rights reserved."
    },
    es: {
        "header.tagline": "Asistente de IA estratégica a nivel de Consultoría de Gestión",
 para producir recomendaciones claras, accionables y documentadas.",
        "hero.cta": "Iniciar análisis",
        "hero.trust": "Protegido por IA Soberana y Blockchain",
        "hero.badge.title": "Análisis Estratégico",
        "hero.badge.text": "Una metodología estructurada inspirada en las principales consultoras del mundo.",
        "hero.note": "Procesamiento analítico complejo, no es un simple chatbot.",
        "footer.rights": "Todos los derechos reservados.",
        "form.loading        "nav.home": "Inicio",
        "nav.form": "Experiencia",
        "nav.privacy": "Privacidad",
        "hero.title": "Dé a sus decisiones el nivel de una consultoría premium",
        "hero.subtitle": "e-META estructura su contexto y objetivos para producir recomendaciones claras, procesables y documentadas.",
        "hero.cta": "Iniciar análisis estratégico",
        "hero.trust": "Protegido por IA Soberana y Blockchain",
        "hero.badge.title": "Análisis": "Iniciando experto en IA..."
    },
    ar: {
        "nav.home": "الرئيسية",
        "nav.form": "الخبرة",
        "nav.privacy": "الخصوصية",
        "header.tagline": "مساعد استراتيجي بالذكاء الاصطناعي بمستوى استشاري",
        "hero.title": "ارتقِ بقراراتك إلى مستوى الاست Estratégico",
        "hero.badge.text": "Una metodología estructurada inspirada en las principales consultoras del mundo.",
        "hero.note": "No es un chatbot. Cada respuesta sigue una metodología de decisión avanzada.",
        "footer.rights": "Todos los derechos reservados."
    },
    ar: {
        "header.tagline": "مساعد استراتيجي بالذكاء الاصطناعي بمستوى استششارات المتميزة",
        "hero.subtitle": "تقوم e-META بهيكلة سياقك وأهدافك لتقديم توصيات واضحة وقابلة للتنفيذ وموثقة.",
        "hero.cta": "ابدأ التحليل",
        "hero.trust": "محمي بواسطة الذكاء الاصطناعي السيادي والبلوكشين",
        "hero.badge.title": "التحليل الاستراتيجي",
        "hero.badge.text": "منهجية منظمة مستوحاة من أكبر شركات الاستشارات العالمية.",
        "hero.note": "معالجة تحليلية معقدة، وليس مجرد دردشة آلي.",
        "footer.rights": "جميع الحقوق محفوظة.",
        "form.loading": "جارٍ تشغيل خبير الذكاء الاصطناعي..."
    }
};

function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttributeاري",
        "nav.home": "الرئيسية",
        "nav.form": "الخبرة",
        "nav.privacy": "الخصوصية",
        "hero.title": "ارتقِ بقراراتك إلى مستوى الاستشارات المتميزة",
        "hero.subtitle": "تقوم e-META بهيكلة سياقك وأهدافك لتقديم توصيات واضحة وقابلة للتنفيذ وموثقة.",
        "hero.cta": "ابدأ التحليل الاستراتيجي",
        "hero.trust": "محمي بواسطة الذكاء الاصطناعي السيادي والبلوكشين",
        "hero.badge.title": "التحليل الاستراتيجي",
        "hero.badge.text": "منهجية منظمة مستوحاة من أكبر شركات الاستشارات العالمية.",
        "hero.note": "هذا ليس مجرد دردشة آلي. كل إجابة تتبع منهجية قرار متقدمة.",
        "footer.('data-i18n');
        if (resources[lang] && resources[lang][key]) {
            el.innerText = resources[lang][key];
        }
    });

    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
    }
}

// Initialisation au chargement
document.addEventListener('DOMContentLoadedrights": "جميع الحقوق محفوظة."
    }
};
