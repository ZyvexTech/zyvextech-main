# -*- coding: utf-8 -*-
import io, json, re
from works2 import NEWWORKS

p="index.html"; s=io.open(p,encoding="utf-8").read()
def rep(old,new,why,n=1):
    global s
    assert s.count(old)==n, (why, s.count(old))
    s = s.replace(old,new,n)

NEWIMG = json.load(open("new_images.json"))

# 1 ── expertise list gains Business Websites
rep('''  { key: "seo",         label: "SEO" }
];''', '''  { key: "seo",         label: "SEO" },
  { key: "business",    label: "Business Websites" }
];''', "expertise")

# 2 ── countries on the three existing full works + ordering
rep('''    slug: "colin-guest", client: "Colin Guest", url: "colinguest.com", depth: "full",
    expertise: ["shopify","seo"],''',
    '''    slug: "colin-guest", client: "Colin Guest", url: "colinguest.com", depth: "full",
    expertise: ["shopify","seo"], countries: [],''', "cg")
rep('''    slug: "x-emirates", client: "X Emirates", url: "xemirates.online", depth: "full",
    expertise: ["performance","shopify"],''',
    '''    slug: "x-emirates", client: "X Emirates", url: "xemirates.online", depth: "full",
    expertise: ["performance","shopify"], countries: [["\\uD83C\\uDDE6\\uD83C\\uDDEA","UAE"]],''', "xe")

# 3 ── splice the nine new works in, then reorder the array
start = s.index('var WORKS = [')
end   = s.index('\n];', start)
body  = s[start+len('var WORKS = ['):end]
s = s[:start] + 'var WORKS = [' + body.rstrip() + ',\n' + NEWWORKS.strip() + s[end:]

# international first, then India — full case studies lead each group
ORDER = ["x-emirates","wolgan","abclux","beyondspare","ba51","nichespectacles","frenchcakes","feza-dates",
         "colin-guest","firoz-pickles","cocoroots","turmaroot","thebombcase","chandanveda"]
rep("var WORKS = [", "var WORKS_ORDER = " + json.dumps(ORDER) + ";\nvar WORKS = [", "orderconst")
rep("/* Client reviews", """WORKS.sort(function(a,b){
  var ia = WORKS_ORDER.indexOf(a.slug), ib = WORKS_ORDER.indexOf(b.slug);
  return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
});

/* Client reviews""", "sort")

# 4 ── reviews: a slot for every work, placeholder until the quote arrives
start = s.index("var WORK_REVIEWS = {")
end   = s.index("};", start)+2
s = s[:start] + """var WORK_REVIEWS = {};
WORKS.forEach(function(w){ WORK_REVIEWS[w.slug] = { quote: "", name: "", role: "" }; });
/* Paste a real quote in here and the placeholder is replaced automatically:
   WORK_REVIEWS["colin-guest"] = { quote: "…", name: "…", role: "Founder, Colin Guest" }; */""" + s[end:]

# 5 ── images for the new works + real Colin Guest screenshots
IMG = {}
for slug, d in NEWIMG.items():
    IMG[slug] = d
colin = IMG.pop("colin-guest"); colinscroll = IMG.pop("colin-scroll")
newmap = json.dumps(IMG, separators=(",",":"))
rep("var WORK_IMAGES = workImages();",
    "var WORK_IMAGES = workImages();\n(function(){ var extra = " + newmap + ";\n  for(var k in extra){ WORK_IMAGES[k] = extra[k]; } })();", "imgmerge")

s = re.sub(r"cover:\s+ph\('Colin Guest[^\n]*\n", 'cover:            "%s",\n' % colin["cover"], s, count=1)
s = re.sub(r'"colin-landing":\s+ph\([^\n]*\n\s*"colin-outfit":\s+ph\([^\n]*\n\s*"colin-scroll":\s+ph\([^\n]*\n',
           '"colin-landing":  "%s",\n      "colin-scroll":   "%s",\n' % (colin["inline"], colinscroll["inline"]), s, count=1)
assert '"colin-outfit"' not in s.split('var WORK_IMAGES')[0].split('function workImages')[1], "colin img swap failed"
rep('''        img: ["colin-landing","colin-outfit"] },''', '''        img: ["colin-landing"] },''', "cgblock")

# 6 ── country badges
rep("function findWork(slug){", """function countryBadges(w, cls){
  if(!w.countries || !w.countries.length) return '';
  return '<span class="'+(cls||'wx-flags')+'">' + w.countries.map(function(c){
    return '<span class="wx-flag"><i>'+c[0]+'</i>'+c[1]+'</span>';
  }).join('') + '</span>';
}
function findWork(slug){""", "flags")

rep("""  +     '<div class="wx-tags">'+tags+'</div>'""",
    """  +     '<div class="wx-tags">'+countryBadges(w)+tags+'</div>'""", "cardflags")

rep("""  +     '<div style="margin-top:24px">'+eyebrow(w.category)+'</div>'""",
    """  +     '<div style="margin-top:24px">'+eyebrow(w.category)+'</div>'
  +     (w.countries && w.countries.length ? '<div style="margin-top:20px">'+countryBadges(w,'wx-flags big')+'</div>' : '')""", "heroflags")

# 7 ── review placeholder
rep("""function workReview(slug){
  var r = WORK_REVIEWS[slug];
  if(!r || !r.quote) return '';
  return ''""",
    """function workReview(slug){
  var r = WORK_REVIEWS[slug];
  if(!r || !r.quote){
    return ''
    + '<section class="section section-b">'
    +   '<div class="wrap">'
    +     eyebrow('In Their Words')
    +     '<div class="wx-quote-slot">'
    +       '<p class="wx-quote-slot-label">Client review</p>'
    +       '<p class="wx-quote-slot-note">Quote to be added.</p>'
    +     '</div>'
    +   '</div>'
    + '</section>';
  }
  return ''""", "reviewph")

# 8 ── brief pages get a review slot too
rep("""    +       '<img class="media-inline" src="'+workImg(w.slug,'detail')+'" alt="'+w.client+' store detail" />'
    +     '</div>'
    +   '</div>'
    + '</section>';""",
    """    +       '<img class="media-inline" src="'+workImg(w.slug,'detail')+'" alt="'+w.client+' store detail" />'
    +     '</div>'
    +   '</div>'
    + '</section>'
    + workReview(w.slug);""", "briefreview")

# brief works without a 'detail' image should not render an empty second shot
rep("""    +       '<img class="media-inline" src="'+workImg(w.slug,'detail')+'" alt="'+w.client+' store detail" />'""",
    """    +       ((WORK_IMAGES[w.slug]||{}).detail ? '<img class="media-inline" src="'+workImg(w.slug,'detail')+'" alt="'+w.client+' store detail" />' : '')""", "detailguard")

# 9 ── CSS
rep(".wx-tag{", """.wx-flags{display:inline-flex;flex-wrap:wrap;gap:8px}
.wx-flag{display:inline-flex;align-items:center;gap:7px;border:1px solid var(--teal2);padding:5px 11px;
  font-size:10.5px;font-weight:600;letter-spacing:.09em;text-transform:uppercase;color:var(--teal2)}
.wx-flag i{font-style:normal;font-size:14px;line-height:1}
.wx-flags.big .wx-flag{font-size:12px;padding:8px 14px}
.wx-flags.big .wx-flag i{font-size:17px}
.wx-quote-slot{margin-top:32px;border:1px dashed var(--line);padding:44px 28px;max-width:720px;margin-left:auto;margin-right:auto}
.wx-quote-slot-label{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--teal2)}
.wx-quote-slot-note{margin-top:12px;font-size:15px;color:var(--faint)}
.wx-tag{""", "css")

io.open(p,"w",encoding="utf-8").write(s)
print("done; page %.2f MB" % (len(s.encode())/1048576))
