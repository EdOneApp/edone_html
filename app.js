'use strict';
const menu=document.getElementById('menuToggle'),nav=document.getElementById('navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Ouvrir le menu');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();}});
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reducedMotion&&'IntersectionObserver' in window){document.documentElement.classList.add('js-motion');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
const roles={
  "direction": {
    "label": "VOTRE ÉTABLISSEMENT, EN VUE D’ENSEMBLE",
    "title": "Piloter avec une longueur d’avance.",
    "description": "Académique, finances et équipes : une vue d’ensemble, des accès maîtrisés et des décisions éclairées.",
    "list": [
      "Multi-établissements & campus (gestion de plusieurs écoles sur une même plateforme)",
      "Permissions granulaires (rôles, accès par module, par établissement)",
      "Dashboard 360° (vue d’ensemble des indicateurs)",
      "Campagnes SMS & email",
      "Diplômes, PV (procès-verbaux), attestations de scolarité, certificats de réussite",
      "Wallet établissement (solde temps réel, demandes de reversement, historique)",
      "Réconciliation automatique des transactions",
      "Gestion des abonnements et facturation SaaS automatisée",
      "Programme partenaire / intégrateur (licence marque blanche, prime 100 000 FCFA / école, 10% à vie, dashboard partenaire)",
      "Configuration des coefficients, maquettes pédagogiques, filières, niveaux, salles",
      "Import / export de données (Excel, PDF)",
      "Traçabilité complète (chaque modification de note et chaque paiement horodaté et attribué)",
      "Sauvegardes automatisées + procédure de restauration testée",
      "Isolation multi-établissement (données cloisonnées)",
      "Dossiers RH, congés, paie et espace employé selon les habilitations",
      "GED, classement documentaire et archivage des bulletins",
      "Statistiques de stockage et journal des opérations sensibles avec exports",
      "Création des comptes, profils personnalisés et exceptions individuelles",
      "Consultation Multisite des écoles explicitement attribuées au responsable",
      "Effectifs et frais par campus, à partir des classes affectées",
      "Suivi des changements de forfait et des documents de facturation",
      "Support live privé avec l’équipe EdOne depuis votre espace, historique et suivi des réponses",
      "Didacticiels interactifs et aide adaptés au profil sur ordinateur, tablette et téléphone",
      "Campagnes email, SMS EdoneSMS et notifications dans l’application avec ciblage et personnalisation",
      "Portefeuille EdoneSMS, demandes de recharge à 10 FCFA/SMS et demande de Sender ID",
      "Bases de contacts Excel avec pays, modèle téléchargeable et aperçu des imports"
    ],
    "dash": "Votre école avance.",
    "metrics": [
      "Étudiants inscrits",
      "1 248",
      "Année académique en cours",
      "Recouvrement",
      "87 %",
      "Une vision en temps réel"
    ],
    "chart": "Les inscriptions, mois après mois",
    "photo": "images/administration-edone.jpg",
    "photoAlt": "Illustration : Une équipe administrative scolaire autour d’un ordinateur",
    "photoCaption": "Les équipes qui font avancer l’école."
  },
  "fondateurs": {
    "name": "Fondateurs & groupes scolaires",
    "label": "TOUTES VOS ÉCOLES, UNE VUE COMMUNE",
    "title": "Garder le cap, d’un campus à l’autre.",
    "description": "Consultez vos établissements autorisés, comparez leurs indicateurs et ouvrez le détail de chacun, tout en gardant votre rôle dans votre école principale.",
    "list": [
      "Portefeuille des écoles attribuées par la plateforme",
      "Année active, période commune ou consultation de toutes les années",
      "Comparaison des effectifs, des frais et du recouvrement",
      "Dossier détaillé de chaque école : académique, finances, équipes et documents",
      "Effectifs et frais par campus selon les classes affectées",
      "Registres avec recherche et références métier lisibles",
      "Synthèses CSV et rapports imprimables",
      "Consultation des registres de paie sur habilitation distincte",
      "Administration de l’école principale conservée pour le fondateur qui en est aussi responsable",
      "Support live privé avec l’équipe EdOne depuis votre espace, historique et suivi des réponses",
      "Didacticiels interactifs et aide adaptés au profil sur ordinateur, tablette et téléphone"
    ],
    "dash": "Votre groupe, en vue d’ensemble.",
    "metrics": [
      "Établissements suivis",
      "4",
      "Portefeuille autorisé",
      "Recouvrement",
      "87 %",
      "Période sélectionnée"
    ],
    "chart": "Les inscriptions du groupe, mois après mois",
    "photo": "images/administration-edone.jpg",
    "photoAlt": "Illustration d’une équipe de direction réunie pour piloter un groupe scolaire",
    "photoCaption": "Plusieurs écoles, des décisions mieux éclairées."
  },
  "enseignants": {
    "label": "PLUS DE TEMPS POUR TRANSMETTRE",
    "title": "Préparer, partager. Et voir progresser.",
    "description": "Du planning à la correction, retrouvez vos cours, vos étudiants et vos démarches administratives dans un même espace.",
    "list": [
      "Contrats & volume horaire (suivi administratif du corps enseignant)",
      "Import de notes par Excel (import massif, correction rapide)",
      "Quiz sécurisés anti-triche (QCM, choix multiples, réponses libres, tentatives limitées, détection de changement d’onglet/navigateur)",
      "Devoirs individuels (dépôt de fichier, consigne jointe, correction et appréciation)",
      "Devoirs de groupe (constitution des groupes, chef de groupe, soumission collective, notation collective)",
      "Évaluations et notation (coefficients configurables, gestion des réclamations)",
      "Dépôt de supports de cours",
      "RIB (relevé d’identité bancaire) et demandes d’acompte",
      "Fiches de présence numériques",
      "Espace enseignant dédié (maquette, planning)",
      "Configuration des coefficients par matière / niveau",
      "Documents personnels et supports de cours accessibles selon les droits",
      "Devoirs de groupe, soumissions et correction des travaux",
      "Support live privé avec l’équipe EdOne depuis votre espace, historique et suivi des réponses",
      "Didacticiels interactifs et aide adaptés au profil sur ordinateur, tablette et téléphone",
      "Notifications dans l’application, campagnes ciblées et accès aux réponses du support"
    ],
    "dash": "Une journée pour transmettre.",
    "metrics": [
      "Cours cette semaine",
      "12",
      "Votre emploi du temps",
      "Devoirs à corriger",
      "24",
      "Individuels et collectifs"
    ],
    "chart": "Les évaluations au fil du semestre",
    "photo": "images/enseignante-edone.jpg",
    "photoAlt": "Illustration : Une enseignante préparant son cours dans une salle lumineuse",
    "photoCaption": "Du temps pour transmettre."
  },
  "etudiants": {
    "label": "VOTRE PARCOURS PREND FORME",
    "title": "Apprendre avec tous les repères.",
    "description": "Un cours à retrouver, une note à consulter, un devoir à rendre : votre vie étudiante vous suit partout.",
    "list": [
      "Maquette pédagogique complète (années académiques, classes, cours, enseignants, salles)",
      "Quiz & devoirs (accès, réponses, notes immédiates)",
      "Notes & bulletins (consultation, téléchargement PDF, rangs, moyennes pondérées)",
      "Paiement Mobile Money / carte (Orange Money, MTN, Moov, Wave, Djamo, Visa, Mastercard)",
      "CV automatique généré depuis le parcours, personnalisable et partageable via lien public",
      "Carte étudiant numérique et imprimable (photo, statut de remise suivi par la direction)",
      "Bibliothèque de 79 000+ ouvrages (consultation, favoris, lecture directe)",
      "Email professionnel Google Workspace (accès à Drive, Docs, Sheets, Meet)",
      "Vérification publique des documents (bulletin, diplôme, attestation par code unique)",
      "Accès aux reçus de paiement et historique de solde",
      "Suivi des frais divers (cartes, kits, accessoires, transport)",
      "Alertes d’absences et notifications automatiques",
      "Documents scolaires et archives accessibles depuis son espace",
      "Supports et sujets de devoirs réservés à ses classes",
      "Support live privé avec l’équipe EdOne depuis votre espace, historique et suivi des réponses",
      "Didacticiels interactifs et aide adaptés au profil sur ordinateur, tablette et téléphone",
      "Tableau de bord avec cartes d’accès aux services autorisés",
      "Téléchargements PDF directs : notes en paysage, carte, reçus, certificats et CV",
      "CV complet, saisie progressive, partage public et téléchargement PDF",
      "Notifications dans l’application et suivi des messages non lus"
    ],
    "dash": "À vous le prochain chapitre.",
    "metrics": [
      "Moyenne du semestre",
      "14,5",
      "Sur 20 · Exemple",
      "Devoirs rendus",
      "8 / 9",
      "Votre progression"
    ],
    "chart": "Votre parcours, mois après mois",
    "photo": "images/campus-edone.jpg",
    "photoAlt": "Illustration : Des étudiants travaillant ensemble sur un campus",
    "photoCaption": "Le prochain chapitre s’écrit ensemble."
  },
  "parents": {
    "label": "LE LIEN AVEC L’ÉCOLE, TOUT SIMPLEMENT",
    "title": "Être présent, même à distance.",
    "description": "Accédez au suivi de votre enfant par son matricule, consultez ses échéances et réglez les frais depuis votre téléphone.",
    "list": [
      "Accès simple par matricule (login facile, pas de mot de passe complexe obligatoire)",
      "Suivi du cursus, notes, bulletins (toutes périodes)",
      "Alertes d’absences (notification immédiate)",
      "Statut et paiement de la scolarité (suivi des échéances, montants restants)",
      "Paiement des frais divers en ligne (transport, carte, kits, accessoires)",
      "Notifications SMS/Email automatiques (reçus, alertes, annonces)",
      "Accès au wallet / historique des paiements effectués",
      "Consultation de la carte étudiant et des documents officiels (lorsque autorisé)",
      "Vérification par code SMS si activée par l’établissement, avec accès au dossier familial vérifié",
      "Support live privé avec l’équipe EdOne depuis votre espace, historique et suivi des réponses",
      "Didacticiels interactifs et aide adaptés au profil sur ordinateur, tablette et téléphone",
      "Notifications dans le portail parent et support privé distinct de la conversation de l’étudiant"
    ],
    "dash": "Gardez le lien avec son école.",
    "metrics": [
      "Scolarité réglée",
      "75 %",
      "Suivi des échéances",
      "Prochaine échéance",
      "50 000 F",
      "Montant illustratif"
    ],
    "chart": "Les règlements au fil de l’année",
    "photo": "images/famille-edone.jpg",
    "photoAlt": "Illustration : Un père et sa fille consultant un téléphone à la maison",
    "photoCaption": "Le lien, même à distance."
  },
  "personnel": {
    "label": "LES ÉQUIPES QUI FONT TOURNER L’ÉCOLE",
    "title": "Chaque tâche trouve sa place.",
    "description": "Inscriptions, ressources humaines, fournitures et transport : une organisation commune pour tous les métiers du campus.",
    "list": [
      "Fiches du personnel administratif et technique",
      "Services, contrats, suivi RH",
      "Gestion du stock et moyens généraux (produits, catégories, fournisseurs, commandes, remise de kits et accessoires)",
      "Transport (suivi des lignes, paquets, frais de transport)",
      "Gestion des inscriptions et réinscriptions (dossiers électroniques, statistiques en direct)",
      "Établissement et gestion du campus (salles, filières, niveaux)",
      "Mise à jour des données de l’élève et du personnel",
      "Authentification sécurisée (2FA pour super administrateurs)",
      "Conformité RGPD (traitement et conservation conformes)",
      "Dossier employé, carrière, évaluations et formations",
      "Demandes de congés et calendrier des absences",
      "Demandes RH, dépôt de pièces privées et suivi du traitement",
      "Préparation de la paie et bulletins PDF pour les gestionnaires habilités",
      "Espace salarié : dossier, demandes et bulletins personnels",
      "GED, stock, transport ou service médical selon le métier et les droits accordés",
      "Support live privé avec l’équipe EdOne depuis votre espace, historique et suivi des réponses",
      "Didacticiels interactifs et aide adaptés au profil sur ordinateur, tablette et téléphone",
      "Campagnes email, SMS EdoneSMS et notifications dans l’application avec ciblage et personnalisation",
      "Portefeuille EdoneSMS, demandes de recharge à 10 FCFA/SMS et demande de Sender ID",
      "Bases de contacts Excel avec pays, modèle téléchargeable et aperçu des imports"
    ],
    "dash": "Le campus, bien organisé.",
    "metrics": [
      "Dossiers complets",
      "184",
      "Inscriptions · Exemple",
      "Kits à remettre",
      "32",
      "Logistique · Exemple"
    ],
    "chart": "L’activité administrative au fil des mois",
    "photo": "images/administration-edone.jpg",
    "photoAlt": "Illustration : Une équipe administrative organisant la vie scolaire",
    "photoCaption": "Chaque métier compte."
  },
  "partenaires": {
    "label": "LE PROGRÈS SE PARTAGE",
    "title": "Accompagner les écoles. Grandir ensemble.",
    "description": "Distribuez EdOne en marque blanche et accompagnez vos établissements clients, de l’installation à la formation.",
    "list": [
      "Licence marque blanche aux couleurs de votre structure",
      "Prime d’installation de 100 000 FCFA par établissement signé",
      "Commission de 10 % à vie sur chaque abonnement mensuel payé",
      "Dashboard partenaire dédié au suivi des établissements et des commissions",
      "Support technique, formation et accompagnement au déploiement"
    ],
    "dash": "Votre réseau prend son élan.",
    "metrics": [
      "Établissements",
      "8",
      "Votre réseau · Exemple",
      "Commission",
      "10 %",
      "Sur les abonnements payés"
    ],
    "chart": "Le développement de votre réseau",
    "photo": "images/campus-vie-edone.jpg",
    "photoAlt": "Illustration : Des étudiants traversant un campus arboré",
    "photoCaption": "Accompagner les écoles qui avancent."
  },
  "scolarite": {
    "name": "Scolarité",
    "description": "Gérer le parcours administratif et scolaire des étudiants.",
    "list": [
      "Dossiers étudiants, pièces et inscriptions",
      "Années, filières, niveaux et classes",
      "Notes, résultats, bulletins et documents scolaires",
      "Recherche et archivage des documents académiques",
      "Support live privé avec l’équipe EdOne depuis votre espace, historique et suivi des réponses",
      "Didacticiels interactifs et aide adaptés au profil sur ordinateur, tablette et téléphone"
    ]
  },
  "pedagogie": {
    "name": "Responsable pédagogique",
    "description": "Organiser les enseignements et suivre les résultats.",
    "list": [
      "Enseignants et affectations pédagogiques",
      "Matières, UE, maquettes, coefficients et crédits",
      "Progressions, emplois du temps et évaluations",
      "Compensation des UE, bulletins et procès-verbaux",
      "Support live privé avec l’équipe EdOne depuis votre espace, historique et suivi des réponses",
      "Didacticiels interactifs et aide adaptés au profil sur ordinateur, tablette et téléphone"
    ]
  },
  "comptabilite": {
    "name": "Comptabilité",
    "description": "Suivre les frais, encaissements et opérations financières.",
    "list": [
      "Frais de scolarité et frais divers",
      "Contrôle des paiements et suivi des soldes",
      "Paiements EdonePay et historique des transactions",
      "Portefeuille, reçus et exports financiers",
      "Suivi des factures, références de règlement et échanges avec la plateforme pour les avoirs et relances",
      "Support live privé avec l’équipe EdOne depuis votre espace, historique et suivi des réponses",
      "Didacticiels interactifs et aide adaptés au profil sur ordinateur, tablette et téléphone",
      "Suivi des demandes de recharge EdoneSMS et des références de règlement selon les habilitations"
    ]
  },
  "rh": {
    "name": "Ressources humaines",
    "description": "Accompagner le personnel tout au long de son parcours.",
    "list": [
      "Dossiers employés et pièces privées",
      "Postes, candidatures et parcours professionnels",
      "Évaluations et formations",
      "Congés, calendrier et traitement des demandes",
      "Support live privé avec l’équipe EdOne depuis votre espace, historique et suivi des réponses",
      "Didacticiels interactifs et aide adaptés au profil sur ordinateur, tablette et téléphone"
    ]
  },
  "paie": {
    "name": "Gestionnaire de paie",
    "description": "Préparer les rémunérations avec des accès dédiés.",
    "list": [
      "Contrats et paramètres de rémunération",
      "Rubriques et préparation de la paie",
      "Bulletins de paie PDF",
      "Historique des paies autorisées",
      "Support live privé avec l’équipe EdOne depuis votre espace, historique et suivi des réponses",
      "Didacticiels interactifs et aide adaptés au profil sur ordinateur, tablette et téléphone"
    ]
  },
  "employe": {
    "name": "Employé",
    "description": "Retrouver ses informations et démarches personnelles.",
    "list": [
      "Dossier et documents personnels autorisés",
      "Dépôt de pièces justificatives",
      "Demandes RH et suivi du traitement",
      "Consultation de ses bulletins de paie disponibles",
      "Support live privé avec l’équipe EdOne depuis votre espace, historique et suivi des réponses",
      "Didacticiels interactifs et aide adaptés au profil sur ordinateur, tablette et téléphone"
    ]
  },
  "ged": {
    "name": "Gestionnaire documentaire",
    "description": "Organiser les documents et les archives de l’établissement.",
    "list": [
      "Recherche, classement et métadonnées",
      "Aperçu, téléchargement et versions",
      "Archivage des bulletins par sélection ou filtres",
      "Programmation et suivi des campagnes ; accès sensibles soumis à habilitation",
      "Support live privé avec l’équipe EdOne depuis votre espace, historique et suivi des réponses",
      "Didacticiels interactifs et aide adaptés au profil sur ordinateur, tablette et téléphone"
    ]
  },
  "bibliotheque": {
    "name": "Bibliothécaire",
    "description": "Organiser les ressources de lecture.",
    "list": [
      "Catalogue et fichiers des ouvrages",
      "Ajout et modification des livres",
      "Traitement des ouvrages soumis à validation",
      "Support live privé avec l’équipe EdOne depuis votre espace, historique et suivi des réponses",
      "Didacticiels interactifs et aide adaptés au profil sur ordinateur, tablette et téléphone"
    ]
  },
  "stock": {
    "name": "Gestionnaire de stock",
    "description": "Suivre les fournitures et approvisionnements.",
    "list": [
      "Catégories, produits et fournisseurs",
      "Commandes et réceptions",
      "Historique, impressions et exports",
      "Support live privé avec l’équipe EdOne depuis votre espace, historique et suivi des réponses",
      "Didacticiels interactifs et aide adaptés au profil sur ordinateur, tablette et téléphone"
    ]
  },
  "transport": {
    "name": "Gestionnaire de transport",
    "description": "Organiser les déplacements et les abonnements.",
    "list": [
      "Véhicules et trajets",
      "Abonnements et consultation de leurs détails",
      "Exports des informations de transport",
      "Support live privé avec l’équipe EdOne depuis votre espace, historique et suivi des réponses",
      "Didacticiels interactifs et aide adaptés au profil sur ordinateur, tablette et téléphone"
    ]
  },
  "medecin": {
    "name": "Médecin / service médical",
    "description": "Assurer le suivi médical avec des droits réservés.",
    "list": [
      "Dossiers médicaux autorisés",
      "Consultations et historique",
      "Documents PDF disponibles",
      "Support live privé avec l’équipe EdOne depuis votre espace, historique et suivi des réponses",
      "Didacticiels interactifs et aide adaptés au profil sur ordinateur, tablette et téléphone"
    ]
  },
  "plateforme": {
    "name": "Administration de la plateforme",
    "description": "Piloter l’ensemble du service, créer les écoles et leurs responsables, configurer les intégrations et suivre les indicateurs, les incidents et les mises en service.",
    "list": [
      "Création des établissements, de leur identité, année académique et premier responsable",
      "Configuration Workspace, domaine professionnel et parcours marchand EdonePay",
      "Suivi des installations, abonnements, factures, avoirs et relances",
      "KPI globaux et annuels, répertoire détaillé, graphiques et carte des établissements",
      "Recherche des comptes fondateurs et attribution des écoles du portefeuille Multisite",
      "Autorisations de paie distinctes par compte et établissement",
      "Incidents, anomalies, résolution et journal des opérations sensibles",
      "Suivi des formations et preuves de préparation du service",
      "Double authentification et accès de plateforme séparés des rôles d’école",
      "Sélection des ouvrages publics proposés",
      "Support live privé avec l’équipe EdOne depuis votre espace, historique et suivi des réponses",
      "Didacticiels interactifs et aide adaptés au profil sur ordinateur, tablette et téléphone",
      "Boîte de réception du support en direct : réponses, attribution, recherche et résolution",
      "Validation des recharges SMS et Sender ID, suivi des crédits et des livraisons par école",
      "Configuration sécurisée des magasins EdonePay et des confirmations de paiement propres aux écoles"
    ]
  }
};
const tabs=[...document.querySelectorAll('[data-role]')];
function selectRole(tab){tabs.forEach(t=>{t.setAttribute('aria-selected',String(t===tab));t.tabIndex=t===tab?0:-1;});const r=roles[tab.dataset.role];document.getElementById('rolePhoto').src=r.photo;document.getElementById('rolePhoto').alt=r.photoAlt;document.getElementById('rolePhotoCaption').textContent=r.photoCaption;document.getElementById('role-panel').setAttribute('aria-labelledby',tab.id);document.getElementById('role-label').textContent=r.label;document.getElementById('role-title').textContent=r.title;document.getElementById('role-desc').textContent=r.description;document.getElementById('role-details').open=false;document.getElementById('role-list').replaceChildren(...r.list.slice(0,4).map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));document.getElementById('role-all-features').replaceChildren(...r.list.slice(4).map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));document.getElementById('role-details').hidden=r.list.length<=4;document.getElementById('role-details-summary').textContent='Voir les '+r.list.length+' fonctionnalités du profil';document.getElementById('dash-title').textContent=r.dash;['metric1label','metric1','metric1note','metric2label','metric2','metric2note'].forEach((id,i)=>document.getElementById(id).textContent=r.metrics[i]);document.getElementById('chart-title').textContent=r.chart;document.querySelectorAll('.bars i').forEach((bar,i)=>{bar.style.height=(25+((i*13+tab.dataset.role.length*7)%65))+'%';});}
tabs.forEach((t,i)=>{t.addEventListener('click',()=>selectRole(t));t.addEventListener('keydown',e=>{let target;if(e.key==='ArrowRight'||e.key==='ArrowDown')target=tabs[(i+1)%tabs.length];if(e.key==='ArrowLeft'||e.key==='ArrowUp')target=tabs[(i+tabs.length-1)%tabs.length];if(e.key==='Home')target=tabs[0];if(e.key==='End')target=tabs.at(-1);if(target){e.preventDefault();selectRole(target);target.focus();}});});
// The feature content is embedded to keep this static page usable via file:// too.
const modules=[
  {
    "id": 1,
    "category": "Pédagogie",
    "title": "Gestion académique",
    "description": "Années académiques, campus, salles, filières, niveaux, classes et maquettes. Affectation des classes nouvelles ou existantes à leur campus."
  },
  {
    "id": 2,
    "category": "Pédagogie",
    "title": "Inscription & réinscription",
    "description": "Dossier électronique, carte étudiant, kits, statistiques."
  },
  {
    "id": 3,
    "category": "Pédagogie",
    "title": "Emploi du temps",
    "description": "Planification par classe, émargements numériques, export PDF/Excel."
  },
  {
    "id": 4,
    "category": "Pédagogie",
    "title": "Espace enseignant",
    "description": "Contrats, volume horaire, supports, RIB, acomptes."
  },
  {
    "id": 5,
    "category": "Pédagogie",
    "title": "Quiz sécurisés anti-triche",
    "description": "QCM, réponses libres, tentatives limitées, détection d’onglet."
  },
  {
    "id": 6,
    "category": "Pédagogie",
    "title": "Devoirs individuels",
    "description": "Fichier, consigne, correction, appréciation."
  },
  {
    "id": 7,
    "category": "Pédagogie",
    "title": "Devoirs de groupe",
    "description": "Groupes, chef, soumission, notation collective."
  },
  {
    "id": 8,
    "category": "Pédagogie",
    "title": "Évaluations & notation",
    "description": "Import Excel, coefficients, réclamations."
  },
  {
    "id": 9,
    "category": "Pédagogie",
    "title": "Bulletins",
    "description": "Génération automatique par semestre, moyennes pondérées, rangs, appréciations."
  },
  {
    "id": 10,
    "category": "Pédagogie",
    "title": "Procès-verbaux",
    "description": "PV semestriels et annuels, calcul des crédits et décisions de passage automatisées."
  },
  {
    "id": 11,
    "category": "Pédagogie",
    "title": "Diplômes & certificats",
    "description": "Sessions, génération en masse, code de vérification publique."
  },
  {
    "id": 12,
    "category": "Pédagogie",
    "title": "Attestations de scolarité",
    "description": "Certificats vérifiables via lien public."
  },
  {
    "id": 13,
    "category": "Pédagogie",
    "title": "Reçus de paiement",
    "description": "Un reçu est généré automatiquement à chaque règlement, puis envoyé par SMS et e-mail."
  },
  {
    "id": 14,
    "category": "Pédagogie",
    "title": "Carte étudiant",
    "description": "Numérique + imprimable, photo, statut de remise."
  },
  {
    "id": 15,
    "category": "Pédagogie",
    "title": "CV étudiant et partage public",
    "description": "Créez un CV structuré avec parcours, expériences, réalisations, compétences et centres d’intérêt; partagez son lien public et téléchargez-le en PDF."
  },
  {
    "id": 16,
    "category": "Pédagogie",
    "title": "Vérification en ligne",
    "description": "Documents officiels par code unique."
  },
  {
    "id": 17,
    "category": "Documents",
    "title": "Bulletins PDF",
    "description": "Génération de bulletins téléchargeables au format PDF."
  },
  {
    "id": 18,
    "category": "Documents",
    "title": "Procès-verbaux PDF",
    "description": "Génération de PV semestriels et annuels au format PDF."
  },
  {
    "id": 19,
    "category": "Documents",
    "title": "Diplômes et certificats en masse",
    "description": "Production des diplômes et certificats par session de délivrance."
  },
  {
    "id": 20,
    "category": "Documents",
    "title": "Attestations officielles",
    "description": "Attestations de réussite, d’admission et de scolarité, vérifiables par lien public."
  },
  {
    "id": 21,
    "category": "Documents",
    "title": "Reçus automatiques",
    "description": "Transmission du reçu de chaque paiement par SMS et e-mail."
  },
  {
    "id": 22,
    "category": "Documents",
    "title": "Exports Excel et PDF",
    "description": "Export des données pédagogiques pour les équipes de l’établissement."
  },
  {
    "id": 23,
    "category": "Finance",
    "title": "Comptabilité & scolarité",
    "description": "Frais, plans de paiement, historique, solde."
  },
  {
    "id": 24,
    "category": "Finance",
    "title": "Wallet établissement",
    "description": "Solde temps réel, reversement, historique."
  },
  {
    "id": 25,
    "category": "Finance",
    "title": "Abonnement & facturation SaaS automatisée",
    "description": "Factures mensuelles, état des règlements et références de paiement, documents actualisés et suivi de l’abonnement de chaque établissement."
  },
  {
    "id": 26,
    "category": "Finance",
    "title": "Réconciliation automatique des transactions",
    "description": "Détection d’écarts."
  },
  {
    "id": 27,
    "category": "Finance",
    "title": "Sept moyens de paiement",
    "description": "Wave, Orange Money, Moov Money, MTN MoMo, Djamo, Visa et Mastercard. Disponibilité selon le pays."
  },
  {
    "id": 28,
    "category": "Finance",
    "title": "Frais de transaction de 3 %",
    "description": "3 % du montant par transaction, sans frais fixes additionnels, sur tous les plans et moyens de paiement."
  },
  {
    "id": 29,
    "category": "Finance",
    "title": "Minimum par transaction",
    "description": "Montant minimum : 2 000 FCFA par transaction."
  },
  {
    "id": 30,
    "category": "Finance",
    "title": "Tous les frais scolaires en ligne",
    "description": "Règlement de la scolarité, du transport, de la carte, des kits et des accessoires."
  },
  {
    "id": 31,
    "category": "Finance",
    "title": "Demandes de reversement",
    "description": "L’établissement suit son wallet et demande le reversement de ses fonds."
  },
  {
    "id": 32,
    "category": "Finance",
    "title": "Notification après règlement",
    "description": "Envoi automatique d’un reçu par SMS et e-mail après chaque paiement."
  },
  {
    "id": 33,
    "category": "Finance",
    "title": "Imputation en temps réel",
    "description": "Le règlement est affecté directement au dossier de l’étudiant."
  },
  {
    "id": 34,
    "category": "Ressources",
    "title": "Stock et moyens généraux",
    "description": "Produits, catégories, fournisseurs."
  },
  {
    "id": 35,
    "category": "Ressources",
    "title": "Commandes et fournitures",
    "description": "Suivi des commandes et des fournitures de l’établissement."
  },
  {
    "id": 36,
    "category": "Ressources",
    "title": "Remise des kits et accessoires",
    "description": "Suivi de la distribution des kits et accessoires aux étudiants."
  },
  {
    "id": 37,
    "category": "Ressources",
    "title": "Gestion du transport",
    "description": "Lignes, frais, suivi."
  },
  {
    "id": 38,
    "category": "RH",
    "title": "Fiches du personnel administratif / enseignant",
    "description": "Fiches du personnel administratif / enseignant."
  },
  {
    "id": 39,
    "category": "RH",
    "title": "Services, contrats, suivi RH",
    "description": "Services, contrats, suivi RH."
  },
  {
    "id": 40,
    "category": "RH",
    "title": "Volume horaire et acomptes",
    "description": "Suivi des heures et demandes d’acompte du personnel et des enseignants."
  },
  {
    "id": 41,
    "category": "Communication",
    "title": "Campagnes multicanales",
    "description": "Préparez une campagne dans un formulaire unique, choisissez email, SMS EdoneSMS et notification dans l’application, prévisualisez puis lancez l’envoi."
  },
  {
    "id": 42,
    "category": "Communication",
    "title": "Notifications et suivi de lecture",
    "description": "Annonces et modèles de notification pour les différents profils, avec boîte de réception, cloche, messages non lus et suivi de lecture."
  },
  {
    "id": 43,
    "category": "Communication",
    "title": "Alertes d’absence",
    "description": "Les parents et étudiants reçoivent les notifications d’absence."
  },
  {
    "id": 44,
    "category": "Communication",
    "title": "Envoi des documents",
    "description": "Communication des bulletins et diplômes par e-mail et notifications par SMS."
  },
  {
    "id": 45,
    "category": "Communication",
    "title": "Contact et support WhatsApp",
    "description": "Un canal de contact pour échanger avec l’équipe EdOne."
  },
  {
    "id": 46,
    "category": "Sécurité",
    "title": "Isolation multi-établissement",
    "description": "Données isolées et accès cloisonnés par établissement."
  },
  {
    "id": 47,
    "category": "Sécurité",
    "title": "Connexions HTTPS",
    "description": "Chiffrement des échanges entre votre navigateur et la plateforme via HTTPS."
  },
  {
    "id": 48,
    "category": "Sécurité",
    "title": "Mots de passe hashés",
    "description": "Les mots de passe sont conservés sous forme de hash pour protéger les accès."
  },
  {
    "id": 49,
    "category": "Sécurité",
    "title": "Double authentification",
    "description": "Double authentification obligatoire pour le pilotage de la plateforme et accès aux opérations sensibles selon les habilitations."
  },
  {
    "id": 50,
    "category": "Sécurité",
    "title": "Sauvegardes et restauration",
    "description": "Sauvegardes chiffrées de la base et des fichiers privés, stockage hors site et exercices de restauration selon la configuration du service."
  },
  {
    "id": 51,
    "category": "Sécurité",
    "title": "Conformité RGPD",
    "description": "Traitement et conservation des données dans le cadre des exigences RGPD."
  },
  {
    "id": 52,
    "category": "Sécurité",
    "title": "Traçabilité complète",
    "description": "Actions horodatées et attribuées, notamment les paiements et modifications de notes."
  },
  {
    "id": 53,
    "category": "Sécurité",
    "title": "Environnement cloisonné",
    "description": "Chaque établissement dispose de son propre périmètre de données et d’accès."
  },
  {
    "id": 54,
    "category": "Bibliothèque",
    "title": "Catalogue de livres numériques",
    "description": "79 000+ ouvrages du domaine public."
  },
  {
    "id": 55,
    "category": "Bibliothèque",
    "title": "Lecture directe et sécurisée",
    "description": "Sans téléchargement libre."
  },
  {
    "id": 56,
    "category": "Bibliothèque",
    "title": "Ouvrages propres à l’établissement",
    "description": "Ajoutés par direction / enseignants."
  },
  {
    "id": 57,
    "category": "Bibliothèque",
    "title": "Partages étudiants",
    "description": "Documents validés avant publication."
  },
  {
    "id": 58,
    "category": "Bibliothèque",
    "title": "Favoris personnels",
    "description": "Chaque étudiant retrouve ses livres favoris, issus du fonds de l’école ou du catalogue public."
  },
  {
    "id": 59,
    "category": "Bibliothèque",
    "title": "Ouvrages mis en avant",
    "description": "Les super administrateurs peuvent épingler des titres du catalogue public."
  },
  {
    "id": 60,
    "category": "Bibliothèque",
    "title": "Bibliothèque et parcours",
    "description": "Accès intégré à l’espace étudiant, avec une place dans son CV et son parcours."
  },
  {
    "id": 61,
    "category": "Pédagogie",
    "title": "Évaluations à nombre variable",
    "description": "Nombre libre d’évaluations par matière, barèmes, coefficients, sessions, imports Excel contrôlés et historique des corrections."
  },
  {
    "id": 62,
    "category": "Pédagogie",
    "title": "Crédits et compensation des UE",
    "description": "Configurez les crédits, coefficients et règles de compensation pour les parcours universitaires et professionnels."
  },
  {
    "id": 63,
    "category": "Pédagogie",
    "title": "Progressions pédagogiques",
    "description": "Suivez l’avancement des enseignements et les progressions des équipes pédagogiques."
  },
  {
    "id": 64,
    "category": "Pédagogie",
    "title": "Personnalisation des documents scolaires",
    "description": "Retrouvez le logo, les couleurs et les informations de votre établissement sur les documents prévus."
  },
  {
    "id": 65,
    "category": "RH",
    "title": "Dossier employé complet",
    "description": "Centralisez les informations administratives, professionnelles et les pièces justificatives du personnel."
  },
  {
    "id": 66,
    "category": "RH",
    "title": "Fiches de poste et recrutement",
    "description": "Organisez les postes et les candidatures dans le suivi RH."
  },
  {
    "id": 67,
    "category": "RH",
    "title": "Parcours et carrière",
    "description": "Conservez les étapes du parcours professionnel de chaque employé."
  },
  {
    "id": 68,
    "category": "RH",
    "title": "Évaluations du personnel",
    "description": "Enregistrez les évaluations et suivez les appréciations professionnelles."
  },
  {
    "id": 69,
    "category": "RH",
    "title": "Formations du personnel",
    "description": "Suivez les formations et les justificatifs associés aux employés."
  },
  {
    "id": 70,
    "category": "RH",
    "title": "Congés et calendrier",
    "description": "Centralisez les demandes de congé, leur traitement, les soldes et le calendrier des absences."
  },
  {
    "id": 71,
    "category": "RH",
    "title": "Demandes et documents RH",
    "description": "Traitez les demandes des employés, suivez leur avancement et produisez les documents disponibles."
  },
  {
    "id": 72,
    "category": "RH",
    "title": "Espace personnel employé",
    "description": "Chaque employé consulte son dossier autorisé, dépose ses pièces et suit ses demandes."
  },
  {
    "id": 73,
    "category": "RH",
    "title": "Pièces RH privées",
    "description": "Conservez les documents du personnel dans un espace privé avec des accès adaptés à leur sensibilité."
  },
  {
    "id": 74,
    "category": "Paie",
    "title": "Contrats et rémunérations",
    "description": "Gérez les contrats et les informations de rémunération selon les habilitations du gestionnaire."
  },
  {
    "id": 75,
    "category": "Paie",
    "title": "Rubriques de paie configurables",
    "description": "Paramétrez les éléments de rémunération et les retenues utilisés dans les calculs."
  },
  {
    "id": 76,
    "category": "Paie",
    "title": "Préparation de la paie",
    "description": "Préparez les paies et appliquez les paramètres de calcul configurés pour l’établissement."
  },
  {
    "id": 77,
    "category": "Paie",
    "title": "Bulletins de paie PDF",
    "description": "Générez et consultez les bulletins de paie téléchargeables."
  },
  {
    "id": 78,
    "category": "Paie",
    "title": "Historique et accès salarié",
    "description": "Retrouvez les paies précédentes ; chaque salarié accède uniquement aux bulletins mis à sa disposition."
  },
  {
    "id": 79,
    "category": "GED & archives",
    "title": "Documents centralisés",
    "description": "Retrouvez les pièces des étudiants, supports de cours, documents enseignants, ouvrages et pièces RH selon vos droits."
  },
  {
    "id": 80,
    "category": "GED & archives",
    "title": "Recherche documentaire multicritère",
    "description": "Recherchez par texte, catégorie, mots-clés, année, filière, niveau, classe ou personne concernée."
  },
  {
    "id": 81,
    "category": "GED & archives",
    "title": "Dépôt et classement",
    "description": "Déposez un fichier et renseignez son titre, sa description, sa catégorie et ses mots-clés."
  },
  {
    "id": 82,
    "category": "GED & archives",
    "title": "Aperçu et téléchargement sécurisé",
    "description": "Prévisualisez et téléchargez les fichiers auxquels votre profil est autorisé à accéder."
  },
  {
    "id": 83,
    "category": "GED & archives",
    "title": "Versions et historique documentaire",
    "description": "Conservez les versions des documents et consultez leur historique."
  },
  {
    "id": 84,
    "category": "GED & archives",
    "title": "Indexation du contenu",
    "description": "Recherchez dans le texte extrait des formats pris en charge, notamment PDF, DOCX et XLSX."
  },
  {
    "id": 85,
    "category": "GED & archives",
    "title": "Archivage des bulletins",
    "description": "Archivez les bulletins par sélection d’étudiants ou par année, filière, niveau et classe."
  },
  {
    "id": 86,
    "category": "GED & archives",
    "title": "Campagnes programmées",
    "description": "Programmez les campagnes d’archivage et suivez leur progression et les éventuelles erreurs."
  },
  {
    "id": 87,
    "category": "GED & archives",
    "title": "Confidentialité par catégorie",
    "description": "Les documents RH, bancaires, médicaux et de paie conservent des autorisations spécifiques."
  },
  {
    "id": 88,
    "category": "Santé",
    "title": "Dossiers médicaux",
    "description": "Centralisez et mettez à jour les informations médicales des personnes concernées avec des accès réservés."
  },
  {
    "id": 89,
    "category": "Santé",
    "title": "Consultations et historique",
    "description": "Enregistrez les consultations et retrouvez leur historique."
  },
  {
    "id": 90,
    "category": "Santé",
    "title": "Documents de consultation PDF",
    "description": "Produisez les documents PDF disponibles depuis le suivi des consultations."
  },
  {
    "id": 91,
    "category": "Accès & profils",
    "title": "Profils par métier",
    "description": "Attribuez des profils adaptés : scolarité, pédagogie, comptabilité, RH, paie, GED, bibliothèque, stock, transport et médecin."
  },
  {
    "id": 92,
    "category": "Accès & profils",
    "title": "Autorisations par action",
    "description": "Définissez les droits de consultation, création, modification, validation, export ou suppression selon les fonctionnalités."
  },
  {
    "id": 93,
    "category": "Accès & profils",
    "title": "Exceptions individuelles",
    "description": "Adaptez les autorisations d’un utilisateur sans modifier les droits de toute son équipe."
  },
  {
    "id": 94,
    "category": "Accès & profils",
    "title": "Création sécurisée des comptes",
    "description": "Créez les comptes du personnel avec identifiants générés et affectation des profils autorisés."
  },
  {
    "id": 95,
    "category": "Accès & profils",
    "title": "Navigation adaptée au profil",
    "description": "Les menus suivent les autorisations ; les actions font également l’objet de contrôles côté serveur."
  },
  {
    "id": 96,
    "category": "Statistiques & journal",
    "title": "Stockage par établissement",
    "description": "Mesure des fichiers et octets par établissement, avec une visibilité sur les médias, les pièces RH et la GED."
  },
  {
    "id": 97,
    "category": "Statistiques & journal",
    "title": "Journal des opérations sensibles",
    "description": "Retrouvez les créations, modifications et suppressions enregistrées sur les données couvertes, y compris les traitements en masse."
  },
  {
    "id": 98,
    "category": "Statistiques & journal",
    "title": "Auteur et changements détaillés",
    "description": "Consultez la date, l’auteur lorsqu’il est disponible, l’élément concerné et les changements enregistrés, avec masquage des secrets ciblés."
  },
  {
    "id": 99,
    "category": "Statistiques & journal",
    "title": "Recherche avancée des événements",
    "description": "Filtrez le journal par période, action, auteur, module, référence et contexte de requête."
  },
  {
    "id": 100,
    "category": "Statistiques & journal",
    "title": "Exports du journal et impression",
    "description": "Exportez les résultats autorisés en Excel, CSV ou JSON et utilisez la vue d’impression."
  },
  {
    "id": 101,
    "category": "Finance",
    "title": "EdonePay",
    "description": "Retrouvez les paiements en ligne sous la marque EdonePay, avec le suivi des transactions, soldes et reçus."
  },
  {
    "id": 102,
    "category": "Documents",
    "title": "Fiche établissement PDF",
    "description": "Téléchargez une fiche regroupant les informations de votre établissement."
  },
  {
    "id": 103,
    "category": "Multisite",
    "title": "Portefeuille du fondateur",
    "description": "Retrouvez les établissements qui vous sont attribués dans une vue commune, tout en conservant votre rôle dans votre école principale."
  },
  {
    "id": 104,
    "category": "Multisite",
    "title": "Affectation des accès aux écoles",
    "description": "La plateforme recherche les comptes par nom ou e-mail, attribue les écoles consultables et révoque les accès avec traçabilité."
  },
  {
    "id": 105,
    "category": "Multisite",
    "title": "Années académiques par établissement",
    "description": "Consultez l’année active, une période commune ou toutes les années. Les écoles sans la période choisie sont signalées."
  },
  {
    "id": 106,
    "category": "Multisite",
    "title": "Comparaison des établissements",
    "description": "Comparez les effectifs, frais dus, montants réglés, restes à payer et taux de recouvrement de vos écoles."
  },
  {
    "id": 107,
    "category": "Multisite",
    "title": "Dossiers détaillés des écoles",
    "description": "Explorez les inscriptions, filières, classes, comptes, équipes, documents et situation financière de chaque établissement autorisé."
  },
  {
    "id": 108,
    "category": "Multisite",
    "title": "Recherche dans les registres",
    "description": "Retrouvez les informations métier dans des listes paginées, avec recherche et références lisibles comme les matricules."
  },
  {
    "id": 109,
    "category": "Multisite",
    "title": "Rapports du groupe scolaire",
    "description": "Exportez une synthèse CSV ou préparez un rapport imprimable avec les indicateurs des écoles de votre portefeuille."
  },
  {
    "id": 110,
    "category": "Multisite",
    "title": "Effectifs et frais par campus",
    "description": "Ventilez les inscriptions confirmées et les frais selon le campus de la classe, avec les salles et capacités disponibles."
  },
  {
    "id": 111,
    "category": "Multisite",
    "title": "Consultation de paie habilitée",
    "description": "Réservez les registres de paie et contrats aux comptes qui disposent d’une autorisation distincte pour chaque école."
  },
  {
    "id": 112,
    "category": "Pilotage plateforme",
    "title": "Création et configuration des écoles",
    "description": "Préparez l’identité, le logo, les coordonnées, l’année académique, l’abonnement et le suivi de chaque nouvel établissement."
  },
  {
    "id": 113,
    "category": "Pilotage plateforme",
    "title": "Premier responsable de l’établissement",
    "description": "Créez le compte du responsable à former, avec les droits de son école et un parcours de définition du mot de passe."
  },
  {
    "id": 114,
    "category": "Pilotage plateforme",
    "title": "Suivi de mise en service et formation",
    "description": "Suivez la préparation, la formation, la mise en service et les éléments de configuration restant à compléter."
  },
  {
    "id": 115,
    "category": "Pilotage plateforme",
    "title": "Configuration Google Workspace",
    "description": "Centralisez le domaine professionnel et la configuration de l’école, puis vérifiez explicitement la délégation Google Workspace."
  },
  {
    "id": 116,
    "category": "Pilotage plateforme",
    "title": "Configuration des paiements par école",
    "description": "Centralisez le magasin EdonePay de chaque établissement, sa configuration sécurisée, son URL de confirmation des paiements et les contrôles avant activation."
  },
  {
    "id": 117,
    "category": "Pilotage plateforme",
    "title": "KPI globaux et annuels",
    "description": "Suivez les établissements, utilisateurs, étudiants inscrits, comptes professionnels provisionnés, abonnements et indicateurs financiers."
  },
  {
    "id": 118,
    "category": "Pilotage plateforme",
    "title": "Carte et répertoire des établissements",
    "description": "Consultez les écoles en cartes ou en tableau et visualisez leur localisation lorsqu’elle est renseignée."
  },
  {
    "id": 119,
    "category": "Pilotage plateforme",
    "title": "Incidents et qualité de service",
    "description": "Suivez les anomalies, leur récurrence et leur résolution, ainsi que les contrôles et preuves de préparation du service."
  },
  {
    "id": 120,
    "category": "Finance",
    "title": "Changement de forfait et résiliation",
    "description": "Programmez une évolution de forfait, de tarif ou une résiliation au prochain mois non facturé, avec conservation des factures existantes."
  },
  {
    "id": 121,
    "category": "Finance",
    "title": "Historique des évolutions d’abonnement",
    "description": "Retrouvez les changements programmés ou appliqués et annulez avec un motif une évolution encore en attente."
  },
  {
    "id": 122,
    "category": "Finance",
    "title": "Avoirs suivis et plafonnés",
    "description": "Émettez un avoir sur une facture payée, avec motif et référence unique. Son montant cumulé est contrôlé; le remboursement se traite séparément."
  },
  {
    "id": 123,
    "category": "Finance",
    "title": "Relances de factures",
    "description": "Suivez les rappels et leurs états d’envoi. Les relances programmées sont activées après configuration et validation de l’e-mail."
  },
  {
    "id": 124,
    "category": "Finance",
    "title": "Suivi des frais d’installation",
    "description": "Suivez les frais d’installation uniques de 250 000 FCFA, leur état de règlement et le document associé."
  },
  {
    "id": 125,
    "category": "Sécurité",
    "title": "OTP parent selon la politique de l’école",
    "description": "L’établissement peut activer la vérification par code SMS pour les parents. Les codes utilisent ses crédits EdoneSMS; un manque de crédits ne permet pas de contourner une vérification activée."
  },
  {
    "id": 126,
    "category": "Accès & profils",
    "title": "Domaine professionnel maîtrisé",
    "description": "La plateforme configure le domaine des e-mails professionnels de l’école, avec protection et traçabilité de ses modifications."
  },
  {
    "id": 127,
    "category": "Communication",
    "title": "Notifications dans l’application",
    "description": "Diffusez des messages complets, sans limite de longueur propre au canal in-app, aux étudiants, parents, enseignants et personnels concernés."
  },
  {
    "id": 128,
    "category": "Communication",
    "title": "Cloche et notifications non lues",
    "description": "Un compteur, une cloche animée lorsque des messages attendent et le marquage comme lu à l’ouverture accompagnent la boîte de réception."
  },
  {
    "id": 129,
    "category": "Communication",
    "title": "Ciblage académique progressif",
    "description": "Filtrez les destinataires par année, filière, niveau, classe et personnes précises; les choix suivants s’adaptent aux filtres déjà appliqués."
  },
  {
    "id": 130,
    "category": "Communication",
    "title": "Variables et messages personnalisés",
    "description": "Insérez les noms, prénoms, classes, filières, niveaux, montants de scolarité ou résultats disponibles dans le sujet et le message, avec aperçu avant diffusion."
  },
  {
    "id": 131,
    "category": "Communication",
    "title": "Modèles de campagnes prêts à adapter",
    "description": "Préparez les annonces, urgences, rappels de scolarité, examens, cours, absences, événements et autres communications à partir de modèles modifiables."
  },
  {
    "id": 132,
    "category": "Communication",
    "title": "Portefeuille de crédits EdoneSMS",
    "description": "Chaque établissement dispose de ses SMS disponibles, réservés et consommés, avec un journal des mouvements. Un SMS normalisé coûte 10 FCFA."
  },
  {
    "id": 133,
    "category": "Communication",
    "title": "Demandes de recharge SMS",
    "description": "Demandez des crédits depuis votre espace et suivez leur validation par EdOne, avec le mode de règlement, sa référence et l’historique."
  },
  {
    "id": 134,
    "category": "Communication",
    "title": "Nom d’expéditeur de l’établissement",
    "description": "Demandez un Sender ID au nom de votre école. Sa validation, contrôlée par l’équipe EdOne, nécessite un délai d’au moins une semaine."
  },
  {
    "id": 135,
    "category": "Communication",
    "title": "Bases de contacts SMS indépendantes",
    "description": "Organisez plusieurs listes de contacts, recherchez une personne, ajoutez ou corrigez ses informations, excluez un contact et archivez une base."
  },
  {
    "id": 136,
    "category": "Communication",
    "title": "Modèle Excel de contacts téléchargeable",
    "description": "Téléchargez un vrai modèle Excel et importez jusqu’à cinq colonnes, téléphone compris, pour préparer vos bases de communication."
  },
  {
    "id": 137,
    "category": "Communication",
    "title": "Aperçu et contrôle des imports",
    "description": "Consultez les lignes valides, invalides et en doublon, avec les motifs, puis confirmez explicitement l’import des contacts retenus."
  },
  {
    "id": 138,
    "category": "Communication",
    "title": "Numéros locaux et internationaux",
    "description": "Choisissez le pays de la liste. Les numéros avec ou sans indicatif international sont interprétés, normalisés et vérifiés avant leur utilisation."
  },
  {
    "id": 139,
    "category": "Communication",
    "title": "Campagnes sur les contacts importés",
    "description": "Sélectionnez une ou plusieurs bases, utilisez les colonnes comme variables et vérifiez des exemples personnalisés ainsi que le coût avant l’envoi."
  },
  {
    "id": 140,
    "category": "Communication",
    "title": "SMS maîtrisés à 160 caractères",
    "description": "Après personnalisation, accents et caractères incompatibles sont normalisés et le texte est limité à 160 caractères pour correspondre à un crédit SMS."
  },
  {
    "id": 141,
    "category": "Communication",
    "title": "Suivi des campagnes et des livraisons",
    "description": "Distinguez les messages en attente, acceptés, livrés, refusés ou à vérifier. Les campagnes sont traitées en arrière-plan et les résultats incertains sont rapprochés sans renvoi automatique."
  },
  {
    "id": 142,
    "category": "Accès & profils",
    "title": "Didacticiels interactifs par profil",
    "description": "Découvrez l’application avec des visites guidées, repères, étapes et explications adaptés à votre profil sur ordinateur, tablette et téléphone."
  },
  {
    "id": 143,
    "category": "Accès & profils",
    "title": "Aide des pages, champs et actions",
    "description": "Retrouvez les explications des écrans et des actions disponibles, reprenez un guide et avancez à votre rythme selon les droits de votre compte."
  },
  {
    "id": 144,
    "category": "Accès & profils",
    "title": "Tableau de bord étudiant par services",
    "description": "Retrouvez les destinations autorisées de votre menu sous forme de cartes illustrées, organisées par catégorie et aux couleurs de votre école."
  },
  {
    "id": 145,
    "category": "Documents",
    "title": "Téléchargement direct des documents PDF",
    "description": "Téléchargez les documents personnels disponibles depuis l’espace étudiant, notamment notes, carte, CV, reçus et certificats, avec une mise en page adaptée."
  },
  {
    "id": 146,
    "category": "Documents",
    "title": "Notes au format PDF paysage",
    "description": "Retrouvez les notes dans un document paysage lisible, avec le logo de l’établissement et la photo de l’étudiant."
  },
  {
    "id": 147,
    "category": "Documents",
    "title": "Identité visuelle des documents étudiants",
    "description": "Les documents personnels intègrent les informations de l’école, son logo, un filigrane et la photo de l’étudiant selon le document. Les supports de cours restent sans portrait étudiant."
  },
  {
    "id": 148,
    "category": "Pédagogie",
    "title": "CV enrichi et saisie progressive",
    "description": "Ajoutez votre parcours académique, vos expériences, réalisations, compétences et centres d’intérêt. Enregistrez le titre et la présentation avant de compléter les autres rubriques."
  },
  {
    "id": 149,
    "category": "Documents",
    "title": "CV public et PDF professionnel",
    "description": "Partagez un CV consultable sans connexion, dans une page dédiée, et proposez son téléchargement avec une véritable mise en page de CV."
  },
  {
    "id": 150,
    "category": "Documents",
    "title": "QR codes de vérification des documents",
    "description": "Les liens et QR codes des documents officiels concernés ouvrent une page de vérification EdOne permettant de contrôler leur existence et leur statut."
  },
  {
    "id": 151,
    "category": "Finance",
    "title": "Reprise des paiements en cours",
    "description": "Retrouvez une demande de paiement déjà initiée, consultez son état et reprenez son suivi sans créer une nouvelle tentative en double."
  },
  {
    "id": 152,
    "category": "Communication",
    "title": "Support live intégré",
    "description": "Contactez l’équipe EdOne depuis un bouton de chat flottant dans votre espace. Les nouveaux messages arrivent par WebSocket, avec reconnexion automatique."
  },
  {
    "id": 153,
    "category": "Communication",
    "title": "Conversations privées et historique",
    "description": "Échangez dans une conversation réservée au demandeur et au support EdOne, avec historique, messages non lus et accusés de lecture. Une demande résolue peut être reprise."
  },
  {
    "id": 154,
    "category": "Pilotage plateforme",
    "title": "Boîte de réception du support",
    "description": "Recevez les demandes des différents profils, recherchez une personne ou une école, répondez directement, attribuez une conversation et suivez sa résolution."
  },
  {
    "id": 155,
    "category": "Pilotage plateforme",
    "title": "Pilotage global EdoneSMS",
    "description": "Contrôlez les demandes de recharge et de Sender ID, les règlements, les crédits et les résultats des campagnes par établissement depuis le superdashboard."
  }
];
let selectedCategory='Tous';
const moduleSearch=document.getElementById('moduleSearch');
const normalize=text=>text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('fr');
function filterModules(category=selectedCategory){
 selectedCategory=category;
 document.querySelectorAll('[data-filter]').forEach(b=>{const active=b.dataset.filter===category;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
 const query=normalize(moduleSearch.value.trim());
 const items=modules.filter(m=>(category==='Tous'||m.category===category)&&normalize(m.title+' '+m.description+' '+m.category).includes(query));
 const grid=document.getElementById('moduleGrid');
 grid.replaceChildren(...items.map((m,i)=>{const article=document.createElement('article');article.className='module-item';article.style.animationDelay=Math.min(i,7)*25+'ms';const number=document.createElement('span');number.textContent=String(m.id).padStart(2,'0')+' / '+m.category;const heading=document.createElement('h3');heading.textContent=m.title;const description=document.createElement('p');description.textContent=m.description;article.append(number,heading,description);return article;}));
 document.getElementById('moduleEmpty').hidden=items.length>0;
 document.getElementById('moduleSummary').textContent=items.length+' résultat'+(items.length>1?'s':'')+' sur '+modules.length+' fonctionnalités détaillées'+(category==='Tous'?'':' · '+category);
 document.getElementById('clearSearch').hidden=!moduleSearch.value;
}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>filterModules(b.dataset.filter)));
document.querySelectorAll('[data-category]').forEach(a=>a.addEventListener('click',()=>{moduleSearch.value='';filterModules(a.dataset.category);}));
moduleSearch.addEventListener('input',()=>filterModules());
document.getElementById('clearSearch').addEventListener('click',()=>{moduleSearch.value='';filterModules();moduleSearch.focus();});
document.getElementById('resetModules').addEventListener('click',()=>{moduleSearch.value='';filterModules('Tous');moduleSearch.focus();});
filterModules();
const fmt=n=>new Intl.NumberFormat('fr-FR').format(n)+' FCFA';
const range=document.getElementById('feeRange');
function updateCalc(){const amount=Number(range.value),fee=Math.round(amount*.03);document.getElementById('feeAmount').textContent=fmt(amount);document.getElementById('lineBase').textContent=fmt(amount);document.getElementById('lineFee').textContent=fmt(fee);document.getElementById('lineTotal').textContent=fmt(amount+fee);if(document.getElementById('phoneBase')){document.getElementById('phoneBase').textContent=fmt(amount);document.getElementById('phoneFee').textContent=fmt(fee);document.getElementById('phoneTotal').textContent=fmt(amount+fee);document.getElementById('phoneReceiptTotal').textContent=fmt(amount+fee);}}
range.addEventListener('input',updateCalc);updateCalc();

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

// Useful motion: reading progress and direct links into a profile.
document.querySelectorAll('[data-jump-role]').forEach(button=>button.addEventListener('click',()=>{
 const roleTab=document.getElementById('tab-'+button.dataset.jumpRole);
 selectRole(roleTab);
 document.getElementById('espaces').scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'start'});
 roleTab.focus({preventScroll:true});
}));
if(!reducedMotion){const progress=document.getElementById('readingProgress');let scheduled=false;function updateReadingProgress(){const available=document.documentElement.scrollHeight-window.innerHeight;progress.style.transform='scaleX('+(available>0?Math.min(1,window.scrollY/available):0)+')';scheduled=false;}window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateReadingProgress);}},{passive:true});window.addEventListener('resize',updateReadingProgress);updateReadingProgress();}
