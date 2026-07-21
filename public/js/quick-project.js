(function(){
var overlay=document.querySelector('[data-quick-modal]');
if(!overlay)return;
var form=overlay.querySelector('[data-quick-form]');
var sentEl=overlay.querySelector('[data-quick-sent]');
var blockedEl=overlay.querySelector('[data-quick-blocked]');
var errorEl=overlay.querySelector('[data-quick-error]');
var submitBtn=overlay.querySelector('[data-quick-submit]');
var openedAt=0;

function open(){
overlay.hidden=false;
form.hidden=false;sentEl.hidden=true;blockedEl.hidden=true;errorEl.hidden=true;
form.reset();
openedAt=Date.now();
}
function close(){overlay.hidden=true;}

document.querySelectorAll('[data-open-quick-modal]').forEach(function(btn){
btn.addEventListener('click',open);
});
overlay.querySelectorAll('[data-quick-close]').forEach(function(btn){
btn.addEventListener('click',close);
});
overlay.addEventListener('click',function(e){if(e.target===overlay)close();});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!overlay.hidden)close();});

form.addEventListener('submit',function(e){
e.preventDefault();
var data=new FormData(form);
if((data.get('company')||'').trim()!==''){form.hidden=true;sentEl.hidden=false;return;}
if(Date.now()-openedAt<2000){form.hidden=true;blockedEl.hidden=false;return;}
submitBtn.disabled=true;submitBtn.textContent='Gönderiliyor...';
errorEl.hidden=true;
sendFormEmail('Projenizi Konuşalım — Hızlı Talep ('+data.get('service')+')',{
'Ad Soyad':data.get('name'),'Telefon / E-posta':data.get('contact'),'Hizmet':data.get('service'),'Proje Özeti':data.get('summary')
}).then(function(r){
submitBtn.disabled=false;submitBtn.textContent='Talebi Gönder';
if(r.ok){form.hidden=true;sentEl.hidden=false;}else{errorEl.hidden=false;}
});
});

blockedEl.querySelectorAll('[data-retry]').forEach(function(b){b.addEventListener('click',function(){blockedEl.hidden=true;form.hidden=false;openedAt=Date.now();});});
sentEl.querySelectorAll('[data-retry]').forEach(function(b){b.addEventListener('click',function(){sentEl.hidden=true;form.hidden=false;form.reset();openedAt=Date.now();});});
})();
