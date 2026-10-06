# -*- coding: utf-8 -*-
import io
p="index.html"; s=io.open(p,encoding="utf-8").read()
def rep(old,new,why,n=1):
    global s
    assert s.count(old)==n, (why, s.count(old))
    s = s.replace(old,new,n)

# 1 ── founder photo slot, next to the team photo slot
rep('var TEAM_PHOTO_ALT = "The Zyvex Tech team in Calicut";',
    '''var TEAM_PHOTO_ALT = "The Zyvex Tech team in Calicut";
/* Founder portrait — swap this for the real photo. Portrait crop, roughly 4:5. */
var FOUNDER_PHOTO = "";''', "foundervar")

# 2 ── the founder band becomes "About the Founder", with the portrait
old_band = """  + '<section class="section-teal">'
  +   gridLines(true)
  +   '<div class="wrap grid-founder" style="position:relative">'
  +     '<div>'
  +       eyebrow('Founder')"""
new_band = """  + '<section class="section-teal">'
  +   gridLines(true)
  +   '<div class="wrap grid-founder" style="position:relative;align-items:center">'
  +     '<div>'
  +       '<img class="founder-portrait" src="'+(FOUNDER_PHOTO || ph('Founder portrait', COMPANY.founder, 900, 1125))+'" alt="'+COMPANY.founder+', '+COMPANY.founderTitle+'" />'
  +     '</div>'
  +     '<div>'
  +       eyebrow('About the Founder')"""
rep(old_band, new_band, "band")

# fold the bio paragraphs into the same column as the name, and drop the old second column
old_tail = """  +     '</div>'
  +     '<div style="display:flex;flex-direction:column;gap:20px;font-size:16px;line-height:1.6">'
  +       '<p>'+COMPANY.founder+' founded '+COMPANY.name"""
new_tail = """  +       '<div style="display:flex;flex-direction:column;gap:20px;margin-top:32px;font-size:16px;line-height:1.6">'
  +       '<p>'+COMPANY.founder+' founded '+COMPANY.name"""
rep(old_tail, new_tail, "tail")

# the dl block moves below the bio
old_dl = """  +       '<dl class="dl-2" style="margin-top:40px">'
  +         '<div style="display:flex;justify-content:space-between;gap:16px"><dt style="opacity:.6">Based in</dt><dd style="text-align:right">'+COMPANY.city+'</dd></div>'
  +         '<div style="display:flex;justify-content:space-between;gap:16px"><dt style="opacity:.6">Focus</dt><dd style="text-align:right">Systems, Ecommerce &amp; Performance Marketing</dd></div>'
  +         '<div style="display:flex;justify-content:space-between;gap:16px"><dt style="opacity:.6">Markets</dt><dd style="text-align:right">'+COMPANY.markets+'</dd></div>'
  +       '</dl>'
"""
rep(old_dl, "", "dlremove")

old_close = """  +     '</div>'
  +   '</div>'
  + '</section>'

  + '<section class="section section-b">'
  +   '<div class="wrap">'
  +     eyebrow('Our Stack')"""
new_close = """  +       '</div>'
  +       '<dl class="dl-2" style="margin-top:40px">'
  +         '<div style="display:flex;justify-content:space-between;gap:16px"><dt style="opacity:.6">Based in</dt><dd style="text-align:right">'+COMPANY.city+'</dd></div>'
  +         '<div style="display:flex;justify-content:space-between;gap:16px"><dt style="opacity:.6">Focus</dt><dd style="text-align:right">Systems, Ecommerce &amp; Performance Marketing</dd></div>'
  +         '<div style="display:flex;justify-content:space-between;gap:16px"><dt style="opacity:.6">Working across</dt><dd style="text-align:right">'+COMPANY.markets+'</dd></div>'
  +       '</dl>'
  +     '</div>'
  +   '</div>'
  + '</section>'

  + '<section class="section section-b" id="team">'
  +   '<div class="wrap">'
  +     eyebrow('The Team')
  +     sectionTitle('The Team Behind It', '')
  +     '<p class="muted" style="margin-top:24px;max-width:640px;font-size:16px;line-height:1.7">A small, senior team in Calicut working directly with the founders and operators who hire us. The person who audits your funnel is the person who builds the store and runs the campaigns &mdash; no handover to a junior bench, and nobody between you and the work.</p>'
  +     '<figure style="margin:48px 0 0">'
  +       '<img class="media-cover" src="'+(TEAM_PHOTO || ph('Team photo', 'The Zyvex Tech team', 1200, 630))+'" alt="'+TEAM_PHOTO_ALT+'" />'
  +       '<figcaption class="faint" style="margin-top:16px;font-size:13px">'+TEAM_PHOTO_CAPTION+'</figcaption>'
  +     '</figure>'
  +     '<p class="faint" style="margin-top:56px;font-size:12px;text-transform:uppercase;letter-spacing:.08em">What the team covers</p>'
  +     '<div class="grid-3" style="margin-top:24px">'+disciplinesHtml+'</div>'
  +   '</div>'
  + '</section>'

  + '<section class="section section-b">'
  +   '<div class="wrap">'
  +     eyebrow('Our Stack')"""
rep(old_close, new_close, "close")

# 3 ── disciplines data
rep("""  var stackHtml = STACK.map(function(s){""",
    """  var DISCIPLINES = [
    { icon: "seo",     title: "Consulting & Audit",        body: "Funnel and process audits, systems design, and the prioritized plan every engagement starts from." },
    { icon: "shopify", title: "Shopify Development",       body: "Store builds, theme customization, checkout configuration, migrations and app work." },
    { icon: "meta",    title: "Performance Marketing",     body: "Meta and paid campaigns run as an ongoing system \\u2014 structure, audiences and creative testing." },
    { icon: "trend",   title: "SEO",                       body: "Technical and on-page SEO, keyword and content strategy, and Shopify-specific search work." },
    { icon: "flow",    title: "Automation & Integrations", body: "CRM, marketing automation, POS and accounting wired together so the data only gets entered once." },
    { icon: "suite",   title: "Support & Training",        body: "Handover, documentation and ongoing support, so the system keeps running after we hand over the keys." }
  ];
  var disciplinesHtml = DISCIPLINES.map(function(d){
    return ''
    + '<div>'
    +   iconBox(d.icon)
    +   '<h3 class="serif" style="margin-top:16px;font-size:18px">'+d.title+'</h3>'
    +   '<p class="muted" style="margin-top:8px;font-size:14px;line-height:1.6">'+d.body+'</p>'
    + '</div>';
  }).join('');

  var stackHtml = STACK.map(function(s){""", "disciplines")

# 4 ── CSS
rep(".wx-flags{", """.founder-portrait{display:block;width:100%;max-width:420px;aspect-ratio:4/5;object-fit:cover;border:1px solid var(--line-t)}
@media(max-width:899px){.founder-portrait{max-width:320px;margin:0 auto}}
.wx-flags{""", "css")

io.open(p,"w",encoding="utf-8").write(s)
print("ok")
