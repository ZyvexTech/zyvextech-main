import io
p = "index.html"
s = io.open(p, encoding="utf-8").read()

# ── 1. CSS ────────────────────────────────────────────────────────────
anchor_css = "@media(prefers-reduced-motion:reduce)"
assert s.count(anchor_css) == 1
CSS = """
/* ── Services index: sticky-rail layout ─────────────────────── */
.svc-hero{text-align:center}
.svc-hero .hero-title,.svc-hero p{margin-left:auto;margin-right:auto}
.svc-statement{font-family:'Runalto',Georgia,serif;font-size:clamp(28px,3.9vw,50px);line-height:1.16;max-width:900px;text-wrap:balance}
.svc-layout{display:grid;grid-template-columns:1fr;gap:56px;align-items:start}
@media(min-width:1000px){.svc-layout{grid-template-columns:minmax(0,1fr) 296px;gap:72px}}
.svc-block{border-top:1px solid var(--line);padding:56px 0;scroll-margin-top:110px}
.svc-block:first-child{border-top:none;padding-top:0}
.svc-block-head{display:flex;align-items:center;justify-content:space-between;gap:20px}
.svc-num{font-size:13px;letter-spacing:.14em;color:var(--faint)}
.svc-name{font-family:'Runalto',Georgia,serif;font-size:clamp(28px,3.4vw,40px);line-height:1.08;margin-top:24px;letter-spacing:-.01em}
.svc-tag{margin-top:8px;font-size:14px;font-style:italic;color:var(--faint)}
.svc-desc{margin-top:20px;max-width:640px;font-size:15px;line-height:1.7;color:var(--muted)}
.svc-deliverables{list-style:none;margin-top:28px;display:grid;grid-template-columns:1fr;gap:11px 28px}
@media(min-width:600px){.svc-deliverables{grid-template-columns:1fr 1fr}}
@media(min-width:1280px){.svc-deliverables{grid-template-columns:1fr 1fr 1fr}}
.svc-deliverables li{display:flex;align-items:flex-start;gap:10px;font-size:14px;line-height:1.45;color:var(--muted)}
.svc-deliverables li::before{content:'';width:5px;height:5px;border-radius:50%;background:var(--teal2);flex:0 0 auto;margin-top:7px}
.svc-ideal{margin-top:28px;border-left:2px solid var(--teal2);padding-left:18px;max-width:600px;font-size:14px;line-height:1.6;color:var(--faint)}
.svc-ideal b{display:block;font-weight:600;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--teal2);margin-bottom:8px}
.svc-rail{display:none}
@media(min-width:1000px){.svc-rail{display:block}}
.svc-rail-inner{position:sticky;top:96px;border:1px solid var(--line);padding:26px 22px}
.svc-rail-title{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--faint)}
.svc-rail ol{list-style:none;margin-top:16px}
.svc-rail button{display:flex;align-items:flex-start;gap:12px;width:100%;text-align:left;background:none;border:none;
  border-bottom:1px solid var(--line);cursor:pointer;padding:10px 0;font-size:13.5px;line-height:1.35;color:var(--muted);transition:color .15s}
.svc-rail li:last-child button{border-bottom:none}
.svc-rail button:hover{color:var(--ink)}
.svc-rail button.active{color:var(--ink)}
.svc-rail button.active .rn{color:var(--teal2)}
.svc-rail .rn{font-size:11.5px;letter-spacing:.06em;color:var(--faint);flex:0 0 auto;width:18px;padding-top:2px;transition:color .15s}
.svc-rail-cta{display:block;margin-top:22px;border-top:1px solid var(--line);padding-top:20px;font-size:13px;
  text-transform:uppercase;letter-spacing:.06em;color:var(--teal2)}
.svc-rail-cta:hover{color:var(--ink)}

"""
s = s.replace(anchor_css, CSS + anchor_css, 1)

# ── 2. pageServices ───────────────────────────────────────────────────
start = s.index("function pageServices(){")
end = s.index("/* ── Service detail ──")
NEW = '''function pageServices(){
  var blocks = SERVICES.map(function(sv){
    var dl = sv.deliverables.map(function(d){ return '<li>'+d+'</li>'; }).join('');
    return ''
    + '<article class="svc-block" id="svc-'+sv.slug+'">'
    +   '<div class="svc-block-head">'+iconBox(sv.icon, '', 20)+'<span class="svc-num">'+sv.number+'</span></div>'
    +   '<h2 class="svc-name">'+sv.name+'<span class="dot">.</span></h2>'
    +   '<p class="svc-tag">'+sv.tagline+'</p>'
    +   '<p class="svc-desc">'+sv.description+'</p>'
    +   '<ul class="svc-deliverables">'+dl+'</ul>'
    +   '<p class="svc-ideal"><b>Ideal for</b>'+sv.idealFor+'</p>'
    +   '<a href="#/services/'+sv.slug+'" class="btn btn-outline-teal" style="margin-top:32px">Explore '+sv.name+' <span aria-hidden="true">&#8599;</span></a>'
    + '</article>';
  }).join('');

  var railItems = SERVICES.map(function(sv){
    return '<li><button type="button" data-jump="svc-'+sv.slug+'"><span class="rn">'+sv.number+'</span><span>'+sv.name+'</span></button></li>';
  }).join('');

  return ''
  + '<section class="hero-section">'
  +   gridLines(false)
  +   '<div class="wrap svc-hero" style="position:relative">'
  +     eyebrow('Our Services')
  +     '<h1 class="hero-title balance" style="margin-top:24px;max-width:820px">Our Services<span class="dot">.</span></h1>'
  +     '<p class="muted" style="margin-top:24px;max-width:620px;font-size:17px;line-height:1.6">A connected suite of consulting, implementation, and performance marketing services &mdash; from the first process audit to a fully wired growth system.</p>'
  +   '</div>'
  + '</section>'

  + '<section class="section-teal">'
  +   gridLines(true)
  +   '<div class="wrap" style="position:relative">'
  +     '<p class="kicker" style="color:rgba(3,15,13,.6)">Ten Pillars &middot; One Team</p>'
  +     '<h2 class="svc-statement" style="margin-top:24px">Not a menu of scattered services. One system &mdash; audited before it is built, and run by the people who built it.</h2>'
  +     '<p style="margin-top:24px;max-width:520px;font-size:15px;line-height:1.6;color:rgba(244,242,236,.82)">Every pillar below can stand alone. Most of our work is two or three of them wired together, in the order the audit says they matter.</p>'
  +   '</div>'
  + '</section>'

  + '<section class="section">'
  +   '<div class="wrap svc-layout">'
  +     '<div>'+blocks+'</div>'
  +     '<aside class="svc-rail">'
  +       '<div class="svc-rail-inner">'
  +         '<p class="svc-rail-title">All Services</p>'
  +         '<ol>'+railItems+'</ol>'
  +         '<a href="#/contact" class="svc-rail-cta">Not sure which you need? &#8599;</a>'
  +       '</div>'
  +     '</aside>'
  +   '</div>'
  + '</section>'
  + ctaSection();
}

'''
s = s[:start] + NEW + s[end:]

# ── 3. scroll-spy + jump handlers ─────────────────────────────────────
hook = """  var form = document.getElementById('contact-form');"""
assert s.count(hook) == 1
SPY = """  var railBtns = document.querySelectorAll('.svc-rail button[data-jump]');
  if(railBtns.length){
    var byId = {};
    Array.prototype.forEach.call(railBtns, function(b){
      byId[b.getAttribute('data-jump')] = b;
      b.addEventListener('click', function(){
        var t = document.getElementById(b.getAttribute('data-jump'));
        if(t) t.scrollIntoView({ behavior:'smooth', block:'start' });
      });
    });
    var blocks = document.querySelectorAll('.svc-block');
    if(blocks.length && 'IntersectionObserver' in window){
      var setActive = function(id){
        Array.prototype.forEach.call(railBtns, function(b){
          b.classList.toggle('active', b.getAttribute('data-jump') === id);
        });
      };
      var visible = {};
      var obs = new IntersectionObserver(function(entries){
        entries.forEach(function(e){ visible[e.target.id] = e.isIntersecting; });
        for(var i=0;i<blocks.length;i++){
          if(visible[blocks[i].id]){ setActive(blocks[i].id); break; }
        }
      }, { rootMargin:'-110px 0px -55% 0px', threshold:0 });
      Array.prototype.forEach.call(blocks, function(b){ obs.observe(b); });
      setActive(blocks[0].id);
    }
  }

"""
s = s.replace(hook, SPY + hook, 1)

io.open(p, "w", encoding="utf-8").write(s)
print("patched")
