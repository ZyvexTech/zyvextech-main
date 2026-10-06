# -*- coding: utf-8 -*-
import io, re
p="index.html"; s=io.open(p,encoding="utf-8").read()
def rep(old,new,why,n=1):
    global s
    assert s.count(old)==n, (why, s.count(old))
    s = s.replace(old,new,n)

# ── dual-mode routing helpers, defined before the router ──────────────
rep("function router(){", """/* Routing works two ways from one source:
   path mode (the real site: /works/wolgan) and hash mode (#/works/wolgan),
   which the Artifact preview uses because it is served from a single URL.
   The production build simply omits the window.__ZYVEX_HASH__ flag.      */
var HASH_MODE = (typeof window !== 'undefined' && window.__ZYVEX_HASH__ === true);
function fixLinks(h){ return HASH_MODE ? h : h.replace(/href="#\\//g, 'href="/'); }
function currentPath(){
  if(HASH_MODE) return (window.location.hash || '#/').replace(/^#/, '') || '/';
  return window.location.pathname || '/';
}
function goTo(path, replace){
  if(HASH_MODE){
    if(replace) window.location.replace('#' + path); else window.location.hash = path;
    return;
  }
  if(replace) history.replaceState(null, '', path); else history.pushState(null, '', path);
  router();
}

function router(){""", "helpers")

rep("""  var hash = window.location.hash || '#/';
  var path = hash.replace(/^#/, '') || '/';
  var parts = path.split('/').filter(Boolean);""",
    """  var path = currentPath();
  var parts = path.split('/').filter(Boolean);""", "path")

rep("""    window.location.replace('#/works'); return;""", """    goTo('/works', true); return;""", "r1")
rep("""    window.location.replace('#/works/' + parts[1]); return;""", """    goTo('/works/' + parts[1], true); return;""", "r2")

rep("""  root.innerHTML = renderHeader(activeHref) + '<main>' + html + '</main>' + renderFooter();""",
    """  root.innerHTML = fixLinks(renderHeader(activeHref) + '<main>' + html + '</main>' + renderFooter());""", "fix")

rep("""window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);""",
    """window.addEventListener('hashchange', router);
window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', router);

/* In path mode, internal links are real hrefs that crawlers can follow,
   and clicks are intercepted so navigation stays instant. */
document.addEventListener('click', function(e){
  if(HASH_MODE) return;
  if(e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  var a = e.target && e.target.closest ? e.target.closest('a') : null;
  if(!a) return;
  var href = a.getAttribute('href');
  if(!href || href.charAt(0) !== '/' || a.getAttribute('target') === '_blank' || a.hasAttribute('download')) return;
  e.preventDefault();
  if(href !== currentPath()) goTo(href);
});""", "listeners")

io.open(p,"w",encoding="utf-8").write(s)
print("router patched")
