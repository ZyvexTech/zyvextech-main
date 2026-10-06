# -*- coding: utf-8 -*-
import io, re
from works_data import DATA
from works_pages import PAGES

p = "index.html"
s = io.open(p, encoding="utf-8").read()
def rep(old, new, why, n=1):
    global s
    assert s.count(old) == n, (why, s.count(old))
    s = s.replace(old, new, n)

# 1 ── drop the old PORTFOLIO / CASE_STUDIES arrays, insert the WORKS model
start = s.index("var PORTFOLIO = [")
end   = s.index("var BLOG_POSTS = [")
s = s[:start] + DATA.strip() + "\n\n" + s[end:]

# 2 ── swap the three old page functions for the two new ones
start = s.index("/* ── Portfolio ")
end   = s.index("/* ── Our Story ")
s = s[:start] + PAGES.strip() + "\n\n" + s[end:]

# 3 ── nav: one Works item
rep('''  { href: "#/portfolio", label: "Portfolio", key: "portfolio" },
  { href: "#/our-story", label: "Our Story" },
  { href: "#/case-studies", label: "Case Studies" },''',
    '''  { href: "#/works", label: "Works", key: "works" },
  { href: "#/our-story", label: "Our Story" },''', "nav")

rep("""  if(key === 'portfolio') return [{ href: "#/portfolio", label: "All Work" },{ href: "#/case-studies", label: "Case Studies" }];""",
    """  if(key === 'works') return [{ href: "#/works", label: "All Work" }];""", "ddtop")

rep("""  if(key === 'portfolio') return PORTFOLIO.map(function(p){ return { href: "#/case-studies/"+p.slug, label: p.name }; });""",
    """  if(key === 'works'){
    var out = EXPERTISES.filter(function(e){ return e.key !== 'all'; }).map(function(e){
      return { href: "#/works/expertise/"+e.key, label: e.label };
    });
    return out.concat(WORKS.map(function(w){ return { href: "#/works/"+w.slug, label: w.client }; }));
  }""", "dditems")

# 4 ── footer
rep("""  +           '<li><a href="#/portfolio">Portfolio</a></li>'
  +           '<li><a href="#/case-studies">Case Studies</a></li>'""",
    """  +           '<li><a href="#/works">Works</a></li>'""", "footer")

# 5 ── home: work teaser + featured result from WORKS
rep('''  var portfolioTeaser = PORTFOLIO.map(function(p){
    var img = CASE_IMAGES[p.slug];
    return ''
    + '<a href="#/case-studies/'+p.slug+'" class="card card-media">'
    +   (img ? '<img class="media-thumb" src="'+img.cover+'" alt="" />' : '')
    +   '<div class="card-media-body">'
    +   '<h3 class="serif" style="font-size:20px">'+p.name+'</h3>'
    +   '<p class="muted" style="margin-top:8px;font-size:14px">'+p.category+'</p>'
    +   (p.url ? '<p style="margin-top:16px;font-size:14px;color:var(--teal2)">'+p.url+' ↗</p>' : '')
    +   (p.stat ? '<p style="margin-top:16px;font-size:14px;color:var(--teal2)">'+p.stat+'</p>' : '')
    +   '</div>'
    + '</a>';
  }).join('');''',
    '''  var portfolioTeaser = WORKS.slice(0,4).map(function(w){
    return ''
    + '<a href="#/works/'+w.slug+'" class="card card-media">'
    +   '<img class="media-thumb" src="'+workImg(w.slug,'cover')+'" alt="" />'
    +   '<div class="card-media-body">'
    +   '<h3 class="serif" style="font-size:20px">'+w.client+'</h3>'
    +   '<p class="muted" style="margin-top:8px;font-size:14px">'+w.category+'</p>'
    +   '<p style="margin-top:16px;font-size:14px;color:var(--teal2)">'+w.cardLine+'</p>'
    +   '</div>'
    + '</a>';
  }).join('');''', "teaser")

rep("  var featuredCase = CASE_STUDIES.filter(function(c){ return c.outcomeStat; })[0] || CASE_STUDIES[0];",
    "  var featuredCase = findWork('firoz-pickles') || WORKS[0];\n  var featuredStat = (featuredCase.stats && featuredCase.stats[1]) || { v: '', l: '' };", "featvar")

rep("""  +       '<a href="#/case-studies/'+featuredCase.slug+'" class="btn btn-dark" style="margin-top:32px">Read the case study <span aria-hidden="true">↗</span></a>'""",
    """  +       '<a href="#/works/'+featuredCase.slug+'" class="btn btn-dark" style="margin-top:32px">Read the case study <span aria-hidden="true">↗</span></a>'""", "featlink")

rep("""  +       '<p class="serif" style="font-size:clamp(56px,9vw,120px);line-height:1">'+featuredCase.outcomeStat+'</p>'
  +       '<p style="margin-top:12px;font-size:13px;text-transform:uppercase;letter-spacing:.08em;opacity:.7">'+featuredCase.category+'</p>'""",
    """  +       '<p class="serif" style="font-size:clamp(56px,9vw,120px);line-height:1">'+featuredStat.v+'</p>'
  +       '<p style="margin-top:12px;font-size:13px;text-transform:uppercase;letter-spacing:.08em;opacity:.7">'+featuredStat.l+' \\u00b7 '+featuredCase.client+'</p>'""", "featstat")

rep("""  +       '<a href="#/portfolio" class="tlink">View full portfolio ↗</a>'""",
    """  +       '<a href="#/works" class="tlink">View all work ↗</a>'""", "teaserlink")

# 6 ── router
rep("""  } else if(parts[0] === 'portfolio') {
    html = pagePortfolio();
    title = 'Portfolio — ' + COMPANY.name;
    activeHref = '#/portfolio';
  } else if(parts[0] === 'case-studies' && parts.length === 1){
    html = pageCaseStudies();
    title = 'Case Studies — ' + COMPANY.name;
    activeHref = '#/case-studies';
  } else if(parts[0] === 'case-studies' && parts.length === 2){
    var cs = CASE_STUDIES.filter(function(c){ return c.slug === parts[1]; })[0];
    if(cs){ html = pageCaseStudyDetail(cs); title = cs.client + ' — ' + COMPANY.name; activeHref = '#/case-studies'; }
    else { html = page404(); title = 'Not Found — ' + COMPANY.name; }
  }""",
    """  } else if(parts[0] === 'portfolio' || (parts[0] === 'case-studies' && parts.length === 1)) {
    window.location.replace('#/works'); return;
  } else if(parts[0] === 'case-studies' && parts.length === 2){
    window.location.replace('#/works/' + parts[1]); return;
  } else if(parts[0] === 'works' && parts.length === 1){
    html = pageWorks('all');
    title = 'Works — ' + COMPANY.name;
    activeHref = '#/works';
  } else if(parts[0] === 'works' && parts[1] === 'expertise' && parts.length === 3){
    html = pageWorks(parts[2]);
    title = expertiseLabel(parts[2]) + ' — ' + COMPANY.name;
    activeHref = '#/works';
  } else if(parts[0] === 'works' && parts.length === 2){
    var wk = findWork(parts[1]);
    if(wk){ html = pageWorkDetail(wk); title = wk.client + ' — ' + COMPANY.name; activeHref = '#/works'; }
    else { html = page404(); title = 'Not Found — ' + COMPANY.name; }
  }""", "router")

# 7 ── filter handler
rep("  var railBtns = document.querySelectorAll('.svc-rail button[data-jump]');",
    """  var expTabs = document.querySelectorAll('.wx-tab');
  if(expTabs.length){
    var wxCards = document.querySelectorAll('.wx-card');
    var wxEmpty = document.querySelector('.wx-empty');
    var applyFilter = function(key){
      var shown = 0;
      Array.prototype.forEach.call(wxCards, function(c){
        var on = key === 'all' || (' '+c.getAttribute('data-exp')+' ').indexOf(' '+key+' ') > -1;
        c.style.display = on ? '' : 'none';
        if(on) shown++;
      });
      Array.prototype.forEach.call(expTabs, function(t){
        t.classList.toggle('active', t.getAttribute('data-exp') === key);
      });
      if(wxEmpty) wxEmpty.style.display = shown ? 'none' : '';
    };
    Array.prototype.forEach.call(expTabs, function(t){
      t.addEventListener('click', function(){ applyFilter(t.getAttribute('data-exp')); });
    });
    var pre = document.querySelector('.wx-tab.active');
    if(pre) applyFilter(pre.getAttribute('data-exp'));
  }

  var railBtns = document.querySelectorAll('.svc-rail button[data-jump]');""", "filter")

# 8 ── CSS
CSS = """/* ── Works ──────────────────────────────────────────────────── */
.wx-tabs-label{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--faint)}
.wx-tabs{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-top:18px}
.wx-tab{background:none;border:1px solid var(--line);padding:11px 20px;font-size:12.5px;font-weight:600;
  letter-spacing:.06em;text-transform:uppercase;color:var(--muted);cursor:pointer;transition:border-color .15s,color .15s,background-color .15s}
.wx-tab:hover{border-color:var(--ink);color:var(--ink)}
.wx-tab.active{background:var(--teal);border-color:var(--teal);color:var(--ink)}
.wx-grid{display:grid;grid-template-columns:1fr;gap:28px;margin-top:48px;text-align:left}
@media(min-width:820px){.wx-grid{grid-template-columns:1fr 1fr}}
.wx-card{display:block;border:1px solid var(--line);overflow:hidden;transition:border-color .15s}
.wx-card:hover{border-color:var(--teal2)}
.wx-card-media{overflow:hidden}
.wx-card-media img{display:block;width:100%;aspect-ratio:1200/630;object-fit:cover;transition:transform .5s ease}
.wx-card:hover .wx-card-media img{transform:scale(1.03)}
.wx-card-body{padding:28px}
.wx-tags{display:flex;flex-wrap:wrap;gap:8px}
.wx-tag{border:1px solid var(--line);padding:5px 10px;font-size:10.5px;font-weight:600;letter-spacing:.09em;text-transform:uppercase;color:var(--faint)}
.wx-card-title{font-family:'Runalto',Georgia,serif;font-size:clamp(24px,2.6vw,30px);line-height:1.1;margin-top:18px}
.wx-card-line{margin-top:10px;font-size:14.5px;line-height:1.5;color:var(--muted)}
.wx-card-cta{display:inline-block;margin-top:20px}
.wx-empty{margin-top:48px;font-size:15px;color:var(--muted)}
.wx-outcome{border:1px solid var(--line);padding:32px}
.wx-blocks{display:flex;flex-direction:column;gap:88px;text-align:left}
.wx-block{max-width:920px;margin:0 auto;width:100%}
.wx-block-n{font-size:12px;letter-spacing:.14em;color:var(--teal2)}
.wx-block-title{font-family:'Runalto',Georgia,serif;font-size:clamp(26px,3.2vw,38px);line-height:1.12;margin-top:14px}
.wx-block-body{margin-top:18px;font-size:16px;line-height:1.75;color:var(--muted);max-width:720px}
.wx-shots{display:grid;grid-template-columns:1fr;gap:20px;margin-top:32px}
.wx-shots.two{grid-template-columns:1fr}
@media(min-width:760px){.wx-shots.two{grid-template-columns:1fr 1fr}}
.wx-shots img{display:block;width:100%;aspect-ratio:1200/800;object-fit:cover;border:1px solid var(--line)}
.wx-stats{display:grid;grid-template-columns:1fr;gap:32px;margin-top:32px}
@media(min-width:720px){.wx-stats{grid-template-columns:repeat(3,1fr)}}
.wx-stat-v{font-family:'Runalto',Georgia,serif;font-size:clamp(40px,6vw,72px);line-height:1}
.wx-stat-l{margin-top:10px;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:rgba(244,242,236,.8)}
.wx-quote{font-family:'Runalto',Georgia,serif;font-size:clamp(22px,3vw,34px);line-height:1.35;max-width:880px;margin:28px auto 0;text-wrap:balance}
.wx-quote-by{margin-top:24px;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
.wx-quote-by b{color:var(--ink);font-weight:600}

"""
rep("/* ── Centered sections ──", CSS + "/* ── Centered sections ──", "css")

# works blocks + grid keep their left edge inside centered sections
rep(".section > .wrap .faq-item,", ".section > .wrap .wx-blocks,.section > .wrap .wx-grid,.section > .wrap .faq-item,", "optout")

io.open(p, "w", encoding="utf-8").write(s)
print("integrated; page %.2f MB" % (len(s.encode())/1048576))
