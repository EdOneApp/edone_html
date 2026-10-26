'use strict';
(()=>{
 const video=document.getElementById('edoneFilm');
 if(!video)return;
 const controls=document.getElementById('motionControls');
 const play=document.getElementById('motionPlay');
 const sound=document.getElementById('motionSound');
 const status=document.getElementById('motionStatus');
 const update=()=>{play.textContent=video.paused?'Lire la vidéo':'Mettre en pause';play.setAttribute('aria-label',video.paused?'Lire la vidéo de présentation':'Mettre la vidéo en pause');sound.textContent=video.muted?'Activer le son':'Couper le son';sound.setAttribute('aria-pressed',String(!video.muted));};
 video.muted=true;controls.hidden=false;update();
 play.addEventListener('click',async()=>{if(video.paused){try{await video.play();status.textContent='';}catch{status.textContent='La lecture n’a pas démarré. Utilisez les commandes du lecteur ou téléchargez la vidéo.';}}else video.pause();});
 sound.addEventListener('click',()=>{video.muted=!video.muted;update();});
 ['play','pause','ended','volumechange'].forEach(event=>video.addEventListener(event,update));
 video.addEventListener('error',()=>{status.textContent='La vidéo ne peut pas être chargée. La transcription reste disponible ci-dessous.';});
 if('IntersectionObserver' in window){new IntersectionObserver(entries=>{if(!entries[0].isIntersecting&&!video.paused)video.pause();},{threshold:0}).observe(video);}
 document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause();});
})();
