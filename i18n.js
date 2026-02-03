const resources = {
    fr: {
        "meta.title": "e-META LABS — Moteur IA Stratégique",
        "nav.home": "Vision", "nav.form": "Lancer l'Analyse",
        "hero.title": "L’Excellence Stratégique à la portée de chaque Décision.",
        "hero.subtitle": "Station de pilotage décisionnelle de niveau Cabinet Conseil.",
        "form.title": "Expertise Decision Engine",
        "engine.status": "SYSTÈME PRÊT",
        "group.general": "Périmètre & Expertise",
        "group.analysis": "Analyse Profonde",
        "group.output": "Canaux de Restitution",
        "field.projectTitle.label": "Titre de la Décision",
        "field.projectTitle.placeholder": "Ex: Expansion marché Afrique de l'Ouest",
        "field.domain.label": "Expertise Requise",
        "domain.ai": "Transformation IA & Digitale",
        "domain.fintech": "Fintech & Conformité Réglementaire",
        "domain.scaling": "Scaling & Expansion Internationale",
        "domain.funds": "Venture Capital & Levée de fonds",
        "domain.legal": "Ingénierie Juridique (OHADA/International)",
        "field.problem.label": "Problématique & Enjeux Critiques",
        "field.problem.placeholder": "Décrivez les enjeux critiques de votre situation...",
        "field.market.label": "Marché Cible & Concurrence",
        "field.market.placeholder": "Qui sont vos clients et concurrents ?",
        "field.fileLink.label": "Audit Documentaire (Lien Cloud)",
        "field.fileLink.placeholder": "Lien vers Business Plan, Contrat ou Bilan",
        "field.email.label": "Email de Direction",
        "field.whatsapp.label": "Ligne WhatsApp Expert",
        "hero.trust": "🔒 Souveraineté des données & Certification Blockchain",
        "form.submit": "Générer l'Expertise e-META",
        "footer.object": "Conception, développement et exploitation de solutions d'IA dédiées à l'aide à la décision.",
        "footer.disclaimer": "Note légale : e-META est une solution d'aide à la décision. Elle ne constitue pas et ne se substitue en aucun cas à un conseil réglementé."
    },
    en: {
        "meta.title": "e-META LABS — Strategic AI Engine",
        "nav.home": "Vision", "nav.form": "Launch Analysis",
        "hero.title": "Strategic Excellence for Every Critical Decision.",
        "hero.subtitle": "Management Consulting-grade decision station.",
        "form.title": "Expertise Decision Engine",
        "engine.status": "SYSTEM READY",
        "group.general": "Scope & Expertise",
        "domain.ai": "AI & Digital Transformation",
        "domain.fintech": "Fintech & Regulatory Compliance",
        "domain.scaling": "Strategic Scaling & Expansion",
        "domain.funds": "Venture Capital & Fundraising",
        "domain.legal": "Legal Engineering (OHADA/Intl)",
        "field.projectTitle.placeholder": "e.g. West Africa Market Expansion",
        "form.submit": "Generate e-META Expertise",
        "footer.disclaimer": "Legal Note: e-META is a decision support tool. It is not a substitute for regulated professional advice."
    },
    es: {
        "meta.title": "e-META LABS — Motor de IA Estratégica",
        "nav.home": "Visión", "nav.form": "Iniciar Análisis",
        "hero.title": "Excelencia Estratégica para cada Decisión Crítica.",
        "hero.subtitle": "Estación de decisión de nivel consultoría estratégica.",
        "form.title": "Expertise Decision Engine",
        "engine.status": "SISTEMA LISTO",
        "group.general": "Alcance y Especialización",
        "domain.ai": "Transformación IA y Digital",
        "domain.fintech": "Fintech y Cumplimiento Normativo",
        "domain.scaling": "Escalado y Expansión Internacional",
        "domain.funds": "Capital Riesgo y Financiación",
        "domain.legal": "Ingeniería Jurídica",
        "field.projectTitle.placeholder": "Ej: Expansión del mercado regional",
        "form.submit": "Generar Experiencia e-META",
        "footer.disclaimer": "Nota legal: e-META es una herramienta de apoyo a la decisión. No sustituye al asesoramiento profesional regulado."
    },
    ar: {
        "meta.title": "e-META LABS — محرك الذكاء الاصطناعي الاستراتيجي",
        "nav.home": "الرؤية", "nav.form": "بدء التحليل",
        "hero.title": "التميز الاستراتيجي في متناول كل قرار.",
        "hero.subtitle": "منصة توجيه القرار بمستوى استشاري عالمي.",
        "form.title": "Expertise Decision Engine",
        "engine.status": "النظام جاهز",
        "group.general": "النطاق والخبرة",
        "domain.ai": "التحول الرقمي والذكاء الاصطناعي",
        "domain.fintech": "التقنية المالية والامتثال",
        "domain.scaling": "التوسع والنمو الدولي",
        "domain.funds": "رأس المال الاستثماري والتمويل",
        "domain.legal": "الهندسة القانونية",
        "field.projectTitle.placeholder": "مثال: التوسع في الأسواق الدولية",
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
