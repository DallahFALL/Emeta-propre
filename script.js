const CORTEX_INBOUND_WEBHOOK_URL =
    "https://automation.e-metalabs.com/webhook/reception-saisine";

(() => {
    const supportedLanguages = ["fr", "en", "es", "ar"];
    const currencyAttributes = {
        EUR: "eur",
        USD: "usd",
        FCFA: "xof"
    };
    const acceptedAttachmentExtensions = new Set([
        ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".png"
    ]);

    const translate = (key) => {
        if (window.i18n && typeof window.i18n.translate === "function") {
            return window.i18n.translate(key);
        }
        return key;
    };

    window.switchLang = function (lang) {
        if (!supportedLanguages.includes(lang)) {
            throw new RangeError(`Unsupported language: ${lang}`);
        }
        if (!window.i18n || typeof window.i18n.setLanguage !== "function") {
            throw new Error("The i18n language service is not available.");
        }

        window.i18n.setLanguage(lang);
        document.querySelectorAll(".lang-btn").forEach((button) => {
            const active = button.dataset.lang === lang;
            button.classList.toggle("text-gold", active);
            button.classList.toggle("text-slate-400", !active);
            button.setAttribute("aria-pressed", String(active));
        });
    };

    window.setCurrency = function (currency) {
        const normalizedCurrency = currency === "XOF" ? "FCFA" : currency;
        const dataAttribute = currencyAttributes[normalizedCurrency];
        if (!dataAttribute) {
            throw new RangeError(`Unsupported currency: ${currency}`);
        }

        localStorage.setItem("emeta_currency", normalizedCurrency);
        document.querySelectorAll("[data-eur][data-usd][data-xof]").forEach((element) => {
            const amount = element.dataset[dataAttribute];
            if (amount !== undefined) element.textContent = amount;
        });

        document.querySelectorAll("[data-currency]").forEach((button) => {
            const active = button.dataset.currency === normalizedCurrency ||
                (normalizedCurrency === "FCFA" && button.dataset.currency === "XOF");
            button.classList.toggle("text-gold", active);
            button.classList.toggle("text-slate-400", !active);
            button.setAttribute("aria-pressed", String(active));
        });

        window.dispatchEvent(new CustomEvent("emeta:currencychange", {
            detail: { currency: normalizedCurrency }
        }));
    };

    function initializeAuditIntakeForm() {
        const form = document.getElementById("audit-intake-form");
        const phoneInput = document.getElementById("client-phone");
        const status = document.getElementById("form-status");
        const submitButton = document.getElementById("submit-audit");
        if (!form || !phoneInput || !status || !submitButton) return;

        let currentStatusKey = "";
        let sending = false;
        const showStatus = (key) => {
            currentStatusKey = key;
            status.textContent = translate(key);
        };

        phoneInput.addEventListener("input", () => {
            phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");
        });

        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");
            if (!form.reportValidity() || sending) return;

            sending = true;
            submitButton.disabled = true;
            showStatus("site_form_sending");

            try {
                const formData = new FormData(form);
                const submissionDate = new Date().toISOString();
                formData.set("source", "CORTEX_01");
                formData.set("date_analyse_utc", submissionDate);
                formData.set("date", submissionDate);
                formData.set("langue", document.documentElement.lang || "fr");
                formData.set("palier", "Audit Décisionnel");
                formData.set("plan_choisi", "Audit Décisionnel");
                formData.set("currency", "EUR");

                const response = await fetch(CORTEX_INBOUND_WEBHOOK_URL, {
                    method: "POST",
                    body: formData
                });
                if (!response.ok) {
                    throw new Error(`CORTEX_01 returned HTTP ${response.status}`);
                }

                form.reset();
                showStatus("site_form_success");
            } catch (error) {
                console.error("CORTEX_01 transmission failed:", error);
                showStatus("site_form_error");
            } finally {
                sending = false;
                submitButton.disabled = false;
            }
        });

        window.addEventListener("emeta:languagechange", () => {
            if (currentStatusKey) status.textContent = translate(currentStatusKey);
        });
    }

    function initializeTerminalAttachmentValidation() {
        const fileInput = document.getElementById("user-file");
        const contextInput = document.getElementById("mission_contexte");
        const terminalForm = contextInput?.form;
        if (!fileInput || !terminalForm) return;

        const validateFile = () => {
            const file = fileInput.files?.[0];
            if (!file) {
                fileInput.setCustomValidity("");
                return true;
            }

            const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
            const valid = acceptedAttachmentExtensions.has(extension);
            fileInput.setCustomValidity(valid ? "" : translate("terminal.validation.file"));
            return valid;
        };

        fileInput.addEventListener("change", validateFile);
        window.addEventListener("emeta:languagechange", validateFile);
        terminalForm.addEventListener("submit", (event) => {
            if (!validateFile()) {
                event.preventDefault();
                event.stopImmediatePropagation();
                fileInput.reportValidity();
            }
        }, true);
    }

    function initializeLocalizedTerminalState() {
        const contextInput = document.getElementById("mission_contexte");
        if (!contextInput) return;

        contextInput.addEventListener("input", () => {
            if (typeof window.updateCharCounter === "function") {
                window.updateCharCounter(contextInput);
            }
        });
        window.addEventListener("emeta:languagechange", () => {
            if (typeof window.updateCharCounter === "function") {
                window.updateCharCounter(contextInput);
            }
        });
    }

    window.addEventListener("DOMContentLoaded", () => {
        initializeAuditIntakeForm();
        initializeTerminalAttachmentValidation();
        initializeLocalizedTerminalState();

        const preferredCurrency = localStorage.getItem("emeta_currency") || "EUR";
        const storedCurrency = preferredCurrency === "XOF" ? "FCFA" :
            (Object.prototype.hasOwnProperty.call(currencyAttributes, preferredCurrency)
                ? preferredCurrency
                : "EUR");
        window.setCurrency(storedCurrency);
    });
})();
