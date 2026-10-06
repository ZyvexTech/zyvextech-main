# -*- coding: utf-8 -*-
import io
p="index.html"; s=io.open(p,encoding="utf-8").read()
def rep(old,new,why,n=1):
    global s
    assert s.count(old)==n, (why, s.count(old))
    s = s.replace(old,new,n)

fn_start = s.index("function pageOurStory(){")
fn_end   = s.index("/* ── Blog index ")
fn = s[fn_start:fn_end]

# ── cut the founder + team block out of its current position ──────────
blk_start = fn.index("  + '<section class=\"section-teal\">'")
blk_end   = fn.index("  + '<section class=\"section section-b\">'\n  +   '<div class=\"wrap\">'\n  +     eyebrow('Our Stack')")
block = fn[blk_start:blk_end]
assert "About the Founder" in block and "The Team Behind It" in block, "block bounds"
fn = fn[:blk_start] + fn[blk_end:]

# ── the three new sections ────────────────────────────────────────────
NEWSECTIONS = """  + '<section class="section section-b">'
  +   '<div class="wrap">'
  +     eyebrow('Our Clients')
  +     sectionTitle('Brands We Build For', '')
  +     '<p class="muted" style="margin-top:24px;max-width:560px;font-size:15px">Ecommerce and D2C brands, and businesses selling services \\u2014 across India, the UAE, Qatar and the UK.</p>'
  +     '<div class="ticker"><div class="ticker-track">'+tickerHtml+'</div></div>'
  +   '</div>'
  + '</section>'

  + '<section class="section section-b on-black">'
  +   '<div class="wrap">'
  +     eyebrow('Testimonials')
  +     sectionTitle('What Clients Say', '')
  +     '<div class="tm-grid">'+testimonialsHtml+'</div>'
  +   '</div>'
  + '</section>'

  + '<section class="section section-b">'
  +   '<div class="wrap">'
  +     eyebrow('In the Room')
  +     sectionTitle('Working With Our Clients', '')
  +     '<p class="muted" style="margin-top:24px;max-width:620px;font-size:15px;line-height:1.7">Audits, planning sessions and reviews \\u2014 the part of an engagement that decides whether the build is right before anyone opens a code editor.</p>'
  +     '<div class="meet-grid">'+meetingsHtml+'</div>'
  +   '</div>'
  + '</section>'

"""

# ── re-insert: hero, founder, team, clients, testimonials, meetings, then the rest ──
anchor = "  + '<section class=\"section\">'\n  +   '<div class=\"wrap grid-2\" style=\"row-gap:48px\">'+aboutHtml+'</div>'\n  + '</section>'"
assert fn.count(anchor) == 1
fn = fn.replace(anchor, block + NEWSECTIONS + anchor, 1)

# ── data for the three new sections ───────────────────────────────────
DATA = """  var CLIENT_LOGOS = [
    { name: "Colin Guest",        src: "" },
    { name: "X Emirates",         src: "" },
    { name: "Wolgan",             src: "" },
    { name: "ABC LUX",            src: "" },
    { name: "BeyondSpare",        src: "" },
    { name: "BA51 Eyewear",       src: "" },
    { name: "Niche Spectacles",   src: "" },
    { name: "French Cakes",       src: "" },
    { name: "Feza Dates",         src: "" },
    { name: "Firoz Pickles",      src: "" },
    { name: "Coco Roots Organic", src: "" },
    { name: "Turmaroot",          src: "" },
    { name: "The Bomb Cases",     src: "" },
    { name: "Chandanveda",        src: "" }
  ];
  var tickerHtml = CLIENT_LOGOS.concat(CLIENT_LOGOS).map(function(c, i){
    return '<div class="ticker-item"'+(i >= CLIENT_LOGOS.length ? ' aria-hidden="true"' : '')+'>'
      + (c.src ? '<img src="'+c.src+'" alt="'+c.name+'" />' : '<span class="ticker-name">'+c.name+'</span>')
      + '</div>';
  }).join('');

  /* Paste a real quote in and the placeholder card is replaced. */
  var TESTIMONIALS = [
    { quote: "", name: "", role: "" },
    { quote: "", name: "", role: "" },
    { quote: "", name: "", role: "" }
  ];
  var testimonialsHtml = TESTIMONIALS.map(function(t){
    if(!t.quote){
      return '<div class="tm-card empty">'
        + '<p class="tm-label">Client testimonial</p>'
        + '<p class="tm-note">Quote to be added.</p>'
        + '</div>';
    }
    return '<div class="tm-card">'
      + '<p class="tm-quote">&ldquo;'+t.quote+'&rdquo;</p>'
      + '<p class="tm-by"><b>'+t.name+'</b>'+(t.role ? '<span>'+t.role+'</span>' : '')+'</p>'
      + '</div>';
  }).join('');

  /* Client meeting photos — replace a src and that slot is done. */
  var MEETING_PHOTOS = [
    { src: "", caption: "Audit session" },
    { src: "", caption: "Planning workshop" },
    { src: "", caption: "Performance review" },
    { src: "", caption: "Handover & training" }
  ];
  var meetingsHtml = MEETING_PHOTOS.map(function(m){
    return '<figure class="meet-item">'
      + '<img src="'+(m.src || ph('Client meeting', m.caption, 1000, 750))+'" alt="'+m.caption+'" />'
      + '<figcaption>'+m.caption+'</figcaption>'
      + '</figure>';
  }).join('');

  var stackHtml = STACK.map(function(s){"""
fn = fn.replace("  var stackHtml = STACK.map(function(s){", DATA, 1)

s = s[:fn_start] + fn + s[fn_end:]

# ── CSS ───────────────────────────────────────────────────────────────
rep(".founder-portrait{display:block;", """.ticker{position:relative;overflow:hidden;margin-top:48px;
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent);
  mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent)}
.ticker-track{display:flex;width:max-content;gap:20px;animation:zt-ticker 46s linear infinite}
.ticker:hover .ticker-track{animation-play-state:paused}
@keyframes zt-ticker{from{transform:translateX(0)}to{transform:translateX(calc(-50% - 10px))}}
.ticker-item{flex:0 0 auto;display:flex;align-items:center;justify-content:center;height:96px;min-width:210px;
  padding:0 30px;border:1px solid var(--line);background:rgba(244,242,236,.02)}
.ticker-item img{max-height:42px;max-width:150px;width:auto;display:block;object-fit:contain}
.ticker-name{font-family:'Runalto',Georgia,serif;font-size:19px;line-height:1;color:var(--muted);white-space:nowrap}
.tm-grid{display:grid;grid-template-columns:1fr;gap:24px;margin-top:48px;text-align:left}
@media(min-width:860px){.tm-grid{grid-template-columns:repeat(3,1fr)}}
.tm-card{border:1px solid var(--line);padding:32px;display:flex;flex-direction:column}
.tm-card.empty{border-style:dashed;min-height:210px;justify-content:center}
.tm-label{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--teal2)}
.tm-note{margin-top:12px;font-size:15px;color:var(--faint)}
.tm-quote{font-family:'Runalto',Georgia,serif;font-size:20px;line-height:1.4}
.tm-by{margin-top:24px;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
.tm-by b{display:block;color:var(--ink);font-weight:600}
.tm-by span{display:block;margin-top:4px}
.meet-grid{display:grid;grid-template-columns:1fr;gap:20px;margin-top:48px;text-align:left}
@media(min-width:640px){.meet-grid{grid-template-columns:1fr 1fr}}
@media(min-width:1100px){.meet-grid{grid-template-columns:repeat(4,1fr)}}
.meet-item img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover;border:1px solid var(--line)}
.meet-item figcaption{margin-top:12px;font-size:13px;color:var(--faint)}
.founder-portrait{display:block;""", "css")

io.open(p,"w",encoding="utf-8").write(s)
print("ok")
