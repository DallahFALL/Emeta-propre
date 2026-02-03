const resources = {
    fr: {
        "meta.title": "e-META LABS — Strategic AI Engine",
        "nav.home": "Vision", "nav.form": "Lancer l'Analyse",
        "hero.title": "L’Excellence Stratégique à la portée de chaque Décision.",
        "hero.subtitle": "Station de pilotage décisionnelle de niveau Cabinet Conseil pour entrepreneurs et dirigeants.",
        "form.title": "Expertise Decision Engine",
        "engine.status": "SYSTÈME PRÊT",
        "group.general": "Périmètre & Expertise",
        "group.analysis": "Analyse de Contexte",
        "group.output": "Canaux de Restitution",
        "field.projectTitle.label": "Titre de la Décision",
        "field.projectTitle.placeholder": "Ex: Expansion hôtelière ou Audit IA...",
        "field.domain.label": "Expertise Requise",
        "domain.ai": "IA & Souveraineté Numérique",
        "domain.finance": "Finance Durable & ESG",
        "domain.legal": "Conformité Fintech (OHADA)",
        "domain.scaling": "Scaling & Gouvernance Global",
        "field.industry.label": "Secteur d'Activité",
        "industry.tourism": "Tourisme & Écotourisme",
        "industry.construction": "BTP & Immobilier Durable",
        "industry.agri": "Agri-Business & FoodTech",
        "industry.tech": "Digital & Nouvelles Tech",
        "field.geography.label": "Zone d'Impact",
        "field.geography.placeholder": "Sénégal, Zone UEMOA, France...",
        "field.problem.label": "Problématique & Enjeux",
        "field.problem.placeholder": "Décrivez les enjeux critiques de votre situation...",
        "field.fileLink.label": "Audit de Document (Lien Cloud)",
        "field.fileLink.placeholder": "Lien vers Business Plan, Contrat ou Bilan",
        "field.email.label": "Email de Direction",
        "field.whatsapp.label": "Ligne WhatsApp Expert",
        "field.outputMode.label": "Mode de livraison souhaité",
        "hero.trust": "🔒 Souveraineté des données & Certification Blockchain",
        "form.submit": "GÉNÉRER L'EXPERTISE E-META",
        "footer.object": "Conception, développement et exploitation de solutions d'IA dédiées à l'aide à la décision.",
        "footer.disclaimer": "Note légale : e-META est une solution d'aide à la décision. Elle ne se substitue en aucun cas à un conseil réglementé (avocat, notaire, expert-comptable)."
    },
    en: {
        "nav.home": "Vision", "nav.form": "Start Analysis",
        "hero.title": "Strategic Excellence for Every Critical Decision.",
        "hero.subtitle": "Management Consulting-grade decision station for leaders.",
        "engine.status": "SYSTEM READY",
        "group.general": "Scope & Expertise",
        "field.projectTitle.placeholder": "e.g. Hotel expansion or AI Audit...",
        "domain.ai": "AI & Digital Sovereignty",
        "domain.finance": "Sustainable Finance & ESG",
        "domain.legal": "Fintech Compliance (OHADA)",
        "domain.scaling": "Global Scaling & Governance",
        "field.industry.label": "Industry Sector",
        "industry.tourism": "Tourism & Ecotourism",
        "industry.construction": "Construction & Real Estate",
        "industry.agri": "Agri-Business & FoodTech",
        "industry.tech": "Digital & New Tech",
        "form.submit": "GENERATE E-META EXPERTISE",
        "footer.disclaimer": "Legal Note: e-META is a decision-support solution. It is by no means a substitute for regulated professional advice."
    },
    es: {
        "nav.home": "Visión", "nav.form": "Iniciar Análisis",
        "hero.title": "Excelencia Estratégica para cada Decisión Crítica.",
        "hero.subtitle": "Estación de decisión de nivel consultoría estratégica.",
        "engine.status": "SISTEMA LISTO",
        "group.general": "Alcance y Especialización",
        "domain.ai": "IA y Soberanía Digital",
        "domain.finance": "Finanzas Sostenibles",
        "industry.tourism": "Turismo y Ecoturismo",
        "form.submit": "GENERAR EXPERIENCIA E-META",
        "footer.disclaimer": "Nota legal: e-META no sustituye al asesoramiento profesional regulado."
    },
    ar: {
        "nav.home": "الرؤية", "nav.form": "بدء التحليل",
        "hero.title": "التميز الاستراتيجي في متناول كل قرار.",
        "hero.subtitle": "منصة توجيه القرار بمستوى استشاري عالمي.",
        "engine.status": "النظام جاهز",
        "group.general": "النطاق والخبرة",
        "domain.ai": "الذكاء الاصطناعي والسيادة الرقمية",
        "industry.tourism": "السياحة البيئية",
        "form.submit": "إنشاء خبرة e-META",
        "footer.disclaimer": "ملاحظة قانونية: e-META هي أداة لدعم القرار ولا تغني عن الاستشارات المهنية."
    }
};

function updateContent(lang) {
    // Traduction des textes normaux
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (resources[lang] && resources[lang][key]) el.innerHTML = resources[lang][key];
    });

    // Traduction des placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (resources[lang] && resources[lang][key]) el.setAttribute('placeholder', resources[lang][key]);
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
