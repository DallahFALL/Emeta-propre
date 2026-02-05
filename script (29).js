/* 
 * PROJET : e-META LABS — Moteur IA Stratégique
 * FICHIER : script.js (Version LIVE DISPLAY)
 */

// --- CONFIGURATION ---
// Assurez-vous que cette URL est celle de votre Webhook Make
const WEBHOOK_URL = "https://hook.eu2.make.com/13p2ha74y3ojikdan9xhkl5ebygcr7a4"; 

// --- NAVIGATION ---
function nextStep(targetStep) {
    if (targetStep === 2 && !validateStep1()) return;
    if (targetStep === 3 && !validateStep2()) return;

    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.getElementById(`step-${targetStep}`).classList.add('active');
    document.querySelector('.glass-card').scrollIntoView({ behavior: 'smooth' });
}

// --- VALIDATION ---
function validateStep1() {
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    if (!company || !email) { alert("Champs requis manquants."); return false; }
    if (!email.includes('@')) { alert("Email invalide."); return false; }
    return true;
}

function validateStep2() {
    const sector = document.querySelector('input[name="sector"]:checked');
    const geo = document.getElementById('geo-zone').value;
    if (!sector) { alert("Sélectionnez un Secteur."); return false; }
    if (!geo) { alert("Sélectionnez une Zone Géographique."); return false; }
    return true;
}

// --- GESTION DES MODALS (Privacy & Result) ---
document.addEventListener('DOMContentLoaded', () => {
    // Privacy Modal
    const privacyModal = document.getElementById('privacyOverlay');
    document.getElementById('openPrivacy').addEventListener('click', (e) => {
        e.preventDefault(); privacyModal.style.display = 'flex';
    });
    document.querySelector('.close-modal').addEventListener('click', () => privacyModal.style.display = 'none');
    document.querySelector('.close-modal-btn').addEventListener('click', () => privacyModal.style.display = 'none');

    // Result Modal (Fermeture uniquement)
    const resultModal = document.getElementById('resultModal');
    document.querySelector('.close-result').addEventListener('click', () => resultModal.style.display = 'none');

    // Fermeture globale au clic dehors
    window.addEventListener('click', (e) => {
        if (e.target === privacyModal) privacyModal.style.display = 'none';
        if (e.target === resultModal) resultModal.style.display = 'none';
    });
});

// --- SOUMISSION & AFFICHAGE LIVE ---
document.getElementById('diagnosticForm').addEventListener('submit', function(e) {
    e.preventDefault();

    if (!document.getElementById('consent').checked) {
        alert("Veuillez accepter la Politique de Confidentialité.");
        return;
    }

    const submitBtn = document.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    
    // Animation de chargement
    submitBtn.innerText = "Analyse IA en cours...";
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";

    // Collecte
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
            // Récupération de la réponse textuelle de Make (Gemini)
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
        alert("Succès : Les données ont été envoyées, mais l'affichage en direct a pris trop de temps. Vérifiez vos emails.");
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = "1";
    });
});
