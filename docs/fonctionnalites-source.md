# Catalogue fonctionnel EdOne — 29 octobre 2026

`modules.json` et `docs/roles.json` sont les sources éditoriales. `scripts/sync-content.py` les applique à l’index, à la recherche et au guide `fonctionnalites.html`.

**155 fiches, 15 familles et 19 profils.** Rapprochement avec le projet Django EdOne : les évolutions depuis `c8fee3f`, dont `6f889c4`, et le transport WebSocket livré par `eb2244f`. Les fonctionnalités dépendent des droits et de la configuration de l’école; les crédits EdoneSMS sont distincts des abonnements.

Installation unique : 250 000 FCFA. EdoneSMS : 10 FCFA par SMS normalisé de 160 caractères au plus. Le support intégré n’ajoute pas de facturation par message; l’hébergement du service reste à la charge de la plateforme.

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
- **15 — CV étudiant et partage public** : Créez un CV structuré avec parcours, expériences, réalisations, compétences et centres d’intérêt; partagez son lien public et téléchargez-le en PDF.
- **16 — Vérification en ligne** : Documents officiels par code unique.
- **61 — Évaluations à nombre variable** : Nombre libre d’évaluations par matière, barèmes, coefficients, sessions, imports Excel contrôlés et historique des corrections.
- **62 — Crédits et compensation des UE** : Configurez les crédits, coefficients et règles de compensation pour les parcours universitaires et professionnels.
- **63 — Progressions pédagogiques** : Suivez l’avancement des enseignements et les progressions des équipes pédagogiques.
- **64 — Personnalisation des documents scolaires** : Retrouvez le logo, les couleurs et les informations de votre établissement sur les documents prévus.
- **148 — CV enrichi et saisie progressive** : Ajoutez votre parcours académique, vos expériences, réalisations, compétences et centres d’intérêt. Enregistrez le titre et la présentation avant de compléter les autres rubriques.

## Documents

- **17 — Bulletins PDF** : Génération de bulletins téléchargeables au format PDF.
- **18 — Procès-verbaux PDF** : Génération de PV semestriels et annuels au format PDF.
- **19 — Diplômes et certificats en masse** : Production des diplômes et certificats par session de délivrance.
- **20 — Attestations officielles** : Attestations de réussite, d’admission et de scolarité, vérifiables par lien public.
- **21 — Reçus automatiques** : Transmission du reçu de chaque paiement par SMS et e-mail.
- **22 — Exports Excel et PDF** : Export des données pédagogiques pour les équipes de l’établissement.
- **102 — Fiche établissement PDF** : Téléchargez une fiche regroupant les informations de votre établissement.
- **145 — Téléchargement direct des documents PDF** : Téléchargez les documents personnels disponibles depuis l’espace étudiant, notamment notes, carte, CV, reçus et certificats, avec une mise en page adaptée.
- **146 — Notes au format PDF paysage** : Retrouvez les notes dans un document paysage lisible, avec le logo de l’établissement et la photo de l’étudiant.
- **147 — Identité visuelle des documents étudiants** : Les documents personnels intègrent les informations de l’école, son logo, un filigrane et la photo de l’étudiant selon le document. Les supports de cours restent sans portrait étudiant.
- **149 — CV public et PDF professionnel** : Partagez un CV consultable sans connexion, dans une page dédiée, et proposez son téléchargement avec une véritable mise en page de CV.
- **150 — QR codes de vérification des documents** : Les liens et QR codes des documents officiels concernés ouvrent une page de vérification EdOne permettant de contrôler leur existence et leur statut.

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
- **151 — Reprise des paiements en cours** : Retrouvez une demande de paiement déjà initiée, consultez son état et reprenez son suivi sans créer une nouvelle tentative en double.

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

- **41 — Campagnes multicanales** : Préparez une campagne dans un formulaire unique, choisissez email, SMS EdoneSMS et notification dans l’application, prévisualisez puis lancez l’envoi.
- **42 — Notifications et suivi de lecture** : Annonces et modèles de notification pour les différents profils, avec boîte de réception, cloche, messages non lus et suivi de lecture.
- **43 — Alertes d’absence** : Les parents et étudiants reçoivent les notifications d’absence.
- **44 — Envoi des documents** : Communication des bulletins et diplômes par e-mail et notifications par SMS.
- **45 — Contact et support WhatsApp** : Un canal de contact pour échanger avec l’équipe EdOne.
- **127 — Notifications dans l’application** : Diffusez des messages complets, sans limite de longueur propre au canal in-app, aux étudiants, parents, enseignants et personnels concernés.
- **128 — Cloche et notifications non lues** : Un compteur, une cloche animée lorsque des messages attendent et le marquage comme lu à l’ouverture accompagnent la boîte de réception.
- **129 — Ciblage académique progressif** : Filtrez les destinataires par année, filière, niveau, classe et personnes précises; les choix suivants s’adaptent aux filtres déjà appliqués.
- **130 — Variables et messages personnalisés** : Insérez les noms, prénoms, classes, filières, niveaux, montants de scolarité ou résultats disponibles dans le sujet et le message, avec aperçu avant diffusion.
- **131 — Modèles de campagnes prêts à adapter** : Préparez les annonces, urgences, rappels de scolarité, examens, cours, absences, événements et autres communications à partir de modèles modifiables.
- **132 — Portefeuille de crédits EdoneSMS** : Chaque établissement dispose de ses SMS disponibles, réservés et consommés, avec un journal des mouvements. Un SMS normalisé coûte 10 FCFA.
- **133 — Demandes de recharge SMS** : Demandez des crédits depuis votre espace et suivez leur validation par EdOne, avec le mode de règlement, sa référence et l’historique.
- **134 — Nom d’expéditeur de l’établissement** : Demandez un Sender ID au nom de votre école. Sa validation, contrôlée par l’équipe EdOne, nécessite un délai d’au moins une semaine.
- **135 — Bases de contacts SMS indépendantes** : Organisez plusieurs listes de contacts, recherchez une personne, ajoutez ou corrigez ses informations, excluez un contact et archivez une base.
- **136 — Modèle Excel de contacts téléchargeable** : Téléchargez un vrai modèle Excel et importez jusqu’à cinq colonnes, téléphone compris, pour préparer vos bases de communication.
- **137 — Aperçu et contrôle des imports** : Consultez les lignes valides, invalides et en doublon, avec les motifs, puis confirmez explicitement l’import des contacts retenus.
- **138 — Numéros locaux et internationaux** : Choisissez le pays de la liste. Les numéros avec ou sans indicatif international sont interprétés, normalisés et vérifiés avant leur utilisation.
- **139 — Campagnes sur les contacts importés** : Sélectionnez une ou plusieurs bases, utilisez les colonnes comme variables et vérifiez des exemples personnalisés ainsi que le coût avant l’envoi.
- **140 — SMS maîtrisés à 160 caractères** : Après personnalisation, accents et caractères incompatibles sont normalisés et le texte est limité à 160 caractères pour correspondre à un crédit SMS.
- **141 — Suivi des campagnes et des livraisons** : Distinguez les messages en attente, acceptés, livrés, refusés ou à vérifier. Les campagnes sont traitées en arrière-plan et les résultats incertains sont rapprochés sans renvoi automatique.
- **152 — Support live intégré** : Contactez l’équipe EdOne depuis un bouton de chat flottant dans votre espace. Les nouveaux messages arrivent par WebSocket, avec reconnexion automatique.
- **153 — Conversations privées et historique** : Échangez dans une conversation réservée au demandeur et au support EdOne, avec historique, messages non lus et accusés de lecture. Une demande résolue peut être reprise.

## Sécurité

- **46 — Isolation multi-établissement** : Données isolées et accès cloisonnés par établissement.
- **47 — Connexions HTTPS** : Chiffrement des échanges entre votre navigateur et la plateforme via HTTPS.
- **48 — Mots de passe hashés** : Les mots de passe sont conservés sous forme de hash pour protéger les accès.
- **49 — Double authentification** : Double authentification obligatoire pour le pilotage de la plateforme et accès aux opérations sensibles selon les habilitations.
- **50 — Sauvegardes et restauration** : Sauvegardes chiffrées de la base et des fichiers privés, stockage hors site et exercices de restauration selon la configuration du service.
- **51 — Conformité RGPD** : Traitement et conservation des données dans le cadre des exigences RGPD.
- **52 — Traçabilité complète** : Actions horodatées et attribuées, notamment les paiements et modifications de notes.
- **53 — Environnement cloisonné** : Chaque établissement dispose de son propre périmètre de données et d’accès.
- **125 — OTP parent selon la politique de l’école** : L’établissement peut activer la vérification par code SMS pour les parents. Les codes utilisent ses crédits EdoneSMS; un manque de crédits ne permet pas de contourner une vérification activée.

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
- **142 — Didacticiels interactifs par profil** : Découvrez l’application avec des visites guidées, repères, étapes et explications adaptés à votre profil sur ordinateur, tablette et téléphone.
- **143 — Aide des pages, champs et actions** : Retrouvez les explications des écrans et des actions disponibles, reprenez un guide et avancez à votre rythme selon les droits de votre compte.
- **144 — Tableau de bord étudiant par services** : Retrouvez les destinations autorisées de votre menu sous forme de cartes illustrées, organisées par catégorie et aux couleurs de votre école.

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
- **116 — Configuration des paiements par école** : Centralisez le magasin EdonePay de chaque établissement, sa configuration sécurisée, son URL de confirmation des paiements et les contrôles avant activation.
- **117 — KPI globaux et annuels** : Suivez les établissements, utilisateurs, étudiants inscrits, comptes professionnels provisionnés, abonnements et indicateurs financiers.
- **118 — Carte et répertoire des établissements** : Consultez les écoles en cartes ou en tableau et visualisez leur localisation lorsqu’elle est renseignée.
- **119 — Incidents et qualité de service** : Suivez les anomalies, leur récurrence et leur résolution, ainsi que les contrôles et preuves de préparation du service.
- **154 — Boîte de réception du support** : Recevez les demandes des différents profils, recherchez une personne ou une école, répondez directement, attribuez une conversation et suivez sa résolution.
- **155 — Pilotage global EdoneSMS** : Contrôlez les demandes de recharge et de Sender ID, les règlements, les crédits et les résultats des campagnes par établissement depuis le superdashboard.

## Validation

Les deux pages sont régénérées depuis les mêmes sources. Contrôles de contenu, liens, icônes et SEO, puis vérification navigateur sur ordinateur et mobile. Le site vitrine ne reçoit pas de conversations privées: le support vit dans l’application authentifiée.
