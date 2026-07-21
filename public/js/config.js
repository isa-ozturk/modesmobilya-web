// TODO(site owner): create a free access key at https://web3forms.com (tied to your inbox) and paste it here.
var WEB3FORMS_ACCESS_KEY = 'REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY';

function sendFormEmail(subject, fields){
var body = Object.assign({access_key:WEB3FORMS_ACCESS_KEY, subject:subject, from_name:'Modes Mobilya Web Sitesi'}, fields);
return fetch('https://api.web3forms.com/submit',{
method:'POST',
headers:{'Content-Type':'application/json',Accept:'application/json'},
body:JSON.stringify(body)
}).then(function(r){return r.json();}).then(function(data){return {ok:!!data.success,data:data};}).catch(function(err){return {ok:false,error:err};});
}
