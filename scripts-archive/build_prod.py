# -*- coding: utf-8 -*-
import io, re, os, base64, hashlib, json

SRC = "index.html"
OUT = "/mnt/user-data/outputs/zyvex-site"
ASSETS = os.path.join(OUT, "assets")
os.makedirs(ASSETS, exist_ok=True)

s = io.open(SRC, encoding="utf-8").read()
orig_len = len(s.encode())

EXT = {"image/jpeg":"jpg","image/png":"png","image/svg+xml":"svg","image/webp":"webp",
       "font/woff":"woff","font/woff2":"woff2"}

# nice names where we can infer them
def nice(idx, mime, context):
    base = "asset-%02d" % idx
    for key, label in [("LOGO_DATA_URI","logo"), ("Runalto","runalto"), ("TEAM_PHOTO","team-placeholder")]:
        if key in context:
            base = label
            break
    return base + "." + EXT.get(mime, "bin")

pattern = re.compile(r'data:(image/[a-z+]+|font/woff2?);(?:charset=utf-8;)?base64,([A-Za-z0-9+/=]+)')
seen, mapping, count = {}, {}, 0
def sub(m):
    global count
    mime, b64 = m.group(1), m.group(2)
    h = hashlib.sha1(b64.encode()).hexdigest()[:10]
    if h in seen:
        return seen[h]
    count += 1
    ctx = s[max(0, m.start()-90):m.start()]
    name = nice(count, mime, ctx)
    if os.path.exists(os.path.join(ASSETS, name)):
        name = "%s-%s.%s" % (name.rsplit(".",1)[0], h[:5], EXT.get(mime,"bin"))
    open(os.path.join(ASSETS, name), "wb").write(base64.b64decode(b64))
    path = "assets/" + name
    seen[h] = path
    return path

body = pattern.sub(sub, s)

TITLE = "Zyvex Tech — Shopify, Performance Marketing &amp; SEO"
DESC = ("Zyvex Tech is a consulting, implementation and performance marketing partner. "
        "We consult first, tell you which tools you need and which you don't, build it ourselves, "
        "and maintain and support it — Shopify, Meta Ads, SEO and business websites.")

head = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#030303">
<title>%(title)s</title>
<meta name="description" content="%(desc)s">
<link rel="canonical" href="https://www.zyvextech.co/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Zyvex Tech">
<meta property="og:title" content="%(title)s">
<meta property="og:description" content="%(desc)s">
<meta property="og:url" content="https://www.zyvextech.co/">
<meta property="og:image" content="https://www.zyvextech.co/assets/logo.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="%(title)s">
<meta name="twitter:description" content="%(desc)s">
<meta name="twitter:image" content="https://www.zyvextech.co/assets/logo.png">
<link rel="icon" href="assets/logo.png" type="image/png">
<link rel="apple-touch-icon" href="assets/logo.png">
<style>html,body{margin:0;padding:0;background:#030303}</style>
</head>
<body>
""" % dict(title=TITLE, desc=DESC)

# the artifact file starts with its own <title>; drop it, the head has one
body = re.sub(r"^\s*<title>[^<]*</title>\s*", "", body, count=1)
doc = head + body.strip() + "\n</body>\n</html>\n"

io.open(os.path.join(OUT, "index.html"), "w", encoding="utf-8").write(doc)

io.open(os.path.join(OUT, "vercel.json"), "w", encoding="utf-8").write(json.dumps({
  "cleanUrls": True,
  "trailingSlash": False,
  "headers": [
    {"source": "/assets/(.*)",
     "headers": [{"key": "Cache-Control", "value": "public, max-age=31536000, immutable"}]},
    {"source": "/(.*)",
     "headers": [
       {"key": "X-Content-Type-Options", "value": "nosniff"},
       {"key": "Referrer-Policy", "value": "strict-origin-when-cross-origin"}
     ]}
  ],
  "rewrites": [{"source": "/(.*)", "destination": "/index.html"}]
}, indent=2) + "\n")

io.open(os.path.join(OUT, "robots.txt"), "w", encoding="utf-8").write(
  "User-agent: *\nAllow: /\n\nSitemap: https://www.zyvextech.co/sitemap.xml\n")

io.open(os.path.join(OUT, "sitemap.xml"), "w", encoding="utf-8").write(
  '<?xml version="1.0" encoding="UTF-8"?>\n'
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  '  <url><loc>https://www.zyvextech.co/</loc><priority>1.0</priority></url>\n'
  '</urlset>\n')

total_assets = sum(os.path.getsize(os.path.join(ASSETS,f)) for f in os.listdir(ASSETS))
print("assets extracted: %d files, %.2f MB" % (len(os.listdir(ASSETS)), total_assets/1048576))
print("index.html: %.0f KB  (was %.2f MB inline)" % (len(doc.encode())/1024, orig_len/1048576))
