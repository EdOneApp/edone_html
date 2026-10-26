'use strict';
(()=>{
 const video=document.getElementById('edoneFilm');
 if(!video)return;
 const status=document.getElementById('motionStatus');
 video.addEventListener('error',()=>{status.hidden=false;status.textContent='La vidéo ne peut pas être chargée. Réessayez dans quelques instants.';});
 if('IntersectionObserver' in window){new IntersectionObserver(entries=>{if(!entries[0].isIntersecting&&!video.paused)video.pause();},{threshold:0}).observe(video);}
 document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause();});
})();
