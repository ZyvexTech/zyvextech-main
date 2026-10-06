import base64, io
from PIL import Image

FONT = io.open("runalto.txt", encoding="utf-8").read().strip()
CROPS = {
 "firoz-pickles": ((716, 296, 1436, 776), "Firoz Pickles"),
 "feza-dates":    ((680, 200, 1456, 718), "Feza Dates"),
 "x-emirates":    ((392, 176, 1112, 656), "X Emirates"),
 "chandanveda":   ((256, 118,  886, 538), "Chandanveda"),
}

TPL = """<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:'Runalto';src:url('%(font)s') format('woff');font-weight:400;font-display:block}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1200px;height:800px;overflow:hidden}
body{background:#030303;position:relative;font-family:-apple-system,'Helvetica Neue',Arial,sans-serif}
.img{position:absolute;inset:0}
.img img{width:100%%;height:100%%;object-fit:cover;display:block}
.veil{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(3,3,3,.25) 0%%,rgba(3,3,3,0) 28%%,rgba(3,3,3,.10) 60%%,rgba(3,3,3,.88) 100%%)}
.tint{position:absolute;inset:0;background:radial-gradient(circle at 78%% 18%%,rgba(3,107,88,.20),transparent 58%%);mix-blend-mode:screen}
.edge{position:absolute;inset:0;box-shadow:inset 0 0 0 1px rgba(244,242,236,.16)}
.lab{position:absolute;left:48px;bottom:44px;display:flex;align-items:center;gap:10px;
 font-size:15px;letter-spacing:.16em;text-transform:uppercase;color:#e8e6df}
.lab i{width:7px;height:7px;border-radius:50%%;background:#0d9c80;font-style:normal}
</style></head><body>
<div class="img"><img src="%(shot)s" /></div>
<div class="tint"></div><div class="veil"></div><div class="edge"></div>
<p class="lab"><i></i>%(name)s &nbsp;&middot;&nbsp; Store detail</p>
</body></html>"""

for slug,(box,name) in CROPS.items():
    im = Image.open("shots/%s.jpg" % slug).convert("RGB").crop(box)
    im = im.resize((1200, int(1200*im.height/im.width)), Image.LANCZOS)
    buf = io.BytesIO(); im.save(buf, "JPEG", quality=88)
    uri = "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode()
    io.open("posters/%s-detail.html" % slug, "w", encoding="utf-8").write(
        TPL % dict(font=FONT, shot=uri, name=name))
    print("built", slug, im.size)
