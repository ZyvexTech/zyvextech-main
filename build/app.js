var LOGO_DATA_URI = "/assets/logo.png";
var ICONS = {
  shopify: '<path d="M6 8h12l1 12.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
  meta: '<path d="M4 12c0-2.6 1.5-4.8 3.6-4.8 2.2 0 3.7 2.1 4.4 4.8.7 2.7 2.2 4.8 4.4 4.8 2.1 0 3.6-2.2 3.6-4.8s-1.5-4.8-3.6-4.8c-2.2 0-3.7 2.1-4.4 4.8-.7 2.7-2.2 4.8-4.4 4.8C5.5 16.8 4 14.6 4 12Z"/>',
  google: '<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 5.7 13.6"/><path d="M12 12h7.5"/>',
  seo: '<circle cx="10" cy="10" r="6.2"/><path d="M14.6 14.6 20 20"/><path d="M7 11.2 9 8.8l2 2 3-3.6"/>',
  whatsapp: '<path d="M4 20l1.3-3.9A7.6 7.6 0 1 1 8.5 19L4 20Z"/><path d="M8.6 9.8c.3 2.9 2.7 5.3 5.6 5.6"/>',
  whale: '<path d="M3 14.5c2.8-5.6 7.7-8.3 12.4-8.3 3 0 5.1 2 5.1 4.8 0 4-4.2 6.8-9 6.8-2.9 0-4.9-.9-6-1.9"/><path d="M13 6.5c1-1.8 2.8-2.8 4.6-2.8"/>',
  spark: '<path d="M12 3v18"/><path d="M4.8 7.5l14.4 9"/><path d="M19.2 7.5 4.8 16.5"/>',
  suite: '<rect x="3" y="3" width="7.5" height="7.5" rx="1.4"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.4"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.4"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.4"/>',
  route: '<circle cx="5.5" cy="6" r="2"/><circle cx="18.5" cy="18" r="2"/><path d="M6.8 7.6c3 1 3.3 4 6.3 4.9s4.6-.7 6-3" stroke-dasharray="2.2 2.6"/>',
  target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.8"/><circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none"/>',
  trend: '<path d="M3.5 16.5 9 11l4 4 7-8"/><path d="M15.5 6.5H20V11"/>',
  flow: '<circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M6.6 7.4 10.4 16.4M17.4 7.4 13.6 16.4"/>',
  pen: '<path d="M4 20l1-4.6L15.4 5 19 8.6 8.6 19z"/><path d="M13.2 6.8 17.2 10.8"/>',
  phone: '<rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M11 18.2h2"/>',
  code: '<path d="M8.5 6 3.2 12l5.3 6"/><path d="M15.5 6l5.3 6-5.3 6"/>',
  funnel: '<path d="M4 4.5h16l-6.2 8v6.5l-3.6 2v-8.5z"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><ellipse cx="12" cy="12" rx="4" ry="8.5"/><path d="M3.5 12h17"/>',
  check: '<circle cx="12" cy="12" r="8.5"/><path d="M8 12.3l2.6 2.6L16.3 9"/>',
  mail: '<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.6 6.8 12 13l8.4-6.2"/>',
  sms: '<path d="M4 18.5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8.5L4 18.5Z"/><path d="M8.5 10h7M8.5 13h4"/>',
  gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 3.4v2.4M12 18.2v2.4M3.4 12h2.4M18.2 12h2.4M6 6l1.7 1.7M16.3 16.3 18 18M18 6l-1.7 1.7M7.7 16.3 6 18"/>'
};

function svgIcon(name, px){
  px = px || 18;
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="width:'+px+'px;height:'+px+'px;display:block" aria-hidden="true">'+(ICONS[name]||'')+'</svg>';
}

var BLOG_IMAGES = {"5-signs-your-shopify-store-needs-a-conversion-audit":{"cover":"/assets/img-03.svg","pattern":"/assets/img-04.svg","quote":"/assets/img-05.svg"},"why-most-whatsapp-marketing-automations-fail":{"cover":"/assets/img-06.svg","pattern":"/assets/img-07.svg","quote":"/assets/img-08.svg"},"shopify-vs-shopify-plus-when-its-actually-time-to-upgrade":{"cover":"/assets/img-09.svg","pattern":"/assets/img-10.svg","quote":"/assets/img-11.svg"},"the-real-cost-of-a-cheap-meta-ads-agency":{"cover":"/assets/img-12.svg","pattern":"/assets/img-13.svg","quote":"/assets/img-14.svg"},"seo-for-shopify-stores-technical-basics-most-agencies-skip":{"cover":"/assets/img-15.svg","pattern":"/assets/img-16.svg","quote":"/assets/img-17.svg"}};
var CASE_IMAGES = {"firoz-pickles":{"cover":"/assets/img-18.jpg","pattern":"/assets/img-19.jpg","detail":"/assets/img-20.jpg"},"feza-dates":{"cover":"/assets/img-21.jpg","pattern":"/assets/img-22.jpg","detail":"/assets/img-23.jpg"},"x-emirates":{"cover":"/assets/img-24.jpg","pattern":"/assets/img-25.jpg","detail":"/assets/img-26.jpg"},"chandanveda":{"cover":"/assets/img-27.jpg","pattern":"/assets/img-28.jpg","detail":"/assets/img-29.jpg"}};


/* ── Team photo ───────────────────────────────────────────────
   Replace TEAM_PHOTO below with the real group photo: either a
   "data:image/jpeg;base64,..." URI or a hosted image URL.
   Recommended crop: wide, roughly 1200x630. Nothing else needs
   to change — the Our Team section on the home page reads this. */
var TEAM_PHOTO = "/assets/img-30.svg";
var TEAM_PHOTO_ALT = "The Zyvex Tech team in Calicut";
/* Founder portrait: swap this for the real photo. Portrait crop, roughly 4:5. */
var FOUNDER_PHOTO = "";
var TEAM_PHOTO_CAPTION = "The Zyvex Tech team in Calicut, India.";

var COMPANY = {
  name: "Zyvex Tech",
  legalName: "Zyvex Tech LLP",
  founder: "Syed Fidel Shaan",
  founderTitle: "Founder & CEO",
  city: "Calicut, India",
  markets: "Worldwide",
  website: "www.zyvextech.co",
  email: "info@zyvextech.co",
  phone: "+91 73063 38097",
  tagline: "A consulting, implementation, and performance marketing partner, turning business goals into working systems, campaigns, and measurable growth.",
  positioning: "Zyvex Tech is a consulting, implementation, and performance marketing firm working at the intersection of process, ecommerce, and demand generation. We serve founders and growing businesses around the world, from a first Shopify store to a full funnel rebuild."
};

var STATS = [
  { value: "Up to 10x", label: "Average Meta Ads ROAS" },
  { value: "38%", label: "Average CAC Reduction" },
  { value: "7 Days", label: "Typical Time to Launch, or Less" },
  { value: "2.4x", label: "Best Conversion Lift From CRO Work" }
];

var VALUES = [
  { title: "Consult Before We Recommend", body: "We learn the business model, the product and the goal before naming a single tool. Then we say plainly what you need and what you don't.", icon: "target" },
  { title: "Execution, Not Just Advice", body: "Every recommendation ships. We build, configure, and integrate the systems ourselves. Strategy is only real once it's implemented.", icon: "code" },
  { title: "Decisions Backed by Data", body: "Funnel audits and CRO work start with what the numbers actually show, not assumptions about what should be converting.", icon: "trend" },
  { title: "Built to Convert", body: "Every store, campaign, landing page, and funnel we implement is judged on one thing: does it move a visitor to a decision.", icon: "funnel" },
  { title: "Maintained, Not Just Delivered", body: "We stay on to maintain and support what we build, especially Shopify stores, where the site is the revenue and a system nobody maintains quietly stops working.", icon: "suite" }
];

var APPROACH = [
  { step: 1, art: "consult", title: "We Consult First",
    body: "We learn how the business actually makes money, what the product is and what the goal is, before anything is recommended.",
    points: ["Business model", "Product", "Goals"] },
  { step: 2, art: "scope", title: "We Work Out What You Need, and What You Don't",
    body: "Then we name the tools that fit and the ones to skip. Talking a client out of software they were about to buy is a normal outcome.",
    points: ["A stack that fits", "Nothing you won't use"] },
  { step: 3, art: "build", title: "We Implement It Ourselves",
    body: "Store, campaigns, funnels and retention automations, all built and wired together by us, not handed over as a to-do list.",
    points: ["Built, not advised", "One team throughout"] },
  { step: 4, art: "maintain", title: "We Maintain and Support It",
    body: "We stay on after launch to maintain it, support your team and keep improving it, especially for Shopify clients.",
    points: ["Ongoing support", "Especially Shopify"] }
];

/* Small diagrams for the How We Work steps. Abstract on purpose; they
   carry the idea of each step rather than decorating it.               */
function stepArt(key){
  var open = '<svg class="hw-svg" viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">';
  var g = '<g stroke="#0a8a70" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">';
  var faint = 'stroke="#0d1211" stroke-opacity="0.18" stroke-width="1.5"';
  if(key === 'consult'){
    /* An intake sheet mid-answer: three things we establish before a single
       tool gets named. The last line is still being written.              */
    var row = function(n, y, label, answer, width, done){
      var out = '<circle cx="46" cy="'+y+'" r="15" fill="none" stroke="#0a8a70" '
        + 'stroke-opacity="'+(done?'1':'0.45')+'" stroke-width="2"/>'
        + '<text x="46" y="'+(y+6)+'" text-anchor="middle" font-family="Helvetica,Arial" '
        + 'font-size="15" fill="#0a8a70" fill-opacity="'+(done?'1':'0.55')+'">'+n+'</text>'
        + '<text x="86" y="'+(y-14)+'" font-family="Helvetica,Arial" font-size="13" '
        + 'letter-spacing="2.2" fill="#6b6a64">'+label+'</text>'
        + '<line x1="86" y1="'+(y+22)+'" x2="556" y2="'+(y+22)+'" stroke="#0d1211" '
        + 'stroke-opacity="0.16" stroke-width="1.5"/>'
        + '<text x="86" y="'+(y+14)+'" font-family="Helvetica,Arial" font-size="19" '
        + 'fill="'+(done?'#cfcdc6':'#78817d')+'">'+answer+'</text>'
        + '<line x1="86" y1="'+(y+22)+'" x2="'+(86+width)+'" y2="'+(y+22)+'" '
        + 'stroke="#0a8a70" stroke-width="2.5" stroke-linecap="round"/>';
      return out;
    };
    return open
      + '<text x="46" y="36" font-family="Helvetica,Arial" font-size="13" letter-spacing="3" '
      + 'fill="#0a8a70">DISCOVERY</text>'
      + '<line x1="46" y1="52" x2="556" y2="52" ' + faint + '/>'
      + row('1', 110, 'BUSINESS MODEL', 'How the money is actually made', 330, true)
      + row('2', 212, 'PRODUCT', 'What it is, and who buys it', 288, true)
      + row('3', 314, 'GOALS', 'Where it needs to get to', 214, true)
      + '<text x="46" y="392" font-family="Helvetica,Arial" font-size="15" fill="#6b6a64">'
      + 'Not one tool named yet</text>'
      + '</svg>';
  }
  if(key === 'scope'){
    var chip = function(x, y, w, label, teal){
      var stroke = teal ? '#0a8a70' : '#0d1211', op = teal ? '1' : '0.20';
      return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="44" rx="3" fill="none" '
        + 'stroke="'+stroke+'" stroke-opacity="'+op+'" stroke-width="'+(teal?2:1.5)+'"/>'
        + '<text x="'+(x+w/2)+'" y="'+(y+28)+'" text-anchor="middle" font-family="Helvetica,Arial" '
        + 'font-size="15" fill="'+(teal?'#0a8a70':'#78817d')+'">'+label+'</text>';
    };
    var col = [52, 224, 396], w = 152;
    var inTop = ['Shopify Plus', 'Shopify', 'Custom ERP'];
    var inBot = ['Meta Ads', 'AI chat widget', 'Technical SEO'];
    var pile = '';
    for(var i=0;i<3;i++){ pile += chip(col[i], 20, w, inTop[i], false); }
    for(var j=0;j<3;j++){ pile += chip(col[j], 74, w, inBot[j], false); }

    var out = '';
    var keep = ['Shopify', 'Meta Ads', 'Technical SEO'];
    for(var k=0;k<3;k++){ out += chip(col[k], 312, w, keep[k], true); }

    var cross = function(x, y){
      return '<path d="M'+(x-9)+' '+(y-9)+'l18 18M'+(x+9)+' '+(y-9)+'l-18 18" stroke="#0d1211" '
        + 'stroke-opacity="0.26" stroke-width="2" stroke-linecap="round"/>';
    };

    return open
      + pile
      + '<g stroke="#0a8a70" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">'
      + '<path d="M40 150 L236 258 L236 296"/><path d="M560 150 L364 258 L364 296"/>'
      + '</g>'
      + cross(104, 246) + cross(496, 246)
      + out
      + '<path d="M300 258 v34" stroke="#0a8a70" stroke-width="2" stroke-linecap="round"/>'
      + '<path d="M291 284 l9 12 l9 -12" stroke="#0a8a70" stroke-width="2" fill="none" '
      + 'stroke-linecap="round" stroke-linejoin="round"/>'
      + '<text x="300" y="392" text-anchor="middle" font-family="Helvetica,Arial" font-size="14" '
      + 'letter-spacing="2.5" fill="#6b6a64">THE STACK THAT FITS</text>'
      + '</svg>';
  }
  if(key === 'build'){
    /* Real marks where we hold the licensed asset; the platform's name set in
       type where we do not (Google and WhatsApp need their own approvals). */
    var glyph = function(name){
      return '<span class="hw-glyph">'+svgIcon(name, 20)+'</span>';
    };
    var word = function(t){ return '<span class="hw-word">'+t+'</span>'; };
    var node = function(marks, label){
      return '<div class="hw-node"><div class="hw-marks">'+marks+'</div>'
        + '<p class="hw-name">'+label+'</p></div>';
    };
    return '<div class="hw-sys">'
      + node(brandMark('shopify', false, 17), 'Store')
      + node(brandMark('meta', false, 11) + word('Google'), 'Campaigns')
      + node(word('WhatsApp') + glyph('sms') + glyph('mail'), 'Retention')
      + node(glyph('flow') + glyph('gear') + glyph('spark'), 'Automation')
      + '<p class="hw-wire">Wired into one system</p>'
      + '</div>';
  }

  // maintain
  var cx = 300, cy = 206, r = 128;
  var node = function(x, y, label, ly){
    return '<circle cx="'+x+'" cy="'+y+'" r="10" fill="#0a8a70"/>'
      + '<text x="'+x+'" y="'+ly+'" fill="#cfcdc6" font-family="Helvetica,Arial" font-size="17" text-anchor="middle">'+label+'</text>';
  };
  var chev = function(x, y, rot){
    return '<path d="M-7 -9 L7 0 L-7 9" transform="translate('+x+','+y+') rotate('+rot+')" '
      + 'stroke="#0a8a70" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  };
  return open
    + '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" stroke="#0d1211" stroke-opacity="0.16" stroke-width="1.5" fill="none"/>'
    + chev(412, 141, 60) + chev(300, 334, 180) + chev(188, 141, 300)
    + node(300, 78, 'Monitor', 52)
    + node(411, 270, 'Improve', 302)
    + node(189, 270, 'Support', 302)
    + '<text x="'+cx+'" y="'+(cy-4)+'" fill="#0a8a70" font-family="Helvetica,Arial" font-size="15" '
    + 'letter-spacing="3" text-anchor="middle">AFTER LAUNCH</text>'
    + '<text x="'+cx+'" y="'+(cy+24)+'" fill="#6b6a64" font-family="Helvetica,Arial" font-size="15" '
    + 'text-anchor="middle">we stay on</text>'
    + '</svg>';
}



var SERVICES = [
  { slug: "business-technology-consulting", number: "01", name: "Business & Technology Consulting", tagline: "Clear processes, clear goals", icon: "target",
    summary: "Process & funnel audits, technology goal setting, and systems design: the foundation before anything gets built.",
    description: "Before we build anything, we map how the business actually runs today: where process breaks down, where technology is doing too little or too much, and where growth is being left on the table. This is the audit-first foundation every other Zyvex Tech engagement is built on: a concrete, prioritized plan instead of a generic recommendation deck.",
    deliverables: ["Process & Funnel Audits","Technology Goal Setting","Systems & Workflow Design","Actionable Transformation Strategy","Efficiency Diagnostics"],
    idealFor: "Founders and operators who know something in their process or stack isn't working, but need a clear, prioritized plan rather than more advice.",
    signals: ["Growth has stalled and it's unclear whether the bottleneck is process, tech, or team","You're paying for tools and platforms that don't talk to each other","Every new initiative gets improvised instead of following a repeatable process","You want a prioritized roadmap, not another generic strategy deck"],
    process: [
      { title: "Discovery & Stakeholder Interviews", body: "We start by talking to the people actually running the business day to day, not just reading dashboards, to understand where time and money are really being lost.", icon: "target" },
      { title: "Process & Funnel Mapping", body: "Every workflow, tool, and handoff gets mapped end to end, so bottlenecks and duplicated effort are visible instead of assumed.", icon: "route" },
      { title: "Prioritized Roadmap", body: "Findings get translated into a ranked list of fixes, ordered by impact and effort, not by what's easiest to talk about.", icon: "trend" },
      { title: "Implementation Handover", body: "Where the roadmap points to a build (Shopify, automation, a new tool), we scope it directly into the relevant service, so the audit turns into action, not a shelved report.", icon: "flow" }
    ],
    faqs: [
      { q: "Do you only audit, or do you also implement the fixes?", a: "Both. The audit is the foundation, but nothing in it goes on a shelf. Findings hand directly into whichever service (Shopify build, automation, CRO) actually solves them." },
      { q: "How long does a typical audit take?", a: "Most process and funnel audits take one to two weeks depending on how many systems and stakeholders are involved, followed by a working session to walk through the prioritized roadmap." },
      { q: "We already have a tech stack. Do you replace it or work with it?", a: "We work with what's already delivering value and replace only what's genuinely holding growth back. The goal is a system that fits how you operate, not a rebuild for its own sake." }
    ],
    relatedCaseStudies: ["firoz-pickles"] },
  { slug: "shopify-ecommerce-development", number: "02", name: "Shopify Ecommerce Development", tagline: "Stores built to run themselves", icon: "shopify",
    summary: "End-to-end Shopify and Shopify Plus builds, customization, and ongoing implementation, as an Official Shopify Partner.",
    description: "As an Official Shopify Partner, we build stores that are meant to be run, not babysat, from first setup through checkout configuration, catalog structuring, and app customization. Whether you're launching a first store or migrating an existing one onto Shopify or Shopify Plus, we handle the build directly and hand it over fully documented.",
    deliverables: ["Shopify Store Setup & Build","Shopify Plus Store Setup","Theme & App Customization","Checkout & Payment Configuration","Product & Catalog Structuring","Store Migration & Handover"],
    idealFor: "Brands launching a new Shopify store, migrating from another platform, or outgrowing a store that was never properly structured.",
    signals: ["You're launching your first Shopify store and don't want to start from a generic template","Your current store was built quickly and has become hard to manage or extend","You're migrating from another platform and need a clean, documented move","Checkout, catalog, or app conflicts are creating manual workarounds for your team"],
    process: [
      { title: "Store Architecture & Planning", body: "We map catalog structure, collections, and checkout requirements before any theme work starts, so the store is built around how you actually sell.", icon: "route" },
      { title: "Theme & App Build", body: "Theme customization and app integrations are handled directly by our team, configured to your catalog rather than bolted on generically.", icon: "code" },
      { title: "Migration & Data Handling", body: "For migrations, product, customer, and order data move across cleanly, with redirects and SEO structure preserved.", icon: "globe" },
      { title: "QA, Launch & Handover", body: "Every store is tested across devices and payment flows before launch, then handed over fully documented so your team can run it day to day.", icon: "check" }
    ],
    faqs: [
      { q: "Do you build on standard Shopify or Shopify Plus?", a: "Both, depending on your operational complexity. We'll recommend the right tier based on your checkout, multi-storefront, and automation needs, not push Plus by default." },
      { q: "Can you migrate an existing store without losing our SEO rankings?", a: "Yes. Migrations include a redirect and structured-data plan specifically to protect the rankings and traffic the existing store has already earned." },
      { q: "Who manages the store after launch?", a: "Your team, using the documentation and training we hand over, with Zyvex Tech available for ongoing support or further builds as needed." }
    ],
    relatedCaseStudies: ["feza-dates","x-emirates","chandanveda"] },
  { slug: "performance-marketing", number: "03", name: "Performance Marketing", tagline: "Meta Ads-led, run as an ongoing retainer", icon: "meta",
    summary: "Meta (Facebook & Instagram) ad campaigns built for measurable ROAS, with retargeting, lookalikes, and creative testing built in.",
    description: "Performance marketing at Zyvex Tech is run as an ongoing retainer, not a one-off campaign launch. We handle audience research and targeting, build and test creative, and report against ad spend and ROAS, so the budget keeps moving toward what's actually converting, not what looked good on day one.",
    deliverables: ["Meta (Facebook & Instagram) Ad Campaigns","Audience Research & Targeting","Creative Testing & Iteration","Retargeting & Lookalike Funnels","Ad Spend & ROAS Reporting"],
    idealFor: "Ecommerce and lead-gen businesses that need paid acquisition run as a disciplined, reported-on system, not a set-and-forget ad account.",
    signals: ["Ad spend is going up but ROAS isn't following","You've never seen a breakdown of which creative or audience is actually converting","Retargeting and lookalike audiences were set up once and haven't been touched since","You want a reported-on retainer, not a black-box ad account"],
    process: [
      { title: "Account & Audience Audit", body: "We start by reviewing existing campaigns, audiences, and creative performance to see what's actually working before changing anything.", icon: "meta" },
      { title: "Campaign & Creative Build", body: "New campaigns, ad sets, and creative variations are built around tested audience segments, not a single broad campaign running on hope.", icon: "target" },
      { title: "Testing & Iteration", body: "Creative and audiences are tested on a rolling basis, with budget shifted toward what the data shows is converting.", icon: "trend" },
      { title: "Reporting Tied to Decisions", body: "Reporting connects spend directly to ROAS and specific decisions: what changed, why, and what happens next. Not just a monthly summary PDF.", icon: "check" }
    ],
    faqs: [
      { q: "Do you run ads on platforms other than Meta?", a: "Meta (Facebook & Instagram) is our core performance marketing focus, run in coordination with SEO and CRO so paid and organic support each other." },
      { q: "What's the minimum ad spend to work with you?", a: "It depends on your market and goals. We'll assess whether your current or planned spend is enough to test properly during the initial audit." },
      { q: "How often do you report on performance?", a: "Reporting is ongoing as part of the retainer, with regular check-ins tied to ROAS and specific optimization decisions, not just a static monthly report." }
    ],
    relatedCaseStudies: [] },
  { slug: "seo", number: "04", name: "SEO", tagline: "Ranking built to last", icon: "seo",
    summary: "Technical and on-page SEO, keyword strategy, and Shopify-specific search audits for organic growth that compounds.",
    description: "We treat SEO as infrastructure, not a one-time checklist. That means technical and on-page fixes, a keyword and content strategy tied to how your customers actually search, and, for ecommerce clients, SEO audits specific to how Shopify handles indexing, structured data, and site speed.",
    deliverables: ["On-Page & Technical SEO","Local & Organic Search Growth","Keyword & Content Strategy","Shopify & Website SEO Audits","Search Performance Reporting"],
    idealFor: "Businesses that want organic search to become a real acquisition channel instead of an afterthought behind paid ads.",
    signals: ["Organic traffic has been flat for months despite adding content","You're not sure if your Shopify store has technical SEO issues holding it back","Competitors consistently outrank you for terms you should be winning","SEO has been a checklist someone ran once, not an ongoing system"],
    process: [
      { title: "Technical & On-Page Audit", body: "We check indexing, site speed, structured data, and on-page fundamentals, with Shopify-specific checks for stores, since the platform has its own quirks.", icon: "seo" },
      { title: "Keyword & Content Strategy", body: "Keyword targets are built around how your customers actually search, not generic volume-first lists.", icon: "route" },
      { title: "Implementation", body: "Technical fixes and on-page changes are implemented directly, not just documented in a report for someone else to action.", icon: "code" },
      { title: "Ongoing Reporting & Iteration", body: "Search performance is tracked over time, with strategy adjusted as rankings, algorithms, and your catalog evolve.", icon: "trend" }
    ],
    faqs: [
      { q: "How long until we see results?", a: "Organic growth compounds. Most clients see meaningful movement in 2-4 months, with results continuing to build as technical fixes and content strategy stack up." },
      { q: "Do you write the content too?", a: "We define the keyword and content strategy and can produce or guide content production, depending on what fits your team and budget." },
      { q: "Is SEO different for Shopify stores?", a: "Yes. Shopify handles indexing, URLs, and structured data differently from a typical CMS, so a generic SEO checklist misses platform-specific issues that matter." }
    ],
    relatedCaseStudies: [] },
  { slug: "conversion-rate-optimization", number: "05", name: "Conversion Rate Optimization", tagline: "Turning traffic into revenue", icon: "trend",
    summary: "Funnel and store CRO audits, landing page and checkout optimization, and structured A/B testing.",
    description: "Traffic without conversion is a leak, not a channel. We audit the funnel end to end (landing pages, product pages, checkout), identify where visitors actually drop off, and run structured tests against real data rather than opinions about what \"should\" convert better.",
    deliverables: ["Funnel & Store CRO Audits","Landing Page & Checkout Optimization","A/B & Split Testing","On-Site Experience Improvements"],
    idealFor: "Stores and funnels already getting traffic that isn't converting at the rate it should.",
    signals: ["Traffic is steady or growing but sales aren't following","You've redesigned the store more than once without ever diagnosing why visitors drop off","Mobile and desktop conversion rates are noticeably different","You're making funnel decisions from top-line analytics without session recordings"],
    process: [
      { title: "Funnel & Store CRO Audit", body: "We map the full funnel (landing, product, cart, checkout) to find exactly where visitors drop off, backed by session data, not assumptions.", icon: "trend" },
      { title: "Prioritized Test Plan", body: "Findings become a ranked list of tests, ordered by expected impact so effort goes to the highest-leverage fixes first.", icon: "route" },
      { title: "Structured A/B Testing", body: "Changes are run as testable improvements against real traffic, so results can be attributed to specific fixes.", icon: "flow" },
      { title: "Iterate on What Wins", body: "Winning tests get rolled out, losing tests get discarded, and the next round of testing starts from what the data just taught us.", icon: "check" }
    ],
    faqs: [
      { q: "How is this different from a redesign?", a: "A redesign is a design decision. CRO is a behavior decision. We test what's actually causing hesitation and fix that, rather than restyling pages that were never the problem." },
      { q: "Do you need a minimum amount of traffic to run tests?", a: "Enough traffic to reach statistical confidence in a reasonable time. We'll assess this during the audit and recommend the right testing approach for your volume." },
      { q: "Is this a one-time project or ongoing?", a: "CRO compounds best as an ongoing process. We typically start with a focused audit and testing sprint, then continue iterating as a retainer." }
    ],
    relatedCaseStudies: ["firoz-pickles"] },
  { slug: "marketing-automation-funnels", number: "06", name: "Marketing Automation & Funnels", tagline: "Systems that sell while you don't", icon: "flow",
    summary: "Marketing funnel design, email and WhatsApp automation, and customer journey mapping that runs without manual follow-up.",
    description: "We design and wire up the automation that keeps customers moving, from first contact through retention, so growth doesn't depend on someone manually sending the next message. That includes email and WhatsApp marketing automation, journey mapping, and re-engagement flows built directly into your existing stack.",
    deliverables: ["Marketing Funnel Design","Email & Automation Workflows","WhatsApp Marketing Automation","Customer Journey Mapping","Retention & Re-engagement Flows"],
    idealFor: "Businesses with real traffic and customer volume that are still following up manually instead of through a built system.",
    signals: ["Your team is following up with customers manually instead of through a system","Leads or customers go quiet after the first interaction with no re-engagement flow","You have WhatsApp or email tools but no actual automation running through them","Customer journeys look different depending on who on your team handles them"],
    process: [
      { title: "Journey Mapping", body: "We map the real customer journey, from first contact through retention, to see where automation should be doing the work instead of a person.", icon: "route" },
      { title: "Funnel & Flow Design", body: "Email and WhatsApp flows are designed around specific triggers and behaviors, not a single generic broadcast.", icon: "flow" },
      { title: "Build & Integration", body: "Automations are wired directly into your existing stack (the store, the ad platform, your messaging tools) so they run without manual intervention.", icon: "whatsapp" },
      { title: "Monitor & Refine", body: "Flows are reviewed against real performance and refined, with exit conditions, timing and messaging adjusted as behavior data comes in.", icon: "trend" }
    ],
    faqs: [
      { q: "Do you build on WhatsApp, email, or both?", a: "Both, depending on where your customers actually respond. We'll recommend the right mix rather than defaulting to one channel." },
      { q: "What if we already have some automation set up?", a: "We'll audit what's running first. Often the fix is adding proper exit conditions and segmentation to an existing setup, not starting over." },
      { q: "How is this different from just broadcasting messages?", a: "Automation routes people based on behavior (abandoned cart, post-purchase, re-engagement) instead of sending the same message to everyone at the same time." }
    ],
    relatedCaseStudies: [] },
  { slug: "branding-website-development", number: "07", name: "Branding & Website Development", tagline: "A presence that matches the work", icon: "pen",
    summary: "Brand identity, corporate and business website design, and content support that makes your presence match your delivery.",
    description: "A strong operation deserves a presence that matches it. We build brand identity and guidelines, design and launch corporate and business websites, and support the content and messaging that goes on them, coordinated with the systems and campaigns we're already running for you.",
    deliverables: ["Brand Identity & Guidelines","Corporate & Business Website Design","Website Development & Launch","Content & Messaging Support"],
    idealFor: "Businesses whose website or brand identity no longer reflects the quality of what they actually deliver.",
    signals: ["Your website or brand identity no longer reflects the quality of what you deliver","You're inconsistent across platforms, with different logos, tones, or messaging in different places","You've outgrown a DIY website builder or template","You need content and messaging support, not just a visual redesign"],
    process: [
      { title: "Brand Discovery", body: "We start with your positioning, audience, and what you actually want the brand to communicate, before any visual direction is proposed.", icon: "target" },
      { title: "Identity & Guidelines", body: "Brand identity and guidelines are built to be usable: consistent across your website, ads, and other customer touchpoints, not just a one-off logo file.", icon: "pen" },
      { title: "Website Design & Build", body: "Corporate and business websites are designed and built around the brand identity and coordinated with whatever systems and campaigns we're already running for you.", icon: "code" },
      { title: "Content & Launch Support", body: "Messaging and content support carries through to launch, so the site reads as coherently as it looks.", icon: "check" }
    ],
    faqs: [
      { q: "Do you design logos from scratch or just refresh existing ones?", a: "Both, depending on whether your existing identity has equity worth building on or needs a genuine reset." },
      { q: "Is the website built on a specific platform?", a: "We'll recommend the right platform for a corporate or business site based on your content and update needs. It doesn't have to be Shopify unless you're also running ecommerce." },
      { q: "Can you help with the copy too?", a: "Yes. Content and messaging support is part of this service, coordinated with your brand positioning." }
    ],
    relatedCaseStudies: [] },
  { slug: "mobile-app-development", number: "08", name: "Mobile App Development", tagline: "Your business, in your customer's pocket", icon: "phone",
    summary: "iOS, Android, and cross-platform app builds, from UI/UX design through app store setup and launch.",
    description: "For businesses ready to move beyond the browser, we build iOS, Android, and cross-platform apps, handling UI/UX design, development, and the app store setup and launch process end to end.",
    deliverables: ["iOS & Android App Development","Cross-Platform App Builds","App UI/UX Design","App Store Setup & Launch Support"],
    idealFor: "Businesses whose customer relationship is ready to live in a dedicated app, not just a website.",
    signals: ["Your customer relationship is ready to live in a dedicated app, not just a website","You need push notifications, offline access, or device features a website can't offer","You want one build that works across iOS and Android without duplicating effort","A previous app project stalled at the app store submission stage"],
    process: [
      { title: "Product Scoping", body: "We define the app's core use case and feature set first. The goal is a focused first release, not a feature-bloated build that never ships.", icon: "target" },
      { title: "UI/UX Design", body: "Screens and flows are designed around how people actually use a mobile app for your kind of business, not a shrunk-down version of the website.", icon: "pen" },
      { title: "Development", body: "iOS, Android, or cross-platform builds are developed and tested directly by our team, integrated with your existing systems where needed.", icon: "code" },
      { title: "App Store Setup & Launch", body: "We handle app store listings, submission requirements, and launch: the parts of app development most projects underestimate.", icon: "phone" }
    ],
    faqs: [
      { q: "Native or cross-platform?", a: "It depends on your feature needs and budget. We'll recommend the right approach rather than defaulting to one technology." },
      { q: "Do you handle app store approval?", a: "Yes. App store setup and submission support is part of the service, including the compliance details that commonly cause rejections." },
      { q: "Can the app connect to our existing store or systems?", a: "Yes. Integration with your existing Shopify store or other systems is scoped as part of the build." }
    ],
    relatedCaseStudies: [] },
  { slug: "custom-software-development", number: "09", name: "Custom Software Development", tagline: "Built for how you actually work", icon: "code",
    summary: "Bespoke business software, internal tools and dashboards, and third-party API integrations.",
    description: "Off-the-shelf tools eventually stop fitting how a growing business actually operates. We build bespoke software, internal tools and dashboards, and third-party API integrations designed around your real workflow, with ongoing maintenance and support once it's live.",
    deliverables: ["Bespoke Business Software","Internal Tools & Dashboards","Third-Party API Integrations","Ongoing Maintenance & Support"],
    idealFor: "Businesses that have outgrown generic software and need tools built around their actual process.",
    signals: ["Off-the-shelf tools no longer fit how your team actually works","You're stitching together spreadsheets and manual processes to cover gaps in your stack","You need two or more systems to talk to each other through an API integration","Internal visibility into operations depends on someone manually pulling reports"],
    process: [
      { title: "Workflow Discovery", body: "We study your actual process, not a generic template, to understand what the software needs to do and who needs to use it.", icon: "route" },
      { title: "Solution Design", body: "Bespoke software or dashboards are scoped and designed around your real workflow, including where third-party APIs need to plug in.", icon: "code" },
      { title: "Build & Integration", body: "Development happens in step with your team's feedback, with API integrations tested against your live systems, not just sandbox data.", icon: "suite" },
      { title: "Maintenance & Support", body: "Ongoing maintenance and support keep the software working as your process and data continue to evolve.", icon: "check" }
    ],
    faqs: [
      { q: "What kind of software do you build?", a: "Internal tools, dashboards, and bespoke business software: generally purpose-built systems rather than consumer-facing products." },
      { q: "Do you maintain what you build?", a: "Yes. Ongoing maintenance and support is part of this service, not a separate afterthought." },
      { q: "Can you integrate with tools we already use?", a: "Yes. Third-party API integrations are a core part of this service, connecting the systems you already rely on." }
    ],
    relatedCaseStudies: [] },
  { slug: "b2b-lead-generation-systems", number: "10", name: "B2B Lead Generation Systems", tagline: "Built for pipeline, not just traffic", icon: "route",
    summary: "Landing pages, lead capture funnels, and lead-gen CRO built for qualified pipeline, not vanity traffic.",
    description: "B2B growth lives or dies on pipeline quality, not raw traffic. We design landing pages and lead capture funnels around a clear B2B funnel strategy, set up the CRM and lead routing behind them so nothing sits unworked, and run CRO specifically against lead quality and conversion, not just click volume.",
    deliverables: ["Landing Page Design & Build","Lead Capture Funnels","Lead-Gen CRO","CRM Setup & Lead Routing","B2B Funnel Strategy"],
    idealFor: "B2B teams generating traffic or inquiries that aren't turning into a real, qualified pipeline.",
    signals: ["You're generating inquiries that rarely turn into qualified pipeline","Your landing pages weren't built around a specific funnel strategy","Lead capture happens, but there's no CRO process improving lead quality over time","Your lead-gen tools were set up once and never revisited"],
    process: [
      { title: "Funnel Strategy", body: "We define the B2B funnel strategy first, including what a qualified lead actually looks like for your business, before any page gets built.", icon: "route" },
      { title: "Landing Page & Capture Build", body: "Landing pages and lead capture funnels are designed and built around that strategy, not a generic template form.", icon: "funnel" },
      { title: "Tooling Setup", body: "Lead-gen tools and software are configured and connected, so leads flow into your existing pipeline instead of sitting in a spreadsheet.", icon: "suite" },
      { title: "CRO for Lead Quality", body: "We run CRO specifically against lead quality and conversion, not just click volume, so the funnel keeps producing pipeline, not just traffic.", icon: "trend" }
    ],
    faqs: [
      { q: "How is B2B lead gen different from ecommerce CRO?", a: "B2B optimizes for qualified pipeline, not purchases. The funnel, messaging, and conversion signals we test are built around lead quality, not cart completion." },
      { q: "Do you handle the CRM side too?", a: "For B2B lead generation, yes. A pipeline needs somewhere to live. We set up the CRM and the routing rules so every lead lands with an owner and a next step instead of sitting in an inbox. For ecommerce clients our focus is performance marketing, retention automation and SEO rather than CRM work." },
      { q: "What counts as a \"qualified\" lead?", a: "We define that with you upfront. It varies by business, and the whole funnel strategy is built around that definition, not a generic form-fill count." }
    ],
    relatedCaseStudies: [] }
];

/* ── Service extras (content from the India landing site) ────────
   Merged into SERVICES below: a hands-on checklist of what we run,
   what every build includes, notes on fit, and extra FAQs.          */
var SERVICE_EXTRAS = {
  "performance-marketing": {
    practice: { title: "Paid Advertising", sub: "Meta-led campaigns built around ROAS, not reach",
      items: ["Meta and Instagram campaigns","Audience research and targeting","Retargeting and funnel structure","Budget scaling based on what converts","Pixel, CAPI and ROAS tracking","Reporting tied to decisions, not a PDF"] },
    reporting: true,
    note: { title: "Is this a fit?", body: "<b>There is a minimum monthly ad spend.</b> Below it there is not enough volume for testing to produce a real answer, and we would be charging you to guess. We confirm the figure for your market during the audit, and would rather say so now than in month three.</p><p>We also work best with brands that already have their own content or creative team. We plan and run the campaigns, the SEO and the store. We do not produce the photography, video or ad creative." },
    faqs: [
      { q: "Is there a lock-in period?", a: "It runs month to month. The work compounds, so most engagements get more valuable the longer they run, but that should be your reason to stay rather than a contract." },
      { q: "We already have an agency. Can you take over?", a: "Yes, and it is a common starting point. The onboarding audit covers the existing ad account, the store and the tracking setup before anything is changed, so we know what is worth keeping. You keep ownership of the ad account throughout." },
      { q: "How soon do we see results?", a: "Paid and CRO work can move within weeks. Testing needs enough volume to produce a real answer, so the first month is about finding what converts, then budget scales behind it." },
      { q: "Do you produce the ad creative and content?", a: "No. We plan and run the campaigns and tell you what the numbers say is working. The photography, video and ad creative come from your side, so this works best if you already have a content team or a system for producing it." }
    ],
    related: ["x-emirates"] },
  "marketing-automation-funnels": {
    practice: { title: "Retention Marketing", sub: "Turning first orders into repeat customers",
      items: ["Email and WhatsApp marketing flows","Abandoned cart and browse recovery","Welcome, post-purchase and win-back journeys","Customer segmentation and lifecycle offers","Broadcasts for launches, drops and sales","Repeat purchase rate and LTV tracking"] } },
  "seo": {
    practice: { title: "SEO & Content", sub: "Infrastructure, not a one-time checklist",
      items: ["Technical and on-page SEO","Shopify-specific indexing and structure","Keyword strategy from real search behaviour","Collection and product page optimisation","Structured data and site speed","Content strategy and buying guides"] },
    reporting: true,
    faqs: [
      { q: "How soon will SEO show results?", a: "SEO compounds and usually shows meaningful movement in two to four months. Anyone promising you ranking results faster than that is selling you something." }
    ],
    related: ["firoz-pickles","nichespectacles"] },
  "shopify-ecommerce-development": {
    practice: { title: "Shopify Development", sub: "Stores built around conversion, not around a theme",
      items: ["Store builds, migrations and theme work","Conversion-focused product and cart pages","Checkout, payments and COD configured","Funnel audits backed by session data","Average order value and bundling work","Structured CRO tests, not opinion-led redesigns"] },
    includes: { title: "Every build includes", items: ["Structured catalog","Product metafields","Checkout &amp; COD setup","CRO","AOV optimisation","Documented handover"] },
    faqs: [
      { q: "How long does a Shopify build take?", a: "It depends on the project scope, but most builds take 3 to 4 weeks from consultation to launch. We confirm the timeline before you commit." },
      { q: "How much does a Shopify build cost?", a: "It depends completely on the scope, since every build is customised. You get a clear quote after the consultation, before any work starts." },
      { q: "Do you build custom projects beyond Shopify themes?", a: "Yes. Alongside Shopify themes and Liquid, we build custom projects in React, from custom storefronts to web apps and tools." },
      { q: "Do you offer ongoing support?", a: "Yes. After launch we offer ongoing support for fixes, updates and improvements. You also get full documentation, so your team is never locked in." },
      { q: "Can you handle the marketing too?", a: "Yes. Performance marketing, SEO and retention run as one system with the store, by the same team, so fixes on the store ship without waiting on another vendor." }
    ],
    related: ["colin-guest","nichespectacles","frenchcakes"] },
  "conversion-rate-optimization": {
    practice: { title: "Conversion &amp; AOV", sub: "More from the traffic you already have",
      items: ["Funnel audits backed by session data","Conversion-focused product and cart pages","Average order value and bundling work","Checkout, payments and COD configured","Structured CRO tests, not opinion-led redesigns","Reporting on conversion rate and AOV, month by month"] },
    related: ["firoz-pickles"] }
};
SERVICES.forEach(function(s){
  var x = SERVICE_EXTRAS[s.slug];
  if(!x) return;
  s.practice = x.practice; s.includes = x.includes; s.note = x.note; s.reporting = !!x.reporting;
  if(x.faqs) s.faqs = (s.faqs || []).concat(x.faqs);
  if(x.related) x.related.forEach(function(r){ if((s.relatedCaseStudies || (s.relatedCaseStudies = [])).indexOf(r) < 0) s.relatedCaseStudies.push(r); });
});

var TECH_PARTNERS = [
  { name: "Shopify", icon: "shopify", note: "Ecommerce platform. Official Shopify Partner." },
  { name: "Meta", icon: "meta", note: "Advertising & social" },
  { name: "Google", icon: "google", note: "Search, ads & analytics" }
];

var TOOLS_ADVISED = [
  { name: "WhatsApp Marketing", icon: "whatsapp", note: "Automated broadcasts, catalogs, and conversational flows for customer engagement." },
  { name: "Triple Whale", icon: "whale", note: "Real-time tracking and attribution across ad spend, store, and revenue." },
  { name: "Claude for Workflows", icon: "spark", note: "Advisory on bringing Claude into internal operations and customer-facing workflows." },
  { name: "Delivery Tracking APIs", icon: "route", note: "Custom API setup connecting your store to courier and delivery-tracking systems." },
  { name: "Zoho Suite", icon: "suite", note: "Advisory and setup across Zoho Books, Inventory and POS, as used on client builds." }
];

var STACK = ["Liquid","JavaScript","TypeScript","HTML5","CSS3","React","Next.js","Node.js"];

/* ── Works: expertises ────────────────────────────────────────── */
var EXPERTISES = [
  { key: "all",         label: "All Work" },
  { key: "shopify",     label: "Shopify Development" },
  { key: "performance", label: "Performance Marketing" },
  { key: "seo",         label: "SEO" },
  { key: "business",    label: "Business Websites" }
];
function expertiseLabel(k){
  for(var i=0;i<EXPERTISES.length;i++){ if(EXPERTISES[i].key === k) return EXPERTISES[i].label; }
  return k;
}

/* ── Placeholder art ──────────────────────────────────────────────
   ph() draws a labelled slate so every image slot on the site says
   what belongs in it. Replace a ph(...) call with a real image URL
   or data URI and that slot is done, nothing else to change.      */
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
    + '<rect width="'+w+'" height="'+h+'" fill="#f4f8f7"/>'
    + '<g stroke="#0d1211" stroke-opacity="0.06" stroke-width="1">'+lines+'</g>'
    + '<g fill="none" stroke="#0d1211" stroke-opacity="0.16" stroke-width="2">'+corners+'</g>'
    + '<circle cx="'+(w/2)+'" cy="'+(cy-Math.round(h*0.11))+'" r="'+Math.round(h*0.045)+'" fill="none" stroke="#0a8a70" stroke-width="2.5"/>'
    + '<path d="M'+(w/2-Math.round(h*0.018))+' '+(cy-Math.round(h*0.11))+'h'+Math.round(h*0.036)+'M'+(w/2)+' '+(cy-Math.round(h*0.128))+'v'+Math.round(h*0.036)+'" stroke="#0a8a70" stroke-width="2.5" stroke-linecap="round"/>'
    + '<text x="'+(w/2)+'" y="'+(cy+Math.round(h*0.03))+'" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" '
    + 'font-size="'+Math.round(h*0.042)+'" font-weight="600" letter-spacing="'+Math.round(h*0.011)+'" fill="#cfcdc6">'+esc(label).toUpperCase()+'</text>'
    + (note ? '<text x="'+(w/2)+'" y="'+(cy+Math.round(h*0.085))+'" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" '
      + 'font-size="'+Math.round(h*0.028)+'" fill="#6b6a64">'+esc(note)+'</text>' : '')
    + '</svg>';
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

/* Team meeting photo: swap this for the real photo when you have it. */
var TEAM_MEETING_PHOTO = "";
function teamMeetingSrc(client){
  return TEAM_MEETING_PHOTO || ph('Team meeting photo', 'Back-to-back sessions with the ' + client + ' team', 1200, 700);
}

/* ── Works ────────────────────────────────────────────────────── */
var WORKS_ORDER = ["x-emirates", "wolgan", "abclux", "beyondspare", "ba51", "nichespectacles", "frenchcakes", "feza-dates", "colin-guest", "firoz-pickles", "cocoroots", "turmaroot", "thebombcase", "chandanveda"];
var WORKS = [
  {
    slug: "colin-guest", client: "Colin Guest", url: "colinguest.com", depth: "full",
    expertise: ["shopify","seo"], countries: [],
    category: "Shopify · Zoho Integration · SEO",
    cardLine: "Outfit-led Shopify store wired into Zoho POS and Zoho Books",
    summary: "A Shopify build for a fashion brand that sells complete looks, not single items, with a scroll-driven landing section, and inventory and finance running through Zoho.",
    challenge: "Colin Guest needed more than a storefront. Customers buy the whole outfit, so the site had to sell the look rather than a grid of separate products. Behind the counter, stock and SKUs were being tracked in one place and the books in another, which is where the real time was going.",
    outcome: "A Shopify store built around how the brand actually sells, with Zoho POS holding inventory and Zoho Books reconciling the money. One system instead of three, and SEO in place from launch rather than bolted on later.",
    blocks: [
      { title: "We Consulted Before We Built",
        body: "The engagement started as a consultation, not a build. We mapped how Colin Guest actually sells, looking at what a typical order looks like, how stock moves between retail and online, and where the team was re-keying the same numbers, before choosing a single thing about the store. The platform decision came out of that, not before it.",
        img: ["colin-consult"] },
      { title: "A Landing Page That Sells the Whole Outfit",
        body: "The brief was specific: a landing page where a customer can buy a full outfit, not hunt down four products and hope they match. The page is built around complete looks, with the route from seeing an outfit to having it in the cart kept as short as it can be.",
        img: ["colin-landing"] },
      { title: "Shopping That Moves With the Scroll",
        body: "The first section of the site is scroll-driven. The experience unfolds as the visitor scrolls rather than sitting still and waiting for a click. It makes the opening feel closer to a lookbook than a product listing, which is the right first impression for a brand selling how things go together.",
        img: ["colin-scroll"] },
      { title: "Inventory Lives in Zoho POS",
        body: "The store is connected to Zoho POS, so inventory and SKUs are held in one system across retail and online. Stock sold in either channel is the same stock, counted once. No separate spreadsheet, no end-of-day reconciliation to work out what is actually left on the shelf.",
        img: ["colin-zoho-pos"] },
      { title: "Zoho POS Feeds Zoho Books",
        body: "That POS connection runs through to Zoho Books, so sales and stock movement land in the financial records without anyone typing them in twice. The point of wiring the two together is control: the numbers the team makes decisions on are the numbers the store actually produced.",
        img: ["colin-zoho-books"] },
      { title: "SEO Implemented as Part of the Build",
        body: "SEO was implemented during the build rather than treated as a later project. Structure, on-page work and technical basics were handled while the site was being put together, when they cost nothing extra to get right.",
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
    expertise: ["performance","shopify"], countries: [["\uD83C\uDDE6\uD83C\uDDEA","UAE"]],
    category: "Performance Marketing · Shopify",
    cardLine: "From WhatsApp orders to a website funnel, up to 8x ROAS",
    summary: "A skincare brand selling through WhatsApp messages, moved onto a Shopify funnel and a rebuilt ad account, reaching up to 8x ROAS at an 8% conversion rate.",
    challenge: "X Emirates was taking orders through WhatsApp messages. That works until it doesn't: there is no funnel to measure, no way to attribute a sale to an ad, and every order costs somebody's time. Their previous performance marketing agency was running ads against that setup and not producing results worth the spend.",
    outcome: "Sales moved onto the website, and the rebuilt ad account reached up to 8x ROAS at an 8% conversion rate. That is the difference between running ads and running a funnel you can actually measure.",
    blocks: [
      { title: "The Problem Was the Channel, Not the Ads",
        body: "We consulted with the team before touching a campaign. Selling in a WhatsApp inbox means no tracked funnel, no attribution, and a ceiling set by how fast a human can reply. Any ad budget spent against that is being measured on faith. The first recommendation was structural: move the point of sale onto the website.",
        img: ["xe-hero"] },
      { title: "The Website Becomes the Storefront",
        body: "The Shopify store became the place the sale actually happens, with product pages, cart and checkout doing the work the inbox was doing, and every step of it measurable. That is what makes performance marketing possible: you cannot optimize what you cannot see.",
        img: ["xe-store","xe-detail"] },
      { title: "Rebuilding the Ad Account",
        body: "We took the account over from the previous agency and rebuilt it: campaign structure, audiences and creative testing run as an ongoing system rather than a set-and-forget launch. Spend follows what the numbers show, and what the numbers show is now tied to a real checkout.",
        img: ["xe-ads"] },
      { title: "Up to 8x ROAS at 8% Conversion",
        body: "The account reached up to 8x ROAS with the store converting at 8%, both numbers produced by the same change: a measurable funnel and a campaign structure built on top of it rather than beside it.",
        img: ["xe-conversion"] }
    ],
    stats: [
      { v: "Up to 8x", l: "ROAS" },
      { v: "8%",       l: "Conversion rate on Shopify" }
    ]
  },
  {
    slug: "firoz-pickles", client: "Firoz Pickles", url: "firozpickles.com", depth: "full",
    expertise: ["performance","seo"],
    category: "Conversion Rate Optimization · AOV · SEO",
    cardLine: "3x the sales on the same organic traffic",
    summary: "Conversion rate and average order value worked together on an existing Shopify store, giving 3x the sales without buying a single extra visitor.",
    challenge: "Firoz Pickles had a working Shopify store and steady organic traffic. The traffic was never the problem. What that traffic produced was: visitors arrived, browsed, and left at a rate that did not match the demand behind them. That is funnel friction, not a demand problem, and it does not get fixed by spending more on ads.",
    outcome: "Conversion rate lifted 2.4x and, with average order value raised alongside it, total sales came out 3x higher on the same organic traffic. No extra spend, no new audience: the same visitors, converting better and spending more per order.",
    blocks: [
      { title: "Traffic Was Never the Problem",
        body: "We started with a funnel and store CRO audit to find where visitors were actually dropping off, rather than guessing from top-line analytics. The audit is the whole engagement in miniature: find the leak before prescribing the fix.",
        img: ["fp-hero"] },
      { title: "Fixing the Two Stages That Cost the Most",
        body: "Work was prioritized on the landing page and the checkout, the two stages where small friction costs the most completed orders. Changes were structured as testable improvements, so a result could be attributed to a specific fix rather than to a general redesign.",
        img: ["fp-store","fp-detail"] },
      { title: "Raising Average Order Value",
        body: "Conversion rate alone only gets you part of the way. We worked on average order value in parallel, so that each converted visitor was worth more. That is the second multiplier that turns a conversion lift into a sales lift.",
        img: ["fp-aov"] },
      { title: "2.4x Conversion, 3x Sales",
        body: "Conversion rate came out 2.4x higher. With average order value lifted alongside it, total sales landed at 3x, on the same organic traffic the store already had. The two numbers measure different things and multiply together, which is why the sales figure is higher than the conversion figure.",
        img: ["fp-results"] }
    ],
    stats: [
      { v: "2.4x", l: "Conversion lift" },
      { v: "3x",   l: "Sales, same traffic" },
      { v: "0", l: "Extra ad spend" }
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
  },
{
    slug: "wolgan", client: "Wolgan", url: "wolgan.co", depth: "brief",
    expertise: ["business","seo"], countries: [["🇶🇦","Qatar"],["🇦🇪","UAE"]],
    category: "Business Website · SEO · Google Ads",
    cardLine: "Corporate site for a GCC water treatment and MEP engineering firm",
    summary: "A corporate site for a water treatment, chemical supply and MEP engineering company working across Qatar, the UAE and India, built to stand up in front of industrial and institutional buyers.",
    challenge: "Wolgan sells to procurement teams and consultants at hospitals, municipalities, industrial plants and oil & gas facilities. That audience judges a supplier partly on whether the company looks capable of running the project. The site had to carry that weight (service depth, sector coverage, delivered work) without collapsing into a brochure nobody reads.",
    approach: ["Structured the site around the three service lines (water treatment, chemical supplies and MEP installations) so a visitor lands on the one they came for.","Built out sector and client coverage so prospective clients can see the kind of work already delivered across the GCC.","Ran SEO as part of the build, and Google Ads alongside launch so the site had visibility and search clicks from day one instead of waiting for organic to mature."],
    outcome: "A professional site that matches the scale of the projects Wolgan delivers, with SEO in place and Google Ads carrying visibility while organic search builds."
  },
  {
    slug: "abclux", client: "ABC LUX", url: "abclux.qa", depth: "brief",
    expertise: ["business"], countries: [["🇶🇦","Qatar"]],
    category: "Business Website · Luxury",
    cardLine: "High-end showroom site with motion built to match the brand",
    summary: "A luxury lighting showroom site for a Qatar brand, built to feel as considered as the fixtures it sells.",
    challenge: "ABC LUX sells high-end lighting to an audience that treats the website as part of the product experience. A generic catalog layout does not just look cheap in that context. It actively undercuts the price point.",
    approach: ["Designed a high-end visual treatment matched to the brand's identity rather than a stock showroom template.","Built motion and interaction into the site so the experience feels crafted rather than static.","Structured the collections so fixtures are presented at the scale and quality the products deserve."],
    outcome: "A site whose look and motion match the brand's positioning: the showroom experience carried online rather than flattened into a product list."
  },
  {
    slug: "beyondspare", client: "BeyondSpare", url: "beyondspare.ae", depth: "brief",
    expertise: ["business"], countries: [["🇦🇪","UAE"]],
    category: "Business Website · Lead Generation",
    cardLine: "Showcase site pointed at one outcome: quote requests",
    summary: "A lead-focused showcase site for a UAE auto parts sourcing business, built to turn Google traffic into quote requests.",
    challenge: "BeyondSpare sources new, used and hard-to-find auto parts. The business runs on enquiries, so the site's job is narrow and specific: make a visitor confident enough to ask for a quote, on a part they may not be sure exists.",
    approach: ["Built the site around the quote request as the primary action, with the enquiry route visible throughout rather than buried on a contact page.","Structured the categories and the how-it-works explanation so a visitor understands the sourcing process before they ask.","Set the site up as a showcase that supports Google-driven lead generation."],
    outcome: "A showcase site pointed at one outcome, quote requests from Google traffic, instead of a general company brochure."
  },
  {
    slug: "ba51", client: "BA51 Eyewear", url: "ba51eyewear.com", depth: "brief",
    expertise: ["shopify"], countries: [["🇬🇧","United Kingdom"],["🇪🇺","Europe"]],
    category: "Shopify · Custom Lens Checkout",
    cardLine: "Handcrafted eyewear with lens customisation inside checkout",
    summary: "A Shopify store for handcrafted eyewear made by the founder, selling into the UK and Europe with lens customisation built into checkout.",
    challenge: "Eyewear is not a simple add-to-cart product. A customer choosing frames also has to choose lenses, and that decision has to happen inside checkout without turning into a form nobody finishes. Selling into the UK and Europe adds a second requirement: payment and shipping have to feel local, not imported.",
    approach: ["Built the store around the founder's handcrafted acetate frames, with the making of them part of the story rather than a footnote.","Implemented a customise-lens flow in checkout, so the lens choice happens inside the purchase instead of in an email afterwards.","Set up Shop Pay and integrated shipping carriers appropriate to UK and European delivery."],
    outcome: "A store where a customer configures lenses and checks out in one pass, with payment and delivery that behave the way UK and EU buyers expect."
  },
  {
    slug: "nichespectacles", client: "Niche Spectacles", url: "nichespectacles.com", depth: "brief",
    expertise: ["shopify","seo"], countries: [["🇬🇧","United Kingdom"]],
    category: "Shopify · SEO · UK Retail",
    cardLine: "Vintage designer and contemporary eyewear for the UK market",
    summary: "A UK eyewear store carrying vintage designer frames alongside its own contemporary lines, with Shop Pay checkout and UK carriers, plus ongoing SEO.",
    challenge: "Niche Spectacles carries vintage designer frames, Carrera and Dior among them, next to its own contemporary ranges. Two very different kinds of product in one catalog, each with a different buyer. UK customers also expect familiar payment, familiar couriers, and a free-shipping threshold that reads naturally in pounds.",
    approach: ["Structured the catalog so the vintage and contemporary ranges each get their own path instead of competing in one flat grid.","Implemented Shop Pay as the payment gateway for a faster, familiar checkout.","Integrated UK shipping carriers so delivery options and costs match what a UK customer expects.","Ongoing SEO across product and collection pages, technical fixes and content."],
    outcome: "A UK store where the vintage and contemporary ranges each have room to sell, with checkout and delivery native to the market and SEO running as an ongoing engagement."
  },
  {
    slug: "frenchcakes", client: "French Cakes", url: "frenchcakes.ae", depth: "brief",
    expertise: ["shopify"], countries: [["🇦🇪","UAE"]],
    category: "Shopify · UAE Market",
    cardLine: "Occasion-driven cakes and flowers, built around fast delivery",
    summary: "A Shopify store for a UAE cakes and flowers brand, built around speed of delivery for occasion-driven buying.",
    challenge: "French Cakes sells cakes and flower arrangements into the UAE, where the purchase is usually occasion-driven and often same-day. If the store does not make it obvious the order will arrive when it needs to, the customer goes somewhere that does.",
    approach: ["Built the store for the UAE market rather than adapting an India-first build, down to the catalog split across cakes and flower arrangements.","Structured the flow around speed of delivery, which is the deciding factor on an occasion purchase.","Set the store up for the local customer base and how they actually order."],
    outcome: "A UAE-market store built around fast delivery, where an occasion buyer can find what they need and order quickly."
  },
  {
    slug: "cocoroots", client: "Coco Roots Organic", url: "cocorootsorganic.com", depth: "brief",
    expertise: ["shopify","performance"],
    category: "Shopify · CRO · Meta Ads",
    cardLine: "Proof-led pages built for Meta traffic, bundles and upsells",
    summary: "A conversion-focused Shopify store for a hair care brand, with every page built around what cold Meta ads traffic needs to see before it buys.",
    challenge: "Coco Roots sells hair care, a category where claims are cheap and proof is everything. Traffic arriving from Meta ads has no prior relationship with the brand, so each page has to do the convincing in a single visit, and the average order has to be worth what that visitor cost to acquire.",
    approach: ["Optimized pages around proof: before/after sections, benefits laid out plainly, and UGC from real customers.","Built bundles, upsells and cross-sells into the buying flow so each converted visitor is worth more.","Structured the landing experience specifically for Meta ads traffic rather than generic browsing.","Made the about page a founder-led personal brand story, since that is what carries trust in this category."],
    outcome: "A store built for paid traffic and CRO together: proof-led pages, a founder story that earns trust, and bundles and upsells raising what each order is worth."
  },
  {
    slug: "turmaroot", client: "Turmaroot", url: "turmaroot.com", depth: "brief",
    expertise: ["shopify"],
    category: "Shopify · Ayurvedic Brand",
    cardLine: "Shop-by-ritual store for a heritage Ayurvedic brand",
    summary: "A Shopify store for an Ayurvedic personal care brand rooted in South Indian tradition, built around rituals and concerns rather than a product grid.",
    challenge: "Turmaroot positions itself as India's first non-cosmetic Ayurvedic ritual brand. That positioning falls apart on a conventional ecommerce layout. A customer buying into a tradition needs a store that behaves like one, not a shelf of SKUs with a heritage paragraph bolted onto the about page.",
    approach: ["Built the store around rituals and concerns, so a customer shops by what they are trying to address rather than by product type.","Carried the heritage identity through the whole store instead of confining it to the brand story.","Structured collections so the traditional roots of the range stay visible at the point of purchase."],
    outcome: "A store that sells the ritual rather than the bottle, with shop-by-concern paths and the brand's heritage carried through the buying experience."
  },
  {
    slug: "thebombcase", client: "The Bomb Cases", url: "thebombcase.com", depth: "brief",
    expertise: ["shopify","performance"],
    category: "Shopify · Conversion",
    cardLine: "Device-model routing built for conversion",
    summary: "A Shopify store for an Indian phone case brand, built so a customer finds their exact device model fast and converts.",
    challenge: "Phone cases live or die on model matching. A customer with a specific iPhone or Galaxy has exactly one question: do you have my model. Every bit of friction answering it costs the sale. Everything else on the page is secondary to that.",
    approach: ["Built device-model routing so iPhone and Galaxy owners reach their model quickly instead of scrolling a general catalog.","Laid the store out for conversion first, keeping the paths that matter short.","Set the store up for the Indian market, with all-India delivery made explicit up front."],
    outcome: "A conversion-first store where the device-model question gets answered immediately, built for the Indian market."
  }
];

WORKS.sort(function(a,b){
  var ia = WORKS_ORDER.indexOf(a.slug), ib = WORKS_ORDER.indexOf(b.slug);
  return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
});

/* Client testimonials: shown on the home page and on Our Story.
   Paste a real quote in and that placeholder card is replaced. */
var TESTIMONIALS = [
  { quote: "", name: "", role: "" },
  { quote: "", name: "", role: "" },
  { quote: "", name: "", role: "" }
];
function testimonialsHtml(){
  return TESTIMONIALS.map(function(t){
    if(!t.quote){
      return '<div class="tm-card empty">'
        + '<p class="tm-label">Client testimonial</p>'
        + '<p class="tm-note">Quote to be added.</p>'
        + '</div>';
    }
    return '<div class="tm-card">'
      + '<p class="tm-quote">&ldquo;'+t.quote+'&rdquo;</p>'
      + '<p class="tm-by"><b>'+t.name+'</b>'+(t.role ? '<span>'+t.role+'</span>' : '')+'</p>'
      + '</div>';
  }).join('');
}

/* Client reviews: paste the real quote, name and role in here.
   A work with an empty quote simply does not render a review block. */
var WORK_REVIEWS = {};
WORKS.forEach(function(w){ WORK_REVIEWS[w.slug] = { quote: "", name: "", role: "" }; });
/* Paste a real quote in here and the placeholder is replaced automatically:
   WORK_REVIEWS["colin-guest"] = { quote: "…", name: "…", role: "Founder, Colin Guest" }; */

/* Image slots. Real screenshots where we have them, labelled
   placeholders where they are still to come.                        */
function workImages(){
  var CI = CASE_IMAGES;
  return {
    "colin-guest": {
      cover:            "/assets/img-31.jpg",
      "colin-consult":  ph('Consultation', 'Workshop / notes photo', 1200, 800),
      "colin-landing":  "/assets/img-32.jpg",
      "colin-scroll":   "/assets/img-33.jpg",
      "colin-zoho-pos": ph('Zoho POS', 'Inventory and SKU sync', 1200, 800),
      "colin-zoho-books": ph('Zoho Books', 'Sales flowing into the books', 1200, 800),
      "colin-seo":      ph('SEO', 'Search setup at launch', 1200, 800)
    },
    "x-emirates": {
      cover:           CI['x-emirates'].cover,
      "xe-hero":       CI['x-emirates'].pattern,
      "xe-store":      CI['x-emirates'].pattern,
      "xe-detail":     CI['x-emirates'].detail,
      "xe-ads":        ph('Ad account', 'Campaign structure: screenshot to add', 1200, 800),
      "xe-conversion": ph('Conversion rate', 'Shopify analytics: screenshot to add', 1200, 800)
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
(function(){ var extra = {"wolgan":{"cover":"/assets/img-34.jpg","inline":"/assets/img-35.jpg"},"abclux":{"cover":"/assets/img-36.jpg","inline":"/assets/img-37.jpg"},"beyondspare":{"cover":"/assets/img-38.jpg","inline":"/assets/img-39.jpg"},"ba51":{"cover":"/assets/img-40.jpg","inline":"/assets/img-41.jpg"},"nichespectacles":{"cover":"/assets/img-42.jpg","inline":"/assets/img-43.jpg"},"frenchcakes":{"cover":"/assets/img-44.jpg","inline":"/assets/img-45.jpg"},"cocoroots":{"cover":"/assets/img-46.jpg","inline":"/assets/img-47.jpg"},"turmaroot":{"cover":"/assets/img-48.jpg","inline":"/assets/img-49.jpg"},"thebombcase":{"cover":"/assets/img-50.jpg","inline":"/assets/img-51.jpg"}};
  for(var k in extra){ WORK_IMAGES[k] = extra[k]; } })();
function workImg(slug, key){
  var set = WORK_IMAGES[slug] || {};
  return set[key] || ph(key, '', 1200, 800);
}
function countryBadges(w, cls){
  if(!w.countries || !w.countries.length) return '';
  return '<span class="'+(cls||'wx-flags')+'">' + w.countries.map(function(c){
    return '<span class="wx-flag"><i>'+c[0]+'</i>'+c[1]+'</span>';
  }).join('') + '</span>';
}
function findWork(slug){
  for(var i=0;i<WORKS.length;i++){ if(WORKS[i].slug === slug) return WORKS[i]; }
  return null;
}

var BLOG_POSTS = [
  { slug: "5-signs-your-shopify-store-needs-a-conversion-audit", title: "5 Signs Your Shopify Store Needs a Conversion Audit",
    excerpt: "Traffic isn't the problem for most stores we look at. The funnel is. Here's how to tell before you spend any more on ads.",
    category: "Conversion Rate Optimization", date: "2026-07-14", readTime: "5 min read",
    body: [
      "It's tempting to treat a sales plateau as a traffic problem. Run more ads, chase more reach, hope volume fixes it. But for most Shopify stores we look at, the leak isn't at the top of the funnel. It's somewhere between the landing page and the checkout confirmation. More traffic into a leaky funnel just means more wasted spend.",
      "## 1. Your add-to-cart rate is fine, but checkout completion isn't",
      "If people are adding products but abandoning at checkout, the problem usually isn't interest. It's friction. Extra form fields, a confusing shipping calculator, a payment method your customers don't trust, or a page that takes an extra two seconds to load on mobile. Each of those is a fixable, specific thing, not a vague \"conversion problem.\"",
      "## 2. Mobile and desktop convert at very different rates",
      "A large gap between mobile and desktop conversion is one of the clearest signals a CRO audit will pay for itself. Most Shopify traffic today is mobile-first, so if your desktop experience was the one that got all the design attention, that gap is costing you every day.",
      "## 3. You've never actually watched a session recording",
      "Analytics tells you where people dropped off. Session recordings tell you why. If you're making funnel decisions purely from aggregate metrics without ever watching how a real visitor actually moved through your store, you're optimizing blind.",
      "## 4. Your product pages are doing the store's only selling",
      "If your product pages are strong but your collection pages, search results, and cross-sell moments are an afterthought, you're relying on one part of the funnel to carry the entire store. A proper audit looks at the whole path, not just the page everyone already agrees is good.",
      "## 5. You've changed the theme more times than you've changed the funnel logic",
      "A new theme is a design decision. A CRO audit is a behavior decision: what's actually causing hesitation, and where. It's common for stores to redesign repeatedly while the actual points of drop-off never get diagnosed, let alone fixed.",
      "If two or more of these sound familiar, the fix usually isn't a redesign. It's a structured audit that tells you exactly where the funnel is losing people, backed by real session data rather than assumptions about what should be converting."
    ] },
  { slug: "why-most-whatsapp-marketing-automations-fail", title: "Why Most WhatsApp Marketing Automations Fail (And How to Fix Yours)",
    excerpt: "WhatsApp automation has the highest open rates of any channel most businesses use, and the lowest bar for actually doing it well.",
    category: "Marketing Automation", date: "2026-06-02", readTime: "4 min read",
    body: [
      "WhatsApp marketing automation gets adopted fast and abandoned almost as fast. The channel's open rates are genuinely excellent, often far higher than email, which is exactly why a badly built automation does more damage there than anywhere else. A customer who feels spammed on WhatsApp doesn't unsubscribe quietly; they block you.",
      "## The most common mistake: broadcasting instead of routing",
      "Most failed setups treat WhatsApp like a one-way broadcast channel: the same message, the same time, to everyone. A working automation routes people based on where they actually are: abandoned cart, post-purchase, re-engagement after 30 days of silence, and so on. Each of those needs different timing, different tone, and a different call to action.",
      "## The second mistake: no exit conditions",
      "If someone completes a purchase, they shouldn't keep receiving the abandoned-cart sequence. That sounds obvious, but it's the single most common bug we see in automations that were set up quickly and never revisited: flows that don't know when to stop.",
      "## What a working setup actually looks like",
      "- Segmented flows tied to real customer behavior, not just a broadcast list",
      "- Clear exit conditions so a completed action stops the sequence",
      "- A human handoff point for anything that isn't a simple, templated question",
      "- Catalog and product messages that are kept current, not set once and forgotten",
      "Done right, WhatsApp automation is one of the highest-leverage channels available to an ecommerce or B2B business today. Done carelessly, it's the fastest way to turn your best channel into your most-blocked one."
    ] },
  { slug: "shopify-vs-shopify-plus-when-its-actually-time-to-upgrade", title: "Shopify vs Shopify Plus: When It's Actually Time to Upgrade",
    excerpt: "Plus isn't about revenue size alone. It's about whether your operations have outgrown what standard Shopify can flex to.",
    category: "Shopify Ecommerce Development", date: "2026-05-19", readTime: "4 min read",
    body: [
      "The most common question we get from growing Shopify merchants isn't \"should I upgrade to Plus\". It's \"how do I know if I actually need to.\" Revenue thresholds get thrown around a lot, but revenue alone isn't the right signal. Operational complexity is.",
      "## Signs it's genuinely time",
      "- You're hitting checkout customization limits standard Shopify doesn't allow",
      "- You need multiple storefronts (regions, brands, or B2B vs. B2C) sharing one back end",
      "- Your automation needs (Shopify Flow, scripts, deeper API access) have outgrown app workarounds",
      "- Your team is managing complexity through a growing stack of third-party apps that a native Plus feature would replace outright",
      "## Signs it's premature",
      "If your current bottleneck is conversion rate, marketing execution, or product-market fit, Plus won't fix any of that. It's infrastructure for scale you've already proven, not a growth lever on its own. Upgrading early mostly means paying more for headroom you're not using yet.",
      "The honest version of this advice, from an agency's perspective: the upgrade conversation should start with an audit of your actual operational friction, not your monthly revenue number. Sometimes the right answer is a well-structured standard Shopify store with the right apps; sometimes it's Plus. It should never be decided by which one someone else is on."
    ] },
  { slug: "the-real-cost-of-a-cheap-meta-ads-agency", title: "The Real Cost of a \"Cheap\" Meta Ads Agency",
    excerpt: "The management fee is rarely where a discount agency actually costs you money.",
    category: "Performance Marketing", date: "2026-04-08", readTime: "5 min read",
    body: [
      "A low management fee is the easiest thing to compare between agencies, and the least useful one. The real cost of a low-effort Meta Ads setup shows up somewhere else entirely: in wasted ad spend, in creative that never gets properly tested, and in reporting that tells you what happened without ever explaining why.",
      "## Where the money actually leaks",
      "- Audiences left broad and static long after the data says they should be refined",
      "- Creative that runs unchanged for weeks because testing takes effort the retainer doesn't cover",
      "- Retargeting and lookalike audiences that were set up once and never revisited",
      "- Reporting that shows spend and revenue but never connects the two to a specific decision",
      "## What a properly run retainer looks for instead",
      "Ongoing performance marketing should behave like a system that improves itself over time: audience research that gets sharper, creative that gets tested and iterated rather than just run, and reporting tied to ROAS decisions your team can actually act on, not just a monthly PDF.",
      "The management fee difference between a discount setup and a properly run one is usually smaller than the difference in wasted ad spend over the same three months. It's worth evaluating an agency on the system they run, not the number on the invoice."
    ] },
  { slug: "seo-for-shopify-stores-technical-basics-most-agencies-skip", title: "SEO for Shopify Stores: The Technical Basics Most Agencies Skip",
    excerpt: "Shopify's platform quirks mean generic SEO advice often doesn't apply cleanly. Here's what actually matters.",
    category: "SEO", date: "2026-02-27", readTime: "6 min read",
    body: [
      "A lot of SEO advice is written for WordPress or a generic CMS and applied to Shopify without adjustment. Shopify has its own platform-specific quirks, some helpful and some genuinely limiting, and a technical SEO audit that doesn't account for them will miss the issues that actually matter.",
      "## Platform-specific issues worth checking first",
      "- Duplicate content from collection and filter URL parameters that Shopify generates automatically",
      "- Product variant URLs competing with each other instead of consolidating authority",
      "- App bloat slowing down page speed, which affects both rankings and conversion",
      "- Thin or templated category descriptions that don't differentiate one collection page from another",
      "## What actually moves the needle",
      "Technical fixes matter, but they set the floor, not the ceiling. Real organic growth for a Shopify store still comes down to a keyword and content strategy tied to how customers actually search, which is often less \"buy [product]\" and more specific, comparison-driven, and problem-first than store owners expect.",
      "The stores that treat SEO as an ongoing system, with audits, content, and technical maintenance running together, are the ones where organic search eventually becomes a real acquisition channel instead of a line item that never quite pays off."
    ] }
];

var NAV = [
  { href: "#/services", label: "Services", key: "services" },
  { href: "#/works", label: "Works" },
  { href: "#/our-story", label: "Our Story" },
  { href: "#/blog", label: "Blog" }
];

/* ── Nav dropdowns ────────────────────────────────────────────── */
function navDropdownTop(key){
  if(key === 'services') return [{ href: "#/services", label: "All Services" }];
  if(key === 'contact') return [{ href: "#/contact", label: "General Inquiry" }];
  return [];
}
function navDropdownItems(key){
  if(key === 'services') return SERVICES.map(function(s){ return { href: "#/services/"+s.slug, label: s.name }; });
  if(key === 'contact') return SERVICES.map(function(s){ return { href: "#/contact/"+s.slug, label: s.name }; });
  return [];
}
function renderDropdown(key, alignRight){
  var top = navDropdownTop(key).map(function(it){ return '<a href="'+it.href+'" class="dd-all">'+it.label+'</a>'; }).join('');
  var items = navDropdownItems(key).map(function(it){ return '<a href="'+it.href+'">'+it.label+'</a>'; }).join('');
  return '<div class="nav-dropdown'+(alignRight?' align-right':'')+'">' + top + '<div class="nav-dropdown-divider"></div>' + items + '</div>';
}
function renderMobileSub(key, label, ctaStyle){
  var top = navDropdownTop(key);
  var items = navDropdownItems(key);
  var linksHtml = top.concat(items).map(function(it){ return '<a href="'+it.href+'">'+it.label+'</a>'; }).join('');
  return '<details class="mobile-sub'+(ctaStyle?' mobile-sub-cta':'')+'">'
    + '<summary'+(ctaStyle?' class="nav-cta"':'')+'>'+label+'</summary>'
    + '<div class="mobile-sub-list">'+linksHtml+'</div>'
    + '</details>';
}

function eyebrow(text){ return '<span class="eyebrow">'+text+'</span>'; }
function sectionTitle(text, cls){ return '<h2 class="title balance'+(cls?(' '+cls):'')+'">'+text+'<span class="dot">.</span></h2>'; }
function gridLines(onTeal){ var spans=''; for(var i=0;i<8;i++){spans+='<span></span>';} return '<div class="grid-lines'+(onTeal?' on-teal':'')+'">'+spans+'</div>'; }
function statRow(stats){
  return '<div class="stat-row">' + stats.map(function(s){
    return '<div><p class="stat-val">'+s.value+'</p><p class="stat-label">'+s.label+'</p></div>';
  }).join('') + '</div>';
}
function ctaSection(opts){
  opts = opts || {};
  var title = opts.title || "Let's Build Your Next System.";
  var body = opts.body || "Reach out to talk through your funnel, your store, or your next system.";
  var href = opts.href || '#/contact';
  var cta = opts.cta || 'Start a conversation';
  var titleClean = title.replace(/\.$/, '');
  return ''
  + '<section class="cta-band">'
  +   gridLines(true)
  +   '<div class="wrap" style="position:relative">'
  +     eyebrow('Get in touch')
  +     '<h2>'+titleClean+'<span style="color:var(--teal2)">.</span></h2>'
  +     '<p>'+body+'</p>'
  +     '<a href="'+href+'" class="btn btn-dark">'+cta+' <span aria-hidden="true">↗</span></a>'
  +   '</div>'
  + '</section>';
}
/* ── Platform logos ───────────────────────────────────────────
   "light": icon-only colour marks for the home Core Expertise plates
            (Shopify bag, Meta infinity, Google "G", supplied by Zyvex).
   "dark":  full colour logos (wordmark/lockup) used inline elsewhere,
            e.g. the How We Work diagram and Platforms We Work In.
            (Name kept from the old dark theme; the site is light now.)
   h / pad          = height and clear space for "light", in MARK_UNITs
   darkH / darkPad  = the same for "dark"                              */
var MARK_UNIT = 20;
var PARTNER_LOGOS = {
  shopify: { light: "/assets/img-52.svg", dark: "/assets/img-53.svg", h: 1.6, pad: 0.7, darkH: 1, darkPad: 1, alt: "Shopify" },
  meta:    { light: "/assets/img-54.png", dark: "/assets/img-55.svg", h: 1.2, pad: 0.9, darkH: 1.05, darkPad: 1, alt: "Meta" },
  google:  { light: "/assets/img-56.png", dark: "/assets/img-57.svg", h: 1.5, pad: 0.75, darkH: 1.15, darkPad: 1, alt: "Google" }
};

function brandMark(key, onLight, unit){
  var cfg = PARTNER_LOGOS[key];
  if(!cfg) return '';
  var src = onLight ? cfg.light : cfg.dark;
  if(!src) return '';
  var u = unit || MARK_UNIT;
  var h = (!onLight && cfg.darkH != null) ? cfg.darkH : cfg.h;
  var pad = (!onLight && cfg.darkPad != null) ? cfg.darkPad : cfg.pad;
  return '<img src="'+src+'" alt="'+cfg.alt+' logo" style="height:'+(u*h)+'px;width:auto;display:block;'
       + (pad ? 'margin:'+(u*pad)+'px;' : '')+'" />';
}

function iconBox(iconName, sizeClass, px){
  return '<div class="icon-box'+(sizeClass?(' '+sizeClass):'')+'">'+svgIcon(iconName, px||18)+'</div>';
}
function coreServiceCard(icon, title, tag, desc){
  return ''
  + '<div class="card core-card">'
  +   (brandMark(icon, true) ? '<div class="core-plate">'+brandMark(icon, true)+'</div>' : '<div class="core-badge">'+svgIcon(icon, 28)+'</div>')
  +   '<p class="core-tag">'+tag+'</p>'
  +   '<h3 class="serif" style="margin-top:8px;font-size:24px">'+title+'</h3>'
  +   '<p class="muted" style="margin-top:12px;font-size:14px;line-height:1.6">'+desc+'</p>'
  + '</div>';
}
function formatDate(iso){
  var d = new Date(iso+'T00:00:00');
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return months[d.getMonth()]+' '+d.getDate()+', '+d.getFullYear();
}
function detext(s){
  var d = document.createElement('div');
  d.innerHTML = s;
  return d.textContent || d.innerText || '';
}
function renderHeader(activeHref){
  var navLinks = NAV.map(function(item){
    var active = activeHref === item.href;
    if(item.key){
      return '<div class="nav-item">'
        + '<a href="'+item.href+'" class="nav-link'+(active?' active':'')+'">'+item.label+'<span class="nav-caret" aria-hidden="true"></span></a>'
        + renderDropdown(item.key)
        + '</div>';
    }
    return '<a href="'+item.href+'" class="nav-link'+(active?' active':'')+'">'+item.label+'</a>';
  }).join('');
  var mobileLinks = NAV.map(function(item){
    if(item.key){
      return '<li>'+renderMobileSub(item.key, item.label)+'</li>';
    }
    return '<li><a href="'+item.href+'">'+item.label+'</a></li>';
  }).join('');
  var contactActive = activeHref === '#/contact';
  return ''
  + '<header class="site-header">'
  +   '<div class="header-row">'
  +     '<a href="#/" class="brand">'
  +       '<img src="'+LOGO_DATA_URI+'" alt="" class="brand-mark" />'
  +       '<span class="brand-name serif">'+COMPANY.name+'</span>'
  +     '</a>'
  +     '<nav class="desktop-nav">'
  +       navLinks
  +       '<div class="nav-item">'
  +         '<a href="#/contact" class="nav-cta'+(contactActive?' active':'')+'">Contact<span class="nav-caret" aria-hidden="true"></span></a>'
  +         renderDropdown('contact', true)
  +       '</div>'
  +     '</nav>'
  +     '<button type="button" class="menu-toggle" aria-label="Open menu" aria-expanded="false">'
  +       '<span></span><span></span>'
  +     '</button>'
  +   '</div>'
  +   '<nav class="mobile-nav"><ul>'
  +     mobileLinks
  +     '<li style="padding-top:8px">'+renderMobileSub('contact', 'Contact', true)+'</li>'
  +   '</ul></nav>'
  + '</header>';
}

function renderFooter(){
  var serviceLinks = SERVICES.slice(0,6).map(function(s){
    return '<li><a href="#/services/'+s.slug+'">'+s.name+'</a></li>';
  }).join('');
  return ''
  + '<footer class="site-footer">'
  +   '<div class="wrap">'
  +     '<div class="footer-grid">'
  +       '<div>'
  +         '<a href="#/" class="brand">'
  +           '<img src="'+LOGO_DATA_URI+'" alt="" class="brand-mark" />'
  +           '<span class="brand-name serif">'+COMPANY.name+'</span>'
  +         '</a>'
  +         '<p class="tag-line">'+COMPANY.tagline+'</p>'
  +       '</div>'
  +       '<div class="footer-col">'
  +         '<p class="footer-col-title">Services</p>'
  +         '<ul>'+serviceLinks+'</ul>'
  +       '</div>'
  +       '<div class="footer-col">'
  +         '<p class="footer-col-title">Company</p>'
  +         '<ul>'
  +           '<li><a href="#/our-story">Our Story</a></li>'
  +           '<li><a href="#/works">Works</a></li>'
  +           '<li><a href="#/blog">Blog</a></li>'
  +           '<li><a href="#/contact">Contact</a></li>'
  +         '</ul>'
  +       '</div>'
  +       '<div class="footer-col">'
  +         '<p class="footer-col-title">Get in touch</p>'
  +         '<ul>'
  +           '<li><a href="mailto:'+COMPANY.email+'">'+COMPANY.email+'</a></li>'
  +           '<li><a href="tel:'+COMPANY.phone.replace(/\s+/g,'')+'">'+COMPANY.phone+'</a></li>'
  +           '<li class="muted">'+COMPANY.city+'</li>'
  +           '<li class="muted">'+COMPANY.markets+'</li>'
  +         '</ul>'
  +       '</div>'
  +     '</div>'
  +     '<div class="footer-bottom">'
  +       '<p>© '+new Date().getFullYear()+' '+COMPANY.legalName+'. All rights reserved.</p>'
  +       '<p>'+COMPANY.website+'</p>'
  +     '</div>'
  +   '</div>'
  + '</footer>';
}

/* ── Home ─────────────────────────────────────────────────────── */
/* <lp-home> Generated by build/import_landing_works.py from the landing site's
   home page. Do not hand-edit: change the landing site and re-run the import. */
var LP_HOME = {
"clients": "<div class=\"lp-sec lp-clients\"><section class=\"section clients-sec\" style=\"padding:56px 0\">\n<div class=\"wrap center\">\n<span class=\"kicker\">Clients Worldwide</span>\n<h2 class=\"h2 balance\" style=\"margin-top:14px;font-size:clamp(26px,3.2vw,36px)\">Trusted by brands across the world<span class=\"dot\">.</span></h2>\n<p class=\"lede balance\" style=\"max-width:560px;margin-left:auto;margin-right:auto;font-size:15.5px\">We build and grow businesses across the world, with clients across <span class=\"cflag\"><img src=\"/lp/flags/gb.svg\" alt=\"\" width=\"18\" height=\"12\">the UK</span>, <span class=\"cflag\"><img src=\"/lp/flags/ae.svg\" alt=\"\" width=\"18\" height=\"12\">the UAE</span>, <span class=\"cflag\"><img src=\"/lp/flags/qa.svg\" alt=\"\" width=\"18\" height=\"12\">Qatar</span>, <span class=\"cflag\"><img src=\"/lp/flags/sa.svg\" alt=\"\" width=\"18\" height=\"12\">Saudi Arabia</span>, <span class=\"cflag\"><img src=\"/lp/flags/us.svg\" alt=\"\" width=\"18\" height=\"12\">the US</span> and <span class=\"cflag\"><img src=\"/lp/flags/in.svg\" alt=\"\" width=\"18\" height=\"12\">India</span>.</p>\n</div>\n<div class=\"client-marquee\" aria-label=\"Brands we have worked with\"><div class=\"client-row\"><div class=\"logo-track\"><div class=\"logo-set\"><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/gearup.png\" alt=\"GearUp\" width=\"151\" height=\"34\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/ba51.png\" alt=\"BA 51\" width=\"80\" height=\"40\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/abc-lux-ar.png\" alt=\"ABC LUX\" width=\"69\" height=\"59\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/niche-spectacles.png\" alt=\"Niche Spectacles\" width=\"72\" height=\"59\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/x-emirates.png\" alt=\"X Emirates Online\" width=\"151\" height=\"43\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/chandanveda.png\" alt=\"Chandanveda\" width=\"159\" height=\"40\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/colin-guest.png\" alt=\"Colin Guest\" width=\"207\" height=\"23\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/city-optik.png\" alt=\"City Optik\" width=\"127\" height=\"51\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/coco-roots.png\" alt=\"Coco Roots Organic\" width=\"97\" height=\"59\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/feza-dates.png\" alt=\"Feza Dates\" width=\"47\" height=\"59\" loading=\"lazy\"></span></span></div><div class=\"logo-set\" aria-hidden=\"true\"><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/gearup.png\" alt=\"\" width=\"151\" height=\"34\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/ba51.png\" alt=\"\" width=\"80\" height=\"40\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/abc-lux-ar.png\" alt=\"\" width=\"69\" height=\"59\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/niche-spectacles.png\" alt=\"\" width=\"72\" height=\"59\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/x-emirates.png\" alt=\"\" width=\"151\" height=\"43\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/chandanveda.png\" alt=\"\" width=\"159\" height=\"40\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/colin-guest.png\" alt=\"\" width=\"207\" height=\"23\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/city-optik.png\" alt=\"\" width=\"127\" height=\"51\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/coco-roots.png\" alt=\"\" width=\"97\" height=\"59\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/feza-dates.png\" alt=\"\" width=\"47\" height=\"59\" loading=\"lazy\"></span></span></div></div></div><div class=\"client-row\"><div class=\"logo-track rev\"><div class=\"logo-set\"><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/wolgan.png\" alt=\"Wolgan\" width=\"128\" height=\"35\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/beyondspare.png\" alt=\"BeyondSpare\" width=\"180\" height=\"35\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/ventberg.png\" alt=\"Ventberg Building Materials\" width=\"54\" height=\"59\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/french-cakes.png\" alt=\"French Cakes\" width=\"59\" height=\"59\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/dehlsen-energy.png\" alt=\"Dehlsen Energy\" width=\"128\" height=\"34\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/firoz-pickles.png\" alt=\"Firoz Pickles\" width=\"76\" height=\"59\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/heavenly-cakes.png\" alt=\"Heavenly Cakes\" width=\"92\" height=\"59\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/bluu.png\" alt=\"bluu\" width=\"107\" height=\"38\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/la-via-deux.png\" alt=\"La Via Deux\" width=\"120\" height=\"53\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/the-bomb-case.png\" alt=\"The Bomb Case\" width=\"57\" height=\"59\" loading=\"lazy\"></span></span></div><div class=\"logo-set\" aria-hidden=\"true\"><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/wolgan.png\" alt=\"\" width=\"128\" height=\"35\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/beyondspare.png\" alt=\"\" width=\"180\" height=\"35\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/ventberg.png\" alt=\"\" width=\"54\" height=\"59\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/french-cakes.png\" alt=\"\" width=\"59\" height=\"59\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/dehlsen-energy.png\" alt=\"\" width=\"128\" height=\"34\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/firoz-pickles.png\" alt=\"\" width=\"76\" height=\"59\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/heavenly-cakes.png\" alt=\"\" width=\"92\" height=\"59\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/bluu.png\" alt=\"\" width=\"107\" height=\"38\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/la-via-deux.png\" alt=\"\" width=\"120\" height=\"53\" loading=\"lazy\"></span></span><span class=\"client\"><span class=\"client-logo\"><img src=\"/lp/clients/the-bomb-case.png\" alt=\"\" width=\"57\" height=\"59\" loading=\"lazy\"></span></span></div></div></div></div>\n</section></div>",
"results": "<div class=\"lp-sec lp-results\"><section class=\"section section-b\" id=\"work\">\n<div class=\"wrap\">\n<div class=\"center\">\n<span class=\"kicker\">Proven Growth</span>\n<h2 class=\"h2 balance\" style=\"margin-top:18px\">Real results, real brands<span class=\"dot\">.</span></h2>\n<p class=\"lede balance\" style=\"max-width:600px;margin-left:auto;margin-right:auto\">\nEvery number below came off a live account. Where a project is not measured in a\nmultiple, we say what it actually delivered instead of inventing one.\n</p>\n</div>\n<div class=\"cases\">\n<div class=\"case\">\n<a class=\"case-media\" href=\"/works/x-emirates\" aria-label=\"X Emirates Online case study\"><img src=\"/lp/work/xemirates-online-banner.jpg\" alt=\"X Emirates Online project preview\" width=\"1200\" height=\"630\" loading=\"lazy\" decoding=\"async\"></a>\n<div class=\"case-head\">\n<h3 class=\"case-name\">X Emirates Online</h3>\n<span class=\"case-flag\">Performance Marketing &#183; Shopify</span>\n</div>\n<p class=\"case-body\">\nA skincare brand taking orders over WhatsApp, moved onto a Shopify funnel with the\nad account rebuilt. Sales grew <b>nearly 13x in the first month</b> on Shopify, with\n<b>8.32x ROAS</b> in July and a <b>9% conversion rate</b>.\n</p>\n<div class=\"metrics\">\n<div class=\"metric\"><p class=\"metric-v\">13x</p><p class=\"metric-l\">Sales, month one</p></div>\n<div class=\"metric\"><p class=\"metric-v\">8.32x</p><p class=\"metric-l\">ROAS</p></div>\n<div class=\"metric\"><p class=\"metric-v\">9%</p><p class=\"metric-l\">Conv. rate</p></div>\n</div>\n<div class=\"case-actions\"><a class=\"case-btn\" href=\"/works/x-emirates\">View full case study &#8599;</a></div>\n</div>\n<div class=\"case\">\n<a class=\"case-media\" href=\"/works/firoz-pickles\" aria-label=\"Firoz Pickles case study\"><img src=\"/lp/work/img-18.jpg\" alt=\"Firoz Pickles project preview\" width=\"1200\" height=\"630\" loading=\"lazy\" decoding=\"async\"></a>\n<div class=\"case-head\">\n<h3 class=\"case-name\">Firoz Pickles</h3>\n<span class=\"case-flag\">CRO &#183; AOV &#183; SEO</span>\n</div>\n<p class=\"case-body\">\nConversion rate and average order value worked in parallel on an existing store.\nConversion lifted <b>2.4x</b> and total sales landed at <b>3x</b> on the same\norganic traffic. No extra spend, no new audience.\n</p>\n<div class=\"metrics\">\n<div class=\"metric\"><p class=\"metric-v\">2.4x</p><p class=\"metric-l\">Conversion</p></div>\n<div class=\"metric\"><p class=\"metric-v\">3x</p><p class=\"metric-l\">Sales</p></div>\n<div class=\"metric\"><p class=\"metric-v\">0</p><p class=\"metric-l\">Extra spend</p></div>\n</div>\n<div class=\"case-actions\"><a class=\"case-btn\" href=\"/works/firoz-pickles\">View full case study &#8599;</a></div>\n</div>\n</div>\n<p class=\"center\" style=\"margin-top:40px\">\n<a href=\"/works\" class=\"btn\">See all case studies &#8599;</a>\n</p>\n</div>\n</section></div>",
"tools": "<div class=\"lp-sec lp-tools\"><section class=\"section tools-sec\">\n<div class=\"wrap center\">\n<span class=\"kicker\">Connected Tools</span>\n<h2 class=\"h2 balance\" style=\"margin-top:18px\">One store, one system<span class=\"dot\">.</span></h2>\n<p class=\"lede balance\" style=\"max-width:600px;margin-left:auto;margin-right:auto\">We advise on the tools your Shopify store actually needs, from inventory and accounting to delivery and marketing, then wire them together so everything runs as one system.</p>\n</div>\n<div class=\"logo-marquee\" aria-label=\"Tools we work with\"><div class=\"logo-track\"><div class=\"logo-set\"><img src=\"/lp/tools/google-analytics.png\" alt=\"Google Analytics\" width=\"173\" height=\"64\" style=\"height:30px\" loading=\"lazy\"><img src=\"/lp/tools/ms-clarity.png\" alt=\"Microsoft Clarity\" width=\"197\" height=\"64\" style=\"height:30px\" loading=\"lazy\"><img src=\"/lp/tools/zoho.png\" alt=\"Zoho\" width=\"149\" height=\"64\" style=\"height:30px\" loading=\"lazy\"><img src=\"/lp/tools/zoho-books.png\" alt=\"Zoho Books\" width=\"178\" height=\"64\" style=\"height:28px\" loading=\"lazy\"><img src=\"/lp/tools/zoho-pos.png\" alt=\"Zoho POS\" width=\"145\" height=\"64\" style=\"height:28px\" loading=\"lazy\"><img src=\"/lp/tools/whatsapp.png\" alt=\"WhatsApp\" width=\"64\" height=\"64\" style=\"height:30px\" loading=\"lazy\"><img src=\"/lp/tools/klaviyo.png\" alt=\"Klaviyo\" width=\"216\" height=\"64\" style=\"height:22px\" loading=\"lazy\"><img src=\"/lp/tools/shiprocket.png\" alt=\"Shiprocket\" width=\"83\" height=\"64\" style=\"height:36px\" loading=\"lazy\"><img src=\"/lp/tools/delhivery.png\" alt=\"Delhivery\" width=\"404\" height=\"64\" style=\"height:17px\" loading=\"lazy\"><img src=\"/lp/tools/gokwik.png\" alt=\"GoKwik\" width=\"234\" height=\"64\" style=\"height:26px\" loading=\"lazy\"></div><div class=\"logo-set\" aria-hidden=\"true\"><img src=\"/lp/tools/google-analytics.png\" alt=\"\" width=\"173\" height=\"64\" style=\"height:30px\" loading=\"lazy\"><img src=\"/lp/tools/ms-clarity.png\" alt=\"\" width=\"197\" height=\"64\" style=\"height:30px\" loading=\"lazy\"><img src=\"/lp/tools/zoho.png\" alt=\"\" width=\"149\" height=\"64\" style=\"height:30px\" loading=\"lazy\"><img src=\"/lp/tools/zoho-books.png\" alt=\"\" width=\"178\" height=\"64\" style=\"height:28px\" loading=\"lazy\"><img src=\"/lp/tools/zoho-pos.png\" alt=\"\" width=\"145\" height=\"64\" style=\"height:28px\" loading=\"lazy\"><img src=\"/lp/tools/whatsapp.png\" alt=\"\" width=\"64\" height=\"64\" style=\"height:30px\" loading=\"lazy\"><img src=\"/lp/tools/klaviyo.png\" alt=\"\" width=\"216\" height=\"64\" style=\"height:22px\" loading=\"lazy\"><img src=\"/lp/tools/shiprocket.png\" alt=\"\" width=\"83\" height=\"64\" style=\"height:36px\" loading=\"lazy\"><img src=\"/lp/tools/delhivery.png\" alt=\"\" width=\"404\" height=\"64\" style=\"height:17px\" loading=\"lazy\"><img src=\"/lp/tools/gokwik.png\" alt=\"\" width=\"234\" height=\"64\" style=\"height:26px\" loading=\"lazy\"></div></div></div>\n</section></div>",
"reporting": "<div class=\"lp-sec lp-reporting\"><section class=\"section\" id=\"reporting\" style=\"scroll-margin-top:72px\">\n<div class=\"wrap\">\n<div class=\"center\">\n<span class=\"kicker\">Reporting</span>\n<h2 class=\"h2 balance\" style=\"margin-top:18px\">Your numbers, explained every month<span class=\"dot\">.</span></h2>\n<p class=\"lede balance\" style=\"max-width:600px;margin-left:auto;margin-right:auto\">\nYou will always know where your money went and what it brought back. Every number checked,\nevery report walked through with you on a call.\n</p>\n</div>\n<div class=\"diff diff-2\">\n<div class=\"diff-card\"><span class=\"diff-ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"10.5\" cy=\"10.5\" r=\"6\"/><path d=\"m15 15 5 5\"/><path d=\"M8 10.5h5M10.5 8v5\"/></svg></span><h3>A detailed audit at onboarding</h3><p>Before we spend anything, we audit your ads, store, tracking and funnel, and hand you a written report of what is working, what is broken and what we will fix first.</p></div>\n<div class=\"diff-card\"><span class=\"diff-ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 20V10M10 20V4M16 20v-7M21 20H3\"/></svg></span><h3>A full performance report every month</h3><p>Spend, revenue, ROAS, CAC, conversion rate and repeat purchases, channel by channel, with what changed and why.</p></div>\n<div class=\"diff-card\"><span class=\"diff-ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 3 4.5 6v5.5c0 4.4 3.1 8.2 7.5 9.5 4.4-1.3 7.5-5.1 7.5-9.5V6z\"/><path d=\"m9 12 2.2 2.2L15.5 10\"/></svg></span><h3>Numbers you can trust</h3><p>Figures are checked against Shopify, your ad accounts and analytics, not taken from one dashboard. If tracking is off, we fix it before we report on it.</p></div>\n<div class=\"diff-card\"><span class=\"diff-ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2\"/></svg></span><h3>Explained to you on a call</h3><p>We walk you through every report, line by line, so you understand the numbers and what we are doing next. No PDF dropped in your inbox and left there.</p></div>\n</div>\n<div class=\"floor\">\n<p><b>Profit or loss, you hear it straight.</b>\nA good month gets the same detail as a bad one. If a campaign is losing money, we show you\nthe numbers, tell you why, and tell you what we are changing. You will never have to chase\nus for the truth.</p>\n</div>\n</div>\n</section></div>",
"founder": "<div class=\"lp-sec lp-founder\"><section class=\"section\" id=\"founder\" style=\"scroll-margin-top:72px\">\n<div class=\"wrap\">\n<div class=\"center\">\n<span class=\"kicker\">Our Founder</span>\n</div>\n<div class=\"founder\">\n<div class=\"founder-video\">\n<video id=\"founder-video\" playsinline controls preload=\"none\"></video>\n<div class=\"video-empty\" id=\"video-empty\"><img src=\"/lp/founder-syed-fidel-shaan.jpg\" alt=\"Syed Fidel Shaan, founder of Zyvex Tech\" width=\"960\" height=\"1200\" loading=\"lazy\"></div>\n</div>\n<div>\n<p class=\"founder-quote balance\">\nAudit first. Report plainly. Keep it performing<span class=\"dot\">.</span>\n</p>\n<p class=\"card-body\" style=\"max-width:52ch\">\nEvery engagement starts with an audit of your ads, store and tracking. Then clear monthly\nreporting, campaigns run for performance, and retention flows that turn first orders into repeat ones.\n</p>\n<p class=\"founder-by\">Syed Fidel Shaan &#183; Founder &amp; CEO</p>\n</div>\n</div>\n</div>\n</section></div>",
"team": "<div class=\"lp-sec lp-team\"><section class=\"section\" id=\"team\" style=\"scroll-margin-top:72px\">\n<div class=\"wrap\">\n<div class=\"center\">\n<span class=\"kicker\">Our Team</span>\n<h2 class=\"h2 balance\" style=\"margin-top:18px\">The team behind the systems<span class=\"dot\">.</span></h2>\n<p class=\"lede balance\" style=\"max-width:560px;margin-left:auto;margin-right:auto\">\nThe people who build, run and report on your store. No junior bench, no hand-offs.\n</p>\n</div>\n<div class=\"team\">\n<div class=\"team-card\">\n<div class=\"team-img\"><img src=\"/lp/team/zayd-abdulla.jpg\" alt=\"Zayd Abdulla, Conversion Tracking &amp; Shopify Expert\" width=\"720\" height=\"900\" loading=\"lazy\" decoding=\"async\"></div>\n<div class=\"team-body\"><h3 class=\"team-name\">Zayd Abdulla</h3><p class=\"team-role\">Conversion Tracking &amp; Shopify Expert</p></div>\n</div>\n<div class=\"team-card\">\n<div class=\"team-img\"><img src=\"/lp/team/falah-ahmed.jpg\" alt=\"Falah Ahmed, Shopify Expert / Performance Marketing Expert\" width=\"720\" height=\"900\" loading=\"lazy\" decoding=\"async\"></div>\n<div class=\"team-body\"><h3 class=\"team-name\">Falah Ahmed</h3><p class=\"team-role\">Shopify Expert / Performance Marketing Expert</p></div>\n</div>\n<div class=\"team-card\">\n<div class=\"team-img\"><img src=\"/lp/team/abin-tomy.jpg\" alt=\"Abin Tomy, Full Stack Developer\" width=\"720\" height=\"900\" loading=\"lazy\" decoding=\"async\"></div>\n<div class=\"team-body\"><h3 class=\"team-name\">Abin Tomy</h3><p class=\"team-role\">Full Stack Developer</p></div>\n</div>\n<div class=\"team-card\">\n<div class=\"team-img\"><img src=\"/lp/team/abdul-fathah.jpg\" alt=\"Abdul Fathah, Project Co-ordinator / CRM\" width=\"720\" height=\"900\" loading=\"lazy\" decoding=\"async\"></div>\n<div class=\"team-body\"><h3 class=\"team-name\">Abdul Fathah</h3><p class=\"team-role\">Project Co-ordinator / CRM</p></div>\n</div>\n<div class=\"team-card\">\n<div class=\"team-img\"><img src=\"/lp/team/rishan-ahammed.jpg\" alt=\"Rishan Ahammed, UI/UX Designer / Content Creator\" width=\"720\" height=\"900\" loading=\"lazy\" decoding=\"async\"></div>\n<div class=\"team-body\"><h3 class=\"team-name\">Rishan Ahammed</h3><p class=\"team-role\">UI/UX Designer / Content Creator</p></div>\n</div>\n</div>\n</div>\n</section></div>",
"why": "<div class=\"lp-sec lp-why\"><section class=\"section section-b\">\n<div class=\"wrap\">\n<div class=\"center\">\n<span class=\"kicker\">Why Brands Choose Us</span>\n<h2 class=\"h2 balance\" style=\"margin-top:18px\">What is different here<span class=\"dot\">.</span></h2>\n</div>\n<div class=\"diff\">\n<div class=\"diff-card\"><span class=\"diff-ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"9\" cy=\"8\" r=\"3.2\"/><path d=\"M3 19.5c.6-3.3 3-5.2 6-5.2s5.4 1.9 6 5.2\"/><circle cx=\"17\" cy=\"9\" r=\"2.4\"/><path d=\"M15.8 14.4c2.4.2 4.3 1.8 4.9 4.6\"/></svg></span><h3>One team, not four vendors</h3><p>Ads, SEO, retention and your store, run by one team.</p></div>\n<div class=\"diff-card\"><span class=\"diff-ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 18h6M10 21h4\"/><path d=\"M12 3a6 6 0 0 0-3.6 10.8c.6.5.9 1.1.9 1.8V16h5.4v-.4c0-.7.3-1.3.9-1.8A6 6 0 0 0 12 3z\"/></svg></span><h3>Honest advice first</h3><p>If a better product page beats a retainer, we&rsquo;ll say so.</p></div>\n<div class=\"diff-card\"><span class=\"diff-ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"4.5\" y=\"10.5\" width=\"15\" height=\"10\" rx=\"2\"/><path d=\"M8 10.5V7.5a4 4 0 0 1 8 0v3\"/><circle cx=\"12\" cy=\"15.5\" r=\"1.4\"/></svg></span><h3>Everything stays yours</h3><p>Ad accounts, store and customer data, all on your logins.</p></div>\n<div class=\"diff-card\"><span class=\"diff-ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 8h14l-1.2 12.2a1 1 0 0 1-1 .8H7.2a1 1 0 0 1-1-.8z\"/><path d=\"M9 8V6.5a3 3 0 0 1 6 0V8\"/><path d=\"m9.5 14 1.8 1.8 3.4-3.6\"/></svg></span><h3>Official Shopify Partner</h3><p>We build the store too, so fixes ship without waiting.</p></div>\n<div class=\"diff-card\"><span class=\"diff-ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3.5\" y=\"5\" width=\"17\" height=\"15.5\" rx=\"2\"/><path d=\"M3.5 9.5h17M8 3v4M16 3v4\"/><path d=\"M9 15h6M13 13l2 2-2 2\"/></svg></span><h3>Month to month</h3><p>No lock-in. Stay because it works, not because of a contract.</p></div>\n<div class=\"diff-card\"><span class=\"diff-ic\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"8.5\"/><path d=\"M3.5 12h17M12 3.5c2.3 2.4 3.4 5.2 3.4 8.5S14.3 18.1 12 20.5M12 3.5C9.7 5.9 8.6 8.7 8.6 12s1.1 6.1 3.4 8.5\"/></svg></span><h3>Clients worldwide</h3><p>Brands across the UK, the Gulf, the US and India.</p></div>\n</div>\n</div>\n</section></div>",
"reels": "<div class=\"lp-sec lp-reels\"><section class=\"section\" id=\"reels\" style=\"scroll-margin-top:72px\">\n<div class=\"wrap\">\n<div class=\"center\">\n<span class=\"kicker\">Client reels</span>\n<h2 class=\"h2 balance\" style=\"margin-top:18px\">Hear it from them<span class=\"dot\">.</span></h2>\n<p class=\"lede balance\" style=\"max-width:560px;margin-left:auto;margin-right:auto\">\nShort video reviews from the founders we&rsquo;ve built for.\n</p>\n</div>\n<div class=\"reels\" data-reels>\n<div class=\"reels-track\">\n<article class=\"reel\" data-src=\"/lp/reels/beyondspare-review.mp4\" data-poster=\"/lp/reels/beyondspare-review.jpg\" data-name=\"Muhammed Sahal\" data-role=\"Co-Founder, BeyondSpare UAE\" data-link=\"/works/beyondspare\">\n<div class=\"reel-media\"></div>\n<div class=\"reel-by\"><div><b>Muhammed Sahal</b><span>Co-Founder, BeyondSpare UAE</span></div><a class=\"reel-link\" href=\"/works/beyondspare\">Case study &#8599;</a></div>\n</article>\n<article class=\"reel\" data-src=\"/lp/reels/chandanveda-review.mp4\" data-poster=\"/lp/reels/chandanveda-review.jpg\" data-name=\"Kushal Agarwal\" data-role=\"CEO, Chandanveda\" data-link=\"/works/chandanveda\">\n<div class=\"reel-media\"></div>\n<div class=\"reel-by\"><div><b>Kushal Agarwal</b><span>CEO, Chandanveda</span></div><a class=\"reel-link\" href=\"/works/chandanveda\">Case study &#8599;</a></div>\n</article>\n</div>\n<div class=\"reels-nav\"><button class=\"reels-arrow reels-prev\" type=\"button\" aria-label=\"Previous reel\">&#8592;</button><button class=\"reels-arrow reels-next\" type=\"button\" aria-label=\"Next reel\">&#8594;</button></div>\n</div>\n</div>\n</section></div>",
"testimonials": "<div class=\"lp-sec lp-testimonials\"><section class=\"section\" id=\"testimonials\" style=\"scroll-margin-top:72px\">\n<div class=\"wrap\">\n<div class=\"center\">\n<span class=\"kicker\">Testimonials</span>\n<h2 class=\"h2 balance\" style=\"margin-top:18px\">What clients say<span class=\"dot\">.</span></h2>\n<p class=\"lede balance\" style=\"max-width:560px;margin-left:auto;margin-right:auto\">\nIn their words, not ours.\n</p>\n</div>\n<div class=\"tcards\">\n<div class=\"tcards-track\">\n<article class=\"tcard\">\n<div class=\"tcard-top\"><img class=\"tcard-logo\" src=\"/lp/clients/x-emirates.png\" alt=\"X Emirates Online\" width=\"110\" height=\"37\" loading=\"lazy\"><span class=\"tcard-tag\">13x sales in a month</span></div>\n<svg class=\"tcard-q\" viewBox=\"0 0 32 24\" aria-hidden=\"true\"><path d=\"M0 24V14C0 6.3 4.2 1.6 12.6 0l1.3 3.2C9.6 4.6 7.4 7.3 7.2 11.2H13V24H0zm18.6 0V14c0-7.7 4.2-12.4 12.6-14l1.3 3.2c-4.3 1.4-6.5 4.1-6.7 8H31.6V24H18.6z\"/></svg>\n<p class=\"tcard-head\">Within just one month, total sales grew nearly 13 times over.</p>\n<div class=\"tcard-more\" id=\"tm0\"><p>I was completely unsure what to do with my business. I had worked with two digital marketing companies before, and all I got was a loss, not any profit. Then I met Zyvex Tech, and the work they did on my website changed that. I&rsquo;m thankful to Mr. Syed Fidel Shaan and his team for their dedication and hard work for my company. I recommend them to everyone: this is a company you can trust.</p></div>\n<button class=\"tcard-toggle\" type=\"button\" aria-expanded=\"false\" aria-controls=\"tm0\">Read full review</button>\n<div class=\"tcard-by\"><img class=\"tcard-av\" src=\"/lp/testimonials/navneeth-krishna-v2.jpg\" alt=\"\" width=\"32\" height=\"32\" loading=\"lazy\" decoding=\"async\"><div><b>Navneeth Krishna</b><span>CEO, X Emirates Online</span></div><a class=\"tcard-link\" href=\"/works/x-emirates\">Case study &#8599;</a></div>\n</article>\n<article class=\"tcard\">\n<div class=\"tcard-top\"><img class=\"tcard-logo\" src=\"/lp/clients/firoz-pickles.png\" alt=\"Firoz Pickles\" width=\"56\" height=\"44\" loading=\"lazy\"><span class=\"tcard-tag\">Website + ongoing SEO</span></div>\n<svg class=\"tcard-q\" viewBox=\"0 0 32 24\" aria-hidden=\"true\"><path d=\"M0 24V14C0 6.3 4.2 1.6 12.6 0l1.3 3.2C9.6 4.6 7.4 7.3 7.2 11.2H13V24H0zm18.6 0V14c0-7.7 4.2-12.4 12.6-14l1.3 3.2c-4.3 1.4-6.5 4.1-6.7 8H31.6V24H18.6z\"/></svg>\n<p class=\"tcard-head\">They delivered our website exactly the way we wanted.</p>\n<div class=\"tcard-more\" id=\"tm1\"><p>Working with Zyvex Tech has been a great experience for Firoz Pickles. They understood our business and requirements from the beginning. Their attention to detail and understanding of our brand made the entire process smooth and professional. They are also handling our ongoing SEO, and we&rsquo;re happy with the way they approach the work and keep improving our online presence. I would definitely recommend Zyvex Tech to anyone looking for a reliable team for website development and digital marketing.</p></div>\n<button class=\"tcard-toggle\" type=\"button\" aria-expanded=\"false\" aria-controls=\"tm1\">Read full review</button>\n<div class=\"tcard-by\"><img class=\"tcard-av\" src=\"/lp/testimonials/muhammed-vasith.jpg\" alt=\"\" width=\"32\" height=\"32\" loading=\"lazy\" decoding=\"async\"><div><b>Muhammed Vasith</b><span>CEO, Firoz Pickles</span></div><a class=\"tcard-link\" href=\"/works/firoz-pickles\">Case study &#8599;</a></div>\n</article>\n<article class=\"tcard\">\n<div class=\"tcard-top\"><img class=\"tcard-logo\" src=\"/lp/clients/feza-dates.png\" alt=\"Feza Dates\" width=\"36\" height=\"44\" loading=\"lazy\"><span class=\"tcard-tag\">Premium custom build</span></div>\n<svg class=\"tcard-q\" viewBox=\"0 0 32 24\" aria-hidden=\"true\"><path d=\"M0 24V14C0 6.3 4.2 1.6 12.6 0l1.3 3.2C9.6 4.6 7.4 7.3 7.2 11.2H13V24H0zm18.6 0V14c0-7.7 4.2-12.4 12.6-14l1.3 3.2c-4.3 1.4-6.5 4.1-6.7 8H31.6V24H18.6z\"/></svg>\n<p class=\"tcard-head\">A premium, luxurious look that felt completely custom.</p>\n<div class=\"tcard-more\" id=\"tm2\"><p>I wanted the Feza Dates website to have a premium, luxurious look that didn&rsquo;t look like a typical template or theme. The team understood our vision perfectly and created a website that matches our brand identity beautifully. They also paid special attention to the gifting experience, making the overall website feel premium and seamless. Really happy with the final result and their attention to detail.</p></div>\n<button class=\"tcard-toggle\" type=\"button\" aria-expanded=\"false\" aria-controls=\"tm2\">Read full review</button>\n<div class=\"tcard-by\"><img class=\"tcard-av\" src=\"/lp/testimonials/faaz-mohammed-v2.jpg\" alt=\"\" width=\"32\" height=\"32\" loading=\"lazy\" decoding=\"async\"><div><b>Faaz Mohammed</b><span>CEO, Feza Dates</span></div><a class=\"tcard-link\" href=\"/works/feza-dates\">Case study &#8599;</a></div>\n</article>\n<article class=\"tcard\">\n<div class=\"tcard-top\"><img class=\"tcard-logo\" src=\"/lp/clients/beyondspare.png\" alt=\"BeyondSpare\" width=\"84\" height=\"16\" loading=\"lazy\"><span class=\"tcard-tag\">Website build, UAE</span></div>\n<svg class=\"tcard-q\" viewBox=\"0 0 32 24\" aria-hidden=\"true\"><path d=\"M0 24V14C0 6.3 4.2 1.6 12.6 0l1.3 3.2C9.6 4.6 7.4 7.3 7.2 11.2H13V24H0zm18.6 0V14c0-7.7 4.2-12.4 12.6-14l1.3 3.2c-4.3 1.4-6.5 4.1-6.7 8H31.6V24H18.6z\"/></svg>\n<p class=\"tcard-head\">The process was very smooth from start to finish.</p>\n<div class=\"tcard-more\" id=\"tm3\"><p>We are a spare parts sourcing business based in the UAE, I reached out to Zyvex for my website build and they did a fantastic job. They understood our company&rsquo;s vision and what we needed and they gave their suggestions as well. The process was very smooth from start to finish. They&rsquo;re really easy to work with, so I recommend Zyvex to anyone who&rsquo;s looking to build a website for their business.</p></div>\n<button class=\"tcard-toggle\" type=\"button\" aria-expanded=\"false\" aria-controls=\"tm3\">Read full review</button>\n<div class=\"tcard-by\"><span class=\"tcard-av\" aria-hidden=\"true\">MS</span><div><b>Muhammed Sahal</b><span>Co-Founder, BeyondSpare UAE</span></div><a class=\"tcard-link\" href=\"/works/beyondspare\">Case study &#8599;</a></div>\n</article>\n</div>\n<div class=\"tcards-dots\" aria-hidden=\"true\"></div>\n</div>\n</div>\n</section></div>"
};

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
/* </lp-home> */

function pageHome(){
  var servicesTeaser = SERVICES.slice(0,6).map(function(s){
    return ''
    + '<a href="#/services/'+s.slug+'" class="hoverable" style="display:block">'
    +   iconBox(s.icon)
    +   '<h3 class="serif ht" style="margin-top:16px;font-size:20px">'+s.name+'</h3>'
    +   '<p class="muted" style="margin-top:8px;font-size:14px">'+s.summary+'</p>'
    + '</a>';
  }).join('');

  var approachTeaser = APPROACH.map(function(s){
    var pts = (s.points || []).map(function(t){ return '<li>'+t+'</li>'; }).join('');
    return ''
    + '<article class="hw-step">'
    +   '<div class="hw-copy">'
    +     '<p class="hw-n">'+String(s.step).padStart(2,'0')+'</p>'
    +     '<h3 class="hw-title">'+s.title+'</h3>'
    +     '<p class="hw-body">'+s.body+'</p>'
    +     (pts ? '<ul class="hw-points">'+pts+'</ul>' : '')
    +   '</div>'
    +   '<div class="hw-art">'+stepArt(s.art)+'</div>'
    + '</article>';
  }).join('');

  var blogTeaser = BLOG_POSTS.slice(0,3).map(function(post){
    var img = BLOG_IMAGES[post.slug];
    return ''
    + '<a href="#/blog/'+post.slug+'" class="hoverable" style="display:block">'
    +   (img ? '<img class="media-thumb" style="margin-bottom:20px" src="'+img.cover+'" alt="" />' : '')
    +   '<p class="faint" style="font-size:12px;text-transform:uppercase;letter-spacing:.08em">'+post.category+'</p>'
    +   '<h3 class="serif ht" style="margin-top:12px;font-size:20px;line-height:1.3">'+post.title+'</h3>'
    +   '<p class="muted" style="margin-top:12px;font-size:14px">'+post.excerpt+'</p>'
    +   '<p class="faint" style="margin-top:16px;font-size:13px">'+formatDate(post.date)+' · '+post.readTime+'</p>'
    + '</a>';
  }).join('');

  var FAQS = [
    { q: "What does an engagement with Zyvex Tech actually look like?", a: "It starts with a consultation, not a proposal. We learn your business model, your product and your goals first. Then we tell you which tools and platforms you actually need, and which ones you don't. We implement what we recommended ourselves, and we stay on to maintain and support it, especially for Shopify clients." },
    { q: "Do you only work with Shopify stores?", a: "Shopify is where we go deepest, as an Official Shopify Partner, but the work spans further: performance marketing, SEO, marketing automation, branding and web, mobile apps, and custom software for businesses that have outgrown off-the-shelf tools." },
    { q: "How fast can you get something live?", a: "Typical time to launch is 7 days or less once the audit and system design are done. The speed comes from the audit-first process, not from skipping steps." },
    { q: "Is this a one-time project or ongoing support?", a: "Both, depending on the work. Websites, apps, and software are scoped and delivered as one-time projects; performance marketing, SEO, and account support run as an ongoing retainer, since those are systems that need to keep improving against real traffic." },
    { q: "Which markets do you work in?", a: "We work with founders and growing businesses around the world, from our base in Calicut, India. The work is remote-first by design, so location has never been the constraint. Scope and communication are what decide whether an engagement works." },
    { q: "How do I get started?", a: "Reach out through the contact page with a bit about your store, funnel, or project, and we'll walk you through how we'd approach it before anything is scoped." }
  ];
  var faqHtml = FAQS.map(function(f){
    return '<details class="faq-item"><summary>'+f.q+'</summary><p>'+f.a+'</p></details>';
  }).join('');

  return ''
  + '<section class="hero-section">'
  +   gridLines(false)
  +   '<div class="wrap" style="position:relative">'
  +     '<p class="kicker" style="text-transform:uppercase">'+COMPANY.name+', '+COMPANY.markets+'</p>'
  +     '<h1 class="hero-title balance" style="margin-top:24px;max-width:760px">Systems That Sell While You Don&rsquo;t<span class="dot">.</span></h1>'
  +     '<p class="muted" style="margin-top:24px;max-width:560px;font-size:17px;line-height:1.6">'+COMPANY.tagline+'</p>'
  +     '<p class="faint" style="margin-top:12px;max-width:560px;font-size:15px;font-style:italic">'+COMPANY.founder+', '+COMPANY.founderTitle+'</p>'
  +     '<div style="margin-top:40px;display:flex;flex-wrap:wrap;gap:16px">'
  +       '<a href="#/services" class="btn btn-teal">Explore Services</a>'
  +       '<a href="#/contact" class="btn btn-outline">Start a Conversation</a>'
  +     '</div>'
  +     '<div style="margin-top:64px;border-top:1px solid var(--line);padding-top:24px;display:flex;flex-wrap:wrap;gap:24px 40px;font-size:13px" class="muted">'
  +       '<span>'+COMPANY.city+'</span><span>'+COMPANY.website+'</span><span>Consulting · Shopify · Performance Marketing</span>'
  +     '</div>'
  +   '</div>'
  + '</section>'

  + LP_HOME.clients

  + '<section class="section section-b">'
  +   '<div class="wrap">'
  +     eyebrow('Core Expertise')
  +     sectionTitle('Where We Specialize', '')
  +     '<p class="muted" style="margin-top:24px;max-width:520px;font-size:15px">Three platforms we go deep on, not just dabble in: the foundation under everything else we build.</p>'
  +     '<div class="grid-3" style="margin-top:48px">'
  +       coreServiceCard('shopify', 'Shopify Ecommerce', 'Official Shopify Partner', 'End-to-end Shopify and Shopify Plus builds, checkout configuration, and ongoing implementation, backed by official partner status.')
  +       coreServiceCard('meta', 'Meta Ads', 'Performance Marketing', 'Meta (Facebook & Instagram) campaigns built for measurable ROAS: audience research, creative testing, and retargeting run as an ongoing system.')
  +       coreServiceCard('google', 'SEO', 'Organic Growth', 'Technical and on-page SEO, keyword strategy, and Shopify-specific search audits, for growth that compounds instead of spikes.')
  +     '</div>'
  +   '</div>'
  + '</section>'

  + LP_HOME.results

  + '<section class="section section-b">'
  +   '<div class="wrap">'
  +     '<div class="flex-between">'
  +       '<div>'+eyebrow('Our Services')+sectionTitle('10 Pillars. One Team', '')+'</div>'
  +       '<a href="#/services" class="tlink">View all services ↗</a>'
  +     '</div>'
  +     '<div class="grid-3" style="margin-top:48px">'+servicesTeaser+'</div>'
  +   '</div>'
  + '</section>'

  + LP_HOME.tools

  + '<section class="section section-b section-mint" id="how-we-work">'
  +   '<div class="wrap">'
  +     eyebrow('How We Work')
  +     sectionTitle('Consult First, Build Second', '')
  +     '<p class="muted" style="margin-top:24px;max-width:560px;font-size:16px;line-height:1.6">Four steps, in this order, on every engagement.</p>'
  +     '<div class="hw-steps">'+approachTeaser+'</div>'
  +     '<a href="#/our-story" class="tlink" style="display:inline-block;margin-top:56px">More about how we work &#8599;</a>'
  +   '</div>'
  + '</section>'

  + LP_HOME.reporting
  + LP_HOME.founder
  + LP_HOME.team
  + LP_HOME.why
  + LP_HOME.reels
  + LP_HOME.testimonials

  + '<section class="section section-b section-mint">'
  +   '<div class="wrap">'
  +     '<div class="flex-between">'
  +       '<div>'+eyebrow('From the Blog')+sectionTitle('Notes on Systems &amp; Growth', '')+'</div>'
  +       '<a href="#/blog" class="tlink">View all articles ↗</a>'
  +     '</div>'
  +     '<div class="grid-3" style="margin-top:48px">'+blogTeaser+'</div>'
  +   '</div>'
  + '</section>'

  + '<section class="section section-b on-black">'
  +   '<div class="wrap">'
  +     eyebrow('FAQ')
  +     sectionTitle('Common Questions', '')
  +     '<div style="margin-top:40px;max-width:760px;display:flex;flex-direction:column">'+faqHtml+'</div>'
  +   '</div>'
  + '</section>'

  + ctaSection();
}

/* ── Services index ──────────────────────────────────────────── */
function pageServices(){
  var blocks = SERVICES.map(function(sv){
    var dl = sv.deliverables.map(function(d){ return '<li>'+d+'</li>'; }).join('');
    return ''
    + '<article class="svc-block" id="svc-'+sv.slug+'">'
    +   '<div class="svc-block-head">'+iconBox(sv.icon, '', 20)+'<span class="svc-num">'+sv.number+'</span></div>'
    +   '<h2 class="svc-name">'+sv.name+'<span class="dot">.</span></h2>'
    +   '<p class="svc-tag">'+sv.tagline+'</p>'
    +   '<p class="svc-desc">'+sv.description+'</p>'
    +   '<ul class="svc-deliverables">'+dl+'</ul>'
    +   '<p class="svc-ideal"><b>Ideal for</b>'+sv.idealFor+'</p>'
    +   '<a href="#/services/'+sv.slug+'" class="btn btn-outline-teal" style="margin-top:32px">Explore '+sv.name+' <span aria-hidden="true">&#8599;</span></a>'
    + '</article>';
  }).join('');

  var railItems = SERVICES.map(function(sv){
    return '<li><button type="button" data-jump="svc-'+sv.slug+'"><span class="rn">'+sv.number+'</span><span>'+sv.name+'</span></button></li>';
  }).join('');

  return ''
  + '<section class="hero-section">'
  +   gridLines(false)
  +   '<div class="wrap" style="position:relative">'
  +     eyebrow('Our Services')
  +     '<h1 class="hero-title balance" style="margin-top:24px;max-width:820px">Our Services<span class="dot">.</span></h1>'
  +     '<p class="muted" style="margin-top:24px;max-width:620px;font-size:17px;line-height:1.6">A connected suite of consulting, implementation, and performance marketing services, from the first process audit to a fully wired growth system.</p>'
  +   '</div>'
  + '</section>'

  + '<section class="section-teal">'
  +   gridLines(true)
  +   '<div class="wrap" style="position:relative">'
  +     '<p class="kicker" style="color:rgba(13,18,17,.72)">Ten Pillars &middot; One Team</p>'
  +     '<h2 class="svc-statement" style="margin-top:24px">We consult before we sell you anything. What the business needs gets built. What it does not, we tell you to skip.</h2>'
  +     '<p style="margin-top:24px;max-width:520px;font-size:15px;line-height:1.6;color:rgba(13,18,17,.82)">Every pillar below can stand alone. Most engagements use two or three of them, wired together in the order the consultation says they matter, and we maintain and support what we build.</p>'
  +   '</div>'
  + '</section>'

  + '<section class="section">'
  +   '<div class="wrap svc-layout">'
  +     '<div>'+blocks+'</div>'
  +     '<aside class="svc-rail">'
  +       '<div class="svc-rail-inner">'
  +         '<p class="svc-rail-title">All Services</p>'
  +         '<ol>'+railItems+'</ol>'
  +         '<a href="#/contact" class="svc-rail-cta">Not sure which you need? &#8599;</a>'
  +       '</div>'
  +     '</aside>'
  +   '</div>'
  + '</section>'
  + ctaSection();
}

/* ── Service detail ──────────────────────────────────────────── */
function pageServiceDetail(service){
  var idx = SERVICES.findIndex(function(s){ return s.slug === service.slug; });
  var next = SERVICES[(idx + 1) % SERVICES.length];
  var deliverables = service.deliverables.map(function(d){
    return '<li class="deliverable-row"><span class="dot-bullet"></span>'+d+'</li>';
  }).join('');

  var signalsHtml = (service.signals || []).map(function(s){
    return ''
    + '<div style="display:flex;align-items:flex-start;gap:14px;border-bottom:1px solid var(--line);padding-bottom:20px">'
    +   '<span style="color:var(--teal2);flex-shrink:0;margin-top:2px">'+svgIcon('check', 18)+'</span>'
    +   '<p style="font-size:15px;line-height:1.55">'+s+'</p>'
    + '</div>';
  }).join('');

  var processHtml = (service.process || []).map(function(s, i){
    return ''
    + '<div class="grid-approach">'
    +   '<div>'
    +     iconBox(s.icon)
    +     '<p class="faint" style="margin-top:16px;font-size:13px">Step '+String(i+1).padStart(2,'0')+'</p>'
    +     '<h3 class="serif" style="margin-top:4px;font-size:22px">'+s.title+'</h3>'
    +   '</div>'
    +   '<p class="muted" style="align-self:center;max-width:520px;font-size:14px">'+s.body+'</p>'
    + '</div>';
  }).join('');

  var related = (service.relatedCaseStudies || []).map(findWork).filter(Boolean);
  var relatedHtml = related.map(function(cs){
    var headline = (cs.stats && cs.stats[0]) ? cs.stats[0].v + ' ' + cs.stats[0].l : '';
    return ''
    + '<a href="#/works/'+cs.slug+'" class="grid-cs-row hoverable">'
    +   '<div style="display:flex;gap:20px;align-items:center">'
    +     '<img class="media-thumb-sm" src="'+workImg(cs.slug,'cover')+'" alt="" />'
    +     '<div><h2 class="serif ht" style="font-size:24px">'+cs.client+'</h2><p class="muted" style="margin-top:4px;font-size:14px">'+cs.category+'</p></div>'
    +   '</div>'
    +   '<p class="muted" style="max-width:520px;font-size:15px">'+cs.summary+'</p>'
    +   '<div style="display:flex;align-items:center;gap:16px">'
    +     (headline ? '<span class="serif" style="font-size:20px;color:var(--teal2)">'+headline+'</span>' : '')
    +     '<span class="muted" style="font-size:13px;text-transform:uppercase;letter-spacing:.06em">Read ↗</span>'
    +   '</div>'
    + '</a>';
  }).join('');

  var faqHtml = (service.faqs || []).map(function(f){
    return '<details class="faq-item"><summary>'+f.q+'</summary><p>'+f.a+'</p></details>';
  }).join('');

  return ''
  + '<section class="hero-section">'
  +   gridLines(false)
  +   '<div class="wrap" style="position:relative">'
  +     '<a href="#/services" class="tlink" style="color:var(--muted)">← All Services</a>'
  +     '<div style="margin-top:32px;display:flex;align-items:center;gap:16px">'
  +       iconBox(service.icon, '', 22)
  +       '<span class="faint" style="font-size:14px">Service '+service.number+'</span>'
  +     '</div>'
  +     '<h1 class="title balance" style="margin-top:24px;max-width:760px;font-size:clamp(36px,6vw,80px)">'+service.name+'<span class="dot">.</span></h1>'
  +     '<p class="faint" style="margin-top:16px;max-width:560px;font-size:17px;font-style:italic">'+service.tagline+'</p>'
  +   '</div>'
  + '</section>'
  + '<section class="section">'
  +   '<div class="wrap grid-detail">'
  +     '<div>'
  +       eyebrow('Overview')
  +       '<p style="margin-top:24px;max-width:640px;font-size:17px;line-height:1.6">'+service.description+'</p>'
  +       '<p class="faint" style="margin-top:40px;font-size:12px;text-transform:uppercase;letter-spacing:.08em">Ideal for</p>'
  +       '<p class="muted" style="margin-top:12px;max-width:520px;font-size:15px">'+service.idealFor+'</p>'
  +     '</div>'
  +     '<div>'
  +       '<p class="faint" style="font-size:12px;text-transform:uppercase;letter-spacing:.08em">What&rsquo;s included</p>'
  +       '<ul style="margin-top:20px;border-top:1px solid var(--line);padding-top:20px;display:flex;flex-direction:column;gap:12px">'+deliverables+'</ul>'
  +       '<a href="#/contact/'+service.slug+'" class="btn btn-teal" style="margin-top:32px">Talk to us about '+service.name+' <span aria-hidden="true">↗</span></a>'
  +     '</div>'
  +   '</div>'
  + '</section>'
  + (service.practice ? ''
  + '<section class="section section-b section-mint">'
  +   '<div class="wrap">'
  +     eyebrow('In Practice')
  +     '<h2 class="title balance" style="margin-top:16px;font-size:clamp(26px,3.4vw,40px);max-width:720px">'+service.practice.title+'<span class="dot">.</span></h2>'
  +     '<p class="muted" style="margin-top:12px;font-size:16px">'+service.practice.sub+'</p>'
  +     '<ul class="svc-checks">'+service.practice.items.map(function(t){ return '<li><span class="svc-check">'+svgIcon('check', 16)+'</span>'+t+'</li>'; }).join('')+'</ul>'
  +     (service.includes ? '<p class="faint" style="margin-top:40px;font-size:12px;text-transform:uppercase;letter-spacing:.08em">'+service.includes.title+'</p>'
  +       '<div class="svc-chips">'+service.includes.items.map(function(t){ return '<span>'+t+'</span>'; }).join('')+'</div>' : '')
  +     (service.note ? '<div class="svc-note"><p>'+service.note.body+'</p></div>' : '')
  +   '</div>'
  + '</section>' : '')
  + (service.reporting && typeof LP_HOME !== 'undefined' ? LP_HOME.reporting : '')
  + (signalsHtml ? ''
  + '<section class="section section-b">'
  +   '<div class="wrap">'
  +     eyebrow('Is This You')
  +     '<h2 class="title balance" style="margin-top:16px;font-size:clamp(24px,3vw,34px);max-width:640px">Signs You Need '+service.name+'<span class="dot">.</span></h2>'
  +     '<div class="grid-2" style="margin-top:40px;row-gap:20px;column-gap:40px">'+signalsHtml+'</div>'
  +   '</div>'
  + '</section>' : '')
  + (processHtml ? ''
  + '<section class="section">'
  +   '<div class="wrap">'
  +     eyebrow('How We Deliver It')
  +     sectionTitle('The Process, Step by Step', '')
  +     '<div style="margin-top:16px">'+processHtml+'</div>'
  +   '</div>'
  + '</section>' : '')
  + (relatedHtml ? ''
  + '<section class="section section-b">'
  +   '<div class="wrap">'
  +     eyebrow('Related Work')
  +     '<h2 class="title balance" style="margin-top:16px;font-size:clamp(24px,3vw,34px);max-width:640px">Where This Played Out<span class="dot">.</span></h2>'
  +     '<div style="margin-top:40px;display:flex;flex-direction:column;gap:32px">'+relatedHtml+'</div>'
  +   '</div>'
  + '</section>' : '')
  + (faqHtml ? ''
  + '<section class="section">'
  +   '<div class="wrap" style="max-width:800px">'
  +     eyebrow('FAQ')
  +     '<h2 class="title balance" style="margin-top:16px;font-size:clamp(24px,3vw,34px)">Common Questions About '+service.name+'<span class="dot">.</span></h2>'
  +     '<div style="margin-top:32px">'+faqHtml+'</div>'
  +   '</div>'
  + '</section>' : '')
  + '<section class="section section-b" style="padding:64px 0">'
  +   '<div class="wrap" style="display:flex;flex-direction:column;gap:24px;align-items:flex-start;justify-content:space-between">'
  +     '<div style="display:flex;width:100%;flex-wrap:wrap;gap:24px;align-items:center;justify-content:space-between">'
  +       '<div><p class="faint" style="font-size:12px;text-transform:uppercase;letter-spacing:.08em">Next service</p><p class="serif" style="margin-top:8px;font-size:24px">'+next.name+'</p></div>'
  +       '<a href="#/services/'+next.slug+'" class="btn btn-outline">View ↗</a>'
  +     '</div>'
  +   '</div>'
  + '</section>'
  + ctaSection();
}

/* ── Works index ──────────────────────────────────────────────── */
function pageWorks(){
  var cards = WORKS.map(function(w){
    var tags = w.expertise.map(function(k){ return '<span class="wx-tag">'+expertiseLabel(k)+'</span>'; }).join('');
    return ''
    + '<a href="#/works/'+w.slug+'" class="wx-card" data-exp="'+w.expertise.join(' ')+'">'
    +   '<div class="wx-card-media"><img src="'+workImg(w.slug,'cover')+'" alt="'+w.client+'" /></div>'
    +   '<div class="wx-card-body">'
    +     '<div class="wx-tags">'+countryBadges(w)+tags+'</div>'
    +     '<h3 class="wx-card-title">'+w.client+'</h3>'
    +     '<p class="wx-card-line">'+w.cardLine+'</p>'
    +     '<span class="tlink wx-card-cta">'+(w.depth === 'full' ? 'Read the case study' : 'See the work')+' &#8599;</span>'
    +   '</div>'
    + '</a>';
  }).join('');

  var partners = TECH_PARTNERS.map(function(t){
    var mark = brandMark(t.icon, false);
    return ''
    + '<div>'
    +   '<div class="partner-mark">'+(mark || '<span class="partner-wordmark">'+t.name+'</span>')+'</div>'
    +   '<p class="muted" style="margin-top:16px;font-size:14px">'+t.note+'</p>'
    + '</div>';
  }).join('');

  return ''
  + '<section class="hero-section">'
  +   gridLines(false)
  +   '<div class="wrap" style="position:relative">'
  +     eyebrow('Our Work')
  +     '<h1 class="hero-title balance" style="margin-top:24px;max-width:860px">Proof, Not Promises<span class="dot">.</span></h1>'
  +     '<p class="muted" style="margin-top:24px;max-width:600px;font-size:17px;line-height:1.6">The stores, funnels and campaigns behind the numbers, and what we actually did on each one.</p>'
  +     '<div style="margin-top:56px">'+statRow(STATS)+'</div>'
  +   '</div>'
  + '</section>'

  + '<section class="section">'
  +   '<div class="wrap">'
  +     '<div class="wx-grid">'+cards+'</div>'
  +   '</div>'
  + '</section>'

  + '<section class="section section-b">'
  +   '<div class="wrap">'
  +     eyebrow('Platforms We Work In')
  +     '<div class="grid-3" style="margin-top:40px">'+partners+'</div>'
  +   '</div>'
  + '</section>'
  + ctaSection({ title: "Want to be the next result on this page.", body: "Tell us about your store, your funnel, or your next project, and we'll walk you through how we'd approach it." });
}

/* ── Work detail ──────────────────────────────────────────────── */
function workReview(slug){
  var r = WORK_REVIEWS[slug];
  if(!r || !r.quote){
    return ''
    + '<section class="section section-b">'
    +   '<div class="wrap">'
    +     eyebrow('In Their Words')
    +     '<div class="wx-quote-slot">'
    +       '<p class="wx-quote-slot-label">Client review</p>'
    +       '<p class="wx-quote-slot-note">Quote to be added.</p>'
    +     '</div>'
    +   '</div>'
    + '</section>';
  }
  return ''
  + '<section class="section section-b">'
  +   '<div class="wrap">'
  +     eyebrow('In Their Words')
  +     '<blockquote class="wx-quote">&ldquo;'+r.quote+'&rdquo;</blockquote>'
  +     '<p class="wx-quote-by"><b>'+r.name+'</b>'+(r.role ? ' &nbsp;·&nbsp; '+r.role : '')+'</p>'
  +   '</div>'
  + '</section>';
}

function pageWorkDetail(w){
  var imgs = function(keys){
    if(!keys || !keys.length) return '';
    var cls = keys.length > 1 ? 'wx-shots two' : 'wx-shots';
    return '<div class="'+cls+'">' + keys.map(function(k){
      return '<img src="'+workImg(w.slug,k)+'" alt="'+w.client+'" />';
    }).join('') + '</div>';
  };

  var body = '';

  if(w.depth === 'full'){
    var blocks = w.blocks.map(function(b, i){
      return ''
      + '<article class="wx-block">'
      +   '<p class="wx-block-n">'+String(i+1).padStart(2,'0')+'</p>'
      +   '<h2 class="wx-block-title">'+b.title+'</h2>'
      +   '<p class="wx-block-body">'+b.body+'</p>'
      +   imgs(b.img)
      + '</article>';
    }).join('');

    var statsBand = w.stats ? (''
      + '<section class="section-teal">'
      +   gridLines(true)
      +   '<div class="wrap" style="position:relative">'
      +     '<p class="kicker" style="color:rgba(13,18,17,.72)">The Numbers</p>'
      +     '<div class="wx-stats">' + w.stats.map(function(s){
              return '<div><p class="wx-stat-v">'+s.v+'</p><p class="wx-stat-l">'+s.l+'</p></div>';
            }).join('') + '</div>'
      +   '</div>'
      + '</section>') : '';

    var factsBand = w.facts ? (''
      + '<section class="section-teal">'
      +   gridLines(true)
      +   '<div class="wrap" style="position:relative">'
      +     '<p class="kicker" style="color:rgba(13,18,17,.72)">What We Wired</p>'
      +     '<div class="wx-stats">' + w.facts.map(function(f){
              return '<div><p class="wx-stat-v" style="font-size:clamp(24px,3vw,36px)">'+f.v+'</p><p class="wx-stat-l">'+f.k+'</p></div>';
            }).join('') + '</div>'
      +   '</div>'
      + '</section>') : '';

    body = ''
    + '<section class="section">'
    +   '<div class="wrap grid-detail">'
    +     '<div>'
    +       '<p class="faint" style="font-size:12px;text-transform:uppercase;letter-spacing:.08em">The Brief</p>'
    +       '<p style="margin-top:16px;font-size:17px;line-height:1.7">'+w.challenge+'</p>'
    +     '</div>'
    +     '<div class="wx-outcome">'
    +       '<p class="faint" style="font-size:12px;text-transform:uppercase;letter-spacing:.08em">Where It Landed</p>'
    +       '<p class="muted" style="margin-top:16px;font-size:15px;line-height:1.7">'+w.outcome+'</p>'
    +     '</div>'
    +   '</div>'
    + '</section>'
    + (statsBand || factsBand)
    + '<section class="section">'
    +   '<div class="wrap wx-blocks">'+blocks+'</div>'
    + '</section>'
    + '<section class="section section-b">'
    +   '<div class="wrap">'
    +     eyebrow('Behind It')
    +     '<p class="muted" style="margin-top:24px;max-width:620px;font-size:15px;line-height:1.7">None of this came out of a brief emailed over once. It came out of back-to-back sessions with the '+w.client+' team. That is the part of the work that never shows up in a screenshot.</p>'
    +     '<img class="media-cover" style="margin-top:40px" src="'+teamMeetingSrc(w.client)+'" alt="The Zyvex Tech team working with '+w.client+'" />'
    +   '</div>'
    + '</section>'
    + workReview(w.slug);
  } else {
    var steps = (w.approach||[]).map(function(step, i){
      return '<li style="display:flex;gap:16px;border-bottom:1px solid var(--line);padding-bottom:16px;font-size:15px" class="muted">'
           + '<span class="serif" style="font-size:20px;color:var(--teal2)">'+String(i+1).padStart(2,'0')+'</span><span>'+step+'</span></li>';
    }).join('');
    body = ''
    + '<section class="section">'
    +   '<div class="wrap grid-detail">'
    +     '<div style="display:flex;flex-direction:column;gap:48px">'
    +       '<div><p class="faint" style="font-size:12px;text-transform:uppercase;letter-spacing:.08em">The Brief</p>'
    +         '<p style="margin-top:16px;font-size:17px;line-height:1.7">'+w.challenge+'</p></div>'
    +       '<img class="media-inline" style="margin:0" src="'+workImg(w.slug,'inline')+'" alt="The live '+w.client+' store" />'
    +       '<div><p class="faint" style="font-size:12px;text-transform:uppercase;letter-spacing:.08em">What We Did</p>'
    +         '<ul style="margin-top:16px;display:flex;flex-direction:column;gap:16px">'+steps+'</ul></div>'
    +     '</div>'
    +     '<div>'
    +       '<div class="wx-outcome">'
    +         '<p class="faint" style="font-size:12px;text-transform:uppercase;letter-spacing:.08em">Where It Landed</p>'
    +         '<p class="muted" style="margin-top:16px;font-size:15px;line-height:1.7">'+w.outcome+'</p>'
    +       '</div>'
    +       ((WORK_IMAGES[w.slug]||{}).detail ? '<img class="media-inline" src="'+workImg(w.slug,'detail')+'" alt="'+w.client+' store detail" />' : '')
    +     '</div>'
    +   '</div>'
    + '</section>'
    + workReview(w.slug);
  }

  var others = WORKS.filter(function(o){ return o.slug !== w.slug; }).slice(0,3).map(function(o){
    return ''
    + '<a href="#/works/'+o.slug+'" class="card card-media">'
    +   '<img class="media-thumb" src="'+workImg(o.slug,'cover')+'" alt="" />'
    +   '<div class="card-media-body">'
    +     '<h3 class="serif" style="font-size:20px">'+o.client+'</h3>'
    +     '<p class="muted" style="margin-top:8px;font-size:14px">'+o.cardLine+'</p>'
    +   '</div>'
    + '</a>';
  }).join('');

  return ''
  + '<section class="hero-section">'
  +   gridLines(false)
  +   '<div class="wrap" style="position:relative">'
  +     '<a href="#/works" class="tlink" style="color:var(--muted)">&larr; All Work</a>'
  +     '<div style="margin-top:24px">'+eyebrow(w.category)+'</div>'
  +     (w.countries && w.countries.length ? '<div style="margin-top:20px">'+countryBadges(w,'wx-flags big')+'</div>' : '')
  +     '<h1 class="title balance" style="margin-top:24px;max-width:820px">'+w.client+'<span class="dot">.</span></h1>'
  +     '<p class="muted" style="margin-top:24px;max-width:680px;font-size:17px;line-height:1.6">'+w.summary+'</p>'
  +     (w.url ? '<p style="margin-top:16px;font-size:14px;color:var(--teal2)">'+w.url+'</p>' : '')
  +   '</div>'
  + '</section>'
  + '<div class="wrap" style="margin-top:48px"><img class="media-cover" src="'+workImg(w.slug,'cover')+'" alt="'+w.client+' cover" /></div>'
  + body
  + '<section class="section section-b">'
  +   '<div class="wrap">'
  +     eyebrow('More Work')
  +     '<div class="grid-3" style="margin-top:40px">'+others+'</div>'
  +   '</div>'
  + '</section>'
  + ctaSection({ title: "Want results like this.", body: "Tell us about your store or funnel, and we'll walk you through how we'd approach it." });
}

/* ── Our Story ────────────────────────────────────────────────── */
function pageOurStory(){
  var aboutRows = [
    { n: "01", title: "Who We Are", icon: "target", body: "A consulting, implementation, and performance marketing firm working at the intersection of process, ecommerce, and demand generation." },
    { n: "02", title: "Our Scope", icon: "globe", body: "Founders and growing businesses around the world, from a first Shopify store to a full funnel rebuild." },
    { n: "03", title: "Our Commitment", icon: "check", body: "An honest answer on what you need and what you don't. Then we build it, and we stay on to maintain and support it." },
    { n: "04", title: "Our Model", icon: "flow", body: "Consult, scope, implement, maintain: all under one roof, and all by the same people. Ongoing support is part of the engagement, not an upsell." }
  ];
  var aboutHtml = aboutRows.map(function(row){
    return ''
    + '<div style="border-bottom:1px solid var(--line);padding-bottom:40px">'
    +   iconBox(row.icon)
    +   '<p class="faint" style="margin-top:16px;font-size:14px">'+row.n+'</p>'
    +   '<h3 class="serif" style="margin-top:4px;font-size:24px">'+row.title+'</h3>'
    +   '<p class="muted" style="margin-top:12px;max-width:420px;font-size:15px">'+row.body+'</p>'
    + '</div>';
  }).join('');

  var valuesHtml = VALUES.map(function(v){
    return ''
    + '<div>'
    +   iconBox(v.icon)
    +   '<h3 class="serif" style="margin-top:16px;font-size:18px;line-height:1.3">'+v.title+'</h3>'
    +   '<p class="muted" style="margin-top:8px;font-size:14px">'+v.body+'</p>'
    + '</div>';
  }).join('');

  var toolsHtml = TOOLS_ADVISED.map(function(t){
    return ''
    + '<div>'
    +   iconBox(t.icon)
    +   '<h3 class="serif" style="margin-top:16px;font-size:18px">'+t.name+'</h3>'
    +   '<p class="muted" style="margin-top:4px;font-size:14px">'+t.note+'</p>'
    + '</div>';
  }).join('');

  var DISCIPLINES = [
    { icon: "seo",     title: "Consulting & Audit",        body: "Funnel and process audits, systems design, and the prioritized plan every engagement starts from." },
    { icon: "shopify", title: "Shopify Development",       body: "Store builds, theme customization, checkout configuration, migrations and app work." },
    { icon: "meta",    title: "Performance Marketing",     body: "Meta and paid campaigns run as an ongoing system: structure, audiences and creative testing." },
    { icon: "trend",   title: "SEO",                       body: "Technical and on-page SEO, keyword and content strategy, and Shopify-specific search work." },
    { icon: "flow",    title: "Retention & Automation",    body: "Email and WhatsApp flows, re-engagement and the integrations behind them, so follow-up happens without anyone remembering to send it." },
    { icon: "suite",   title: "Support & Training",        body: "Handover, documentation and ongoing support, so the system keeps running after we hand over the keys." }
  ];
  var disciplinesHtml = DISCIPLINES.map(function(d){
    return ''
    + '<div>'
    +   iconBox(d.icon)
    +   '<h3 class="serif" style="margin-top:16px;font-size:18px">'+d.title+'</h3>'
    +   '<p class="muted" style="margin-top:8px;font-size:14px;line-height:1.6">'+d.body+'</p>'
    + '</div>';
  }).join('');

  var CLIENT_LOGOS = [
    { name: "Colin Guest",        src: "" },
    { name: "X Emirates",         src: "" },
    { name: "Wolgan",             src: "" },
    { name: "ABC LUX",            src: "" },
    { name: "BeyondSpare",        src: "" },
    { name: "BA51 Eyewear",       src: "" },
    { name: "Niche Spectacles",   src: "" },
    { name: "French Cakes",       src: "" },
    { name: "Feza Dates",         src: "" },
    { name: "Firoz Pickles",      src: "" },
    { name: "Coco Roots Organic", src: "" },
    { name: "Turmaroot",          src: "" },
    { name: "The Bomb Cases",     src: "" },
    { name: "Chandanveda",        src: "" }
  ];
  var tickerHtml = CLIENT_LOGOS.concat(CLIENT_LOGOS).map(function(c, i){
    return '<div class="ticker-item"'+(i >= CLIENT_LOGOS.length ? ' aria-hidden="true"' : '')+'>'
      + (c.src ? '<img src="'+c.src+'" alt="'+c.name+'" />' : '<span class="ticker-name">'+c.name+'</span>')
      + '</div>';
  }).join('');

  /* Client meeting photos: replace a src and that slot is done. */
  var MEETING_PHOTOS = [
    { src: "", caption: "Audit session" },
    { src: "", caption: "Planning workshop" },
    { src: "", caption: "Performance review" },
    { src: "", caption: "Handover & training" }
  ];
  var meetingsHtml = MEETING_PHOTOS.map(function(m){
    return '<figure class="meet-item">'
      + '<img src="'+(m.src || ph('Client meeting', m.caption, 1000, 750))+'" alt="'+m.caption+'" />'
      + '<figcaption>'+m.caption+'</figcaption>'
      + '</figure>';
  }).join('');

  var stackHtml = STACK.map(function(s){
    return '<div class="stack-tile">'+s+'</div>';
  }).join('');

  return ''
  + '<section class="hero-section">'
  +   gridLines(false)
  +   '<div class="wrap" style="position:relative">'
  +     eyebrow('About')
  +     sectionTitle('Clarity in Every System', '')
  +     '<p class="muted" style="margin-top:24px;max-width:640px;font-size:17px;line-height:1.6">'+COMPANY.positioning+' '+COMPANY.name+' helps businesses define clear processes and technology goals, then builds and runs the systems that make them real: structured consulting, hands-on Shopify implementation, and performance marketing that turns traffic into revenue. We stay close to what we build, because a system that isn&rsquo;t maintained is a system that quietly stops working.</p>'
  +   '</div>'
  + '</section>'

  + '<section class="section-teal">'
  +   gridLines(true)
  +   '<div class="wrap grid-founder" style="position:relative;align-items:center">'
  +     '<div>'
  +       '<img class="founder-portrait" src="'+(FOUNDER_PHOTO || '/lp/founder-syed-fidel-shaan.jpg')+'" alt="'+COMPANY.founder+', '+COMPANY.founderTitle+'" />'
  +     '</div>'
  +     '<div>'
  +       eyebrow('About the Founder')
  +       '<h2 class="title balance" style="margin-top:24px;font-size:clamp(34px,5vw,56px)">'+COMPANY.founder+'<span style="color:var(--teal2)">.</span></h2>'
  +       '<p style="margin-top:12px;font-size:13px;text-transform:uppercase;letter-spacing:.08em;opacity:.7">'+COMPANY.founderTitle+'</p>'
  +       '<div style="display:flex;flex-direction:column;gap:20px;margin-top:32px;font-size:16px;line-height:1.6">'
  +       '<p>'+COMPANY.founder+' founded '+COMPANY.name+' on a simple observation: most businesses don&rsquo;t need more advice, they need it built, launched, and run. He works directly with founders around the world, not as a distant consultant, but as someone in the build with them, from the first funnel audit to the tools running unattended.</p>'
  +       '<p>His approach treats consulting and implementation as one discipline: a process is only as good as the system built to run it, and a system is only as good as the process it was designed around.</p>'
  +       '</div>'
  +       '<dl class="dl-2" style="margin-top:40px;grid-template-columns:1fr;gap:14px">'
  +         '<div style="display:flex;justify-content:space-between;gap:16px"><dt style="opacity:.6">Based in</dt><dd style="text-align:right">'+COMPANY.city+'</dd></div>'
  +         '<div style="display:flex;justify-content:space-between;gap:16px"><dt style="opacity:.6">Focus</dt><dd style="text-align:right">Systems, Ecommerce &amp; Performance Marketing</dd></div>'
  +         '<div style="display:flex;justify-content:space-between;gap:16px"><dt style="opacity:.6">Working across</dt><dd style="text-align:right">'+COMPANY.markets+'</dd></div>'
  +       '</dl>'
  +     '</div>'
  +   '</div>'
  + '</section>'

  + LP_HOME.team

  + '<section class="section section-b" id="team-disciplines">'
  +   '<div class="wrap">'
  +     eyebrow('What We Cover')
  +     sectionTitle('One Team, Every Discipline', '')
  +     '<p class="muted" style="margin-top:24px;max-width:640px;font-size:16px;line-height:1.7">A small, senior team in Calicut working directly with the founders and operators who hire us. The person who audits your funnel is the person who builds the store and runs the campaigns. No handover to a junior bench, and nobody between you and the work.</p>'
  +     '<p class="faint" style="margin-top:56px;font-size:12px;text-transform:uppercase;letter-spacing:.08em">What the team covers</p>'
  +     '<div class="grid-3" style="margin-top:24px">'+disciplinesHtml+'</div>'
  +   '</div>'
  + '</section>'

  + LP_HOME.clients

  + LP_HOME.reels
  + LP_HOME.testimonials


  + '<section class="section">'
  +   '<div class="wrap grid-2" style="row-gap:48px">'+aboutHtml+'</div>'
  + '</section>'

  + '<section class="section section-b on-black">'
  +   '<div class="wrap">'
  +     eyebrow('Vision &amp; Mission')
  +     sectionTitle('What Drives Everything We Build', '')
  +     '<div class="grid-2" style="margin-top:48px">'
  +       '<div>'
  +         '<p class="faint" style="font-size:12px;text-transform:uppercase;letter-spacing:.08em">Our Vision / 01</p>'
  +         '<p style="margin-top:16px;max-width:420px;font-size:19px;line-height:1.35">To be the team a business calls before it buys the software: the partner that works out what is actually needed, builds it, and stays to run it.</p>'
  +         '<p class="muted" style="margin-top:16px;max-width:420px;font-size:15px">Most businesses are not short of tools. They are short of someone who will look at the business first and say plainly which of those tools they need and which they can skip. We want that to be the normal way growing businesses buy technology, not the exception.</p>'
  +       '</div>'
  +       '<div>'
  +         '<p class="faint" style="font-size:12px;text-transform:uppercase;letter-spacing:.08em">Our Mission / 02</p>'
  +         '<p style="margin-top:16px;max-width:420px;font-size:19px;line-height:1.35">To consult before we recommend, recommend honestly, implement it ourselves, and support what we build, so a business ends up with a stack that fits it rather than one it has to grow into.</p>'
  +         '<p class="muted" style="margin-top:16px;max-width:420px;font-size:15px">We start with your business model, your product and your goals. From there we scope the stack, build it, and stay on to maintain and support it, particularly for Shopify clients, where the store is the revenue and ongoing support is the whole point.</p>'
  +       '</div>'
  +     '</div>'
  +   '</div>'
  + '</section>'

  + '<section class="section section-b">'
  +   '<div class="wrap">'
  +     eyebrow('Core Values')
  +     sectionTitle('The Standards We Build Around', '')
  +     '<div class="grid-5" style="margin-top:48px">'+valuesHtml+'</div>'
  +   '</div>'
  + '</section>'

  + '<section class="section section-b">'
  +   '<div class="wrap">'
  +     eyebrow('Our Stack')
  +     sectionTitle('Built on Tools That Scale', '')
  +     '<p class="faint" style="margin-top:40px;font-size:12px;text-transform:uppercase;letter-spacing:.08em">Tools &amp; platforms we advise on</p>'
  +     '<div class="grid-5" style="margin-top:24px">'+toolsHtml+'</div>'
  +     '<p class="faint" style="margin-top:56px;font-size:12px;text-transform:uppercase;letter-spacing:.08em">Languages &amp; frameworks</p>'
  +     '<div class="stack-grid" style="margin-top:24px">'+stackHtml+'</div>'
  +   '</div>'
  + '</section>'

  + ctaSection();
}

/* ── Blog index ───────────────────────────────────────────────── */
function pageBlog(){
  var featured = BLOG_POSTS[0];
  var rest = BLOG_POSTS.slice(1);
  var featuredImg = featured ? BLOG_IMAGES[featured.slug] : null;
  var restHtml = rest.map(function(post){
    var img = BLOG_IMAGES[post.slug];
    return ''
    + '<a href="#/blog/'+post.slug+'" class="hoverable" style="display:block">'
    +   (img ? '<img class="media-thumb" style="margin-bottom:20px" src="'+img.cover+'" alt="" />' : '')
    +   '<p class="faint" style="font-size:12px;text-transform:uppercase;letter-spacing:.08em">'+post.category+'</p>'
    +   '<h3 class="serif ht" style="margin-top:12px;font-size:24px;line-height:1.3">'+post.title+'</h3>'
    +   '<p class="muted" style="margin-top:12px;font-size:15px">'+post.excerpt+'</p>'
    +   '<p class="faint" style="margin-top:16px;font-size:13px">'+formatDate(post.date)+' · '+post.readTime+'</p>'
    + '</a>';
  }).join('');

  return ''
  + '<section class="hero-section">'
  +   gridLines(false)
  +   '<div class="wrap" style="position:relative">'
  +     eyebrow('Blog')
  +     sectionTitle('Notes on Systems, Stores &amp; Growth', '')
  +     '<p class="muted" style="margin-top:24px;max-width:560px;font-size:17px">Practical writing on Shopify, performance marketing, SEO, and the systems behind reliable growth.</p>'
  +   '</div>'
  + '</section>'
  + (featured ? (''
    + '<section class="section-b" style="padding:64px 0">'
    +   '<a href="#/blog/'+featured.slug+'" class="wrap hoverable grid-detail" style="display:grid;align-items:center">'
    +     (featuredImg ? '<img class="media-thumb" src="'+featuredImg.cover+'" alt="" />' : '<div></div>')
    +     '<div>'
    +     '<p class="faint" style="font-size:12px;text-transform:uppercase;letter-spacing:.08em">'+featured.category+'</p>'
    +     '<h2 class="serif ht balance" style="margin-top:16px;max-width:640px;font-size:clamp(28px,4vw,48px);line-height:1.15">'+featured.title+'</h2>'
    +     '<p class="muted" style="margin-top:16px;max-width:560px;font-size:15px">'+featured.excerpt+'</p>'
    +     '<p class="faint" style="margin-top:20px;font-size:13px">'+formatDate(featured.date)+' · '+featured.readTime+'</p>'
    +     '</div>'
    +   '</a>'
    + '</section>') : '')
  + '<section class="section">'
  +   '<div class="wrap grid-2" style="row-gap:56px">'+restHtml+'</div>'
  + '</section>';
}

/* ── Blog post ────────────────────────────────────────────────── */
function renderBlogBody(body, images){
  var html = '';
  var inList = false;
  var patternIdx = 2;
  var quoteIdx = Math.max(patternIdx + 2, body.length - 3);
  body.forEach(function(para, i){
    if(para.indexOf('## ') === 0){
      if(inList){ html += '</ul>'; inList = false; }
      html += '<h2 class="serif" style="margin-top:40px;font-size:24px;line-height:1.3">'+para.slice(3)+'</h2>';
    } else if(para.indexOf('- ') === 0){
      if(!inList){ html += '<ul style="margin-top:20px;display:flex;flex-direction:column;gap:8px">'; inList = true; }
      html += '<li style="margin-left:20px;list-style:disc;font-size:16px;line-height:1.6" class="muted">'+para.slice(2)+'</li>';
    } else {
      if(inList){ html += '</ul>'; inList = false; }
      html += '<p class="muted" style="margin-top:20px;font-size:16px;line-height:1.6">'+para+'</p>';
    }
    if(images){
      if(i === patternIdx) html += '<img class="media-inline" src="'+images.pattern+'" alt="" />';
      if(i === quoteIdx) html += '<img class="media-inline" src="'+images.quote+'" alt="" />';
    }
  });
  if(inList) html += '</ul>';
  return html;
}

function pageBlogPost(post){
  var idx = BLOG_POSTS.findIndex(function(p){ return p.slug === post.slug; });
  var next = BLOG_POSTS[(idx + 1) % BLOG_POSTS.length];
  var img = BLOG_IMAGES[post.slug];

  return ''
  + '<article class="hero-section">'
  +   gridLines(false)
  +   '<div style="position:relative;max-width:760px;margin:0 auto;padding:0 24px">'
  +     '<div style="text-align:center">'
  +       '<a href="#/blog" class="tlink" style="color:var(--muted)">← Blog</a>'
  +       '<p class="faint" style="margin-top:32px;font-size:12px;text-transform:uppercase;letter-spacing:.08em">'+post.category+'</p>'
  +       '<h1 class="title balance" style="margin-top:16px;font-size:clamp(30px,4.6vw,52px);line-height:1.1">'+post.title+'</h1>'
  +       '<p class="faint" style="margin-top:20px;font-size:13px">'+formatDate(post.date)+' · '+post.readTime+'</p>'
  +     '</div>'
  +     (img ? '<img class="media-cover" style="margin-top:40px" src="'+img.cover+'" alt="'+post.title+' cover" />' : '')
  +     '<div style="margin-top:40px">'+renderBlogBody(post.body, img)+'</div>'
  +   '</div>'
  + '</article>'
  + '<section class="section-b" style="padding:56px 0">'
  +   '<div style="max-width:760px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;gap:24px">'
  +     '<div><p class="faint" style="font-size:12px;text-transform:uppercase;letter-spacing:.08em">Next up</p><p class="serif" style="margin-top:8px;font-size:20px">'+next.title+'</p></div>'
  +     '<a href="#/blog/'+next.slug+'" class="btn btn-outline">Read ↗</a>'
  +   '</div>'
  + '</section>'
  + ctaSection();
}

/* ── Contact ──────────────────────────────────────────────────── */
function contactForm(serviceName){
  var prefill = serviceName ? ("Hi "+COMPANY.name+", I'd like to talk about "+serviceName+".\n\n") : "";
  return ''
  + '<form id="contact-form" data-service="'+(serviceName||'')+'" style="display:flex;flex-direction:column;gap:24px">'
  +   '<div class="field"><label for="cf-name">Name</label><input id="cf-name" required placeholder="Your name" /></div>'
  +   '<div class="field"><label for="cf-email">Email</label><input id="cf-email" type="email" required placeholder="you@company.com" /></div>'
  +   '<div class="field"><label for="cf-message">Message</label><textarea id="cf-message" required rows="5" placeholder="Tell us about your store, funnel, or project">'+prefill+'</textarea></div>'
  +   '<button type="submit" class="btn btn-teal" style="width:fit-content">Send message <span aria-hidden="true">↗</span></button>'
  +   '<p id="cf-note" class="form-note" style="display:none">Opening your email client to send this to '+COMPANY.email+'. If nothing opened, email us directly.</p>'
  + '</form>';
}

/* WhatsApp chat button (contact pages): opens WhatsApp with a prefilled message */
var WHATSAPP_MESSAGE = "Hi Zyvex Team, I'd like to chat about a project.";
function whatsappLink(){
  return 'https://wa.me/' + COMPANY.phone.replace(/\D/g, '') + '?text=' + encodeURIComponent(WHATSAPP_MESSAGE).replace(/'/g, '%27');
}
function whatsappButton(){
  return '<a href="'+whatsappLink()+'" class="btn btn-wa" target="_blank" rel="noopener">'
    + '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/></svg>'
    + 'Chat on WhatsApp</a>';
}

function pageContact(){
  var serviceLinks = SERVICES.map(function(s){
    return '<li><a href="#/contact/'+s.slug+'" style="display:block;border-bottom:1px solid var(--line);padding:10px 0;font-size:14px" class="muted">'+s.name+' ↗</a></li>';
  }).join('');

  return ''
  + '<section class="hero-section">'
  +   gridLines(false)
  +   '<div class="wrap" style="position:relative">'
  +     eyebrow('Get in touch')
  +     sectionTitle('Let&rsquo;s Build Your Next System', '')
  +     '<p class="muted" style="margin-top:24px;max-width:560px;font-size:17px">Reach out to talk through your funnel, your store, or your next system.</p>'
  +     '<div style="margin-top:32px">'+whatsappButton()+'</div>'
  +   '</div>'
  + '</section>'
  + '<section class="section">'
  +   '<div class="wrap grid-contact">'
  +     '<div>'+contactForm()+'</div>'
  +     '<div>'
  +       '<dl class="dl-row">'
  +         '<div><dt>Phone</dt><dd><a href="tel:'+COMPANY.phone.replace(/\s+/g,'')+'" style="color:inherit">'+COMPANY.phone+'</a></dd></div>'
  +         '<div><dt>Email</dt><dd><a href="mailto:'+COMPANY.email+'" style="color:inherit">'+COMPANY.email+'</a></dd></div>'
  +         '<div><dt>Website</dt><dd><a href="https://'+COMPANY.website+'" target="_blank" rel="noopener" style="color:inherit">'+COMPANY.website+'</a></dd></div>'
  +         '<div><dt>Based in</dt><dd>'+COMPANY.city+'</dd></div>'
  +         '<div><dt>Also serving</dt><dd>Clients worldwide</dd></div>'
  +       '</dl>'
  +       '<div style="margin-top:56px">'
  +         '<p class="faint" style="font-size:12px;text-transform:uppercase;letter-spacing:.08em">Have a specific service in mind?</p>'
  +         '<ul class="grid-2" style="margin-top:20px;row-gap:0">'+serviceLinks+'</ul>'
  +       '</div>'
  +     '</div>'
  +   '</div>'
  + '</section>';
}

function pageContactService(service){
  var deliverables = service.deliverables.map(function(d){
    return '<li class="deliverable-row"><span class="dot-bullet"></span>'+d+'</li>';
  }).join('');

  return ''
  + '<section class="hero-section">'
  +   gridLines(false)
  +   '<div class="wrap" style="position:relative">'
  +     '<a href="#/contact" class="tlink" style="color:var(--muted)">← General Contact</a>'
  +     '<div style="margin-top:32px;display:flex;align-items:center;gap:16px">'
  +       iconBox(service.icon, '', 20)
  +       eyebrow(service.name)
  +     '</div>'
  +     '<h2 class="title balance" style="margin-top:24px;max-width:760px">Let&rsquo;s Talk '+service.name+'<span class="dot">.</span></h2>'
  +     '<p class="muted" style="margin-top:24px;max-width:560px;font-size:17px">'+service.summary+'</p>'
  +     '<div style="margin-top:32px">'+whatsappButton()+'</div>'
  +   '</div>'
  + '</section>'
  + '<section class="section">'
  +   '<div class="wrap grid-contact">'
  +     '<div>'+contactForm(service.name)+'</div>'
  +     '<div>'
  +       '<p class="faint" style="font-size:12px;text-transform:uppercase;letter-spacing:.08em">What&rsquo;s included in '+service.name+'</p>'
  +       '<ul style="margin-top:20px;border-top:1px solid var(--line);padding-top:20px;display:flex;flex-direction:column;gap:12px">'+deliverables+'</ul>'
  +       '<div style="margin-top:32px;display:flex;flex-direction:column;gap:12px;font-size:15px">'
  +         '<a href="tel:'+COMPANY.phone.replace(/\s+/g,'')+'" style="color:inherit">'+COMPANY.phone+'</a>'
  +         '<a href="mailto:'+COMPANY.email+'" style="color:inherit">'+COMPANY.email+'</a>'
  +       '</div>'
  +       '<a href="#/services/'+service.slug+'" class="tlink" style="display:inline-block;margin-top:32px;color:var(--muted)">More about '+service.name+' ↗</a>'
  +     '</div>'
  +   '</div>'
  + '</section>';
}

/* ── 404 ──────────────────────────────────────────────────────── */
function page404(){
  return ''
  + '<section class="section" style="text-align:center">'
  +   '<div class="wrap">'
  +     '<h1 class="title balance">Page Not Found<span class="dot">.</span></h1>'
  +     '<p class="muted" style="margin-top:16px">The page you&rsquo;re looking for doesn&rsquo;t exist.</p>'
  +     '<a href="#/" class="btn btn-teal" style="margin-top:32px;display:inline-flex">Back to Home</a>'
  +   '</div>'
  + '</section>';
}

/* ── Router ───────────────────────────────────────────────────── */
function attachHandlers(){
  if(typeof initLpHome === 'function') initLpHome();
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.mobile-nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      nav.classList.toggle('open');
      var isOpen = nav.classList.contains('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
  }
  /* Steps fade in as you reach them. The class is added here, not in the
     markup, so the content is visible to crawlers and with JS disabled. */
  var hwSteps = document.querySelectorAll('.hw-step');
  if(hwSteps.length && 'IntersectionObserver' in window){
    var hwObs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('in'); hwObs.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    Array.prototype.forEach.call(hwSteps, function(el){
      if(el.getBoundingClientRect().top > window.innerHeight * 0.9){
        el.classList.add('reveal');
        hwObs.observe(el);
      }
    });
  }

  var railBtns = document.querySelectorAll('.svc-rail button[data-jump]');
  if(railBtns.length){
    Array.prototype.forEach.call(railBtns, function(b){
      b.addEventListener('click', function(){
        var t = document.getElementById(b.getAttribute('data-jump'));
        if(t) t.scrollIntoView({ behavior:'smooth', block:'start' });
      });
    });
    var svcBlocks = document.querySelectorAll('.svc-block');
    if(svcBlocks.length){
      var ticking = false;
      var syncRail = function(){
        ticking = false;
        var activeId = svcBlocks[0].id;
        for(var i=0;i<svcBlocks.length;i++){
          if(svcBlocks[i].getBoundingClientRect().top <= 160) activeId = svcBlocks[i].id;
        }
        Array.prototype.forEach.call(railBtns, function(b){
          b.classList.toggle('active', b.getAttribute('data-jump') === activeId);
        });
      };
      var onScroll = function(){
        if(!ticking){ ticking = true; window.requestAnimationFrame(syncRail); }
      };
      window.addEventListener('scroll', onScroll, { passive:true });
      window.addEventListener('resize', onScroll);
      syncRail();
    }
  }

  var form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = document.getElementById('cf-name').value;
      var email = document.getElementById('cf-email').value;
      var message = document.getElementById('cf-message').value;
      var serviceName = form.getAttribute('data-service') || '';
      var subject = serviceName ? ('Enquiry: '+serviceName) : 'Enquiry via website';
      var body = message + '\n\n' + name + ' (' + email + ')';
      window.location.href = 'mailto:'+COMPANY.email+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
      var note = document.getElementById('cf-note');
      if(note) note.style.display = 'block';
    });
  }
}

/* Routing works two ways from one source:
   path mode (the real site: /works/wolgan) and hash mode (#/works/wolgan),
   which the Artifact preview uses because it is served from a single URL.
   The production build simply omits the window.__ZYVEX_HASH__ flag.      */
var HASH_MODE = (typeof window !== 'undefined' && window.__ZYVEX_HASH__ === true);
function fixLinks(h){ return HASH_MODE ? h : h.replace(/href="#\//g, 'href="/'); }
function currentPath(){
  if(HASH_MODE) return (window.location.hash || '#/').replace(/^#/, '') || '/';
  return window.location.pathname || '/';
}
function goTo(path, replace){
  if(HASH_MODE){
    if(replace) window.location.replace('#' + path); else window.location.hash = path;
    return;
  }
  if(replace) history.replaceState(null, '', path); else history.pushState(null, '', path);
  router();
}

function router(){
  var path = currentPath();
  var parts = path.split('/').filter(Boolean);
  var root = document.getElementById('root');
  var html = '';
  var title = COMPANY.name;
  var activeHref = '';

  if(parts.length === 0){
    html = pageHome();
    title = COMPANY.name + ' | Consulting, Shopify &amp; Performance Marketing';
  } else if(parts[0] === 'services' && parts.length === 1){
    html = pageServices();
    title = 'Services | ' + COMPANY.name;
    activeHref = '#/services';
  } else if(parts[0] === 'services' && parts.length === 2){
    var svc = SERVICES.filter(function(s){ return s.slug === parts[1]; })[0];
    if(svc){ html = pageServiceDetail(svc); title = svc.name + ' | ' + COMPANY.name; activeHref = '#/services'; }
    else { html = page404(); title = 'Not Found | ' + COMPANY.name; }
  } else if(parts[0] === 'portfolio' || (parts[0] === 'case-studies' && parts.length === 1)) {
    goTo('/works', true); return;
  } else if(parts[0] === 'case-studies' && parts.length === 2){
    goTo('/works/' + parts[1], true); return;
  } else if(parts[0] === 'works' && !HASH_MODE){
    /* The portfolio (/works, /works/<slug>) is static pages imported from
       the landing site (static/works*), so load it as a real page. */
    window.location.replace(path); return;
  } else if(parts[0] === 'works' && parts.length === 1){
    html = pageWorks();
    title = 'Works | ' + COMPANY.name;
    activeHref = '#/works';
  } else if(parts[0] === 'works' && parts[1] === 'expertise'){
    goTo('/works', true); return;
  } else if(parts[0] === 'works' && parts.length === 2){
    var wk = findWork(parts[1]);
    if(wk){ html = pageWorkDetail(wk); title = wk.client + ' | ' + COMPANY.name; activeHref = '#/works'; }
    else { html = page404(); title = 'Not Found | ' + COMPANY.name; }
  } else if(parts[0] === 'our-story') {
    html = pageOurStory();
    title = 'Our Story | ' + COMPANY.name;
    activeHref = '#/our-story';
  } else if(parts[0] === 'blog' && parts.length === 1){
    html = pageBlog();
    title = 'Blog | ' + COMPANY.name;
    activeHref = '#/blog';
  } else if(parts[0] === 'blog' && parts.length === 2){
    var post = BLOG_POSTS.filter(function(p){ return p.slug === parts[1]; })[0];
    if(post){ html = pageBlogPost(post); title = post.title + ' | ' + COMPANY.name; activeHref = '#/blog'; }
    else { html = page404(); title = 'Not Found | ' + COMPANY.name; }
  } else if(parts[0] === 'contact' && parts.length === 1){
    html = pageContact();
    title = 'Contact | ' + COMPANY.name;
    activeHref = '#/contact';
  } else if(parts[0] === 'contact' && parts.length === 2){
    var svc2 = SERVICES.filter(function(s){ return s.slug === parts[1]; })[0];
    if(svc2){ html = pageContactService(svc2); title = 'Contact | ' + svc2.name + ' | ' + COMPANY.name; activeHref = '#/contact'; }
    else { html = page404(); title = 'Not Found | ' + COMPANY.name; }
  } else {
    html = page404();
    title = 'Not Found | ' + COMPANY.name;
  }

  document.title = detext(title);
  root.innerHTML = fixLinks(renderHeader(activeHref) + '<main>' + html + '</main>' + renderFooter());
  window.scrollTo(0, 0);
  attachHandlers();
}

window.addEventListener('hashchange', router);
window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', router);

/* In path mode, internal links are real hrefs that crawlers can follow,
   and clicks are intercepted so navigation stays instant. */
document.addEventListener('click', function(e){
  if(HASH_MODE) return;
  if(e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  var a = e.target && e.target.closest ? e.target.closest('a') : null;
  if(!a) return;
  var href = a.getAttribute('href');
  if(!href || href.charAt(0) !== '/' || a.getAttribute('target') === '_blank' || a.hasAttribute('download')) return;
  if(/^\/works(\/|$|#|\?)/.test(href)) return;   /* static portfolio pages: full page load */
  e.preventDefault();
  if(href !== currentPath()) goTo(href);
});