(function(){
var form=document.querySelector('[data-contact-form]');
if(!form)return;
var sentEl=document.querySelector('[data-contact-sent]');
var blockedEl=document.querySelector('[data-contact-blocked]');
var errorEl=document.querySelector('[data-contact-error]');
var submitBtn=document.querySelector('[data-contact-submit]');
var mountedAt=Date.now();

form.addEventListener('submit',function(e){
e.preventDefault();
var data=new FormData(form);
if((data.get('company')||'').trim()!==''){form.hidden=true;sentEl.hidden=false;return;}
if(Date.now()-mountedAt<2500){form.hidden=true;blockedEl.hidden=false;return;}
submitBtn.disabled=true;submitBtn.textContent='Gönderiliyor...';
errorEl.hidden=true;
sendFormEmail('Genel İletişim Formu — '+data.get('service'),{
'Ad Soyad':data.get('name'),'Telefon':data.get('phone'),'İlgilenilen Hizmet':data.get('service'),'Mesaj':data.get('message')
}).then(function(r){
submitBtn.disabled=false;submitBtn.textContent='Mesajı Gönder';
if(r.ok){form.hidden=true;sentEl.hidden=false;}else{errorEl.hidden=false;}
});
});

document.querySelectorAll('[data-retry]').forEach(function(b){
b.addEventListener('click',function(){
sentEl.hidden=true;blockedEl.hidden=true;form.hidden=false;form.reset();mountedAt=Date.now();
});
});
})();
