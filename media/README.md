# Vidéo actuellement publiée

- `edone-pub-avec-son.mp4` : 30 secondes, 1920 × 1080, H.264 + AAC, environ 9,2 Mo.
- `edone-pub-poster.jpg` : image d’affiche extraite à 2 secondes, 1280 × 720.
- Source vidéo fournie : `edone-pub-16x9-sans-son.mp4`.
- Source audio fournie : `luvvoice.com-20261026-SVrp9Q.mp3`, environ 25,224 secondes.

L’audio commence au début, puis le film se termine sans son. La vidéo source est conservée sans réencodage. Le lecteur n’utilise pas la transcription ni les sous-titres de l’ancienne version.

## Archive de la première présentation

# Présentation EdOne

Film original de 34,58 secondes, 1280 × 720, 24 images/s, H.264 et audio AAC 44,1 kHz. Les photos du site sont mises en mouvement avec des textes et éléments graphiques. Il ne s’agit pas d’images de clients réels ni de captures de l’application en production.

La narration utilise la voix de synthèse française Thomas de macOS. La composition musicale est synthétisée par `scripts/render-motion.py` ; aucun enregistrement musical tiers n’est utilisé. Le son est normalisé à −16 LUFS, avec un plafond cible de −1,5 dBTP.

Fichiers livrés : MP4, affiche JPEG, sous-titres français WebVTT, storyboard et minutage. Le lecteur natif ne démarre pas automatiquement ; il est muet par défaut et ne sauvegarde pas de préférence. Une transcription HTML reste disponible sans lecture.

Pour régénérer sur macOS : Pillow et FFmpeg doivent être installés ; lancer `python3 scripts/render-motion.py`. Les voix intermédiaires sont créées dans `/private/tmp` avec `say` si elles sont absentes. L’accès au service de synthèse vocale peut nécessiter une autorisation hors du sandbox.
