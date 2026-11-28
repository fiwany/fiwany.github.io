(function(){var p=document.querySelector('.prism');var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(p&&!rm){var a=0;setInterval(function(){a+=120;p.style.transform='rotateX('+a+'deg)';},1800);}
var f=document.querySelector('.hfire'),h=document.querySelector('.whero');if(!f||!h)return;var t=0;
addEventListener('scroll',function(){if(t)return;t=requestAnimationFrame(function(){t=0;var k=Math.min(1,scrollY/(h.offsetHeight*.75));
f.style.opacity=1-k;f.style.transform=rm?'rotate(26deg)':'rotate(26deg) scale('+(1-k*.35)+')';});},{passive:true});})();
(function(){var n=document.querySelector('.nav');if(!n||!document.querySelector('.whero'))return;
function u(){n.classList.toggle('attop',scrollY<10);}u();addEventListener('scroll',u,{passive:true});})();


/* editor tool: tapping a step highlights it and brings its columns into view */
document.addEventListener('click',function(e){var st=e.target.closest&&e.target.closest('.toolwrap .tstep');if(!st)return;var w=st.closest('.toolwrap');w.dataset.hl=st.dataset.r;var th=w.querySelector('.xl th.'+st.dataset.r),sc=w.querySelector('.sheetscroll');if(th&&sc)sc.scrollTo({left:Math.max(0,th.offsetLeft-8),behavior:'smooth'});});
