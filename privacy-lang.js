(() => {
  const lang = navigator.language.slice(0, 2);

  const CONTENT = {
    fr: `
<h1>🔒 Politique de confidentialité — e-META</h1>
<p>Votre confiance est essentielle. Cette politique explique comment e-META collecte, utilise et protège vos informations.</p>

<h2>1. Introduction</h2>
<p>e-META est un assistant IA d’aide à la décision. Les données sont utilisées uniquement pour produire des analyses.</p>

<h2>2. Données collectées</h2>
<ul>
  <li>Données saisies dans le formulaire</li>
  <li>Informations techniques anonymes</li>
</ul>

<h2>3. Utilisation des données</h2>
<p>Les données servent exclusivement à générer des recommandations.</p>

<h2>4. IA & responsabilité</h2>
<p>Les résultats sont des aides à la décision, pas des obligations.</p>

<h2>5. Sécurité</h2>
<p>Des mesures techniques protègent vos informations.</p>

<h2>6. Droits des utilisateurs</h2>
<p>Vous pouvez demander la suppression de vos données.</p>
`,

    en: `
<h1>🔒 Privacy Policy — e-META</h1>
<p>Your trust matters. This policy explains how e-META collects and protects data.</p>

<h2>1. Introduction</h2>
<p>e-META is an AI decision-support assistant.</p>

<h2>2. Data collected</h2>
<ul>
  <li>User input data</li>
  <li>Anonymous technical data</li>
</ul>

<h2>3. Data usage</h2>
<p>Used only for analysis and recommendations.</p>

<h2>4. AI responsibility</h2>
<p>Results are advisory.</p>

<h2>5. Security</h2>
<p>We apply technical safeguards.</p>

<h2>6. User rights</h2>
<p>You may request data deletion.</p>
`,

    es: `
<h1>🔒 Política de privacidad — e-META</h1>
<p>Su confianza es esencial.</p>

<h2>1. Introducción</h2>
<p>e-META es un asistente de decisiones con IA.</p>

<h2>2. Datos recopilados</h2>
<ul>
  <li>Datos ingresados por el usuario</li>
</ul>

<h2>3. Uso de datos</h2>
<p>Solo para análisis.</p>
`,

    ar: `
<h1 dir="rtl">🔒 سياسة الخصوصية — e-META</h1>
<p dir="rtl">خصوصيتك مهمة بالنسبة لنا.</p>

<h2 dir="rtl">١. المقدمة</h2>
<p dir="rtl">e-META مساعد ذكي لدعم اتخاذ القرار.</p>
`
  };

  document.getElementById("privacy-content").innerHTML =
    CONTENT[lang] || CONTENT.fr;
})();
