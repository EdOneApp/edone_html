# Site vitrine EdOne

Site statique de présentation d’EdOne, publié depuis ce dépôt sur GitHub Pages. Domaine configuré : [edone.my](https://edone.my). Le projet Django est maintenu séparément dans `EdOneApp/edone`.

## État du 29 octobre 2026

- **155 fiches de fonctionnalités**, 15 familles et 19 profils détaillés.
- Sept profils en avant sur l’accueil, dont le nouveau profil **Fondateurs & groupes**.
- Ajouts issus du projet Django : Multisite, dossiers et comparaisons des écoles, années académiques, statistiques par campus, pilotage plateforme, suivi de formation, OTP parent, évolutions d’abonnement, avoirs et relances.
- Nouveautés du 29 octobre : EdoneSMS et crédits, contacts Excel, campagnes multicanales, support live, didacticiels, CV enrichi et documents PDF étudiants.
- Installation unique de **250 000 FCFA** conservée, distincte des forfaits mensuels.
- Nouvelle vidéo fournie : **60 secondes**, 1920 × 1080, H.264/AAC, 30 images/s, environ 46,2 Mio. Vidéo et son conservés sans réencodage; conteneur optimisé pour le chargement progressif.

## Structure et sources

| Fichier | Usage |
| --- | --- |
| `index.html` | Accueil, profils, film, catalogue filtrable, tarifs et démonstration WhatsApp |
| `fonctionnalites.html` | Guide complet, lisible sans JavaScript |
| `modules.json` | Source des fiches fonctionnelles |
| `docs/roles.json` | Descriptions et capacités par profil |
| `docs/fonctionnalites-source.md` | Référence éditoriale et rapprochement avec les ajouts Django |
| `app.js` | Copie synchronisée du catalogue, profils, recherche et interactions |
| `partials/footer.html` | Navigation commune appliquée aux 20 pages publiques |
| `seo-config.json` | Titres, descriptions, vidéo et images de partage |
| `styles.css`, `guide.css` | Identité visuelle et adaptations écran/impression |
| `motion.js` | Gestion légère du lecteur vidéo |

Les aperçus MacBook/iPhone et paiement utilisent des données illustratives, sans opération de paiement ni collecte d’identifiants. Les photos illustratives ne sont pas des captures d’un établissement réel. Les ressources et fonctionnalités commerciales sont accessibles selon l’offre et les habilitations.

## Vidéo active

`media/edone-promo-60s-v2.mp4` remplace le précédent film dans `#film`. La source fournie est `edone-promo-60s-v2 (1).mp4`. L’affiche est `media/edone-promo-60s-v2-poster.jpg`. Le lecteur reste natif, avec son, sans autoplay et avec `preload="none"` pour charger à la demande. Les métadonnées et le sitemap indiquent 60 secondes et la nouvelle URL.

Les vidéos précédentes et les fichiers de la première présentation sont conservés comme archives; leurs sous-titres et transcriptions ne sont pas rattachés au nouveau film. Voir [media/README.md](media/README.md).

## Modifier le catalogue

1. Modifier `modules.json` ou `docs/roles.json`, en conservant les identifiants existants.
2. Exécuter la synchronisation depuis la racine :

```sh
python3 scripts/sync-content.py
python3 scripts/check-seo.py
python3 scripts/check-icons.py
python3 scripts/check-content.py
```

La synchronisation reconstruit les deux catalogues, les filtres, les profils de l’accueil, le footer et les métadonnées. Les dernières familles conservent leurs ancres `famille-14` (Multisite) et `famille-15` (pilotage). Mettre également à jour le document fonctionnel lors d’un changement éditorial.

Pour un footer seul : `python3 scripts/update-footer.py`. Pour une modification de référencement : modifier `seo-config.json`, puis `python3 scripts/update-seo.py`. Les grandes photos disposent de variantes WebP avec repli JPEG.

## Prévisualiser et publier

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Ouvrir http://localhost:4173 et tester aussi le guide, les filtres, les profils, la lecture vidéo et les petits écrans. Aucune étape de build JavaScript n’est nécessaire. Les polices Google nécessitent une connexion; des polices système prennent le relais.

Après vérification, committer et pousser sur `main`. Le déploiement GitHub Pages est distinct du déploiement du projet Django. Les fichiers macOS et captures de prévisualisation ne sont pas publiés.

## Référencement, contact et pages légales

Adresse officielle de contact affichée sur le site : [admin@edone.my](mailto:admin@edone.my). La valeur des données structurées est maintenue dans `seo-config.json`.

Cinq pages canoniques indexables et quinze pages d’erreur/maintenance hors index, avec JSON-LD et sitemap images/vidéo. Voir [la procédure SEO](docs/seo-operations.md). Le formulaire prépare une demande WhatsApp; il ne stocke pas de dossier dans Django.

Les pages [mentions légales](mentions-legales/index.html), [confidentialité](confidentialite/index.html) et [CGU](cgu/index.html) concernent le site vitrine. Les éléments d’identité juridique restant à compléter figurent dans [les notes éditoriales](docs/legal-editorial-notes.md). Une page statique `maintenance.html` ou `offline.html` n’active pas une maintenance serveur ou un cache hors connexion.

## Visuels de campagne

L’accueil utilise huit affiches dans quatre ensembles : `#ecoles-connectees` après la présentation de la solution, `#campus-connectes` après les profils, `#quotidien` pour les parents et étudiants, et `#parrainage` pour les apporteurs d’affaires. Les variantes WebP/JPEG 560/1120 pixels sont dans `images/campagnes/`. Les images restent entières, avec liens d’agrandissement, dimensions explicites et chargement différé. Aucun carrousel ni script supplémentaire. Ces sections sont conservées par `scripts/sync-content.py`, car elles sont hors des blocs générés du catalogue et des profils. Voir `images/ASSETS.md` pour leur provenance.
