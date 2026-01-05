/* =====================================================
   e-META — i18n.js FINAL (PRODUCTION)
   Langues : FR / EN / ES / AR
   - Support data-i18n="a.b.c" (chemins)
   - Support data-i18n-placeholder="a.b.c"
   - N’efface JAMAIS un texte si la clé manque
   - Expose: window.applyTranslations(lang)
===================================================== */

(function () {
  "use strict";

  // ✅ Dictionnaire (garde ta structure actuelle)
  // IMPORTANT : tu peux coller ici ton I18N complet actuel tel quel.
  // L’essentiel est: window.I18N = { fr:{...}, en:{...}, es:{...}, ar:{...} }
  const I18N = {
    fr: {
      nav: { home: "Accueil", form: "Formulaire", privacy: "Confidentialité", cta: "Requête personnalisée" },
      hero: {
        title: "Donnez à vos décisions le niveau d’un cabinet de conseil premium",
        subtitle: "e-META structure votre contexte, objectifs, contraintes et indicateurs pour produire une recommandation claire, actionnable et documentée.",
        start: "Commencer une analyse stratégique"
      },
      privacy: {
        title: "Politique de confidentialité — e-META",
        intro: "Votre confiance est essentielle. Cette politique explique comment e-META collecte, utilise et protège vos informations.",
        s1: { title: "1. Introduction", p1: "e-META est un assistant IA d’aide à la décision. Cette politique décrit la gestion des données transmises via le site." },
        s2: {
          title: "2. Données collectées",
          li1: "Informations saisies dans le formulaire (contexte, objectifs, contraintes, etc.)",
          li2: "Coordonnées fournies volontairement (email / WhatsApp) pour la restitution",
          li3: "Données techniques minimales (journal serveur / sécurité) si nécessaires"
        },
        s3: {
          title: "3. Utilisation des données",
          li1: "Générer votre analyse et produire une recommandation structurée",
          li2: "Améliorer la qualité du service (statistiques globales anonymisées)",
          li3: "Assurer la sécurité et prévenir les abus"
        },
        s4: {
          title: "4. IA & responsabilité",
          li1: "e-META fournit une aide à la décision, pas un avis légal, médical ou financier.",
          li2: "Vous restez responsable des décisions prises à partir des recommandations."
        },
        s5: { title: "5. Conservation", p1: "Les données sont conservées le temps strictement nécessaire à la restitution et au suivi demandé." },
        s6: { title: "6. Sécurité", p1: "Mesures techniques et organisationnelles raisonnables pour protéger les données contre l’accès non autorisé." },
        s7: {
          title: "7. Droits utilisateurs",
          li1: "Accès / rectification / suppression sur demande",
          li2: "Retrait du consentement (si applicable)"
        },
        s8: { title: "8. Évolution", p1: "Cette politique peut être mise à jour. La date de mise à jour apparaît en bas de page." },
        s9: { title: "9. Acceptation", p1: "L’utilisation d’e-META implique l’acceptation de cette politique." },
        back: "← Retour à l’accueil",
        updated: "Dernière mise à jour :"
      }
    },

    en: {
      nav: { home: "Home", form: "Form", privacy: "Privacy", cta: "Custom request" },
      hero: { title: "Give your decisions a premium consulting-level structure", subtitle: "e-META organizes context, goals, constraints and KPIs to produce clear, actionable recommendations.", start: "Start a strategic analysis" },
      privacy: {
        title: "Privacy Policy — e-META",
        intro: "Your trust matters. This policy explains how e-META collects, uses, and protects your information.",
        s1: { title: "1. Introduction", p1: "e-META is an AI decision-support assistant. This policy describes how submitted data is handled." },
        s2: { title: "2. Data collected", li1: "Form inputs (context, goals, constraints, etc.)", li2: "Optional contact details (email / WhatsApp)", li3: "Minimal technical logs for security (if needed)" },
        s3: { title: "3. Use of data", li1: "Generate your analysis and structured recommendation", li2: "Improve service quality (anonymized aggregate stats)", li3: "Ensure security and prevent abuse" },
        s4: { title: "4. AI & liability", li1: "e-META provides decision support, not legal/medical/financial advice.", li2: "You remain responsible for decisions made from recommendations." },
        s5: { title: "5. Retention", p1: "Data is kept only as long as needed to deliver and support your request." },
        s6: { title: "6. Security", p1: "Reasonable technical and organizational measures are used to protect data." },
        s7: { title: "7. Your rights", li1: "Access / correction / deletion upon request", li2: "Withdraw consent (if applicable)" },
        s8: { title: "8. Updates", p1: "This policy may change. The update date appears at the bottom of the page." },
        s9: { title: "9. Acceptance", p1: "Using e-META implies acceptance of this policy." },
        back: "← Back to home",
        updated: "Last updated:"
      }
    },

    es: {
      nav: { home: "Inicio", form: "Formulario", privacy: "Privacidad", cta: "Solicitud personalizada" },
      hero: { title: "Lleve sus decisiones al nivel de una consultoría premium", subtitle: "e-META estructura el contexto, objetivos, restricciones e indicadores para producir recomendaciones claras y accionables.", start: "Iniciar un análisis estratégico" },
      privacy: {
        title: "Política de privacidad — e-META",
        intro: "Tu confianza es esencial. Esta política explica cómo e-META recopila, usa y protege tu información.",
        s1: { title: "1. Introducción", p1: "e-META es un asistente de apoyo a la toma de decisiones. Esta política describe el tratamiento de los datos enviados." },
        s2: { title: "2. Datos recopilados", li1: "Respuestas del formulario (contexto, objetivos, restricciones, etc.)", li2: "Datos de contacto opcionales (email / WhatsApp)", li3: "Registros técnicos mínimos por seguridad (si es necesario)" },
        s3: { title: "3. Uso de los datos", li1: "Generar tu análisis y recomendación estructurada", li2: "Mejorar el servicio (estadísticas globales anonimizadas)", li3: "Garantizar la seguridad y prevenir abusos" },
        s4: { title: "4. IA y responsabilidad", li1: "e-META ofrece apoyo, no asesoramiento legal/médico/financiero.", li2: "El usuario sigue siendo responsable de sus decisiones." },
        s5: { title: "5. Conservación", p1: "Los datos se conservan solo el tiempo necesario para la entrega y soporte." },
        s6: { title: "6. Seguridad", p1: "Medidas razonables para proteger los datos frente a accesos no autorizados." },
        s7: { title: "7. Derechos del usuario", li1: "Acceso / rectificación / eliminación bajo solicitud", li2: "Retiro del consentimiento (si aplica)" },
        s8: { title: "8. Cambios", p1: "Esta política puede actualizarse. La fecha aparece al final de la página." },
        s9: { title: "9. Aceptación", p1: "El uso de e-META implica la aceptación de esta política." },
        back: "← Volver al inicio",
        updated: "Última actualización:"
      }
    },

    ar: {
      nav: { home: "الرئيسية", form: "النموذج", privacy: "الخصوصية", cta: "طلب مخصص" },
      hero: { title: "ارفع قراراتك إلى مستوى الاستشارة الاحترافية", subtitle: "e-META ينظم السياق والأهداف والقيود ومؤشرات الأداء لإنتاج توصيات واضحة وقابلة للتنفيذ.", start: "بدء تحليل استراتيجي" },
      privacy: {
        title: "سياسة الخصوصية — e-META",
        intro: "ثقتك مهمة. تشرح هذه السياسة كيف يجمع e-META معلوماتك ويستخدمها ويحميها.",
        s1: { title: "١. مقدمة", p1: "e-META مساعد لدعم اتخاذ القرار. توضح هذه السياسة كيفية التعامل مع البيانات المُرسلة." },
        s2: { title: "٢. البيانات التي نجمعها", li1: "مدخلات النموذج (السياق، الأهداف، القيود…)", li2: "بيانات تواصل اختيارية (البريد / واتساب)", li3: "سجلات تقنية دنيا للأمان (عند الحاجة)" },
        s3: { title: "٣. استخدام البيانات", li1: "إنتاج التحليل والتوصية المنظمة", li2: "تحسين الخدمة (إحصاءات مجمعة ومجهولة)", li3: "تعزيز الأمان ومنع إساءة الاستخدام" },
        s4: { title: "٤. الذكاء الاصطناعي والمسؤولية", li1: "e-META دعم لاتخاذ القرار وليس استشارة قانونية/طبية/مالية.", li2: "يبقى المستخدم مسؤولاً عن قراراته." },
        s5: { title: "٥. مدة الاحتفاظ", p1: "نحتفظ بالبيانات للمدة اللازمة فقط لتسليم النتائج ودعم الطلب." },
        s6: { title: "٦. الأمان", p1: "تُطبق إجراءات معقولة لحماية البيانات من الوصول غير المصرح به." },
        s7: { title: "٧. حقوق المستخدم", li1: "الوصول/التصحيح/الحذف عند الطلب", li2: "سحب الموافقة (إن وُجدت)" },
        s8: { title: "٨. التحديثات", p1: "قد تتغير هذه السياسة. يظهر تاريخ التحديث أسفل الصفحة." },
        s9: { title: "٩. القبول", p1: "استخدام e-META يعني قبول هذه السياسة." },
        back: "← العودة للرئيسية",
        updated: "آخر تحديث:"
      }
    }
  };

  // ✅ Expose global
  window.I18N = I18N;

  function getByPath(obj, path) {
    return path.split(".").reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
  }

  // ✅ Moteur UNIQUE utilisé partout
  window.applyTranslations = function (lang) {
    const dict = window.I18N?.[lang] || window.I18N?.fr;
    if (!dict) return;

    document.documentElement.lang = lang;
    const isRTL = (lang === "ar");
    document.documentElement.dir = isRTL ? "rtl" : "ltr";

    // Texte (NE PAS EFFACER si clé manquante)
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = getByPath(dict, key);
      if (typeof val === "string") el.textContent = val;
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = getByPath(dict, key);
      if (typeof val === "string") el.setAttribute("placeholder", val);
    });
  };
})();
