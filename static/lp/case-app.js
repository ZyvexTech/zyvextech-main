/* Case-study pages: scroll reveal and founder video.
   Imported from the landing site's assets/app.js with the Meta Pixel removed. */
var CONFIG = { FOUNDER_VIDEO: "", FOUNDER_POSTER: "" };
function initFounderVideo(){
  var v = document.getElementById('founder-video'), empty = document.getElementById('video-empty');
  if(!v || !CONFIG.FOUNDER_VIDEO) return;
  v.src = CONFIG.FOUNDER_VIDEO;
  if(CONFIG.FOUNDER_POSTER) v.poster = CONFIG.FOUNDER_POSTER;
  if(empty) empty.style.display = 'none';
}
function initReveal(){
  var els = document.querySelectorAll('.rv');
  if(!els.length) return;
  if(!('IntersectionObserver' in window)){
    Array.prototype.forEach.call(els, function(el){ el.classList.add('in'); });
    return;
  }
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); obs.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  Array.prototype.forEach.call(els, function(el){ obs.observe(el); });
}
document.addEventListener('DOMContentLoaded', function(){ initFounderVideo(); initReveal(); });
