const resources = {
    fr: {
        "header.tagline": "L'intelligence stratégique au service de vos décisions.",
        "nav.home": "Accueil",
        "nav.form": "Expertise",
        "nav.privacy": "Confidentialité",
        "hero.title": "L’Excellence Stratégique à la portée de chaque Décision.",
        "hero.subtitle": "Transformez vos problématiques en plans d'action structurés grâce à une orchestration d'IA de niveau Cabinet Conseil.",
        "hero.cta": "Commencer l'analyse stratégique",
        "hero.trust": "Souveraineté des données & Horodatage Blockchain",
        "step1.title": "Diagnostic",
        "step1.text": "Capture précise de votre contexte via nos formulaires intelligents.",
        "step2.title": "Orchestration",
        "step2.text": "Analyse croisée par nos agents experts (Juridique, Fiscal, Stratégie).",
        "step3.title": "Livrable",
        "step3.text": "Réception de votre rapport d'expertise haute fidélité instantanément.",
        "footer.object": "Conception, développement et exploitation de solutions d'IA dédiées à l'aide à la décision.",
        "footer.disclaimer": "Note légale : e-META est une solution d'aide à la décision. Elle ne se substitue en aucun cas à un conseil réglementé.",
        "footer.rights": "Tous droits réservés."
    },
    en: {
        "header.tagline": "Strategic intelligence at the service of your decisions.",
        "nav.home": "Home",
        "nav.form": "Expertise",
        "nav.privacy": "Privacy",
        "hero.title": "Strategic Excellence for Every Critical Decision.",
        "hero.subtitle": "Transform complex challenges into structured action plans with Management Consulting grade AI orchestration.",
        "hero.cta": "Start Strategic Analysis",
        "hero.trust": "Data Sovereignty & Blockchain Timestamping",
        "step1.title": "Diagnostic",
        "step1.text": "Precise context capture through our smart forms.",
        "step2.title": "Orchestration",
        "step2.text": "Cross-analysis by our expert agents.",
        "step3.title": "Deliverable",
        "step3.text": "Instant delivery of your high-fidelity expertise report.",
        "footer.object": "Design and operation of AI solutions dedicated to decision support.",
        "footer.disclaimer": "Legal Note: e-META is a decision-support tool. It is not a substitute for regulated professional advice.",
        "footer.rights": "All rights reserved."
    },
    es: {
        "header.tagline": "Inteligencia estratégica al servicio de sus decisiones.",
        "nav.home": "Inicio",
        "nav.form": "Experiencia",
        "nav.privacy": "Privacidad",
        "hero.title": "Excelencia Estratégica para cada Decisión Crítica.",
        "hero.subtitle": "Transforme desafíos complejos en planes de acción estructurados con orquestación de IA de nivel consultoría.",
        "hero.cta": "Iniciar Análisis Estratégico",
        "hero.trust": "Soberanía de Datos y Blockchain",
        "step1.title": "Diagnóstico",
        "step1.text": "Captura de contexto precisa mediante formularios inteligentes.",
        "step2.title": "Orquestación",
        "step2.text": "Análisis cruzado por nuestros agentes expertos.",
        "step3.title": "Resultado",
        "step3.text": "Entrega instantánea de su informe de expertos de alta fidelidad.",
        "footer.object": "Diseño y operación de soluciones de IA dedicadas al apoyo a la decisión.",
        "footer.disclaimer": "Nota legal: e-META es una solución de apoyo a la decisión. No sustituye al asesoramiento profesional regulado.",
        "footer.rights": "Todos los derechos reservados."
    },
    ar: {
        "header.tagline": "الذكاء الاستراتيجي في خدمة قراراتك.",
        "nav.home": "الرئيسية",
        "nav.form": "الخبرة",
        "nav.privacy": "الخصوصية",
        "hero.title": "التميز الاستراتيجي في متناول كل قرار.",
        "hero.subtitle": "حول تحدياتك المعقدة إلى خطط عمل منظمة من خلال تنسiq ذكاء اصطناعي بمستوى استشاري.",
        "hero.cta": "ابدأ التحليل الاستراتيجي",
        "hero.trust": "سيادة البيانات والتوثيق عبر البلوكشين",
        "step1.title": "التشخيص",
        "step1.text": "التقاط دقيق لسياقك من خلال نماذجنا الذكية.",
        "step2.title": "التنسيق",
        "step2.text": "تحليل متقاطع بواسطة خبرائنا.",
        "step3.title": "النتائج",
        "step3.text": "تسليم فوري لتقرير الخبرة عالي الدقة.",
        "footer.object": "تصميم وتشغيل حلول الذكاء الاصطناعي المخصصة لدعم القرار.",
        "footer.disclaimer": "ملاحظة قانونية: e-META هو حل لدعم القرار. لا يحل محل الاستشارات المهنية المنظمة.",
        "footer.rights": "جميع الحقوق محفوظة."
    }
};

function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (resources[lang] && resources[lang][key]) {
            el.innerHTML = resources[lang][key];
        }
    });
    // Gère le sens de lecture pour l'arabe
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('uiLangSelect');
    if (selector) {
        // Appliquer la langue initiale
        updateContent(selector.value);
        // Écouter les changements
        selector.addEventListener('change', (e) => updateContent(e.target.value));
    }
});
