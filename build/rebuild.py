# -*- coding: utf-8 -*-
"""Rebuild the artifact variant and the production bundle from index.html."""
import io, re, os, base64, hashlib, shutil, subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
os.chdir(HERE)

# 1 ── artifact variant (hash routing)
SRC = os.path.join(ROOT, "src", "index.html")
s = io.open(SRC, encoding="utf-8").read()
m = "<script>\nvar LOGO_DATA_URI"
assert s.count(m) == 1
artifact_html = s.replace(m, "<script>\nwindow.__ZYVEX_HASH__ = true;\nvar LOGO_DATA_URI", 1)
io.open(os.path.join(ROOT, "index.artifact.html"), "w", encoding="utf-8").write(artifact_html)
print("artifact variant written")

# 2 ── production bundle
OUT = os.path.join(ROOT, "dist")
ASSETS = os.path.join(OUT, "assets")
shutil.rmtree(OUT, ignore_errors=True)
os.makedirs(ASSETS, exist_ok=True)
io.open(os.path.join(OUT, "index.artifact.html"), "w", encoding="utf-8").write(artifact_html)

EXT = {"image/jpeg": "jpg", "image/png": "png", "image/svg+xml": "svg",
       "font/woff": "woff", "font/woff2": "woff2"}
seen, count = {}, [0]

def sub(mo):
    mime, b64 = mo.group(1), mo.group(2)
    h = hashlib.sha1(b64.encode()).hexdigest()[:10]
    if h in seen:
        return seen[h]
    count[0] += 1
    ctx = s[max(0, mo.start() - 90):mo.start()]
    # images are named by content hash, so a changed image gets a new URL and
    # the year-long immutable cache on /assets/ never serves a stale copy
    stem = "logo" if "LOGO_DATA_URI" in ctx else ("runalto" if "Runalto" in ctx else "img-" + h)
    name = stem + "." + EXT.get(mime, "bin")
    if os.path.exists(os.path.join(ASSETS, name)):
        name = "%s-%s.%s" % (stem, h[:5], EXT.get(mime, "bin"))
    open(os.path.join(ASSETS, name), "wb").write(base64.b64decode(b64))
    seen[h] = "assets/" + name
    return seen[h]

body = re.sub(r'data:(image/[a-z+]+|font/woff2?);(?:charset=utf-8;)?base64,([A-Za-z0-9+/=]+)', sub, s)
body = body.replace("assets/", "/assets/")

io.open(os.path.join(ASSETS, "app.css"), "w", encoding="utf-8").write(
    re.search(r"<style>\n(.*?)\n</style>", body, re.S).group(1))
js = re.search(r"<script>\n(.*?)\n</script>", body, re.S).group(1)
io.open(os.path.join(ASSETS, "app.js"), "w", encoding="utf-8").write(js)
io.open(os.path.join(HERE, "app.js"), "w", encoding="utf-8").write(js)
print("assets extracted:", len(os.listdir(ASSETS)))

# 2b ── static pages and media, copied verbatim (the imported portfolio:
#       works.html, works/<slug>.html and their assets under /lp/)
STATIC = os.path.join(ROOT, "static")
if os.path.isdir(STATIC):
    shutil.copytree(STATIC, OUT, dirs_exist_ok=True)
    print("static files:", sum(len(f) for _, _, f in os.walk(STATIC)))

# 3 ── prerender every route
env = os.environ.copy()
env["DIST_DIR"] = OUT
p = subprocess.run(["node", "prerender.js"], cwd=HERE, env=env, capture_output=True, text=True)
if p.stdout:
    print(p.stdout.strip())
if p.stderr:
    print("Prerender warnings/errors:", p.stderr.strip())

# 4 ── config files
io.open(os.path.join(OUT, "vercel.json"), "w", encoding="utf-8").write("""{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    { "source": "/assets/(.*)", "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }] },
    { "source": "/(.*)", "headers": [
      { "key": "X-Content-Type-Options", "value": "nosniff" },
      { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
    ]}
  ]
}
""")
io.open(os.path.join(OUT, "serve.json"), "w", encoding="utf-8").write("""{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    { "source": "/assets/**", "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }] },
    { "source": "/**", "headers": [
      { "key": "X-Content-Type-Options", "value": "nosniff" },
      { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
    ]}
  ]
}
""")
io.open(os.path.join(OUT, "robots.txt"), "w", encoding="utf-8").write(
    "User-agent: *\nAllow: /\n\nSitemap: https://www.zyvextech.co/sitemap.xml\n")

# 5 ── zip bundle for deployment
zip_base = os.path.join(ROOT, "dist")
shutil.make_archive(zip_base, "zip", OUT)
zip_file = zip_base + ".zip"
print("zip: %.2f MB" % (os.path.getsize(zip_file) / 1048576))
print("files:", sum(len(f) for _, _, f in os.walk(OUT)))
