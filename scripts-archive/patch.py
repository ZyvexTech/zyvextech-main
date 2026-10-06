import io, re

SRC = "/root/.claude/projects/-home-claude/701de09b-46db-58a8-8364-5054a96545bb/tool-results/artifact-b721a835-1787307675-c9ca.html"
OUT = "index.html"

src = io.open(SRC, encoding="utf-8").read()
lines = src.split("\n")

# strip the Artifact-injected skeleton (line 1) — the tool re-adds it at publish time
assert lines[0].startswith("<!doctype html>"), lines[0][:60]
body = "\n".join(lines[1:])
body = re.sub(r"(?:\s*</body>\s*</html>\s*)$", "\n", body)

b64 = io.open("team_b64.txt", encoding="utf-8").read().strip()
team_uri = "data:image/svg+xml;base64," + b64

# 1) insert TEAM_PHOTO just before COMPANY
anchor = "\nvar COMPANY = {"
assert body.count(anchor) == 1
team_var = (
    "\n/* ── Team photo ───────────────────────────────────────────────\n"
    "   Replace TEAM_PHOTO below with the real group photo: either a\n"
    "   \"data:image/jpeg;base64,...\" URI or a hosted image URL.\n"
    "   Recommended crop: wide, roughly 1200x630. Nothing else needs\n"
    "   to change — the Our Team section on the home page reads this. */\n"
    'var TEAM_PHOTO = "' + team_uri + '";\n'
    'var TEAM_PHOTO_ALT = "The Zyvex Tech team at Kaizen CoWorks, Calicut";\n'
    'var TEAM_PHOTO_CAPTION = "The Zyvex Tech team &mdash; Kaizen CoWorks, Calicut.";\n'
)
body = body.replace(anchor, team_var + anchor, 1)

# 2) insert the Our Team section after Core Values on the home page
values_block = (
    "  + '<section class=\"section section-b\">'\n"
    "  +   '<div class=\"wrap\">'\n"
    "  +     eyebrow('Core Values')+sectionTitle('The Standards We Build Around')\n"
    "  +     '<div class=\"grid-5\" style=\"margin-top:48px\">'+valuesTeaser+'</div>'\n"
    "  +   '</div>'\n"
    "  + '</section>'\n"
)
assert body.count(values_block) == 1

team_section = (
    "\n"
    "  + '<section class=\"section section-b\" id=\"team\">'\n"
    "  +   '<div class=\"wrap\">'\n"
    "  +     '<div class=\"flex-between\">'\n"
    "  +       '<div>'+eyebrow('Our Team')+sectionTitle('The People Behind the Systems', '')+'</div>'\n"
    "  +       '<a href=\"#/our-story\" class=\"tlink\">More about us &#8599;</a>'\n"
    "  +     '</div>'\n"
    "  +     '<p class=\"muted\" style=\"margin-top:24px;max-width:600px;font-size:15px;line-height:1.6\">A small, senior team working out of Kaizen CoWorks in Calicut. The people who audit your funnel are the same people who build the store, run the campaigns, and answer your messages &mdash; no junior bench, no account manager sitting between you and the work.</p>'\n"
    "  +     '<figure style=\"margin:48px 0 0\">'\n"
    "  +       '<img class=\"media-cover\" src=\"'+TEAM_PHOTO+'\" alt=\"'+TEAM_PHOTO_ALT+'\" />'\n"
    "  +       '<figcaption class=\"faint\" style=\"margin-top:16px;font-size:13px\">'+TEAM_PHOTO_CAPTION+'</figcaption>'\n"
    "  +     '</figure>'\n"
    "  +     '<div class=\"dl-row\" style=\"margin-top:56px\">'\n"
    "  +       '<div><dt>Based In</dt><dd>'+COMPANY.city+'</dd></div>'\n"
    "  +       '<div><dt>Working Across</dt><dd>'+COMPANY.markets+'</dd></div>'\n"
    "  +     '</div>'\n"
    "  +   '</div>'\n"
    "  + '</section>'\n"
)
body = body.replace(values_block, values_block + team_section, 1)

io.open(OUT, "w", encoding="utf-8").write(body)
print("written", len(body), "bytes")
