/* tap a gallery photo to see it large (bound directly so iOS Safari fires the tap) */
(function(){
function open(e){
  var im=e.currentTarget; e.preventDefault();
  var o=document.createElement('div'); o.className='lbx'; o.setAttribute('role','dialog'); o.setAttribute('aria-label',im.alt||'Photo');
  o.innerHTML='<img alt=""><button type="button" aria-label="Close">×</button>';
  var big=o.querySelector('img'); big.src=im.currentSrc||im.src; big.alt=im.alt||'';
  function close(){ o.classList.remove('on'); setTimeout(function(){o.remove();},200); document.removeEventListener('keydown',esc); }
  function esc(k){ if(k.key==='Escape') close(); }
  o.addEventListener('click',close); document.addEventListener('keydown',esc);
  document.body.appendChild(o); requestAnimationFrame(function(){o.classList.add('on');}); o.querySelector('button').focus();
}
function bind(root){ (root||document).querySelectorAll('.jgrid img').forEach(function(im){ if(im.dataset.lbx) return; im.dataset.lbx=1; im.setAttribute('tabindex','0'); im.addEventListener('click',open); im.addEventListener('keydown',function(k){ if(k.key==='Enter') open(k); }); }); }
window.fwZoom=bind;
if(document.readyState!=='loading') bind(); else document.addEventListener('DOMContentLoaded',function(){bind();});
new MutationObserver(function(){bind();}).observe(document.documentElement,{childList:true,subtree:true});
})();
