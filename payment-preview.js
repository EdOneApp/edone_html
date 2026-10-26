'use strict';
(()=>{
 const checkout=document.getElementById('phoneCheckout');
 if(!checkout)return;
 const receipt=document.getElementById('phoneReceipt');
 const method=document.getElementById('phoneMethod');
 const methodNames={wave:'Wave',orange:'Orange Money',moov:'Moov Money',mtn:'MTN MoMo',djamo:'Djamo'};
 const radioButtons=[...document.querySelectorAll('input[name="payment_preview_provider"]')];
 const status=document.getElementById('phonePaymentStatus');
 radioButtons.forEach(radio=>radio.addEventListener('change',()=>{method.textContent=methodNames[radio.value];document.getElementById('phoneReceiptMethod').textContent=methodNames[radio.value];}));
 document.getElementById('phonePay').addEventListener('click',()=>{checkout.hidden=true;receipt.hidden=false;status.textContent='Reçu de démonstration affiché. Aucun paiement n’a été effectué.';document.getElementById('phoneRestart').focus({preventScroll:true});});
 function resetReceipt(){checkout.hidden=false;receipt.hidden=true;status.textContent='';}
 document.getElementById('phoneRestart').addEventListener('click',()=>{resetReceipt();radioButtons.find(r=>r.checked).focus({preventScroll:true});});
 document.getElementById('feeRange').addEventListener('input',resetReceipt);
})();
