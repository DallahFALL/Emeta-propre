/* ============================================================
   e-META SCRIPT GLOBAL — VERSION 5.0
   - Header/Footer injection
   - Menu mobile
   - Langues + RTL
   - Formulaire e-META
   - Compatibilité multi-pages
   ============================================================ */
// URL du Webhook Make (à personnaliser)
const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/TON_WEBHOOK_ICI";

/* ============================================================
   1. INJECTION HEADER + FOOTER (toutes pages)
   ============================================================ */

function loadHeader() {
    document.getElementById("headerContainer").innerHTML = `
      <header class="header">
        <div class="nav-wrapper">

          <a href="index.html#home" class="brand">
            <img src="01_Logo_Sources/eMETA-official-logo.svg.png" class="logo" alt="e-META" />
            <span class="brand-name">e-META</span>
          </a>

          <!-- Menu Desktop -->
          <nav id="mainNav" class="nav">
            <a href="index.html#home" data-i18n="nav_home">Accueil</a>
            <a href="index.html#about" data-i18n="nav_about">À propos</a>
            <a href="index.html#faq" data-i18n="nav_faq">FAQ</a>
            <a href="index.html#contact" data-i18n="nav_contact">Contact</a>
          </nav>

          <!-- Actions Desktop -->
          <div class="actions">
            <button id="whatsappBtn" class="btn-wa">WhatsApp</button>

            <div class="langbox">
              <button id="langToggle" class="lang-btn">
                <span id="currentLang">FR</span> ▼
              </button>
              <ul id="langMenu" class="lang-menu">
                <li data-lang="fr">🇫🇷 Français</li>
                <li data-lang="en">🇬🇧 English</li>
                <li data-lang="es">🇪🇸 Español</li>
                <li data-lang="ar">🇸🇦 العربية</li>
              </ul>
            </div>
          </div>

          <!-- Burger -->
          <button id="burgerBtn" class="burger">
            <span></span><span></span><span></span>
          </button>

        </div>
      </header>
    `;
}

function loadFooter() {
    document.getElementById("footerContainer").innerHTML = `
      <footer class="footer">
        <p>© 2025 e-META • Simplement. Intelligemment.</p>
      </footer>
    `;
}

loadHeader();
loadFooter();


/* ============================================================
   2. MENU MOBILE
   ============================================================ */

document.addEventListener("click", () => {
    const burgerBtn = document.getElementById("burgerBtn");
    const mainNav = document.getElementById("mainNav");

    if (!burgerBtn || !mainNav) return;

    burgerBtn.addEventListener("click", () => {
        burgerBtn.classList.toggle("active");
        mainNav.classList.toggle("open");
    });
});


/* ============================================================
   3. BOUTON LANGUE + TRADUCTIONS
   ============================================================ */

const langElements = {};
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        langElements[el.getAttribute("data-i18n")] = el;
    });
});

const i18n = {
    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_faq: "FAQ",
        nav_contact: "Contact",
        badge_ai: "IA décisionnelle",
        hero_title: "e-META — L’assistant IA pluridisciplinaire",
        hero_sub: "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",
        form_title: "Requête décisionnelle e-META",
        label_fullname: "Nom complet",
        label_email: "Email (optionnel)",
        label_phone: "Téléphone WhatsApp (optionnel)",
        label_domain: "Domaine / Thème",
        label_title: "Titre court de la décision",
        label_context: "Contexte détaillé",
        label_objectives: "Objectifs recherchés",
        label_constraints: "Contraintes / limites",
        label_budget: "Budget indicatif",
        label_currency: "Devise",
        label_deadline: "Délai souhaité",
        label_urgency: "Urgence (1–5)",
        label_delivery: "Mode de restitution",
        delivery_auto: "Automatique",
        delivery_email: "Email",
        delivery_whatsapp: "WhatsApp",
        delivery_display: "Affichage direct",
        label_file: "Lien fichier (optionnel)",
        label_consent: "J’autorise e-META à analyser mes données.",
        label_privacy: "Voir la politique de confidentialité",
        btn_reset: "Réinitialiser",
        btn_send: "Envoyer",

        /* PRIVACY */
        privacy_title: "Politique de confidentialité – e-META",
        privacy_h1: "Politique de confidentialité – e-META",
        privacy_updated: "Dernière mise à jour :",
        privacy_1_title: "1. Données collectées",
        privacy_1_1: "Identité : nom et prénom",
        privacy_1_2: "Coordonnées : email, WhatsApp",
        privacy_1_3: "Informations de contexte : domaine, titre du projet, objectifs, contraintes",
        privacy_1_4: "Budget : montant + devise",
        privacy_1_5: "Informations complémentaires : délai, urgence, lien fichier",
        privacy_2_title: "2. Finalité du traitement",
        privacy_2_text: "Les données servent uniquement à générer une analyse personnalisée via l’IA.",
        privacy_3_title: "3. Durée de conservation",
        privacy_3_text: "Les données sont supprimées automatiquement après analyse.",
        privacy_4_title: "4. Sécurité",
        privacy_4_text: "Données cryptées et stockées de manière sécurisée.",
        privacy_5_title: "5. Vos droits",
        privacy_5_text: "Vous pouvez demander la suppression de vos données à tout moment."
    },

    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_faq: "FAQ",
        nav_contact: "Contact",
        badge_ai: "Decision-making AI",
        hero_title: "e-META — The multidisciplinary AI assistant",
        hero_sub: "Smart decision form to analyse, diagnose and recommend tailored solutions.",
        form_title: "e-META decision request",
        label_fullname: "Full name",
        label_email: "Email (optional)",
        label_phone: "WhatsApp Phone (optional)",
        label_domain: "Domain / Theme",
        label_title: "Decision title",
        label_context: "Detailed context",
        label_objectives: "Objectives",
        label_constraints: "Constraints",
        label_budget: "Budget amount",
        label_currency: "Currency",
        label_deadline: "Deadline",
        label_urgency: "Urgency (1–5)",
        label_delivery: "Delivery channel",
        delivery_auto: "Automatic",
        delivery_email: "Email",
        delivery_whatsapp: "WhatsApp",
        delivery_display: "On-screen display",
        label_file: "File link (optional)",
        label_consent: "I authorize e-META to analyse my data.",
        label_privacy: "View privacy policy",
        btn_reset: "Reset",
        btn_send: "Send",

        privacy_title: "Privacy Policy – e-META",
        privacy_h1: "Privacy Policy – e-META",
        privacy_updated: "Last updated:",
        privacy_1_title: "1. Data collected",
        privacy_1_1: "Identity: full name",
        privacy_1_2: "Contact: email, WhatsApp",
        privacy_1_3: "Context: domain, project title, objectives, constraints",
        privacy_1_4: "Budget: amount + currency",
        privacy_1_5: "Additional information: deadline, urgency, file link",
        privacy_2_title: "2. Purpose",
        privacy_2_text: "Your data is used only to generate a personalized AI analysis.",
        privacy_3_title: "3. Retention",
        privacy_3_text: "Data is deleted after the analysis.",
        privacy_4_title: "4. Security",
        privacy_4_text: "Encrypted and securely stored.",
        privacy_5_title: "5. Your rights",
        privacy_5_text: "You may request deletion at any time."
    },

    es: {
        nav_home: "Inicio",
        nav_about: "Acerca de",
        nav_faq: "FAQ",
        nav_contact: "Contacto",
        hero_title: "e-META — Asistente IA multidisciplinario"
    },

    ar: {
        nav_home: "الرئيسية",
        nav_about: "حول",
        nav_faq: "الأسئلة",
        nav_contact: "اتصال",
        badge_ai: "ذكاء اصطناعي للقرارات",
        hero_title: "e-META — المساعد الذكي متعدد التخصصات",
        hero_sub: "نموذج ذكي لتحليل وتشخيص وتقديم حلول مناسبة.",

        form_title: "طلب قرار عبر e-META",
        label_fullname: "الاسم الكامل",
        label_email: "البريد الإلكتروني (اختياري)",
        label_phone: "هاتف واتساب (اختياري)",
        label_domain: "المجال / الموضوع",
        label_title: "عنوان القرار",
        label_context: "السياق بالتفصيل",
        label_objectives: "الأهداف المطلوبة",
        label_constraints: "القيود / الحدود",
        label_budget: "الميزانية",
        label_currency: "العملة",
        label_deadline: "المدة المطلوبة",
        label_urgency: "درجة الاستعجال (1–5)",
        label_delivery: "طريقة الإرسال",
        delivery_auto: "تلقائي",
        delivery_email: "البريد الإلكتروني",
        delivery_whatsapp: "واتساب",
        delivery_display: "عرض مباشر",
        label_file: "رابط الملف (اختياري)",
        label_consent: "أوافق على تحليل بياناتي.",
        label_privacy: "عرض سياسة الخصوصية",
        btn_reset: "إعادة ضبط",
        btn_send: "إرسال",

        /* PRIVACY */
        privacy_title: "سياسة الخصوصية – e-META",
        privacy_h1: "سياسة الخصوصية – e-META",
        privacy_updated: "آخر تحديث:",
        privacy_1_title: "1. البيانات المجمعة",
        privacy_1_1: "الهوية: الاسم الكامل",
        privacy_1_2: "التواصل: البريد الإلكتروني، واتساب",
        privacy_1_3: "بيانات السياق: المجال، عنوان المشروع، الأهداف، القيود",
        privacy_1_4: "الميزانية: المبلغ + العملة",
        privacy_1_5: "معلومات إضافية: المهلة، الاستعجال، رابط الملف",
        privacy_2_title: "2. الغرض من الاستخدام",
        privacy_2_text: "تُستخدم البيانات فقط لإنتاج تحليل مخصص عبر الذكاء الاصطناعي.",
        privacy_3_title: "3. مدة الاحتفاظ",
        privacy_3_text: "يتم حذف البيانات بعد التحليل.",
        privacy_4_title: "4. الأمان",
        privacy_4_text: "تخزين آمن وتشفير البيانات.",
        privacy_5_title: "5. حقوقك",
        privacy_5_text: "يمكنك طلب حذف بياناتك في أي وقت."
    }
};


/* ============================================================
   4. APPLICATION DES TRADUCTIONS
   ============================================================ */

function applyTranslations(lang) {

    // RTL toggle
    if (lang === "ar") document.body.classList.add("rtl");
    else document.body.classList.remove("rtl");

    // Loop elements
    for (let key in i18n[lang]) {
        const el = document.querySelector(`[data-i18n="${key}"]`);
        if (el) el.textContent = i18n[lang][key];
    }

    // Save choice
    localStorage.setItem("emetaLang", lang);

    // Update language label
    document.getElementById("currentLang").innerText = lang.toUpperCase();
}
function applyPlaceholderTranslations(lang) {
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (i18n[lang] && i18n[lang][key]) {
      el.placeholder = i18n[lang][key];
    }
  });
}


/* ============================================================
   5. GESTION DU SWITCHER DE LANGUES
   ============================================================ */

document.addEventListener("click", () => {
    const langToggle = document.getElementById("langToggle");
    const langMenu = document.getElementById("langMenu");

    if (!langToggle) return;

    langToggle.onclick = () => langMenu.classList.toggle("show");

    langMenu.querySelectorAll("li").forEach(li => {
        li.onclick = () => {
            applyTranslations(li.dataset.lang);
            langMenu.classList.remove("show");
        };
    });
});
applyPlaceholderTranslations(lang);


/* ============================================================
   6. CHARGER LA LANGUE SAUVEGARDÉE
   ============================================================ */

const savedLang = localStorage.getItem("emetaLang") || "fr";
applyTranslations(savedLang);


/* ============================================================
   7. REMPLISSAGE LISTES (DOMAINES + DEVISES)
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    const domains = [
        "Agriculture", "Énergie", "Finances & Banque", "Immobilier",
        "Industrie", "Transport & Logistique", "Technologie & IA",
        "Santé", "Éducation", "Gouvernance", "ONG", "Autre"
    ];

    const currencies = ["XOF", "USD", "EUR", "GBP", "CNY", "AED", "CAD"];

    const domainSelect = document.getElementById("domainSelect");
    const currencySelect = document.getElementById("currencySelect");

    if (domainSelect) domains.forEach(d => {
        domainSelect.innerHTML += `<option>${d}</option>`;
    });

    if (currencySelect) currencies.forEach(c => {
        currencySelect.innerHTML += `<option>${c}</option>`;
    });
});


/* ============================================================
   8. LOGIQUE FORMULAIRE e-META (Make Webhook + Résumé)
   ============================================================ */

document.addEventListener("click", () => {

    const sendBtn = document.getElementById("sendBtn");
    const resetBtn = document.getElementById("resetBtn");

    if (!sendBtn) return;

    sendBtn.onclick = async () => {

        const data = {
            fullname: document.getElementById("fullname").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            domain: document.getElementById("domainSelect").value,
            decision_title: document.getElementById("decision_title").value,
            context: document.getElementById("context").value,
            objectives: document.getElementById("objectives").value,
            constraints: document.getElementById("constraints").value,
            budget_amount: document.getElementById("budget_amount").value,
            budget_currency: document.getElementById("currencySelect").value,
            deadline: document.getElementById("deadline").value,
            urgency: document.getElementById("urgency").value,
            attachment: document.getElementById("attachment").value,
            consent: document.getElementById("consent").checked,
            lang: localStorage.getItem("emetaLang"),
            delivery: document.querySelector("input[name='delivery']:checked").value
        };

        if (!data.fullname) {
            alert("Veuillez entrer votre nom complet.");
            return;
        }

        if (!data.consent) {
            alert("Veuillez accepter l'analyse des données.");
            return;
        }

        try {
            await fetch(MAKE_WEBHOOK_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    type: "decision_request",
    payload: data
  })
});

            alert("Votre requête a été envoyée avec succès !");
        }
        catch (err) {
            alert("Erreur réseau : impossible d'envoyer la requête.");
        }
    };

    resetBtn.onclick = () => {
        document.getElementById("emetaForm").reset();
    };
});


/* ============================================================
   9. BOUTON WHATSAPP
   ============================================================ */

document.addEventListener("click", () => {
    const wa = document.getElementById("whatsappBtn");
    if (!wa) return;

    wa.onclick = () => {
        window.open("https://wa.me/221782607212", "_blank");
    };
   /* ============================
   FORMULAIRE DE CONTACT → MAKE
============================ */

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = {
      name: document.getElementById("contact_name").value,
      email: document.getElementById("contact_email").value,
      message: document.getElementById("contact_message").value,
      lang: localStorage.getItem("emetaLang") || "fr"
    };

    try {
      await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact_message",
          payload
        })
      });

      alert("Votre message a été envoyé avec succès.");
      contactForm.reset();
    } catch (err) {
      alert("Erreur lors de l’envoi. Veuillez réessayer.");
    }
  });
});

});
