/* 
 * PROJET : e-META LABS — Moteur IA Stratégique
 * FICHIER : script.js
 * OBJECTIF : Logique de navigation, Validation & Envoi Webhook
 */

// --- CONFIGURATION ---
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
    
    // 4. Scroll smooth
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
    // Vérifier Secteur
    const sector = document.querySelector('input[name="sector"]:checked');
    // Vérifier Zone Géo
    const geo = document.getElementById('geo-zone').value;

    if (!sector) {
        alert("Veuillez sélectionner un Secteur Clé.");
        return false;
    }
    if (!geo) {
        alert("Veuillez sélectionner une Zone Géographique.");
        return false;
    }
    return true;
}

// --- GESTION DE LA MODAL ---
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('privacyOverlay');
    const openBtn = document.getElementById('openPrivacy');
    const closeBtn = document.querySelector('.close-modal');
    const closeBtnBottom = document.querySelector('.close-modal-btn');

    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
    });

    const closeModal = () => { modal.style.display = 'none'; };
    closeBtn.addEventListener('click', closeModal);
    closeBtnBottom.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});

// --- SOUMISSION DU FORMULAIRE ---
document.getElementById('diagnosticForm').addEventListener('submit', function(e) {
    e.preventDefault();

    if (!document.getElementById('consent').checked) {
        alert("Vous devez accepter la Politique de Confidentialité.");
        return;
    }

    const submitBtn = document.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = "Traitement...";
    submitBtn.disabled = true;

    // Collecte des données
    const formData = {
        timestamp: new Date().toISOString(),
        company: document.getElementById('company').value,
        email: document.getElementById('email').value,
        sector: document.querySelector('input[name="sector"]:checked')?.value || "Non spécifié",
        geoZone: document.getElementById('geo-zone').value, // NOUVEAU CHAMP
        expertises: Array.from(document.querySelectorAll('input[name="expertise"]:checked')).map(cb => cb.value),
        context: document.getElementById('context').value,
        lang: document.documentElement.lang || 'fr'
    };

    // Simulation ou Envoi Réel
    if (WEBHOOK_URL.includes("VOTRE_ID")) {
        console.log("SIMULATION ENVOI (Test) :", formData);
        setTimeout(() => {
            alert("Simulation : Données envoyées avec succès !\n(Données capturées incluant la zone : " + formData.geoZone + ")");
            submitBtn.innerText = "Terminé";
        }, 1500);
    } else {
        fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                alert("Analyse lancée. Rapport en cours de génération.");
                submitBtn.innerText = "Envoyé";
            } else {
                throw new Error('Erreur réseau');
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert("Erreur de connexion.");
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        });
    }
});
