(function () {
  "use strict";

  /* =========================
     CONFIG
  ========================= */

  const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/9giawgap6b3yjmxtx5i9bc30hjixbu48"; // ⬅️ REMPLACE ICI

  /* =========================
     TRANSLATIONS
  ========================= */

  const translations = {
    fr: window.TRANSLATIONS_FR || 
    {/* ===== PRIVACY ===== */
"privacy.meta.title": "Politique de confidentialité – e-META",
"privacy.title": "Politique de confidentialité",
"privacy.intro":
  "La présente politique de confidentialité explique comment e-META collecte, utilise et protège vos informations lorsque vous utilisez notre assistant d’aide à la décision.",

"privacy.section1.title": "1. Responsable du traitement",
"privacy.section1.text":
  "Le service e-META est édité par son porteur de projet. Pour toute question relative à la protection des données, vous pouvez nous contacter via les coordonnées indiquées sur le site.",

"privacy.section2.title": "2. Données collectées",
"privacy.section2.text":
  "Dans le cadre de l’utilisation du service e-META, les catégories de données suivantes peuvent être collectées :",
"privacy.section2.item1": "Informations fournies volontairement dans le formulaire (contexte, objectifs, contraintes, données de projet).",
"privacy.section2.item2": "Coordonnées de contact si vous les renseignez (adresse e-mail, numéro WhatsApp).",
"privacy.section2.item3": "Liens vers des documents externes (Google Drive, Dropbox, Notion, PDF en ligne, etc.).",

"privacy.section3.title": "3. Finalité du traitement",
"privacy.section3.item1": "Générer une analyse et une synthèse d’aide à la décision via e-META.",
"privacy.section3.item2": "Restituer cette synthèse selon le mode choisi (affichage, e-mail, WhatsApp, PDF).",
"privacy.section3.item3": "Améliorer la qualité, la pertinence et l’expérience utilisateur du service.",

"privacy.section4.title": "4. Utilisation de l’intelligence artificielle",
"privacy.section4.text1":
  "e-META utilise des technologies d’intelligence artificielle pour analyser les informations fournies et produire des recommandations structurées.",
"privacy.section4.text2":
  "Les résultats générés constituent une aide à la décision et ne remplacent pas un conseil juridique, financier ou professionnel personnalisé.",

"privacy.section5.title": "5. Partage des données",
"privacy.section5.text":
  "Les données collectées ne sont ni vendues ni cédées à des tiers. Elles peuvent être traitées par des prestataires techniques strictement nécessaires au fonctionnement du service.",

"privacy.section6.title": "6. Durée de conservation",
"privacy.section6.text":
  "Les données sont conservées pendant une durée strictement nécessaire à la réalisation du service, puis supprimées ou anonymisées.",

"privacy.section7.title": "7. Sécurité",
"privacy.section7.text":
  "e-META met en œuvre des mesures techniques et organisationnelles raisonnables afin de protéger vos données contre tout accès non autorisé, perte ou divulgation.",

"privacy.section8.title": "8. Vos droits",
"privacy.section8.item1": "Droit d’accès à vos données personnelles.",
"privacy.section8.item2": "Droit de rectification des données inexactes.",
"privacy.section8.item3": "Droit à l’effacement, dans les limites prévues par la loi.",
"privacy.section8.item4": "Droit d’opposition ou de limitation du traitement.",

"privacy.section9.title": "9. Modifications de la politique",
"privacy.section9.text":
  "La présente politique de confidentialité peut être modifiée à tout moment afin de refléter les évolutions du service ou des obligations légales.",

"privacy.section10.title": "10. Contact",
"privacy.section10.text":
  "Pour toute question relative à la protection de vos données, vous pouvez nous contacter via les informations disponibles sur le site e-META.",

"footer.back": "Retour à l’accueil"
},
    en: window.TRANSLATIONS_EN || 
    {/* ===== PRIVACY ===== */
"privacy.meta.title": "Privacy Policy – e-META",
"privacy.title": "Privacy Policy",
"privacy.intro":
  "This privacy policy explains how e-META collects, uses, and protects your information when you use our decision-support assistant.",

"privacy.section1.title": "1. Data controller",
"privacy.section1.text":
  "The e-META service is operated by its project owner. For any questions related to data protection, you may contact us via the information provided on the website.",

"privacy.section2.title": "2. Data collected",
"privacy.section2.text":
  "When using the e-META service, the following categories of data may be collected:",
"privacy.section2.item1": "Information voluntarily provided in the form (context, objectives, constraints, project data).",
"privacy.section2.item2": "Contact details if provided (email address, WhatsApp number).",
"privacy.section2.item3": "Links to external documents (Google Drive, Dropbox, Notion, online PDFs, etc.).",

"privacy.section3.title": "3. Purpose of processing",
"privacy.section3.item1": "Generate a decision-support analysis and synthesis via e-META.",
"privacy.section3.item2": "Deliver the synthesis according to the selected method (on-screen, email, WhatsApp, PDF).",
"privacy.section3.item3": "Improve service quality, relevance, and user experience.",

"privacy.section4.title": "4. Use of artificial intelligence",
"privacy.section4.text1":
  "e-META uses artificial intelligence technologies to analyze the information provided and generate structured recommendations.",
"privacy.section4.text2":
  "The generated results are intended as decision-support and do not replace professional legal, financial, or business advice.",

"privacy.section5.title": "5. Data sharing",
"privacy.section5.text":
  "Collected data is neither sold nor transferred to third parties. It may be processed by technical service providers strictly necessary for operating the service.",

"privacy.section6.title": "6. Data retention",
"privacy.section6.text":
  "Data is retained only for the duration strictly necessary to provide the service, then deleted or anonymized.",

"privacy.section7.title": "7. Security",
"privacy.section7.text":
  "e-META implements reasonable technical and organizational measures to protect your data against unauthorized access, loss, or disclosure.",

"privacy.section8.title": "8. Your rights",
"privacy.section8.item1": "Right to access your personal data.",
"privacy.section8.item2": "Right to correct inaccurate data.",
"privacy.section8.item3": "Right to erasure, subject to legal limitations.",
"privacy.section8.item4": "Right to object to or restrict processing.",

"privacy.section9.title": "9. Policy updates",
"privacy.section9.text":
  "This privacy policy may be updated at any time to reflect changes in the service or legal requirements.",

"privacy.section10.title": "10. Contact",
"privacy.section10.text":
  "For any questions regarding data protection, you may contact us using the information available on the e-META website.",

"footer.back": "Back to home"
},
    es: window.TRANSLATIONS_ES || 
    {/* ===== PRIVACY ===== */
"privacy.meta.title": "Política de privacidad – e-META",
"privacy.title": "Política de privacidad",
"privacy.intro":
  "Esta política de privacidad explica cómo e-META recopila, utiliza y protege su información cuando utiliza nuestro asistente de toma de decisiones.",

"privacy.section1.title": "1. Responsable del tratamiento",
"privacy.section1.text":
  "El servicio e-META es operado por su promotor. Para cualquier consulta relacionada con la protección de datos, puede contactarnos a través de la información disponible en el sitio web.",

"privacy.section2.title": "2. Datos recopilados",
"privacy.section2.text":
  "Al utilizar el servicio e-META, pueden recopilarse las siguientes categorías de datos:",
"privacy.section2.item1": "Información proporcionada voluntariamente en el formulario (contexto, objetivos, restricciones, datos del proyecto).",
"privacy.section2.item2": "Datos de contacto si se facilitan (correo electrónico, número de WhatsApp).",
"privacy.section2.item3": "Enlaces a documentos externos (Google Drive, Dropbox, Notion, PDF en línea, etc.).",

"privacy.section3.title": "3. Finalidad del tratamiento",
"privacy.section3.item1": "Generar un análisis y una síntesis de apoyo a la toma de decisiones mediante e-META.",
"privacy.section3.item2": "Entregar la síntesis según el método seleccionado (pantalla, correo electrónico, WhatsApp, PDF).",
"privacy.section3.item3": "Mejorar la calidad, relevancia y experiencia del servicio.",

"privacy.section4.title": "4. Uso de inteligencia artificial",
"privacy.section4.text1":
  "e-META utiliza tecnologías de inteligencia artificial para analizar la información proporcionada y generar recomendaciones estructuradas.",
"privacy.section4.text2":
  "Los resultados generados son una ayuda a la toma de decisiones y no sustituyen el asesoramiento profesional jurídico, financiero o empresarial.",

"privacy.section5.title": "5. Compartición de datos",
"privacy.section5.text":
  "Los datos recopilados no se venden ni se ceden a terceros. Pueden ser tratados por proveedores técnicos estrictamente necesarios para el funcionamiento del servicio.",

"privacy.section6.title": "6. Conservación de los datos",
"privacy.section6.text":
  "Los datos se conservan únicamente durante el tiempo estrictamente necesario para prestar el servicio y luego se eliminan o anonimizan.",

"privacy.section7.title": "7. Seguridad",
"privacy.section7.text":
  "e-META implementa medidas técnicas y organizativas razonables para proteger sus datos frente a accesos no autorizados, pérdidas o divulgaciones.",

"privacy.section8.title": "8. Sus derechos",
"privacy.section8.item1": "Derecho de acceso a sus datos personales.",
"privacy.section8.item2": "Derecho de rectificación de datos inexactos.",
"privacy.section8.item3": "Derecho de supresión, dentro de los límites legales.",
"privacy.section8.item4": "Derecho de oposición o limitación del tratamiento.",

"privacy.section9.title": "9. Cambios en la política",
"privacy.section9.text":
  "Esta política de privacidad puede actualizarse en cualquier momento para reflejar cambios en el servicio o en las obligaciones legales.",

"privacy.section10.title": "10. Contacto",
"privacy.section10.text":
  "Para cualquier consulta relacionada con la protección de datos, puede contactarnos a través de la información disponible en el sitio web de e-META.",

"footer.back": "Volver al inicio"
},
    ar: window.TRANSLATIONS_AR || 
    {/* ===== PRIVACY ===== */
"privacy.meta.title": "سياسة الخصوصية – e-META",
"privacy.title": "سياسة الخصوصية",
"privacy.intro":
  "توضح سياسة الخصوصية هذه كيفية قيام e-META بجمع واستخدام وحماية معلوماتك عند استخدام مساعد اتخاذ القرار.",

"privacy.section1.title": "1. مسؤول معالجة البيانات",
"privacy.section1.text":
  "يتم تشغيل خدمة e-META من قبل صاحب المشروع. لأي استفسار يتعلق بحماية البيانات، يمكنكم التواصل معنا عبر المعلومات المتاحة على الموقع.",

"privacy.section2.title": "2. البيانات التي يتم جمعها",
"privacy.section2.text":
  "عند استخدام خدمة e-META، قد يتم جمع الفئات التالية من البيانات:",
"privacy.section2.item1": "المعلومات المقدمة طوعًا في النموذج (السياق، الأهداف، القيود، بيانات المشروع).",
"privacy.section2.item2": "بيانات الاتصال في حال تقديمها (البريد الإلكتروني، رقم واتساب).",
"privacy.section2.item3": "روابط إلى مستندات خارجية (Google Drive أو Dropbox أو Notion أو ملفات PDF عبر الإنترنت).",

"privacy.section3.title": "3. الغرض من المعالجة",
"privacy.section3.item1": "إنشاء تحليل وملخص لدعم اتخاذ القرار عبر e-META.",
"privacy.section3.item2": "تسليم الملخص وفق الطريقة المختارة (عرض مباشر، بريد إلكتروني، واتساب، PDF).",
"privacy.section3.item3": "تحسين جودة الخدمة وملاءمتها وتجربة المستخدم.",

"privacy.section4.title": "4. استخدام الذكاء الاصطناعي",
"privacy.section4.text1":
  "يستخدم e-META تقنيات الذكاء الاصطناعي لتحليل المعلومات المقدمة وإنتاج توصيات منظمة.",
"privacy.section4.text2":
  "النتائج المنتجة هي أداة لدعم اتخاذ القرار ولا تُعد بديلاً عن الاستشارات القانونية أو المالية أو المهنية المتخصصة.",

"privacy.section5.title": "5. مشاركة البيانات",
"privacy.section5.text":
  "لا يتم بيع البيانات أو مشاركتها مع أطراف ثالثة. وقد تتم معالجتها من قبل مزودي خدمات تقنية ضروريين لتشغيل الخدمة.",

"privacy.section6.title": "6. مدة الاحتفاظ بالبيانات",
"privacy.section6.text":
  "يتم الاحتفاظ بالبيانات فقط للمدة اللازمة لتقديم الخدمة، ثم يتم حذفها أو إخفاء هويتها.",

"privacy.section7.title": "7. الأمان",
"privacy.section7.text":
  "يتخذ e-META إجراءات تقنية وتنظيمية معقولة لحماية بياناتك من الوصول غير المصرح به أو الفقدان أو الكشف.",

"privacy.section8.title": "8. حقوقك",
"privacy.section8.item1": "الحق في الوصول إلى بياناتك الشخصية.",
"privacy.section8.item2": "الحق في تصحيح البيانات غير الدقيقة.",
"privacy.section8.item3": "الحق في محو البيانات ضمن الحدود القانونية.",
"privacy.section8.item4": "الحق في الاعتراض على المعالجة أو تقييدها.",

"privacy.section9.title": "9. تعديلات سياسة الخصوصية",
"privacy.section9.text":
  "قد يتم تحديث سياسة الخصوصية هذه في أي وقت لتعكس تطورات الخدمة أو المتطلبات القانونية.",

"privacy.section10.title": "10. التواصل",
"privacy.section10.text":
  "لأي استفسار يتعلق بحماية البيانات، يمكنكم التواصل معنا عبر المعلومات المتاحة على موقع e-META.",

"footer.back": "العودة إلى الصفحة الرئيسية"
}
  };

  let currentLang = localStorage.getItem("emeta_lang") || "fr";

  /* =========================
     INIT
  ========================= */

  function init() {
    initLanguage();
    initBurger();
    initForm();
  }

  /* =========================
     LANGUAGE
  ========================= */

  function initLanguage() {
    const switcher = document.getElementById("languageSwitcher");
    if (!switcher) return;

    switcher.value = currentLang;
    applyLanguage(currentLang);

    switcher.addEventListener("change", () => {
      currentLang = switcher.value;
      localStorage.setItem("emeta_lang", currentLang);
      applyLanguage(currentLang);
    });
  }

  function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });
  }

  /* =========================
     BURGER MENU
  ========================= */

  function initBurger() {
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");

    if (!burger || !nav) return;

    burger.addEventListener("click", () => {
      const expanded = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!expanded));
      burger.classList.toggle("is-open");
      nav.classList.toggle("is-open");
    });

    // Fermer le menu après clic
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        burger.classList.remove("is-open");
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* =========================
     FORM SUBMIT → MAKE
  ========================= */

  function initForm() {
    const form = document.getElementById("emetaForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const payload = {
        domain: getVal("domain"),
        projectType: getVal("projectType"),
        projectTitle: getVal("projectTitle"),
        problem: getVal("problem"),
        objectives: getVal("objectives"),
        constraints: getVal("constraints"),
        kpis: getVal("kpis"),
        resources: getVal("resources"),
        deliverables: getVal("deliverables"),
        successIndicators: getVal("successIndicators"),
        context: getVal("context"),
        budgetMin: getVal("budgetMin", 0),
        budgetMax: getVal("budgetMax", 0),
        currency: getVal("currency", "EUR"),
        deadline: getVal("deadline"),
        urgency: getVal("urgency", 3),
        outputEmail: isChecked("outputEmail"),
        outputWhatsApp: isChecked("outputWhatsApp"),
        outputPdf: isChecked("outputPdf"),
        outputDisplay: isChecked("outputDisplay"),
        email: getVal("email"),
        whatsapp: getVal("whatsapp"),
        fileLink: getVal("fileLink"),
        language: currentLang
      };

      fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then(() => {
          alertSuccess();
          form.reset();
        })
        .catch(() => {
          alertError();
        });
    });
  }

  /* =========================
     HELPERS
  ========================= */

  function getVal(id, fallback = "") {
    const el = document.getElementById(id);
    return el ? el.value : fallback;
  }

  function isChecked(name) {
    const el = document.querySelector(`[name="${name}"]`);
    return el && el.checked ? 1 : 0;
  }

  function alertSuccess() {
    alert(
      currentLang === "fr" ? "Votre requête a été envoyée avec succès."
      : currentLang === "en" ? "Your request has been sent successfully."
      : currentLang === "es" ? "Su solicitud ha sido enviada con éxito."
      : "تم إرسال طلبك بنجاح."
    );
  }

  function alertError() {
    alert(
      currentLang === "fr" ? "Erreur lors de l’envoi. Merci de réessayer."
      : currentLang === "en" ? "An error occurred. Please try again."
      : currentLang === "es" ? "Ocurrió un error. Inténtelo de nuevo."
      : "حدث خطأ. يرجى المحاولة مرة أخرى."
    );
  }

  /* =========================
     SAFE INIT
  ========================= */

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
