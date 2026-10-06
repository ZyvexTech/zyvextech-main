# -*- coding: utf-8 -*-
PAGES = r'''
/* ── Works index ──────────────────────────────────────────────── */
function pageWorks(activeKey){
  activeKey = activeKey || 'all';
  var tabs = EXPERTISES.map(function(e){
    return '<button type="button" class="wx-tab'+(e.key === activeKey ? ' active' : '')+'" data-exp="'+e.key+'">'+e.label+'</button>';
  }).join('');

  var cards = WORKS.map(function(w){
    var tags = w.expertise.map(function(k){ return '<span class="wx-tag">'+expertiseLabel(k)+'</span>'; }).join('');
    return ''
    + '<a href="#/works/'+w.slug+'" class="wx-card" data-exp="'+w.expertise.join(' ')+'">'
    +   '<div class="wx-card-media"><img src="'+workImg(w.slug,'cover')+'" alt="'+w.client+'" /></div>'
    +   '<div class="wx-card-body">'
    +     '<div class="wx-tags">'+tags+'</div>'
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
  +     '<p class="muted" style="margin-top:24px;max-width:600px;font-size:17px;line-height:1.6">The stores, funnels and campaigns behind the numbers — and what we actually did on each one.</p>'
  +     '<div style="margin-top:56px">'+statRow(STATS)+'</div>'
  +   '</div>'
  + '</section>'

  + '<section class="section">'
  +   '<div class="wrap">'
  +     '<p class="wx-tabs-label">Filter by expertise</p>'
  +     '<div class="wx-tabs">'+tabs+'</div>'
  +     '<div class="wx-grid">'+cards+'</div>'
  +     '<p class="wx-empty" style="display:none">Nothing published under this expertise yet — <a href="#/contact" style="color:var(--teal2)">talk to us about it</a>.</p>'
  +   '</div>'
  + '</section>'

  + '<section class="section section-b">'
  +   '<div class="wrap">'
  +     eyebrow('Platforms We Work In')
  +     '<div class="grid-3" style="margin-top:40px">'+partners+'</div>'
  +   '</div>'
  + '</section>'
  + ctaSection({ title: "Want to be the next result on this page.", body: "Tell us about your store, your funnel, or your next project — we'll walk you through how we'd approach it." });
}

/* ── Work detail ──────────────────────────────────────────────── */
function workReview(slug){
  var r = WORK_REVIEWS[slug];
  if(!r || !r.quote) return '';
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
      +     '<p class="kicker" style="color:rgba(244,242,236,.72)">The Numbers</p>'
      +     '<div class="wx-stats">' + w.stats.map(function(s){
              return '<div><p class="wx-stat-v">'+s.v+'</p><p class="wx-stat-l">'+s.l+'</p></div>';
            }).join('') + '</div>'
      +   '</div>'
      + '</section>') : '';

    var factsBand = w.facts ? (''
      + '<section class="section-teal">'
      +   gridLines(true)
      +   '<div class="wrap" style="position:relative">'
      +     '<p class="kicker" style="color:rgba(244,242,236,.72)">What We Wired</p>'
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
    +     '<p class="muted" style="margin-top:24px;max-width:620px;font-size:15px;line-height:1.7">None of this came out of a brief emailed over once. It came out of back-to-back sessions with the '+w.client+' team — the part of the work that never shows up in a screenshot.</p>'
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
    +       '<img class="media-inline" src="'+workImg(w.slug,'detail')+'" alt="'+w.client+' store detail" />'
    +     '</div>'
    +   '</div>'
    + '</section>';
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
  + ctaSection({ title: "Want results like this.", body: "Tell us about your store or funnel — we'll walk you through how we'd approach it." });
}
'''
