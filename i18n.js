<form id="metaForm" class="form">

  <!-- 1. Informations générales -->
  <fieldset class="field-group">
    <legend data-i18n="form.section.general">1. Informations générales</legend>

    <label data-i18n="form.domain.label" for="domainMain">Domaine / Thème principal</label>
    <select id="domainMain" name="domainMain">
      <option value="" data-i18n="form.domain.placeholder">
        Sélectionnez un domaine
      </option>
      <option data-i18n="form.domain.business">Business / Stratégie</option>
      <option data-i18n="form.domain.marketing">Marketing / Vente</option>
      <option data-i18n="form.domain.finance">Finance</option>
      <option data-i18n="form.domain.tech">Technologie / Digital</option>
      <option data-i18n="form.domain.other">Autre</option>
    </select>

    <label data-i18n="form.project.label" for="projectTitle">
      Titre court du projet ou de la décision
    </label>
    <input
      type="text"
      id="projectTitle"
      name="projectTitle"
      data-i18n-placeholder="form.project.placeholder"
      placeholder="Ex : Lancement d’un nouveau service digital"
    />
  </fieldset>

  <!-- 2. Problème central -->
  <fieldset class="field-group">
    <legend data-i18n="form.section.problem">2. Problème central</legend>

    <textarea
      id="problem"
      name="problem"
      rows="4"
      data-i18n-placeholder="form.problem.placeholder"
      placeholder="Décrivez clairement le problème ou la décision à prendre"
    ></textarea>
  </fieldset>

  <!-- 3. Objectifs -->
  <fieldset class="field-group">
    <legend data-i18n="form.section.objectives">3. Objectifs</legend>

    <textarea
      id="objectives"
      name="objectives"
      rows="3"
      data-i18n-placeholder="form.objectives.placeholder"
      placeholder="Quels résultats souhaitez-vous atteindre ?"
    ></textarea>
  </fieldset>

  <!-- 4. Contraintes -->
  <fieldset class="field-group">
    <legend data-i18n="form.section.constraints">4. Contraintes & limites</legend>

    <textarea
      id="constraints"
      name="constraints"
      rows="3"
      data-i18n-placeholder="form.constraints.placeholder"
      placeholder="Budget, délais, ressources, règles internes…"
    ></textarea>
  </fieldset>

  <!-- 5. Contact -->
  <fieldset class="field-group">
    <legend data-i18n="form.section.contact">5. Restitution (facultatif)</legend>

    <input
      type="email"
      name="email"
      data-i18n-placeholder="form.contact.email"
      placeholder="Adresse e-mail (facultatif)"
    />

    <input
      type="tel"
      name="whatsapp"
      data-i18n-placeholder="form.contact.whatsapp"
      placeholder="Numéro WhatsApp (facultatif)"
    />
  </fieldset>

  <button type="submit" class="cta-primary" data-i18n="form.submit">
    Lancer l’analyse stratégique
  </button>

</form>
