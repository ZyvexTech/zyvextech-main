# -*- coding: utf-8 -*-
"""CRM belongs in one place only: B2B Lead Generation Systems."""
import io, os

os.chdir(os.path.dirname(os.path.abspath(__file__)))
p = "index.html"
s = io.open(p, encoding="utf-8").read()

def rep(old, new, why, n=1):
    global s
    assert s.count(old) == n, (why, s.count(old))
    s = s.replace(old, new, n)

# deliverable
rep('"Follow-Up & Nurture Automation"', '"CRM Setup & Lead Routing"', "deliverable")

# description
rep("We design landing pages and lead capture funnels around a clear B2B funnel strategy, set up the lead-gen tools and software behind them, and run CRO specifically against lead quality and conversion — not just click volume.",
    "We design landing pages and lead capture funnels around a clear B2B funnel strategy, set up the CRM and lead routing behind them so nothing sits unworked, and run CRO specifically against lead quality and conversion — not just click volume.",
    "description")

# FAQ back to the CRM question, answered in B2B terms
rep('{ q: "Where do the leads actually go?", a: "Into whatever you already use — we connect the funnel to your existing tools rather than selling you a new system to run. Our own focus is the funnel, the campaigns and the follow-up automation that works the lead once it lands." }',
    '{ q: "Do you handle the CRM side too?", a: "For B2B lead generation, yes — a pipeline needs somewhere to live. We set up the CRM and the routing rules so every lead lands with an owner and a next step instead of sitting in an inbox. For ecommerce clients our focus is performance marketing, retention automation and SEO rather than CRM work." }',
    "faq")

io.open(p, "w", encoding="utf-8").write(s)
print("CRM restored to B2B lead generation only")
