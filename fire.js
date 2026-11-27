(function(){var p=document.querySelector('.prism');var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(p&&!rm){var a=0;setInterval(function(){a+=120;p.style.transform='rotateX('+a+'deg)';},1800);}
var f=document.querySelector('.hfire'),h=document.querySelector('.whero');if(!f||!h)return;var t=0;
addEventListener('scroll',function(){if(t)return;t=requestAnimationFrame(function(){t=0;var k=Math.min(1,scrollY/(h.offsetHeight*.75));
f.style.opacity=1-k;f.style.transform=rm?'rotate(26deg)':'rotate(26deg) scale('+(1-k*.35)+')';});},{passive:true});})();
(function(){var n=document.querySelector('.nav');if(!n||!document.querySelector('.whero'))return;
function u(){n.classList.toggle('attop',scrollY<10);}u();addEventListener('scroll',u,{passive:true});})();

/* tap a gallery photo to see it large */
document.addEventListener('click',function(e){
  var im=e.target.closest&&e.target.closest('.jgrid img'); if(!im) return;
  var o=document.createElement('div'); o.className='lbx'; o.setAttribute('role','dialog'); o.setAttribute('aria-label',im.alt||'Photo');
  o.innerHTML='<img alt=""><button aria-label="Close">×</button>'; o.querySelector('img').src=im.currentSrc||im.src; o.querySelector('img').alt=im.alt;
  function close(){ o.classList.remove('on'); setTimeout(function(){o.remove();},200); document.removeEventListener('keydown',esc); }
  function esc(k){ if(k.key==='Escape') close(); }
  o.addEventListener('click',close); document.addEventListener('keydown',esc);
  document.body.appendChild(o); requestAnimationFrame(function(){o.classList.add('on');}); o.querySelector('button').focus();
});
