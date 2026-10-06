# -*- coding: utf-8 -*-
"""Import the portfolio from the India landing site into this site.

One-off importer, kept so the import can be re-run when the landing site's
portfolio changes:

    python build/import_landing_works.py /path/to/zyvex-landing-page

It copies the landing site's /works page and every case study into
static/works.html and static/works/<slug>.html, and its assets into
static/lp/. build/rebuild.py then copies static/ into dist/ verbatim.
It also writes a set of landing home-page sections (client logos, results,
tools, reporting, founder, team, why us, reels, testimonials) into
src/index.html between generated markers, for this site's home page.

What it changes on the way in:
  - asset paths  /assets/...  ->  /lp/...   (keeps them clear of this site's /assets)
  - header and footer replaced with this site's navigation
  - internal links use this site's routes (no trailing slash, /contact, ...)
  - canonical / Open Graph URLs point at www.zyvextech.co
  - landing-only tracking removed: attribution.js, the Meta Pixel loader and
    the /api/config call (this site runs no analytics by design)
"""
import io, os, re, sys, shutil, glob

SITE = "https://www.zyvextech.co"
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
STATIC = os.path.join(ROOT, "static")
LP = os.path.join(STATIC, "lp")

SKIP_ASSETS = {"attribution.js", "app.js"}   # tracking / Pixel loader

HEADER = """<header class="site-header">
<div class="header-in">
<a class="brand" href="/">
<img src="/lp/logo.png" alt="">
<span class="brand-name">Zyvex Tech</span>
</a>
<nav class="nav zx-nav" aria-label="Main">
<div class="zx-item"><a href="/services" class="nav-link">Services<span class="zx-caret" aria-hidden="true"></span></a><!--zx-dropdown:services--></div>
<a href="/works" class="nav-link active">Works</a>
<a href="/our-story" class="nav-link">Our Story</a>
<a href="/blog" class="nav-link">Blog</a>
<div class="zx-item"><a href="/contact" class="nav-link zx-nav-cta">Contact<span class="zx-caret" aria-hidden="true"></span></a><!--zx-dropdown:contact--></div>
</nav>
</div>
</header>"""

FOOTER = """<footer class="site-footer zx-footer">
<div class="footer-in">
<span>&#169; Zyvex Tech LLP &#183; Calicut, India &#183; Working worldwide</span>
<span>
<a href="/services">Services</a> &#183;
<a href="/works">Works</a> &#183;
<a href="/our-story">Our Story</a> &#183;
<a href="/blog">Blog</a> &#183;
<a href="/contact">Contact</a>
</span>
</div>
</footer>"""

# Case-study behaviour from the landing site's assets/app.js, minus the Pixel.
CASE_APP_JS = """/* Case-study pages: scroll reveal and founder video.
   Imported from the landing site's assets/app.js with the Meta Pixel removed. */
var CONFIG = { FOUNDER_VIDEO: "", FOUNDER_POSTER: "" };
function initFounderVideo(){
  var v = document.getElementById('founder-video'), empty = document.getElementById('video-empty');
  if(!v || !CONFIG.FOUNDER_VIDEO) return;
  v.src = CONFIG.FOUNDER_VIDEO;
  if(CONFIG.FOUNDER_POSTER) v.poster = CONFIG.FOUNDER_POSTER;
  if(empty) empty.style.display = 'none';
}
function initReveal(){
  var els = document.querySelectorAll('.rv');
  if(!els.length) return;
  if(!('IntersectionObserver' in window)){
    Array.prototype.forEach.call(els, function(el){ el.classList.add('in'); });
    return;
  }
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); obs.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  Array.prototype.forEach.call(els, function(el){ obs.observe(el); });
}
document.addEventListener('DOMContentLoaded', function(){ initFounderVideo(); initReveal(); });
"""

# Small layer on top of the landing CSS for this site's header and footer.
SITE_NAV_CSS = """/* This site's navigation on the imported portfolio pages. */
/* Portfolio grid: 2 columns on desktop, 1 on phones */
.wgrid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:28px!important}
@media(max-width:760px){.wgrid{grid-template-columns:1fr!important}}
.zx-nav{display:flex;align-items:center;gap:26px}
.zx-nav .nav-link{font-size:12.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);transition:color .15s}
.zx-nav .nav-link:hover,.zx-nav .nav-link.active{color:var(--ink)}
.zx-nav .zx-nav-cta{background:var(--teal);color:#fff!important;padding:9px 16px;border-radius:2px}
.zx-nav .zx-nav-cta:hover{background:var(--teal2)}
@media(max-width:760px){
  .site-header .header-in{flex-direction:row!important;align-items:center!important;justify-content:space-between;height:60px!important;padding:0 16px;gap:14px}
  .site-header .brand{flex:0 0 auto}
  .site-header .brand-name{display:none}
  .zx-nav{gap:14px;overflow-x:auto;scrollbar-width:none}
  .zx-nav::-webkit-scrollbar{display:none}
  .zx-nav .nav-link{font-size:11px;white-space:nowrap}
  .zx-nav .zx-nav-cta{padding:7px 11px}
}
@media(max-width:440px){.zx-nav .nav-link:nth-child(3),.zx-nav .nav-link:nth-child(4){display:none}}
/* Services / Contact dropdowns. The links are filled in at build time by
   build/prerender.js from the site's own menu, replacing <!--zx-dropdown:key-->. */
.zx-item{position:relative;display:flex;align-items:center}
.zx-item > .nav-link{display:inline-flex;align-items:center;gap:6px}
.zx-caret{width:6px;height:6px;border-right:1.4px solid currentColor;border-bottom:1.4px solid currentColor;transform:rotate(45deg);opacity:.65;margin-top:-3px;transition:transform .15s,margin-top .15s}
.zx-item:hover .zx-caret,.zx-item:focus-within .zx-caret{transform:rotate(225deg);margin-top:3px}
.zx-dd{position:absolute;top:100%;left:-12px;margin-top:14px;width:290px;background:#fff;border:1px solid var(--line);
  box-shadow:0 24px 48px rgba(13,18,17,.12);padding:10px 0;opacity:0;visibility:hidden;transform:translateY(-6px);
  transition:opacity .15s,visibility .15s,transform .15s;z-index:60;max-height:70vh;overflow-y:auto;text-align:left}
.zx-dd::before{content:"";position:absolute;left:0;right:0;top:-16px;height:16px}
.zx-dd.align-right{left:auto;right:0}
.zx-item:hover .zx-dd,.zx-item:focus-within .zx-dd{opacity:1;visibility:visible;transform:translateY(0)}
.zx-dd a{display:block;padding:9px 20px;font-size:13.5px;line-height:1.35;color:var(--muted);text-transform:none;letter-spacing:0;font-weight:400}
.zx-dd a:hover{color:var(--ink);background:rgba(13,18,17,.04)}
.zx-dd a.dd-all{color:var(--ink);font-size:11.5px;font-weight:600;text-transform:uppercase;letter-spacing:.07em}
.zx-dd-divider{height:1px;background:var(--line);margin:8px 0}
@media(max-width:760px){.zx-dd,.zx-caret{display:none}}
.zx-footer .footer-in{max-width:1180px;margin:0 auto;padding:0 32px;display:flex;flex-wrap:wrap;gap:12px 24px;justify-content:space-between}
.zx-footer a{color:var(--muted)}
"""


# ── No currency anywhere ──────────────────────────────────────────────
# This site does not mention rupees (₹, lakhs, Rs.) anywhere; pounds and
# dirhams on the UK and UAE case studies stay. Landing-site copy that
# quotes rupees is rewritten here (figures become multiples/percentages), screenshots
# that only exist to show money figures are dropped, and the X Emirates
# banner (which reads "₹76 Lakhs") is replaced by build/lp-overrides/.
NO_CURRENCY = [
    # X Emirates: card lines, meta descriptions, hero, metrics
    (r"From WhatsApp orders to &#8377;76 lakhs in Shopify revenue, 8\.32x ROAS",
     "From WhatsApp orders to a Shopify store with 8.32x ROAS and a 9% conversion rate"),
    (r"reaching &#8377;76 lakhs in revenue, 8\.32x ROAS", "reaching 8.32x ROAS"),
    (r"moved onto a Shopify store we grew to <b>&#8377;76 lakhs in revenue</b>, with 8\.32x ROAS",
     "moved onto a Shopify store where sales grew <b>nearly 13x in the first month</b>, with 8.32x ROAS"),
    (r'<p class="metric-v">&#8377;76L</p><p class="metric-l">Revenue on Shopify</p>',
     '<p class="metric-v">13x</p><p class="metric-l">Sales, first month</p>'),
    (r'<p class="metric-v">&#8377;76L</p><p class="metric-l">Revenue</p>',
     '<p class="metric-v">13x</p><p class="metric-l">Sales, month one</p>'),
    (r"Grew to <b>&#8377;76 lakhs in revenue</b> on Shopify, with",
     "Sales grew <b>nearly 13x in the first month</b> on Shopify, with"),
    # X Emirates case study: revenue section and ROAS section
    (r"&#8377;76 Lakhs in Revenue</h2>", "Sales That Kept Growing</h2>"),
    (r"The store has done <b>&#8377;76,65,516</b> in total sales on Shopify this year, from 1 January to 2 October 2026\.",
     "Within the first month total sales grew <b>nearly 13x</b>, and the store has kept growing through 2026."),
    (r'<div class="wshots">\s*<img src="/lp/work/xemirates-revenue\.jpg"[^>]*>\s*</div>', ""),
    (r"In July 2026 the account spent <b>&#8377;1,80,812</b> and returned <b>&#8377;15,04,356</b> in revenue, a purchase ROAS of <b>8\.32x</b>\.",
     "In July 2026 the account returned <b>8.32x</b> its ad spend in revenue."),
    (r'<div class="metric"><p class="metric-v">&#8377;1\.8L</p><p class="metric-l">Ad spend, July</p></div><div class="metric"><p class="metric-v">&#8377;15\.04L</p><p class="metric-l">Revenue, July</p></div>',
     '<div class="metric"><p class="metric-v">9%</p><p class="metric-l">Conversion rate</p></div><div class="metric"><p class="metric-v">13x</p><p class="metric-l">Sales, first month</p></div>'),
    (r'<div class="wshots">\s*<img src="/lp/work/xemirates-meta-roas\.jpg"[^>]*>\s*</div>', ""),
    (r"a Shopify store that has done &#8377;76 lakhs in revenue, with ads returning",
     "a Shopify store where sales grew nearly 13x in the first month, with ads returning"),
    # X Emirates testimonial
    (r"all I got was a loss, not a single rupee of profit\.", "all I got was a loss, not any profit."),
    (r"total sales went from <b>&#8377;50K to &#8377;6\.45 lakhs</b>\.", "total sales grew <b>nearly 13 times over</b>."),
    (r"total sales went from &#8377;50K to &#8377;6\.45 lakhs\.", "total sales grew nearly 13 times over."),
    (r"&#8377;50K &rarr; &#8377;6\.45L in a month", "13x sales in a month"),
    # Firoz Pickles, reporting section
    (r'<p class="metric-v">₹0</p>', '<p class="metric-v">0</p>'),
    (r"Before we spend a rupee,", "Before we spend anything,"),
]
CURRENCY_RE = re.compile(r"(?i)(₹|&#8377;|rupee|lakh|\binr\b|\brs\.)")
SKIP_ASSETS |= {"xemirates-revenue.jpg", "xemirates-meta-roas.jpg"}   # money screenshots


def no_currency(html, where):
    for pat, rep in NO_CURRENCY:
        html = re.sub(pat, rep, html)
    left = [html[max(0, m.start() - 50):m.end() + 30] for m in CURRENCY_RE.finditer(html)]
    assert not left, (where, left[:3])
    return html


def route(path):
    """Landing-site href -> this site's href."""
    m = re.match(r"^/works/([a-z0-9-]+)/?(#.*)?$", path)
    if m:
        return "/works/" + m.group(1) + (m.group(2) or "")
    table = {
        "/works/": "/works", "/works": "/works",
        "/": "/services/performance-marketing",
        "/shopify/": "/services/shopify-ecommerce-development",
        "/#start": "/contact", "/shopify/#start": "/contact",
        "/#founder": "/our-story", "/#team": "/our-story",
    }
    return table.get(path, path)


def convert(html):
    # drop landing tracking
    html = re.sub(r'<script defer src="/assets/attribution\.js[^"]*"></script>\n?', "", html)
    html = re.sub(r'<script src="/assets/app\.js[^"]*"></script>', '<script src="/lp/case-app.js"></script>', html)
    # inline copies of the Pixel loader (works index, X Emirates)
    html = re.sub(r"<script>\s*/\* ─+\s*Zyvex Tech — case-study pages.*?</script>",
                  '<script src="/lp/case-app.js"></script>', html, flags=re.S)
    assert "fbq(" not in html and "/api/" not in html and "attribution.js" not in html
    # absolute landing URLs -> this site
    html = re.sub(r"https://in\.zyvextech\.co/works/([a-z0-9-]+)/",
                  lambda m: SITE + "/works/" + m.group(1), html)
    html = html.replace("https://in.zyvextech.co/works/", SITE + "/works")
    html = html.replace("https://in.zyvextech.co/assets/", SITE + "/lp/")
    # internal links
    html = re.sub(r'href="(/[^"]*)"', lambda m: 'href="' + (m.group(1) if m.group(1).startswith("/assets/") else route(m.group(1))) + '"', html)
    html = re.sub(r'(<a [^>]*href="/[^"]*")\s+target="_blank" rel="noopener"', r"\1", html)
    # header / footer (after link rewriting, so their links stay as written)
    html = re.sub(r'<header class="site-header">.*?</header>', HEADER, html, count=1, flags=re.S)
    html = re.sub(r'<footer class="site-footer">.*?</footer>', FOOTER, html, count=1, flags=re.S)
    # asset paths
    html = html.replace('"/assets/', '"/lp/').replace("'/assets/", "'/lp/").replace("(/assets/", "(/lp/")
    html = html.replace('<html lang="en-IN">', '<html lang="en">')
    # our nav layer, after the landing stylesheets
    html = html.replace("</head>", '<link rel="stylesheet" href="/lp/site-nav.css">\n</head>', 1)
    assert "in.zyvextech.co" not in html, re.findall(r".{40}in\.zyvextech\.co.{40}", html)[:3]
    return no_currency(html, "page")


def main(src):
    if os.path.isdir(os.path.join(STATIC, "works")):
        shutil.rmtree(os.path.join(STATIC, "works"))
    if os.path.isdir(LP):
        shutil.rmtree(LP)
    os.makedirs(os.path.join(STATIC, "works"), exist_ok=True)

    pages = {"works.html": os.path.join(src, "works", "index.html")}
    for f in sorted(glob.glob(os.path.join(src, "works", "*", "index.html"))):
        pages[os.path.join("works", os.path.basename(os.path.dirname(f)) + ".html")] = f
    for out, f in pages.items():
        io.open(os.path.join(STATIC, out), "w", encoding="utf-8").write(convert(io.open(f, encoding="utf-8").read()))

    # assets: everything under landing assets/, minus tracking
    for dp, _, fs in os.walk(os.path.join(src, "assets")):
        for fn in fs:
            if (fn in {"attribution.js", "app.js"} and dp == os.path.join(src, "assets")) or fn in SKIP_ASSETS - {"attribution.js", "app.js"}:
                continue
            rel = os.path.relpath(os.path.join(dp, fn), os.path.join(src, "assets"))
            dst = os.path.join(LP, rel)
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            if fn.endswith(".css"):
                css = io.open(os.path.join(dp, fn), encoding="utf-8").read()
                io.open(dst, "w", encoding="utf-8").write(css.replace("/assets/", "/lp/"))
            else:
                shutil.copyfile(os.path.join(dp, fn), dst)
    # this site's replacements for landing assets (e.g. the currency-free X Emirates banner)
    ovr = os.path.join(HERE, "lp-overrides")
    if os.path.isdir(ovr):
        shutil.copytree(ovr, LP, dirs_exist_ok=True)
    io.open(os.path.join(LP, "case-app.js"), "w", encoding="utf-8").write(CASE_APP_JS)
    io.open(os.path.join(LP, "site-nav.css"), "w", encoding="utf-8").write(SITE_NAV_CSS)
    print("pages:", len(pages), "| assets:", sum(len(f) for _, _, f in os.walk(LP)))


# ── Home-page sections ────────────────────────────────────────────────
# Sections of the landing home page that this site's home page reuses.
# They are written into src/index.html between generated markers:
#   JS:  /* <lp-home> ... </lp-home> */   var LP_HOME = {...}; initLpHome()
#   CSS: /* <lp-home-css> ... </lp-home-css> */  landing CSS scoped to .lp-sec
HOME_SECTIONS = {               # key: heading text that identifies the section
    "clients": "Trusted by brands across the world",
    "results": "Real results, real brands",
    "tools": "One store, one system",
    "reporting": "Your numbers, explained every month",
    "founder": 'id="founder"',
    "team": "The team behind the systems",
    "why": "What is different here",
    "reels": "Hear it from them",
    "testimonials": "What clients say",
}


def _split_selectors(sel):
    out, depth, cur = [], 0, ""
    for ch in sel:
        if ch in "([": depth += 1
        if ch in ")]": depth -= 1
        if ch == "," and depth == 0:
            out.append(cur); cur = ""
        else:
            cur += ch
    out.append(cur)
    return [x.strip() for x in out if x.strip()]


def scope_css(css, scope):
    """Prefix every selector with `scope`, recursing into @media/@supports.
    Global at-rules (@font-face, @keyframes, @property) are dropped or kept as-is;
    rules aimed at the page itself (:root, html, body, *) are dropped."""
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
    out, i, n = [], 0, len(css)
    while i < n:
        j = css.find("{", i)
        if j < 0: break
        head = css[i:j].strip()
        # find matching brace
        depth, k = 1, j + 1
        while k < n and depth:
            if css[k] == "{": depth += 1
            elif css[k] == "}": depth -= 1
            k += 1
        body = css[j + 1:k - 1]
        i = k
        if head.startswith("@media") or head.startswith("@supports"):
            inner = scope_css(body, scope)
            if inner.strip(): out.append(head + "{" + inner + "}")
        elif head.startswith("@keyframes"):
            out.append(head + "{" + body + "}")
        elif head.startswith("@"):
            continue                       # @font-face, @property: this site has its own
        else:
            sels = []
            for sel in _split_selectors(head):
                if re.match(r"^(:root|html|body|\*)(?![-\w])", sel):
                    continue
                sels.append(scope + " " + sel)
            if sels: out.append(",".join(sels) + "{" + body + "}")
    return "\n".join(out)


COUNTRIES = [("gb", "the UK"), ("ae", "the UAE"), ("qa", "Qatar"), ("sa", "Saudi Arabia"), ("us", "the US"), ("in", "India")]


def clients_flags_in_text(sec):
    """Client logos: drop the flag above each logo and show the flags once,
    beside the country names in the paragraph above the logos."""
    sec, n = re.subn(r'<span class="client-flags">.*?</span>(?=<span class="client-logo">)', "", sec, flags=re.S)
    assert n, "client flags not found"
    flag = lambda c, name: ('<span class="cflag"><img src="/lp/flags/%s.svg" alt="" width="18" height="12">%s</span>' % (c, name))
    names = [flag(c, n) for c, n in COUNTRIES]
    listed = ", ".join(names[:-1]) + " and " + names[-1]
    plain = "the UK, the UAE, Qatar, Saudi Arabia, the US and India"
    assert plain in sec, "clients paragraph changed on the landing site"
    sec = sec.replace(plain, listed, 1)
    # Two rows of bigger logos. On the landing site each row lists its 10
    # logos twice per loop, so a logo can be on screen twice; here each row
    # lists its own logos once per loop, and the logos are bigger, so the
    # loop is wider than the screen.
    rows = re.findall(r'<div class="client-row">.*?</div></div></div>', sec, flags=re.S)
    assert len(rows) == 2, "client rows changed on the landing site"
    def row(old, rev):
        first_set = re.search(r'<div class="logo-set">(.*?)</div>', old, flags=re.S).group(1)
        seen, items = set(), []
        for it in re.findall(r'<span class="client">.*?</span></span>', first_set, flags=re.S):
            src = re.search(r'src="([^"]+)"', it).group(1)
            if src not in seen:
                seen.add(src); items.append(it)
        set_ = "".join(items)
        hidden = re.sub(r'alt="[^"]*"', 'alt=""', set_)
        return ('<div class="client-row"><div class="logo-track%s"><div class="logo-set">%s</div>'
                '<div class="logo-set" aria-hidden="true">%s</div></div></div>' % (" rev" if rev else "", set_, hidden))
    sec = sec.replace(rows[0], row(rows[0], False), 1).replace(rows[1], row(rows[1], True), 1)
    sec = re.sub(r'(<img src="/lp/clients/[^"]+" alt="[^"]*" width=")(\d+)(" height=")(\d+)',
                 lambda m: m.group(1) + str(round(int(m.group(2)) * LOGO_SCALE)) + m.group(3)
                 + str(round(int(m.group(4)) * LOGO_SCALE)), sec)
    return sec


LOGO_SCALE = 1.35          # logos were drawn at .8 of these sizes on the landing site
CLIENTS_CSS = (
    "\n.lp-sec .client-marquee .client-logo{height:%dpx}"
    "\n.lp-sec .client-marquee .client-logo img{transform:none}"
    "\n.lp-sec .client-marquee .logo-set{gap:110px;padding-right:110px}"
    "\n.lp-sec .client-marquee .logo-track{animation-duration:48s}"   # ~45px/s, as before
    "\n@media(max-width:640px){.lp-sec .client-marquee .logo-set{gap:40px;padding-right:40px}"
    ".lp-sec .client-marquee .client-logo{height:%dpx}"
    ".lp-sec .client-marquee .client-logo img{transform:scale(.78)}}" % (round(44 * LOGO_SCALE), round(44 * LOGO_SCALE * .8))
)


def home_sections(src):
    html = io.open(os.path.join(src, "index.html"), encoding="utf-8").read()
    body = html[html.index("<body"):]
    found = {}
    for m in re.finditer(r"<section[^>]*>", body):
        sec = body[m.start():body.index("</section>", m.start()) + len("</section>")]
        for key, marker in HOME_SECTIONS.items():
            if marker in sec and key not in found:
                found[key] = sec
    missing = set(HOME_SECTIONS) - set(found)
    assert not missing, missing
    out = {}
    for key, sec in found.items():
        sec = re.sub(r'(<section class="[^"]*?)\s*\brv\b', r"\1", sec, count=1)   # no scroll-reveal
        sec = re.sub(r'href="(/[^"]*)"', lambda m: 'href="' + route(m.group(1)) + '"', sec)
        sec = re.sub(r'\s+target="_blank" rel="noopener"', "", sec)
        sec = re.sub(r'data-link="(/[^"]*)"', lambda m: 'data-link="' + route(m.group(1)) + '"', sec)
        sec = sec.replace('"/assets/', '"/lp/')
        sec = re.sub(r"\s*\n\s*", "\n", sec)
        if key == "clients":
            sec = clients_flags_in_text(sec)
        sec = no_currency(sec, key)
        out[key] = '<div class="lp-sec lp-' + key + '">' + sec + "</div>"
    css = re.findall(r"<style[^>]*>(.*?)</style>", html, re.S)[0]
    light = io.open(os.path.join(src, "assets", "light.css"), encoding="utf-8").read()
    scoped = scope_css(css, ".lp-sec") + "\n" + scope_css(light, ".lp-sec")
    reels_css = io.open(os.path.join(src, "assets", "reels.css"), encoding="utf-8").read()
    scoped += ("\n.lp-sec .cflag{display:inline-flex;align-items:center;gap:6px;white-space:nowrap}"
               "\n.lp-sec .cflag img{display:inline-block;width:18px;height:12px;border-radius:2px;"
               "box-shadow:0 0 0 1px rgba(13,18,17,.12);vertical-align:middle}") + CLIENTS_CSS
    return out, scoped.replace("/assets/", "/lp/"), re.sub(r"/\*.*?\*/", "", reels_css, flags=re.S).strip()


LP_HOME_JS = r"""
/* Behaviour for the landing sections (from the landing site's inline scripts). */
function initLpHome(){
  /* client slider: hold the featured logos in place until the section is seen */
  var m = document.querySelector('.client-marquee');
  if(m){
    var go = function(){ setTimeout(function(){ m.classList.add('go'); }, 1400); };
    if(!('IntersectionObserver' in window)) go();
    else { var o = new IntersectionObserver(function(e){ if(e[0].isIntersecting){ o.disconnect(); go(); } }, { threshold: .35 }); o.observe(m); }
  }
  /* testimonials: read-more toggles + swipe dots on phones */
  var w = document.querySelector('.tcards');
  if(w){
    w.querySelectorAll('.tcard-toggle').forEach(function(b){ b.addEventListener('click', function(){
      var c = b.closest('.tcard'), op = c.classList.toggle('open');
      b.setAttribute('aria-expanded', op); b.textContent = op ? 'Show less' : 'Read full review'; }); });
    var t = w.querySelector('.tcards-track'), d = w.querySelector('.tcards-dots'), bar = document.createElement('i');
    if(t && d){
      d.appendChild(bar);
      var upd = function(){ var vis = t.clientWidth / t.scrollWidth, max = t.scrollWidth - t.clientWidth, p = max > 0 ? t.scrollLeft / max : 0;
        bar.style.width = (vis * 100) + '%'; bar.style.transform = 'translateX(' + (p * (1 / vis - 1) * 100) + '%)'; };
      t.addEventListener('scroll', upd, { passive: true }); window.addEventListener('resize', upd); upd();
    }
  }
  /* client reels: /lp/reels.js wires up every [data-reels] row when it runs,
     so (re)load it each time a page with reels is rendered */
  if(document.querySelector('[data-reels]')){
    var sc = document.createElement('script'); sc.src = '/lp/reels.js'; document.body.appendChild(sc);
  }
}
"""


def write_home_sections(src):
    secs, css, reels_css = home_sections(src)
    P = os.path.join(ROOT, "src", "index.html")
    s = io.open(P, encoding="utf-8").read()
    import json
    js = ("/* <lp-home> Generated by build/import_landing_works.py from the landing site's\n"
          "   home page. Do not hand-edit: change the landing site and re-run the import. */\n"
          "var LP_HOME = " + json.dumps(secs, ensure_ascii=False, indent=0) + ";\n"
          + LP_HOME_JS + "/* </lp-home> */\n")
    cssblock = ("/* <lp-home-css> Generated by build/import_landing_works.py: the landing site's\n"
                "   styles, scoped to .lp-sec, plus its reels styles. Do not hand-edit. */\n"
                + css + "\n" + reels_css + "\n/* </lp-home-css> */\n")
    if "/* <lp-home>" in s:
        s = re.sub(r"/\* <lp-home>.*?/\* </lp-home> \*/\n", lambda m: js, s, flags=re.S)
        s = re.sub(r"/\* <lp-home-css>.*?/\* </lp-home-css> \*/\n", lambda m: cssblock, s, flags=re.S)
    else:
        s = s.replace("function pageHome(){", js + "\nfunction pageHome(){", 1)
        s = s.replace("</style>", cssblock + "</style>", 1)
    io.open(P, "w", encoding="utf-8").write(s)
    print("home sections:", ", ".join(secs), "| scoped css: %.1f KB" % (len(css) / 1024))


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
    write_home_sections(sys.argv[1])
