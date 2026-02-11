/* * PROJET : e-META LABS — Moteur IA Stratégique
 * FICHIER : script.js (Version MASTER 2026 - UX & DATA)
 */

// --- CONFIGURATION ---
const WEBHOOK_URL = "https://hook.eu2.make.com/2aq4sxsbs6pj7cqmx7i2tvjvhwwdrvf2"; 
const STATS_URL = "https://hook.eu2.make.com/1jeaje7c3r1chg5oz7wruxohz6e8a8bg"; 

// --- NAVIGATION ---
function nextStep(targetStep) {
    // Validations simplifiées (à renforcer si besoin)
    if (targetStep === 2) {
        const comp = document.getElementById('company').value;
        const mail = document.getElementById('email').value;
        if (!comp || !mail) return alert("Veuillez remplir Société et Email.");
    }
    
    // Bascule des étapes
    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.getElementById(`step-${targetStep}`).classList.add('active');
    
    // Scroll fluide vers le haut du formulaire
    const card = document.querySelector('.glass-card');
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// --- UX : RESET PROPRE ---
function resetForm() {
    window.location.reload(); // Rechargement complet pour nettoyer le cache et les variables
}

// --- LIVE MONITORING ---
async function updateLiveStats() {
    try {
        const response = await fetch(STATS_URL);
        if (response.ok) {
            const data = await response.json();
            document.getElementById('count-analyses').innerText = data.totalAnalyses || "0";
            document.getElementById('count-pdf').innerText = data.totalPDF || "0";
            
            const now = new Date();
            document.getElementById('last-update').innerText = 
                now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
        }
    } catch (err) { console.warn("Widget Stats en attente..."); }
}

// --- TÉLÉCHARGEMENT PDF ---
function downloadPDF() {
    const content = document.getElementById('resultBody').innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html><head><title>Diagnostic e-META LABS</title></head>
        <body style="font-family:sans-serif; padding:40px;">
            <h1 style="color:#d4af37; text-align:center;">e-META LABS</h1>
            <hr>
            ${content}
            <div style="margin-top:50px; font-size:0.8em; color:#666; text-align:center;">Document Certifié - e-meta.app</div>
        </body></html>
    `);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 500);
    
    // Signalement téléchargement à Make
    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: "PDF_DOWNLOAD", timestamp: new Date().toISOString() })
    }).catch(()=>{});
}

// --- INITIALISATION ---
document.addEventListener('DOMContentLoaded', () => {
    updateLiveStats();
    setInterval(updateLiveStats, 60000); // Mise à jour auto chaque minute

    // Gestion Modals
    document.querySelectorAll('.close-modal, .close-result, .close-modal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
        });
    });
    
    document.querySelector('#openPrivacy').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('privacyOverlay').style.display = 'flex';
    });

    // Boutons Diagnostic
    const btnDown = document.querySelector('.btn-download');
    if(btnDown) btnDown.addEventListener('click', downloadPDF);
    
    const btnNew = document.querySelector('.btn-new');
    if(btnNew) btnNew.addEventListener('click', resetForm);
});

// --- SOUMISSION & CONNEXION IA ---
const diagForm = document.getElementById('diagnosticForm');
if (diagForm) {
    diagForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        if (document.getElementById('honeypot').value !== "") return; // Anti-bot

        // 1. UI : Activation du Loader & Verrouillage
        const loader = document.getElementById('loadingOverlay');
        const submitBtn = document.querySelector('button[type="submit"]');
        loader.style.display = 'flex';
        submitBtn.disabled = true;

        // 2. DATA : Collecte & Souveraineté
        const formData = {
            action: "diagnostic",
            timestamp: new Date().toISOString(),
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Donnée souveraine
            lang: navigator.language || 'fr', // Donnée souveraine
            company: document.getElementById('company').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            sector: document.querySelector('input[name="sector"]:checked')?.value || "Non spécifié",
            geoZone: document.getElementById('geo-zone').value,
            // Collecte des expertises multiples
            expertises: Array.from(document.querySelectorAll('input[name="expertise"]:checked'))
                             .map(cb => cb.value).join(', '),
            context: document.getElementById('context').value
        };

        try {
            // 3. ENVOI VERS MAKE
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error("Erreur Réseau");

            // 4. RÉCEPTION DU TEXTE BRUT GEMINI
            const resultText = await response.text();

            // 5. AFFICHAGE RÉSULTAT
            loader.style.display = 'none';
            document.getElementById('resultBody').innerHTML = resultText;
            document.getElementById('resultModal').style.display = 'flex';
            
            submitBtn.innerText = "Analyse Terminée";

        } catch (error) {
            loader.style.display = 'none';
            alert("Erreur de connexion au moteur IA. Veuillez réessayer.");
            submitBtn.disabled = false;
        }
    });
}
