import base64, io, json, os, sys

FONT = io.open("runalto.txt", encoding="utf-8").read().strip()

CLIENTS = {
 "firoz-pickles": dict(name="Firoz Pickles", cat="Ecommerce · Shopify · CRO", url="firozpickles.com",
     stat="2.4x", statLabel="conversion lift",
     items=["Funnel &amp; store CRO audit", "Landing page &amp; checkout fixes", "Testable, attributable changes"]),
 "feza-dates":    dict(name="Feza Dates",    cat="Ecommerce · Shopify",       url="fezadates.com", stat="", statLabel="",
     items=["Catalog architecture", "Checkout &amp; payment setup", "Clean team handover"]),
 "x-emirates":    dict(name="X Emirates",    cat="Ecommerce · Shopify · SEO", url="xemirates.online", stat="", statLabel="",
     items=["End-to-end Shopify build", "Catalog &amp; product pages", "Payments &amp; checkout setup"]),
 "chandanveda":   dict(name="Chandanveda",   cat="Ecommerce · Shopify",       url="chandanveda.com", stat="", statLabel="",
     items=["Theme customization", "Catalog structure", "Supportable handover"]),
}

TPL = """<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:'Runalto';src:url('%(font)s') format('woff');font-weight:400;font-display:block}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1200px;height:630px;overflow:hidden}
body{background:#030303;color:#f4f2ec;font-family:-apple-system,'Helvetica Neue',Arial,sans-serif;position:relative}
.grid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(8,1fr);z-index:0}
.grid span{border-left:1px solid rgba(244,242,236,.10)}
.grid span:first-child{border-left:none}
.glow{position:absolute;right:-180px;top:-160px;width:760px;height:760px;border-radius:50%%;
  background:radial-gradient(circle,rgba(3,107,88,.38) 0%%,rgba(3,73,61,.14) 45%%,transparent 70%%);z-index:0}
.stage{position:absolute;inset:0;z-index:1}
.copy{position:absolute;left:64px;top:96px;width:400px}
.kicker{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#8a8880}
.name{font-family:'Runalto',Georgia,serif;font-size:62px;line-height:1.02;margin-top:20px;letter-spacing:-.01em}
.name .dot{color:#0d9c80}
.rule{width:56px;height:2px;background:#0d9c80;margin-top:28px}
.items{list-style:none;margin-top:26px}
.items li{font-size:15px;line-height:1.35;color:#9a9890;display:flex;align-items:flex-start;gap:10px;margin-top:11px}
.items li::before{content:'';width:5px;height:5px;border-radius:50%%;background:#0d9c80;flex:0 0 auto;margin-top:6px}
.stat{margin-top:30px}
.stat b{font-family:'Runalto',Georgia,serif;font-size:46px;font-weight:400;color:#0d9c80;display:block;line-height:1}
.stat span{display:block;margin-top:8px;font-size:13px;letter-spacing:.09em;text-transform:uppercase;color:#9a9890}
.url{position:absolute;left:64px;bottom:64px;font-size:13px;letter-spacing:.09em;text-transform:uppercase;color:#6b6a64}
.url i{font-style:normal;color:#0d9c80}
.frame{position:absolute;left:512px;top:84px;width:792px;height:462px;background:#0c0c0c;
  border:1px solid rgba(244,242,236,.16);border-radius:10px 0 0 10px;overflow:hidden;
  box-shadow:0 40px 90px rgba(0,0,0,.65), 0 0 0 1px rgba(3,107,88,.18)}
.bar{height:38px;background:#141413;border-bottom:1px solid rgba(244,242,236,.12);display:flex;align-items:center;gap:8px;padding:0 14px}
.dot3{width:9px;height:9px;border-radius:50%%;background:rgba(244,242,236,.22)}
.addr{margin-left:12px;flex:1;height:22px;border-radius:11px;background:rgba(244,242,236,.07);
  display:flex;align-items:center;padding:0 12px;font-size:11px;color:#9a9890;letter-spacing:.04em}
.shotwrap{height:424px;overflow:hidden}
.shotwrap img{width:100%%;display:block}
.tag{position:absolute;left:64px;bottom:118px;display:inline-flex;align-items:center;gap:8px;
  border:1px solid rgba(244,242,236,.18);padding:7px 14px;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#c9c7c0}
.tag i{width:6px;height:6px;border-radius:50%%;background:#0d9c80;font-style:normal}
</style></head><body>
<div class="grid"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
<div class="glow"></div>
<div class="stage">
  <div class="copy">
    <p class="kicker">%(cat)s</p>
    <h1 class="name">%(name)s<span class="dot">.</span></h1>
    <div class="rule"></div>
    <ul class="items">%(items)s</ul>
    %(statblock)s
  </div>
  <div class="tag"><i></i>Built by Zyvex Tech</div>
  <p class="url"><i>↗</i> %(url)s</p>
  <div class="frame">
    <div class="bar"><span class="dot3"></span><span class="dot3"></span><span class="dot3"></span>
      <span class="addr">%(url)s</span></div>
    <div class="shotwrap"><img src="%(shot)s" /></div>
  </div>
</div></body></html>"""

def build(slug):
    c = CLIENTS[slug]
    shot = "data:image/jpeg;base64," + base64.b64encode(open("shots/%s.jpg" % slug, "rb").read()).decode()
    statblock = ('<div class="stat"><b>%s</b><span>%s</span></div>' % (c["stat"], c["statLabel"])) if c["stat"] else ""
    items = "".join("<li>%s</li>" % i for i in c["items"])
    html = TPL % dict(font=FONT, cat=c["cat"], name=c["name"], url=c["url"], shot=shot, statblock=statblock, items=items)
    p = "posters/%s.html" % slug
    io.open(p, "w", encoding="utf-8").write(html)
    return p

if __name__ == "__main__":
    for s in (sys.argv[1:] or CLIENTS.keys()):
        print(build(s))
