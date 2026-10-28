# Médias vidéo EdOne

## Film actif — 28 octobre 2026

- Fichier publié : `edone-promo-60s-v2.mp4`.
- Source fournie : `edone-promo-60s-v2 (1).mp4`.
- Durée : **60,000 secondes**; 1920 × 1080, 30 images/s; H.264 yuv420p et audio AAC.
- Environ **46,2 Mio**. Les pistes audio et vidéo sont conservées sans réencodage; le conteneur MP4 est remuxé avec faststart.
- Affiche : `edone-promo-60s-v2-poster.jpg`, 1280 × 720, extraite à 6 secondes.

Le lecteur natif de l’accueil utilise les commandes du navigateur, `playsinline` et `preload="none"`. Il ne démarre pas automatiquement et conserve le son. Les métadonnées VideoObject, l’image de partage et le sitemap suivent cette version.

## Archives

`edone-pub-avec-son.mp4` est le précédent film de 30 secondes. Les fichiers `edone-presentation-*`, storyboard/minutage et `scripts/render-motion.py` concernent la présentation initiale. Ils restent archivés mais ne sont pas utilisés par le lecteur actuel. Les anciens sous-titres et textes ne sont pas appliqués au nouveau contenu.

## Remplacement ultérieur

Vérifier les codecs, la durée et la présence du son avec ffprobe. Utiliser une nouvelle URL de fichier pour éviter un ancien cache, extraire une affiche adaptée, puis mettre à jour `index.html`, `seo-config.json` et cette documentation. Relancer la synchronisation, le contrôle SEO et la vérification de lecture dans le navigateur.
