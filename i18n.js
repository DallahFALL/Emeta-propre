const resources = {
    fr: {
        "meta.title": "e-META LABS — Strategic AI Engine",
        "nav.home": "Vision", "nav.form": "Lancer l'Analyse",
        "hero.title": "L’Excellence Stratégique à la portée de chaque Décision.",
        "hero.subtitle": "Station de pilotage décisionnelle de niveau Cabinet Conseil.",
        "form.title": "Expertise Decision Engine",
        "engine.status": "SYSTÈME PRÊT",
        "group.general": "Périmètre & Expertise",
        "group.analysis": "Analyse de Contexte",
        "group.output": "Canaux de Restitution",
        "field.projectTitle.label": "Titre de la Décision",
        "field.projectTitle.placeholder": "Ex: Expansion marché Afrique de l'Ouest",
        "field.domain.label": "Expertise Requise",
        "domain.ai": "IA & Transformation Digitale",
        "domain.legal": "Juridique & Conformité OHADA",
        "domain.scaling": "Scaling & Expansion",
        "domain.finance": "Ingénierie Financière",
        "field.problem.label": "Problématique & Enjeux",
        "field.problem.placeholder": "Décrivez les enjeux critiques de votre situation...",
        "field.fileLink.label": "Audit de Document (Lien Cloud)",
        "field.fileLink.placeholder": "Lien vers Business Plan, Contrat ou Bilan",
        "field.email.label": "Email de Direction",
        "field.whatsapp.label": "Ligne WhatsApp Expert",
        "hero.trust": "🔒 Souveraineté des données & Certification Blockchain",
        "form.submit": "Générer l'Expertise e-META",
        "footer.object": "Conception, développement et exploitation de solutions d'IA dédiées à l'aide à la décision.",
        "footer.disclaimer": "Note légale : e-META est une solution d'aide à la décision. Elle ne constitue pas et ne se substitue en aucun cas à un conseil réglementé (avocat, notaire, expert-comptable)."
    },
    en: {
        "nav.home": "Vision", "nav.form": "Start Analysis",
        "hero.title": "Strategic Excellence for Every Critical Decision.",
        "hero.subtitle": "Management Consulting-grade decision station.",
        "engine.status": "SYSTEM READY",
        "group.general": "Scope & Expertise",
        "domain.ai": "AI & Digital Transformation",
        "field.projectTitle.placeholder": "e.g. Market Expansion West Africa",
        "form.submit": "Generate e-META Expertise",
        "footer.disclaimer": "Legal Note: e-META is a decision-support solution. It is not a substitute for regulated professional advice."
    },
    es: {
        "nav.home": "Visión", "nav.form": "Iniciar Análisis",
        "hero.title": "Excelencia Estratégica para cada Decisión Crítica.",
        "hero.subtitle": "Estación de decisión de nivel consultoría estratégica.",
        "engine.status": "SISTEMA LISTO",
        "group.general": "Alcance y Especialización",
        "form.submit": "Generar Experiencia e-META",
        "footer.disclaimer": "Nota legal: e-META es una herramienta de apoyo a la decisión. No sustituye al asesoramiento profesional regulado."
    },
    ar: {
        "nav.home": "الرؤية", "nav.form": "بدء التحليل",
        "hero.title": "التميز الاستراتيجي في متناول كل قرار.",
        "hero.subtitle": "منصة توجيه القرار بمستوى استشاري عالمي.",
        "engine.status": "النظام جاهز",
        "form.submit": "إنشاء خبرة e-META",
        "footer.disclaimer": "ملاحظة قانونية: e-META هي أداة لدعم القرار. لا تغني عن الاستشارات المهنية المنظمة."
    }
};

function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (resources[lang] && resources[lang][key]) {
            el.innerHTML = resources[lang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (resources[lang] && resources[lang][key]) {
            el.setAttribute('placeholder', resources[lang][key]);
        }
    });
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('uiLangSelect');
    if (selector) {
        updateContent(selector.value);
        selector.addEventListener('change', (e) => updateContent(e.target.value));
    }
});
