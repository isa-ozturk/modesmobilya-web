document.querySelectorAll('[data-nav-toggle]').forEach(function(btn){
btn.addEventListener('click',function(){
var nav=document.querySelector('[data-nav-links]');
if(nav)nav.classList.toggle('open');
});
});
document.querySelectorAll('[data-nav-links] a').forEach(function(a){
a.addEventListener('click',function(){
var nav=document.querySelector('[data-nav-links]');
if(nav)nav.classList.remove('open');
});
});
