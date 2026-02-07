/* * PROJET : e-META LABS — Moteur IA Stratégique
 * FICHIER : script.js (Version Master - Monitoring & Sécurité)
 */

// --- CONFIGURATION ---
const WEBHOOK_URL = "https://hook.eu2.make.com/5414bbls1n5au1ebf0qhlx6htdeitaxp"; 
const STATS_URL = "https://hook.eu2.make.com/kp9aein4tkgkmntdkf6dhhqmxhxm9057"; // À remplacer par votre URL de lecture

// --- NAVIGATION ENTRE LES ÉTAPES ---
function nextStep(targetStep) {
    if (targetStep === 2 && !validateStep1()) return;
    if (targetStep === 3 && !validateStep2()) return;

    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.getElementById(`step-${targetStep}`).classList.add('active');
    document.querySelector('.glass-card').scrollIntoView({ behavior: 'smooth' });
}

// --- RÉINITIALISATION ---
function resetForm() {
    const lang = document.documentElement.lang || 'fr';
    if(confirm(lang === 'fr' ? "Réinitialiser le diagnostic ?" : "Reset diagnosis?")) {
        document.getElementById('diagnosticForm').reset();
        nextStep(1);
    }
}

// --- VALIDATIONS ---
function validateStep1() {
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    if (!company || !email) { 
        alert(document.documentElement.lang === 'fr' ? "Champs obligatoires manquants." : "Required fields missing."); 
        return false; 
    }
    return true;
}

function validateStep2() {
    const sector = document.querySelector('input[name="sector"]:checked');
    const geo = document.getElementById('geo-zone').value;
    if (!sector || !geo) { 
        alert(document.documentElement.lang === 'fr' ? "Veuillez compléter la matrice." : "Please complete the matrix."); 
        return false; 
    }
    return true;
}

// --- MONITORING LIVE (WIDGET) ---
function updateLiveStats() {
    fetch(STATS_URL)
        .then(response => response.json())
        .then(data => {
            document.getElementById('count-analyses').innerText = data.totalAnalyses || "--";
            document.getElementById('count-pdf').innerText = data.totalPDF || "--";
            
            const now = new Date();
            document.getElementById('last-update').innerText = 
                now.getHours().toString().padStart(2, '0') + ":" + 
                now.getMinutes().toString().padStart(2, '0');
        })
        .catch(() => console.warn("Widget Stats en attente de données..."));
}

// --- TÉLÉCHARGEMENT PDF SÉCURISÉ & MONITORING ---
function downloadPDF() {
    const element = document.getElementById('resultBody');
    const companyName = document.getElementById('company').value || "e-META-LABS";
    const emailClient = document.getElementById('email').value;

    // SIGNAL DE MONITORING (Silencieux)
    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            action: "PDF_DOWNLOAD",
            company: companyName,
            email: emailClient,
            timestamp: new Date().toISOString()
        })
    }).catch(err => console.error("Erreur Monitoring PDF"));

    // GÉNÉRATION DU DOCUMENT
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Diagnostic e-META LABS - ${companyName}</title>
                <style>
                    body { font-family: 'Inter', sans-serif; padding: 40px; color: #0a192f; }
                    h1 { font-family: 'Cinzel', serif; color: #0a192f; text-align: center; border-bottom: 2px solid #d4af37; padding-bottom: 10px; }
                    .footer { margin-top: 50px; font-size: 0.8rem; border-top: 1px solid #ccc; padding-top: 10px; opacity: 0.7; }
                </style>
            </head>
            <body>
                <h1>e-META LABS</h1>
                <p style="text-align:center; text-transform:uppercase; color:#d4af37;">Intelligence Stratégique Souveraine</p>
                ${element.innerHTML}
                <div class="footer"><p>Document certifié par horodatage Blockchain 2026 via Woleet.</p></div>
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// --- GESTION DES MESSAGES D'ERREUR ---
function setCustomMessage(input) {
    const lang = document.documentElement.lang || 'fr';
    const errors = {
        text: { fr: "Ce champ est obligatoire.", en: "This field is required.", es: "Este campo es obligatorio.", ar: "هذا الحقل مطلوب." },
        email: { fr: "Adresse email invalide.", en: "Invalid email address.", es: "Correo no válido.", ar: "عنوان غير صالح." }
    };
    input.setCustomValidity(''); 
    if (input.validity.valueMissing) {
        input.setCustomValidity(errors.text[lang]);
    } else if (input.type === 'email' && input.validity.typeMismatch) {
        input.setCustomValidity(errors.email[lang]);
    }
}

// --- INITIALISATION & MODALS ---
document.addEventListener('DOMContentLoaded', () => {
    updateLiveStats();
    setInterval(updateLiveStats, 60000); // MaJ toutes les minutes

    const privacyModal = document.getElementById('privacyOverlay');
    const resultModal = document.getElementById('resultModal');

    document.getElementById('openPrivacy').onclick = (e) => {
        e.preventDefault();
        privacyModal.style.display = 'flex';
    };

    document.querySelectorAll('.close-modal, .close-modal-btn, .close-result').forEach(btn => {
        btn.onclick = () => {
            privacyModal.style.display = 'none';
            resultModal.style.display = 'none';
        };
    });
});

// --- ENVOI FORMULAIRE & MOTEUR IA ---
document.getElementById('diagnosticForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // SÉCURITÉ
    if (document.getElementById('honeypot').value !== "") return;
    if (!document.getElementById('consent').checked) return;

    const submitBtn = document.querySelector('button[type="submit"]');
    const lang = document.documentElement.lang || 'fr';
    
    submitBtn.innerText = lang === 'fr' ? "Analyse IA en cours..." : "AI Analysis in progress...";
    submitBtn.disabled = true;

    const formData = {
    timestamp: new Date().toISOString(), // Ajouté pour le suivi temporel
    company: document.getElementById('company').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone')?.value || "Non renseigné",
    admin_contact: "support@e-metalabs.com", // Destinataire des logs d'erreurs dans Make
    sector: document.querySelector('input[name="sector"]:checked')?.value || "N/A",
    geoZone: document.getElementById('geo-zone').value,
    expertises: Array.from(document.querySelectorAll('input[name="expertise"]:checked')).map(cb => cb.value),
    context: document.getElementById('context').value,
    lang: document.documentElement.lang || 'fr'
};
    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    .then(async response => {
        if (response.ok) {
            document.getElementById('resultBody').innerHTML = await response.text();
            document.getElementById('resultModal').style.display = 'flex';
            submitBtn.innerText = lang === 'fr' ? "Succès" : "Success";
        } else {
            throw new Error();
        }
    })
    .catch(() => {
        alert(lang === 'fr' ? "Erreur de connexion au moteur IA." : "Connection error.");
        submitBtn.innerText = "Lancer l'Analyse IA";
        submitBtn.disabled = false;
    });
});
