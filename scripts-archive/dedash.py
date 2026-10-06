# -*- coding: utf-8 -*-
"""Remove every em dash from the visible copy, rewriting each sentence so it
still reads naturally. CSS custom properties (--black etc.) are untouched."""
import io, os, json

os.chdir(os.path.dirname(os.path.abspath(__file__)))

PAIRS = [
("A consulting, implementation, and performance marketing partner — turning business goals into working systems",
 "A consulting, implementation, and performance marketing partner, turning business goals into working systems"),

("We serve founders and growing businesses around the world — from a first Shopify store to a full funnel rebuild.",
 "We serve founders and growing businesses around the world, from a first Shopify store to a full funnel rebuild."),

("before naming a single tool \\u2014 then we say plainly",
 "before naming a single tool. Then we say plainly"),

("integrate the systems ourselves — strategy is only real once it's implemented.",
 "integrate the systems ourselves. Strategy is only real once it's implemented."),

("support what we build \\u2014 especially Shopify stores, where the site is the revenue",
 "support what we build, especially Shopify stores, where the site is the revenue"),

("what the goal is \\u2014 before anything is recommended.",
 "what the goal is, before anything is recommended."),

("We Work Out What You Need \\u2014 and What You Don't",
 "We Work Out What You Need, and What You Don't"),

("Store, campaigns, funnels, retention automations \\u2014 built and wired together by us,",
 "Store, campaigns, funnels and retention automations, all built and wired together by us,"),

("keep improving it \\u2014 especially for Shopify clients.",
 "keep improving it, especially for Shopify clients."),

("and systems design — the foundation before anything gets built.",
 "and systems design: the foundation before anything gets built."),

("how the business actually runs today — where process breaks down",
 "how the business actually runs today: where process breaks down"),

("running the business day to day — not just reading dashboards — to understand",
 "running the business day to day, not just reading dashboards, to understand"),

("a ranked list of fixes — ordered by impact and effort",
 "a ranked list of fixes, ordered by impact and effort"),

("Where the roadmap points to a build — Shopify, automation, a new tool — we scope it",
 "Where the roadmap points to a build (Shopify, automation, a new tool), we scope it"),

("nothing in it goes on a shelf — findings hand directly",
 "nothing in it goes on a shelf. Findings hand directly"),

("We already have a tech stack — do you replace it or work with it?",
 "We already have a tech stack. Do you replace it or work with it?"),

("meant to be run, not babysat — from first setup through checkout configuration",
 "meant to be run, not babysat, from first setup through checkout configuration"),

("and automation needs — not push Plus by default.",
 "and automation needs, not push Plus by default."),

("a: \"Yes — migrations include a redirect",
 "a: \"Yes. Migrations include a redirect"),

("and training we hand over — with Zyvex Tech available for ongoing support",
 "and training we hand over, with Zyvex Tech available for ongoing support"),

("ad spend and ROAS — so the budget keeps moving toward",
 "ad spend and ROAS, so the budget keeps moving toward"),

("built around tested audience segments — not a single broad campaign",
 "built around tested audience segments, not a single broad campaign"),

("ROAS and specific decisions — what changed, why, and what happens next — not just a monthly summary PDF.",
 "ROAS and specific decisions: what changed, why, and what happens next. Not just a monthly summary PDF."),

("It depends on your market and goals — we'll assess whether",
 "It depends on your market and goals. We'll assess whether"),

("how your customers actually search, and — for ecommerce clients — SEO audits specific",
 "how your customers actually search, and, for ecommerce clients, SEO audits specific"),

("and on-page fundamentals — with Shopify-specific checks for stores",
 "and on-page fundamentals, with Shopify-specific checks for stores"),

("Organic growth compounds — most clients see meaningful movement",
 "Organic growth compounds. Most clients see meaningful movement"),

("a: \"Yes — Shopify handles indexing, URLs",
 "a: \"Yes. Shopify handles indexing, URLs"),

("We audit the funnel end to end — landing pages, product pages, checkout — identify where",
 "We audit the funnel end to end (landing pages, product pages, checkout), identify where"),

("We map the full funnel — landing, product, cart, checkout — to find exactly where",
 "We map the full funnel (landing, product, cart, checkout) to find exactly where"),

("losing tests get discarded — and the next round of testing",
 "losing tests get discarded, and the next round of testing"),

("CRO is a behavior decision — we test what's actually causing hesitation",
 "CRO is a behavior decision. We test what's actually causing hesitation"),

("confidence in a reasonable time — we'll assess this during the audit",
 "confidence in a reasonable time. We'll assess this during the audit"),

("CRO compounds best as an ongoing process — we typically start",
 "CRO compounds best as an ongoing process. We typically start"),

("automation that keeps customers moving — from first contact through retention — so growth",
 "automation that keeps customers moving, from first contact through retention, so growth"),

("We map the real customer journey — first contact through retention — to see where",
 "We map the real customer journey, from first contact through retention, to see where"),

("into your existing stack — the store, the ad platform, your messaging tools — so they run",
 "into your existing stack (the store, the ad platform, your messaging tools) so they run"),

("real performance and refined — exit conditions, timing, and messaging adjusted",
 "real performance and refined, with exit conditions, timing and messaging adjusted"),

("where your customers actually respond — we'll recommend the right mix",
 "where your customers actually respond. We'll recommend the right mix"),

("We'll audit what's running first — often the fix is adding",
 "We'll audit what's running first. Often the fix is adding"),

("routes people based on behavior — abandoned cart, post-purchase, re-engagement — instead of sending",
 "routes people based on behavior (abandoned cart, post-purchase, re-engagement) instead of sending"),

("the content and messaging that goes on them — coordinated with the systems",
 "the content and messaging that goes on them, coordinated with the systems"),

("You're inconsistent across platforms — different logos, tones, or messaging",
 "You're inconsistent across platforms, with different logos, tones, or messaging"),

("want the brand to communicate — before any visual direction is proposed.",
 "want the brand to communicate, before any visual direction is proposed."),

("guidelines are built to be usable — consistent across your website",
 "guidelines are built to be usable: consistent across your website"),

("a: \"Both — depending on whether your existing identity",
 "a: \"Both, depending on whether your existing identity"),

("your content and update needs — it doesn't have to be Shopify",
 "your content and update needs. It doesn't have to be Shopify"),

("a: \"Yes — content and messaging support is part of this service",
 "a: \"Yes. Content and messaging support is part of this service"),

("cross-platform app builds — from UI/UX design through app store setup and launch.",
 "cross-platform app builds, from UI/UX design through app store setup and launch."),

("and cross-platform apps — handling UI/UX design, development",
 "and cross-platform apps, handling UI/UX design, development"),

("core use case and feature set first — the goal is a focused first release",
 "core use case and feature set first. The goal is a focused first release"),

("a mobile app for your kind of business — not a shrunk-down version of the website.",
 "a mobile app for your kind of business, not a shrunk-down version of the website."),

("submission requirements, and launch — the parts of app development",
 "submission requirements, and launch: the parts of app development"),

("It depends on your feature needs and budget — we'll recommend the right approach",
 "It depends on your feature needs and budget. We'll recommend the right approach"),

("a: \"Yes — app store setup and submission support is part of the service",
 "a: \"Yes. App store setup and submission support is part of the service"),

("a: \"Yes — integration with your existing Shopify store",
 "a: \"Yes. Integration with your existing Shopify store"),

("designed around your real workflow — with ongoing maintenance and support",
 "designed around your real workflow, with ongoing maintenance and support"),

("We study your actual process — not a generic template — to understand what the software",
 "We study your actual process, not a generic template, to understand what the software"),

("and bespoke business software — generally purpose-built systems",
 "and bespoke business software: generally purpose-built systems"),

("a: \"Yes — ongoing maintenance and support is part of this service",
 "a: \"Yes. Ongoing maintenance and support is part of this service"),

("a: \"Yes — third-party API integrations are a core part of this service",
 "a: \"Yes. Third-party API integrations are a core part of this service"),

("against lead quality and conversion — not just click volume.\",",
 "against lead quality and conversion, not just click volume.\","),

("We define the B2B funnel strategy first — what a qualified lead actually looks like for your business — before any page",
 "We define the B2B funnel strategy first, including what a qualified lead actually looks like for your business, before any page"),

("against lead quality and conversion — not just click volume — so the funnel keeps producing",
 "against lead quality and conversion, not just click volume, so the funnel keeps producing"),

("qualified pipeline, not purchases — the funnel, messaging, and conversion signals",
 "qualified pipeline, not purchases. The funnel, messaging, and conversion signals"),

("For B2B lead generation, yes — a pipeline needs somewhere to live.",
 "For B2B lead generation, yes. A pipeline needs somewhere to live."),

("We define that with you upfront — it varies by business",
 "We define that with you upfront. It varies by business"),

("note: \"Ecommerce platform — Official Partner\"",
 "note: \"Ecommerce platform. Official Shopify Partner.\""),

("Zoho Books, Inventory and POS \\u2014 as used on client builds.",
 "Zoho Books, Inventory and POS, as used on client builds."),

("complete looks, not single items — with a scroll-driven landing section",
 "complete looks, not single items, with a scroll-driven landing section"),

("Zoho Books reconciling the money — one system instead of three",
 "Zoho Books reconciling the money. One system instead of three"),

("We mapped how Colin Guest actually sells — what a typical order looks like, how stock moves between retail and online, where the team was re-keying the same numbers — before choosing",
 "We mapped how Colin Guest actually sells, looking at what a typical order looks like, how stock moves between retail and online, and where the team was re-keying the same numbers, before choosing"),

("the site is scroll-driven — the experience unfolds as the visitor scrolls",
 "the site is scroll-driven. The experience unfolds as the visitor scrolls"),

("is the same stock, counted once — no separate spreadsheet",
 "is the same stock, counted once. No separate spreadsheet"),

("rather than treated as a later project — structure, on-page work and technical basics handled while",
 "rather than treated as a later project. Structure, on-page work and technical basics were handled while"),

("From WhatsApp orders to a website funnel — up to 8x ROAS",
 "From WhatsApp orders to a website funnel, up to 8x ROAS"),

("a Shopify funnel and a rebuilt ad account — up to 8x ROAS at an 8% conversion rate.",
 "a Shopify funnel and a rebuilt ad account, reaching up to 8x ROAS at an 8% conversion rate."),

("8x ROAS at an 8% conversion rate — the difference between running ads",
 "8x ROAS at an 8% conversion rate. That is the difference between running ads"),

("the place the sale actually happens — product pages, cart and checkout doing the work",
 "the place the sale actually happens, with product pages, cart and checkout doing the work"),

("from the previous agency and rebuilt it — campaign structure, audiences and creative testing",
 "from the previous agency and rebuilt it: campaign structure, audiences and creative testing"),

("with the store converting at 8% — both numbers produced by the same change",
 "with the store converting at 8%, both numbers produced by the same change"),

("together on an existing Shopify store — 3x the sales without buying a single extra visitor.",
 "together on an existing Shopify store, giving 3x the sales without buying a single extra visitor."),

("No extra spend, no new audience — the same visitors, converting better",
 "No extra spend, no new audience: the same visitors, converting better"),

("the landing page and the checkout — the two stages where small friction",
 "the landing page and the checkout, the two stages where small friction"),

("each converted visitor was worth more — the second multiplier that turns",
 "each converted visitor was worth more. That is the second multiplier that turns"),

("total sales landed at 3x — on the same organic traffic the store already had.",
 "total sales landed at 3x, on the same organic traffic the store already had."),

("across Qatar, the UAE and India — built to stand up in front of industrial",
 "across Qatar, the UAE and India, built to stand up in front of industrial"),

("The site had to carry that weight — service depth, sector coverage, delivered work — without collapsing",
 "The site had to carry that weight (service depth, sector coverage, delivered work) without collapsing"),

("around the three service lines — water treatment, chemical supplies and MEP installations — so a visitor lands",
 "around the three service lines (water treatment, chemical supplies and MEP installations) so a visitor lands"),

("does not just look cheap in that context — it actively undercuts the price point.",
 "does not just look cheap in that context. It actively undercuts the price point."),

("match the brand's positioning — the showroom experience carried online",
 "match the brand's positioning: the showroom experience carried online"),

("cardLine: \"Showcase site pointed at one outcome — quote requests\"",
 "cardLine: \"Showcase site pointed at one outcome: quote requests\""),

("A showcase site pointed at one outcome — quote requests from Google traffic — instead of a general",
 "A showcase site pointed at one outcome, quote requests from Google traffic, instead of a general"),

("Shop Pay checkout and UK carriers — plus ongoing SEO.",
 "Shop Pay checkout and UK carriers, plus ongoing SEO."),

("carries vintage designer frames — Carrera and Dior among them — next to its own contemporary ranges.",
 "carries vintage designer frames, Carrera and Dior among them, next to its own contemporary ranges."),

("the convincing in a single visit — and the average order has to be worth",
 "the convincing in a single visit, and the average order has to be worth"),

("paid traffic and CRO together — proof-led pages, a founder story that earns trust",
 "paid traffic and CRO together: proof-led pages, a founder story that earns trust"),

("on a conventional ecommerce layout — a customer buying into a tradition",
 "on a conventional ecommerce layout. A customer buying into a tradition"),

("sells the ritual rather than the bottle — shop-by-concern paths with the brand's heritage carried",
 "sells the ritual rather than the bottle, with shop-by-concern paths and the brand's heritage carried"),

("has exactly one question — do you have my model — and every bit of friction answering it costs the sale.",
 "has exactly one question: do you have my model. Every bit of friction answering it costs the sale."),

("\"Campaign structure — screenshot to add\"", "\"Campaign structure: screenshot to add\""),
("\"Shopify analytics — screenshot to add\"", "\"Shopify analytics: screenshot to add\""),

("for most stores we look at — the funnel is.",
 "for most stores we look at. The funnel is."),

("the leak isn't at the top of the funnel — it's somewhere between the landing page",
 "the leak isn't at the top of the funnel. It's somewhere between the landing page"),

("the problem usually isn't interest — it's friction.",
 "the problem usually isn't interest. It's friction."),

("A CRO audit is a behavior decision — what's actually causing hesitation, and where.",
 "A CRO audit is a behavior decision: what's actually causing hesitation, and where."),

("the fix usually isn't a redesign — it's a structured audit",
 "the fix usually isn't a redesign. It's a structured audit"),

("of any channel most businesses use — and the lowest bar for actually doing it well.",
 "of any channel most businesses use, and the lowest bar for actually doing it well."),

("open rates are genuinely excellent — often far higher than email — which is exactly why",
 "open rates are genuinely excellent, often far higher than email, which is exactly why"),

("like a one-way broadcast channel — the same message, the same time, to everyone.",
 "like a one-way broadcast channel: the same message, the same time, to everyone."),

("set up quickly and never revisited — flows that don't know when to stop.",
 "set up quickly and never revisited: flows that don't know when to stop."),

("Plus isn't about revenue size alone — it's about whether your operations",
 "Plus isn't about revenue size alone. It's about whether your operations"),

("should I upgrade to Plus\\\" — it's \\\"how do I know",
 "should I upgrade to Plus\\\". It's \\\"how do I know"),

("Plus won't fix any of that — it's infrastructure for scale",
 "Plus won't fix any of that. It's infrastructure for scale"),

("improves itself over time — audience research that gets sharper",
 "improves itself over time: audience research that gets sharper"),

("advice often doesn't apply cleanly — here's what actually matters.",
 "advice often doesn't apply cleanly. Here's what actually matters."),

("its own platform-specific quirks — some helpful, some genuinely limiting — and a technical SEO audit",
 "its own platform-specific quirks, some helpful and some genuinely limiting, and a technical SEO audit"),

("tied to how customers actually search — which is often less",
 "tied to how customers actually search, which is often less"),

("treat SEO as an ongoing system — audits, content, and technical maintenance running together — are the ones",
 "treat SEO as an ongoing system, with audits, content, and technical maintenance running together, are the ones"),

("platforms you actually need \\u2014 and which ones you don't.",
 "platforms you actually need, and which ones you don't."),

("but the work spans further — performance marketing, SEO, marketing automation",
 "but the work spans further: performance marketing, SEO, marketing automation"),

("audit and system design are done — the speed comes from the audit-first process",
 "audit and system design are done. The speed comes from the audit-first process"),

("location has never been the constraint \\u2014 scope and communication are what decide",
 "location has never been the constraint. Scope and communication are what decide"),

("your store, funnel, or project — we'll walk you through how we'd approach it before",
 "your store, funnel, or project, and we'll walk you through how we'd approach it before"),

("not just dabble in — the foundation under everything else we build.",
 "not just dabble in: the foundation under everything else we build."),

("and ongoing implementation — backed by official partner status.",
 "and ongoing implementation, backed by official partner status."),

("campaigns built for measurable ROAS — audience research, creative testing",
 "campaigns built for measurable ROAS: audience research, creative testing"),

("and Shopify-specific search audits — growth that compounds instead of spikes.",
 "and Shopify-specific search audits, for growth that compounds instead of spikes."),

("What the business needs gets built \\u2014 what it does not, we tell you to skip.",
 "What the business needs gets built. What it does not, we tell you to skip."),

("the order the consultation says they matter \\u2014 and we maintain and support what we build.",
 "the order the consultation says they matter, and we maintain and support what we build."),

("funnels and campaigns behind the numbers — and what we actually did on each one.",
 "funnels and campaigns behind the numbers, and what we actually did on each one."),

("your funnel, or your next project — we'll walk you through how we'd approach it.",
 "your funnel, or your next project, and we'll walk you through how we'd approach it."),

("team — the part of the work that never shows up in a screenshot.",
 "team. That is the part of the work that never shows up in a screenshot."),

("Tell us about your store or funnel — we'll walk you through how we'd approach it.",
 "Tell us about your store or funnel, and we'll walk you through how we'd approach it."),

("Founders and growing businesses around the world — from a first Shopify store",
 "Founders and growing businesses around the world, from a first Shopify store"),

("what you need and what you don't \\u2014 then we build it, and we stay on",
 "what you need and what you don't. Then we build it, and we stay on"),

("Consult, scope, implement, maintain \\u2014 all under one roof",
 "Consult, scope, implement, maintain: all under one roof"),

("run as an ongoing system \\u2014 structure, audiences and creative testing.",
 "run as an ongoing system: structure, audiences and creative testing."),

("and the integrations behind them \\u2014 so follow-up happens without anyone",
 "and the integrations behind them, so follow-up happens without anyone"),

("the systems that make them real — structured consulting, hands-on Shopify implementation",
 "the systems that make them real: structured consulting, hands-on Shopify implementation"),

("with founders around the world — not as a distant consultant",
 "with founders around the world, not as a distant consultant"),

("and businesses selling services \\u2014 across India, the UAE, Qatar and the UK.",
 "and businesses selling services, across India, the UAE, Qatar and the UK."),

("Audits, planning sessions and reviews \\u2014 the part of an engagement that decides",
 "Audits, planning sessions and reviews: the part of an engagement that decides"),

("Our Vision — 01", "Our Vision / 01"),
("Our Mission — 02", "Our Mission / 02"),

("before it buys the software — the partner that works out what is actually needed",
 "before it buys the software: the partner that works out what is actually needed"),

("and support what we build \\u2014 so a business ends up with a stack that fits it",
 "and support what we build, so a business ends up with a stack that fits it"),

("stay on to maintain and support it \\u2014 particularly for Shopify clients",
 "stay on to maintain and support it, particularly for Shopify clients"),

# ── structural / non-prose uses ────────────────────────────────────
# quote attribution under the founder testimonial
("font-style:italic\">— '+COMPANY.founder", "font-style:italic\">'+COMPANY.founder"),
# kicker: company name and markets
("'+COMPANY.name+' — '+COMPANY.markets+'", "'+COMPANY.name+', '+COMPANY.markets+'"),
# mailto body signature
("var body = message + '\\n\\n— ' + name", "var body = message + '\\n\\n' + name"),
# contact form note
("to '+COMPANY.email+' — if nothing opened, email us directly.",
 "to '+COMPANY.email+'. If nothing opened, email us directly."),

# ── page <title> separators ────────────────────────────────────────
("COMPANY.name + ' — Consulting, Shopify &amp; Performance Marketing'",
 "COMPANY.name + ' | Consulting, Shopify &amp; Performance Marketing'"),
("title = 'Services — ' + COMPANY.name", "title = 'Services | ' + COMPANY.name"),
("title = svc.name + ' — ' + COMPANY.name", "title = svc.name + ' | ' + COMPANY.name"),
("title = 'Works — ' + COMPANY.name", "title = 'Works | ' + COMPANY.name"),
("title = wk.client + ' — ' + COMPANY.name", "title = wk.client + ' | ' + COMPANY.name"),
("title = 'Our Story — ' + COMPANY.name", "title = 'Our Story | ' + COMPANY.name"),
("title = 'Blog — ' + COMPANY.name", "title = 'Blog | ' + COMPANY.name"),
("title = post.title + ' — ' + COMPANY.name", "title = post.title + ' | ' + COMPANY.name"),
("title = 'Contact — ' + COMPANY.name", "title = 'Contact | ' + COMPANY.name"),
("title = 'Contact — ' + svc2.name + ' — ' + COMPANY.name",
 "title = 'Contact | ' + svc2.name + ' | ' + COMPANY.name"),
]

p = "index.html"
s = io.open(p, encoding="utf-8").read()
missed = []
for old, new in PAIRS:
    n = s.count(old)
    if n == 0:
        missed.append(old[:70]); continue
    s = s.replace(old, new)

# 'Not Found — ' appears several times
s = s.replace("title = 'Not Found — ' + COMPANY.name", "title = 'Not Found | ' + COMPANY.name")

io.open(p, "w", encoding="utf-8").write(s)

# prerender.js title separators
q = "prerender.js"
t = io.open(q, encoding="utf-8").read()
t = t.replace("C.COMPANY.name+' — Consulting, Shopify & Performance Marketing'",
              "C.COMPANY.name+' | Consulting, Shopify & Performance Marketing'")
t = t.replace("+' — '+C.COMPANY.name", "+' | '+C.COMPANY.name")
t = t.replace("'Contact — '+s.name+' — '+C.COMPANY.name", "'Contact | '+s.name+' | '+C.COMPANY.name")
t = t.replace("' — '+C.COMPANY.name", "' | '+C.COMPANY.name")
io.open(q, "w", encoding="utf-8").write(t)

print("applied:", len(PAIRS) - len(missed), "of", len(PAIRS))
if missed:
    print("NOT FOUND:")
    for m in missed: print("  ", m)
