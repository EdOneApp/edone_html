# Catalogue fonctionnel EdOne — 28 octobre 2026

`modules.json` et `docs/roles.json` sont les sources éditoriales maintenues. `scripts/sync-content.py` les applique à l’accueil, à ses filtres/recherches et au guide `fonctionnalites.html`. Ce document récapitule le catalogue courant et remplace la liste initiale de 60 fonctionnalités.

Les ajouts du 28 octobre sont rapprochés du projet Django `EdOneApp/edone`, commit `c8fee3f` : Multisite, campus, pilotage de la plateforme, OTP parent, évolutions d’abonnement, avoirs et relances. Les anciennes offres commerciales restent présentées selon le catalogue existant. Les intégrations et moyens de paiement dépendent de leur configuration et du prestataire.

Le catalogue contient **126 fiches**, **15 familles** et **19 profils détaillés**. Les sept profils mis en avant sur l’accueil comprennent désormais les fondateurs et groupes scolaires.

## Pédagogie

- **01 — Gestion académique** : Années académiques, campus, salles, filières, niveaux, classes et maquettes. Affectation des classes nouvelles ou existantes à leur campus.
- **02 — Inscription & réinscription** : Dossier électronique, carte étudiant, kits, statistiques.
- **03 — Emploi du temps** : Planification par classe, émargements numériques, export PDF/Excel.
- **04 — Espace enseignant** : Contrats, volume horaire, supports, RIB, acomptes.
- **05 — Quiz sécurisés anti-triche** : QCM, réponses libres, tentatives limitées, détection d’onglet.
- **06 — Devoirs individuels** : Fichier, consigne, correction, appréciation.
- **07 — Devoirs de groupe** : Groupes, chef, soumission, notation collective.
- **08 — Évaluations & notation** : Import Excel, coefficients, réclamations.
- **09 — Bulletins** : Génération automatique par semestre, moyennes pondérées, rangs, appréciations.
- **10 — Procès-verbaux** : PV semestriels et annuels, calcul des crédits et décisions de passage automatisées.
- **11 — Diplômes & certificats** : Sessions, génération en masse, code de vérification publique.
- **12 — Attestations de scolarité** : Certificats vérifiables via lien public.
- **13 — Reçus de paiement** : Un reçu est généré automatiquement à chaque règlement, puis envoyé par SMS et e-mail.
- **14 — Carte étudiant** : Numérique + imprimable, photo, statut de remise.
- **15 — CV automatique** : Parcours de l’étudiant, personnalisé, lien public.
- **16 — Vérification en ligne** : Documents officiels par code unique.
- **61 — Évaluations à nombre variable** : Nombre libre d’évaluations par matière, barèmes, coefficients, sessions, imports Excel contrôlés et historique des corrections.
- **62 — Crédits et compensation des UE** : Configurez les crédits, coefficients et règles de compensation pour les parcours universitaires et professionnels.
- **63 — Progressions pédagogiques** : Suivez l’avancement des enseignements et les progressions des équipes pédagogiques.
- **64 — Personnalisation des documents scolaires** : Retrouvez le logo, les couleurs et les informations de votre établissement sur les documents prévus.

## Documents

- **17 — Bulletins PDF** : Génération de bulletins téléchargeables au format PDF.
- **18 — Procès-verbaux PDF** : Génération de PV semestriels et annuels au format PDF.
- **19 — Diplômes et certificats en masse** : Production des diplômes et certificats par session de délivrance.
- **20 — Attestations officielles** : Attestations de réussite, d’admission et de scolarité, vérifiables par lien public.
- **21 — Reçus automatiques** : Transmission du reçu de chaque paiement par SMS et e-mail.
- **22 — Exports Excel et PDF** : Export des données pédagogiques pour les équipes de l’établissement.
- **102 — Fiche établissement PDF** : Téléchargez une fiche regroupant les informations de votre établissement.

## Finance

- **23 — Comptabilité & scolarité** : Frais, plans de paiement, historique, solde.
- **24 — Wallet établissement** : Solde temps réel, reversement, historique.
- **25 — Abonnement & facturation SaaS automatisée** : Factures mensuelles, état des règlements et références de paiement, documents actualisés et suivi de l’abonnement de chaque établissement.
- **26 — Réconciliation automatique des transactions** : Détection d’écarts.
- **27 — Sept moyens de paiement** : Wave, Orange Money, Moov Money, MTN MoMo, Djamo, Visa et Mastercard. Disponibilité selon le pays.
- **28 — Frais de transaction de 3 %** : 3 % du montant par transaction, sans frais fixes additionnels, sur tous les plans et moyens de paiement.
- **29 — Minimum par transaction** : Montant minimum : 2 000 FCFA par transaction.
- **30 — Tous les frais scolaires en ligne** : Règlement de la scolarité, du transport, de la carte, des kits et des accessoires.
- **31 — Demandes de reversement** : L’établissement suit son wallet et demande le reversement de ses fonds.
- **32 — Notification après règlement** : Envoi automatique d’un reçu par SMS et e-mail après chaque paiement.
- **33 — Imputation en temps réel** : Le règlement est affecté directement au dossier de l’étudiant.
- **101 — EdonePay** : Retrouvez les paiements en ligne sous la marque EdonePay, avec le suivi des transactions, soldes et reçus.
- **120 — Changement de forfait et résiliation** : Programmez une évolution de forfait, de tarif ou une résiliation au prochain mois non facturé, avec conservation des factures existantes.
- **121 — Historique des évolutions d’abonnement** : Retrouvez les changements programmés ou appliqués et annulez avec un motif une évolution encore en attente.
- **122 — Avoirs suivis et plafonnés** : Émettez un avoir sur une facture payée, avec motif et référence unique. Son montant cumulé est contrôlé; le remboursement se traite séparément.
- **123 — Relances de factures** : Suivez les rappels et leurs états d’envoi. Les relances programmées sont activées après configuration et validation de l’e-mail.
- **124 — Suivi des frais d’installation** : Suivez les frais d’installation uniques de 250 000 FCFA, leur état de règlement et le document associé.

## Ressources

- **34 — Stock et moyens généraux** : Produits, catégories, fournisseurs.
- **35 — Commandes et fournitures** : Suivi des commandes et des fournitures de l’établissement.
- **36 — Remise des kits et accessoires** : Suivi de la distribution des kits et accessoires aux étudiants.
- **37 — Gestion du transport** : Lignes, frais, suivi.

## RH

- **38 — Fiches du personnel administratif / enseignant** : Fiches du personnel administratif / enseignant.
- **39 — Services, contrats, suivi RH** : Services, contrats, suivi RH.
- **40 — Volume horaire et acomptes** : Suivi des heures et demandes d’acompte du personnel et des enseignants.
- **65 — Dossier employé complet** : Centralisez les informations administratives, professionnelles et les pièces justificatives du personnel.
- **66 — Fiches de poste et recrutement** : Organisez les postes et les candidatures dans le suivi RH.
- **67 — Parcours et carrière** : Conservez les étapes du parcours professionnel de chaque employé.
- **68 — Évaluations du personnel** : Enregistrez les évaluations et suivez les appréciations professionnelles.
- **69 — Formations du personnel** : Suivez les formations et les justificatifs associés aux employés.
- **70 — Congés et calendrier** : Centralisez les demandes de congé, leur traitement, les soldes et le calendrier des absences.
- **71 — Demandes et documents RH** : Traitez les demandes des employés, suivez leur avancement et produisez les documents disponibles.
- **72 — Espace personnel employé** : Chaque employé consulte son dossier autorisé, dépose ses pièces et suit ses demandes.
- **73 — Pièces RH privées** : Conservez les documents du personnel dans un espace privé avec des accès adaptés à leur sensibilité.

## Communication

- **41 — Campagnes SMS & email** : Direction/admin.
- **42 — Notifications automatiques** : Absences, notes, bulletins, paiements.
- **43 — Alertes d’absence** : Les parents et étudiants reçoivent les notifications d’absence.
- **44 — Envoi des documents** : Communication des bulletins et diplômes par e-mail et notifications par SMS.
- **45 — Contact et support WhatsApp** : Un canal de contact pour échanger avec l’équipe EdOne.

## Sécurité

- **46 — Isolation multi-établissement** : Données isolées et accès cloisonnés par établissement.
- **47 — Connexions HTTPS** : Chiffrement des échanges entre votre navigateur et la plateforme via HTTPS.
- **48 — Mots de passe hashés** : Les mots de passe sont conservés sous forme de hash pour protéger les accès.
- **49 — Double authentification** : Double authentification obligatoire pour le pilotage de la plateforme et accès aux opérations sensibles selon les habilitations.
- **50 — Sauvegardes et restauration** : Sauvegardes chiffrées de la base et des fichiers privés, stockage hors site et exercices de restauration selon la configuration du service.
- **51 — Conformité RGPD** : Traitement et conservation des données dans le cadre des exigences RGPD.
- **52 — Traçabilité complète** : Actions horodatées et attribuées, notamment les paiements et modifications de notes.
- **53 — Environnement cloisonné** : Chaque établissement dispose de son propre périmètre de données et d’accès.
- **125 — Code de vérification pour les parents** : L’accès parent en production utilise un code SMS temporaire à usage unique, lié à la session et limité en tentatives.

## Bibliothèque

- **54 — Catalogue de livres numériques** : 79 000+ ouvrages du domaine public.
- **55 — Lecture directe et sécurisée** : Sans téléchargement libre.
- **56 — Ouvrages propres à l’établissement** : Ajoutés par direction / enseignants.
- **57 — Partages étudiants** : Documents validés avant publication.
- **58 — Favoris personnels** : Chaque étudiant retrouve ses livres favoris, issus du fonds de l’école ou du catalogue public.
- **59 — Ouvrages mis en avant** : Les super administrateurs peuvent épingler des titres du catalogue public.
- **60 — Bibliothèque et parcours** : Accès intégré à l’espace étudiant, avec une place dans son CV et son parcours.

## Paie

- **74 — Contrats et rémunérations** : Gérez les contrats et les informations de rémunération selon les habilitations du gestionnaire.
- **75 — Rubriques de paie configurables** : Paramétrez les éléments de rémunération et les retenues utilisés dans les calculs.
- **76 — Préparation de la paie** : Préparez les paies et appliquez les paramètres de calcul configurés pour l’établissement.
- **77 — Bulletins de paie PDF** : Générez et consultez les bulletins de paie téléchargeables.
- **78 — Historique et accès salarié** : Retrouvez les paies précédentes ; chaque salarié accède uniquement aux bulletins mis à sa disposition.

## GED & archives

- **79 — Documents centralisés** : Retrouvez les pièces des étudiants, supports de cours, documents enseignants, ouvrages et pièces RH selon vos droits.
- **80 — Recherche documentaire multicritère** : Recherchez par texte, catégorie, mots-clés, année, filière, niveau, classe ou personne concernée.
- **81 — Dépôt et classement** : Déposez un fichier et renseignez son titre, sa description, sa catégorie et ses mots-clés.
- **82 — Aperçu et téléchargement sécurisé** : Prévisualisez et téléchargez les fichiers auxquels votre profil est autorisé à accéder.
- **83 — Versions et historique documentaire** : Conservez les versions des documents et consultez leur historique.
- **84 — Indexation du contenu** : Recherchez dans le texte extrait des formats pris en charge, notamment PDF, DOCX et XLSX.
- **85 — Archivage des bulletins** : Archivez les bulletins par sélection d’étudiants ou par année, filière, niveau et classe.
- **86 — Campagnes programmées** : Programmez les campagnes d’archivage et suivez leur progression et les éventuelles erreurs.
- **87 — Confidentialité par catégorie** : Les documents RH, bancaires, médicaux et de paie conservent des autorisations spécifiques.

## Santé

- **88 — Dossiers médicaux** : Centralisez et mettez à jour les informations médicales des personnes concernées avec des accès réservés.
- **89 — Consultations et historique** : Enregistrez les consultations et retrouvez leur historique.
- **90 — Documents de consultation PDF** : Produisez les documents PDF disponibles depuis le suivi des consultations.

## Accès & profils

- **91 — Profils par métier** : Attribuez des profils adaptés : scolarité, pédagogie, comptabilité, RH, paie, GED, bibliothèque, stock, transport et médecin.
- **92 — Autorisations par action** : Définissez les droits de consultation, création, modification, validation, export ou suppression selon les fonctionnalités.
- **93 — Exceptions individuelles** : Adaptez les autorisations d’un utilisateur sans modifier les droits de toute son équipe.
- **94 — Création sécurisée des comptes** : Créez les comptes du personnel avec identifiants générés et affectation des profils autorisés.
- **95 — Navigation adaptée au profil** : Les menus suivent les autorisations ; les actions font également l’objet de contrôles côté serveur.
- **126 — Domaine professionnel maîtrisé** : La plateforme configure le domaine des e-mails professionnels de l’école, avec protection et traçabilité de ses modifications.

## Statistiques & journal

- **96 — Stockage par établissement** : Mesure des fichiers et octets par établissement, avec une visibilité sur les médias, les pièces RH et la GED.
- **97 — Journal des opérations sensibles** : Retrouvez les créations, modifications et suppressions enregistrées sur les données couvertes, y compris les traitements en masse.
- **98 — Auteur et changements détaillés** : Consultez la date, l’auteur lorsqu’il est disponible, l’élément concerné et les changements enregistrés, avec masquage des secrets ciblés.
- **99 — Recherche avancée des événements** : Filtrez le journal par période, action, auteur, module, référence et contexte de requête.
- **100 — Exports du journal et impression** : Exportez les résultats autorisés en Excel, CSV ou JSON et utilisez la vue d’impression.

## Multisite

- **103 — Portefeuille du fondateur** : Retrouvez les établissements qui vous sont attribués dans une vue commune, tout en conservant votre rôle dans votre école principale.
- **104 — Affectation des accès aux écoles** : La plateforme recherche les comptes par nom ou e-mail, attribue les écoles consultables et révoque les accès avec traçabilité.
- **105 — Années académiques par établissement** : Consultez l’année active, une période commune ou toutes les années. Les écoles sans la période choisie sont signalées.
- **106 — Comparaison des établissements** : Comparez les effectifs, frais dus, montants réglés, restes à payer et taux de recouvrement de vos écoles.
- **107 — Dossiers détaillés des écoles** : Explorez les inscriptions, filières, classes, comptes, équipes, documents et situation financière de chaque établissement autorisé.
- **108 — Recherche dans les registres** : Retrouvez les informations métier dans des listes paginées, avec recherche et références lisibles comme les matricules.
- **109 — Rapports du groupe scolaire** : Exportez une synthèse CSV ou préparez un rapport imprimable avec les indicateurs des écoles de votre portefeuille.
- **110 — Effectifs et frais par campus** : Ventilez les inscriptions confirmées et les frais selon le campus de la classe, avec les salles et capacités disponibles.
- **111 — Consultation de paie habilitée** : Réservez les registres de paie et contrats aux comptes qui disposent d’une autorisation distincte pour chaque école.

## Pilotage plateforme

- **112 — Création et configuration des écoles** : Préparez l’identité, le logo, les coordonnées, l’année académique, l’abonnement et le suivi de chaque nouvel établissement.
- **113 — Premier responsable de l’établissement** : Créez le compte du responsable à former, avec les droits de son école et un parcours de définition du mot de passe.
- **114 — Suivi de mise en service et formation** : Suivez la préparation, la formation, la mise en service et les éléments de configuration restant à compléter.
- **115 — Configuration Google Workspace** : Centralisez le domaine professionnel et la configuration de l’école, puis vérifiez explicitement la délégation Google Workspace.
- **116 — Accompagnement EdonePay** : Suivez le rattachement du compte marchand, les étapes de conformité et la configuration des paiements de l’établissement.
- **117 — KPI globaux et annuels** : Suivez les établissements, utilisateurs, étudiants inscrits, comptes professionnels provisionnés, abonnements et indicateurs financiers.
- **118 — Carte et répertoire des établissements** : Consultez les écoles en cartes ou en tableau et visualisez leur localisation lorsqu’elle est renseignée.
- **119 — Incidents et qualité de service** : Suivez les anomalies, leur récurrence et leur résolution, ainsi que les contrôles et preuves de préparation du service.

## Profils

### Direction

Académique, finances et équipes : une vue d’ensemble, des accès maîtrisés et des décisions éclairées.

- Multi-établissements & campus (gestion de plusieurs écoles sur une même plateforme)
- Permissions granulaires (rôles, accès par module, par établissement)
- Dashboard 360° (vue d’ensemble des indicateurs)
- Campagnes SMS & email
- Diplômes, PV (procès-verbaux), attestations de scolarité, certificats de réussite
- Wallet établissement (solde temps réel, demandes de reversement, historique)
- Réconciliation automatique des transactions
- Gestion des abonnements et facturation SaaS automatisée
- Programme partenaire / intégrateur (licence marque blanche, prime 100 000 FCFA / école, 10% à vie, dashboard partenaire)
- Configuration des coefficients, maquettes pédagogiques, filières, niveaux, salles
- Import / export de données (Excel, PDF)
- Traçabilité complète (chaque modification de note et chaque paiement horodaté et attribué)
- Sauvegardes automatisées + procédure de restauration testée
- Isolation multi-établissement (données cloisonnées)
- Dossiers RH, congés, paie et espace employé selon les habilitations
- GED, classement documentaire et archivage des bulletins
- Statistiques de stockage et journal des opérations sensibles avec exports
- Création des comptes, profils personnalisés et exceptions individuelles
- Consultation Multisite des écoles explicitement attribuées au responsable
- Effectifs et frais par campus, à partir des classes affectées
- Suivi des changements de forfait et des documents de facturation

### Fondateurs & groupes scolaires

Consultez vos établissements autorisés, comparez leurs indicateurs et ouvrez le détail de chacun, tout en gardant votre rôle dans votre école principale.

- Portefeuille des écoles attribuées par la plateforme
- Année active, période commune ou consultation de toutes les années
- Comparaison des effectifs, des frais et du recouvrement
- Dossier détaillé de chaque école : académique, finances, équipes et documents
- Effectifs et frais par campus selon les classes affectées
- Registres avec recherche et références métier lisibles
- Synthèses CSV et rapports imprimables
- Consultation des registres de paie sur habilitation distincte
- Administration de l’école principale conservée pour le fondateur qui en est aussi responsable

### Enseignants

Du planning à la correction, retrouvez vos cours, vos étudiants et vos démarches administratives dans un même espace.

- Contrats & volume horaire (suivi administratif du corps enseignant)
- Import de notes par Excel (import massif, correction rapide)
- Quiz sécurisés anti-triche (QCM, choix multiples, réponses libres, tentatives limitées, détection de changement d’onglet/navigateur)
- Devoirs individuels (dépôt de fichier, consigne jointe, correction et appréciation)
- Devoirs de groupe (constitution des groupes, chef de groupe, soumission collective, notation collective)
- Évaluations et notation (coefficients configurables, gestion des réclamations)
- Dépôt de supports de cours
- RIB (relevé d’identité bancaire) et demandes d’acompte
- Fiches de présence numériques
- Espace enseignant dédié (maquette, planning)
- Configuration des coefficients par matière / niveau
- Documents personnels et supports de cours accessibles selon les droits
- Devoirs de groupe, soumissions et correction des travaux

### Étudiants

Un cours à retrouver, une note à consulter, un devoir à rendre : votre vie étudiante vous suit partout.

- Maquette pédagogique complète (années académiques, classes, cours, enseignants, salles)
- Quiz & devoirs (accès, réponses, notes immédiates)
- Notes & bulletins (consultation, téléchargement PDF, rangs, moyennes pondérées)
- Paiement Mobile Money / carte (Orange Money, MTN, Moov, Wave, Djamo, Visa, Mastercard)
- CV automatique généré depuis le parcours, personnalisable et partageable via lien public
- Carte étudiant numérique et imprimable (photo, statut de remise suivi par la direction)
- Bibliothèque de 79 000+ ouvrages (consultation, favoris, lecture directe)
- Email professionnel Google Workspace (accès à Drive, Docs, Sheets, Meet)
- Vérification publique des documents (bulletin, diplôme, attestation par code unique)
- Accès aux reçus de paiement et historique de solde
- Suivi des frais divers (cartes, kits, accessoires, transport)
- Alertes d’absences et notifications automatiques
- Documents scolaires et archives accessibles depuis son espace
- Supports et sujets de devoirs réservés à ses classes

### Parents

Accédez au suivi de votre enfant par son matricule, consultez ses échéances et réglez les frais depuis votre téléphone.

- Accès simple par matricule (login facile, pas de mot de passe complexe obligatoire)
- Suivi du cursus, notes, bulletins (toutes périodes)
- Alertes d’absences (notification immédiate)
- Statut et paiement de la scolarité (suivi des échéances, montants restants)
- Paiement des frais divers en ligne (transport, carte, kits, accessoires)
- Notifications SMS/Email automatiques (reçus, alertes, annonces)
- Accès au wallet / historique des paiements effectués
- Consultation de la carte étudiant et des documents officiels (lorsque autorisé)
- Vérification par code SMS temporaire pour accéder au dossier familial en production

### Personnel et RH

Inscriptions, ressources humaines, fournitures et transport : une organisation commune pour tous les métiers du campus.

- Fiches du personnel administratif et technique
- Services, contrats, suivi RH
- Gestion du stock et moyens généraux (produits, catégories, fournisseurs, commandes, remise de kits et accessoires)
- Transport (suivi des lignes, paquets, frais de transport)
- Gestion des inscriptions et réinscriptions (dossiers électroniques, statistiques en direct)
- Établissement et gestion du campus (salles, filières, niveaux)
- Mise à jour des données de l’élève et du personnel
- Authentification sécurisée (2FA pour super administrateurs)
- Conformité RGPD (traitement et conservation conformes)
- Dossier employé, carrière, évaluations et formations
- Demandes de congés et calendrier des absences
- Demandes RH, dépôt de pièces privées et suivi du traitement
- Préparation de la paie et bulletins PDF pour les gestionnaires habilités
- Espace salarié : dossier, demandes et bulletins personnels
- GED, stock, transport ou service médical selon le métier et les droits accordés

### Partenaires

Distribuez EdOne en marque blanche et accompagnez vos établissements clients, de l’installation à la formation.

- Licence marque blanche aux couleurs de votre structure
- Prime d’installation de 100 000 FCFA par établissement signé
- Commission de 10 % à vie sur chaque abonnement mensuel payé
- Dashboard partenaire dédié au suivi des établissements et des commissions
- Support technique, formation et accompagnement au déploiement

### Scolarité

Gérer le parcours administratif et scolaire des étudiants.

- Dossiers étudiants, pièces et inscriptions
- Années, filières, niveaux et classes
- Notes, résultats, bulletins et documents scolaires
- Recherche et archivage des documents académiques

### Responsable pédagogique

Organiser les enseignements et suivre les résultats.

- Enseignants et affectations pédagogiques
- Matières, UE, maquettes, coefficients et crédits
- Progressions, emplois du temps et évaluations
- Compensation des UE, bulletins et procès-verbaux

### Comptabilité

Suivre les frais, encaissements et opérations financières.

- Frais de scolarité et frais divers
- Contrôle des paiements et suivi des soldes
- Paiements EdonePay et historique des transactions
- Portefeuille, reçus et exports financiers
- Suivi des factures, références de règlement et échanges avec la plateforme pour les avoirs et relances

### Ressources humaines

Accompagner le personnel tout au long de son parcours.

- Dossiers employés et pièces privées
- Postes, candidatures et parcours professionnels
- Évaluations et formations
- Congés, calendrier et traitement des demandes

### Gestionnaire de paie

Préparer les rémunérations avec des accès dédiés.

- Contrats et paramètres de rémunération
- Rubriques et préparation de la paie
- Bulletins de paie PDF
- Historique des paies autorisées

### Employé

Retrouver ses informations et démarches personnelles.

- Dossier et documents personnels autorisés
- Dépôt de pièces justificatives
- Demandes RH et suivi du traitement
- Consultation de ses bulletins de paie disponibles

### Gestionnaire documentaire

Organiser les documents et les archives de l’établissement.

- Recherche, classement et métadonnées
- Aperçu, téléchargement et versions
- Archivage des bulletins par sélection ou filtres
- Programmation et suivi des campagnes ; accès sensibles soumis à habilitation

### Bibliothécaire

Organiser les ressources de lecture.

- Catalogue et fichiers des ouvrages
- Ajout et modification des livres
- Traitement des ouvrages soumis à validation

### Gestionnaire de stock

Suivre les fournitures et approvisionnements.

- Catégories, produits et fournisseurs
- Commandes et réceptions
- Historique, impressions et exports

### Gestionnaire de transport

Organiser les déplacements et les abonnements.

- Véhicules et trajets
- Abonnements et consultation de leurs détails
- Exports des informations de transport

### Médecin / service médical

Assurer le suivi médical avec des droits réservés.

- Dossiers médicaux autorisés
- Consultations et historique
- Documents PDF disponibles

### Administration de la plateforme

Piloter l’ensemble du service, créer les écoles et leurs responsables, configurer les intégrations et suivre les indicateurs, les incidents et les mises en service.

- Création des établissements, de leur identité, année académique et premier responsable
- Configuration Workspace, domaine professionnel et parcours marchand EdonePay
- Suivi des installations, abonnements, factures, avoirs et relances
- KPI globaux et annuels, répertoire détaillé, graphiques et carte des établissements
- Recherche des comptes fondateurs et attribution des écoles du portefeuille Multisite
- Autorisations de paie distinctes par compte et établissement
- Incidents, anomalies, résolution et journal des opérations sensibles
- Suivi des formations et preuves de préparation du service
- Double authentification et accès de plateforme séparés des rôles d’école
- Sélection des ouvrages publics proposés

## Repères commerciaux

Installation unique : 250 000 FCFA par établissement. Abonnements : Starter 25 000 FCFA/mois, School 75 000 FCFA/mois, Campus 200 000 FCFA/mois et Enterprise sur devis. Les changements d’abonnement, avoirs et relances sont décrits comme des fonctions de suivi; un avoir ne déclenche pas automatiquement un remboursement. Les statistiques de campus reposent sur les classes affectées. La consultation de paie nécessite une habilitation distincte.

Les choix d’exploitation Docker/Kubernetes et les résultats de tests internes ne sont pas présentés comme des fonctionnalités destinées aux élèves. Le site ne prétend pas que les validations externes du cluster, des fournisseurs ou de la recette pilote ont été réalisées.
