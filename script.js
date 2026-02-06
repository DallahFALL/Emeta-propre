/* * PROJET : e-META LABS — Moteur IA Stratégique
 * FICHIER : script.js (Version Auditée - Intégration WhatsApp & Sécurité)
 */

// --- CONFIGURATION ---
// IMPORTANT : Remplacez par votre URL Webhook Make réelle
const WEBHOOK_URL = "https://hook.eu2.make.com/5414bbls1n5au1ebf0qhlx6htdeitaxp"; 

// --- NAVIGATION ENTRE LES ÉTAPES ---
function nextStep(targetStep) {
    // Validation avant de passer à l'étape suivante
    if (targetStep === 2 && !validateStep1()) return;
    if (targetStep === 3 && !validateStep2()) return;

    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.getElementById(`step-${targetStep}`).classList.add('active');
    
    // Retour en haut de la carte pour le confort visuel
    document.querySelector('.glass-card').scrollIntoView({ behavior: 'smooth' });
}

// --- RÉINITIALISATION DU FORMULAIRE ---
function resetForm() {
    const currentLang = document.documentElement.lang || 'fr';
    const msg = translations[currentLang].msg_reset_confirm;

    if(confirm(msg)) {
        document.getElementById('diagnosticForm').reset();
        document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
        document.getElementById('step-1').classList.add('active');
        document.querySelector('.glass-card').scrollIntoView({ behavior: 'smooth' });
    }
}

// --- LOGIQUE DE VALIDATION ---
function validateStep1() {
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    if (!company || !email) { 
        const lang = document.documentElement.lang || 'fr';
        alert(lang === 'fr' ? "Veuillez remplir les champs obligatoires." : "Please fill in required fields."); 
        return false; 
    }
    return true;
}

function validateStep2() {
    const sector = document.querySelector('input[name="sector"]:checked');
    const geo = document.getElementById('geo-zone').value;
    if (!sector || !geo) { 
        const lang = document.documentElement.lang || 'fr';
        alert(lang === 'fr' ? "Veuillez compléter la matrice stratégique." : "Please complete the strategic matrix."); 
        return false; 
    }
    return true;
}
// Fonction pour télécharger le diagnostic en PDF
function downloadPDF() {
    const element = document.getElementById('resultBody');
    const companyName = document.getElementById('company').value || "e-META-LABS";
    
    // Création d'une fenêtre temporaire pour l'impression propre
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Diagnostic e-META LABS - ${companyName}</title>
                <style>
                    body { font-family: 'Inter', sans-serif; padding: 40px; color: #0a192f; }
                    h3 { color: #d4af37; border-bottom: 1px solid #d4af37; padding-bottom: 5px; }
                    .header { text-align: center; margin-bottom: 30px; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>e-META LABS</h1>
                    <p>Intelligence Stratégique Souveraine</p>
                </div>
                ${element.innerHTML}
                <p style="margin-top: 50px; font-size: 0.8rem;">Certifié par horodatage Blockchain 2026</p>
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}
// --- GESTION DES MESSAGES D'ERREUR NATIFS ---
function setCustomMessage(input) {
    const lang = document.documentElement.lang || 'fr';
    const errors = {
        text: { fr: "Ce champ est obligatoire.", en: "This field is required.", es: "Este campo es obligatorio.", ar: "هذا الحقل مطلوب." },
        email: { fr: "Adresse email invalide.", en: "Invalid email address.", es: "Correo no válido.", ar: "عنوان غير صالح." },
        check: { fr: "Veuillez accepter les conditions.", en: "Please accept the terms.", es: "Acepte las condiciones.", ar: "يرجى قبول الشروط." }
    };

    input.setCustomValidity(''); 

    if (input.validity.valueMissing) {
        input.setCustomValidity(input.type === 'checkbox' ? errors.check[lang] : errors.text[lang]);
    } else if (input.type === 'email' && input.validity.typeMismatch) {
        input.setCustomValidity(errors.email[lang]);
    }
}

// --- GESTION DES MODALS (Privacy & Résultats) ---
document.addEventListener('DOMContentLoaded', () => {
    const privacyModal = document.getElementById('privacyOverlay');
    const openPrivacyBtn = document.getElementById('openPrivacy');

    if (openPrivacyBtn && privacyModal) {
        openPrivacyBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            privacyModal.style.display = 'flex';
        });
    }
    
    // Boutons de fermeture
    document.querySelectorAll('.close-modal, .close-modal-btn, .close-result').forEach(btn => {
        btn.addEventListener('click', () => {
            if(privacyModal) privacyModal.style.display = 'none';
            if(resultModal) resultModal.style.display = 'none';
        });
    });

    // Fermeture au clic extérieur
    window.addEventListener('click', (e) => {
        if (e.target === privacyModal) privacyModal.style.display = 'none';
        if (e.target === resultModal) resultModal.style.display = 'none';
    });
});

// --- ENVOI DES DONNÉES & IA ---
document.getElementById('diagnosticForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // SÉCURITÉ : Vérification Honeypot
    const honey = document.getElementById('honeypot').value;
    if (honey !== "") {
        console.warn("Spam détecté.");
        return; 
    }

    // RGPD : Vérification consentement
    if (!document.getElementById('consent').checked) {
        const lang = document.documentElement.lang || 'fr';
        alert(lang === 'fr' ? "Veuillez accepter la politique de confidentialité." : "Please accept the privacy policy.");
        return;
    }

    const submitBtn = document.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    const currentLang = document.documentElement.lang || 'fr';
    
    // UI : État de chargement
    submitBtn.innerText = currentLang === 'fr' ? "Analyse IA en cours..." : "AI Analysis in progress...";
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";

    // Collecte des données (incluant WhatsApp)
    const formData = {
        timestamp: new Date().toISOString(),
        company: document.getElementById('company').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone') ? document.getElementById('phone').value : "Non renseigné",
        sector: document.querySelector('input[name="sector"]:checked')?.value || "N/A",
        geoZone: document.getElementById('geo-zone').value,
        expertises: Array.from(document.querySelectorAll('input[name="expertise"]:checked')).map(cb => cb.value),
        context: document.getElementById('context').value,
        lang: currentLang
    };

    // Appel au Webhook Make
    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    .then(async response => {
        if (response.ok) {
            const aiResponse = await response.text();
            
            // Affichage dans la modal de résultat
            document.getElementById('resultBody').innerHTML = aiResponse;
            document.getElementById('resultModal').style.display = 'flex';
            
            submitBtn.innerText = currentLang === 'fr' ? "Succès" : "Success";
        } else {
            throw new Error('Server Error');
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert(currentLang === 'fr' ? "Erreur de connexion au moteur IA." : "Connection error to AI engine.");
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = "1";
    });
});
