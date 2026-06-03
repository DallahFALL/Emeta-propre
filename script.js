// ==========================================
// CONFIGURATION GLOBALE
// ==========================================
// Remplacez cette URL par votre Test URL n8n générée précédemment
const WEBHOOK_N8N_URL = "http://localhost:5678/webhook-test/matrice-auto-detection"; 

// ==========================================
// FONCTIONS D'INTERFACE UTILISATEUR (UI)
// ==========================================

function openModal(modalId) { 
    document.getElementById(modalId).style.display = 'flex'; 
}

function closeModal(modalId) { 
    document.getElementById(modalId).style.display = 'none'; 
}

// ==========================================
// LOGIQUE DU WEB CHAT SNIPER
// ==========================================

// Étape 1 : Le visiteur clique pour analyser son texte
function triggerSniperCapture() {
    const rawPrompt = document.getElementById('user-raw-prompt').value.trim();
    
    if(!rawPrompt || rawPrompt.length < 15) {
        alert("⚠️ Veuillez détailler un peu plus votre problématique pour permettre à l'IA d'effectuer une analyse pertinente.");
        return;
    }
    
    // Le texte est valide. On ouvre le piège (Handoff) pour capturer les contacts.
    openModal('autoDetectModal');
}

// Étape 2 : Le visiteur valide ses contacts. Tir vers n8n.
function fireAutoDetection() {
    const email = document.getElementById('auto-email').value.trim();
    const phone = document.getElementById('auto-phone').value.trim();
    const rawPrompt = document.getElementById('user-raw-prompt').value.trim();

    // Vérification de sécurité basique
    if(!email || !phone) {
        alert("Veuillez renseigner votre email et numéro WhatsApp pour sécuriser le canal.");
        return;
    }

    // Construction de la munition (Payload)
    // Nous envoyons le texte brut. C'est n8n et Llama 3 qui feront l'extraction !
    const payload = {
        "source": "Web Chat Sniper",
        "date": new Date().toISOString(),
        "email_client": email,
        "telephone_client": phone,
        "problematique_brute": rawPrompt 
    };

    // Animation de chargement sur le bouton
    const btn = document.getElementById('btn-fire-ia');
    btn.innerHTML = "Transmission en cours... ⏳";
    btn.style.opacity = "0.7";
    btn.disabled = true;

    // LE TIR VERS N8N
    fetch(WEBHOOK_N8N_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => {
        closeModal('autoDetectModal');
        
        // Nettoyage de l'interface
        document.getElementById('user-raw-prompt').value = '';
        
        // Remise à zéro du bouton
        btn.innerHTML = "CONFIRMER ET TRANSMETTRE";
        btn.style.opacity = "1";
        btn.disabled = false;
        
        // Confirmation à l'utilisateur
        alert("✅ Données sécurisées reçues. L'Agent e-META est en train d'analyser votre contexte. Surveillez votre application WhatsApp !");
    })
    .catch(error => {
        console.error("Erreur de transmission:", error);
        alert("Une erreur est survenue lors de la connexion au serveur souverain e-META.");
        
        btn.innerHTML = "CONFIRMER ET TRANSMETTRE";
        btn.style.opacity = "1";
        btn.disabled = false;
    });
}

// ==========================================
// COMPTEUR LIVE (Design)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('live-counter-top');
    if (counterElement) {
        let currentCount = 1380; const targetCount = 1423; 
        const interval = setInterval(() => {
            currentCount++; counterElement.innerText = currentCount.toLocaleString();
            if (currentCount >= targetCount) clearInterval(interval);
        }, 30); 
    }
});
