// script.js - e-meta.app logic
document.getElementById('startBtn').addEventListener('click', function() {
    const formSection = document.getElementById('form-section');
    formSection.scrollIntoView({ behavior: 'smooth' });
    
    // Ici on pourra insérer l'intégration Tally plus tard
    // script.js - Intégration Tally et Logique de chargement
document.getElementById('startBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const container = document.getElementById('tally-container');
    
    // On affiche un message de chargement pro
    container.innerHTML = `
        <div class="loader-expert">
            <div class="spinnerest une étape majeure ! Le formulaire **Tally** est la porte d'entrée de l'intelligence de **e-meta.app**. Pour qu'il soit digne d'un cabinet de conseil, il doit être **structuré, dynamique et élégant**.

Voici le guide pour configurer votre premier formulaire de diagnostic **"Expert Business & Stratégie"**.

---

### 1. Structure du Formulaire (Le Diagnostic Expert)

Connectez-vous sur [Tally.so](https://tally.so) et créez un nouveau formulaire. Utilisez les blocs suivants :

#### A. Accueil & Identification
*   **Titre :** Diagnostic Stratégique e-meta
*   **Question (Short Answer) :** "Quel est le nom de votre projet ou entreprise ?" → *ID du champ : `project_name`*
*   **Question (Email) :** "À quelle adresse email souhaitez-vous recevoir le rapport ?" → *ID : `user_email`*

#### B. Analyse du Contexte (L'Intelligence Métier)
*   **Question (Dropdown) :** "Dans quelle zone géographique opérez-vous ?"
    *   *Options :* Sénégal (OHADA), Autre pays OHADA, Europe (RGPD), USA/International.
    *   *Pourquoi ?* Cela permet à l'IA d'adapter le cadre juridique.
*   **Question (Multiple Choice) :** "Quelle est l'étape actuelle de votre projet ?"
    *   *Options :* Idée/Concept, MVP/Lancement, Développement/Scale-up.
*   **Question (Long Answer) :** "Décrivez votre modèle économique et vos défis actuels." → *ID : `business_context`*

#### C. Paramètres de Restitution (Omnicanal)
*   **Question (Checkboxes) :** "Comment souhaitez-vous recevoir votre expertise ?"
    *   *Options :* Rapport PDF (Haute Fidélité), Synthèse WhatsApp, Email détaillé.
*   **Question (Phone Number) :** "Votre numéro WhatsApp (avec indicatif pays)" → *ID : `user_phone`*

---

### 2. Rendre le formulaire "Intelligent" (Logic)

C'est ici que e-meta se distingue d'un formulaire classique.

1.  **Champs Cachés (Hidden Fields) :**
    *   Allez dans "Settings" > "Hidden Fields".
    *   Ajoutez un champ nommé `source_lang`. 
    *   *Utilité :* Nous passerons la langue du site (FR, EN, ES, AR) directement à l'IA pour qu'elle réponde dans la bonne langue.

2.  **Branchements Conditionnels :**
    *   Si l'utilisateur choisit "Sénégal", ajoutez une question spécifique : *"Avez-vous déjà un numéro NINEA ?"*.
    *   Si l'utilisateur choisit "Europe", ajoutez : *"Votre projet traite-t-il des données personnelles sensibles ?"*.
    *   *Résultat :* L'IA reçoit des données beaucoup plus précises.

---

### 3. Connexion Technique : Le Webhook (Le lien vers Make)

C'est le moment de créer le "pont" :

1.  **Sur Make.com :"></div>
            <p>Initialisation de votre expert IA en cours...</p>
        </div>
    `;

    // On fait défiler jusqu'à la section
    document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });

    // Remplacer l'URL ci-dessous par celle de votre formulaire TALLY
**
    *   Créez un nouveau Scénario.
    *   Ajoutez le module **"Custom Webhook"**.
    *   Nommez-le "Entrée e-meta Tally".
    *   **Copiez l'URL** (ex: `https://hook.eu1.make.com/xxxxxx`).
        const tallyURL = "https://tally.so/embed/VOTRE_ID_TALLY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

    // Chargement de l'iframe Tally
    setTimeout(() => {
        container.innerHTML = `<iframe src="${tallyURL}" width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0" title="e-meta Strategic Diagnostic"></iframe>`;
    }, 1500);
});
    console.log("Démarrage de l'expertise IA...");
});

console.log("e-meta.app engine loaded.");
