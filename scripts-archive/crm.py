# -*- coding: utf-8 -*-
"""Pull CRM setup out of the positioning; lead with performance marketing
systems, retention automation and SEO for Shopify clients."""
import io, os

os.chdir(os.path.dirname(os.path.abspath(__file__)))
p = "index.html"
s = io.open(p, encoding="utf-8").read()

def rep(old, new, why, n=1):
    global s
    assert s.count(old) == n, (why, s.count(old))
    s = s.replace(old, new, n)

# How We Work — step 3 copy and its diagram node
rep('body: "Store, campaigns, funnels, CRM, automations \\u2014 built and wired together by us, not handed over as a to-do list.",',
    'body: "Store, campaigns, funnels, retention automations \\u2014 built and wired together by us, not handed over as a to-do list.",',
    "step3 body")
rep("""font-size="15" text-anchor="middle">CRM</text>'""",
    """font-size="15" text-anchor="middle">Retention</text>'""", "step3 node")

# Marketing automation service — integration line
rep('body: "Automations are wired directly into your existing stack — CRM, store, messaging tools — so they run without manual intervention.", icon: "whatsapp" }',
    'body: "Automations are wired directly into your existing stack — the store, the ad platform, your messaging tools — so they run without manual intervention.", icon: "whatsapp" }',
    "automation build")

# Mobile app FAQ
rep('a: "Yes — integration with your existing Shopify store, CRM, or other systems is scoped as part of the b',
    'a: "Yes — integration with your existing Shopify store or other systems is scoped as part of the b',
    "app faq")

# B2B lead gen FAQ — reframe away from CRM work
rep('{ q: "Do you handle the CRM side too?", a: "We connect lead-gen tools and funnels into your existing CRM setup — for deeper CRM work, that pairs with our Custom Software or Consulting services." }',
    '{ q: "Where do the leads actually go?", a: "Into whatever you already use — we connect the funnel to your existing tools rather than selling you a new system to run. Our own focus is the funnel, the campaigns and the follow-up automation that works the lead once it lands." }',
    "b2b faq")

# Tools we advise on
rep('{ name: "Zoho Suite", icon: "suite", note: "Advisory and setup across Zoho CRM, Books, and Inventory for unified operations." }',
    '{ name: "Zoho Suite", icon: "suite", note: "Advisory and setup across Zoho Books, Inventory and POS \\u2014 as used on client builds." }',
    "tools")

# Our Story — what the team covers
rep('{ icon: "flow",    title: "Automation & Integrations", body: "CRM, marketing automation, POS and accounting wired together so the data only gets entered once." },',
    '{ icon: "flow",    title: "Retention & Automation",    body: "Email and WhatsApp flows, re-engagement and the integrations behind them \\u2014 so follow-up happens without anyone remembering to send it." },',
    "disciplines")

# B2B lead gen deliverable that reads as tool-buying
rep('"Lead-Gen Tools & Software Setup"', '"Follow-Up & Nurture Automation"', "b2b deliverable")

io.open(p, "w", encoding="utf-8").write(s)
print("CRM references reduced")
