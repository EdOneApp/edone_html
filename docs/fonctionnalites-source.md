# Catalogue des fonctionnalités EdOne

Mis à jour le 27 octobre 2026 à partir des modules du projet Django Edone :
`acces`, `audit`, `tenancy`, `ged`, `ressources_humaines` et des modules métiers existants.

Sources éditoriales : `modules.json` et `docs/roles.json`.
Régénération des pages : `python3 scripts/sync-content.py`.
Les accès dépendent des habilitations ; le catalogue ne signifie pas que chaque profil voit tous les dossiers.

## Installation et abonnements

Frais d’installation uniques de **250 000 FCFA par établissement**. Après installation,
l’établissement choisit son forfait mensuel et utilise la plateforme. Les abonnements
et frais de transaction restent distincts de l’installation.

## Fonctionnalités

### Pédagogie

- **Gestion académique** : Années, campus, salles, filières, niveaux, classes, maquettes.
- **Inscription & réinscription** : Dossier électronique, carte étudiant, kits, statistiques.
- **Emploi du temps** : Planification par classe, émargements numériques, export PDF/Excel.
- **Espace enseignant** : Contrats, volume horaire, supports, RIB, acomptes.
- **Quiz sécurisés anti-triche** : QCM, réponses libres, tentatives limitées, détection d’onglet.
- **Devoirs individuels** : Fichier, consigne, correction, appréciation.
- **Devoirs de groupe** : Groupes, chef, soumission, notation collective.
- **Évaluations & notation** : Import Excel, coefficients, réclamations.
- **Bulletins** : Génération automatique par semestre, moyennes pondérées, rangs, appréciations.
- **Procès-verbaux** : PV semestriels et annuels, calcul des crédits et décisions de passage automatisées.
- **Diplômes & certificats** : Sessions, génération en masse, code de vérification publique.
- **Attestations de scolarité** : Certificats vérifiables via lien public.
- **Reçus de paiement** : Un reçu est généré automatiquement à chaque règlement, puis envoyé par SMS et e-mail.
- **Carte étudiant** : Numérique + imprimable, photo, statut de remise.
- **CV automatique** : Parcours de l’étudiant, personnalisé, lien public.
- **Vérification en ligne** : Documents officiels par code unique.

### Documents

- **Bulletins PDF** : Génération de bulletins téléchargeables au format PDF.
- **Procès-verbaux PDF** : Génération de PV semestriels et annuels au format PDF.
- **Diplômes et certificats en masse** : Production des diplômes et certificats par session de délivrance.
- **Attestations officielles** : Attestations de réussite, d’admission et de scolarité, vérifiables par lien public.
- **Reçus automatiques** : Transmission du reçu de chaque paiement par SMS et e-mail.
- **Exports Excel et PDF** : Export des données pédagogiques pour les équipes de l’établissement.

### Finance

- **Comptabilité & scolarité** : Frais, plans de paiement, historique, solde.
- **Wallet établissement** : Solde temps réel, reversement, historique.
- **Abonnement & facturation SaaS automatisée** : Prélèvement wallet ou en ligne.
- **Réconciliation automatique des transactions** : Détection d’écarts.
- **Sept moyens de paiement** : Wave, Orange Money, Moov Money, MTN MoMo, Djamo, Visa et Mastercard. Disponibilité selon le pays.
- **Frais de transaction de 3 %** : 3 % du montant par transaction, sans frais fixes additionnels, sur tous les plans et moyens de paiement.
- **Minimum par transaction** : Montant minimum : 2 000 FCFA par transaction.
- **Tous les frais scolaires en ligne** : Règlement de la scolarité, du transport, de la carte, des kits et des accessoires.
- **Demandes de reversement** : L’établissement suit son wallet et demande le reversement de ses fonds.
- **Notification après règlement** : Envoi automatique d’un reçu par SMS et e-mail après chaque paiement.
- **Imputation en temps réel** : Le règlement est affecté directement au dossier de l’étudiant.

### Ressources

- **Stock et moyens généraux** : Produits, catégories, fournisseurs.
- **Commandes et fournitures** : Suivi des commandes et des fournitures de l’établissement.
- **Remise des kits et accessoires** : Suivi de la distribution des kits et accessoires aux étudiants.
- **Gestion du transport** : Lignes, frais, suivi.

### RH

- **Fiches du personnel administratif / enseignant** : Fiches du personnel administratif / enseignant.
- **Services, contrats, suivi RH** : Services, contrats, suivi RH.
- **Volume horaire et acomptes** : Suivi des heures et demandes d’acompte du personnel et des enseignants.

### Communication

- **Campagnes SMS & email** : Direction/admin.
- **Notifications automatiques** : Absences, notes, bulletins, paiements.
- **Alertes d’absence** : Les parents et étudiants reçoivent les notifications d’absence.
- **Envoi des documents** : Communication des bulletins et diplômes par e-mail et notifications par SMS.
- **Contact et support WhatsApp** : Un canal de contact pour échanger avec l’équipe EdOne.

### Sécurité

- **Isolation multi-établissement** : Données isolées et accès cloisonnés par établissement.
- **Connexions HTTPS** : Chiffrement des échanges entre votre navigateur et la plateforme via HTTPS.
- **Mots de passe hashés** : Les mots de passe sont conservés sous forme de hash pour protéger les accès.
- **Double authentification** : La 2FA renforce la protection des comptes super administrateurs.
- **Sauvegardes et restauration** : Sauvegardes automatisées et procédure de restauration testée.
- **Conformité RGPD** : Traitement et conservation des données dans le cadre des exigences RGPD.
- **Traçabilité complète** : Actions horodatées et attribuées, notamment les paiements et modifications de notes.
- **Environnement cloisonné** : Chaque établissement dispose de son propre périmètre de données et d’accès.

### Bibliothèque

- **Catalogue de livres numériques** : 79 000+ ouvrages du domaine public.
- **Lecture directe et sécurisée** : Sans téléchargement libre.
- **Ouvrages propres à l’établissement** : Ajoutés par direction / enseignants.
- **Partages étudiants** : Documents validés avant publication.
- **Favoris personnels** : Chaque étudiant retrouve ses livres favoris, issus du fonds de l’école ou du catalogue public.
- **Ouvrages mis en avant** : Les super administrateurs peuvent épingler des titres du catalogue public.
- **Bibliothèque et parcours** : Accès intégré à l’espace étudiant, avec une place dans son CV et son parcours.

### Pédagogie

- **Évaluations à nombre variable** : Adaptez le nombre de notes et d’évaluations aux besoins de chaque matière et période.
- **Crédits et compensation des UE** : Configurez les crédits, coefficients et règles de compensation pour les parcours universitaires et professionnels.
- **Progressions pédagogiques** : Suivez l’avancement des enseignements et les progressions des équipes pédagogiques.
- **Personnalisation des documents scolaires** : Retrouvez le logo, les couleurs et les informations de votre établissement sur les documents prévus.

### RH

- **Dossier employé complet** : Centralisez les informations administratives, professionnelles et les pièces justificatives du personnel.
- **Fiches de poste et recrutement** : Organisez les postes et les candidatures dans le suivi RH.
- **Parcours et carrière** : Conservez les étapes du parcours professionnel de chaque employé.
- **Évaluations du personnel** : Enregistrez les évaluations et suivez les appréciations professionnelles.
- **Formations du personnel** : Suivez les formations et les justificatifs associés aux employés.
- **Congés et calendrier** : Centralisez les demandes de congé, leur traitement, les soldes et le calendrier des absences.
- **Demandes et documents RH** : Traitez les demandes des employés, suivez leur avancement et produisez les documents disponibles.
- **Espace personnel employé** : Chaque employé consulte son dossier autorisé, dépose ses pièces et suit ses demandes.
- **Pièces RH privées** : Conservez les documents du personnel dans un espace privé avec des accès adaptés à leur sensibilité.

### Paie

- **Contrats et rémunérations** : Gérez les contrats et les informations de rémunération selon les habilitations du gestionnaire.
- **Rubriques de paie configurables** : Paramétrez les éléments de rémunération et les retenues utilisés dans les calculs.
- **Préparation de la paie** : Préparez les paies et appliquez les paramètres de calcul configurés pour l’établissement.
- **Bulletins de paie PDF** : Générez et consultez les bulletins de paie téléchargeables.
- **Historique et accès salarié** : Retrouvez les paies précédentes ; chaque salarié accède uniquement aux bulletins mis à sa disposition.

### GED & archives

- **Documents centralisés** : Retrouvez les pièces des étudiants, supports de cours, documents enseignants, ouvrages et pièces RH selon vos droits.
- **Recherche documentaire multicritère** : Recherchez par texte, catégorie, mots-clés, année, filière, niveau, classe ou personne concernée.
- **Dépôt et classement** : Déposez un fichier et renseignez son titre, sa description, sa catégorie et ses mots-clés.
- **Aperçu et téléchargement sécurisé** : Prévisualisez et téléchargez les fichiers auxquels votre profil est autorisé à accéder.
- **Versions et historique documentaire** : Conservez les versions des documents et consultez leur historique.
- **Indexation du contenu** : Recherchez dans le texte extrait des formats pris en charge, notamment PDF, DOCX et XLSX.
- **Archivage des bulletins** : Archivez les bulletins par sélection d’étudiants ou par année, filière, niveau et classe.
- **Campagnes programmées** : Programmez les campagnes d’archivage et suivez leur progression et les éventuelles erreurs.
- **Confidentialité par catégorie** : Les documents RH, bancaires, médicaux et de paie conservent des autorisations spécifiques.

### Santé

- **Dossiers médicaux** : Centralisez et mettez à jour les informations médicales des personnes concernées avec des accès réservés.
- **Consultations et historique** : Enregistrez les consultations et retrouvez leur historique.
- **Documents de consultation PDF** : Produisez les documents PDF disponibles depuis le suivi des consultations.

### Accès & profils

- **Profils par métier** : Attribuez des profils adaptés : scolarité, pédagogie, comptabilité, RH, paie, GED, bibliothèque, stock, transport et médecin.
- **Autorisations par action** : Définissez les droits de consultation, création, modification, validation, export ou suppression selon les fonctionnalités.
- **Exceptions individuelles** : Adaptez les autorisations d’un utilisateur sans modifier les droits de toute son équipe.
- **Création sécurisée des comptes** : Créez les comptes du personnel avec identifiants générés et affectation des profils autorisés.
- **Navigation adaptée au profil** : Les menus suivent les autorisations ; les actions font également l’objet de contrôles côté serveur.

### Statistiques & journal

- **Stockage par établissement** : Consultez le nombre de fichiers et le volume de stockage mesuré pour votre établissement.
- **Journal des opérations sensibles** : Retrouvez les créations, modifications et suppressions enregistrées sur les données couvertes, y compris les traitements en masse.
- **Auteur et changements détaillés** : Consultez la date, l’auteur lorsqu’il est disponible, l’élément concerné et les changements enregistrés, avec masquage des secrets ciblés.
- **Recherche avancée des événements** : Filtrez le journal par période, action, auteur, module, référence et contexte de requête.
- **Exports du journal et impression** : Exportez les résultats autorisés en Excel, CSV ou JSON et utilisez la vue d’impression.

### Finance

- **EdonePay** : Retrouvez les paiements en ligne sous la marque EdonePay, avec le suivi des transactions, soldes et reçus.

### Documents

- **Fiche établissement PDF** : Téléchargez une fiche regroupant les informations de votre établissement.

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

### Etudiants

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

### Personnel

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

Administrer le service pour plusieurs établissements.

- Gestion des établissements et comptes de direction
- Indicateurs et paramètres de plateforme
- Paramètres techniques des paiements
- Sélection des ouvrages publics proposés

