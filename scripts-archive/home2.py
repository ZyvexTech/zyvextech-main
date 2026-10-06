# -*- coding: utf-8 -*-
import io
p="index.html"; s=io.open(p,encoding="utf-8").read()
def rep(old,new,why,n=1):
    global s
    assert s.count(old)==n, (why, s.count(old))
    s = s.replace(old,new,n)

# 1 ── featured result: X Emirates, headline stat = ROAS
rep("""  var featuredCase = findWork('firoz-pickles') || WORKS[0];
  var featuredStat = (featuredCase.stats && featuredCase.stats[1]) || { v: '', l: '' };""",
    """  var featuredCase = findWork('x-emirates') || WORKS[0];
  var featuredStat = (featuredCase.stats && featuredCase.stats[0]) || { v: '', l: '' };""", "featured")

# 2 ── hoist the testimonials into one shared place
old_local = s[s.index("  /* Paste a real quote in and the placeholder card is replaced. */"):s.index("  /* Client meeting photos")]
assert "var TESTIMONIALS" in old_local and len(old_local) < 1400
s = s.replace(old_local, "", 1)

rep("/* Client reviews", """/* Client testimonials — shown on the home page and on Our Story.
   Paste a real quote in and that placeholder card is replaced. */
var TESTIMONIALS = [
  { quote: "", name: "", role: "" },
  { quote: "", name: "", role: "" },
  { quote: "", name: "", role: "" }
];
function testimonialsHtml(){
  return TESTIMONIALS.map(function(t){
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
}

/* Client reviews""", "hoist")

rep("""  +     '<div class="tm-grid">'+testimonialsHtml+'</div>'""",
    """  +     '<div class="tm-grid">'+testimonialsHtml()+'</div>'""", "storycall")

# 3 ── testimonials on the home page, right above Our Work
rep("""  + '<section class="section section-b">'
  +   '<div class="wrap">'
  +     '<div class="flex-between">'
  +       '<div>'+eyebrow('Our Work')+sectionTitle('Proof, Not Promises')+'</div>'""",
    """  + '<section class="section section-b on-black">'
  +   '<div class="wrap">'
  +     eyebrow('Testimonials')
  +     sectionTitle('What Clients Say', '')
  +     '<p class="muted" style="margin-top:24px;max-width:520px;font-size:15px">The founders and operators we build for, in their own words.</p>'
  +     '<div class="tm-grid">'+testimonialsHtml()+'</div>'
  +     '<a href="#/works" class="tlink" style="display:inline-block;margin-top:40px">See the work behind them &#8599;</a>'
  +   '</div>'
  + '</section>'

  + '<section class="section section-b">'
  +   '<div class="wrap">'
  +     '<div class="flex-between">'
  +       '<div>'+eyebrow('Our Work')+sectionTitle('Proof, Not Promises')+'</div>'""", "hometm")

io.open(p,"w",encoding="utf-8").write(s)
print("ok")
