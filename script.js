/* * PROJET : e-META LABS — Moteur IA Stratégique
 * FICHIER : script.js (Version WHATSAPP OPT-IN + FILE UPLOAD)
 */

// --- 1. CONFIGURATION ---
const WEBHOOK_URL = "https://hook.eu2.make.com/moupzawutk6h7ab6f5ap2li1qaypzh2f"; 

// --- Fonction Utilitaires pour le Fichier ---
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

// --- 2. TRADUCTION DES MESSAGES D'ERREUR ---
function setCustomMessage(input) {
    const lang = document.documentElement.lang || 'fr';
    const messages = {
        fr: {
            required: "Veuillez remplir ce champ obligatoire.",
            email: "Veuillez entrer une adresse email valide.",
            checkbox: "Veuillez cocher cette case pour continuer.",
            whatsapp: "Veuillez accepter la réception par WhatsApp."
        },
        en: { required: "Please fill out this required field.", email: "Please enter a valid email address.", checkbox: "Please check this box to proceed.", whatsapp: "Please accept receiving via WhatsApp." },
        es: { required: "Por favor complete este campo obligatorio.", email: "Introduzca una dirección válida.", checkbox: "Marque esta casilla para continuar.", whatsapp: "Por favor acepte recibir por WhatsApp." },
        ar: { required: "يرجى ملء هذا الحقل المطلوب.", email: "الرجاء إدخال عنوان بريد إلكتروني صالح.", checkbox: "يرجى تحديد هذا المربع للمتابعة.", whatsapp: "يرجى الموافقة على الاستلام عبر WhatsApp." }
    };

    input.setCustomValidity('');
    if (!input.validity.valid) {
        if (input.validity.valueMissing) {
            if (input.id === 'whatsapp-consent') {
                input.setCustomValidity(messages[lang].whatsapp || messages.fr.whatsapp);
            } else if (input.type === 'checkbox') {
                input.setCustomValidity(messages[lang].checkbox || messages.fr.checkbox);
            } else {
                input.setCustomValidity(messages[lang].required || messages.fr.required);
            }
        }
        else if (input.validity.typeMismatch && input.type === 'email') {
            input.setCustomValidity(messages[lang].email || messages.fr.email);
        }
    }
    return true;
}

// --- 3. NAVIGATION & VALIDATIONS ---
function nextStep(targetStep) {
    if (targetStep === 2 && !validateStep1()) return;
    if (targetStep === 3 && !validateStep2()) return;

    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById(`step-${targetStep}`).classList.add('active');
    document.querySelector('.glass-card').scrollIntoView({ behavior: 'smooth' });
}

function validateStep1() {
    const company = document.getElementById('company');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    if (!company.checkValidity()) { company.reportValidity(); return false; }
    if (!email.checkValidity()) { email.reportValidity(); return false; }
    if (!phone.checkValidity()) { phone.reportValidity(); return false; }
    return true;
}

function validateStep2() {
    const sector = document.querySelector('input[name="sector"]:checked');
    const geo = document.getElementById('geo-zone');
    if (!sector) {
        alert("Veuillez sélectionner un Secteur Stratégique.");
        return false;
    }
    if (geo.value === "") {
        geo.setCustomValidity("Veuillez sélectionner une zone.");
        geo.reportValidity();
        return false;
    }
    return true;
}

function resetForm() {
    const lang = document.documentElement.lang || 'fr';
    const msg = (lang === 'fr') ? "Voulez-vous vraiment recommencer ?" : "Do you really want to restart?";
    
    if(confirm(msg)) {
        document.getElementById('diagnosticForm').reset();
        document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
        document.getElementById('step-1').classList.add('active');
        document.querySelector('.glass-card').scrollIntoView({ behavior: 'smooth' });
    }
}

// --- 4. DOM & MODALS ---
document.addEventListener('DOMContentLoaded', () => {
    const privacyModal = document.getElementById('privacyOverlay');
    const openPrivacyBtn = document.getElementById('openPrivacy');
    const resultModal = document.getElementById('resultModal');
    
    if (openPrivacyBtn && privacyModal) {
        openPrivacyBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            privacyModal.style.display = 'flex';
        });
        document.querySelectorAll('.close-modal, .close-modal-btn').forEach(btn => {
            btn.addEventListener('click', () => { privacyModal.style.display = 'none'; });
        });
    }

    if (resultModal) {
        document.querySelector('.close-result').addEventListener('click', () => {
            resultModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === privacyModal) privacyModal.style.display = 'none';
        if (e.target === resultModal) resultModal.style.display = 'none';
    });
});

// --- 5. ENVOI FINAL (MAKE) ---
const form = document.getElementById('diagnosticForm');
if (form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const whatsappConsent = document.getElementById('whatsapp-consent');
        if (!whatsappConsent.checked) {
            setCustomMessage(whatsappConsent);
            whatsappConsent.reportValidity();
            return;
        }

        const consent = document.getElementById('consent');
        if (!consent.checked) {
            setCustomMessage(consent);
            consent.reportValidity();
            return;
        }

        const submitBtn = document.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Analyse & Ancrage Blockchain en cours...";
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.7";

        // Gestion du Fichier Optionnel
        let fileData = null;
        let fileName = null;
        const fileInput = document.getElementById('clientFile');
        if (fileInput.files.length > 0) {
            // Limite Make recommandée : 5 Mo
            if (fileInput.files[0].size > 5 * 1024 * 1024) {
                alert("Le fichier est trop volumineux (Maximum 5 Mo).");
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = "1";
                return;
            }
            try {
                fileData = await getBase64(fileInput.files[0]);
                fileName = fileInput.files[0].name;
            } catch (error) {
                console.error("Erreur lecture fichier", error);
            }
        }

        const formData = {
            timestamp: new Date().toISOString(),
            company: document.getElementById('company').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            whatsapp_optin: true,
            sector: document.querySelector('input[name="sector"]:checked')?.value || "Non spécifié",
            geoZone: document.getElementById('geo-zone').value,
            expertises: Array.from(document.querySelectorAll('input[name="expertise"]:checked')).map(cb => cb.value),
            context: document.getElementById('context').value,
            lang: document.documentElement.lang || 'fr',
            attachedFileName: fileName,
            attachedFileBase64: fileData // Le fichier transformé en texte pour Make
        };

        fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(async response => {
            if (response.ok) {
                const aiResponse = await response.text();
                document.getElementById('resultBody').innerHTML = aiResponse;
                document.getElementById('resultModal').style.display = 'flex';
                submitBtn.innerText = "Analyse Terminée";
            } else {
                throw new Error('Erreur serveur');
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert("Erreur de connexion avec le serveur IA. Veuillez réessayer.");
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = "1";
        });
    });
}
