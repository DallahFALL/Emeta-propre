/* 
 * PROJET : e-META LABS — Strategic Engine & Audit Décisionnel
 * FICHIER : script.js (Engine V5 - CORTEX2026 / n8n Ready / SHA-256 / Palier UI)
 * OBJECTIF : Gestion du sas, validation asynchrone, hachage, et transmission payload.
 */

// ==========================================
// 1. CONFIGURATION GLOBALE
// ==========================================
// URL du Webhook n8n (La porte d'entrée de votre backend)
const WEBHOOK_N8N_URL = "https://n8n.votredomaine.com/webhook/emeta-audit-intake"; 
const ACCESS_CODE = "CORTEX2026";
let selectedPalier = null;
let currentFileData = null;
let currentFileName = null;
let generatedReference = null;

// ==========================================
// 2. GESTION DU SAS D'HABILITATION
// ==========================================
function checkAccess() {
    const code = document.getElementById("authCode").value.trim();
    const errorMsg = document.getElementById("authError");
    if (code === ACCESS_CODE) {
        document.getElementById("authScreen").style.display = "none";
        document.getElementById("mainApp").style.display = "block";
        errorMsg.style.display = "none";
        // Optionnel : Scroll vers le haut
        window.scrollTo(0, 0);
    } else {
        errorMsg.style.display = "block";
        // Petit effet de secousse pour l'erreur
        const input = document.getElementById("authCode");
        input.style.transform = "translateX(5px)";
        setTimeout(() => input.style.transform = "translateX(-5px)", 50);
        setTimeout(() => input.style.transform = "translateX(5px)", 100);
        setTimeout(() => input.style.transform = "translateX(0)", 150);
    }
}

// Support de la touche 'Entrée' pour le code
document.addEventListener('DOMContentLoaded', () => {
    const authInput = document.getElementById("authCode");
    if(authInput) {
        authInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                checkAccess();
            }
        });
    }
});

// ==========================================
// 3. UTILITAIRES (Génération Réf & Hachage)
// ==========================================

// Génère une référence souveraine type MIS-2026-X8F2A
function generateReference() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let rand = '';
    for (let i = 0; i < 5; i++) {
        rand += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const year = new Date().getFullYear();
    return `MIS-${year}-${rand}`;
}

// Fonction de hachage SHA-256 (Native Browser Crypto API)
async function hashData(dataString) {
    const encoder = new TextEncoder();
    const data = encoder.encode(dataString);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Conversion Fichier en Base64 (Pour transmission n8n)
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

// ==========================================
// 4. LOGIQUE DES PALIERS (UI)
// ==========================================
function selectPalier(palierName) {
    selectedPalier = palierName;
    generatedReference = generateReference();
    
    // Mettre à jour l'interface
    document.getElementById("terminalLocked").style.display = "none";
    document.getElementById("terminalActive").style.display = "block";
    document.getElementById("selectedPalierDisplay").innerText = `PALIER RETENU : ${palierName.toUpperCase()}`;
    document.getElementById("generatedRefDisplay").innerText = generatedReference;
    
    // Scroll fluide vers le terminal
    document.getElementById("terminalActive").scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ==========================================
// 5. VALIDATION DU CONTEXTE (Jauge des 150 caractères)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const contextInput = document.getElementById("contexteClient");
    const charCounter = document.getElementById("charCount");
    const initBtn = document.getElementById("btnInitContext");

    if(contextInput) {
        contextInput.addEventListener('input', function() {
            const length = this.value.trim().length;
            charCounter.innerText = `${length} / 150 caractères minimum`;
            
            if (length >= 150) {
                charCounter.style.color = "#25D366"; // Vert WhatsApp/Succès
                initBtn.disabled = false;
                initBtn.style.opacity = "1";
                initBtn.classList.add("glow"); // Ajoute un effet visuel (défini en CSS)
            } else {
                charCounter.style.color = "#8892b0"; // Gris par défaut
                initBtn.disabled = true;
                initBtn.style.opacity = "0.5";
                initBtn.classList.remove("glow");
            }
        });
    }
});

// ==========================================
// 6. GESTION DES MODALES (Secteurs & Restitution)
// ==========================================
function openSectorsModal() {
    document.getElementById('sectorsOverlay').style.display = 'flex';
}

function closeSectorsModal() {
    document.getElementById('sectorsOverlay').style.display = 'none';
}

function openDeliveryModal() {
    // Vérification de base avant d'ouvrir la modale de livraison
    const entity = document.getElementById("entityName").value.trim();
    const context = document.getElementById("contexteClient").value.trim();
    
    if(!entity || context.length < 150) {
        alert("Le nom de l'entité et un contexte minimum de 150 caractères sont requis pour initialiser la procédure.");
        return;
    }
    document.getElementById('deliveryOverlay').style.display = 'flex';
}

function closeDeliveryModal() {
    document.getElementById('deliveryOverlay').style.display = 'none';
}

// Fermeture des modales si on clique en dehors de la boîte
window.addEventListener('click', (e) => {
    const sectorsModal = document.getElementById('sectorsOverlay');
    const deliveryModal = document.getElementById('deliveryOverlay');
    if (e.target === sectorsModal) closeSectorsModal();
    if (e.target === deliveryModal) closeDeliveryModal();
});

// ==========================================
// 7. MOTEUR D'INGESTION ET TRANSMISSION (Vers n8n)
// ==========================================
async function submitFinalMandate() {
    const btn = document.querySelector('.delivery-btn');
    const originalText = btn.innerText;

    // 1. Récupération des champs "Restitution"
    const email = document.getElementById('contactEmail').value.trim();
    const phone = document.getElementById('contactWhatsApp').value.trim();

    // Validation basique
    if (!email || !email.includes('@')) {
        alert("Un email institutionnel valide est requis pour le scellement.");
        return;
    }
    if (!phone) {
        alert("Le canal WhatsApp est requis pour la notification du desk d'arbitrage.");
        return;
    }

    // Changement d'état du bouton
    btn.innerText = "CHiffrement & Transmission...";
    btn.disabled = true;
    btn.style.opacity = "0.7";

    // 2. Récupération des champs du "Terminal"
    const entityName = document.getElementById("entityName").value.trim();
    const contexteClient = document.getElementById("contexteClient").value.trim();
    const fileInput = document.getElementById("clientFile");

    // 3. Traitement du Fichier (si présent)
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        // Limite stricte à 3.5 Mo pour garantir le passage dans les Webhooks standards
        if (file.size > 3.5 * 1024 * 1024) {
            alert("Violation du protocole : La taille du justificatif excède la limite sécurisée de 3.5 Mo.");
            btn.innerText = originalText;
            btn.disabled = false;
            btn.style.opacity = "1";
            return;
        }
        try {
            currentFileData = await getBase64(file);
            currentFileName = file.name;
        } catch (error) {
            console.error("Erreur de conversion Base64", error);
            alert("Erreur de lecture du justificatif.");
            btn.innerText = originalText;
            btn.disabled = false;
            btn.style.opacity = "1";
            return;
        }
    }

    // 4. Génération de l'empreinte de la requête (Le "Fingerprint" pour NocoDB/Woleet)
    // On hache une combinaison des éléments fondamentaux
    const rawDataToHash = generatedReference + entityName + contexteClient + new Date().toISOString();
    const requestHash = await hashData(rawDataToHash);

    // 5. Construction de la Payload JSON (Formatée pour n8n)
    const payload = {
        metadata: {
            source: "Terminal e-META LABS Web",
            timestamp_utc: new Date().toISOString(),
            mandate_reference: generatedReference,
            request_hash_sha256: requestHash,
            lang: document.documentElement.lang || 'fr'
        },
        accreditation: {
            palier_retenu: selectedPalier
        },
        client_data: {
            entity_name: entityName,
            email_contact: email,
            whatsapp_number: phone
        },
        audit_context: {
            problematique_brute: contexteClient
        },
        attachment: {
            has_file: fileInput.files.length > 0,
            file_name: currentFileName,
            file_base64: currentFileData
        }
    };

    // 6. Transmission Sécurisée vers n8n via POST
    try {
        const response = await fetch(WEBHOOK_N8N_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Optionnel : ajouter des tokens d'autorisation si n8n est configuré pour
                // 'Authorization': 'Bearer VOTRE_TOKEN_SECRET_N8N'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            // Succès
            btn.innerText = "MANDAT VERROUILLÉ ✅";
            
            // Fermer la modale
            setTimeout(() => {
                closeDeliveryModal();
                
                // Remplacer le terminal par un message de confirmation institutionnel
                document.getElementById('terminalActive').innerHTML = `
                    <div style="text-align:center; padding: 40px 20px;">
                        <span style="font-size: 3rem; color: #d4af37;">⚖️</span>
                        <h3 style="color:#d4af37; margin-top: 20px; font-family:'Cinzel', serif; letter-spacing: 2px;">Procédure Initiée avec Succès</h3>
                        <p style="color: #e6f1ff; font-size: 1.1rem; margin-top: 15px;">
                            Votre référence <strong>${generatedReference}</strong> a été ancrée dans notre base de données.<br>
                            Le traitement algorithmique est en cours.
                        </p>
                        <p style="color: #8892b0; font-size: 0.9rem; margin-top: 15px;">
                            Une notification de liaison vous sera transmise d'ici peu sur l'adresse <strong>${email}</strong> et au numéro WhatsApp renseigné.
                        </p>
                        <button onclick="location.reload()" class="btn-gold" style="margin-top: 30px;">CLÔTURER LA SESSION</button>
                    </div>
                `;
            }, 1000);

        } else {
            // n8n a répondu avec une erreur (ex: 400 Bad Request, 500 Server Error)
            throw new Error(`Le serveur d'orchestration a refusé la charge (Code: ${response.status})`);
        }
    } catch (error) {
        // Erreur réseau ou plantage n8n
        console.error('Erreur Critique de Transmission:', error);
        alert(`Erreur de transmission : Le serveur est actuellement injoignable ou a refusé la connexion. Veuillez contacter le support technique (Ref: ${generatedReference}).`);
        
        btn.innerText = originalText;
        btn.disabled = false;
        btn.style.opacity = "1";
    }
}

// Fonction utilitaire pour le bouton Reset dans le Header
function resetForm() {
    if(confirm("Voulez-vous réinitialiser le terminal et effacer les données en cours ?")) {
        location.reload();
    }
}
