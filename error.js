'use strict';
const retry=document.querySelector('[data-retry]');
if(retry)retry.addEventListener('click',()=>window.location.reload());
const networkStatus=document.getElementById('networkStatus');
if(networkStatus){function updateNetwork(){networkStatus.textContent=navigator.onLine?'La connexion semble rétablie. Vous pouvez réessayer.':'Votre appareil est actuellement hors connexion.';}window.addEventListener('online',updateNetwork);window.addEventListener('offline',updateNetwork);updateNetwork();}
