const body=document.body;
const themeButton=document.getElementById('themeToggle');
const savedTheme=localStorage.getItem('baru-theme');
const prefersDark=window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if(savedTheme==='dark'||(!savedTheme&&prefersDark)) body.classList.add('dark');
themeButton.addEventListener('click',()=>{
 body.classList.toggle('dark');
 localStorage.setItem('baru-theme',body.classList.contains('dark')?'dark':'light');
});
const toggle=document.getElementById('menuToggle'),nav=document.getElementById('navigation');
toggle.addEventListener('click',()=>{
 const opened=nav.classList.toggle('open');
 toggle.setAttribute('aria-expanded',String(opened));
 toggle.setAttribute('aria-label',opened?'Fechar menu':'Abrir menu');
});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
const progress=document.getElementById('progress'),header=document.querySelector('.site-header');
function onScroll(){
 const max=document.documentElement.scrollHeight-window.innerHeight;
 progress.style.width=(max>0?window.scrollY/max*100:0)+'%';
 header.classList.toggle('scrolled',window.scrollY>8);
}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
document.getElementById('year').textContent=new Date().getFullYear();
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const elements=document.querySelectorAll('.section-label,.about-grid>div,.service-card,.essence-intro,.values-grid article,.package-card,.contact-content,.contact-side');
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}),{threshold:.1});
 elements.forEach(el=>{el.classList.add('reveal');observer.observe(el)});
}
