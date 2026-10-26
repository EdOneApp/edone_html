# Référencement EdOne

## Ce qui est livré

- Cinq pages canoniques indexables : accueil, guide complet, mentions légales, confidentialité et CGU. Les quinze pages d’erreur, de maintenance et hors connexion portent `noindex, follow` ; elles ne figurent pas dans le sitemap.
- Titres et descriptions spécifiques, canonical HTTPS, langue française, Open Graph et cartes de partage, favicons carrés, icône Apple et manifeste web.
- JSON-LD : Organization, WebSite, WebPage, Service et offres mensuelles, VideoObject, BreadcrumbList sur les pages secondaires. Aucun avis, note client ou numéro d’immatriculation n’a été inventé. Aucun résultat enrichi n’est garanti. Le film est secondaire sur l’accueil, et sa présence dans les résultats vidéo dépend des critères de Google.
- `robots.txt`, `sitemap.xml` avec cinq URL, six images et le film. Les sections avec ancres ne sont pas des pages indépendantes et ne sont pas ajoutées comme URL au sitemap.
- Catalogue complet rendu dans le HTML initial, liens internes vers l’URL principale `/`, variantes WebP avec repli JPEG pour les grandes photos, scripts différés et images secondaires chargées à la demande.
- HTTPS obligatoire activé dans GitHub Pages, sans changement de domaine ni de source de publication.

## Mise à jour

La configuration éditoriale se trouve dans `seo-config.json`.

```sh
python3 scripts/sync-content.py
python3 scripts/check-seo.py
```

La synchronisation du catalogue et celle du footer régénèrent automatiquement les métadonnées et le sitemap. Une génération directe est possible avec `python3 scripts/update-seo.py`. Les dates `lastmod` sont conservées lorsque le contenu de la page ne change pas, grâce aux empreintes enregistrées dans `docs/seo-state.json`.

Pour régénérer les variantes WebP après remplacement des JPEG : `python3 scripts/optimize-images.py` (Pillow requis). Les originaux restent intacts.

## Google Search Console

Le propriétaire indique que le domaine est déjà validé. L’accès au navigateur de ce chat demande encore une connexion Google ; aucune soumission depuis Search Console n’a donc été confirmée pendant cette intervention.

Dans la propriété `edone.my`, ouvrir **Sitemaps**, puis envoyer :

```text
https://edone.my/sitemap.xml
```

Après traitement, vérifier le statut et les URL découvertes. Utiliser **Inspection de l’URL** pour vérifier l’accueil et le guide, puis demander leur indexation si nécessaire. Une réponse positive du site ou un sitemap valide ne garantit pas que Google indexera chaque page ni un classement donné. La soumission peut aussi être détectée grâce à la directive Sitemap de `robots.txt`.

Aucun faux jeton de vérification n’a été ajouté. Aucun ancien endpoint de ping Google n’est utilisé.

## Contrôles publics

- https://edone.my/robots.txt
- https://edone.my/sitemap.xml
- https://search.google.com/search-console/sitemaps?resource_id=sc-domain%3Aedone.my
- https://search.google.com/test/rich-results?url=https%3A%2F%2Fedone.my%2F

## Références primaires consultées

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/fundamentals/get-started-developers
- https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.google.com/search/docs/appearance/structured-data/video
- https://docs.github.com/en/rest/pages/pages#update-information-about-a-github-pages-site

Un bon positionnement dépend aussi de contenus utiles, de preuves réelles d’usage, de la réputation et de liens éditoriaux légitimes. Les ajouts techniques ne permettent pas de promettre la première place sur Google.
