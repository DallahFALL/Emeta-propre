const resources = {
    fr: {
        "meta.title": "e-META LABS — Strategic AI",
        "nav.home": "Vision", "nav.form": "Lancer l'Analyse",
        "hero.title": "L’Excellence Stratégique à la portée de chaque Décision.",
        "hero.subtitle": "Station de pilotage décisionnelle de niveau Cabinet Conseil.",
        "engine.status": "SYSTÈME PRÊT",
        "group.general": "01 Périmètre & Expertise",
        "group.analysis": "02 Analyse de Contexte",
        "field.projectTitle.label": "Titre de la Décision",
        "field.projectTitle.placeholder": "Ex: Expansion hôtelière ou Audit IA...",
        "field.domain.label": "Expertise Requise",
        "domain.ai": "IA & Souveraineté Numérique",
        "domain.finance": "Finance Durable & ESG",
        "domain.legal": "Conformité Fintech (OHADA)",
        "domain.scaling": "Scaling & Gouvernance",
        "field.industry.label": "Secteur d'Activité",
        "industry.tourism": "Tourisme & Écotourisme",
        "industry.construction": "Immobilier & BTP Durable",
        "industry.agri": "Agri-Business & FoodTech",
        "industry.health": "HealthTech & Pharma",
        "industry.tech": "Digital & New Tech",
        "field.geography.label": "Zone d'Impact",
        "field.geography.placeholder": "Sénégal, Zone UEMOA, France...",
        "field.problem.label": "Problématique & Enjeux",
        "field.problem.placeholder": "Décrivez les enjeux critiques de votre situation...",
        "form.submit": "Générer l'Expertise e-META",
        "footer.disclaimer": "Note légale : e-META est une solution d'aide à la décision. Elle ne constitue pas et ne se substitue en aucun cas à un conseil réglementé."
    },
    en: {
        "meta.title": "e-META LABS — Strategic AI",
        "nav.home": "Vision", "nav.form": "Start Analysis",
        "hero.title": "Strategic Excellence for Every Critical Decision.",
        "hero.subtitle": "Management Consulting-grade decision station.",
        "engine.status": "SYSTEM READY",
        "group.general": "01 Scope & Expertise",
        "group.analysis": "02 Context Analysis",
        "field.projectTitle.placeholder": "e.g. Hotel expansion or AI Audit...",
        "field.domain.label": "Required Expertise",
        "domain.ai": "AI & Digital Sovereignty",
        "domain.finance": "Sustainable Finance & ESG",
        "domain.legal": "Fintech Compliance (OHADA)",
        "domain.scaling": "Scaling & Governance",
        "field.industry.label": "Industry Sector",
        "industry.tourism": "Tourism & Ecotourism",
        "industry.construction": "Real Estate & Construction",
        "industry.agri": "Agri-Business & FoodTech",
        "industry.health": "HealthTech & Pharma",
        "industry.tech": "Digital & New Tech",
        "field.geography.label": "Impact Zone",
        "field.geography.placeholder": "Senegal, EU, USA...",
        "field.problem.label": "Problem & Challenges",
        "field.problem.placeholder": "Describe the critical challenges...",
        "form.submit": "Generate e-META Expertise",
        "footer.disclaimer": "Legal Note: e-META is a decision-support solution. It is not a substitute for regulated professional advice."
    },
    es: {
        "meta.title": "e-META LABS — IA Estratégica",
        "nav.home": "Visión", "nav.form": "Iniciar Análisis",
        "hero.title": "Excelencia Estratégica para cada Decisión Crítica.",
        "hero.subtitle": "Estación de decisión de nivel consultoría.",
        "engine.status": "SISTEMA LISTO",
        "group.general": "01 Alcance y Especialización",
        "group.analysis": "02 Análisis de Contexto",
        "field.projectTitle.placeholder": "Ej: Expansión hotelera...",
        "field.domain.label": "Especialización Requerida",
        "domain.ai": "IA y Soberanía Digital",
        "domain.finance": "Finanzas Sostenibles",
        "domain.legal": "Fintech y Cumplimiento",
        "domain.scaling": "Escalado y Gobernanza",
        "field.industry.label": "Sector de Actividad",
        "industry.tourism": "Turismo y Ecoturismo",
        "industry.construction": "Construcción Sostenible",
        "industry.agri": "Agroindustria",
        "industry.health": "Salud y Pharma",
        "industry.tech": "Digital y Tecnología",
        "field.geography.label": "Zona de Impacto",
        "field.geography.placeholder": "España, México, Global...",
        "field.problem.label": "Problema y Desafíos",
        "field.problem.placeholder": "Describa los desafíos críticos...",
        "form.submit": "Generar Experiencia e-META",
        "footer.disclaimer": "Nota legal: e-META no sustituye al asesoramiento profesional regulado."
    },
    ar: {
        "meta.title": "e-META LABS — الذكاء الاصطناعي",
        "nav.home": "الرؤية", "nav.form": "بدء التحليل",
        "hero.title": "التميز الاستراتيجي في متناول كل قرار.",
        "hero.subtitle": "منصة توجيه القرار بمستوى استشاري عالمي.",
        "engine.status": "النظام جاهز",
        "group.general": "01 النطاق والخبرة",
        "group.analysis": "02 تحليل السياق",
        "field.projectTitle.placeholder": "مثال: التوسع الفندقي...",
        "field.domain.label": "الخبرة المطلوبة",
        "domain.ai": "الذكاء الاصطناعي والسيادة الرقمية",
        "domain.finance": "التمويل المستدام",
        "domain.legal": "الامتثال المالي",
        "domain.scaling": "التوسع والحوكمة",
        "field.industry.label": "قطاع النشاط",
        "industry.tourism": "السياحة البيئية",
        "industry.construction": "البناء المستدام",
        "industry.agri": "الأعمال الزراعية",
        "industry.health": "الصحة والصيدلة",
        "industry.tech": "التكنولوجيا الرقمية",
        "field.geography.label": "منطقة التأثير",
        "field.geography.placeholder": "السنغال، أوروبا، عالمي...",
        "field.problem.label": "المشكلة والتحديات",
        "field.problem.placeholder": "وصف التحديات الحرجة...",
        "form.submit": "إنشاء خبرة e-META",
        "footer.disclaimer": "ملاحظة قانونية: e-META هي أداة لدعم القرار ولا تغني عن الاستشارات المهنية."
    }
};

function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (resources[lang] && resources[lang][key]) el.innerHTML = resources[lang][key];
    });
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
