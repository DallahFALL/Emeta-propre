/* * PROJET : e-META LABS — Moteur IA Stratégique
 * FICHIER : script.js (Version Master 2026)
 */

// --- CONFIGURATION ---
const WEBHOOK_URL = "https://hook.eu2.make.com/2aq4sxsbs6pj7cqmx7i2tvjvhwwdrvf2"; 
const STATS_URL = "https://hook.eu2.make.com/1jeaje7c3r1chg5oz7wruxohz6e8a8bg"; 

// --- NAVIGATION ENTRE LES ÉTAPES ---
function nextStep(targetStep) {
    if (targetStep === 2 && !validateStep1()) return;
    if (targetStep === 3 && !validateStep2()) return;

    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.getElementById(`step-${targetStep}`).classList.add('active');
    
    // Amélioration : Scroll fluide vers le haut du formulaire
    const card = document.querySelector('.glass-card');
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// --- RÉINITIALISATION COMPLÈTE ---
function resetForm() {
    // Utilisation de reload pour garantir un moteur IA "propre" à chaque nouveau diagnostic
    window.location.reload();
}

// --- VALIDATIONS ---
function validateStep1() {
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    if (!company || !email) { 
        const lang = document.documentElement.lang || 'fr';
        alert(lang === 'fr' ? "Champs obligatoires : Société et Email." : "Required: Company and Email."); 
        return false; 
    }
    return true;
}

function validateStep2() {
    const sector = document.querySelector('input[name="sector"]:checked');
    const geo = document.getElementById('geo-zone').value;
    if (!sector || !geo) { 
        const lang = document.documentElement.lang || 'fr';
        alert(lang === 'fr' ? "Veuillez compléter la matrice de secteur." : "Please complete the sector matrix."); 
        return false; 
    }
    return true;
}

// --- MONITORING LIVE (WIDGET) ---
async function updateLiveStats() {
    try {
        const response = await fetch(STATS_URL);
        if (!response.ok) return;
        const data = await response.json();
        
        const countAnalyses = document.getElementById('count-analyses');
        const countPDF = document.getElementById('count-pdf');
        
        if (countAnalyses) countAnalyses.innerText = data.totalAnalyses || "0";
        if (countPDF) countPDF.innerText = data.totalPDF || "0";
        
        const lastUpdate = document.getElementById('last-update');
        if (lastUpdate) {
            const now = new Date();
            lastUpdate.innerText = now.getHours().toString().padStart(2, '0') + ":" + 
                                  now.getMinutes().toString().padStart(2, '0');
        }
    } catch (err) {
        console.warn("Widget Intelligence en attente de données...");
    }
}

// --- TÉLÉCHARGEMENT PDF SÉCURISÉ ---
function downloadPDF() {
    const element = document.getElementById('resultBody');
    const companyName = document.getElementById('company').value || "e-META-LABS";
    const emailClient = document.getElementById('email').value;

    if (!element || element.innerText.trim() === "" || element.innerText.includes("Initialisation")) return;

    // SIGNAL DE MONITORING VERS MAKE (Asynchrone)
    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            action: "PDF_DOWNLOAD",
            company: companyName,
            email: emailClient,
            timestamp: new Date().toISOString()
        })
    }).catch(() => {});

    // GÉNÉRATION DE LA FENÊTRE D'IMPRESSION
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Diagnostic e-META LABS - ${companyName}</title>
                <style>
                    body { font-family: 'Helvetica', sans-serif; padding: 50px; line-height: 1.6; color: #0a192f; }
                    h1 { color: #0a192f; text-align: center; border-bottom: 2px solid #d4af37; padding-bottom: 10px; }
                    .footer { margin-top: 50px; font-size: 0.8rem; border-top: 1px solid #ccc; padding-top: 10px; opacity: 0.7; }
                </style>
            </head>
            <body>
                <h1>e-META LABS</h1>
                <p style="text-align:center; text-transform:uppercase; color:#d4af37; font-weight:bold;">Intelligence Stratégique Souveraine</p>
                <div style="margin-top:30px;">${element.innerHTML}</div>
                <div class="footer"><p>Document certifié Blockchain via protocole e-META LABS 2026.</p></div>
            </body>
        </html>
    `);
    printWindow.document.close();
    setTimeout(() => { printWindow.print(); }, 500);
}

// --- INITIALISATION GÉNÉRALE ---
document.addEventListener('DOMContentLoaded', () => {
    updateLiveStats();
    setInterval(updateLiveStats, 60000);

    // OUVERTURE DE LA POLITIQUE DEPUIS LE DIAGNOSTIC (SANS BASCULER)
    const privacyLinks = document.querySelectorAll('[data-i18n="link_privacy"], #openPrivacy');
    privacyLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche la redirection vers une autre page
            const overlay = document.getElementById('privacyOverlay');
            if (overlay) overlay.style.display = 'flex'; // Affiche la modal par-dessus le diagnostic
        });
    });

    // FERMETURE DES MODALS
    document.querySelectorAll('.close-modal, .close-modal-btn, .close-result').forEach(btn => {
        btn.addEventListener('click', () => {
            const modals = ['privacyOverlay', 'resultModal'];
            modals.forEach(id => {
                const m = document.getElementById(id);
                // On ne ferme que la modal de confidentialité si on est sur un diagnostic
                if (m && id === 'privacyOverlay') m.style.display = 'none';
            });
        });
    });

    // BOUTONS DU DIAGNOSTIC
    const btnDownload = document.querySelector('.btn-download'); 
    if (btnDownload) btnDownload.addEventListener('click', downloadPDF);

    const btnNewAnalysis = document.querySelector('.btn-new');
    if (btnNewAnalysis) btnNewAnalysis.addEventListener('click', resetForm);
});

// --- ENVOI FORMULAIRE & MOTEUR IA ---
const diagForm = document.getElementById('diagnosticForm');
if (diagForm) {
    diagForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (document.getElementById('honeypot')?.value !== "") return;
        if (!document.getElementById('consent')?.checked) return;

        const submitBtn = document.querySelector('button[type="submit"]');
        const lang = document.documentElement.lang || 'fr';
        
        submitBtn.innerText = lang === 'fr' ? "Analyse IA en cours..." : "AI Analysis in progress...";
        submitBtn.disabled = true;

        const formData = {
            action: "diagnostic",
            timestamp: new Date().toISOString(), 
            company: document.getElementById('company').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone')?.value || "Non renseigné",
            sector: document.querySelector('input[name="sector"]:checked')?.value || "N/A",
            geoZone: document.getElementById('geo-zone').value,
            expertises: Array.from(document.querySelectorAll('input[name="expertise"]:checked'))
                             .map(cb => cb.value)
                             .join(', '),
            context: document.getElementById('context').value,
            lang: lang
        };

        fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(async response => {
            if (response.ok) {
                const diagnosticText = await response.text();
                const resultBody = document.getElementById('resultBody');
                const resultModal = document.getElementById('resultModal');

                if (resultBody && resultModal) {
                    // Injecte le texte pur reçu de Gemini (Make Webhook Response)
                    resultBody.innerHTML = diagnosticText;
                    resultModal.style.display = 'flex';
                }
                submitBtn.innerText = lang === 'fr' ? "Analyse Terminée" : "Analysis Complete";
            } else {
                throw new Error();
            }
        })
        .catch(() => {
            alert(lang === 'fr' ? "Erreur de connexion au moteur e-META." : "e-META connection error.");
            submitBtn.innerText = "Lancer l'Analyse IA";
            submitBtn.disabled = false;
        });
    });
}
