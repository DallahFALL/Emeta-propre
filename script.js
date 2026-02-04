/* 
 * PROJET : e-META LABS — Moteur IA Stratégique
 * FICHIER : script.js
 * OBJECTIF : Logique de navigation, Validation & Envoi Webhook
 */

// --- CONFIGURATION ---
// Remplacez ceci par votre URL de Webhook Make.com (une fois créée)
const WEBHOOK_URL = "https://hook.eu1.make.com/VOTRE_ID_WEBHOOK_ICI"; 

// --- NAVIGATION ---
function nextStep(targetStep) {
    // 1. Validation de l'étape actuelle avant d'avancer
    if (targetStep === 2 && !validateStep1()) return;
    if (targetStep === 3 && !validateStep2()) return;

    // 2. Masquer toutes les étapes
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });

    // 3. Afficher l'étape cible
    document.getElementById(`step-${targetStep}`).classList.add('active');
    
    // 4. Scroll smooth vers le haut du formulaire
    document.querySelector('.glass-card').scrollIntoView({ behavior: 'smooth' });
}

// --- VALIDATION ---
function validateStep1() {
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    
    if (!company || !email) {
        alert("Veuillez renseigner votre Société et votre Email pour continuer.");
        return false;
    }
    if (!email.includes('@')) {
        alert("Format d'email invalide.");
        return false;
    }
    return true;
}

function validateStep2() {
    // Vérifier si un secteur (radio) est coché
    const sector = document.querySelector('input[name="sector"]:checked');
    if (!sector) {
        alert("Veuillez sélectionner un Secteur Clé.");
        return false;
    }
    return true;
}

// --- GESTION DE LA MODAL (Privacy Policy) ---
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('privacyOverlay');
    const openBtn = document.getElementById('openPrivacy');
    const closeBtn = document.querySelector('.close-modal');
    const closeBtnBottom = document.querySelector('.close-modal-btn');

    // Ouvrir
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
    });

    // Fermer (Croix & Bouton)
    const closeModal = () => { modal.style.display = 'none'; };
    closeBtn.addEventListener('click', closeModal);
    closeBtnBottom.addEventListener('click', closeModal);

    // Fermer en cliquant en dehors
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});

// --- SOUMISSION DU FORMULAIRE (Envoi Make) ---
document.getElementById('diagnosticForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Vérifier le consentement
    if (!document.getElementById('consent').checked) {
        alert("Vous devez accepter la Politique de Confidentialité.");
        return;
    }

    const submitBtn = document.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = "Traitement en cours...";
    submitBtn.disabled = true;

    // 2. Collecte des données
    const formData = {
        timestamp: new Date().toISOString(),
        company: document.getElementById('company').value,
        email: document.getElementById('email').value,
        sector: document.querySelector('input[name="sector"]:checked')?.value || "Non spécifié",
        expertises: Array.from(document.querySelectorAll('input[name="expertise"]:checked')).map(cb => cb.value),
        context: document.getElementById('context').value,
        lang: document.documentElement.lang || 'fr'
    };

    // 3. Envoi au Webhook (Simulation si pas d'URL)
    if (WEBHOOK_URL.includes("VOTRE_ID")) {
        console.log("DONNÉES PRÊTES À L'ENVOI (Mode Test) :", formData);
        setTimeout(() => {
            alert("Simulation : Données envoyées avec succès !\n(Configurez le Webhook pour le mode réel)");
            submitBtn.innerText = "Envoyé";
        }, 1500);
    } else {
        // Envoi Réel
        fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                alert("Analyse lancée. Vous recevrez le rapport sous peu.");
                submitBtn.innerText = "Terminé";
            } else {
                throw new Error('Erreur réseau');
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert("Erreur de connexion au serveur IA.");
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        });
    }
});
