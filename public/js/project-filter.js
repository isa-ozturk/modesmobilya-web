(function(){
var buttons=document.querySelectorAll('[data-filter]');
var cards=document.querySelectorAll('[data-category]');
if(!buttons.length)return;
buttons.forEach(function(btn){
btn.addEventListener('click',function(){
buttons.forEach(function(b){b.classList.remove('active');});
btn.classList.add('active');
var f=btn.getAttribute('data-filter');
cards.forEach(function(c){
c.hidden = f!=='Tümü' && c.getAttribute('data-category')!==f;
});
});
});
})();
