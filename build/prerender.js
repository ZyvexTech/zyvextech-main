const fs=require('fs'), vm=require('vm'), path=require('path');
const OUT=process.env.DIST_DIR || path.join(__dirname, '..', 'dist');
const SITE='https://www.zyvextech.co';

// ── load the app in a stubbed window ──────────────────────────────────
const appJsPath=path.join(__dirname, 'app.js');
const code=fs.readFileSync(appJsPath,'utf8');
const ctx={window:{addEventListener(){},location:{hash:'',pathname:'/'},scrollTo(){},requestAnimationFrame(){},history:{}},
  history:{}, document:{getElementById(){return null},querySelector(){return null},querySelectorAll(){return []},addEventListener(){}},console};
ctx.globalThis=ctx; vm.createContext(ctx); vm.runInContext(code,ctx);
const C=ctx;

const esc=t=>String(t==null?'':t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const ENT={amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",rsquo:'\u2019',lsquo:'\u2018',ldquo:'\u201c',rdquo:'\u201d',mdash:'\u2014',ndash:'\u2013',hellip:'\u2026',nbsp:' ',middot:'\u00b7',times:'\u00d7'};
const plain=t=>String(t||'')
  .replace(/<[^>]*>/g,'')
  .replace(/&#(\d+);/g,(m,d)=>String.fromCodePoint(+d))
  .replace(/&#x([0-9a-f]+);/gi,(m,h)=>String.fromCodePoint(parseInt(h,16)))
  .replace(/&([a-z]+);/gi,(m,n)=>ENT[n]!==undefined?ENT[n]:m)
  .replace(/\s+/g,' ').trim();
const clip=(t,n)=>{t=plain(t); return t.length>n ? t.slice(0,n-1).replace(/[\s,;:.]+\S*$/,'')+'…' : t;};

// ── every route the site has ──────────────────────────────────────────
const routes=[];
const add=(p,title,desc,body,active,img)=>routes.push({p,title,desc,body,active,img});

add('/', C.COMPANY.name+' | Consulting, Shopify & Performance Marketing',
  C.COMPANY.tagline, C.pageHome(), '');
add('/services', 'Services | '+C.COMPANY.name,
  'A connected suite of consulting, implementation and performance marketing services | from the first process audit to a fully wired growth system.',
  C.pageServices('all'), '/services');
C.SERVICES.forEach(s=>add('/services/'+s.slug, s.name+' | '+C.COMPANY.name, s.summary,
  C.pageServiceDetail(s), '/services'));

add('/works', 'Works | '+C.COMPANY.name,
  'The stores, funnels and campaigns behind the numbers | and what we actually did on each one.',
  C.pageWorks(), '/works');
C.WORKS.forEach(w=>add('/works/'+w.slug, w.client+' | '+C.COMPANY.name, w.summary,
  C.pageWorkDetail(w), '/works', C.workImg(w.slug,'cover')));

add('/our-story', 'Our Story | '+C.COMPANY.name, C.COMPANY.positioning, C.pageOurStory(), '/our-story');
add('/blog', 'Blog | '+C.COMPANY.name,
  'Practical writing on Shopify, performance marketing, SEO and the systems behind reliable growth.',
  C.pageBlog(), '/blog');
C.BLOG_POSTS.forEach(b=>add('/blog/'+b.slug, b.title+' | '+C.COMPANY.name, b.excerpt,
  C.pageBlogPost(b), '/blog', (C.BLOG_IMAGES[b.slug]||{}).cover));

add('/contact', 'Contact | '+C.COMPANY.name,
  'Talk to us about your store, your funnel or your next project.', C.pageContact(), '/contact');
C.SERVICES.forEach(s=>add('/contact/'+s.slug, 'Contact | '+s.name+' | '+C.COMPANY.name,
  'Talk to us about '+plain(s.name)+'. '+plain(s.summary), C.pageContactService(s), '/contact'));

add('/404', 'Not Found | '+C.COMPANY.name, 'That page could not be found.', C.page404(), '');

// app.css / app.js keep fixed names, so every page links them with a content
// hash (?v=...). /assets/ is cached as immutable for a year; without this a
// returning visitor keeps running the old app.js after a deploy.
const crypto=require('crypto');
const ver=f=>crypto.createHash('sha1').update(fs.readFileSync(path.join(OUT,'assets',f))).digest('hex').slice(0,10);
const CSS_V=ver('app.css'), JS_V=ver('app.js');

// ── write a real HTML file per route ──────────────────────────────────
const tpl=({p,title,desc,body,active,img})=>{
  const url=SITE+(p==='/'?'/':p);
  const ogimg=img && img.indexOf('assets/')===0 ? SITE+'/'+img : SITE+'/assets/logo.png';
  const doc=C.fixLinks(C.renderHeader(active?('#'+active):'')+'<main>'+body+'</main>'+C.renderFooter());
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#ffffff">
<title>${esc(plain(title))}</title>
<meta name="description" content="${esc(clip(desc,158))}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Zyvex Tech">
<meta property="og:title" content="${esc(plain(title))}">
<meta property="og:description" content="${esc(clip(desc,158))}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ogimg}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(plain(title))}">
<meta name="twitter:description" content="${esc(clip(desc,158))}">
<meta name="twitter:image" content="${ogimg}">
<link rel="icon" href="/assets/logo.png" type="image/png">
<link rel="apple-touch-icon" href="/assets/logo.png">
<link rel="stylesheet" href="/assets/app.css?v=${CSS_V}">
<style>html,body{margin:0;padding:0;background:#ffffff}</style>
</head>
<body>
<div id="root">${doc}</div>
<script src="/assets/app.js?v=${JS_V}" defer></script>
</body>
</html>
`;};

// Pages that live in static/ (the imported portfolio) win over the SPA
// version of the same route: they are not prerendered, only listed in the sitemap.
const STATIC_DIR=path.join(__dirname,'..','static');
const staticPaths=[];
(function walk(d){ if(!fs.existsSync(d)) return; for(const f of fs.readdirSync(d)){ const full=path.join(d,f);
  if(fs.statSync(full).isDirectory()){ if(f!=='lp') walk(full); }
  else if(f.endsWith('.html')) staticPaths.push('/'+path.relative(STATIC_DIR,full).replace(/\\/g,'/').replace(/\.html$/,'')); } })(STATIC_DIR);
staticPaths.sort();
for(let i=routes.length-1;i>=0;i--) if(staticPaths.includes(routes[i].p)) routes.splice(i,1);
const sitemapPaths=routes.filter(r=>r.p!=='/404').map(r=>r.p).concat(staticPaths);

// The static pages' header has placeholders for the Services / Contact
// dropdowns; fill them from the same menu data the rest of the site uses.
const ddHtml=key=>C.fixLinks('<div class="zx-dd'+(key==='contact'?' align-right':'')+'">'
  + C.navDropdownTop(key).map(it=>'<a href="'+it.href+'" class="dd-all">'+it.label+'</a>').join('')
  + '<div class="zx-dd-divider"></div>'
  + C.navDropdownItems(key).map(it=>'<a href="'+it.href+'">'+it.label+'</a>').join('') + '</div>');
let filled=0;
for(const sp of staticPaths){
  const f=path.join(OUT, sp.replace(/^\//,'')+'.html');
  if(!fs.existsSync(f)) continue;
  const h=fs.readFileSync(f,'utf8'), out=h.replace(/<!--zx-dropdown:(\w+)-->/g,(m,k)=>ddHtml(k));
  if(out!==h){ fs.writeFileSync(f,out); filled++; }
}

let n=0, bytes=0;
for(const r of routes){
  const file = r.p==='/' ? 'index.html' : r.p.replace(/^\//,'')+'.html';
  const full = path.join(OUT, file);
  fs.mkdirSync(path.dirname(full), {recursive:true});
  const html = tpl(r);
  fs.writeFileSync(full, html);
  n++; bytes += Buffer.byteLength(html);
}
fs.writeFileSync(path.join(OUT,'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  + sitemapPaths.map(p=>`  <url><loc>${SITE+(p==='/'?'/':p)}</loc><priority>${p==='/'?'1.0':(p.split('/').length>2?'0.7':'0.8')}</priority></url>`).join('\n')
  + '\n</urlset>\n');
console.log('pages written:', n, '| static pages:', staticPaths.length, '(menus filled: '+filled+')', '| total html', (bytes/1048576).toFixed(2), 'MB | avg', Math.round(bytes/n/1024), 'KB');
