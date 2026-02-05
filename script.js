/* * PROJET : e-META LABS — Moteur IA Stratégique
 * FICHIER : script.js (Version AUDITÉE & HARMONISÉE 2026)
 */

// --- CONFIGURATION ---
// REMPLACER PAR VOTRE URL WEBHOOK MAKE RÉELLE
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
    const currentLang = document.documentElement.lang || 'fr';
    const msg = translations[currentLang].msg_reset_confirm;

    if(confirm(msg)) {
        document.getElementById('diagnosticForm').reset();
        document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
        document.getElementById('step-1').classList.add('active');
        document.querySelector('.glass-card').scrollIntoView({ behavior: 'smooth' });
    }
}

// --- VALIDATION DES ÉTAPES ---
function validateStep1() {
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    if (!company || !email) { 
        alert(document.documentElement.lang === 'fr' ? "Champs requis manquants." : "Required fields missing."); 
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

// --- GESTION DES MESSAGES D'ERREUR (Multilingue) ---
function setCustomMessage(input) {
    const lang = document.documentElement.lang || 'fr';
    const errors = {
        text: {
            fr: "Ce champ est obligatoire.",
            en: "This field is required.",
            es: "Este campo es obligatorio.",
            ar: "هذا الحقل مطلوب."
        },
        email: {
            fr: "Veuillez entrer une adresse email valide.",
            en: "Please enter a valid email address.",
            es: "Introduzca una dirección válida.",
            ar: "أدخل عنوان بريد إلكتروني صالح."
        },
        check: {
            fr: "Veuillez cocher cette case pour continuer.",
            en: "Please check this box to proceed.",
            es: "Marque esta casilla para continuar.",
            ar: "يرجى تحديد هذا المربع للمتابعة."
        }
    };

    input.setCustomValidity(''); 

    if (input.validity.valueMissing) {
        input.setCustomValidity(input.type === 'checkbox' ? errors.check[lang] : errors.text[lang]);
    } else if (input.type === 'email' && input.validity.typeMismatch) {
        input.setCustomValidity(errors.email[lang]);
    }
}

// --- GESTION DES MODALS ---
document.addEventListener('DOMContentLoaded', () => {
    const privacyModal = document.getElementById('privacyOverlay');
    const resultModal = document.getElementById('resultModal');

    // Ouverture Privacy
    document.getElementById('openPrivacy').addEventListener('click', (e) => {
        e.preventDefault(); 
        privacyModal.style.display = 'flex';
    });
    
    // Fermetures
    document.querySelectorAll('.close-modal, .close-modal-btn, .close-result').forEach(btn => {
        btn.addEventListener('click', () => {
            privacyModal.style.display = 'none';
            resultModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === privacyModal) privacyModal.style.display = 'none';
        if (e.target === resultModal) resultModal.style.display = 'none';
    });
});

// --- SOUMISSION & SÉCURITÉ HONEYPOT ---
document.getElementById('diagnosticForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Sécurité Honeypot (Anti-Bot)
    const honey = document.getElementById('honeypot').value;
    if (honey !== "") {
        console.warn("Spam attempt blocked.");
        return;
    }

    if (!document.getElementById('consent').checked) {
        alert(document.documentElement.lang === 'fr' ? "Veuillez accepter la politique de confidentialité." : "Please accept the privacy policy.");
        return;
    }

    const submitBtn = document.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    const lang = document.documentElement.lang || 'fr';
    
    // UI Loading
    submitBtn.innerText = lang === 'fr' ? "Analyse IA en cours..." : "AI Analysis in progress...";
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";

    // Data Collection
    const formData = {
        timestamp: new Date().toISOString(),
        company: document.getElementById('company').value,
        email: document.getElementById('email').value,
        sector: document.querySelector('input[name="sector"]:checked')?.value || "N/A",
        geoZone: document.getElementById('geo-zone').value,
        expertises: Array.from(document.querySelectorAll('input[name="expertise"]:checked')).map(cb => cb.value),
        context: document.getElementById('context').value,
        lang: lang
    };

    // Execution fetch vers Make.com
    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    .then(async response => {
        if (response.ok) {
            const aiResponse = await response.text();
            
            // Affichage résultat
            document.getElementById('resultBody').innerHTML = aiResponse;
            document.getElementById('resultModal').style.display = 'flex';
            
            submitBtn.innerText = lang === 'fr' ? "Analyse Terminée" : "Analysis Complete";
        } else {
            throw new Error('Server error');
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert(lang === 'fr' ? "Erreur de connexion au moteur IA. Vérifiez vos emails." : "Connection error. Please check your emails.");
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = "1";
    });
});
