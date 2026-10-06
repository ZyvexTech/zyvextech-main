# -*- coding: utf-8 -*-
DATA = r'''
/* ── Works: expertises ────────────────────────────────────────── */
var EXPERTISES = [
  { key: "all",         label: "All Work" },
  { key: "shopify",     label: "Shopify Development" },
  { key: "performance", label: "Performance Marketing" },
  { key: "seo",         label: "SEO" }
];
function expertiseLabel(k){
  for(var i=0;i<EXPERTISES.length;i++){ if(EXPERTISES[i].key === k) return EXPERTISES[i].label; }
  return k;
}

/* ── Placeholder art ──────────────────────────────────────────────
   ph() draws a labelled slate so every image slot on the site says
   what belongs in it. Replace a ph(...) call with a real image URL
   or data URI and that slot is done — nothing else to change.      */
function ph(label, note, w, h){
  w = w || 1200; h = h || 800;
  var esc = function(t){ return String(t||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); };
  var lines = '';
  for(var x = w/8; x < w; x += w/8){ lines += '<line x1="'+x+'" y1="0" x2="'+x+'" y2="'+h+'"/>'; }
  var m = Math.round(Math.min(w,h) * 0.07), c = Math.round(m * 0.55);
  var corners = '<path d="M'+m+' '+(m+c)+'V'+m+'h'+c+'M'+(w-m)+' '+(m+c)+'V'+m+'h-'+c
              + 'M'+m+' '+(h-m-c)+'V'+(h-m)+'h'+c+'M'+(w-m)+' '+(h-m-c)+'V'+(h-m)+'h-'+c+'"/>';
  var cy = h/2;
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="'+w+'" height="'+h+'" viewBox="0 0 '+w+' '+h+'">'
    + '<rect width="'+w+'" height="'+h+'" fill="#070707"/>'
    + '<g stroke="#f4f2ec" stroke-opacity="0.06" stroke-width="1">'+lines+'</g>'
    + '<g fill="none" stroke="#f4f2ec" stroke-opacity="0.16" stroke-width="2">'+corners+'</g>'
    + '<circle cx="'+(w/2)+'" cy="'+(cy-Math.round(h*0.11))+'" r="'+Math.round(h*0.045)+'" fill="none" stroke="#0d9c80" stroke-width="2.5"/>'
    + '<path d="M'+(w/2-Math.round(h*0.018))+' '+(cy-Math.round(h*0.11))+'h'+Math.round(h*0.036)+'M'+(w/2)+' '+(cy-Math.round(h*0.128))+'v'+Math.round(h*0.036)+'" stroke="#0d9c80" stroke-width="2.5" stroke-linecap="round"/>'
    + '<text x="'+(w/2)+'" y="'+(cy+Math.round(h*0.03))+'" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" '
    + 'font-size="'+Math.round(h*0.042)+'" font-weight="600" letter-spacing="'+Math.round(h*0.011)+'" fill="#cfcdc6">'+esc(label).toUpperCase()+'</text>'
    + (note ? '<text x="'+(w/2)+'" y="'+(cy+Math.round(h*0.085))+'" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" '
      + 'font-size="'+Math.round(h*0.028)+'" fill="#6b6a64">'+esc(note)+'</text>' : '')
    + '</svg>';
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

/* Team meeting photo — swap this for the real photo when you have it. */
var TEAM_MEETING_PHOTO = "";
function teamMeetingSrc(client){
  return TEAM_MEETING_PHOTO || ph('Team meeting photo', 'Back-to-back sessions with the ' + client + ' team', 1200, 700);
}

/* ── Works ────────────────────────────────────────────────────── */
var WORKS = [
  {
    slug: "colin-guest", client: "Colin Guest", url: "colinguest.com", depth: "full",
    expertise: ["shopify","seo"],
    category: "Shopify · Zoho Integration · SEO",
    cardLine: "Outfit-led Shopify store wired into Zoho POS and Zoho Books",
    summary: "A Shopify build for a fashion brand that sells complete looks, not single items — with a scroll-driven landing section, and inventory and finance running through Zoho.",
    challenge: "Colin Guest needed more than a storefront. Customers buy the whole outfit, so the site had to sell the look rather than a grid of separate products. Behind the counter, stock and SKUs were being tracked in one place and the books in another, which is where the real time was going.",
    outcome: "A Shopify store built around how the brand actually sells, with Zoho POS holding inventory and Zoho Books reconciling the money — one system instead of three, and SEO in place from launch rather than bolted on later.",
    blocks: [
      { title: "We Consulted Before We Built",
        body: "The engagement started as a consultation, not a build. We mapped how Colin Guest actually sells — what a typical order looks like, how stock moves between retail and online, where the team was re-keying the same numbers — before choosing a single thing about the store. The platform decision came out of that, not before it.",
        img: ["colin-consult"] },
      { title: "A Landing Page That Sells the Whole Outfit",
        body: "The brief was specific: a landing page where a customer can buy a full outfit, not hunt down four products and hope they match. The page is built around complete looks, with the route from seeing an outfit to having it in the cart kept as short as it can be.",
        img: ["colin-landing","colin-outfit"] },
      { title: "Shopping That Moves With the Scroll",
        body: "The first section of the site is scroll-driven — the experience unfolds as the visitor scrolls rather than sitting still and waiting for a click. It makes the opening feel closer to a lookbook than a product listing, which is the right first impression for a brand selling how things go together.",
        img: ["colin-scroll"] },
      { title: "Inventory Lives in Zoho POS",
        body: "The store is connected to Zoho POS, so inventory and SKUs are held in one system across retail and online. Stock sold in either channel is the same stock, counted once — no separate spreadsheet, no end-of-day reconciliation to work out what is actually left on the shelf.",
        img: ["colin-zoho-pos"] },
      { title: "Zoho POS Feeds Zoho Books",
        body: "That POS connection runs through to Zoho Books, so sales and stock movement land in the financial records without anyone typing them in twice. The point of wiring the two together is control: the numbers the team makes decisions on are the numbers the store actually produced.",
        img: ["colin-zoho-books"] },
      { title: "SEO Implemented as Part of the Build",
        body: "SEO was implemented during the build rather than treated as a later project — structure, on-page work and technical basics handled while the site was being put together, when they cost nothing extra to get right.",
        img: ["colin-seo"] }
    ],
    facts: [
      { k: "Platform",  v: "Shopify" },
      { k: "Inventory", v: "Zoho POS" },
      { k: "Finance",   v: "Zoho Books" },
      { k: "Search",    v: "SEO from launch" }
    ]
  },
  {
    slug: "x-emirates", client: "X Emirates", url: "xemirates.online", depth: "full",
    expertise: ["performance","shopify"],
    category: "Performance Marketing · Shopify",
    cardLine: "From WhatsApp orders to a website funnel — up to 8x ROAS",
    summary: "A skincare brand selling through WhatsApp messages, moved onto a Shopify funnel and a rebuilt ad account — up to 8x ROAS at an 8% conversion rate.",
    challenge: "X Emirates was taking orders through WhatsApp messages. That works until it doesn't: there is no funnel to measure, no way to attribute a sale to an ad, and every order costs somebody's time. Their previous performance marketing agency was running ads against that setup and not producing results worth the spend.",
    outcome: "Sales moved onto the website, and the rebuilt ad account reached up to 8x ROAS at an 8% conversion rate — the difference between running ads and running a funnel you can actually measure.",
    blocks: [
      { title: "The Problem Was the Channel, Not the Ads",
        body: "We consulted with the team before touching a campaign. Selling in a WhatsApp inbox means no tracked funnel, no attribution, and a ceiling set by how fast a human can reply. Any ad budget spent against that is being measured on faith. The first recommendation was structural: move the point of sale onto the website.",
        img: ["xe-hero"] },
      { title: "The Website Becomes the Storefront",
        body: "The Shopify store became the place the sale actually happens — product pages, cart and checkout doing the work the inbox was doing, and every step of it measurable. That is what makes performance marketing possible: you cannot optimize what you cannot see.",
        img: ["xe-store","xe-detail"] },
      { title: "Rebuilding the Ad Account",
        body: "We took the account over from the previous agency and rebuilt it — campaign structure, audiences and creative testing run as an ongoing system rather than a set-and-forget launch. Spend follows what the numbers show, and what the numbers show is now tied to a real checkout.",
        img: ["xe-ads"] },
      { title: "Up to 8x ROAS at 8% Conversion",
        body: "The account reached up to 8x ROAS with the store converting at 8% — both numbers produced by the same change: a measurable funnel and a campaign structure built on top of it rather than beside it.",
        img: ["xe-conversion"] }
    ],
    stats: [
      { v: "Up to 8x", l: "ROAS" },
      { v: "8%",       l: "Conversion rate" },
      { v: "WhatsApp → Web", l: "Sales channel" }
    ]
  },
  {
    slug: "firoz-pickles", client: "Firoz Pickles", url: "firozpickles.com", depth: "full",
    expertise: ["performance","seo"],
    category: "Conversion Rate Optimization · AOV · SEO",
    cardLine: "3x the sales on the same organic traffic",
    summary: "Conversion rate and average order value worked together on an existing Shopify store — 3x the sales without buying a single extra visitor.",
    challenge: "Firoz Pickles had a working Shopify store and steady organic traffic. The traffic was never the problem. What that traffic produced was: visitors arrived, browsed, and left at a rate that did not match the demand behind them. That is funnel friction, not a demand problem, and it does not get fixed by spending more on ads.",
    outcome: "Conversion rate lifted 2.4x and, with average order value raised alongside it, total sales came out 3x higher on the same organic traffic. No extra spend, no new audience — the same visitors, converting better and spending more per order.",
    blocks: [
      { title: "Traffic Was Never the Problem",
        body: "We started with a funnel and store CRO audit to find where visitors were actually dropping off, rather than guessing from top-line analytics. The audit is the whole engagement in miniature: find the leak before prescribing the fix.",
        img: ["fp-hero"] },
      { title: "Fixing the Two Stages That Cost the Most",
        body: "Work was prioritized on the landing page and the checkout — the two stages where small friction costs the most completed orders. Changes were structured as testable improvements, so a result could be attributed to a specific fix rather than to a general redesign.",
        img: ["fp-store","fp-detail"] },
      { title: "Raising Average Order Value",
        body: "Conversion rate alone only gets you part of the way. We worked on average order value in parallel, so that each converted visitor was worth more — the second multiplier that turns a conversion lift into a sales lift.",
        img: ["fp-aov"] },
      { title: "2.4x Conversion, 3x Sales",
        body: "Conversion rate came out 2.4x higher. With average order value lifted alongside it, total sales landed at 3x — on the same organic traffic the store already had. The two numbers measure different things and multiply together, which is why the sales figure is higher than the conversion figure.",
        img: ["fp-results"] }
    ],
    stats: [
      { v: "2.4x", l: "Conversion lift" },
      { v: "3x",   l: "Sales, same traffic" },
      { v: "₹0", l: "Extra ad spend" }
    ]
  },
  {
    slug: "feza-dates", client: "Feza Dates", url: "fezadates.com", depth: "brief",
    expertise: ["shopify"],
    category: "Ecommerce · Shopify",
    cardLine: "Shopify build for a gifting-led catalog",
    summary: "A Shopify store build for a dates and gourmet-foods brand, structured for a catalog that leans heavily on gifting and seasonal demand.",
    challenge: "Launching an ecommerce presence that could handle a product catalog built around gifting, bundles, and seasonal spikes in demand, without the store buckling into a generic template experience.",
    approach: ["Structured the product and catalog architecture around how customers actually shop for gifting products, not just a flat product list.","Configured checkout and payment for the brand's target market.","Set up the store for ongoing management, with a clean handover rather than an agency-dependent build."],
    outcome: "A Shopify store built to be run by the Feza Dates team day to day, with the underlying structure in place to support seasonal and gifting-driven demand."
  },
  {
    slug: "chandanveda", client: "Chandanveda", url: "chandanveda.com", depth: "brief",
    expertise: ["shopify"],
    category: "Ecommerce · Shopify",
    cardLine: "Shopify build matched to the brand's positioning",
    summary: "A Shopify store build supporting Chandanveda's product line and brand positioning online.",
    challenge: "Bringing the brand's identity and product positioning online through a store structure that matched how the product line is actually organized and sold.",
    approach: ["Built the store on Shopify with theme customization matched to the brand's identity.","Structured product and catalog organization for clarity across the product line.","Configured the store for a clean, supportable handover."],
    outcome: "A live Shopify store aligned with the brand's positioning, ready to support ongoing growth."
  }
];

/* Client reviews — paste the real quote, name and role in here.
   A work with an empty quote simply does not render a review block. */
var WORK_REVIEWS = {
  "colin-guest":   { quote: "", name: "", role: "" },
  "x-emirates":    { quote: "", name: "", role: "" },
  "firoz-pickles": { quote: "", name: "", role: "" }
};

/* Image slots. Real screenshots where we have them, labelled
   placeholders where they are still to come.                        */
function workImages(){
  var CI = CASE_IMAGES;
  return {
    "colin-guest": {
      cover:            ph('Colin Guest — cover', 'Homepage screenshot', 1200, 630),
      "colin-consult":  ph('Consultation', 'Workshop / notes photo', 1200, 800),
      "colin-landing":  ph('Landing page', 'colinguest.com hero', 1200, 800),
      "colin-outfit":   ph('Full-outfit shopping', 'Complete look added to cart', 1200, 800),
      "colin-scroll":   ph('Scroll animation', 'First section, scroll-driven', 1200, 800),
      "colin-zoho-pos": ph('Zoho POS', 'Inventory and SKU sync', 1200, 800),
      "colin-zoho-books": ph('Zoho Books', 'Sales flowing into the books', 1200, 800),
      "colin-seo":      ph('SEO', 'Search setup at launch', 1200, 800)
    },
    "x-emirates": {
      cover:           CI['x-emirates'].cover,
      "xe-hero":       CI['x-emirates'].pattern,
      "xe-store":      CI['x-emirates'].pattern,
      "xe-detail":     CI['x-emirates'].detail,
      "xe-ads":        ph('Ad account', 'Campaign structure — screenshot to add', 1200, 800),
      "xe-conversion": ph('Conversion rate', 'Shopify analytics — screenshot to add', 1200, 800)
    },
    "firoz-pickles": {
      cover:        CI['firoz-pickles'].cover,
      "fp-hero":    CI['firoz-pickles'].pattern,
      "fp-store":   CI['firoz-pickles'].pattern,
      "fp-detail":  CI['firoz-pickles'].detail,
      "fp-aov":     ph('Average order value', 'Bundle / cart screenshot to add', 1200, 800),
      "fp-results": ph('Results', 'Analytics screenshot to add', 1200, 800)
    },
    "feza-dates":  { cover: CI['feza-dates'].cover,  inline: CI['feza-dates'].pattern,  detail: CI['feza-dates'].detail },
    "chandanveda": { cover: CI['chandanveda'].cover, inline: CI['chandanveda'].pattern, detail: CI['chandanveda'].detail }
  };
}
var WORK_IMAGES = workImages();
function workImg(slug, key){
  var set = WORK_IMAGES[slug] || {};
  return set[key] || ph(key, '', 1200, 800);
}
function findWork(slug){
  for(var i=0;i<WORKS.length;i++){ if(WORKS[i].slug === slug) return WORKS[i]; }
  return null;
}
'''
