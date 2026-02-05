/* 
 * PROJET : e-META LABS — Moteur IA Stratégique
 * FICHIER : script.js (Version FINAL PRO)
 */

// --- CONFIGURATION ---
// ATTENTION : Remettez votre URL Webhook Make ici !
const WEBHOOK_URL = "https://hook.eu1.make.com/xxxxxxxxxxxxxxxxxxxxxx"; 

// --- NAVIGATION ---
function nextStep(targetStep) {
    if (targetStep === 2 && !validateStep1()) return;
    if (targetStep === 3 && !validateStep2()) return;

    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.getElementById(`step-${targetStep}`).classList.add('active');
    document.querySelector('.glass-card').scrollIntoView({ behavior: 'smooth' });
}

// --- RESET (Traduit) ---
function resetForm() {
    // Récupérer la langue actuelle
    const currentLang = document.documentElement.lang || 'fr';
    // Récupérer le message dans le dictionnaire (via i18n.js qui expose 'translations')
    const msg = translations[currentLang].msg_reset_confirm;

    if(confirm(msg)) {
        document.getElementById('diagnosticForm').reset();
        document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
        document.getElementById('step-1').classList.add('active');
        document.querySelector('.glass-card').scrollIntoView({ behavior: 'smooth' });
    }
}

// --- VALIDATION ---
function validateStep1() {
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    if (!company || !email) { alert("Champs requis manquants (Société/Email)."); return false; }
    if (!email.includes('@')) { alert("Format d'email invalide."); return false; }
    return true;
}

function validateStep2() {
    const sector = document.querySelector('input[name="sector"]:checked');
    const geo = document.getElementById('geo-zone').value;
    if (!sector) { alert("Veuillez sélectionner un Secteur Stratégique."); return false; }
    if (!geo) { alert("Veuillez sélectionner une Zone d'Intervention."); return false; }
    return true;
}

// --- GESTION DES MODALS (Privacy & Result) ---
document.addEventListener('DOMContentLoaded', () => {
    // Privacy Modal
    const privacyModal = document.getElementById('privacyOverlay');
    document.getElementById('openPrivacy').addEventListener('click', (e) => {
        e.preventDefault(); privacyModal.style.display = 'flex';
    });
    
    // Boutons de fermeture
    document.querySelectorAll('.close-modal, .close-modal-btn, .close-result').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('privacyOverlay').style.display = 'none';
            document.getElementById('resultModal').style.display = 'none';
        });
    });

    // Fermeture globale au clic dehors
    window.addEventListener('click', (e) => {
        if (e.target === privacyModal) privacyModal.style.display = 'none';
        if (e.target === document.getElementById('resultModal')) document.getElementById('resultModal').style.display = 'none';
    });
});

// --- SOUMISSION & AFFICHAGE LIVE ---
document.getElementById('diagnosticForm').addEventListener('submit', function(e) {
    e.preventDefault();

    if (!document.getElementById('consent').checked) {
        alert("Veuillez accepter la Politique de Confidentialité pour traitement RGPD.");
        return;
    }

    const submitBtn = document.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    
    // Animation de chargement
    submitBtn.innerText = "Analyse IA Stratégique en cours...";
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";

    // Collecte des données
    const formData = {
        timestamp: new Date().toISOString(),
        company: document.getElementById('company').value,
        email: document.getElementById('email').value,
        sector: document.querySelector('input[name="sector"]:checked')?.value || "Non spécifié",
        geoZone: document.getElementById('geo-zone').value,
        expertises: Array.from(document.querySelectorAll('input[name="expertise"]:checked')).map(cb => cb.value),
        context: document.getElementById('context').value,
        lang: document.documentElement.lang || 'fr'
    };

    // Envoi & Réception Live
    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    .then(async response => {
        if (response.ok) {
            const aiResponse = await response.text();
            
            // Affichage dans la Modal Résultat
            document.getElementById('resultBody').innerHTML = aiResponse;
            document.getElementById('resultModal').style.display = 'flex';
            
            // Reset du bouton
            submitBtn.innerText = "Analyse Terminée";
        } else {
            throw new Error('Erreur serveur');
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        // Fallback si le Live échoue mais que l'email est parti
        alert("Demande traitée. Si l'affichage direct ne fonctionne pas, veuillez vérifier vos emails.");
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = "1";
    });
});
// --- TRADUCTION DES MESSAGES D'ERREUR NAVIGATEUR ---
function setCustomMessage(input) {
    // Récupérer la langue actuelle
    const lang = document.documentElement.lang || 'fr';
    
    // Dictionnaire simple des erreurs
    const errors = {
        fr: "Veuillez remplir ce champ obligatoire.",
        en: "Please fill out this required field.",
        es: "Por favor complete este campo obligatorio.",
        ar: "يرجى ملء هذا الحقل المطلوب."
    };

    if (input.value === '') {
        input.setCustomValidity(errors[lang]);
    } else {
        // Validation email spécifique
        if(input.type === 'email' && !input.value.includes('@')) {
             const emailErr = {
                fr: "Veuillez entrer une adresse email valide.",
                en: "Please enter a valid email address.",
                es: "Introduzca una dirección de correo electrónico válida.",
                ar: "الرجاء إدخال عنوان بريد إلكتروني صالح."
            };
            input.setCustomValidity(emailErr[lang]);
        } else {
            input.setCustomValidity(''); // Valide
        }
    }
    return true;
}
