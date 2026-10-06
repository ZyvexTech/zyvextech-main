# -*- coding: utf-8 -*-
import io
p="index.html"; s=io.open(p,encoding="utf-8").read()
def rep(old,new,why,n=1):
    global s
    assert s.count(old)==n, (why, s.count(old))
    s = s.replace(old,new,n)

# 1 ── APPROACH: the real four beats
start = s.index("var APPROACH = [")
end   = s.index("\n];", start)+3
s = s[:start] + '''var APPROACH = [
  { step: 1, title: "We Consult First", body: "Before anything gets recommended, quoted or built, we learn the business \\u2014 how it actually makes money, what the product is, who buys it, and what the goal is for the next stretch. Nothing gets scoped off a template.", icon: "target" },
  { step: 2, title: "We Work Out What You Need \\u2014 and What You Don't", body: "Then we tell you which platforms, tools and integrations the business actually needs, and which ones it does not. Talking a client out of software they were about to pay for is a normal outcome of this step. A smaller stack that fits beats a bigger one that impresses.", icon: "seo" },
  { step: 3, title: "We Implement It Ourselves", body: "We build and configure what we recommended \\u2014 the Shopify store, the ad accounts, the funnels and landing pages, the CRM, the automations and the integrations between them. It is not handed over as a to-do list for your team to work out.", icon: "code" },
  { step: 4, title: "We Maintain and Support It", body: "The engagement does not end at launch. We stay on to maintain the system, support your team and keep improving it against real numbers \\u2014 especially for Shopify clients, where the store is the business and cannot be left to drift.", icon: "suite" }
];
''' + s[end:]

# 2 ── Vision & Mission
rep("""To be the team businesses call when they are done guessing — the partner that turns a stated goal into a working system.""",
    """To be the team a business calls before it buys the software — the partner that works out what is actually needed, builds it, and stays to run it.""", "vision")
rep("""We see a future where every growing business, not just the well-funded ones, has access to properly built ecommerce infrastructure, automation, and demand-generation systems — designed with the same rigor as a large enterprise, and run by people who stay accountable to the results.""",
    """Most businesses are not short of tools. They are short of someone who will look at the business first and say plainly which of those tools they need and which they can skip. We want that to be the normal way growing businesses buy technology, not the exception.""", "visionsub")

old_m = s[s.index("Our Mission — 02"):]
old_mission = old_m[old_m.index("line-height:1.35\">")+len("line-height:1.35\">"):]
old_mission = old_mission[:old_mission.index("</p>")]
rep(old_mission,
    "To consult before we recommend, recommend honestly, implement it ourselves, and support what we build \\u2014 so a business ends up with a stack that fits it rather than one it has to grow into.", "mission")

old_ms = s[s.index("Our Mission — 02"):]
old_msub = old_ms[old_ms.index("font-size:15px\">")+len("font-size:15px\">"):]
old_msub = old_msub[:old_msub.index("</p>")]
rep(old_msub,
    "We start with your business model, your product and your goals. From there we scope the stack, build it, and stay on to maintain and support it \\u2014 particularly for Shopify clients, where the store is the revenue and ongoing support is the whole point.", "missionsub")

# 3 ── FAQ
rep("""{ q: "What does an engagement with Zyvex Tech actually look like?", a: "Every engagement starts with a funnel and process audit before any build work begins — no templates, no assumptions about what's broken. From there we design the system, build and implement it directly, and stay on to optimize and support it." }""",
    """{ q: "What does an engagement with Zyvex Tech actually look like?", a: "It starts with a consultation, not a proposal. We learn your business model, your product and your goals first. Then we tell you which tools and platforms you actually need \\u2014 and which ones you don't. We implement what we recommended ourselves, and we stay on to maintain and support it, especially for Shopify clients." }""", "faq")

# 4 ── services page statement band
rep("""Not a menu of scattered services. One system &mdash; audited before it is built, and run by the people who built it.""",
    """We consult before we sell you anything. What the business needs gets built \\u2014 what it doesn't, we tell you to skip.""", "svcstatement")
rep("""Every pillar below can stand alone. Most of our work is two or three of them wired together, in the order the audit says they matter.""",
    """Every pillar below can stand alone. Most engagements use two or three of them, wired together in the order the consultation says they matter \\u2014 and we maintain and support what we build.""", "svcsub")

# 5 ── Our Story: Our Commitment / Our Model rows
rep("""{ n: "03", title: "Our Commitment", icon: "check", body: "Clear processes over guesswork, systems over workarounds — every engagement built to raise conversion and actually get used." }""",
    """{ n: "03", title: "Our Commitment", icon: "check", body: "An honest answer on what you need and what you don't \\u2014 then we build it, and we stay on to maintain and support it." }""", "commit")
rep("""{ n: "04", title: "Our Model", icon: "flow", body: "Consulting and execution under one roof: we audit, design, build, and run the system ourselves, with training and support." }""",
    """{ n: "04", title: "Our Model", icon: "flow", body: "Consult, scope, implement, maintain \\u2014 all under one roof, and all by the same people. Ongoing support is part of the engagement, not an upsell." }""", "model")

# 6 ── home "How We Work" heading + the core value that carries the idea
rep("sectionTitle('A Structured, Audit-First Process', '')",
    "sectionTitle('Consult First, Build Second', '')", "hometitle")
rep("""{ title: "Systems Over Guesswork", body: "We replace ad-hoc workarounds with documented processes and configured tools — so the business runs on structure, not memory.", icon: "target" }""",
    """{ title: "Consult Before We Recommend", body: "We learn the business model, the product and the goal before naming a single tool \\u2014 then we say plainly what you need and what you don't.", icon: "target" }""", "value1")
rep("""{ title: "Support That Doesn't End at Handover", body: "Training and ongoing support are part of the engagement, not an upsell — a system nobody knows how to run isn't a finished system.", icon: "suite" }""",
    """{ title: "Maintained, Not Just Delivered", body: "We stay on to maintain and support what we build \\u2014 especially Shopify stores, where the site is the revenue and a system nobody maintains quietly stops working.", icon: "suite" }""", "value5")

io.open(p,"w",encoding="utf-8").write(s)
print("ok")
