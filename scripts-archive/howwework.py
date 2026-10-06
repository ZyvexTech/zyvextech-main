# -*- coding: utf-8 -*-
"""Merge How We Work + Core Values on the home page into one illustrated,
scroll-revealed section with far less text."""
import io, os

os.chdir(os.path.dirname(os.path.abspath(__file__)))
p = "index.html"
s = io.open(p, encoding="utf-8").read()

def rep(old, new, why, n=1):
    global s
    assert s.count(old) == n, (why, s.count(old))
    s = s.replace(old, new, n)

# ── 1. APPROACH: shorter copy, scannable points, an art key ───────────
start = s.index("var APPROACH = [")
end = s.index("\n];", start) + 3
s = s[:start] + '''var APPROACH = [
  { step: 1, art: "consult", title: "We Consult First",
    body: "We learn how the business actually makes money, what the product is and what the goal is \\u2014 before anything is recommended.",
    points: ["Business model", "Product", "Goals"] },
  { step: 2, art: "scope", title: "We Work Out What You Need \\u2014 and What You Don't",
    body: "Then we name the tools that fit and the ones to skip. Talking a client out of software they were about to buy is a normal outcome.",
    points: ["A stack that fits", "Nothing you won't use"] },
  { step: 3, art: "build", title: "We Implement It Ourselves",
    body: "Store, campaigns, funnels, CRM, automations \\u2014 built and wired together by us, not handed over as a to-do list.",
    points: ["Built, not advised", "One team throughout"] },
  { step: 4, art: "maintain", title: "We Maintain and Support It",
    body: "We stay on after launch to maintain it, support your team and keep improving it \\u2014 especially for Shopify clients.",
    points: ["Ongoing support", "Especially Shopify"] }
];

/* Small diagrams for the How We Work steps. Abstract on purpose \\u2014 they
   carry the idea of each step rather than decorating it.               */
function stepArt(key){
  var open = '<svg class="hw-svg" viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">';
  var g = '<g stroke="#0d9c80" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">';
  var faint = 'stroke="#f4f2ec" stroke-opacity="0.18" stroke-width="1.5"';
  if(key === 'consult'){
    return open
      + '<rect x="40" y="60" width="190" height="52" rx="4" '+faint+'/>'
      + '<rect x="40" y="184" width="190" height="52" rx="4" '+faint+'/>'
      + '<rect x="40" y="308" width="190" height="52" rx="4" '+faint+'/>'
      + '<text x="60" y="92" fill="#9a9890" font-family="Helvetica,Arial" font-size="17">Business model</text>'
      + '<text x="60" y="216" fill="#9a9890" font-family="Helvetica,Arial" font-size="17">Product</text>'
      + '<text x="60" y="340" fill="#9a9890" font-family="Helvetica,Arial" font-size="17">Goals</text>'
      + g
      + '<path d="M230 86h90c16 0 16 124 32 124"/><path d="M230 210h122"/><path d="M230 334h90c16 0 16-124 32-124"/>'
      + '<circle cx="430" cy="210" r="62"/><path d="M404 210h52M430 184v52"/>'
      + '</g></svg>';
  }
  if(key === 'scope'){
    var rows = '', y = 52;
    var keep = ['Shopify', 'Meta Ads', 'SEO'], drop = ['Another CRM', 'A fourth dashboard', 'An app you won\\'t open'];
    for(var i=0;i<3;i++){
      rows += '<path d="M50 '+(y+14)+' l10 10 18-22" stroke="#0d9c80" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
           +  '<text x="100" y="'+(y+22)+'" fill="#e8e6df" font-family="Helvetica,Arial" font-size="19">'+keep[i]+'</text>';
      y += 58;
    }
    y += 26;
    for(var j=0;j<3;j++){
      rows += '<path d="M50 '+(y+8)+' l22 22M72 '+(y+8)+' l-22 22" stroke="#f4f2ec" stroke-opacity="0.28" stroke-width="2" stroke-linecap="round"/>'
           +  '<text x="100" y="'+(y+26)+'" fill="#6b6a64" font-family="Helvetica,Arial" font-size="19" text-decoration="line-through">'+drop[j]+'</text>';
      y += 58;
    }
    return open + rows + '</svg>';
  }
  if(key === 'build'){
    return open
      + g
      + '<rect x="228" y="168" width="144" height="84" rx="4"/>'
      + '</g>'
      + '<text x="300" y="216" fill="#0d9c80" font-family="Helvetica,Arial" font-size="17" text-anchor="middle">SYSTEM</text>'
      + '<g '+faint+' fill="none" stroke-linecap="round">'
      + '<rect x="40" y="44" width="150" height="56" rx="4"/><rect x="410" y="44" width="150" height="56" rx="4"/>'
      + '<rect x="40" y="320" width="150" height="56" rx="4"/><rect x="410" y="320" width="150" height="56" rx="4"/>'
      + '<path d="M115 100v40c0 16 14 28 30 28h83M485 100v40c0 16-14 28-30 28h-83"/>'
      + '<path d="M115 320v-40c0-16 14-28 30-28h83M485 320v-40c0-16-14-28-30-28h-83"/>'
      + '</g>'
      + '<text x="115" y="78" fill="#9a9890" font-family="Helvetica,Arial" font-size="15" text-anchor="middle">Store</text>'
      + '<text x="485" y="78" fill="#9a9890" font-family="Helvetica,Arial" font-size="15" text-anchor="middle">Campaigns</text>'
      + '<text x="115" y="354" fill="#9a9890" font-family="Helvetica,Arial" font-size="15" text-anchor="middle">CRM</text>'
      + '<text x="485" y="354" fill="#9a9890" font-family="Helvetica,Arial" font-size="15" text-anchor="middle">Automation</text>'
      + '</svg>';
  }
  // maintain
  var nodes = '', x = 70;
  for(var k=0;k<5;k++){
    nodes += '<circle cx="'+x+'" cy="300" r="9" fill="#0d9c80"/>';
    x += 115;
  }
  return open
    + '<path d="M70 300h460" '+faint+'/>'
    + nodes
    + g
    + '<path d="M70 232 L185 216 L300 178 L415 140 L530 86"/>'
    + '<path d="M494 90h36v36"/>'
    + '</g>'
    + '<text x="70" y="346" fill="#6b6a64" font-family="Helvetica,Arial" font-size="15">Launch</text>'
    + '<text x="530" y="346" fill="#9a9890" font-family="Helvetica,Arial" font-size="15" text-anchor="end">Still improving</text>'
    + '</svg>';
}
''' + s[end:]

# ── 2. home: one merged section replacing How We Work + Core Values ───
old_two = """  + '<section class="section section-b on-black">'
  +   '<div class="wrap">'
  +     '<div class="flex-between">'
  +       '<div>'+eyebrow('How We Work')+sectionTitle('Consult First, Build Second', '')+'</div>'
  +       '<a href="#/our-story" class="tlink">More about us ↗</a>'
  +     '</div>'
  +     '<div style="margin-top:40px;display:flex;flex-direction:column">'+approachTeaser+'</div>'
  +   '</div>'
  + '</section>'

  + '<section class="section section-b">'
  +   '<div class="wrap">'
  +     eyebrow('Core Values')+sectionTitle('The Standards We Build Around')
  +     '<div class="grid-5" style="margin-top:48px">'+valuesTeaser+'</div>'
  +   '</div>'
  + '</section>'
"""
new_one = """  + '<section class="section section-b on-black" id="how-we-work">'
  +   '<div class="wrap">'
  +     eyebrow('How We Work')
  +     sectionTitle('Consult First, Build Second', '')
  +     '<p class="muted" style="margin-top:24px;max-width:560px;font-size:16px;line-height:1.6">Four steps, in this order, on every engagement.</p>'
  +     '<div class="hw-steps">'+approachTeaser+'</div>'
  +     '<a href="#/our-story" class="tlink" style="display:inline-block;margin-top:56px">More about how we work &#8599;</a>'
  +   '</div>'
  + '</section>'
"""
rep(old_two, new_one, "merge")

# ── 3. the step renderer ──────────────────────────────────────────────
old_teaser = """  var approachTeaser = APPROACH.map(function(s){
    return ''
    + '<div class="grid-approach">'
    +   '<div>'
    +     iconBox(s.icon)
    +     '<p class="faint" style="margin-top:16px;font-size:13px">Step '+String(s.step).padStart(2,'0')+'</p>'
    +     '<h3 class="serif" style="margin-top:4px;font-size:22px">'+s.title+'</h3>'
    +   '</div>'
    +   '<p class="muted" style="align-self:center;max-width:520px;font-size:14px">'+s.body+'</p>'
    + '</div>';
  }).join('');"""
new_teaser = """  var approachTeaser = APPROACH.map(function(s){
    var pts = (s.points || []).map(function(t){ return '<li>'+t+'</li>'; }).join('');
    return ''
    + '<article class="hw-step">'
    +   '<div class="hw-copy">'
    +     '<p class="hw-n">'+String(s.step).padStart(2,'0')+'</p>'
    +     '<h3 class="hw-title">'+s.title+'</h3>'
    +     '<p class="hw-body">'+s.body+'</p>'
    +     (pts ? '<ul class="hw-points">'+pts+'</ul>' : '')
    +   '</div>'
    +   '<div class="hw-art">'+stepArt(s.art)+'</div>'
    + '</article>';
  }).join('');"""
rep(old_teaser, new_teaser, "teaser")

# valuesTeaser is no longer used on the home page
a = s.index("  var valuesTeaser = VALUES.map(function(v){")
b = s.index("  }).join('');", a) + len("  }).join('');\n\n")
assert "iconBox(v.icon)" in s[a:b]
s = s[:a] + s[b:]

# ── 4. CSS ────────────────────────────────────────────────────────────
rep(".ticker{position:relative;", """.hw-steps{margin-top:8px;text-align:left}
.hw-step{display:grid;grid-template-columns:1fr;gap:32px;align-items:center;
  border-top:1px solid var(--line);padding:56px 0}
@media(min-width:900px){
  .hw-step{grid-template-columns:1fr 1fr;gap:72px;padding:72px 0}
  .hw-step:nth-child(even) .hw-copy{order:2}
  .hw-step:nth-child(even) .hw-art{order:1}
}
.hw-n{font-family:'Runalto',Georgia,serif;font-size:34px;line-height:1;color:var(--teal2)}
.hw-title{font-family:'Runalto',Georgia,serif;font-size:clamp(24px,3vw,34px);line-height:1.12;margin-top:14px;max-width:460px}
.hw-body{margin-top:16px;font-size:16px;line-height:1.65;color:var(--muted);max-width:460px}
.hw-points{list-style:none;margin-top:22px;display:flex;flex-wrap:wrap;gap:8px}
.hw-points li{border:1px solid var(--line);padding:6px 12px;font-size:12px;letter-spacing:.06em;
  text-transform:uppercase;color:var(--faint)}
.hw-art{border:1px solid var(--line);background:rgba(244,242,236,.02);padding:22px}
.hw-svg{display:block;width:100%;height:auto}
.hw-step.reveal{opacity:0;transform:translateY(26px)}
.hw-step.reveal .hw-art{opacity:0;transform:translateY(14px)}
.hw-step.reveal.in{opacity:1;transform:none;transition:opacity .65s ease,transform .65s ease}
.hw-step.reveal.in .hw-art{opacity:1;transform:none;transition:opacity .7s ease .18s,transform .7s ease .18s}
.ticker{position:relative;""", "css")

# ── 5. scroll reveal ──────────────────────────────────────────────────
rep("  var expTabs = document.querySelectorAll('.wx-tab');", """  /* Steps fade in as you reach them. The class is added here, not in the
     markup, so the content is visible to crawlers and with JS disabled. */
  var hwSteps = document.querySelectorAll('.hw-step');
  if(hwSteps.length && 'IntersectionObserver' in window){
    var hwObs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('in'); hwObs.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    Array.prototype.forEach.call(hwSteps, function(el){
      if(el.getBoundingClientRect().top > window.innerHeight * 0.9){
        el.classList.add('reveal');
        hwObs.observe(el);
      }
    });
  }

  var expTabs = document.querySelectorAll('.wx-tab');""", "reveal")

io.open(p, "w", encoding="utf-8").write(s)
print("merged How We Work + Core Values on the home page")
