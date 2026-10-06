import base64, io, json, os

FONT = io.open("runalto.txt", encoding="utf-8").read().strip()
OUT = json.load(open("outcomes.json"))
CLIENTS = {
 "firoz-pickles": ("Firoz Pickles", "firozpickles.com"),
 "feza-dates":    ("Feza Dates",    "fezadates.com"),
 "x-emirates":    ("X Emirates",    "xemirates.online"),
 "chandanveda":   ("Chandanveda",   "chandanveda.com"),
}

HEAD = """<meta charset="utf-8"><style>
@font-face{font-family:'Runalto';src:url('%(font)s') format('woff');font-weight:400;font-display:block}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1200px;height:800px;overflow:hidden}
body{background:#030303;color:#f4f2ec;font-family:-apple-system,'Helvetica Neue',Arial,sans-serif;position:relative}
.grid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(8,1fr);z-index:0}
.grid span{border-left:1px solid rgba(244,242,236,.09)}.grid span:first-child{border-left:none}
"""

# ── pattern: framed live-store screenshot ─────────────────────────
PATTERN = """<!doctype html><html><head>""" + HEAD + """
.glow{position:absolute;left:50%%;top:-220px;transform:translateX(-50%%);width:1000px;height:700px;border-radius:50%%;
 background:radial-gradient(circle,rgba(3,107,88,.35) 0%%,transparent 65%%);z-index:0}
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
<p class="cap"><i>&#9679;</i> Live store &mdash; %(name)s</p>
<div class="frame"><div class="bar"><span class="d"></span><span class="d"></span><span class="d"></span><span class="addr">%(url)s</span></div>
<div class="shot"><img src="%(shot)s" /></div></div>
</body></html>"""

# ── quote: outcome card ───────────────────────────────────────────
QUOTE = """<!doctype html><html><head>""" + HEAD + """
.glow{position:absolute;right:-240px;bottom:-280px;width:900px;height:900px;border-radius:50%%;
 background:radial-gradient(circle,rgba(3,107,88,.34) 0%%,transparent 66%%);z-index:0}
.in{position:absolute;inset:0;padding:96px 100px;display:flex;flex-direction:column;justify-content:center;z-index:1}
.k{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#8a8880}
.big{font-family:'Runalto',Georgia,serif;font-size:%(bigsize)spx;line-height:1;color:#0d9c80;margin-top:%(bigtop)spx}
.txt{font-family:'Runalto',Georgia,serif;font-size:40px;line-height:1.28;margin-top:32px;max-width:940px;letter-spacing:-.005em}
.rule{width:64px;height:2px;background:#0d9c80;margin-top:40px}
.who{margin-top:24px;font-size:14px;letter-spacing:.12em;text-transform:uppercase;color:#9a9890}
.who b{color:#f4f2ec;font-weight:500}
</style></head><body>
<div class="grid"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
<div class="glow"></div>
<div class="in">
 <p class="k">The Outcome</p>
 %(bigblock)s
 <p class="txt">%(outcome)s</p>
 <div class="rule"></div>
 <p class="who"><b>%(name)s</b> &nbsp;·&nbsp; Delivered by Zyvex Tech</p>
</div></body></html>"""

def b64(path):
    return "data:image/jpeg;base64," + base64.b64encode(open(path,"rb").read()).decode()

for slug,(name,url) in CLIENTS.items():
    shot = b64("shots/%s.jpg" % slug)
    io.open("posters/%s-pattern.html" % slug, "w", encoding="utf-8").write(
        PATTERN % dict(font=FONT, name=name, url=url, shot=shot))
    o = OUT[slug]
    big = ('<p class="big">%s</p>' % o["stat"]) if o["stat"] else ""
    io.open("posters/%s-quote.html" % slug, "w", encoding="utf-8").write(
        QUOTE % dict(font=FONT, name=name, outcome=o["outcome"], bigblock=big,
                     bigsize=96, bigtop=(20 if o["stat"] else 0)))
    print("built", slug)
