/* 
 * PROJET : e-META LABS — Moteur IA Stratégique
 * FICHIER : script.js (Version MASTER - Zéro Défaut)
 * FONCTIONS : Navigation, Upload 2.5Mo, Effet Wow, Make.com
 */

// --- 1. CONFIGURATION ---
const WEBHOOK_URL = "https://hook.eu2.make.com/moupzawutk6h7ab6f5ap2li1qaypzh2f"; 

// --- 2. COMPTEUR LIVE (Effet de preuve sociale) ---
window.addEventListener('load', () => {
    const counterElement = document.getElementById('live-counter');
    if (counterElement) {
        let currentCount = 1380;
        const targetCount = 1423; 
        const interval = setInterval(() => {
            currentCount++;
            counterElement.innerText = currentCount.toLocaleString();
            if (currentCount >= targetCount) {
                clearInterval(interval);
            }
        }, 30); // Vitesse d'incrémentation
    }
});

// --- 3. UTILITAIRE FICHIER (Conversion Base64) ---
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

// --- 4. TRADUCTION DES MESSAGES D'ERREUR ---
function setCustomMessage(input) {
    const lang = document.documentElement.lang || 'fr';
    
    // Dictionnaire des erreurs
    const messages = {
        fr: { 
            required: "Veuillez remplir ce champ obligatoire.", 
            email: "Veuillez entrer une adresse email valide.", 
            checkbox: "Veuillez cocher cette case pour continuer.", 
            whatsapp: "Veuillez accepter la réception par WhatsApp." 
        },
        en: { 
            required: "Please fill out this required field.", 
            email: "Please enter a valid email address.", 
            checkbox: "Please check this box to proceed.", 
            whatsapp: "Please accept receiving via WhatsApp." 
        },
        es: { 
            required: "Por favor complete este campo obligatorio.", 
            email: "Introduzca una dirección válida.", 
            checkbox: "Marque esta casilla para continuar.", 
            whatsapp: "Por favor acepte recibir por WhatsApp." 
        },
        ar: { 
            required: "يرجى ملء هذا الحقل المطلوب.", 
            email: "الرجاء إدخال عنوان بريد إلكتروني صالح.", 
            checkbox: "يرجى تحديد هذا المربع للمتابعة.", 
            whatsapp: "يرجى الموافقة على الاستلام عبر WhatsApp." 
        }
    };

    // Réinitialisation
    input.setCustomValidity('');

    // Vérification
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

// --- 5. NAVIGATION ---
function nextStep(targetStep) {
    // Validation de l'étape précédente
    if (targetStep === 2 && !validateStep1()) return;
    if (targetStep === 3 && !validateStep2()) return;

    // Changement d'écran
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById(`step-${targetStep}`).classList.add('active');
    
    // Scroll fluide vers le haut
    document.querySelector('.glass-card').scrollIntoView({ behavior: 'smooth' });
}

// Validation Étape 1
function validateStep1() {
    const company = document.getElementById('company');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    
    // Vérification HTML5 native avec messages traduits
    if (!company.checkValidity()) { company.reportValidity(); return false; }
    if (!email.checkValidity()) { email.reportValidity(); return false; }
    if (!phone.checkValidity()) { phone.reportValidity(); return false; }
    return true;
}

// Validation Étape 2
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

// Fonction Reset
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

// --- 6. GESTION DU DOM & MODALS ---
document.addEventListener('DOMContentLoaded', () => {
    
    // A. Affichage nom de fichier
    const fileInput = document.getElementById('clientFile');
    // On vérifie si l'élément existe pour éviter les erreurs
    if (fileInput) {
        // Optionnel : ajouter un listener pour afficher le nom du fichier si vous avez un span dédié
    }

    // B. Modal Politique de Confidentialité
    const privacyModal = document.getElementById('privacyOverlay');
    const openPrivacyBtn = document.getElementById('openPrivacy');
    if (openPrivacyBtn && privacyModal) {
        openPrivacyBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            privacyModal.style.display = 'flex';
        });
        document.querySelectorAll('.close-modal, .close-modal-btn').forEach(btn => {
            btn.addEventListener('click', () => { privacyModal.style.display = 'none'; });
        });
    }

    // C. Modal Guide (Si existant)
    const guideModal = document.getElementById('guideOverlay');
    const openGuideBtn = document.getElementById('openGuide');
    if (openGuideBtn && guideModal) {
        openGuideBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            guideModal.style.display = 'flex';
        });
        document.querySelectorAll('.close-guide, .close-guide-btn').forEach(btn => {
            btn.addEventListener('click', () => { guideModal.style.display = 'none'; });
        });
    }

    // D. Modal Résultat IA
    const resultModal = document.getElementById('resultModal');
    if (resultModal) {
        document.querySelector('.close-result').addEventListener('click', () => {
            resultModal.style.display = 'none';
        });
    }
    
    // Fermeture globale au clic extérieur
    window.addEventListener('click', (e) => {
        if (e.target === privacyModal) privacyModal.style.display = 'none';
        if (e.target === guideModal) guideModal.style.display = 'none';
        if (e.target === resultModal) resultModal.style.display = 'none';
    });
});

// --- 7. SOUMISSION DU FORMULAIRE (Le Cœur du Réacteur) ---
const form = document.getElementById('diagnosticForm');
if (form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // 1. Validation Checkboxes
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

        // 2. Préparation de l'interface
        const submitBtn = document.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        
        // --- DÉCLENCHEMENT DE L'EFFET "WOW" ---
        const loadingOverlay = document.getElementById('loadingOverlay');
        const loadingText = document.getElementById('loadingText');
        
        // On s'assure que l'overlay existe dans le HTML
        if (loadingOverlay && loadingText) {
            loadingOverlay.style.display = 'flex';

            // Scénario psychologique d'attente
            const loadingSteps = [
                "Analyse sémantique du contexte...",
                "Corrélation avec les données sectorielles mondiales...",
                "Génération des matrices stratégiques Gemini...",
                "Cryptographie SHA-256 en cours...",
                "Ancrage sur la Blockchain (Woleet)...",
                "Mise en page du rapport PDF confidentiel...",
                "Finalisation sécurisée..."
            ];
            
            let stepIndex = 0;
            // Changement de phrase toutes les 1.8 secondes
            var textInterval = setInterval(() => {
                if (stepIndex < loadingSteps.length) {
                    loadingText.innerText = loadingSteps[stepIndex];
                    stepIndex++;
                }
            }, 1800); 
        }

        // 3. Gestion du Fichier (Limite 2.5 Mo)
        let fileData = null;
        let fileName = null;
        const fileInput = document.getElementById('clientFile');
        
        if (fileInput && fileInput.files.length > 0) {
            // Vérification Taille
            if (fileInput.files[0].size > 2.5 * 1024 * 1024) {
                alert("Pour garantir une analyse IA ultra-rapide, le fichier ne doit pas dépasser 2.5 Mo.");
                submitBtn.disabled = false;
                if(loadingOverlay) loadingOverlay.style.display = 'none';
                if(textInterval) clearInterval(textInterval);
                return;
            }
            try {
                fileData = await getBase64(fileInput.files[0]);
                fileName = fileInput.files[0].name;
            } catch (error) {
                console.error("Erreur lecture fichier", error);
            }
        }

        // 4. Construction du Paquet de Données
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
            attachedFileBase64: fileData 
        };

        // 5. Envoi vers Make.com
        fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(async response => {
            // Arrêt de l'animation
            if(textInterval) clearInterval(textInterval); 
            if(loadingOverlay) loadingOverlay.style.display = 'none';

            if (response.ok) {
                const aiResponse = await response.text();
                
                // Injection du résultat avec en-tête de succès
                document.getElementById('resultBody').innerHTML = 
                    `<div style="text-align:center; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(212, 175, 55, 0.3);">
                        <span style="font-size: 3rem;">✅</span>
                        <h3 style="color:#25D366; margin-top: 10px; font-family:'Cinzel', serif;">Audit Généré & Sécurisé</h3>
                        <p style="font-size: 0.9rem; color:#8892b0;">Un exemplaire PDF certifié a été expédié à votre adresse email.</p>
                     </div>` + aiResponse;
                
                document.getElementById('resultModal').style.display = 'flex';
                submitBtn.innerText = "Analyse Terminée";
            } else {
                throw new Error('Erreur serveur');
            }
        })
        .catch(error => {
            // Gestion d'erreur
            if(textInterval) clearInterval(textInterval);
            if(loadingOverlay) loadingOverlay.style.display = 'none';
            console.error('Erreur:', error);
            alert("Erreur de connexion avec le serveur IA. Veuillez réessayer.");
            submitBtn.disabled = false;
        });
    });
}
