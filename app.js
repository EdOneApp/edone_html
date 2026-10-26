'use strict';
const menu=document.getElementById('menuToggle'),nav=document.getElementById('navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Ouvrir le menu');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();}});
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reducedMotion&&'IntersectionObserver' in window){document.documentElement.classList.add('js-motion');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
const roles={
direction:{label:"VOTRE ÉTABLISSEMENT, EN VUE D’ENSEMBLE",title:'Piloter avec une longueur d’avance.',description:'Effectifs, recouvrement, académique : retrouvez les indicateurs qui éclairent vos décisions, sans courir après les fichiers.',list:['Tableau de bord 360°','Gestion multi-campus et permissions','Documents officiels vérifiables'],dash:'Votre école avance.',metrics:['Étudiants inscrits','1 248','Année académique en cours','Recouvrement','87 %','Une vision en temps réel'],chart:'Les inscriptions, mois après mois'},
enseignants:{label:'PLUS DE TEMPS POUR TRANSMETTRE',title:'Préparer, partager. Et voir progresser.',description:'Vos cours, vos évaluations et vos échanges au même endroit. Retrouvez le temps de vous concentrer sur vos étudiants.',list:['Quiz sécurisés et devoirs individuels ou de groupe','Saisie et import des notes par Excel','Contrats, volumes horaires et acomptes'],dash:'Une journée pour transmettre.',metrics:['Cours cette semaine','12','Votre emploi du temps','Devoirs à corriger','24','Individuels et collectifs'],chart:'Les évaluations au fil du semestre'},
etudiants:{label:'VOTRE PARCOURS PREND FORME',title:'Apprendre avec tous les repères.',description:'Un cours à retrouver, une note à consulter, un devoir à rendre : votre vie étudiante tient dans un espace qui vous suit partout.',list:['Notes, bulletins et emploi du temps','Bibliothèque numérique intégrée','Paiements en ligne et CV automatique'],dash:'À vous le prochain chapitre.',metrics:['Moyenne du semestre','14,5','Sur 20 · Exemple','Devoirs rendus','8 / 9','Votre progression'],chart:'Votre parcours, mois après mois'},
parents:{label:'LE LIEN AVEC L’ÉCOLE, TOUT SIMPLEMENT',title:'Être présent, même à distance.',description:'Suivez le parcours de votre enfant et réglez la scolarité depuis votre téléphone. Le lien avec son école devient plus simple.',list:['Suivi des notes et des bulletins','Alertes d’absences et notifications','Paiement de la scolarité par Mobile Money'],dash:'Gardez le lien avec son école.',metrics:['Scolarité réglée','75 %','Suivi des échéances','Prochaine échéance','50 000 F','Montant illustratif'],chart:'Les règlements au fil de l’année'}};
const tabs=[...document.querySelectorAll('[data-role]')];
function selectRole(tab){tabs.forEach(t=>{t.setAttribute('aria-selected',String(t===tab));t.tabIndex=t===tab?0:-1;});const r=roles[tab.dataset.role];document.getElementById('role-panel').setAttribute('aria-labelledby',tab.id);document.getElementById('role-label').textContent=r.label;document.getElementById('role-title').textContent=r.title;document.getElementById('role-desc').textContent=r.description;document.getElementById('role-list').replaceChildren(...r.list.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));document.getElementById('dash-title').textContent=r.dash;['metric1label','metric1','metric1note','metric2label','metric2','metric2note'].forEach((id,i)=>document.getElementById(id).textContent=r.metrics[i]);document.getElementById('chart-title').textContent=r.chart;document.querySelectorAll('.bars i').forEach((bar,i)=>{bar.style.height=(25+((i*13+tab.dataset.role.length*7)%65))+'%';});}
tabs.forEach((t,i)=>{t.addEventListener('click',()=>selectRole(t));t.addEventListener('keydown',e=>{let target;if(e.key==='ArrowRight'||e.key==='ArrowDown')target=tabs[(i+1)%tabs.length];if(e.key==='ArrowLeft'||e.key==='ArrowUp')target=tabs[(i+tabs.length-1)%tabs.length];if(e.key==='Home')target=tabs[0];if(e.key==='End')target=tabs.at(-1);if(target){e.preventDefault();selectRole(target);target.focus();}});});
// The feature content is embedded to keep this static page usable via file:// too.
const modules=[
  {
    "category": "Pédagogie",
    "title": "Gestion académique",
    "description": "Années académiques, campus, salles, filières, niveaux, classes et maquettes pédagogiques."
  },
  {
    "category": "Pédagogie",
    "title": "Inscription &amp; réinscription",
    "description": "Dossier électronique complet, cartes étudiants, kits &amp; accessoires, statistiques en direct."
  },
  {
    "category": "Pédagogie",
    "title": "Emploi du temps",
    "description": "Planification par classe, émargements numériques, export PDF/Excel."
  },
  {
    "category": "Pédagogie",
    "title": "Espace enseignant",
    "description": "Contrats, volume horaire, travaux dirigés, dépôt de supports, RIB, acomptes."
  },
  {
    "category": "Pédagogie",
    "title": "Quiz sécurisés anti-triche",
    "description": "QCM, choix multiples, réponses libres, tentatives limitées, détection de changement d'onglet."
  },
  {
    "category": "Pédagogie",
    "title": "Devoirs individuels",
    "description": "Dépôt de fichier, consigne jointe, correction et appréciation par l'enseignant."
  },
  {
    "category": "Pédagogie",
    "title": "Devoirs de groupe",
    "description": "Constitution des groupes, chef de groupe désigné, soumission et notation collective."
  },
  {
    "category": "Pédagogie",
    "title": "Évaluations &amp; notation",
    "description": "Import de notes par Excel, coefficients configurables, gestion des réclamations."
  },
  {
    "category": "Documents",
    "title": "Bulletins",
    "description": "Génération automatique par semestre, moyennes pondérées, rangs et appréciations."
  },
  {
    "category": "Documents",
    "title": "Procès-verbaux",
    "description": "PV de semestre et annuel, calcul des crédits, décisions de passage automatisées."
  },
  {
    "category": "Documents",
    "title": "Diplômes &amp; certificats",
    "description": "Sessions de délivrance, génération en masse, code de vérification publique."
  },
  {
    "category": "Documents",
    "title": "Attestations de scolarité",
    "description": "Certificats de scolarité, de réussite et d'admission, vérifiables via lien public."
  },
  {
    "category": "Documents",
    "title": "Reçus de paiement",
    "description": "Reçu automatique à chaque paiement, envoyé par SMS et email, historique complet."
  },
  {
    "category": "Documents",
    "title": "Carte étudiant",
    "description": "Carte numérique et imprimable avec photo, statut de remise suivi par la direction."
  },
  {
    "category": "Documents",
    "title": "CV automatique",
    "description": "Généré à partir du parcours de l'étudiant, personnalisable et partageable via un lien."
  },
  {
    "category": "Documents",
    "title": "Vérification en ligne",
    "description": "Chaque document officiel est vérifiable publiquement via son code unique."
  },
  {
    "category": "Finance",
    "title": "Comptabilité &amp; scolarité",
    "description": "Frais de scolarité, plans de paiement, historique complet, statuts de solde."
  },
  {
    "category": "Finance",
    "title": "Wallet établissement",
    "description": "Solde en temps réel, demandes de reversement, historique de toutes les transactions."
  },
  {
    "category": "Finance",
    "title": "Abonnement &amp; facturation",
    "description": "Facturation SaaS mensuelle automatisée, prélèvement wallet ou paiement en ligne."
  },
  {
    "category": "Finance",
    "title": "Réconciliation automatique",
    "description": "Rapprochement automatique des transactions et détection d'écarts."
  },
  {
    "category": "Finance",
    "title": "Stock &amp; moyens généraux",
    "description": "Produits, catégories, fournisseurs, commandes, remise de kits &amp; accessoires."
  },
  {
    "category": "Finance",
    "title": "Ressources humaines",
    "description": "Fiches personnel administratif, services, contrats et suivi RH."
  },
  {
    "category": "Finance",
    "title": "Demandes d'acompte",
    "description": "Enseignants et personnel demandent un acompte en ligne, validé par la comptabilité."
  },
  {
    "category": "Finance",
    "title": "Infirmerie",
    "description": "Dossiers médicaux, antécédents, consultations, arrêts de travail."
  },
  {
    "category": "Communication",
    "title": "Espace parent sécurisé",
    "description": "Accès par matricule et contact, suivi complet du cursus, absences et paiements."
  },
  {
    "category": "Communication",
    "title": "Campagnes SMS &amp; email",
    "description": "Ciblées par classe, filière ou niveau  relances de paiement, notes, messages libres."
  },
  {
    "category": "Communication",
    "title": "Comptes &amp; permissions",
    "description": "Rôles et droits d'accès finement configurables pour chaque profil."
  },
  {
    "category": "Communication",
    "title": "Google Workspace intégré",
    "description": "Email professionnel automatique et accès à Drive, Docs, Sheets et Meet."
  },
  {
    "category": "Communication",
    "title": "Transport scolaire",
    "description": "Cars, trajets, abonnements étudiants, paiement de l'abonnement mensuel en ligne."
  },
  {
    "category": "Communication",
    "title": "Sécurité &amp; double authentification",
    "description": "2FA pour les comptes sensibles, isolation stricte des données par établissement."
  },
  {
    "category": "Communication",
    "title": "Dashboard 360°",
    "description": "Vue globale direction : effectifs, recouvrement, RH, académique en temps réel."
  },
  {
    "category": "Communication",
    "title": "Bibliothèque numérique",
    "description": "79 000+ ouvrages, documents établissement et partages étudiants validés."
  }
];
function filterModules(category){document.querySelectorAll('[data-filter]').forEach(b=>{const active=b.dataset.filter===category;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});const items=modules.filter(m=>m.category===category);document.getElementById('moduleGrid').innerHTML=items.map((m,i)=>`<article class="module-item" style="animation-delay:${i*25}ms"><span>0${i+1} /</span><h3>${m.title}</h3><p>${m.description}</p></article>`).join('');document.getElementById('moduleSummary').textContent=items.length+' fonctionnalités · '+category;}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>filterModules(b.dataset.filter)));document.querySelectorAll('[data-category]').forEach(a=>a.addEventListener('click',()=>filterModules(a.dataset.category)));filterModules('Pédagogie');
const fmt=n=>new Intl.NumberFormat('fr-FR').format(n)+' FCFA';const range=document.getElementById('feeRange');function updateCalc(){const amount=Number(range.value),fee=Math.round(amount*.02)+100;document.getElementById('feeAmount').textContent=fmt(amount);document.getElementById('lineBase').textContent=fmt(amount);document.getElementById('lineFee').textContent=fmt(fee);document.getElementById('lineTotal').textContent=fmt(amount+fee);}range.addEventListener('input',updateCalc);updateCalc();
const countriesToggle=document.getElementById('countriesToggle');countriesToggle.addEventListener('click',()=>{const open=countriesToggle.getAttribute('aria-expanded')!=='true';countriesToggle.setAttribute('aria-expanded',String(open));document.getElementById('countries').hidden=!open;countriesToggle.innerHTML=(open?'Masquer les pays':'Voir les pays couverts')+' <span>'+(open?'−':'+')+'</span>';});
document.querySelectorAll('[data-plan]').forEach(a=>a.addEventListener('click',()=>{document.getElementById('message').value='Je souhaite en savoir plus sur '+a.dataset.plan+'.';}));document.getElementById('year').textContent=new Date().getFullYear();

(function(){
  var form = document.getElementById('demoForm');
  if(!form) return;

  var alertBox = document.getElementById('formAlert');
  var submitBtn = document.getElementById('demoSubmitBtn');
  var loadedAtField = document.getElementById('form_loaded_at');
  var honeypot = document.getElementById('website');
  var captchaQuestionEl = document.getElementById('captchaQuestion');
  var captchaAnswerField = document.getElementById('captcha_answer');
  var WHATSAPP_NUMBER = window.__EDONE_WHATSAPP_NUMBER__ || "2250105232335";

  /* horodatage de chargement du formulaire, utilisé pour détecter
     une soumission anormalement rapide (typique des robots) */
  loadedAtField.value = Date.now().toString();
  var MIN_FILL_TIME_MS = 3000; /* 3 secondes minimum avant envoi accepté */

  /* mini-captcha maths généré côté client */
  var captchaA = 0, captchaB = 0, captchaSum = 0;
  function newCaptcha(){
    captchaA = Math.floor(Math.random() * 8) + 2;
    captchaB = Math.floor(Math.random() * 8) + 2;
    captchaSum = captchaA + captchaB;
    if(captchaQuestionEl){ captchaQuestionEl.textContent = captchaA + ' + ' + captchaB; }
    if(captchaAnswerField){ captchaAnswerField.value = ''; }
  }
  newCaptcha();

  function showAlert(message, type){
    alertBox.textContent = message;
    alertBox.className = 'falert show' + (type === 'err' ? ' err' : '');
    alertBox.scrollIntoView({behavior:reducedMotion?'auto':'smooth', block:'center'});
  }
  function clearFieldErrors(){
    document.querySelectorAll('.field-err').forEach(function(el){ el.textContent = ''; });
  }
  function setFieldError(id, message){
    var el = document.getElementById('err_' + id);
    if(el) el.textContent = message;
  }
  function isValidEmail(value){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  /* construit le message pré-rempli envoyé sur WhatsApp */
  function buildWhatsAppMessage(data){
    var lines = [
      '*Nouvelle demande de démo  EdOne*',
      '',
      '*Nom complet :* ' + data.full_name,
      '*Fonction :* ' + (data.position || ''),
      '*Établissement :* ' + data.school_name,
      '*Type :* ' + (data.school_type || ''),
      '*Nombre d\'élèves :* ' + (data.students_count || ''),
      '*E-mail :* ' + (data.email || ''),
      '*Téléphone :* ' + (data.phone || ''),
      '*Créneau préféré :* ' + (data.preferred_slot || ''),
      '',
      '*Message :*',
      data.message || ''
    ];
    return lines.join('\n');
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    clearFieldErrors();

    var data = {
      full_name: form.full_name.value.trim(),
      position: form.position.value.trim(),
      school_name: form.school_name.value.trim(),
      school_type: form.school_type.value,
      students_count: form.students_count.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      preferred_slot: form.preferred_slot.value.trim(),
      message: form.message.value.trim()
    };

    /* ---- 1) piège à robots (honeypot) : un humain ne remplit jamais ce champ ---- */
    if(honeypot && honeypot.value.trim() !== ''){
      /* on n'ouvre rien et on n'affiche aucune indication au robot */
      return;
    }

    /* ---- 2) piège temporel : une soumission trop rapide trahit un script automatisé ---- */
    var elapsed = Date.now() - parseInt(loadedAtField.value || '0', 10);
    if(elapsed < MIN_FILL_TIME_MS){
      showAlert('Merci de patienter quelques secondes avant d\'envoyer le formulaire.', 'err');
      return;
    }

    /* ---- 3) validation des champs obligatoires ---- */
    var hasError = false;
    if(!data.full_name){ setFieldError('full_name', 'Ce champ est requis.'); hasError = true; }
    if(!data.school_name){ setFieldError('school_name', 'Ce champ est requis.'); hasError = true; }
    if(!data.email || !isValidEmail(data.email)){ setFieldError('email', 'Merci d\'indiquer un e-mail valide.'); hasError = true; }

    /* ---- 4) captcha mathématique ---- */
    var answer = parseInt((captchaAnswerField.value || '').trim(), 10);
    if(isNaN(answer) || answer !== captchaSum){
      setFieldError('captcha', 'Réponse incorrecte, réessayez.');
      newCaptcha();
      hasError = true;
    }

    if(hasError){
      showAlert('Merci de corriger les champs indiqués ci-dessous.', 'err');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Redirection vers WhatsApp…';

    var message = buildWhatsAppMessage(data);
    var waUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);

    showAlert('Merci ' + data.full_name + ' ! Vous allez être redirigé vers WhatsApp pour envoyer votre demande, déjà pré-remplie.', 'ok');

    window.open(waUrl, '_blank', 'noopener');

    form.reset();
    newCaptcha();
    loadedAtField.value = Date.now().toString();
    submitBtn.disabled = false;
    submitBtn.textContent = 'Envoyer ma demande';
  });
})();
