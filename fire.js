(function(){var p=document.querySelector('.prism');var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(p&&!rm){var a=0;setInterval(function(){a+=120;p.style.transform='rotateX('+a+'deg)';},1800);}
var f=document.querySelector('.hfire'),h=document.querySelector('.whero');if(!f||!h)return;var t=0;
addEventListener('scroll',function(){if(t)return;t=requestAnimationFrame(function(){t=0;var k=Math.min(1,scrollY/(h.offsetHeight*.75));
f.style.opacity=1-k;f.style.transform=rm?'rotate(26deg)':'rotate(26deg) scale('+(1-k*.35)+')';});},{passive:true});})();
(function(){var n=document.querySelector('.nav');if(!n||!document.querySelector('.whero'))return;
function u(){n.classList.toggle('attop',scrollY<10);}u();addEventListener('scroll',u,{passive:true});})();

