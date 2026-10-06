# -*- coding: utf-8 -*-
import base64, io, json, os
FONT = io.open("runalto.txt", encoding="utf-8").read().strip()

NEW = {
 "colin-guest":   dict(name="Colin Guest",     cat="Shopify \u00b7 Zoho \u00b7 SEO", url="colinguest.com",
                       items=["Outfit-led landing page","Scroll-driven lookbook","Zoho POS + Books"]),
 "colin-scroll":  dict(name="Colin Guest",     cat="Scroll-Driven Shopping", url="colinguest.com",
                       items=["Shop the whole look","Scroll animation","Sticky product panel"]),
 "wolgan":        dict(name="Wolgan",          cat="Business Website · SEO · Google Ads", url="wolgan.co",
                       items=["Corporate site build","Service & sector structure","SEO + Google Ads launch"]),
 "abclux":        dict(name="ABC LUX",         cat="Business Website · Luxury", url="abclux.qa",
                       items=["High-end brand site","Motion & interaction design","Collection showcase"]),
 "beyondspare":   dict(name="BeyondSpare",     cat="Business Website · Lead Generation", url="beyondspare.ae",
                       items=["Lead-focused build","Quote request flow","Google-ready structure"]),
 "ba51":          dict(name="BA51 Eyewear",    cat="Shopify · Custom Checkout", url="ba51eyewear.com",
                       items=["Handcrafted eyewear store","Custom lens checkout","Shop Pay & carriers"]),
 "nichespectacles":dict(name="Niche Spectacles",cat="Shopify · SEO · UK Retail", url="nichespectacles.com",
                       items=["Premium frames & sunglasses","Shop Pay checkout","UK carrier integration"]),
 "frenchcakes":   dict(name="French Cakes",    cat="Shopify · UAE Delivery", url="frenchcakes.ae",
                       items=["UAE-market store","Fast-delivery flow","Cakes & flowers catalog"]),
 "cocoroots":     dict(name="Coco Roots Organic", cat="Shopify · CRO · Meta Ads", url="cocorootsorganic.com",
                       items=["Conversion-led pages","Before/after & UGC","Bundles, upsells, cross-sells"]),
 "turmaroot":     dict(name="Turmaroot",       cat="Shopify · Ayurvedic Brand", url="turmaroot.com",
                       items=["Ritual-led store build","Shop by concern","Heritage brand identity"]),
 "thebombcase":   dict(name="The Bomb Cases",  cat="Shopify · Conversion", url="thebombcase.com",
                       items=["iPhone & Galaxy catalog","Device-model routing","Conversion-first layout"]),
}

POSTER = """<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:'Runalto';src:url('%(font)s') format('woff');font-weight:400;font-display:block}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1200px;height:630px;overflow:hidden}
body{background:#030303;color:#f4f2ec;font-family:-apple-system,'Helvetica Neue',Arial,sans-serif;position:relative}
.grid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(8,1fr);z-index:0}
.grid span{border-left:1px solid rgba(244,242,236,.10)}.grid span:first-child{border-left:none}
.glow{position:absolute;right:-180px;top:-160px;width:760px;height:760px;border-radius:50%%;
 background:radial-gradient(circle,rgba(3,107,88,.38) 0%%,rgba(3,73,61,.14) 45%%,transparent 70%%);z-index:0}
.copy{position:absolute;left:64px;top:104px;width:400px;z-index:1}
.kicker{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#8a8880}
.name{font-family:'Runalto',Georgia,serif;font-size:58px;line-height:1.02;margin-top:20px;letter-spacing:-.01em}
.name .dot{color:#0d9c80}
.rule{width:56px;height:2px;background:#0d9c80;margin-top:26px}
.items{list-style:none;margin-top:24px}
.items li{font-size:15px;line-height:1.35;color:#9a9890;display:flex;gap:10px;margin-top:11px}
.items li::before{content:'';width:5px;height:5px;border-radius:50%%;background:#0d9c80;flex:0 0 auto;margin-top:6px}
.tag{position:absolute;left:64px;bottom:116px;display:inline-flex;align-items:center;gap:8px;z-index:1;
 border:1px solid rgba(244,242,236,.18);padding:7px 14px;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#c9c7c0}
.tag i{width:6px;height:6px;border-radius:50%%;background:#0d9c80;font-style:normal}
.url{position:absolute;left:64px;bottom:62px;font-size:13px;letter-spacing:.09em;text-transform:uppercase;color:#6b6a64;z-index:1}
.url i{font-style:normal;color:#0d9c80}
.frame{position:absolute;left:512px;top:84px;width:792px;height:462px;background:#0c0c0c;z-index:1;
 border:1px solid rgba(244,242,236,.16);border-radius:10px 0 0 10px;overflow:hidden;
 box-shadow:0 40px 90px rgba(0,0,0,.65),0 0 0 1px rgba(3,107,88,.18)}
.bar{height:38px;background:#141413;border-bottom:1px solid rgba(244,242,236,.12);display:flex;align-items:center;gap:8px;padding:0 14px}
.d{width:9px;height:9px;border-radius:50%%;background:rgba(244,242,236,.22)}
.addr{margin-left:12px;flex:1;height:22px;border-radius:11px;background:rgba(244,242,236,.07);
 display:flex;align-items:center;padding:0 12px;font-size:11px;color:#9a9890;letter-spacing:.04em}
.shot{height:424px;overflow:hidden}.shot img{width:100%%;display:block}
</style></head><body>
<div class="grid"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
<div class="glow"></div>
<div class="copy"><p class="kicker">%(cat)s</p><h1 class="name">%(name)s<span class="dot">.</span></h1>
<div class="rule"></div><ul class="items">%(items)s</ul></div>
<div class="tag"><i></i>Built by Zyvex Tech</div>
<p class="url"><i>&#8599;</i> %(url)s</p>
<div class="frame"><div class="bar"><span class="d"></span><span class="d"></span><span class="d"></span><span class="addr">%(url)s</span></div>
<div class="shot"><img src="%(shot)s" /></div></div>
</body></html>"""

PATTERN = """<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1200px;height:800px;overflow:hidden}
body{background:#030303;position:relative;font-family:-apple-system,'Helvetica Neue',Arial,sans-serif}
.grid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(8,1fr)}
.grid span{border-left:1px solid rgba(244,242,236,.09)}.grid span:first-child{border-left:none}
.glow{position:absolute;left:50%%;top:-220px;transform:translateX(-50%%);width:1000px;height:700px;border-radius:50%%;
 background:radial-gradient(circle,rgba(3,107,88,.35) 0%%,transparent 65%%)}
.frame{position:absolute;left:84px;top:96px;width:1032px;height:640px;background:#0c0c0c;border:1px solid rgba(244,242,236,.16);
 border-radius:12px;overflow:hidden;box-shadow:0 46px 100px rgba(0,0,0,.7),0 0 0 1px rgba(3,107,88,.16)}
.bar{height:42px;background:#141413;border-bottom:1px solid rgba(244,242,236,.12);display:flex;align-items:center;gap:8px;padding:0 16px}
.d{width:10px;height:10px;border-radius:50%%;background:rgba(244,242,236,.22)}
.addr{margin-left:14px;flex:1;max-width:420px;height:24px;border-radius:12px;background:rgba(244,242,236,.07);display:flex;align-items:center;
 padding:0 14px;font-size:12px;color:#9a9890;letter-spacing:.04em}
.shot{height:598px;overflow:hidden}.shot img{width:100%%;display:block}
.cap{position:absolute;left:84px;top:52px;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#6b6a64}
.cap i{font-style:normal;color:#0d9c80}
</style></head><body>
<div class="grid"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
<div class="glow"></div>
<p class="cap"><i>&#9679;</i> Live site &mdash; %(name)s</p>
<div class="frame"><div class="bar"><span class="d"></span><span class="d"></span><span class="d"></span><span class="addr">%(url)s</span></div>
<div class="shot"><img src="%(shot)s" /></div></div>
</body></html>"""

def b64(path):
    return "data:image/jpeg;base64," + base64.b64encode(open(path,"rb").read()).decode()

os.makedirs("posters", exist_ok=True)
for slug, c in NEW.items():
    shot = b64("shots/%s.jpg" % slug)
    items = "".join("<li>%s</li>" % i for i in c["items"])
    io.open("posters/n-%s.html" % slug, "w", encoding="utf-8").write(
        POSTER % dict(font=FONT, cat=c["cat"], name=c["name"], url=c["url"], shot=shot, items=items))
    io.open("posters/n-%s-pattern.html" % slug, "w", encoding="utf-8").write(
        PATTERN % dict(name=c["name"], url=c["url"], shot=shot))
    print("built", slug)
io.open("new_slugs.txt","w").write("\n".join(NEW.keys()))
