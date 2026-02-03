const resources = {
    fr: {
        "meta.title": "e-META LABS — Moteur IA Stratégique",
        "header.tagline": "L'intelligence stratégique au service de vos décisions.",
        "nav.home": "Vision",
        "nav.form": "Lancer l'Analyse",
        "nav.privacy": "Politique de Confidentialité",
        "hero.title": "L’Excellence Stratégique à la portée de chaque Décision.",
        "hero.subtitle": "Station de pilotage décisionnelle de niveau Cabinet Conseil.",
        "form.title": "Expertise Decision Engine",
        "engine.status": "SYSTÈME PRÊT",
        "group.general": "01 Périmètre & Expertise",
        "group.analysis": "02 Analyse de Contexte",
        "group.output.industry.label">Secteur d'Activité</label>
                                <select name="industry" id="industry">
                                    <option value="energy" data-i18n="industry.energy">Énergies Vertes</option>
                                    <option value="blue" data-i18n="industry.blue">Blue Economy</option>
                                    <option value="health" data-i18n="industry.health">HealthTech</option>
                                    <option value="agri" data-i18n="industry.agri">Agribusiness</option>
                                    <option value="logistics" data-i18n="industry.logistics">Logistique</option>
                                </select>
                            </div>
                            <div class="input-group">
                                <label data-i18n="field.geography.label">Zone d'Impact</label>
                                <input type="text" name="geography" id="geography" data-i18n-placeholder="field.geography.placeholder">
                            </div>
": "03 Canaux de Restitution",
        "field.projectTitle.label": "Titre de la Décision",
        "field.projectTitle.placeholder": "Ex: Expansion hôtelière ou Audit IA...",
        "field.domain.label": "Expertise Requise",
        "domain.ai": "Souveraineté IA & Transformation",
        "domain.finance": "Ingénierie ESG & Finance",
        "domain.ma": "M&A (Fusions-Acquisitions)",
        "domain.legal": "Optimisation Fiscale OHADA",
        "domain.crisis": "Gestion de Crise Cyber",
        "field.industry.label": "Secteur d'Activité",
        "industry.energy": "Énergies Vertes & Transition",
        "industry.blue": "Blue Economy & Maritime",
        "industry.health": "HealthTech & Pharma",
        "industry.agri": "Agribusiness Intelligent",
        "industry.                        </div>
                    </div>

                    <div class="form-step">
                        <h3 class="step-title"><span data-i18n="group.analysis">02 Analyse de Contexte</span></h3>
                        <div class="input-group">
                            <label data-i18n="field.problem.label">Problématique & Enjeux</label>
                            <textarea name="problem" id="problem" rows="4" data-i18n-placeholder="field.problem.placeholder"></textarea>
                        </div>
                        <div class="input-group">
                            <label data-i18n="field.fileLink.label">Audit Documentaire (Lien Cloud)</label>
                            <input type="url" name="fileLink" id="fileLink" data-i18n-placeholder="field.fileLink.placeholder">
                        </div>
                    </div>

                    <div class="form-step">
                        <h3 class="step-title"><span data-i18n="group.output">03 Canaux de Restitution</span></h3>
                        <div class="input-grid">
                            <div class="input-group">
                                <label data-i18n="field.email.label">Email de Direction</label>
                                <input type="email" name="email" id="email" placeholder="admin@votre-sasu.com">
                            </div>
                            <div class="input-group">
                                <label data-i18n="field.whatsapp.label">Ligne WhatsApp Expert</label>
                                <input type="tel" name="whatsapp" id="whatsapp" placeholder="+221...">
                            </div>
                        </div>
                        <div class="delivery-container">
                            <label class="delivery-label" data-i18n="field.outputMode.label">Mode de livraison</label>
                            <div class="delivery-grid">
                                <label class="deliv-card"><input type="checkbox" name="wa" checked> <span>WhatsApp</span></label>
                                <label class="deliv-cardlogistics": "Logistique Globale",
        "field.geography.label": "Zone d'Impact",
        "field.geography.placeholder": "Sénégal, Europe, USA...",
        "field.problem.label": "Problématique & Enjeux",
        "field.problem.placeholder": "Décrivez les enjeux critiques de votre situation...",
        "field.fileLink.label": "Audit Documentaire (Lien Cloud)",
        "field.fileLink.placeholder": "Lien Google Drive, PDF, Contrat...",
        "field.email.label": "Email de Direction",
        "field.whatsapp.label": "Ligne WhatsApp Expert",
        "field.outputMode.label": "Mode de livraison souhaité",
        "field.outputMode.display": "Affichage Direct",
        "form.submit": "GÉNÉRER L'EXPERTISE E-META",
        "hero.trust": "🔒 Souveraineté des données & Certification Blockchain",
        "footer.object": "Conception, développement et exploitation de solutions d'IA dédiées à l'aide à la décision.",
        "privacy.title": "Politique de Confidentialité e-META LABS",
        "privacy.body": "1. SOUVERAINETÉ : Vos données ne sont jamais utilisées pour l'entraînement de modèles publics.\n2. SÉCURITÉ : Certification d'antériorité par horodatage Blockchain Bitcoin (Woleet).\n3. CADRE : e-META est un outil d'aide à la décision, pas un conseil réglementé."
    },
    en: {
        "meta.title": "e-META LABS — Strategic AI Engine",
        "header.tagline": "Strategic intelligence at the service of your decisions.",
        "nav.home": "Vision",
        "nav.form": "Launch Analysis",
        "nav.privacy": "Privacy Policy",
        ""><input type="checkbox" name="mail" checked> <span>Email & PDF</span></label>
                                <label class="deliv-card"><input type="checkbox" name="web"> <span data-i18n="field.outputMode.display">Affichage Direct</span></label>
                            </div>
                        </div>
                    </div>

                    <div class="form-footer">
                        <p class="security-note">
                            <span data-i18n="hero.trust">🔒 Souveraineté & Certification Blockchain</span>
                        </p>
                        <button type="submit" class="btn-engine" id="submitBtn">
                            <span data-i18n="form.submit">Générer l'Expertise e-META</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</main>

<footer class="site-footer">
    <div class="container">
        <h4 class="company-name">e-META LABS <span class="legal-tag">(SASU)</span></h4>
        <p class="social-object" data-i18n="footer.object">Conception et exploitation de solutions d'IA dédiées à l'aide à la décision.</p>
        <div class="legal-box">
            <button class="btn-privacy-trigger" id="openPrivacy" data-i18n="nav.privacy">Politique de Confidentialité</button>
        </div>
        <p class="credits">© 2026 e-META LABS | Senegal • Worldwide</p>
    </div>
</footer>

<div id="privacyModal" class="modal">
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <h2 data-i18n="nav.privacy">Politique de Confidentialité</h2>
        <div id="modalBody" class="modal-body"></div>
    </div>
</div>

<script src="i18n.js"></script>
<script src="script.js"></script>
</body>
</html>
