const resources = {
    fr: {
        "header.tagline": "Assistant IA stratégique de niveau Cabinet Conseil",
        "hero.title": "Donnez à vos décisions le niveau d’un cabinet de conseil premium",
        "hero.cta": "Commencer l'analyse stratégique",
        "hero.note": "Ce n'est pas un chatbot. Chaque réponse suit une méthodologie décisionnelle avancée."
    },
    en: {
        "header.tagline": "Strategic AI Assistant at Management Consulting Level",
        "hero.title": "Give your decisions the edge of a premium consulting firm",
        "hero.cta": "Start strategic analysis",
        "hero.note": "This is not a chatbot. Every response follows advanced decision-making methodology."
    },
    es: {
        "header.tagline": "Asistente de IA estratégica a nivel de Consultoría de Gestión",
        "hero.title": "Dé a sus decisiones el nivel de una consultoría premium",
        "hero.cta": "Iniciar análisis estratégico",
        "hero.note": "No es un chatbot. Cada respuesta sigue una metodología de decisión avanzada."
    },
    ar: {
        "header.tagline": "مساعد استراتيجي بالذكاء الاصطناعي بمستوى استشاري",
        "hero.title": "ارتقِ بقراراتك إلى مستوى الاستشارات المتميزة",
        "hero.cta": "ابدأ التحليل الاستراتيجي",
        "hero.note": "هذا ليس مجرد دردشة آلي. كل إجابة تتبع منهجية قرار متقدمة."
    }
};

function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (resources[lang][key]) {
            el.innerText = resources[lang][key];
        }
    });

    // Gestion du sens de lecture (LTR vs RTL)
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.getElementById('rtlStylesheet').disabled = false;
    } else {
        document.documentElement.dir = 'ltr';
        document.getElementById('rtlStylesheet').disabled = true;
    }
}

document.getElementById('uiLangSelect').addEventListener('change', (e) => {
    updateContent(e.target.value);
});
